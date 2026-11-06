// Textos de los diálogos y sus controles. Las páginas se traducen en HTML estático.
const SITE_TRANSLATIONS = {
  es: {
    details: {
      turin: {
        title: "La Síndone de Turín",
        text: "La Síndone es un lienzo de lino conservado en Turín. El CES presenta su descripción, los caracteres de su imagen y los estudios realizados sobre ella.",
        url: "https://linteum.com/la-sindone-de-turin.php",
      },
      oviedo: {
        title: "El Sudario de Oviedo",
        text: "El Santo Sudario se conserva en la Catedral de Oviedo. El EDICES, equipo de investigación del CES, ha realizado estudios sobre este lienzo.",
        url: "https://linteum.com/el-santo-sudario-de-oviedo.php",
      },
      caliz: {
        title: "El Santo Cáliz de Valencia",
        text: "La Catedral de Valencia conserva la copa que la tradición vincula con la Última Cena. La web del CES incluye una presentación y material audiovisual sobre el Santo Cáliz.",
        url: "https://linteum.com/el-santo-caliz-de-valencia.php",
      },
      socios: {
        title: "Un espacio para los socios",
        text: "En esta propuesta solo se ha creado la portada. El acceso privado no está conectado y aquí no se solicitan ni se guardan contraseñas. Puede consultar la información para socios en la web actual.",
        url: "https://linteum.com/ces-socios.php",
      },
      revista: {
        title: "Línteum, la revista del CES",
        text: "Línteum es la revista del CES. Publica trabajos originales y recoge textos de prensa sobre la Síndone y otras reliquias relacionadas.",
        url: "https://linteum.com/solicitud-suscriptor-linteum.php",
      },
      fotografia: {
        title: "La Síndone de Turín",
        text: "Detalle del rostro en el lienzo de la Síndone de Turín.",
        image: "assets/sindone-ces.jpg",
        url: "https://linteum.com/ces-quienes-somos.php",
      },
      acerca: {
        title: "Información del sitio",
        text: "Demostración local de una nueva portada del Centro Español de Sindonología. Las fotografías y el sello proceden de los recursos publicados en linteum.com. Solo se ha desarrollado el inicio.",
        extra:
          "El sitio no utiliza cookies, analítica ni formularios de recogida de datos. Puede recorrerlo con el teclado y ampliar el texto desde su navegador.",
        url: "https://linteum.com/",
      },
    },
    interface: {
      fullImage: "Rostro de la Síndone de Turín, imagen completa.",
      photoLink: "Conocer la Síndone en el CES ↗",
      websiteLink: "Consultar la web actual ↗",
      previewNote:
        "Vista previa: las páginas interiores todavía no se han rediseñado. El siguiente enlace abre la web actual en otra pestaña.",
    },
  },
  en: {
    details: {
      turin: {
        title: "The Shroud of Turin",
        text: "The Shroud is a linen cloth preserved in Turin. The CES presents its description, the characteristics of its image and the studies carried out on it.",
      },
      oviedo: {
        title: "The Sudarium of Oviedo",
        text: "The Holy Sudarium is preserved at Oviedo Cathedral. EDICES, the CES research team, has carried out studies on this cloth.",
      },
      caliz: {
        title: "The Holy Chalice of Valencia",
        text: "Valencia Cathedral preserves the cup traditionally associated with the Last Supper. The CES website includes an introduction and audiovisual material about the Holy Chalice.",
      },
      socios: {
        title: "A space for members",
        text: "Only the homepage has been created for this proposal. The members’ area is not connected, and no passwords are requested or stored here. Membership information is available on the current website.",
      },
      revista: {
        title: "Línteum, the CES journal",
        text: "Línteum is the CES journal. It publishes original research and press articles on the Shroud and other related relics.",
      },
      fotografia: {
        title: "The Shroud of Turin",
        text: "Detail of the face on the Shroud of Turin.",
      },
      acerca: {
        title: "Site information",
        text: "A demonstration of a new homepage for the Spanish Centre for Sindonology. The photographs and seal come from resources published on linteum.com. Only the homepage has been developed.",
        extra:
          "This site uses no cookies, analytics or data collection forms. You can navigate with a keyboard and enlarge the text in your browser.",
      },
    },
    interface: {
      fullImage: "The face on the Shroud of Turin, full image.",
      photoLink: "Discover the Shroud on the CES website (Spanish) ↗",
      websiteLink: "Visit the current website (Spanish) ↗",
      previewNote:
        "Preview: the inner pages have not yet been redesigned. The following link opens the current Spanish website in a new tab.",
    },
  },
  fr: {
    details: {
      turin: {
        title: "Le Suaire de Turin",
        text: "Le Suaire est un linge de lin conservé à Turin. Le CES présente sa description, les caractéristiques de son image et les études dont il a fait l’objet.",
      },
      oviedo: {
        title: "Le Sudarium d’Oviedo",
        text: "Le Saint Sudarium est conservé à la cathédrale d’Oviedo. L’EDICES, l’équipe de recherche du CES, a mené des études sur ce linge.",
      },
      caliz: {
        title: "Le Saint Calice de Valence",
        text: "La cathédrale de Valence conserve la coupe associée par la tradition à la Cène. Le site du CES propose une présentation et des documents audiovisuels sur le Saint Calice.",
      },
      socios: {
        title: "Un espace pour les membres",
        text: "Seule la page d’accueil a été créée pour cette proposition. L’espace membres n’est pas connecté et aucun mot de passe n’est demandé ni enregistré ici. Les informations sur l’adhésion sont disponibles sur le site actuel.",
      },
      revista: {
        title: "Línteum, la revue du CES",
        text: "Línteum est la revue du CES. Elle publie des travaux originaux et des articles de presse sur le Suaire et d’autres reliques associées.",
      },
      fotografia: {
        title: "Le Suaire de Turin",
        text: "Détail du visage sur le Suaire de Turin.",
      },
      acerca: {
        title: "Informations sur le site",
        text: "Démonstration d’une nouvelle page d’accueil pour le Centre espagnol de sindonologie. Les photographies et le sceau proviennent des ressources publiées sur linteum.com. Seule la page d’accueil a été développée.",
        extra:
          "Ce site n’utilise ni cookies, ni outils d’analyse, ni formulaires de collecte de données. Vous pouvez le parcourir au clavier et agrandir le texte dans votre navigateur.",
      },
    },
    interface: {
      fullImage: "Le visage sur le Suaire de Turin, image complète.",
      photoLink: "Découvrir le Suaire sur le site du CES (en espagnol) ↗",
      websiteLink: "Consulter le site actuel (en espagnol) ↗",
      previewNote:
        "Aperçu : les pages intérieures n’ont pas encore été remaniées. Le lien suivant ouvre le site actuel en espagnol dans un nouvel onglet.",
    },
  },
  de: {
    details: {
      turin: {
        title: "Das Turiner Grabtuch",
        text: "Das Grabtuch ist ein in Turin aufbewahrtes Leinentuch. Das CES stellt seine Beschreibung, die Merkmale seines Bildes und die dazu durchgeführten Studien vor.",
      },
      oviedo: {
        title: "Das Schweißtuch von Oviedo",
        text: "Das Heilige Schweißtuch wird in der Kathedrale von Oviedo aufbewahrt. EDICES, das Forschungsteam des CES, hat dieses Tuch untersucht.",
      },
      caliz: {
        title: "Der Heilige Kelch von Valencia",
        text: "Die Kathedrale von Valencia bewahrt die Schale auf, die der Überlieferung nach mit dem Letzten Abendmahl verbunden ist. Die Website des CES enthält eine Einführung und audiovisuelle Materialien zum Heiligen Kelch.",
      },
      socios: {
        title: "Ein Bereich für Mitglieder",
        text: "Für diesen Vorschlag wurde nur die Startseite erstellt. Der Mitgliederbereich ist nicht angebunden; hier werden keine Passwörter abgefragt oder gespeichert. Informationen zur Mitgliedschaft finden Sie auf der bestehenden Website.",
      },
      revista: {
        title: "Línteum, die Zeitschrift des CES",
        text: "Línteum ist die Zeitschrift des CES. Sie veröffentlicht eigene Forschungsarbeiten und Presseartikel über das Grabtuch und weitere damit verbundene Reliquien.",
      },
      fotografia: {
        title: "Das Turiner Grabtuch",
        text: "Detail des Gesichts auf dem Turiner Grabtuch.",
      },
      acerca: {
        title: "Informationen zur Website",
        text: "Demonstration einer neuen Startseite für das Spanische Zentrum für Sindonologie. Die Fotografien und das Siegel stammen aus den auf linteum.com veröffentlichten Materialien. Nur die Startseite wurde entwickelt.",
        extra:
          "Diese Website verwendet weder Cookies noch Analysewerkzeuge oder Formulare zur Datenerfassung. Sie können mit der Tastatur navigieren und den Text im Browser vergrößern.",
      },
    },
    interface: {
      fullImage: "Das Gesicht auf dem Turiner Grabtuch, vollständiges Bild.",
      photoLink: "Das Grabtuch auf der CES-Website kennenlernen (Spanisch) ↗",
      websiteLink: "Bestehende Website besuchen (Spanisch) ↗",
      previewNote:
        "Vorschau: Die Unterseiten wurden noch nicht neu gestaltet. Der folgende Link öffnet die bestehende spanischsprachige Website in einem neuen Tab.",
    },
  },
  it: {
    details: {
      turin: {
        title: "La Sindone di Torino",
        text: "La Sindone è un telo di lino conservato a Torino. Il CES ne presenta la descrizione, le caratteristiche dell’immagine e gli studi condotti su di essa.",
      },
      oviedo: {
        title: "Il Sudario di Oviedo",
        text: "Il Santo Sudario è conservato nella Cattedrale di Oviedo. L’EDICES, il gruppo di ricerca del CES, ha condotto studi su questo telo.",
      },
      caliz: {
        title: "Il Santo Calice di Valencia",
        text: "La Cattedrale di Valencia conserva la coppa associata dalla tradizione all’Ultima Cena. Il sito del CES include una presentazione e materiale audiovisivo sul Santo Calice.",
      },
      socios: {
        title: "Uno spazio per i soci",
        text: "Per questa proposta è stata creata solo la pagina iniziale. L’area soci non è collegata e qui non vengono richieste né memorizzate password. Le informazioni per i soci sono disponibili sul sito attuale.",
      },
      revista: {
        title: "Línteum, la rivista del CES",
        text: "Línteum è la rivista del CES. Pubblica lavori originali e articoli di stampa sulla Sindone e su altre reliquie correlate.",
      },
      fotografia: {
        title: "La Sindone di Torino",
        text: "Dettaglio del volto sulla Sindone di Torino.",
      },
      acerca: {
        title: "Informazioni sul sito",
        text: "Dimostrazione di una nuova pagina iniziale per il Centro spagnolo di sindonologia. Le fotografie e il sigillo provengono dalle risorse pubblicate su linteum.com. È stata sviluppata solo la pagina iniziale.",
        extra:
          "Questo sito non utilizza cookie, strumenti di analisi o moduli di raccolta dati. Puoi navigare con la tastiera e ingrandire il testo dal browser.",
      },
    },
    interface: {
      fullImage: "Il volto sulla Sindone di Torino, immagine completa.",
      photoLink: "Scopri la Sindone sul sito del CES (in spagnolo) ↗",
      websiteLink: "Visita il sito attuale (in spagnolo) ↗",
      previewNote:
        "Anteprima: le pagine interne non sono ancora state ridisegnate. Il seguente collegamento apre il sito attuale in spagnolo in una nuova scheda.",
    },
  },
};
