import { FormulaireContact } from "@/components/FormulaireContact";

const SERVICES = [
  {
    titre: "Appui administratif et organisation",
    accroche: "Mettre de l'ordre dans vos procédures, vos documents et votre suivi.",
    exemples: [
      "Procédures écrites et modèles de documents prêts à l'emploi",
      "Tableaux de suivi : adhérents, dossiers, demandes, subventions",
      "Organisation de l'accueil et de la relation avec vos usagers ou clients",
    ],
  },
  {
    titre: "Automatisation et IA",
    accroche: "Confier aux outils les tâches répétitives, pour garder le temps qui compte.",
    exemples: [
      "Relances et réponses par e-mail automatiques",
      "Formulaires reliés directement à vos tableaux, sans ressaisie",
      "Assistant IA pour vos questions fréquentes, et formation de votre équipe",
    ],
  },
  {
    titre: "Sites et applications",
    accroche: "Des outils en ligne simples, sûrs et faits pour votre façon de travailler.",
    exemples: [
      "Site vitrine pour présenter votre structure",
      "Plateforme avec comptes utilisateurs et espace d'administration",
      "Petits outils internes : inscriptions, réservations, suivi",
    ],
  },
];

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
    nom: "Charmes",
    type: "Application mobile (web installable)",
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

export default function Accueil() {
  return (
    <>
      {/* Accroche */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ocre">Rennes · Bretagne · à distance</p>
          <h1 className="text-4xl font-semibold leading-[1.08] text-nuit sm:text-6xl">
            Moins de tâches répétitives, plus de temps pour votre mission.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gris">
            J&apos;aide les associations, les collectivités et les petites structures à mieux s&apos;organiser : appui
            administratif, automatisation avec l&apos;IA, et sites ou outils en ligne faits sur mesure.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-ocre">
              Parlons de votre besoin
            </a>
            <a href="#realisations" className="btn-ligne">
              Voir mes réalisations
            </a>
          </div>
        </div>
        <dl className="grid grid-cols-3 gap-4 rounded-3xl bg-nuit p-6 text-sur-nuit lg:grid-cols-1 lg:gap-6 lg:p-8">
          {[
            ["8 ans", "d'expérience en administration et en encadrement"],
            ["3", "domaines : organisation, automatisation, numérique"],
            ["2", "plateformes conçues et mises en ligne"],
          ].map(([chiffre, libelle]) => (
            <div key={libelle}>
              <dt className="font-titre text-3xl font-semibold sm:text-4xl">{chiffre}</dt>
              <dd className="mt-1 text-sm opacity-80">{libelle}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 bg-doux py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-semibold text-nuit sm:text-4xl">Ce que je peux faire pour vous</h2>
          <p className="mt-3 max-w-2xl text-gris">
            Trois domaines complémentaires : un même interlocuteur pour organiser, automatiser et outiller votre structure.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <article key={s.titre} className="flex flex-col gap-4 rounded-3xl border border-trait bg-carte p-7">
                <span className="font-titre text-4xl font-semibold text-ocre">0{i + 1}</span>
                <h3 className="text-xl font-semibold text-nuit">{s.titre}</h3>
                <p className="text-gris">{s.accroche}</p>
                <ul className="mt-auto flex flex-col gap-2 border-t border-trait pt-4 text-sm">
                  {s.exemples.map((e) => (
                    <li key={e} className="flex gap-2">
                      <span aria-hidden className="text-ocre">→</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-gris">
            Pour qui ? Associations, communes et intercommunalités, structures de l&apos;économie sociale et solidaire,
            indépendants et petites entreprises.
          </p>
        </div>
      </section>

      {/* Méthode */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h2 className="text-3xl font-semibold text-nuit sm:text-4xl">Comment on travaille ensemble</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {ETAPES.map(([titre, texte], i) => (
            <li key={titre} className="flex flex-col gap-2 border-l-2 border-ocre pl-5">
              <span className="text-sm font-semibold text-ocre">Étape {i + 1}</span>
              <h3 className="text-lg font-semibold">{titre}</h3>
              <p className="text-gris">{texte}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="scroll-mt-20 bg-nuit py-16 text-sur-nuit sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-semibold sm:text-4xl">Réalisations</h2>
          <p className="mt-3 max-w-2xl opacity-80">
            Deux projets que j&apos;ai conçus et développés de A à Z, en ligne et utilisables dès aujourd&apos;hui.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {REALISATIONS.map((r) => (
              <article key={r.nom} className="flex flex-col gap-4 rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
                <p className="text-sm font-semibold uppercase tracking-wider text-ocre">{r.type}</p>
                <h3 className="text-2xl font-semibold">{r.nom}</h3>
                <p className="leading-relaxed opacity-85">{r.texte}</p>
                <ul className="flex flex-wrap gap-2">
                  {r.outils.map((o) => (
                    <li key={o} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                      {o}
                    </li>
                  ))}
                </ul>
                <a href={r.lien} target="_blank" rel="noreferrer" className="mt-auto w-fit font-semibold text-ocre hover:underline">
                  Voir le projet en ligne ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section id="parcours" className="mx-auto grid max-w-6xl scroll-mt-20 gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-semibold text-nuit sm:text-4xl">Qui suis-je ?</h2>
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
        <ol className="flex flex-col">
          {PARCOURS.map(([periode, titre, detail]) => (
            <li key={titre} className="grid grid-cols-[110px_1fr] gap-4 border-t border-trait py-4">
              <span className="text-sm font-semibold text-ocre">{periode}</span>
              <div>
                <p className="font-semibold">{titre}</p>
                <p className="text-sm text-gris">{detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-doux py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-nuit sm:text-4xl">Parlons de votre besoin</h2>
            <p className="leading-relaxed text-gris">
              Décrivez-moi en quelques lignes votre structure et ce qui vous prend du temps. Je vous réponds sous 48
              heures pour fixer un premier échange, gratuit et sans engagement.
            </p>
            <p className="text-sm text-gris">
              Vous préférez LinkedIn ?{" "}
              <a href="https://www.linkedin.com/in/charmes-soglohoun" target="_blank" rel="noreferrer" className="font-semibold text-nuit underline">
                Écrivez-moi là-bas
              </a>
              .
            </p>
          </div>
          <div className="rounded-3xl border border-trait bg-carte p-6 sm:p-8">
            <FormulaireContact />
          </div>
        </div>
      </section>
    </>
  );
}
