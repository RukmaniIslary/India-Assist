"use client";

import {
  SBIMFLogo, HDFCMFLogo, ICICIPruLogo, MiraeAssetLogo, AxisMFLogo,
} from "./BankLogos";

type AMC = {
  name: string;
  shortName: string;
  Logo: () => React.ReactElement;
  aum: string;
  knownFor: string;
  categories: string[];
  indicative5yrCAGR?: string;
};

const AMCS: AMC[] = [
  {
    name: "SBI Mutual Fund", shortName: "SBI MF",
    Logo: () => <SBIMFLogo height={28} />,
    aum: "India's largest AMC by AUM",
    knownFor: "Bluechip, Balanced Advantage, Contra",
    categories: ["Large Cap", "Flexi Cap", "Debt", "ELSS"],
    indicative5yrCAGR: "13% – 18%",
  },
  {
    name: "HDFC Mutual Fund", shortName: "HDFC MF",
    Logo: () => <HDFCMFLogo height={28} />,
    aum: "Top 3 AMC by assets",
    knownFor: "Top 100, Flexicap, Mid-Cap Opportunities",
    categories: ["Large Cap", "Mid Cap", "Balanced", "Debt"],
    indicative5yrCAGR: "14% – 20%",
  },
  {
    name: "ICICI Prudential MF", shortName: "ICICI Pru MF",
    Logo: () => <ICICIPruLogo height={28} />,
    aum: "Leading balanced advantage fund house",
    knownFor: "Balanced Advantage, Nifty 50 Index, Value",
    categories: ["Balanced Advantage", "Index", "Value", "Hybrid"],
    indicative5yrCAGR: "12% – 17%",
  },
  {
    name: "Mirae Asset MF", shortName: "Mirae Asset",
    Logo: () => <MiraeAssetLogo height={28} />,
    aum: "Fastest-growing equity AMC",
    knownFor: "Emerging Bluechip, Large Cap, ELSS",
    categories: ["Large & Mid Cap", "Emerging Bluechip", "ELSS"],
    indicative5yrCAGR: "15% – 22%",
  },
  {
    name: "Axis Mutual Fund", shortName: "Axis MF",
    Logo: () => <AxisMFLogo height={28} />,
    aum: "Quality-focused growth investing",
    knownFor: "Midcap, Flexicap, Long Term Equity",
    categories: ["Mid Cap", "Flexi Cap", "Small Cap", "ELSS"],
    indicative5yrCAGR: "13% – 21%",
  },
];

export default function AMCLogos() {
  return (
    <div className="mt-6 rounded-xl border border-ink-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-ink-900">
          Top Mutual Fund Houses in India
        </h3>
        <span className="text-xs text-ink-400">Past returns · not a recommendation</span>
      </div>

      <div className="divide-y divide-ink-100">
        {AMCS.map((amc) => (
          <div key={amc.shortName}
            className="flex flex-wrap items-start gap-4 px-4 py-4 transition hover:bg-ink-50/50 sm:flex-nowrap">
            {/* Logo */}
            <div className="w-20 shrink-0 overflow-hidden rounded" aria-label={amc.name}>
              <amc.Logo />
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-ink-900">{amc.name}</p>
              <p className="mt-0.5 text-xs text-ink-500">{amc.aum}</p>
              <p className="mt-1 text-xs text-ink-700">
                <span className="font-medium">Known for: </span>{amc.knownFor}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {amc.categories.map((cat) => (
                  <span key={cat}
                    className="rounded-full bg-ink-100 px-2 py-0.5 text-xs text-ink-600">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            {/* Indicative return */}
            {amc.indicative5yrCAGR && (
              <div className="shrink-0 rounded-lg bg-emerald-50 px-3 py-2 text-right">
                <p className="text-lg font-bold text-emerald-700">
                  {amc.indicative5yrCAGR}
                </p>
                <p className="text-xs text-emerald-600">5-yr indicative CAGR</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="border-t border-ink-100 px-4 py-2.5 text-xs text-ink-400">
        Past returns are indicative and not guaranteed. Mutual fund investments
        are subject to market risks. Read all scheme-related documents carefully
        before investing. SEBI-registered investment advisors can guide
        fund selection.
      </p>
    </div>
  );
}
