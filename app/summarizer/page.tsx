
"use client";

import { useState } from "react";

export default function Summarizer() {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSummarize = async () => {
    if (!file) {
      setError("Please upload a PDF or DOCX file.");
      return;
    }

    setLoading(true);
    setError("");
    setSummary("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        "http://localhost:8000/summarize",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Unable to summarize document.");
      }

      const data = await response.json();
      setSummary(data.summary || data.result || "No summary returned.");

    } catch (err) {
      setError(
        "Server connection failed. Please check your backend."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-900">
          PDF Summarizer
        </h1>

        <p className="text-gray-500 mt-2">
          Convert lengthy documents into short and meaningful summaries.
        </p>

        <div className="bg-white border rounded-2xl p-8 mt-8 shadow-sm">

          <div className="border-2 border-dashed border-purple-300 rounded-xl p-10 text-center">

            <div className="text-5xl mb-4">📄</div>

            <h2 className="text-xl font-semibold">
              Upload Your Document
            </h2>

            <p className="text-gray-500 mt-2">
              Select a PDF or DOCX file to summarize.
            </p>

            <input
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => {
                setFile(e.target.files?.[0] || null);
                setError("");
                setSummary("");
              }}
              className="mt-6 block mx-auto text-sm"
            />

            {file && (
              <p className="text-purple-600 mt-4">
                Selected: {file.name}
              </p>
            )}

          </div>

          <button
            onClick={handleSummarize}
            disabled={loading}
            className="w-full mt-6 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg"
          >
            {loading ? "Generating Summary..." : "Generate Summary →"}
          </button>

          {error && (
            <p className="text-red-500 mt-4">{error}</p>
          )}

          {summary && (
            <div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-6">

              <h2 className="text-xl font-bold text-purple-700 mb-4">
                Document Summary
              </h2>

              <p className="text-gray-700 whitespace-pre-wrap">
                {summary}
              </p>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
