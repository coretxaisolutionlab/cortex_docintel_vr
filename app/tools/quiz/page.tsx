
"use client";

import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
};

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function QuizPage() {
  const [file, setFile] = useState<File | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function generateQuiz() {
    if (!file) {
      setError("Please select a PDF or DOCX file first.");
      return;
    }

    setLoading(true);
    setError("");
    setQuestions([]);
    setAnswers({});
    setCurrent(0);
    setSubmitted(false);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${API_URL}/quiz`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || "Quiz generation failed.");
      }

      const rawQuestions =
        data.questions || data.quiz || data.result || [];

      const normalized: Question[] = rawQuestions.map(
        (item: any) => ({
          question: item.question || item.prompt || "",
          options: Array.isArray(item.options)
            ? item.options.map((option: any) =>
                typeof option === "string"
                  ? option
                  : option.label || option.text || ""
              )
            : [],
          answer:
            item.answer ||
            item.correct_answer ||
            item.correctAnswer ||
            item.correct_option ||
            "",
          explanation: item.explanation || item.feedback || "",
        })
      );

      if (
        !normalized.length ||
        normalized.some((q) => !q.question || q.options.length < 2 || !q.answer)
      ) {
        throw new Error(
          "Quiz response format is invalid. Please check your backend response."
        );
      }

      setQuestions(normalized);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  function submitQuiz() {
    setSubmitted(true);
  }

  const score = questions.filter((q, index) => {
    const selected = answers[index];
    return (
      selected === q.answer ||
      selected === q.options.find(
        (option) => option === q.answer
      )
    );
  }).length;

  const activeQuestion = questions[current];

  return (
    <div className="min-h-screen bg-[#F5EFE6] px-5 py-12 text-[#38271D] md:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#765139] text-3xl text-[#F5EFE6]">
            ❖
          </div>
          <h1 className="mb-3 text-4xl font-bold">
            AI Quiz Generator
          </h1>
          <p className="text-[#806D5C]">
            Upload your study material and generate an interactive quiz.
          </p>
        </div>

        {questions.length === 0 && (
          <div className="rounded-2xl border border-[#D8C5B0] bg-[#EFE6DA] p-7">
            <h2 className="mb-2 text-xl font-bold">
              Upload Your Document
            </h2>
            <p className="mb-6 text-sm text-[#806D5C]">
              Select a PDF or DOCX file to create your quiz.
            </p>

            <label className="flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-[#C5AD96] bg-[#EDE1D2] px-5 py-10 text-center hover:border-[#765139]">
              <span className="mb-3 text-4xl">📄</span>
              <span className="font-semibold">
                {file ? file.name : "Click to select your document"}
              </span>
              <span className="mt-2 text-xs text-[#806D5C]">
                PDF or DOCX
              </span>
              <input
                type="file"
                accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="hidden"
                onChange={(e) => {
                  const selected = e.target.files?.[0] || null;
                  setFile(selected);
                  setError("");
                }}
              />
            </label>

            {error && (
              <p className="mt-4 rounded-lg bg-[#EDE1D2] p-3 text-sm text-[#765139]">
                {error}
              </p>
            )}

            <button
              onClick={generateQuiz}
              disabled={loading || !file}
              className="mt-6 w-full rounded-xl bg-[#765139] px-5 py-4 font-semibold text-[#F5EFE6] hover:bg-[#5D3E2B] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Generating Quiz..." : "Generate AI Quiz"}
            </button>
          </div>
        )}

        {questions.length > 0 && activeQuestion && (
          <div className="rounded-2xl border border-[#D8C5B0] bg-[#EFE6DA] p-6 md:p-8">
            {!submitted ? (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#806D5C]">
                    Question {current + 1} of {questions.length}
                  </span>
                  <span className="rounded-full bg-[#EDE1D2] px-3 py-1 text-xs font-semibold text-[#765139]">
                    MCQ
                  </span>
                </div>

                <div className="mb-3 h-2 overflow-hidden rounded-full bg-[#D8C5B0]">
                  <div
                    className="h-full rounded-full bg-[#765139]"
                    style={{
                      width: `${((current + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>

                <h2 className="my-7 text-xl font-bold leading-relaxed">
                  {activeQuestion.question}
                </h2>

                <div className="space-y-3">
                  {activeQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [current]: option,
                        }))
                      }
                      className={`w-full rounded-xl border p-4 text-left transition ${
                        answers[current] === option
                          ? "border-[#765139] bg-[#DCC8B3] font-semibold"
                          : "border-[#D8C5B0] bg-[#EDE1D2] hover:border-[#765139]"
                      }`}
                    >
                      <span className="mr-3 font-bold text-[#765139]">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      {option}
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex justify-between gap-3">
                  <button
                    onClick={() => setCurrent((v) => Math.max(0, v - 1))}
                    disabled={current === 0}
                    className="rounded-xl border border-[#D8C5B0] px-5 py-3 font-semibold text-[#765139] disabled:opacity-40"
                  >
                    Previous
                  </button>

                  {current < questions.length - 1 ? (
                    <button
                      onClick={() =>
                        setCurrent((v) => Math.min(questions.length - 1, v + 1))
                      }
                      className="rounded-xl bg-[#765139] px-6 py-3 font-semibold text-[#F5EFE6]"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={submitQuiz}
                      disabled={Object.keys(answers).length !== questions.length}
                      className="rounded-xl bg-[#765139] px-6 py-3 font-semibold text-[#F5EFE6] disabled:opacity-50"
                    >
                      Submit Quiz
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="mb-4 text-5xl">🏆</div>
                <h2 className="mb-2 text-3xl font-bold">Quiz Completed!</h2>
                <p className="mb-6 text-[#806D5C]">
                  Your final score
                </p>
                <p className="mb-7 text-5xl font-bold text-[#765139]">
                  {score} / {questions.length}
                </p>

                <div className="space-y-4 text-left">
                  {questions.map((q, index) => {
                    const correct =
                      answers[index] === q.answer ||
                      q.options.find((option) => option === q.answer) ===
                        answers[index];

                    return (
                      <div
                        key={index}
                        className="rounded-xl border border-[#D8C5B0] bg-[#EDE1D2] p-4"
                      >
                        <p className="mb-2 font-semibold">
                          {index + 1}. {q.question}
                        </p>
                        <p className="text-sm text-[#806D5C]">
                          Your answer: {answers[index] || "Not answered"}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-[#765139]">
                          Correct answer: {q.answer}
                        </p>
                        {q.explanation && (
                          <p className="mt-2 text-sm text-[#806D5C]">
                            {q.explanation}
                          </p>
                        )}
                        <p className="mt-2 text-sm font-semibold">
                          {correct ? "Correct" : "Incorrect"}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => {
                    setQuestions([]);
                    setAnswers({});
                    setCurrent(0);
                    setSubmitted(false);
                    setError("");
                  }}
                  className="mt-7 rounded-xl bg-[#765139] px-6 py-3 font-semibold text-[#F5EFE6]"
                >
                  Create Another Quiz
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
