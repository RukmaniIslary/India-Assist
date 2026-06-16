import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import { states, type StateInfo } from "@/data/states";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "State-wise Schemes & Benefits",
  description:
    "Explore government schemes, scholarships and citizen services for every Indian state and union territory.",
  path: "/states",
  keywords: ["state schemes", "state government benefits", "state portals"],
});

const regionOrder: StateInfo["region"][] = [
  "North",
  "South",
  "East",
  "West",
  "Central",
  "North East",
  "Union Territory",
];

export default function StatesPage() {
  const grouped = regionOrder
    .map((region) => ({
      region,
      items: states.filter((s) => s.region === region),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <Breadcrumbs items={[{ label: "States" }]} />
      <PageHeader
        eyebrow="State Pages"
        title="State-wise Guides"
        description="Dedicated guides to benefits, schemes and services for every Indian state and union territory."
      />
      <div className="container-page space-y-10 py-10">
        {grouped.map((group) => (
          <section key={group.region}>
            <h2 className="mb-4 text-lg font-bold text-ink-900">
              {group.region}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((s) => (
                <Link
                  key={s.slug}
                  href={`/states/${s.slug}`}
                  className="card group"
                >
                  <h3 className="font-semibold text-ink-900 group-hover:text-brand-700">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-500">
                    Capital: {s.capital}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
        <AdUnit />
      </div>
    </>
  );
}
