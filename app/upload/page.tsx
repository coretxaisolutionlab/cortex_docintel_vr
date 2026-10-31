
import Link from "next/link";
import UploadBox from "../../components/UploadBox";

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] px-5 py-12">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/"
          className="text-sm font-medium text-purple-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="mb-10 mt-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            Document Workspace
          </span>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Upload Your Document
          </h1>

          <p className="mt-3 text-gray-500">
            Upload your PDF or DOCX document and start exploring
            powerful AI features.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          <UploadBox />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="text-2xl">📄</div>
            <h3 className="mt-3 font-semibold text-gray-900">
              PDF Support
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Upload your PDF documents.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="text-2xl">📝</div>
            <h3 className="mt-3 font-semibold text-gray-900">
              DOCX Support
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Work with Word documents.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="text-2xl">🔒</div>
            <h3 className="mt-3 font-semibold text-gray-900">
              Document Workspace
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Prepare documents for AI analysis.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/tools"
            className="font-semibold text-purple-600 hover:underline"
          >
            Explore all AI Tools →
          </Link>
        </div>

      </div>
    </main>
  );
}
