import Link from "next/link";
import UploadBox from "../components/UploadBox";

const features = [
  {
    number: "01",
    title: "AI Document Chat",
    description:
      "Ask questions from your documents and get clear, relevant answers instantly.",
    href: "/chat",
  },
  {
    number: "02",
    title: "Smart Summarizer",
    description:
      "Turn lengthy documents into short, meaningful summaries in seconds.",
    href: "/summarizer",
  },
  {
    number: "03",
    title: "Data Extraction",
    description:
      "Extract important information and key details from your documents.",
    href: "/extraction",
  },
  {
    number: "04",
    title: "Document Comparison",
    description:
      "Compare multiple documents and identify important differences.",
    href: "/compare",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#F5EFE6] text-[#38271D]">

      {/* HERO SECTION */}
      <section className="px-5 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D8C5B0] bg-[#EFE6DA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#765139]">
              <span className="h-2 w-2 rounded-full bg-[#A77B55]" />
              Intelligent Document Workspace
            </span>

            <h1 className="mt-7 max-w-2xl text-5xl font-semibold leading-[1.12] tracking-tight text-[#38271D] md:text-7xl">
              Your documents.
              <br />
              <span className="font-serif italic text-[#A77B55]">
                Smarter than ever.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#806D5C] md:text-lg">
              Discover a smarter way to work with documents. Upload, analyse,
              summarise and find the information you need with the power of AI.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/upload"
                className="rounded-xl bg-[#765139] px-7 py-4 text-sm font-semibold text-[#F5EFE6] shadow-lg shadow-[#765139]/15 transition hover:-translate-y-1 hover:bg-[#5D3E2B]"
              >
                Get Started →
              </Link>

              <Link
                href="/tools"
                className="rounded-xl border border-[#CDB69E] px-7 py-4 text-sm font-semibold text-[#765139] transition hover:bg-[#EFE6DA]"
              >
                Explore AI Tools
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-[#D8C5B0] pt-7">
              <div>
                <p className="text-2xl font-semibold text-[#38271D]">01</p>
                <p className="mt-1 text-xs tracking-wide text-[#806D5C]">
                  Upload documents
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#38271D]">02</p>
                <p className="mt-1 text-xs tracking-wide text-[#806D5C]">
                  Analyse with AI
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#38271D]">03</p>
                <p className="mt-1 text-xs tracking-wide text-[#806D5C]">
                  Get insights
                </p>
              </div>
            </div>
          </div>

          {/* UPLOAD PANEL */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#D8C5B0]/40 blur-3xl" />

            <div className="relative rounded-[2rem] border border-[#D8C5B0] bg-[#EFE6DA] p-5 shadow-2xl shadow-[#38271D]/10 md:p-8">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A77B55]">
                    Workspace
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#38271D]">
                    Start with a document
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#765139] text-xl text-[#F5EFE6]">
                  ✦
                </div>
              </div>

              <UploadBox />

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#D8C5B0] pt-5 text-xs text-[#806D5C]">
                <span>PDF and DOCX supported</span>
                <span>Simple · Smart · Secure</span>
              </div>
            </div>

            <div className="relative mt-5 flex items-center gap-4 rounded-2xl border border-[#D8C5B0] bg-[#EDE1D2] p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#765139] text-lg text-[#F5EFE6]">
                ✧
              </div>
              <div>
                <p className="text-sm font-semibold text-[#38271D]">
                  Everything in one place
                </p>
                <p className="mt-1 text-xs text-[#806D5C]">
                  Chat, summarise, extract and compare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="h-px bg-[#D8C5B0]" />
      </div>

      {/* FEATURES */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A77B55]">
                What you can do
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-[#38271D] md:text-5xl">
                A better way to work with information.
              </h2>
            </div>

            <Link
              href="/tools"
              className="text-sm font-semibold text-[#765139] transition hover:text-[#A77B55]"
            >
              View all tools →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Link
                key={feature.number}
                href={feature.href}
                className="group rounded-2xl border border-[#D8C5B0] bg-[#EFE6DA] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#A77B55] hover:shadow-xl hover:shadow-[#38271D]/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#A77B55]">
                    {feature.number}
                  </span>
                  <span className="text-xl text-[#765139] transition group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="mt-12 text-xl font-semibold text-[#38271D]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#806D5C]">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#EDE1D2] px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A77B55]">
              The process
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#38271D] md:text-5xl">
              Three steps. More clarity.
            </h2>
            <p className="mt-5 leading-7 text-[#806D5C]">
              Get more from your documents without the complicated workflow.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Upload",
                description:
                  "Choose your document and add it to your workspace.",
              },
              {
                number: "02",
                title: "Explore",
                description:
                  "Select an AI tool to analyse and understand your content.",
              },
              {
                number: "03",
                title: "Get Results",
                description:
                  "Find answers, summaries and useful insights in less time.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-[#D8C5B0] bg-[#F5EFE6] p-8"
              >
                <p className="font-serif text-4xl italic text-[#A77B55]">
                  {step.number}
                </p>
                <h3 className="mt-8 text-2xl font-semibold text-[#38271D]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#806D5C]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#38271D] px-7 py-16 text-center md:px-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A987]">
            Make your next document count
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl italic leading-tight text-[#F5EFE6] md:text-6xl">
            Less searching. More understanding.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#D8C5B0]">
            Bring your documents into one intelligent workspace and discover
            what you can do with them.
          </p>

          <Link
            href="/upload"
            className="mt-9 inline-flex rounded-xl bg-[#D8C5B0] px-8 py-4 text-sm font-semibold text-[#38271D] transition hover:bg-[#F5EFE6]"
          >
            Start Exploring →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#D8C5B0] px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="font-serif text-xl font-semibold text-[#38271D]">
            DOCINTEL <span className="italic text-[#A77B55]">AI.</span>
          </p>
          <p className="text-xs text-[#806D5C]">
            Intelligent documents. Clearer decisions.
          </p>
          <p className="text-xs text-[#806D5C]">
            © 2026 DOCINTEL AI
          </p>
        </div>
      </footer>
    </main>
  );
}