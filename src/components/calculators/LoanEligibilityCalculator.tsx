"use client";

import { useMemo, useState } from "react";
import { RangeField, AnimatedStat } from "./Field";
import DonutChart from "./DonutChart";
import LenderRates from "./LenderRates";
import { formatINR } from "@/lib/format";

export default function LoanEligibilityCalculator() {
  const [income, setIncome] = useState(60000);
  const [obligations, setObligations] = useState(8000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(20);
  const [foir, setFoir] = useState(50);

  const { eligibleEmi, eligibleLoan, totalInterest } = useMemo(() => {
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
    const emi = Math.max(maxEmi, 0);
    const interest = Math.max(emi * months - loan, 0);
    return {
      eligibleEmi: emi,
      eligibleLoan: Math.max(loan, 0),
      totalInterest: interest,
    };
  }, [income, obligations, rate, years, foir]);

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-xl border border-ink-200 bg-white p-6">
          <RangeField label="Net monthly income" prefix="Rs. " value={income} onChange={setIncome} min={10000} max={1000000} step={5000} />
          <RangeField label="Existing EMIs / obligations" prefix="Rs. " value={obligations} onChange={setObligations} min={0} max={300000} step={1000} />
          <RangeField label="Interest rate" suffix=" %" value={rate} onChange={setRate} min={1} max={20} step={0.1} />
          <RangeField label="Tenure" suffix=" yrs" value={years} onChange={setYears} min={1} max={30} step={1} />
          <RangeField label="FOIR (income share for EMI)" suffix=" %" value={foir} onChange={setFoir} min={30} max={70} step={1} />

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
            <AnimatedStat label="Eligible loan amount" value={eligibleLoan} format={(n) => formatINR(n)} highlight />
            <AnimatedStat label="Max affordable EMI" value={eligibleEmi} format={(n) => formatINR(n)} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border border-ink-200 bg-white p-6">
          <DonutChart
            segments={[
              { label: "Loan amount", value: eligibleLoan, color: "#ea580c" },
              { label: "Interest over tenure", value: totalInterest, color: "#fdba74" },
            ]}
            centerValue={formatINR(eligibleLoan)}
            centerLabel="Eligible loan"
          />
          <p className="mt-4 text-center text-sm text-ink-600">
            At a FOIR of {foir}% you can service an EMI of about{" "}
            <strong className="text-brand-700">{formatINR(eligibleEmi)}</strong>.
            Actual sanction depends on the lender and your credit profile.
          </p>
        </div>
      </div>
      <LenderRates loanType="home" />
    </div>
  );
}
