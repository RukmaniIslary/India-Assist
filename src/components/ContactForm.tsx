"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Front-end only. Connect to an email/form service in production.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-india-green/30 bg-green-50 p-6 text-green-800">
        <p className="font-semibold">Thank you for reaching out.</p>
        <p className="mt-1 text-sm">
          We have received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-xl border border-ink-200 bg-white p-6"
    >
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink-700">
          Name
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm outline-none focus:border-brand-400"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm outline-none focus:border-brand-400"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink-700">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm outline-none focus:border-brand-400"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Send message
      </button>
    </form>
  );
}
