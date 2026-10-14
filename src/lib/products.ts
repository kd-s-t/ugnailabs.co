export type Product = {
  name: string;
  blurb: string;
  href?: string;
  image?: string;
  comingSoon?: boolean;
};

export const products: Product[] = [
  {
    name: "LUWAS",
    blurb:
      "DRRM command for barangays and LGUs — field reports, AI triage, and live situation maps.",
    href: "https://luwasph.com",
  },
  {
    name: "Chapter Studio",
    blurb:
      "Story-to-episode production studio. Scripts, AI video models, and long-form assembly.",
    image: "/products/chapter-studio-logo.png",
    comingSoon: true,
  },
  {
    name: "SplitSafe",
    blurb:
      "Trustless escrow and split payments on ICP with ckBTC, milestones, and fast settlement.",
    href: "https://ecyax-oiaaa-aaaai-q323q-cai.icp0.io",
    image: "/products/splitsafe-logo.png",
  },
  {
    name: "X Court Cebu",
    blurb:
      "Pickleball court booking with local payments, tournaments, and multilingual support.",
    href: "https://xcourtcebu.com",
    image: "/products/xcourt-logo.png",
  },
  {
    name: "Yumi's Intimate Abode",
    blurb:
      "Direct-booking stay in Cebu IT Park — availability, check-in, and local payments.",
    href: "https://yumisintimateabode.com",
    image: "/products/yumis-logo.png",
  },
  {
    name: "Siargao Trading Road",
    blurb:
      "B2B marketplace connecting suppliers and stores across Siargao.",
    href: "https://siargao-trading-road-git-main-kd-s-ts-projects.vercel.app",
    image: "/products/siargao-logo.png",
  },
];
