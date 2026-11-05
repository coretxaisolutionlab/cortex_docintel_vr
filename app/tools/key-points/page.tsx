
"use client";

import { useState } from "react";
import Link from "next/link";

export default function KeyPointsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [points, setPoints] = useState<string[]>([]);
  const [error, setError] = useState("");

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0];

    setError("");
    setPoints([]);

    if (!selected) return;

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (
      !allowedTypes.includes(selected.type) &&
      !selected.name.toLowerCase().endsWith(".pdf") &&
      !selected.name.toLowerCase().endsWith(".docx")
    ) {
      setError("Please upload a PDF or DOCX document.");
      return;
    }

    setFile(selected);
  }

  async function generatePoints() {
    if (!file) {
      setError("Please upload a document first.");
      return;
    }

    setLoading(true);
    setError("");
    setPoints([]);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

      const response = await fetch(`${apiUrl}/key-points`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(
          "Key Points API is not available. Please check your backend endpoint.",
        );
      }

      const data = await response.json();

      const result =
        data.points ||
        data.key_points ||
        data.keyPoints ||
        data.result;

      if (Array.isArray(result)) {
        setPoints(result.map((item) => String(item)));
      } else if (typeof result === "string") {
        setPoints(
          result
            .split(/\n/)
            .map((item: string) => item.replace(/^[\s•\-*\d.)]+/, "").trim())
            .filter(Boolean),
        );
      } else {
        throw new Error("The API returned an unexpected response.");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
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

        <div className="mt-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#765139] text-3xl text-[#F5EFE6]">
            ☑
          </div>

          <h1 className="mt-6 text-4xl font-extrabold">
            Key Points Generator
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#806D5C]">
            Upload your document and extract its most important
            information in an easy-to-read format.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-[#D8C5B0] bg-[#EFE6DA] p-6 sm:p-10">

          <label
            htmlFor="key-points-file"
            className="flex cursor-pointer flex-col items-center rounded-2xl border-2 border-dashed border-[#B99B7D] bg-[#F5EFE6] px-6 py-12 text-center hover:bg-[#EDE1D2]"
          >
            <span className="text-4xl text-[#765139]">↑</span>

            <span className="mt-4 text-lg font-bold">
              Upload PDF or DOCX
            </span>

            <span className="mt-2 text-sm text-[#806D5C]">
              Click to select your document
            </span>

            <input
              id="key-points-file"
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
                  setPoints([]);
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
            onClick={generatePoints}
            disabled={!file || loading}
            className="mt-7 w-full rounded-xl bg-[#765139] px-6 py-4 font-bold text-[#F5EFE6] hover:bg-[#5D3E2B] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Generating Key Points..." : "Generate Key Points →"}
          </button>
        </div>

        {points.length > 0 && (
          <section className="mt-10 rounded-3xl border border-[#D8C5B0] bg-[#EFE6DA] p-6 sm:p-10">
            <h2 className="text-2xl font-extrabold">
              Extracted Key Points
            </h2>

            <div className="mt-7 space-y-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-xl border border-[#D8C5B0] bg-[#F5EFE6] p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#765139] text-sm font-bold text-[#F5EFE6]">
                    {index + 1}
                  </span>

                  <p className="pt-1 leading-7 text-[#5D4634]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(points.map((p, i) => `${i + 1}. ${p}`).join("\n"))}
              className="mt-7 rounded-xl border border-[#765139] px-6 py-3 font-bold text-[#765139] hover:bg-[#E1D1BF]"
            >
              Copy Key Points
            </button>
          </section>
        )}

      </div>
    </main>
  );
}
