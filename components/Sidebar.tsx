
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Overview", icon: "⌂", href: "/dashboard" },
  { name: "All AI Tools", icon: "✦", href: "/tools" },
  { name: "Upload Document", icon: "↑", href: "/upload" },
  { name: "Chat with PDF", icon: "▤", href: "/chat" },
  { name: "PDF Summarizer", icon: "≡", href: "/summarizer" },
  { name: "Data Extraction", icon: "▦", href: "/extraction" },
  { name: "Compare Documents", icon: "⇄", href: "/compare" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="min-h-full w-full border-r border-[#e5d8c7] bg-[#eee5d8] p-5 text-[#38291f]">
      <div className="mb-8">
        <p className="px-3 text-xs font-bold tracking-[0.18em] text-[#98704f]">
          WORKSPACE
        </p>
        <h2 className="mt-2 px-3 text-xl font-bold">
          Your Documents
        </h2>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                active
                  ? "bg-[#60432f] text-[#fff8ed] shadow-sm"
                  : "text-[#705844] hover:bg-[#dfcbb2] hover:text-[#38291f]"
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f8f3e9] text-lg text-[#60432f]">
                {item.icon}
              </span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-10 rounded-2xl bg-[#60432f] p-5 text-[#fff8ed]">
        <p className="text-sm font-bold">Need help?</p>
        <p className="mt-2 text-xs leading-5 text-[#e4d4c2]">
          Explore DOCINTEL tools to make document work easier.
        </p>
        <Link
          href="/about"
          className="mt-4 inline-block text-sm font-bold text-[#e9c9a6] hover:text-white"
        >
          About DOCINTEL →
        </Link>
      </div>
    </aside>
  );
}
