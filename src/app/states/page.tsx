import Link from "next/link";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "State-wise Government Schemes - All States & UTs",
  description: "Find government schemes by state. All 28 states and 8 union territories with state-specific welfare schemes, subsidies and benefits.",
};

const states = [
  { name: "Andhra Pradesh", slug: "andhra-pradesh" },
  { name: "Arunachal Pradesh", slug: "arunachal-pradesh" },
  { name: "Assam", slug: "assam" },
  { name: "Bihar", slug: "bihar" },
  { name: "Chhattisgarh", slug: "chhattisgarh" },
  { name: "Goa", slug: "goa" },
  { name: "Gujarat", slug: "gujarat" },
  { name: "Haryana", slug: "haryana" },
  { name: "Himachal Pradesh", slug: "himachal-pradesh" },
  { name: "Jharkhand", slug: "jharkhand" },
  { name: "Karnataka", slug: "karnataka" },
  { name: "Kerala", slug: "kerala" },
  { name: "Madhya Pradesh", slug: "madhya-pradesh" },
  { name: "Maharashtra", slug: "maharashtra" },
  { name: "Manipur", slug: "manipur" },
  { name: "Meghalaya", slug: "meghalaya" },
  { name: "Mizoram", slug: "mizoram" },
  { name: "Nagaland", slug: "nagaland" },
  { name: "Odisha", slug: "odisha" },
  { name: "Punjab", slug: "punjab" },
  { name: "Rajasthan", slug: "rajasthan" },
  { name: "Sikkim", slug: "sikkim" },
  { name: "Tamil Nadu", slug: "tamil-nadu" },
  { name: "Telangana", slug: "telangana" },
  { name: "Tripura", slug: "tripura" },
  { name: "Uttar Pradesh", slug: "uttar-pradesh" },
  { name: "Uttarakhand", slug: "uttarakhand" },
  { name: "West Bengal", slug: "west-bengal" },
];

const uts = [
  { name: "Andaman and Nicobar Islands", slug: "andaman-nicobar" },
  { name: "Chandigarh", slug: "chandigarh" },
  { name: "Dadra and Nagar Haveli and Daman and Diu", slug: "dadra-nagar-haveli-daman-diu" },
  { name: "Delhi", slug: "delhi" },
  { name: "Jammu and Kashmir", slug: "jammu-kashmir" },
  { name: "Ladakh", slug: "ladakh" },
  { name: "Lakshadweep", slug: "lakshadweep" },
  { name: "Puducherry", slug: "puducherry" },
];

export default function StatesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">States</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">State-wise Government Schemes</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">
          Explore government schemes available in your state. Each state offers unique welfare programs in addition to central government schemes.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-5">States (28)</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {states.map((state) => (
              <Link key={state.slug} href={`/states/${state.slug}`} className="group flex items-center gap-2 bg-white rounded-xl border border-gray-200 px-4 py-3 hover:shadow-md hover:border-blue-200 transition-all">
                <MapPin className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700">{state.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <AdUnit />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-5">Union Territories (8)</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {uts.map((ut) => (
              <Link key={ut.slug} href={`/states/${ut.slug}`} className="group flex items-center gap-2 bg-white rounded-xl border border-gray-200 px-4 py-3 hover:shadow-md hover:border-blue-200 transition-all">
                <MapPin className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700">{ut.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <AdUnit />
      </div>
    </div>
  );
}
