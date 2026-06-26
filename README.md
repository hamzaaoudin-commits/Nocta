# NOCTA — site

> Le contenu de votre lieu, par un réalisateur.
> Paris & Île-de-France.

Site statique multi-pages, bilingue **FR / EN**, sans étape de build.
Direction : *« après minuit, vu à travers l'objectif »* — duo néon corail / indigo sur encre nocturne, signature **rack focus** (le point se fait au scroll/survol) et champ de **bokeh 3D** réactif à la souris (Three.js, avec repli gracieux).

## Structure

```
.
├── index.html            Accueil (hero 3D, manifeste, démo focus, piliers, étapes, formules, réalisations, CTA)
├── prestations.html      Les 6 piliers + le déroulé en 4 temps
├── formules.html         Devanture / Salle / Comble — détaillées
├── realisations.html     Grille de réalisations (rack focus)
├── contact.html          Formulaire (ouvre le client mail) + coordonnées
├── assets/
│   ├── styles.css        Design system complet
│   ├── i18n.js           Dictionnaire FR/EN + bascule de langue
│   └── app.js            Bokeh 3D, rack focus, tilt, spotlight, magnétisme, reveals
├── favicon.svg
├── og.png                Carte de partage (1200×630)
├── vercel.json           cleanUrls + en-têtes sécurité + cache
├── sitemap.xml
└── robots.txt
```

> `make_og.py` et les `*.ttf` servent uniquement à régénérer `og.png` — exclus du déploiement via `.gitignore`.

## Déploiement (GitHub + Vercel)

1. **GitHub** — glisser-déposer tout le dossier dans un nouveau dépôt (web UI), *commit*.
2. **Vercel** — *New Project* → importer le dépôt. Pas de framework, pas de build : *Output = racine*. *Deploy*.
3. **Domaine** — Vercel → *Settings → Domains* → ajouter `nocta.paris`
   (enregistrement A `76.76.21.21`, ou bascule des serveurs de noms vers Vercel).

Chaque *push* sur la branche redéploie automatiquement.

## Bilingue

Tous les textes portent un attribut `data-i18n="clé"` ; le français est écrit en dur dans le HTML (SEO + affichage sans JS), l'anglais est injecté à la volée. La langue est mémorisée (`localStorage`, clé `nocta-lang`). Pour modifier un texte : éditer la valeur dans `assets/i18n.js` (FR **et** EN).

## Avant la mise en ligne

- [ ] Créer la boîte `contact@nocta.paris`.
- [ ] Remplacer les liens Instagram / TikTok (placeholders `https://instagram.com` / `https://tiktok.com`).
- [ ] Pointer le domaine `nocta.paris`.
- [ ] (Option) Brancher le formulaire sur Formspree / Resend au lieu du `mailto:`.

---

© NOCTA — conçu la nuit, à Paris.
