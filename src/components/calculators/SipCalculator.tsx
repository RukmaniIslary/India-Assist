"use client";

import { useMemo, useState } from "react";
import { RangeField, ResultStat } from "./Field";
import { formatINR } from "@/lib/format";

export default function SipCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);

  const { invested, futureValue, gains } = useMemo(() => {
    const months = years * 12;
    const r = rate / 12 / 100;
    const fv =
      r === 0
        ? monthly * months
        : monthly * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
    const inv = monthly * months;
    return { invested: inv, futureValue: fv, gains: fv - inv };
  }, [monthly, rate, years]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-xl border border-ink-200 bg-white p-6">
        <RangeField label="Monthly investment" prefix="Rs." value={monthly} onChange={setMonthly} min={500} max={200000} step={500} />
        <RangeField label="Expected return" suffix="%" value={rate} onChange={setRate} min={1} max={25} step={0.5} />
        <RangeField label="Investment period" suffix="yrs" value={years} onChange={setYears} min={1} max={40} step={1} />
      </div>
      <div className="space-y-4">
        <ResultStat label="Estimated value" value={formatINR(futureValue)} highlight />
        <div className="grid grid-cols-2 gap-4">
          <ResultStat label="Invested amount" value={formatINR(invested)} />
          <ResultStat label="Estimated gains" value={formatINR(gains)} />
        </div>
        <div className="rounded-lg border border-ink-200 p-4 text-sm text-ink-600">
          Investing <strong className="text-ink-900">{formatINR(monthly)}</strong>{" "}
          every month for {years} years at {rate}% could grow to{" "}
          <strong className="text-brand-700">{formatINR(futureValue)}</strong>.
        </div>
      </div>
    </div>
  );
}
