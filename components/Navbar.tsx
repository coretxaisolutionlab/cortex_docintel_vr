
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 lg:px-10">

        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
              <path d="M14 3v6h5" />
              <path d="M9 14h6" />
              <path d="M9 18h6" />
            </svg>
          </div>

          <span className="text-[22px] font-bold tracking-tight text-gray-900">
            DOCINTEL<span className="text-violet-600"> AI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-violet-600">
            Home
          </Link>

          <Link href="/tools" className="text-sm font-semibold text-violet-600 hover:text-violet-700">
            Tools
          </Link>

          <Link href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-violet-600">
            Dashboard
          </Link>

          <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-violet-600">
            Pricing
          </Link>

          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-violet-600">
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden text-sm font-semibold text-gray-700 hover:text-violet-600 sm:block"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-700"
          >
            Sign Up
          </Link>
        </div>

      </nav>
    </header>
  );
}
