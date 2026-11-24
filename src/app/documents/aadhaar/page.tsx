import Link from "next/link";
import type { Metadata } from "next";
import { ExternalLink, Fingerprint, CheckCircle, AlertCircle, HelpCircle, Lock, Smartphone } from "lucide-react";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Aadhaar Card - Enrolment, Update, Download & Lock 2025",
  description: "Complete guide to Aadhaar card 2025. Enrolment, address update, e-Aadhaar download from UIDAI, masked Aadhaar, Virtual ID, biometric lock/unlock, mAadhaar app and FAQs.",
};

export default function AadhaarPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/documents" className="hover:text-blue-700">Documents</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Aadhaar Card</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center">
              <Fingerprint className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Aadhaar Card — Complete Guide 2025</h1>
              <p className="text-gray-600 mt-0.5">Enrolment, update, e-Aadhaar download, VID, biometric lock and mAadhaar</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* What is Aadhaar */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What is Aadhaar?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aadhaar is a 12-digit unique identification number issued by the Unique Identification Authority of India (UIDAI), a statutory authority established under the Ministry of Electronics and Information Technology (MeitY). Every resident of India — citizens and long-term residents alike — can enrol for Aadhaar. As of 2025, over 135 crore Aadhaar numbers have been issued, making it the world&apos;s largest biometric identification system.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aadhaar is based on biometric and demographic data of the individual. When you enrol, your fingerprints (all 10 fingers), iris scans (both eyes), and face photograph are captured along with your name, address, date of birth, gender, and mobile number. This data is stored securely in the UIDAI Central Identities Data Repository (CIDR). Your Aadhaar number is a proof of identity and residence, but not proof of citizenship.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Aadhaar is used for Direct Benefit Transfer (DBT) of government subsidies, opening bank accounts, e-KYC for SIM cards, ITR filing, passport applications, and accessing a wide range of government services. The Aadhaar Act, 2016 governs its use and mandates strict privacy and security norms.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-700 text-white text-sm font-medium rounded-lg hover:bg-indigo-800 transition-colors">
              myAadhaar Portal <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-indigo-700 text-indigo-700 text-sm font-medium rounded-lg hover:bg-indigo-50 transition-colors">
              UIDAI Official Website <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* New Enrolment */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">New Aadhaar Enrolment</h2>
          <p className="text-gray-600 text-sm mb-6">Aadhaar enrolment cannot be done fully online — you must visit an authorised Aadhaar Enrolment Centre in person for biometric capture. The process is free of charge.</p>
          <div className="space-y-4">
            {[
              { n: "1", title: "Find an Aadhaar Enrolment Centre", desc: "Visit appointments.uidai.gov.in or the myAadhaar portal to find the nearest enrolment centre. Enrolment centres are located at banks, post offices, government offices, and CSC centres. You can optionally book an appointment online to skip the queue." },
              { n: "2", title: "Fill the Enrolment Form", desc: "At the centre, fill Aadhaar Enrolment Form (EF). Provide your name (as you want it on Aadhaar), date of birth, gender, address, and a valid mobile number. The mobile number is required to receive OTPs for all future Aadhaar services." },
              { n: "3", title: "Submit Supporting Documents", desc: "Submit proof of identity (PoI) and proof of address (PoA). Acceptable documents include: Passport, Voter ID, Ration Card, Driving Licence, PAN Card, Bank Passbook with photo, or any other documents in the UIDAI-approved list. If you lack formal documents, the 'Introducer' or 'Head of Family' mechanism can be used at certain centres." },
              { n: "4", title: "Biometric Capture", desc: "The enrolment officer captures your 10 fingerprints, iris scan of both eyes, and a face photograph. You also verify the demographic data on screen and confirm it is correct before submission." },
              { n: "5", title: "Receive Enrolment ID Slip", desc: "After enrolment, you receive a 28-digit Enrolment ID (EID) slip — a combination of 14-digit enrolment number and timestamp. Keep this safe as it is used to track your Aadhaar generation status." },
              { n: "6", title: "Aadhaar Generation", desc: "UIDAI processes your data and generates your Aadhaar number within 90 days (usually within 15–30 days). An SMS is sent to your registered mobile. You can then download e-Aadhaar from the UIDAI portal. The physical Aadhaar card is sent to your address via India Post." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-indigo-700">{step.n}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{step.title}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Update / Correction */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Aadhaar Update / Correction</h2>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">You can update your Aadhaar details if there is a change or error in your name, address, date of birth, gender, or mobile number. Some updates can be done online; others require a visit to an enrolment centre. Fee: <span className="font-semibold text-indigo-700">Rs 50 per update request</span> (online or offline).</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="border border-green-200 bg-green-50 rounded-xl p-4">
              <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Online via myAadhaar Portal</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• Address update (with valid address proof)</li>
                <li>• Mobile number update (OTP-based)</li>
                <li>• Email ID update</li>
                <li>• Language preference change</li>
              </ul>
              <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-indigo-700 hover:underline">
                Update online <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-xl p-4">
              <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2"><AlertCircle className="w-4 h-4" /> Visit Enrolment Centre</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• Name correction (requires supporting document)</li>
                <li>• Date of birth correction (once in a lifetime)</li>
                <li>• Gender correction</li>
                <li>• Biometric update (fingerprints/iris)</li>
              </ul>
              <p className="mt-3 text-xs text-amber-800">Book appointment at appointments.uidai.gov.in</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">Note: Name can be updated a maximum of 2 times. Date of birth can be corrected only once in a lifetime. Address updates have no such limit.</p>
        </div>

        <AdUnit />

        {/* Download e-Aadhaar */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Download e-Aadhaar</h2>
          <p className="text-gray-700 mb-4 text-sm">e-Aadhaar is a password-protected PDF copy of your Aadhaar card, digitally signed by UIDAI. It is legally valid for all purposes where Aadhaar is required, just like the physical card. It is available free of charge.</p>
          <div className="space-y-3">
            <div className="flex gap-4">
              <div className="w-7 h-7 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-indigo-700">1</span>
              </div>
              <p className="text-sm text-gray-700 mt-0.5">Visit myaadhaar.uidai.gov.in and click on &apos;Download Aadhaar&apos; under the self-service section.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-7 h-7 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-indigo-700">2</span>
              </div>
              <p className="text-sm text-gray-700 mt-0.5">Enter your 12-digit Aadhaar number (or 28-digit Enrolment ID if Aadhaar is not yet generated) and the security captcha.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-7 h-7 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-indigo-700">3</span>
              </div>
              <p className="text-sm text-gray-700 mt-0.5">Enter the OTP sent to your Aadhaar-registered mobile number. If your mobile is not linked, you must visit an enrolment centre to update it first.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-7 h-7 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-indigo-700">4</span>
              </div>
              <p className="text-sm text-gray-700 mt-0.5">Download the PDF. To open it, use the password: first 4 letters of your name (uppercase) + year of birth (e.g., RAJE1990).</p>
            </div>
          </div>
          <div className="mt-4 bg-indigo-50 rounded-xl p-4">
            <h3 className="font-semibold text-indigo-900 mb-2">Masked Aadhaar</h3>
            <p className="text-sm text-gray-700">While downloading, you can choose to download a &apos;Masked Aadhaar&apos;. In this version, the first 8 digits of your Aadhaar number are replaced with XXXX XXXX, and only the last 4 digits are visible. This version is safer to share with third parties such as hotels, banks, or businesses where showing your full Aadhaar is not necessary.</p>
          </div>
        </div>

        {/* VID and Locking */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-purple-600" /> Privacy Features: VID, Biometric Lock &amp; Aadhaar Lock
          </h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Virtual ID (VID)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">A Virtual ID (VID) is a temporary, revocable 16-digit number that can be used in place of your Aadhaar number for authentication and e-KYC purposes. The VID maps back to your Aadhaar at UIDAI&apos;s end, but the service provider (bank, telecom, etc.) never gets to see your actual Aadhaar number. You can generate or revoke a VID any time on the myAadhaar portal or via the mAadhaar app. A new VID can be generated once every calendar day.</p>
            </div>

            <div className="border-t border-gray-100 pt-5">
              <h3 className="font-semibold text-gray-800 mb-2">Biometric Lock / Unlock</h3>
              <p className="text-sm text-gray-700 leading-relaxed">You can lock your biometric data (fingerprints and iris) on the UIDAI portal or mAadhaar app. When locked, your biometrics cannot be used for authentication — protecting you from identity theft or unauthorized use at Aadhaar-enabled payment (AePS) terminals. If you need to use biometric authentication (e.g., at a bank for AePS), temporarily unlock it, complete the transaction, and lock it again. Biometric lock/unlock is free and instant.</p>
            </div>

            <div className="border-t border-gray-100 pt-5">
              <h3 className="font-semibold text-gray-800 mb-2">Aadhaar Number Lock / Unlock</h3>
              <p className="text-sm text-gray-700 leading-relaxed">You can lock your 12-digit Aadhaar number itself. When your Aadhaar number is locked, no service (financial or otherwise) can authenticate you using your Aadhaar number directly. Authentication will only work using a VID. This is the strongest privacy protection offered by UIDAI and is recommended for people who suspect their Aadhaar has been compromised. Lock and unlock operations are available on the myAadhaar portal and mAadhaar app using OTP verification.</p>
            </div>
          </div>

          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-purple-700 hover:bg-purple-50 px-3 py-2.5 rounded-lg border border-purple-100 transition-colors">
              <Lock className="w-3.5 h-3.5 flex-shrink-0" /> Lock Aadhaar / Biometrics
            </a>
            <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-indigo-700 hover:bg-indigo-50 px-3 py-2.5 rounded-lg border border-indigo-100 transition-colors">
              <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" /> Generate Virtual ID (VID)
            </a>
          </div>
        </div>

        <AdUnit />

        {/* Link Aadhaar */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Link Aadhaar to Bank Account &amp; Mobile</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" /> Link to Bank Account
              </h3>
              <p className="text-sm text-gray-700 mb-3">Linking Aadhaar to your bank account enables Direct Benefit Transfer (DBT) of government subsidies directly to your account. It is mandatory for receiving PM Kisan, LPG subsidy, MGNREGS wages, and other government benefits.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span><span>Visit your bank branch or internet banking portal</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span><span>Submit Aadhaar number and complete OTP verification</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span><span>Also required for AePS (Aadhaar-enabled Payment System) transactions</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span><span>Can also be done via ATM using Aadhaar number and fingerprint</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600" /> Link Mobile Number
              </h3>
              <p className="text-sm text-gray-700 mb-3">Your mobile number must be linked to Aadhaar to receive OTPs for online services. Without it, you cannot use the myAadhaar portal, download e-Aadhaar online, or use Aadhaar-based e-KYC. SIM cards are automatically linked during Aadhaar-based verification at the time of purchase.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>Visit an Aadhaar enrolment centre or authorised bank to update mobile</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>Online mobile update via myAadhaar portal requires existing linked mobile for OTP</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>Fee: Rs 50 for mobile update at enrolment centre</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* mAadhaar App */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-indigo-600" /> mAadhaar App
          </h2>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">mAadhaar is the official mobile application developed by UIDAI. It allows you to carry a secure digital copy of your Aadhaar on your smartphone. The app is available on both Android (Google Play Store) and iOS (Apple App Store).</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Key Features</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" /><span>Download and store Aadhaar QR card on your phone</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" /><span>Generate and manage Virtual ID (VID)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" /><span>Lock and unlock biometric data and Aadhaar number</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" /><span>Share Aadhaar QR code using a time-based OTP for secure sharing</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" /><span>Check authentication history — see who has verified your Aadhaar</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" /><span>Book appointment at enrolment centre and get update status</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Important Notes</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" /><span>You can add up to 5 Aadhaar profiles on one device (for family members)</span></li>
                <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" /><span>The mobile number on mAadhaar must be the one linked to that Aadhaar</span></li>
                <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" /><span>The digital Aadhaar on mAadhaar is accepted by most authorities as valid ID</span></li>
                <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" /><span>Always download mAadhaar only from official app stores — beware of fake apps</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Can NRIs (Non-Resident Indians) get Aadhaar?</h3>
              <p className="text-sm text-gray-600">Yes. NRIs who have been resident in India for 182 days or more in the 12 months preceding the date of application are eligible for Aadhaar enrolment. Since 2019, NRIs holding valid Indian passports can enrol for Aadhaar upon arrival in India without the 182-day waiting period. They need to present their Indian passport and provide a local address for enrolment.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">What is the UIDAI toll-free helpline?</h3>
              <p className="text-sm text-gray-600">UIDAI operates a toll-free helpline at <span className="font-semibold">1947</span>. You can call this number for assistance with Aadhaar enrolment, update issues, complaints about unauthorized use, or any general queries. The helpline is available in multiple Indian languages and operates during business hours. You can also raise grievances online at pgportal.gov.in or via the Aadhaar website.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">What is Baal Aadhaar (Blue Aadhaar) for children?</h3>
              <p className="text-sm text-gray-600">Baal Aadhaar is a special blue-coloured Aadhaar card issued to children under 5 years of age. Since children under 5 cannot provide biometrics (fingerprints are not developed and iris scanning is difficult), the Baal Aadhaar is issued based on the parent&apos;s Aadhaar and the child&apos;s birth certificate. When the child turns 5, biometrics must be updated at an enrolment centre. Similarly, when the child turns 15, biometrics need to be updated again as they change significantly. Both updates are mandatory and free of charge.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">How to check Aadhaar update status?</h3>
              <p className="text-sm text-gray-600">After submitting an update request (online or offline), you will receive a URN (Update Request Number). Track your update status on myaadhaar.uidai.gov.in by entering the URN and your Aadhaar number. You can also track via SMS: send UID STATUS [URN] to 51969 from your registered mobile number.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">Is it safe to share Aadhaar with private companies?</h3>
              <p className="text-sm text-gray-600">Use Masked Aadhaar or VID when sharing with private entities. The Aadhaar Act prohibits private entities from collecting, using, or storing Aadhaar data except as permitted. You should never share your Aadhaar with anyone unless it is required and you trust the entity. Check your Aadhaar authentication history on the myAadhaar portal to see all instances where your Aadhaar was used for verification — if you see suspicious activity, lock your Aadhaar immediately and report to UIDAI on 1947.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">I have not received my Aadhaar card. What to do?</h3>
              <p className="text-sm text-gray-600">After enrolment, your Aadhaar should be generated within 90 days. If it is not generated, check the status using your Enrolment ID on uidai.gov.in. If generated but the physical card was not received, you can download e-Aadhaar from the portal or order a PVC Aadhaar card (Rs 50) for delivery by post. The PVC card is durable and wallet-sized.</p>
            </div>
          </div>
        </div>

        {/* Official Links */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Official Resources</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "myAadhaar — All Self-Service Features", url: "https://myaadhaar.uidai.gov.in" },
              { label: "UIDAI Official Website", url: "https://uidai.gov.in" },
              { label: "Book Appointment — Enrolment / Update", url: "https://appointments.uidai.gov.in" },
              { label: "Check Aadhaar Status by EID", url: "https://myaadhaar.uidai.gov.in/CheckAadhaarStatus" },
              { label: "Verify Aadhaar Number (Quick Verify)", url: "https://myaadhaar.uidai.gov.in/verifyAadhaar" },
              { label: "Order PVC Aadhaar Card", url: "https://myaadhaar.uidai.gov.in/get-aadhaar" },
            ].map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2.5 rounded-lg border border-indigo-100 transition-colors">
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
