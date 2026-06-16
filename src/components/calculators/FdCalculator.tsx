"use client";

import { useMemo, useState } from "react";
import { RangeField, ResultStat } from "./Field";
import { formatINR } from "@/lib/format";

export default function FdCalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [freq, setFreq] = useState(4); // quarterly compounding

  const { maturity, interest } = useMemo(() => {
    const m = principal * Math.pow(1 + rate / 100 / freq, freq * years);
    return { maturity: m, interest: m - principal };
  }, [principal, rate, years, freq]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-xl border border-ink-200 bg-white p-6">
        <RangeField label="Deposit amount" prefix="Rs." value={principal} onChange={setPrincipal} min={10000} max={10000000} step={10000} />
        <RangeField label="Interest rate" suffix="%" value={rate} onChange={setRate} min={1} max={12} step={0.1} />
        <RangeField label="Tenure" suffix="yrs" value={years} onChange={setYears} min={1} max={10} step={1} />
        <div>
          <label className="text-sm font-medium text-ink-700">
            Compounding frequency
          </label>
          <select
            value={freq}
            onChange={(e) => setFreq(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm outline-none focus:border-brand-400"
          >
            <option value={1}>Annually</option>
            <option value={2}>Half-yearly</option>
            <option value={4}>Quarterly</option>
            <option value={12}>Monthly</option>
          </select>
        </div>
      </div>
      <div className="space-y-4">
        <ResultStat label="Maturity amount" value={formatINR(maturity)} highlight />
        <div className="grid grid-cols-2 gap-4">
          <ResultStat label="Invested" value={formatINR(principal)} />
          <ResultStat label="Interest earned" value={formatINR(interest)} />
        </div>
      </div>
    </div>
  );
}
