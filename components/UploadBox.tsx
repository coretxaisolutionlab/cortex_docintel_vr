"use client";

import { useState } from "react";

export default function UploadBox() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div className="rounded-2xl border border-[#D8C5B0] bg-[#EFE6DA] p-10 text-center">
      <h2 className="mb-4 text-xl font-bold text-[#38271D]">
        Upload Your Document
      </h2>

      <input
        id="document-upload"
        type="file"
        accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setSelectedFile(file);
          }
        }}
        className="sr-only"
      />

      <label
        htmlFor="document-upload"
        className="inline-block cursor-pointer rounded-xl bg-[#765139] px-8 py-4 font-semibold text-[#F5EFE6] hover:bg-[#60412F]"
      >
        Choose a File
      </label>

      {selectedFile && (
        <p className="mt-4 text-sm font-medium text-[#38271D]">
          Selected: {selectedFile.name}
        </p>
      )}
    </div>
  );
}