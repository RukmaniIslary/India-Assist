import Link from "next/link";
import { Metadata } from "next";
import { Home, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "PM Awas Yojana (PMAY) - Subsidy, Eligibility, Application",
  description: "Complete guide to Pradhan Mantri Awas Yojana. CLSS subsidy table, eligibility for EWS/LIG/MIG, Gramin benefits, application process, and how to apply online.",
  keywords: "PMAY, PM Awas Yojana, housing subsidy, CLSS, affordable housing, PMAY Gramin, PMAY Urban, home loan subsidy India",
};

export default function PMAYPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/schemes" className="hover:text-blue-700">Schemes</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">PM Awas Yojana</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">PM Awas Yojana (PMAY)</h1>
              <p className="text-gray-600 mt-0.5">Affordable housing with interest subsidy for all income categories</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Overview */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About PM Awas Yojana</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Pradhan Mantri Awas Yojana (PMAY) is the Government of India&apos;s flagship housing scheme with the vision of &quot;Housing for All.&quot; The scheme provides affordable housing to eligible urban and rural beneficiaries through interest subsidy on home loans (CLSS), direct financial assistance, and partnerships with private developers.</p>
          <p className="text-gray-700 leading-relaxed">PMAY has two components: PMAY-Urban (for urban areas) and PMAY-Gramin (for rural areas). As of 2025, over 3.5 crore houses have been sanctioned under both components combined.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://pmaymis.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-700 text-white text-sm font-medium rounded-lg hover:bg-orange-800 transition-colors">
              PMAY Urban Portal <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://pmayg.nic.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-orange-700 text-orange-700 text-sm font-medium rounded-lg hover:bg-orange-50 transition-colors">
              PMAY Gramin Portal <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* CLSS Subsidy Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">CLSS Subsidy Table (PMAY Urban)</h2>
          <p className="text-gray-600 text-sm mb-4">Credit Linked Subsidy Scheme (CLSS) provides upfront interest subsidy on home loans. The subsidy amount depends on your income category:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-3 font-semibold text-gray-900">Category</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900">Income (Annual)</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900">Subsidy Rate</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900">Max Loan</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900">Max Subsidy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="py-3 px-3 font-medium text-gray-900">EWS</td><td className="py-3 px-3">Up to Rs 3 Lakh</td><td className="py-3 px-3">6.50%</td><td className="py-3 px-3">Rs 6 Lakh</td><td className="py-3 px-3 font-semibold text-green-700">Rs 2.67 Lakh</td></tr>
                <tr><td className="py-3 px-3 font-medium text-gray-900">LIG</td><td className="py-3 px-3">Rs 3 - 6 Lakh</td><td className="py-3 px-3">6.50%</td><td className="py-3 px-3">Rs 6 Lakh</td><td className="py-3 px-3 font-semibold text-green-700">Rs 2.67 Lakh</td></tr>
                <tr><td className="py-3 px-3 font-medium text-gray-900">MIG-I</td><td className="py-3 px-3">Rs 6 - 12 Lakh</td><td className="py-3 px-3">4.00%</td><td className="py-3 px-3">Rs 9 Lakh</td><td className="py-3 px-3 font-semibold text-green-700">Rs 2.35 Lakh</td></tr>
                <tr><td className="py-3 px-3 font-medium text-gray-900">MIG-II</td><td className="py-3 px-3">Rs 12 - 18 Lakh</td><td className="py-3 px-3">3.00%</td><td className="py-3 px-3">Rs 12 Lakh</td><td className="py-3 px-3 font-semibold text-green-700">Rs 2.30 Lakh</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Subsidy is calculated at NPV (Net Present Value) at 9% discount rate for max 20 years. The subsidy amount is credited upfront to the loan account, reducing the effective EMI.</p>
        </div>

        {/* PMAY Gramin */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">PMAY Gramin Benefits</h2>
          <p className="text-gray-700 mb-4">PMAY-Gramin provides direct financial assistance to rural households for construction of pucca houses:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-orange-50 rounded-xl"><p className="font-semibold text-gray-900">Rs 1.20 Lakh (Plains)</p><p className="text-sm text-gray-600 mt-1">Financial assistance for house construction in plain areas</p></div>
            <div className="p-4 bg-orange-50 rounded-xl"><p className="font-semibold text-gray-900">Rs 1.30 Lakh (Hilly/IAP)</p><p className="text-sm text-gray-600 mt-1">For hilly states, difficult areas, and IAP districts</p></div>
            <div className="p-4 bg-blue-50 rounded-xl"><p className="font-semibold text-gray-900">Rs 12,000 for Toilet</p><p className="text-sm text-gray-600 mt-1">Additional amount from Swachh Bharat Mission for toilet construction</p></div>
            <div className="p-4 bg-green-50 rounded-xl"><p className="font-semibold text-gray-900">90 Days MGNREGA</p><p className="text-sm text-gray-600 mt-1">Unskilled labour wages under MGNREGA for house construction</p></div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>

          <h3 className="font-semibold text-gray-800 mb-2">PMAY Urban (CLSS):</h3>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span><span>Beneficiary family should not own a pucca house anywhere in India</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span><span>Family has not availed central government housing scheme benefit earlier</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span><span>For EWS/LIG: Female ownership or co-ownership is mandatory for new construction</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span><span>Aadhaar number is mandatory for all family members</span></li>
          </ul>

          <h3 className="font-semibold text-gray-800 mb-2">PMAY Gramin:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span><span>Families living in zero-room, one-room, or two-room kutcha houses</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span><span>Based on SECC 2011 data and Gram Sabha validation</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span><span>Priority given to SC/ST, minorities, freed bonded labourers, and families with disabled members</span></li>
          </ul>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-orange-700">1</span></div>
              <div><p className="font-medium text-gray-900">For CLSS: Apply through your bank</p><p className="text-sm text-gray-600">When you take a home loan from any bank, request PMAY-CLSS subsidy. The bank processes the subsidy application through the Central Nodal Agency (NHB/HUDCO/SBI).</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-orange-700">2</span></div>
              <div><p className="font-medium text-gray-900">Self-declaration of income</p><p className="text-sm text-gray-600">Submit self-certification of annual household income. No income proof documents needed for EWS/LIG. MIG requires income documents.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-orange-700">3</span></div>
              <div><p className="font-medium text-gray-900">Subsidy credited to loan account</p><p className="text-sm text-gray-600">Once approved, the subsidy amount is credited upfront to your loan account within 3-4 months. Your EMI is recalculated on the reduced principal.</p></div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-sm font-medium text-amber-800">For PMAY-Gramin: You do not apply directly. Beneficiaries are identified from SECC data and selected by Gram Sabha. Check your name on the awaassoft.nic.in portal or contact your Gram Panchayat.</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div><h3 className="font-medium text-gray-900 mb-1">Can I get PMAY subsidy on existing home loan?</h3><p className="text-sm text-gray-600">Yes, if your home loan was taken after 17 June 2015 (for EWS/LIG) or 1 January 2017 (for MIG). Request your bank to process the CLSS subsidy application retroactively.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">What is the carpet area limit?</h3><p className="text-sm text-gray-600">EWS: up to 30 sq. m. LIG: up to 60 sq. m. MIG-I: up to 160 sq. m. MIG-II: up to 200 sq. m. These are carpet area limits, not built-up area.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">How much EMI reduction does CLSS give?</h3><p className="text-sm text-gray-600">For EWS/LIG taking Rs 6 lakh loan at 8.5% for 20 years: original EMI is Rs 5,208. After Rs 2.67 lakh CLSS subsidy, effective loan reduces to Rs 3.33 lakh, EMI drops to Rs 2,896. You save Rs 2,312/month.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Is PMAY scheme still active in 2025?</h3><p className="text-sm text-gray-600">Yes. PMAY 2.0 has been extended with revised income criteria and benefits. The Government has allocated Rs 79,000 crore for continuation targeting 1 crore additional urban and 2 crore rural houses.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
