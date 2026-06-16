import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemeFilter from "@/components/SchemeFilter";
import AdUnit from "@/components/AdSense";
import { schemes, schemeCategories } from "@/data/schemes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Government Schemes in India 2026 — Eligibility, Benefits & How to Apply",
  description: "Browse 36+ central and state government schemes across housing, health, agriculture, pensions, education and financial inclusion. Check eligibility free on India Assist.",
  path: "/schemes",
  keywords: ["government schemes India 2026", "sarkari yojana", "PM schemes", "welfare benefits", "eligibility checker"],
});

export default function SchemesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Schemes" }]} />
      <PageHeader
        eyebrow="Government Cluster"
        title="Government Schemes in India 2026"
        description="Explore flagship welfare schemes with clear eligibility, required documents and step-by-step application guidance."
      />

      <div className="container-page pt-8">
        {/* SEO intro — keyword-rich content for crawlers and users */}
        <div className="prose-content mb-8 max-w-3xl rounded-xl border border-ink-100 bg-ink-50/60 p-6">
          <p className="text-ink-700">
            The Indian government runs over 1,000 welfare schemes across central
            ministries and every state. From the{" "}
            <Link href="/schemes/ayushman-bharat-pmjay" className="font-medium text-brand-700 hover:underline">
              Ayushman Bharat health cover of Rs. 5 lakh per family
            </Link>{" "}
            to the{" "}
            <Link href="/schemes/pm-kisan-samman-nidhi" className="font-medium text-brand-700 hover:underline">
              PM-KISAN annual income support for farmers
            </Link>
            , these schemes collectively reach hundreds of millions of
            beneficiaries. The challenge for most citizens is knowing which
            ones they qualify for.
          </p>
          <p className="mt-3 text-ink-700">
            This directory covers the most important central government
            schemes — housing, health, agriculture, pensions, employment,
            women and child welfare, financial inclusion, and education — with
            plain-language eligibility criteria, required documents and
            step-by-step application guides. Use the category filters below or{" "}
            <Link href="/eligibility" className="font-medium text-brand-700 hover:underline">
              check your eligibility in one click
            </Link>
            .
          </p>
          <p className="mt-3 text-sm text-ink-500">
            <strong>Categories covered:</strong>{" "}
            {schemeCategories.join(" · ")}
          </p>
        </div>

        <SchemeFilter schemes={schemes} categories={schemeCategories} />
        <AdUnit />
      </div>
    </>
  );
}
