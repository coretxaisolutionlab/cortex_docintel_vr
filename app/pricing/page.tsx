
"use client";

import Link from "next/link";

const plans = [
  {
    name: "STARTER",
    price: "₹1,499",
    description: "For individuals and small businesses",
    users: "1 user",
    pages: "500 pages per month",
    features: [
      "PDF and DOCX upload",
      "AI document summaries",
      "Document Q&A",
      "Basic document search",
      "Standard support",
    ],
    background: "bg-blue-50",
    border: "border-blue-100",
    button: "bg-slate-900 hover:bg-slate-800",
  },
  {
    name: "PROFESSIONAL",
    price: "₹4,999",
    description: "For growing SMEs",
    users: "5 users",
    pages: "2,500 pages per month",
    features: [
      "Everything in Starter",
      "Advanced RAG-based search",
      "Multiple document collections",
      "AI data extraction",
      "Document comparison",
      "Report export",
      "Priority support",
    ],
    background: "bg-sky-50",
    border: "border-sky-100",
    button: "bg-purple-600 hover:bg-purple-700",
    popular: true,
  },
  {
    name: "BUSINESS",
    price: "₹11,999",
    description: "For manufacturing and operations teams",
    users: "15 users",
    pages: "10,000 pages per month",
    features: [
      "Everything in Professional",
      "Manufacturing document workflows",
      "Invoice and purchase-order intelligence",
      "Supplier document analysis",
      "Advanced analytics",
      "Role-based access and audit logs",
      "Priority business support",
    ],
    background: "bg-emerald-50",
    border: "border-emerald-100",
    button: "bg-slate-900 hover:bg-slate-800",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-purple-50 to-white px-5 py-16 text-center md:py-20">
        <span className="rounded-full border border-purple-200 bg-white px-4 py-2 text-xs font-bold tracking-wider text-purple-700">
          SIMPLE AND TRANSPARENT PRICING
        </span>

        <h1 className="mt-7 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Plans that grow with your business
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500">
          Choose the right DOCINTEL AI subscription for your document
          management and intelligence needs.
        </p>

        <p className="mt-4 text-xs text-gray-400">
          Proposed launch prices for the Indian market. Validate costs before
          commercial release.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-7 px-5 pb-20 md:grid-cols-2 xl:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border ${plan.border} ${plan.background} p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
          >
            {plan.popular && (
              <span className="absolute -top-3 right-6 rounded-full bg-purple-600 px-4 py-1.5 text-xs font-bold text-white shadow">
                MOST POPULAR
              </span>
            )}

            <div>
              <p className="text-lg font-extrabold tracking-wide text-gray-900">
                {plan.name}
              </p>

              <div className="mt-5 flex flex-wrap items-baseline gap-2">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                  {plan.price}
                </h2>
                <span className="text-sm text-gray-500">/ month</span>
              </div>

              <p className="mt-3 text-sm text-gray-600">
                {plan.description}
              </p>
            </div>

            <div className="my-7 h-px bg-gray-200" />

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                <span className="text-purple-600">✓</span>
                {plan.users}
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                <span className="text-purple-600">✓</span>
                {plan.pages}
              </div>
            </div>

            <div className="my-6 h-px bg-gray-200" />

            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
              Plan Features
            </p>

            <ul className="flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                >
                  <span className="font-bold text-purple-600">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/signup"
              className={`mt-8 block rounded-xl ${plan.button} px-5 py-3.5 text-center text-sm font-bold text-white transition`}
            >
              Get Started →
            </Link>
          </div>
        ))}
      </section>

      <section className="border-t border-gray-100 bg-gray-50 px-5 py-14 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Need a solution for your team?
        </h2>
        <p className="mt-3 text-sm text-gray-500">
          Explore DOCINTEL AI and find the right tools for your workflow.
        </p>
        <Link
          href="/tools"
          className="mt-6 inline-block rounded-xl border border-purple-200 bg-white px-6 py-3 text-sm font-semibold text-purple-700 hover:bg-purple-50"
        >
          Explore AI Tools
        </Link>
      </section>

      <footer className="border-t border-gray-100 px-5 py-6 text-center text-xs text-gray-400">
        © 2026 DOCINTEL AI. All rights reserved.
      </footer>
    </main>
  );
}
