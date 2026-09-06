# NOCTA — page « Lieux »

> On écrit ce que votre lieu raconte, et on vous donne de quoi le tenir toute l'année.
> Paris & Île-de-France.

Site statique **une seule page** (+ pages légales), bilingue FR/EN, expérience scroll-driven (bokeh 3D persistant, sprint épinglé, comparateur avant/après, tournée immersive des lieux).

## L'offre
Sprint de **2 à 3 semaines**, facturé **une fois** entre 2 500 € et 3 500 €.
Aucune exécution récurrente : on écrit le monde du lieu et on livre le système qui permet à l'équipe de le tenir seule.

Livrables : le monde du lieu · la ligne éditoriale · les textes permanents · le manuel d'exécution (20-30 scripts + calendrier 4 semaines + protocole de captation) · la première semaine de contenu en démonstration.

## Structure
```
index.html            Page unique : hero, constat, le sprint (#prestations), comparateur,
                       chiffres, prix, qui écrit, la tournée, FAQ, CTA, contact (#contact)
mentions.html          Mentions légales  ← compléter les [PLACEHOLDERS]
confidentialite.html   Politique de confidentialité (RGPD)
404.html               Page introuvable
assets/                styles.css · i18n.js · app.js · config.js
```

## ⚠️ À supprimer manuellement sur GitHub
Le drag & drop n'efface jamais les anciens fichiers :
`formules.html`, `prestations.html`, `realisations.html`, `contact.html`

## Checklist avant mise en production
1. **Formulaire** : créer un formulaire formspree.io → URL dans `assets/config.js`.
2. **Mentions légales** : remplir les `[PLACEHOLDERS]` de `mentions.html`.
3. **Réseaux** : remplacer les liens placeholder Instagram/TikTok des footers.
4. **Marque** : la bascule NOCTA → Strawberry Production (nom, logo, favicon, OG, email, mentions) reste à faire.

## Règles de rédaction
- Jamais « architecture narrative », « récit de marque » ni « storytelling » : un restaurateur ne les comprend pas.
- Parler au « je », jamais au « nous » d'agence.
- Aucun témoignage, aucun chiffre de résultat, aucune preuve inventée. La preuve, c'est l'auteur.

## Bilingue
FR écrit en dur dans le HTML (SEO/no-JS), EN injecté via `data-i18n` (`assets/i18n.js`, 173 clés à parité). Langue mémorisée en localStorage.

## Déploiement
GitHub → Vercel (aucun build). Cache-busting via `?v=N` (actuellement v13).
