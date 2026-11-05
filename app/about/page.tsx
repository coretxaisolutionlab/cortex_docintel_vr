
import Link from "next/link";

const features = [
  {
    icon: "✦",
    title: "AI-Powered Intelligence",
    description:
      "Transform lengthy documents into meaningful summaries and useful insights with intelligent document tools.",
  },
  {
    icon: "◈",
    title: "One Unified Workspace",
    description:
      "Summarize, chat, compare and extract information without switching between multiple platforms.",
  },
  {
    icon: "⌘",
    title: "Simple Experience",
    description:
      "A clean and intuitive workspace designed to make complex document tasks easier for everyone.",
  },
  {
    icon: "↗",
    title: "More Productivity",
    description:
      "Spend less time searching through pages and more time focusing on ideas and decisions.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload",
    description: "Upload your document and bring your information into DOCINTEL.",
  },
  {
    number: "02",
    title: "Analyze",
    description: "Choose the AI tool you need to understand your document.",
  },
  {
    number: "03",
    title: "Discover",
    description: "Get summaries, answers, extracted information and useful insights.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f3e9] text-[#38291f]">

      {/* HERO SECTION */}
      <section className="relative bg-[#60432f] px-6 py-28 text-center text-[#fff8ed] sm:py-36">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#b58b65] opacity-20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#d8b995] opacity-20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <span className="inline-block rounded-full border border-[#d8c2a8]/40 bg-white/10 px-6 py-3 text-xs font-bold tracking-[0.25em] text-[#e8d4bd]">
            ABOUT DOCINTEL
          </span>

          <h1 className="mt-9 text-5xl font-black leading-tight sm:text-7xl">
            Documents deserve
            <br />
            <span className="text-[#d9b995]">a smarter future.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#eadbca] sm:text-lg">
            Welcome to DOCINTEL AI — your intelligent document workspace.
            Turn information into understanding with powerful AI-driven
            document tools.
          </p>

          <Link
            href="/tools"
            className="mt-10 inline-flex rounded-full bg-[#f8f3e9] px-9 py-4 font-bold text-[#60432f] transition hover:-translate-y-1 hover:bg-white"
          >
            Explore Our Tools →
          </Link>
        </div>

        <div className="relative mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            ["01", "Upload Documents"],
            ["02", "Understand Information"],
            ["03", "Discover Insights"],
          ].map(([number, label]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/15 bg-white/[0.08] p-6 text-left"
            >
              <p className="text-sm font-bold text-[#d9b995]">{number}</p>
              <p className="mt-3 font-bold text-[#fff8ed]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="relative overflow-hidden bg-[#eee5d8] px-6 py-28">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#d8c0a5] opacity-40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[#d8c2a8] bg-[#f8f3e9] px-6 py-3 text-xs font-bold tracking-[0.2em] text-[#805638]">
              01 — DISCOVER DOCINTEL
            </span>

            <h2 className="mt-9 text-4xl font-black leading-tight sm:text-6xl">
              Not just documents.
              <br />
              <span className="text-[#986d49]">
                A whole new way to think.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#806e5c]">
              DOCINTEL AI is an intelligent document workspace designed to
              transform the way you interact with information. We bring
              powerful document capabilities together to help you understand
              more, work smarter and achieve more.
            </p>
          </div>

          <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-5">
            <div className="relative overflow-hidden rounded-[30px] bg-[#60432f] p-9 text-[#fff8ed] lg:col-span-3 sm:p-12">
              <div className="absolute -right-10 -top-10 text-[190px] font-black text-white/[0.06]">
                D
              </div>

              <span className="relative text-sm font-bold tracking-[0.2em] text-[#e2c9aa]">
                THE POWER OF DOCINTEL
              </span>

              <h3 className="relative mt-8 text-4xl font-black leading-tight sm:text-5xl">
                From information
                <br />
                to intelligence.
              </h3>

              <p className="relative mt-6 max-w-xl leading-8 text-[#e7d7c6]">
                Imagine turning hundreds of pages into meaningful insights.
                Understand complex documents, discover important information
                and compare content — all through one intelligent workspace.
              </p>

              <div className="relative mt-10 inline-flex items-center gap-3 rounded-full border border-[#c9ad8c]/40 bg-white/10 px-5 py-3 text-sm font-bold text-[#f1dfc9]">
                <span>✦</span>
                DOCUMENT INTELLIGENCE REIMAGINED
              </div>
            </div>

            <div className="rounded-[30px] border border-[#dfcbb2] bg-[#fbf8f2] p-9 lg:col-span-2">
              <span className="text-5xl text-[#986d49]">∞</span>

              <h3 className="mt-8 text-3xl font-black">
                One platform.
                <br />
                Endless possibilities.
              </h3>

              <p className="mt-5 leading-8 text-[#806e5c]">
                A unified destination for document summarization, AI-powered
                conversations, data extraction and document comparison.
              </p>

              <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-[#e9ddcd]">
                <div className="h-full w-3/4 rounded-full bg-[#986d49]" />
              </div>

              <p className="mt-3 text-xs font-bold tracking-widest text-[#986d49]">
                SMARTER DOCUMENT WORKFLOW
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <span className="text-sm font-bold tracking-[0.2em] text-[#986d49]">
              WHY DOCINTEL
            </span>

            <h3 className="mt-5 text-3xl font-black sm:text-5xl">
              Built around the way you work.
            </h3>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-[25px] border border-[#dfcbb2] bg-[#fbf8f2] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-4xl text-[#986d49]">{item.icon}</span>
                <h4 className="mt-7 text-xl font-black">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-[#806e5c]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[30px] border border-[#d8c2a8] bg-[#f8f3e9] px-7 py-14 text-center sm:px-14">
            <p className="text-sm font-bold tracking-[0.2em] text-[#986d49]">
              THE DOCINTEL PROMISE
            </p>

            <h3 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
              Don't just read your documents.
              <br />
              <span className="text-[#986d49]">
                Understand their potential.
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#806e5c]">
              We envision a world where working with information feels
              effortless, organized and intelligent. That's the experience
              DOCINTEL aims to create.
            </p>

            <Link
              href="/tools"
              className="mt-9 inline-flex rounded-full bg-[#60432f] px-9 py-4 font-bold text-[#fff8ed] transition hover:-translate-y-1 hover:bg-[#432e20]"
            >
              Explore DOCINTEL →
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-[#f8f3e9] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-bold tracking-[0.2em] text-[#986d49]">
              WHAT DRIVES US
            </span>
            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Our Mission & Vision
            </h2>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            <div className="rounded-[30px] bg-[#60432f] p-9 text-[#fff8ed] sm:p-12">
              <span className="text-4xl text-[#d9b995]">◎</span>
              <h3 className="mt-7 text-3xl font-black">Our Mission</h3>
              <p className="mt-5 leading-8 text-[#eadbca]">
                To make document understanding simpler, faster and more
                accessible through intelligent technology that helps people
                get more value from their information.
              </p>
            </div>

            <div className="rounded-[30px] border border-[#dfcbb2] bg-[#eee5d8] p-9 sm:p-12">
              <span className="text-4xl text-[#986d49]">✧</span>
              <h3 className="mt-7 text-3xl font-black">Our Vision</h3>
              <p className="mt-5 leading-8 text-[#806e5c]">
                To create a smarter digital world where documents are not
                just stored and read, but understood, explored and transformed
                into meaningful knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#eee5d8] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-bold tracking-[0.2em] text-[#986d49]">
              SIMPLE BY DESIGN
            </span>
            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              How DOCINTEL works
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#806e5c]">
              A straightforward journey from uploading a document to
              discovering valuable information.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[25px] border border-[#dfcbb2] bg-[#fbf8f2] p-8"
              >
                <span className="text-5xl font-black text-[#c4a17e]">
                  {step.number}
                </span>
                <h3 className="mt-7 text-2xl font-black">{step.title}</h3>
                <p className="mt-4 leading-7 text-[#806e5c]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#f8f3e9] px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[35px] bg-[#60432f] px-7 py-16 text-center text-[#fff8ed] sm:px-16">
          <span className="text-sm font-bold tracking-[0.2em] text-[#d9b995]">
            LET'S CONNECT
          </span>

          <h2 className="mt-6 text-4xl font-black sm:text-5xl">
            Have a question?
            <br />
            We'd love to hear from you.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#eadbca]">
            Have feedback, ideas or questions about DOCINTEL? Get in touch
            with our team. We're always happy to connect.
          </p>

          <a
            href="mailto:aisolutionlabcortex@gmail.com"
            className="mt-9 inline-flex rounded-full bg-[#f8f3e9] px-9 py-4 font-bold text-[#60432f] transition hover:-translate-y-1 hover:bg-white"
          >
            Contact Us →
          </a>

          <p className="mt-6 break-all text-sm text-[#e2c9aa]">
            aisolutionlabcortex@gmail.com
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#302219] px-6 py-12 text-[#f8f3e9]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-3xl font-black tracking-wider">DOCINTEL</h2>
            <p className="mt-2 text-sm text-[#c8b6a3]">
              Think smarter. Work better.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#e2c9aa]">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <Link href="/tools" className="transition hover:text-white">Tools</Link>
            <Link href="/about" className="transition hover:text-white">About</Link>
            <a
              href="mailto:aisolutionlabcortex@gmail.com"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-[#a99582]">
          © {new Date().getFullYear()} DOCINTEL AI. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
