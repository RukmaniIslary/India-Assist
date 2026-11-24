"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import AdUnit from "@/components/AdUnit";

export default function PPFCalculatorPage() {
  const [yearly, setYearly] = useState(150000);
  const rate = 7.1;
  const [years, setYears] = useState(15);

  const result = useMemo(() => {
    let balance = 0;
    const r = rate / 100;
    for (let i = 0; i < years; i++) {
      balance = (balance + yearly) * (1 + r);
    }
    const invested = yearly * years;
    const interest = balance - invested;
    return { maturity: balance, invested, interest };
  }, [yearly, years]);

  const fmt = (n: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
  const pctInvested = (result.invested / result.maturity) * 100;
  const pctInterest = (result.interest / result.maturity) * 100;

  const R = 70, C = 2 * Math.PI * R;
  const s1 = (pctInvested / 100) * C;
  const s2 = (pctInterest / 100) * C;

  const sliderClass = "w-full h-2 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-md";

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/calculators" className="hover:text-blue-700">Calculators</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">PPF Calculator</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">PPF Calculator</h1>
              <p className="text-gray-600 mt-0.5">Calculate Public Provident Fund maturity amount with tax-free returns</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 space-y-8">
              {/* Yearly Deposit */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Yearly Deposit</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <span className="text-xs text-gray-500 mr-1">Rs</span>
                    <input type="text" value={yearly.toLocaleString("en-IN")} onChange={(e) => { const v = Number(e.target.value.replace(/,/g, "")); if (!isNaN(v) && v >= 500 && v <= 150000) setYearly(v); }} className="w-24 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                  </div>
                </div>
                <input type="range" min={500} max={150000} step={500} value={yearly} onChange={(e) => setYearly(Number(e.target.value))} className={`${sliderClass} bg-indigo-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>500</span><span>1.5L</span></div>
              </div>

              {/* Interest Rate - Fixed */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Interest Rate (Government Fixed)</label>
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg px-3 py-1.5">
                    <span className="text-sm font-semibold text-indigo-700">7.1%</span>
                    <span className="text-xs text-indigo-500 ml-1">p.a.</span>
                  </div>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3 text-sm text-indigo-700">Current PPF rate as set by Government of India (Q1 FY 2025-26). Rate is revised quarterly.</div>
              </div>

              {/* Time Period */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Time Period</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <input type="number" value={years} min={15} max={50} onChange={(e) => setYears(Number(e.target.value))} className="w-10 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                    <span className="text-xs text-gray-500 ml-1">Yrs</span>
                  </div>
                </div>
                <input type="range" min={15} max={50} step={5} value={years} onChange={(e) => setYears(Number(e.target.value))} className={`${sliderClass} bg-violet-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>15 Yrs</span><span>50 Yrs</span></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 px-6 sm:px-8 py-6">
              <p className="text-indigo-100 text-xs font-medium uppercase tracking-wider">Maturity Amount (Tax Free)</p>
              <p className="text-white text-3xl sm:text-4xl font-bold mt-1">{fmt(result.maturity)}</p>
              <p className="text-indigo-100 text-sm mt-1">{fmt(yearly)}/year for {years} years at {rate}% compound interest</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">PPF Breakup</h3>
              <div className="flex justify-center mb-5">
                <div className="relative">
                  <svg width="180" height="180" viewBox="0 0 180 180" className="-rotate-90">
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#f1f5f9" strokeWidth="20" />
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#4f46e5" strokeWidth="20" strokeDasharray={`${s1} ${C}`} strokeLinecap="round" className="transition-all duration-500" />
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#a855f7" strokeWidth="20" strokeDasharray={`${s2} ${C}`} strokeDashoffset={`-${s1}`} strokeLinecap="round" className="transition-all duration-500" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-xs text-gray-500">Maturity</p>
                    <p className="text-base font-bold text-gray-900">{fmt(result.maturity)}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-indigo-600 rounded-full"></div><span className="text-sm text-gray-700">Total Invested</span></div><span className="text-sm font-bold">{fmt(result.invested)}</span></div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-purple-500 rounded-full"></div><span className="text-sm text-gray-700">Interest Earned</span></div><span className="text-sm font-bold">{fmt(result.interest)}</span></div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-800 rounded-full"></div><span className="text-sm font-medium text-gray-800">Maturity Amount</span></div><span className="text-sm font-bold">{fmt(result.maturity)}</span></div>
              </div>
            </div>

            <AdUnit />

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">More Calculators</h3>
              <div className="space-y-2">
                {[
                  { label: "SIP Calculator", href: "/calculators/sip" },
                  { label: "FD Calculator", href: "/calculators/fd" },
                  { label: "EMI Calculator", href: "/calculators/emi" },
                  { label: "Sukanya Samriddhi", href: "/schemes/sukanya-samriddhi" },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 transition-colors group">
                    <span className="text-sm text-gray-700 group-hover:text-blue-700">{l.label}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-4xl">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-gray-900">What is PPF?</h2>
            <p className="text-gray-700 leading-relaxed">Public Provident Fund (PPF) is a government-backed savings scheme introduced in 1968 under the PPF Act. It offers guaranteed returns, complete tax exemption under EEE (Exempt-Exempt-Exempt) status, and is one of the safest long-term investment options in India. The scheme is available at all nationalized banks and post offices.</p>

            <AdUnit />

            <h2 className="text-xl font-bold text-gray-900">PPF Key Features</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-gray-200"><th className="text-left py-3 px-3 font-semibold text-gray-900">Feature</th><th className="text-left py-3 px-3 font-semibold text-gray-900">Details</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  <tr><td className="py-3 px-3 text-gray-700">Minimum Deposit</td><td className="py-3 px-3">Rs 500 per year</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">Maximum Deposit</td><td className="py-3 px-3">Rs 1,50,000 per year</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">Lock-in Period</td><td className="py-3 px-3">15 years (extendable in blocks of 5 years)</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">Interest Rate</td><td className="py-3 px-3">7.1% p.a. (compounded yearly, revised quarterly)</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">Tax Benefit</td><td className="py-3 px-3">Section 80C deduction + tax-free interest + tax-free maturity</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">Loan Facility</td><td className="py-3 px-3">Available from 3rd to 6th year (up to 25% of balance)</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">Partial Withdrawal</td><td className="py-3 px-3">Allowed from 7th year (up to 50% of balance at end of 4th year)</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div><h3 className="font-medium text-gray-900 mb-1">Can NRIs open PPF account?</h3><p className="text-sm text-gray-600">No. NRIs cannot open new PPF accounts. However, if an existing PPF account holder becomes NRI, they can continue the account till maturity (15 years) but cannot extend it further.</p></div>
              <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">When should I deposit to get maximum interest?</h3><p className="text-sm text-gray-600">Interest is calculated on the lowest balance between 5th and last day of each month. Depositing before the 5th of April ensures interest on that amount for the entire year. Depositing the full Rs 1.5 lakh in April gives maximum benefit.</p></div>
              <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Is PPF interest really tax free?</h3><p className="text-sm text-gray-600">Yes. PPF has EEE (Exempt-Exempt-Exempt) status. Your deposit (up to Rs 1.5L) gets 80C deduction, the interest earned is tax-free, and the maturity amount is completely tax-free. No other fixed-income instrument offers this triple tax benefit.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
