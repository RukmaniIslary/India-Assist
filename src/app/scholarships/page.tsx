import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import { ScholarshipCard } from "@/components/cards";
import { scholarships } from "@/data/scholarships";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Scholarships in India 2026 — National & State Scholarship Directory",
  description: "Complete directory of national and state scholarships for pre-matric, post-matric, undergraduate and postgraduate students in India 2026. Check eligibility & apply free.",
  path: "/scholarships",
  keywords: ["scholarships India 2026", "NSP scholarships", "merit scholarship", "SC ST scholarship", "minority scholarship"],
});

export default function ScholarshipsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Scholarships" }]} />
      <PageHeader
        eyebrow="Scholarship Cluster"
        title="Scholarships in India 2026 — Complete Directory"
        description="National and state scholarship schemes to fund your education — eligibility, amounts and how to apply."
      />

      <div className="container-page pt-8">
        {/* SEO intro */}
        <div className="prose-content mb-8 max-w-3xl rounded-xl border border-ink-100 bg-ink-50/60 p-6">
          <p className="text-ink-700">
            India has hundreds of scholarship schemes for students at every
            level — from Class 1 right through to postgraduate and
            professional programmes. The central government alone funds over
            a dozen major schemes through the{" "}
            <Link href="/scholarships/post-matric-scholarship-sc" className="font-medium text-brand-700 hover:underline">
              National Scholarship Portal (NSP)
            </Link>
            , covering SC, ST, OBC, minority and merit categories. State
            governments add further layers on top.
          </p>
          <p className="mt-3 text-ink-700">
            Most students leave scholarship money on the table not because
            they are ineligible, but because they either do not know the
            schemes exist or miss the deadline. This directory lists every
            major central scholarship with eligibility, benefit amount,
            required documents and direct application links. Use it to find
            the scheme that matches your category, level and income — then
            apply before the window closes.
          </p>
          <p className="mt-3 text-sm text-ink-500">
            <strong>Levels covered:</strong>{" "}
            Pre-Matric · Post-Matric · Undergraduate · Postgraduate ·
            Merit-based · Category-specific (SC/ST/OBC/Minority)
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {scholarships.map((s) => (
            <ScholarshipCard key={s.slug} item={s} />
          ))}
        </div>
        <AdUnit />
      </div>
    </>
  );
}
