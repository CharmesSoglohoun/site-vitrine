"use server";

import { BESOINS } from "@/lib/besoins";

export type EtatContact = { statut: "repos" | "envoye" | "erreur"; message?: string };

const EMAIL_VALIDE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const echapper = (t: string) => t.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

// Envoie le message du formulaire par e-mail, via l'API de Resend.
// Variables (dans le .env du workspace en local, dans Vercel en ligne) :
//   RESEND_API_KEY        clé de l'API Resend
//   CONTACT_DESTINATAIRE  adresse qui reçoit les messages (celle du compte Resend tant qu'aucun domaine n'est vérifié)
export async function envoyerMessage(_e: EtatContact, f: FormData): Promise<EtatContact> {
  // Champ piège invisible : seuls les robots le remplissent.
  if (String(f.get("site_web") ?? "")) return { statut: "envoye" };

  const nom = String(f.get("nom") ?? "").trim().slice(0, 100);
  const structure = String(f.get("structure") ?? "").trim().slice(0, 150);
  const email = String(f.get("email") ?? "").trim().slice(0, 160);
  const besoin = String(f.get("besoin") ?? "");
  const message = String(f.get("message") ?? "").trim().slice(0, 4000);

  if (nom.length < 2) return { statut: "erreur", message: "Indiquez votre nom." };
  if (!EMAIL_VALIDE.test(email)) return { statut: "erreur", message: "Cette adresse e-mail ne semble pas valide." };
  if (message.length < 10) return { statut: "erreur", message: "Décrivez votre besoin en quelques mots." };

  const cle = process.env.RESEND_API_KEY;
  const destinataire = process.env.CONTACT_DESTINATAIRE;
  if (!cle || !destinataire) {
    console.error("Formulaire de contact : RESEND_API_KEY ou CONTACT_DESTINATAIRE manquant.");
    return { statut: "erreur", message: "L'envoi est momentanément indisponible. Écrivez-moi sur LinkedIn en attendant." };
  }

  const lignes = [
    ["Nom", nom],
    ["Structure", structure || "Non précisée"],
    ["E-mail", email],
    ["Besoin", BESOINS.includes(besoin) ? besoin : "Non précisé"],
  ];
  const html = `<h2>Nouveau message depuis le site</h2>
<table>${lignes.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${echapper(v)}</td></tr>`).join("")}</table>
<p style="white-space:pre-line">${echapper(message)}</p>`;

  const reponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${cle}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Site Charmes Soglohoun <onboarding@resend.dev>",
      to: [destinataire],
      reply_to: email,
      subject: `Contact site : ${nom}${structure ? ` (${structure})` : ""}`,
      html,
    }),
  });

  if (!reponse.ok) {
    console.error("Resend :", reponse.status, await reponse.text());
    return { statut: "erreur", message: "Le message n'est pas parti. Réessayez, ou écrivez-moi sur LinkedIn." };
  }
  return { statut: "envoye" };
}
