import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import { loanTypes } from "@/data/loans";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Compare Loans in India",
  description:
    "Compare home, personal, education, car, business and gold loans with indicative interest rates, tenures and key features.",
  path: "/loans",
  keywords: ["home loan", "personal loan", "education loan", "compare loans"],
});

export default function LoansPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Loans" }]} />
      <PageHeader
        eyebrow="Finance Cluster"
        title="Compare Loans"
        description="Understand your loan options at a glance, then use our calculators to plan EMIs and check eligibility."
      />
      <div className="container-page py-10">
        <div className="grid gap-5 lg:grid-cols-2">
          {loanTypes.map((loan) => (
            <div key={loan.slug} className="card flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-ink-900">
                  {loan.name}
                </h2>
                <span className="badge whitespace-nowrap">{loan.rateRange}</span>
              </div>
              <p className="mt-2 text-sm text-ink-600">{loan.summary}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink-700">
                {loan.features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-ink-500">
                <span>Tenure: {loan.tenure}</span>
                <span>Best for: {loan.bestFor}</span>
              </div>
              <div className="mt-4 flex gap-2">
                <Link href="/calculators/emi" className="btn-primary">
                  Calculate EMI
                </Link>
                <Link href="/calculators/loan-eligibility" className="btn-secondary">
                  Check eligibility
                </Link>
              </div>
            </div>
          ))}
        </div>
        <AdUnit />
        <p className="mt-6 text-xs text-ink-400">
          Interest rates are indicative and vary by lender, credit profile and
          market conditions. India Assist does not lend money; always verify
          terms with the bank or NBFC before applying.
        </p>
      </div>
    </>
  );
}
