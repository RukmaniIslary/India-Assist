"use client";

import { useMemo, useState } from "react";
import { RangeField, AnimatedStat } from "./Field";
import DonutChart from "./DonutChart";
import ScheduleTable, { type Row } from "./ScheduleTable";
import LenderRates from "./LenderRates";
import { formatINR } from "@/lib/format";

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const { emi, totalInterest, totalPayment, schedule } = useMemo(() => {
    const months = years * 12;
    const monthlyRate = rate / 12 / 100;
    const e =
      monthlyRate === 0
        ? principal / months
        : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);

    // Build year-by-year amortisation schedule.
    let balance = principal;
    const rows: Row[] = [];
    for (let y = 1; y <= years; y++) {
      let yearInterest = 0;
      let yearPrincipal = 0;
      for (let m = 0; m < 12; m++) {
        const interest = balance * monthlyRate;
        let principalPaid = e - interest;
        if (principalPaid > balance) principalPaid = balance;
        balance -= principalPaid;
        yearInterest += interest;
        yearPrincipal += principalPaid;
        if (balance <= 0) break;
      }
      const paidSoFar = principal - balance;
      rows.push({
        year: String(new Date().getFullYear() + y - 1),
        principal: formatINR(yearPrincipal),
        interest: formatINR(yearInterest),
        balance: formatINR(Math.max(balance, 0)),
        loanPaid: `${Math.round((paidSoFar / principal) * 100)}%`,
      });
      if (balance <= 0) break;
    }

    const total = e * months;
    return {
      emi: e,
      totalInterest: total - principal,
      totalPayment: total,
      schedule: rows,
    };
  }, [principal, rate, years]);

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-xl border border-ink-200 bg-white p-6">
          <RangeField label="Loan amount" prefix="Rs. " value={principal} onChange={setPrincipal} min={50000} max={20000000} step={50000} />
          <RangeField label="Interest rate" suffix=" %" value={rate} onChange={setRate} min={1} max={20} step={0.1} />
          <RangeField label="Loan tenure" suffix=" yrs" value={years} onChange={setYears} min={1} max={30} step={1} />

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
            <AnimatedStat label="Monthly EMI" value={emi} format={(n) => formatINR(n)} highlight />
            <AnimatedStat label="Total interest" value={totalInterest} format={(n) => formatINR(n)} />
            <AnimatedStat label="Total payment" value={totalPayment} format={(n) => formatINR(n)} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border border-ink-200 bg-white p-6">
          <DonutChart
            segments={[
              { label: "Principal", value: principal, color: "#ea580c" },
              { label: "Interest", value: totalInterest, color: "#fdba74" },
            ]}
            centerValue={formatINR(totalPayment)}
            centerLabel="Total payable"
          />
        </div>
      </div>

      <ScheduleTable
        title="Amortisation schedule (year by year)"
        columns={[
          { key: "year", label: "Year" },
          { key: "principal", label: "Principal paid", align: "right" },
          { key: "interest", label: "Interest paid", align: "right" },
          { key: "balance", label: "Balance", align: "right" },
          { key: "loanPaid", label: "Loan paid", align: "right" },
        ]}
        rows={schedule}
      />
      <LenderRates loanType="home" />
    </div>
  );
}
