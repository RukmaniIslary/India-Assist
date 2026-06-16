"use client";

import { useMemo, useState } from "react";
import { RangeField, ResultStat } from "./Field";
import { formatINR } from "@/lib/format";

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const months = years * 12;
    const monthlyRate = rate / 12 / 100;
    if (monthlyRate === 0) {
      const e = principal / months;
      return { emi: e, totalInterest: 0, totalPayment: principal };
    }
    const factor = Math.pow(1 + monthlyRate, months);
    const e = (principal * monthlyRate * factor) / (factor - 1);
    const total = e * months;
    return { emi: e, totalInterest: total - principal, totalPayment: total };
  }, [principal, rate, years]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-xl border border-ink-200 bg-white p-6">
        <RangeField label="Loan amount" prefix="Rs." value={principal} onChange={setPrincipal} min={50000} max={20000000} step={50000} />
        <RangeField label="Interest rate" suffix="%" value={rate} onChange={setRate} min={1} max={20} step={0.1} />
        <RangeField label="Loan tenure" suffix="yrs" value={years} onChange={setYears} min={1} max={30} step={1} />
      </div>
      <div className="space-y-4">
        <ResultStat label="Monthly EMI" value={formatINR(emi)} highlight />
        <div className="grid grid-cols-2 gap-4">
          <ResultStat label="Total interest" value={formatINR(totalInterest)} />
          <ResultStat label="Total payment" value={formatINR(totalPayment)} />
        </div>
        <div className="rounded-lg border border-ink-200 p-4">
          <p className="text-sm text-ink-600">
            Principal is{" "}
            <strong className="text-ink-900">{formatINR(principal)}</strong> and
            you will pay{" "}
            <strong className="text-brand-700">{formatINR(totalInterest)}</strong>{" "}
            in interest over {years} years.
          </p>
          <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-ink-100">
            <div
              className="h-full bg-brand-600"
              style={{ width: `${(principal / totalPayment) * 100}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-ink-500">
            <span>Principal {Math.round((principal / totalPayment) * 100)}%</span>
            <span>Interest {Math.round((totalInterest / totalPayment) * 100)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
