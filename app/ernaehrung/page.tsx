import { categoryMeta } from "@/lib/types";
import { getCategoryCounts } from "@/lib/content";
import CategoryTile from "@/components/CategoryTile";

const icons: Record<string, string> = {
  vorratsschrank: "🥫",
  kuechenhacks: "🍳",
};

export default function ErnaehrungPage() {
  const meta = categoryMeta.ernaehrung;
  const counts = getCategoryCounts("ernaehrung");

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{meta.label}</h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Lebensmittellagerung & Küchenhacks – Fakten statt viraler Behauptungen.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {meta.categories.map((c) => (
          <CategoryTile
            key={c.slug}
            href={`/ernaehrung/${c.slug}`}
            label={c.label}
            count={counts[c.slug] ?? 0}
            icon={icons[c.slug] ?? "📌"}
          />
        ))}
      </div>
    </div>
  );
}
