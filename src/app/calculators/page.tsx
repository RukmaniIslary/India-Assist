import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import { CalculatorCard } from "@/components/cards";
import { calculators } from "@/data/calculators";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free Finance Calculators India 2026 — EMI, SIP, FD, PPF & Tax",
  description: "Free online EMI, SIP, fixed deposit, PPF, loan eligibility and income tax calculators for India 2026. Get instant results and plan your money with confidence.",
  path: "/calculators",
  keywords: ["free EMI calculator India", "SIP calculator", "income tax calculator 2026", "PPF calculator", "FD calculator", "loan eligibility"],
});

export default function CalculatorsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Calculators" }]} />
      <PageHeader
        eyebrow="Finance Cluster"
        title="Free Finance Calculators India 2026"
        description="Plan loans, investments and taxes with accurate, instant calculators built for Indian users."
      />

      <div className="container-page pt-8">
        {/* SEO intro */}
        <div className="prose-content mb-8 max-w-3xl rounded-xl border border-ink-100 bg-ink-50/60 p-6">
          <p className="text-ink-700">
            Making smart financial decisions in India requires knowing the
            real numbers before you commit. Our free calculators cover every
            major personal finance scenario — from working out your{" "}
            <Link href="/calculators/emi" className="font-medium text-brand-700 hover:underline">
              monthly home loan EMI
            </Link>{" "}
            and{" "}
            <Link href="/calculators/sip" className="font-medium text-brand-700 hover:underline">
              SIP maturity value
            </Link>{" "}
            to estimating your{" "}
            <Link href="/calculators/income-tax" className="font-medium text-brand-700 hover:underline">
              income tax liability under the new regime
            </Link>
            .
          </p>
          <p className="mt-3 text-ink-700">
            Each calculator includes interactive sliders, an animated donut
            chart showing your principal versus interest (or invested versus
            gains), and a year-by-year breakdown table. All results are
            instant and completely free — no sign-up required.
          </p>
          <p className="mt-3 text-sm text-ink-500">
            <strong>Available calculators:</strong>{" "}
            EMI · SIP · Fixed Deposit · PPF · Loan Eligibility · Income Tax (New Regime)
          </p>
        </div>

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
