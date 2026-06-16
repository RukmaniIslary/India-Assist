"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import SearchBox from "@/components/SearchBox";
import { searchAll, type SearchItem } from "@/lib/search";

const typeColors: Record<SearchItem["type"], string> = {
  Scheme: "bg-brand-50 text-brand-700",
  Scholarship: "bg-emerald-50 text-emerald-700",
  Document: "bg-blue-50 text-blue-700",
  State: "bg-purple-50 text-purple-700",
  Calculator: "bg-amber-50 text-amber-700",
  Article: "bg-rose-50 text-rose-700",
};

export default function SearchResults() {
  const params = useSearchParams();
  const query = params.get("q") ?? "";
  const [results, setResults] = useState<SearchItem[]>([]);

  useEffect(() => {
    setResults(searchAll(query));
  }, [query]);

  return (
    <div>
      <div className="mx-auto max-w-2xl">
        <SearchBox size="md" />
      </div>

      <div className="mt-8">
        {query.trim() === "" ? (
          <p className="text-center text-ink-500">
            Start typing to search across schemes, scholarships, documents,
            calculators and guides.
          </p>
        ) : results.length === 0 ? (
          <p className="rounded-lg border border-dashed border-ink-200 p-8 text-center text-ink-500">
            No results found for{" "}
            <span className="font-medium text-ink-700">
              &ldquo;{query}&rdquo;
            </span>
            . Try a different keyword.
          </p>
        ) : (
          <>
            <p className="mb-4 text-sm text-ink-600">
              {results.length} result(s) for{" "}
              <span className="font-medium text-ink-900">
                &ldquo;{query}&rdquo;
              </span>
            </p>
            <ul className="space-y-3">
              {results.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="block rounded-xl border border-ink-200 bg-white p-4 transition hover:border-brand-300 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${typeColors[r.type]}`}
                      >
                        {r.type}
                      </span>
                      <h2 className="font-semibold text-ink-900">{r.title}</h2>
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm text-ink-600">
                      {r.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
