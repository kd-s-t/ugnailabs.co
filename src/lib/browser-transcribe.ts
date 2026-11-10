type ProgressCallback = (message: string) => void;

type AsrChunk = {
  text?: string;
  timestamp?: [number | null, number | null];
};

type AsrResult = {
  text?: string;
  chunks?: AsrChunk[];
};

type AsrPipeline = (
  audio: Float32Array | string,
  options?: {
    chunk_length_s?: number;
    stride_length_s?: number;
    return_timestamps?: boolean | "word";
  },
) => Promise<AsrResult | AsrResult[]>;

export type TranscriptFormats = {
  elevenLabs: string;
  timed: string;
};

type SpokenBit = {
  text: string;
  start: number;
  end: number;
};

/** Gaps at or above this (seconds) split lines / become pauses. */
const PAUSE_THRESHOLD_S = 0.6;

/** ElevenLabs break tags stay useful under this length; longer silence → CapCut. */
const MAX_BREAK_S = 3;

let pipelinePromise: Promise<AsrPipeline> | null = null;

async function getPipeline(onProgress?: ProgressCallback): Promise<AsrPipeline> {
  if (!pipelinePromise) {
    onProgress?.("Loading speech model (first time can take a minute)…");
    pipelinePromise = (async () => {
      const { pipeline } = await import("@huggingface/transformers");
      const asr = await pipeline(
        "automatic-speech-recognition",
        "Xenova/whisper-tiny.en",
        {
          progress_callback: (data: { status?: string; progress?: number }) => {
            if (data.status === "progress" && typeof data.progress === "number") {
              onProgress?.(
                `Downloading model… ${Math.min(100, Math.round(data.progress))}%`,
              );
            }
          },
        },
      );
      return asr as AsrPipeline;
    })();
  }
  return pipelinePromise;
}

/** Decode an audio File to mono Float32 PCM at 16 kHz for Whisper. */
async function decodeToMono16k(file: File): Promise<Float32Array> {
  const buffer = await file.arrayBuffer();
  const ctx = new AudioContext();
  try {
    const decoded = await ctx.decodeAudioData(buffer.slice(0));
    const offline = new OfflineAudioContext(
      1,
      Math.ceil(decoded.duration * 16000),
      16000,
    );
    const source = offline.createBufferSource();
    source.buffer = decoded;
    source.connect(offline.destination);
    source.start(0);
    const rendered = await offline.startRendering();
    return rendered.getChannelData(0);
  } finally {
    await ctx.close();
  }
}

function formatClock(seconds: number): string {
  const total = Math.max(0, Math.floor(seconds));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function formatPauseMarker(gapSeconds: number): string {
  const rounded = Math.round(gapSeconds * 10) / 10;
  if (rounded >= 10) return `(pause ${Math.round(rounded)}s)`;
  return `(pause ${rounded.toFixed(1)}s)`;
}

function formatBreak(gapSeconds: number): string {
  const capped = Math.min(MAX_BREAK_S, Math.max(0.1, gapSeconds));
  const rounded = Math.round(capped * 10) / 10;
  const value =
    Number.isInteger(rounded) || Math.abs(rounded - Math.round(rounded)) < 0.05
      ? `${Math.round(rounded)}s`
      : `${rounded.toFixed(1)}s`;
  return `<break time="${value}" />`;
}

function chunksToBits(chunks: AsrChunk[]): SpokenBit[] {
  const bits: SpokenBit[] = [];
  for (const chunk of chunks) {
    const text = chunk.text?.trim();
    if (!text) continue;
    const start = chunk.timestamp?.[0];
    const end = chunk.timestamp?.[1];
    if (typeof start !== "number") continue;
    const endSec = typeof end === "number" && end >= start ? end : start;
    bits.push({ text, start, end: endSec });
  }
  bits.sort((a, b) => a.start - b.start);
  return bits;
}

/**
 * Group consecutive words into spoken phrases.
 * A new phrase starts when the gap after the previous word is a real pause.
 */
function groupIntoPhrases(bits: SpokenBit[]): SpokenBit[] {
  if (bits.length === 0) return [];

  const phrases: SpokenBit[] = [];
  let text = bits[0]!.text;
  let start = bits[0]!.start;
  let end = bits[0]!.end;

  for (let i = 1; i < bits.length; i++) {
    const bit = bits[i]!;
    const gap = bit.start - end;
    if (gap >= PAUSE_THRESHOLD_S) {
      phrases.push({ text: text.trim(), start, end });
      text = bit.text;
      start = bit.start;
      end = bit.end;
      continue;
    }
    text = `${text} ${bit.text}`.replace(/\s+/g, " ");
    end = Math.max(end, bit.end);
  }

  phrases.push({ text: text.trim(), start, end });
  return phrases.filter((p) => p.text);
}

export function formatTranscriptForElevenLabs(phrases: SpokenBit[]): string {
  if (phrases.length === 0) return "";
  const parts: string[] = [phrases[0]!.text];

  for (let i = 1; i < phrases.length; i++) {
    const prev = phrases[i - 1]!;
    const curr = phrases[i]!;
    const gap = curr.start - prev.end;
    if (gap >= PAUSE_THRESHOLD_S) {
      parts.push(formatBreak(gap));
    }
    parts.push(curr.text);
  }

  return parts.join("\n\n").trim();
}

export function formatTranscriptTimed(phrases: SpokenBit[]): string {
  if (phrases.length === 0) return "";
  const lines: string[] = [
    `[${formatClock(phrases[0]!.start)}] ${phrases[0]!.text}`,
  ];

  for (let i = 1; i < phrases.length; i++) {
    const prev = phrases[i - 1]!;
    const curr = phrases[i]!;
    const gap = curr.start - prev.end;
    if (gap >= PAUSE_THRESHOLD_S) {
      lines.push("");
      lines.push(formatPauseMarker(gap));
      lines.push("");
    }
    lines.push(`[${formatClock(curr.start)}] ${curr.text}`);
  }

  return lines.join("\n").trim();
}

export async function transcribeAudioFile(
  file: File,
  onProgress?: ProgressCallback,
): Promise<TranscriptFormats> {
  const audio = await decodeToMono16k(file);
  onProgress?.("Transcribing…");
  const asr = await getPipeline(onProgress);

  // Word timestamps so silence between words becomes real pause markers.
  // Chunk-level timestamps often swallow silence into the previous end time.
  const raw = await asr(audio, {
    chunk_length_s: 30,
    stride_length_s: 5,
    return_timestamps: "word",
  });
  const result = Array.isArray(raw) ? raw[0] : raw;
  if (!result) throw new Error("Empty transcript.");

  const bits = chunksToBits(result.chunks ?? []);
  const phrases = groupIntoPhrases(bits);

  if (phrases.length > 0) {
    return {
      elevenLabs: formatTranscriptForElevenLabs(phrases),
      timed: formatTranscriptTimed(phrases),
    };
  }

  const text = result.text?.trim();
  if (!text) throw new Error("Empty transcript.");
  return { elevenLabs: text, timed: text };
}
