
import Link from "next/link";

const stats = [
  { label: "Total Documents", value: "0", icon: "▤" },
  { label: "AI Summaries", value: "0", icon: "✎" },
  { label: "Questions Asked", value: "0", icon: "☷" },
  { label: "Data Extracted", value: "0", icon: "▥" },
];

const workspaceTools = [
  {
    title: "PDF Summarizer",
    description: "Generate clear summaries from your documents.",
    icon: "▤",
    href: "/summarizer",
  },
  {
    title: "Chat with PDF",
    description: "Ask questions about your uploaded documents.",
    icon: "☷",
    href: "/chat",
  },
  {
    title: "Data Extraction",
    description: "Extract important information from documents.",
    icon: "⌕",
    href: "/extraction",
  },
  {
    title: "Document Comparison",
    description: "Compare two documents and find differences.",
    icon: "⇄",
    href: "/compare",
  },
];

const sidebarLinks = [
  { title: "Dashboard", href: "/dashboard", icon: "▦" },
  { title: "All Tools", href: "/tools", icon: "✧" },
  { title: "Upload Document", href: "/upload", icon: "↑" },
  { title: "PDF Summarizer", href: "/summarizer", icon: "▤" },
  { title: "Chat with PDF", href: "/chat", icon: "☷" },
  { title: "Data Extraction", href: "/extraction", icon: "⌕" },
  { title: "Document Comparison", href: "/compare", icon: "⇄" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#38271D]">
      <div className="flex min-h-[calc(100vh-78px)]">

        {/* SIDEBAR */}
        <aside className="hidden w-[260px] shrink-0 border-r border-[#D8C5B0] bg-[#EDE1D2] px-5 py-8 lg:block">
          <p className="px-3 text-xs font-bold tracking-[0.2em] text-[#A77B55]">
            WORKSPACE
          </p>

          <h2 className="mb-8 mt-3 px-3 text-xl font-extrabold">
            Your Documents
          </h2>

          <nav className="space-y-2">
            {sidebarLinks.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  index === 0
                    ? "bg-[#765139] text-[#F5EFE6] shadow-sm"
                    : "text-[#765139] hover:bg-[#E2D1BE]"
                }`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5EFE6] text-lg text-[#765139]">
                  {item.icon}
                </span>
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="mt-16 rounded-2xl border border-[#D8C5B0] bg-[#F5EFE6] p-5">
            <span className="text-2xl text-[#A77B55]">✦</span>
            <h3 className="mt-3 font-bold">Need assistance?</h3>
            <p className="mt-2 text-xs leading-5 text-[#806D5C]">
              Explore our tools to make document management easier.
            </p>
            <Link
              href="/tools"
              className="mt-4 inline-block text-sm font-bold text-[#765139] hover:underline"
            >
              Explore Tools →
            </Link>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="min-w-0 flex-1 px-5 py-10 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">

            {/* PAGE HEADER */}
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div>
                <p className="text-sm font-medium text-[#A77B55]">
                  Workspace / Dashboard
                </p>
                <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                  Welcome to DOCINTEL AI
                </h1>
                <p className="mt-3 text-[#806D5C]">
                  Manage your documents and AI tools from one place.
                </p>
              </div>

              <Link
                href="/upload"
                className="rounded-xl bg-[#765139] px-6 py-3.5 text-sm font-bold text-[#F5EFE6] shadow-sm transition hover:bg-[#5D3E2B]"
              >
                + Upload Document
              </Link>
            </div>

            {/* STAT CARDS */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[#D8C5B0] bg-[#EFE6DA] p-6"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-[#806D5C]">
                      {stat.label}
                    </p>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#765139] text-xl text-[#F5EFE6]">
                      {stat.icon}
                    </span>
                  </div>
                  <p className="mt-5 text-4xl font-extrabold text-[#38271D]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* TOOLS HEADER */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold">
                  AI Workspace
                </h2>
                <p className="mt-2 text-sm text-[#806D5C]">
                  Choose a tool to get started.
                </p>
              </div>

              <Link
                href="/tools"
                className="text-sm font-bold text-[#765139] hover:underline"
              >
                View All Tools →
              </Link>
            </div>

            {/* TOOL CARDS */}
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {workspaceTools.map((tool) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="group flex items-center gap-5 rounded-2xl border border-[#D8C5B0] bg-[#EFE6DA] p-6 transition hover:-translate-y-1 hover:border-[#A77B55] hover:shadow-md"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#765139] text-2xl text-[#F5EFE6]">
                    {tool.icon}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-[#38271D]">
                      {tool.title}
                    </h3>
                    <p className="mt-2 text-sm leading-5 text-[#806D5C]">
                      {tool.description}
                    </p>
                  </div>

                  <span className="text-xl font-bold text-[#765139] transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* GET STARTED */}
            <div className="mt-10 rounded-3xl bg-[#38271D] px-7 py-10 text-[#F5EFE6] sm:px-10">
              <h2 className="text-2xl font-extrabold">
                Get Started with DOCINTEL AI
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#E5D5C4]">
                Upload your first document and explore intelligent
                document summarization, extraction and analysis.
              </p>
              <Link
                href="/upload"
                className="mt-6 inline-flex rounded-xl bg-[#D8B99B] px-6 py-3 font-bold text-[#38271D] transition hover:bg-[#E8CEB5]"
              >
                Upload Your First Document →
              </Link>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
