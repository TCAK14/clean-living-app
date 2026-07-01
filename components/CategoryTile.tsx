import Link from "next/link";

export default function CategoryTile({
  href,
  label,
  count,
  icon,
}: {
  href: string;
  label: string;
  count: number;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-2 rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-neutral-900"
    >
      <span className="text-2xl" aria-hidden="true">
        {icon}
      </span>
      <span className="font-semibold">{label}</span>
      <span className="text-xs text-neutral-500 dark:text-neutral-400">
        {count} {count === 1 ? "Thema" : "Themen"}
      </span>
    </Link>
  );
}
