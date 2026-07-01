import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic, getAllTopics } from "@/lib/content";
import KnowledgeCard from "@/components/KnowledgeCard";

export function generateStaticParams() {
  return getAllTopics()
    .filter((t) => t.tab === "ernaehrung")
    .map((t) => ({ category: t.category, slug: t.id }));
}

export default async function ErnaehrungTopicPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const topic = getTopic("ernaehrung", category, slug);
  if (!topic) notFound();

  return (
    <div className="flex flex-col gap-4">
      <Link
        href={`/ernaehrung/${category}`}
        className="text-sm text-emerald-600 dark:text-emerald-400"
      >
        ← {topic.categoryLabel}
      </Link>
      <KnowledgeCard topic={topic} />
    </div>
  );
}
