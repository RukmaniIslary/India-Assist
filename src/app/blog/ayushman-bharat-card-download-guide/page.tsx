import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Ayushman Bharat Card 2026: How to Check Eligibility, Get Your Card and Use It",
  description: "How to check if you are covered under AB PM-JAY, get your Ayushman card, find empanelled hospitals nearby, and what to do if the hospital refuses treatment.",
  alternates: { canonical: "https://indiaassist.online/blog/ayushman-bharat-card-download-guide" },
  openGraph: {
    title: "Ayushman Bharat Card 2026: How to Check Eligibility, Get Your Card and Use It",
    description: "Practical guide to Ayushman Bharat — checking eligibility, getting the card, finding hospitals, and using it for cashless treatment.",
    url: "https://indiaassist.online/blog/ayushman-bharat-card-download-guide",
  },
};

export default function AyushmanBharatPost() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-700">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Ayushman Bharat Card</span>
        </nav>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-100 text-red-800">Health Schemes</span>
          <span className="text-xs text-gray-400">Updated November 2026 · 7 min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
          Ayushman Bharat Card: How to Check if You're Covered, Get the Card, and Actually Use It
        </h1>

        <div className="prose-article">
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Ayushman Bharat PM-JAY covers cashless hospitalisation up to Rs 5 lakh per family per year at over 29,000 hospitals across India — at zero cost to eligible beneficiaries. It is the largest government health insurance programme in the world by beneficiary count. The problem is that a large number of eligible families either don't know they're covered or haven't got their card yet. This guide covers both.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Step 1 — Check if your family is covered</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Coverage under AB PM-JAY is based on the Socio-Economic Caste Census (SECC) 2011 data plus state-specific lists. You cannot apply to be added to the list — either your household is in it or it isn't. So the first thing to do is verify.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Go to <strong>pmjay.gov.in</strong> and click &quot;Am I Eligible?&quot;. Enter your mobile number and verify via OTP. Then search by name and state, or enter your HHD number from the SECC list, or your ration card number. If your family appears, you're covered. If not, your household may not be in the SECC database.
          </p>
          <div className="mb-6">
            <a href="https://pmjay.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors">
              Check eligibility at pmjay.gov.in <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-7">
            <p className="text-red-900 font-semibold mb-2">Who is covered?</p>
            <p className="text-red-800 text-sm mb-2">Broadly: rural deprived households from SECC 2011 and 11 occupational categories of urban workers — rag pickers, domestic workers, street vendors, construction workers, washermen, security guards, beggars, and similar. Families already covered under the old RSBY scheme are also included.</p>
            <p className="text-red-800 text-sm">Several states have expanded coverage beyond the central list using their own funds. So even if you don't appear in the central database, it's worth asking your state health department.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Step 2 — Get your Ayushman card</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once you've confirmed eligibility, getting the card is straightforward. The easiest way is through the Ayushman app — download it from the Play Store or App Store, log in with your Aadhaar-linked mobile number, verify via OTP, and download the e-card directly.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you'd rather do it in person, visit the nearest Common Service Centre (CSC) in your area. The operator will do biometric verification using your Aadhaar and print the card on the spot. Bring your Aadhaar card and ration card.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            The third option: you don't actually need the card before going to hospital. Any AB PM-JAY empanelled hospital has an Aarogya Mitra at the help desk who can verify your eligibility directly using your Aadhaar number. So if you are admitted in an emergency, the card is not a prerequisite.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">What treatments are covered</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The scheme covers 1,949 treatment packages across 27 specialities. The Rs 5 lakh is per family per year — it resets on April 1st. It covers the full cost of hospitalisation including room, surgery, medicines, diagnostics, and also 3 days of pre-hospitalisation and 15 days post-discharge expenses.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Covered conditions include cardiac surgery, knee replacement, cancer treatment, dialysis, cataract and other eye surgeries, orthopaedic procedures, deliveries and newborn care, burns, and emergency admissions. There is no cap on family size — all members in the household are covered under the same Rs 5 lakh.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Finding a hospital near you</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Use the hospital finder on pmjay.gov.in — search by state, district, and speciality. The Ayushman app also has a locator. Or call the helpline on <strong>14555</strong> (toll-free, 24x7) and they will tell you which empanelled hospitals are nearest to you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">What to do if a hospital asks you to pay</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            It is illegal for an empanelled hospital to demand out-of-pocket payment for a covered procedure from an eligible beneficiary. If this happens, call <strong>14555</strong> from inside the hospital. The helpline team can intervene directly. You can also file a complaint on the PM-JAY portal.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Questions that come up often</h2>

          <p className="text-gray-700 leading-relaxed mb-3"><strong>Can I use this card in a state other than where I live?</strong> Yes. The card is valid at any empanelled hospital across India, regardless of your home state. This is especially useful when people travel for treatment to bigger cities.</p>

          <p className="text-gray-700 leading-relaxed mb-3"><strong>My family isn't in the SECC list but we qualify by income. Can we apply?</strong> Not directly for the central scheme. But approach your state's health department — many states have expanded the coverage list and may include households like yours.</p>

          <p className="text-gray-700 leading-relaxed mb-5"><strong>Is there a premium to pay?</strong> No. If you are on the beneficiary list, everything is free. The government pays the hospital directly on your behalf.</p>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3">Related</p>
            <div className="space-y-2">
              <Link href="/schemes/ayushman-bharat" className="block text-blue-700 hover:underline text-sm">Ayushman Bharat — full scheme details</Link>
              <Link href="/eligibility" className="block text-blue-700 hover:underline text-sm">Check all government schemes you may qualify for</Link>
              <Link href="/schemes/pm-kisan" className="block text-blue-700 hover:underline text-sm">PM Kisan — Rs 6,000/year for farming families</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
