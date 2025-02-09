const proyects = [
    {
        "proyecto": "TRAMPA DE SCRAPER",
        "detalles": "Cañería 30\"",
        "descripcion": "Instalación de trampa de Scraper TR81, para empresa TGN.\nOperativo TIE- IN, 30” y 12”.",
        "locacion": "",
        "cliente": "TGN",
        "images": {
            main: "proyects/trampa.png",
            extras: [
                "proyects/trampa/extras/extra1.png",
                "proyects/trampa/extras/extra2.png",
                "proyects/trampa/extras/extra3.png",
                "proyects/trampa/extras/extra4.png"
            ]
        },
        "link": "/trampa-de-scraper"
    },
    {
        "proyecto": "COLECTOR DE LIMPIEZA QUÍMICA",
        "detalles": "",
        "locacion": "Salta",
        "cliente": "Austin Powder",
        "images": {
            main: "proyects/austin.png",
            extras: []
        },
        "link": "/colector-de-limpieza-quimica"
    },
    {
        "proyecto": "AMPLIACIÓN AERO ENFRIADOR",
        "detalles": "",
        "descripcion": "Ampliación de aero enfriador con dos líneas de tubería con 380 BAR de presión de operación.\nMaterial API 5L X70.\nEspesor extra pesado XXS.",
        "locacion": "Salta",
        "cliente": "Austin Powder",
        "images": {
            main: "proyects/amp-refri.png",
            extras: [
                "proyects/ampliacion/extras/extra1.png",
                "proyects/ampliacion/extras/extra2.png",
                "proyects/ampliacion/extras/extra3.png",
                "proyects/ampliacion/extras/extra4.png",
                "proyects/ampliacion/extras/extra5.png",
                "proyects/ampliacion/extras/extra6.png",
                "proyects/ampliacion/extras/extra7.png",
                "proyects/ampliacion/extras/extra8.png",
                "proyects/ampliacion/extras/extra9.png"
            ]
        },
        "link": "/ampliacion-aero-enfriador",
        "pasoPaso": [
            {
                "paso": 1,
                "descripcion": [
                    "Los tubos fueron cortados con sierra mecánica.",
                    "Una parte fue biselada con biseladora y otra parte con torno mecánico."
                ],
                "imagen": [
                    "proyects/ampliacion/pasoPaso/sierra-mecanica-1.png",
                    "proyects/ampliacion/pasoPaso/biselado-1.png"
                ]
            },
            {
                "paso": 2,
                "descripcion": [
                    "Raíces realizadas con proceso GTAW.",
                    "Inspecciones con END por líquidos penetrantes."
                ],
                "imagen": [
                    "proyects/ampliacion/pasoPaso/smaw1.png",
                    "proyects/ampliacion/pasoPaso/liquidos-penetrantes-1.png"
                ]
            },
            {
                "paso": 3,
                "descripcion": [
                    "Las siguientes pasadas fueron realizadas con proceso SMAW.",
                    "Se evaluaron por medio de rayos X."
                ],
                "imagen": [
                    "proyects/ampliacion/pasoPaso/smaw2.png",
                    "proyects/ampliacion/pasoPaso/pasadas2.png"
                ]
            },
            {
                "paso": 4,
                "descripcion": [
                    "Tratamiento post-térmico.",
                    ""
                ],
                "imagen": [
                    "proyects/ampliacion/pasoPaso/post-termico.png",
                    "proyects/ampliacion/pasoPaso/post-termico2.png",
                ]
            }
        ]
    },
    {
        "proyecto": "MEDIAS CAÑAS",
        "detalles": "",
        "descripcion": "Servicio de mano de obra para TGN y montaje de refuerzo mecánico Tipo A.",
        "locacion": "",
        "cliente": "TGN",
        "images": {
            main: "proyects/mediascanas.png",
            extras: [
                "proyects/mediascanas/extras/extra1.png",
                "proyects/mediascanas/extras/extra2.png",
                "proyects/mediascanas/extras/extra3.png",
                "proyects/mediascanas/extras/extra4.png"
            ]
        },
        "link": "/medias-canas"
    },
    {
        "proyecto": "VÁLVULAS",
        "detalles": "Adecuación de By-Pass de válvula de bloqueo en gasoducto",
        "locacion": "",
        "cliente": "TGN",
        "images": {
            main: "proyects/valvulas.png",
            extras: []
        },
        "link": "/valvulas"
    },
    {
        "proyecto": "COLECTOR DE DERIVACIÓN 4\"",
        "detalles": "Construcción y montaje de colector de derivación",
        "locacion": "Tucumán",
        "cliente": "Grupo Arcor",
        "images": {
            main: "proyects/colectordev.png",
            extras: []
        },
        "link": "/colector-de-derivacion-4"
    },
    {
        "proyecto": "EM&R",
        "detalles": "Construcción de EM&R para alimentación de una nueva caldera",
        "locacion": "Tucumán",
        "cliente": "Grupo Arcor",
        "images": {
            main: "proyects/emr.png",
            extras: []
        },
        "link": "/em&r"
    },
    {
        "proyecto": "RENOVACIÓN EQUIPO DE CONTROL",
        "detalles": "Renovación de equipo de control de calidad de gas",
        "locacion": "",
        "cliente": "TGN",
        "images": {
            main: "proyects/renoveq.png",
            extras: []
        },
        "link": "/renovacion-equipo-de-control"
    },
    {
        "proyecto": "SOLDADURA SANITARIA",
        "detalles": "Fabricación de cañerías en acero inoxidable",
        "locacion": "Tucumán",
        "cliente": "Grupo Arcor",
        "images": {
            main: "proyects/solsan.png",
            extras: []
        },
        "link": "/soldadura-sanitaria"
    },
    {
        "proyecto": "VENTILADOR DE CALDERA",
        "detalles": "",
        "locacion": "Tucumán",
        "cliente": "Ingenio Leales",
        "images": {
            main: "proyects/ventcal.png",
            extras: []
        },
        "link": "/ventilador-de-caldera"
    },
    {
        "proyecto": "CAÑERÍAS EN ACERO INOXIDABLE",
        "detalles": "",
        "locacion": "Salta",
        "cliente": "Minera Livent",
        "images": {
            main: "proyects/caneriacero.png",
            extras: []
        },
        "link": "/canerias-en-acero-inoxidable"
    },
    {
        "proyecto": "PIPING",
        "detalles": "Prefabricado de cañerías de alimentación de gas para generadores",
        "locacion": "Catamarca",
        "cliente": "Minera FMC",
        "images": {
            main: "proyects/piping.png",
            extras: []
        },
        "link": "/piping"
    },
    {
        "proyecto": "END POR LÍQUIDOS PENETRANTES",
        "detalles": "Ensayos no destructivos por líquidos penetrantes de cañerías",
        "locacion": "Catamarca",
        "cliente": "Minera FMC",
        "images": {
            main: "proyects/endporliq.png",
            extras: []
        },
        "link": "/end-por-liquidos-penetrantes"
    },
    {
        "proyecto": "INTERCAMBIADOR DE CALOR",
        "detalles": "Fabricación de intercambiador de calor agua-gas 320 bar para Comeco",
        "locacion": "",
        "cliente": "",
        "images": {
            main: "proyects/interc.png",
            extras: []
        },
        "link": "/intercambiador-de-calor"
    }
];

export default proyects;
