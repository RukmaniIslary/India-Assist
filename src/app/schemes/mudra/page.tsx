 import Link from "next/link";
import { Metadata } from "next";
import { Briefcase, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "PM Mudra Yojana - Shishu, Kishore, Tarun Loan Details",
  description: "Complete guide to Pradhan Mantri Mudra Yojana. Loan categories (Shishu, Kishore, Tarun), eligibility, interest rates, application process, and documents required.",
  keywords: "Mudra loan, PMMY, Shishu loan, Kishore loan, Tarun loan, business loan, micro enterprise loan, mudra.org.in, collateral free loan",
};

export default function MudraPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/schemes" className="hover:text-blue-700">Schemes</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">PM Mudra Yojana</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">PM Mudra Yojana (PMMY)</h1>
              <p className="text-gray-600 mt-0.5">Collateral-free business loans up to Rs 10 lakh for micro enterprises</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Overview */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About PM Mudra Yojana</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Pradhan Mantri Mudra Yojana (PMMY) was launched on 8 April 2015 to provide institutional credit to non-corporate, non-farm small/micro enterprises. The scheme offers loans up to Rs 10 lakh without collateral requirement from banks, NBFCs, and MFIs.</p>
          <p className="text-gray-700 leading-relaxed">As of 2025, over 47 crore loans amounting to more than Rs 27 lakh crore have been sanctioned under PMMY. About 68% of loans are availed by women entrepreneurs and 51% by SC/ST/OBC applicants.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://www.mudra.org.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-700 text-white text-sm font-medium rounded-lg hover:bg-indigo-800 transition-colors">
              Official Mudra Portal <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://www.udyamimitra.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-indigo-700 text-indigo-700 text-sm font-medium rounded-lg hover:bg-indigo-50 transition-colors">
              Apply via Udyami Mitra <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Loan Categories */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Mudra Loan Categories</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Category</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Loan Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Typical Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-green-50">
                  <td className="py-4 px-4 font-bold text-green-800">Shishu</td>
                  <td className="py-4 px-4 font-medium">Up to Rs 50,000</td>
                  <td className="py-4 px-4 text-gray-700">Starting a new micro business or income-generating activity</td>
                  <td className="py-4 px-4">10-12% p.a.</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-4 px-4 font-bold text-blue-800">Kishore</td>
                  <td className="py-4 px-4 font-medium">Rs 50,001 to Rs 5 Lakh</td>
                  <td className="py-4 px-4 text-gray-700">Expanding existing business, purchasing equipment/stock</td>
                  <td className="py-4 px-4">11-14% p.a.</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="py-4 px-4 font-bold text-purple-800">Tarun</td>
                  <td className="py-4 px-4 font-medium">Rs 5,00,001 to Rs 10 Lakh</td>
                  <td className="py-4 px-4 text-gray-700">Significant expansion, new machinery, working capital for growing business</td>
                  <td className="py-4 px-4">12-16% p.a.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Interest rates vary by bank and applicant profile. No collateral or guarantor required. Processing fee is typically 0.50% of loan amount or nil for Shishu category.</p>
        </div>

        {/* Eligibility */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
          <h3 className="font-semibold text-gray-800 mb-2">Who Can Apply:</h3>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span><span>Any Indian citizen with a business plan or existing micro/small enterprise</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span><span>Shopkeepers, vendors, artisans, food service units, repair shops</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span><span>Machine operators, small manufacturing units, handloom/handicraft workers</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span><span>Professionals and service providers (tailor, salon, transport, etc.)</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span><span>Agriculture-allied activities (food processing, poultry, fishery, bee-keeping)</span></li>
          </ul>

          <h3 className="font-semibold text-gray-800 mb-2">Not Eligible:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Direct agriculture (crop farming, land purchase) - covered under KCC/NABARD</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Existing defaulters on any bank loan (NPA/willful defaulter)</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Corporate entities and registered companies (meant for individual/partnership/proprietorship)</span></li>
          </ul>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Apply for Mudra Loan</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-indigo-700">1</span></div>
              <div><p className="font-medium text-gray-900">Prepare a business plan</p><p className="text-sm text-gray-600">A brief description of your business, purpose of loan, expected income, and repayment plan. For Shishu loans, verbal explanation at the bank may suffice.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-indigo-700">2</span></div>
              <div><p className="font-medium text-gray-900">Visit any bank, NBFC, or MFI</p><p className="text-sm text-gray-600">All public sector banks, private banks, regional rural banks, NBFCs, and micro-finance institutions are authorized to give Mudra loans. No separate Mudra bank exists.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-indigo-700">3</span></div>
              <div><p className="font-medium text-gray-900">Submit application with documents</p><p className="text-sm text-gray-600">Fill the Mudra loan application form, attach required documents. You can also apply online through udyamimitra.in or psbloansin59minutes.com.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-indigo-700">4</span></div>
              <div><p className="font-medium text-gray-900">Loan sanction and disbursement</p><p className="text-sm text-gray-600">Bank processes the application within 7-10 working days for Shishu, 2-4 weeks for Kishore/Tarun. A Mudra Card (debit card) is issued for working capital withdrawal.</p></div>
            </div>
          </div>

          <h3 className="font-semibold text-gray-800 mt-6 mb-3">Documents Required:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span><span>Identity proof (Aadhaar, PAN, Voter ID)</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span><span>Address proof (Aadhaar, utility bill, rent agreement)</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span><span>Passport-size photographs</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span><span>Business proof (if existing): shop license, GST certificate, Udyam registration</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span><span>Quotation for machinery/equipment (for Kishore/Tarun)</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span><span>Last 6 months bank statements (for Kishore/Tarun)</span></li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div><h3 className="font-medium text-gray-900 mb-1">Is Mudra loan a subsidy or grant?</h3><p className="text-sm text-gray-600">No. Mudra loan is a regular bank loan that has to be repaid with interest. It is not a subsidy, grant, or free money from the government. The government only guarantees the loan through CGFMU (Credit Guarantee Fund).</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">What if bank refuses Mudra loan?</h3><p className="text-sm text-gray-600">Banks cannot arbitrarily refuse. If rejected, ask for written reason. You can approach the bank&apos;s branch manager, then the zonal office, or file a complaint on CPGRAMS or Banking Ombudsman. Having a clear business plan increases approval chances.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Can I get Mudra loan without CIBIL score?</h3><p className="text-sm text-gray-600">For Shishu loans (up to Rs 50,000), CIBIL score is usually not checked. For Kishore and Tarun, banks may check credit history but there is no minimum score requirement. First-time borrowers without any credit history are also eligible.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">What is the repayment period?</h3><p className="text-sm text-gray-600">Shishu: up to 5 years. Kishore/Tarun: up to 5-7 years. For working capital (Mudra Card), it is typically renewed annually. EMI starts after 1-6 months moratorium period depending on the bank.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Can women get special benefits under Mudra?</h3><p className="text-sm text-gray-600">Yes. Banks often offer 0.25% lower interest rates for women applicants. Under Shishu category, priority is given to women-led businesses. About 68% of all Mudra loans have been availed by women entrepreneurs.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
