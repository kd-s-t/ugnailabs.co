import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Support · Biringham · UgnAI Labs Co.",
  description: "Support contact for Biringham (macOS).",
};

export default function BiringhamSupportPage() {
  return (
    <LegalPage
      title="Biringham Support"
      description="Email for Biringham (macOS) support."
      updated="24 Nov 2026"
      backHref="/products/biringham"
      backLabel="Biringham"
    >
      <LegalSection title="Contact">
        <p>
          <a
            href="mailto:kendantinio@gmail.com"
            className="font-medium text-brand-ink underline-offset-4 hover:underline"
          >
            kendantinio@gmail.com
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
