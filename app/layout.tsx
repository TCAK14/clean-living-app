import type { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "360° Clean Living & Health",
  description:
    "Viral geteiltes Wissen zu Gesundheit und Haushalt – geprüft, mit Evidenz-Score und konkreten Handlungsschritten.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#059669",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-neutral-50 pb-20 text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <main className="mx-auto max-w-md px-4 pt-6">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
