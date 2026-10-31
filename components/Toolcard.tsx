
import Link from "next/link";

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  category?: string;
}

export default function ToolCard({
  title,
  description,
  icon,
  href,
  category = "AI Tool",
}: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-2xl">
        {icon}
      </div>

      <span className="text-xs font-semibold uppercase tracking-wide text-purple-600">
        {category}
      </span>

      <h3 className="mt-2 text-lg font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 min-h-[60px] text-sm leading-6 text-gray-500">
        {description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-sm font-semibold text-purple-600">
          Open Tool
        </span>
        <span className="text-lg text-purple-600 transition group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
