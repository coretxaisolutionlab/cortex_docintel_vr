
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "₹1,499",
    description: "For individuals getting started with document intelligence.",
    users: "1 User",
    pages: "500 Pages / Month",
    features: [
      "PDF and DOCX support",
      "AI document summaries",
      "Document question answering",
      "Basic document search",
      "Standard support",
    ],
  },
  {
    name: "Professional",
    price: "₹4,999",
    description: "For growing teams managing documents every day.",
    users: "5 Users",
    pages: "2,500 Pages / Month",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced document analysis",
      "Data extraction",
      "Document comparison",
      "Report export",
      "Priority support",
    ],
  },
  {
    name: "Business",
    price: "₹11,999",
    description: "For organizations with advanced document workflows.",
    users: "15 Users",
    pages: "10,000 Pages / Month",
    features: [
      "Everything in Professional",
      "Manufacturing workflows",
      "Invoice and PO intelligence",
      "Supplier document analysis",
      "Analytics and reporting",
      "Role-based access",
      "Audit support",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6] px-5 py-16 text-[#38271D] sm:px-8">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#CDBBA8] bg-[#EFE6DA] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#765139]">
            SIMPLE AND TRANSPARENT
          </span>

          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">
            Plans That Grow With You
          </h1>

          <p className="mt-5 text-base leading-7 text-[#806D5C]">
            Choose the right DOCINTEL AI plan for your document
            management needs. Get the tools and capabilities
            your workflow requires.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="mt-14 grid items-stretch gap-7 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 transition hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? "border-[#765139] bg-[#765139] text-[#F5EFE6] shadow-lg"
                  : "border-[#D8C5B0] bg-[#EFE6DA] text-[#38271D]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#D8B99B] px-5 py-2 text-xs font-extrabold tracking-wide text-[#38271D]">
                  MOST POPULAR
                </span>
              )}

              <div>
                <h2 className="text-2xl font-extrabold">
                  {plan.name}
                </h2>

                <p className={`mt-3 min-h-12 text-sm leading-6 ${
                  plan.popular ? "text-[#E5D5C4]" : "text-[#806D5C]"
                }`}>
                  {plan.description}
                </p>
              </div>

              <div className="mt-7">
                <span className="text-4xl font-extrabold">
                  {plan.price}
                </span>
                <span className={`ml-2 text-sm ${
                  plan.popular ? "text-[#E5D5C4]" : "text-[#806D5C]"
                }`}>
                  / month
                </span>
              </div>

              <div className={`mt-7 rounded-xl p-4 ${
                plan.popular ? "bg-[#69472F]" : "bg-[#E6D8C7]"
              }`}>
                <p className="text-sm font-bold">{plan.users}</p>
                <p className={`mt-2 text-sm ${
                  plan.popular ? "text-[#E5D5C4]" : "text-[#806D5C]"
                }`}>
                  {plan.pages}
                </p>
              </div>

              <div className="mt-7 flex-1">
                <p className="text-sm font-extrabold uppercase tracking-wider">
                  What's Included
                </p>

                <ul className="mt-5 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm ${
                        plan.popular ? "text-[#F0E3D5]" : "text-[#806D5C]"
                      }`}
                    >
                      <span className="font-bold text-[#C69C75]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/signup"
                className={`mt-9 block rounded-xl px-5 py-4 text-center text-sm font-extrabold transition ${
                  plan.popular
                    ? "bg-[#D8B99B] text-[#38271D] hover:bg-[#E8CEB5]"
                    : "bg-[#765139] text-[#F5EFE6] hover:bg-[#5D3E2B]"
                }`}
              >
                Get Started →
              </Link>
            </div>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <section className="mt-16 rounded-3xl bg-[#38271D] px-7 py-12 text-center text-[#F5EFE6]">
          <h2 className="text-3xl font-extrabold">
            Need a Custom Solution?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#E5D5C4]">
            Have specific document processing requirements?
            Let's find a plan that fits your workflow.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex rounded-xl bg-[#D8B99B] px-7 py-3.5 text-sm font-bold text-[#38271D] hover:bg-[#E8CEB5]"
          >
            Contact Our Team →
          </Link>
        </section>

      </div>
    </main>
  );
}
