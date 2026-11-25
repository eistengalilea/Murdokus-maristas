import { Reto } from '../types';

/**
 * RETOS DE HISTORIA MARISTA — MEDIOS (7x7)
 * Archivo GENERADO por scripts/generar-retos.ts a partir de scripts/retos-fuente. No editar a mano.
 */
export const RETOS_MARISTA_MEDIOS: Reto[] = [
  {
    "id": "010-HM",
    "nombre": "El joven de Les Palais",
    "datos_juego": {
      "Tamano_Cuadricula": "7x7",
      "gridSize": 7,
      "categoria": "Fundación",
      "rasgos": [
        "presencia",
        "sencillez"
      ],
      "fuenteHistorica": "La Valla · Lanfrey T. 1, cap. 3; Tras las huellas, 1.5",
      "textoClave": "A finales de octubre de 1816, Marcelino asistió en Les Palais a un joven moribundo, Jean-Baptiste Montagne, que no sabía nada de Dios.",
      "contextoHistorico": "Les Palais era una aldea de la parroquia de La Valla, en las laderas del Pilat. Según la biografía del hermano Jean-Baptiste (1856), aquel encuentro convenció a Marcelino de que no podía esperar más para fundar hermanos que educaran a los niños del campo. La fecha tradicional es el 28 de octubre de 1816.",
      "solucionExplicacion": "El responsable de aquella última lección fue el propio Marcelino: pasó cerca de dos horas enseñando al joven las verdades de la fe y lo confesó. Luego fue a ver a otro enfermo y, al volver, Montagne había muerto. De ahí nació su convicción: «¡Necesitamos hermanos!».",
      "storyIntro": "La Valla, otoño de 1816. Llaman con urgencia al joven vicario: en un caserío de la montaña, un muchacho se muere sin saber quién es Dios. Reconstruye dónde estaba cada uno aquella tarde para descubrir quién le dio su primera y última lección.",
      "epilogue": "¡Caso resuelto! Marcelino no llegó a tiempo de salvar la vida de Montagne, pero sí de acompañarlo. Dos meses después, el 2 de enero de 1817, instalaba a sus primeros discípulos en La Valla.",
      "subtitle": "Fundación · La Valla · 7x7",
      "badge": "EL JOVEN DE LES PALAIS · 7x7",
      "victimId": "MO",
      "murdererId": "MC",
      "rooms": {
        "casa_montagne": {
          "id": "casa_montagne",
          "name": "Casa de los Montagne",
          "shortName": "Casa Montagne",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Hogar campesino donde agonizaba el joven."
        },
        "cuadra": {
          "id": "cuadra",
          "name": "Cuadra del caserío",
          "shortName": "Cuadra",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Establo donde se guardaban los animales de la familia."
        },
        "senda_palais": {
          "id": "senda_palais",
          "name": "Senda de Les Palais",
          "shortName": "Senda",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Camino de montaña entre La Valla y la aldea."
        },
        "casa_vecina": {
          "id": "casa_vecina",
          "name": "Casa del otro enfermo",
          "shortName": "Casa vecina",
          "bgColor": "bg-sky-100/70",
          "borderColor": "border-sky-700/60",
          "textColor": "text-sky-950",
          "tagColor": "bg-sky-800 text-sky-100",
          "description": "Vivienda cercana adonde fue el vicario después."
        },
        "casa_parroquial": {
          "id": "casa_parroquial",
          "name": "Casa parroquial de La Valla",
          "shortName": "Parroquial",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Residencia del párroco y de su vicario."
        },
        "iglesia_lavalla": {
          "id": "iglesia_lavalla",
          "name": "Iglesia de La Valla",
          "shortName": "Iglesia",
          "bgColor": "bg-indigo-100/70",
          "borderColor": "border-indigo-700/60",
          "textColor": "text-indigo-950",
          "tagColor": "bg-indigo-800 text-indigo-100",
          "description": "Templo parroquial en el valle del Gier."
        }
      },
      "cellRooms": [
        [
          "casa_montagne",
          "casa_montagne",
          "casa_montagne",
          "casa_montagne",
          "casa_montagne",
          "casa_montagne",
          "casa_vecina"
        ],
        [
          "cuadra",
          "cuadra",
          "casa_montagne",
          "casa_montagne",
          "senda_palais",
          "senda_palais",
          "casa_vecina"
        ],
        [
          "cuadra",
          "cuadra",
          "senda_palais",
          "senda_palais",
          "senda_palais",
          "casa_vecina",
          "casa_vecina"
        ],
        [
          "iglesia_lavalla",
          "cuadra",
          "senda_palais",
          "senda_palais",
          "senda_palais",
          "casa_vecina",
          "casa_vecina"
        ],
        [
          "iglesia_lavalla",
          "cuadra",
          "cuadra",
          "cuadra",
          "casa_parroquial",
          "casa_vecina",
          "casa_vecina"
        ],
        [
          "iglesia_lavalla",
          "iglesia_lavalla",
          "iglesia_lavalla",
          "iglesia_lavalla",
          "casa_parroquial",
          "casa_parroquial",
          "casa_parroquial"
        ],
        [
          "iglesia_lavalla",
          "iglesia_lavalla",
          "casa_parroquial",
          "casa_parroquial",
          "casa_parroquial",
          "casa_parroquial",
          "casa_parroquial"
        ]
      ],
      "blockedObjects": {
        "0,1": {
          "emoji": "🕯️",
          "name": "Vela encendida",
          "evidenceCode": "EV-01",
          "description": "Luz junto al lecho del enfermo."
        },
        "4,2": {
          "emoji": "🐄",
          "name": "Vaca",
          "evidenceCode": "EV-02",
          "description": "Animal de la pequeña explotación familiar."
        },
        "2,2": {
          "emoji": "🪨",
          "name": "Mojón de piedra",
          "evidenceCode": "EV-03",
          "description": "Marca del camino de montaña."
        },
        "3,0": {
          "emoji": "📿",
          "name": "Rosario",
          "evidenceCode": "EV-04",
          "description": "Oración que Marcelino rezaba en sus caminatas."
        }
      },
      "suspects": [
        {
          "id": "MO",
          "name": "Jean-Baptiste Montagne",
          "role": "Joven de 17 años",
          "avatar": "🤒",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Gravemente enfermo, ignoraba hasta lo más básico de la fe.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_montagne"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "VG"
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
          "clueText": "Se sentó junto al lecho y le explicó la fe con palabras sencillas.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_montagne"
            },
            {
              "tipo": "junto_objeto",
              "objeto": "2,2"
            }
          ]
        },
        {
          "id": "PM",
          "name": "Padre de Montagne",
          "role": "Campesino de Les Palais",
          "avatar": "👨‍🌾",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Atendía a los animales para no oír la agonía de su hijo.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "cuadra"
            },
            {
              "tipo": "junto_objeto",
              "objeto": "2,2"
            }
          ]
        },
        {
          "id": "VG",
          "name": "Vecino guía",
          "role": "Mensajero de la aldea",
          "avatar": "🧑",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Había bajado a buscar al vicario y le indicaba el camino.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "senda_palais"
            }
          ]
        },
        {
          "id": "EN",
          "name": "Otro enfermo",
          "role": "Vecino del caserío",
          "avatar": "🛌",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Marcelino fue a verlo justo después de confesar al joven.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_vecina"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "RE"
            }
          ]
        },
        {
          "id": "RE",
          "name": "Párroco Rebod",
          "role": "Párroco de La Valla",
          "avatar": "👴",
          "color": "from-stone-600 to-stone-800",
          "clueText": "Había enviado a su vicario a atender a los enfermos de las aldeas.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_parroquial"
            }
          ]
        },
        {
          "id": "JM",
          "name": "Jean-Marie Granjon",
          "role": "Futuro primer hermano",
          "avatar": "🧑‍🌾",
          "color": "from-teal-600 to-teal-800",
          "clueText": "Marcelino lo había conocido días antes y le estaba enseñando a leer.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "iglesia_lavalla"
            },
            {
              "tipo": "borde",
              "lado": "sur"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "El muchacho tenía unos diecisiete años y nadie le había hablado nunca de Dios.",
          "narrative": "",
          "relatedSuspects": [
            "MO"
          ]
        },
        {
          "id": "c2",
          "text": "El vicario pasó cerca de dos horas instruyéndolo y después lo confesó.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "MO"
          ]
        },
        {
          "id": "c3",
          "text": "Al salir, Marcelino fue a visitar a otro enfermo del vecindario.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "EN"
          ]
        },
        {
          "id": "c4",
          "text": "Pocos días antes, el 26 de octubre, Marcelino había conocido a Granjon al visitar a otro enfermo.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "JM"
          ]
        }
      ],
      "solution": {
        "MO": {
          "row": 0,
          "col": 4
        },
        "MC": {
          "row": 1,
          "col": 2
        },
        "PM": {
          "row": 2,
          "col": 1
        },
        "VG": {
          "row": 3,
          "col": 3
        },
        "EN": {
          "row": 4,
          "col": 5
        },
        "RE": {
          "row": 5,
          "col": 6
        },
        "JM": {
          "row": 6,
          "col": 0
        }
      }
    }
  },
  {
    "id": "011-HM",
    "nombre": "La fiebre de L’Hermitage",
    "datos_juego": {
      "Tamano_Cuadricula": "7x7",
      "gridSize": 7,
      "categoria": "Crisis y crecimiento",
      "rasgos": [
        "espiritu_familia",
        "presencia"
      ],
      "fuenteHistorica": "L’Hermitage · Lanfrey T. 1, cap. 6",
      "textoClave": "A finales de 1825, Marcelino cayó gravemente enfermo en L’Hermitage, una casa recién construida y cargada de deudas.",
      "contextoHistorico": "Jean-Claude Courveille, que había propuesto el proyecto marista en Fourvière, vivía en L’Hermitage y se consideraba superior de la obra. Durante la enfermedad del fundador intentó dirigir a los hermanos con severidad, mientras los acreedores temían perder su dinero. Los hermanos permanecieron fieles a Marcelino, y en 1826 Courveille se retiró a la trapa de Aiguebelle. El padre Terraillon también dejó la casa.",
      "solucionExplicacion": "El responsable de la crisis fue Jean-Claude Courveille: aprovechó la enfermedad de Marcelino para imponerse a los hermanos con dureza. Ellos no lo aceptaron como guía, Marcelino se recuperó en 1826 y la comunidad salió de la prueba más unida en torno a su fundador.",
      "storyIntro": "L’Hermitage, invierno de 1825. El fundador arde de fiebre, la casa nueva aún no está pagada y alguien quiere aprovechar el momento para mandar sobre los hermanos. Descubre dónde estaba cada uno y quién puso en peligro el espíritu de familia.",
      "epilogue": "¡Caso resuelto! Courveille quedó al descubierto y dejó la obra en 1826. Marcelino, ya recuperado, volvió a guiar a sus hermanos con la bondad de un padre.",
      "subtitle": "Crisis y crecimiento · L’Hermitage · 7x7",
      "badge": "LA FIEBRE DE L’HERMITAGE · 7x7",
      "victimId": "MC",
      "murdererId": "CV",
      "rooms": {
        "cuarto_fundador": {
          "id": "cuarto_fundador",
          "name": "Cuarto del fundador",
          "shortName": "Cuarto",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Habitación donde Marcelino guardaba cama."
        },
        "capilla_hermitage": {
          "id": "capilla_hermitage",
          "name": "Capilla de L’Hermitage",
          "shortName": "Capilla",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Lugar de oración de la comunidad."
        },
        "cocina": {
          "id": "cocina",
          "name": "Cocina de la comunidad",
          "shortName": "Cocina",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Donde se preparaban las comidas de la casa."
        },
        "sala_estudio": {
          "id": "sala_estudio",
          "name": "Sala de estudio",
          "shortName": "Estudio",
          "bgColor": "bg-blue-100/70",
          "borderColor": "border-blue-700/60",
          "textColor": "text-blue-950",
          "tagColor": "bg-blue-800 text-blue-100",
          "description": "Aula donde los jóvenes hermanos se formaban."
        },
        "obras": {
          "id": "obras",
          "name": "Obras de la casa",
          "shortName": "Obras",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Muros y dependencias aún por terminar."
        },
        "rectoria_stchamond": {
          "id": "rectoria_stchamond",
          "name": "Rectoría de Saint-Chamond",
          "shortName": "Saint-Chamond",
          "bgColor": "bg-indigo-100/70",
          "borderColor": "border-indigo-700/60",
          "textColor": "text-indigo-950",
          "tagColor": "bg-indigo-800 text-indigo-100",
          "description": "Casa del párroco de la ciudad vecina."
        }
      },
      "cellRooms": [
        [
          "obras",
          "cuarto_fundador",
          "cuarto_fundador",
          "cuarto_fundador",
          "cuarto_fundador",
          "cuarto_fundador",
          "cuarto_fundador"
        ],
        [
          "obras",
          "capilla_hermitage",
          "cuarto_fundador",
          "sala_estudio",
          "sala_estudio",
          "cuarto_fundador",
          "cuarto_fundador"
        ],
        [
          "obras",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage",
          "sala_estudio",
          "cuarto_fundador",
          "cuarto_fundador"
        ],
        [
          "obras",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage",
          "sala_estudio",
          "sala_estudio",
          "sala_estudio"
        ],
        [
          "obras",
          "cocina",
          "cocina",
          "cocina",
          "cocina",
          "sala_estudio",
          "rectoria_stchamond"
        ],
        [
          "obras",
          "obras",
          "cocina",
          "rectoria_stchamond",
          "rectoria_stchamond",
          "rectoria_stchamond",
          "rectoria_stchamond"
        ],
        [
          "obras",
          "cocina",
          "cocina",
          "cocina",
          "rectoria_stchamond",
          "rectoria_stchamond",
          "rectoria_stchamond"
        ]
      ],
      "blockedObjects": {
        "2,6": {
          "emoji": "🛏️",
          "name": "Cama del enfermo",
          "evidenceCode": "EV-01",
          "description": "Lecho donde Marcelino pasó semanas con fiebre."
        },
        "2,2": {
          "emoji": "✝️",
          "name": "Crucifijo",
          "evidenceCode": "EV-02",
          "description": "Cruz ante la que rezaba la comunidad."
        },
        "4,4": {
          "emoji": "🍲",
          "name": "Olla de caldo",
          "evidenceCode": "EV-03",
          "description": "Comida caliente para el enfermo."
        },
        "1,0": {
          "emoji": "🧱",
          "name": "Pila de piedras",
          "evidenceCode": "EV-04",
          "description": "Material que los propios hermanos acarreaban."
        },
        "5,6": {
          "emoji": "📜",
          "name": "Pagarés",
          "evidenceCode": "EV-05",
          "description": "Papeles de las deudas de la construcción."
        }
      },
      "suspects": [
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Fundador enfermo",
          "avatar": "🤒",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Agotado por el trabajo, temía dejar a los hermanos sin rumbo.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "cuarto_fundador"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "4,4"
            }
          ]
        },
        {
          "id": "CV",
          "name": "Jean-Claude Courveille",
          "role": "Sacerdote de la casa",
          "avatar": "🧔",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Se creía el verdadero superior y quería mandar con mano dura.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "cuarto_fundador"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "TE"
            }
          ]
        },
        {
          "id": "TE",
          "name": "Étienne Terraillon",
          "role": "Sacerdote auxiliar",
          "avatar": "🧑‍🦳",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Había venido a ayudar, pero apoyó poco a Marcelino en la crisis.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "capilla_hermitage"
            }
          ]
        },
        {
          "id": "FR",
          "name": "Hermano François (Gabriel Rivat)",
          "role": "Hermano joven",
          "avatar": "🧑‍🎓",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Había entrado de niño en La Valla y sería el sucesor de Marcelino.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "sala_estudio"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "5,6"
            }
          ]
        },
        {
          "id": "ST",
          "name": "Hermano Stanislas",
          "role": "Hermano de la casa",
          "avatar": "🧑‍🍳",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Muy unido al fundador, le reprochó a Courveille su dureza y avisó a Marcelino.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "cocina"
            }
          ]
        },
        {
          "id": "LU",
          "name": "Hermano Louis (Jean-Baptiste Audras)",
          "role": "Uno de los primeros hermanos",
          "avatar": "🧑‍🔧",
          "color": "from-stone-600 to-stone-800",
          "clueText": "Seguía con el trabajo de la casa, aunque dudaba si hacerse sacerdote.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "obras"
            }
          ]
        },
        {
          "id": "DE",
          "name": "Párroco Dervieux",
          "role": "Párroco de Saint-Chamond",
          "avatar": "👴",
          "color": "from-teal-600 to-teal-800",
          "clueText": "Tranquilizaba a los acreedores, preocupados por las deudas de la obra.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "rectoria_stchamond"
            },
            {
              "tipo": "borde",
              "lado": "sur"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "Marcelino cayó enfermo hacia la Navidad de 1825 y muchos temieron por su vida.",
          "narrative": "",
          "relatedSuspects": [
            "MC"
          ]
        },
        {
          "id": "c2",
          "text": "Los acreedores se inquietaron: la casa nueva todavía no estaba pagada.",
          "narrative": "",
          "relatedSuspects": [
            "DE"
          ]
        },
        {
          "id": "c3",
          "text": "Uno de los sacerdotes de la casa quiso imponer a los hermanos una disciplina severa.",
          "narrative": "",
          "relatedSuspects": [
            "CV"
          ]
        },
        {
          "id": "c4",
          "text": "Los hermanos siguieron unidos a Marcelino; en 1826, Courveille y Terraillon dejaron la casa.",
          "narrative": "",
          "relatedSuspects": [
            "CV",
            "TE"
          ]
        }
      ],
      "solution": {
        "MC": {
          "row": 0,
          "col": 4
        },
        "CV": {
          "row": 1,
          "col": 2
        },
        "TE": {
          "row": 2,
          "col": 3
        },
        "FR": {
          "row": 3,
          "col": 6
        },
        "ST": {
          "row": 4,
          "col": 1
        },
        "LU": {
          "row": 5,
          "col": 0
        },
        "DE": {
          "row": 6,
          "col": 5
        }
      }
    }
  },
  {
    "id": "012-HM",
    "nombre": "Rumbo a Oceanía",
    "datos_juego": {
      "Tamano_Cuadricula": "7x7",
      "gridSize": 7,
      "categoria": "Misión",
      "rasgos": [
        "estilo_maria",
        "presencia"
      ],
      "fuenteHistorica": "L’Hermitage · Lanfrey T. 1, cap. 7; Tras las huellas, 1.8",
      "textoClave": "En 1836, Roma aprobó la Sociedad de María y le confió Oceanía occidental; tres hermanos de Marcelino partieron con los primeros padres maristas.",
      "contextoHistorico": "El papa Gregorio XVI aprobó la Sociedad de María el 29 de abril de 1836. El 24 de septiembre, una veintena de aspirantes maristas, Marcelino entre ellos, eligió a Jean-Claude Colin superior general. La primera expedición, guiada por el obispo Pompallier, partió el 24 de diciembre de 1836 con los padres Servant, Bataillon, Bret y Chanel.",
      "solucionExplicacion": "El responsable de que los hermanos llegaran a Oceanía fue Marcelino: pidió a Colin ir él mismo, pero Colin le respondió que su misión era «prepararles apóstoles», y Marcelino preparó a tres de sus hermanos. El hermano Marie-Nizier aceptó con alegría y partió con los hermanos Michel y Joseph-Xavier.",
      "storyIntro": "L’Hermitage, otoño de 1836. Roma acaba de confiar a los maristas unas islas lejanas y desconocidas. Alguien tiene que decidir qué hermanos irán. Averigua dónde estaba cada uno y quién eligió a los primeros misioneros.",
      "epilogue": "¡Caso resuelto! Marcelino envió a sus hermanos al otro lado del mundo. Desde entonces, los hermanos maristas están presentes en Oceanía.",
      "subtitle": "Misión · L’Hermitage · 7x7",
      "badge": "RUMBO A OCEANÍA · 7x7",
      "victimId": "MN",
      "murdererId": "MC",
      "rooms": {
        "despacho": {
          "id": "despacho",
          "name": "Despacho del superior",
          "shortName": "Despacho",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Pequeña habitación de Marcelino en L’Hermitage."
        },
        "capilla_hermitage": {
          "id": "capilla_hermitage",
          "name": "Capilla de L’Hermitage",
          "shortName": "Capilla",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Allí la comunidad encomendaba a María la misión."
        },
        "huerto": {
          "id": "huerto",
          "name": "Huerto de la casa",
          "shortName": "Huerto",
          "bgColor": "bg-emerald-100/70",
          "borderColor": "border-emerald-700/60",
          "textColor": "text-emerald-950",
          "tagColor": "bg-emerald-800 text-emerald-100",
          "description": "Tierra cultivada por los hermanos junto al Gier."
        },
        "belley": {
          "id": "belley",
          "name": "Colegio de Belley",
          "shortName": "Belley",
          "bgColor": "bg-blue-100/70",
          "borderColor": "border-blue-700/60",
          "textColor": "text-blue-950",
          "tagColor": "bg-blue-800 text-blue-100",
          "description": "Casa donde residía el padre Colin."
        },
        "puerto": {
          "id": "puerto",
          "name": "Puerto de embarque",
          "shortName": "Puerto",
          "bgColor": "bg-sky-100/70",
          "borderColor": "border-sky-700/60",
          "textColor": "text-sky-950",
          "tagColor": "bg-sky-800 text-sky-100",
          "description": "Muelle desde el que zarpó la expedición."
        },
        "navio": {
          "id": "navio",
          "name": "Navío de la expedición",
          "shortName": "Navío",
          "bgColor": "bg-teal-100/70",
          "borderColor": "border-teal-700/60",
          "textColor": "text-teal-950",
          "tagColor": "bg-teal-800 text-teal-100",
          "description": "Velero que llevaría a los misioneros al Pacífico."
        }
      },
      "cellRooms": [
        [
          "huerto",
          "huerto",
          "despacho",
          "despacho",
          "despacho",
          "despacho",
          "despacho"
        ],
        [
          "huerto",
          "huerto",
          "puerto",
          "despacho",
          "despacho",
          "despacho",
          "despacho"
        ],
        [
          "huerto",
          "huerto",
          "puerto",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage"
        ],
        [
          "huerto",
          "huerto",
          "puerto",
          "puerto",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage"
        ],
        [
          "belley",
          "belley",
          "belley",
          "puerto",
          "puerto",
          "navio",
          "navio"
        ],
        [
          "belley",
          "belley",
          "belley",
          "puerto",
          "puerto",
          "navio",
          "navio"
        ],
        [
          "belley",
          "belley",
          "belley",
          "puerto",
          "puerto",
          "navio",
          "navio"
        ]
      ],
      "blockedObjects": {
        "1,5": {
          "emoji": "🗺️",
          "name": "Mapa de Oceanía",
          "evidenceCode": "EV-01",
          "description": "Islas lejanas que nadie de la casa conocía."
        },
        "2,4": {
          "emoji": "📿",
          "name": "Rosario",
          "evidenceCode": "EV-02",
          "description": "Oración a María por los misioneros."
        },
        "0,1": {
          "emoji": "🌱",
          "name": "Semillero",
          "evidenceCode": "EV-03",
          "description": "Plantas que los hermanos cuidaban cada día."
        },
        "3,2": {
          "emoji": "⚓",
          "name": "Ancla",
          "evidenceCode": "EV-04",
          "description": "Hierro del muelle."
        },
        "4,5": {
          "emoji": "🧭",
          "name": "Brújula",
          "evidenceCode": "EV-05",
          "description": "Instrumento para cruzar dos océanos."
        }
      },
      "suspects": [
        {
          "id": "MN",
          "name": "Hermano Marie-Nizier (Jean-Marie Delorme)",
          "role": "Hermano misionero",
          "avatar": "🧑",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Aceptó con alegría partir hacia tierras desconocidas.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "despacho"
            }
          ]
        },
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Superior de los hermanos",
          "avatar": "🧑‍🏫",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Pidió ir él mismo a Oceanía, pero obedeció cuando le dijeron que no.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "despacho"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "2,4"
            }
          ]
        },
        {
          "id": "MI",
          "name": "Hermano Michel (Antoine Colombon)",
          "role": "Hermano misionero",
          "avatar": "🙏",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Se preparaba en oración antes del largo viaje.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "capilla_hermitage"
            },
            {
              "tipo": "junto_objeto",
              "objeto": "1,5"
            }
          ]
        },
        {
          "id": "JX",
          "name": "Hermano Joseph-Xavier (Jean-Xavier Luzy)",
          "role": "Hermano misionero",
          "avatar": "🧑‍🌾",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Hombre práctico: sus manos serían útiles en la misión.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "huerto"
            }
          ]
        },
        {
          "id": "CO",
          "name": "Jean-Claude Colin",
          "role": "Superior general marista",
          "avatar": "🧔",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Elegido en septiembre de 1836, organizaba la expedición desde Belley.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "belley"
            },
            {
              "tipo": "filaObjeto",
              "objeto": "4,5"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "JX"
            }
          ]
        },
        {
          "id": "PO",
          "name": "Obispo Pompallier",
          "role": "Vicario apostólico",
          "avatar": "🧑‍⚖️",
          "color": "from-stone-600 to-stone-800",
          "clueText": "Encabezaba la expedición que zarpó en Nochebuena.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "puerto"
            },
            {
              "tipo": "norteDe",
              "sospechoso": "CH"
            }
          ]
        },
        {
          "id": "CH",
          "name": "Padre Pierre Chanel",
          "role": "Sacerdote marista",
          "avatar": "🧑‍🦱",
          "color": "from-teal-600 to-teal-800",
          "clueText": "Era uno de los cuatro padres que acompañaban al obispo.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "navio"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "Gregorio XVI aprobó la Sociedad de María el 29 de abril de 1836.",
          "narrative": "",
          "relatedSuspects": [
            "CO"
          ]
        },
        {
          "id": "c2",
          "text": "El 24 de septiembre de 1836, Marcelino estuvo entre los que eligieron a Colin superior general.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "CO"
          ]
        },
        {
          "id": "c3",
          "text": "Tres hermanos fueron elegidos para acompañar a los primeros padres misioneros.",
          "narrative": "",
          "relatedSuspects": [
            "MN",
            "MI",
            "JX"
          ]
        },
        {
          "id": "c4",
          "text": "La expedición zarpó la víspera de Navidad de 1836 rumbo al Pacífico.",
          "narrative": "",
          "relatedSuspects": [
            "PO",
            "CH"
          ]
        }
      ],
      "solution": {
        "MN": {
          "row": 0,
          "col": 2
        },
        "MC": {
          "row": 1,
          "col": 4
        },
        "MI": {
          "row": 2,
          "col": 5
        },
        "JX": {
          "row": 3,
          "col": 0
        },
        "CO": {
          "row": 4,
          "col": 1
        },
        "PO": {
          "row": 5,
          "col": 3
        },
        "CH": {
          "row": 6,
          "col": 6
        }
      }
    }
  },
  {
    "id": "013-HM",
    "nombre": "El Acordaos en la nieve",
    "datos_juego": {
      "Tamano_Cuadricula": "7x7",
      "gridSize": 7,
      "categoria": "Confianza en María",
      "rasgos": [
        "estilo_maria",
        "presencia"
      ],
      "fuenteHistorica": "La Valla · Tras las huellas, 5.16 (Vida, VII); Lanfrey T. 1, cap. 11",
      "textoClave": "En febrero de 1823, al volver de Bourg-Argental, Marcelino y el hermano Stanislas se perdieron en la nieve de los montes del Pilat.",
      "contextoHistorico": "Uno de los hermanos de Bourg-Argental estaba gravemente enfermo; según Lanfrey, era el joven hermano Jean-Baptiste Furet. Marcelino fue a pie a bendecirlo y quiso regresar a La Valla aquel mismo día, aunque los hermanos y sus amigos le rogaron que no lo hiciera por la nieve y el temporal.",
      "solucionExplicacion": "El responsable de la salvación fue el propio Marcelino: cuando el hermano Stanislas se desplomó de cansancio, se arrodilló a su lado y rezó el Acordaos. A los pocos pasos vieron una luz y pasaron la noche en una casa. Desde entonces repetía que María los había librado de una muerte segura.",
      "storyIntro": "Montes del Pilat, febrero de 1823. Cae la noche, la ventisca no deja ver el camino y dos viajeros llevan horas perdidos entre los bosques. Descubre dónde estaba cada uno y quién sostuvo al hermano agotado hasta encontrar ayuda.",
      "epilogue": "¡Caso resuelto! La oración de Marcelino y una luz en la noche salvaron a los dos caminantes. María era, como él decía, su «Recurso ordinario».",
      "subtitle": "Confianza en María · La Valla · 7x7",
      "badge": "EL ACORDAOS EN LA NIEVE · 7x7",
      "victimId": "ST",
      "murdererId": "MC",
      "rooms": {
        "bosque_pilat": {
          "id": "bosque_pilat",
          "name": "Bosque del Pilat",
          "shortName": "Bosque",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Ladera nevada donde los caminantes se extraviaron."
        },
        "cuarto_enfermo": {
          "id": "cuarto_enfermo",
          "name": "Cuarto del hermano enfermo",
          "shortName": "Cuarto",
          "bgColor": "bg-sky-100/70",
          "borderColor": "border-sky-700/60",
          "textColor": "text-sky-950",
          "tagColor": "bg-sky-800 text-sky-100",
          "description": "Habitación de la comunidad de Bourg-Argental."
        },
        "escuela_bourg": {
          "id": "escuela_bourg",
          "name": "Escuela de Bourg-Argental",
          "shortName": "Escuela",
          "bgColor": "bg-blue-100/70",
          "borderColor": "border-blue-700/60",
          "textColor": "text-blue-950",
          "tagColor": "bg-blue-800 text-blue-100",
          "description": "Escuela fundada por los hermanos el 2 de enero de 1822."
        },
        "alcaldia": {
          "id": "alcaldia",
          "name": "Alcaldía de Bourg-Argental",
          "shortName": "Alcaldía",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Casa del alcalde que presidió la llegada de los hermanos."
        },
        "casa_luz": {
          "id": "casa_luz",
          "name": "Casa de la luz",
          "shortName": "Casa iluminada",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Vivienda aislada cuya luz vieron en la noche."
        },
        "casa_lavalla": {
          "id": "casa_lavalla",
          "name": "Casa de los hermanos de La Valla",
          "shortName": "Casa La Valla",
          "bgColor": "bg-emerald-100/70",
          "borderColor": "border-emerald-700/60",
          "textColor": "text-emerald-950",
          "tagColor": "bg-emerald-800 text-emerald-100",
          "description": "Comunidad que esperaba el regreso del Padre."
        }
      },
      "cellRooms": [
        [
          "bosque_pilat",
          "bosque_pilat",
          "bosque_pilat",
          "bosque_pilat",
          "bosque_pilat",
          "casa_luz",
          "casa_luz"
        ],
        [
          "bosque_pilat",
          "bosque_pilat",
          "bosque_pilat",
          "bosque_pilat",
          "bosque_pilat",
          "bosque_pilat",
          "casa_luz"
        ],
        [
          "escuela_bourg",
          "cuarto_enfermo",
          "cuarto_enfermo",
          "cuarto_enfermo",
          "cuarto_enfermo",
          "cuarto_enfermo",
          "casa_luz"
        ],
        [
          "escuela_bourg",
          "escuela_bourg",
          "casa_lavalla",
          "alcaldia",
          "alcaldia",
          "cuarto_enfermo",
          "casa_luz"
        ],
        [
          "escuela_bourg",
          "escuela_bourg",
          "casa_lavalla",
          "alcaldia",
          "alcaldia",
          "alcaldia",
          "casa_luz"
        ],
        [
          "escuela_bourg",
          "escuela_bourg",
          "casa_lavalla",
          "casa_lavalla",
          "alcaldia",
          "alcaldia",
          "casa_luz"
        ],
        [
          "casa_lavalla",
          "casa_lavalla",
          "casa_lavalla",
          "casa_lavalla",
          "casa_lavalla",
          "casa_luz",
          "casa_luz"
        ]
      ],
      "blockedObjects": {
        "0,0": {
          "emoji": "🌲",
          "name": "Abeto nevado",
          "evidenceCode": "EV-01",
          "description": "Árbol de los bosques del Pilat."
        },
        "3,5": {
          "emoji": "🛏️",
          "name": "Cama",
          "evidenceCode": "EV-02",
          "description": "Lecho del hermano enfermo."
        },
        "6,6": {
          "emoji": "🏮",
          "name": "Farol",
          "evidenceCode": "EV-03",
          "description": "La luz que brillaba no lejos de allí."
        },
        "6,4": {
          "emoji": "🔨",
          "name": "Yunque de clavos",
          "evidenceCode": "EV-04",
          "description": "Herramienta con la que la comunidad se ganaba el pan."
        }
      },
      "suspects": [
        {
          "id": "ST",
          "name": "Hermano Stanislas (Claude Fayol)",
          "role": "Compañero de viaje",
          "avatar": "🥶",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Agotado y helado, se desplomó sobre la nieve.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "bosque_pilat"
            },
            {
              "tipo": "filaObjeto",
              "objeto": "0,0"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "LU"
            }
          ]
        },
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Fundador",
          "avatar": "🧑‍🏫",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Lo tomó del brazo para guiarlo y luego se arrodilló a rezar.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "bosque_pilat"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "6,4"
            }
          ]
        },
        {
          "id": "JB",
          "name": "Hermano Jean-Baptiste Furet",
          "role": "Hermano enfermo",
          "avatar": "🤒",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Joven asmático llegado de la Haute-Loire, había recibido la bendición del Padre.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "cuarto_enfermo"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "ST"
            }
          ]
        },
        {
          "id": "JM",
          "name": "Hermano Jean-Marie Granjon",
          "role": "Director de la comunidad",
          "avatar": "🧑‍🌾",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Antiguo granadero, toda la parroquia admiraba su caridad.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "escuela_bourg"
            }
          ]
        },
        {
          "id": "PL",
          "name": "Señor de Pleyné",
          "role": "Alcalde de Bourg-Argental",
          "avatar": "🎩",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Como otros amigos, aconsejó al Padre no ponerse en camino.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "alcaldia"
            }
          ]
        },
        {
          "id": "HC",
          "name": "Habitante de la casa",
          "role": "Campesino del Pilat",
          "avatar": "🧑‍🌾",
          "color": "from-stone-600 to-stone-800",
          "clueText": "Su luz brillaba en la oscuridad cuando nadie la esperaba.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_luz"
            },
            {
              "tipo": "junto_objeto",
              "objeto": "6,6"
            }
          ]
        },
        {
          "id": "LU",
          "name": "Hermano Louis (Jean-Baptiste Audras)",
          "role": "Hermano de La Valla",
          "avatar": "🧑",
          "color": "from-teal-600 to-teal-800",
          "clueText": "Esperaba con inquietud que el Padre volviera aquella noche.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_lavalla"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "En febrero de 1823, el Padre fue a pie a Bourg-Argental para bendecir a un hermano gravemente enfermo.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "JB"
          ]
        },
        {
          "id": "c2",
          "text": "Los hermanos y sus amigos le rogaron que no regresara con aquel temporal, pero no les hizo caso.",
          "narrative": "",
          "relatedSuspects": [
            "JM",
            "PL"
          ]
        },
        {
          "id": "c3",
          "text": "A las dos horas de marcha se extraviaron y el hermano ya no podía tenerse en pie.",
          "narrative": "",
          "relatedSuspects": [
            "ST"
          ]
        },
        {
          "id": "c4",
          "text": "Tras rezar el Acordaos, a los diez pasos vieron una luz y llegaron a una casa donde pasaron la noche.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "HC"
          ]
        }
      ],
      "solution": {
        "ST": {
          "row": 0,
          "col": 2
        },
        "MC": {
          "row": 1,
          "col": 4
        },
        "JB": {
          "row": 2,
          "col": 1
        },
        "JM": {
          "row": 3,
          "col": 0
        },
        "PL": {
          "row": 4,
          "col": 5
        },
        "HC": {
          "row": 5,
          "col": 6
        },
        "LU": {
          "row": 6,
          "col": 3
        }
      }
    }
  },
  {
    "id": "014-HM",
    "nombre": "Los ocho de la Haute-Loire",
    "datos_juego": {
      "Tamano_Cuadricula": "7x7",
      "gridSize": 7,
      "categoria": "Vocaciones",
      "rasgos": [
        "estilo_maria",
        "espiritu_familia"
      ],
      "fuenteHistorica": "La Valla · Lanfrey T. 1, cap. 4",
      "textoClave": "En la primavera de 1822, con el noviciado vacío, llegaron a La Valla ocho jóvenes de la Haute-Loire que pedían ser hermanos.",
      "contextoHistorico": "Entre 1819 y 1821 solo cuatro postulantes habían tomado el hábito. Hacia mitad de la Cuaresma de 1822, un joven que decía haber pasado seis años con los Hermanos de las Escuelas Cristianas pidió entrar y se hizo dar una carta de recomendación. En su comarca de Saint-Pal-en-Chalencon reunió a ocho muchachos de 15 a 25 años. El 26 de abril, el inspector Guillard encontró en La Valla de 12 a 15 jóvenes campesinos en formación.",
      "solucionExplicacion": "El responsable de la sorpresa fue el antiguo Hermano de las Escuelas Cristianas: prometió traer media docena de postulantes y volvió con ocho. Marcelino convenció a los hermanos de admitirlos, pese a la opinión contraria de sus amigos sacerdotes. Uno de ellos, Jean-Baptiste Furet, sería el biógrafo del fundador. «Es Nuestra Señora del Puy quien los había preparado», diría el hermano Jean-Baptiste.",
      "storyIntro": "La Valla, Pascua de 1822. La casa está casi vacía de novicios y, de pronto, aparece en la puerta un grupo de muchachos del Velay pidiendo quedarse. ¿Quién los ha traído? Ordena el plano para descubrirlo.",
      "epilogue": "¡Caso resuelto! El ex hermano cumplió su promesa con creces. Desde entonces Marcelino no se atrevió a rechazar a quien se presentaba: «los considero como traídos por María misma».",
      "subtitle": "Vocaciones · La Valla · 7x7",
      "badge": "LOS OCHO DE LA HAUTE-LOIRE · 7x7",
      "victimId": "MC",
      "murdererId": "EX",
      "rooms": {
        "casa_hermanos": {
          "id": "casa_hermanos",
          "name": "Casa de los hermanos",
          "shortName": "Casa",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Vivienda comprada en La Valla para la comunidad."
        },
        "sala_capitulo": {
          "id": "sala_capitulo",
          "name": "Sala de reunión",
          "shortName": "Reunión",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Donde los hermanos votaron la admisión de los recién llegados."
        },
        "huerto": {
          "id": "huerto",
          "name": "Huerto",
          "shortName": "Huerto",
          "bgColor": "bg-emerald-100/70",
          "borderColor": "border-emerald-700/60",
          "textColor": "text-emerald-950",
          "tagColor": "bg-emerald-800 text-emerald-100",
          "description": "Tierra que daba de comer a la comunidad."
        },
        "aula": {
          "id": "aula",
          "name": "Aula de La Valla",
          "shortName": "Aula",
          "bgColor": "bg-blue-100/70",
          "borderColor": "border-blue-700/60",
          "textColor": "text-blue-950",
          "tagColor": "bg-blue-800 text-blue-100",
          "description": "Clase donde los jóvenes aprendían el método de los hermanos."
        },
        "casa_parroquial": {
          "id": "casa_parroquial",
          "name": "Casa parroquial",
          "shortName": "Parroquial",
          "bgColor": "bg-indigo-100/70",
          "borderColor": "border-indigo-700/60",
          "textColor": "text-indigo-950",
          "tagColor": "bg-indigo-800 text-indigo-100",
          "description": "Allí opinaban los sacerdotes amigos del vicario."
        },
        "camino_velay": {
          "id": "camino_velay",
          "name": "Camino del Velay",
          "shortName": "Camino",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Ruta de unos 60 km desde Saint-Pal-en-Chalencon."
        }
      },
      "cellRooms": [
        [
          "casa_hermanos",
          "casa_hermanos",
          "casa_hermanos",
          "casa_hermanos",
          "casa_hermanos",
          "casa_hermanos",
          "casa_hermanos"
        ],
        [
          "casa_hermanos",
          "casa_hermanos",
          "huerto",
          "casa_hermanos",
          "casa_hermanos",
          "casa_hermanos",
          "camino_velay"
        ],
        [
          "huerto",
          "huerto",
          "huerto",
          "camino_velay",
          "camino_velay",
          "camino_velay",
          "camino_velay"
        ],
        [
          "huerto",
          "sala_capitulo",
          "sala_capitulo",
          "camino_velay",
          "camino_velay",
          "sala_capitulo",
          "camino_velay"
        ],
        [
          "huerto",
          "huerto",
          "sala_capitulo",
          "sala_capitulo",
          "sala_capitulo",
          "sala_capitulo",
          "sala_capitulo"
        ],
        [
          "casa_parroquial",
          "casa_parroquial",
          "casa_parroquial",
          "aula",
          "aula",
          "aula",
          "aula"
        ],
        [
          "casa_parroquial",
          "casa_parroquial",
          "casa_parroquial",
          "aula",
          "aula",
          "aula",
          "aula"
        ]
      ],
      "blockedObjects": {
        "0,1": {
          "emoji": "✉️",
          "name": "Carta de recomendación",
          "evidenceCode": "EV-01",
          "description": "La que el joven se hizo entregar antes de partir."
        },
        "4,4": {
          "emoji": "🗳️",
          "name": "Urna",
          "evidenceCode": "EV-02",
          "description": "Para votar la admisión de los postulantes."
        },
        "2,0": {
          "emoji": "🥬",
          "name": "Coles",
          "evidenceCode": "EV-03",
          "description": "Comida sencilla para una casa cada vez más llena."
        },
        "5,4": {
          "emoji": "🧮",
          "name": "Pizarra",
          "evidenceCode": "EV-04",
          "description": "Instrumento del método simultáneo."
        },
        "3,3": {
          "emoji": "🎒",
          "name": "Hatillos",
          "evidenceCode": "EV-05",
          "description": "Equipaje de los ocho muchachos."
        }
      },
      "suspects": [
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Vicario de La Valla",
          "avatar": "🧑‍🏫",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Le había ofrecido hospitalidad sin imaginar lo que vendría después.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_hermanos"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "JB"
            }
          ]
        },
        {
          "id": "EX",
          "name": "Antiguo Hermano de las Escuelas Cristianas",
          "role": "Reclutador",
          "avatar": "🧑‍💼",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Decía haber pasado seis años con los Hermanos de La Salle.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_hermanos"
            },
            {
              "tipo": "junto_objeto",
              "objeto": "2,0"
            }
          ]
        },
        {
          "id": "JB",
          "name": "Jean-Baptiste Furet",
          "role": "Postulante de 15 años",
          "avatar": "🧒",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Nacido en Saint-Pal-en-Chalencon, el asma le impedía el trabajo del campo.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "camino_velay"
            }
          ]
        },
        {
          "id": "PV",
          "name": "Otro postulante del Velay",
          "role": "Joven de la Haute-Loire",
          "avatar": "🧑",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Uno de los ocho, de entre 15 y 25 años.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "camino_velay"
            }
          ]
        },
        {
          "id": "AN",
          "name": "Hermano Antoine (Antoine Couturier)",
          "role": "Hermano antiguo",
          "avatar": "👦",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Convocado con los demás por Pascua para decidir.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "sala_capitulo"
            }
          ]
        },
        {
          "id": "SA",
          "name": "Sacerdote amigo",
          "role": "Consejero del vicario",
          "avatar": "👴",
          "color": "from-stone-600 to-stone-800",
          "clueText": "Opinaba que no había ni sitio ni dinero para tantos.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_parroquial"
            }
          ]
        },
        {
          "id": "GU",
          "name": "Inspector Guillard",
          "role": "Inspector de la Academia de Lyon",
          "avatar": "🕵️",
          "color": "from-teal-600 to-teal-800",
          "clueText": "Visitó La Valla el 26 de abril y tomó nota de lo que vio.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "aula"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "5,4"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "Hacia mitad de la Cuaresma, un joven pidió entrar y logró que le prometieran admitirlo si traía media docena de postulantes.",
          "narrative": "",
          "relatedSuspects": [
            "EX",
            "MC"
          ]
        },
        {
          "id": "c2",
          "text": "Regresó de su comarca con una tropa de ocho muchachos.",
          "narrative": "",
          "relatedSuspects": [
            "EX",
            "JB",
            "PV"
          ]
        },
        {
          "id": "c3",
          "text": "Por Pascua, los hermanos se reunieron y Marcelino los persuadió de admitirlos.",
          "narrative": "",
          "relatedSuspects": [
            "AN",
            "MC"
          ]
        },
        {
          "id": "c4",
          "text": "Sus amigos sacerdotes no estaban de acuerdo: faltaban sitio y dinero.",
          "narrative": "",
          "relatedSuspects": [
            "SA"
          ]
        }
      ],
      "solution": {
        "MC": {
          "row": 0,
          "col": 5
        },
        "EX": {
          "row": 1,
          "col": 0
        },
        "JB": {
          "row": 2,
          "col": 3
        },
        "PV": {
          "row": 3,
          "col": 6
        },
        "AN": {
          "row": 4,
          "col": 2
        },
        "SA": {
          "row": 5,
          "col": 1
        },
        "GU": {
          "row": 6,
          "col": 4
        }
      }
    }
  },
  {
    "id": "015-HM",
    "nombre": "La obra en entredicho",
    "datos_juego": {
      "Tamano_Cuadricula": "7x7",
      "gridSize": 7,
      "categoria": "Crisis y crecimiento",
      "rasgos": [
        "espiritu_familia",
        "sencillez"
      ],
      "fuenteHistorica": "La Valla · Lanfrey T. 1, cap. 4",
      "textoClave": "A finales de 1819 y principios de 1820, el comité cantonal de escuelas denunció la obra de Champagnat al arzobispado.",
      "contextoHistorico": "Como Marcelino enseñaba latín a algunos alumnos, el director del colegio de Saint-Chamond sospechó que La Valla escondía un colegio clandestino. El comité cantonal, presidido por el párroco Dervieux, amenazó con cerrar la casa con los gendarmes y alejar al vicario. Marcelino pensó en vender la casa y marcharse; los hermanos decidieron seguirlo en cualquier circunstancia.",
      "solucionExplicacion": "El responsable de la amenaza fue el párroco Dervieux, que se encarnizó contra la obra. La salvaron los vicarios generales: Courbon se negó a exiliar a Marcelino y lo animó a perseverar, y Bochard, que pensaba en sus propios «hermanos de la Cruz de Jesús», tampoco siguió a Dervieux. Años después, el mismo Dervieux acogería a Marcelino enfermo en su casa.",
      "storyIntro": "La Valla, invierno de 1819. Corren rumores: dicen que el vicario dirige un colegio ilegal y que pronto vendrán los gendarmes. Reconstruye dónde estaba cada uno para descubrir quién quería cerrar la casa de los hermanos.",
      "epilogue": "¡Caso resuelto! Dervieux tuvo que ceder ante los vicarios generales. Marcelino no tuvo que exiliarse y sus hermanos, que habían decidido seguirlo a donde fuera, siguieron enseñando en La Valla.",
      "subtitle": "Crisis y crecimiento · La Valla · 7x7",
      "badge": "LA OBRA EN ENTREDICHO · 7x7",
      "victimId": "MC",
      "murdererId": "DE",
      "rooms": {
        "casa_lavalla": {
          "id": "casa_lavalla",
          "name": "Casa comprada de La Valla",
          "shortName": "Casa comprada",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Casa de los hermanos y de los alumnos internos."
        },
        "aula_latin": {
          "id": "aula_latin",
          "name": "Aula de latín",
          "shortName": "Latín",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Donde algunos alumnos estudiaban para el seminario."
        },
        "colegio_stchamond": {
          "id": "colegio_stchamond",
          "name": "Colegio de Saint-Chamond",
          "shortName": "Colegio",
          "bgColor": "bg-blue-100/70",
          "borderColor": "border-blue-700/60",
          "textColor": "text-blue-950",
          "tagColor": "bg-blue-800 text-blue-100",
          "description": "Centro de enseñanza que temía la competencia."
        },
        "vicaria_lyon": {
          "id": "vicaria_lyon",
          "name": "Vicaría general de Lyon",
          "shortName": "Vicaría",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Oficinas desde donde se gobernaba la diócesis."
        },
        "despacho_bochard": {
          "id": "despacho_bochard",
          "name": "Despacho de Bochard",
          "shortName": "Despacho",
          "bgColor": "bg-indigo-100/70",
          "borderColor": "border-indigo-700/60",
          "textColor": "text-indigo-950",
          "tagColor": "bg-indigo-800 text-indigo-100",
          "description": "Allí se proyectaba una congregación diocesana."
        },
        "posada": {
          "id": "posada",
          "name": "Posada de Saint-Chamond",
          "shortName": "Posada",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Alojamiento de los viajeros de paso por la ciudad."
        }
      },
      "cellRooms": [
        [
          "colegio_stchamond",
          "casa_lavalla",
          "casa_lavalla",
          "casa_lavalla",
          "casa_lavalla",
          "casa_lavalla",
          "casa_lavalla"
        ],
        [
          "colegio_stchamond",
          "colegio_stchamond",
          "casa_lavalla",
          "casa_lavalla",
          "aula_latin",
          "casa_lavalla",
          "vicaria_lyon"
        ],
        [
          "colegio_stchamond",
          "colegio_stchamond",
          "aula_latin",
          "aula_latin",
          "aula_latin",
          "aula_latin",
          "vicaria_lyon"
        ],
        [
          "colegio_stchamond",
          "colegio_stchamond",
          "aula_latin",
          "despacho_bochard",
          "vicaria_lyon",
          "vicaria_lyon",
          "vicaria_lyon"
        ],
        [
          "colegio_stchamond",
          "colegio_stchamond",
          "despacho_bochard",
          "despacho_bochard",
          "vicaria_lyon",
          "vicaria_lyon",
          "vicaria_lyon"
        ],
        [
          "colegio_stchamond",
          "despacho_bochard",
          "despacho_bochard",
          "despacho_bochard",
          "posada",
          "posada",
          "posada"
        ],
        [
          "posada",
          "posada",
          "posada",
          "posada",
          "posada",
          "posada",
          "posada"
        ]
      ],
      "blockedObjects": {
        "0,5": {
          "emoji": "🔑",
          "name": "Llaves de la casa",
          "evidenceCode": "EV-01",
          "description": "Marcelino llegó a pensar en venderla."
        },
        "2,3": {
          "emoji": "📕",
          "name": "Gramática latina",
          "evidenceCode": "EV-02",
          "description": "El libro que despertó las sospechas."
        },
        "3,6": {
          "emoji": "✒️",
          "name": "Pluma y tintero",
          "evidenceCode": "EV-03",
          "description": "Para firmar los nombramientos de los sacerdotes."
        },
        "6,1": {
          "emoji": "🧳",
          "name": "Maleta",
          "evidenceCode": "EV-04",
          "description": "Equipaje del inspector de viaje."
        }
      },
      "suspects": [
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Vicario de La Valla",
          "avatar": "🧑‍🏫",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Ante la amenaza, se preparaba para vender la casa y partir al exilio.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_lavalla"
            }
          ]
        },
        {
          "id": "DE",
          "name": "Párroco Dervieux",
          "role": "Presidente del comité cantonal",
          "avatar": "👴",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Amenazaba con hacer cerrar el centro por los gendarmes.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_lavalla"
            },
            {
              "tipo": "junto_objeto",
              "objeto": "2,3"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "JM"
            }
          ]
        },
        {
          "id": "JM",
          "name": "Hermano Jean-Marie Granjon",
          "role": "Director de los hermanos",
          "avatar": "🧑‍🌾",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Elegido por sus compañeros en votación secreta en 1819.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "aula_latin"
            },
            {
              "tipo": "junto_objeto",
              "objeto": "2,3"
            }
          ]
        },
        {
          "id": "CA",
          "name": "Señor Cathelin",
          "role": "Director del colegio",
          "avatar": "🧑‍🎓",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Creía que el vicario le hacía la competencia con un colegio clandestino.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "colegio_stchamond"
            },
            {
              "tipo": "norteDe",
              "sospechoso": "CO"
            }
          ]
        },
        {
          "id": "CO",
          "name": "Vicario general Courbon",
          "role": "Encargado de los sacerdotes",
          "avatar": "⛪",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Se negó a exiliar a Marcelino y lo animó a perseverar.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "vicaria_lyon"
            }
          ]
        },
        {
          "id": "BO",
          "name": "Vicario general Bochard",
          "role": "Encargado de la educación",
          "avatar": "🧔",
          "color": "from-stone-600 to-stone-800",
          "clueText": "Soñaba con unos «hermanos de la Cruz de Jesús» para toda la diócesis.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "despacho_bochard"
            }
          ]
        },
        {
          "id": "GU",
          "name": "Inspector Guillard",
          "role": "Inspector de la Academia",
          "avatar": "🕵️",
          "color": "from-teal-600 to-teal-800",
          "clueText": "De paso por la ciudad en mayo de 1820, oyó hablar de la casa del vicario y sus maestros.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "posada"
            },
            {
              "tipo": "borde",
              "lado": "este"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "Como el vicario enseñaba latín a algunos alumnos, alguien supuso que dirigía un colegio rival.",
          "narrative": "",
          "relatedSuspects": [
            "CA",
            "MC"
          ]
        },
        {
          "id": "c2",
          "text": "El comité cantonal de escuelas decidió denunciar la casa al arzobispado.",
          "narrative": "",
          "relatedSuspects": [
            "DE"
          ]
        },
        {
          "id": "c3",
          "text": "Interrogados sobre sus intenciones, los hermanos decidieron seguir a Marcelino en cualquier circunstancia.",
          "narrative": "",
          "relatedSuspects": [
            "JM"
          ]
        },
        {
          "id": "c4",
          "text": "Uno de los vicarios generales se negó a exiliarlo; otro prefería anexionar la obra a su propio proyecto.",
          "narrative": "",
          "relatedSuspects": [
            "CO",
            "BO"
          ]
        }
      ],
      "solution": {
        "MC": {
          "row": 0,
          "col": 4
        },
        "DE": {
          "row": 1,
          "col": 3
        },
        "JM": {
          "row": 2,
          "col": 2
        },
        "CA": {
          "row": 3,
          "col": 0
        },
        "CO": {
          "row": 4,
          "col": 5
        },
        "BO": {
          "row": 5,
          "col": 1
        },
        "GU": {
          "row": 6,
          "col": 6
        }
      }
    }
  },
  {
    "id": "016-HM",
    "nombre": "El alumno de latín",
    "datos_juego": {
      "Tamano_Cuadricula": "7x7",
      "gridSize": 7,
      "categoria": "Vocaciones",
      "rasgos": [
        "presencia",
        "espiritu_familia"
      ],
      "fuenteHistorica": "La Valla · Lanfrey T. 1, caps. 3-4",
      "textoClave": "En mayo de 1818, Marcelino recibió a Gabriel Rivat, de 10 años, para darle clases de latín. El 8 de septiembre de 1819 el niño tomó el hábito.",
      "contextoHistorico": "Gabriel venía de la aldea de Maisonnettes, de una familia de labradores muy activa en la resistencia a la Revolución; su hermano mayor, Jean-Antoine, se preparaba para el sacerdocio. Entró en el grupo de La Valla al mismo tiempo que Barthélemy Badard, hijo del sacristán. El día de su toma de hábito se celebró el primer retiro de la asociación y los hermanos eligieron director a Jean-Marie Granjon en votación secreta.",
      "solucionExplicacion": "El responsable de que Gabriel se hiciera hermano fue el propio Gabriel. Marcelino lo había recibido para instruirlo en latín, no para hacerlo hermano; según Lanfrey, la toma de hábito fue «menos por voluntad de Champagnat que por decisión del adolescente». Aquel niño sería el hermano François, primer sucesor del fundador.",
      "storyIntro": "La Valla, 1818-1819. Un niño de diez años llega para aprender latín y, un año después, pide vestir el hábito de los hermanos. ¿Quién tomó esa decisión? Ordena el plano para averiguarlo.",
      "epilogue": "¡Caso resuelto! Gabriel eligió su camino. El hermano François acompañaría a Marcelino hasta el final y gobernaría a los hermanos durante veinte años.",
      "subtitle": "Vocaciones · La Valla · 7x7",
      "badge": "EL ALUMNO DE LATÍN · 7x7",
      "victimId": "MC",
      "murdererId": "GR",
      "rooms": {
        "sala_latin": {
          "id": "sala_latin",
          "name": "Sala de latín",
          "shortName": "Sala latín",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Rincón de la casa del vicario donde se estudiaba latín."
        },
        "casa_rivat": {
          "id": "casa_rivat",
          "name": "Casa de los Rivat",
          "shortName": "Casa Rivat",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Hogar de labradores en la aldea de Maisonnettes."
        },
        "iglesia_lavalla": {
          "id": "iglesia_lavalla",
          "name": "Iglesia de La Valla",
          "shortName": "Iglesia",
          "bgColor": "bg-indigo-100/70",
          "borderColor": "border-indigo-700/60",
          "textColor": "text-indigo-950",
          "tagColor": "bg-indigo-800 text-indigo-100",
          "description": "Templo parroquial con su sacristía."
        },
        "sala_retiro": {
          "id": "sala_retiro",
          "name": "Sala del retiro",
          "shortName": "Retiro",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Donde los hermanos votaron en secreto a su director."
        },
        "taller_clavos": {
          "id": "taller_clavos",
          "name": "Taller de clavos",
          "shortName": "Taller",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Donde los hermanos forjaban clavos para vivir."
        }
      },
      "cellRooms": [
        [
          "iglesia_lavalla",
          "iglesia_lavalla",
          "sala_latin",
          "sala_latin",
          "sala_latin",
          "casa_rivat",
          "casa_rivat"
        ],
        [
          "iglesia_lavalla",
          "sala_latin",
          "sala_latin",
          "sala_latin",
          "sala_latin",
          "sala_latin",
          "casa_rivat"
        ],
        [
          "iglesia_lavalla",
          "sala_latin",
          "casa_rivat",
          "casa_rivat",
          "casa_rivat",
          "casa_rivat",
          "casa_rivat"
        ],
        [
          "iglesia_lavalla",
          "iglesia_lavalla",
          "casa_rivat",
          "casa_rivat",
          "taller_clavos",
          "taller_clavos",
          "casa_rivat"
        ],
        [
          "iglesia_lavalla",
          "iglesia_lavalla",
          "sala_retiro",
          "sala_retiro",
          "taller_clavos",
          "taller_clavos",
          "taller_clavos"
        ],
        [
          "sala_retiro",
          "sala_retiro",
          "sala_retiro",
          "sala_retiro",
          "taller_clavos",
          "taller_clavos",
          "taller_clavos"
        ],
        [
          "sala_retiro",
          "sala_retiro",
          "sala_retiro",
          "sala_retiro",
          "taller_clavos",
          "taller_clavos",
          "taller_clavos"
        ]
      ],
      "blockedObjects": {
        "2,1": {
          "emoji": "📕",
          "name": "Gramática latina",
          "evidenceCode": "EV-01",
          "description": "Libro de las primeras lecciones de Gabriel."
        },
        "2,6": {
          "emoji": "🌾",
          "name": "Gavillas",
          "evidenceCode": "EV-02",
          "description": "Cosecha de la familia de labradores."
        },
        "0,0": {
          "emoji": "🔔",
          "name": "Campana",
          "evidenceCode": "EV-03",
          "description": "La tocaba el sacristán del pueblo."
        },
        "5,6": {
          "emoji": "🔨",
          "name": "Yunque",
          "evidenceCode": "EV-04",
          "description": "Donde se golpeaban las barritas de hierro."
        }
      },
      "suspects": [
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Vicario y profesor",
          "avatar": "🧑‍🏫",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Lo había recibido para instruirlo, sobre todo en latín.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "sala_latin"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "GR"
            }
          ]
        },
        {
          "id": "GR",
          "name": "Gabriel Rivat",
          "role": "Alumno de 10 años",
          "avatar": "🧒",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "El más pequeño del grupo, tenía ideas propias sobre su futuro.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "sala_latin"
            },
            {
              "tipo": "surDe",
              "sospechoso": "MC"
            }
          ]
        },
        {
          "id": "JR",
          "name": "Jean-Baptiste Rivat",
          "role": "Padre labrador",
          "avatar": "👨‍🌾",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Padre de cuatro chicos y tres chicas en Maisonnettes.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_rivat"
            },
            {
              "tipo": "junto_objeto",
              "objeto": "2,6"
            }
          ]
        },
        {
          "id": "JA",
          "name": "Jean-Antoine Rivat",
          "role": "Hermano mayor",
          "avatar": "🧑‍🎓",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "El primogénito se preparaba para ser sacerdote.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_rivat"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "MC"
            }
          ]
        },
        {
          "id": "BB",
          "name": "Barthélemy Badard",
          "role": "Hijo del sacristán",
          "avatar": "👦",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Entró en el grupo el mismo mes que Gabriel.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "iglesia_lavalla"
            }
          ]
        },
        {
          "id": "JM",
          "name": "Jean-Marie Granjon",
          "role": "Primer hermano",
          "avatar": "🧑‍🌾",
          "color": "from-stone-600 to-stone-800",
          "clueText": "Sus compañeros lo eligieron director por escrutinio secreto.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "sala_retiro"
            },
            {
              "tipo": "borde",
              "lado": "oeste"
            }
          ]
        },
        {
          "id": "AC",
          "name": "Antoine Couturier",
          "role": "Hermano Antoine",
          "avatar": "👷",
          "color": "from-teal-600 to-teal-800",
          "clueText": "Nativo de La Valla, entró el 1 de enero de 1818 sin ninguna instrucción.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "taller_clavos"
            },
            {
              "tipo": "borde",
              "lado": "este"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "En mayo de 1818, dos muchachos de La Valla se unieron al grupo de hermanos.",
          "narrative": "",
          "relatedSuspects": [
            "GR",
            "BB"
          ]
        },
        {
          "id": "c2",
          "text": "En casa de los Rivat, el hijo mayor estudiaba para el sacerdocio.",
          "narrative": "",
          "relatedSuspects": [
            "JA",
            "JR"
          ]
        },
        {
          "id": "c3",
          "text": "Marcelino no lo había recibido para hacer de él un hermano.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "GR"
          ]
        },
        {
          "id": "c4",
          "text": "El 8 de septiembre de 1819, con dos tomas de hábito, los hermanos eran seis y eligieron director.",
          "narrative": "",
          "relatedSuspects": [
            "JM",
            "BB"
          ]
        }
      ],
      "solution": {
        "MC": {
          "row": 0,
          "col": 3
        },
        "GR": {
          "row": 1,
          "col": 4
        },
        "JR": {
          "row": 2,
          "col": 5
        },
        "JA": {
          "row": 3,
          "col": 2
        },
        "BB": {
          "row": 4,
          "col": 1
        },
        "JM": {
          "row": 5,
          "col": 0
        },
        "AC": {
          "row": 6,
          "col": 6
        }
      }
    }
  },
  {
    "id": "017-HM",
    "nombre": "El sucesor",
    "datos_juego": {
      "Tamano_Cuadricula": "7x7",
      "gridSize": 7,
      "categoria": "Gobierno y herencia",
      "rasgos": [
        "espiritu_familia",
        "sencillez"
      ],
      "fuenteHistorica": "L’Hermitage · Lanfrey T. 1, caps. 7, 8 y 10",
      "textoClave": "El 12 de octubre de 1839, ante la rápida pérdida de salud del fundador, 92 hermanos profesos eligieron al hermano François como director general.",
      "contextoHistorico": "Aquel año, el padre Colin, superior de los padres maristas, había escrito a Champagnat que un hermano al servicio de los padres hacía «veinte veces más el bien» que en una escuela municipal. La asamblea de L’Hermitage eligió también dos asistentes, los hermanos Jean-Baptiste y Louis-Marie, sin definir sus poderes. Lanfrey advierte que, en teoría, fue un nombramiento tras consultar a los hermanos.",
      "solucionExplicacion": "El elegido fue el hermano François, Gabriel Rivat, que desde hacía años era el «brazo derecho» del fundador. Con él, los hermanos aseguraban que la obra de Marcelino seguiría en manos de un hermano formado a su lado.",
      "storyIntro": "L’Hermitage, otoño de 1839. El fundador está cada vez más débil y la comunidad se reúne para votar. Descubre dónde estaba cada uno y quién fue elegido para tomar el relevo.",
      "epilogue": "¡Caso resuelto! El hermano François fue el primer superior salido de entre los hermanos. Marcelino pudo ver, antes de morir, que su obra quedaba en buenas manos.",
      "subtitle": "Gobierno y herencia · L’Hermitage · 7x7",
      "badge": "EL SUCESOR · 7x7",
      "victimId": "MC",
      "murdererId": "FR",
      "rooms": {
        "sala_capitulo": {
          "id": "sala_capitulo",
          "name": "Sala capitular",
          "shortName": "Capitular",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Donde se reunió la asamblea de hermanos profesos."
        },
        "capilla": {
          "id": "capilla",
          "name": "Capilla de L’Hermitage",
          "shortName": "Capilla",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Lugar de oración antes de votar."
        },
        "secretaria": {
          "id": "secretaria",
          "name": "Secretaría",
          "shortName": "Secretaría",
          "bgColor": "bg-blue-100/70",
          "borderColor": "border-blue-700/60",
          "textColor": "text-blue-950",
          "tagColor": "bg-blue-800 text-blue-100",
          "description": "Donde se llevaba la correspondencia de la casa."
        },
        "noviciado": {
          "id": "noviciado",
          "name": "Noviciado",
          "shortName": "Noviciado",
          "bgColor": "bg-emerald-100/70",
          "borderColor": "border-emerald-700/60",
          "textColor": "text-emerald-950",
          "tagColor": "bg-emerald-800 text-emerald-100",
          "description": "Donde se formaban los jóvenes candidatos."
        },
        "casa_belley": {
          "id": "casa_belley",
          "name": "Casa de los padres en Belley",
          "shortName": "Belley",
          "bgColor": "bg-indigo-100/70",
          "borderColor": "border-indigo-700/60",
          "textColor": "text-indigo-950",
          "tagColor": "bg-indigo-800 text-indigo-100",
          "description": "Residencia del superior de los padres maristas."
        },
        "caminos": {
          "id": "caminos",
          "name": "Caminos de las escuelas",
          "shortName": "Caminos",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Rutas por las que los visitadores recorrían las escuelas."
        }
      },
      "cellRooms": [
        [
          "sala_capitulo",
          "sala_capitulo",
          "sala_capitulo",
          "sala_capitulo",
          "sala_capitulo",
          "sala_capitulo",
          "sala_capitulo"
        ],
        [
          "sala_capitulo",
          "sala_capitulo",
          "sala_capitulo",
          "capilla",
          "capilla",
          "secretaria",
          "secretaria"
        ],
        [
          "sala_capitulo",
          "sala_capitulo",
          "capilla",
          "capilla",
          "capilla",
          "capilla",
          "secretaria"
        ],
        [
          "casa_belley",
          "casa_belley",
          "casa_belley",
          "capilla",
          "capilla",
          "capilla",
          "secretaria"
        ],
        [
          "casa_belley",
          "casa_belley",
          "casa_belley",
          "noviciado",
          "noviciado",
          "noviciado",
          "secretaria"
        ],
        [
          "casa_belley",
          "casa_belley",
          "casa_belley",
          "noviciado",
          "noviciado",
          "noviciado",
          "secretaria"
        ],
        [
          "casa_belley",
          "casa_belley",
          "caminos",
          "caminos",
          "caminos",
          "caminos",
          "caminos"
        ]
      ],
      "blockedObjects": {
        "0,6": {
          "emoji": "🗳️",
          "name": "Urna de votos",
          "evidenceCode": "EV-01",
          "description": "Recogió las papeletas de los 92 hermanos."
        },
        "3,3": {
          "emoji": "🕯️",
          "name": "Cirio",
          "evidenceCode": "EV-02",
          "description": "Luz ante el sagrario."
        },
        "5,6": {
          "emoji": "📜",
          "name": "Registro de cartas",
          "evidenceCode": "EV-03",
          "description": "Copias de la correspondencia del fundador."
        },
        "6,2": {
          "emoji": "🥾",
          "name": "Botas de viaje",
          "evidenceCode": "EV-04",
          "description": "Calzado gastado de tanto caminar."
        }
      },
      "suspects": [
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Fundador enfermo",
          "avatar": "🧑‍🏫",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Apoyaba que un hermano fuera elegido para sucederle.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "sala_capitulo"
            },
            {
              "tipo": "filaObjeto",
              "objeto": "0,6"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "CO"
            }
          ]
        },
        {
          "id": "FR",
          "name": "Hermano François (Gabriel Rivat)",
          "role": "Brazo derecho del fundador",
          "avatar": "🧑‍💼",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Llevaba años ayudando a Marcelino en el gobierno de la casa.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "sala_capitulo"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "6,2"
            }
          ]
        },
        {
          "id": "LM",
          "name": "Hermano Louis-Marie",
          "role": "Elegido asistente",
          "avatar": "🧑",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Sería, años después, superior general.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "capilla"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "MA"
            },
            {
              "tipo": "norteDe",
              "sospechoso": "JB"
            }
          ]
        },
        {
          "id": "JB",
          "name": "Hermano Jean-Baptiste Furet",
          "role": "Elegido asistente",
          "avatar": "🧑‍🦱",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Su nombramiento mostraba el prestigio que tenía entre los hermanos.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "secretaria"
            }
          ]
        },
        {
          "id": "MA",
          "name": "Padre Matricon",
          "role": "Capellán de L’Hermitage",
          "avatar": "🙏",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Padre marista nacido en El Bessat, antiguo alumno de latín.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "noviciado"
            }
          ]
        },
        {
          "id": "CO",
          "name": "Padre Jean-Claude Colin",
          "role": "Superior de los padres maristas",
          "avatar": "🧔",
          "color": "from-stone-600 to-stone-800",
          "clueText": "Quería hermanos al servicio de los padres más que en las escuelas.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_belley"
            },
            {
              "tipo": "filaObjeto",
              "objeto": "5,6"
            }
          ]
        },
        {
          "id": "CS",
          "name": "Hermano Cassien (Louis Chomat)",
          "role": "Hermano visitador",
          "avatar": "🚶",
          "color": "from-teal-600 to-teal-800",
          "clueText": "Antiguo maestro laico, recorría las escuelas desde 1838.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "caminos"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "LM"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "La rápida degradación de la salud del fundador obligó a pensar en su sucesión.",
          "narrative": "",
          "relatedSuspects": [
            "MC"
          ]
        },
        {
          "id": "c2",
          "text": "El 12 de octubre de 1839, una asamblea de 92 hermanos profesos eligió un director general.",
          "narrative": "",
          "relatedSuspects": [
            "FR"
          ]
        },
        {
          "id": "c3",
          "text": "Con él fueron elegidos dos asistentes, sin que nadie definiera bien sus poderes.",
          "narrative": "",
          "relatedSuspects": [
            "LM",
            "JB"
          ]
        },
        {
          "id": "c4",
          "text": "Meses antes, el superior de los padres había escrito que un hermano al servicio de los padres hacía «veinte veces más el bien».",
          "narrative": "",
          "relatedSuspects": [
            "CO"
          ]
        }
      ],
      "solution": {
        "MC": {
          "row": 0,
          "col": 0
        },
        "FR": {
          "row": 1,
          "col": 2
        },
        "LM": {
          "row": 2,
          "col": 4
        },
        "JB": {
          "row": 3,
          "col": 6
        },
        "MA": {
          "row": 4,
          "col": 5
        },
        "CO": {
          "row": 5,
          "col": 1
        },
        "CS": {
          "row": 6,
          "col": 3
        }
      }
    }
  },
  {
    "id": "018-HM",
    "nombre": "El testamento espiritual",
    "datos_juego": {
      "Tamano_Cuadricula": "7x7",
      "gridSize": 7,
      "categoria": "Gobierno y herencia",
      "rasgos": [
        "espiritu_familia",
        "estilo_maria"
      ],
      "fuenteHistorica": "L’Hermitage · Lanfrey T. 1, cap. 7",
      "textoClave": "El 18 de mayo de 1840 se leyó públicamente, en presencia de Marcelino, el testamento espiritual redactado según sus instrucciones.",
      "contextoHistorico": "Las relaciones entre padres y hermanos maristas habían sido laboriosas entre 1836 y 1840. El 22 de marzo de 1840, Marcelino constituyó ante el notario Mioche, en Saint-Chamond, una sociedad civil con seis de los principales hermanos, heredera de todos sus bienes; ningún padre formaba parte de ella. El testamento quería responder a las dudas de Colin: «El superior de los padres […] debe ser el lazo de unión entre unos y otros». El 24 de mayo, Colin y Marcelino se vieron por última vez; Marcelino murió el 6 de junio de 1840.",
      "solucionExplicacion": "El responsable de poner por escrito el testamento fue el hermano François, que lo redactó con el hermano Louis-Marie siguiendo las instrucciones del fundador. Marcelino pedía a sus hermanos unión con los padres y entre ellos; así dejó sellada, antes de morir, la unidad de la familia marista.",
      "storyIntro": "L’Hermitage, primavera de 1840. El fundador ya no puede levantarse y quiere dejar a sus hermanos unas últimas palabras. Averigua dónde estaba cada uno y quién escribió el testamento junto a su lecho.",
      "epilogue": "¡Caso resuelto! El testamento espiritual se leyó ante la comunidad. Tres semanas después, el 6 de junio de 1840, Marcelino murió en L’Hermitage.",
      "subtitle": "Gobierno y herencia · L’Hermitage · 7x7",
      "badge": "EL TESTAMENTO ESPIRITUAL · 7x7",
      "victimId": "MC",
      "murdererId": "FR",
      "rooms": {
        "cuarto_fundador": {
          "id": "cuarto_fundador",
          "name": "Cuarto del fundador",
          "shortName": "Cuarto",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Habitación donde Marcelino pasó sus últimas semanas."
        },
        "secretaria": {
          "id": "secretaria",
          "name": "Secretaría",
          "shortName": "Secretaría",
          "bgColor": "bg-blue-100/70",
          "borderColor": "border-blue-700/60",
          "textColor": "text-blue-950",
          "tagColor": "bg-blue-800 text-blue-100",
          "description": "Donde se pasaban a limpio los escritos de la casa."
        },
        "capilla": {
          "id": "capilla",
          "name": "Capilla de L’Hermitage",
          "shortName": "Capilla",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Allí la comunidad rezaba por el enfermo."
        },
        "notaria": {
          "id": "notaria",
          "name": "Notaría de Saint-Chamond",
          "shortName": "Notaría",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Despacho donde se firmó la sociedad civil."
        },
        "locutorio": {
          "id": "locutorio",
          "name": "Locutorio",
          "shortName": "Locutorio",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Sala de visitas de L’Hermitage."
        },
        "huerto": {
          "id": "huerto",
          "name": "Huerto de L’Hermitage",
          "shortName": "Huerto",
          "bgColor": "bg-emerald-100/70",
          "borderColor": "border-emerald-700/60",
          "textColor": "text-emerald-950",
          "tagColor": "bg-emerald-800 text-emerald-100",
          "description": "Tierra junto al Gier que cuidaban los hermanos."
        }
      },
      "cellRooms": [
        [
          "cuarto_fundador",
          "capilla",
          "capilla",
          "capilla",
          "notaria",
          "secretaria",
          "secretaria"
        ],
        [
          "cuarto_fundador",
          "cuarto_fundador",
          "capilla",
          "capilla",
          "notaria",
          "secretaria",
          "secretaria"
        ],
        [
          "cuarto_fundador",
          "cuarto_fundador",
          "capilla",
          "notaria",
          "notaria",
          "secretaria",
          "secretaria"
        ],
        [
          "cuarto_fundador",
          "cuarto_fundador",
          "capilla",
          "capilla",
          "notaria",
          "secretaria",
          "secretaria"
        ],
        [
          "cuarto_fundador",
          "huerto",
          "huerto",
          "notaria",
          "notaria",
          "secretaria",
          "secretaria"
        ],
        [
          "cuarto_fundador",
          "cuarto_fundador",
          "huerto",
          "huerto",
          "notaria",
          "locutorio",
          "locutorio"
        ],
        [
          "huerto",
          "huerto",
          "huerto",
          "huerto",
          "notaria",
          "locutorio",
          "locutorio"
        ]
      ],
      "blockedObjects": {
        "2,0": {
          "emoji": "🛏️",
          "name": "Lecho del enfermo",
          "evidenceCode": "EV-01",
          "description": "Cama de la que Marcelino ya no se levantaba."
        },
        "4,6": {
          "emoji": "✒️",
          "name": "Pluma y tintero",
          "evidenceCode": "EV-02",
          "description": "Para la copia limpia del testamento."
        },
        "0,2": {
          "emoji": "✝️",
          "name": "Crucifijo",
          "evidenceCode": "EV-03",
          "description": "Cruz ante la que oraba la comunidad."
        },
        "6,4": {
          "emoji": "📜",
          "name": "Acta notarial",
          "evidenceCode": "EV-04",
          "description": "Escritura de la sociedad civil del 22 de marzo."
        }
      },
      "suspects": [
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Fundador moribundo",
          "avatar": "🧑‍🏫",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Daba sus instrucciones para dejar a sus hermanos unidos.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "cuarto_fundador"
            },
            {
              "tipo": "borde",
              "lado": "norte"
            }
          ]
        },
        {
          "id": "FR",
          "name": "Hermano François (Gabriel Rivat)",
          "role": "Director general",
          "avatar": "✍️",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Escribía al dictado lo que el fundador quería decir.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "cuarto_fundador"
            }
          ]
        },
        {
          "id": "LM",
          "name": "Hermano Louis-Marie",
          "role": "Asistente",
          "avatar": "🧑",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Ayudaba a dar forma al texto que se leería a la comunidad.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "secretaria"
            },
            {
              "tipo": "filaObjeto",
              "objeto": "2,0"
            },
            {
              "tipo": "norteDe",
              "sospechoso": "MA"
            }
          ]
        },
        {
          "id": "MA",
          "name": "Padre Matricon",
          "role": "Capellán de L’Hermitage",
          "avatar": "🙏",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Aunque era padre marista, no formaba parte de la sociedad civil.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "capilla"
            }
          ]
        },
        {
          "id": "MI",
          "name": "Notario Mioche",
          "role": "Notario de Saint-Chamond",
          "avatar": "🧑‍⚖️",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Registró la sociedad civil, para disgusto del padre Colin.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "notaria"
            }
          ]
        },
        {
          "id": "CO",
          "name": "Padre Jean-Claude Colin",
          "role": "Superior de los padres maristas",
          "avatar": "🧔",
          "color": "from-stone-600 to-stone-800",
          "clueText": "El 24 de mayo se entrevistó largamente con el fundador.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "locutorio"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "LM"
            }
          ]
        },
        {
          "id": "JB",
          "name": "Hermano Jean-Baptiste Furet",
          "role": "Asistente",
          "avatar": "🧑‍🦱",
          "color": "from-teal-600 to-teal-800",
          "clueText": "Más tarde escribiría la Vida del fundador con los recuerdos de los hermanos.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "huerto"
            },
            {
              "tipo": "junto_objeto",
              "objeto": "6,4"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "El testamento se redactó según las instrucciones del fundador, por dos hermanos.",
          "narrative": "",
          "relatedSuspects": [
            "FR",
            "LM"
          ]
        },
        {
          "id": "c2",
          "text": "El 22 de marzo, una sociedad civil con seis hermanos quedó como heredera de todos sus bienes.",
          "narrative": "",
          "relatedSuspects": [
            "MI"
          ]
        },
        {
          "id": "c3",
          "text": "Ningún padre formaba parte de esa sociedad, ni siquiera el capellán de la casa.",
          "narrative": "",
          "relatedSuspects": [
            "MA"
          ]
        },
        {
          "id": "c4",
          "text": "En su última entrevista, el fundador encomendó sus hermanos al superior de los padres.",
          "narrative": "",
          "relatedSuspects": [
            "CO",
            "MC"
          ]
        }
      ],
      "solution": {
        "MC": {
          "row": 0,
          "col": 0
        },
        "FR": {
          "row": 1,
          "col": 1
        },
        "LM": {
          "row": 2,
          "col": 5
        },
        "MA": {
          "row": 3,
          "col": 2
        },
        "MI": {
          "row": 4,
          "col": 4
        },
        "CO": {
          "row": 5,
          "col": 6
        },
        "JB": {
          "row": 6,
          "col": 3
        }
      }
    }
  }
];
