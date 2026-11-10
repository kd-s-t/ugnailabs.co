import type { Metadata } from "next";
import { MoveInFormTool } from "@/components/move-in-form-tool";

export const metadata: Metadata = {
  title: "Move-in form · UgnAI Labs Co.",
  description:
    "Fill and download the 38 Park Avenue move-in form for Yumi's Intimate Abode.",
};

export default function MoveInFormPage() {
  return <MoveInFormTool />;
}
