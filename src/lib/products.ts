export type Product = {
  name: string;
  blurb: string;
  href?: string;
  image?: string;
  /** Wide wordmark (e.g. X Court) instead of square mark. */
  wideImage?: boolean;
  /** Slightly larger wide wordmark slot. */
  wideImageLg?: boolean;
  comingSoon?: boolean;
  /** Badge text when comingSoon (default: Coming soon). */
  statusLabel?: string;
  /** Linked rows show Live unless this is false. */
  live?: boolean;
  tag: string;
  /** Acronym expansion shown under the name. */
  meaning?: string;
  /** Tailwind-friendly accent for mark / hover (e.g. UgnAI red). */
  accent?: "red" | "brand";
  /** Registered / active users. */
  users?: number;
  /** Platform / capability marks shown on the row. */
  platforms?: Array<
    "ios" | "android" | "macos" | "web" | "ai" | "blockchain" | "ar" | "eeg" | "npm"
  >;
};

export const products: Product[] = [
  {
    name: "SplitSafe",
    tag: "Payments",
    blurb:
      "Trustless escrow and split payments on ICP with ckBTC and milestone settlement.",
    href: "/products/splitsafe",
    image: "/products/splitsafe-logo.png",
    wideImage: true,
    wideImageLg: true,
    users: 1,
    platforms: ["web", "blockchain"],
  },
  {
    name: "Yumi's Intimate Abode",
    tag: "Hospitality",
    blurb:
      "Direct-booking stay in Cebu IT Park: availability, check-in, and local payments.",
    href: "/products/yumis-intimate-abode",
    image: "/products/yumis-logo.png",
    users: 2,
    platforms: ["ios", "android", "web"],
  },
  {
    name: "X Court Cebu",
    tag: "Sports",
    blurb:
      "Pickleball court booking with local payments, tournaments, and multilingual support.",
    href: "/products/x-court-cebu",
    image: "/products/xcourt-logo.png",
    wideImage: true,
    users: 407,
    platforms: ["ios", "android", "web", "ai"],
  },
  {
    name: "Siargao Trading Road",
    tag: "Commerce",
    blurb:
      "B2B marketplace connecting suppliers and stores across Siargao.",
    href: "/products/siargao-trading-road",
    image: "/products/siargao-logo.png",
    wideImage: true,
    users: 0,
    platforms: ["android", "web"],
  },
];
