import type { Metadata } from "next";
import { ToolsPage } from "@/components/tools-page";

export const metadata: Metadata = {
  title: "Tools · UgnAI Labs Co.",
  description: "Internal lab utilities for UgnAI Labs.",
};

export default function ToolsIndexPage() {
  return <ToolsPage />;
}
