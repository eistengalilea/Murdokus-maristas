import { Reto } from '../types';

/**
 * RETOS DE HISTORIA MARISTA — DIFICILES (9x9)
 * Archivo GENERADO por scripts/generar-retos.ts a partir de scripts/retos-fuente. No editar a mano.
 */
export const RETOS_MARISTA_DIFICILES: Reto[] = [
  {
    "id": "019-HM",
    "nombre": "El superior de 1830",
    "datos_juego": {
      "Tamano_Cuadricula": "9x9",
      "gridSize": 9,
      "categoria": "Orígenes de la Sociedad de María",
      "rasgos": [
        "estilo_maria",
        "espiritu_familia"
      ],
      "fuenteHistorica": "L’Hermitage · Lanfrey T. 1, caps. 6 y 7",
      "textoClave": "El 18 de diciembre de 1830, en nombre de Mons. de Pins, el vicario general Cattet nombró a Marcelino «superior titular de la Sociedad de María» en la diócesis de Lyon.",
      "contextoHistorico": "La revolución parisina del 27 al 29 de julio de 1830 derribó a los Borbones, desató un violento anticlericalismo y dejó sin firmar la autorización legal de los hermanos, que ya estaba preparada para el rey. Fue una catástrofe para Mons. de Pins, legitimista convencido. Los maristas aprovecharon el desconcierto: el 22 de octubre, una carta de Jean-Claude Colin anunció que Belley era el «centro de unidad» e invitó a los presbíteros de L’Hermitage a elegirse un superior. Entre el 3 y el 8 de diciembre eligieron a Champagnat.",
      "solucionExplicacion": "El responsable del nombramiento fue el vicario general Cattet. El arzobispado aceptó el hecho consumado de la elección y, el 18 de diciembre de 1830, Cattet nombró a Champagnat superior titular en nombre de Mons. de Pins, precisando que, como director de L’Hermitage, ya era superior de hecho. Los hermanos quedaron al margen de aquellas gestiones.",
      "storyIntro": "Otoño de 1830. París ha derribado al rey, la autorización de los hermanos se ha quedado sin firma y en Lyon el arzobispo está abatido. Mientras tanto, en L’Hermitage, los presbíteros maristas eligen a un superior. Reconstruye dónde estaba cada uno y descubre quién firmó el nombramiento.",
      "epilogue": "¡Caso resuelto! El nombramiento compensó mal la victoria del modelo de Colin: el centro de la Sociedad de María estaría en Belley. Aun así, el 8 de septiembre de 1831 los aspirantes maristas renovaron su consagración a María, como en Fourvière.",
      "subtitle": "Orígenes de la Sociedad de María · L’Hermitage · 9x9",
      "badge": "EL SUPERIOR DE 1830 · 9x9",
      "victimId": "MC",
      "murdererId": "CA",
      "rooms": {
        "arzobispado": {
          "id": "arzobispado",
          "name": "Arzobispado de Lyon",
          "shortName": "Arzobispado",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Despacho de los vicarios generales."
        },
        "oratorio_pins": {
          "id": "oratorio_pins",
          "name": "Oratorio del arzobispo",
          "shortName": "Oratorio",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Capilla privada de Mons. de Pins."
        },
        "colegio_belley": {
          "id": "colegio_belley",
          "name": "Colegio de Belley",
          "shortName": "Belley",
          "bgColor": "bg-blue-100/70",
          "borderColor": "border-blue-700/60",
          "textColor": "text-blue-950",
          "tagColor": "bg-blue-800 text-blue-100",
          "description": "Colegio que dirigía Jean-Claude Colin desde 1829."
        },
        "fabrica_cintas": {
          "id": "fabrica_cintas",
          "name": "Fábrica de cintas",
          "shortName": "Fábrica",
          "bgColor": "bg-rose-100/70",
          "borderColor": "border-rose-700/60",
          "textColor": "text-rose-950",
          "tagColor": "bg-rose-800 text-rose-100",
          "description": "Taller de L’Hermitage que vigilaba el Sr. Séon."
        },
        "clase_novicios": {
          "id": "clase_novicios",
          "name": "Clase de los novicios",
          "shortName": "Clase",
          "bgColor": "bg-teal-100/70",
          "borderColor": "border-teal-700/60",
          "textColor": "text-teal-950",
          "tagColor": "bg-teal-800 text-teal-100",
          "description": "Aula de escritura, cálculo, canto y catecismo."
        },
        "escritorio": {
          "id": "escritorio",
          "name": "Escritorio de los capellanes",
          "shortName": "Escritorio",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Mesa donde se redactaban reglas y estatutos."
        },
        "capilla_hermitage": {
          "id": "capilla_hermitage",
          "name": "Capilla de L’Hermitage",
          "shortName": "Capilla",
          "bgColor": "bg-indigo-100/70",
          "borderColor": "border-indigo-700/60",
          "textColor": "text-indigo-950",
          "tagColor": "bg-indigo-800 text-indigo-100",
          "description": "Lugar de oración de hermanos y presbíteros."
        }
      },
      "cellRooms": [
        [
          "arzobispado",
          "arzobispado",
          "oratorio_pins",
          "oratorio_pins",
          "oratorio_pins",
          "oratorio_pins",
          "oratorio_pins",
          "oratorio_pins",
          "oratorio_pins"
        ],
        [
          "arzobispado",
          "arzobispado",
          "oratorio_pins",
          "colegio_belley",
          "colegio_belley",
          "colegio_belley",
          "colegio_belley",
          "colegio_belley",
          "oratorio_pins"
        ],
        [
          "arzobispado",
          "arzobispado",
          "oratorio_pins",
          "colegio_belley",
          "fabrica_cintas",
          "colegio_belley",
          "colegio_belley",
          "colegio_belley",
          "colegio_belley"
        ],
        [
          "oratorio_pins",
          "oratorio_pins",
          "oratorio_pins",
          "escritorio",
          "fabrica_cintas",
          "colegio_belley",
          "colegio_belley",
          "colegio_belley",
          "colegio_belley"
        ],
        [
          "oratorio_pins",
          "escritorio",
          "escritorio",
          "escritorio",
          "fabrica_cintas",
          "clase_novicios",
          "colegio_belley",
          "colegio_belley",
          "clase_novicios"
        ],
        [
          "oratorio_pins",
          "escritorio",
          "escritorio",
          "fabrica_cintas",
          "fabrica_cintas",
          "clase_novicios",
          "clase_novicios",
          "clase_novicios",
          "clase_novicios"
        ],
        [
          "escritorio",
          "escritorio",
          "escritorio",
          "escritorio",
          "fabrica_cintas",
          "clase_novicios",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage"
        ],
        [
          "escritorio",
          "escritorio",
          "escritorio",
          "escritorio",
          "fabrica_cintas",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage"
        ],
        [
          "escritorio",
          "fabrica_cintas",
          "fabrica_cintas",
          "fabrica_cintas",
          "fabrica_cintas",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage"
        ]
      ],
      "blockedObjects": {
        "2,0": {
          "emoji": "📜",
          "name": "Nombramiento",
          "evidenceCode": "EV-01",
          "description": "Documento del 18 de diciembre de 1830."
        },
        "1,3": {
          "emoji": "✉️",
          "name": "Carta del 22 de octubre",
          "evidenceCode": "EV-02",
          "description": "Anuncia que Belley es el centro de unidad."
        },
        "5,4": {
          "emoji": "🧵",
          "name": "Telar de cintas",
          "evidenceCode": "EV-03",
          "description": "Trabajo que ayudaba a sostener la casa."
        },
        "4,2": {
          "emoji": "📖",
          "name": "Estatutos de la Sociedad de María",
          "evidenceCode": "EV-04",
          "description": "Dieciséis artículos de letra de Pompallier."
        },
        "7,6": {
          "emoji": "🕯️",
          "name": "Cirio",
          "evidenceCode": "EV-05",
          "description": "Luz ante la imagen de María."
        }
      },
      "suspects": [
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Director de L’Hermitage",
          "avatar": "🧑‍🏫",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Elegido por sus cohermanos, esperaba la respuesta de la diócesis.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "arzobispado"
            },
            {
              "tipo": "borde",
              "lado": "norte"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "CA"
            }
          ]
        },
        {
          "id": "CA",
          "name": "Sr. Cattet",
          "role": "Vicario general de Lyon",
          "avatar": "✍️",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Firmaba en nombre del arzobispo los asuntos de la Sociedad de María.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "arzobispado"
            }
          ]
        },
        {
          "id": "PI",
          "name": "Mons. de Pins",
          "role": "Administrador apostólico de Lyon",
          "avatar": "👴",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Fiel a los Borbones, vivía la caída del rey como una catástrofe.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "oratorio_pins"
            },
            {
              "tipo": "filaObjeto",
              "objeto": "2,0"
            }
          ]
        },
        {
          "id": "CO",
          "name": "Jean-Claude Colin",
          "role": "Superior del colegio",
          "avatar": "🧔",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Quería que todos los maristas tuvieran su centro en su diócesis.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "colegio_belley"
            }
          ]
        },
        {
          "id": "SE",
          "name": "Étienne Séon",
          "role": "Presbítero de L’Hermitage",
          "avatar": "🧑‍🦳",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Se ocupaba de lo espiritual y de los telares, y soñaba con misionar.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "fabrica_cintas"
            },
            {
              "tipo": "filaObjeto",
              "objeto": "4,2"
            }
          ]
        },
        {
          "id": "BO",
          "name": "Sr. Bourdin",
          "role": "Presbítero de L’Hermitage",
          "avatar": "👨‍🏫",
          "color": "from-stone-600 to-stone-800",
          "clueText": "Enseñaba a los novicios escritura, cálculo, canto y catecismo.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "clase_novicios"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "CO"
            },
            {
              "tipo": "columnaObjeto",
              "objeto": "7,6"
            }
          ]
        },
        {
          "id": "PO",
          "name": "Jean-Baptiste Pompallier",
          "role": "Director espiritual",
          "avatar": "🧑‍💼",
          "color": "from-teal-600 to-teal-800",
          "clueText": "Hacía muchas reglas y puso por escrito unos estatutos de la Sociedad.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "escritorio"
            }
          ]
        },
        {
          "id": "FR",
          "name": "Hermano François (Gabriel Rivat)",
          "role": "Hermano de L’Hermitage",
          "avatar": "🧑‍🎓",
          "color": "from-rose-600 to-rose-800",
          "clueText": "Rezaba por la casa sin saber lo que se decidía entre los presbíteros.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "capilla_hermitage"
            },
            {
              "tipo": "filaObjeto",
              "objeto": "7,6"
            }
          ]
        },
        {
          "id": "ST",
          "name": "Hermano Stanislas",
          "role": "Hermano de la casa",
          "avatar": "🧑‍🍳",
          "color": "from-indigo-600 to-indigo-800",
          "clueText": "Muy unido al fundador, llevaba un año con la sotana nueva de 1829.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "capilla_hermitage"
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
          "text": "La revolución de julio impidió que el rey firmara la autorización legal de los hermanos.",
          "narrative": "",
          "relatedSuspects": [
            "PI"
          ]
        },
        {
          "id": "c2",
          "text": "El 22 de octubre llegó una carta: Belley sería el centro de unidad y L’Hermitage debía elegir superior.",
          "narrative": "",
          "relatedSuspects": [
            "CO"
          ]
        },
        {
          "id": "c3",
          "text": "Entre el 3 y el 8 de diciembre, los presbíteros de L’Hermitage eligieron a uno de ellos como rector provincial.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "SE",
            "BO",
            "PO"
          ]
        },
        {
          "id": "c4",
          "text": "Los hermanos fueron tenidos al margen de la elección del superior.",
          "narrative": "",
          "relatedSuspects": [
            "FR",
            "ST"
          ]
        },
        {
          "id": "c5",
          "text": "El arzobispado aceptó el hecho consumado: uno de sus vicarios generales firmó el nombramiento.",
          "narrative": "",
          "relatedSuspects": [
            "CA",
            "MC"
          ]
        }
      ],
      "solution": {
        "MC": {
          "row": 0,
          "col": 1
        },
        "CA": {
          "row": 1,
          "col": 0
        },
        "PI": {
          "row": 2,
          "col": 2
        },
        "CO": {
          "row": 3,
          "col": 5
        },
        "SE": {
          "row": 4,
          "col": 4
        },
        "BO": {
          "row": 5,
          "col": 6
        },
        "PO": {
          "row": 6,
          "col": 3
        },
        "FR": {
          "row": 7,
          "col": 7
        },
        "ST": {
          "row": 8,
          "col": 8
        }
      }
    }
  },
  {
    "id": "020-HM",
    "nombre": "Marcelino en París",
    "datos_juego": {
      "Tamano_Cuadricula": "9x9",
      "gridSize": 9,
      "categoria": "La autorización legal",
      "rasgos": [
        "presencia",
        "sencillez"
      ],
      "fuenteHistorica": "L’Hermitage · Lanfrey T. 1, cap. 8; Tras las huellas, 5.11",
      "textoClave": "En 1838 Marcelino pasó meses en París buscando la autorización legal de los Hermanos Maristas, pero el ministro solo quería autorizarlos para los municipios pequeños.",
      "contextoHistorico": "El Estado protegía a los Hermanos de las Escuelas Cristianas y no quería reconocer nuevas sociedades de hermanos. El 2 de agosto de 1838, el hermano Anaclet escribió una carta de aprobación prudente: deseaba que el gobierno autorizara a los maristas «en las pequeñas localidades». Marcelino rechazó una autorización limitada a los municipios de menos de 1.000 habitantes, porque allí no podía vivir una comunidad de tres hermanos. Casi todas sus escuelas estaban en pueblos de 1.200 a 4.000 habitantes.",
      "solucionExplicacion": "El responsable del fracaso fue el ministro de Instrucción Pública: quería imponer la autorización solo para los pequeños municipios, mientras un alto funcionario le pedía a Marcelino fundar en una población mayor. Al aceptar esto último, Marcelino dejó al ministro en contradicción consigo mismo, pero no obtuvo la autorización: su obra solo fue tolerada.",
      "storyIntro": "París, 1838. Un sacerdote de campo, con sotana y sin contactos, recorre ministerios y despachos. En L’Hermitage, los hermanos esperan noticias. Alguien, desde su despacho, está cerrando la puerta a los Hermanos Maristas. Descubre dónde estaba cada uno y quién bloqueó la autorización.",
      "epilogue": "¡Caso resuelto! Marcelino volvió sin la autorización, pero no sin esperanza: «en la capital hay mucha más religión de lo que piensan las personas». La autorización llegaría en 1851, once años después de su muerte.",
      "subtitle": "La autorización legal · L’Hermitage · 9x9",
      "badge": "MARCELINO EN PARÍS · 9x9",
      "victimId": "MC",
      "murdererId": "SA",
      "rooms": {
        "ministerio": {
          "id": "ministerio",
          "name": "Ministerio de Instrucción Pública",
          "shortName": "Ministerio",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Despacho del ministro en París."
        },
        "oficinas": {
          "id": "oficinas",
          "name": "Oficinas del ministerio",
          "shortName": "Oficinas",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Mesas de los altos funcionarios."
        },
        "casa_hec": {
          "id": "casa_hec",
          "name": "Casa de los Hermanos de las Escuelas Cristianas",
          "shortName": "Casa HEC",
          "bgColor": "bg-blue-100/70",
          "borderColor": "border-blue-700/60",
          "textColor": "text-blue-950",
          "tagColor": "bg-blue-800 text-blue-100",
          "description": "Sede de los hermanos de La Salle."
        },
        "diligencia": {
          "id": "diligencia",
          "name": "Parada de la diligencia",
          "shortName": "Parada",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Alto en el camino hacia París."
        },
        "consejo": {
          "id": "consejo",
          "name": "Sala del consejo de L’Hermitage",
          "shortName": "Consejo",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Donde se reunía el consejo cada domingo."
        },
        "capilla_hermitage": {
          "id": "capilla_hermitage",
          "name": "Capilla de L’Hermitage",
          "shortName": "Capilla",
          "bgColor": "bg-indigo-100/70",
          "borderColor": "border-indigo-700/60",
          "textColor": "text-indigo-950",
          "tagColor": "bg-indigo-800 text-indigo-100",
          "description": "Lugar de oración de la comunidad."
        },
        "bosque": {
          "id": "bosque",
          "name": "Bosques de L’Hermitage",
          "shortName": "Bosques",
          "bgColor": "bg-emerald-100/70",
          "borderColor": "border-emerald-700/60",
          "textColor": "text-emerald-950",
          "tagColor": "bg-emerald-800 text-emerald-100",
          "description": "Arboledas a orillas del Gier."
        }
      },
      "cellRooms": [
        [
          "ministerio",
          "ministerio",
          "ministerio",
          "ministerio",
          "oficinas",
          "oficinas",
          "casa_hec",
          "casa_hec",
          "casa_hec"
        ],
        [
          "ministerio",
          "ministerio",
          "ministerio",
          "oficinas",
          "oficinas",
          "oficinas",
          "casa_hec",
          "casa_hec",
          "casa_hec"
        ],
        [
          "bosque",
          "diligencia",
          "diligencia",
          "diligencia",
          "oficinas",
          "oficinas",
          "casa_hec",
          "casa_hec",
          "casa_hec"
        ],
        [
          "bosque",
          "diligencia",
          "diligencia",
          "diligencia",
          "oficinas",
          "oficinas",
          "casa_hec",
          "consejo",
          "consejo"
        ],
        [
          "bosque",
          "bosque",
          "diligencia",
          "diligencia",
          "diligencia",
          "consejo",
          "consejo",
          "consejo",
          "consejo"
        ],
        [
          "bosque",
          "bosque",
          "diligencia",
          "consejo",
          "diligencia",
          "consejo",
          "consejo",
          "consejo",
          "consejo"
        ],
        [
          "bosque",
          "bosque",
          "diligencia",
          "consejo",
          "consejo",
          "consejo",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage"
        ],
        [
          "bosque",
          "bosque",
          "diligencia",
          "consejo",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage"
        ],
        [
          "bosque",
          "bosque",
          "bosque",
          "bosque",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage",
          "capilla_hermitage"
        ]
      ],
      "blockedObjects": {
        "1,1": {
          "emoji": "🗂️",
          "name": "Expediente de autorización",
          "evidenceCode": "EV-01",
          "description": "Papeles de la petición de los Hermanos Maristas."
        },
        "2,8": {
          "emoji": "📚",
          "name": "Libros escolares",
          "evidenceCode": "EV-02",
          "description": "No se los vendieron al precio de sus propias escuelas."
        },
        "2,1": {
          "emoji": "🪙",
          "name": "Céntimo",
          "evidenceCode": "EV-03",
          "description": "Moneda prometida a cambio de aprender el catecismo."
        },
        "4,0": {
          "emoji": "🌳",
          "name": "Castaño",
          "evidenceCode": "EV-04",
          "description": "Árbol de los bosques junto al río."
        }
      },
      "suspects": [
        {
          "id": "MC",
          "name": "Marcelino Champagnat",
          "role": "Fundador de los Hermanos Maristas",
          "avatar": "🧑‍🏫",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Iba de visita en visita con sotana, y nadie lo insultó.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "ministerio"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "NI"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "SA"
            }
          ]
        },
        {
          "id": "SA",
          "name": "Sr. de Salvandy",
          "role": "Ministro de Instrucción Pública",
          "avatar": "🎩",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Solo admitía a los nuevos hermanos en los pueblos más pequeños.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "ministerio"
            },
            {
              "tipo": "surDe",
              "sospechoso": "MC"
            }
          ]
        },
        {
          "id": "AF",
          "name": "Alto funcionario",
          "role": "Empleado del ministerio",
          "avatar": "🧑‍💼",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Pedía a Marcelino que fundara en una población más importante.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "oficinas"
            },
            {
              "tipo": "filaObjeto",
              "objeto": "2,1"
            }
          ]
        },
        {
          "id": "AN",
          "name": "Hermano Anaclet",
          "role": "Hermano de las Escuelas Cristianas",
          "avatar": "🧑‍⚖️",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Escribió una aprobación prudente para las pequeñas localidades.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_hec"
            }
          ]
        },
        {
          "id": "NI",
          "name": "Niño pobre",
          "role": "Chiquillo del camino",
          "avatar": "👦",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Marcelino le prometió un céntimo si aprendía el catecismo.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "diligencia"
            }
          ]
        },
        {
          "id": "FR",
          "name": "Hermano François (Gabriel Rivat)",
          "role": "Brazo derecho del fundador",
          "avatar": "🧑‍🎓",
          "color": "from-stone-600 to-stone-800",
          "clueText": "Llevaba la casa durante la ausencia de Marcelino.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "consejo"
            }
          ]
        },
        {
          "id": "MT",
          "name": "Padre Matricon",
          "role": "Capellán de L’Hermitage",
          "avatar": "🧑‍🦳",
          "color": "from-teal-600 to-teal-800",
          "clueText": "Nacido en el Bessat, vivía como un hermano más.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "capilla_hermitage"
            },
            {
              "tipo": "borde",
              "lado": "este"
            }
          ]
        },
        {
          "id": "BE",
          "name": "Padre Besson",
          "role": "Padre marista",
          "avatar": "🙏",
          "color": "from-rose-600 to-rose-800",
          "clueText": "Ayudaba al capellán en la atención de los hermanos.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "capilla_hermitage"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "AN"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "AF"
            }
          ]
        },
        {
          "id": "HI",
          "name": "Hermano Hilarion",
          "role": "Hermano marista",
          "avatar": "🧑‍🌾",
          "color": "from-indigo-600 to-indigo-800",
          "clueText": "Recibió una carta en la que Marcelino le hablaba de la presencia de Dios.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "bosque"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "MC"
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
          "text": "«He realizado mis visitas con sotana sin recibir ningún insulto; ni siquiera me han llamado jesuita» (carta del 27 de mayo de 1838).",
          "narrative": "",
          "relatedSuspects": [
            "MC"
          ]
        },
        {
          "id": "c2",
          "text": "Uno quería limitar la autorización a los pequeños municipios; otro le pedía fundar en una población mayor.",
          "narrative": "",
          "relatedSuspects": [
            "SA",
            "AF"
          ]
        },
        {
          "id": "c3",
          "text": "El 2 de agosto de 1838 llegó una carta de los Hermanos de las Escuelas Cristianas.",
          "narrative": "",
          "relatedSuspects": [
            "AN"
          ]
        },
        {
          "id": "c4",
          "text": "En las calles de París, Marcelino se sentía como en los bosques de L’Hermitage, escribió el 18 de marzo de 1838.",
          "narrative": "",
          "relatedSuspects": [
            "MC",
            "HI"
          ]
        },
        {
          "id": "c5",
          "text": "Un consejo reunía cada domingo al fundador, al capellán y al hermano François.",
          "narrative": "",
          "relatedSuspects": [
            "FR",
            "MT"
          ]
        }
      ],
      "solution": {
        "MC": {
          "row": 0,
          "col": 2
        },
        "SA": {
          "row": 1,
          "col": 0
        },
        "AF": {
          "row": 2,
          "col": 4
        },
        "AN": {
          "row": 3,
          "col": 6
        },
        "NI": {
          "row": 4,
          "col": 3
        },
        "FR": {
          "row": 5,
          "col": 7
        },
        "MT": {
          "row": 6,
          "col": 8
        },
        "BE": {
          "row": 7,
          "col": 5
        },
        "HI": {
          "row": 8,
          "col": 1
        }
      }
    }
  },
  {
    "id": "021-HM",
    "nombre": "Los hermanos de Viviers",
    "datos_juego": {
      "Tamano_Cuadricula": "9x9",
      "gridSize": 9,
      "categoria": "Asumir la herencia",
      "rasgos": [
        "espiritu_familia",
        "estilo_maria"
      ],
      "fuenteHistorica": "L’Hermitage · Lanfrey T. 1, cap. 10",
      "textoClave": "El 23 de junio de 1842, Mons. Guibert, obispo de Viviers, propuso al hermano François unir sus hermanos a los Hermanos Maristas.",
      "contextoHistorico": "Tras la muerte de Champagnat, los Hermanos Maristas seguían sin autorización legal, pero tenían una identidad fuerte, mientras otras congregaciones autorizadas vegetaban. Desde marzo de 1842 se habían unido con los Hermanos de la Instrucción Cristiana de Saint-Paul-Trois-Châteaux, del Sr. Mazelier: cuatro maristas fueron enviados allí para transmitir el espíritu de L’Hermitage a unos cuarenta hermanos. El 15 de abril de 1844, Mons. Guibert firmó el contrato de unión, aprobado por el padre Colin, y se abrió un noviciado en La Bégude.",
      "solucionExplicacion": "El responsable de la unión fue Mons. Guibert: apenas firmado el acuerdo con Valence, propuso al hermano François unir los hermanos de Viviers al Instituto. Los acuerdos fueron rápidos y, el 2 de octubre de 1844, 22 antiguos hermanos de Viviers hicieron voto de obediencia y 9 los votos perpetuos. El Instituto pasó a tener cuatro provincias y cinco noviciados.",
      "storyIntro": "Verano de 1842. Hace dos años que murió el fundador y su obra, sin autorización legal, crece a toda velocidad. Acaba de firmarse la unión con Saint-Paul-Trois-Châteaux cuando llega otra propuesta desde el Ardèche. Descubre dónde estaba cada uno y quién quiso confiar sus hermanos a los maristas.",
      "epilogue": "¡Caso resuelto! En 1844 el Instituto contaba 610 miembros: L’Hermitage, el Nord, Vauban, Saint-Paul y La Bégude. En solo cuatro años, los efectivos casi se habían doblado.",
      "subtitle": "Asumir la herencia · L’Hermitage · 9x9",
      "badge": "LOS HERMANOS DE VIVIERS · 9x9",
      "victimId": "FR",
      "murdererId": "GU",
      "rooms": {
        "despacho": {
          "id": "despacho",
          "name": "Despacho del director general",
          "shortName": "Despacho",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Habitación de trabajo del hermano François en L’Hermitage."
        },
        "procura": {
          "id": "procura",
          "name": "Procura de L’Hermitage",
          "shortName": "Procura",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Oficina de las cuentas de la casa."
        },
        "casa_colin": {
          "id": "casa_colin",
          "name": "Residencia del padre Colin",
          "shortName": "Residencia",
          "bgColor": "bg-blue-100/70",
          "borderColor": "border-blue-700/60",
          "textColor": "text-blue-950",
          "tagColor": "bg-blue-800 text-blue-100",
          "description": "Casa del superior general de la Sociedad de María."
        },
        "saint_paul": {
          "id": "saint_paul",
          "name": "Casa de Saint-Paul-Trois-Châteaux",
          "shortName": "Saint-Paul",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Casa madre de los Hermanos de la Instrucción Cristiana."
        },
        "caminos_midi": {
          "id": "caminos_midi",
          "name": "Caminos del Midi",
          "shortName": "Caminos",
          "bgColor": "bg-orange-100/70",
          "borderColor": "border-orange-700/60",
          "textColor": "text-orange-950",
          "tagColor": "bg-orange-800 text-orange-100",
          "description": "Rutas hacia las nuevas casas del sur."
        },
        "noviciado_begude": {
          "id": "noviciado_begude",
          "name": "Noviciado de La Bégude",
          "shortName": "Noviciado",
          "bgColor": "bg-teal-100/70",
          "borderColor": "border-teal-700/60",
          "textColor": "text-teal-950",
          "tagColor": "bg-teal-800 text-teal-100",
          "description": "Casa de formación abierta tras la unión."
        },
        "capilla_begude": {
          "id": "capilla_begude",
          "name": "Capilla de La Bégude",
          "shortName": "Capilla",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Donde los hermanos de Viviers hicieron sus votos."
        }
      },
      "cellRooms": [
        [
          "despacho",
          "despacho",
          "despacho",
          "despacho",
          "despacho",
          "despacho",
          "despacho",
          "despacho",
          "procura"
        ],
        [
          "despacho",
          "despacho",
          "casa_colin",
          "despacho",
          "despacho",
          "saint_paul",
          "saint_paul",
          "despacho",
          "procura"
        ],
        [
          "despacho",
          "casa_colin",
          "casa_colin",
          "casa_colin",
          "saint_paul",
          "saint_paul",
          "saint_paul",
          "procura",
          "procura"
        ],
        [
          "casa_colin",
          "casa_colin",
          "casa_colin",
          "casa_colin",
          "saint_paul",
          "procura",
          "procura",
          "procura",
          "procura"
        ],
        [
          "casa_colin",
          "casa_colin",
          "casa_colin",
          "saint_paul",
          "saint_paul",
          "saint_paul",
          "saint_paul",
          "saint_paul",
          "procura"
        ],
        [
          "caminos_midi",
          "caminos_midi",
          "caminos_midi",
          "caminos_midi",
          "caminos_midi",
          "capilla_begude",
          "noviciado_begude",
          "noviciado_begude",
          "procura"
        ],
        [
          "caminos_midi",
          "caminos_midi",
          "caminos_midi",
          "caminos_midi",
          "caminos_midi",
          "capilla_begude",
          "noviciado_begude",
          "noviciado_begude",
          "noviciado_begude"
        ],
        [
          "caminos_midi",
          "capilla_begude",
          "capilla_begude",
          "capilla_begude",
          "capilla_begude",
          "capilla_begude",
          "noviciado_begude",
          "noviciado_begude",
          "noviciado_begude"
        ],
        [
          "caminos_midi",
          "caminos_midi",
          "capilla_begude",
          "capilla_begude",
          "capilla_begude",
          "capilla_begude",
          "noviciado_begude",
          "noviciado_begude",
          "noviciado_begude"
        ]
      ],
      "blockedObjects": {
        "0,4": {
          "emoji": "✉️",
          "name": "Carta de Viviers",
          "evidenceCode": "EV-01",
          "description": "Propuesta de unión del 23 de junio de 1842."
        },
        "0,8": {
          "emoji": "🧮",
          "name": "Libro de cuentas",
          "evidenceCode": "EV-02",
          "description": "Deudas de 60.000 francos tras la muerte del fundador."
        },
        "4,0": {
          "emoji": "🖋️",
          "name": "Firma «Colin Sup»",
          "evidenceCode": "EV-03",
          "description": "Aprobación del contrato de unión."
        },
        "1,6": {
          "emoji": "📜",
          "name": "Autorización de 1823",
          "evidenceCode": "EV-04",
          "description": "Permiso oficial de los hermanos de Valence."
        },
        "7,5": {
          "emoji": "🪢",
          "name": "Cordón",
          "evidenceCode": "EV-05",
          "description": "Signo entregado en el voto de obediencia."
        }
      },
      "suspects": [
        {
          "id": "FR",
          "name": "Hermano François (Gabriel Rivat)",
          "role": "Director general",
          "avatar": "🧑‍🎓",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Sucesor del fundador, a menudo enfermo, prefería la prudencia.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "despacho"
            },
            {
              "tipo": "norteDe",
              "sospechoso": "GU"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "JB"
            }
          ]
        },
        {
          "id": "GU",
          "name": "Mons. Guibert",
          "role": "Obispo de Viviers",
          "avatar": "🧑‍⚖️",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Sus hermanos diocesanos no prosperaban y buscaba quién los acogiera.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "despacho"
            }
          ]
        },
        {
          "id": "LM",
          "name": "Hermano Louis-Marie",
          "role": "Asistente, encargado de las finanzas",
          "avatar": "🧾",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Desde 1842 llevaba las cuentas de una casa endeudada.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "procura"
            }
          ]
        },
        {
          "id": "CO",
          "name": "Padre Jean-Claude Colin",
          "role": "Superior general de la Sociedad de María",
          "avatar": "🧔",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Superior de los hermanos hasta 1845, nada importante se hacía sin él.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_colin"
            },
            {
              "tipo": "borde",
              "lado": "oeste"
            },
            {
              "tipo": "norteDe",
              "sospechoso": "MZ"
            }
          ]
        },
        {
          "id": "MZ",
          "name": "Sr. Mazelier",
          "role": "Superior de los hermanos de Saint-Paul",
          "avatar": "👴",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Su congregación estaba autorizada, pero le faltaban vocaciones.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "saint_paul"
            }
          ]
        },
        {
          "id": "JB",
          "name": "Hermano Jean-Baptiste",
          "role": "Asistente para el Midi",
          "avatar": "🚶",
          "color": "from-stone-600 to-stone-800",
          "clueText": "Se encargaba de las provincias del sur y viajaba sin descanso.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "caminos_midi"
            }
          ]
        },
        {
          "id": "LB",
          "name": "Hermano Louis-Bernardin",
          "role": "Provincial",
          "avatar": "🧑‍🏫",
          "color": "from-teal-600 to-teal-800",
          "clueText": "Llegó como provincial para formar a los nuevos novicios.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "noviciado_begude"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "GU"
            },
            {
              "tipo": "surDe",
              "sospechoso": "JB"
            }
          ]
        },
        {
          "id": "BE",
          "name": "Padre Besson",
          "role": "Capellán",
          "avatar": "🙏",
          "color": "from-rose-600 to-rose-800",
          "clueText": "Acompañó a los hermanos como capellán durante treinta años.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "capilla_begude"
            },
            {
              "tipo": "junto_objeto",
              "objeto": "7,5"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "MZ"
            }
          ]
        },
        {
          "id": "EV",
          "name": "Antiguo hermano de Viviers",
          "role": "Hermano diocesano",
          "avatar": "🧑",
          "color": "from-indigo-600 to-indigo-800",
          "clueText": "El 2 de octubre de 1844 prometió obediencia al nuevo Instituto.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "capilla_begude"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "JB"
            }
          ]
        }
      ],
      "clues": [
        {
          "id": "c1",
          "text": "Desde marzo de 1842, cuatro Hermanos Maristas fueron enviados a Saint-Paul para desarrollar el noviciado.",
          "narrative": "",
          "relatedSuspects": [
            "MZ"
          ]
        },
        {
          "id": "c2",
          "text": "El contrato de unión del 15 de abril de 1844 fue aprobado por el superior de la Sociedad de María.",
          "narrative": "",
          "relatedSuspects": [
            "CO"
          ]
        },
        {
          "id": "c3",
          "text": "Un provincial y un capellán llegaron para la nueva provincia.",
          "narrative": "",
          "relatedSuspects": [
            "LB",
            "BE"
          ]
        },
        {
          "id": "c4",
          "text": "El 2 de octubre de 1844, 22 antiguos hermanos de Viviers hicieron voto de obediencia.",
          "narrative": "",
          "relatedSuspects": [
            "EV"
          ]
        },
        {
          "id": "c5",
          "text": "La propuesta llegó al Rdo. hermano François cuando apenas se había firmado el acuerdo con Valence.",
          "narrative": "",
          "relatedSuspects": [
            "FR",
            "GU"
          ]
        }
      ],
      "solution": {
        "FR": {
          "row": 0,
          "col": 1
        },
        "GU": {
          "row": 1,
          "col": 7
        },
        "LM": {
          "row": 2,
          "col": 8
        },
        "CO": {
          "row": 3,
          "col": 0
        },
        "MZ": {
          "row": 4,
          "col": 5
        },
        "JB": {
          "row": 5,
          "col": 2
        },
        "LB": {
          "row": 6,
          "col": 6
        },
        "BE": {
          "row": 7,
          "col": 4
        },
        "EV": {
          "row": 8,
          "col": 3
        }
      }
    }
  },
  {
    "id": "022-HM",
    "nombre": "El segundo nacimiento",
    "datos_juego": {
      "Tamano_Cuadricula": "9x9",
      "gridSize": 9,
      "categoria": "La autorización legal",
      "rasgos": [
        "amor_trabajo",
        "espiritu_familia"
      ],
      "fuenteHistorica": "L’Hermitage · Lanfrey T. 1, cap. 10",
      "textoClave": "El 20 de junio de 1851, el príncipe-presidente Louis-Napoléon firmó el decreto que reconocía a los Hermanitos de María como establecimiento de utilidad pública.",
      "contextoHistorico": "Champagnat había fracasado una y otra vez en obtener la autorización legal. Tras su muerte hubo nuevos intentos en 1841-1842 y en 1846, también fallidos. Caída la Monarquía de Julio en 1848, el hermano François reanudó las gestiones el 28 de febrero de 1849 ante el conde de Montalembert, defensor de la libertad de enseñanza, y el Sr. Falloux, promotor de la ley que pronto suprimiría el monopolio universitario. En enero de 1851, Mons. Parisis, obispo de Langres y diputado, hizo suya la causa marista.",
      "solucionExplicacion": "El responsable de la firma fue el príncipe-presidente Louis-Napoléon. En marzo de 1851, los hermanos François y Louis-Marie fueron a París para mover el asunto y, el 20 de junio, el decreto quedó firmado. Para el Instituto fue «como un segundo nacimiento»: llegó justo a tiempo para dar bases sólidas a una congregación que había casi triplicado su personal.",
      "storyIntro": "Primavera de 1851. Lo que Marcelino no consiguió en vida está a punto de lograrse: dos hermanos han viajado a París, un obispo diputado defiende su causa y una firma puede cambiarlo todo. Descubre dónde estaba cada uno y quién firmó, por fin, la autorización.",
      "epilogue": "¡Caso resuelto! Con la autorización en la mano, el Instituto celebró su primer capítulo general (1852-1854) y se dio unas Reglas de gobierno. El 11 de junio de 1852, la carta del capítulo a todos los hermanos llevaba como primera firma la del «hermano François, superior general».",
      "subtitle": "La autorización legal · L’Hermitage · 9x9",
      "badge": "EL SEGUNDO NACIMIENTO · 9x9",
      "victimId": "FR",
      "murdererId": "LN",
      "rooms": {
        "eliseo": {
          "id": "eliseo",
          "name": "Despacho del príncipe-presidente",
          "shortName": "Presidencia",
          "bgColor": "bg-red-100/70",
          "borderColor": "border-red-700/60",
          "textColor": "text-red-950",
          "tagColor": "bg-red-800 text-red-100",
          "description": "Donde se firmaban los decretos del gobierno."
        },
        "posada": {
          "id": "posada",
          "name": "Alojamiento en París",
          "shortName": "Alojamiento",
          "bgColor": "bg-stone-100/70",
          "borderColor": "border-stone-700/60",
          "textColor": "text-stone-950",
          "tagColor": "bg-stone-800 text-stone-100",
          "description": "Cuarto modesto de los hermanos durante su viaje."
        },
        "asamblea": {
          "id": "asamblea",
          "name": "Asamblea Nacional",
          "shortName": "Asamblea",
          "bgColor": "bg-blue-100/70",
          "borderColor": "border-blue-700/60",
          "textColor": "text-blue-950",
          "tagColor": "bg-blue-800 text-blue-100",
          "description": "Cámara de los diputados de la Segunda República."
        },
        "salon_falloux": {
          "id": "salon_falloux",
          "name": "Salón del Sr. Falloux",
          "shortName": "Salón",
          "bgColor": "bg-amber-100/70",
          "borderColor": "border-amber-700/60",
          "textColor": "text-amber-950",
          "tagColor": "bg-amber-800 text-amber-100",
          "description": "Donde se preparaba la ley de libertad de enseñanza."
        },
        "hermitage": {
          "id": "hermitage",
          "name": "Casa de L’Hermitage",
          "shortName": "L’Hermitage",
          "bgColor": "bg-purple-100/70",
          "borderColor": "border-purple-700/60",
          "textColor": "text-purple-950",
          "tagColor": "bg-purple-800 text-purple-100",
          "description": "Casa madre, ya demasiado pequeña para tantos hermanos."
        },
        "casa_colin": {
          "id": "casa_colin",
          "name": "Residencia del padre Colin",
          "shortName": "Residencia",
          "bgColor": "bg-indigo-100/70",
          "borderColor": "border-indigo-700/60",
          "textColor": "text-indigo-950",
          "tagColor": "bg-indigo-800 text-indigo-100",
          "description": "Casa del superior general de los Padres Maristas."
        },
        "caminos": {
          "id": "caminos",
          "name": "Caminos de las visitas",
          "shortName": "Caminos",
          "bgColor": "bg-orange-100/70",
          "borderColor": "border-orange-700/60",
          "textColor": "text-orange-950",
          "tagColor": "bg-orange-800 text-orange-100",
          "description": "Rutas entre las casas del Centro y del Midi."
        }
      },
      "cellRooms": [
        [
          "eliseo",
          "eliseo",
          "eliseo",
          "asamblea",
          "posada",
          "posada",
          "posada",
          "posada",
          "posada"
        ],
        [
          "eliseo",
          "eliseo",
          "eliseo",
          "asamblea",
          "posada",
          "posada",
          "posada",
          "posada",
          "posada"
        ],
        [
          "eliseo",
          "eliseo",
          "asamblea",
          "asamblea",
          "posada",
          "posada",
          "posada",
          "posada",
          "posada"
        ],
        [
          "eliseo",
          "asamblea",
          "asamblea",
          "asamblea",
          "asamblea",
          "asamblea",
          "salon_falloux",
          "salon_falloux",
          "caminos"
        ],
        [
          "hermitage",
          "hermitage",
          "asamblea",
          "hermitage",
          "asamblea",
          "asamblea",
          "salon_falloux",
          "salon_falloux",
          "caminos"
        ],
        [
          "hermitage",
          "hermitage",
          "hermitage",
          "hermitage",
          "asamblea",
          "asamblea",
          "salon_falloux",
          "salon_falloux",
          "caminos"
        ],
        [
          "hermitage",
          "hermitage",
          "hermitage",
          "hermitage",
          "casa_colin",
          "casa_colin",
          "salon_falloux",
          "caminos",
          "caminos"
        ],
        [
          "casa_colin",
          "casa_colin",
          "casa_colin",
          "casa_colin",
          "casa_colin",
          "casa_colin",
          "caminos",
          "caminos",
          "caminos"
        ],
        [
          "casa_colin",
          "casa_colin",
          "casa_colin",
          "casa_colin",
          "casa_colin",
          "casa_colin",
          "casa_colin",
          "caminos",
          "caminos"
        ]
      ],
      "blockedObjects": {
        "1,5": {
          "emoji": "🧳",
          "name": "Maleta de viaje",
          "evidenceCode": "EV-01",
          "description": "Equipaje de los dos hermanos llegados en marzo."
        },
        "5,3": {
          "emoji": "📘",
          "name": "Borrador de la Regla",
          "evidenceCode": "EV-02",
          "description": "Los superiores trabajaban en ella desde hacía años."
        },
        "7,7": {
          "emoji": "🐴",
          "name": "Caballo",
          "evidenceCode": "EV-03",
          "description": "Montura del visitador."
        }
      },
      "suspects": [
        {
          "id": "FR",
          "name": "Hermano François (Gabriel Rivat)",
          "role": "Superior de los hermanos",
          "avatar": "🧑‍🎓",
          "color": "from-amber-600 to-amber-800",
          "isVictim": true,
          "clueText": "Llevaba desde 1849 tocando puertas por la causa del Instituto.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "eliseo"
            }
          ]
        },
        {
          "id": "LN",
          "name": "Louis-Napoléon Bonaparte",
          "role": "Príncipe-presidente",
          "avatar": "🎖️",
          "color": "from-red-600 to-red-800",
          "isMurderer": true,
          "clueText": "Tenía en su mano la firma que los maristas esperaban desde hacía décadas.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "eliseo"
            },
            {
              "tipo": "norteDe",
              "sospechoso": "LM"
            },
            {
              "tipo": "filaObjeto",
              "objeto": "1,5"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "FR"
            }
          ]
        },
        {
          "id": "LM",
          "name": "Hermano Louis-Marie",
          "role": "Asistente",
          "avatar": "🧾",
          "color": "from-blue-600 to-blue-800",
          "clueText": "Viajó a París en marzo de 1851 para mover el asunto.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "posada"
            }
          ]
        },
        {
          "id": "PA",
          "name": "Mons. Parisis",
          "role": "Obispo de Langres y diputado",
          "avatar": "🧑‍⚖️",
          "color": "from-emerald-600 to-emerald-800",
          "clueText": "Desde enero de 1851 había hecho suya la causa marista.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "asamblea"
            },
            {
              "tipo": "norteDe",
              "sospechoso": "MO"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "LN"
            }
          ]
        },
        {
          "id": "MO",
          "name": "Conde de Montalembert",
          "role": "Defensor de la libertad de enseñanza",
          "avatar": "🎩",
          "color": "from-purple-600 to-purple-800",
          "clueText": "Había recibido al hermano François en 1849.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "asamblea"
            },
            {
              "tipo": "oesteDe",
              "sospechoso": "CO"
            }
          ]
        },
        {
          "id": "FA",
          "name": "Sr. Falloux",
          "role": "Promotor de la ley de 1850",
          "avatar": "🧑‍💼",
          "color": "from-stone-600 to-stone-800",
          "clueText": "Su ley iba a suprimir el monopolio de la Universidad.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "salon_falloux"
            },
            {
              "tipo": "filaObjeto",
              "objeto": "5,3"
            }
          ]
        },
        {
          "id": "JB",
          "name": "Hermano Jean-Baptiste",
          "role": "Asistente",
          "avatar": "✒️",
          "color": "from-teal-600 to-teal-800",
          "clueText": "Trabajaba con los demás superiores en la futura regla.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "hermitage"
            },
            {
              "tipo": "esteDe",
              "sospechoso": "PA"
            }
          ]
        },
        {
          "id": "CO",
          "name": "Padre Jean-Claude Colin",
          "role": "Superior general de los Padres Maristas",
          "avatar": "🧔",
          "color": "from-rose-600 to-rose-800",
          "clueText": "Había dejado a los hermanos gobernarse con su propio superior.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "casa_colin"
            }
          ]
        },
        {
          "id": "AV",
          "name": "Hermano Avit",
          "role": "Visitador del Centro y del Midi",
          "avatar": "🚶",
          "color": "from-indigo-600 to-indigo-800",
          "clueText": "Desde 1848 recorría casi todas las casas del Instituto.",
          "pistasPosicion": [
            {
              "tipo": "estancia",
              "estancia": "caminos"
            },
            {
              "tipo": "borde",
              "lado": "sur"
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
          "text": "El 28 de febrero de 1849, el hermano François reanudó las gestiones ante un conde y un futuro legislador.",
          "narrative": "",
          "relatedSuspects": [
            "FR",
            "MO",
            "FA"
          ]
        },
        {
          "id": "c2",
          "text": "En enero de 1851, un obispo diputado se tomó a pecho la causa marista.",
          "narrative": "",
          "relatedSuspects": [
            "PA"
          ]
        },
        {
          "id": "c3",
          "text": "En marzo, dos hermanos se dirigieron a París para mover el asunto.",
          "narrative": "",
          "relatedSuspects": [
            "FR",
            "LM"
          ]
        },
        {
          "id": "c4",
          "text": "Desde 1845 el superior de los Padres Maristas había liberado a los hermanos de su dependencia.",
          "narrative": "",
          "relatedSuspects": [
            "CO"
          ]
        },
        {
          "id": "c5",
          "text": "En septiembre de 1848, un hermano fue nombrado visitador único del Centro y del Midi.",
          "narrative": "",
          "relatedSuspects": [
            "AV"
          ]
        }
      ],
      "solution": {
        "FR": {
          "row": 0,
          "col": 0
        },
        "LN": {
          "row": 1,
          "col": 1
        },
        "LM": {
          "row": 2,
          "col": 8
        },
        "PA": {
          "row": 3,
          "col": 2
        },
        "MO": {
          "row": 4,
          "col": 4
        },
        "FA": {
          "row": 5,
          "col": 6
        },
        "JB": {
          "row": 6,
          "col": 3
        },
        "CO": {
          "row": 7,
          "col": 5
        },
        "AV": {
          "row": 8,
          "col": 7
        }
      }
    }
  }
];
