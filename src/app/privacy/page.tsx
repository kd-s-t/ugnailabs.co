import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy · UgnAI Labs Co.",
  description:
    "How UgnAI Labs Co. handles contact messages, product usage, and business inquiries.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      description="How UgnAI Labs Co. handles contact messages, site visits, and business inquiries."
    >
      <LegalSection title="Who we are">
        <p>
          UgnAI Labs Co. is a software company that builds and operates products
          across web, mobile, blockchain, AI, AR, IoT, and related services. This
          policy covers ugnailabs.co and contact flows on this site.
        </p>
        <p>
          Individual products (for example SplitSafe, X Court Cebu, or L.U.W.A.S)
          may publish their own privacy notices. Where those notices differ, the
          product policy applies to that product.
        </p>
      </LegalSection>

      <LegalSection title="What we collect">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <span className="font-medium text-brand-ink">Contact form:</span>{" "}
            your email and message when you reach out through this site
          </li>
          <li>
            <span className="font-medium text-brand-ink">Site basics:</span>{" "}
            standard server and browser logs such as IP address, user agent, and
            pages requested
          </li>
          <li>
            <span className="font-medium text-brand-ink">Business email:</span>{" "}
            anything you send to our company contact address
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="How we use it">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Reply to inquiries and schedule follow-ups</li>
          <li>Operate, secure, and improve this website</li>
          <li>Comply with legal obligations when required</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </LegalSection>

      <LegalSection title="Sharing">
        <p>
          We may share limited data with processors that help us run email,
          hosting, or analytics, only as needed to provide those services. We
          may disclose information if required by law or to protect UgnAI Labs
          Co., our users, or the public.
        </p>
      </LegalSection>

      <LegalSection title="Retention">
        <p>
          Contact messages are kept as long as needed to handle your request and
          maintain ordinary business records, then deleted or archived under our
          retention practice.
        </p>
      </LegalSection>

      <LegalSection title="Your choices">
        <p>
          Email us to request access, correction, or deletion of contact data we
          hold about you, subject to legal retention needs.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about this policy:{" "}
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
