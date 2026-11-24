"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import AdUnit from "@/components/AdUnit";

const bankRates = [
  { name: "State Bank of India (SBI)", rate: 8.5, processing: "0.35% of loan amount", minRate: "8.50%" },
  { name: "HDFC Bank", rate: 8.75, processing: "0.50% or Rs 3,000", minRate: "8.75%" },
  { name: "ICICI Bank", rate: 8.75, processing: "0.50% of loan amount", minRate: "8.75%" },
  { name: "Punjab National Bank", rate: 8.45, processing: "0.35% of loan amount", minRate: "8.45%" },
  { name: "Bank of Baroda", rate: 8.4, processing: "Rs 8,500 flat", minRate: "8.40%" },
  { name: "Kotak Mahindra Bank", rate: 8.75, processing: "0.50% of loan amount", minRate: "8.75%" },
  { name: "Axis Bank", rate: 8.75, processing: "Rs 10,000 flat", minRate: "8.75%" },
  { name: "Union Bank of India", rate: 8.35, processing: "0.50% (max Rs 15,000)", minRate: "8.35%" },
];

export default function HomeLoanEMIPage() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const result = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emi * n;
    const interest = total - loanAmount;
    return { emi, total, interest, months: n };
  }, [loanAmount, rate, tenure]);

  const fmt = (n: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
  const pctPrincipal = (loanAmount / result.total) * 100;
  const pctInterest = (result.interest / result.total) * 100;

  const R = 70, C = 2 * Math.PI * R;
  const s1 = (pctPrincipal / 100) * C;
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
            <span className="text-gray-900 font-medium">Home Loan EMI</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Home Loan EMI Calculator</h1>
              <p className="text-gray-600 mt-0.5">Calculate your home loan EMI and compare bank interest rates</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Loan Amount</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <span className="text-xs text-gray-500 mr-1">Rs</span>
                    <input type="text" value={loanAmount.toLocaleString("en-IN")} onChange={(e) => { const v = Number(e.target.value.replace(/,/g, "")); if (!isNaN(v) && v >= 500000 && v <= 50000000) setLoanAmount(v); }} className="w-28 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                  </div>
                </div>
                <input type="range" min={500000} max={50000000} step={100000} value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className={`${sliderClass} bg-blue-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>5 Lakh</span><span>5 Crore</span></div>
              </div>

              {/* Rate */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Interest Rate (p.a.)</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <input type="number" value={rate} step={0.05} min={6} max={15} onChange={(e) => setRate(Number(e.target.value))} className="w-14 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                    <span className="text-xs text-gray-500 ml-1">%</span>
                  </div>
                </div>
                <input type="range" min={6} max={15} step={0.05} value={rate} onChange={(e) => setRate(Number(e.target.value))} className={`${sliderClass} bg-green-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>6%</span><span>15%</span></div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Loan Tenure</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <input type="number" value={tenure} min={5} max={30} onChange={(e) => setTenure(Number(e.target.value))} className="w-10 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                    <span className="text-xs text-gray-500 ml-1">Yrs</span>
                  </div>
                </div>
                <input type="range" min={5} max={30} step={1} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className={`${sliderClass} bg-violet-100`} />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>5 Yrs</span><span>30 Yrs</span></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-6 sm:px-8 py-6">
              <p className="text-blue-200 text-xs font-medium uppercase tracking-wider">Monthly Home Loan EMI</p>
              <p className="text-white text-3xl sm:text-4xl font-bold mt-1">{fmt(result.emi)}</p>
              <p className="text-blue-200 text-sm mt-1">{result.months} payments for {fmt(loanAmount)} at {rate}% over {tenure} years</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">Payment Breakup</h3>
              <div className="flex justify-center mb-5">
                <div className="relative">
                  <svg width="180" height="180" viewBox="0 0 180 180" className="-rotate-90">
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#f1f5f9" strokeWidth="20" />
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#2563eb" strokeWidth="20" strokeDasharray={`${s1} ${C}`} strokeLinecap="round" className="transition-all duration-500" />
                    <circle cx="90" cy="90" r={R} fill="none" stroke="#f97316" strokeWidth="20" strokeDasharray={`${s2} ${C}`} strokeDashoffset={`-${s1}`} strokeLinecap="round" className="transition-all duration-500" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-xs text-gray-500">Total Cost</p>
                    <p className="text-base font-bold text-gray-900">{fmt(result.total)}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-600 rounded-full"></div><span className="text-sm text-gray-700">Principal</span></div><span className="text-sm font-bold">{fmt(loanAmount)}</span></div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-orange-500 rounded-full"></div><span className="text-sm text-gray-700">Total Interest</span></div><span className="text-sm font-bold">{fmt(result.interest)}</span></div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-800 rounded-full"></div><span className="text-sm font-medium text-gray-800">Total Payment</span></div><span className="text-sm font-bold">{fmt(result.total)}</span></div>
              </div>
            </div>

            <AdUnit />

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { label: "Loan Eligibility", href: "/calculators/loan-eligibility" },
                  { label: "EMI Calculator", href: "/calculators/emi" },
                  { label: "PM Awas Yojana", href: "/schemes/pmay" },
                  { label: "SIP Calculator", href: "/calculators/sip" },
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

        {/* Bank Rate Comparison */}
        <div className="mt-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Home Loan Interest Rates - Bank Comparison 2025</h2>
            <p className="text-gray-600 text-sm mb-6">Compare home loan rates from top banks in India. Rates are for salaried individuals with CIBIL score 750+. Actual rates may vary based on loan amount, property location, and profile.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900 rounded-tl-lg">Bank</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Min Rate</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Processing Fee</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900 rounded-tr-lg">EMI per Lakh (20yr)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {bankRates.map(bank => {
                    const r = bank.rate / 12 / 100;
                    const n = 240;
                    const emiPerLakh = (100000 * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
                    return (
                      <tr key={bank.name} className="hover:bg-blue-50 transition-colors">
                        <td className="py-3 px-4 text-gray-900 font-medium">{bank.name}</td>
                        <td className="py-3 px-4 font-semibold text-blue-700">{bank.minRate}</td>
                        <td className="py-3 px-4 text-gray-600">{bank.processing}</td>
                        <td className="py-3 px-4 font-medium">{fmt(emiPerLakh)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-4xl">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Home Loan Eligibility Criteria</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Age:</strong> 21 to 65 years at the time of loan maturity. Some banks extend to 70 for salaried.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Income:</strong> Minimum Rs 25,000 net monthly salary for salaried. Rs 2.5 lakh annual income for self-employed.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>CIBIL Score:</strong> 750+ for best rates. 700-750 get approval but at higher rates. Below 650 is usually rejected.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Employment:</strong> Minimum 2 years total experience and 1 year in current job for salaried. 3 years in business for self-employed.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Property:</strong> Must be in an approved project or society. Property age limits apply for resale. Clear title and no litigation.</span></li>
            </ul>

            <AdUnit />

            <h2 className="text-xl font-bold text-gray-900">Tax Benefits on Home Loan</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-gray-200"><th className="text-left py-3 px-3 font-semibold text-gray-900">Section</th><th className="text-left py-3 px-3 font-semibold text-gray-900">Deduction</th><th className="text-left py-3 px-3 font-semibold text-gray-900">Limit</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  <tr><td className="py-3 px-3 text-gray-700">Section 24(b)</td><td className="py-3 px-3">Interest on home loan (self-occupied)</td><td className="py-3 px-3 font-medium">Up to Rs 2 lakh/year</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">Section 80C</td><td className="py-3 px-3">Principal repayment</td><td className="py-3 px-3 font-medium">Up to Rs 1.5 lakh/year</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">Section 80EEA</td><td className="py-3 px-3">Additional interest (affordable housing)</td><td className="py-3 px-3 font-medium">Up to Rs 1.5 lakh/year</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div><h3 className="font-medium text-gray-900 mb-1">How much home loan can I get on Rs 50,000 salary?</h3><p className="text-sm text-gray-600">With a net salary of Rs 50,000 and no existing EMIs, you can typically get a home loan of Rs 35-40 lakh at 8.5% for 20 years. Banks consider 50-60% of salary for EMI eligibility. Use our Loan Eligibility Calculator for exact amount.</p></div>
              <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Should I take a 20-year or 30-year home loan?</h3><p className="text-sm text-gray-600">A 20-year loan has higher EMI but saves 40-50% in total interest compared to 30 years. For a Rs 50 lakh loan at 8.5%, 20 years costs Rs 53L in interest while 30 years costs Rs 88L. Choose based on your comfortable EMI-to-income ratio.</p></div>
              <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Can I transfer my home loan to another bank?</h3><p className="text-sm text-gray-600">Yes. Home loan balance transfer is common and can save significant money if the new bank offers 0.25-0.50% lower rate. There is usually a processing fee of 0.50% and some documentation. The transfer is worthwhile if you have more than 10 years remaining.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
