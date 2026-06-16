import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import { CalculatorCard } from "@/components/cards";
import { calculators } from "@/data/calculators";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Finance Calculators",
  description:
    "Free EMI, SIP, fixed deposit, PPF, loan eligibility and income tax calculators to plan your money with confidence.",
  path: "/calculators",
  keywords: ["EMI calculator", "SIP calculator", "income tax calculator", "FD calculator"],
});

export default function CalculatorsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Calculators" }]} />
      <PageHeader
        eyebrow="Finance Cluster"
        title="Finance Calculators"
        description="Plan loans, investments and taxes with accurate, instant calculators built for Indian users."
      />
      <div className="container-page py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((c) => (
            <CalculatorCard key={c.slug} item={c} />
          ))}
        </div>
        <AdUnit />
      </div>
    </>
  );
}
