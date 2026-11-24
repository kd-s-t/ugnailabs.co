import type { Metadata } from "next";
import { BiringhamPage } from "@/components/products/biringham-page";

export const metadata: Metadata = {
  title: "Biringham · UgnAI Labs Co.",
  description:
    "Native macOS app for offline chat and coding. Your code never leaves the Mac.",
  openGraph: {
    title: "Biringham · UgnAI Labs Co.",
    description:
      "Native macOS app for offline chat and coding. Your code never leaves the Mac.",
    images: ["/products/biri-logo.png"],
  },
};

export default function Page() {
  return <BiringhamPage />;
}
