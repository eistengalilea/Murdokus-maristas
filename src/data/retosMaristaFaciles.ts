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
  }
];
