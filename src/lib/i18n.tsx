"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "hi";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  toggle: () => {},
});

const STORAGE_KEY = "ia-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default language is always English.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "hi" || saved === "en") setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((p) => (p === "en" ? "hi" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/**
 * Central English -> Hindi dictionary for UI chrome, navigation and
 * calculator labels. Keys are the exact English strings used in the UI.
 */
export const DICT: Record<string, string> = {
  // Navigation
  Schemes: "योजनाएं",
  Scholarships: "छात्रवृत्ति",
  Documents: "दस्तावेज़",
  Calculators: "कैलकुलेटर",
  Loans: "ऋण",
  States: "राज्य",
  Blog: "ब्लॉग",
  "State Guides": "राज्य गाइड",
  "Eligibility Engine": "पात्रता इंजन",
  Search: "खोज",
  About: "हमारे बारे में",
  Contact: "संपर्क करें",
  "Privacy Policy": "गोपनीयता नीति",
  "Terms of Service": "सेवा की शर्तें",
  Disclaimer: "अस्वीकरण",
  Explore: "एक्सप्लोर करें",
  Tools: "उपकरण",
  Company: "कंपनी",
  Legal: "कानूनी",
  Privacy: "गोपनीयता",
  Terms: "शर्तें",
  Sitemap: "साइटमैप",

  // Header / common actions
  "Check Eligibility": "पात्रता जांचें",
  "Check eligibility": "पात्रता जांचें",
  "Check my eligibility": "मेरी पात्रता जांचें",
  Search_btn: "खोजें",
  "Search schemes, tools...": "योजनाएं, उपकरण खोजें...",
  "Try 'PM-KISAN', 'home loan EMI', or 'how to get a PAN card'...":
    "आज़माएं 'पीएम-किसान', 'होम लोन ईएमआई', या 'पैन कार्ड कैसे बनवाएं'...",
  "Toggle menu": "मेनू टॉगल करें",
  "Find matching benefits": "मिलते-जुलते लाभ खोजें",

  // Hero / home
  "No jargon, no runaround": "कोई जटिल भाषा नहीं, कोई चक्कर नहीं",
  "India's assistance engine": "भारत का सहायता इंजन",
  Popular: "लोकप्रिय",

  // Section headings
  "Popular government schemes": "लोकप्रिय सरकारी योजनाएं",
  "Finance calculators": "वित्त कैलकुलेटर",
  "Document application guides": "दस्तावेज़ आवेदन गाइड",
  "Explore benefits by state": "राज्य अनुसार लाभ देखें",
  "View all": "सभी देखें",

  // Stats
  "Flagship schemes": "प्रमुख योजनाएं",
  "Finance calculators_stat": "वित्त कैलकुलेटर",
  "States & UTs covered": "राज्य और केंद्र शासित प्रदेश",
  "Eligibility engine": "पात्रता इंजन",

  // Categories (home grid)
  "Welfare & subsidy schemes": "कल्याण और सब्सिडी योजनाएं",
  "Student funding directory": "छात्र वित्तपोषण निर्देशिका",
  "PAN, Passport & more": "पैन, पासपोर्ट और अधिक",
  "EMI, SIP, tax & loans": "ईएमआई, एसआईपी, कर और ऋण",
  "Compare loan options": "ऋण विकल्पों की तुलना करें",
  "Benefits by state": "राज्य अनुसार लाभ",

  // Newsletter
  "Subscribe": "सदस्यता लें",

  // Schemes listing
  "Government Schemes": "सरकारी योजनाएं",
  "All": "सभी",
  "Filter schemes...": "योजनाएं फ़िल्टर करें...",
  Housing: "आवास",
  Health: "स्वास्थ्य",
  Agriculture: "कृषि",
  Employment: "रोज़गार",
  Pension: "पेंशन",
  "Financial Inclusion": "वित्तीय समावेशन",
  "Women & Child": "महिला एवं बाल",
  Education: "शिक्षा",
  Loan: "ऋण",
  Investment: "निवेश",
  Eligibility: "पात्रता",

  // Common detail-page sections
  "Eligibility criteria": "पात्रता मानदंड",
  "Documents required": "आवश्यक दस्तावेज़",
  "How to apply": "आवेदन कैसे करें",
  "Frequently asked questions": "अक्सर पूछे जाने वाले प्रश्न",
  "Key benefit": "मुख्य लाभ",
  "Visit official site": "आधिकारिक साइट पर जाएं",
  "Related schemes": "संबंधित योजनाएं",

  // Calculator field labels
  "Loan amount": "ऋण राशि",
  "Interest rate": "ब्याज दर",
  "Loan tenure": "ऋण अवधि",
  "Monthly EMI": "मासिक ईएमआई",
  "Total interest": "कुल ब्याज",
  "Total payment": "कुल भुगतान",
  "Total payable": "कुल देय",
  Principal: "मूलधन",
  Interest: "ब्याज",
  "Monthly investment": "मासिक निवेश",
  "Expected return": "अपेक्षित प्रतिफल",
  "Investment period": "निवेश अवधि",
  "Future value": "भविष्य मूल्य",
  Invested: "निवेशित",
  "Est. gains": "अनुमानित लाभ",
  "Maturity value": "परिपक्वता मूल्य",
  Gains: "लाभ",
  "Deposit amount": "जमा राशि",
  Tenure: "अवधि",
  "Compounding frequency": "चक्रवृद्धि आवृत्ति",
  Annually: "वार्षिक",
  "Half-yearly": "अर्धवार्षिक",
  Quarterly: "त्रैमासिक",
  Monthly: "मासिक",
  "Maturity amount": "परिपक्वता राशि",
  Deposit: "जमा",
  Maturity: "परिपक्वता",
  "Yearly investment": "वार्षिक निवेश",
  Period: "अवधि",
  "Total invested": "कुल निवेशित",
  "Net monthly income": "शुद्ध मासिक आय",
  "Existing EMIs / obligations": "मौजूदा ईएमआई / देयताएं",
  "FOIR (income share for EMI)": "एफओआईआर (ईएमआई के लिए आय हिस्सा)",
  "Eligible loan amount": "पात्र ऋण राशि",
  "Max affordable EMI": "अधिकतम वहनीय ईएमआई",
  "Eligible loan": "पात्र ऋण",
  "Loan amount_seg": "ऋण राशि",
  "Interest over tenure": "अवधि में ब्याज",
  "Gross annual income": "सकल वार्षिक आय",
  "Total tax (incl. cess)": "कुल कर (उपकर सहित)",
  "Taxable income": "कर योग्य आय",
  "Take-home": "शुद्ध आय",
  "Total tax": "कुल कर",
  "Income tax": "आयकर",

  // Schedule tables
  "Amortisation schedule (year by year)": "परिशोधन अनुसूची (वर्ष दर वर्ष)",
  "Wealth growth (year by year)": "संपत्ति वृद्धि (वर्ष दर वर्ष)",
  "Growth (year by year)": "वृद्धि (वर्ष दर वर्ष)",
  "PPF balance (year by year)": "पीपीएफ शेष (वर्ष दर वर्ष)",
  "Slab-wise tax breakdown (new regime)": "स्लैब-वार कर विवरण (नई व्यवस्था)",
  Year: "वर्ष",
  "Principal paid": "मूलधन भुगतान",
  "Interest paid": "ब्याज भुगतान",
  Balance: "शेष",
  "Loan paid": "ऋण चुकाया",
  Value: "मूल्य",
  Opening: "प्रारंभिक",
  "Year-end value": "वर्षांत मूल्य",
  "Income slab": "आय स्लैब",
  Rate: "दर",
  "Taxable here": "यहाँ कर योग्य",
  Tax: "कर",
  years: "वर्ष",
  "Show less": "कम दिखाएं",
  "Show all": "सभी दिखाएं",
  "Government Cluster": "सरकारी समूह",
  "Finance Cluster": "वित्त समूह",
  "Explore flagship welfare schemes with clear eligibility, required documents and step-by-step application guidance.":
    "स्पष्ट पात्रता, आवश्यक दस्तावेज़ और चरण-दर-चरण आवेदन मार्गदर्शन के साथ प्रमुख कल्याण योजनाएं देखें।",
  "Plan loans, investments and taxes with accurate, instant calculators built for Indian users.":
    "भारतीय उपयोगकर्ताओं के लिए बनाए गए सटीक, त्वरित कैलकुलेटर से ऋण, निवेश और कर की योजना बनाएं।",
  "The big central schemes people ask about most — housing, health, farming and pensions.":
    "सबसे ज़्यादा पूछी जाने वाली बड़ी केंद्रीय योजनाएं — आवास, स्वास्थ्य, खेती और पेंशन।",
  "Run the numbers before you commit — loans, investments and taxes, no spreadsheet needed.":
    "प्रतिबद्ध होने से पहले हिसाब लगाएं — ऋण, निवेश और कर, बिना किसी स्प्रेडशीट के।",
  "That PAN or passport you keep meaning to sort out? Here's exactly how, step by step.":
    "वह पैन या पासपोर्ट जिसे आप बनवाना टालते रहते हैं? यहाँ है पूरा तरीका, चरण-दर-चरण।",
  "Every state and UT has its own schemes too — find yours below.":
    "हर राज्य और केंद्र शासित प्रदेश की अपनी योजनाएं भी हैं — नीचे अपनी खोजें।",
};

/** Returns a translator function: t("English") -> Hindi when lang is hi. */
export function useT() {
  const { lang } = useLanguage();
  return (en: string): string => {
    if (lang === "en") return en;
    return DICT[en] ?? en;
  };
}

/**
 * Inline translatable text. Usable inside server components because it is
 * a client component. Provide an explicit `hi` or rely on the dictionary.
 */
export function T({ en, hi }: { en: string; hi?: string }) {
  const { lang } = useLanguage();
  if (lang === "en") return <>{en}</>;
  return <>{hi ?? DICT[en] ?? en}</>;
}
