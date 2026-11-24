"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, Calculator, FileText, Building2, GraduationCap, MapPin } from "lucide-react";

interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
}

const searchItems: SearchItem[] = [
  // Calculators
  { title: "EMI Calculator", description: "Calculate Equated Monthly Installment for any loan", href: "/calculators/emi", category: "Calculators", keywords: ["emi", "loan", "installment", "monthly payment", "calculator"] },
  { title: "SIP Calculator", description: "Systematic Investment Plan returns calculator for mutual funds", href: "/calculators/sip", category: "Calculators", keywords: ["sip", "mutual fund", "investment", "returns", "systematic"] },
  { title: "PPF Calculator", description: "Public Provident Fund maturity calculator with tax-free returns", href: "/calculators/ppf", category: "Calculators", keywords: ["ppf", "provident fund", "tax free", "savings", "government"] },
  { title: "FD Calculator", description: "Fixed Deposit maturity amount and interest calculator", href: "/calculators/fd", category: "Calculators", keywords: ["fd", "fixed deposit", "interest", "maturity", "bank"] },
  { title: "Home Loan EMI Calculator", description: "Calculate home loan EMI with bank rate comparison", href: "/calculators/home-loan-emi", category: "Calculators", keywords: ["home loan", "housing loan", "property", "emi", "mortgage"] },
  { title: "Loan Eligibility Calculator", description: "Find maximum loan amount based on your income", href: "/calculators/loan-eligibility", category: "Calculators", keywords: ["eligibility", "loan amount", "income", "foir", "capacity"] },

  // Loans
  { title: "Home Loan", description: "Compare home loan interest rates from top banks in India", href: "/loans/home-loan", category: "Loans", keywords: ["home loan", "housing", "property", "mortgage", "sbi", "hdfc"] },
  { title: "Personal Loan", description: "Personal loan rates, eligibility, and EMI details", href: "/loans/personal-loan", category: "Loans", keywords: ["personal loan", "unsecured", "instant loan", "quick loan"] },
  { title: "Education Loan", description: "Education loan for India and abroad studies", href: "/loans/education-loan", category: "Loans", keywords: ["education", "student loan", "study abroad", "college", "university"] },
  { title: "Gold Loan", description: "Gold loan interest rates and per gram value", href: "/loans/gold-loan", category: "Loans", keywords: ["gold loan", "gold", "muthoot", "manappuram", "jewellery"] },

  // Schemes
  { title: "PM Kisan Samman Nidhi", description: "Rs 6,000/year direct income support for farmer families", href: "/schemes/pm-kisan", category: "Schemes", keywords: ["pm kisan", "farmer", "agriculture", "6000", "installment", "kisan samman"] },
  { title: "Ayushman Bharat PMJAY", description: "Rs 5 lakh free health insurance for eligible families", href: "/schemes/ayushman-bharat", category: "Schemes", keywords: ["ayushman", "health", "insurance", "hospital", "pmjay", "medical"] },
  { title: "PM Awas Yojana", description: "Affordable housing subsidy under CLSS for EWS/LIG/MIG", href: "/schemes/pmay", category: "Schemes", keywords: ["pmay", "awas", "housing", "subsidy", "home", "house", "clss"] },
  { title: "E-Shram Card", description: "Registration for unorganized workers with insurance benefits", href: "/schemes/e-shram", category: "Schemes", keywords: ["e-shram", "eshram", "worker", "labour", "unorganized", "insurance"] },
  { title: "PM Mudra Yojana", description: "Collateral-free business loans up to Rs 10 lakh", href: "/schemes/mudra", category: "Schemes", keywords: ["mudra", "business loan", "shishu", "kishore", "tarun", "enterprise"] },
  { title: "Sukanya Samriddhi Yojana", description: "High-interest savings for girl child with tax benefits", href: "/schemes/sukanya-samriddhi", category: "Schemes", keywords: ["sukanya", "girl child", "savings", "daughter", "ssy"] },

  // Documents
  { title: "PAN Card", description: "Apply for new PAN card or corrections online", href: "/documents", category: "Documents", keywords: ["pan card", "pan", "income tax", "nsdl", "utiitsl"] },
  { title: "Aadhaar Card", description: "Aadhaar enrollment, update, and download", href: "/documents", category: "Documents", keywords: ["aadhaar", "aadhar", "uid", "uidai", "biometric"] },
  { title: "Passport", description: "Passport application, renewal, and tracking", href: "/documents", category: "Documents", keywords: ["passport", "travel", "visa", "mea", "psk"] },
  { title: "Voter ID", description: "Voter ID card registration and correction", href: "/documents", category: "Documents", keywords: ["voter id", "election", "epic", "voter card"] },
  { title: "Driving License", description: "Apply for learner license and permanent DL", href: "/documents", category: "Documents", keywords: ["driving license", "dl", "rto", "parivahan", "learner"] },

  // Scholarships
  { title: "National Scholarship Portal", description: "Central and state government scholarships for students", href: "/scholarships", category: "Scholarships", keywords: ["scholarship", "student", "education", "nsp", "merit"] },

  // Tools
  { title: "Eligibility Checker", description: "Find government schemes you qualify for", href: "/eligibility", category: "Tools", keywords: ["eligibility", "check", "qualify", "scheme finder"] },
];

const categoryIcons: Record<string, React.ReactNode> = {
  Calculators: <Calculator className="w-4 h-4" />,
  Loans: <Building2 className="w-4 h-4" />,
  Schemes: <FileText className="w-4 h-4" />,
  Documents: <FileText className="w-4 h-4" />,
  Scholarships: <GraduationCap className="w-4 h-4" />,
  Tools: <MapPin className="w-4 h-4" />,
};

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return searchItems;
    const q = query.toLowerCase().trim();
    return searchItems.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.keywords.some(k => k.includes(q)) ||
      item.category.toLowerCase().includes(q)
    );
  }, [query]);

  const grouped = useMemo(() => {
    const groups: Record<string, SearchItem[]> = {};
    filtered.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [filtered]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Search</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Search</h1>
              <p className="text-gray-600 mt-0.5">Find calculators, schemes, loans, and documents</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Input */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for calculators, schemes, loans, documents..."
            className="w-full pl-12 pr-4 py-4 text-base border border-gray-200 rounded-2xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm font-medium">Clear</button>
          )}
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-500 mb-4">
          {query ? `${filtered.length} results for "${query}"` : `${searchItems.length} items available`}
        </p>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">No results found for &quot;{query}&quot;</p>
            <p className="text-gray-500 text-sm mt-1">Try a different search term or browse categories below</p>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(grouped).map(([category, items]) => (
              <div key={category}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-500">{categoryIcons[category]}</span>
                  <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">{category}</h2>
                  <span className="text-xs text-gray-400">({items.length})</span>
                </div>
                <div className="space-y-2">
                  {items.map(item => (
                    <Link key={item.href + item.title} href={item.href} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700">{item.title}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
