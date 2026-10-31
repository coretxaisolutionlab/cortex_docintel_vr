
"use client";

import { useState } from "react";
import Sidebar from "../../../components/Sidebar";

export default function KeyPointsPage() {
  const [text, setText] = useState("");
  const [generated, setGenerated] = useState(false);

  const generatePoints = () => {
    if (!text.trim()) {
      alert("Please enter some document text first.");
      return;
    }
    setGenerated(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden w-64 shrink-0 md:block">
        <Sidebar />
      </div>

      <main className="min-w-0 flex-1 p-5 md:p-10">
        <div className="mb-8">
          <p className="text-sm font-semibold text-purple-600">
            AI TOOLS / STUDY
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Key Points Generator
          </h1>
          <p className="mt-2 text-gray-500">
            Extract important ideas and key information from your documents.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">
              Enter Document Content
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Paste your notes or document text below.
            </p>

            <textarea
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setGenerated(false);
              }}
              placeholder="Paste your document content here..."
              className="mt-5 min-h-[300px] w-full resize-y rounded-xl border border-gray-200 p-4 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            />

            <button
              onClick={generatePoints}
              className="mt-5 w-full rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
              ✨ Generate Key Points
            </button>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">
                Generated Key Points
              </h2>
              <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                Preview
              </span>
            </div>

            {!generated ? (
              <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-3xl">
                  🎯
                </div>
                <h3 className="mt-5 font-semibold text-gray-800">
                  Your key points will appear here
                </h3>
                <p className="mt-2 max-w-xs text-sm text-gray-500">
                  Enter document content and click Generate Key Points.
                </p>
              </div>
            ) : (
              <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
                <h3 className="font-semibold text-amber-900">
                  Backend connection required
                </h3>
                <p className="mt-2 text-sm leading-6 text-amber-800">
                  Your content has been entered successfully. Actual AI key
                  point extraction will be available after backend integration.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
