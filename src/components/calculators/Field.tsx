"use client";

import { useAnimatedNumber } from "./useAnimatedNumber";

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
  const pct = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  // Filled portion of the track in brand colour, rest in light grey.
  const trackBg = `linear-gradient(to right, #ea580c 0%, #ea580c ${pct}%, #e2e8f0 ${pct}%, #e2e8f0 100%)`;

  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-ink-700">{label}</label>
        <div className="flex items-center gap-1 rounded-md border border-ink-200 bg-white px-2 py-1 focus-within:border-brand-400">
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
        style={{ background: trackBg }}
        className="range-slider mt-3 h-2 w-full cursor-pointer appearance-none rounded-full outline-none"
        aria-label={`${label} slider`}
      />
      <div className="mt-1 flex justify-between text-[11px] text-ink-400">
        <span>
          {prefix}
          {min.toLocaleString("en-IN")}
          {suffix}
        </span>
        <span>
          {prefix}
          {max.toLocaleString("en-IN")}
          {suffix}
        </span>
      </div>
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
      className={`rounded-lg p-4 transition ${
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

/**
 * A result stat whose numeric value animates smoothly when it changes.
 * `format` converts the in-between animated number into a display string.
 */
export function AnimatedStat({
  label,
  value,
  format,
  highlight,
}: {
  label: string;
  value: number;
  format: (n: number) => string;
  highlight?: boolean;
}) {
  const animated = useAnimatedNumber(value);
  return (
    <div
      className={`rounded-lg p-4 transition ${
        highlight ? "bg-brand-600 text-white" : "bg-ink-50 text-ink-900"
      }`}
    >
      <p className={`text-xs ${highlight ? "text-brand-50" : "text-ink-500"}`}>
        {label}
      </p>
      <p className="mt-1 text-xl font-bold tabular-nums">{format(animated)}</p>
    </div>
  );
}
