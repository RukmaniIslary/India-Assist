"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { UserCheck, ArrowRight } from "lucide-react";
import AdUnit from "@/components/AdUnit";

export default function LoanEligibilityPage() {
  const [income, setIncome] = useState(75000);
  const [existingEMI, setExistingEMI] = useState(0);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const result = useMemo(() => {
    const foir = 0.5; // 50% Fixed Obligation to Income Ratio
    const maxEMI = income * foir - existingEMI;
    if (maxEMI <= 0) return { maxLoan: 0, maxEMI: 0, totalPayable: 0 };
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const maxLoan = maxEMI * ((Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)));
    const totalPayable = maxEMI * n;
    return { maxLoan, maxEMI, totalPayable };
  }, [income, existingEMI, rate, tenure]);

  const fmt = (n: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  const sliderClass = "w-full h-2 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-md";

  const usedCapacity = existingEMI / (income * 0.5) * 100;
  const availableCapacity = Math.max(0, 100 - usedCapacity);

  const R = 70, C = 2 * Math.PI * R;
  const s1 = (usedCapacity / 100) * C;
  const s2 = (availableCapacity / 100) * C;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/calculators" className="hover:text-blue-700">Calculators</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Loan Eligibility</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Loan Eligibility Calculator</h1>
              <p className="text-gray-600 mt-0.5">Find out the maximum loan amount you are eligible for based on your income</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 space-y-8">
              {/* Monthly Income */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Net Monthly Income</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <span className="text-xs text-gray-500 mr-1">Rs</span>
                    <input type="text" value={income.toLocaleString("en-IN")} onChange={(e) => { const v = Number(e.target.value.replace(/,/g, "")); if (!isNaN(v) && v >= 10000 && v <= 500000) setIncome(v); }} className="w-24 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                  </div>
                </div>
                <input type="range" min={10000} max={500000} step={5000} value={income} onChange={(e) => setIncome(Number(e.target.value))} className={`${sliderClass} bg-teal-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>10K</span><span>5L</span></div>
              </div>

              {/* Existing EMI */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Existing Monthly EMIs</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <span className="text-xs text-gray-500 mr-1">Rs</span>
                    <input type="text" value={existingEMI.toLocaleString("en-IN")} onChange={(e) => { const v = Number(e.target.value.replace(/,/g, "")); if (!isNaN(v) && v >= 0 && v <= 200000) setExistingEMI(v); }} className="w-24 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                  </div>
                </div>
                <input type="range" min={0} max={200000} step={1000} value={existingEMI} onChange={(e) => setExistingEMI(Number(e.target.value))} className={`${sliderClass} bg-red-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>0</span><span>2L</span></div>
              </div>

              {/* Rate */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Expected Interest Rate (p.a.)</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <input type="number" value={rate} step={0.25} min={6} max={18} onChange={(e) => setRate(Number(e.target.value))} className="w-14 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                    <span className="text-xs text-gray-500 ml-1">%</span>
                  </div>
                </div>
                <input type="range" min={6} max={18} step={0.25} value={rate} onChange={(e) => setRate(Number(e.target.value))} className={`${sliderClass} bg-green-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>6%</span><span>18%</span></div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Loan Tenure</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <input type="number" value={tenure} min={1} max={30} onChange={(e) => setTenure(Number(e.target.value))} className="w-10 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                    <span className="text-xs text-gray-500 ml-1">Yrs</span>
                  </div>
                </div>
                <input type="range" min={1} max={30} step={1} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className={`${sliderClass} bg-violet-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1 Yr</span><span>30 Yrs</span></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-cyan-700 px-6 sm:px-8 py-6">
              <p className="text-teal-100 text-xs font-medium uppercase tracking-wider">Maximum Loan Eligibility</p>
              <p className="text-white text-3xl sm:text-4xl font-bold mt-1">{fmt(result.maxLoan)}</p>
              <p className="text-teal-100 text-sm mt-1">At {rate}% for {tenure} years with max EMI of {fmt(result.maxEMI)}/month (50% FOIR)</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">EMI Capacity</h3>
              <div className="flex justify-center mb-5">
                <div className="relative">
                  <svg width="180" height="180" viewBox="0 0 180 180" className="-rotate-90">
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#f1f5f9" strokeWidth="20" />
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#ef4444" strokeWidth="20" strokeDasharray={`${s1} ${C}`} strokeLinecap="round" className="transition-all duration-500" />
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#14b8a6" strokeWidth="20" strokeDasharray={`${s2} ${C}`} strokeDashoffset={`-${s1}`} strokeLinecap="round" className="transition-all duration-500" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-xs text-gray-500">Available EMI</p>
                    <p className="text-base font-bold text-gray-900">{fmt(result.maxEMI)}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded-full"></div><span className="text-sm text-gray-700">Existing EMIs</span></div><span className="text-sm font-bold">{fmt(existingEMI)}</span></div>
                <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-teal-500 rounded-full"></div><span className="text-sm text-gray-700">Available for New Loan</span></div><span className="text-sm font-bold">{fmt(result.maxEMI)}</span></div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-800 rounded-full"></div><span className="text-sm font-medium text-gray-800">Max EMI Capacity (50%)</span></div><span className="text-sm font-bold">{fmt(income * 0.5)}</span></div>
              </div>
            </div>

            <AdUnit />

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { label: "Home Loan EMI", href: "/calculators/home-loan-emi" },
                  { label: "EMI Calculator", href: "/calculators/emi" },
                  { label: "SIP Calculator", href: "/calculators/sip" },
                  { label: "Check Eligibility", href: "/eligibility" },
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
            <h2 className="text-xl font-bold text-gray-900">How Loan Eligibility is Calculated</h2>
            <p className="text-gray-700 leading-relaxed">Banks use FOIR (Fixed Obligation to Income Ratio) to determine how much loan you can afford. The standard FOIR threshold is 50% meaning your total EMIs (existing + new) should not exceed 50% of your net monthly income. Some banks allow up to 60% for high-income borrowers.</p>

            <h2 className="text-xl font-bold text-gray-900">Factors That Affect Loan Eligibility</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Net Monthly Income:</strong> Higher income directly increases your eligibility. Include spouse income as co-applicant to boost eligibility.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Existing Obligations:</strong> Car loans, personal loans, credit card EMIs all reduce your available capacity for a new loan.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Interest Rate:</strong> Lower rate means lower EMI per lakh, allowing higher loan amount within the same EMI budget.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Tenure:</strong> Longer tenure reduces per-month EMI, increasing the maximum eligible loan. But total interest cost increases significantly.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>CIBIL Score:</strong> Score of 750+ gets best rates. Some banks reject applications below 650 regardless of income.</span></li>
            </ul>

            <AdUnit />

            <h2 className="text-xl font-bold text-gray-900">Tips to Increase Loan Eligibility</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span>Close existing small loans and credit card outstanding before applying</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span>Add earning spouse or parent as co-applicant to combine income</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span>Choose longer tenure to reduce per-month EMI obligation</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span>Maintain CIBIL score above 750 for 6 months before applying</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span>Show all sources of income including rental, bonuses, and freelance</span></li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div><h3 className="font-medium text-gray-900 mb-1">What is FOIR?</h3><p className="text-sm text-gray-600">FOIR (Fixed Obligation to Income Ratio) is the percentage of your monthly income going toward loan EMIs and fixed obligations. Banks typically approve loans only if FOIR stays below 50-60%. A lower FOIR indicates better repayment capacity.</p></div>
              <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Does salary account bank give more loan?</h3><p className="text-sm text-gray-600">Yes, banks typically offer 10-15% higher eligibility, faster processing, and 0.05-0.10% lower rates to salary account holders since they have visibility into your regular income flow and spending patterns.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
