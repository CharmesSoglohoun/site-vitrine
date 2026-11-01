import { FormulaireContact } from "@/components/FormulaireContact";

// Icônes simples (traits), dessinées en SVG pour rester légères
const ICONES = {
  dossier: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM8 13h8M8 16h5",
  eclair: "M13 3 5 14h6l-1 7 8-11h-6z",
  ecran: "M3 5h18v11H3zM8 20h8M12 16v4M7 9l2 2-2 2M12 13h4",
  formulaire: "M6 3h12v18H6zM9 7h6M9 11h6M9 15h3",
  ia: "M12 3v3M12 18v3M3 12h3M18 12h3M7 7h10v10H7zM10 10h4v4h-4z",
  tableau: "M3 5h18v14H3zM3 10h18M9 10v9M15 10v9",
  cloche: "M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 21h4",
};

function Icone({ trace, className = "" }: { trace: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d={trace} />
    </svg>
  );
}

const SERVICES = [
  {
    icone: ICONES.dossier,
    titre: "Appui administratif et organisation",
    accroche: "Mettre de l'ordre dans vos procédures, vos documents et votre suivi.",
    exemples: [
      "Procédures écrites et modèles de documents prêts à l'emploi",
      "Tableaux de suivi : adhérents, dossiers, demandes, subventions",
      "Organisation de l'accueil et de la relation avec vos usagers ou clients",
    ],
  },
  {
    icone: ICONES.eclair,
    titre: "Automatisation et IA",
    accroche: "Confier aux outils les tâches répétitives, pour garder le temps qui compte.",
    exemples: [
      "Relances et réponses par e-mail automatiques",
      "Formulaires reliés directement à vos tableaux, sans ressaisie",
      "Assistant IA pour vos questions fréquentes, et formation de votre équipe",
    ],
    phare: true,
  },
  {
    icone: ICONES.ecran,
    titre: "Sites et applications",
    accroche: "Des outils en ligne simples, sûrs et faits pour votre façon de travailler.",
    exemples: [
      "Site vitrine pour présenter votre structure",
      "Plateforme avec comptes utilisateurs et espace d'administration",
      "Petits outils internes : inscriptions, réservations, suivi",
    ],
  },
];

// Le schéma de la bannière : un exemple concret d'automatisation
const FLUX = [
  [ICONES.formulaire, "Une demande arrive", "Formulaire, e-mail ou téléphone"],
  [ICONES.ia, "L'IA la trie et répond", "Réponse aux questions fréquentes"],
  [ICONES.tableau, "Le suivi se remplit", "Tableau à jour, sans ressaisie"],
  [ICONES.cloche, "L'équipe est prévenue", "Seulement quand c'est utile"],
];

const AVANT_APRES = [
  ["Les mêmes réponses tapées à la main, chaque jour", "Les questions fréquentes traitées automatiquement, à toute heure"],
  ["Des informations recopiées d'un fichier à l'autre", "Un formulaire qui alimente directement votre tableau de suivi"],
  ["Des relances oubliées et des dossiers qui traînent", "Des rappels envoyés au bon moment, sans y penser"],
  ["Des procédures dans la tête d'une seule personne", "Des procédures écrites, partagées et faciles à transmettre"],
];

const PUBLICS = ["Associations", "Communes et intercommunalités", "Économie sociale et solidaire", "Indépendants et TPE"];

const ETAPES = [
  ["Un premier échange", "30 minutes, gratuitement, pour comprendre votre besoin et vos contraintes."],
  ["Une proposition claire", "Ce que je fais, en combien de temps et pour quel prix. Sans surprise."],
  ["La réalisation et la prise en main", "Je livre, je forme votre équipe et je reste joignable après."],
];

const REALISATIONS = [
  {
    nom: "Passe-Clé",
    type: "Plateforme web",
    texte:
      "Mise en relation des étudiants qui quittent leur logement à Rennes et de ceux qui en cherchent un : visite virtuelle pièce par pièce, comptes, contact du bailleur protégé, publication modérée et espace administrateur.",
    outils: ["Next.js", "Supabase", "Sécurité des données", "RGPD"],
    lien: "https://passe-cle-site.vercel.app",
  },
  {
    nom: "Secrétaire IA",
    type: "Automatisation et IA",
    texte:
      "Une assistante IA qui répond au téléphone et sur WhatsApp pour une petite entreprise de services : elle consulte le planning, réserve, déplace ou annule, propose une autre date quand c'est complet, et prévient le gérant.",
    outils: ["IA conversationnelle", "Téléphone et WhatsApp", "Planning en direct"],
    lien: null,
  },
  {
    nom: "Charmes",
    type: "Application installable",
    texte:
      "Conseil en style pour hommes et femmes de toutes les carnations : palette de couleurs personnelle, tenues par saison sur un mannequin 3D, favoris synchronisés avec le compte.",
    outils: ["Application installable", "3D dans le navigateur", "Comptes utilisateurs"],
    lien: "https://nuance-ttqo.vercel.app",
  },
];

