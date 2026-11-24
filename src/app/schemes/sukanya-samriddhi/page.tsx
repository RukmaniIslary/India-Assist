import Link from "next/link";
import { Metadata } from "next";
import { Baby, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Sukanya Samriddhi Yojana (SSY) - Interest Rate, Calculator, Rules",
  description: "Complete guide to Sukanya Samriddhi Yojana. Current interest rate 8.2%, features table, maturity calculation, how to open account, tax benefits, and withdrawal rules.",
  keywords: "Sukanya Samriddhi Yojana, SSY, girl child scheme, 8.2 interest rate, post office savings, tax saving 80C, sukanya account",
};

export default function SukanyaSamriddhiPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/schemes" className="hover:text-blue-700">Schemes</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Sukanya Samriddhi</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
              <Baby className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Sukanya Samriddhi Yojana (SSY)</h1>
              <p className="text-gray-600 mt-0.5">Government savings scheme for girl child with 8.2% interest and tax benefits</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Overview */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About Sukanya Samriddhi Yojana</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Sukanya Samriddhi Yojana (SSY) is a small savings scheme launched under the &quot;Beti Bachao, Beti Padhao&quot; campaign. It is specifically designed for the financial security of girl children in India, offering one of the highest interest rates among government-guaranteed small savings instruments.</p>
          <p className="text-gray-700 leading-relaxed">The account can be opened for a girl child below 10 years of age at any post office or authorized bank. Maximum 2 accounts can be opened for 2 daughters per family (exception for twins/triplets).</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://www.indiapost.gov.in/Financial/pages/content/sukanya-samriddhi-accounts.aspx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-rose-700 text-white text-sm font-medium rounded-lg hover:bg-rose-800 transition-colors">
              India Post - SSY Details <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Features Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">SSY Key Features</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="py-3 px-4 text-gray-700 font-medium">Interest Rate</td><td className="py-3 px-4 font-semibold text-rose-700">8.2% p.a. (Q1 FY 2025-26)</td></tr>
                <tr><td className="py-3 px-4 text-gray-700 font-medium">Minimum Deposit</td><td className="py-3 px-4">Rs 250 per year</td></tr>
                <tr><td className="py-3 px-4 text-gray-700 font-medium">Maximum Deposit</td><td className="py-3 px-4">Rs 1,50,000 per year</td></tr>
                <tr><td className="py-3 px-4 text-gray-700 font-medium">Deposit Period</td><td className="py-3 px-4">15 years from date of opening</td></tr>
                <tr><td className="py-3 px-4 text-gray-700 font-medium">Maturity</td><td className="py-3 px-4">21 years from date of opening or marriage of girl (after 18)</td></tr>
                <tr><td className="py-3 px-4 text-gray-700 font-medium">Eligibility</td><td className="py-3 px-4">Girl child below 10 years of age (opened by parent/guardian)</td></tr>
                <tr><td className="py-3 px-4 text-gray-700 font-medium">Tax Benefit</td><td className="py-3 px-4">EEE - Section 80C deduction + tax-free interest + tax-free maturity</td></tr>
                <tr><td className="py-3 px-4 text-gray-700 font-medium">Partial Withdrawal</td><td className="py-3 px-4">50% allowed after girl turns 18 (for education/marriage)</td></tr>
                <tr><td className="py-3 px-4 text-gray-700 font-medium">Premature Closure</td><td className="py-3 px-4">Only for medical emergency or death of account holder</td></tr>
                <tr><td className="py-3 px-4 text-gray-700 font-medium">Available At</td><td className="py-3 px-4">All post offices and authorized banks (SBI, PNB, BOB, etc.)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Maturity Example */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Maturity Calculation Example</h2>
          <p className="text-gray-700 mb-4">If you invest the maximum Rs 1,50,000 per year for 15 years at 8.2% interest:</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="p-4 bg-pink-50 rounded-xl text-center">
              <p className="text-sm text-gray-600">Total Deposited</p>
              <p className="text-xl font-bold text-gray-900 mt-1">Rs 22,50,000</p>
              <p className="text-xs text-gray-500">Rs 1.5L x 15 years</p>
            </div>
            <div className="p-4 bg-rose-50 rounded-xl text-center">
              <p className="text-sm text-gray-600">Interest Earned</p>
              <p className="text-xl font-bold text-rose-700 mt-1">Rs 46,77,578</p>
              <p className="text-xs text-gray-500">Compounded yearly at 8.2%</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl text-center border border-gray-200">
              <p className="text-sm text-gray-600">Maturity Amount</p>
              <p className="text-xl font-bold text-gray-900 mt-1">Rs 69,27,578</p>
              <p className="text-xs text-gray-500">After 21 years (tax free)</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">Note: Deposits are made for first 15 years. The account continues to earn interest for remaining 6 years (till 21 years from opening). The entire maturity amount is completely tax-free.</p>
        </div>

        {/* How to Open Account */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Open SSY Account</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-pink-700">1</span></div>
              <div><p className="font-medium text-gray-900">Visit any post office or authorized bank</p><p className="text-sm text-gray-600">SBI, PNB, Bank of Baroda, Canara Bank, and most public sector banks offer SSY accounts. Post offices in all areas accept SSY applications.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-pink-700">2</span></div>
              <div><p className="font-medium text-gray-900">Submit SSY application form</p><p className="text-sm text-gray-600">Fill the account opening form with girl child&apos;s details, parent/guardian details, and initial deposit amount (minimum Rs 250).</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-pink-700">3</span></div>
              <div><p className="font-medium text-gray-900">Attach required documents</p><p className="text-sm text-gray-600">Girl child&apos;s birth certificate, parent&apos;s ID and address proof (Aadhaar/PAN), passport-size photos of parent and child.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-pink-700">4</span></div>
              <div><p className="font-medium text-gray-900">Make initial deposit and receive passbook</p><p className="text-sm text-gray-600">Deposit minimum Rs 250 (up to Rs 1.5 lakh). A passbook is issued for tracking deposits and interest. Subsequent deposits via cash, cheque, or online transfer.</p></div>
            </div>
          </div>
        </div>

        {/* Important Rules */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Important Rules</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0"></span><span>Minimum Rs 250 must be deposited every year for 15 years. Default attracts Rs 50 penalty per year.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0"></span><span>Girl takes over account management at age 18 (or 10 if guardian applies).</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0"></span><span>50% partial withdrawal allowed once after girl turns 18 for higher education expenses.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0"></span><span>Account can be closed for marriage after girl turns 18 (with prior notice of 1 month before marriage).</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0"></span><span>Account can be transferred between post offices/banks anywhere in India free of cost.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0"></span><span>Premature closure before maturity only allowed in case of life-threatening illness or death of account holder.</span></li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div><h3 className="font-medium text-gray-900 mb-1">Can grandfather/uncle open SSY account?</h3><p className="text-sm text-gray-600">No. Only the biological parent or legal guardian of the girl child can open and operate the SSY account. Grandparents, uncles, or other relatives cannot open the account.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">What if I have 3 daughters?</h3><p className="text-sm text-gray-600">Maximum 2 SSY accounts can be opened per family. Exception: If twins or triplets are born as the second birth, a third account is permitted with birth certificate proof. First single + second twins = 3 accounts allowed.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">SSY vs PPF - which is better?</h3><p className="text-sm text-gray-600">SSY offers 8.2% vs PPF at 7.1%. Both have EEE tax status. However, SSY has a 21-year lock-in and is only for girl child, while PPF has 15-year lock-in with option to withdraw after 7 years. SSY is better for building a daughter&apos;s education/marriage corpus.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Can NRI open SSY account?</h3><p className="text-sm text-gray-600">As per current rules, NRIs cannot open new SSY accounts. If a resident Indian opens SSY and later becomes NRI, they can continue the account but must check with their bank for operational guidelines.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Is the interest rate fixed for 21 years?</h3><p className="text-sm text-gray-600">No. The interest rate is revised quarterly by the Government. It was 9.2% in 2015 and has gradually reduced to 8.2% in 2025. The applicable rate for each quarter is applied to the running balance.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
