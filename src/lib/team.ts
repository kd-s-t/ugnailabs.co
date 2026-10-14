export type Person = {
  name: string;
  role: string;
  focus: string;
  blurb: string;
  showSocial?: boolean;
};

export const team: Person[] = [
  {
    name: "Ken Dan Tinio",
    role: "Fullstack Engineer",
    focus: "All products",
    showSocial: true,
    blurb:
      "Builds across every UgnAI Labs product end to end: web apps, APIs, deploy, and AI wiring.",
  },
  {
    name: "Peter Tibon",
    role: "Fullstack Engineer",
    focus: "SplitSafe",
    blurb:
      "Builds SplitSafe end to end: escrow, split payments, and the product surfaces that keep settlements trustworthy.",
  },
  {
    name: "Don Sebial",
    role: "Product Designer",
    focus: "SplitSafe, LUWAS",
    blurb:
      "UI/UX and graphic design for SplitSafe and LUWAS: brand, layout, and motion so tools stay clear without clutter.",
  },
  {
    name: "Jeanilou Labajo",
    role: "Quality Assurance",
    focus: "LUWAS",
    blurb:
      "QA on LUWAS: regression and field-path checks so citizen and officer flows stay trustworthy before release.",
  },
  {
    name: "Patricia Abrenica",
    role: "IT Application Support",
    focus: "LUWAS",
    blurb:
      "IT application support for LUWAS: acceptance flows, edge cases, and support so what ships matches what the team promised.",
  },
  {
    name: "Khent Dela Paz",
    role: "AI / Machine Learning",
    focus: "LUWAS, Vertex AI",
    blurb:
      "Vertex AI on LUWAS. Trains models on image datasets, including YOLO, so field photos teach the system what to see.",
  },
];
