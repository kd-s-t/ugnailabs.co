export type Person = {
  name: string;
  role: string;
  blurb: string;
  showSocial?: boolean;
  linkedin?: string;
};

export const team: Person[] = [
  {
    name: "Ken Dan Tinio",
    role: "Fullstack Engineer",
    showSocial: true,
    blurb:
      "Builds across every UgnAI Labs product end to end: web apps, APIs, deploy, and AI wiring.",
  },
  {
    name: "Peter Tibon",
    role: "Fullstack Engineer",
    linkedin: "https://www.linkedin.com/in/petertibon/",
    blurb:
      "Builds SplitSafe end to end: escrow, split payments, and the product surfaces that keep settlements trustworthy.",
  },
  {
    name: "Don Sebial",
    role: "Product Designer",
    linkedin: "https://www.linkedin.com/in/carl-john-don-sebial-882430187/",
    blurb:
      "UI/UX and graphic design for SplitSafe and UgnAI: brand, layout, and motion so tools stay clear without clutter.",
  },
  {
    name: "Jeanilou Labajo",
    role: "Quality Assurance",
    linkedin: "https://www.linkedin.com/in/jeaniloulabajo/",
    blurb:
      "QA on UgnAI: regression and field-path checks so citizen and officer flows stay trustworthy before release.",
  },
  {
    name: "Patricia Abrenica",
    role: "IT Application Support",
    linkedin: "https://www.linkedin.com/in/patricia-abrenica-272214441/",
    blurb:
      "IT application support for UgnAI: acceptance flows, edge cases, and support so what ships matches what the team promised.",
  },
  {
    name: "Khent Dela Paz",
    role: "AI / Machine Learning",
    linkedin: "https://www.linkedin.com/in/delapazkhent28/",
    blurb:
      "Vertex AI on UgnAI. Trains models on image datasets, including YOLO, so field photos teach the system what to see.",
  },
];
