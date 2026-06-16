"use client";

import { useState } from "react";
import Link from "next/link";
import {
  evaluateEligibility,
  type EligibilityProfile,
  type EligibilityResult,
} from "@/lib/eligibility";
import { states } from "@/data/states";

export default function EligibilityWizard() {
  const [profile, setProfile] = useState<EligibilityProfile>({
    age: 30,
    gender: "male",
    state: states[0].slug,
    annualIncome: 300000,
    occupation: "salaried",
  });
  const [results, setResults] = useState<EligibilityResult[] | null>(null);

  function update<K extends keyof EligibilityProfile>(
    key: K,
    value: EligibilityProfile[K],
  ) {
    setProfile((p) => ({ ...p, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResults(evaluateEligibility(profile));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <form
        onSubmit={onSubmit}
        className="space-y-5 rounded-xl border border-ink-200 bg-white p-6 lg:col-span-2"
      >
        <div>
          <label className="text-sm font-medium text-ink-700" htmlFor="age">
            Age
          </label>
          <input
            id="age"
            type="number"
            min={0}
            max={120}
            value={profile.age}
            onChange={(e) => update("age", Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm outline-none focus:border-brand-400"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-ink-700" htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            value={profile.gender}
            onChange={(e) =>
              update("gender", e.target.value as EligibilityProfile["gender"])
            }
            className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm outline-none focus:border-brand-400"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-ink-700" htmlFor="state">
            State
          </label>
          <select
            id="state"
            value={profile.state}
            onChange={(e) => update("state", e.target.value)}
            className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm outline-none focus:border-brand-400"
          >
            {states.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-ink-700" htmlFor="income">
            Annual household income (Rs.)
          </label>
          <input
            id="income"
            type="number"
            min={0}
            step={10000}
            value={profile.annualIncome}
            onChange={(e) => update("annualIncome", Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm outline-none focus:border-brand-400"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-ink-700" htmlFor="occupation">
            Occupation
          </label>
          <select
            id="occupation"
            value={profile.occupation}
            onChange={(e) =>
              update(
                "occupation",
                e.target.value as EligibilityProfile["occupation"],
              )
            }
            className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm outline-none focus:border-brand-400"
          >
            <option value="student">Student</option>
            <option value="farmer">Farmer</option>
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self-employed</option>
            <option value="unorganised-worker">Unorganised worker</option>
            <option value="senior-citizen">Senior citizen</option>
            <option value="unemployed">Unemployed</option>
          </select>
        </div>

        <button type="submit" className="btn-primary w-full">
          Find matching benefits
        </button>
      </form>

      <div className="lg:col-span-3">
        {results === null ? (
          <div className="flex h-full min-h-48 items-center justify-center rounded-xl border border-dashed border-ink-200 p-8 text-center text-ink-500">
            Fill in your details and we will instantly match you with relevant
            schemes.
          </div>
        ) : results.length === 0 ? (
          <div className="rounded-xl border border-dashed border-ink-200 p-8 text-center text-ink-600">
            <p className="font-medium text-ink-800">
              No direct matches from our indicative rules.
            </p>
            <p className="mt-1 text-sm">
              Try adjusting your inputs, or browse all{" "}
              <Link href="/schemes" className="text-brand-700 underline">
                government schemes
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-ink-600">
              We found{" "}
              <strong className="text-ink-900">{results.length}</strong>{" "}
              scheme(s) that may match your profile.
            </p>
            {results.map(({ scheme, reason }) => (
              <div key={scheme.slug} className="card">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-ink-900">
                    {scheme.name}
                  </h3>
                  <span className="badge whitespace-nowrap">
                    {scheme.category}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-600">{scheme.benefit}</p>
                <p className="mt-2 rounded-md bg-brand-50 px-3 py-2 text-sm text-brand-800">
                  Why: {reason}
                </p>
                <Link
                  href={`/schemes/${scheme.slug}`}
                  className="mt-3 inline-block text-sm font-semibold text-brand-700 hover:underline"
                >
                  View details and how to apply →
                </Link>
              </div>
            ))}
            <p className="text-xs text-ink-400">
              These results are indicative. Confirm final eligibility on the
              official portal of each scheme before applying.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
