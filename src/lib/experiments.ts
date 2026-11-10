import type { Product } from "@/lib/products";

export const experiments: Product[] = [
  {
    name: "UGNAI",
    tag: "DRRM",
    meaning: "Unified Guidance for Needs, Alerts & Incidents",
    blurb:
      "Command for barangays and LGUs: field reports, AI triage, and live situation maps.",
    href: "/products/ugnai",
    comingSoon: true,
    statusLabel: "Paused",
    accent: "red",
    platforms: ["web", "ai"],
  },
  {
    name: "BlackLocust",
    tag: "Vision",
    blurb:
      "AI trainer powered by Yolo26. Upload a dataset, train a model, and test it.",
    href: "/products/blacklocust",
    live: false,
    image: "/products/blacklocust-logo.png",
    platforms: ["web", "ai"],
  },
  {
    name: "Biri",
    tag: "Local AI",
    blurb:
      "Native macOS app for offline chat and coding. Open a folder, talk to local Ollama models, drop screenshots, track usage per project.",
    href: "/products/biri",
    image: "/products/biri-logo.png",
    comingSoon: true,
    statusLabel: "In development",
    platforms: ["macos", "ai"],
  },
  {
    name: "NeuroPilot",
    tag: "BCI",
    blurb:
      "EEG brainwave control for drones and robots. Train patterns, bind actions, fly with thought.",
    href: "/products/neuropilot",
    image: "/products/neuropilot-mark.png",
    comingSoon: true,
    statusLabel: "Paused",
    platforms: ["web", "ai", "eeg"],
  },
  {
    name: "Chapter Studio",
    tag: "Creative",
    blurb:
      "Story-to-episode production. Scripts, AI video models, and long-form assembly.",
    href: "/products/chapter-studio",
    image: "/products/chapter-studio-logo.png",
    wideImage: true,
    comingSoon: true,
    platforms: ["web", "ai"],
  },
  {
    name: "C.L.A.I.R",
    tag: "Vision",
    blurb:
      "Court Landing Anticipation · Intent Reader. Pickleball ball tracking and ballistic landing prediction.",
    href: "/products/clair",
    image: "/products/clair-logo.png",
    comingSoon: true,
    statusLabel: "Paused",
    platforms: ["ar", "ai"],
  },
  {
    name: "stateful-ai-video",
    tag: "NPM",
    blurb:
      "Stateful AI video memory for multimodal models. Persist structured watch-state across frames.",
    href: "/products/stateful-ai-video",
    image: "/products/stateful-ai-video-logo.png",
    platforms: ["ai", "npm"],
  },
  {
    name: "Hackles",
    tag: "iOS",
    blurb:
      "Wristband-based gamefowl registry. Yards, biodata, search, and Premium on iPhone.",
    href: "/products/hackles",
    image: "/products/hackles-logo.png",
    platforms: ["ios"],
    comingSoon: true,
    statusLabel: "Paused",
  },
  {
    name: "Panimalay",
    tag: "HOA",
    blurb:
      "Condo and HOA portal for residents and officers. First community: Belize North, Consolacion.",
    href: "/products/panimalay",
    image: "/products/panimalay-logo.png",
    comingSoon: true,
    statusLabel: "Paused",
    platforms: ["web"],
  },
  {
    name: "Solo Leveling",
    tag: "AR HUD",
    blurb:
      "SYSTEM quest HUD over live video. Voice add/done commands and offline burned overlays.",
    href: "/products/solo-leveling",
    comingSoon: true,
    statusLabel: "Paused",
    platforms: ["ar"],
  },
  {
    name: "X Court Challenger",
    tag: "iOS",
    blurb:
      "X Court Cebu tournaments app. Draws, brackets, and live events on the shared xcourtcebu database.",
    href: "/products/x-court-challenger",
    image: "/products/challenger-logo.png",
    comingSoon: true,
    platforms: ["ios"],
  },
];
