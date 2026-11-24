import type { Metadata } from "next";
import { ConjurePage } from "@/components/products/conjure-page";

export const metadata: Metadata = {
  title: "Conjure · UgnAI Labs Co.",
  description:
    "Native macOS app for offline chat and coding. Your code never leaves the Mac.",
  openGraph: {
    title: "Conjure · UgnAI Labs Co.",
    description:
      "Native macOS app for offline chat and coding. Your code never leaves the Mac.",
    images: ["/products/biri-logo.png"],
  },
};

export default function Page() {
  return <ConjurePage />;
}
