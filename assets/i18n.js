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
      "nav.cta": "Prendre contact",

      /* hero */
      "hero.kicker": "Community management · Paris & Île-de-France",
      "hero.tag": "Le contenu de votre lieu, <b>géré de A à Z.</b>",
      "hero.cta1": "Prendre contact",
      "hero.cta2": "Voir les formules",
      "hero.scroll": "Défiler",

      /* marquee */
      "mq.1": "Restaurants", "mq.2": "Bars", "mq.3": "Clubs",
      "mq.4": "Coffee shops", "mq.5": "Caves & bistrots", "mq.6": "Rooftops",

      /* manifesto */
      "man.eyebrow": "Le constat",
      "man.body": "Votre cuisine est excellente. Votre salle est pleine. <em>Et pourtant</em> votre Instagram dort, vos messages restent sans réponse et vos avis vous échappent.",

      /* focus demo */
      "focus.eyebrow": "La différence",
      "focus.title": "Elle se voit en trois secondes.",
      "focus.lead": "Le même lieu, deux façons de le gérer. À gauche, un compte laissé à l'abandon. À droite, un community manager qui tient la barre.",
      "focus.bad.tag": "Sans community manager",
      "focus.bad.big": "Publications au hasard, légendes bâclées, messages sans réponse, avis ignorés.",
      "focus.good.tag": "Avec NOCTA",
      "focus.good.big": "Ligne éditoriale claire, calendrier tenu, communauté qui répond, réputation soignée.",

      /* pillars */
      "pil.eyebrow": "Ce qu'on prend en main",
      "pil.title": "Toute la chaîne. Vous ne touchez plus à rien.",
      "pil.1.t": "Stratégie éditoriale", "pil.1.d": "On définit votre ligne, votre ton, vos rubriques. Une direction claire, pas des posts au hasard.",
      "pil.2.t": "Création de contenu", "pil.2.d": "Montage de vos formats courts, visuels, carrousels. On façonne le contenu à partir de votre matière et de vos temps forts.",
      "pil.3.t": "Publication", "pil.3.d": "Calendrier éditorial tenu, légendes écrites, formats adaptés à chaque réseau. Rien ne dort.",
      "pil.4.t": "Community management", "pil.4.d": "Réponses aux messages et commentaires, dans le ton de votre maison. Une présence vivante au quotidien.",
      "pil.5.t": "Google & avis", "pil.5.d": "Fiche optimisée, photos soignées, gestion des avis. La première impression se joue avant la porte.",
      "pil.6.t": "Croissance", "pil.6.d": "Pilotage de la pub Meta & TikTok, événementiel, seeding créateurs. On fait venir du monde.",

      /* steps */
      "steps.eyebrow": "Comment ça marche",
      "steps.title": "Un seul interlocuteur. Un mois entier de présence.",
      "steps.1.t": "On vous écoute", "steps.1.d": "Un appel, un audit de vos réseaux. On comprend votre lieu, votre clientèle, ce qui vous distingue.",
      "steps.2.t": "On planifie", "steps.2.d": "Ligne éditoriale, calendrier, rubriques. On pose une vraie stratégie, pas du post au coup par coup.",
      "steps.3.t": "On crée", "steps.3.d": "Montage, visuels, légendes. On transforme votre matière en contenu qui donne envie.",
      "steps.4.t": "On gère", "steps.4.d": "Publication, réponses, avis, pub. Vous regardez votre présence grandir. C'est tout.",

      /* stats */
      "stat.1.l": "Contenus publiés / mois", "stat.2.l": "Jours de présence / an", "stat.3.l": "Réponse à votre demande",
      "stat.1.v": "20", "stat.2.v": "365", "stat.3.v": "48h",

      /* pricing teaser + page */
      "price.eyebrow": "Les formules",
      "price.title": "Trois niveaux d'engagement. Sans engagement de durée.",
      "price.lead": "Mensuel, résiliable quand vous voulez. On vous prouve la valeur avant de parler du long terme.",
      "price.month": "/ mois",
      "price.popular": "Le plus choisi",
      "tier.1.name": "Devanture", "tier.1.desc": "La présence. Pour exister, joliment.",
      "tier.1.f1": "Audit & ligne éditoriale", "tier.1.f2": "8 à 10 contenus / mois", "tier.1.f3": "Montage & visuels", "tier.1.f4": "Stratégie de contenu", "tier.1.f5": "Calendrier de publication", "tier.1.f6": "Community management", "tier.1.f7": "Gestion Google & avis", "tier.1.f8": "Pilotage publicitaire",
      "tier.2.name": "Salle", "tier.2.desc": "On s'occupe de tout. Le confort total.",
      "tier.2.name2": "Comble",
      "tier.3.desc": "Partout, tout le temps. La pleine puissance.",
      "tier.cta": "Demander cette formule",
      "tier.note": "Budget média (pub) en sus, défini avec vous.",

      /* work */
      "work.eyebrow": "Réalisations",
      "work.title": "Des comptes qu'on a envie de suivre.",
      "work.lead": "Un aperçu du contenu NOCTA selon les univers. Survolez pour faire le point.",
      "work.r1.k": "Restaurant", "work.r1.t": "L'heure dorée",
      "work.r2.k": "Cocktail bar", "work.r2.t": "Après minuit",
      "work.r3.k": "Club", "work.r3.t": "Le sous-sol",
      "work.r4.k": "Coffee shop", "work.r4.t": "Lumière du matin",
      "work.r5.k": "Rooftop", "work.r5.t": "Au-dessus des toits",
      "work.r6.k": "Cave à vin", "work.r6.t": "À la bougie",
      "work.disclaimer": "Visuels d'intention — exemples de direction, pas des clients réels.",

      /* cta band */
      "cta.eyebrow": "Sans engagement",
      "cta.title": "On s'occupe de tout.",
      "cta.lead": "Dites-nous où vous en êtes. On vous montre concrètement ce que votre présence peut devenir en un mois.",
      "cta.btn": "Prendre contact",

      /* contact */
      "contact.eyebrow": "Parlons-en",
      "contact.title": "Votre lieu mérite mieux qu'un compte à l'abandon.",
      "contact.lead": "Dites-nous où vous êtes et ce que vous servez. On vous répond sous 48h avec un premier état des lieux de vos réseaux.",
      "f.name": "Votre nom", "f.place": "Nom du lieu", "f.email": "Email", "f.type": "Type de lieu",
      "f.message": "Votre lieu en quelques mots", "f.send": "Envoyer la demande",
      "f.opt.r": "Restaurant", "f.opt.b": "Bar", "f.opt.c": "Club", "f.opt.cs": "Coffee shop", "f.opt.o": "Autre",
      "c.k1": "Email", "c.k2": "Zone", "c.v2": "Paris & Île-de-France", "c.k3": "Instagram", "c.k4": "Réponse",
      "c.v4": "Sous 48 heures",

      /* footer */
      "foot.tagline": "Le contenu de votre lieu, géré de A à Z.",
      "foot.nav": "Navigation", "foot.legal": "Informations", "foot.social": "Réseaux",
      "foot.mentions": "Mentions légales", "foot.privacy": "Confidentialité",
      "foot.rights": "Tous droits réservés.", "foot.made": "Conçu la nuit, à Paris.",

      /* page heads */
      "pg.services.eyebrow": "Prestations",
      "pg.services.title": "De la stratégie à la réputation. Une seule main.",
      "pg.services.lead": "NOCTA n'est pas une agence à dix intermédiaires. C'est une équipe de community managers qui pense, crée, publie et anime votre présence. Voici ce que ça veut dire, concrètement.",
      "pg.pricing.eyebrow": "Formules",
      "pg.pricing.title": "Choisissez votre niveau de présence.",
      "pg.work.eyebrow": "Réalisations",
      "pg.work.title": "Le contenu, décliné.",
      "pg.contact.eyebrow": "Contact",
      "pg.contact.title": "On commence par un audit de vos réseaux."
    },

    en: {
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.pricing": "Plans",
      "nav.work": "Work",
      "nav.contact": "Contact",
      "nav.cta": "Get in touch",

      "hero.kicker": "Community management · Paris & Île-de-France",
      "hero.tag": "Your venue's content, <b>managed end to end.</b>",
      "hero.cta1": "Get in touch",
      "hero.cta2": "See the plans",
      "hero.scroll": "Scroll",

      "mq.1": "Restaurants", "mq.2": "Bars", "mq.3": "Clubs",
      "mq.4": "Coffee shops", "mq.5": "Wine bars", "mq.6": "Rooftops",

      "man.eyebrow": "The problem",
      "man.body": "Your food is excellent. Your room is full. <em>And yet</em> your Instagram is asleep, your messages go unanswered and your reviews slip away from you.",

      "focus.eyebrow": "The difference",
      "focus.title": "You see it in three seconds.",
      "focus.lead": "Same venue, two ways of running it. On the left, an account left to drift. On the right, a community manager at the helm.",
      "focus.bad.tag": "Without a community manager",
      "focus.bad.big": "Random posts, sloppy captions, unanswered messages, ignored reviews.",
      "focus.good.tag": "With NOCTA",
      "focus.good.big": "A clear editorial line, calendar kept, an engaged community, reputation looked after.",

      "pil.eyebrow": "What we take off your plate",
      "pil.title": "The whole chain. You touch nothing.",
      "pil.1.t": "Editorial strategy", "pil.1.d": "We set your line, your tone, your rubrics. A clear direction, not random posts.",
      "pil.2.t": "Content creation", "pil.2.d": "Editing your short-form, visuals, carousels. We shape content from your material and your highlights.",
      "pil.3.t": "Publishing", "pil.3.d": "A real editorial calendar, written captions, formats tuned to each platform. Nothing sleeps.",
      "pil.4.t": "Community management", "pil.4.d": "Replies to messages and comments, in your house's voice. A presence that stays alive.",
      "pil.5.t": "Google & reviews", "pil.5.d": "Optimised listing, polished photos, review handling. First impressions happen before the door.",
      "pil.6.t": "Growth", "pil.6.d": "Meta & TikTok ad management, events, creator seeding. We bring people in.",

      "steps.eyebrow": "How it works",
      "steps.title": "One single contact. A full month of presence.",
      "steps.1.t": "We listen", "steps.1.d": "A call, an audit of your socials. We learn your venue, your crowd, what sets you apart.",
      "steps.2.t": "We plan", "steps.2.d": "Editorial line, calendar, rubrics. We lay down a real strategy, not post-by-post guesswork.",
      "steps.3.t": "We create", "steps.3.d": "Editing, visuals, captions. We turn your material into content that makes people want in.",
      "steps.4.t": "We run it", "steps.4.d": "Publishing, replies, reviews, ads. You watch your presence grow. That's it.",

      "stat.1.l": "Pieces published / month", "stat.2.l": "Days of presence / year", "stat.3.l": "Reply to your request",
      "stat.1.v": "20", "stat.2.v": "365", "stat.3.v": "48h",

      "price.eyebrow": "The plans",
      "price.title": "Three levels of commitment. No lock-in.",
      "price.lead": "Monthly, cancel anytime. We prove the value before we talk long term.",
      "price.month": "/ month",
      "price.popular": "Most chosen",
      "tier.1.name": "Storefront", "tier.1.desc": "Presence. To exist, beautifully.",
      "tier.1.f1": "Audit & editorial line", "tier.1.f2": "8 to 10 pieces / month", "tier.1.f3": "Editing & visuals", "tier.1.f4": "Content strategy", "tier.1.f5": "Publishing calendar", "tier.1.f6": "Community management", "tier.1.f7": "Google & reviews", "tier.1.f8": "Ad management",
      "tier.2.name": "Room", "tier.2.desc": "We handle everything. Total comfort.",
      "tier.2.name2": "Full house",
      "tier.3.desc": "Everywhere, all the time. Full power.",
      "tier.cta": "Request this plan",
      "tier.note": "Media budget (ads) on top, set with you.",

      "work.eyebrow": "Work",
      "work.title": "Accounts worth following.",
      "work.lead": "A glimpse of NOCTA content across different worlds. Hover to pull focus.",
      "work.r1.k": "Restaurant", "work.r1.t": "Golden hour",
      "work.r2.k": "Cocktail bar", "work.r2.t": "After midnight",
      "work.r3.k": "Club", "work.r3.t": "The basement",
      "work.r4.k": "Coffee shop", "work.r4.t": "Morning light",
      "work.r5.k": "Rooftop", "work.r5.t": "Above the roofs",
      "work.r6.k": "Wine bar", "work.r6.t": "By candlelight",
      "work.disclaimer": "Intent visuals — direction examples, not real clients.",

      "cta.eyebrow": "No commitment",
      "cta.title": "We handle everything.",
      "cta.lead": "Tell us where you stand. We'll show you concretely what your presence can become in a month.",
      "cta.btn": "Get in touch",

      "contact.eyebrow": "Let's talk",
      "contact.title": "Your venue deserves better than a neglected account.",
      "contact.lead": "Tell us where you are and what you serve. We reply within 48h with a first assessment of your socials.",
      "f.name": "Your name", "f.place": "Venue name", "f.email": "Email", "f.type": "Venue type",
      "f.message": "Your venue in a few words", "f.send": "Send request",
      "f.opt.r": "Restaurant", "f.opt.b": "Bar", "f.opt.c": "Club", "f.opt.cs": "Coffee shop", "f.opt.o": "Other",
      "c.k1": "Email", "c.k2": "Area", "c.v2": "Paris & Île-de-France", "c.k3": "Instagram", "c.k4": "Reply",
      "c.v4": "Within 48 hours",

      "foot.tagline": "Your venue's content, managed end to end.",
      "foot.nav": "Navigation", "foot.legal": "Information", "foot.social": "Social",
      "foot.mentions": "Legal notice", "foot.privacy": "Privacy",
      "foot.rights": "All rights reserved.", "foot.made": "Made at night, in Paris.",

      "pg.services.eyebrow": "Services",
      "pg.services.title": "From strategy to reputation. One hand.",
      "pg.services.lead": "NOCTA isn't an agency with ten middlemen. It's a team of community managers who think, create, publish and run your presence. Here's what that means, concretely.",
      "pg.pricing.eyebrow": "Plans",
      "pg.pricing.title": "Choose your level of presence.",
      "pg.work.eyebrow": "Work",
      "pg.work.title": "The content, in variations.",
      "pg.contact.eyebrow": "Contact",
      "pg.contact.title": "It starts with an audit of your socials."
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
