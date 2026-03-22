/**
 * i18n.js — Maud Fasel, maudsvoice.com
 *
 * Translation strings for all 4 languages.
 * Keys are applied to elements with data-i18n="key" (text),
 * data-i18n-html="key" (innerHTML), or data-i18n-placeholder="key" (placeholder attr).
 *
 * HOW TO UPDATE TRANSLATIONS:
 * Find the key in the 'fr', 'de', or 'it' block below and change the value.
 * The 'en' block is the reference — add new keys there first, then translate below.
 *
 * To add body text translation later:
 * 1. Add the key + English text to the 'en' block
 * 2. Add translated versions to fr/de/it blocks
 * 3. Add data-i18n="your.key" to the HTML element
 */
window.I18N = {

  /* ── English (default) ──────────────────────────────────────────────────── */
  en: {
    /* Homepage hero headline */
    'hero.h1': 'In the studio since 2004.<br>Four languages,<br><em>one voice.</em>',

    /* Navigation */
    'nav.home':     'Home',
    'nav.demos':    'Demos',
    'nav.about':    'About',
    'nav.services': 'Services',
    'nav.clients':  'Clients',
    'nav.contact':  'Contact',

    /* Demos page */
    'demos.label':    'Listen',
    'demos.h1':       'Demo Library',
    'demos.subtitle': 'Browse by language or category. Each demo is a real project recorded for a Swiss client.',
    'demos.cta.h2':   'Need a custom sample?',
    'demos.cta.text': "Send me your script and I'll record a short audition — no obligation.",
    'demos.cta.btn':  'Get in Touch',

    /* Demo filter tabs */
    'filter.all': 'All',
    'filter.en':  'English',
    'filter.fr':  'Français',
    'filter.de':  'Deutsch',
    'filter.it':  'Italiano',

    /* Demo card category labels */
    'cat.radio':       'Radio Commercial',
    'cat.tv':          'TV Commercial',
    'cat.online':      'Online / Digital Ad',
    'cat.corporate':   'Corporate Narration',
    'cat.brand':       'Brand Film',
    'cat.elearning':   'E-learning',
    'cat.ivr':         'IVR / Announcement',
    'cat.documentary': 'Documentary',

    /* About page */
    'about.label':    'About',
    'about.h1':       'Maud Fasel',
    'about.subtitle': 'Multilingual Voiceover Artist · Lausanne, Switzerland',
    'about.h2':       'The story behind the voice.',
    'about.cta.h2':   "Let's work together.",
    'about.cta.text': "Tell me about your project and I'll get back to you within 24 hours.",
    'about.cta.btn1': 'Get in Touch',
    'about.cta.btn2': 'Listen to Demos',

    /* Services page */
    'services.label':       'What I offer',
    'services.h1':          'Services',
    'services.subtitle':    'Radio, TV, corporate and brand narration in English, French, German and Italian.',
    'services.bylang.h2':   'By language',
    'services.bylang.intro': "Each language version is recorded with full native-level fluency and genuine cultural familiarity — not adapted from another language, but prepared from the source.",
    'services.cta.h2':      'Have a project in mind?',
    'services.cta.text':    "Tell me what you need and I'll let you know if I'm the right fit.",
    'services.cta.btn1':    'Get in Touch',
    'services.cta.btn2':    'Listen to Demos',

    /* Clients page */
    'clients.label':    'Trust',
    'clients.h1':       'Clients',
    'clients.subtitle': 'Brands and organisations across Switzerland, in the language their project required.',
    'clients.cta.h2':   'Get in touch.',
    'clients.cta.text': "If you have a project in mind, I'd be glad to hear about it.",
    'clients.cta.btn':  'Get in Touch',

    /* Contact page */
    'contact.label':          'Get in touch',
    'contact.h1':             "Let's talk.",
    'contact.subtitle':       "Have a project in mind? Send me a message and I'll get back to you within 24 hours.",
    'contact.form.h2':        'Send a message',
    'contact.form.name':      'Your name',
    'contact.form.name.ph':   'First and last name',
    'contact.form.email':     'Email address',
    'contact.form.email.ph':  'you@company.com',
    'contact.form.type':      'Project type',
    'contact.form.type.ph':   'Select a category\u2026',
    'contact.form.lang':      'Language needed',
    'contact.form.lang.ph':   'Select language\u2026',
    'contact.form.message':   'Message',
    'contact.form.msg.ph':    'Tell me about your project, timeline, and any other relevant details\u2026',
    'contact.form.btn':       'Send Message',
    'contact.direct.h2':      'Or reach me directly',

    /* Footer */
    'footer.tagline': 'Multilingual voiceover artist.\nLausanne, Switzerland.',
  },

  /* ── Français ───────────────────────────────────────────────────────────── */
  fr: {
    'hero.h1': 'En studio depuis 2004.<br>Quatre langues,<br><em>une voix.</em>',
    'nav.home':     'Accueil',
    'nav.demos':    'D\u00e9mos',
    'nav.about':    '\u00c0 propos',
    'nav.services': 'Services',
    'nav.clients':  'Clients',
    'nav.contact':  'Contact',

    'demos.label':    '\u00c9couter',
    'demos.h1':       'Biblioth\u00e8que de d\u00e9mos',
    'demos.subtitle': 'Filtrez par langue ou cat\u00e9gorie. Chaque d\u00e9mo est un projet r\u00e9el enregistr\u00e9 pour un client suisse.',
    'demos.cta.h2':   'Besoin d\u2019un \u00e9chantillon personnalis\u00e9\u00a0?',
    'demos.cta.text': 'Envoyez-moi votre texte et j\u2019enregistrerai une courte audition \u2014 sans engagement.',
    'demos.cta.btn':  'Me contacter',

    'filter.all': 'Tout',
    'filter.en':  'English',
    'filter.fr':  'Fran\u00e7ais',
    'filter.de':  'Deutsch',
    'filter.it':  'Italiano',

    'cat.radio':       'Publicit\u00e9 radio',
    'cat.tv':          'Publicit\u00e9 TV',
    'cat.online':      'Annonce en ligne',
    'cat.corporate':   'Narration corporate',
    'cat.brand':       'Film de marque',
    'cat.elearning':   'E-learning',
    'cat.ivr':         'SVI\u00a0/ Annonce',
    'cat.documentary': 'Documentaire',

    'about.label':    '\u00c0 propos',
    'about.h1':       'Maud Fasel',
    'about.subtitle': 'Com\u00e9dienne de voix multilingue \u00b7 Lausanne, Suisse',
    'about.h2':       'L\u2019histoire derri\u00e8re la voix.',
    'about.cta.h2':   'Travaillons ensemble.',
    'about.cta.text': 'Parlez-moi de votre projet et je vous r\u00e9pondrai sous 24 heures.',
    'about.cta.btn1': 'Me contacter',
    'about.cta.btn2': '\u00c9couter les d\u00e9mos',

    'services.label':        'Ce que je propose',
    'services.h1':           'Services',
    'services.subtitle':     'Radio, TV, narration corporate et de marque en anglais, fran\u00e7ais, allemand et italien.',
    'services.bylang.h2':    'Par langue',
    'services.bylang.intro': 'Chaque version linguistique est enregistr\u00e9e avec une ma\u00eetrise totale et une compr\u00e9hension culturelle authentique \u2014 pas une traduction, mais une pr\u00e9paration \u00e0 partir de la source.',
    'services.cta.h2':       'Un projet en t\u00eate\u00a0?',
    'services.cta.text':     'Dites-moi ce dont vous avez besoin et je vous indiquerai si je suis la bonne personne.',
    'services.cta.btn1':     'Me contacter',
    'services.cta.btn2':     '\u00c9couter les d\u00e9mos',

    'clients.label':    'Confiance',
    'clients.h1':       'Clients',
    'clients.subtitle': 'Marques et organisations en Suisse, dans la langue de leur projet.',
    'clients.cta.h2':   'Prendre contact.',
    'clients.cta.text': 'Si vous avez un projet en t\u00eate, je suis disponible pour en discuter.',
    'clients.cta.btn':  'Me contacter',

    'contact.label':         'Prendre contact',
    'contact.h1':            'Parlons-en.',
    'contact.subtitle':      'Un projet en t\u00eate\u00a0? Envoyez-moi un message et je vous r\u00e9pondrai sous 24 heures.',
    'contact.form.h2':       'Envoyer un message',
    'contact.form.name':     'Votre nom',
    'contact.form.name.ph':  'Pr\u00e9nom et nom',
    'contact.form.email':    'Adresse e-mail',
    'contact.form.email.ph': 'vous@soci\u00e9t\u00e9.com',
    'contact.form.type':     'Type de projet',
    'contact.form.type.ph':  'S\u00e9lectionner une cat\u00e9gorie\u2026',
    'contact.form.lang':     'Langue requise',
    'contact.form.lang.ph':  'S\u00e9lectionner une langue\u2026',
    'contact.form.message':  'Message',
    'contact.form.msg.ph':   'Parlez-moi de votre projet, du calendrier et de tout autre d\u00e9tail pertinent\u2026',
    'contact.form.btn':      'Envoyer',
    'contact.direct.h2':     'Ou contactez-moi directement',

    'footer.tagline': 'Com\u00e9dienne de voix multilingue.\nLausanne, Suisse.',
  },

  /* ── Deutsch ────────────────────────────────────────────────────────────── */
  de: {
    'hero.h1': 'Seit 2004 im Studio.<br>Vier Sprachen,<br><em>eine Stimme.</em>',
    'nav.home':     'Startseite',
    'nav.demos':    'Demos',
    'nav.about':    '\u00dcber mich',
    'nav.services': 'Leistungen',
    'nav.clients':  'Kunden',
    'nav.contact':  'Kontakt',

    'demos.label':    'Anh\u00f6ren',
    'demos.h1':       'Demo-Bibliothek',
    'demos.subtitle': 'Nach Sprache oder Kategorie filtern. Jede Demo stammt aus einem echten Projekt f\u00fcr einen Schweizer Kunden.',
    'demos.cta.h2':   'Eigenes Beispiel gew\u00fcnscht?',
    'demos.cta.text': 'Schicken Sie mir Ihren Text und ich nehme eine kurze H\u00f6rprobe auf \u2014 unverbindlich.',
    'demos.cta.btn':  'Kontakt aufnehmen',

    'filter.all': 'Alle',
    'filter.en':  'English',
    'filter.fr':  'Fran\u00e7ais',
    'filter.de':  'Deutsch',
    'filter.it':  'Italiano',

    'cat.radio':       'Radiowerbung',
    'cat.tv':          'TV-Werbung',
    'cat.online':      'Online-Anzeige',
    'cat.corporate':   'Unternehmensnarration',
    'cat.brand':       'Markenfilm',
    'cat.elearning':   'E-Learning',
    'cat.ivr':         'IVR\u00a0/ Ansage',
    'cat.documentary': 'Dokumentarfilm',

    'about.label':    '\u00dcber mich',
    'about.h1':       'Maud Fasel',
    'about.subtitle': 'Mehrsprachige Synchronsprecherin \u00b7 Lausanne, Schweiz',
    'about.h2':       'Die Geschichte hinter der Stimme.',
    'about.cta.h2':   'Ein Projekt in Planung?',
    'about.cta.text': 'Erz\u00e4hlen Sie mir von Ihrem Projekt und ich melde mich innerhalb von 24 Stunden.',
    'about.cta.btn1': 'Kontakt aufnehmen',
    'about.cta.btn2': 'Demos anh\u00f6ren',

    'services.label':        'Leistungsangebot',
    'services.h1':           'Leistungen',
    'services.subtitle':     'Radio, TV, Unternehmens- und Markennarration auf Englisch, Franz\u00f6sisch, Deutsch und Italienisch.',
    'services.bylang.h2':    'Nach Sprache',
    'services.bylang.intro': 'Jede Sprachversion wird mit vollst\u00e4ndiger Muttersprachkompetenz und echter kultureller Vertrautheit aufgenommen \u2014 nicht aus einer anderen Sprache adaptiert, sondern aus dem Original vorbereitet.',
    'services.cta.h2':       'Ein Projekt in Planung?',
    'services.cta.text':     'Sagen Sie mir, was Sie brauchen, und ich lasse Sie wissen, ob ich die richtige Person bin.',
    'services.cta.btn1':     'Kontakt aufnehmen',
    'services.cta.btn2':     'Demos anh\u00f6ren',

    'clients.label':    'Vertrauen',
    'clients.h1':       'Kunden',
    'clients.subtitle': 'Marken und Organisationen in der Schweiz, in der Sprache ihres Projekts.',
    'clients.cta.h2':   'Kontakt aufnehmen.',
    'clients.cta.text': 'Wenn Sie ein Projekt in Planung haben, stehe ich gern f\u00fcr ein erstes Gespr\u00e4ch bereit.',
    'clients.cta.btn':  'Kontakt aufnehmen',

    'contact.label':         'Kontakt',
    'contact.h1':            'Sprechen wir.',
    'contact.subtitle':      'Ein Projekt in Planung? Schreiben Sie mir und ich melde mich innerhalb von 24 Stunden.',
    'contact.form.h2':       'Nachricht senden',
    'contact.form.name':     'Ihr Name',
    'contact.form.name.ph':  'Vor- und Nachname',
    'contact.form.email':    'E-Mail-Adresse',
    'contact.form.email.ph': 'sie@unternehmen.com',
    'contact.form.type':     'Projektart',
    'contact.form.type.ph':  'Kategorie ausw\u00e4hlen\u2026',
    'contact.form.lang':     'Ben\u00f6tigte Sprache',
    'contact.form.lang.ph':  'Sprache ausw\u00e4hlen\u2026',
    'contact.form.message':  'Nachricht',
    'contact.form.msg.ph':   'Erz\u00e4hlen Sie mir von Ihrem Projekt, dem Zeitplan und weiteren relevanten Details\u2026',
    'contact.form.btn':      'Senden',
    'contact.direct.h2':     'Oder erreichen Sie mich direkt',

    'footer.tagline': 'Mehrsprachige Synchronsprecherin.\nLausanne, Schweiz.',
  },

  /* ── Italiano ───────────────────────────────────────────────────────────── */
  it: {
    'hero.h1': 'In studio dal 2004.<br>Quattro lingue,<br><em>una voce.</em>',
    'nav.home':     'Home',
    'nav.demos':    'Demo',
    'nav.about':    'Chi sono',
    'nav.services': 'Servizi',
    'nav.clients':  'Clienti',
    'nav.contact':  'Contatti',

    'demos.label':    'Ascolta',
    'demos.h1':       'Libreria demo',
    'demos.subtitle': 'Filtra per lingua o categoria. Ogni demo \u00e8 un progetto reale registrato per un cliente svizzero.',
    'demos.cta.h2':   'Hai bisogno di un campione personalizzato?',
    'demos.cta.text': 'Mandami il tuo testo e registrer\u00f2 una breve audizione \u2014 senza impegno.',
    'demos.cta.btn':  'Contattami',

    'filter.all': 'Tutti',
    'filter.en':  'English',
    'filter.fr':  'Fran\u00e7ais',
    'filter.de':  'Deutsch',
    'filter.it':  'Italiano',

    'cat.radio':       'Spot radiofonico',
    'cat.tv':          'Spot TV',
    'cat.online':      'Annuncio online',
    'cat.corporate':   'Narrazione aziendale',
    'cat.brand':       'Film di marca',
    'cat.elearning':   'E-learning',
    'cat.ivr':         'IVR\u00a0/ Annuncio',
    'cat.documentary': 'Documentario',

    'about.label':    'Chi sono',
    'about.h1':       'Maud Fasel',
    'about.subtitle': 'Doppiatrice multilingue \u00b7 Losanna, Svizzera',
    'about.h2':       'La storia dietro la voce.',
    'about.cta.h2':   'Hai un progetto in mente?',
    'about.cta.text': 'Parlami del tuo progetto e ti risponder\u00f2 entro 24 ore.',
    'about.cta.btn1': 'Contattami',
    'about.cta.btn2': 'Ascolta le demo',

    'services.label':        'Cosa offro',
    'services.h1':           'Servizi',
    'services.subtitle':     'Radio, TV, narrazione aziendale e di marca in inglese, francese, tedesco e italiano.',
    'services.bylang.h2':    'Per lingua',
    'services.bylang.intro': "Ogni versione linguistica \u00e8 registrata con piena padronanza madrelingua e autentica familiarit\u00e0 culturale \u2014 non adattata da un'altra lingua, ma preparata dalla fonte.",
    'services.cta.h2':       'Hai un progetto in mente?',
    'services.cta.text':     'Dimmi di cosa hai bisogno e ti dir\u00f2 se sono la persona giusta.',
    'services.cta.btn1':     'Contattami',
    'services.cta.btn2':     'Ascolta le demo',

    'clients.label':    'Fiducia',
    'clients.h1':       'Clienti',
    'clients.subtitle': 'Marchi e organizzazioni in Svizzera, nella lingua del loro progetto.',
    'clients.cta.h2':   'Mettiamoci in contatto.',
    'clients.cta.text': 'Se hai un progetto in mente, sono disponibile a parlarne.',
    'clients.cta.btn':  'Contattami',

    'contact.label':         'Contatti',
    'contact.h1':            'Parliamone.',
    'contact.subtitle':      'Hai un progetto in mente? Mandami un messaggio e ti risponder\u00f2 entro 24 ore.',
    'contact.form.h2':       'Invia un messaggio',
    'contact.form.name':     'Il tuo nome',
    'contact.form.name.ph':  'Nome e cognome',
    'contact.form.email':    'Indirizzo e-mail',
    'contact.form.email.ph': 'tu@azienda.com',
    'contact.form.type':     'Tipo di progetto',
    'contact.form.type.ph':  'Seleziona una categoria\u2026',
    'contact.form.lang':     'Lingua richiesta',
    'contact.form.lang.ph':  'Seleziona una lingua\u2026',
    'contact.form.message':  'Messaggio',
    'contact.form.msg.ph':   'Parlami del tuo progetto, della tempistica e di altri dettagli rilevanti\u2026',
    'contact.form.btn':      'Invia',
    'contact.direct.h2':     'Oppure contattami direttamente',

    'footer.tagline': 'Doppiatrice multilingue.\nLosanna, Svizzera.',
  }
};
