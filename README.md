# NOCTA

Site vitrine / page de vente — **le contenu de votre lieu, par un réalisateur.**
Tournage, montage, musique originale, publication et réputation pour les lieux d'hôtellerie-restauration à Paris & en Île-de-France.

Site statique (HTML/CSS, zéro dépendance, zéro build).

---

## Structure du dépôt

```
nocta/
├── index.html      → la page (tout le contenu + styles inline)
├── favicon.svg     → favicon néon "N"
├── og.png          → carte de partage social (1200×630)
├── sitemap.xml     → plan du site
├── robots.txt      → indexation moteurs de recherche
├── vercel.json     → config Vercel (clean URLs + headers de sécurité)
├── .gitignore
└── README.md
```

Tout est à la racine : Vercel sert `index.html` automatiquement, rien à configurer.

---

## Déploiement

### 1. Créer le dépôt GitHub

1. Sur GitHub → **New repository** → nom : `nocta` (ou ce que tu veux), visibilité **Private** ou **Public**.
2. Ne coche **rien** (pas de README, .gitignore ou licence auto — tu les ajoutes ici).
3. Copie-colle / glisse tous les fichiers de ce dossier dans le dépôt, puis commit.

En ligne de commande, à la racine du dossier :

```bash
git init
git add .
git commit -m "NOCTA — initial"
git branch -M main
git remote add origin https://github.com/TON-COMPTE/nocta.git
git push -u origin main
```

### 2. Déployer sur Vercel

1. [vercel.com](https://vercel.com) → **Add New… → Project**.
2. **Import** le dépôt GitHub `nocta`.
3. Framework Preset : **Other** (rien à régler, c'est du statique).
   - Build Command : *(vide)*
   - Output Directory : *(vide / racine)*
4. **Deploy**. C'est en ligne en ~20 secondes sur une URL `…vercel.app`.

### 3. Brancher le domaine `nocta.paris`

1. Achète `nocta.paris` (OVH, Gandi, Namecheap…).
2. Sur Vercel → projet → **Settings → Domains** → ajoute `nocta.paris` **et** `www.nocta.paris`.
3. Vercel te donne les enregistrements DNS à coller chez ton registrar :
   - soit un **A record** `@ → 76.76.21.21`
   - soit, plus simple, change les **nameservers** vers ceux de Vercel.
4. Le HTTPS est généré automatiquement.

> ⚠️ La page utilise déjà `https://nocta.paris/` dans les balises canoniques et de partage (OG/Twitter). Si tu pars sur un autre domaine, fais un rechercher/remplacer de `nocta.paris` dans `index.html`, `sitemap.xml` et `robots.txt`.

---

## Mises à jour

Toute modif poussée sur la branche `main` redéploie automatiquement. Pour éditer le contenu, tu touches **uniquement** `index.html` (le texte et les styles y sont).

---

## Notes

- L'adresse de contact dans la page est `contact@nocta.paris` → pense à créer cette boîte (ou un alias) une fois le domaine en place.
- La carte de partage `og.png` a été générée aux couleurs de la marque ; pour la regénérer ou l'ajuster, le script source `make_og.py` est gardé hors dépôt (voir `.gitignore`).
