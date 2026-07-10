# NOCTA — site

> Le contenu de votre lieu, géré de A à Z.
> Community management · Paris & Île-de-France.

Site statique multi-pages bilingue FR/EN, expérience scroll-driven (bokeh 3D persistant, parcours épinglé, comparateur avant/après, timeline dessinée au scroll).

## Structure
```
index.html            Accueil (hero 3D, manifeste, parcours épinglé, comparateur, piliers, timeline, cas, FAQ)
prestations.html      Piliers + formats + timeline
realisations.html     Formats + études de cas + grille
contact.html          Formulaire d'audit gratuit (Formspree ou fallback mail)
mentions.html         Mentions légales  ← compléter les [PLACEHOLDERS]
confidentialite.html  Politique de confidentialité (RGPD)
404.html              Page introuvable
assets/               styles.css · i18n.js · app.js · config.js
```

## ⚠️ À faire sur GitHub
Le drag & drop GitHub **n'efface jamais** les anciens fichiers :
- **Supprimer `formules.html`** du dépôt (page obsolète encore en ligne sur /formules).

## Checklist avant mise en production
1. **Formulaire** : créer un formulaire sur formspree.io → coller l'URL dans `assets/config.js` (`FORMSPREE_ENDPOINT`). Sans ça, fallback mailto.
2. **Mentions légales** : remplir les `[PLACEHOLDERS]` dans `mentions.html` (dénomination, SIREN, adresse, directeur de publication).
3. **Email** : créer la boîte `contact@nocta.paris`.
4. **Domaine** : pointer `nocta.paris` (Vercel → Settings → Domains, A 76.76.21.21).
5. **Réseaux** : remplacer les liens placeholder Instagram/TikTok dans les footers.
6. **Google Business Profile** : créer la fiche (catégorie agence de marketing, zone Paris/IDF) — essentiel pour le SEO local.
7. (Option) Analytics : Plausible ou GA4.

## Bilingue
FR écrit en dur dans le HTML (SEO/no-JS), EN injecté via `data-i18n` (`assets/i18n.js`). Langue mémorisée en localStorage.

## Déploiement
GitHub → Vercel (aucun build). Chaque push redéploie. Cache-busting via `?v=N` dans les pages.
