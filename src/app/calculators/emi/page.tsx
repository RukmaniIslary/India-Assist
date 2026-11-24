"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";
import AdUnit from "@/components/AdUnit";

export default function EMICalculatorPage() {
  const [principal, setPrincipal] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const result = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emi * n;
    const interest = total - principal;
    return { emi, total, interest, months: n };
  }, [principal, rate, tenure]);

  const fmt = (n: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
  const pctPrincipal = (principal / result.total) * 100;
  const pctInterest = (result.interest / result.total) * 100;

  // Donut
  const R = 70, C = 2 * Math.PI * R;
  const s1 = (pctPrincipal / 100) * C;
  const s2 = (pctInterest / 100) * C;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3"><Link href="/" className="hover:text-blue-700">Home</Link><span className="mx-2">/</span><Link href="/calculators" className="hover:text-blue-700">Calculators</Link><span className="mx-2">/</span><span className="text-gray-900 font-medium">EMI Calculator</span></nav>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">EMI Calculator</h1>
          <p className="text-gray-600 mt-1">Calculate Equated Monthly Installment for home loan, car loan, personal loan or any other loan</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Inputs */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Loan Amount</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <span className="text-xs text-gray-500 mr-1">Rs</span>
                    <input type="text" value={principal.toLocaleString("en-IN")} onChange={(e) => { const v = Number(e.target.value.replace(/,/g, "")); if (!isNaN(v)) setPrincipal(v); }} className="w-28 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                  </div>
                </div>
                <input type="range" min={50000} max={50000000} step={50000} value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-full bg-blue-100" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>50K</span><span>5 Cr</span></div>
              </div>

              {/* Rate */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-800">Interest Rate (p.a.)</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <input type="number" value={rate} step={0.1} min={1} max={30} onChange={(e) => setRate(Number(e.target.value))} className="w-14 text-right text-sm font-semibold text-gray-900 bg-transparent focus:outline-none" />
                    <span className="text-xs text-gray-500 ml-1">%</span>
                  </div>
                </div>
                <input type="range" min={1} max={30} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full bg-green-100" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1%</span><span>30%</span></div>
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
                <input type="range" min={1} max={30} step={1} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full bg-violet-100" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1 Yr</span><span>30 Yrs</span></div>
              </div>
            </div>

            {/* Result Banner */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-6 sm:px-8 py-6">
              <p className="text-blue-200 text-xs font-medium uppercase tracking-wider">Monthly EMI</p>
              <p className="text-white text-3xl sm:text-4xl font-bold mt-1">{fmt(result.emi)}</p>
              <p className="text-blue-200 text-sm mt-1">{result.months} payments of {fmt(result.emi)} at {rate}% for {tenure} years</p>
            </div>
          </div>

          {/* Results */}
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
                    <p className="text-xs text-gray-500">Total</p>
                    <p className="text-base font-bold text-gray-900">{fmt(result.total)}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-600 rounded-full"></div><span className="text-sm text-gray-700">Principal</span></div><span className="text-sm font-bold">{fmt(principal)}</span></div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-orange-500 rounded-full"></div><span className="text-sm text-gray-700">Interest</span></div><span className="text-sm font-bold">{fmt(result.interest)}</span></div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100"><div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-800 rounded-full"></div><span className="text-sm font-medium text-gray-800">Total Amount</span></div><span className="text-sm font-bold">{fmt(result.total)}</span></div>
              </div>
            </div>

            <AdUnit />

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">More Calculators</h3>
              <div className="space-y-2">
                {[
                  { label: "SIP Calculator", href: "/calculators/sip" },
                  { label: "Home Loan EMI", href: "/calculators/home-loan-emi" },
                  { label: "PPF Calculator", href: "/calculators/ppf" },
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

        {/* SEO Content with in-article ads */}
        <div className="mt-10 max-w-4xl">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-gray-900">What is EMI?</h2>
            <p className="text-gray-700 leading-relaxed">EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender on a specified date each month. EMIs are applied to both interest and principal each month so that over a specified number of years, the loan is fully paid off. With most common types of loans, such as home loans, car loans, and personal loans, the borrower makes fixed periodic payments to the lender over several years with the goal of retiring the loan.</p>

            <AdUnit />

            <h2 className="text-xl font-bold text-gray-900">EMI Formula</h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <code className="text-sm text-gray-900">EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]</code>
            </div>
            <p className="text-gray-700">Where P = Principal loan amount, R = Monthly interest rate (annual rate divided by 12 divided by 100), N = Loan tenure in months. This formula assumes a reducing balance method which is used by all banks in India.</p>

            <h2 className="text-xl font-bold text-gray-900">Factors Affecting EMI</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Loan Amount:</strong> Higher the principal, higher the EMI. Making a larger down payment reduces the loan amount needed.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Interest Rate:</strong> Even a 0.25% difference in rate can save lakhs over the loan tenure. Compare rates from multiple banks before choosing.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Tenure:</strong> Longer tenure means lower EMI but significantly higher total interest paid. A 20-year loan costs nearly double a 10-year loan in total interest.</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span><span><strong>Prepayment:</strong> Making partial prepayments reduces outstanding principal and can shorten your loan tenure or reduce future EMIs.</span></li>
            </ul>

            <AdUnit />

            <h2 className="text-xl font-bold text-gray-900">Home Loan Interest Rates 2025</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-gray-200"><th className="text-left py-3 px-3 font-semibold text-gray-900">Bank</th><th className="text-left py-3 px-3 font-semibold text-gray-900">Rate</th><th className="text-left py-3 px-3 font-semibold text-gray-900">Processing Fee</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  <tr><td className="py-3 px-3 text-gray-700">State Bank of India (SBI)</td><td className="py-3 px-3 font-medium">8.50% onwards</td><td className="py-3 px-3 text-gray-600">0.35% of loan</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">HDFC Bank</td><td className="py-3 px-3 font-medium">8.75% onwards</td><td className="py-3 px-3 text-gray-600">0.50% or Rs 3,000</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">ICICI Bank</td><td className="py-3 px-3 font-medium">8.75% onwards</td><td className="py-3 px-3 text-gray-600">0.50% of loan</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">Bank of Baroda</td><td className="py-3 px-3 font-medium">8.40% onwards</td><td className="py-3 px-3 text-gray-600">Rs 8,500</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">Kotak Mahindra</td><td className="py-3 px-3 font-medium">8.75% onwards</td><td className="py-3 px-3 text-gray-600">0.50% of loan</td></tr>
                  <tr><td className="py-3 px-3 text-gray-700">Punjab National Bank</td><td className="py-3 px-3 font-medium">8.45% onwards</td><td className="py-3 px-3 text-gray-600">0.35% of loan</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div><h3 className="font-medium text-gray-900 mb-1">How is EMI calculated by banks?</h3><p className="text-sm text-gray-600">All banks in India use the reducing balance method. This means interest is charged only on the outstanding principal each month. As you pay EMIs, the principal component increases and interest component decreases over time.</p></div>
              <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Can I prepay my loan to reduce EMI?</h3><p className="text-sm text-gray-600">Yes. For floating rate loans, there is no prepayment penalty as per RBI rules. You can make part-payment anytime which will either reduce your tenure (keeping EMI same) or reduce your EMI (keeping tenure same) depending on your bank.</p></div>
              <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">What is the ideal EMI to salary ratio?</h3><p className="text-sm text-gray-600">Financial advisors recommend keeping total EMI obligations (all loans combined) below 40-50% of your net monthly income. Banks typically approve loans where EMI does not exceed 50-60% of take-home salary minus existing obligations.</p></div>
              <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Does credit score affect my EMI?</h3><p className="text-sm text-gray-600">Credit score affects the interest rate offered, not the EMI formula. A CIBIL score of 750+ gets you the lowest rates (saving lakhs over the tenure), while lower scores result in higher rates and thus higher EMI for the same loan amount.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
