
"use client";

import { useRef, useState } from "react";

export default function UploadBox() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (selectedFile?: File) => {
    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Please upload only PDF or DOCX files.");
      return;
    }

    setFile(selectedFile);
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        handleFile(e.dataTransfer.files[0]);
      }}
      className={`rounded-2xl border-2 border-dashed p-8 text-center transition ${
        dragging
          ? "border-purple-600 bg-purple-50"
          : "border-gray-300 bg-white"
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.docx"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-3xl text-purple-600">
        ↑
      </div>

      <h3 className="mt-5 text-lg font-bold text-gray-900">
        Upload your document
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Drag and drop your PDF or DOCX file here
      </p>

      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="mt-5 rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
      >
        Choose a File
      </button>

      {file && (
        <div className="mt-5 rounded-xl border border-purple-200 bg-purple-50 p-4">
          <p className="font-semibold text-gray-800">
            {file.name}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>

          <button
            type="button"
            onClick={() => setFile(null)}
            className="mt-3 text-sm font-semibold text-red-600"
          >
            Remove File
          </button>
        </div>
      )}
    </div>
  );
}
