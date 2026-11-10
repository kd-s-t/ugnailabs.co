export type ProductLandingIcon =
  | "shield"
  | "split"
  | "bitcoin"
  | "home"
  | "calendar"
  | "mapPin"
  | "trophy"
  | "users"
  | "radio"
  | "brain"
  | "radar"
  | "store"
  | "truck"
  | "drone"
  | "activity"
  | "clapperboard"
  | "sparkles"
  | "film"
  | "target"
  | "scan"
  | "bird"
  | "search"
  | "building"
  | "fileText"
  | "glasses"
  | "mic"
  | "swords";

export type ProductLanding = {
  slug: string;
  name: string;
  tag: string;
  /** Hero supporting line */
  tagline: string;
  description: string;
  image?: string;
  wideImage?: boolean;
  accent: string;
  accentRgb: string;
  bg: string;
  section: "products" | "lab";
  statusLabel?: string;
  meaning?: string;
  cta?: { label: string; href: string };
  features: Array<{
    icon: ProductLandingIcon;
    title: string;
    detail: string;
  }>;
  closingEyebrow: string;
  closingTitle: string;
  closingBody: string;
};

/** Custom pages own these slugs; kept out of the generic registry. */
export const CUSTOM_PRODUCT_SLUGS = [
  "biri",
  "blacklocust",
  "stateful-ai-video",
] as const;

