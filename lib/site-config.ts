export const siteConfig = {
  clinic: {
    nameFr: "Clinique dentaire Bab Sebt",
    nameAr: "عيادة باب السبت لطب الأسنان",
    doctorName: "Dr. Redouane Belhamidi",
    tagline: "Soins dentaires d'excellence",
    taglineAr: "رعاية طب الأسنان المتميزة",
    description:
      "Une clinique dentaire premium où l'expertise rencontre le confort. Des soins personnalisés avec une technologie de pointe, au cœur de Blida.",
    heroHeadline: "Votre sourire mérite une expertise d'exception.",
    heroSubheadline:
      "Une prise en charge dentaire moderne, personnalisée et pensée pour votre confort.",
    heroHighlight: "20+ ans d'expérience",
  },
  location: {
    address: "FRFF+6VC, Blida 09000, Algérie",
    district: "Quartier Bab Sebt",
    city: "Blida",
    country: "Algérie",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.6!2d2.827!3d36.470!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDI4JzEyLjAiTiAywrA0OSc0MS4yIkU!5e0!3m2!1sfr!2sdz!4v1700000000000",
    mapLink: "https://www.google.com/maps/search/?api=1&query=FRFF%2B6VC+Blida+09000+Algeria",
  },
  contact: {
    phone: "[À compléter]",
    email: "[À compléter]",
    address: "FRFF+6VC, Blida 09000, Algérie",
    hours: "[Horaires à compléter]",
    mapUrl: "",
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    whatsapp: "",
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "La Clinique", href: "/clinique" },
    { label: "Le Dr. Belhamidi", href: "/docteur" },
    { label: "Services", href: "/services" },
    { label: "Technologies", href: "/technologies" },
    { label: "Avant / Après", href: "/avant-apres" },
    { label: "Témoignages", href: "/temoignages" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    primary: { label: "Prendre rendez-vous", href: "/contact" },
    secondary: { label: "Demander une estimation", href: "/contact" },
  },
  trust: [
    { value: "20+", label: "Années d'expérience" },
    { value: "5000+", label: "Patients satisfaits" },
    { value: "98%", label: "Taux de satisfaction" },
    { value: "9", label: "Traitements offerts" },
  ],
  treatments: [
    {
      slug: "implants-dentaires",
      name: "Implants Dentaires",
      shortDescription:
        "Remplacement durable et naturel des dents manquantes par implants de haute précision.",
      description:
        "Les implants dentaires offrent une solution permanente pour remplacer une ou plusieurs dents manquantes. Fixés directement dans l'os de la mâchoire, ils fonctionnent comme des racines naturelles et supportent une couronne, un bridge ou une prothèse. Le résultat est esthétique, stable et conçu pour durer de nombreuses années.",
      image:
        "https://images.pexels.com/photos/6502305/pexels-photo-6502305.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: "Bone",
      benefits: [
        "Solution permanente et durable",
        "Préservation de l'os de la mâchoire",
        "Apparence et fonction naturelles",
        "Aucune gêne lors de la mastication",
      ],
      details: [
        {
          title: "Consultation et planification",
          text: "Évaluation complète de votre santé bucco-dentaire et de la densité osseuse, avec imagerie 3D pour un placement précis de l'implant.",
        },
        {
          title: "Pose de l'implant",
          text: "Insertion de l'implant en titane dans l'os de la mâchoire sous anesthésie locale, dans un confort optimal.",
        },
        {
          title: "Pose de la couronne",
          text: "Après la phase d'ostéo-intégration, fixation d'une couronne sur mesure, parfaitement adaptée à votre sourire.",
        },
      ],
    },
    {
      slug: "couronnes-et-bridges-fixes",
      name: "Couronnes & Bridges Fixes",
      shortDescription:
        "Restauration durable des dents endommagées avec des couronnes et bridges sur mesure.",
      description:
        "Les couronnes et bridges fixes permettent de restaurer la forme, la fonction et l'esthétique de dents endommagées ou manquantes. Fabriqués sur mesure à partir de matériaux de haute qualité, ils s'intègrent harmonieusement à votre sourire naturel et offrent une résistance durable.",
      image:
        "https://images.pexels.com/photos/6627594/pexels-photo-6627594.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: "ShieldCheck",
      benefits: [
        "Restauration de la fonction masticatoire",
        "Résultat esthétique naturel",
        "Matériaux durables et biocompatibles",
        "Protection des dents affaiblies",
      ],
      details: [
        {
          title: "Préparation et empreinte",
          text: "Préparation minutieuse de la dent et prise d'empreinte numérique pour une restauration sur mesure.",
        },
        {
          title: "Fabrication sur mesure",
          text: "Confection de la couronne ou du bridge dans un matériau adapté à vos besoins esthétiques et fonctionnels.",
        },
        {
          title: "Pose et ajustement",
          text: "Fixation définitive après vérification de l'occlusion, du confort et de l'esthétique.",
        },
      ],
    },
    {
      slug: "protheses-amovibles",
      name: "Prothèses Amovibles",
      shortDescription:
        "Prothèses dentaires amovibles conçues pour un confort optimal et un sourire naturel.",
      description:
        "Les prothèses amovibles remplacent plusieurs dents manquantes ou une arcade complète. Conçues pour s'adapter confortablement à votre bouche, elles restaurent la fonction masticatoire et l'esthétique de votre sourire tout en étant faciles à retirer pour l'hygiène quotidienne.",
      image:
        "https://images.pexels.com/photos/6627592/pexels-photo-6627592.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: "Smile",
      benefits: [
        "Remplacement complet ou partiel",
        "Confort et stabilité optimisés",
        "Esthétique naturelle",
        "Entretien facile au quotidien",
      ],
      details: [
        {
          title: "Évaluation et conception",
          text: "Analyse de votre arcade et conception d'une prothèse adaptée à votre morphologie et à vos besoins.",
        },
        {
          title: "Ajustement et essayage",
          text: "Plusieurs essayages assurent un ajustement parfait et un confort optimal.",
        },
        {
          title: "Livraison et suivi",
          text: "Remise de la prothèse finale avec instructions d'entretien et suivi régulier.",
        },
      ],
    },
    {
      slug: "facettes-en-porcelaine",
      name: "Facettes en Porcelaine",
      shortDescription:
        "Facettes ultra-fines en porcelaine pour un sourire transformé et naturel.",
      description:
        "Les facettes en porcelaine sont de fines coquilles collées à la surface antérieure des dents pour corriger la couleur, la forme ou l'alignement. Elles offrent une transformation esthétique remarquable avec un résultat naturel et durable.",
      image:
        "https://images.pexels.com/photos/6627571/pexels-photo-6627571.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: "Sparkles",
      benefits: [
        "Transformation esthétique immédiate",
        "Résultat naturel et lumineux",
        "Conservation maximale de la dent naturelle",
        "Résistance et durabilité",
      ],
      details: [
        {
          title: "Consultation esthétique",
          text: "Analyse de votre sourire et conception d'un projet personnalisé avec visualisation du résultat.",
        },
        {
          title: "Préparation et empreinte",
          text: "Préparation minimale des dents et prise d'empreinte numérique pour la fabrication des facettes.",
        },
        {
          title: "Pose définitive",
          text: "Collage précis des facettes avec vérification de l'esthétique et de l'occlusion.",
        },
      ],
    },
    {
      slug: "hollywood-smile",
      name: "Hollywood Smile",
      shortDescription:
        "Transformation complète du sourire avec une approche esthétique premium.",
      description:
        "Le Hollywood Smile est une approche globale de transformation du sourire combinant facettes, blanchiment et harmonisation esthétique. Le résultat est un sourire éclatant, naturel et parfaitement adapté à votre visage.",
      image:
        "https://images.pexels.com/photos/3762402/pexels-photo-3762402.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: "Star",
      benefits: [
        "Sourire harmonieux et éclatant",
        "Approche personnalisée du design du sourire",
        "Résultat naturel et durable",
        "Harmonisation avec votre visage",
      ],
      details: [
        {
          title: "Design du sourire",
          text: "Analyse faciale et conception d'un sourire sur mesure, adapté à votre morphologie et à vos attentes.",
        },
        {
          title: "Réalisation",
          text: "Combinaison de facettes, de blanchiment et de soins esthétiques pour un résultat optimal.",
        },
        {
          title: "Résultat final",
          text: "Un sourire transformé, naturel et harmonieux, avec un suivi pour garantir la durabilité.",
        },
      ],
    },
    {
      slug: "orthodontie",
      name: "Orthodontie",
      shortDescription:
        "Correction de l'alignement dentaire pour enfants et adultes avec des solutions modernes.",
      description:
        "L'orthodontie corrige la position des dents et l'alignement de la mâchoire pour améliorer l'esthétique et la fonction. Des solutions adaptées sont proposées pour les enfants comme pour les adultes.",
      image:
        "https://images.pexels.com/photos/6528861/pexels-photo-6528861.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: "AlignCenter",
      benefits: [
        "Correction de l'alignement dentaire",
        "Amélioration de la fonction masticatoire",
        "Solutions pour enfants et adultes",
        "Suivi personnalisé du traitement",
      ],
      details: [
        {
          title: "Diagnostic orthodontique",
          text: "Évaluation complète de l'alignement et plan de traitement personnalisé.",
        },
        {
          title: "Pose de l'appareil",
          text: "Mise en place de l'appareil orthodontique adapté à votre cas et à votre âge.",
        },
        {
          title: "Suivi et ajustements",
          text: "Ajustements réguliers pour un résultat optimal dans les meilleurs délais.",
        },
      ],
    },
    {
      slug: "aligneurs-invisibles",
      name: "Aligneurs Invisibles",
      shortDescription:
        "Alignement discret et confortable avec des gouttières transparentes sur mesure.",
      description:
        "Les aligneurs invisibles offrent une alternative discrète aux bagues traditionnelles. Ces gouttières transparentes, fabriquées sur mesure, corrigent l'alignement de vos dents en toute discrétion, avec un confort optimal et sans contrainte alimentaire.",
      image:
        "https://images.pexels.com/photos/28407749/pexels-photo-28407749.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: "MoveHorizontal",
      benefits: [
        "Traitement discret et transparent",
        "Confort optimal sans métal",
        "Amovible pour manger et se brosser",
        "Résultat prévisible par planification numérique",
      ],
      details: [
        {
          title: "Scan numérique",
          text: "Empreinte numérique 3D de votre arcade pour concevoir un traitement sur mesure.",
        },
        {
          title: "Fabrication des aligneurs",
          text: "Série de gouttières transparentes fabriquées sur mesure pour déplacer progressivement vos dents.",
        },
        {
          title: "Suivi du traitement",
          text: "Port des aligneurs jour et nuit, avec remplacement régulier et suivi de la progression.",
        },
      ],
    },
    {
      slug: "soins-dentaires-generaux",
      name: "Soins Dentaires Généraux",
      shortDescription:
        "Soins préventifs et curatifs pour préserver la santé de vos dents et de vos gencives.",
      description:
        "Les soins dentaires généraux couvrent l'ensemble des traitements préventifs et curatifs nécessaires au maintien d'une bonne santé bucco-dentaire : consultations, détartrage, traitement des caries, soins des gencives et conseils d'hygiène personnalisés.",
      image:
        "https://images.pexels.com/photos/5622251/pexels-photo-5622251.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: "Stethoscope",
      benefits: [
        "Prévention et dépistage régulier",
        "Traitement des caries et des gencives",
        "Détartrage et polissage professionnel",
        "Conseils d'hygiène personnalisés",
      ],
      details: [
        {
          title: "Bilan bucco-dentaire",
          text: "Examen complet de votre cavité buccale avec radiographies si nécessaire.",
        },
        {
          title: "Soins et traitement",
          text: "Traitement des caries, détartrage, et soins des gencives selon vos besoins.",
        },
        {
          title: "Prévention et suivi",
          text: "Conseils d'hygiène sur mesure et suivi régulier pour préserver votre santé dentaire.",
        },
      ],
    },
    {
      slug: "blanchiment-dentaire",
      name: "Blanchiment Dentaire",
      shortDescription:
        "Éclaircissement professionnel de vos dents pour un sourire plus lumineux.",
      description:
        "Le blanchiment dentaire professionnel permet d'éclaircir la teinte de vos dents de plusieurs nuances, en toute sécurité. Réalisé sous contrôle du praticien, il offre un résultat visible et durable tout en préservant l'émail de vos dents.",
      image:
        "https://images.pexels.com/photos/5622271/pexels-photo-5622271.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: "Sun",
      benefits: [
        "Résultat visible et naturel",
        "Procédure sûre et contrôlée",
        "Préservation de l'émail",
        "Effet durable avec entretien",
      ],
      details: [
        {
          title: "Évaluation préalable",
          text: "Examen de l'état de vos dents et de vos gencives pour un blanchiment en toute sécurité.",
        },
        {
          title: "Traitement professionnel",
          text: "Application d'un agent éclaircissant sous contrôle, avec protection des gencives.",
        },
        {
          title: "Résultat et entretien",
          text: "Un sourire plus lumineux, avec des conseils pour prolonger l'effet du blanchiment.",
        },
      ],
    },
  ],
  technologies: [
    {
      title: "3Shape TRIOS — Scannage Intraoral Numérique",
      description:
        "Le scanner intraoral 3Shape TRIOS remplace les empreintes traditionnelles en pâte par une capture numérique 3D en couleur de votre cavité buccale. Un petit scanner est passé sur vos dents pour créer un modèle numérique précis en quelques minutes — sans gêne, sans goût désagréable, et sans attendre le durcissement d'un matériau d'empreinte.",
      image:
        "https://images.pexels.com/photos/6812508/pexels-photo-6812508.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        {
          title: "Empreintes numériques",
          text: "Adieu aux empreintes en pâte inconfortables. Le scanner capture une image 3D précise de vos dents en quelques minutes, dans un confort total.",
        },
        {
          title: "Confort du patient",
          text: "Pas de goût désagréable, pas de sensation d'étouffement. Le scannage est rapide, non invasif et adapté même aux patients les plus sensibles.",
        },
        {
          title: "Planification moderne",
          text: "Les données numériques permettent une planification de traitement précise, avec visualisation du résultat avant même de commencer.",
        },
        {
          title: "Flux numérique complet",
          text: "Du scan à la fabrication des restaurations, tout le circuit est numérique — plus rapide, plus précis, et avec moins d'allers-retours.",
        },
      ],
    },
    {
      title: "Imagerie Numérique",
      description:
        "L'imagerie numérique permet un diagnostic précis avec une exposition aux rayonnements réduite. Les radiographies numériques sont instantanées, affichées sur écran, et facilitent l'explication de votre traitement.",
      image:
        "https://images.pexels.com/photos/5355731/pexels-photo-5355731.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [],
    },
    {
      title: "Conception 3D et Fabrication Numérique",
      description:
        "La conception assistée par ordinateur et la fabrication numérique permettent de créer des restaurations sur mesure — couronnes, facettes, aligneurs — avec une précision et une qualité esthétique inégalées.",
      image:
        "https://images.pexels.com/photos/7788367/pexels-photo-7788367.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [],
    },
  ],
  sterilization: {
    title: "Hygiène & Stérilisation",
    description:
      "La sécurité de nos patients est une priorité absolue. Nous appliquons des protocoles de stérilisation rigoureux à chaque étape, dans le respect des normes les plus exigeantes.",
    image:
      "https://images.pexels.com/photos/5622274/pexels-photo-5622274.jpeg?auto=compress&cs=tinysrgb&w=1200",
    steps: [
      {
        title: "Désinfection des instruments",
        text: "Chaque instrument est nettoyé et désinfecté selon un protocole strict après chaque utilisation.",
      },
      {
        title: "Stérilisation en autoclave",
        text: "Les instruments sont stérilisés à haute température et haute pression pour éliminer tout micro-organisme.",
      },
      {
        title: "Emballage et traçabilité",
        text: "Chaque set d'instruments est emballé individuellement et tracé pour garantir sa stérilité.",
      },
      {
        title: "Désinfection des surfaces",
        text: "Les surfaces et équipements sont désinfectés entre chaque patient, sans exception.",
      },
    ],
  },
  patientJourney: [
    {
      step: "01",
      title: "Consultation",
      text: "Premier rendez-vous pour faire connaissance, écouter vos besoins et établir un bilan complet de votre santé bucco-dentaire.",
    },
    {
      step: "02",
      title: "Plan de traitement",
      text: "Présentation d'un plan personnalisé, clair et transparent, avec explication de chaque étape et des options disponibles.",
    },
    {
      step: "03",
      title: "Soins",
      text: "Réalisation des soins dans un environnement moderne et confortable, avec une attention constante à votre bien-être.",
    },
    {
      step: "04",
      title: "Suivi",
      text: "Accompagnement et suivi régulier pour garantir la durabilité des résultats et préserver votre santé dentaire.",
    },
  ],
  testimonials: [
    {
      name: "[Nom du patient]",
      text: "[Témoignage du patient à compléter — publié par la clinique.]",
      treatment: "[Traitement]",
      rating: 5,
    },
    {
      name: "[Nom du patient]",
      text: "[Témoignage du patient à compléter — publié par la clinique.]",
      treatment: "[Traitement]",
      rating: 5,
    },
    {
      name: "[Nom du patient]",
      text: "[Témoignage du patient à compléter — publié par la clinique.]",
      treatment: "[Traitement]",
      rating: 5,
    },
  ],
  beforeAfter: [
    {
      title: "Transformation du sourire",
      treatment: "Facettes en porcelaine",
      beforeImage: "[Image avant à compléter]",
      afterImage: "[Image après à compléter]",
    },
    {
      title: "Blanchiment et restauration",
      treatment: "Blanchiment dentaire",
      beforeImage: "[Image avant à compléter]",
      afterImage: "[Image après à compléter]",
    },
    {
      title: "Alignement et esthétique",
      treatment: "Aligneurs invisibles",
      beforeImage: "[Image avant à compléter]",
      afterImage: "[Image après à compléter]",
    },
  ],
  faq: [
    {
      question: "Comment prendre rendez-vous ?",
      answer:
        "Vous pouvez prendre rendez-vous en nous contactant par téléphone, par e-mail, ou via le formulaire de contact sur notre site. Nous vous proposerons le premier créneau disponible.",
    },
    {
      question: "Quels sont les horaires de la clinique ?",
      answer:
        "Les horaires seront communiqués ultérieurement. N'hésitez pas à nous contacter pour connaître nos disponibilités actuelles.",
    },
    {
      question: "La clinique accepte-t-elle les urgences dentaires ?",
      answer:
        "Nous faisons notre possible pour accueillir les urgences dentaires dans les meilleurs délais. Contactez-nous directement pour évaluer la situation et planifier une consultation rapide.",
    },
    {
      question: "Combien de temps dure une première consultation ?",
      answer:
        "Une première consultation dure généralement entre 30 et 45 minutes. Elle inclut un examen complet, des radiographies si nécessaire, et une discussion sur vos besoins et vos attentes.",
    },
    {
      question: "Les soins dentaires sont-ils douloureux ?",
      answer:
        "Notre priorité est votre confort. Nous utilisons des techniques modernes et une anesthésie locale pour garantir des soins indolores. Le scanner intraoral remplace les empreintes traditionnelles en pâte, ce qui améliore considérablement votre confort.",
    },
    {
      question: "Quels modes de paiement acceptez-vous ?",
      answer:
        "Les modes de paiement seront communiqués lors de votre consultation. Nous restons à votre disposition pour toute question à ce sujet.",
    },
    {
      question: "Proposez-vous des facilités de paiement ?",
      answer:
        "Les possibilités de paiement échelonné seront discutées lors de l'établissement de votre plan de traitement.",
    },
    {
      question: "À quelle fréquence faut-il consulter ?",
      answer:
        "Un contrôle annuel est recommandé pour la plupart des patients. Certains cas nécessitent un suivi plus rapproché, qui sera défini avec votre praticien.",
    },
  ],
  doctor: {
    name: "Dr. Redouane Belhamidi",
    role: "Chirurgien-dentiste",
    intro:
      "Le Dr. Redouane Belhamidi dirige la Clinique dentaire Bab Sebt avec une philosophie simple : allier expertise, technologie moderne et approche profondément humaine pour offrir à chaque patient des soins d'exception.",
    experience: "20+ ans d'expérience",
    image:
      "https://images.pexels.com/photos/37458046/pexels-photo-37458046.jpeg?auto=compress&cs=tinysrgb&w=1000",
    imageSecondary:
      "https://images.pexels.com/photos/37458054/pexels-photo-37458054.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      {
        title: "20+ ans d'expérience",
        text: "Plus de vingt ans au service de la santé dentaire des patients de Blida et de ses environs.",
      },
      {
        title: "Soins personnalisés",
        text: "Chaque patient est unique. Le plan de traitement est adapté à vos besoins, à votre confort et à vos attentes.",
      },
      {
        title: "Technologie moderne",
        text: "Investissement continu dans des équipements de pointe pour des soins plus précis et plus confortables.",
      },
      {
        title: "Attention au détail",
        text: "Un soin méticuleux apporté à chaque étape, du diagnostic au résultat final, pour une qualité irréprochable.",
      },
    ],
    note: "Les diplômes, certifications et spécialités du Dr. Belhamidi seront communiqués ultérieurement.",
  },
  clinicAbout: {
    title: "La Clinique",
    intro:
      "La Clinique dentaire Bab Sebt est un espace de soins moderne et accueillant, situé dans le quartier de Bab Sebt à Blida. Sous la direction du Dr. Redouane Belhamidi, la clinique combine expertise médicale, technologie de pointe et approche centrée sur le patient pour offrir une expérience dentaire d'exception.",
    values: [
      {
        icon: "ShieldCheck",
        title: "Sécurité & Hygiène",
        text: "Des protocoles de stérilisation rigoureux et un environnement parfaitement aseptisé pour votre tranquillité d'esprit.",
      },
      {
        icon: "HeartHandshake",
        title: "Approche Humaine",
        text: "Une écoute attentive et un accompagnement personnalisé à chaque étape de votre parcours de soin.",
      },
      {
        icon: "Microscope",
        title: "Technologie de Pointe",
        text: "Des équipements modernes, dont le scanner intraoral 3Shape TRIOS, pour des diagnostics précis et des soins confortables.",
      },
      {
        icon: "Award",
        title: "Excellence Clinique",
        text: "Un engagement constant vers la qualité, du premier rendez-vous au suivi post-traitement.",
      },
    ],
    image:
      "https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageSecondary:
      "https://images.pexels.com/photos/6809639/pexels-photo-6809639.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
} as const;
