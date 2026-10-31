
"use client";

import { useState } from "react";

export default function DocumentComparison() {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCompare = async () => {
    if (!file1 || !file2) {
      setError("Please upload both documents.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      const formData = new FormData();
      formData.append("file1", file1);
      formData.append("file2", file2);

      const response = await fetch(
        "http://localhost:8000/compare",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Comparison failed");
      }

      const data = await response.json();

      setResult(
        data.comparison ||
        data.result ||
        JSON.stringify(data, null, 2)
      );

    } catch (err) {
      setError("Server connection failed. Please check your backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-900">
          Document Comparison
        </h1>

        <p className="text-gray-500 mt-2">
          Compare two documents and identify their similarities and differences.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">📄</div>

            <h2 className="text-xl font-semibold">
              Document 1
            </h2>

            <input
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => {
                setFile1(e.target.files?.[0] || null);
                setResult("");
                setError("");
              }}
              className="mt-6 block w-full text-sm"
            />

            {file1 && (
              <p className="text-purple-600 mt-4 break-all">
                {file1.name}
              </p>
            )}
          </div>

          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">📑</div>

            <h2 className="text-xl font-semibold">
              Document 2
            </h2>

            <input
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => {
                setFile2(e.target.files?.[0] || null);
                setResult("");
                setError("");
              }}
              className="mt-6 block w-full text-sm"
            />

            {file2 && (
              <p className="text-purple-600 mt-4 break-all">
                {file2.name}
              </p>
            )}
          </div>

        </div>

        <button
          onClick={handleCompare}
          disabled={loading}
          className="w-full mt-8 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg"
        >
          {loading ? "Comparing Documents..." : "Compare Documents →"}
        </button>

        {error && (
          <p className="text-red-500 mt-4">{error}</p>
        )}

        {result && (
          <div className="bg-white border rounded-2xl p-8 mt-8 shadow-sm">
            <h2 className="text-xl font-bold text-purple-700 mb-4">
              Comparison Results
            </h2>

            <div className="text-gray-700 whitespace-pre-wrap break-words">
              {result}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
