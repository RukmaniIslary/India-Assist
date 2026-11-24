import Link from "next/link";
import { Metadata } from "next";
import { HardHat, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "E-Shram Card - Registration, Benefits, Worker Categories",
  description: "Complete guide to E-Shram card for unorganized workers. Registration process, benefits including Rs 2 lakh insurance, eligible worker categories, and how to apply online.",
  keywords: "E-Shram card, E-Shram registration, unorganized worker, NDUW, labour card, eshram.gov.in, worker insurance, UAN card",
};

export default function EShramPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/schemes" className="hover:text-blue-700">Schemes</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">E-Shram Card</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
              <HardHat className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">E-Shram Card</h1>
              <p className="text-gray-600 mt-0.5">National database registration for unorganized workers with insurance benefits</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Overview */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About E-Shram Portal</h2>
          <p className="text-gray-700 leading-relaxed mb-4">E-Shram is the National Database of Unorganized Workers (NDUW) launched by the Ministry of Labour and Employment. It creates a centralized database of all unorganized workers in India, providing them a Universal Account Number (UAN) and linking them to various social security schemes.</p>
          <p className="text-gray-700 leading-relaxed">Over 29 crore unorganized workers have registered on the portal. Registration is free and provides immediate access to accidental insurance coverage of Rs 2 lakh under PM Suraksha Bima Yojana (PMSBY).</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://eshram.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700 text-white text-sm font-medium rounded-lg hover:bg-amber-800 transition-colors">
              Register on E-Shram <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Benefits of E-Shram Card</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50 rounded-xl"><p className="font-semibold text-gray-900">Rs 2 Lakh Accident Insurance</p><p className="text-sm text-gray-600 mt-1">Rs 2 lakh for accidental death or permanent disability, Rs 1 lakh for partial disability under PMSBY</p></div>
            <div className="p-4 bg-blue-50 rounded-xl"><p className="font-semibold text-gray-900">Social Security Access</p><p className="text-sm text-gray-600 mt-1">Automatic linkage to PMJJBY, PMSBY, APY, PM Shram Yogi Maandhan, and PMAY</p></div>
            <div className="p-4 bg-green-50 rounded-xl"><p className="font-semibold text-gray-900">Government Scheme Priority</p><p className="text-sm text-gray-600 mt-1">Priority in future government welfare schemes, food distribution, and emergency relief</p></div>
            <div className="p-4 bg-purple-50 rounded-xl"><p className="font-semibold text-gray-900">Portable Identity</p><p className="text-sm text-gray-600 mt-1">Universal Account Number (UAN) valid across states for accessing benefits even after migration</p></div>
          </div>
        </div>

        {/* Worker Categories */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Eligible Worker Categories</h2>
          <p className="text-gray-700 mb-4">E-Shram covers workers across 400+ occupations in the unorganized sector. Major categories include:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Construction workers",
              "Domestic workers / helpers",
              "Street vendors / hawkers",
              "Agricultural workers / labourers",
              "MGNREGA workers",
              "Fishermen and fisherwomen",
              "Auto / taxi / rickshaw drivers",
              "Beedi workers",
              "Migrant workers",
              "Leather workers / cobblers",
              "Home-based workers / artisans",
              "Gig and platform workers",
              "Plantation workers",
              "Salt workers / mine workers",
              "Newspaper vendors",
              "Barbers / beauticians",
            ].map(cat => (
              <div key={cat} className="flex items-center gap-2 p-2.5 rounded-lg bg-gray-50">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></span>
                <span className="text-sm text-gray-700">{cat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Steps */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Register for E-Shram Card</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-amber-700">1</span></div>
              <div><p className="font-medium text-gray-900">Visit eshram.gov.in or CSC</p><p className="text-sm text-gray-600">Self-registration online or visit nearest Common Service Centre. Registration is completely free.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-amber-700">2</span></div>
              <div><p className="font-medium text-gray-900">Enter Aadhaar and mobile number</p><p className="text-sm text-gray-600">Aadhaar-linked mobile is required for OTP verification. If mobile not linked, visit Aadhaar centre first.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-amber-700">3</span></div>
              <div><p className="font-medium text-gray-900">Fill personal and occupation details</p><p className="text-sm text-gray-600">Enter name, date of birth, address, occupation category, monthly income, bank account details, and nominee information.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-amber-700">4</span></div>
              <div><p className="font-medium text-gray-900">Get UAN and E-Shram Card</p><p className="text-sm text-gray-600">A 12-digit Universal Account Number (UAN) is generated. Download your E-Shram card as PDF. Insurance coverage starts immediately.</p></div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-sm font-medium text-amber-800">Required documents: Aadhaar card, Aadhaar-linked mobile number, bank account details (IFSC code), and nominee details. No fees charged for registration.</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div><h3 className="font-medium text-gray-900 mb-1">Who is an unorganized worker?</h3><p className="text-sm text-gray-600">Any worker who is not covered under EPFO/ESIC or other formal social security schemes, working in establishments with less than 10 employees, or self-employed without regular income. Age must be 16-59 years.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Is E-Shram card mandatory?</h3><p className="text-sm text-gray-600">It is not mandatory by law but highly recommended. Future government welfare schemes and emergency relief (like COVID relief) may be distributed only through the E-Shram database.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Do I get money just for registering?</h3><p className="text-sm text-gray-600">Registration itself does not provide cash payment. However, you get Rs 2 lakh accidental insurance for free and become eligible for various government welfare schemes. Some states have linked additional benefits to E-Shram registration.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Can salaried employees register?</h3><p className="text-sm text-gray-600">No. If you are already registered under EPFO (PF) or ESIC, you are not eligible for E-Shram. The scheme is exclusively for workers in the unorganized/informal sector.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">How to update E-Shram card details?</h3><p className="text-sm text-gray-600">Visit eshram.gov.in, click &quot;Update Profile&quot; and login with your registered mobile number. You can update occupation, address, bank account, and nominee details. Aadhaar details cannot be changed through E-Shram.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
