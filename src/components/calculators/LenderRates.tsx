"use client";

import {
  SBILogo, HDFCLogo, ICICILogo, AxisLogo, KotakLogo,
  PNBLogo, BoBLogo, LICHFLLogo,
} from "./BankLogos";

type LoanType = "home" | "personal" | "car" | "business";

type Lender = {
  name: string;
  shortName: string;
  Logo: () => React.ReactElement;
  home?: string;
  personal?: string;
  car?: string;
  business?: string;
};

const LENDERS: Lender[] = [
  {
    name: "State Bank of India", shortName: "SBI",
    Logo: () => <SBILogo size={44} />,
    home: "8.50% – 9.15%", personal: "11.15% – 15.30%",
    car: "8.75% – 9.60%", business: "10.00% – 14.00%",
  },
  {
    name: "HDFC Bank", shortName: "HDFC",
    Logo: () => <HDFCLogo size={80} />,
    home: "8.75% – 9.65%", personal: "10.50% – 24.00%",
    car: "8.75% – 9.75%", business: "10.75% – 22.00%",
  },
  {
    name: "ICICI Bank", shortName: "ICICI",
    Logo: () => <ICICILogo size={80} />,
    home: "8.75% – 9.80%", personal: "10.65% – 16.00%",
    car: "8.85% – 10.00%", business: "10.85% – 19.00%",
  },
  {
    name: "Axis Bank", shortName: "Axis",
    Logo: () => <AxisLogo size={80} />,
    home: "8.75% – 9.15%", personal: "10.49% – 22.00%",
    car: "8.70% – 9.85%", business: "10.75% – 18.00%",
  },
  {
    name: "Kotak Mahindra Bank", shortName: "Kotak",
    Logo: () => <KotakLogo size={80} />,
    home: "8.75% – 9.60%", personal: "10.99% – 24.00%",
    car: "8.75% – 9.70%", business: "11.00% – 24.00%",
  },
  {
    name: "Punjab National Bank", shortName: "PNB",
    Logo: () => <PNBLogo size={80} />,
    home: "8.50% – 11.45%", personal: "11.40% – 16.95%",
    car: "8.75% – 9.95%", business: "10.25% – 14.75%",
  },
  {
    name: "Bank of Baroda", shortName: "BoB",
    Logo: () => <BoBLogo size={80} />,
    home: "8.40% – 10.65%", personal: "11.05% – 16.60%",
    car: "8.70% – 9.80%", business: "10.30% – 14.50%",
  },
  {
    name: "LIC Housing Finance", shortName: "LIC HFL",
    Logo: () => <LICHFLLogo size={80} />,
    home: "8.50% – 10.75%",
  },
];

const LABELS: Record<LoanType, string> = {
  home: "Home loan",
  personal: "Personal loan",
  car: "Car loan",
  business: "Business loan",
};

export default function LenderRates({ loanType = "home" }: { loanType?: LoanType }) {
  const rows = LENDERS.filter((l) => l[loanType]);

  return (
    <div className="mt-6 rounded-xl border border-ink-200 bg-white">
      <div className="flex items-center justify-between border-b border-ink-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-ink-900">
          Indicative {LABELS[loanType]} rates — top lenders
        </h3>
        <span className="text-xs text-ink-400">For reference only · verify with lender</span>
      </div>

      <div className="divide-y divide-ink-100">
        {rows.map((lender) => (
          <div key={lender.shortName}
            className="flex items-center gap-4 px-4 py-3 transition hover:bg-ink-50/60">
            {/* Logo */}
            <div className="w-20 shrink-0 overflow-hidden rounded"
              aria-label={lender.name}>
              <lender.Logo />
            </div>
            {/* Name */}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink-900">{lender.name}</p>
              <p className="text-xs text-ink-500">{lender.shortName}</p>
            </div>
            {/* Rate */}
            <div className="text-right">
              <p className="text-sm font-bold text-brand-700">{lender[loanType]}</p>
              <p className="text-xs text-ink-400">p.a.</p>
            </div>
          </div>
        ))}
      </div>

      <p className="border-t border-ink-100 px-4 py-2.5 text-xs text-ink-400">
        Rates are indicative as of 2026 and vary by credit profile, tenure and
        product type. Always confirm the current rate with the lender directly.
      </p>
    </div>
  );
}
