"use client";

import { useMemo, useState } from "react";
import { RangeField, AnimatedStat } from "./Field";
import DonutChart from "./DonutChart";
import ScheduleTable, { type Row } from "./ScheduleTable";
import AMCLogos from "./AMCLogos";
import { formatINR } from "@/lib/format";

export default function SipCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);

  const { invested, futureValue, gains, schedule } = useMemo(() => {
    const r = rate / 12 / 100;
    let balance = 0;
    const rows: Row[] = [];
    for (let y = 1; y <= years; y++) {
      for (let m = 0; m < 12; m++) {
        balance = (balance + monthly) * (1 + r);
      }
      const investedSoFar = monthly * 12 * y;
      rows.push({
        year: String(new Date().getFullYear() + y - 1),
        invested: formatINR(investedSoFar),
        value: formatINR(balance),
        gains: formatINR(balance - investedSoFar),
      });
    }
    const inv = monthly * 12 * years;
    return {
      invested: inv,
      futureValue: balance,
      gains: balance - inv,
      schedule: rows,
    };
  }, [monthly, rate, years]);

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-xl border border-ink-200 bg-white p-6">
          <RangeField label="Monthly investment" prefix="Rs. " value={monthly} onChange={setMonthly} min={500} max={200000} step={500} />
          <RangeField label="Expected return" suffix=" %" value={rate} onChange={setRate} min={1} max={25} step={0.5} />
          <RangeField label="Investment period" suffix=" yrs" value={years} onChange={setYears} min={1} max={40} step={1} />

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
            <AnimatedStat label="Future value" value={futureValue} format={(n) => formatINR(n)} highlight />
            <AnimatedStat label="Invested" value={invested} format={(n) => formatINR(n)} />
            <AnimatedStat label="Est. gains" value={gains} format={(n) => formatINR(n)} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border border-ink-200 bg-white p-6">
          <DonutChart
            segments={[
              { label: "Invested", value: invested, color: "#ea580c" },
              { label: "Gains", value: gains, color: "#22c55e" },
            ]}
            centerValue={formatINR(futureValue)}
            centerLabel="Maturity value"
          />
        </div>
      </div>

      <ScheduleTable
        title="Wealth growth (year by year)"
        columns={[
          { key: "year", label: "Year" },
          { key: "invested", label: "Total invested", align: "right" },
          { key: "gains", label: "Gains", align: "right" },
          { key: "value", label: "Value", align: "right" },
        ]}
        rows={schedule}
      />
      <AMCLogos />
    </div>
  );
}
