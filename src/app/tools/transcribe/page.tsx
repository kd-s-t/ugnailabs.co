import type { Metadata } from "next";
import { TranscribePage } from "@/components/transcribe-page";

export const metadata: Metadata = {
  title: "Transcribe · UgnAI Labs Co.",
  description:
    "Upload audio and get a transcript in your browser. Lab tool on ugnailabs.co.",
};

export default function TranscribeToolPage() {
  return <TranscribePage />;
}
