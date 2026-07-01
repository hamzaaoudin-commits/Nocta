/* ============================================================
   NOCTA — i18n (FR / EN)
   ============================================================ */
(function () {
  const DICT = {
    fr: {
      "nav.home": "Accueil", "nav.services": "Prestations", "nav.pricing": "Formules",
      "nav.work": "Réalisations", "nav.contact": "Contact", "nav.cta": "Prendre contact",

      "hero.kicker": "Community management · Paris & Île-de-France",
      "hero.tag": "Le contenu de votre lieu, <b>géré de A à Z.</b>",
      "hero.cta1": "Prendre contact", "hero.cta2": "Voir l'offre", "hero.scroll": "Défiler",

      "mq.1": "Restaurants", "mq.2": "Bars", "mq.3": "Clubs",
      "mq.4": "Coffee shops", "mq.5": "Caves & bistrots", "mq.6": "Rooftops",

      "man.eyebrow": "Le constat",
      "man.body": "Votre cuisine est excellente. Votre salle est pleine. <em>Et pourtant</em> votre Instagram dort, vos messages restent sans réponse et vos avis vous échappent.",

      "focus.eyebrow": "La différence",
      "focus.title": "Elle se voit en trois secondes.",
      "focus.lead": "Le même lieu, deux façons de le gérer. À gauche, un compte laissé à l'abandon. À droite, un community manager qui tient la barre.",
      "focus.bad.tag": "Sans community manager",
      "focus.bad.big": "Publications au hasard, légendes bâclées, messages sans réponse, avis ignorés.",
      "focus.good.tag": "Avec NOCTA",
      "focus.good.big": "Ligne éditoriale claire, calendrier tenu, communauté qui répond, réputation soignée.",

      "pil.eyebrow": "Ce qu'on prend en main",
      "pil.title": "Toute la chaîne. Vous ne touchez plus à rien.",
      "pil.1.t": "Stratégie éditoriale", "pil.1.d": "On définit votre ligne, votre ton, vos rubriques. Une direction claire, pas des posts au hasard.",
      "pil.2.t": "Création de contenu", "pil.2.d": "Montage de vos formats courts, visuels, carrousels. On façonne le contenu à partir de votre matière et de vos temps forts.",
      "pil.3.t": "Publication", "pil.3.d": "Calendrier éditorial tenu, légendes écrites, formats adaptés à chaque réseau. Rien ne dort.",
      "pil.4.t": "Community management", "pil.4.d": "Réponses aux messages et commentaires, dans le ton de votre maison. Une présence vivante au quotidien.",
      "pil.5.t": "Google & avis", "pil.5.d": "Fiche optimisée, photos soignées, gestion des avis. La première impression se joue avant la porte.",
      "pil.6.t": "Croissance", "pil.6.d": "Pilotage de la pub Meta & TikTok, événementiel, seeding créateurs. On fait venir du monde.",

      "steps.eyebrow": "Comment ça marche",
      "steps.title": "Un seul interlocuteur. Un mois entier de présence.",
      "steps.1.t": "On vous écoute", "steps.1.d": "Un appel, un audit de vos réseaux. On comprend votre lieu, votre clientèle, ce qui vous distingue.",
      "steps.2.t": "On planifie", "steps.2.d": "Ligne éditoriale, calendrier, rubriques. On pose une vraie stratégie, pas du post au coup par coup.",
      "steps.3.t": "On crée", "steps.3.d": "Montage, visuels, légendes. On transforme votre matière en contenu qui donne envie.",
      "steps.4.t": "On gère", "steps.4.d": "Publication, réponses, avis, pub. Vous regardez votre présence grandir. C'est tout.",

      "stat.1.l": "Contenus publiés / mois", "stat.2.l": "Jours de présence / an", "stat.3.l": "Réponse à votre demande",
      "stat.1.v": "20", "stat.2.v": "365", "stat.3.v": "48h",

      "price.eyebrow": "L'offre",
      "price.title": "Une offre. Tout est dedans.",
      "price.lead": "Un forfait mensuel unique, tout compris. On prend en charge l'intégralité de votre présence en ligne.",
      "price.month": "/ mois",
      "plan.name": "L'offre NOCTA",
      "plan.desc": "Le community management de votre lieu, de A à Z. Un seul forfait, tout est dedans.",
      "tier.1.f1": "Audit & ligne éditoriale", "tier.1.f2": "15 à 20 contenus / mois", "tier.1.f3": "Montage & visuels", "tier.1.f4": "Stratégie de contenu", "tier.1.f5": "Calendrier de publication", "tier.1.f6": "Community management complet", "tier.1.f7": "Gestion Google & avis", "tier.1.f8": "Pilotage publicitaire Meta & TikTok",
      "tier.cta": "Prendre contact",
      "tier.note": "Budget média (ce que vous investissez en pub) en sus, défini avec vous.",

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

      "ct.eyebrow": "Ce qu'on produit",
      "ct.title": "Tous les formats qui font vivre un lieu.",
      "ct.lead": "À partir de votre matière — vos plats, votre équipe, vos soirées — on décline le contenu sur tous les formats qui comptent.",
      "ct.1.f": "Vidéo", "ct.1.t": "Reels & formats courts", "ct.1.d": "Montage rythmé, sous-titres, accroches. Le format qui tourne et qui ramène du monde.",
      "ct.2.f": "Visuel", "ct.2.t": "Carrousels", "ct.2.d": "Menus, offres, nouveautés, coulisses. L'info qui se garde et qui se partage.",
      "ct.3.f": "Quotidien", "ct.3.t": "Stories", "ct.3.d": "La présence de tous les jours : ambiance du soir, plat du jour, sondages, votes.",
      "ct.4.f": "Photo", "ct.4.t": "Photo & retouche", "ct.4.d": "Vos visuels retouchés, recadrés, harmonisés. Une image cohérente, partout.",
      "ct.5.f": "Preuve", "ct.5.t": "Avis & contenu clients", "ct.5.d": "Vos meilleurs avis et le contenu de vos clients, transformés en posts qui rassurent.",
      "ct.6.f": "Pub", "ct.6.t": "Créa publicitaire", "ct.6.d": "Visuels et vidéos pensés pour la pub Meta & TikTok. Conçus pour convertir, pas juste pour plaire.",

      "cs.eyebrow": "Études de cas",
      "cs.title": "Ce que ça donne, concrètement.",
      "cs.lead": "Trois situations qu'on rencontre tout le temps, et ce que NOCTA y change — chiffres à l'appui.",
      "cs.pb": "Le constat", "cs.ac": "Ce qu'on a mis en place",
      "cs.disclaimer": "Scénarios construits à partir de situations réelles du secteur. Chiffres représentatifs des résultats visés, remplacés par vos données dès le premier mois.",
      "cs.1.k": "Bistrot de quartier · Paris 11e", "cs.1.title": "De l'invisible à l'incontournable",
      "cs.1.re": "Résultats à 4 mois",
      "cs.1.pb": "Compte quasi inactif : 3 publications en six mois, 480 abonnés, messages sans réponse, note Google en baisse.",
      "cs.1.ac": "Ligne éditoriale, 4 posts et 5 stories par semaine, plat du jour quotidien, réponse à tous les messages et avis sous 24h.",
      "cs.1.m1v": "480 → 3 200", "cs.1.m1l": "abonnés", "cs.1.m2v": "38", "cs.1.m2l": "réservations/mois en DM", "cs.1.m3v": "4,8★", "cs.1.m3l": "note Google (vs 4,2)",
      "cs.2.k": "Bar à cocktails · Paris 9e", "cs.2.title": "Remplir les creux de semaine",
      "cs.2.re": "Résultats à 3 mois",
      "cs.2.pb": "Week-ends pleins, mais du mardi au jeudi la salle tournait à 40 %. Aucune communication sur ces soirées.",
      "cs.2.ac": "Reels signatures cocktails (2/sem), soirées de semaine thématisées, publicité géociblée sur 2 km, jeu-concours mensuel.",
      "cs.2.m1v": "+37%", "cs.2.m1l": "couverts mardi-jeudi", "cs.2.m2v": "94 000", "cs.2.m2l": "vues/mois sur les Reels", "cs.2.m3v": "3,10€", "cs.2.m3l": "coût par nouveau client",
      "cs.3.k": "Coffee shop · Paris 3e", "cs.3.title": "Devenir le spot du quartier",
      "cs.3.re": "Résultats à 5 mois",
      "cs.3.pb": "Lieu superbe mais invisible en ligne : 610 abonnés, des clients qui photographient sans jamais identifier le compte.",
      "cs.3.ac": "Identité de feed, carrousels latte art, 3 collabs créateurs food locaux, stratégie de hashtags et de lieu, repost du contenu client.",
      "cs.3.m1v": "610 → 6 900", "cs.3.m1l": "abonnés", "cs.3.m2v": "x5", "cs.3.m2l": "mentions & tags", "cs.3.m3v": "1 200", "cs.3.m3l": "visites profil/semaine",
      "cs.cta": "Voir les études de cas",

      "why.eyebrow": "Pourquoi NOCTA",
      "why.title": "Ce qui nous rend différents.",
      "why.1.t": "Un seul interlocuteur", "why.1.d": "Pas dix intermédiaires. La personne qui crée votre contenu est celle qui vous répond.",
      "why.2.t": "Résultats mesurés", "why.2.d": "On pilote vos chiffres — abonnés, messages, réservations — et on vous les montre chaque mois.",
      "why.3.t": "Spécialistes des lieux", "why.3.d": "On ne fait que l'hôtellerie-restauration en Île-de-France. On connaît vos contraintes de service.",

      "faq.eyebrow": "Questions fréquentes",
      "faq.title": "Ce que les gérants nous demandent.",
      "faq.1.q": "Je n'ai pas le temps de m'en occuper.", "faq.1.a": "C'est exactement le but. Vous nous donnez la matière une fois, on gère le reste — création, publication, réponses, avis. Vous validez en deux minutes, ou pas du tout.",
      "faq.2.q": "Qu'est-ce que je dois fournir ?", "faq.2.a": "Votre matière brute : photos, vidéos de téléphone, accès aux comptes. On vous guide sur quoi capter pendant le service. Pas besoin d'être réalisateur — transformer ça, c'est notre métier.",
      "faq.3.q": "Vous tournez sur place ?", "faq.3.a": "Non. On est community managers, pas une équipe de tournage. On travaille à partir de votre matière et on vous dit précisément quoi capter. Plus léger, plus rapide, et bien moins cher qu'une prod.",
      "faq.4.q": "Combien de temps avant de voir des résultats ?", "faq.4.a": "Les premiers contenus partent sous 10 jours. Sur la visibilité et l'engagement, comptez 4 à 8 semaines pour une tendance nette et durable.",
      "faq.5.q": "Vous gérez la publicité aussi ?", "faq.5.a": "Oui : création des visuels, ciblage, suivi. Le budget que vous investissez sur Meta/TikTok est en sus, défini ensemble selon vos objectifs.",

      "cta.eyebrow": "Prêt à déléguer ?",
      "cta.title": "On s'occupe de tout.",
      "cta.lead": "Dites-nous où vous en êtes. On vous montre concrètement ce que votre présence peut devenir en un mois.",
      "cta.btn": "Prendre contact",

      "contact.eyebrow": "Parlons-en",
      "contact.title": "Votre lieu mérite mieux qu'un compte à l'abandon.",
      "contact.lead": "Dites-nous où vous êtes et ce que vous servez. On vous répond sous 48h avec un premier état des lieux de vos réseaux.",
      "f.name": "Votre nom", "f.place": "Nom du lieu", "f.email": "Email", "f.type": "Type de lieu",
      "f.message": "Votre lieu en quelques mots", "f.send": "Envoyer la demande",
      "f.opt.r": "Restaurant", "f.opt.b": "Bar", "f.opt.c": "Club", "f.opt.cs": "Coffee shop", "f.opt.o": "Autre",
      "c.k1": "Email", "c.k2": "Zone", "c.v2": "Paris & Île-de-France", "c.k3": "Instagram", "c.k4": "Réponse",
      "c.v4": "Sous 48 heures",

      "foot.tagline": "Le contenu de votre lieu, géré de A à Z.",
      "foot.nav": "Navigation", "foot.legal": "Informations", "foot.social": "Réseaux",
      "foot.mentions": "Mentions légales", "foot.privacy": "Confidentialité",
      "foot.rights": "Tous droits réservés.", "foot.made": "Conçu la nuit, à Paris.",

      "pg.services.eyebrow": "Prestations",
      "pg.services.title": "De la stratégie à la réputation. Une seule main.",
      "pg.services.lead": "NOCTA n'est pas une agence à dix intermédiaires. C'est une équipe de community managers qui pense, crée, publie et anime votre présence. Voici ce que ça veut dire, concrètement.",
      "pg.pricing.eyebrow": "Formules",
      "pg.pricing.title": "Une offre, tout compris.",
      "pg.work.eyebrow": "Réalisations",
      "pg.work.title": "Le contenu, décliné.",
      "pg.contact.eyebrow": "Contact",
      "pg.contact.title": "On commence par un audit de vos réseaux."
    },

    en: {
      "nav.home": "Home", "nav.services": "Services", "nav.pricing": "Plans",
      "nav.work": "Work", "nav.contact": "Contact", "nav.cta": "Get in touch",

      "hero.kicker": "Community management · Paris & Île-de-France",
      "hero.tag": "Your venue's content, <b>managed end to end.</b>",
      "hero.cta1": "Get in touch", "hero.cta2": "See the offer", "hero.scroll": "Scroll",

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

      "price.eyebrow": "The offer",
      "price.title": "One offer. Everything's in it.",
      "price.lead": "A single all-inclusive monthly plan. We take charge of your entire online presence.",
      "price.month": "/ month",
      "plan.name": "The NOCTA plan",
      "plan.desc": "Your venue's community management, end to end. One plan, everything in it.",
      "tier.1.f1": "Audit & editorial line", "tier.1.f2": "15 to 20 pieces / month", "tier.1.f3": "Editing & visuals", "tier.1.f4": "Content strategy", "tier.1.f5": "Publishing calendar", "tier.1.f6": "Full community management", "tier.1.f7": "Google & reviews", "tier.1.f8": "Meta & TikTok ad management",
      "tier.cta": "Get in touch",
      "tier.note": "Media budget (what you invest in ads) on top, set with you.",

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

      "ct.eyebrow": "What we produce",
      "ct.title": "Every format that brings a venue to life.",
      "ct.lead": "From your material — your dishes, your team, your nights — we shape content across every format that matters.",
      "ct.1.f": "Video", "ct.1.t": "Reels & short-form", "ct.1.d": "Punchy edits, captions, hooks. The format that travels and brings people in.",
      "ct.2.f": "Visual", "ct.2.t": "Carousels", "ct.2.d": "Menus, offers, news, behind-the-scenes. Info worth saving and sharing.",
      "ct.3.f": "Daily", "ct.3.t": "Stories", "ct.3.d": "Everyday presence: the evening mood, the daily special, polls, votes.",
      "ct.4.f": "Photo", "ct.4.t": "Photo & retouching", "ct.4.d": "Your visuals retouched, reframed, harmonised. A consistent image, everywhere.",
      "ct.5.f": "Proof", "ct.5.t": "Reviews & customer content", "ct.5.d": "Your best reviews and customer content, turned into posts that reassure.",
      "ct.6.f": "Ads", "ct.6.t": "Ad creative", "ct.6.d": "Visuals and videos built for Meta & TikTok ads. Made to convert, not just to please.",

      "cs.eyebrow": "Case studies",
      "cs.title": "What it looks like, concretely.",
      "cs.lead": "Three situations we meet all the time, and what NOCTA changes — with the numbers to back it.",
      "cs.pb": "The situation", "cs.ac": "What we put in place",
      "cs.disclaimer": "Scenarios built from real situations in the sector. Figures representative of targeted results, replaced with your own data from month one.",
      "cs.1.k": "Neighbourhood bistro · Paris 11e", "cs.1.title": "From invisible to unmissable",
      "cs.1.re": "Results at 4 months",
      "cs.1.pb": "A near-dead account: 3 posts in six months, 480 followers, unanswered messages, a slipping Google rating.",
      "cs.1.ac": "Editorial line, 4 posts and 5 stories a week, daily special, all messages and reviews answered within 24h.",
      "cs.1.m1v": "480 → 3,200", "cs.1.m1l": "followers", "cs.1.m2v": "38", "cs.1.m2l": "bookings/month via DM", "cs.1.m3v": "4.8★", "cs.1.m3l": "Google rating (from 4.2)",
      "cs.2.k": "Cocktail bar · Paris 9e", "cs.2.title": "Filling the midweek lulls",
      "cs.2.re": "Results at 3 months",
      "cs.2.pb": "Weekends were packed, but Tuesday to Thursday the room ran at 40%. No communication around those nights.",
      "cs.2.ac": "Signature cocktail reels (2/wk), themed midweek nights, geo-targeted ads within 2 km, monthly giveaway.",
      "cs.2.m1v": "+37%", "cs.2.m1l": "Tue–Thu covers", "cs.2.m2v": "94,000", "cs.2.m2l": "views/month on Reels", "cs.2.m3v": "€3.10", "cs.2.m3l": "cost per new customer",
      "cs.3.k": "Coffee shop · Paris 3e", "cs.3.title": "Becoming the neighbourhood spot",
      "cs.3.re": "Results at 5 months",
      "cs.3.pb": "A gorgeous place, invisible online: 610 followers, customers photographing it without ever tagging the account.",
      "cs.3.ac": "Feed identity, latte-art carousels, 3 local food-creator collabs, hashtag and location strategy, customer content reposted.",
      "cs.3.m1v": "610 → 6,900", "cs.3.m1l": "followers", "cs.3.m2v": "x5", "cs.3.m2l": "mentions & tags", "cs.3.m3v": "1,200", "cs.3.m3l": "profile visits/week",
      "cs.cta": "See the case studies",

      "why.eyebrow": "Why NOCTA",
      "why.title": "What makes us different.",
      "why.1.t": "One single contact", "why.1.d": "Not ten middlemen. The person who creates your content is the one who answers you.",
      "why.2.t": "Measured results", "why.2.d": "We track your numbers — followers, messages, bookings — and show them to you every month.",
      "why.3.t": "Venue specialists", "why.3.d": "We only do hospitality in the Paris region. We know your service constraints.",

      "faq.eyebrow": "FAQ",
      "faq.title": "What owners ask us.",
      "faq.1.q": "I don't have time for this.", "faq.1.a": "That's exactly the point. You give us the material once, we handle the rest — creation, publishing, replies, reviews. You approve in two minutes, or not at all.",
      "faq.2.q": "What do I need to provide?", "faq.2.a": "Your raw material: photos, phone videos, account access. We guide you on what to capture during service. No need to be a filmmaker — turning that into content is our job.",
      "faq.3.q": "Do you film on site?", "faq.3.a": "No. We're community managers, not a film crew. We work from your material and tell you exactly what to capture. Lighter, faster, and far cheaper than a production.",
      "faq.4.q": "How long before I see results?", "faq.4.a": "First content goes out within 10 days. For visibility and engagement, expect 4 to 8 weeks for a clear, lasting trend.",
      "faq.5.q": "Do you handle ads too?", "faq.5.a": "Yes: creative, targeting, tracking. The budget you invest on Meta/TikTok is on top, set together around your goals.",

      "cta.eyebrow": "Ready to delegate?",
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
      "pg.pricing.title": "One offer, all included.",
      "pg.work.eyebrow": "Work",
      "pg.work.title": "The content, in variations.",
      "pg.contact.eyebrow": "Contact",
      "pg.contact.title": "It starts with an audit of your socials."
    }
  };

  const STORE = "nocta-lang";
  function getLang() { try { return localStorage.getItem(STORE) || "fr"; } catch (e) { return "fr"; } }
  function setLang(lang) { try { localStorage.setItem(STORE, lang); } catch (e) {} apply(lang); }
  function apply(lang) {
    const d = DICT[lang] || DICT.fr;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n"); if (d[k] != null) el.innerHTML = d[k];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      el.getAttribute("data-i18n-attr").split("|").forEach(pair => {
        const [attr, k] = pair.split(":"); if (d[k] != null) el.setAttribute(attr, d[k]);
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
