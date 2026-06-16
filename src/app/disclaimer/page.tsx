import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "Important disclaimer about the information, calculators and government scheme details provided on India Assist.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />
      <PageHeader title="Disclaimer" description="Last updated: January 2026" />
      <div className="container-page prose-content max-w-3xl py-10">
        <h2>Independent portal</h2>
        <p>
          {siteConfig.name} is an independent information platform. We are not
          affiliated with, endorsed by, or representing any government
          department, ministry, bank or financial institution.
        </p>
        <h2>Informational purpose</h2>
        <p>
          All scheme details, eligibility criteria, document procedures and
          calculator results are provided for general informational purposes
          only and are indicative. They may not reflect the latest official
          rules.
        </p>
        <h2>Verify with official sources</h2>
        <p>
          Before applying for any scheme, scholarship, document or financial
          product, always verify the latest eligibility, rates and procedures on
          the relevant official government portal or with the concerned
          authority.
        </p>
        <h2>Financial tools</h2>
        <p>
          Our EMI, SIP, FD, PPF, loan eligibility and income tax calculators
          produce estimates based on the inputs you provide. Actual figures from
          banks, lenders or the Income Tax Department may differ.
        </p>
        <h2>External links</h2>
        <p>
          We link to official and third-party websites for your convenience. We
          do not control and are not responsible for their content or
          availability.
        </p>
      </div>
    </>
  );
}
