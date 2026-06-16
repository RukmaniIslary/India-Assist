import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import { DocumentCard } from "@/components/cards";
import { documents } from "@/data/documents";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Document Application Guides",
  description:
    "Step-by-step guides to apply for PAN, Passport, Aadhaar, income certificate, caste certificate and driving licence in India.",
  path: "/documents",
  keywords: ["PAN card", "passport", "income certificate", "driving licence", "aadhaar"],
});

export default function DocumentsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Documents" }]} />
      <PageHeader
        eyebrow="Documents Cluster"
        title="Document Guides"
        description="Learn exactly what you need and how to apply for India's most important official documents."
      />
      <div className="container-page py-10">
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
