
import Link from "next/link";
import UploadBox from "../../components/UploadBox";

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6] px-5 py-12">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/"
          className="text-sm font-medium text-[#765139] hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="mb-10 mt-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#A77B55]">
            Document Workspace
          </span>

          <h1 className="mt-3 text-4xl font-bold text-[#38271D]">
            Upload Your Document
          </h1>

          <p className="mt-3 text-[#806D5C]">
            Upload your PDF or DOCX document and start exploring
            powerful AI features.
          </p>
        </div>

        <div className="rounded-2xl border border-[#D8C5B0] bg-[#EFE6DA] p-6 shadow-sm md:p-10">
          <UploadBox />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-xl border border-[#D8C5B0] bg-[#EFE6DA] p-5">
            <div className="text-2xl">📄</div>
            <h3 className="mt-3 font-semibold text-[#38271D]">
              PDF Support
            </h3>
            <p className="mt-2 text-sm text-[#806D5C]">
              Upload your PDF documents.
            </p>
          </div>

          <div className="rounded-xl border border-[#D8C5B0] bg-[#EFE6DA] p-5">
            <div className="text-2xl">📝</div>
            <h3 className="mt-3 font-semibold text-[#38271D]">
              DOCX Support
            </h3>
            <p className="mt-2 text-sm text-[#806D5C]">
              Work with Word documents.
            </p>
          </div>

          <div className="rounded-xl border border-[#D8C5B0] bg-[#EFE6DA] p-5">
            <div className="text-2xl">🔒</div>
            <h3 className="mt-3 font-semibold text-[#38271D]">
              Document Workspace
            </h3>
            <p className="mt-2 text-sm text-[#806D5C]">
              Prepare documents for AI analysis.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/tools"
            className="font-semibold text-[#765139] hover:underline"
          >
            Explore all AI Tools →
          </Link>
        </div>

      </div>
    </main>
  );
}
