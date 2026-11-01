import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
// Titres en Sora (géométrique, tech), texte courant en Inter
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "Charmes Soglohoun · Organisation, automatisation et outils numériques", template: "%s · Charmes Soglohoun" },
  description:
    "J'aide les associations, collectivités et petites structures à gagner du temps : appui administratif, automatisation et IA, sites et applications sur mesure. Basé à Rennes.",
  // À passer en indexable au lancement officiel de l'activité
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d1a" },
  ],
};

const LIENS = [
  ["#services", "Services"],
  ["#realisations", "Réalisations"],
  ["#parcours", "Parcours"],
] as const;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <header className="sticky top-0 z-40 border-b border-trait/70 bg-fond/90 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
            <Link href="/" className="flex items-center gap-2.5 whitespace-nowrap font-titre text-lg font-semibold text-encre">
              <span aria-hidden className="grid size-8 place-items-center rounded-lg bg-nuit font-titre text-sm font-bold text-ocre-vif ring-1 ring-signal/40">
                CS
              </span>
              <span className="hidden sm:inline">Charmes Soglohoun</span>
            </Link>
            <nav aria-label="Navigation principale" className="ml-auto hidden items-center gap-6 text-sm font-medium md:flex">
              {LIENS.map(([href, libelle]) => (
                <Link key={href} href={`/${href}`} className="text-gris hover:text-encre">
                  {libelle}
                </Link>
              ))}
            </nav>
            <Link href="/#contact" className="btn-ocre ml-auto min-h-10 px-5 text-sm md:ml-0">
              Me contacter
            </Link>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-nuit text-sur-nuit/70">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm sm:flex-row sm:items-center">
            <p>© Charmes Soglohoun · Organisation, automatisation et outils numériques · Rennes</p>
            <nav aria-label="Liens secondaires" className="flex gap-5 sm:ml-auto">
              <a href="https://www.linkedin.com/in/charmes-soglohoun" className="hover:text-white" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <Link href="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
            </nav>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
