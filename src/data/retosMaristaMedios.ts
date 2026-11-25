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
      "fuenteHistorica": "La Valla · Lanfrey T. 1, cap. 3",
      "textoClave": "A finales de octubre de 1816, Marcelino asistió en Les Palais a un joven moribundo, Jean-Baptiste Montagne, que no sabía nada de Dios.",
      "contextoHistorico": "Les Palais era una aldea de la parroquia de La Valla, en las laderas del Pilat. Según la biografía del hermano Jean-Baptiste (1856), aquel encuentro convenció a Marcelino de que no podía esperar más para fundar hermanos que educaran a los niños del campo. La fecha tradicional es el 28 de octubre de 1816, aunque el relato se escribió décadas después.",
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
      "fuenteHistorica": "L’Hermitage · Lanfrey T. 1, cap. 7",
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
          "clueText": "Muy unido al fundador, le preparaba algo caliente y rezaba por él.",
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
          "clueText": "Seguía con el trabajo de la casa y defendía la fidelidad al fundador.",
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
      "fuenteHistorica": "L’Hermitage · Lanfrey T. 1",
      "textoClave": "En 1836, Roma aprobó la Sociedad de María y le confió Oceanía occidental; tres hermanos de Marcelino partieron con los primeros padres maristas.",
      "contextoHistorico": "El papa Gregorio XVI aprobó la Sociedad de María el 29 de abril de 1836. En septiembre, Jean-Claude Colin fue elegido superior general y Marcelino hizo su profesión como padre marista. La primera expedición, guiada por el obispo Pompallier, salió de Le Havre la víspera de Navidad de 1836; en ella viajaba Pierre Chanel, que moriría mártir en Futuna en 1841.",
      "solucionExplicacion": "El responsable de que los hermanos llegaran a Oceanía fue Marcelino: él mismo había soñado con ir a las misiones, pero su lugar estaba con sus hermanos, así que propuso a tres de ellos. El hermano Marie-Nizier aceptó con alegría y partió con los hermanos Michel y Joseph-Xavier.",
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
        "puerto_havre": {
          "id": "puerto_havre",
          "name": "Puerto de Le Havre",
          "shortName": "Le Havre",
          "bgColor": "bg-sky-100/70",
          "borderColor": "border-sky-700/60",
          "textColor": "text-sky-950",
          "tagColor": "bg-sky-800 text-sky-100",
          "description": "Puerto atlántico desde el que zarpó la expedición."
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
          "puerto_havre",
          "despacho",
          "despacho",
          "despacho",
          "despacho"
        ],
        [
          "huerto",
          "huerto",
          "puerto_havre",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage"
        ],
        [
          "huerto",
          "huerto",
          "puerto_havre",
          "puerto_havre",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage"
        ],
        [
          "belley",
          "belley",
          "belley",
          "puerto_havre",
          "puerto_havre",
          "navio",
          "navio"
        ],
        [
          "belley",
          "belley",
          "belley",
          "puerto_havre",
          "puerto_havre",
          "navio",
          "navio"
        ],
        [
          "belley",
          "belley",
          "belley",
          "puerto_havre",
          "puerto_havre",
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
          "description": "Hierro del muelle atlántico."
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
          "clueText": "Habría querido ir él mismo, pero su lugar estaba con los hermanos.",
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
          "clueText": "Encabezaba la expedición que zarpó de Le Havre.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "puerto_havre"
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
          "clueText": "Moriría mártir en la isla de Futuna en 1841.",
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
          "text": "En septiembre de 1836, Marcelino hizo su profesión como padre marista.",
          "narrative": "",
          "relatedSuspects": [
            "MC"
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
  }
];
