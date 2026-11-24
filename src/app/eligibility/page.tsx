"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ChevronRight, ArrowLeft, ClipboardCheck } from "lucide-react";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const incomeRanges = [
  { label: "Below Rs 1 Lakh/year", value: "below-1l" },
  { label: "Rs 1 - 2.5 Lakh/year", value: "1l-2.5l" },
  { label: "Rs 2.5 - 5 Lakh/year", value: "2.5l-5l" },
  { label: "Rs 5 - 10 Lakh/year", value: "5l-10l" },
  { label: "Above Rs 10 Lakh/year", value: "above-10l" },
];

const occupations = [
  "Farmer", "Daily Wage Labourer", "Self-Employed / Small Business",
  "Salaried (Private)", "Salaried (Government)", "Student",
  "Homemaker", "Senior Citizen (Retired)", "Unemployed"
];

interface SchemeResult {
  name: string;
  description: string;
  link: string;
  category: string;
}

function getEligibleSchemes(age: number, gender: string, state: string, income: string, occupation: string): SchemeResult[] {
  const schemes: SchemeResult[] = [];

  // PM Kisan - farmers only
  if (occupation === "Farmer") {
    schemes.push({ name: "PM Kisan Samman Nidhi", description: "Rs 6,000/year in 3 installments for land-owning farmer families", link: "/schemes/pm-kisan", category: "Agriculture" });
  }

  // Ayushman Bharat - income below 5L
  if (["below-1l", "1l-2.5l", "2.5l-5l"].includes(income)) {
    schemes.push({ name: "Ayushman Bharat (PMJAY)", description: "Free health coverage up to Rs 5 lakh/year per family at empanelled hospitals", link: "/schemes/ayushman-bharat", category: "Health" });
  }

  // PMAY - income below 10L
  if (["below-1l", "1l-2.5l", "2.5l-5l", "5l-10l"].includes(income)) {
    schemes.push({ name: "PM Awas Yojana", description: "Subsidy on home loan interest for affordable housing under CLSS", link: "/schemes/pmay", category: "Housing" });
  }

  // E-Shram - unorganized workers
  if (["Farmer", "Daily Wage Labourer", "Self-Employed / Small Business", "Homemaker"].includes(occupation)) {
    schemes.push({ name: "E-Shram Card", description: "Registration for unorganized workers with Rs 2 lakh accidental insurance", link: "/schemes/e-shram", category: "Labour" });
  }

  // Mudra - self employed / business
  if (["Self-Employed / Small Business", "Farmer"].includes(occupation)) {
    schemes.push({ name: "PM Mudra Yojana", description: "Collateral-free loans up to Rs 10 lakh for micro enterprises", link: "/schemes/mudra", category: "Business" });
  }

  // Sukanya Samriddhi - for girls below 10
  if (gender === "Female" && age < 10) {
    schemes.push({ name: "Sukanya Samriddhi Yojana", description: "Savings scheme for girl child with 8.2% interest and tax benefits", link: "/schemes/sukanya-samriddhi", category: "Savings" });
  }

  // Atal Pension Yojana - 18-40 unorganized
  if (age >= 18 && age <= 40 && ["Farmer", "Daily Wage Labourer", "Self-Employed / Small Business", "Homemaker"].includes(occupation)) {
    schemes.push({ name: "Atal Pension Yojana", description: "Guaranteed pension of Rs 1,000-5,000/month after age 60", link: "https://npscra.nsdl.co.in/scheme-details.php", category: "Pension" });
  }

  // PM Vishwakarma - artisans
  if (["Self-Employed / Small Business", "Daily Wage Labourer"].includes(occupation)) {
    schemes.push({ name: "PM Vishwakarma Yojana", description: "Skill training, toolkit, and loan up to Rs 3 lakh for traditional artisans", link: "https://pmvishwakarma.gov.in", category: "Skill Development" });
  }

  // Jan Dhan - all below 10L
  if (["below-1l", "1l-2.5l", "2.5l-5l", "5l-10l"].includes(income)) {
    schemes.push({ name: "PM Jan Dhan Yojana", description: "Zero-balance bank account with Rs 2 lakh accident cover and Rs 30,000 life cover", link: "https://pmjdy.gov.in", category: "Financial Inclusion" });
  }

  // Senior Citizen Savings Scheme
  if (age >= 60) {
    schemes.push({ name: "Senior Citizen Savings Scheme (SCSS)", description: "8.2% interest rate guaranteed by Government. Max Rs 30 lakh deposit.", link: "https://www.indiapost.gov.in", category: "Senior Citizen" });
  }

  // Scholarships for students
  if (occupation === "Student" && age >= 14 && age <= 30) {
    schemes.push({ name: "National Scholarship Portal", description: "Pre-matric, post-matric, and merit-based scholarships for students from all categories", link: "https://scholarships.gov.in", category: "Education" });
  }

  // Free ration - NFSA
  if (["below-1l", "1l-2.5l"].includes(income)) {
    schemes.push({ name: "PM Garib Kalyan Anna Yojana", description: "5 kg free grains per person per month for BPL families", link: "https://nfsa.gov.in", category: "Food Security" });
  }

  // Ujjwala - women below poverty line
  if (gender === "Female" && ["below-1l", "1l-2.5l"].includes(income)) {
    schemes.push({ name: "PM Ujjwala Yojana", description: "Free LPG connection and subsidized refills for women from BPL families", link: "https://www.pmuy.gov.in", category: "Energy" });
  }

  return schemes;
}

