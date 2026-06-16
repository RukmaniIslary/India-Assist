"use client";

import { useMemo, useState } from "react";
import { RangeField, ResultStat } from "./Field";
import { formatINR } from "@/lib/format";

export default function PpfCalculator() {
  const [yearly, setYearly] = useState(150000);
  const [rate, setRate] = useState(7.1);
  const [years, setYears] = useState(15);

  const { invested, maturity, interest } = useMemo(() => {
    let balance = 0;
    for (let i = 0; i < years; i++) {
      balance = (balance + yearly) * (1 + rate / 100);
    }
    const inv = yearly * years;
    return { invested: inv, maturity: balance, interest: balance - inv };
  }, [yearly, rate, years]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-xl border border-ink-200 bg-white p-6">
        <RangeField label="Yearly investment" prefix="Rs." value={yearly} onChange={setYearly} min={500} max={150000} step={500} />
        <RangeField label="Interest rate" suffix="%" value={rate} onChange={setRate} min={1} max={10} step={0.1} />
        <RangeField label="Period" suffix="yrs" value={years} onChange={setYears} min={15} max={50} step={1} />
      </div>
      <div className="space-y-4">
        <ResultStat label="Maturity value" value={formatINR(maturity)} highlight />
        <div className="grid grid-cols-2 gap-4">
          <ResultStat label="Total invested" value={formatINR(invested)} />
          <ResultStat label="Total interest" value={formatINR(interest)} />
        </div>
        <p className="rounded-lg border border-ink-200 p-4 text-sm text-ink-600">
          PPF has a 15-year lock-in and can be extended in blocks of 5 years.
          The annual investment limit is Rs. 1.5 lakh.
        </p>
      </div>
    </div>
  );
}
