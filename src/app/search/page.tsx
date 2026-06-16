import { Suspense } from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import SearchResults from "@/components/SearchResults";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Search",
  description:
    "Search across government schemes, scholarships, document guides, calculators and articles on India Assist.",
  path: "/search",
});

export default function SearchPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Search" }]} />
      <PageHeader
        title="Search India Assist"
        description="Find schemes, scholarships, documents, calculators and guides in one search."
      />
      <div className="container-page py-10">
        <Suspense
          fallback={
            <p className="text-center text-ink-500">Loading search...</p>
          }
        >
          <SearchResults />
        </Suspense>
        <AdUnit />
      </div>
    </>
  );
}
