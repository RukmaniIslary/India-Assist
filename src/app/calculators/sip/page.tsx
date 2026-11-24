"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import AdUnit from "@/components/AdUnit";

export default function SIPCalculatorPage() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(() => {
    const n = years * 12;
    const r = rate / 12 / 100;
    const futureValue = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const invested = monthly * n;
    const returns = futureValue - invested;
    return { futureValue, invested, returns };
  }, [monthly, rate, years]);

  const fmt = (n: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
  const pctInvested = (result.invested / result.futureValue) * 100;
  const pctReturns = (result.returns / result.futureValue) * 100;

  const R = 70, C = 2 * Math.PI * R;
  const s1 = (pctInvested / 100) * C;
  const s2 = (pctReturns / 100) * C;

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
            <span className="text-gray-900 font-medium">SIP Calculator</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">SIP Calculator</h1>
              <p className="text-gray-600 mt-0.5">Calculate returns on your Systematic Investment Plan in mutual funds</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 space-y-8">
              {/* Monthly Investment */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Monthly Investment</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <span className="text-xs text-gray-500 mr-1">Rs</span>
                    <input type="text" value={monthly.toLocaleString("en-IN")} onChange={(e) => { const v = Number(e.target.value.replace(/,/g, "")); if (!isNaN(v) && v >= 500 && v <= 200000) setMonthly(v); }} className="w-24 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                  </div>
                </div>
                <input type="range" min={500} max={200000} step={500} value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} className={`${sliderClass} bg-green-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>500</span><span>2L</span></div>
              </div>

              {/* Expected Return */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Expected Return (p.a.)</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <input type="number" value={rate} step={0.5} min={1} max={30} onChange={(e) => setRate(Number(e.target.value))} className="w-14 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                    <span className="text-xs text-gray-500 ml-1">%</span>
                  </div>
                </div>
                <input type="range" min={1} max={30} step={0.5} value={rate} onChange={(e) => setRate(Number(e.target.value))} className={`${sliderClass} bg-blue-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1%</span><span>30%</span></div>
              </div>

              {/* Time Period */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Time Period</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <input type="number" value={years} min={1} max={40} onChange={(e) => setYears(Number(e.target.value))} className="w-10 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                    <span className="text-xs text-gray-500 ml-1">Yrs</span>
                  </div>
                </div>
                <input type="range" min={1} max={40} step={1} value={years} onChange={(e) => setYears(Number(e.target.value))} className={`${sliderClass} bg-violet-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1 Yr</span><span>40 Yrs</span></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-6 sm:px-8 py-6">
              <p className="text-green-100 text-xs font-medium uppercase tracking-wider">Future Value</p>
              <p className="text-white text-3xl sm:text-4xl font-bold mt-1">{fmt(result.futureValue)}</p>
              <p className="text-green-100 text-sm mt-1">{fmt(monthly)}/month for {years} years at {rate}% expected return</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">Investment Breakup</h3>
              <div className="flex justify-center mb-5">
                <div className="relative">
                  <svg width="180" height="180" viewBox="0 0 180 180" className="-rotate-90">
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#f1f5f9" strokeWidth="20" />
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#2563eb" strokeWidth="20" strokeDasharray={`${s1} ${C}`} strokeLinecap="round" className="transition-all duration-500" />
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#10b981" strokeWidth="20" strokeDasharray={`${s2} ${C}`} strokeDashoffset={`-${s1}`} strokeLinecap="round" className="transition-all duration-500" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-xs text-gray-500">Total Value</p>
                    <p className="text-base font-bold text-gray-900">{fmt(result.futureValue)}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-600 rounded-full"></div><span className="text-sm text-gray-700">Total Invested</span></div><span className="text-sm font-bold">{fmt(result.invested)}</span></div>
                <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-500 rounded-full"></div><span className="text-sm text-gray-700">Estimated Returns</span></div><span className="text-sm font-bold">{fmt(result.returns)}</span></div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-800 rounded-full"></div><span className="text-sm font-medium text-gray-800">Future Value</span></div><span className="text-sm font-bold">{fmt(result.futureValue)}</span></div>
              </div>
            </div>

            <AdUnit />

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">More Calculators</h3>
              <div className="space-y-2">
                {[
                  { label: "EMI Calculator", href: "/calculators/emi" },
                  { label: "PPF Calculator", href: "/calculators/ppf" },
                  { label: "FD Calculator", href: "/calculators/fd" },
                  { label: "Loan Eligibility", href: "/calculators/loan-eligibility" },
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
            <h2 className="text-xl font-bold text-gray-900">What is SIP?</h2>
            <p className="text-gray-700 leading-relaxed">SIP (Systematic Investment Plan) is a method of investing a fixed amount regularly in mutual funds. It allows investors to buy units on a given date each month, benefiting from rupee cost averaging and the power of compounding. SIP is one of the most disciplined and effective ways to build wealth over the long term.</p>

            <AdUnit />

            <h2 className="text-xl font-bold text-gray-900">SIP Formula</h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <code className="text-sm text-gray-900">FV = P x [((1 + r)^n - 1) / r] x (1 + r)</code>
            </div>
            <p className="text-gray-700">Where P = Monthly investment amount, r = Expected monthly rate of return (annual rate / 12 / 100), n = Total number of monthly installments. This formula calculates the future value of recurring investments compounded monthly.</p>

            <h2 className="text-xl font-bold text-gray-900">Benefits of SIP Investment</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Rupee Cost Averaging:</strong> When markets are low, you buy more units; when high, fewer units. Over time, this averages out your purchase cost.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Power of Compounding:</strong> Returns earned are reinvested, generating returns on returns. Starting early with even small amounts can yield significant wealth.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Discipline:</strong> Automated monthly deductions create a savings discipline without requiring constant market monitoring.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Flexibility:</strong> You can start with as low as Rs 500, increase or decrease amounts, pause, or stop anytime without penalties in open-ended funds.</span></li>
            </ul>

            <AdUnit />

            <h2 className="text-xl font-bold text-gray-900">SIP vs Lump Sum Investment</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-gray-200"><th className="text-left py-3 px-3 font-semibold text-gray-900">Parameter</th><th className="text-left py-3 px-3 font-semibold text-gray-900">SIP</th><th className="text-left py-3 px-3 font-semibold text-gray-900">Lump Sum</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  <tr><td className="py-3 px-3 text-gray-700">Investment Style</td><td className="py-3 px-3">Fixed amount regularly</td><td className="py-3 px-3">One-time large amount</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">Market Timing</td><td className="py-3 px-3">Not required</td><td className="py-3 px-3">Critical for returns</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">Risk</td><td className="py-3 px-3">Lower (averaged)</td><td className="py-3 px-3">Higher (single entry)</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">Best For</td><td className="py-3 px-3">Salaried individuals</td><td className="py-3 px-3">Windfall gains, bonus</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div><h3 className="font-medium text-gray-900 mb-1">Is SIP better than FD?</h3><p className="text-sm text-gray-600">SIP in equity mutual funds historically delivers 12-15% CAGR over 10+ years compared to 6-7% from FDs. However, SIP carries market risk and does not guarantee returns. FDs offer guaranteed but lower returns suitable for short-term goals.</p></div>
              <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">What is the minimum amount for SIP?</h3><p className="text-sm text-gray-600">Most mutual funds allow SIP starting at Rs 500 per month. Some AMCs offer Rs 100 SIPs as well. There is no maximum limit for SIP investment.</p></div>
              <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Are SIP returns guaranteed?</h3><p className="text-sm text-gray-600">No. SIP returns depend on the performance of the underlying mutual fund which invests in equity or debt markets. However, historically, equity SIPs held for 7+ years have rarely given negative returns in India.</p></div>
              <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Can I stop SIP anytime?</h3><p className="text-sm text-gray-600">Yes. For open-ended mutual funds, you can stop your SIP anytime without any penalty. Your existing invested units will remain and continue to grow or decline with the market. ELSS funds have a 3-year lock-in per installment.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
