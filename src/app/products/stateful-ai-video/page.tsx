import type { Metadata } from "next";
import { StatefulAiVideoPage } from "@/components/products/stateful-ai-video-page";

export const metadata: Metadata = {
  title: "stateful-ai-video · UgnAI Labs Co.",
  description:
    "Stateful AI video memory for multimodal models. Persist structured watch-state across frames.",
  openGraph: {
    title: "stateful-ai-video · UgnAI Labs Co.",
    description:
      "Sample clips, keep structured JSON memory across steps, adjudicate with multimodal models.",
    images: ["/products/stateful-ai-video-logo.png"],
  },
};

export default function Page() {
  return <StatefulAiVideoPage />;
}
