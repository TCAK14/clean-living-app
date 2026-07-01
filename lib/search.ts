import Fuse, { IFuseOptions } from "fuse.js";
import { Topic } from "./types";

const fuseOptions: IFuseOptions<Topic> = {
  keys: [
    { name: "title", weight: 2 },
    { name: "aliases", weight: 1.5 },
    { name: "categoryLabel", weight: 1 },
    { name: "viralClaim", weight: 0.5 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
  minMatchCharLength: 2,
};

export function createSearchIndex(topics: Topic[]) {
  return new Fuse(topics, fuseOptions);
}

export function searchTopics(topics: Topic[], query: string): Topic[] {
  if (!query.trim()) return [];
  const fuse = createSearchIndex(topics);
  return fuse.search(query).map((r) => r.item);
}
