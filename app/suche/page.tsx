import { getAllTopics } from "@/lib/content";
import SearchBar from "@/components/SearchBar";

export default function SuchePage() {
  const topics = getAllTopics();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Suche</h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Durchsuche alle Bereiche gleichzeitig – z. B. &quot;Schimmel&quot; findet sowohl
        Zahnbürsten- als auch Lebensmittel-Themen.
      </p>
      <SearchBar topics={topics} />
    </div>
  );
}
