import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import { DocumentCard } from "@/components/cards";
import { documents } from "@/data/documents";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Document Application Guides India 2026 — PAN, Passport, Aadhaar & More",
  description: "Step-by-step guides to apply for PAN card, passport, Aadhaar, income certificate, caste certificate, driving licence, trade license and GST registration in India.",
  path: "/documents",
  keywords: ["PAN card apply online", "passport apply India", "income certificate", "driving licence", "trade license India 2026"],
});

export default function DocumentsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Documents" }]} />
      <PageHeader
        eyebrow="Documents Cluster"
        title="How to Apply for Government Documents in India 2026"
        description="Step-by-step application guides for India's most essential official documents — online and offline."
      />

      <div className="container-page pt-8">
        {/* SEO intro */}
        <div className="prose-content mb-8 max-w-3xl rounded-xl border border-ink-100 bg-ink-50/60 p-6">
          <p className="text-ink-700">
            Every major life event in India — from opening a bank account and
            filing taxes to applying for a passport or a government scheme —
            requires a specific set of official documents. Getting them can
            feel complicated, but the process is almost always more
            straightforward than it looks once you have the right information.
          </p>
          <p className="mt-3 text-ink-700">
            These guides cover the most-needed documents in India:
            identity proof, financial registration, travel documents, income
            and category certificates, and business licenses. Each guide
            includes who needs it, the documents required, the exact
            application steps, processing time, and the official government
            portal link. New additions include{" "}
            <Link href="/documents/trade-license" className="font-medium text-brand-700 hover:underline">
              trade license
            </Link>
            ,{" "}
            <Link href="/documents/gst-registration" className="font-medium text-brand-700 hover:underline">
              GST registration (GSTIN)
            </Link>
            ,{" "}
            <Link href="/documents/import-export-code" className="font-medium text-brand-700 hover:underline">
              Import Export Code (IEC)
            </Link>
            {" "}and{" "}
            <Link href="/documents/msme-udyam-registration" className="font-medium text-brand-700 hover:underline">
              MSME Udyam Registration
            </Link>
            .
          </p>
          <p className="mt-3 text-sm text-ink-500">
            <strong>Documents covered:</strong>{" "}
            {documents.map((d) => d.name).join(" · ")}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((d) => (
            <DocumentCard key={d.slug} item={d} />
          ))}
        </div>
        <AdUnit />
      </div>
    </>
  );
}
