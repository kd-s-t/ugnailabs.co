import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms · Biringham · UgnAI Labs Co.",
  description:
    "Terms of agreement for Biringham, the offline Mac coding AI app from UgnAI Labs Co.",
};

export default function BiriTermsPage() {
  return (
    <LegalPage
      title="Biringham Terms"
      description="Terms of agreement for Biringham (macOS). By downloading, installing, or using Biringham, you agree to these Terms."
      updated="24 Nov 2026"
      backHref="/products/biringham"
      backLabel="Biringham"
    >
      <LegalSection title="1. License">
        <p>
          Subject to payment (if required) and these Terms, we grant you a
          personal, non-exclusive, non-transferable license to install and use
          Biringham on Macs you own or control.
        </p>
        <p>
          Payment, pricing, refunds, and purchase records are managed by Apple
          through the Mac App Store (StoreKit). We do not run our own checkout
          or license server. The purchase is a one-time app fee of{" "}
          <span className="font-medium text-brand-ink">USD $99</span>. It
          includes one year of app updates from the date of purchase. After that
          year you may keep using the last version you installed. Further app
          updates require a{" "}
          <span className="font-medium text-brand-ink">USD $20</span> update
          purchase via the App Store (each covers one additional year of
          updates). This is not a promise of cloud services or model hosting.
        </p>
        <p>
          You may not: rent, sublicense, reverse engineer (except where
          forbidden restrictions are not allowed by law), or redistribute
          Biringham.
        </p>
      </LegalSection>

      <LegalSection title="2. Price">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            App (one-time):{" "}
            <span className="font-medium text-brand-ink">USD $99</span> (or the
            App Store price)
          </li>
          <li>
            Updates after year 1:{" "}
            <span className="font-medium text-brand-ink">USD $20</span> per year
            of updates
          </li>
        </ul>
        <p>
          Taxes may apply. Billing and refunds follow Apple&apos;s App Store
          policy; contact Apple for purchase support.
        </p>
      </LegalSection>

      <LegalSection title="3. Offline use">
        <p>
          Biringham is intended to work without our servers. You are responsible
          for installing and running local model software (for example Ollama),
          disk space, and power.
        </p>
      </LegalSection>

      <LegalSection title="4. Your content">
        <p>
          You keep all rights to your code, files, and prompts. You are
          responsible for backups and for any use of AI output (including
          mistakes, insecure code, or license conflicts in generated text).
        </p>
      </LegalSection>

      <LegalSection title="5. Third-party models and tools">
        <p>
          Models and runtimes are separate products. Their licenses, safety
          filters, and availability are not controlled by UgnAI Labs Co. We are
          not liable for third-party model behavior or downtime of tools you
          install.
        </p>
      </LegalSection>

      <LegalSection title="6. No warranty">
        <p>
          Biringham is provided &quot;as is&quot;. We disclaim warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement to the fullest extent allowed by law. Local AI output
          may be wrong or unsafe; review before you ship.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitation of liability">
        <p>
          To the fullest extent allowed by law, UgnAI Labs Co. is not liable for
          indirect, incidental, special, consequential, or lost-profit damages,
          or for data loss, arising from use of Biringham. Our total liability
          for any claim is limited to the amount you paid us for Biringham in
          the twelve months before the claim (or USD $99 if you paid that list
          price once).
        </p>
      </LegalSection>

      <LegalSection title="8. Acceptable use">
        <p>
          You must not use Biringham to violate law, infringe others&apos;
          rights, or attack systems you are not authorized to use. You must
          comply with export and sanctions rules that apply to you.
        </p>
      </LegalSection>

      <LegalSection title="9. Termination">
        <p>
          If you breach these Terms, your license ends. Sections that should
          survive (ownership, disclaimer, liability, governing topics) survive
          termination. Deleting the app does not entitle you to a refund except
          under the seller&apos;s rules.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes">
        <p>
          We may update these Terms for new versions of Biringham. Material
          changes will update the effective date. If you do not agree, stop
          using Biringham.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact">
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
            href="/products/biringham/privacy"
            className="font-medium text-brand-blue underline-offset-2 hover:underline"
          >
            Privacy
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

      <LegalSection title="12. Agreement">
        <p>
          Using Biringham means you also acknowledge the{" "}
          <Link
            href="/products/biringham/privacy"
            className="font-medium text-brand-blue underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
