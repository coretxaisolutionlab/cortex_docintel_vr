
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Overview", href: "/dashboard", icon: "⌂" },
  { name: "All AI Tools", href: "/tools", icon: "✦" },
  { name: "Upload Document", href: "/upload", icon: "↑" },
  { name: "Chat with PDF", href: "/chat", icon: "☏" },
  { name: "Summarizer", href: "/summarizer", icon: "▤" },
  { name: "Data Extraction", href: "/extraction", icon: "▦" },
  { name: "Compare Documents", href: "/compare", icon: "⇄" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-full w-full flex-col border-r border-gray-200 bg-white p-5">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900">
          DOCINTEL <span className="text-purple-600">AI</span>
        </h2>
        <p className="mt-1 text-xs text-gray-500">
          Intelligent Workspace
        </p>
      </div>

      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Workspace
      </p>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                active
                  ? "bg-purple-50 text-purple-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-purple-600"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-xl bg-purple-50 p-4">
        <p className="text-sm font-semibold text-purple-800">
          Need assistance?
        </p>
        <p className="mt-1 text-xs text-gray-600">
          Your documents, simplified with AI.
        </p>
      </div>
    </aside>
  );
}
