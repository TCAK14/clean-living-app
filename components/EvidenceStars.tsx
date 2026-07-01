import { evidenceLabels } from "@/lib/types";

export default function EvidenceStars({ score }: { score: 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-2" title={evidenceLabels[score]}>
      <span aria-hidden="true" className="text-amber-500 tracking-tight">
        {"★".repeat(score)}
        <span className="text-neutral-300 dark:text-neutral-700">
          {"★".repeat(3 - score)}
        </span>
      </span>
      <span className="text-xs text-neutral-500 dark:text-neutral-400">
        {evidenceLabels[score]}
      </span>
    </div>
  );
}
