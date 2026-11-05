
"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Tools", href: "/tools" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5d8c7] bg-[#f8f3e9]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#60432f] text-xl text-[#fff8ed]">
            D
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight text-[#38291f]">
              DOCINTEL
            </h1>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#98704f]">
              DOCUMENT INTELLIGENCE
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[#705844] transition hover:text-[#a07855]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-xl px-5 py-3 text-sm font-semibold text-[#60432f] transition hover:bg-[#eee2ce]"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-[#60432f] px-6 py-3 text-sm font-semibold text-[#fff8ed] transition hover:bg-[#432e20]"
          >
            Get Started →
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="rounded-lg border border-[#d8c5ae] bg-[#eee2ce] px-4 py-2 text-xl text-[#60432f] md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-[#e5d8c7] bg-[#f8f3e9] px-6 py-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 font-semibold text-[#60432f] transition hover:bg-[#eee2ce]"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-[#b89b7c] py-3 text-center font-semibold text-[#60432f]"
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-[#60432f] py-3 text-center font-semibold text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
