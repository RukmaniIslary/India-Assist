"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Landmark, ArrowRight } from "lucide-react";
import AdUnit from "@/components/AdUnit";

export default function FDCalculatorPage() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(7);
  const [tenureMonths, setTenureMonths] = useState(12);

  const result = useMemo(() => {
    const r = rate / 100;
    const t = tenureMonths / 12;
    const n = 4; // quarterly compounding
    const maturity = principal * Math.pow(1 + r / n, n * t);
    const interest = maturity - principal;
    return { maturity, interest };
  }, [principal, rate, tenureMonths]);

  const fmt = (n: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
  const pctPrincipal = (principal / result.maturity) * 100;
  const pctInterest = (result.interest / result.maturity) * 100;

  const R = 70, C = 2 * Math.PI * R;
  const s1 = (pctPrincipal / 100) * C;
  const s2 = (pctInterest / 100) * C;

  const sliderClass = "w-full h-2 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-md";

  const tenureLabel = tenureMonths < 1 ? `${Math.round(tenureMonths * 30)} days` : tenureMonths < 12 ? `${tenureMonths} months` : tenureMonths === 12 ? "1 year" : `${(tenureMonths / 12).toFixed(1)} years`;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/calculators" className="hover:text-blue-700">Calculators</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">FD Calculator</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Landmark className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">FD Calculator</h1>
              <p className="text-gray-600 mt-0.5">Calculate Fixed Deposit maturity amount and interest earned</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 space-y-8">
              {/* Principal */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Deposit Amount</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <span className="text-xs text-gray-500 mr-1">Rs</span>
                    <input type="text" value={principal.toLocaleString("en-IN")} onChange={(e) => { const v = Number(e.target.value.replace(/,/g, "")); if (!isNaN(v) && v >= 10000 && v <= 10000000) setPrincipal(v); }} className="w-28 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                  </div>
                </div>
                <input type="range" min={10000} max={10000000} step={10000} value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className={`${sliderClass} bg-amber-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>10K</span><span>1 Cr</span></div>
              </div>

              {/* Rate */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Interest Rate (p.a.)</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <input type="number" value={rate} step={0.1} min={3} max={9} onChange={(e) => setRate(Number(e.target.value))} className="w-14 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                    <span className="text-xs text-gray-500 ml-1">%</span>
                  </div>
                </div>
                <input type="range" min={3} max={9} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className={`${sliderClass} bg-green-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>3%</span><span>9%</span></div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Tenure</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <span className="text-sm font-semibold text-gray-900">{tenureLabel}</span>
                  </div>
                </div>
                <input type="range" min={0.25} max={120} step={0.25} value={tenureMonths} onChange={(e) => setTenureMonths(Number(e.target.value))} className={`${sliderClass} bg-violet-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>7 Days</span><span>10 Years</span></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-orange-700 px-6 sm:px-8 py-6">
              <p className="text-amber-100 text-xs font-medium uppercase tracking-wider">Maturity Amount</p>
              <p className="text-white text-3xl sm:text-4xl font-bold mt-1">{fmt(result.maturity)}</p>
              <p className="text-amber-100 text-sm mt-1">{fmt(principal)} deposited for {tenureLabel} at {rate}% (quarterly compounding)</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">FD Breakup</h3>
              <div className="flex justify-center mb-5">
                <div className="relative">
                  <svg width="180" height="180" viewBox="0 0 180 180" className="-rotate-90">
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#f1f5f9" strokeWidth="20" />
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#d97706" strokeWidth="20" strokeDasharray={`${s1} ${C}`} strokeLinecap="round" className="transition-all duration-500" />
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#16a34a" strokeWidth="20" strokeDasharray={`${s2} ${C}`} strokeDashoffset={`-${s1}`} strokeLinecap="round" className="transition-all duration-500" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-xs text-gray-500">Maturity</p>
                    <p className="text-base font-bold text-gray-900">{fmt(result.maturity)}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-600 rounded-full"></div><span className="text-sm text-gray-700">Principal</span></div><span className="text-sm font-bold">{fmt(principal)}</span></div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-600 rounded-full"></div><span className="text-sm text-gray-700">Interest Earned</span></div><span className="text-sm font-bold">{fmt(result.interest)}</span></div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-800 rounded-full"></div><span className="text-sm font-medium text-gray-800">Maturity Amount</span></div><span className="text-sm font-bold">{fmt(result.maturity)}</span></div>
              </div>
            </div>

            <AdUnit />

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">FD Rates Comparison 2025</h3>
              <div className="space-y-2 text-sm">
                {[
                  { bank: "SBI", rate: "6.50% - 7.10%" },
                  { bank: "HDFC Bank", rate: "6.60% - 7.25%" },
                  { bank: "ICICI Bank", rate: "6.70% - 7.20%" },
                  { bank: "PNB", rate: "6.50% - 7.25%" },
                  { bank: "Post Office", rate: "6.90% - 7.50%" },
                ].map(b => (
                  <div key={b.bank} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50">
                    <span className="text-gray-700">{b.bank}</span>
                    <span className="font-semibold text-gray-900">{b.rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-4xl">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-gray-900">What is a Fixed Deposit?</h2>
            <p className="text-gray-700 leading-relaxed">A Fixed Deposit (FD) is a financial instrument offered by banks and NBFCs where you deposit a lump sum for a fixed period at a predetermined interest rate. FDs are among the safest investment options in India, offering guaranteed returns regardless of market conditions. Deposits up to Rs 5 lakh per bank are insured by DICGC.</p>

            <AdUnit />

            <h2 className="text-xl font-bold text-gray-900">FD Interest Calculation</h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <code className="text-sm text-gray-900">A = P(1 + r/n)^(nt)</code>
            </div>
            <p className="text-gray-700">Where A = Maturity amount, P = Principal deposit, r = Annual interest rate (decimal), n = Compounding frequency (4 for quarterly), t = Time in years. Most Indian banks compound interest quarterly.</p>

            <h2 className="text-xl font-bold text-gray-900">Types of Fixed Deposits</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Regular FD:</strong> Standard deposit for 7 days to 10 years. Interest paid at maturity or periodically (monthly/quarterly).</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Tax-Saving FD:</strong> 5-year lock-in period. Deposit up to Rs 1.5 lakh qualifies for Section 80C deduction. Cannot be withdrawn prematurely.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Senior Citizen FD:</strong> Additional 0.25% to 0.50% interest rate for depositors aged 60+. Some banks offer up to 0.75% extra.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Flexi FD:</strong> Linked to savings account. Amounts above a threshold are automatically swept into FD for higher returns.</span></li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div><h3 className="font-medium text-gray-900 mb-1">Is FD interest taxable?</h3><p className="text-sm text-gray-600">Yes. FD interest is fully taxable as per your income tax slab. Banks deduct TDS at 10% if total interest from all FDs exceeds Rs 40,000 per year (Rs 50,000 for senior citizens). Submit Form 15G/15H if your total income is below taxable limit.</p></div>
              <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">What happens if I break FD early?</h3><p className="text-sm text-gray-600">Premature withdrawal typically incurs a penalty of 0.5% to 1% on the applicable rate. The interest is recalculated at the rate applicable for the actual tenure minus the penalty. Tax-saving FDs cannot be broken before 5 years.</p></div>
              <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Is FD safe if bank fails?</h3><p className="text-sm text-gray-600">DICGC (Deposit Insurance and Credit Guarantee Corporation) insures deposits up to Rs 5 lakh per depositor per bank. This covers principal plus interest. For larger amounts, consider spreading across multiple banks.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
