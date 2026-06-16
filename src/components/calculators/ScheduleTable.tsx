"use client";

import { useState } from "react";

export type Column = {
  key: string;
  label: string;
  align?: "left" | "right";
};

export type Row = Record<string, string>;

/**
 * Reusable year-by-year schedule / amortisation table.
 * Long schedules are collapsed by default with a smooth expand,
 * a sticky header and horizontal scrolling on small screens.
 */
export default function ScheduleTable({
  title = "Year-by-year breakdown",
  columns,
  rows,
  defaultVisible = 6,
}: {
  title?: string;
  columns: Column[];
  rows: Row[];
  defaultVisible?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const canCollapse = rows.length > defaultVisible;
  const visibleRows = expanded ? rows : rows.slice(0, defaultVisible);

  return (
    <div className="rounded-xl border border-ink-200 bg-white">
      <div className="flex items-center justify-between border-b border-ink-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-ink-900">{title}</h3>
        <span className="text-xs text-ink-500">{rows.length} years</span>
      </div>

      <div className="max-h-[420px] overflow-auto">
        <table className="w-full border-collapse text-sm">
          <thead className="sticky top-0 z-10 bg-ink-50">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`whitespace-nowrap px-4 py-2.5 font-semibold text-ink-600 ${
                    col.align === "right" ? "text-right" : "text-left"
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((row, i) => (
              <tr
                key={i}
                className="border-t border-ink-100 odd:bg-white even:bg-ink-50/40 transition-colors hover:bg-brand-50/50"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`whitespace-nowrap px-4 py-2.5 ${
                      col.align === "right"
                        ? "text-right tabular-nums"
                        : "text-left"
                    } ${col.key === columns[0].key ? "font-medium text-ink-900" : "text-ink-700"}`}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {canCollapse && (
        <div className="border-t border-ink-200 px-4 py-2.5 text-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="text-sm font-semibold text-brand-700 hover:underline"
            aria-expanded={expanded}
          >
            {expanded
              ? "Show less"
              : `Show all ${rows.length} years`}
          </button>
        </div>
      )}
    </div>
  );
}
