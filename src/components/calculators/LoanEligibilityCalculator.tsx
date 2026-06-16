"use client";

import { useMemo, useState } from "react";
import { RangeField, ResultStat } from "./Field";
import { formatINR } from "@/lib/format";

export default function LoanEligibilityCalculator() {
  const [income, setIncome] = useState(60000);
  const [obligations, setObligations] = useState(8000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(20);
  const [foir, setFoir] = useState(50);

  const { eligibleEmi, eligibleLoan } = useMemo(() => {
    const maxEmi = (income * foir) / 100 - obligations;
    const months = years * 12;
    const r = rate / 12 / 100;
    const loan =
      maxEmi <= 0
        ? 0
        : r === 0
          ? maxEmi * months
          : (maxEmi * (Math.pow(1 + r, months) - 1)) /
            (r * Math.pow(1 + r, months));
    return { eligibleEmi: Math.max(maxEmi, 0), eligibleLoan: Math.max(loan, 0) };
  }, [income, obligations, rate, years, foir]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-xl border border-ink-200 bg-white p-6">
        <RangeField label="Net monthly income" prefix="Rs." value={income} onChange={setIncome} min={10000} max={1000000} step={5000} />
        <RangeField label="Existing EMIs / obligations" prefix="Rs." value={obligations} onChange={setObligations} min={0} max={300000} step={1000} />
        <RangeField label="Interest rate" suffix="%" value={rate} onChange={setRate} min={1} max={20} step={0.1} />
        <RangeField label="Tenure" suffix="yrs" value={years} onChange={setYears} min={1} max={30} step={1} />
        <RangeField label="FOIR (income share for EMI)" suffix="%" value={foir} onChange={setFoir} min={30} max={70} step={1} />
      </div>
      <div className="space-y-4">
        <ResultStat label="Eligible loan amount" value={formatINR(eligibleLoan)} highlight />
        <ResultStat label="Maximum affordable EMI" value={formatINR(eligibleEmi)} />
        <div className="rounded-lg border border-ink-200 p-4 text-sm text-ink-600">
          Based on a FOIR of {foir}% and your obligations, you can comfortably
          service an EMI of about{" "}
          <strong className="text-brand-700">{formatINR(eligibleEmi)}</strong>.
          Actual sanction depends on the lender&apos;s policy and your credit
          profile.
        </div>
      </div>
    </div>
  );
}
