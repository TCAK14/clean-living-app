import { categoryMeta } from "@/lib/types";
import { getCategoryCounts } from "@/lib/content";
import CategoryTile from "@/components/CategoryTile";

const icons: Record<string, string> = {
  badezimmer: "🚿",
  waschen: "🧺",
  kueche: "🍳",
  vorratsschrank: "🥫",
};

export default function HaushaltPage() {
  const meta = categoryMeta.haushalt;
  const counts = getCategoryCounts("haushalt");

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{meta.label}</h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Schadstoffvermeidung & korrekte Handhabung im Haushalt.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {meta.categories.map((c) => (
          <CategoryTile
            key={c.slug}
            href={`/haushalt/${c.slug}`}
            label={c.label}
            count={counts[c.slug] ?? 0}
            icon={icons[c.slug] ?? "📌"}
          />
        ))}
      </div>
    </div>
  );
}
