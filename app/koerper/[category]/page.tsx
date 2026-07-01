import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryMeta } from "@/lib/types";
import { getTopicsByCategory } from "@/lib/content";
import EvidenceStars from "@/components/EvidenceStars";

export function generateStaticParams() {
  return categoryMeta.koerper.categories.map((c) => ({ category: c.slug }));
}

export default async function KoerperCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = categoryMeta.koerper.categories.find((c) => c.slug === category);
  if (!meta) notFound();

  const topics = getTopicsByCategory("koerper", category);

  return (
    <div className="flex flex-col gap-4">
      <Link href="/koerper" className="text-sm text-emerald-600 dark:text-emerald-400">
        ← Körper & Vitalität
      </Link>
      <h1 className="text-2xl font-bold">{meta.label}</h1>
      <ul className="flex flex-col gap-3">
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link
              href={`/koerper/${category}/${topic.id}`}
              className="flex flex-col gap-1 rounded-xl border border-black/5 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-neutral-900"
            >
              <span className="font-semibold">{topic.title}</span>
              <EvidenceStars score={topic.evidenceScore} />
            </Link>
          </li>
        ))}
        {topics.length === 0 && (
          <p className="text-sm text-neutral-500">Noch keine Themen in dieser Kategorie.</p>
        )}
      </ul>
    </div>
  );
}
