import { z } from "zod";

export const TabSchema = z.enum(["koerper", "ernaehrung", "haushalt"]);
export type Tab = z.infer<typeof TabSchema>;

export const SourceSchema = z.object({
  label: z.string(),
  url: z.string().url().optional(),
});

export const TopicSchema = z.object({
  id: z.string(),
  tab: TabSchema,
  category: z.string(),
  categoryLabel: z.string(),
  title: z.string(),
  aliases: z.array(z.string()).default([]),
  viralClaim: z.string(),
  evidenceScore: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  facts: z.string(),
  action: z.string(),
  riskLevel: z.enum(["niedrig", "mittel", "hoch"]).optional(),
  endocrineDisruptor: z.boolean().optional(),
  sources: z.array(SourceSchema).default([]),
  lastReviewed: z.string(),
  status: z.enum(["draft", "published"]).default("published"),
});

export type Topic = z.infer<typeof TopicSchema>;

export const TopicListSchema = z.array(TopicSchema);

export const evidenceLabels: Record<1 | 2 | 3, string> = {
  1: "Vorläufige Evidenz / Einzelmeinung",
  2: "Einzelstudien / Beobachtungsstudien",
  3: "Mehrere Studien / Metaanalysen",
};

export const categoryMeta: Record<
  Tab,
  { slug: string; label: string; categories: { slug: string; label: string }[] }
> = {
  koerper: {
    slug: "koerper",
    label: "Körper & Vitalität",
    categories: [
      { slug: "herz", label: "Herz" },
      { slug: "gehirn", label: "Gehirn" },
      { slug: "muskeln", label: "Muskeln" },
    ],
  },
  ernaehrung: {
    slug: "ernaehrung",
    label: "Ernährung & Küche",
    categories: [
      { slug: "vorratsschrank", label: "Vorratsschrank" },
      { slug: "kuechenhacks", label: "Küchenhacks" },
    ],
  },
  haushalt: {
    slug: "haushalt",
    label: "Gesunder Haushalt",
    categories: [
      { slug: "badezimmer", label: "Badezimmer" },
      { slug: "waschen", label: "Waschen" },
      { slug: "kueche", label: "Küche" },
      { slug: "vorratsschrank", label: "Vorratsschrank" },
    ],
  },
};
