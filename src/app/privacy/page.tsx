import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How India Assist collects, uses and protects your information, including the use of cookies and third-party advertising.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <PageHeader title="Privacy Policy" description="Last updated: January 2026" />
      <div className="container-page prose-content max-w-3xl py-10">
        <p>
          {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
          privacy. This policy explains what information we collect and how we
          use it when you visit {siteConfig.domain}.
        </p>
        <h2>Information we collect</h2>
        <p>
          We do not require you to create an account to use our tools. Any
          details you enter into our calculators or eligibility engine are
          processed in your browser and are not stored on our servers. If you
          contact us or subscribe to alerts, we collect the details you provide,
          such as your name and email address.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          We may use cookies and analytics tools to understand how visitors use
          the site so we can improve it. These tools may collect anonymised
          usage data such as pages viewed and approximate location.
        </p>
        <h2>Advertising</h2>
        <p>
          We display ads served by Google, including through Google AdSense.
          Third-party vendors, including Google, use cookies to serve ads based
          on your prior visits to this and other websites. You can opt out of
          personalised advertising by visiting Google&apos;s Ads Settings.
        </p>
        <h2>Third-party links</h2>
        <p>
          Our guides link to official government portals and third-party
          services. We are not responsible for the privacy practices of those
          websites; please review their policies separately.
        </p>
        <h2>Your choices</h2>
        <p>
          You can disable cookies in your browser settings and unsubscribe from
          our emails at any time using the link in each message.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions, email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-brand-700 underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </>
  );
}
