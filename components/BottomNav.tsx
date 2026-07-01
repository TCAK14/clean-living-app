"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categoryMeta } from "@/lib/types";

const tabs = [
  { ...categoryMeta.koerper, icon: "🫀" },
  { ...categoryMeta.ernaehrung, icon: "🍽️" },
  { ...categoryMeta.haushalt, icon: "🧴" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-neutral-900/95"
      aria-label="Hauptnavigation"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-around">
        {tabs.map((tab) => {
          const href = `/${tab.slug}`;
          const active = pathname?.startsWith(href);
          return (
            <li key={tab.slug} className="flex-1">
              <Link
                href={href}
                className={`flex flex-col items-center gap-1 py-2 text-xs font-medium transition-colors ${
                  active
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-neutral-500 dark:text-neutral-400"
                }`}
              >
                <span className="text-xl" aria-hidden="true">
                  {tab.icon}
                </span>
                <span className="text-center leading-tight">{tab.label}</span>
              </Link>
            </li>
          );
        })}
        <li className="flex-1">
          <Link
            href="/suche"
            className={`flex flex-col items-center gap-1 py-2 text-xs font-medium transition-colors ${
              pathname?.startsWith("/suche")
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-neutral-500 dark:text-neutral-400"
            }`}
          >
            <span className="text-xl" aria-hidden="true">
              🔍
            </span>
            <span>Suche</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
