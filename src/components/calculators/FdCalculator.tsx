"use client";

import { useMemo, useState } from "react";
import { RangeField, AnimatedStat } from "./Field";
import DonutChart from "./DonutChart";
import ScheduleTable, { type Row } from "./ScheduleTable";
import { formatINR } from "@/lib/format";
import { useT } from "@/lib/i18n";

export default function FdCalculator() {
  const t = useT();
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [freq, setFreq] = useState(4); // quarterly compounding

  const { maturity, interest, schedule } = useMemo(() => {
    const rows: Row[] = [];
    for (let y = 1; y <= years; y++) {
      const amount = principal * Math.pow(1 + rate / 100 / freq, freq * y);
      rows.push({
        year: String(new Date().getFullYear() + y - 1),
        opening: formatINR(
          principal * Math.pow(1 + rate / 100 / freq, freq * (y - 1)),
        ),
        interest: formatINR(
          amount - principal * Math.pow(1 + rate / 100 / freq, freq * (y - 1)),
        ),
        value: formatINR(amount),
      });
    }
    const m = principal * Math.pow(1 + rate / 100 / freq, freq * years);
    return { maturity: m, interest: m - principal, schedule: rows };
  }, [principal, rate, years, freq]);

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-xl border border-ink-200 bg-white p-6">
          <RangeField label="Deposit amount" prefix="Rs. " value={principal} onChange={setPrincipal} min={10000} max={10000000} step={10000} />
          <RangeField label="Interest rate" suffix=" %" value={rate} onChange={setRate} min={1} max={12} step={0.1} />
          <RangeField label="Tenure" suffix=" yrs" value={years} onChange={setYears} min={1} max={10} step={1} />
          <div>
            <label className="text-sm font-medium text-ink-700">
              {t("Compounding frequency")}
            </label>
            <select
              value={freq}
              onChange={(e) => setFreq(Number(e.target.value))}
              className="mt-2 w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm outline-none focus:border-brand-400"
            >
              <option value={1}>{t("Annually")}</option>
              <option value={2}>{t("Half-yearly")}</option>
              <option value={4}>{t("Quarterly")}</option>
              <option value={12}>{t("Monthly")}</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
            <AnimatedStat label="Maturity amount" value={maturity} format={(n) => formatINR(n)} highlight />
            <AnimatedStat label="Invested" value={principal} format={(n) => formatINR(n)} />
            <AnimatedStat label="Interest" value={interest} format={(n) => formatINR(n)} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border border-ink-200 bg-white p-6">
          <DonutChart
            segments={[
              { label: "Deposit", value: principal, color: "#ea580c" },
              { label: "Interest", value: interest, color: "#0ea5e9" },
            ]}
            centerValue={formatINR(maturity)}
            centerLabel="Maturity"
          />
        </div>
      </div>

      <ScheduleTable
        title="Growth (year by year)"
        columns={[
          { key: "year", label: "Year" },
          { key: "opening", label: "Opening", align: "right" },
          { key: "interest", label: "Interest", align: "right" },
          { key: "value", label: "Year-end value", align: "right" },
        ]}
        rows={schedule}
      />
    </div>
  );
}