export default function EligibilityPage() {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [income, setIncome] = useState("");
  const [occupation, setOccupation] = useState("");
  const [results, setResults] = useState<SchemeResult[]>([]);

  const handleSubmit = () => {
    const schemes = getEligibleSchemes(age, gender, state, income, occupation);
    setResults(schemes);
    setStep(6);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return age > 0;
      case 2: return gender !== "";
      case 3: return state !== "";
      case 4: return income !== "";
      case 5: return occupation !== "";
      default: return false;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Check Eligibility</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
              <ClipboardCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Eligibility Checker</h1>
              <p className="text-gray-600 mt-0.5">Find government schemes you are eligible for in 5 simple steps</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        {step <= 5 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Step {step} of 5</span>
              <span className="text-sm text-gray-500">{Math.round((step / 5) * 100)}% complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${(step / 5) * 100}%` }}></div>
            </div>
          </div>
        )}

        {/* Step 1: Age */}
        {step === 1 && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">What is your age?</h2>
            <p className="text-gray-600 text-sm mb-6">Many schemes have age-specific criteria</p>
            <div className="max-w-sm">
              <input type="number" value={age} min={0} max={120} onChange={(e) => setAge(Number(e.target.value))} className="w-full px-4 py-3 text-lg font-semibold border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your age" />
              <p className="text-xs text-gray-500 mt-2">Enter age in years (0-120)</p>
            </div>
          </div>
        )}

        {/* Step 2: Gender */}
        {step === 2 && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Select your gender</h2>
            <p className="text-gray-600 text-sm mb-6">Some schemes are gender-specific</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["Male", "Female", "Other"].map(g => (
                <button key={g} onClick={() => setGender(g)} className={`p-4 rounded-xl border-2 text-left transition-all ${gender === g ? "border-blue-600 bg-blue-50 text-blue-900" : "border-gray-200 hover:border-gray-300 text-gray-700"}`}>
                  <span className="font-semibold">{g}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: State */}
        {step === 3 && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Which state do you live in?</h2>
            <p className="text-gray-600 text-sm mb-6">State-specific schemes will be shown based on your selection</p>
            <select value={state} onChange={(e) => setState(e.target.value)} className="w-full max-w-sm px-4 py-3 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
              <option value="">Select your state</option>
              {states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        )}

        {/* Step 4: Income */}
        {step === 4 && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">What is your annual family income?</h2>
            <p className="text-gray-600 text-sm mb-6">Income criteria determines eligibility for welfare and subsidy schemes</p>
            <div className="space-y-3">
              {incomeRanges.map(r => (
                <button key={r.value} onClick={() => setIncome(r.value)} className={`w-full p-4 rounded-xl border-2 text-left transition-all ${income === r.value ? "border-blue-600 bg-blue-50 text-blue-900" : "border-gray-200 hover:border-gray-300 text-gray-700"}`}>
                  <span className="font-semibold">{r.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Occupation */}
        {step === 5 && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">What is your occupation?</h2>
            <p className="text-gray-600 text-sm mb-6">Occupation-specific schemes and benefits vary significantly</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {occupations.map(o => (
                <button key={o} onClick={() => setOccupation(o)} className={`p-4 rounded-xl border-2 text-left transition-all ${occupation === o ? "border-blue-600 bg-blue-50 text-blue-900" : "border-gray-200 hover:border-gray-300 text-gray-700"}`}>
                  <span className="font-medium text-sm">{o}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {step === 6 && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-xl font-bold text-gray-900">Your Eligible Schemes</h2>
              </div>
              <p className="text-gray-600 text-sm mb-2">Based on your profile: {age} years, {gender}, {state}, {occupation}</p>
              <p className="text-sm font-medium text-blue-700">{results.length} schemes found</p>
            </div>

            {results.length > 0 ? (
              <div className="space-y-4">
                {results.map((scheme, i) => (
                  <Link key={i} href={scheme.link} className="block bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:border-blue-300 hover:shadow-md transition-all group">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{scheme.category}</span>
                        <h3 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-blue-700">{scheme.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{scheme.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 mt-2 group-hover:text-blue-600" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center">
                <p className="text-gray-600">No matching schemes found for your profile. Try adjusting your income or occupation for more results.</p>
              </div>
            )}

            <button onClick={() => { setStep(1); setResults([]); }} className="text-blue-700 font-medium text-sm hover:underline">Start Over</button>
          </div>
        )}

        {/* Navigation Buttons */}
        {step <= 5 && (
          <div className="flex items-center justify-between mt-6">
            <button onClick={() => setStep(Math.max(1, step - 1))} className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${step === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"}`} disabled={step === 1}>
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button onClick={() => { if (step === 5) handleSubmit(); else setStep(step + 1); }} disabled={!canProceed()} className={`flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-xl transition-colors ${canProceed() ? "bg-blue-700 text-white hover:bg-blue-800" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
              {step === 5 ? "Show Results" : "Next"} <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
