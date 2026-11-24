import { Reto } from '../types';

/**
 * NUEVOS RETOS BÍBLICOS - DIFICULTAD DIFÍCIL (9x9 - 81 CELDAS)
 * Ciclo de la Monarquía de Israel (2 Reyes 11).
 */
export const RETOS_MONARQUIA_DIFICILES: Reto[] = [
  // RETO 010-C: El Niño Oculto en el Templo
  {
    id: '010-C',
    nombre: 'El Niño Oculto en el Templo',
    datos_juego: {
      Tamano_Cuadricula: '9x9',
      gridSize: 9,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: '2 Reyes 11, 1-16',
      textoBiblicoClave: 'Josaba raptó a Joás, hijo de Ocozías, de entre los hijos del rey a quienes estaban asesinando, y lo escondió de Atalía.',
      contextoTeologico: 'Relata la preservación providencial del linaje davídico. Destaca la resistencia de las instituciones religiosas (el Templo) contra los abusos tiránicos. La alianza entre clero y militares restaura el orden prometido por Dios.',
      solucionExplicacion: 'La reina Atalía intentó exterminar a la casa de David, pero Josaba ocultó al bebé Joás en el Templo. Tras seis años escondido, el sacerdote Joiada organizó un golpe, coronó al niño y ordenó ejecutar a la usurpadora.',
      storyIntro: 'Una reina extranjera masacra a sus propios nietos para aferrarse al poder absoluto. Sin embargo, un acto de valentía oculta al último heredero en el lugar más sagrado, gestando una revolución seis años después.',
      epilogue: '¡La dinastía legítima restaurada ante el pueblo de Dios! El niño Joás de siete años fue coronado junto a la columna real en medio del clamor de las trompetas y los aplausos de Judá. Atalía rasgó sus vestidos gritando «¡Traición, traición!», pero fue conducida fuera del santuario por la puerta de los caballos para cumplir la sentencia de la justicia divina.',
      subtitle: 'Descubrimiento de acciones ocultas · 2 Reyes 11 · 9x9',
      badge: 'EL NIÑO OCULTO EN EL TEMPLO · 9x9',
      victimId: 'J',
      murdererId: 'A',
      rooms: {
        atrio_templo: {
          id: 'atrio_templo',
          name: 'Atrio Principal y Columna Real',
          shortName: 'Atrio Templo',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Lugar solemne donde el joven Joás fue ungido y coronado con la diadema y el libro del Testimonio.'
        },
        aposento_dormitorios: {
          id: 'aposento_dormitorios',
          name: 'Cámara Secreta de los Lechos',
          shortName: 'Cámara Lechos',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Habitación recóndita de los sacerdotes donde el infante y su nodriza vivieron ocultos durante seis años.'
        },
        palacio_atalia: {
          id: 'palacio_atalia',
          name: 'Palacio Real Usurpado de Atalía',
          shortName: 'Palacio Atalía',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Sede del gobierno tiránico desde donde la reina oyó el estruendo de la muchedumbre aclamando al rey.'
        },
        puerta_sur: {
          id: 'puerta_sur',
          name: 'Puerta de los Caballos y Desfiladero',
          shortName: 'Puerta Caballos',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Acceso por donde los capitanes sacaron a la usurpadora para no manchar de sangre el recinto sagrado.'
        },
        santuario_interior: {
          id: 'santuario_interior',
          name: 'Armería Consagrada del Templo',
          shortName: 'Armería Templo',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Depósito donde se guardaban las lanzas y escudos del rey David entregados a los centuriones levitas.'
        }
      },
      cellRooms: [
        ['palacio_atalia', 'palacio_atalia', 'palacio_atalia', 'palacio_atalia', 'palacio_atalia', 'palacio_atalia', 'palacio_atalia', 'palacio_atalia', 'palacio_atalia'],
        ['palacio_atalia', 'aposento_dormitorios', 'aposento_dormitorios', 'aposento_dormitorios', 'palacio_atalia', 'palacio_atalia', 'palacio_atalia', 'palacio_atalia', 'palacio_atalia'],
        ['atrio_templo', 'aposento_dormitorios', 'aposento_dormitorios', 'aposento_dormitorios', 'atrio_templo', 'atrio_templo', 'atrio_templo', 'atrio_templo', 'atrio_templo'],
        ['atrio_templo', 'atrio_templo', 'santuario_interior', 'santuario_interior', 'santuario_interior', 'atrio_templo', 'atrio_templo', 'atrio_templo', 'atrio_templo'],
        ['atrio_templo', 'atrio_templo', 'santuario_interior', 'santuario_interior', 'santuario_interior', 'atrio_templo', 'atrio_templo', 'atrio_templo', 'puerta_sur'],
        ['atrio_templo', 'atrio_templo', 'atrio_templo', 'atrio_templo', 'atrio_templo', 'atrio_templo', 'atrio_templo', 'puerta_sur', 'puerta_sur'],
        ['atrio_templo', 'atrio_templo', 'atrio_templo', 'atrio_templo', 'atrio_templo', 'puerta_sur', 'puerta_sur', 'puerta_sur', 'puerta_sur'],
        ['puerta_sur', 'puerta_sur', 'puerta_sur', 'puerta_sur', 'puerta_sur', 'puerta_sur', 'puerta_sur', 'puerta_sur', 'puerta_sur'],
        ['puerta_sur', 'puerta_sur', 'puerta_sur', 'puerta_sur', 'puerta_sur', 'puerta_sur', 'puerta_sur', 'puerta_sur', 'puerta_sur']
      ],
      blockedObjects: {
        '0,0': {
          emoji: '👑',
          name: 'Corona Imperial de Judá',
          evidenceCode: 'EV-01',
          description: 'Diadema dorada puesta sobre las sienes del niño de siete años por el sumo sacerdote.'
        },
        '2,2': {
          emoji: '🛡️',
          name: 'Escudos y Lanzas de David',
          evidenceCode: 'EV-02',
          description: 'Armamento consagrado extraído del santuario para equipar a los guardias en el sábado.'
        },
        '4,8': {
          emoji: '🏛️',
          name: 'Columna Solemne de la Coronación',
          evidenceCode: 'EV-03',
          description: 'Pilar del templo junto al cual comparecía tradicionalmente el rey en ceremonias públicas.'
        },
        '6,5': {
          emoji: '👘',
          name: 'Vestiduras Reales Rasgadas de Atalía',
          evidenceCode: 'EV-04',
          description: 'Ropajes de púrpura que la usurpadora desgarró con rabia al verse rodeada.'
        },
        '8,1': {
          emoji: '🎺',
          name: 'Trompetas de Plata del Pueblo',
          evidenceCode: 'EV-05',
          description: 'Instrumentos sagrados que hicieron vibrar los muros proclamando: «¡Viva el Rey!». '
        }
      },
      suspects: [
        {
          id: 'A',
          name: 'Reina Atalía',
          role: 'Usurpadora Tiránica',
          avatar: '🦹‍♀️',
          color: 'from-purple-600 to-purple-800',
          isMurderer: true,
          clueText: 'Buscó aniquilar a toda la descendencia real para reinar sobre Judá a sangre y fuego.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'aposento_dormitorios' },
            { tipo: 'esteDe', sospechoso: 'J' }
          ]
        },
        {
          id: 'J',
          name: 'Joás',
          role: 'Niño Heredero de David',
          avatar: '👶',
          color: 'from-amber-600 to-amber-800',
          isVictim: true,
          clueText: 'Sobreviviente milagroso protegido en secreto dentro de la casa del Señor.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'aposento_dormitorios' },
            { tipo: 'filaObjeto', objeto: '2,2' }
          ]
        },
        {
          id: 'S',
          name: 'Princesa Josaba',
          role: 'Tía Protectora Heroica',
          avatar: '🧕',
          color: 'from-rose-600 to-rose-800',
          clueText: 'Arriesgó su propia vida para arrebatar al bebé de entre los príncipes asesinados.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'atrio_templo' },
            { tipo: 'filaObjeto', objeto: '4,8' },
            { tipo: 'junto_objeto', objeto: '4,8' }
          ]
        },
        {
          id: 'P',
          name: 'Sumo Sacerdote Joiada',
          role: 'Estratega del Templo',
          avatar: '📜',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Organizó a los capitanes de cien y pactó el juramento de lealtad en día de reposo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'santuario_interior' },
            { tipo: 'columnaObjeto', objeto: '2,2' }
          ]
        },
        {
          id: 'C',
          name: 'Capitán Carieo',
          role: 'Jefe de la Guardia Real',
          avatar: '🛡️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Apostó a sus soldados armados rodeando el altar para proteger al pequeño ungido.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'atrio_templo' },
            { tipo: 'columnaObjeto', objeto: '6,5' }
          ]
        },
        {
          id: 'N',
          name: 'Nodriza Fiel',
          role: 'Cuidadora de Joás',
          avatar: '🤱',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Amamantó y cuidó al legítimo rey en la penumbra del aposento sacerdotal.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_sur' },
            { tipo: 'columnaObjeto', objeto: '4,8' }
          ]
        },
        {
          id: 'L',
          name: 'Levita del Umbral',
          role: 'Centinela del Santuario',
          avatar: '🗡️',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Custodió el portón impidiendo que los espías de Atalía descubrieran el escondite.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'palacio_atalia' },
            { tipo: 'oesteDe', sospechoso: 'C' }
          ]
        },
        {
          id: 'Z',
          name: 'Sacerdote del Altar',
          role: 'Oficiante del Sacrificio',
          avatar: '🕯️',
          color: 'from-yellow-600 to-yellow-800',
          clueText: 'Mantuvo encendido el fuego del holocausto durante el secreto pacto de la restauración.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_sur' },
            { tipo: 'surDe', sospechoso: 'N' }
          ]
        },
        {
          id: 'H',
          name: 'Heraldo de Judá',
          role: 'Trompetero Mayor',
          avatar: '🎺',
          color: 'from-orange-600 to-orange-800',
          clueText: 'Tocó el shofar que anunció a toda Jerusalén que el linaje de David seguía con vida.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_sur' },
            { tipo: 'junto_objeto', objeto: '8,1' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'La reina madre ordenó la matanza sistemática de todos los descendientes reales tras la muerte de su hijo.',
          narrative: 'Atalía gobernaba con tiranía creyendo haber exterminado la estirpe davídica.',
          relatedSuspects: ['A']
        },
        {
          id: 'c2',
          text: 'Una tía valiente (hermana del difunto rey) raptó al bebé recién nacido de entre los infantes condenados.',
          narrative: 'Josaba arriesgó su vida sacando al infante Joás del palacio real.',
          relatedSuspects: ['S', 'J', 'A']
        },
        {
          id: 'c3',
          text: 'El heredero y su nodriza permanecieron escondidos durante seis años enteros en una habitación secreta del Templo de Yahvé.',
          narrative: 'La Nodriza Fiel cuidó al niño en la cámara de los lechos sin salir a la luz.',
          relatedSuspects: ['N', 'J']
        },
        {
          id: 'c4',
          text: 'Al séptimo año, el sumo sacerdote pactó en secreto con los centuriones de la guardia y los introdujo en el santuario.',
          narrative: 'Joiada congregó a los capitanes carieos bajo estricto juramento.',
          relatedSuspects: ['P', 'C']
        },
        {
          id: 'c5',
          text: 'El sacerdote entregó a los capitanes las lanzas y escudos sagrados que habían pertenecido al rey David.',
          narrative: 'Las armas de la armería consagrada fueron distribuidas entre los levitas leales.',
          relatedSuspects: ['P', 'L']
        },
        {
          id: 'c6',
          text: 'Se colocó al niño junto a la columna, le ciñeron la diadema real, le entregaron la Ley y lo ungieron rey entre aclamaciones.',
          narrative: 'Joás fue ungido ante el altar con los sacerdotes custodiando el perímetro sagrado.',
          relatedSuspects: ['J', 'P', 'Z']
        },
        {
          id: 'c7',
          text: 'La usurpadora oyó el estruendo, acudió al Templo gritando «¡Traición!» y fue capturada y ejecutada fuera del recinto sagrado.',
          narrative: 'El heraldo hizo resonar las trompetas y los soldados apresaron a Atalía junto a la puerta de los caballos.',
          relatedSuspects: ['A', 'H', 'C']
        }
      ],
      solution: {
        A: { row: 1, col: 3 },
        J: { row: 2, col: 1 },
        S: { row: 4, col: 7 },
        P: { row: 3, col: 2 },
        C: { row: 5, col: 5 },
        N: { row: 6, col: 8 },
        L: { row: 0, col: 4 },
        Z: { row: 7, col: 6 },
        H: { row: 8, col: 0 }
      }
    }
  }
];
