"use client";

import Link from "next/link";
import { useState } from "react";

const tools = [
  { title: "PDF Summarizer", description: "Summarize long documents into concise notes.", category: "Writing", icon: "📄", href: "/summarizer" },
  { title: "Chat with PDF", description: "Ask questions about your documents.", category: "AI Chat", icon: "💬", href: "/chat" },
  { title: "Data Extraction", description: "Extract useful information from documents.", category: "Analysis", icon: "📊", href: "/extraction" },
  { title: "Document Comparison", description: "Compare documents and identify differences.", category: "Analysis", icon: "📑", href: "/compare" },
  { title: "Key Points Generator", description: "Find important points from study material.", category: "Study", icon: "🎯", href: "/tools/key-points" },
  { title: "AI Flashcards", description: "Create flashcards from documents.", category: "Study", icon: "🗂️", href: "/tools/flashcards" },
  { title: "AI Quiz Generator", description: "Generate quizzes from documents.", category: "Study", icon: "🧠", href: "/tools/quiz" },
  { title: "PDF Splitter", description: "Split PDF files into separate documents.", category: "PDF Tools", icon: "✂️", href: "/tools/split-pdf" },
];

const categories = ["All Tools", "Writing", "AI Chat", "Analysis", "Study", "PDF Tools"];

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Tools");

  const filteredTools = tools.filter((tool) => {
    const matchesCategory = category === "All Tools" || tool.category === category;
    const matchesSearch =
      tool.title.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#F5EFE6] px-5 py-14 text-[#38271D]">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-[#A77B55]">
            DOCINTEL AI
          </p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Explore Our Tools
          </h1>
          <p className="text-[#806D5C]">
            Everything you need to understand and analyze your documents.
          </p>
        </header>

        <form
          className="mx-auto mb-8 flex max-w-2xl gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tools..."
            className="min-w-0 flex-1 rounded-xl border border-[#D8C5B0] bg-white px-5 py-3 outline-none focus:border-[#765139]"
          />
          <button
            type="submit"
            className="cursor-pointer rounded-xl bg-[#765139] px-6 py-3 font-semibold text-white hover:bg-[#5D3E2B]"
          >
            Search
          </button>
        </form>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`cursor-pointer rounded-full border px-5 py-3 text-sm font-semibold ${
                category === item
                  ? "border-[#765139] bg-[#765139] text-white"
                  : "border-[#D8C5B0] bg-white text-[#806D5C] hover:bg-[#E8D9C8]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">Available Tools</h2>
          <span className="text-sm text-[#806D5C]">
            {filteredTools.length} tools found
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.title}
              className="flex flex-col rounded-2xl border border-[#D8C5B0] bg-[#EFE6DA] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#765139] text-2xl text-white">
                {tool.icon}
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#A77B55]">
                {tool.category}
              </p>
              <h2 className="mb-3 text-xl font-bold">{tool.title}</h2>
              <p className="mb-6 flex-1 text-sm leading-6 text-[#806D5C]">
                {tool.description}
              </p>
              <Link
                href={tool.href}
                className="rounded-xl bg-[#765139] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#5D3E2B]"
              >
                Open Tool →
              </Link>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <p className="py-16 text-center text-[#806D5C]">
            No tools found. Try another search.
          </p>
        )}
      </div>
    </main>
  );
}