const PARCOURS = [
  ["2011 à 2014", "Licence en administration générale et territoriale", "École Nationale d'Administration et de Magistrature, Bénin"],
  ["2016 à 2019", "Assistant de direction, puis secrétaire administratif", "Lancement d'une entreprise, gestion administrative et RH, coordination de la direction générale"],
  ["2020 à 2025", "Téléconseiller, puis responsable d'une équipe d'agents", "Plan de formation, processus de vente, suivi des objectifs et de la relation client"],
  ["2025 à 2026", "Licence 3 d'administration publique", "Université de Lorraine, Metz"],
  ["Depuis 2026", "Master Management public territorial", "Université Rennes 2"],
];

const surTitre = "text-sm font-semibold uppercase tracking-[0.18em]";

export default function Accueil() {
  return (
    <>
      {/* Accroche */}
      <section className="relative isolate overflow-hidden bg-nuit text-sur-nuit">
        <div aria-hidden className="grille-tech absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div aria-hidden className="absolute -right-40 -top-40 -z-10 size-[560px] rounded-full bg-signal/25 blur-3xl" />
        <div aria-hidden className="absolute -bottom-56 -left-40 -z-10 size-[480px] rounded-full bg-ocre-vif/15 blur-3xl" />

        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div className="flex flex-col gap-7">
            <p className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-sur-nuit/85 backdrop-blur">
              <span className="pulsation size-2 rounded-full bg-[#4ade80]" aria-hidden />
              Disponible pour de nouvelles missions · Rennes et à distance
            </p>
            <h1 className="text-[2.5rem] font-semibold leading-[1.05] sm:text-6xl">
              Moins de tâches répétitives,{" "}
              <span className="bg-linear-to-r from-signal-clair via-[#c3b5ff] to-ocre-vif bg-clip-text text-transparent">
                plus de temps pour votre mission.
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-sur-nuit/75">
              J&apos;aide les associations, les collectivités et les petites structures à mieux s&apos;organiser : appui
              administratif, automatisation avec l&apos;IA, et outils en ligne faits sur mesure.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-ocre">
                Parlons de votre besoin
              </a>
              <a href="#realisations" className="btn border border-white/20 text-sur-nuit hover:bg-white/10">
                Voir mes réalisations
              </a>
            </div>
          </div>

          {/* Schéma : un exemple d'automatisation */}
          <figure className="rounded-3xl border border-white/10 bg-nuit-2/80 p-5 shadow-2xl shadow-signal/10 backdrop-blur sm:p-6">
            <figcaption className="mb-4 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-sur-nuit/60">
              Exemple d&apos;automatisation
              <span className="rounded-full bg-signal/20 px-2 py-0.5 normal-case tracking-normal text-signal-clair">En continu</span>
            </figcaption>
            <ol className="flex flex-col">
              {FLUX.map(([icone, titre, detail], i) => (
                <li key={titre} className="flex flex-col">
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                    <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${i === 1 ? "bg-signal text-white" : "bg-white/10 text-signal-clair"}`}>
                      <Icone trace={icone} className="size-5" />
                    </span>
                    <div>
                      <p className="font-semibold">{titre}</p>
                      <p className="text-sm text-sur-nuit/60">{detail}</p>
                    </div>
                  </div>
                  {i < FLUX.length - 1 && (
                    <svg viewBox="0 0 2 24" className="ml-[34px] h-6 w-0.5 overflow-visible" aria-hidden>
                      <line x1="1" y1="0" x2="1" y2="24" stroke="var(--signal-clair)" strokeWidth="2" className="flux" />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
          </figure>
        </div>

        <dl className="mx-auto grid max-w-6xl grid-cols-3 gap-4 border-t border-white/10 px-5 py-8">
          {[
            ["8 ans", "d'expérience en administration et en encadrement"],
            ["3", "domaines : organisation, automatisation, numérique"],
            ["3", "projets conçus et développés de A à Z"],
          ].map(([chiffre, libelle]) => (
            <div key={libelle}>
              <dt className="font-titre text-3xl font-semibold text-white sm:text-4xl">{chiffre}</dt>
              <dd className="mt-1 text-xs text-sur-nuit/60 sm:text-sm">{libelle}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Pour qui */}
      <section className="border-b border-trait bg-carte">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 sm:flex-row sm:items-center sm:gap-6">
          <p className={`${surTitre} shrink-0 text-gris`}>Pour qui ?</p>
          <ul className="flex flex-wrap gap-2">
            {PUBLICS.map((p) => (
              <li key={p} className="rounded-full border border-trait bg-fond px-3.5 py-1.5 text-sm font-medium">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className={`${surTitre} text-signal`}>Services</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-semibold sm:text-[2.6rem] sm:leading-tight">
            Un seul interlocuteur pour organiser, automatiser et outiller votre structure.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <article
                key={s.titre}
                className={`group relative flex flex-col gap-4 rounded-3xl p-7 transition hover:-translate-y-1 ${
                  s.phare
                    ? "bg-nuit text-sur-nuit shadow-2xl shadow-signal/20 ring-1 ring-signal/40"
                    : "border border-trait bg-carte hover:border-signal/40 hover:shadow-xl hover:shadow-signal/5"
                }`}
              >
                {s.phare && (
                  <span className="absolute right-5 top-5 rounded-full bg-ocre-vif px-2.5 py-1 text-xs font-semibold text-sur-ocre">
                    Mon cœur de métier
                  </span>
                )}
                <span className={`grid size-12 place-items-center rounded-2xl ${s.phare ? "bg-signal text-white" : "bg-signal-doux text-signal"}`}>
                  <Icone trace={s.icone} className="size-6" />
                </span>
                <h3 className="text-xl font-semibold">{s.titre}</h3>
                <p className={s.phare ? "text-sur-nuit/75" : "text-gris"}>{s.accroche}</p>
                <ul className={`mt-auto flex flex-col gap-2.5 border-t pt-4 text-sm ${s.phare ? "border-white/10" : "border-trait"}`}>
                  {s.exemples.map((e) => (
                    <li key={e} className="flex gap-2.5">
                      <span aria-hidden className={s.phare ? "text-ocre-vif" : "text-signal"}>✓</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Avant / après */}
      <section className="bg-doux py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className={`${surTitre} text-signal`}>Ce qui change</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-semibold sm:text-[2.6rem] sm:leading-tight">
            Du temps rendu à votre équipe, chaque semaine.
          </h2>
          <div className="mt-12 overflow-hidden rounded-3xl border border-trait bg-carte">
            <div className="hidden grid-cols-2 border-b border-trait text-sm font-semibold uppercase tracking-wider sm:grid">
              <p className="px-6 py-4 text-gris">Avant</p>
              <p className="border-l border-trait px-6 py-4 text-signal">Après</p>
            </div>
            <ul>
              {AVANT_APRES.map(([avant, apres]) => (
                <li key={avant} className="grid border-b border-trait last:border-0 sm:grid-cols-2">
                  <p className="flex gap-3 px-6 py-5 text-gris">
                    <span aria-hidden className="text-gris/60">✕</span>
                    <span>
                      <span className="sr-only">Avant : </span>
                      {avant}
                    </span>
                  </p>
                  <p className="flex gap-3 bg-signal-doux/40 px-6 py-5 font-medium sm:border-l sm:border-trait">
                    <span aria-hidden className="text-signal">✓</span>
                    <span>
                      <span className="sr-only">Après : </span>
                      {apres}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <p className={`${surTitre} text-signal`}>Méthode</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-[2.6rem] sm:leading-tight">Comment on travaille ensemble</h2>
        <ol className="relative mt-12 grid gap-8 md:grid-cols-3">
          <span aria-hidden className="absolute left-6 right-6 top-6 hidden h-px bg-linear-to-r from-signal via-signal/40 to-ocre-vif md:block" />
          {ETAPES.map(([titre, texte], i) => (
            <li key={titre} className="relative flex flex-col gap-3">
              <span className="grid size-12 place-items-center rounded-full bg-nuit font-titre text-lg font-semibold text-white ring-4 ring-fond">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold">{titre}</h3>
              <p className="text-gris">{texte}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="relative isolate scroll-mt-20 overflow-hidden bg-nuit py-20 text-sur-nuit sm:py-24">
        <div aria-hidden className="grille-tech absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div aria-hidden className="absolute -left-40 top-20 -z-10 size-[420px] rounded-full bg-signal/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-5">
          <p className={`${surTitre} text-signal-clair`}>Réalisations</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-semibold sm:text-[2.6rem] sm:leading-tight">
            Des projets conçus et développés de A à Z.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {REALISATIONS.map((r) => (
              <article
                key={r.nom}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-signal/50"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-ocre-vif">{r.type}</p>
                <h3 className="text-2xl font-semibold">{r.nom}</h3>
                <p className="leading-relaxed text-sur-nuit/75">{r.texte}</p>
                <ul className="flex flex-wrap gap-2">
                  {r.outils.map((o) => (
                    <li key={o} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                      {o}
                    </li>
                  ))}
                </ul>
                {r.lien ? (
                  <a href={r.lien} target="_blank" rel="noreferrer" className="mt-auto w-fit font-semibold text-signal-clair hover:underline">
                    Voir le projet en ligne ↗
                  </a>
                ) : (
                  <a href="#contact" className="mt-auto w-fit font-semibold text-signal-clair hover:underline">
                    Démonstration sur demande →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section id="parcours" className="mx-auto grid max-w-6xl scroll-mt-20 gap-12 px-5 py-20 sm:py-24 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-5">
          <p className={`${surTitre} text-signal`}>Parcours</p>
          <h2 className="text-3xl font-semibold sm:text-[2.6rem] sm:leading-tight">Le management public, augmenté par l&apos;IA.</h2>
          <p className="leading-relaxed text-gris">
            Formé à l&apos;administration publique au Bénin, j&apos;ai travaillé huit ans entre secrétariat de direction,
            lancement d&apos;entreprise et encadrement d&apos;une équipe commerciale. J&apos;y ai appris à organiser, à
            former et à rendre des processus plus efficaces.
          </p>
          <p className="leading-relaxed text-gris">
            Installé à Rennes, je poursuis un Master en management public territorial et je mets désormais l&apos;IA et
            le développement web au service de ce savoir-faire. Mon approche : comprendre d&apos;abord votre
            fonctionnement réel, puis choisir l&apos;outil le plus simple qui règle vraiment le problème.
          </p>
        </div>
        <ol className="relative flex flex-col gap-1 border-l-2 border-trait pl-8">
          {PARCOURS.map(([periode, titre, detail], i) => (
            <li key={titre} className="relative py-3">
              <span
                aria-hidden
                className={`absolute -left-[41px] top-4.5 size-4 rounded-full ring-4 ring-fond ${i === PARCOURS.length - 1 ? "bg-ocre-vif" : "bg-signal"}`}
              />
              <p className="text-sm font-semibold text-signal">{periode}</p>
              <p className="font-semibold">{titre}</p>
              <p className="text-sm text-gris">{detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="relative isolate scroll-mt-20 overflow-hidden bg-nuit py-20 text-sur-nuit sm:py-24">
        <div aria-hidden className="grille-tech absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_left,black_20%,transparent_70%)]" />
        <div aria-hidden className="absolute -right-32 bottom-0 -z-10 size-[460px] rounded-full bg-ocre-vif/15 blur-3xl" />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div className="flex flex-col gap-5">
            <p className={`${surTitre} text-signal-clair`}>Contact</p>
            <h2 className="text-3xl font-semibold sm:text-[2.6rem] sm:leading-tight">Parlons de votre besoin.</h2>
            <p className="leading-relaxed text-sur-nuit/75">
              Décrivez-moi en quelques lignes votre structure et ce qui vous prend du temps. Je vous réponds sous 48
              heures pour fixer un premier échange, gratuit et sans engagement.
            </p>
            <ul className="flex flex-col gap-2 text-sm text-sur-nuit/75">
              {["Premier échange de 30 minutes offert", "Proposition claire, sans surprise", "Réponse sous 48 heures"].map((t) => (
                <li key={t} className="flex gap-2.5">
                  <span aria-hidden className="text-ocre-vif">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="text-sm text-sur-nuit/60">
              Vous préférez LinkedIn ?{" "}
              <a href="https://www.linkedin.com/in/charmes-soglohoun" target="_blank" rel="noreferrer" className="font-semibold text-white underline">
                Écrivez-moi là-bas
              </a>
              .
            </p>
          </div>
          <div className="rounded-3xl bg-carte p-6 text-encre shadow-2xl shadow-black/40 sm:p-8">
            <FormulaireContact />
          </div>
        </div>
      </section>
    </>
  );
}
