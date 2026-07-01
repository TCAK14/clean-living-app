# 360° Clean Living & Health

Next.js (App Router) PWA für geprüftes Wissen zu Körper-Gesundheit und gesundem Haushalt.

## Setup

```bash
npm install
npm run dev
```

App läuft dann auf http://localhost:3000

## Produktions-Build

```bash
npm run build
npm run start
```

## Icons ergänzen (PWA)

`public/manifest.json` verweist auf `public/icons/icon-192.png` und `icon-512.png`.
Diese beiden Icon-Dateien fehlen im gelieferten Quellcode (Sandbox konnte keine
Binärdateien exportieren) – bitte zwei quadratische PNGs (192x192 und 512x512) in
`public/icons/` ablegen, sonst greift die PWA-Installation auf ein Standard-Icon zurück.

## Struktur

- `app/` – Next.js App Router Seiten (drei Tabs: koerper, ernaehrung, haushalt, plus suche)
- `components/` – BottomNav, KnowledgeCard, EvidenceStars, SearchBar, CategoryTile
- `data/` – Content als JSON (supplements.json, household.json, nutrition.json)
- `lib/types.ts` – Zod-Schema für Content-Validierung + Kategorie-Konfiguration
- `lib/content.ts` – Lädt und validiert alle JSON-Quellen, aggregiert sie
- `lib/search.ts` – Fuse.js Fuzzy-Suche über alle Themen

## Neuen Content hinzufügen

Einfach ein neues Objekt in die passende JSON-Datei unter `data/` einfügen. Pflichtfelder
sind in `lib/types.ts` (TopicSchema) definiert und werden beim Start automatisch validiert –
fehlerhafte Einträge lassen den Build fehlschlagen, statt live im Browser zu crashen.

## Build-Status

Das Projekt wurde vollständig gebaut und getestet (`npm run build`): alle 26 Routen
(3 Tabs, alle Kategorien, alle Detailseiten, Suche) kompilieren und rendern fehlerfrei.

## Rechtlicher Hinweis (wichtig vor Launch)

Die Inhalte enthalten gesundheits- und ernährungsbezogene Aussagen. Vor einem echten Launch:

- Rechtliche Prüfung bzgl. EU Health-Claims-Verordnung (EG) 1924/2006
- Durchgängiger medizinischer Disclaimer (in `KnowledgeCard.tsx` als Footer bereits angelegt)
- Formulierungen bewusst als "in Studien verwendete Menge" statt als direkte Handlungsanweisung gehalten
