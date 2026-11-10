import type { Metadata } from "next";
import { BlackLocustPage } from "@/components/products/blacklocust-page";

export const metadata: Metadata = {
  title: "BlackLocust · UgnAI Labs Co.",
  description:
    "An AI trainer powered by Yolo26. Upload a dataset, train a model, and test it.",
  openGraph: {
    title: "BlackLocust · UgnAI Labs Co.",
    description:
      "An AI trainer powered by Yolo26. Upload. Train. Test.",
    images: ["/products/blacklocust-logo.png"],
  },
};

export default function Page() {
  return <BlackLocustPage />;
}
