"use client";

import Link from "next/link";
import { useActionState } from "react";
import { envoyerMessage, type EtatContact } from "@/app/actions";
import { BESOINS } from "@/lib/besoins";

export function FormulaireContact() {
  const [etat, action, enCours] = useActionState<EtatContact, FormData>(envoyerMessage, { statut: "repos" });

  if (etat.statut === "envoye") {
    return (
      <div role="status" className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-nuit">Merci, votre message est bien parti.</h3>
        <p className="text-gris">Je vous réponds sous 48 heures, à l&apos;adresse que vous avez indiquée.</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="nom" className="etiquette">
          Votre nom
        </label>
        <input id="nom" name="nom" required maxLength={100} autoComplete="name" className="champ" />
      </div>
      <div>
        <label htmlFor="structure" className="etiquette">
          Votre structure <span className="font-normal text-gris">(facultatif)</span>
        </label>
        <input id="structure" name="structure" maxLength={150} autoComplete="organization" className="champ" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="etiquette">
          Votre adresse e-mail
        </label>
        <input id="email" name="email" type="email" required maxLength={160} autoComplete="email" className="champ" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="besoin" className="etiquette">
          Votre besoin
        </label>
        <select id="besoin" name="besoin" defaultValue={BESOINS[0]} className="champ">
          {BESOINS.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="etiquette">
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          placeholder="Votre structure, ce qui vous prend du temps, ce que vous aimeriez améliorer…"
          className="champ py-3"
        />
      </div>
      {/* Champ piège pour les robots, invisible pour les personnes */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="site_web">Ne pas remplir</label>
        <input id="site_web" name="site_web" tabIndex={-1} autoComplete="off" />
      </div>
      {etat.statut === "erreur" && (
        <p role="alert" className="rounded-xl bg-ocre-doux p-3 text-sm sm:col-span-2">
          {etat.message}
        </p>
      )}
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" className="btn-ocre shrink-0 whitespace-nowrap" disabled={enCours}>
          {enCours ? "Envoi…" : "Envoyer mon message"}
        </button>
        <p className="text-xs text-gris">
          Vos informations servent uniquement à vous répondre.{" "}
          <Link href="/mentions-legales#donnees" className="underline">
            En savoir plus
          </Link>
        </p>
      </div>
    </form>
  );
}
