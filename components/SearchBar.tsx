"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Topic } from "@/lib/types";
import { searchTopics } from "@/lib/search";
import EvidenceStars from "./EvidenceStars";

export default function SearchBar({ topics }: { topics: Topic[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchTopics(topics, query), [topics, query]);

  return (
    <div className="flex flex-col gap-4">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="z. B. Schimmel, Kreatin, Weichspüler..."
        className="rounded-xl border border-black/10 bg-white px-4 py-3 text-base outline-none ring-emerald-500 focus:ring-2 dark:border-white/10 dark:bg-neutral-900"
        autoFocus
      />

      {query.trim() && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {results.length} {results.length === 1 ? "Treffer" : "Treffer"}
        </p>
      )}

      <ul className="flex flex-col gap-3">
        {results.map((topic) => (
          <li key={topic.id}>
            <Link
              href={`/${topic.tab}/${topic.category}/${topic.id}`}
              className="flex flex-col gap-1 rounded-xl border border-black/5 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-neutral-900"
            >
              <span className="font-semibold">{topic.title}</span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {topic.categoryLabel}
              </span>
              <EvidenceStars score={topic.evidenceScore} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
