"use client";

import { useMemo, useState } from "react";
import { SchemeCard } from "@/components/cards";
import type { Scheme } from "@/data/schemes";

export default function SchemeFilter({
  schemes,
  categories,
}: {
  schemes: Scheme[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return schemes.filter((s) => {
      const matchCat = active === "All" || s.category === active;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        (s.shortName ?? "").toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [schemes, active, query]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                active === c
                  ? "bg-brand-600 text-white"
                  : "border border-ink-200 bg-white text-ink-700 hover:border-brand-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter schemes..."
          aria-label="Filter schemes"
          className="w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm outline-none focus:border-brand-400 sm:w-56"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-lg border border-dashed border-ink-200 p-8 text-center text-ink-500">
          No schemes match your filter.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <SchemeCard key={s.slug} scheme={s} />
          ))}
        </div>
      )}
    </div>
  );
}
