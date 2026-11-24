import { Reto } from '../types';

/**
 * RETOS DE HISTORIA MARISTA — FACILES (5x5)
 * Archivo GENERADO por scripts/generar-retos.ts a partir de scripts/retos-fuente. No editar a mano.
 */
export const RETOS_MARISTA_FACILES: Reto[] = [
  {
    "id": "001-HM",
    "nombre": "El maestro de Marlhes",
    "datos_juego": {
      "Tamano_Cuadricula": "5x5",
      "gridSize": 5,
      "categoria": "Infancia y escuela",
      "rasgos": [
        "presencia",
        "sencillez"
      ],
      "fuenteHistorica": "Marlhes · Lanfrey T. 1, cap. 1; Tras las huellas, §3-5",
      "textoClave": "Marcelino nació en Marlhes el 20 de mayo de 1789 y fue tarde a la escuela, donde estuvo poco tiempo.",
      "contextoHistorico": "Marlhes era un pueblo rural donde la mayoría de adultos y jóvenes apenas sabían leer. Los maestros eran poco competentes y a veces maltrataban a los alumnos. Años después, Marcelino se esforzará por crear un clima de buen trato con los niños.",
      "solucionExplicacion": "El responsable de que Marcelino dejara la escuela fue el maestro Barthélemy Moine, que unía permisividad y brutalidad con el método individual. Marcelino aprendió lo bastante para conocer bien el catecismo antes de la primera comunión y después volvió al trabajo de la granja.",
      "storyIntro": "Marlhes, finales del siglo XVIII. Un niño despierto pero sensible deja de ir a la escuela y en casa nadie sabe bien por qué. Ayuda a reconstruir dónde estaba cada uno para descubrir quién le hizo la vida imposible en el aula.",
      "epilogue": "¡Caso resuelto! Moine quedó señalado: la brutalidad del aula alejó a Marcelino de la escuela. Aquella experiencia dolorosa y su vuelta a la granja forjaron al futuro educador de niños.",
      "subtitle": "Infancia y escuela · Marlhes · 5x5",
      "badge": "EL MAESTRO DE MARLHES · 5x5",
      "victimId": "MC",
      "murdererId": "BM",
      "rooms": {
        "escuela_moine": {
          "id": "escuela_moine",
          "name": "Escuela del maestro Moine",
          "shortName": "Escuela Moine",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Aula donde el maestro enseñaba con el método individual."
        },
        "casa_champagnat": {
          "id": "casa_champagnat",
          "name": "Casa de los Champagnat",
          "shortName": "Casa Champagnat",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Hogar de una familia rural más instruida que la media."
        },
        "iglesia_marlhes": {
          "id": "iglesia_marlhes",
          "name": "Iglesia de Marlhes",
          "shortName": "Iglesia Marlhes",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Templo donde Marcelino se preparó para la primera comunión."
        },
        "molino": {
          "id": "molino",
          "name": "Molino hidráulico",
          "shortName": "Molino",
          "bgColor": "bg-sky-100/70",
          "borderColor": "border-sky-700/60",
          "textColor": "text-sky-950",
          "tagColor": "bg-sky-800 text-sky-100",
          "description": "Pequeño molino que explotaba el padre de Marcelino."
        },
        "granja": {
          "id": "granja",
          "name": "Granja familiar",
          "shortName": "Granja",
          "bgColor": "bg-emerald-100/70",
          "borderColor": "border-emerald-700/60",
          "textColor": "text-emerald-950",
          "tagColor": "bg-emerald-800 text-emerald-100",
          "description": "Tierras y establo donde Marcelino trabajó de joven."
        }
      },
      "cellRooms": [
        [
          "escuela_moine",
          "escuela_moine",
          "escuela_moine",
          "granja",
          "granja"
        ],
        [
          "escuela_moine",
          "escuela_moine",
          "molino",
          "granja",
          "casa_champagnat"
        ],
        [
          "molino",
          "molino",
          "molino",
          "casa_champagnat",
          "casa_champagnat"
        ],
        [
          "molino",
          "molino",
          "molino",
          "casa_champagnat",
          "casa_champagnat"
        ],
        [
          "iglesia_marlhes",
          "iglesia_marlhes",
          "iglesia_marlhes",
          "iglesia_marlhes",
          "iglesia_marlhes"
        ]
      ],
      "blockedObjects": {
        "0,1": {
          "emoji": "📖",
          "name": "Catecismo",
          "evidenceCode": "EV-01",
          "description": "Libro con el que aprendió la doctrina antes de la primera comunión."
        },
        "0,4": {
          "emoji": "🐑",
          "name": "Corderos",
          "evidenceCode": "EV-02",
          "description": "Animales que Marcelino criaba y vendía de adolescente."
        },
        "2,0": {
          "emoji": "⚙️",
          "name": "Rueda del molino",
          "evidenceCode": "EV-03",
          "description": "Mecanismo del pequeño molino familiar."
        }
      },
      "suspects": [
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Niño de Marlhes",
          "avatar": "👦",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Aprendió el catecismo y a leer, pero rechazó seguir en el aula tras la primera comunión.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "escuela_moine"
            }
          ]
        },
        {
          "id": "BM",
          "name": "Barthélemy Moine",
          "role": "Maestro del pueblo",
          "avatar": "🧑‍🏫",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Enseñaba cada alumno por separado y combinaba el desorden con los golpes.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "escuela_moine"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "0,1"
            }
          ]
        },
        {
          "id": "JB",
          "name": "Jean-Baptiste Champagnat",
          "role": "Padre y propietario",
          "avatar": "👨",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Sabía escribir bien, fue secretario del municipio y mantenía en marcha su pequeño negocio.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "molino"
            },
            {
              "tipo": "norteDe",
              "sospechoso": "MT"
            }
          ]
        },
        {
          "id": "MT",
          "name": "Marie-Thérèse Chirat",
          "role": "Madre de familia",
          "avatar": "👩",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Le enseñó a rezar y despertó en él la devoción a María.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_champagnat"
            }
          ]
        },
        {
          "id": "LO",
          "name": "Tía Louise",
          "role": "Antigua religiosa",
          "avatar": "🧕",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Expulsada de su convento por la Revolución, la acogió su hermano y fue guía en la fe del niño.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "iglesia_marlhes"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "MT"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "Marcelino nació en 1789, en plena Revolución Francesa, en una familia rural con más instrucción que la media.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "JB"
          ]
        },
        {
          "id": "c2",
          "text": "El maestro practicaba el método individual: cada alumno por separado y sin orden.",
          "narrative": "",
          "relatedSuspects": [
            "BM"
          ]
        },
        {
          "id": "c3",
          "text": "Aun así, Marcelino aprendió el catecismo y a leer antes de su primera comunión.",
          "narrative": "",
          "relatedSuspects": [
            "MC"
          ]
        },
        {
          "id": "c4",
          "text": "Tras dejar la escuela, el adolescente volvió a ayudar en el trabajo familiar del campo.",
          "narrative": "",
          "relatedSuspects": [
            "MC"
          ]
        }
      ],
      "solution": {
        "MC": {
          "row": 0,
          "col": 0
        },
        "BM": {
          "row": 1,
          "col": 1
        },
        "JB": {
          "row": 2,
          "col": 2
        },
        "MT": {
          "row": 3,
          "col": 4
        },
        "LO": {
          "row": 4,
          "col": 3
        }
      }
    }
  },
  {
    "id": "002-HM",
    "nombre": "La visita de Pascua",
    "datos_juego": {
      "Tamano_Cuadricula": "5x5",
      "gridSize": 5,
      "categoria": "Vocación y estudios",
      "rasgos": [
        "espiritu_familia"
      ],
      "fuenteHistorica": "Marlhes · Lanfrey T. 1, cap. 1",
      "textoClave": "Por la Pascua de 1804, un presbítero visitó a la familia Champagnat y animó a Marcelino a estudiar latín.",
      "contextoHistorico": "Tras el Concordato de 1801 se crearon seminarios menores en zonas rurales, y sus profesores recorrían los pueblos en vacaciones buscando alumnos. La visita llegó tras la muerte de dos hermanos de Marcelino; su padre murió en junio de 1804. El proyecto de estudiar siguió adelante.",
      "solucionExplicacion": "El responsable fue un presbítero reclutador de un seminario menor, cuya identidad no está clara en las fuentes. Marcelino, con 15 años, era el único hijo de la casa que aún podía desear largos estudios, y aceptó empezar por el latín.",
      "storyIntro": "Marlhes, Pascua de 1804. Un desconocido con sotana entra en casa de los Champagnat y, cuando se marcha, la vida de un adolescente ha cambiado de rumbo. ¿Quién fue el visitante que lo decidió todo?",
      "epilogue": "¡Caso resuelto! El presbítero reclutador dio a Marcelino la oportunidad de estudiar. Aquel primer paso, nacido de una familia golpeada por el luto, le llevaría a Verrières y, años después, a La Valla.",
      "subtitle": "Vocación y estudios · Marlhes · 5x5",
      "badge": "LA VISITA DE PASCUA · 5x5",
      "victimId": "MC",
      "murdererId": "PR",
      "rooms": {
        "casa_champagnat": {
          "id": "casa_champagnat",
          "name": "Casa de los Champagnat",
          "shortName": "Casa Champagnat",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Hogar donde se decidió el futuro de Marcelino."
        },
        "casa_parroquial": {
          "id": "casa_parroquial",
          "name": "Casa parroquial de Marlhes",
          "shortName": "Parroquial",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Residencia del párroco del pueblo."
        },
        "granja": {
          "id": "granja",
          "name": "Granja y campos",
          "shortName": "Granja",
          "bgColor": "bg-emerald-100/70",
          "borderColor": "border-emerald-700/60",
          "textColor": "text-emerald-950",
          "tagColor": "bg-emerald-800 text-emerald-100",
          "description": "Tierras de labor de la familia."
        },
        "camino_verrieres": {
          "id": "camino_verrieres",
          "name": "Camino hacia Verrières",
          "shortName": "Camino Verrières",
          "bgColor": "bg-sky-100/70",
          "borderColor": "border-sky-700/60",
          "textColor": "text-sky-950",
          "tagColor": "bg-sky-800 text-sky-100",
          "description": "Ruta hacia el seminario menor."
        },
        "plaza_marlhes": {
          "id": "plaza_marlhes",
          "name": "Plaza de Marlhes",
          "shortName": "Plaza",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Centro del pueblo, junto a la iglesia."
        }
      },
      "cellRooms": [
        [
          "casa_parroquial",
          "casa_parroquial",
          "casa_parroquial",
          "casa_champagnat",
          "casa_champagnat"
        ],
        [
          "casa_parroquial",
          "casa_champagnat",
          "casa_champagnat",
          "casa_champagnat",
          "casa_champagnat"
        ],
        [
          "casa_parroquial",
          "granja",
          "granja",
          "plaza_marlhes",
          "plaza_marlhes"
        ],
        [
          "camino_verrieres",
          "camino_verrieres",
          "granja",
          "plaza_marlhes",
          "plaza_marlhes"
        ],
        [
          "camino_verrieres",
          "camino_verrieres",
          "granja",
          "granja",
          "granja"
        ]
      ],
      "blockedObjects": {
        "3,0": {
          "emoji": "📚",
          "name": "Gramática latina",
          "evidenceCode": "EV-01",
          "description": "Libro con el que Marcelino empezaría a estudiar."
        },
        "2,1": {
          "emoji": "🐑",
          "name": "Redil de corderos",
          "evidenceCode": "EV-02",
          "description": "Su afición de adolescente: criar y vender corderos."
        },
        "2,4": {
          "emoji": "🔔",
          "name": "Campana del pueblo",
          "evidenceCode": "EV-03",
          "description": "Campana que tocaba por los difuntos de la familia."
        }
      },
      "suspects": [
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Joven de 15 años",
          "avatar": "🧑",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Era el único hijo de la casa que aún podía desear largos estudios.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_champagnat"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "JA"
            }
          ]
        },
        {
          "id": "PR",
          "name": "Presbítero reclutador",
          "role": "Profesor de seminario menor",
          "avatar": "🧑‍🏫",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Recorría las zonas rurales en vacaciones buscando alumnos para el latín.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_champagnat"
            }
          ]
        },
        {
          "id": "AL",
          "name": "Párroco Allirot",
          "role": "Párroco de Marlhes",
          "avatar": "👴",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Permaneció en su puesto durante toda la Revolución y trataba bien a la familia.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_parroquial"
            }
          ]
        },
        {
          "id": "JA",
          "name": "Jean-Barthélemy",
          "role": "Hermano mayor",
          "avatar": "👨‍🌾",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Con 26 años, la pregunta del visitante no iba con él.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "granja"
            }
          ]
        },
        {
          "id": "JP",
          "name": "Jean-Pierre",
          "role": "Hermano de 16 años",
          "avatar": "🧒",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Según el relato, el visitante también le preguntó a él.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "granja"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "2,4"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "La visita ocurrió por la Pascua de 1804, poco antes de que muriera el padre de la familia.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "PR"
          ]
        },
        {
          "id": "c2",
          "text": "El visitante no buscaba solo sacerdotes: quería alumnos para estudiar latín.",
          "narrative": "",
          "relatedSuspects": [
            "PR"
          ]
        },
        {
          "id": "c3",
          "text": "Para la visita hizo falta el acuerdo del párroco, que conocía bien a los Champagnat.",
          "narrative": "",
          "relatedSuspects": [
            "AL"
          ]
        },
        {
          "id": "c4",
          "text": "Por costumbre, la finca se reservaba al hermano mayor; Marcelino era el pequeño de los tres chicos.",
          "narrative": "",
          "relatedSuspects": [
            "JA",
            "MC"
          ]
        }
      ],
      "solution": {
        "MC": {
          "row": 0,
          "col": 3
        },
        "PR": {
          "row": 1,
          "col": 1
        },
        "AL": {
          "row": 2,
          "col": 0
        },
        "JA": {
          "row": 3,
          "col": 2
        },
        "JP": {
          "row": 4,
          "col": 4
        }
      }
    }
  },
  {
    "id": "003-HM",
    "nombre": "La peregrinación a La Louvesc",
    "datos_juego": {
      "Tamano_Cuadricula": "5x5",
      "gridSize": 5,
      "categoria": "Vocación y estudios",
      "rasgos": [
        "espiritu_familia",
        "amor_trabajo"
      ],
      "fuenteHistorica": "Marlhes · Lanfrey T. 1, cap. 1",
      "textoClave": "Tras un año de estudios flojos, la madre de Marcelino propuso una peregrinación a La Louvesc.",
      "contextoHistorico": "Marcelino comenzó estudiando con su cuñado Benoît Arnaud, que dirigía un pequeño colegio con una docena de alumnos. Los resultados parecieron insuficientes. Este fracaso inicial marcó toda su vida: él mismo lo recordó varias veces.",
      "solucionExplicacion": "Benoît Arnaud, antiguo seminarista y cuñado de Marcelino, consideró insuficientes sus resultados y trató de persuadirle de que renunciara. Su madre le animó a peregrinar a La Louvesc, donde se venera a san Juan Francisco Régis, y Marcelino siguió adelante.",
      "storyIntro": "Año 1804-1805. El joven Marcelino no avanza en el latín y alguien de la familia cree que lo mejor es que abandone. Su madre no está de acuerdo. ¿Quién quiso cortar su camino?",
      "epilogue": "¡Caso resuelto! Benoît Arnaud quiso que renunciara, pero la fe de una madre y una peregrinación cambiaron el rumbo. Marcelino entró en Verrières y llegó a sacerdote.",
      "subtitle": "Vocación y estudios · Marlhes · 5x5",
      "badge": "LA PEREGRINACIÓN A LA LOUVESC · 5x5",
      "victimId": "MC",
      "murdererId": "BA",
      "rooms": {
        "colegio_arnaud": {
          "id": "colegio_arnaud",
          "name": "Colegio de Benoît Arnaud (Saint-Sauveur-en-Rue)",
          "shortName": "Colegio Arnaud",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Pequeño colegio con una docena de alumnos."
        },
        "louvesc": {
          "id": "louvesc",
          "name": "Santuario de La Louvesc",
          "shortName": "La Louvesc",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Lugar de peregrinación a san Juan Francisco Régis."
        },
        "casa_champagnat": {
          "id": "casa_champagnat",
          "name": "Casa de los Champagnat",
          "shortName": "Casa Champagnat",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Hogar de la familia en Marlhes."
        },
        "seminario_verrieres": {
          "id": "seminario_verrieres",
          "name": "Seminario menor de Verrières",
          "shortName": "Verrières",
          "bgColor": "bg-emerald-100/70",
          "borderColor": "border-emerald-700/60",
          "textColor": "text-emerald-950",
          "tagColor": "bg-emerald-800 text-emerald-100",
          "description": "Colegio-seminario donde Marcelino entró más tarde."
        },
        "plaza_marlhes": {
          "id": "plaza_marlhes",
          "name": "Plaza de Marlhes",
          "shortName": "Plaza Marlhes",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Donde se contaban las historias del pueblo."
        }
      },
      "cellRooms": [
        [
          "colegio_arnaud",
          "colegio_arnaud",
          "colegio_arnaud",
          "colegio_arnaud",
          "casa_champagnat"
        ],
        [
          "colegio_arnaud",
          "louvesc",
          "casa_champagnat",
          "casa_champagnat",
          "casa_champagnat"
        ],
        [
          "colegio_arnaud",
          "louvesc",
          "louvesc",
          "louvesc",
          "casa_champagnat"
        ],
        [
          "colegio_arnaud",
          "colegio_arnaud",
          "louvesc",
          "louvesc",
          "seminario_verrieres"
        ],
        [
          "colegio_arnaud",
          "plaza_marlhes",
          "plaza_marlhes",
          "plaza_marlhes",
          "seminario_verrieres"
        ]
      ],
      "blockedObjects": {
        "4,0": {
          "emoji": "📓",
          "name": "Cuaderno de aritmética",
          "evidenceCode": "EV-01",
          "description": "Ejercicios del colegio: lectura, aritmética, historia y latín."
        },
        "3,2": {
          "emoji": "🕊️",
          "name": "Tumba de san Juan Francisco Régis",
          "evidenceCode": "EV-02",
          "description": "Meta de la peregrinación."
        },
        "2,4": {
          "emoji": "🎒",
          "name": "Zurrón de camino",
          "evidenceCode": "EV-03",
          "description": "Equipaje sencillo para el viaje a pie."
        }
      },
      "suspects": [
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Alumno de 15 años",
          "avatar": "🧑",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Estudiaba con esfuerzo, pero sus primeros resultados fueron flojos.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "colegio_arnaud"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "3,2"
            }
          ]
        },
        {
          "id": "BA",
          "name": "Benoît Arnaud",
          "role": "Cuñado y maestro",
          "avatar": "👨‍🏫",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Antiguo seminarista que, tras un año, trató de disuadirle de seguir.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "colegio_arnaud"
            }
          ]
        },
        {
          "id": "MT",
          "name": "Marie-Thérèse Chirat",
          "role": "Madre de Marcelino",
          "avatar": "👩",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Le levantó el ánimo y le propuso peregrinar.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "louvesc"
            }
          ]
        },
        {
          "id": "SU",
          "name": "Superior del seminario menor",
          "role": "Responsable de Verrières",
          "avatar": "🧑‍🏫",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Según una tradición, creyó que el chico no tenía talento y luego lo admitió.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "seminario_verrieres"
            }
          ]
        },
        {
          "id": "JE",
          "name": "Jullienne Épalle",
          "role": "Testigo de Marlhes",
          "avatar": "👵",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Recordó la historia años después, en el proceso de beatificación.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "plaza_marlhes"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "MC"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "Su cuñado dirigía un pequeño colegio donde enseñaba lectura, aritmética, geografía, historia y latín.",
          "narrative": "",
          "relatedSuspects": [
            "BA"
          ]
        },
        {
          "id": "c2",
          "text": "Al cabo de un año, los resultados parecieron pobres y se temió gastar dinero inútilmente en una familia endeudada.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "BA"
          ]
        },
        {
          "id": "c3",
          "text": "La madre propuso ir en peregrinación junto a la tumba de san Juan Francisco Régis.",
          "narrative": "",
          "relatedSuspects": [
            "MT"
          ]
        },
        {
          "id": "c4",
          "text": "Después de la peregrinación, Marcelino fue admitido y aquel año superó dos clases.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "SU"
          ]
        }
      ],
      "solution": {
        "MC": {
          "row": 0,
          "col": 2
        },
        "BA": {
          "row": 1,
          "col": 0
        },
        "MT": {
          "row": 2,
          "col": 3
        },
        "SU": {
          "row": 3,
          "col": 4
        },
        "JE": {
          "row": 4,
          "col": 1
        }
      }
    }
  },
  {
    "id": "004-HM",
    "nombre": "El juramento de Fourvière",
    "datos_juego": {
      "Tamano_Cuadricula": "5x5",
      "gridSize": 5,
      "categoria": "Orígenes de la Sociedad de María",
      "rasgos": [
        "estilo_maria"
      ],
      "fuenteHistorica": "Lyon · Lanfrey T. 1, cap. 1; Tras las huellas, §7",
      "textoClave": "El 23 de julio de 1816, un día después de su ordenación, una docena de aspirantes subió a Fourvière para prometer fundar la Sociedad de María.",
      "contextoHistorico": "Jean-Claude Courveille creyó recibir en 1812, en la catedral del Puy, la inspiración de fundar una Sociedad de María. Ya en Saint-Irénée reunió a unos doce compañeros, entre ellos Marcelino. La Sociedad se imaginó con sacerdotes, hermanas y laicos, y Marcelino insistió en una rama de Hermanos para educar.",
      "solucionExplicacion": "El instigador fue Jean-Claude Courveille, el seminarista que creyó recibir la inspiración de fundar la Sociedad de María y que reunió al grupo. Marcelino, atraído por el proyecto, subió con él a Fourvière en la mañana del juramento, antes de que el grupo se completara.",
      "storyIntro": "Lyon, 23 de julio de 1816. Un grupo de recién ordenados prepara una promesa secreta en el santuario de Fourvière. Antes de que lleguen los demás, dos de ellos están a solas en la capilla. ¿Quién arrastró a Marcelino a esta aventura?",
      "epilogue": "¡Caso resuelto! Courveille había soñado la Sociedad de María y Marcelino la hizo suya. Del juramento de Fourvière nacería, con los años, la rama de los Hermanos Maristas.",
      "subtitle": "Orígenes de la Sociedad de María · Lyon · 5x5",
      "badge": "EL JURAMENTO DE FOURVIÈRE · 5x5",
      "victimId": "MC",
      "murdererId": "JC",
      "rooms": {
        "fourviere": {
          "id": "fourviere",
          "name": "Santuario de Fourvière",
          "shortName": "Fourvière",
          "bgColor": "bg-sky-100/70",
          "borderColor": "border-sky-700/60",
          "textColor": "text-sky-950",
          "tagColor": "bg-sky-800 text-sky-100",
          "description": "Santuario mariano de Lyon, en lo alto de la colina."
        },
        "seminario_irenee": {
          "id": "seminario_irenee",
          "name": "Seminario de Saint-Irénée",
          "shortName": "Saint-Irénée",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Seminario mayor de Lyon, foco de fervor y resistencia."
        },
        "catedral_puy": {
          "id": "catedral_puy",
          "name": "Catedral del Puy",
          "shortName": "Catedral Puy",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Donde Courveille creyó recibir la inspiración en 1812."
        },
        "calles_lyon": {
          "id": "calles_lyon",
          "name": "Calles de Lyon",
          "shortName": "Calles Lyon",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Cuestas y plazas entre el seminario y la colina."
        },
        "rio_saona": {
          "id": "rio_saona",
          "name": "Orillas del Saona",
          "shortName": "Saona",
          "bgColor": "bg-teal-100/70",
          "borderColor": "border-teal-700/60",
          "textColor": "text-teal-950",
          "tagColor": "bg-teal-800 text-teal-100",
          "description": "Paseo junto al río, al pie de la colina."
        }
      },
      "cellRooms": [
        [
          "fourviere",
          "fourviere",
          "fourviere",
          "seminario_irenee",
          "seminario_irenee"
        ],
        [
          "fourviere",
          "fourviere",
          "fourviere",
          "seminario_irenee",
          "seminario_irenee"
        ],
        [
          "fourviere",
          "fourviere",
          "seminario_irenee",
          "seminario_irenee",
          "seminario_irenee"
        ],
        [
          "rio_saona",
          "catedral_puy",
          "catedral_puy",
          "calles_lyon",
          "calles_lyon"
        ],
        [
          "rio_saona",
          "rio_saona",
          "catedral_puy",
          "calles_lyon",
          "calles_lyon"
        ]
      ],
      "blockedObjects": {
        "2,0": {
          "emoji": "🕯️",
          "name": "Vela del altar",
          "evidenceCode": "EV-01",
          "description": "Luz ante la imagen de María."
        },
        "0,3": {
          "emoji": "📜",
          "name": "Texto de la promesa",
          "evidenceCode": "EV-02",
          "description": "Fórmula del juramento, a favor de la gloria de Dios y el honor de María."
        },
        "3,2": {
          "emoji": "⛪",
          "name": "Altar del Puy",
          "evidenceCode": "EV-03",
          "description": "Lugar de la inspiración del 15 de agosto de 1812."
        }
      },
      "suspects": [
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Recién ordenado",
          "avatar": "🧑",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Fue ordenado presbítero el 22 de julio y al día siguiente subió a Fourvière.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "fourviere"
            },
            {
              "tipo": "junto_objeto",
              "objeto": "0,3"
            }
          ]
        },
        {
          "id": "JC",
          "name": "Jean-Claude Courveille",
          "role": "Seminarista inspirador",
          "avatar": "🧔",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Convencido de su inspiración de 1812, reunió a una docena de compañeros.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "fourviere"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "S2"
            }
          ]
        },
        {
          "id": "BO",
          "name": "Vicario general Bochard",
          "role": "Autoridad diocesana",
          "avatar": "🧑‍⚖️",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Se esforzaba por encauzar a los seminaristas, sin evitar su oposición al Imperio.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "seminario_irenee"
            },
            {
              "tipo": "surDe",
              "sospechoso": "JC"
            }
          ]
        },
        {
          "id": "S1",
          "name": "Seminarista compañero",
          "role": "Aspirante marista",
          "avatar": "🧑‍🎓",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Subió a la colina con el grupo tras la ordenación.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "calles_lyon"
            },
            {
              "tipo": "borde",
              "lado": "este"
            },
            {
              "tipo": "filaObjeto",
              "objeto": "3,2"
            }
          ]
        },
        {
          "id": "S2",
          "name": "Otro seminarista",
          "role": "Aspirante marista",
          "avatar": "🧑‍🎓",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Se sumó al grupo tras haber compartido el curso con Courveille.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "rio_saona"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "La promesa se hizo el 23 de julio de 1816, bajo los auspicios del papa, del obispo y del «muy cristiano rey».",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "JC"
          ]
        },
        {
          "id": "c2",
          "text": "Un seminarista creía haber recibido en 1812 la inspiración de fundar una Sociedad de María.",
          "narrative": "",
          "relatedSuspects": [
            "JC"
          ]
        },
        {
          "id": "c3",
          "text": "El proyecto se gestó en el curso 1815-1816 dentro de una pequeña sociedad secreta de seminaristas.",
          "narrative": "",
          "relatedSuspects": [
            "JC",
            "S1",
            "S2"
          ]
        },
        {
          "id": "c4",
          "text": "Marcelino insistió desde el principio en que debía existir una rama de Hermanos dedicados a enseñar.",
          "narrative": "",
          "relatedSuspects": [
            "MC"
          ]
        }
      ],
      "solution": {
        "MC": {
          "row": 0,
          "col": 2
        },
        "JC": {
          "row": 1,
          "col": 1
        },
        "BO": {
          "row": 2,
          "col": 3
        },
        "S1": {
          "row": 3,
          "col": 4
        },
        "S2": {
          "row": 4,
          "col": 0
        }
      }
    }
  },
  {
    "id": "005-HM",
    "nombre": "El granadero de La Rive",
    "datos_juego": {
      "Tamano_Cuadricula": "5x5",
      "gridSize": 5,
      "categoria": "Los primeros discípulos",
      "rasgos": [
        "presencia",
        "sencillez"
      ],
      "fuenteHistorica": "La Valla · Lanfrey T. 1, cap. 3",
      "textoClave": "Marcelino llegó a La Valla el 12 de agosto de 1816 y el 26 de octubre conoció a Jean-Marie Granjon.",
      "contextoHistorico": "Granjon, huérfano y antiguo soldado de la Guardia Imperial, trabajaba de criado en un molino de la aldea de La Rive. Marcelino lo vio como un signo del cielo. Al día siguiente le llevó un Manual del Cristiano y se ofreció a enseñarle a leer.",
      "solucionExplicacion": "El responsable de poner en marcha la obra fue el propio Marcelino, que vio en Granjon una señal y le propuso aprender a leer con él. Granjon vino a buscarle para atender a un enfermo y, desde aquel encuentro, se convirtió en el primer discípulo.",
      "storyIntro": "La Valla, otoño de 1816. Un joven sale del molino a buscar al vicario para un enfermo y, sin saberlo, empieza una historia que durará siglos. ¿Quién lo puso en camino?",
      "epilogue": "¡Caso resuelto! Marcelino convirtió aquel encuentro en una invitación: aprender a leer y a rezar. Granjon se haría el hermano Juan María, el primero de los Hermanos Maristas.",
      "subtitle": "Los primeros discípulos · La Valla · 5x5",
      "badge": "EL GRANADERO DE LA RIVE · 5x5",
      "victimId": "JM",
      "murdererId": "MC",
      "rooms": {
        "molino_larive": {
          "id": "molino_larive",
          "name": "Molino de La Rive",
          "shortName": "Molino La Rive",
          "bgColor": "bg-sky-100/70",
          "borderColor": "border-sky-700/60",
          "textColor": "text-sky-950",
          "tagColor": "bg-sky-800 text-sky-100",
          "description": "Molino donde trabajaba Granjon como criado."
        },
        "casa_parroquial": {
          "id": "casa_parroquial",
          "name": "Casa parroquial de La Valla",
          "shortName": "Parroquial",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Residencia del párroco Rebod."
        },
        "casa_enfermo": {
          "id": "casa_enfermo",
          "name": "Casa del enfermo",
          "shortName": "Casa enfermo",
          "bgColor": "bg-rose-100/70",
          "borderColor": "border-rose-700/60",
          "textColor": "text-rose-950",
          "tagColor": "bg-rose-800 text-rose-100",
          "description": "Hogar donde Marcelino acudió a administrar a un enfermo."
        },
        "iglesia_lavalla": {
          "id": "iglesia_lavalla",
          "name": "Iglesia de La Valla",
          "shortName": "Iglesia",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Donde Marcelino observó a Granjon un domingo de octubre."
        },
        "la_terrasse": {
          "id": "la_terrasse",
          "name": "Aldea de La Terrasse",
          "shortName": "La Terrasse",
          "bgColor": "bg-emerald-100/70",
          "borderColor": "border-emerald-700/60",
          "textColor": "text-emerald-950",
          "tagColor": "bg-emerald-800 text-emerald-100",
          "description": "Aldea natal de Granjon, en Doizieux."
        }
      },
      "cellRooms": [
        [
          "casa_parroquial",
          "molino_larive",
          "molino_larive",
          "molino_larive",
          "molino_larive"
        ],
        [
          "casa_parroquial",
          "casa_parroquial",
          "molino_larive",
          "molino_larive",
          "molino_larive"
        ],
        [
          "casa_parroquial",
          "iglesia_lavalla",
          "iglesia_lavalla",
          "molino_larive",
          "casa_enfermo"
        ],
        [
          "la_terrasse",
          "iglesia_lavalla",
          "casa_enfermo",
          "casa_enfermo",
          "casa_enfermo"
        ],
        [
          "la_terrasse",
          "iglesia_lavalla",
          "iglesia_lavalla",
          "iglesia_lavalla",
          "casa_enfermo"
        ]
      ],
      "blockedObjects": {
        "0,2": {
          "emoji": "⚙️",
          "name": "Muela del molino",
          "evidenceCode": "EV-01",
          "description": "Rueda de piedra del molino de La Rive."
        },
        "3,1": {
          "emoji": "📘",
          "name": "Manual del Cristiano",
          "evidenceCode": "EV-02",
          "description": "Pequeño resumen de doctrina y devoción."
        },
        "4,4": {
          "emoji": "🕯️",
          "name": "Cirio del enfermo",
          "evidenceCode": "EV-03",
          "description": "Vela encendida junto a la cama."
        }
      },
      "suspects": [
        {
          "id": "JM",
          "name": "Jean-Marie Granjon",
          "role": "Criado de molino",
          "avatar": "🧑‍🌾",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Antiguo granadero de la Guardia Imperial, no sabía leer.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "molino_larive"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "4,4"
            }
          ]
        },
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Vicario de La Valla",
          "avatar": "🧑‍🏫",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Le ofreció enseñarle a leer y le llevó un libro de doctrina.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "molino_larive"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "0,2"
            }
          ]
        },
        {
          "id": "RE",
          "name": "Párroco Rebod",
          "role": "Párroco de La Valla",
          "avatar": "👴",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Era párroco desde 1812 y Marcelino quedó bajo su autoridad.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_parroquial"
            }
          ]
        },
        {
          "id": "EN",
          "name": "Enfermo de la aldea",
          "role": "Parroquiano",
          "avatar": "🤒",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Necesitaba ayuda espiritual, por eso se envió a buscar al vicario.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_enfermo"
            }
          ]
        },
        {
          "id": "JBA",
          "name": "Jean-Baptiste Audras",
          "role": "Joven alfabetizado",
          "avatar": "🧒",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Nacido en 1802, sería el segundo compañero de Granjon.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "iglesia_lavalla"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "Granjon vino a buscar al vicario el 26 de octubre de 1816 para atender a un enfermo.",
          "narrative": "",
          "relatedSuspects": [
            "JM",
            "EN"
          ]
        },
        {
          "id": "c2",
          "text": "Antes de eso, Marcelino lo había observado en la iglesia: se portaba muy bien.",
          "narrative": "",
          "relatedSuspects": [
            "MC"
          ]
        },
        {
          "id": "c3",
          "text": "Al día siguiente, el vicario le llevó un Manual del Cristiano y le prometió enseñarle a leer.",
          "narrative": "",
          "relatedSuspects": [
            "JM",
            "MC"
          ]
        },
        {
          "id": "c4",
          "text": "Pronto Marcelino le encontró un compañero: un joven de 14 años que ya sabía leer.",
          "narrative": "",
          "relatedSuspects": [
            "JBA"
          ]
        }
      ],
      "solution": {
        "JM": {
          "row": 0,
          "col": 4
        },
        "MC": {
          "row": 1,
          "col": 2
        },
        "RE": {
          "row": 2,
          "col": 0
        },
        "EN": {
          "row": 3,
          "col": 3
        },
        "JBA": {
          "row": 4,
          "col": 1
        }
      }
    }
  },
  {
    "id": "006-HM",
    "nombre": "Clavos para vivir",
    "datos_juego": {
      "Tamano_Cuadricula": "5x5",
      "gridSize": 5,
      "categoria": "Los primeros discípulos",
      "rasgos": [
        "amor_trabajo",
        "sencillez"
      ],
      "fuenteHistorica": "La Valla · Lanfrey T. 1, cap. 3; Tras las huellas, §10",
      "textoClave": "El 2 de enero de 1817, Marcelino instaló a sus dos primeros discípulos en una casa alquilada de La Valla.",
      "contextoHistorico": "Para vivir, los jóvenes hacían clavos con barritas de hierro («verges») que producía la metalurgia del valle del Gier. Un huerto y un terreno vecino les daban comida. El resto del tiempo era para la oración y el estudio. Era una vida sencilla, de laicos piadosos.",
      "solucionExplicacion": "El responsable de sostener la casa con trabajo fue Jean-Baptiste Audras, que junto a Granjon fabricaba clavos con el hierro del Gier. Estaban cerca de la casa parroquial y Marcelino acudía a darles lecciones de lectura y escritura.",
      "storyIntro": "La Valla, 2 de enero de 1817. Dos jóvenes viven por primera vez bajo el mismo techo, sin dinero y con muchas ganas. Alguien tiene que ganarse el pan: ¿quién fabricaba los clavos?",
      "epilogue": "¡Caso resuelto! Entre martillazos y oración nació la primera comunidad. Era el comienzo humilde de los Hermanos Maristas, con la confianza puesta en Dios y en María.",
      "subtitle": "Los primeros discípulos · La Valla · 5x5",
      "badge": "CLAVOS PARA VIVIR · 5x5",
      "victimId": "JM",
      "murdererId": "JBA",
      "rooms": {
        "casita": {
          "id": "casita",
          "name": "Casita alquilada",
          "shortName": "Casita",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Primera casa de los discípulos, junto a la casa parroquial."
        },
        "casa_parroquial": {
          "id": "casa_parroquial",
          "name": "Casa parroquial de La Valla",
          "shortName": "Parroquial",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Desde aquí el vicario acudía a dar lecciones."
        },
        "huerto": {
          "id": "huerto",
          "name": "Huerto y terreno vecino",
          "shortName": "Huerto",
          "bgColor": "bg-emerald-100/70",
          "borderColor": "border-emerald-700/60",
          "textColor": "text-emerald-950",
          "tagColor": "bg-emerald-800 text-emerald-100",
          "description": "Daban verduras para la mesa."
        },
        "valle_gier": {
          "id": "valle_gier",
          "name": "Fraguas del valle del Gier",
          "shortName": "Fraguas Gier",
          "bgColor": "bg-zinc-100/70",
          "borderColor": "border-zinc-700/60",
          "textColor": "text-zinc-950",
          "tagColor": "bg-zinc-800 text-zinc-100",
          "description": "Producían barras de hierro semiacabadas."
        },
        "iglesia_lavalla": {
          "id": "iglesia_lavalla",
          "name": "Iglesia de La Valla",
          "shortName": "Iglesia",
          "bgColor": "bg-rose-100/70",
          "borderColor": "border-rose-700/60",
          "textColor": "text-rose-950",
          "tagColor": "bg-rose-800 text-rose-100",
          "description": "Templo parroquial del pueblo."
        }
      },
      "cellRooms": [
        [
          "casa_parroquial",
          "casa_parroquial",
          "casa_parroquial",
          "casita",
          "casita"
        ],
        [
          "iglesia_lavalla",
          "casa_parroquial",
          "casa_parroquial",
          "casita",
          "huerto"
        ],
        [
          "iglesia_lavalla",
          "casa_parroquial",
          "casa_parroquial",
          "casita",
          "huerto"
        ],
        [
          "iglesia_lavalla",
          "iglesia_lavalla",
          "iglesia_lavalla",
          "casita",
          "huerto"
        ],
        [
          "valle_gier",
          "valle_gier",
          "valle_gier",
          "valle_gier",
          "huerto"
        ]
      ],
      "blockedObjects": {
        "3,3": {
          "emoji": "⚒️",
          "name": "Yunque y barras de hierro",
          "evidenceCode": "EV-01",
          "description": "Herramientas para hacer clavos."
        },
        "3,4": {
          "emoji": "🥬",
          "name": "Hortalizas",
          "evidenceCode": "EV-02",
          "description": "Productos del huerto de la casa."
        },
        "1,2": {
          "emoji": "📘",
          "name": "Libro de lectura",
          "evidenceCode": "EV-03",
          "description": "Texto para las lecciones del vicario."
        }
      },
      "suspects": [
        {
          "id": "JM",
          "name": "Jean-Marie Granjon",
          "role": "Primer discípulo",
          "avatar": "🧑‍🌾",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Había aprendido a leer con Marcelino y compartía la casa.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casita"
            }
          ]
        },
        {
          "id": "JBA",
          "name": "Jean-Baptiste Audras",
          "role": "Segundo discípulo",
          "avatar": "🧑",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Con 14 años, golpeaba el hierro cada día para ganar el sustento.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casita"
            },
            {
              "tipo": "filaObjeto",
              "objeto": "1,2"
            }
          ]
        },
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Vicario",
          "avatar": "🧑‍🏫",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Acudía entre sus tareas del culto a dar clases de lectura y escritura.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_parroquial"
            }
          ]
        },
        {
          "id": "RE",
          "name": "Párroco Rebod",
          "role": "Párroco de La Valla",
          "avatar": "👴",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Aceptaba la obra, aunque Marcelino no le explicaba todo.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "iglesia_lavalla"
            }
          ]
        },
        {
          "id": "VG",
          "name": "Proveedor de «verges»",
          "role": "Herrero del Gier",
          "avatar": "👷",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Suministraba el hierro medio acabado que se convertía en clavos.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "valle_gier"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "1,2"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "Los dos jóvenes vivían en una casa alquilada cerca de la casa parroquial.",
          "narrative": "",
          "relatedSuspects": [
            "JM",
            "JBA"
          ]
        },
        {
          "id": "c2",
          "text": "Para vivir hacían clavos, una industria muy extendida por los pueblos.",
          "narrative": "",
          "relatedSuspects": [
            "JM",
            "JBA"
          ]
        },
        {
          "id": "c3",
          "text": "El hierro les llegaba ya medio trabajado desde la metalurgia del valle del Gier.",
          "narrative": "",
          "relatedSuspects": [
            "VG"
          ]
        },
        {
          "id": "c4",
          "text": "El huerto y un terreno próximo ponían los alimentos; el resto del tiempo era para rezar y estudiar.",
          "narrative": "",
          "relatedSuspects": [
            "JM",
            "JBA"
          ]
        }
      ],
      "solution": {
        "JM": {
          "row": 0,
          "col": 4
        },
        "JBA": {
          "row": 1,
          "col": 3
        },
        "MC": {
          "row": 2,
          "col": 1
        },
        "RE": {
          "row": 3,
          "col": 0
        },
        "VG": {
          "row": 4,
          "col": 2
        }
      }
    }
  },
  {
    "id": "007-HM",
    "nombre": "Cuatro y un hábito",
    "datos_juego": {
      "Tamano_Cuadricula": "5x5",
      "gridSize": 5,
      "categoria": "Los primeros discípulos",
      "rasgos": [
        "espiritu_familia",
        "sencillez"
      ],
      "fuenteHistorica": "La Valla · Lanfrey T. 1, cap. 3; Tras las huellas, §11",
      "textoClave": "Por Navidad de 1817 se unió Jean-Claude Audras y el 1 de enero, Antoine Couturier, de La Valla.",
      "contextoHistorico": "El grupo creció pronto: a los dos primeros se sumaron un hermano de Jean-Baptiste y un joven de 17 años sin instrucción. Marcelino les dio un hábito que no era religioso: levita azul o negra, pantalón negro, pequeña capa y sombrero redondo. Eran laicos un poco aparte.",
      "solucionExplicacion": "El responsable del hábito fue Marcelino, que lo dio a sus compañeros hacia finales de marzo. Hacía de ellos laicos un poco aparte, sin ser aún religiosos. A finales de 1817 el grupo ya tenía cuatro jóvenes, con edades y estudios muy distintos.",
      "storyIntro": "La Valla, invierno de 1817-1818. La casita se llena de jóvenes que visten igual y rezan juntos. Alguien decidió cómo debían vestir. ¿Quién les dio el hábito?",
      "epilogue": "¡Caso resuelto! Fue Marcelino quien dio forma a la comunidad. Aquellos primeros jóvenes, de familias rurales pobres, serían el germen de los Hermanos Maristas.",
      "subtitle": "Los primeros discípulos · La Valla · 5x5",
      "badge": "CUATRO Y UN HÁBITO · 5x5",
      "victimId": "JM",
      "murdererId": "MC",
      "rooms": {
        "casa_hermanos": {
          "id": "casa_hermanos",
          "name": "Casa de los hermanos",
          "shortName": "Casa hermanos",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Hogar de la primera comunidad en La Valla."
        },
        "iglesia_lavalla": {
          "id": "iglesia_lavalla",
          "name": "Iglesia de La Valla",
          "shortName": "Iglesia",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Los hermanos aprendían allí el canto gregoriano."
        },
        "huerto": {
          "id": "huerto",
          "name": "Huerto de la casa",
          "shortName": "Huerto",
          "bgColor": "bg-emerald-100/70",
          "borderColor": "border-emerald-700/60",
          "textColor": "text-emerald-950",
          "tagColor": "bg-emerald-800 text-emerald-100",
          "description": "Trabajo manual de la comunidad."
        },
        "taller_clavos": {
          "id": "taller_clavos",
          "name": "Taller de clavos",
          "shortName": "Taller",
          "bgColor": "bg-zinc-100/70",
          "borderColor": "border-zinc-700/60",
          "textColor": "text-zinc-950",
          "tagColor": "bg-zinc-800 text-zinc-100",
          "description": "Donde se ganaban el sustento."
        },
        "aldeas": {
          "id": "aldeas",
          "name": "Aldeas de la parroquia",
          "shortName": "Aldeas",
          "bgColor": "bg-sky-100/70",
          "borderColor": "border-sky-700/60",
          "textColor": "text-sky-950",
          "tagColor": "bg-sky-800 text-sky-100",
          "description": "Caseríos lejanos donde enseñaban el catecismo."
        }
      },
      "cellRooms": [
        [
          "huerto",
          "huerto",
          "casa_hermanos",
          "casa_hermanos",
          "casa_hermanos"
        ],
        [
          "huerto",
          "huerto",
          "casa_hermanos",
          "aldeas",
          "aldeas"
        ],
        [
          "huerto",
          "huerto",
          "aldeas",
          "aldeas",
          "taller_clavos"
        ],
        [
          "huerto",
          "iglesia_lavalla",
          "taller_clavos",
          "taller_clavos",
          "taller_clavos"
        ],
        [
          "iglesia_lavalla",
          "iglesia_lavalla",
          "taller_clavos",
          "taller_clavos",
          "taller_clavos"
        ]
      ],
      "blockedObjects": {
        "0,4": {
          "emoji": "🎩",
          "name": "Sombrero redondo",
          "evidenceCode": "EV-01",
          "description": "Parte del hábito: levita, pantalón negro, capa y sombrero."
        },
        "4,2": {
          "emoji": "🔨",
          "name": "Martillo de herrero",
          "evidenceCode": "EV-02",
          "description": "Herramienta para hacer clavos."
        },
        "3,1": {
          "emoji": "🎶",
          "name": "Libro de canto gregoriano",
          "evidenceCode": "EV-03",
          "description": "Los hermanos aprendían a cantar en el culto."
        }
      },
      "suspects": [
        {
          "id": "JM",
          "name": "Jean-Marie Granjon",
          "role": "Primer hermano",
          "avatar": "🧑‍🌾",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "El más veterano del grupo; sería el hermano Juan María.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_hermanos"
            },
            {
              "tipo": "filaObjeto",
              "objeto": "0,4"
            }
          ]
        },
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Vicario y fundador",
          "avatar": "🧑‍🏫",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Dio a sus compañeros un atuendo común hacia finales de marzo.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_hermanos"
            }
          ]
        },
        {
          "id": "JBA",
          "name": "Jean-Baptiste Audras",
          "role": "Futuro hermano Luis",
          "avatar": "🧒",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Nacido en 1802, ya sabía leer.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "huerto"
            }
          ]
        },
        {
          "id": "JCA",
          "name": "Jean-Claude Audras",
          "role": "Futuro hermano Lorenzo",
          "avatar": "🧑",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Hermano de Jean-Baptiste, nacido en 1793, llegó por Navidad.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "taller_clavos"
            }
          ]
        },
        {
          "id": "CO",
          "name": "Antoine Couturier",
          "role": "Futuro hermano Antonio",
          "avatar": "👦",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Nativo de La Valla, de 17 años y sin ninguna instrucción.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "iglesia_lavalla"
            },
            {
              "tipo": "borde",
              "lado": "oeste"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "El hábito era una levita azul o negra, pantalón negro, una pequeña capa y un sombrero redondo.",
          "narrative": "",
          "relatedSuspects": [
            "MC"
          ]
        },
        {
          "id": "c2",
          "text": "Jean-Claude Audras, hermano de Jean-Baptiste, se unió por Navidad de 1817.",
          "narrative": "",
          "relatedSuspects": [
            "JCA",
            "JBA"
          ]
        },
        {
          "id": "c3",
          "text": "Antoine Couturier, de La Valla, se sumó el 1 de enero siendo un joven sin instrucción.",
          "narrative": "",
          "relatedSuspects": [
            "CO"
          ]
        },
        {
          "id": "c4",
          "text": "El grupo era diverso en edad y estudios, pero casi todos venían de familias rurales pobres.",
          "narrative": "",
          "relatedSuspects": [
            "JM",
            "JBA",
            "JCA",
            "CO"
          ]
        }
      ],
      "solution": {
        "JM": {
          "row": 0,
          "col": 3
        },
        "MC": {
          "row": 1,
          "col": 2
        },
        "JBA": {
          "row": 2,
          "col": 1
        },
        "JCA": {
          "row": 3,
          "col": 4
        },
        "CO": {
          "row": 4,
          "col": 0
        }
      }
    }
  },
  {
    "id": "008-HM",
    "nombre": "La campanilla del Bessat",
    "datos_juego": {
      "Tamano_Cuadricula": "5x5",
      "gridSize": 5,
      "categoria": "Misión en las aldeas",
      "rasgos": [
        "presencia",
        "amor_trabajo"
      ],
      "fuenteHistorica": "La Valla · Lanfrey T. 1, cap. 3",
      "textoClave": "Desde Todos los Santos de 1819, el hermano Laurent catequizaba en El Bessat, un rincón alejado de la parroquia.",
      "contextoHistorico": "El Bessat era un lugar de paso y de ferias, pero con poca instrucción religiosa. Jean-Claude Audras (hermano Laurent) bajaba cada jueves a La Valla a por patatas, queso y pan. Con una campanilla, como las cofradías de la Doctrina Cristiana, reunía a los niños para enseñarles oraciones, catecismo y lectura.",
      "solucionExplicacion": "Marcelino envió al hermano Laurent al Bessat, y los jueves lo recibía en La Valla para que se aprovisionara. Laurent encarna al hermano de la primera hora: entregado a la catequesis y a los pobres, aunque poco hecho a la vida de comunidad.",
      "storyIntro": "Otoño de 1819. Un hermano camina solo entre aldeas con una campanilla en la mano para que los niños acudan. Los jueves baja a La Valla a reabastecerse. ¿Quién le enviaba a aquel rincón?",
      "epilogue": "¡Caso resuelto! Marcelino confió a Laurent aquella misión en la periferia. Con su campanilla y su celo, abrió un modo de enseñar el catecismo que luego se haría escuela.",
      "subtitle": "Misión en las aldeas · La Valla · 5x5",
      "badge": "LA CAMPANILLA DEL BESSAT · 5x5",
      "victimId": "LA",
      "murdererId": "MC",
      "rooms": {
        "la_valla": {
          "id": "la_valla",
          "name": "La Valla (jueves de provisiones)",
          "shortName": "La Valla",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Pueblo desde donde se enviaba a los hermanos a las aldeas."
        },
        "aldea_bessat": {
          "id": "aldea_bessat",
          "name": "Aldea de El Bessat",
          "shortName": "El Bessat",
          "bgColor": "bg-emerald-100/70",
          "borderColor": "border-emerald-700/60",
          "textColor": "text-emerald-950",
          "tagColor": "bg-emerald-800 text-emerald-100",
          "description": "Rincón alejado del territorio parroquial."
        },
        "capilla_bessat": {
          "id": "capilla_bessat",
          "name": "Capilla del Bessat",
          "shortName": "Capilla",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Los domingos reunía allí a todos los habitantes."
        },
        "casa_acogida": {
          "id": "casa_acogida",
          "name": "Casa de acogida",
          "shortName": "Acogida",
          "bgColor": "bg-rose-100/70",
          "borderColor": "border-rose-700/60",
          "textColor": "text-rose-950",
          "tagColor": "bg-rose-800 text-rose-100",
          "description": "Familia que lo alojaba mientras él preparaba su comida."
        },
        "camino_feria": {
          "id": "camino_feria",
          "name": "Camino de la feria",
          "shortName": "Camino feria",
          "bgColor": "bg-sky-100/70",
          "borderColor": "border-sky-700/60",
          "textColor": "text-sky-950",
          "tagColor": "bg-sky-800 text-sky-100",
          "description": "Paso entre Saint-Étienne y el valle del Ródano."
        }
      },
      "cellRooms": [
        [
          "capilla_bessat",
          "capilla_bessat",
          "la_valla",
          "la_valla",
          "la_valla"
        ],
        [
          "capilla_bessat",
          "la_valla",
          "la_valla",
          "aldea_bessat",
          "aldea_bessat"
        ],
        [
          "capilla_bessat",
          "capilla_bessat",
          "la_valla",
          "aldea_bessat",
          "aldea_bessat"
        ],
        [
          "casa_acogida",
          "casa_acogida",
          "casa_acogida",
          "aldea_bessat",
          "aldea_bessat"
        ],
        [
          "casa_acogida",
          "camino_feria",
          "camino_feria",
          "camino_feria",
          "camino_feria"
        ]
      ],
      "blockedObjects": {
        "3,4": {
          "emoji": "🔔",
          "name": "Campanilla",
          "evidenceCode": "EV-01",
          "description": "Con ella reunía a los niños mañana y tarde."
        },
        "2,2": {
          "emoji": "🥔",
          "name": "Saco de patatas",
          "evidenceCode": "EV-02",
          "description": "Provisiones semanales: patatas, queso y pan."
        },
        "2,0": {
          "emoji": "📖",
          "name": "Catecismo",
          "evidenceCode": "EV-03",
          "description": "Libro para enseñar las oraciones."
        }
      },
      "suspects": [
        {
          "id": "LA",
          "name": "Hermano Laurent (Jean-Claude Audras)",
          "role": "Catequista del Bessat",
          "avatar": "🧑",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Los jueves bajaba a por patatas, queso y pan.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "la_valla"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "2,2"
            }
          ]
        },
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Vicario y fundador",
          "avatar": "🧑‍🏫",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Le había confiado la misión de catequizar la aldea alejada.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "la_valla"
            }
          ]
        },
        {
          "id": "NI",
          "name": "Niño del Bessat",
          "role": "Alumno de catequesis",
          "avatar": "🧒",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Salía a escuchar la campanilla para aprender las oraciones.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "aldea_bessat"
            }
          ]
        },
        {
          "id": "FA",
          "name": "Familia anfitriona",
          "role": "Vecinos del Bessat",
          "avatar": "👨‍👩‍👧",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Lo alojaba mientras él preparaba su propio sustento.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_acogida"
            }
          ]
        },
        {
          "id": "FE",
          "name": "Feriante",
          "role": "Viajero de paso",
          "avatar": "🧑‍🌾",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Iba de paso hacia Saint-Étienne, de feria en feria.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "camino_feria"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "NI"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "El Bessat es un rincón muerto de la parroquia, pero un lugar de paso y de ferias.",
          "narrative": "",
          "relatedSuspects": [
            "FE"
          ]
        },
        {
          "id": "c2",
          "text": "Cada mañana y cada tarde recorría la aldea tocando una campanilla.",
          "narrative": "",
          "relatedSuspects": [
            "LA",
            "NI"
          ]
        },
        {
          "id": "c3",
          "text": "Cuando tenía a los niños reunidos les enseñaba oraciones, catecismo y lectura.",
          "narrative": "",
          "relatedSuspects": [
            "LA",
            "NI"
          ]
        },
        {
          "id": "c4",
          "text": "Los domingos reunía en la capilla a todos los habitantes de la aldea.",
          "narrative": "",
          "relatedSuspects": [
            "LA"
          ]
        }
      ],
      "solution": {
        "LA": {
          "row": 0,
          "col": 2
        },
        "MC": {
          "row": 1,
          "col": 1
        },
        "NI": {
          "row": 2,
          "col": 3
        },
        "FA": {
          "row": 3,
          "col": 0
        },
        "FE": {
          "row": 4,
          "col": 4
        }
      }
    }
  },
  {
    "id": "009-HM",
    "nombre": "El tesoro del Gier",
    "datos_juego": {
      "Tamano_Cuadricula": "5x5",
      "gridSize": 5,
      "categoria": "L’Hermitage y la tradición oral",
      "rasgos": [
        "estilo_maria",
        "sencillez"
      ],
      "fuenteHistorica": "L’Hermitage · Lanfrey T. 1, cap. 6",
      "textoClave": "Una tradición oral cuenta que Marcelino halló una estatua de la Virgen entre las rocas del Gier.",
      "contextoHistorico": "La historia no aparece en las fuentes maristas antiguas. Se recogió en la «Monographie» de 1925 y se atribuye a un octogenario de Izieux. El papa Benedicto XV la evocó en 1920. Tiene su parte realista: pedir una escalera al carretero explica cómo se buscaba el lugar de L’Hermitage.",
      "solucionExplicacion": "El «culpable» de este misterio es el carretero, que quiso compartir el hallazgo, pero Marcelino le dijo que aquel tesoro no se podía repartir. Es una tradición oral: sirve para reflexionar sobre cómo distinguir una fuente histórica de una leyenda piadosa.",
      "storyIntro": "Valle del Gier, 1824. Mientras busca terreno para construir su gran casa, Marcelino corre a pedir una escalera: ha encontrado «un tesoro». Un vecino, con los ojos muy abiertos, quiere su parte. ¿Quién es?",
      "epilogue": "¡Caso resuelto! El carretero quería repartir el tesoro, pero Marcelino no. La tradición dice que la Virgen volvió al mismo sitio y confirmó el lugar de L’Hermitage; la historia, en cambio, recuerda las compras y la autorización de 1824.",
      "subtitle": "L’Hermitage y la tradición oral · L’Hermitage · 5x5",
      "badge": "EL TESORO DEL GIER · 5x5",
      "victimId": "MC",
      "murdererId": "CA",
      "rooms": {
        "orillas_gier": {
          "id": "orillas_gier",
          "name": "Orillas del Gier (Les Gauds)",
          "shortName": "Orillas Gier",
          "bgColor": "bg-teal-100/70",
          "borderColor": "border-teal-700/60",
          "textColor": "text-teal-950",
          "tagColor": "bg-teal-800 text-teal-100",
          "description": "Valle encajonado donde se alzaría L’Hermitage."
        },
        "izieux": {
          "id": "izieux",
          "name": "Casa en Izieux",
          "shortName": "Izieux",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Donde vivía el octogenario que contó la historia."
        },
        "huerto_hermitage": {
          "id": "huerto_hermitage",
          "name": "Huerto de L’Hermitage",
          "shortName": "Huerto",
          "bgColor": "bg-emerald-100/70",
          "borderColor": "border-emerald-700/60",
          "textColor": "text-emerald-950",
          "tagColor": "bg-emerald-800 text-emerald-100",
          "description": "Jardín del edificio ya construido."
        },
        "roma": {
          "id": "roma",
          "name": "Roma (1920)",
          "shortName": "Roma",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Donde habló el papa Benedicto XV."
        },
        "la_valla": {
          "id": "la_valla",
          "name": "La Valla",
          "shortName": "La Valla",
          "bgColor": "bg-rose-100/70",
          "borderColor": "border-rose-700/60",
          "textColor": "text-rose-950",
          "tagColor": "bg-rose-800 text-rose-100",
          "description": "Adonde Marcelino llevó la estatua."
        }
      },
      "cellRooms": [
        [
          "la_valla",
          "orillas_gier",
          "orillas_gier",
          "orillas_gier",
          "orillas_gier"
        ],
        [
          "la_valla",
          "orillas_gier",
          "orillas_gier",
          "orillas_gier",
          "orillas_gier"
        ],
        [
          "la_valla",
          "la_valla",
          "izieux",
          "izieux",
          "izieux"
        ],
        [
          "huerto_hermitage",
          "la_valla",
          "izieux",
          "roma",
          "roma"
        ],
        [
          "huerto_hermitage",
          "la_valla",
          "roma",
          "roma",
          "roma"
        ]
      ],
      "blockedObjects": {
        "1,4": {
          "emoji": "🗿",
          "name": "Estatua de la Virgen",
          "evidenceCode": "EV-01",
          "description": "Imagen hallada, según la tradición, entre las rocas."
        },
        "1,2": {
          "emoji": "🪜",
          "name": "Escalera del carretero",
          "evidenceCode": "EV-02",
          "description": "La que Marcelino pidió prestada para recoger el hallazgo."
        },
        "4,3": {
          "emoji": "📜",
          "name": "Circulares, tomo 14",
          "evidenceCode": "EV-03",
          "description": "Recogen el discurso de Benedicto XV (1920)."
        }
      },
      "suspects": [
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Fundador buscando terreno",
          "avatar": "🧑‍🏫",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Examinaba el lugar para levantar el edificio principal.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "orillas_gier"
            },
            {
              "tipo": "norteDe",
              "sospechoso": "CA"
            }
          ]
        },
        {
          "id": "CA",
          "name": "El carretero",
          "role": "Vecino del Gier",
          "avatar": "🧑‍🌾",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Con los ojos muy abiertos, quiso compartir el «tesoro».",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "orillas_gier"
            }
          ]
        },
        {
          "id": "OC",
          "name": "Octogenario de Izieux",
          "role": "Narrador de la tradición",
          "avatar": "👴",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Contó la historia a finales del siglo XIX.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "izieux"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "MC"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "1,2"
            }
          ]
        },
        {
          "id": "HO",
          "name": "Hermano hortelano",
          "role": "Cuidador del huerto",
          "avatar": "🧑‍🌾",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Recibió el relato y lo transmitió a la comunidad.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "huerto_hermitage"
            },
            {
              "tipo": "norteDe",
              "sospechoso": "BE"
            }
          ]
        },
        {
          "id": "BE",
          "name": "Benedicto XV",
          "role": "Papa en 1920",
          "avatar": "👴",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Evocó la historia al declarar las virtudes de Champagnat.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "roma"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "Las fuentes antiguas nunca contaron esta historia; la recogió una monografía de 1925.",
          "narrative": "",
          "relatedSuspects": [
            "OC",
            "HO"
          ]
        },
        {
          "id": "c2",
          "text": "Marcelino pidió prestada una escalera para recoger el hallazgo.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "CA"
          ]
        },
        {
          "id": "c3",
          "text": "El hallazgo, dijo Marcelino, no se podía compartir.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "CA"
          ]
        },
        {
          "id": "c4",
          "text": "En 1920 un papa mencionó esta imagen al hablar de las primeras casas de los Hermanitos de María.",
          "narrative": "",
          "relatedSuspects": [
            "BE"
          ]
        }
      ],
      "solution": {
        "MC": {
          "row": 0,
          "col": 3
        },
        "CA": {
          "row": 1,
          "col": 1
        },
        "OC": {
          "row": 2,
          "col": 2
        },
        "HO": {
          "row": 3,
          "col": 0
        },
        "BE": {
          "row": 4,
          "col": 4
        }
      }
    }
  }
];
