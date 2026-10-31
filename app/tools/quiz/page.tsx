
"use client";

import { useState } from "react";
import Sidebar from "../../../components/Sidebar";

const questions = [
  { question: "What does AI stand for?", options: ["Automated Internet", "Artificial Intelligence", "Advanced Information", "Applied Integration"], answer: 1 },
  { question: "Which language is commonly used in AI?", options: ["Python", "HTML", "CSS", "XML"], answer: 0 },
  { question: "What is machine learning?", options: ["A database", "A programming editor", "A way for systems to learn from data", "An operating system"], answer: 2 },
];

export default function QuizPage() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const submitAnswer = () => {
    if (selected.length !== questions.length) return alert("Please answer all questions.");
    setFinished(true);
  };

  const score = selected.filter((answer, index) => answer === questions[index].answer).length;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden w-64 shrink-0 md:block"><Sidebar /></div>
      <main className="min-w-0 flex-1 p-5 md:p-10">
        <p className="text-sm font-semibold text-purple-600">AI TOOLS / STUDY</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">AI Quiz Generator</h1>
        <p className="mt-2 text-gray-500">Test your knowledge with interactive quizzes.</p>

        {!started ? (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <div className="text-5xl">🧠</div>
            <h2 className="mt-5 text-xl font-bold text-gray-900">Ready to test your knowledge?</h2>
            <p className="mt-2 text-sm text-gray-500">Take a quick demo quiz with 3 multiple-choice questions.</p>
            <button onClick={() => setStarted(true)} className="mt-6 rounded-xl bg-purple-600 px-7 py-3 font-semibold text-white hover:bg-purple-700">Start Quiz</button>
          </div>
        ) : finished ? (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <div className="text-5xl">🏆</div>
            <h2 className="mt-5 text-2xl font-bold text-gray-900">Quiz Completed!</h2>
            <p className="mt-3 text-lg text-purple-700">Your score: {score} / {questions.length}</p>
            <button onClick={() => { setStarted(false); setFinished(false); setCurrent(0); setSelected([]); }} className="mt-6 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white">Try Again</button>
          </div>
        ) : (
          <div className="mt-8 max-w-3xl rounded-2xl border border-gray-200 bg-white p-7">
            <div className="mb-6 flex justify-between text-sm text-gray-500"><span>Question {current + 1} of {questions.length}</span><span>{Math.round(((current + 1) / questions.length) * 100)}% completed</span></div>
            <div className="mb-7 h-2 rounded-full bg-gray-100"><div className="h-2 rounded-full bg-purple-600" style={{ width: `${((current + 1) / questions.length) * 100}%` }} /></div>
            <h2 className="text-xl font-bold text-gray-900">{questions[current].question}</h2>
            <div className="mt-6 grid gap-3">
              {questions[current].options.map((option, index) => (
                <button key={option} onClick={() => setSelected((prev) => { const next = [...prev]; next[current] = index; return next; })} className={`rounded-xl border p-4 text-left text-sm transition ${selected[current] === index ? "border-purple-500 bg-purple-50 text-purple-800" : "border-gray-200 hover:border-purple-300"}`}>{option}</button>
              ))}
            </div>
            <div className="mt-7 flex justify-between">
              <button disabled={current === 0} onClick={() => setCurrent(current - 1)} className="rounded-xl border px-5 py-3 text-sm disabled:opacity-40">Previous</button>
              {current < questions.length - 1 ? <button disabled={selected[current] === undefined} onClick={() => setCurrent(current + 1)} className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white disabled:opacity-40">Next Question</button> : <button onClick={submitAnswer} className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white">Submit Quiz</button>}
            </div>
          </div>
        )}
        <p className="mt-5 text-xs text-gray-400">This is a sample quiz. AI quiz generation requires backend integration.</p>
      </main>
    </div>
  );
}
