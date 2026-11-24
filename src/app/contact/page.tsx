"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Clock, CheckCircle } from "lucide-react";

// Note: metadata is exported from a separate server component in Next.js when using "use client".
// We handle SEO via layout metadata instead.

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    else if (form.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters.";
    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error on change
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    // Simulate async submission (no backend)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Contact</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Have a question, found an error, or want to share feedback? We would love to hear from you.
        </p>

        <div className="grid sm:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="sm:col-span-1 space-y-5">
            <div className="bg-blue-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
              </div>
              <a
                href="mailto:contact@indiaassist.online"
                className="text-blue-700 hover:underline text-sm font-medium break-all"
              >
                contact@indiaassist.online
              </a>
              <p className="text-xs text-gray-500 mt-2">
                For all general enquiries, content corrections, and feedback.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Response Time</h3>
              </div>
              <p className="text-sm text-gray-700">
                We typically respond to all emails within <strong>2–3 business days</strong>.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Monday – Friday, 10 AM – 6 PM IST
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Common Topics</h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-600 mt-0.5">›</span>
                  Report incorrect information
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-600 mt-0.5">›</span>
                  Suggest a scheme or calculator
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-600 mt-0.5">›</span>
                  Request a scheme guide
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-600 mt-0.5">›</span>
                  Technical issues with tools
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-600 mt-0.5">›</span>
                  Partnership enquiries
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="sm:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-green-50 border border-green-200 rounded-xl">
                <CheckCircle className="w-14 h-14 text-green-600 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                <p className="text-gray-600 mb-6 max-w-sm">
                  Thank you for reaching out. We have received your message and will get back to you at <strong>{form.email}</strong> within 2–3 business days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-5 py-2.5 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    className={`w-full px-4 py-2.5 border rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.name ? "border-red-400 bg-red-50" : "border-gray-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. rajesh@email.com"
                    className={`w-full px-4 py-2.5 border rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.email ? "border-red-400 bg-red-50" : "border-gray-200"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white ${
                      errors.subject ? "border-red-400 bg-red-50" : "border-gray-200"
                    }`}
                  >
                    <option value="">Select a subject...</option>
                    <option value="Report incorrect information">Report incorrect information</option>
                    <option value="Suggest a scheme or calculator">Suggest a scheme or calculator</option>
                    <option value="Technical issue with a tool">Technical issue with a tool</option>
                    <option value="Request a guide">Request a guide</option>
                    <option value="Partnership or collaboration">Partnership or collaboration</option>
                    <option value="General feedback">General feedback</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-600">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Please describe your question or feedback in detail..."
                    className={`w-full px-4 py-2.5 border rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                      errors.message ? "border-red-400 bg-red-50" : "border-gray-200"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-400">
                    {form.message.length} characters (minimum 20)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3 bg-blue-700 text-white font-medium text-sm rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p className="text-xs text-gray-500">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy" className="text-blue-700 hover:underline">Privacy Policy</Link>.
                  We do not share your information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