export const productLandings: ProductLanding[] = [
  {
    slug: "splitsafe",
    name: "SplitSafe",
    tag: "Payments",
    tagline: "Escrow that settles when the work is done.",
    description:
      "Trustless escrow and split payments on ICP with ckBTC and milestone settlement.",
    image: "/products/splitsafe-logo.png",
    wideImage: true,
    accent: "#ff9d42",
    accentRgb: "255, 157, 66",
    bg: "#0a0a0a",
    section: "products",
    cta: {
      label: "Open SplitSafe",
      href: "https://ecyax-oiaaa-aaaai-q323q-cai.icp0.io",
    },
    features: [
      {
        icon: "shield",
        title: "Trustless escrow",
        detail: "Funds lock on-chain until milestones clear. No middleman wallet.",
      },
      {
        icon: "split",
        title: "Split payouts",
        detail: "Divide settlement across contributors when the job is done.",
      },
      {
        icon: "bitcoin",
        title: "ckBTC rails",
        detail: "Settle in ckBTC on ICP with a flow built for real handoffs.",
      },
    ],
    closingEyebrow: "On chain",
    closingTitle: "Pay when the work ships.",
    closingBody:
      "A product of UgnAI Labs Co. Escrow for teams that will not wait on a bank to mediate.",
  },
  {
    slug: "yumis-intimate-abode",
    name: "Yumi's Intimate Abode",
    tag: "Hospitality",
    tagline: "A stay in Cebu IT Park, booked direct.",
    description:
      "Direct-booking stay in Cebu IT Park: availability, check-in, and local payments.",
    image: "/products/yumis-logo.png",
    accent: "#7ec8e3",
    accentRgb: "126, 200, 227",
    bg: "#081018",
    section: "products",
    cta: {
      label: "Book a stay",
      href: "https://yumisintimateabode.com",
    },
    features: [
      {
        icon: "calendar",
        title: "Availability",
        detail: "See open nights and hold a date without the OTA cut.",
      },
      {
        icon: "home",
        title: "Check-in ready",
        detail: "Guest flow built for a real apartment stay in IT Park.",
      },
      {
        icon: "mapPin",
        title: "Local payments",
        detail: "Pay the way guests here already pay. Less friction at the door.",
      },
    ],
    closingEyebrow: "Hospitality",
    closingTitle: "Home for the night. Direct.",
    closingBody:
      "A product of UgnAI Labs Co. Named for Yumi, watching the skyline with you.",
  },
  {
    slug: "x-court-cebu",
    name: "X Court Cebu",
    tag: "Sports",
    tagline: "Book the court. Play the night.",
    description:
      "Pickleball court booking with local payments, tournaments, and multilingual support.",
    image: "/products/xcourt-logo.png",
    wideImage: true,
    accent: "#e31e24",
    accentRgb: "227, 30, 36",
    bg: "#0a0a0a",
    section: "products",
    cta: {
      label: "Open X Court Cebu",
      href: "https://xcourtcebu.com",
    },
    features: [
      {
        icon: "calendar",
        title: "Court booking",
        detail: "Reserve pads, see slots, show up ready to play.",
      },
      {
        icon: "trophy",
        title: "Tournaments",
        detail: "Draws, brackets, and event nights on the same platform.",
      },
      {
        icon: "users",
        title: "Multilingual",
        detail: "English, Filipino, and Cebuano for players across the city.",
      },
    ],
    closingEyebrow: "Sports",
    closingTitle: "Cebu's pickleball home base.",
    closingBody:
      "A product of UgnAI Labs Co. Courts, payments, and community in one place.",
  },
  {
    slug: "ugnai",
    name: "UGNAI",
    tag: "DRRM",
    meaning: "Unified Guidance for Needs, Alerts & Incidents",
    tagline: "Command for the barangay when minutes matter.",
    description:
      "Command for barangays and LGUs: field reports, AI triage, and live situation maps.",
    accent: "#c72929",
    accentRgb: "199, 41, 41",
    bg: "#100808",
    section: "lab",
    statusLabel: "Paused",
    features: [
      {
        icon: "radio",
        title: "Field reports",
        detail: "Push incidents from the ground up into one command view.",
      },
      {
        icon: "brain",
        title: "AI triage",
        detail: "Sort noise from signal so responders see what needs them first.",
      },
      {
        icon: "radar",
        title: "Situation maps",
        detail: "Live geography of needs, alerts, and active responses.",
      },
    ],
    closingEyebrow: "DRRM",
    closingTitle: "Guidance when the island needs it.",
    closingBody:
      "A product of UgnAI Labs Co. Built for LGUs and barangays under pressure.",
  },
  {
    slug: "siargao-trading-road",
    name: "Siargao Trading Road",
    tag: "Commerce",
    tagline: "Island supply, connected end to end.",
    description:
      "B2B marketplace connecting suppliers and stores across Siargao.",
    image: "/products/siargao-logo.png",
    wideImage: true,
    accent: "#54b8c5",
    accentRgb: "84, 184, 197",
    bg: "#070b12",
    section: "products",
    cta: {
      label: "Open marketplace",
      href: "https://siargao-trading-road-git-main-kd-s-ts-projects.vercel.app",
    },
    features: [
      {
        icon: "store",
        title: "Stores & suppliers",
        detail: "Match island retailers with the people who stock them.",
      },
      {
        icon: "truck",
        title: "Trading road",
        detail: "Orders that travel the real routes across Siargao.",
      },
      {
        icon: "users",
        title: "B2B first",
        detail: "Built for wholesale handoffs, not tourist checkout noise.",
      },
    ],
    closingEyebrow: "Commerce",
    closingTitle: "The road that restocks the island.",
    closingBody:
      "A product of UgnAI Labs Co. Marketplace rails for Siargao trade.",
  },
  {
    slug: "neuropilot",
    name: "NeuroPilot",
    tag: "BCI",
    tagline: "Fly with thought. Train the signal.",
    description:
      "EEG brainwave control for drones and robots. Train patterns, bind actions, fly with thought.",
    image: "/products/neuropilot-mark.png",
    accent: "#6ec8ff",
    accentRgb: "110, 200, 255",
    bg: "#070b12",
    section: "lab",
    statusLabel: "Paused",
    features: [
      {
        icon: "activity",
        title: "Train patterns",
        detail: "Capture EEG signatures and teach the system what intent looks like.",
      },
      {
        icon: "drone",
        title: "Bind actions",
        detail: "Map brain states to drone and robot commands.",
      },
      {
        icon: "brain",
        title: "Fly with thought",
        detail: "Hands off. The pilot is the signal.",
      },
    ],
    closingEyebrow: "BCI",
    closingTitle: "The mind as remote.",
    closingBody:
      "A product of UgnAI Labs Co. Lab build for brain-computer flight and robotics.",
  },
  {
    slug: "chapter-studio",
    name: "Chapter Studio",
    tag: "Creative",
    tagline: "Story in. Episode out.",
    description:
      "Story-to-episode production. Scripts, AI video models, and long-form assembly.",
    image: "/products/chapter-studio-logo.png",
    wideImage: true,
    accent: "#c00000",
    accentRgb: "192, 0, 0",
    bg: "#0a0606",
    section: "lab",
    statusLabel: "Coming soon",
    features: [
      {
        icon: "fileText",
        title: "Scripts",
        detail: "Write and plan episodes as shootable scene blocks.",
      },
      {
        icon: "sparkles",
        title: "Directed shots",
        detail: "Generate per-beat video with the right model for the moment.",
      },
      {
        icon: "film",
        title: "Long-form assembly",
        detail: "Stitch clips into a continuous chapter, post-house style.",
      },
    ],
    closingEyebrow: "Creative",
    closingTitle: "Chapters, not ten-second demos.",
    closingBody:
      "A product of UgnAI Labs Co. Still cooking in the lab.",
  },
  {
    slug: "clair",
    name: "C.L.A.I.R",
    tag: "Vision",
    meaning: "Court Landing Anticipation · Intent Reader",
    tagline: "See where the ball lands before it does.",
    description:
      "Court Landing Anticipation · Intent Reader. Pickleball ball tracking and ballistic landing prediction.",
    image: "/products/clair-logo.png",
    accent: "#f5e000",
    accentRgb: "245, 224, 0",
    bg: "#0a0a0a",
    section: "lab",
    statusLabel: "Paused",
    features: [
      {
        icon: "scan",
        title: "Ball tracking",
        detail: "Follow the pickleball through the rally in real time.",
      },
      {
        icon: "target",
        title: "Landing prediction",
        detail: "Ballistic estimate of where it drops on the court.",
      },
      {
        icon: "radar",
        title: "Intent read",
        detail: "Anticipation layered on top of raw trajectory.",
      },
    ],
    closingEyebrow: "Vision",
    closingTitle: "Anticipation on the court.",
    closingBody:
      "A product of UgnAI Labs Co. Lab vision for pickleball flight paths.",
  },
  {
    slug: "hackles",
    name: "Hackles",
    tag: "iOS",
    tagline: "Yards, birds, and biodata on the wrist.",
    description:
      "Wristband-based gamefowl registry. Yards, biodata, search, and Premium on iPhone.",
    image: "/products/hackles-logo.png",
    accent: "#ff6a1a",
    accentRgb: "255, 106, 26",
    bg: "#0c0806",
    section: "lab",
    statusLabel: "Paused",
    features: [
      {
        icon: "bird",
        title: "Registry",
        detail: "Track gamefowl identity and yard membership on device.",
      },
      {
        icon: "fileText",
        title: "Biodata",
        detail: "Keep lineage and notes where breeders actually look.",
      },
      {
        icon: "search",
        title: "Search & Premium",
        detail: "Find birds fast. Unlock deeper tools when you need them.",
      },
    ],
    closingEyebrow: "iOS",
    closingTitle: "The yard in your pocket.",
    closingBody:
      "A product of UgnAI Labs Co. Native iPhone registry for gamefowl yards.",
  },
  {
    slug: "panimalay",
    name: "Panimalay",
    tag: "HOA",
    tagline: "Home, community, one portal.",
    description:
      "Condo and HOA portal for residents and officers. First community: Belize North, Consolacion.",
    image: "/products/panimalay-logo.png",
    accent: "#3db8a8",
    accentRgb: "61, 184, 168",
    bg: "#070f10",
    section: "lab",
    statusLabel: "Paused",
    features: [
      {
        icon: "building",
        title: "Residents",
        detail: "Notices, requests, and home life without the group chat chaos.",
      },
      {
        icon: "users",
        title: "Officers",
        detail: "Tools for the people who run the association day to day.",
      },
      {
        icon: "home",
        title: "Belize North first",
        detail: "Starting in Consolacion, then growing community by community.",
      },
    ],
    closingEyebrow: "HOA",
    closingTitle: "Where the household meets the hall.",
    closingBody:
      "A product of UgnAI Labs Co. Condo and HOA software with a Filipino name for home.",
  },
  {
    slug: "solo-leveling",
    name: "Solo Leveling",
    tag: "AR HUD",
    tagline: "SYSTEM quests over live video.",
    description:
      "SYSTEM quest HUD over live video. Voice add/done commands and offline burned overlays.",
    accent: "#f0c14a",
    accentRgb: "240, 193, 74",
    bg: "#0a0906",
    section: "lab",
    statusLabel: "Paused",
    features: [
      {
        icon: "glasses",
        title: "Live HUD",
        detail: "Quest UI layered on the camera feed like a game system.",
      },
      {
        icon: "mic",
        title: "Voice commands",
        detail: "Add and complete quests without leaving the frame.",
      },
      {
        icon: "film",
        title: "Burned overlays",
        detail: "Export offline video with the SYSTEM chrome baked in.",
      },
    ],
    closingEyebrow: "AR HUD",
    closingTitle: "Level up in the real world.",
    closingBody:
      "A product of UgnAI Labs Co. Lab experiment for quest overlays on life.",
  },
  {
    slug: "x-court-challenger",
    name: "X Court Challenger",
    tag: "iOS",
    tagline: "Tournaments in your hand.",
    description:
      "X Court Cebu tournaments app. Draws, brackets, and live events on the shared xcourtcebu database.",
    image: "/products/challenger-logo.png",
    accent: "#3b82f6",
    accentRgb: "59, 130, 246",
    bg: "#070b12",
    section: "lab",
    statusLabel: "Coming soon",
    features: [
      {
        icon: "swords",
        title: "Draws & brackets",
        detail: "See the path through the event before you step on court.",
      },
      {
        icon: "trophy",
        title: "Live events",
        detail: "Follow match nights as they unfold.",
      },
      {
        icon: "users",
        title: "Shared with X Court",
        detail: "Same xcourtcebu database the booking platform already runs on.",
      },
    ],
    closingEyebrow: "iOS",
    closingTitle: "Challenge accepted.",
    closingBody:
      "A product of UgnAI Labs Co. Companion app for X Court Cebu tournaments.",
  },
];

export function getProductLanding(slug: string) {
  return productLandings.find((p) => p.slug === slug);
}
