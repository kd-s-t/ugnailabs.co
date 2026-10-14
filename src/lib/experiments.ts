import type { Product } from "@/lib/products";

export const experiments: Product[] = [
  {
    name: "Offline AI",
    tag: "Local AI",
    blurb:
      "Local chat and video on Apple Silicon. Ollama and Wan2.1, no cloud after models download.",
    image: "/products/offline-ai-mark.png",
    platforms: ["web", "ai"],
  },
  {
    name: "NeuroPilot",
    tag: "BCI",
    blurb:
      "EEG brainwave control for drones and robots. Train patterns, bind actions, fly with thought.",
    image: "/products/neuropilot-mark.png",
    platforms: ["web", "ios", "android", "ai"],
  },
  {
    name: "Chapter Studio",
    tag: "Creative",
    blurb:
      "Story-to-episode production. Scripts, AI video models, and long-form assembly.",
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
    href: "https://www.npmjs.com/package/stateful-ai-video",
    image: "/products/stateful-ai-video-logo.png",
    platforms: ["ai"],
  },
  {
    name: "Hackles",
    tag: "iOS",
    blurb:
      "Wristband-based gamefowl registry. Yards, biodata, search, and Premium on iPhone.",
    href: "https://github.com/kd-s-t/hackles",
    image: "/products/hackles-logo.png",
    platforms: ["ios"],
  },
  {
    name: "Panimalay",
    tag: "HOA",
    blurb:
      "Condo and HOA portal for residents and officers. First community: Belize North, Consolacion.",
    image: "/products/panimalay-logo.png",
    comingSoon: true,
    platforms: ["web"],
  },
  {
    name: "Solo Leveling",
    tag: "AR HUD",
    blurb:
      "SYSTEM quest HUD over live video. Voice add/done commands and offline burned overlays.",
    comingSoon: true,
    platforms: ["ar"],
  },
  {
    name: "X Court Challenger",
    tag: "iOS",
    blurb:
      "X Court Cebu tournaments app. Draws, brackets, and live events on the shared xcourtcebu database.",
    image: "/products/challenger-logo.png",
    comingSoon: true,
    platforms: ["ios"],
  },
];
