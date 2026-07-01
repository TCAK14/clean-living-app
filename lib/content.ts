import { Topic, TopicListSchema, Tab } from "./types";
import supplementsRaw from "@/data/supplements.json";
import householdRaw from "@/data/household.json";
import nutritionRaw from "@/data/nutrition.json";

function loadAndValidate(raw: unknown, sourceName: string): Topic[] {
  const result = TopicListSchema.safeParse(raw);
  if (!result.success) {
    throw new Error(
      `Ungültige Content-Daten in ${sourceName}: ${result.error.message}`
    );
  }
  return result.data;
}

let cachedTopics: Topic[] | null = null;

export function getAllTopics(): Topic[] {
  if (cachedTopics) return cachedTopics;
  const all = [
    ...loadAndValidate(supplementsRaw, "supplements.json"),
    ...loadAndValidate(householdRaw, "household.json"),
    ...loadAndValidate(nutritionRaw, "nutrition.json"),
  ].filter((t) => t.status === "published");
  cachedTopics = all;
  return all;
}

export function getTopicsByTab(tab: Tab): Topic[] {
  return getAllTopics().filter((t) => t.tab === tab);
}

export function getTopicsByCategory(tab: Tab, category: string): Topic[] {
  return getAllTopics().filter((t) => t.tab === tab && t.category === category);
}

export function getTopic(tab: Tab, category: string, id: string): Topic | undefined {
  return getAllTopics().find(
    (t) => t.tab === tab && t.category === category && t.id === id
  );
}

export function getCategoryCounts(tab: Tab): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const topic of getTopicsByTab(tab)) {
    counts[topic.category] = (counts[topic.category] ?? 0) + 1;
  }
  return counts;
}
