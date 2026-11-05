
"use client";

import { useState } from "react";
import Link from "next/link";

type Flashcard = {
  question: string;
  answer: string;
};

export default function FlashcardsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [revealed, setRevealed] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [current, setCurrent] = useState(0);

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0];
    setError("");
    setCards([]);
    setRevealed([]);
    setCurrent(0);

    if (!selected) return;

    const valid =
      selected.name.toLowerCase().endsWith(".pdf") ||
      selected.name.toLowerCase().endsWith(".docx");

    if (!valid) {
      setError("Please upload a PDF or DOCX file.");
      return;
    }

    setFile(selected);
  }

  async function generateFlashcards() {
    if (!file) {
      setError("Please upload a document first.");
      return;
    }

    setLoading(true);
    setError("");
    setCards([]);
    setRevealed([]);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

      const response = await fetch(`${apiUrl}/flashcards`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(
          "Flashcards API is unavailable. Please check your backend endpoint.",
        );
      }

      const data = await response.json();
      const result = data.flashcards || data.cards || data.result;

      if (!Array.isArray(result)) {
        throw new Error("Unexpected response from the server.");
      }

      const formattedCards = result
        .map((item: any) => ({
          question: String(item.question || item.front || "").trim(),
          answer: String(item.answer || item.back || "").trim(),
        }))
        .filter((item: Flashcard) => item.question && item.answer);

      if (formattedCards.length === 0) {
        throw new Error("No valid flashcards were returned.");
      }

      setCards(formattedCards);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to generate flashcards.",
      );
    } finally {
      setLoading(false);
    }
  }

  function toggleAnswer(index: number) {
    setRevealed((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index],
    );
  }

  function nextCard() {
    setCurrent((previous) => Math.min(previous + 1, cards.length - 1));
  }

  function previousCard() {
    setCurrent((previous) => Math.max(previous - 1, 0));
  }

  return (
    <main className="min-h-screen bg-[#F5EFE6] px-5 py-14 text-[#38271D] sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/tools"
          className="font-bold text-[#765139] hover:underline"
        >
          ← Back to Tools
        </Link>

        <header className="mt-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#765139] text-3xl text-[#F5EFE6]">
            ▤
          </div>

          <h1 className="mt-6 text-4xl font-extrabold">
            AI Flashcards
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#806D5C]">
            Turn your study documents into question-and-answer
            flashcards and test your knowledge.
          </p>
        </header>

        <section className="mt-12 rounded-3xl border border-[#D8C5B0] bg-[#EFE6DA] p-6 sm:p-10">
          <label
            htmlFor="flashcard-file"
            className="flex cursor-pointer flex-col items-center rounded-2xl border-2 border-dashed border-[#B99B7D] bg-[#F5EFE6] px-6 py-12 text-center hover:bg-[#EDE1D2]"
          >
            <span className="text-4xl text-[#765139]">↑</span>
            <span className="mt-4 text-lg font-bold">
              Upload your study document
            </span>
            <span className="mt-2 text-sm text-[#806D5C]">
              Select a PDF or DOCX file
            </span>

            <input
              id="flashcard-file"
              type="file"
              accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFile}
              className="hidden"
            />
          </label>

          {file && (
            <div className="mt-5 rounded-xl border border-[#D8C5B0] bg-[#EDE1D2] p-5">
              <p className="break-all font-bold">{file.name}</p>
              <p className="mt-2 text-sm text-[#806D5C]">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  setCards([]);
                  setRevealed([]);
                  setError("");
                }}
                className="mt-3 text-sm font-bold text-[#765139] hover:underline"
              >
                Remove file
              </button>
            </div>
          )}

          {error && (
            <p className="mt-5 rounded-xl border border-[#B98A72] bg-[#EAD5C6] p-4 text-sm font-semibold text-[#6B3829]">
              {error}
            </p>
          )}

          <button
            type="button"
            onClick={generateFlashcards}
            disabled={!file || loading}
            className="mt-7 w-full rounded-xl bg-[#765139] px-6 py-4 font-bold text-[#F5EFE6] hover:bg-[#5D3E2B] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Generating Flashcards..." : "Generate Flashcards →"}
          </button>
        </section>

        {cards.length > 0 && (
          <section className="mt-12">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-extrabold">
                Your Flashcards
              </h2>
              <span className="text-sm text-[#806D5C]">
                Card {current + 1} of {cards.length}
              </span>
            </div>

            <button
              type="button"
              onClick={() => toggleAnswer(current)}
              className="min-h-72 w-full rounded-3xl border border-[#D8C5B0] bg-[#765139] p-8 text-center text-[#F5EFE6] shadow-lg transition hover:bg-[#69472F] sm:p-12"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E1C5A8]">
                {revealed.includes(current) ? "ANSWER" : "QUESTION"}
              </span>

              <p className="mt-8 text-2xl font-extrabold leading-relaxed">
                {revealed.includes(current)
                  ? cards[current].answer
                  : cards[current].question}
              </p>

              <p className="mt-10 text-sm text-[#E1C5A8]">
                Click card to {revealed.includes(current) ? "see question" : "reveal answer"}
              </p>
            </button>

            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={previousCard}
                disabled={current === 0}
                className="rounded-xl border border-[#765139] px-6 py-3 font-bold text-[#765139] hover:bg-[#EDE1D2] disabled:opacity-40"
              >
                ← Previous
              </button>

              <button
                type="button"
                onClick={nextCard}
                disabled={current === cards.length - 1}
                className="rounded-xl bg-[#765139] px-6 py-3 font-bold text-[#F5EFE6] hover:bg-[#5D3E2B] disabled:opacity-40"
              >
                Next →
              </button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to card ${index + 1}`}
                  className={`h-3 w-3 rounded-full ${
                    current === index ? "bg-[#765139]" : "bg-[#C5AD96]"
                  }`}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
