import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy · Biringham · UgnAI Labs Co.",
  description:
    "Privacy policy for Biringham, the offline Mac coding AI app from UgnAI Labs Co.",
};

export default function BiriPrivacyPage() {
  return (
    <LegalPage
      title="Biringham Privacy"
      description="How Biringham (macOS) handles data on your Mac. No account. No Biringham cloud for your code."
      updated="24 Nov 2026"
      backHref="/products/biringham"
      backLabel="Biringham"
    >
      <LegalSection title="Summary">
        <p>
          Biringham runs on your Mac. Chats and projects stay on your device.
          There is no account or sign-in. We do not operate a Biringham user
          database or cloud that receives your prompts or code.
        </p>
      </LegalSection>

      <LegalSection title="What Biringham stores on your Mac">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <span className="font-medium text-brand-ink">Chat history</span> —
            app storage on your Mac
          </li>
          <li>
            <span className="font-medium text-brand-ink">Settings</span> — on
            your Mac
          </li>
          <li>
            <span className="font-medium text-brand-ink">
              Open folders / edits
            </span>{" "}
            — your disk, under your control
          </li>
          <li>
            <span className="font-medium text-brand-ink">
              Usage / electricity estimates
            </span>{" "}
            — local only (for example{" "}
            <code className="text-brand-ink">usage.biringham</code> in a
            project)
          </li>
        </ul>
        <p>None of the above is sent to UgnAI Labs Co.</p>
      </LegalSection>

      <LegalSection title="What we do not collect">
        <p>
          No account. We do not sell personal data. The shipping build of
          Biringham does not include third-party analytics SDKs that phone home
          about your prompts or code.
        </p>
      </LegalSection>

      <LegalSection title="Online checks">
        <p>
          When your Mac is online, Biringham may fetch a public version file
          from GitHub. Those requests do not include your chats or project
          files.
        </p>
      </LegalSection>

      <LegalSection title="Third-party software on your machine">
        <p>
          Biringham talks to Ollama (or similar local runtimes) and model files
          you download. Those tools and model providers have their own terms and
          privacy practices. Traffic stays on your Mac unless you configure a
          remote URL or use a model host that leaves your device.
        </p>
      </LegalSection>

      <LegalSection title="Purchases">
        <p>
          If you buy Biringham on the Mac App Store, payment, pricing, refunds,
          and receipts are managed by Apple under Apple&apos;s privacy policy.
          We do not run our own checkout.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          Biringham is a developer tool. It is not directed at children under
          13.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this policy. The effective date above will change when
          we do. Continued use after an update means you accept the revised
          policy.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          UgnAI Labs Co. —{" "}
          <a
            href="mailto:kendantinio@gmail.com"
            className="font-medium text-brand-blue underline-offset-2 hover:underline"
          >
            kendantinio@gmail.com
          </a>
          {" · "}
          <Link
            href="/products/biringham/terms"
            className="font-medium text-brand-blue underline-offset-2 hover:underline"
          >
            Terms
          </Link>
          {" · "}
          <a
            href="https://github.com/kd-s-t/biri/issues"
            className="font-medium text-brand-blue underline-offset-2 hover:underline"
          >
            GitHub Issues
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
