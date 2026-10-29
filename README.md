# Site vitrine de Charmes Soglohoun (activité freelance)

**Pour :** présenter mon activité freelance (appui administratif, automatisation et IA, sites et applications) aux associations, collectivités et petites structures.
**État :** créé le 2026-10-29, testé en local. Mise en ligne sur Vercel et formulaire de contact (Resend) à brancher.
**Pile :** Next.js 16 + Tailwind 4, site statique, hébergé sur Vercel.

## Contenu

Une seule page : accroche, 3 services, méthode en 3 étapes, réalisations (Passe-Clé, Charmes), parcours, formulaire de contact. Plus une page de mentions légales.

Les textes sont dans `src/app/page.tsx` (tableaux `SERVICES`, `ETAPES`, `REALISATIONS`, `PARCOURS` en haut du fichier).

## Formulaire de contact

Les messages sont envoyés par e-mail via [Resend](https://resend.com) (gratuit jusqu'à 3 000 e-mails par mois). Deux variables :

| Variable | Valeur |
|---|---|
| `RESEND_API_KEY` | clé API créée dans Resend (API Keys, droit « Sending access ») |
| `CONTACT_DESTINATAIRE` | l'adresse qui reçoit les messages. Tant qu'aucun domaine n'est vérifié dans Resend, ce doit être l'adresse du compte Resend |

En local, elles sont lues dans le `.env` à la racine du workspace. Sur Vercel, dans Settings, puis Environment Variables.

## Commandes

```
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Avant d'ouvrir au public

- Retirer le `noindex` dans `src/app/layout.tsx` pour être trouvé sur Google
- Nom de domaine personnel (par exemple charmes-soglohoun.fr)
- Statut juridique (micro-entreprise) et mentions obligatoires associées (SIRET) avant toute mission payée
