import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemeFilter from "@/components/SchemeFilter";
import AdUnit from "@/components/AdSense";
import { schemes, schemeCategories } from "@/data/schemes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Government Schemes in India",
  description:
    "Browse central and state government schemes across housing, health, agriculture, pensions, education and financial inclusion with eligibility and how to apply.",
  path: "/schemes",
  keywords: ["government schemes", "welfare schemes", "subsidy", "PM schemes"],
});

export default function SchemesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Schemes" }]} />
      <PageHeader
        eyebrow="Government Cluster"
        title="Government Schemes"
        description="Explore flagship welfare schemes with clear eligibility, required documents and step-by-step application guidance."
      />
      <div className="container-page py-10">
        <SchemeFilter schemes={schemes} categories={schemeCategories} />
        <AdUnit />
      </div>
    </>
  );
}
