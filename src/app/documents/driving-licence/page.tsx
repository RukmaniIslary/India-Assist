import Link from "next/link";
import type { Metadata } from "next";
import { ExternalLink, Car, CheckCircle, AlertCircle, HelpCircle, Shield } from "lucide-react";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Driving Licence Apply Online India 2025 - LL, DL & Renewal",
  description: "Complete guide to apply for driving licence in India 2025. Learner licence, permanent DL, renewal via Parivahan portal. Eligibility, fees, vehicle categories, IDP and FAQs.",
};

export default function DrivingLicencePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/documents" className="hover:text-blue-700">Documents</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Driving Licence</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-teal-700 rounded-xl flex items-center justify-center">
              <Car className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Driving Licence — Complete Guide 2025</h1>
              <p className="text-gray-600 mt-0.5">Learner licence, permanent DL, renewal, categories and IDP explained</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Overview */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About Driving Licence in India</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A driving licence (DL) is an official document issued by the Regional Transport Office (RTO) that authorises an individual to operate a motor vehicle on public roads in India. Issued under the Motor Vehicles Act, 1988, a driving licence is mandatory for driving any motor vehicle, from motorcycles to heavy trucks. Driving without a valid licence is a punishable offence under Indian traffic law.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The process of obtaining a permanent driving licence in India follows a two-step approach: first obtaining a Learner Licence (LL), followed by a road skill test for the permanent Driving Licence. Since 2021, the entire process — from application to payment — is managed through the Sarathi portal under the Parivahan Sewa platform of the Ministry of Road Transport and Highways (MoRTH).
          </p>
          <p className="text-gray-700 leading-relaxed">
            India issues driving licences with multiple vehicle class endorsements. The validity of a driving licence for a non-transport vehicle is 20 years from the date of issue, or until the licence holder turns 50 years of age, whichever is earlier. After 50, renewal is required every 5 years.
          </p>
          <div className="mt-6">
            <a href="https://parivahan.gov.in" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-800 transition-colors">
              Parivahan Sewa Portal <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Eligibility */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="font-semibold text-green-900 mb-2">For Two-Wheelers (Geared &amp; Ungeared)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Minimum age: 16 years for motorcycles without gear (up to 50cc)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Minimum age: 18 years for motorcycles with gear</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Parental consent required for applicants aged 16–17</span></li>
              </ul>
            </div>
            <div className="bg-teal-50 rounded-xl p-4">
              <h3 className="font-semibold text-teal-900 mb-2">For Cars &amp; Other Vehicles</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Minimum age: 18 years for Light Motor Vehicles (cars, jeeps)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Minimum age: 20 years for Heavy Motor Vehicles (trucks, buses)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Must pass a written test on traffic rules and road signs</span></li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">Note: Applicants must be physically and mentally fit to drive. A medical certificate (Form 1A) is required for commercial vehicle licences and for applicants above 40 years of age.</p>
        </div>

        {/* 3-Step Process */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Three Steps to Get Your Driving Licence</h2>
          <p className="text-gray-600 text-sm mb-6">The complete process involves getting a Learner Licence first, then a permanent Driving Licence after a mandatory waiting period.</p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="border border-green-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">Apply for Learner Licence (LL)</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">A Learner Licence is a temporary permit that allows you to practise driving under supervision of an experienced driver. It is mandatory before you can apply for a permanent DL.</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-medium">Online:</span> Visit sarathi.parivahan.gov.in → Select your state → LL Application → Fill form, upload documents, pay fee (Rs 200–400 depending on state and vehicle class).</p>
                <p><span className="font-medium">Slot booking:</span> Book a slot at your RTO for the Learner Licence test (computer-based MCQ test on traffic signs, rules, and road safety).</p>
                <p><span className="font-medium">Test:</span> 15–20 questions on traffic rules. Passing marks: 57% (9 out of 15). The LL is issued immediately on the portal if you pass.</p>
                <p><span className="font-medium">Validity:</span> Learner Licence is valid for 6 months. You must apply for a permanent DL within this period.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border border-blue-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">Practise Driving for 30 Days</h3>
              </div>
              <p className="text-sm text-gray-700">After obtaining your LL, you must practise driving for a minimum of 30 days before applying for the permanent driving licence test. During this period, always carry your LL while driving and drive only under the supervision of a valid licence holder. Display an &apos;L&apos; board on the vehicle front and rear as required by law.</p>
            </div>

            {/* Step 3 */}
            <div className="border border-teal-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">Apply for Permanent Driving Licence (DL)</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">After 30 days from LL issuance, apply for permanent DL on the Sarathi portal. Book a driving test slot at your RTO. On the test date, appear for the practical skill test at the RTO test track.</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-medium">Apply online:</span> Go to sarathi.parivahan.gov.in → DL Application → Enter LL number → Fill form, upload photo and signature, pay fee (Rs 300–600).</p>
                <p><span className="font-medium">Driving test:</span> Practical test on the RTO track. Tests include vehicle control, turning, reversing, and following traffic signals. Some modern RTOs use automated driving test tracks.</p>
                <p><span className="font-medium">Result:</span> DL is issued within 7–30 days after passing the test. It is mailed to your registered address and also available to download on DigiLocker.</p>
              </div>
            </div>
          </div>
        </div>

        <AdUnit />

        {/* Fee Structure */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Fee Structure</h2>
          <p className="text-sm text-gray-600 mb-4">Fees vary slightly by state but the approximate amounts under the Central Motor Vehicles Rules are:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Service</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Approx. Fee</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="py-3 px-4 text-gray-700">Learner Licence (LL)</td><td className="py-3 px-4 font-medium">Rs 200–400</td><td className="py-3 px-4 text-gray-500">Per vehicle class. Additional class = additional fee.</td></tr>
                <tr><td className="py-3 px-4 text-gray-700">Driving Licence (DL)</td><td className="py-3 px-4 font-medium">Rs 300–500</td><td className="py-3 px-4 text-gray-500">Includes test fee and DL issue fee.</td></tr>
                <tr><td className="py-3 px-4 text-gray-700">Renewal of DL</td><td className="py-3 px-4 font-medium">Rs 200–400</td><td className="py-3 px-4 text-gray-500">Late fee applies if renewed after expiry.</td></tr>
                <tr><td className="py-3 px-4 text-gray-700">Duplicate DL (lost/damaged)</td><td className="py-3 px-4 font-medium">Rs 300–450</td><td className="py-3 px-4 text-gray-500">FIR copy required for lost DL.</td></tr>
                <tr><td className="py-3 px-4 text-gray-700">International Driving Permit</td><td className="py-3 px-4 font-medium">Rs 500–1,000</td><td className="py-3 px-4 text-gray-500">Valid for 1 year. Applied at RTO with valid DL.</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Vehicle Categories */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" /> Driving Licence Vehicle Categories
          </h2>
          <p className="text-sm text-gray-600 mb-4">Your DL specifies which vehicle classes you are authorised to drive. Common categories are:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Category Code</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Full Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="py-3 px-4 font-medium text-gray-800">MCWOG</td><td className="py-3 px-4 text-gray-700">Motorcycle Without Gear</td><td className="py-3 px-4 text-gray-600">Scooters, mopeds, Activa (engine up to 50cc; age 16+)</td></tr>
                <tr><td className="py-3 px-4 font-medium text-gray-800">MCWG</td><td className="py-3 px-4 text-gray-700">Motorcycle With Gear</td><td className="py-3 px-4 text-gray-600">Bikes like Splendor, Pulsar, Royal Enfield (age 18+)</td></tr>
                <tr><td className="py-3 px-4 font-medium text-gray-800">LMV</td><td className="py-3 px-4 text-gray-700">Light Motor Vehicle</td><td className="py-3 px-4 text-gray-600">Cars, jeeps, taxis (up to 7500 kg GVW; age 18+)</td></tr>
                <tr><td className="py-3 px-4 font-medium text-gray-800">HMV</td><td className="py-3 px-4 text-gray-700">Heavy Motor Vehicle</td><td className="py-3 px-4 text-gray-600">Trucks, buses, heavy goods vehicles (age 20+)</td></tr>
                <tr><td className="py-3 px-4 font-medium text-gray-800">TRANS</td><td className="py-3 px-4 text-gray-700">Transport Vehicle</td><td className="py-3 px-4 text-gray-600">Vehicles used for hire or reward (commercial licence)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Renewal and IDP */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">DL Renewal &amp; International Driving Permit</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600" /> DL Renewal
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span><span>A non-transport DL is valid for 20 years or until age 50, whichever comes first</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span><span>After age 50, renewal required every 5 years with a medical fitness certificate</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span><span>Apply for renewal 1 month before expiry to avoid late fees</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span><span>Renewal available online via sarathi.parivahan.gov.in — no RTO visit needed in most states</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span><span>Transport vehicle DL renewal: every 3 years, requires medical certificate</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600" /> International Driving Permit (IDP)
              </h3>
              <p className="text-sm text-gray-700 mb-3">An IDP allows you to drive abroad in countries that are party to the 1949 Geneva Convention or 1968 Vienna Convention on Road Traffic. It is a multilingual translation of your Indian DL.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>Apply at your local RTO in person or online via Parivahan portal</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>Valid for 1 year from issue date — must carry Indian DL alongside</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>Documents needed: Valid Indian DL, passport, visa, 2 passport photos</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>Not valid in USA and some other countries — check local rules before travelling</span></li>
              </ul>
            </div>
          </div>
        </div>

        <AdUnit />

        {/* FAQs */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-green-600" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Can I apply for DL in a state different from my home state?</h3>
              <p className="text-sm text-gray-600">You must apply for a driving licence in the RTO of your residential jurisdiction. If you relocate, you can transfer your DL to the new state by applying at the local RTO with proof of new address. However, your DL number will remain the same — only the issuing authority details change.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">What happens if I fail the driving test?</h3>
              <p className="text-sm text-gray-600">You can reappear for the driving test after 7 days. Book a fresh slot on the Sarathi portal. You do not need to reapply — your application remains valid until your LL expires (6 months). If your LL expires, you must obtain a fresh Learner Licence before attempting the DL test again.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">Is the driving licence available on DigiLocker?</h3>
              <p className="text-sm text-gray-600">Yes. Your driving licence is available as a digitally verified document in the DigiLocker app under the MoRTH/Sarathi section. The DigiLocker DL is accepted as valid proof of identity and driving authorisation by traffic police across India under the Motor Vehicles Amendment Act, 2019.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">How to check DL application status?</h3>
              <p className="text-sm text-gray-600">Visit sarathi.parivahan.gov.in → Application Status → Enter your application number and date of birth. You can also track via SMS: send VAHAN[space]DL[space]your application number to 7738299899. Status updates are also sent to your registered mobile number.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">What are the documents required for DL application?</h3>
              <p className="text-sm text-gray-600">You need proof of age (birth certificate, Aadhaar, 10th certificate), proof of address (Aadhaar, voter ID, passport, electricity bill), and your Learner Licence. A Form 1 (self-declaration of medical fitness) is mandatory. Form 1A (medical certificate from a licensed doctor) is needed for commercial vehicle DL or if you are above 40 years of age.</p>
            </div>
          </div>
        </div>

        {/* Official Links */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Official Resources</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "Sarathi — Learner Licence Application", url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do" },
              { label: "Parivahan Sewa Portal", url: "https://parivahan.gov.in" },
              { label: "Check DL Application Status", url: "https://sarathi.parivahan.gov.in/sarathiservice/applicationStatusByApplicationNo.do" },
              { label: "DigiLocker — Driving Licence", url: "https://www.digilocker.gov.in" },
              { label: "Vahan Citizen Services", url: "https://vahan.parivahan.gov.in" },
              { label: "MoRTH — Ministry of Road Transport", url: "https://morth.nic.in" },
            ].map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-green-700 hover:text-green-900 hover:bg-green-50 px-3 py-2.5 rounded-lg border border-green-100 transition-colors">
                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
