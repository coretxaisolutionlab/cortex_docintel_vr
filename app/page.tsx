
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Chat with Documents",
    description: "Ask questions and get accurate answers directly from your uploaded documents.",
    link: "/chat",
  },
  {
    number: "02",
    title: "Smart Summarization",
    description: "Turn lengthy documents into clear and easy-to-understand summaries.",
    link: "/summary",
  },
  {
    number: "03",
    title: "Data Extraction",
    description: "Extract important information, dates, names and structured data.",
    link: "/extraction",
  },
  {
    number: "04",
    title: "Document Comparison",
    description: "Compare two documents and identify important differences.",
    link: "/comparison",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
              <span className="h-2 w-2 rounded-full bg-violet-600"></span>
              Intelligent Document Assistant
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
              Your documents.
              <br />
              Your questions.
              <br />
              <span className="text-violet-600">Instant answers.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-500">
              Stop searching through endless pages. Upload your documents,
              ask questions, extract information and understand everything
              in one place.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/upload"
                className="rounded-xl bg-violet-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                Upload Document →
              </Link>

              <Link
                href="/tools"
                className="rounded-xl border border-gray-300 px-7 py-4 text-sm font-semibold text-gray-800 transition hover:border-violet-500 hover:text-violet-600"
              >
                Explore AI Tools
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
              <span>✓ PDF Support</span>
              <span>✓ DOCX Support</span>
              <span>✓ AI Powered</span>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Document Workspace
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Your intelligent document assistant
                </p>
              </div>
              <span className="rounded-lg bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-700">
                AI Workspace
              </span>
            </div>

            <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white px-5 py-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-violet-50 text-2xl">
                ↑
              </div>

              <h3 className="mt-5 font-semibold text-gray-900">
                Upload your document
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Start by adding a PDF or DOCX file
              </p>

              <Link
                href="/upload"
                className="mt-6 inline-block rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700"
              >
                Choose a File
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-gray-800">
                  Summarize
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Quick document insights
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-gray-800">
                  Ask AI
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Get document answers
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
                What you can do
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Everything you need to work smarter
              </h2>
              <p className="mt-3 max-w-xl text-gray-500">
                Powerful document tools designed to save time and make
                information easier to understand.
              </p>
            </div>

            <Link
              href="/tools"
              className="text-sm font-semibold text-violet-600 hover:text-violet-800"
            >
              View all tools →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Link
                href={feature.link}
                key={feature.number}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-md"
              >
                <span className="text-sm font-semibold text-violet-600">
                  {feature.number}
                </span>

                <h3 className="mt-7 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>

                <span className="mt-7 inline-block text-sm font-semibold text-gray-800 group-hover:text-violet-600">
                  Explore feature →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-2xl bg-gray-950 px-7 py-14 text-center md:px-16">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to understand your documents better?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Bring your documents and let DOCINTEL AI help you find
            the information that matters.
          </p>

          <Link
            href="/upload"
            className="mt-8 inline-block rounded-xl bg-violet-600 px-7 py-4 text-sm font-semibold text-white hover:bg-violet-700"
          >
            Get Started →
          </Link>
        </div>
      </section>

      <footer className="border-t border-gray-200 px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-gray-500 md:flex-row">
          <p>© 2026 DOCINTEL AI. All rights reserved.</p>
          <p>Built for smarter document understanding.</p>
        </div>
      </footer>

    </main>
  );
}
