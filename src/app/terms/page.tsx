import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms and conditions governing your use of the India Assist website and its tools.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />
      <PageHeader title="Terms of Service" description="Last updated: January 2026" />
      <div className="container-page prose-content max-w-3xl py-10">
        <p>
          By accessing {siteConfig.domain}, you agree to these terms. If you do
          not agree, please do not use the site.
        </p>
        <h2>Use of the site</h2>
        <p>
          {siteConfig.name} provides information, guides and tools for general
          informational purposes. You agree to use the site lawfully and not to
          misuse, scrape abusively, or disrupt its services.
        </p>
        <h2>No professional advice</h2>
        <p>
          Content on this site does not constitute legal, financial, tax or
          professional advice. Calculator results and eligibility outcomes are
          indicative estimates only. Always verify with official sources and
          qualified professionals before acting.
        </p>
        <h2>Accuracy of information</h2>
        <p>
          We strive to keep information current, but scheme rules, interest
          rates and procedures change frequently. We do not warrant that all
          content is complete, accurate or up to date at all times.
        </p>
        <h2>Intellectual property</h2>
        <p>
          The site design, original content and branding are the property of{" "}
          {siteConfig.name}. Government scheme names and official portals belong
          to their respective authorities.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {siteConfig.name} is not
          liable for any loss arising from reliance on the information or tools
          provided on this site.
        </p>
        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. Continued use of the site
          constitutes acceptance of the revised terms.
        </p>
      </div>
    </>
  );
}
