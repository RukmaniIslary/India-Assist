"use client";

export function RangeField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
  prefix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  prefix?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-ink-700">{label}</label>
        <div className="flex items-center gap-1 rounded-md border border-ink-200 bg-white px-2 py-1">
          {prefix && <span className="text-sm text-ink-500">{prefix}</span>}
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-24 bg-transparent text-right text-sm font-semibold text-ink-900 outline-none"
            aria-label={label}
          />
          {suffix && <span className="text-sm text-ink-500">{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-brand-600"
        aria-label={`${label} slider`}
      />
    </div>
  );
}

export function ResultStat({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-lg p-4 ${
        highlight ? "bg-brand-600 text-white" : "bg-ink-50 text-ink-900"
      }`}
    >
      <p className={`text-xs ${highlight ? "text-brand-50" : "text-ink-500"}`}>
        {label}
      </p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}
