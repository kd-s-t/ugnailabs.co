import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms · UgnAI Labs Co.",
  description:
    "Terms of use for the UgnAI Labs Co. company website and business inquiries.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      description="Terms of use for the UgnAI Labs Co. company website and business inquiries."
    >
      <LegalSection title="Agreement">
        <p>
          By using ugnailabs.co you agree to these Terms. If you do not agree,
          do not use this site.
        </p>
      </LegalSection>

      <LegalSection title="The site">
        <p>
          This website describes UgnAI Labs Co., our services, products, and
          experiments. Content is for general information. Product availability,
          pricing, and features may change without notice.
        </p>
        <p>
          Separate products and apps may have their own terms of service. Those
          terms control use of those products.
        </p>
      </LegalSection>

      <LegalSection title="No professional advice">
        <p>
          Nothing on this site is legal, financial, medical, or government
          advice. Engage us formally before relying on any proposal or quote.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          Logos, copy, designs, and software references on this site belong to
          UgnAI Labs Co. or their respective owners. You may not copy or reuse
          them without permission, except for fair personal viewing of the site.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Do not misuse contact forms or spam our inboxes</li>
          <li>Do not attempt to disrupt or probe the site without authorization</li>
          <li>Do not misrepresent affiliation with UgnAI Labs Co.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Disclaimer">
        <p>
          The site is provided as is. To the fullest extent allowed by law,
          UgnAI Labs Co. disclaims warranties of merchantability, fitness for a
          particular purpose, and non-infringement.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the fullest extent allowed by law, UgnAI Labs Co. is not liable for
          indirect, incidental, special, consequential, or punitive damages
          arising from use of this site.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update these Terms. Continued use of the site after changes
          means you accept the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these Terms:{" "}
          <a
            href="mailto:kendantinio@gmail.com"
            className="font-medium text-brand-blue underline-offset-2 hover:underline"
          >
            kendantinio@gmail.com
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
