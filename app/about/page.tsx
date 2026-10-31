
import Link from "next/link";

const features = [
  {
    icon: "💬",
    title: "Chat with Documents",
    description: "Ask questions and get insights from your uploaded documents.",
  },
  {
    icon: "📝",
    title: "Smart Summarization",
    description: "Convert lengthy documents into clear and concise summaries.",
  },
  {
    icon: "📊",
    title: "Data Extraction",
    description: "Find important information and organize document data easily.",
  },
  {
    icon: "🔄",
    title: "Document Comparison",
    description: "Compare multiple documents and identify important differences.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-purple-50 px-6 py-20 text-center">
        <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-700">
          ABOUT DOCINTEL AI
        </span>

        <h1 className="mx-auto mt-7 max-w-3xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Making Document Intelligence Simple and Smart
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600">
          DOCINTEL AI is an intelligent document workspace designed to help
          users upload, understand, organize and analyze documents with
          AI-powered tools.
        </p>

        <Link
          href="/tools"
          className="mt-8 inline-block rounded-xl bg-purple-600 px-7 py-3 font-semibold text-white hover:bg-purple-700"
        >
          Explore Our Tools →
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-purple-600">
              Who We Are
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Your Documents, Your Intelligence
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              Working with large documents can take time and effort.
              DOCINTEL AI aims to make this process easier through a single
              workspace where users can interact with documents and access
              useful information.
            </p>
            <p className="mt-4 leading-7 text-gray-600">
              From students to professionals, our goal is to make document
              understanding more accessible, organized and efficient.
            </p>
          </div>

          <div className="rounded-3xl border border-purple-100 bg-purple-50 p-8">
            <div className="text-5xl">📚</div>
            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              One Workspace. Multiple Possibilities.
            </h3>
            <p className="mt-3 leading-7 text-gray-600">
              Upload documents, explore information, generate summaries and
              work smarter with an organized document experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-purple-600">
              What We Offer
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Powerful Document Tools
            </h2>
            <p className="mt-3 text-gray-500">
              Everything you need to work with documents in one place.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="mt-5 font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to Work Smarter?
        </h2>
        <p className="mt-3 text-gray-500">
          Discover a simpler way to understand your documents.
        </p>
        <Link
          href="/upload"
          className="mt-7 inline-block rounded-xl bg-purple-600 px-7 py-3 font-semibold text-white hover:bg-purple-700"
        >
          Get Started →
        </Link>
      </section>
    </div>
  );
}
