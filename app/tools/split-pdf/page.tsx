
"use client";

import { useState } from "react";
import Sidebar from "../../../components/Sidebar";

export default function SplitPDFPage() {
  const [file, setFile] = useState<File | null>(null);
  const [range, setRange] = useState("");

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden w-64 shrink-0 md:block"><Sidebar /></div>
      <main className="min-w-0 flex-1 p-5 md:p-10">
        <p className="text-sm font-semibold text-purple-600">AI TOOLS / PDF TOOLS</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">PDF Splitter</h1>
        <p className="mt-2 text-gray-500">Separate selected pages from your PDF document.</p>

        <div className="mt-8 max-w-2xl rounded-2xl border border-gray-200 bg-white p-7">
          <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-10 text-center">
            <div className="text-5xl">📄</div>
            <h2 className="mt-4 font-bold text-gray-900">Upload your PDF</h2>
            <p className="mt-2 text-sm text-gray-500">Select a PDF file from your device.</p>
            <label className="mt-5 inline-block cursor-pointer rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-700">
              Choose PDF
              <input type="file" accept=".pdf,application/pdf" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            </label>
          </div>

          {file && (
            <div className="mt-6 rounded-xl bg-purple-50 p-4">
              <p className="font-semibold text-gray-800">{file.name}</p>
              <p className="mt-1 text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          )}

          <div className="mt-6">
            <label className="text-sm font-semibold text-gray-800">Page range</label>
            <input value={range} onChange={(e) => setRange(e.target.value)} placeholder="Example: 1-3, 5, 8-10" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-purple-500" />
            <p className="mt-2 text-xs text-gray-400">Enter the page numbers you want to extract.</p>
          </div>

          <button onClick={() => alert(file && range.trim() ? "PDF splitting will be available after PDF processing is connected." : "Please select a PDF and enter a page range.")} className="mt-6 w-full rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white hover:bg-purple-700">Split PDF</button>
        </div>
        <p className="mt-5 text-xs text-gray-400">Actual PDF splitting and download require processing logic/backend integration.</p>
      </main>
    </div>
  );
}

