import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegales() {
  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-5 px-5 py-14 leading-relaxed [&_h2]:mt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-nuit">
      <h1 className="text-4xl font-semibold text-nuit">Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>Charmes Soglohoun, Cesson-Sévigné (Ille-et-Vilaine). Contact : via le formulaire du site ou LinkedIn.</p>

      <h2>Hébergement</h2>
      <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>

      <h2 id="donnees">Vos données personnelles</h2>
      <p>
        Les informations envoyées par le formulaire de contact (nom, structure, adresse e-mail, message) servent
        uniquement à vous répondre. Elles sont transmises par e-mail grâce au service Resend et ne sont ni stockées sur
        le site, ni revendues, ni utilisées pour de la publicité. Elles sont conservées au plus trois ans après notre
        dernier échange.
      </p>
      <p>
        Vous pouvez demander à tout moment l&apos;accès à vos données, leur correction ou leur suppression en me
        contactant. En cas de difficulté, vous pouvez saisir la CNIL (cnil.fr).
      </p>

      <h2>Mesure d&apos;audience</h2>
      <p>Le site utilise une mesure d&apos;audience anonyme, sans cookie (Vercel Analytics).</p>
    </article>
  );
}
