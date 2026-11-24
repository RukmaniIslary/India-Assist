import Link from "next/link";
import { Metadata } from "next";
import { Heart, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Ayushman Bharat PMJAY - Free Rs 5 Lakh Health Insurance",
  description: "Complete guide to Ayushman Bharat PM Jan Arogya Yojana. Check eligibility, get health card, find empanelled hospitals, and claim process for Rs 5 lakh free treatment.",
  keywords: "Ayushman Bharat, PMJAY, health insurance, free treatment, hospital list, Ayushman card, Jan Arogya Yojana, health scheme India",
};

export default function AyushmanBharatPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/schemes" className="hover:text-blue-700">Schemes</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Ayushman Bharat</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Ayushman Bharat - PMJAY</h1>
              <p className="text-gray-600 mt-0.5">Free health coverage up to Rs 5 lakh per family per year</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Overview */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About Ayushman Bharat PMJAY</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) is the world&apos;s largest government-funded health insurance scheme. Launched on 23 September 2018, it provides free health coverage of Rs 5 lakh per family per year for secondary and tertiary care hospitalization to over 12 crore poor and vulnerable families (approximately 55 crore beneficiaries).</p>
          <p className="text-gray-700 leading-relaxed">The scheme covers 3 days of pre-hospitalization and 15 days of post-hospitalization expenses including diagnostics and medicines. There is no cap on family size, age, or gender, and pre-existing conditions are covered from day one.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://pmjay.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-red-700 text-white text-sm font-medium rounded-lg hover:bg-red-800 transition-colors">
              Official Portal <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://beneficiary.nha.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-red-700 text-red-700 text-sm font-medium rounded-lg hover:bg-red-50 transition-colors">
              Check Eligibility <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 rounded-xl"><p className="font-semibold text-gray-900">Rs 5 Lakh Coverage</p><p className="text-sm text-gray-600 mt-1">Per family per year on a floater basis. No premium to be paid by beneficiary.</p></div>
            <div className="p-4 bg-blue-50 rounded-xl"><p className="font-semibold text-gray-900">Cashless Treatment</p><p className="text-sm text-gray-600 mt-1">At any empanelled hospital across India. No upfront payment required.</p></div>
            <div className="p-4 bg-green-50 rounded-xl"><p className="font-semibold text-gray-900">1,949+ Procedures Covered</p><p className="text-sm text-gray-600 mt-1">Surgery, medical, day care, ICU, OT charges, medicines, diagnostics all included.</p></div>
            <div className="p-4 bg-purple-50 rounded-xl"><p className="font-semibold text-gray-900">Pre-existing Diseases</p><p className="text-sm text-gray-600 mt-1">All pre-existing conditions covered from day one. No waiting period.</p></div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
          <p className="text-gray-700 mb-4">Eligibility is based on SECC (Socio-Economic Caste Census) 2011 data. You are eligible if your family falls under any of these categories:</p>

          <h3 className="font-semibold text-gray-800 mb-2">Rural Area Eligibility (any one):</h3>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Families living in kutcha house (one room with walls and roof)</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>No adult member between 16-59 years in the family</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Female-headed household with no male member aged 16-59</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Disabled member with no able-bodied adult member</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>SC/ST households, manual scavenger families, landless households</span></li>
          </ul>

          <h3 className="font-semibold text-gray-800 mb-2">Urban Area Eligibility (occupational category):</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Ragpicker, beggar, domestic worker, street vendor, cobbler, hawker</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Construction worker, plumber, mason, painter, welder, security guard</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Sweeper, sanitation worker, gardener, home-based worker, artisan</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Transport worker (driver, conductor, helper, rickshaw puller)</span></li>
          </ul>
        </div>

        {/* How to Get Ayushman Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Get Ayushman Bharat Card</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-red-700">1</span></div>
              <div><p className="font-medium text-gray-900">Check your eligibility</p><p className="text-sm text-gray-600">Visit beneficiary.nha.gov.in or call 14555. Enter your Aadhaar or ration card number.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-red-700">2</span></div>
              <div><p className="font-medium text-gray-900">Visit a Common Service Centre or empanelled hospital</p><p className="text-sm text-gray-600">Carry Aadhaar card and ration card. Biometric verification will be done.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-red-700">3</span></div>
              <div><p className="font-medium text-gray-900">Get your Ayushman Card</p><p className="text-sm text-gray-600">Once verified, your Ayushman Bharat Health Account (ABHA) card is generated with a unique ID. This is your health card for cashless treatment.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-red-700">4</span></div>
              <div><p className="font-medium text-gray-900">Use at any empanelled hospital</p><p className="text-sm text-gray-600">Show your Ayushman card at any empanelled hospital across India for cashless treatment. The hospital verifies and provides treatment without any payment.</p></div>
            </div>
          </div>
        </div>

        {/* Hospital List */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Finding Empanelled Hospitals</h2>
          <p className="text-gray-700 mb-4">Over 28,000 hospitals are empanelled under PMJAY across India, including both government and private hospitals. To find hospitals near you:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Visit <a href="https://pmjay.gov.in/hospital" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">pmjay.gov.in/hospital</a> and search by state, district, or hospital name</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Call the Ayushman helpline at 14555 (toll-free) for hospital information</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Look for the &quot;Ayushman Mitra&quot; desk at hospital reception areas</span></li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div><h3 className="font-medium text-gray-900 mb-1">Is Ayushman Bharat card free?</h3><p className="text-sm text-gray-600">Yes. The Ayushman Bharat health card is completely free. There is no registration fee, annual premium, or renewal charges. Beware of fraudsters charging money for card generation.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Can I use Ayushman card in another state?</h3><p className="text-sm text-gray-600">Yes. PMJAY is portable across India. You can avail cashless treatment at any empanelled hospital in any state, regardless of where your card was issued. This is especially useful for migrant workers.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">What treatments are covered?</h3><p className="text-sm text-gray-600">The scheme covers 1,949+ treatment packages including surgeries, cancer treatment, dialysis, knee replacement, heart bypass, cataract surgery, and more. OPD visits, cosmetic procedures, and fertility treatments are not covered.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">My name is not in the beneficiary list. What to do?</h3><p className="text-sm text-gray-600">If your family is not in the SECC 2011 database but meets criteria, contact your state health agency or visit the Ayushman Bharat helpline at 14555. Some states have added additional beneficiary categories beyond SECC data.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">What if hospital refuses to treat under PMJAY?</h3><p className="text-sm text-gray-600">Empanelled hospitals cannot refuse treatment to eligible PMJAY beneficiaries. If refused, call 14555 or lodge a complaint on the PMJAY portal. The hospital may face de-empanelment for refusal.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
