"use client";

import { useMemo, useState } from "react";
import { RangeField, ResultStat } from "./Field";
import { formatINR } from "@/lib/format";

// Indicative slabs under the new tax regime. Verify current-year slabs
// on the Income Tax Department portal before filing.
const slabs = [
  { upTo: 300000, rate: 0 },
  { upTo: 700000, rate: 0.05 },
  { upTo: 1000000, rate: 0.1 },
  { upTo: 1200000, rate: 0.15 },
  { upTo: 1500000, rate: 0.2 },
  { upTo: Infinity, rate: 0.3 },
];

export default function IncomeTaxCalculator() {
  const [gross, setGross] = useState(1200000);
  const [salaried, setSalaried] = useState(true);

  const { taxable, tax, cess, total } = useMemo(() => {
    const standardDeduction = salaried ? 75000 : 0;
    const taxableIncome = Math.max(gross - standardDeduction, 0);

    let computed = 0;
    let lower = 0;
    for (const slab of slabs) {
      if (taxableIncome > lower) {
        const slabAmount = Math.min(taxableIncome, slab.upTo) - lower;
        computed += slabAmount * slab.rate;
        lower = slab.upTo;
      } else break;
    }

    // Section 87A rebate (indicative): no tax if taxable income <= 7,00,000
    if (taxableIncome <= 700000) computed = 0;

    const healthCess = computed * 0.04;
    return {
      taxable: taxableIncome,
      tax: computed,
      cess: healthCess,
      total: computed + healthCess,
    };
  }, [gross, salaried]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-xl border border-ink-200 bg-white p-6">
        <RangeField label="Gross annual income" prefix="Rs." value={gross} onChange={setGross} min={250000} max={5000000} step={25000} />
        <label className="flex items-center gap-3 text-sm font-medium text-ink-700">
          <input
            type="checkbox"
            checked={salaried}
            onChange={(e) => setSalaried(e.target.checked)}
            className="h-4 w-4 accent-brand-600"
          />
          I am salaried (apply Rs. 75,000 standard deduction)
        </label>
      </div>
      <div className="space-y-4">
        <ResultStat label="Total tax payable (incl. cess)" value={formatINR(total)} highlight />
        <div className="grid grid-cols-3 gap-4">
          <ResultStat label="Taxable income" value={formatINR(taxable)} />
          <ResultStat label="Income tax" value={formatINR(tax)} />
          <ResultStat label="Health & edu cess" value={formatINR(cess)} />
        </div>
        <p className="rounded-lg border border-ink-200 p-4 text-sm text-ink-600">
          This estimate uses indicative new-regime slabs with a Section 87A
          rebate up to Rs. 7 lakh taxable income. Confirm the latest slabs on
          the official Income Tax portal before filing.
        </p>
      </div>
    </div>
  );
}
