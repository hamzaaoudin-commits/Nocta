/* ============================================================
   NOCTA — i18n (FR / EN)
   Texts live in data-i18n="key". Attributes via data-i18n-attr.
   ============================================================ */
(function () {
  const DICT = {
    fr: {
      /* nav */
      "nav.home": "Accueil",
      "nav.services": "Prestations",
      "nav.pricing": "Formules",
      "nav.work": "Réalisations",
      "nav.contact": "Contact",
      "nav.cta": "Reel offert",

      /* hero */
      "hero.kicker": "Paris & Île-de-France",
      "hero.tag": "Le contenu de votre lieu, <b>par un réalisateur.</b>",
      "hero.cta1": "Recevoir un reel offert",
      "hero.cta2": "Voir les formules",
      "hero.scroll": "Défiler",

      /* marquee */
      "mq.1": "Restaurants", "mq.2": "Bars", "mq.3": "Clubs",
      "mq.4": "Coffee shops", "mq.5": "Caves & bistrots", "mq.6": "Rooftops",

      /* manifesto */
      "man.eyebrow": "Le constat",
      "man.body": "Votre cuisine est excellente. Votre salle est pleine. <em>Et pourtant</em> votre Instagram ressemble à un reel flou filmé entre deux services.",

      /* focus demo */
      "focus.eyebrow": "La différence",
      "focus.title": "Elle se voit en trois secondes.",
      "focus.lead": "Le même lieu, deux regards. À gauche, le téléphone d'un serveur pressé. À droite, l'œil d'un réalisateur. Passez la souris : faites le point.",
      "focus.bad.tag": "Avant — au téléphone",
      "focus.bad.big": "Lumière de plafonnier, cadre tremblant, musique tendance volée, publié quand on y pense.",
      "focus.good.tag": "Après — par NOCTA",
      "focus.good.big": "Heure dorée, image étalonnée, musique composée pour le lieu, calendrier tenu.",

      /* pillars */
      "pil.eyebrow": "Ce qu'on prend en main",
      "pil.title": "Toute la chaîne. Vous ne touchez plus à rien.",
      "pil.1.t": "Tournage", "pil.1.d": "Une journée par mois dans votre lieu, à la lumière qui le sublime. Caméra cinéma, pas smartphone.",
      "pil.2.t": "Post-production", "pil.2.d": "Montage rythmé, étalonnage cinéma et musique originale composée pour votre ambiance.",
      "pil.3.t": "Publication", "pil.3.d": "Calendrier éditorial pensé, légendes écrites, formats adaptés à chaque réseau. Rien ne dort.",
      "pil.4.t": "Community", "pil.4.d": "Réponses aux messages et commentaires, ton de votre maison, présence vivante au quotidien.",
      "pil.5.t": "Google & avis", "pil.5.d": "Fiche optimisée, photos pro, gestion des avis. La première impression se joue avant la porte.",
      "pil.6.t": "Croissance", "pil.6.d": "Pilotage de la pub Meta & TikTok, événementiel, seeding créateurs. On fait venir du monde.",

      /* steps */
      "steps.eyebrow": "Comment ça marche",
      "steps.title": "Un seul jour de tournage. Un mois entier de contenu.",
      "steps.1.t": "On vient voir", "steps.1.d": "Un appel, une visite. On comprend votre lieu, votre clientèle, ce qui vous distingue.",
      "steps.2.t": "On tourne", "steps.2.d": "Une journée, à l'heure qui flatte votre lieu. Vous continuez le service, on s'efface.",
      "steps.3.t": "On façonne", "steps.3.d": "Montage, étalonnage, musique. On transforme la journée en quinze à vingt contenus.",
      "steps.4.t": "On diffuse", "steps.4.d": "Publication, réponses, avis, pub. Vous regardez les vues monter. C'est tout.",

      /* stats */
      "stat.1.l": "Journée de tournage / mois", "stat.2.l": "Contenus livrés / mois", "stat.3.l": "Réponse à votre demande",
      "stat.1.v": "1", "stat.2.v": "20", "stat.3.v": "48h",

      /* pricing teaser + page */
      "price.eyebrow": "Les formules",
      "price.title": "Trois niveaux d'engagement. Sans engagement de durée.",
      "price.lead": "Mensuel, résiliable quand vous voulez. On vous prouve la valeur avant de parler du long terme.",
      "price.month": "/ mois",
      "price.popular": "Le plus choisi",
      "tier.1.name": "Devanture", "tier.1.desc": "La présence. Pour exister, joliment.",
      "tier.1.f1": "½ journée de tournage / 2 mois", "tier.1.f2": "8 à 10 contenus / mois", "tier.1.f3": "Montage & étalonnage", "tier.1.f4": "Musique originale", "tier.1.f5": "Calendrier de publication", "tier.1.f6": "Community management", "tier.1.f7": "Gestion Google & avis", "tier.1.f8": "Pilotage publicitaire",
      "tier.2.name": "Salle", "tier.2.desc": "On s'occupe de tout. Le confort total.",
      "tier.2.name2": "Comble",
      "tier.3.desc": "Partout, tout le temps. La pleine puissance.",
      "tier.cta": "Demander cette formule",
      "tier.note": "Budget média (pub) en sus, défini avec vous.",

      /* work */
      "work.eyebrow": "Réalisations",
      "work.title": "Des lieux qui se regardent comme des films.",
      "work.lead": "Un aperçu du regard NOCTA appliqué à différents univers. Survolez pour faire le point.",
      "work.r1.k": "Restaurant", "work.r1.t": "L'heure dorée",
      "work.r2.k": "Cocktail bar", "work.r2.t": "Après minuit",
      "work.r3.k": "Club", "work.r3.t": "Le sous-sol",
      "work.r4.k": "Coffee shop", "work.r4.t": "Lumière du matin",
      "work.r5.k": "Rooftop", "work.r5.t": "Au-dessus des toits",
      "work.r6.k": "Cave à vin", "work.r6.t": "À la bougie",
      "work.disclaimer": "Visuels d'intention — vos contenus sont tournés sur place, chez vous.",

      /* cta band */
      "cta.eyebrow": "Sans engagement",
      "cta.title": "On vous offre un reel.",
      "cta.lead": "On vient capter votre terrasse à l'heure dorée, votre comptoir, un plat. On vous l'envoie. Vous voyez exactement ce que tout votre mois peut devenir.",
      "cta.btn": "Recevoir mon reel offert",

      /* contact */
      "contact.eyebrow": "Parlons-en",
      "contact.title": "Votre lieu mérite mieux qu'un téléphone.",
      "contact.lead": "Dites-nous où vous êtes et ce que vous servez. On vous répond sous 48h avec une idée de reel — offerte.",
      "f.name": "Votre nom", "f.place": "Nom du lieu", "f.email": "Email", "f.type": "Type de lieu",
      "f.message": "Votre lieu en quelques mots", "f.send": "Envoyer la demande",
      "f.opt.r": "Restaurant", "f.opt.b": "Bar", "f.opt.c": "Club", "f.opt.cs": "Coffee shop", "f.opt.o": "Autre",
      "c.k1": "Email", "c.k2": "Zone", "c.v2": "Paris & Île-de-France", "c.k3": "Instagram", "c.k4": "Réponse",
      "c.v4": "Sous 48 heures",

      /* footer */
      "foot.tagline": "Le contenu de votre lieu, par un réalisateur.",
      "foot.nav": "Navigation", "foot.legal": "Informations", "foot.social": "Réseaux",
      "foot.mentions": "Mentions légales", "foot.privacy": "Confidentialité",
      "foot.rights": "Tous droits réservés.", "foot.made": "Conçu la nuit, à Paris.",

      /* page heads */
      "pg.services.eyebrow": "Prestations",
      "pg.services.title": "Du tournage à la réputation. Une seule main.",
      "pg.services.lead": "NOCTA n'est pas une agence à dix intermédiaires. C'est un réalisateur qui filme, monte, compose et publie. Voici ce que ça veut dire, concrètement.",
      "pg.pricing.eyebrow": "Formules",
      "pg.pricing.title": "Choisissez votre niveau de présence.",
      "pg.work.eyebrow": "Réalisations",
      "pg.work.title": "Le regard, décliné.",
      "pg.contact.eyebrow": "Contact",
      "pg.contact.title": "On commence par un reel offert."
    },

    en: {
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.pricing": "Plans",
      "nav.work": "Work",
      "nav.contact": "Contact",
      "nav.cta": "Free reel",

      "hero.kicker": "Paris & Île-de-France",
      "hero.tag": "Your venue's content, <b>by a filmmaker.</b>",
      "hero.cta1": "Get a free reel",
      "hero.cta2": "See the plans",
      "hero.scroll": "Scroll",

      "mq.1": "Restaurants", "mq.2": "Bars", "mq.3": "Clubs",
      "mq.4": "Coffee shops", "mq.5": "Wine bars", "mq.6": "Rooftops",

      "man.eyebrow": "The problem",
      "man.body": "Your food is excellent. Your room is full. <em>And yet</em> your Instagram looks like a blurry reel shot between two services.",

      "focus.eyebrow": "The difference",
      "focus.title": "You see it in three seconds.",
      "focus.lead": "Same venue, two eyes. On the left, a rushed waiter's phone. On the right, a filmmaker's eye. Hover to pull focus.",
      "focus.bad.tag": "Before — on a phone",
      "focus.bad.big": "Ceiling light, shaky frame, borrowed trending audio, posted whenever.",
      "focus.good.tag": "After — by NOCTA",
      "focus.good.big": "Golden hour, cinema grade, music composed for the room, calendar kept.",

      "pil.eyebrow": "What we take off your plate",
      "pil.title": "The whole chain. You touch nothing.",
      "pil.1.t": "Shooting", "pil.1.d": "One day a month in your venue, in the light that flatters it. Cinema camera, not a smartphone.",
      "pil.2.t": "Post-production", "pil.2.d": "Rhythmic editing, cinema grade, and original music composed for your atmosphere.",
      "pil.3.t": "Publishing", "pil.3.d": "A real editorial calendar, written captions, formats tuned to each platform. Nothing sleeps.",
      "pil.4.t": "Community", "pil.4.d": "Replies to messages and comments, in your house's voice. A presence that stays alive.",
      "pil.5.t": "Google & reviews", "pil.5.d": "Optimised listing, pro photos, review handling. First impressions happen before the door.",
      "pil.6.t": "Growth", "pil.6.d": "Meta & TikTok ad management, events, creator seeding. We bring people in.",

      "steps.eyebrow": "How it works",
      "steps.title": "One shooting day. A full month of content.",
      "steps.1.t": "We come look", "steps.1.d": "A call, a visit. We learn your venue, your crowd, what sets you apart.",
      "steps.2.t": "We shoot", "steps.2.d": "One day, at the hour that flatters your venue. You keep serving, we disappear.",
      "steps.3.t": "We craft", "steps.3.d": "Edit, grade, music. We turn the day into fifteen to twenty pieces of content.",
      "steps.4.t": "We publish", "steps.4.d": "Posting, replies, reviews, ads. You watch the views climb. That's it.",

      "stat.1.l": "Shooting day / month", "stat.2.l": "Pieces delivered / month", "stat.3.l": "Reply to your request",
      "stat.1.v": "1", "stat.2.v": "20", "stat.3.v": "48h",

      "price.eyebrow": "The plans",
      "price.title": "Three levels of commitment. No lock-in.",
      "price.lead": "Monthly, cancel anytime. We prove the value before we talk long term.",
      "price.month": "/ month",
      "price.popular": "Most chosen",
      "tier.1.name": "Storefront", "tier.1.desc": "Presence. To exist, beautifully.",
      "tier.1.f1": "½ shooting day / 2 months", "tier.1.f2": "8 to 10 pieces / month", "tier.1.f3": "Edit & grade", "tier.1.f4": "Original music", "tier.1.f5": "Publishing calendar", "tier.1.f6": "Community management", "tier.1.f7": "Google & reviews", "tier.1.f8": "Ad management",
      "tier.2.name": "Room", "tier.2.desc": "We handle everything. Total comfort.",
      "tier.2.name2": "Full house",
      "tier.3.desc": "Everywhere, all the time. Full power.",
      "tier.cta": "Request this plan",
      "tier.note": "Media budget (ads) on top, set with you.",

      "work.eyebrow": "Work",
      "work.title": "Venues that watch like films.",
      "work.lead": "A glimpse of the NOCTA eye across different worlds. Hover to pull focus.",
      "work.r1.k": "Restaurant", "work.r1.t": "Golden hour",
      "work.r2.k": "Cocktail bar", "work.r2.t": "After midnight",
      "work.r3.k": "Club", "work.r3.t": "The basement",
      "work.r4.k": "Coffee shop", "work.r4.t": "Morning light",
      "work.r5.k": "Rooftop", "work.r5.t": "Above the roofs",
      "work.r6.k": "Wine bar", "work.r6.t": "By candlelight",
      "work.disclaimer": "Intent visuals — your content is shot on location, at your place.",

      "cta.eyebrow": "No commitment",
      "cta.title": "We'll shoot you a reel, free.",
      "cta.lead": "We come capture your terrace at golden hour, your counter, a plate. We send it over. You see exactly what your whole month could look like.",
      "cta.btn": "Get my free reel",

      "contact.eyebrow": "Let's talk",
      "contact.title": "Your venue deserves better than a phone.",
      "contact.lead": "Tell us where you are and what you serve. We reply within 48h with a reel idea — on us.",
      "f.name": "Your name", "f.place": "Venue name", "f.email": "Email", "f.type": "Venue type",
      "f.message": "Your venue in a few words", "f.send": "Send request",
      "f.opt.r": "Restaurant", "f.opt.b": "Bar", "f.opt.c": "Club", "f.opt.cs": "Coffee shop", "f.opt.o": "Other",
      "c.k1": "Email", "c.k2": "Area", "c.v2": "Paris & Île-de-France", "c.k3": "Instagram", "c.k4": "Reply",
      "c.v4": "Within 48 hours",

      "foot.tagline": "Your venue's content, by a filmmaker.",
      "foot.nav": "Navigation", "foot.legal": "Information", "foot.social": "Social",
      "foot.mentions": "Legal notice", "foot.privacy": "Privacy",
      "foot.rights": "All rights reserved.", "foot.made": "Made at night, in Paris.",

      "pg.services.eyebrow": "Services",
      "pg.services.title": "From shooting to reputation. One hand.",
      "pg.services.lead": "NOCTA isn't an agency with ten middlemen. It's one filmmaker who shoots, edits, scores and publishes. Here's what that means, concretely.",
      "pg.pricing.eyebrow": "Plans",
      "pg.pricing.title": "Choose your level of presence.",
      "pg.work.eyebrow": "Work",
      "pg.work.title": "The eye, in variations.",
      "pg.contact.eyebrow": "Contact",
      "pg.contact.title": "It starts with a free reel."
    }
  };

  const STORE = "nocta-lang";
  function getLang() {
    try { return localStorage.getItem(STORE) || "fr"; } catch (e) { return "fr"; }
  }
  function setLang(lang) {
    try { localStorage.setItem(STORE, lang); } catch (e) {}
    apply(lang);
  }
  function apply(lang) {
    const d = DICT[lang] || DICT.fr;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      if (d[k] != null) el.innerHTML = d[k];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      // format: "placeholder:key" or "placeholder:key|aria-label:key2"
      el.getAttribute("data-i18n-attr").split("|").forEach(pair => {
        const [attr, k] = pair.split(":");
        if (d[k] != null) el.setAttribute(attr, d[k]);
      });
    });
    document.querySelectorAll("[data-lang-btn]").forEach(b => {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang-btn") === lang));
    });
  }

  window.NOCTA_I18N = { setLang, getLang, apply, DICT };

  document.addEventListener("DOMContentLoaded", () => {
    apply(getLang());
    document.querySelectorAll("[data-lang-btn]").forEach(b => {
      b.addEventListener("click", () => setLang(b.getAttribute("data-lang-btn")));
    });
  });
})();
