"use client";

import {
  SBILogo, HDFCLogo, ICICILogo, AxisLogo, KotakLogo,
  PNBLogo, BoBLogo, IndiaPostLogo,
} from "./BankLogos";

type FDLender = {
  name: string;
  shortName: string;
  Logo: () => React.ReactElement;
  rate1yr: string;
  rate3yr: string;
  rate5yr: string;
  seniorExtra?: string;
  note?: string;
};

const FD_LENDERS: FDLender[] = [
  {
    name: "State Bank of India", shortName: "SBI",
    Logo: () => <SBILogo height={28} />,
    rate1yr: "6.80%", rate3yr: "6.75%", rate5yr: "6.50%",
    seniorExtra: "+0.50%",
  },
  {
    name: "HDFC Bank", shortName: "HDFC",
    Logo: () => <HDFCLogo height={28} />,
    rate1yr: "7.10%", rate3yr: "7.00%", rate5yr: "7.00%",
    seniorExtra: "+0.25% – 0.50%",
  },
  {
    name: "ICICI Bank", shortName: "ICICI",
    Logo: () => <ICICILogo height={28} />,
    rate1yr: "7.00%", rate3yr: "7.00%", rate5yr: "7.00%",
    seniorExtra: "+0.25% – 0.50%",
  },
  {
    name: "Axis Bank", shortName: "Axis",
    Logo: () => <AxisLogo height={28} />,
    rate1yr: "7.00%", rate3yr: "7.10%", rate5yr: "7.00%",
    seniorExtra: "+0.50%",
  },
  {
    name: "Kotak Mahindra Bank", shortName: "Kotak",
    Logo: () => <KotakLogo height={28} />,
    rate1yr: "7.10%", rate3yr: "7.00%", rate5yr: "6.20%",
    seniorExtra: "+0.40%",
  },
  {
    name: "Punjab National Bank", shortName: "PNB",
    Logo: () => <PNBLogo height={28} />,
    rate1yr: "6.80%", rate3yr: "6.50%", rate5yr: "6.50%",
    seniorExtra: "+0.50%",
  },
  {
    name: "Bank of Baroda", shortName: "BoB",
    Logo: () => <BoBLogo height={28} />,
    rate1yr: "6.85%", rate3yr: "7.15%", rate5yr: "6.50%",
    seniorExtra: "+0.50%",
  },
  {
    name: "India Post (POTD)", shortName: "Post Office",
    Logo: () => <IndiaPostLogo height={28} />,
    rate1yr: "6.90%", rate3yr: "7.10%", rate5yr: "7.50%",
    seniorExtra: "—",
    note: "Post Office Time Deposits — sovereign guarantee",
  },
];

export default function FDRates() {
  return (
    <div className="mt-6 rounded-xl border border-ink-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-ink-900">
          Indicative FD rates — major banks &amp; Post Office
        </h3>
        <span className="text-xs text-ink-400">For reference only · verify with lender</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-ink-50 text-xs text-ink-500">
              <th className="px-4 py-2.5 text-left font-semibold">Bank / Institution</th>
              <th className="px-4 py-2.5 text-right font-semibold">1 Year</th>
              <th className="px-4 py-2.5 text-right font-semibold">3 Years</th>
              <th className="px-4 py-2.5 text-right font-semibold">5 Years</th>
              <th className="px-4 py-2.5 text-right font-semibold">Senior +</th>
            </tr>
          </thead>
          <tbody>
            {FD_LENDERS.map((l, i) => (
              <tr key={l.shortName}
                className={`border-t border-ink-100 transition hover:bg-ink-50/60 ${i % 2 === 1 ? "bg-ink-50/30" : ""}`}>
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-16 shrink-0 overflow-hidden rounded">
                      <l.Logo />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">{l.name}</p>
                      {l.note && (
                        <p className="text-xs text-ink-400">{l.note}</p>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2.5 text-right font-semibold tabular-nums text-brand-700">
                  {l.rate1yr}
                </td>
                <td className="px-4 py-2.5 text-right font-semibold tabular-nums text-brand-700">
                  {l.rate3yr}
                </td>
                <td className="px-4 py-2.5 text-right font-semibold tabular-nums text-brand-700">
                  {l.rate5yr}
                </td>
                <td className="px-4 py-2.5 text-right text-xs text-emerald-700 font-medium tabular-nums">
                  {l.seniorExtra ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="border-t border-ink-100 px-4 py-2.5 text-xs text-ink-400">
        Rates are indicative (p.a.) for domestic deposits as of 2026. Actual
        rates vary by tenure slab and deposit amount. Senior citizens typically
        receive an additional rate over the regular rate shown.
      </p>
    </div>
  );
}
