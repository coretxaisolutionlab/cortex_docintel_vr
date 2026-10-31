
import Link from "next/link";
import Sidebar from "../../components/Sidebar";

const stats = [
  { title: "Total Documents", value: "0", icon: "📄" },
  { title: "AI Summaries", value: "0", icon: "📝" },
  { title: "Questions Asked", value: "0", icon: "💬" },
  { title: "Data Extracted", value: "0", icon: "📊" },
];

const recentTools = [
  { name: "PDF Summarizer", description: "Generate document summaries", href: "/summary", icon: "📝" },
  { name: "Chat with PDF", description: "Ask questions about documents", href: "/chat", icon: "💬" },
  { name: "Data Extraction", description: "Extract important information", href: "/extraction", icon: "📊" },
  { name: "Document Comparison", description: "Compare two documents", href: "/comparison", icon: "📑" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] md:flex">
      <div className="w-full md:w-64">
        <Sidebar />
      </div>

      <main className="min-w-0 flex-1 px-5 py-8 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">Workspace / Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              Welcome to DOCINTEL AI
            </h1>
            <p className="mt-2 text-gray-500">
              Manage your documents and AI tools from one place.
            </p>
          </div>

          <Link
            href="/upload"
            className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-700"
          >
            + Upload Document
          </Link>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{stat.title}</p>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</h2>
            </div>
          ))}
        </div>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">AI Workspace</h2>
            <Link href="/tools" className="text-sm font-semibold text-purple-600">
              View all tools →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {recentTools.map((tool) => (
              <Link
                href={tool.href}
                key={tool.name}
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-purple-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-2xl">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{tool.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{tool.description}</p>
                </div>
                <span className="ml-auto text-purple-600">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-7">
          <h2 className="text-xl font-bold text-gray-900">Get Started</h2>
          <p className="mt-2 text-sm text-gray-500">
            Upload your first document to explore DOCINTEL AI features.
          </p>
          <Link
            href="/upload"
            className="mt-5 inline-block rounded-xl bg-purple-50 px-5 py-3 text-sm font-semibold text-purple-700 hover:bg-purple-100"
          >
            Upload your first document →
          </Link>
        </section>
      </main>
    </div>
  );
}
