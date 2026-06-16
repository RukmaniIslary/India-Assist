"use client";

import { useMemo, useState } from "react";
import { RangeField, AnimatedStat } from "./Field";
import DonutChart from "./DonutChart";
import ScheduleTable, { type Row } from "./ScheduleTable";
import { formatINR } from "@/lib/format";

// Indicative slabs under the new tax regime. Verify current-year slabs
// on the Income Tax Department portal before filing.
const slabs = [
  { from: 0, upTo: 300000, rate: 0 },
  { from: 300000, upTo: 700000, rate: 0.05 },
  { from: 700000, upTo: 1000000, rate: 0.1 },
  { from: 1000000, upTo: 1200000, rate: 0.15 },
  { from: 1200000, upTo: 1500000, rate: 0.2 },
  { from: 1500000, upTo: Infinity, rate: 0.3 },
];

function slabLabel(from: number, upTo: number): string {
  const f = `${(from / 100000).toFixed(from % 100000 === 0 ? 0 : 1)}L`;
  if (upTo === Infinity) return `Above Rs. ${f}`;
  const t = `${(upTo / 100000).toFixed(upTo % 100000 === 0 ? 0 : 1)}L`;
  return `Rs. ${f} – ${t}`;
}

export default function IncomeTaxCalculator() {
  const [gross, setGross] = useState(1200000);
  const [salaried, setSalaried] = useState(true);

  const { taxable, tax, cess, total, takeHome, breakdown } = useMemo(() => {
    const standardDeduction = salaried ? 75000 : 0;
    const taxableIncome = Math.max(gross - standardDeduction, 0);

    let computed = 0;
    const rows: Row[] = [];
    for (const slab of slabs) {
      const slabAmount = Math.max(
        Math.min(taxableIncome, slab.upTo) - slab.from,
        0,
      );
      const slabTax = slabAmount * slab.rate;
      computed += slabTax;
      rows.push({
        slab: slabLabel(slab.from, slab.upTo),
        rate: `${Math.round(slab.rate * 100)}%`,
        taxable: formatINR(slabAmount),
        tax: formatINR(slabTax),
      });
    }

    // Section 87A rebate (indicative): no tax if taxable income <= 7,00,000
    const rebated = taxableIncome <= 700000 ? 0 : computed;
    const healthCess = rebated * 0.04;
    const totalTax = rebated + healthCess;
    return {
      taxable: taxableIncome,
      tax: rebated,
      cess: healthCess,
      total: totalTax,
      takeHome: gross - totalTax,
      breakdown: rows,
    };
  }, [gross, salaried]);

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-xl border border-ink-200 bg-white p-6">
          <RangeField label="Gross annual income" prefix="Rs. " value={gross} onChange={setGross} min={250000} max={5000000} step={25000} />
          <label className="flex items-center gap-3 text-sm font-medium text-ink-700">
            <input
              type="checkbox"
              checked={salaried}
              onChange={(e) => setSalaried(e.target.checked)}
              className="h-4 w-4 accent-brand-600"
            />
            I am salaried (apply Rs. 75,000 standard deduction)
          </label>

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
            <AnimatedStat label="Total tax (incl. cess)" value={total} format={(n) => formatINR(n)} highlight />
            <AnimatedStat label="Taxable income" value={taxable} format={(n) => formatINR(n)} />
            <AnimatedStat label="Take-home" value={takeHome} format={(n) => formatINR(n)} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border border-ink-200 bg-white p-6">
          <DonutChart
            segments={[
              { label: "Take-home", value: takeHome, color: "#22c55e" },
              { label: "Income tax", value: total, color: "#ef4444" },
            ]}
            centerValue={formatINR(total)}
            centerLabel="Total tax"
          />
        </div>
      </div>

      <ScheduleTable
        title="Slab-wise tax breakdown (new regime)"
        defaultVisible={6}
        columns={[
          { key: "slab", label: "Income slab" },
          { key: "rate", label: "Rate", align: "right" },
          { key: "taxable", label: "Taxable here", align: "right" },
          { key: "tax", label: "Tax", align: "right" },
        ]}
        rows={breakdown}
      />

      <p className="rounded-lg border border-ink-200 bg-ink-50 p-4 text-sm text-ink-600">
        This estimate uses indicative new-regime slabs with a Section 87A rebate
        up to Rs. 7 lakh taxable income, plus 4% health &amp; education cess.
        Cess of {formatINR(cess)} is included in the total. Confirm the latest
        slabs on the official Income Tax portal before filing.
      </p>
    </div>
  );
}
