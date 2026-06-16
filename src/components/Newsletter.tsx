"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Front-end only confirmation; wire to an email provider in production.
    setDone(true);
  }

  return (
    <section className="bg-ink-900">
      <div className="container-page py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Weekly benefit alerts in your inbox
          </h2>
          <p className="mt-2 text-sm text-ink-300">
            Get new schemes, scholarship deadlines and finance tips every week.
            No spam, unsubscribe anytime.
          </p>
          {done ? (
            <p className="mt-6 rounded-lg bg-india-green/20 px-4 py-3 text-sm font-medium text-green-100">
              Thanks for subscribing. Please confirm via the email we sent.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email address"
                className="flex-1 rounded-lg border border-ink-700 bg-ink-800 px-4 py-2.5 text-sm text-white placeholder-ink-400 outline-none focus:border-brand-400"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
