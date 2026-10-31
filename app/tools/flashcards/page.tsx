
"use client";

import { useState } from "react";
import Sidebar from "../../../components/Sidebar";

export default function FlashcardsPage() {
  const [topic, setTopic] = useState("");
  const [created, setCreated] = useState(false);
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const cards = [
    { question: "What is Artificial Intelligence?", answer: "AI is the ability of machines to perform tasks that normally require human intelligence." },
    { question: "What is Machine Learning?", answer: "Machine Learning is a branch of AI that allows systems to learn patterns from data." },
    { question: "What is Deep Learning?", answer: "Deep Learning uses multi-layered neural networks to learn complex patterns." },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden w-64 shrink-0 md:block"><Sidebar /></div>
      <main className="min-w-0 flex-1 p-5 md:p-10">
        <p className="text-sm font-semibold text-purple-600">AI TOOLS / STUDY</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">AI Flashcards</h1>
        <p className="mt-2 text-gray-500">Learn faster with interactive study cards.</p>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
          <label className="text-sm font-semibold text-gray-800">Enter your study topic</label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. Computer Networks" className="min-w-0 flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-purple-500" />
            <button onClick={() => { if (!topic.trim()) return alert("Enter a topic first."); setCreated(true); setCurrent(0); setShowAnswer(false); }} className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-700">Create Flashcards</button>
          </div>
        </div>

        {created ? (
          <div className="mx-auto mt-8 max-w-2xl">
            <p className="mb-4 text-center text-sm font-medium text-gray-500">{topic} · Card {current + 1} of {cards.length}</p>
            <button onClick={() => setShowAnswer(!showAnswer)} className="flex min-h-64 w-full flex-col items-center justify-center rounded-3xl border border-purple-200 bg-white p-8 text-center shadow-sm hover:bg-purple-50">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">{showAnswer ? "Answer" : "Question"} · Click to flip</span>
              <span className="mt-6 text-2xl font-bold text-gray-900">{showAnswer ? cards[current].answer : cards[current].question}</span>
            </button>
            <div className="mt-5 flex justify-between gap-3">
              <button disabled={current === 0} onClick={() => { setCurrent(current - 1); setShowAnswer(false); }} className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold disabled:opacity-40">← Previous</button>
              <button disabled={current === cards.length - 1} onClick={() => { setCurrent(current + 1); setShowAnswer(false); }} className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white disabled:opacity-40">Next →</button>
            </div>
            <p className="mt-5 text-center text-xs text-gray-400">Demo flashcards only. AI-generated cards require backend integration.</p>
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <div className="text-4xl">🗂️</div>
            <h2 className="mt-4 font-bold text-gray-800">Your flashcards will appear here</h2>
            <p className="mt-2 text-sm text-gray-500">Enter a topic to preview interactive flashcards.</p>
          </div>
        )}
      </main>
    </div>
  );
}
