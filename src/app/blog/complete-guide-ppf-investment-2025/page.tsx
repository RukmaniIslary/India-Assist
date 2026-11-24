import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Complete Guide to PPF Investment 2025: Rules, Returns & Strategy",
  description: "Public Provident Fund guide covering how to open a PPF account, 7.1% interest rate, contribution rules, partial withdrawal, loan facility and 15-year strategy.",
  alternates: { canonical: "https://indiaassist.online/blog/complete-guide-ppf-investment-2025" },
  openGraph: {
    title: "Complete Guide to PPF Investment 2025: Rules, Returns & Strategy",
    description: "Everything about PPF — interest rate, EEE tax exemption, partial withdrawal rules, loan facility and maximising your 15-year corpus.",
    url: "https://indiaassist.online/blog/complete-guide-ppf-investment-2025",
  },
};

export default function PPFGuidePost() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-700">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">PPF Investment Guide 2025</span>
        </nav>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <div className="mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-100 text-teal-800">Investments</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Complete Guide to PPF Investment 2025: Rules, Returns &amp; Strategy
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />June 5, 2025</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />11 min read</span>
        </div>

        <div className="prose-article">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Public Provident Fund (PPF) has been India's most trusted long-term savings instrument for over five decades. It offers 7.1% per annum interest rate guaranteed by the Government of India, complete EEE (Exempt-Exempt-Exempt) tax status, and a 15-year lock-in with partial exit provisions. For anyone looking to build a tax-free corpus with zero risk, PPF is hard to beat.
          </p>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-8">
            <p className="font-semibold text-teal-900 mb-3">PPF at a Glance (2025)</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["Interest Rate", "7.1% per annum"],
                ["Tenure", "15 years (extendable)"],
                ["Minimum Deposit", "Rs 500 per year"],
                ["Maximum Deposit", "Rs 1.5 lakh per year"],
                ["Tax Status", "EEE – fully exempt"],
                ["Backed by", "Government of India"],
              ].map(([label, value]) => (
                <div key={label} className="bg-white rounded-lg p-3">
                  <p className="text-teal-700 text-xs font-medium">{label}</p>
                  <p className="text-gray-900 font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is PPF?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            PPF was introduced in India in 1968 by the National Savings Institute. It is a government-backed savings scheme available to all Indian residents. The interest rate is set by the Ministry of Finance every quarter (though it has remained at 7.1% since April 2020). The maturity amount — both principal and interest — is completely tax-free.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            PPF accounts can be opened at any post office or authorised bank branches (SBI, HDFC, ICICI, Axis, etc.) and also online through net banking. One person can hold only one PPF account (HUFs are no longer allowed to open new accounts). You can also open a PPF account in the name of a minor child.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The EEE Tax Advantage Explained</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            PPF is one of very few investments in India that qualifies for EEE status:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { e: "First E – Exempt at Investment", desc: "Deposits up to Rs 1.5 lakh per year qualify for deduction under Section 80C. If you are in the 30% tax bracket, this saves you Rs 45,000 in tax annually." },
              { e: "Second E – Exempt During Accumulation", desc: "The 7.1% interest earned each year is not taxed. Unlike a bank FD where interest is taxable every year, PPF interest accumulates tax-free." },
              { e: "Third E – Exempt at Maturity", desc: "The entire maturity amount (principal + 15 years of compounded interest) is tax-free in your hands. No capital gains tax, no TDS, nothing." },
            ].map(({ e, desc }) => (
              <div key={e} className="flex items-start gap-3 p-4 bg-teal-50 rounded-xl">
                <span className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">E</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{e}</p>
                  <p className="text-gray-700 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Interest is Calculated in PPF</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            PPF interest is calculated on the minimum balance between the 5th and the last day of each month. This means if you deposit money before the 5th, that deposit earns interest for that month. Depositing after the 5th means you lose one month's interest on that deposit.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
            <p className="text-amber-900 font-semibold mb-1">Important tip</p>
            <p className="text-amber-800 text-sm">Always deposit your yearly Rs 1.5 lakh in one shot before April 5 each year. This ensures you earn interest for all 12 months of the financial year on the full amount — maximising your effective return.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Rs 1.5 Lakh Per Year Grows to in 15 Years</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you invest Rs 1.5 lakh every year at the start of the financial year at 7.1% per annum:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Year</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Total Invested</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Balance (approx.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="py-3 px-4 text-gray-700">5</td><td className="py-3 px-4">Rs 7.5 Lakh</td><td className="py-3 px-4 font-medium">Rs 8.84 Lakh</td></tr>
                <tr><td className="py-3 px-4 text-gray-700">10</td><td className="py-3 px-4">Rs 15 Lakh</td><td className="py-3 px-4 font-medium">Rs 21.08 Lakh</td></tr>
                <tr><td className="py-3 px-4 text-gray-700">15</td><td className="py-3 px-4">Rs 22.5 Lakh</td><td className="py-3 px-4 font-medium text-teal-700">Rs 40.68 Lakh</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm mb-6">
            All Rs 40.68 lakh is tax-free in your hands at maturity. The interest earned (Rs 18.18 lakh) is never taxed at any point.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Partial Withdrawal Rules</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While PPF has a 15-year lock-in, it allows partial withdrawals from the 7th year onwards:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span className="text-gray-700">Withdrawals allowed from the 7th financial year (i.e., after completing 6 full years)</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span className="text-gray-700">Maximum withdrawal: 50% of the balance at the end of the 4th year preceding the withdrawal year, or 50% of the balance at the end of the year immediately preceding the withdrawal year — whichever is lower</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span className="text-gray-700">Only one partial withdrawal is allowed per financial year</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span className="text-gray-700">Withdrawal amount is tax-free</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">PPF Loan Facility</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            From the 3rd to the 6th year, you can take a loan against your PPF balance:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span className="text-gray-700">Loan amount: up to 25% of balance at end of 2nd year preceding the loan year</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span className="text-gray-700">Interest rate: PPF rate + 1% (currently 8.1%)</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span className="text-gray-700">Loan must be repaid within 36 months</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span><span className="text-gray-700">Only one loan is active at a time</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Extending PPF After 15 Years</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            After maturity, you have three options:
          </p>
          <div className="space-y-3 mb-8">
            {[
              { title: "Close the account", desc: "Withdraw the full maturity amount tax-free." },
              { title: "Extend with contributions", desc: "In blocks of 5 years. You can continue depositing up to Rs 1.5 lakh/year and make one partial withdrawal per year. This is the best option if you don't need the money immediately." },
              { title: "Extend without contributions", desc: "Let the balance earn 7.1% interest without depositing anything. You can make one withdrawal per year." },
            ].map(({ title, desc }) => (
              <div key={title} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">{title}</p>
                <p className="text-gray-700 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              { q: "Can a salaried employee with PF also open PPF?", a: "Yes. PF (Employee Provident Fund) and PPF are separate accounts. You can contribute to both simultaneously. The Rs 1.5 lakh Section 80C limit applies across all eligible instruments including PPF and ELSS — so plan accordingly." },
              { q: "Can I open PPF online?", a: "Yes. SBI, HDFC, ICICI, Axis Bank, and most other authorised banks let you open and manage PPF accounts entirely online through net banking or mobile apps. Post office PPF can be opened at any post office but online management varies." },
              { q: "What happens if I miss a year's deposit?", a: "If you deposit less than Rs 500 in a financial year, the account becomes inactive (dormant). To reactivate, pay Rs 500 for each year the account was inactive plus a Rs 50 penalty per year of default." },
              { q: "Is PPF better than ELSS for tax saving?", a: "ELSS has potentially higher returns (12–15% historically) but involves equity risk and 1-year lock-in. PPF offers guaranteed 7.1% with zero risk and is better for risk-averse investors or as the fixed-income portion of a portfolio. For someone aged 25–40, a combination of ELSS (for growth) and PPF (for safety) is usually optimal." },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="font-semibold text-gray-900 mb-1">{q}</h3>
                <p className="text-sm text-gray-600">{a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Related Tools</h3>
            <div className="space-y-2">
              <Link href="/calculators/ppf" className="block text-blue-700 hover:underline text-sm">PPF Maturity Calculator – Calculate Your Corpus</Link>
              <Link href="/calculators/sip" className="block text-blue-700 hover:underline text-sm">SIP Calculator – Compare with Mutual Funds</Link>
              <Link href="/calculators/fd" className="block text-blue-700 hover:underline text-sm">FD Calculator – Fixed Deposit Returns</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
