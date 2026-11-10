"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Check, Copy, Loader2, Upload } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  transcribeAudioFile,
  type TranscriptFormats,
} from "@/lib/browser-transcribe";

const ACCEPT =
  "audio/*,.m4a,.mp3,.wav,.webm,.mp4,.flac,.ogg,.mpeg,.mpga,.oga";

const ALLOWED_EXT = new Set([
  "flac",
  "m4a",
  "mp3",
  "mp4",
  "mpeg",
  "mpga",
  "oga",
  "ogg",
  "wav",
  "webm",
]);

function isAllowedAudio(f: File) {
  if (f.type.startsWith("audio/")) return true;
  if (f.type === "video/mp4" || f.type === "video/webm") return true;
  const i = f.name.lastIndexOf(".");
  if (i < 0) return false;
  return ALLOWED_EXT.has(f.name.slice(i + 1).toLowerCase());
}

type FormatTab = "elevenLabs" | "timed";

const FORMAT_TABS: Array<{
  id: FormatTab;
  label: string;
  hint: string;
}> = [
  {
    id: "elevenLabs",
    label: "ElevenLabs",
    hint: 'Paste into ElevenLabs. Uses <break time="…" /> for pauses.',
  },
  {
    id: "timed",
    label: "Timed",
    hint: "For CapCut / editing. Uses [m:ss] and (pause Xs).",
  },
];

export function TranscribePage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [transcripts, setTranscripts] = useState<TranscriptFormats | null>(
    null,
  );
  const [formatTab, setFormatTab] = useState<FormatTab>("elevenLabs");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [dragging, setDragging] = useState(false);

  function pickFile(next: File | null) {
    if (!next) {
      setFile(null);
      return;
    }
    if (!isAllowedAudio(next)) {
      setError(
        "Unsupported format. Use m4a, mp3, wav, webm, mp4, flac, ogg, or mpeg.",
      );
      return;
    }
    setFile(next);
    setError(null);
    setTranscripts(null);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setTranscripts(null);
    setCopied(false);
    setStatus(null);

    if (!file) {
      setError("Choose an audio file first.");
      return;
    }

    setBusy(true);
    try {
      const result = await transcribeAudioFile(file, setStatus);
      setTranscripts(result);
      setStatus(null);
    } catch (err) {
      setStatus(null);
      setError(err instanceof Error ? err.message : "Transcription failed.");
    } finally {
      setBusy(false);
    }
  }

  async function copyActive() {
    const text = transcripts?.[formatTab];
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  const activeTab =
    FORMAT_TABS.find((tab) => tab.id === formatTab) ?? FORMAT_TABS[0]!;
  const activeText = transcripts?.[formatTab] ?? "";

  return (
    <div className="relative min-h-full bg-background">
      <div className="site-grain" aria-hidden />
      <header className="border-b border-border/70 bg-[rgba(238,243,246,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-5 sm:h-16 sm:px-8">
          <Link href="/" className="transition hover:opacity-80">
            <Logo className="gap-2" markClassName="size-7 sm:size-8" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/tools"
              className="text-sm text-muted-foreground transition hover:text-brand-ink"
            >
              Tools
            </Link>
            <Link
              href="/"
              className="text-sm text-muted-foreground transition hover:text-brand-ink"
            >
              Home
            </Link>
          </div>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-medium tracking-[0.3em] text-brand-blue uppercase">
          Tools
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-brand-ink">
          Transcribe audio
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Drop an audio file. Runs in your browser. You get two outputs:
          ElevenLabs script and a timed CapCut-style transcript. Nothing is
          uploaded.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-5">
          <div>
            <label
              htmlFor="audio-file"
              className="text-sm font-medium text-brand-ink"
            >
              Audio file
            </label>
            <input
              ref={inputRef}
              id="audio-file"
              type="file"
              accept={ACCEPT}
              className="sr-only"
              onChange={(e) => {
                pickFile(e.target.files?.[0] ?? null);
              }}
            />
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              onDragEnter={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragging(true);
              }}
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragging(true);
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragging(false);
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragging(false);
                const dropped = e.dataTransfer.files?.[0] ?? null;
                pickFile(dropped);
              }}
              className={
                dragging
                  ? "mt-2 flex w-full items-center gap-3 rounded-xl border border-dashed border-brand-blue bg-accent/60 px-4 py-5 text-left transition"
                  : "mt-2 flex w-full items-center gap-3 rounded-xl border border-dashed border-border bg-white/80 px-4 py-5 text-left transition hover:border-brand-blue/40 hover:bg-white"
              }
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand-ink">
                <Upload className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-brand-ink">
                  {dragging
                    ? "Drop to upload"
                    : file
                      ? file.name
                      : "Drop audio here, or click to choose"}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {file
                    ? `${(file.size / (1024 * 1024)).toFixed(2)} MB`
                    : "m4a, mp3, wav, webm, mp4"}
                </span>
              </span>
            </button>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={busy || !file}
            className="rounded-md"
          >
            {busy ? (
              <>
                <Loader2
                  data-icon="inline-start"
                  className="size-4 animate-spin"
                />
                {status ?? "Transcribing…"}
              </>
            ) : (
              "Transcribe"
            )}
          </Button>

          {error ? (
            <p
              role="alert"
              className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
            >
              {error}
            </p>
          ) : null}
        </form>

        {transcripts ? (
          <section className="mt-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div
                role="tablist"
                aria-label="Transcript format"
                className="inline-flex rounded-lg border border-border bg-white/80 p-1"
              >
                {FORMAT_TABS.map((tab) => {
                  const selected = formatTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      className={
                        selected
                          ? "rounded-md bg-brand-ink px-3 py-1.5 text-sm font-medium text-white"
                          : "rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-brand-ink"
                      }
                      onClick={() => {
                        setFormatTab(tab.id);
                        setCopied(false);
                      }}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="rounded-md"
                onClick={copyActive}
              >
                {copied ? (
                  <>
                    <Check data-icon="inline-start" className="size-3.5" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy data-icon="inline-start" className="size-3.5" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">{activeTab.hint}</p>
            <pre className="whitespace-pre-wrap rounded-xl border border-border bg-white/80 p-4 text-sm leading-relaxed text-brand-ink">
              {activeText}
            </pre>
          </section>
        ) : null}
      </main>
    </div>
  );
}
