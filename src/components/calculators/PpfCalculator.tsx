"use client";

import { useMemo, useState } from "react";
import { RangeField, AnimatedStat } from "./Field";
import DonutChart from "./DonutChart";
import ScheduleTable, { type Row } from "./ScheduleTable";
import { formatINR } from "@/lib/format";

export default function PpfCalculator() {
  const [yearly, setYearly] = useState(150000);
  const [rate, setRate] = useState(7.1);
  const [years, setYears] = useState(15);

  const { invested, maturity, interest, schedule } = useMemo(() => {
    let balance = 0;
    const rows: Row[] = [];
    for (let y = 1; y <= years; y++) {
      const opening = balance;
      const yearInterest = (balance + yearly) * (rate / 100);
      balance = (balance + yearly) * (1 + rate / 100);
      rows.push({
        year: String(y),
        opening: formatINR(opening),
        deposit: formatINR(yearly),
        interest: formatINR(yearInterest),
        balance: formatINR(balance),
      });
    }
    const inv = yearly * years;
    return { invested: inv, maturity: balance, interest: balance - inv, schedule: rows };
  }, [yearly, rate, years]);

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-xl border border-ink-200 bg-white p-6">
          <RangeField label="Yearly investment" prefix="Rs. " value={yearly} onChange={setYearly} min={500} max={150000} step={500} />
          <RangeField label="Interest rate" suffix=" %" value={rate} onChange={setRate} min={1} max={10} step={0.1} />
          <RangeField label="Period" suffix=" yrs" value={years} onChange={setYears} min={15} max={50} step={1} />

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
            <AnimatedStat label="Maturity value" value={maturity} format={(n) => formatINR(n)} highlight />
            <AnimatedStat label="Total invested" value={invested} format={(n) => formatINR(n)} />
            <AnimatedStat label="Total interest" value={interest} format={(n) => formatINR(n)} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border border-ink-200 bg-white p-6">
          <DonutChart
            segments={[
              { label: "Invested", value: invested, color: "#ea580c" },
              { label: "Interest", value: interest, color: "#8b5cf6" },
            ]}
            centerValue={formatINR(maturity)}
            centerLabel="Maturity"
          />
        </div>
      </div>

      <ScheduleTable
        title="PPF balance (year by year)"
        columns={[
          { key: "year", label: "Year" },
          { key: "opening", label: "Opening", align: "right" },
          { key: "deposit", label: "Deposit", align: "right" },
          { key: "interest", label: "Interest", align: "right" },
          { key: "balance", label: "Balance", align: "right" },
        ]}
        rows={schedule}
      />
    </div>
  );
}
