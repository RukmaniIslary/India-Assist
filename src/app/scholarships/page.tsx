import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import { ScholarshipCard } from "@/components/cards";
import { scholarships } from "@/data/scholarships";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Scholarships in India",
  description:
    "A directory of national and state scholarships for pre-matric, post-matric, undergraduate and postgraduate students with eligibility and how to apply.",
  path: "/scholarships",
  keywords: ["scholarships", "student funding", "NSP", "merit scholarship"],
});

export default function ScholarshipsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Scholarships" }]} />
      <PageHeader
        eyebrow="Scholarship Cluster"
        title="Scholarships"
        description="National and state scholarship schemes to fund your education, with eligibility and application guidance."
      />
      <div className="container-page py-10">
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
