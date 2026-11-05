
"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import Link from "next/link";

export default function PDFSplitterPage() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [pageRanges, setPageRanges] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0];

    setError("");
    setSuccess("");
    setFile(null);
    setPageCount(0);
    setPageRanges("");

    if (!selected) return;

    if (selected.type !== "application/pdf") {
      setError("Please select a valid PDF file.");
      return;
    }

    try {
      const bytes = await selected.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);

      setFile(selected);
      setPageCount(pdf.getPageCount());
      setPageRanges(`1-${pdf.getPageCount()}`);
    } catch {
      setError("Unable to read this PDF. Please try another file.");
    }
  }

  function parseRanges(value: string, total: number): number[][] {
    const groups = value.split(",").map((part) => part.trim());

    if (!value.trim() || groups.length === 0) {
      throw new Error("Enter page numbers or ranges.");
    }

    return groups.map((group) => {
      const match = group.match(/^(\d+)(?:\s*-\s*(\d+))?$/);

      if (!match) {
        throw new Error(`Invalid page range: ${group}`);
      }

      const start = Number(match[1]);
      const end = Number(match[2] || match[1]);

      if (
        start < 1 ||
        end < start ||
        end > total
      ) {
        throw new Error(
          `Page range ${group} is outside the PDF page count.`,
        );
      }

      return Array.from(
        { length: end - start + 1 },
        (_, index) => start - 1 + index,
      );
    });
  }

  async function splitPDF() {
    if (!file) {
      setError("Please upload a PDF first.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const groups = parseRanges(pageRanges, pageCount);
      const originalBytes = await file.arrayBuffer();
      const originalPDF = await PDFDocument.load(originalBytes);

      for (let i = 0; i < groups.length; i++) {
        const newPDF = await PDFDocument.create();
        const copiedPages = await newPDF.copyPages(
          originalPDF,
          groups[i],
        );

        copiedPages.forEach((page) => newPDF.addPage(page));

        const outputBytes = await newPDF.save();
        const blob = new Blob([outputBytes as BlobPart], {
          type: "application/pdf",
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download =
          groups.length === 1
            ? `${file.name.replace(/\.pdf$/i, "")}-split.pdf`
            : `${file.name.replace(/\.pdf$/i, "")}-part-${i + 1}.pdf`;

        document.body.appendChild(link);
        link.click();
        link.remove();

        URL.revokeObjectURL(url);
      }

      setSuccess(
        groups.length === 1
          ? "Your split PDF has been downloaded."
          : `${groups.length} PDF files have been downloaded.`,
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while splitting the PDF.",
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
          className="text-sm font-bold text-[#765139] hover:underline"
        >
          ← Back to Tools
        </Link>

        <div className="mt-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#765139] text-3xl text-[#F5EFE6]">
            ⊞
          </div>

          <h1 className="mt-6 text-4xl font-extrabold">
            PDF Splitter
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#806D5C]">
            Split your PDF into smaller documents by selecting
            the page numbers or page ranges you need.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-[#D8C5B0] bg-[#EFE6DA] p-6 sm:p-10">

          <label
            htmlFor="pdf-upload"
            className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#B99B7D] bg-[#F5EFE6] px-6 py-12 text-center transition hover:bg-[#EDE1D2]"
          >
            <span className="text-4xl text-[#765139]">↑</span>

            <span className="mt-4 text-lg font-bold">
              Upload your PDF
            </span>

            <span className="mt-2 text-sm text-[#806D5C]">
              Click here to select a PDF file
            </span>

            <input
              id="pdf-upload"
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFile}
              className="hidden"
            />
          </label>

          {file && (
            <div className="mt-6 rounded-xl border border-[#D8C5B0] bg-[#EDE1D2] p-5">
              <p className="font-bold break-all">
                {file.name}
              </p>

              <div className="mt-2 flex flex-wrap justify-between gap-2 text-sm text-[#806D5C]">
                <span>{pageCount} pages</span>
                <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  setPageCount(0);
                  setPageRanges("");
                  setError("");
                  setSuccess("");
                }}
                className="mt-3 text-sm font-bold text-[#765139] hover:underline"
              >
                Remove PDF
              </button>
            </div>
          )}

          <div className="mt-8">
            <label
              htmlFor="page-ranges"
              className="block text-sm font-bold"
            >
              Select page ranges
            </label>

            <input
              id="page-ranges"
              type="text"
              value={pageRanges}
              onChange={(event) => setPageRanges(event.target.value)}
              disabled={!file}
              placeholder="Example: 1-3, 5, 7-9"
              className="mt-3 w-full rounded-xl border border-[#D8C5B0] bg-[#F5EFE6] px-5 py-4 text-[#38271D] outline-none placeholder:text-[#9A8572] focus:border-[#765139] disabled:opacity-50"
            />

            <p className="mt-2 text-xs leading-6 text-[#806D5C]">
              Separate different PDF files using commas. For example,
              1-3, 5, 7-9 creates three separate PDF files.
            </p>
          </div>

          {error && (
            <p className="mt-5 rounded-xl border border-[#B98A72] bg-[#EAD5C6] p-4 text-sm font-semibold text-[#6B3829]">
              {error}
            </p>
          )}

          {success && (
            <p className="mt-5 rounded-xl border border-[#B99B7D] bg-[#E1D1BF] p-4 text-sm font-semibold text-[#5D3E2B]">
              {success}
            </p>
          )}

          <button
            type="button"
            onClick={splitPDF}
            disabled={!file || loading}
            className="mt-8 w-full rounded-xl bg-[#765139] px-6 py-4 font-bold text-[#F5EFE6] transition hover:bg-[#5D3E2B] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Splitting PDF..." : "Split PDF & Download"}
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-[#806D5C]">
          Your PDF is processed directly in your browser.
        </p>
      </div>
    </main>
  );
}
