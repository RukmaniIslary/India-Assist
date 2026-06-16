"use client";

import { useState } from "react";
import { useT, T } from "@/lib/i18n";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const t = useT();

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
            <T
              en="New schemes and deadlines, straight to your inbox"
              hi="नई योजनाएं और समयसीमा, सीधे आपके इनबॉक्स में"
            />
          </h2>
          <p className="mt-2 text-sm text-ink-300">
            <T
              en="One short email a week with new schemes, scholarship deadlines worth knowing, and the odd money tip. No spam, and you can leave whenever you like."
              hi="हफ़्ते में एक छोटा ईमेल — नई योजनाएं, जानने लायक छात्रवृत्ति समयसीमा और कुछ पैसे की सलाह। कोई स्पैम नहीं, और आप जब चाहें छोड़ सकते हैं।"
            />
          </p>
          {done ? (
            <p className="mt-6 rounded-lg bg-india-green/20 px-4 py-3 text-sm font-medium text-green-100">
              <T
                en="Thanks for subscribing. Please confirm via the email we sent."
                hi="सदस्यता लेने के लिए धन्यवाद। कृपया हमारे भेजे ईमेल से पुष्टि करें।"
              />
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
                placeholder={t("you@example.com")}
                aria-label="Email address"
                className="flex-1 rounded-lg border border-ink-700 bg-ink-800 px-4 py-2.5 text-sm text-white placeholder-ink-400 outline-none focus:border-brand-400"
              />
              <button type="submit" className="btn-primary">
                {t("Subscribe")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
