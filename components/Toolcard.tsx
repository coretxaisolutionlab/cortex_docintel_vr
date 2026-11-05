
import Link from "next/link";

type ToolcardProps = {
  title: string;
  description: string;
  category: string;
  icon: string;
  href?: string;
  comingSoon?: boolean;
};

export default function Toolcard({
  title,
  description,
  category,
  icon,
  href,
  comingSoon = false,
}: ToolcardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#E6DCCE] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#C5AD96] hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5EFE6] text-2xl text-[#765139]">
          {icon}
        </div>

        {comingSoon && (
          <span className="rounded-full bg-[#F5EFE6] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#A77B55]">
            Coming Soon
          </span>
        )}
      </div>

      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#A77B55]">
        {category}
      </p>

      <h3 className="mt-2 text-lg font-bold text-[#38271D]">
        {title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-6 text-[#806D5C]">
        {description}
      </p>

      <div className="mt-6 border-t border-[#E6DCCE] pt-4">
        {comingSoon || !href ? (
          <span className="text-sm font-semibold text-[#A77B55]">
            Coming Soon
          </span>
        ) : (
          <Link
            href={href}
            className="inline-flex text-sm font-semibold text-[#765139] hover:text-[#5D3E2B] hover:underline"
          >
            Open Tool →
          </Link>
        )}
      </div>
    </div>
  );
}
