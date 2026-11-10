export type LabTool = {
  name: string;
  slug: string;
  blurb: string;
};

export const tools: LabTool[] = [
  {
    name: "Transcribe",
    slug: "transcribe",
    blurb:
      "Upload audio. Get ElevenLabs script and a timed CapCut transcript.",
  },
  {
    name: "Move-in form",
    slug: "move-in-form",
    blurb:
      "Yumi's Intimate Abode. Fill guest details and download the 38 Park PDF.",
  },
];
