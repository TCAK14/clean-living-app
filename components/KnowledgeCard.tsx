import { Topic } from "@/lib/types";
import EvidenceStars from "./EvidenceStars";

const riskColors: Record<string, string> = {
  niedrig: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  mittel: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  hoch: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
};

export default function KnowledgeCard({ topic }: { topic: Topic }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-neutral-900">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-bold">{topic.title}</h1>
        <div className="flex flex-wrap items-center gap-2">
          <EvidenceStars score={topic.evidenceScore} />
          {topic.riskLevel && (
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-medium ${riskColors[topic.riskLevel]}`}
            >
              Risiko: {topic.riskLevel}
            </span>
          )}
          {topic.endocrineDisruptor && (
            <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
              Endokriner Disruptor
            </span>
          )}
        </div>
      </header>

      <section>
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Was sagt Social Media?
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300">{topic.viralClaim}</p>
      </section>

      <section>
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Der Faktencheck
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300">{topic.facts}</p>
      </section>

      <section className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/40">
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
          Was du tun kannst
        </h2>
        <p className="text-emerald-900 dark:text-emerald-200">{topic.action}</p>
      </section>

      {topic.sources.length > 0 && (
        <section>
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Quellen
          </h2>
          <ul className="list-inside list-disc text-sm text-neutral-600 dark:text-neutral-400">
            {topic.sources.map((s, i) => (
              <li key={i}>
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted hover:text-emerald-600"
                  >
                    {s.label}
                  </a>
                ) : (
                  s.label
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer className="border-t border-black/5 pt-3 text-xs text-neutral-400 dark:border-white/10 dark:text-neutral-500">
        Zuletzt geprüft: {topic.lastReviewed} · Diese Information ersetzt keine
        ärztliche, ernährungsmedizinische oder rechtliche Beratung.
      </footer>
    </article>
  );
}
