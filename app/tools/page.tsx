
"use client";

import Link from "next/link";
import { useState } from "react";

const tools = [
  {
    name: "PDF Summarizer",
    description: "Convert lengthy documents into short and meaningful summaries.",
    icon: "📝",
    category: "Writing",
    path: "/summarizer",
    available: true,
  },
  {
    name: "Chat with PDF",
    description: "Ask questions and get instant answers from your documents.",
    icon: "💬",
    category: "AI Chat",
    path: "/chat",
    available: true,
  },
  {
    name: "Data Extraction",
    description: "Extract important information, names, dates and key details.",
    icon: "📊",
    category: "Analysis",
    path: "/extraction",
    available: true,
  },
  {
    name: "Document Comparison",
    description: "Compare two documents and identify their differences.",
    icon: "📑",
    category: "Analysis",
    path: "/compare",
    available: true,
  },
  {
    name: "Key Points Generator",
    description: "Find the most important points from lengthy documents.",
    icon: "🎯",
    category: "Study",
    path: "/tools/key-points",
    available: false,
  },
  {
    name: "AI Flashcards",
    description: "Create study flashcards automatically from your notes.",
    icon: "🗂️",
    category: "Study",
    path: "/tools/flashcards",
    available: false,
  },
  {
    name: "AI Quiz Generator",
    description: "Generate practice questions and quizzes from documents.",
    icon: "🧠",
    category: "Study",
    path: "/tools/quiz",
    available: false,
  },
  {
    name: "PDF Splitter",
    description: "Organize large PDF files by splitting selected pages.",
    icon: "✂️",
    category: "PDF Tools",
    path: "/tools/split-pdf",
    available: false,
  },
];

const categories = [
  "All Tools",
  "Writing",
  "AI Chat",
  "Analysis",
  "Study",
  "PDF Tools",
];

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Tools");

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All Tools" ||
      tool.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#fafafa] px-5 py-14">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            DOCINTEL AI WORKSPACE
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Explore AI Tools
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Everything you need to understand, analyze and work
            smarter with your documents in one place.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mb-8 max-w-2xl">
          <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-100">

            <span className="mr-3 text-xl">⌕</span>

            <input
              type="search"
              placeholder="Search AI tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-gray-400 hover:text-purple-600"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-md"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-purple-400 hover:text-purple-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Heading */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Available Tools
          </h2>

          <span className="text-sm text-gray-500">
            {filteredTools.length} tools available
          </span>
        </div>

        {/* Tool Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-2xl">
                {tool.icon}
              </div>

              <span className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                {tool.category}
              </span>

              <h3 className="mt-2 text-lg font-bold text-gray-900">
                {tool.name}
              </h3>

              <p className="mt-3 min-h-[60px] text-sm leading-6 text-gray-500">
                {tool.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

                {tool.available ? (
                  <Link
                    href={tool.path}
                    className="flex w-full items-center justify-between text-sm font-semibold text-purple-600"
                  >
                    Open Tool
                    <span className="text-lg transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ) : (
                  <span className="flex w-full items-center justify-between text-sm font-semibold text-gray-400">
                    Coming Soon
                    <span>🔒</span>
                  </span>
                )}

              </div>
            </div>
          ))}

        </div>

        {/* No Results */}
        {filteredTools.length === 0 && (
          <div className="rounded-2xl border border-gray-200 bg-white py-16 text-center">
            <div className="text-4xl">🔍</div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              No tools found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try another search or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All Tools");
              }}
              className="mt-5 rounded-lg bg-purple-600 px-5 py-2 text-white hover:bg-purple-700"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Section */}
        <div className="mt-16 rounded-2xl bg-gray-900 px-8 py-10 text-center text-white">

          <h2 className="text-2xl font-bold">
            Ready to work smarter?
          </h2>

          <p className="mt-3 text-sm text-gray-300">
            Upload your document and start exploring DOCINTEL AI.
          </p>

          <Link
            href="/upload"
            className="mt-6 inline-block rounded-xl bg-purple-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            Upload Document →
          </Link>

        </div>

      </div>
    </main>
  );
}
