import type { Metadata } from "next";
import { BiriPage } from "@/components/products/biri-page";

export const metadata: Metadata = {
  title: "Biri · UgnAI Labs Co.",
  description:
    "Native macOS app for offline chat and coding. An invisible city of craft. Your code never leaves the Mac.",
  openGraph: {
    title: "Biri · UgnAI Labs Co.",
    description:
      "Native macOS app for offline chat and coding. Your code never leaves the Mac.",
    images: ["/products/biri-logo.png"],
  },
};

export default function Page() {
  return <BiriPage />;
}
