import { Reto } from '../types';

/**
 * NUEVOS RETOS BÍBLICOS - DIFICULTAD MEDIO (7x7)
 * Creados a partir de los casos canónicos del libro de Daniel, Ester y Jeremías.
 */
export const RETOS_NUEVOS_MEDIOS: Reto[] = [
  // RETO 003-B: El Decreto de los Treinta Días
  {
    id: '003-B',
    nombre: 'El Decreto de los Treinta Días',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Asesinatos o crímenes',
      citasBiblicas: 'Daniel 6, 1-25',
      textoBiblicoClave: 'Mi Dios envió a su ángel a cerrar las fauces de los leones, y no me han hecho ningún daño, porque me ha encontrado inocente.',
      contextoTeologico: 'Este relato muestra el conflicto ético entre el poder civil absoluto y la fidelidad religiosa. El magisterio destaca aquí la primacía de la conciencia y la protección providencial sobre el justo que sufre persecución legal.',
      solucionExplicacion: 'Unos funcionarios engañaron a Darío para que prohibiera rezar, buscando matar a Daniel por envidia política. Daniel siguió orando, fue arrojado al foso de los leones, pero un ángel lo protegió cerrando las fauces de las bestias.',
      storyIntro: 'Un anciano de intachable conducta política es sentenciado a una muerte brutal. El propio monarca que dicta la sentencia pasa la noche en vela y ayunando, esperando contra toda lógica que el condenado sobreviva al amanecer.',
      epilogue: '¡Caso resuelto! Daniel se mantuvo fiel orando tres veces al día en su cámara alta. Dios envió a su ángel para sellar las fauces de los leones, librando al justo de la trampa envidiosa de los sátrapas.',
      subtitle: 'Asesinatos o crímenes · Daniel 6 · 7x7',
      badge: 'EL DECRETO DE LOS TREINTA DÍAS · 7x7',
      victimId: 'D',
      murdererId: 'S',
      rooms: {
        foso_leones: {
          id: 'foso_leones',
          name: 'Foso Subterráneo de los Leones',
          shortName: 'Foso Leones',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Cueva cerrada con una gran losa sellada con el anillo real y de los nobles.'
        },
        camara_oracion: {
          id: 'camara_oracion',
          name: 'Cámara Alta de Oración de Daniel',
          shortName: 'Cámara Daniel',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Aposento con ventanas abiertas orientadas hacia Jerusalén donde Daniel rezaba de rodillas.'
        },
        palacio_dario: {
          id: 'palacio_dario',
          name: 'Palacio Real de Darío',
          shortName: 'Palacio Darío',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Cámara regia donde el monarca pasó la noche en ayuno y desvelo por su amigo.'
        },
        sala_satrapas: {
          id: 'sala_satrapas',
          name: 'Sala de Audiencias de los Sátrapas',
          shortName: 'Sala Sátrapas',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Lugar de conspiración donde los gobernadores redactaron la trampa legal.'
        },
        puesto_guardia_foso: {
          id: 'puesto_guardia_foso',
          name: 'Pórtico y Custodia del Foso',
          shortName: 'Pórtico Foso',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Acceso superior donde los centinelas montaron guardia nocturna junto a la roca sellada.'
        }
      },
      cellRooms: [
        ['camara_oracion', 'camara_oracion', 'palacio_dario', 'palacio_dario', 'palacio_dario', 'sala_satrapas', 'sala_satrapas'],
        ['camara_oracion', 'camara_oracion', 'palacio_dario', 'palacio_dario', 'palacio_dario', 'sala_satrapas', 'sala_satrapas'],
        ['camara_oracion', 'camara_oracion', 'puesto_guardia_foso', 'puesto_guardia_foso', 'puesto_guardia_foso', 'sala_satrapas', 'sala_satrapas'],
        ['foso_leones', 'foso_leones', 'foso_leones', 'puesto_guardia_foso', 'puesto_guardia_foso', 'sala_satrapas', 'sala_satrapas'],
        ['foso_leones', 'foso_leones', 'foso_leones', 'foso_leones', 'puesto_guardia_foso', 'puesto_guardia_foso', 'puesto_guardia_foso'],
        ['foso_leones', 'foso_leones', 'foso_leones', 'foso_leones', 'foso_leones', 'puesto_guardia_foso', 'puesto_guardia_foso'],
        ['foso_leones', 'foso_leones', 'foso_leones', 'foso_leones', 'foso_leones', 'puesto_guardia_foso', 'puesto_guardia_foso']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '🪟',
          name: 'Ventanal hacia Jerusalén',
          evidenceCode: 'EV-01',
          description: 'Abertura por donde Daniel elevaba sus plegarias tres veces cada jornada.'
        },
        '2,3': {
          emoji: '📜',
          name: 'Edicto Real Sellado',
          evidenceCode: 'EV-02',
          description: 'Decreto irrevocable de los medos y persas con prohibición de rezar.'
        },
        '4,1': {
          emoji: '🦁',
          name: 'Manada de Leones Hambrientos',
          evidenceCode: 'EV-03',
          description: 'Fieras que permanecieron mansas sin tocar al profeta inocente.'
        },
        '6,5': {
          emoji: '🪨',
          name: 'Losa Sellada con Anillo',
          evidenceCode: 'EV-04',
          description: 'Piedra circular sellada para garantizar que nada se alterase en el castigo.'
        }
      },
      suspects: [
        {
          id: 'R',
          name: 'Darío',
          role: 'Rey engañado de los medos',
          avatar: '👑',
          color: 'from-purple-600 to-amber-700',
          clueText: 'En el Palacio Real angustiado pasando la noche en ayuno estricto.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'palacio_dario' },
            { tipo: 'junto_objeto', objeto: '2,3' }
          ]
        },
        {
          id: 'D',
          name: 'Daniel',
          role: 'Primer ministro intachable',
          avatar: '📜',
          color: 'from-blue-600 to-indigo-800',
          isVictim: true,
          clueText: 'En el Foso de los Leones acompañado por el enviado divino.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'foso_leones' },
            { tipo: 'filaObjeto', objeto: '6,5' }
          ]
        },
        {
          id: 'S',
          name: 'Sátrapa Conspirador',
          role: 'Promotor de la envidia legal',
          avatar: '🗡️',
          color: 'from-red-600 to-rose-900',
          isMurderer: true,
          clueText: 'Junto al foso de los leones, celebrando la aparente caída de su rival.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'foso_leones' },
            { tipo: 'esteDe', sospechoso: 'R' }
          ]
        },
        {
          id: 'G',
          name: 'Gobernador Cómplice',
          role: 'Testigo acusador ante el rey',
          avatar: '⚖️',
          color: 'from-stone-700 to-stone-900',
          clueText: 'En la Sala de Sátrapas exigiendo el cumplimiento estricto de la ley persa.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'sala_satrapas' }
          ]
        },
        {
          id: 'A',
          name: 'Un Ángel',
          role: 'Mensajero protector celestial',
          avatar: '🕊️',
          color: 'from-amber-400 to-yellow-600',
          clueText: 'Velando en la cámara de oración, enviado para sellar las fauces de las bestias.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camara_oracion' },
            { tipo: 'columnaObjeto', objeto: '0,1' }
          ]
        },
        {
          id: 'C',
          name: 'Centinela del Foso',
          role: 'Guardia de la losa sellada',
          avatar: '🛡️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'En el Pórtico del Foso vigilando que nadie mueva la piedra sellada.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puesto_guardia_foso' },
            { tipo: 'columnaObjeto', objeto: '6,5' }
          ]
        },
        {
          id: 'E',
          name: 'Escriba de la Corte',
          role: 'Notario de la ley medopersa',
          avatar: '✒️',
          color: 'from-teal-600 to-teal-800',
          clueText: 'En la Cámara de Oración levantando acta testifical de las plegarias de Daniel.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camara_oracion' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El rey planeaba poner a uno de sus altos funcionarios al frente de todo el reino por su espíritu extraordinario y honestidad.',
          narrative: 'Darío apreciaba el desempeño íntegro y la lealtad sincera de Daniel.',
          relatedSuspects: ['R', 'D']
        },
        {
          id: 'c2',
          text: 'Otros altos cargos políticos, movidos por la envidia, buscaron una excusa legal para eliminar a su rival, sabiendo que era intachable.',
          narrative: 'El sátrapa y el gobernador tramaron la trampa en la sala de audiencias.',
          relatedSuspects: ['S', 'G']
        },
        {
          id: 'c3',
          text: 'Los conspiradores engañaron al monarca para firmar un edicto irrevocable que prohibía rezar a cualquier dios u hombre que no fuera el rey.',
          narrative: 'El escriba de la corte redactó la prohibición de treinta días con sello real.',
          relatedSuspects: ['S', 'E', 'R']
        },
        {
          id: 'c4',
          text: 'La víctima designada ignoró la prohibición temporal y continuó rezando tres veces al día con las ventanas abiertas hacia Jerusalén.',
          narrative: 'Daniel mantuvo su costumbre orando de rodillas en su cámara alta.',
          relatedSuspects: ['D']
        },
        {
          id: 'c5',
          text: 'El rey, atado por su propia ley, se vio obligado con gran dolor a condenar a su funcionario favorito al foso de las fieras.',
          narrative: 'El centinela cerró la fosa con la piedra mientras el monarca confiaba en Dios.',
          relatedSuspects: ['R', 'C', 'D']
        },
        {
          id: 'c6',
          text: 'Durante toda la noche, el rey se negó a comer, y al amanecer corrió al foso temiendo lo peor.',
          narrative: 'Darío llegó apresurado al amanecer gritando con voz afligida.',
          relatedSuspects: ['R']
        },
        {
          id: 'c7',
          text: 'Un mensajero divino cerró las fauces de las bestias porque la víctima era inocente ante Dios y no había hecho daño al monarca.',
          narrative: 'El ángel protegió a Daniel en la profundidad de la caverna.',
          relatedSuspects: ['A', 'D']
        }
      ],
      solution: {
        R: { row: 1, col: 3 },
        D: { row: 6, col: 2 },
        S: { row: 5, col: 4 },
        G: { row: 3, col: 6 },
        A: { row: 2, col: 1 },
        C: { row: 4, col: 5 },
        E: { row: 0, col: 0 }
      }
    }
  },

  // RETO 004-B: Los Árboles de la Mentira
  {
    id: '004-B',
    nombre: 'Los Árboles de la Mentira',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Daniel 13, 1-64',
      textoBiblicoClave: 'Daniel los separó lejos el uno del otro y (...) le preguntó: «Dime, ¿bajo qué árbol los viste juntos?». Él respondió: «Bajo una acacia».',
      contextoTeologico: 'Destaca la corrupción de las autoridades durante la diáspora. Teológicamente, ilustra que Dios defiende la dignidad de las mujeres víctimas de opresión, usando la sabiduría de los jóvenes para desarmar el abuso de poder institucionalizado.',
      solucionExplicacion: 'Dos jueces ancianos intentaron abusar de Susana. Al ser rechazados, la acusaron falsamente de adulterio. Daniel probó que mentían al interrogarlos por separado sobre el árbol donde supuestamente ocurrió el delito, hallando contradicción.',
      storyIntro: 'Una mujer inocente de alta posición es condenada a muerte tras el testimonio de dos líderes comunitarios. Justo cuando la llevan al patíbulo, un joven exige separar a los testigos y les hace una simple pregunta de botánica que anula la condena.',
      epilogue: '¡Caso resuelto! La contradicción botánica entre la acacia y la encina desarmó la calumnia de los dos ancianos. Susana recuperó su honra y Daniel fue reconocido como juez justo inspirado por Dios.',
      subtitle: 'Descubrimiento de acciones ocultas · Daniel 13 · 7x7',
      badge: 'LOS ÁRBOLES DE LA MENTIRA · 7x7',
      victimId: 'S',
      murdererId: 'A1',
      rooms: {
        huerto_banos: {
          id: 'huerto_banos',
          name: 'Huerto Privado de Joaquín (La Fuente)',
          shortName: 'Huerto Fuente',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Jardín cerrado donde Susana solía pasear y bañarse en las horas calurosas.'
        },
        arboleda_acacia: {
          id: 'arboleda_acacia',
          name: 'Rincón de las Acacias y Robles',
          shortName: 'Rincón Acacias',
          bgColor: 'bg-green-100/70',
          borderColor: 'border-green-700/60',
          textColor: 'text-green-950',
          tagColor: 'bg-green-800 text-green-100',
          description: 'Lugar citado por el primer juez afirmando haber visto el falso encuentro.'
        },
        bosquete_encinas: {
          id: 'bosquete_encinas',
          name: 'Bosquete de las Encinas',
          shortName: 'Bosque Encinas',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Sector opuesto del parque señalado en flagrante discordancia por el segundo anciano.'
        },
        tribunal_asamblea: {
          id: 'tribunal_asamblea',
          name: 'Tribunal de la Asamblea Popular',
          shortName: 'Tribunal Pueblo',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Estancia judicial donde el pueblo creyó inicialmente a los dos ancianos prestigiosos.'
        },
        patibulo_lapidacion: {
          id: 'patibulo_lapidacion',
          name: 'Patíbulo de Lapidación Exterior',
          shortName: 'Patíbulo Exterior',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Camino hacia las afueras donde Daniel intervino deteniendo la ejecución injusta.'
        }
      },
      cellRooms: [
        ['huerto_banos', 'huerto_banos', 'arboleda_acacia', 'arboleda_acacia', 'arboleda_acacia', 'bosquete_encinas', 'bosquete_encinas'],
        ['huerto_banos', 'huerto_banos', 'arboleda_acacia', 'arboleda_acacia', 'arboleda_acacia', 'bosquete_encinas', 'bosquete_encinas'],
        ['huerto_banos', 'huerto_banos', 'huerto_banos', 'tribunal_asamblea', 'tribunal_asamblea', 'bosquete_encinas', 'bosquete_encinas'],
        ['tribunal_asamblea', 'tribunal_asamblea', 'tribunal_asamblea', 'tribunal_asamblea', 'tribunal_asamblea', 'patibulo_lapidacion', 'patibulo_lapidacion'],
        ['tribunal_asamblea', 'tribunal_asamblea', 'tribunal_asamblea', 'patibulo_lapidacion', 'patibulo_lapidacion', 'patibulo_lapidacion', 'patibulo_lapidacion'],
        ['patibulo_lapidacion', 'patibulo_lapidacion', 'patibulo_lapidacion', 'patibulo_lapidacion', 'patibulo_lapidacion', 'patibulo_lapidacion', 'patibulo_lapidacion'],
        ['patibulo_lapidacion', 'patibulo_lapidacion', 'patibulo_lapidacion', 'patibulo_lapidacion', 'patibulo_lapidacion', 'patibulo_lapidacion', 'patibulo_lapidacion']
      ],
      blockedObjects: {
        '0,3': {
          emoji: '🌿',
          name: 'Acacia Frondosa',
          evidenceCode: 'EV-01',
          description: 'Árbol alegado con soberbia por el primer anciano durante el careo aislado.'
        },
        '1,6': {
          emoji: '🌳',
          name: 'Encina Centenaria',
          evidenceCode: 'EV-02',
          description: 'Árbol totalmente distinto nombrado por el segundo anciano acusador.'
        },
        '2,1': {
          emoji: '🛁',
          name: 'Fuente y Aceites Aromáticos',
          evidenceCode: 'EV-03',
          description: 'Estanque privado de aseo del huerto donde Susana fue acechada.'
        },
        '5,2': {
          emoji: '⚖️',
          name: 'Balanza del Juicio Corrompido',
          evidenceCode: 'EV-04',
          description: 'Estrado judicial revocado por el discernimiento del joven Daniel.'
        }
      },
      suspects: [
        {
          id: 'S',
          name: 'Susana',
          role: 'Esposa piadosa falsamente acusada',
          avatar: '👰',
          color: 'from-rose-600 to-pink-800',
          isVictim: true,
          clueText: 'En el Huerto de la Fuente confiando en Dios con lágrimas en los ojos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'huerto_banos' },
            { tipo: 'filaObjeto', objeto: '0,3' }
          ]
        },
        {
          id: 'J',
          name: 'Joaquín',
          role: 'Esposo ilustre y anfitrión',
          avatar: '🧔‍♂️',
          color: 'from-amber-700 to-amber-950',
          clueText: 'Junto al patíbulo, consternado ante la acusación contra su esposa.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patibulo_lapidacion' },
            { tipo: 'columnaObjeto', objeto: '0,3' }
          ]
        },
        {
          id: 'A1',
          name: 'Primer Anciano',
          role: 'Juez perverso acusador',
          avatar: '👴',
          color: 'from-red-600 to-rose-900',
          isMurderer: true,
          clueText: 'En el huerto de los baños, sosteniendo su mentira contra Susana.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'huerto_banos' },
            { tipo: 'columnaObjeto', objeto: '2,1' }
          ]
        },
        {
          id: 'A2',
          name: 'Segundo Anciano',
          role: 'Juez cómplice perjuro',
          avatar: '👨‍🦳',
          color: 'from-stone-700 to-stone-900',
          clueText: 'En el Bosquete de Encinas aislado del primer juez antes del interrogatorio.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'bosquete_encinas' }
          ]
        },
        {
          id: 'D',
          name: 'Daniel',
          role: 'Joven defensor inspirado',
          avatar: '📜',
          color: 'from-blue-600 to-cyan-800',
          clueText: 'En el Patíbulo Exterior alzando la voz para frenar la lapidación injusta.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patibulo_lapidacion' },
            { tipo: 'filaObjeto', objeto: '5,2' }
          ]
        },
        {
          id: 'M',
          name: 'Doncella del Huerto',
          role: 'Sirvienta que cerró las puertas',
          avatar: '👩',
          color: 'from-teal-600 to-teal-800',
          clueText: 'En el tribunal de la asamblea, tras salir del huerto a buscar los jabones que pidió su ama.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tribunal_asamblea' }
          ]
        },
        {
          id: 'G',
          name: 'Alguacil del Tribunal',
          role: 'Ejecutor de la orden judicial',
          avatar: '🛡️',
          color: 'from-zinc-600 to-zinc-800',
          clueText: 'En el Patíbulo de Lapidación conduciendo a los presos a la espera del veredicto.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patibulo_lapidacion' },
            { tipo: 'columnaObjeto', objeto: '1,6' },
            { tipo: 'borde', lado: 'sur' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Dos jueces ancianos que frecuentaban la casa de un hombre rico se encapricharon de la esposa de este.',
          narrative: 'Los ancianos disimulaban su intención en el huerto privado de Joaquín.',
          relatedSuspects: ['A1', 'A2', 'J']
        },
        {
          id: 'c2',
          text: 'Los líderes se ocultaron en el huerto privado mientras la mujer se disponía a bañarse sin sus doncellas.',
          narrative: 'Susana mandó cerrar las cancelas para asearse junto a la fuente.',
          relatedSuspects: ['S', 'M']
        },
        {
          id: 'c3',
          text: 'Al ser rechazados en sus proposiciones, los líderes gritaron y la acusaron públicamente de adulterio con un joven ficticio.',
          narrative: 'Los jueces tramaron su calumnia tras recibir la negativa valiente de Susana.',
          relatedSuspects: ['A1', 'A2', 'S']
        },
        {
          id: 'c4',
          text: 'El tribunal creyó la versión de los ancianos por su prestigio social, condenando a la mujer a morir lapidada.',
          narrative: 'La asamblea popular dio crédito ciego a la autoridad de los acusadores.',
          relatedSuspects: ['J', 'G']
        },
        {
          id: 'c5',
          text: 'Un joven impulsado por el Espíritu detuvo la ejecución y exigió interrogar a los dos acusadores por separado.',
          narrative: 'Daniel proclamó que la hija de Judá estaba siendo condenada sin juicio íntegro.',
          relatedSuspects: ['D']
        },
        {
          id: 'c6',
          text: 'Al preguntar al primer acusador bajo qué árbol ocurrió el supuesto adulterio, este respondió que bajo una acacia.',
          narrative: 'El primer anciano afirmó con contundencia botánica su testimonio falso.',
          relatedSuspects: ['A1', 'D']
        },
        {
          id: 'c7',
          text: 'El segundo acusador, aislado del primero, afirmó que todo ocurrió bajo una encina, demostrando el perjurio de ambos.',
          narrative: 'El segundo testimonio desnudó la contradicción ante todo el pueblo.',
          relatedSuspects: ['A2', 'D']
        }
      ],
      solution: {
        S: { row: 0, col: 0 },
        J: { row: 4, col: 3 },
        A1: { row: 1, col: 1 },
        A2: { row: 2, col: 5 },
        D: { row: 5, col: 4 },
        M: { row: 3, col: 2 },
        G: { row: 6, col: 6 }
      }
    }
  },

  // RETO 005-B: El Banquete de la Reina
  {
    id: '005-B',
    nombre: 'El Banquete de la Reina',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Ester 7, 1-10',
      textoBiblicoClave: 'Ester respondió: «¡El enemigo y adversario es este malvado Amán!» Amán se quedó aterrorizado ante el rey y la reina.',
      contextoTeologico: 'El libro de Ester muestra la supervivencia en el exilio. Aunque no menciona a Dios directamente, Fe Adulta lo interpreta como la providencia oculta: el valor cívico y la resistencia desbaratan el antisemitismo y las injusticias de estado.',
      solucionExplicacion: 'Amán planeó el exterminio judío porque Mardoqueo no se postraba ante él. Ester, ocultando su origen, invitó al rey y a Amán a un banquete, donde reveló la conspiración. Amán fue colgado en la horca que él mismo construyó.',
      storyIntro: 'Un poderoso ministro sobornó al soberano para exterminar a todo un pueblo. Cuando ya tenía preparada una gran horca en su patio, fue invitado a un banquete privado exclusivo, sin saber que allí se firmaría su propia sentencia de muerte.',
      epilogue: '¡Caso resuelto! Ester intercedió por su pueblo en el banquete privado. El rey Asuero descubrió la vileza de Amán y ordenó colgarlo en la horca de cincuenta codos que había alzado para Mardoqueo.',
      subtitle: 'Descubrimiento de acciones ocultas · Ester 7 · 7x7',
      badge: 'EL BANQUETE DE LA REINA · 7x7',
      victimId: 'E',
      murdererId: 'A',
      rooms: {
        banquete_vino: {
          id: 'banquete_vino',
          name: 'Salón del Banquete Íntimo de Vino',
          shortName: 'Banquete Reina',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Mesa privada reservada únicamente para el rey Asuero, la reina Ester y Amán.'
        },
        patio_horca: {
          id: 'patio_horca',
          name: 'Patio de la Mansión de Amán (La Horca)',
          shortName: 'Patio Horca',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Lugar donde el ministro levantó un madero de cincuenta codos de alto.'
        },
        puerta_palacio: {
          id: 'puerta_palacio',
          name: 'Puerta Real del Palacio en Susa',
          shortName: 'Puerta Real',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Entrada donde Mardoqueo rehusaba inclinarse ante la soberbia de Amán.'
        },
        jardin_interior: {
          id: 'jardin_interior',
          name: 'Jardín Interior del Palacio',
          shortName: 'Jardín Real',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Parque donde el rey salió enfurecido a respirar tras escuchar la denuncia de Ester.'
        },
        camara_consejeros: {
          id: 'camara_consejeros',
          name: 'Cámara de Escribas y Dignatarios',
          shortName: 'Cám. Consejeros',
          bgColor: 'bg-teal-100/70',
          borderColor: 'border-teal-700/60',
          textColor: 'text-teal-950',
          tagColor: 'bg-teal-800 text-teal-100',
          description: 'Estancia donde los cortesanos presenciaron el giro providencial de los acontecimientos.'
        }
      },
      cellRooms: [
        ['banquete_vino', 'banquete_vino', 'banquete_vino', 'jardin_interior', 'jardin_interior', 'patio_horca', 'patio_horca'],
        ['banquete_vino', 'banquete_vino', 'banquete_vino', 'jardin_interior', 'jardin_interior', 'patio_horca', 'patio_horca'],
        ['puerta_palacio', 'puerta_palacio', 'banquete_vino', 'jardin_interior', 'jardin_interior', 'patio_horca', 'patio_horca'],
        ['puerta_palacio', 'puerta_palacio', 'camara_consejeros', 'camara_consejeros', 'camara_consejeros', 'patio_horca', 'patio_horca'],
        ['puerta_palacio', 'puerta_palacio', 'camara_consejeros', 'camara_consejeros', 'camara_consejeros', 'camara_consejeros', 'camara_consejeros'],
        ['puerta_palacio', 'camara_consejeros', 'camara_consejeros', 'camara_consejeros', 'camara_consejeros', 'camara_consejeros', 'camara_consejeros'],
        ['puerta_palacio', 'camara_consejeros', 'camara_consejeros', 'camara_consejeros', 'camara_consejeros', 'camara_consejeros', 'camara_consejeros']
      ],
      blockedObjects: {
        '0,5': {
          emoji: '🪵',
          name: 'Madero de Cincuenta Codos',
          evidenceCode: 'EV-01',
          description: 'Estructura alzada por Amán para ajusticiar a Mardoqueo.'
        },
        '1,1': {
          emoji: '🍷',
          name: 'Copa de Vino del Banquete',
          evidenceCode: 'EV-02',
          description: 'Cáliz donde Asuero preguntó a Ester cuál era su verdadera petición.'
        },
        '3,0': {
          emoji: '🚪',
          name: 'Umbral de Mardoqueo',
          evidenceCode: 'EV-03',
          description: 'Banco de la guardia donde el tío de la reina vestía sayal de duelo.'
        },
        '5,4': {
          emoji: '📜',
          name: 'Decreto de Exterminio Sellado',
          evidenceCode: 'EV-04',
          description: 'Documento comprado por diez mil talentos de plata para destruir a los judíos.'
        }
      },
      suspects: [
        {
          id: 'R',
          name: 'Asuero',
          role: 'Rey persa conmovido',
          avatar: '👑',
          color: 'from-purple-700 to-indigo-900',
          clueText: 'En el Jardín Interior paseando enfurecido tras escuchar el clamor de Ester.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'jardin_interior' }
          ]
        },
        {
          id: 'E',
          name: 'Ester',
          role: 'Reina valiente intercesora',
          avatar: '👸',
          color: 'from-rose-600 to-pink-800',
          isVictim: true,
          clueText: 'En el Banquete de Vino señalando con valentía al ministro perverso.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'banquete_vino' },
            { tipo: 'filaObjeto', objeto: '1,1' }
          ]
        },
        {
          id: 'M',
          name: 'Mardoqueo',
          role: 'Tío leal que no se arrodilla',
          avatar: '🧔‍♂️',
          color: 'from-amber-600 to-amber-800',
          clueText: 'En la Puerta Real del Palacio confiando en que la ayuda vendría de Dios.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_palacio' },
            { tipo: 'filaObjeto', objeto: '5,4' }
          ]
        },
        {
          id: 'A',
          name: 'Amán',
          role: 'Ministro genocida arrogante',
          avatar: '🗡️',
          color: 'from-red-600 to-rose-900',
          isMurderer: true,
          clueText: 'En el Banquete de Vino arrojándose al lecho aterrorizado implorando perdón.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'banquete_vino' }
          ]
        },
        {
          id: 'H',
          name: 'Harboná',
          role: 'Eunuco cortesano que delató la horca',
          avatar: '🗝️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'En la cámara de los dignatarios, dispuesto a señalar al rey el madero preparado por Amán.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camara_consejeros' },
            { tipo: 'columnaObjeto', objeto: '0,5' }
          ]
        },
        {
          id: 'C',
          name: 'Mayordomo del Banquete',
          role: 'Servidor de la copa real',
          avatar: '🍇',
          color: 'from-teal-600 to-teal-800',
          clueText: 'En la cámara de los escribas, tras servir las viandas a los tres comensales.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camara_consejeros' },
            { tipo: 'columnaObjeto', objeto: '5,4' }
          ]
        },
        {
          id: 'T',
          name: 'Escriba del Tesoro',
          role: 'Contable imperial de Susa',
          avatar: '💰',
          color: 'from-yellow-700 to-amber-900',
          clueText: 'En la Cámara de Consejeros registrando los talentos de plata prometidos por Amán.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camara_consejeros' },
            { tipo: 'borde', lado: 'sur' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Un alto dignatario del imperio exigía que todos se arrodillaran ante él a la puerta del palacio, pero un judío se negó.',
          narrative: 'Mardoqueo rehusó doblar la rodilla ante el ministro Amán en la puerta real.',
          relatedSuspects: ['M', 'A']
        },
        {
          id: 'c2',
          text: 'Enfurecido, el dignatario convenció al rey de firmar un decreto de genocidio, ofreciendo miles de talentos de plata al tesoro.',
          narrative: 'El escriba del tesoro anotó la suma acordada contra el pueblo desterrado.',
          relatedSuspects: ['A', 'T', 'R']
        },
        {
          id: 'c3',
          text: 'La reina consorte, que mantenía su origen en secreto, fue instada por su tío a interceder, arriesgando su vida al ir al rey sin permiso.',
          narrative: 'Ester cruzó al patio interior del palacio diciendo: Si perezco, que perezca.',
          relatedSuspects: ['E', 'M']
        },
        {
          id: 'c4',
          text: 'Para ganar el favor del rey, la reina organizó dos banquetes íntimos, invitando únicamente al monarca y al ministro genocida.',
          narrative: 'El mayordomo dispuso los manjares para los dos únicos invitados.',
          relatedSuspects: ['E', 'R', 'A', 'C']
        },
        {
          id: 'c5',
          text: 'El ministro estaba tan eufórico por la invitación que mandó construir una horca de cincuenta codos para colgar al judío rebelde.',
          narrative: 'Amán contemplaba complacido la horca en el patio de su mansión.',
          relatedSuspects: ['A', 'H']
        },
        {
          id: 'c6',
          text: 'En el segundo banquete, la reina reveló su origen y señaló al ministro como el enemigo que planeaba asesinarla a ella y a su gente.',
          narrative: 'Asuero saltó de su asiento y salió al jardín sacudido por la indignación.',
          relatedSuspects: ['E', 'A', 'R']
        },
        {
          id: 'c7',
          text: 'El rey, furioso, ordenó que el ministro fuera ejecutado inmediatamente en la misma horca que había preparado para el tío de la reina.',
          narrative: 'Harboná señaló el madero y los guardias ejecutaron la sentencia sobre Amán.',
          relatedSuspects: ['R', 'H', 'A']
        }
      ],
      solution: {
        R: { row: 2, col: 3 },
        E: { row: 1, col: 2 },
        M: { row: 5, col: 0 },
        A: { row: 0, col: 1 },
        H: { row: 4, col: 5 },
        C: { row: 3, col: 4 },
        T: { row: 6, col: 6 }
      }
    }
  },

  // RETO 008-B: Las Pisadas en la Ceniza
  {
    id: '008-B',
    nombre: 'Las Pisadas en la Ceniza',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Daniel 14, 1-22',
      textoBiblicoClave: 'Daniel dijo: «Fíjate en el suelo y mira de quién son estas pisadas». El rey dijo: «Veo pisadas de hombres, mujeres y niños».',
      contextoTeologico: 'Constituye una antigua sátira contra los fraudes religiosos y la idolatría. Desmitifica el poder de las religiones del imperio y dota a los exiliados de herramientas críticas para no dejarse engañar por el falso prestigio institucional.',
      solucionExplicacion: 'Los sacerdotes fingían que el ídolo Bel comía las ofrendas, entrando por un pasaje secreto de noche. Daniel desveló el fraude esparciendo ceniza en el suelo, lo que delató las huellas de los sacerdotes y sus familias.',
      storyIntro: 'Una deidad babilónica era famosa por devorar colosales cantidades de comida cada noche a puerta cerrada. Un hombre astuto demostró ante el emperador que la deidad era de bronce y el hambre era puramente humana.',
      epilogue: '¡Caso resuelto! Daniel esparció ceniza fina antes de sellar el templo. A la mañana siguiente, las huellas de sacerdotes, esposas y niños descubrieron el pasadizo secreto y acabaron con el engaño del ídolo Bel.',
      subtitle: 'Descubrimiento de acciones ocultas · Daniel 14 · 7x7',
      badge: 'LAS PISADAS EN LA CENIZA · 7x7',
      victimId: 'C',
      murdererId: 'S',
      rooms: {
        altar_bel: {
          id: 'altar_bel',
          name: 'Altar del Ídolo de Bronce Bel',
          shortName: 'Altar Bel',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Estatua colosal con mesa de ofrendas donde se dejaba harina selecta, carneros y vino.'
        },
        suelo_ceniza: {
          id: 'suelo_ceniza',
          name: 'Nave del Templo Esparcida con Ceniza',
          shortName: 'Suelo Ceniza',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Pavimento enlosado cubierto sutilmente con ceniza colada para imprimir pisadas.'
        },
        pasadizo_secreto: {
          id: 'pasadizo_secreto',
          name: 'Trampilla y Pasadizo Bajo la Mesa',
          shortName: 'Pasadizo Oculto',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Acceso subterráneo por donde los clérigos y sus familias entraban a oscuras.'
        },
        portico_sellos: {
          id: 'portico_sellos',
          name: 'Puerta Principal del Templo Sellada',
          shortName: 'Pórtico Sellos',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Portón de bronce cerrado y asegurado con el anillo de sello del rey Ciro.'
        },
        patio_sacerdotal: {
          id: 'patio_sacerdotal',
          name: 'Residencia de las Familias Sacerdotales',
          shortName: 'Patio Clérigos',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Viviendas anexas donde setenta sacerdotes vivían con sus mujeres e hijos.'
        }
      },
      cellRooms: [
        ['portico_sellos', 'portico_sellos', 'suelo_ceniza', 'suelo_ceniza', 'suelo_ceniza', 'altar_bel', 'altar_bel'],
        ['portico_sellos', 'portico_sellos', 'suelo_ceniza', 'suelo_ceniza', 'suelo_ceniza', 'altar_bel', 'altar_bel'],
        ['portico_sellos', 'suelo_ceniza', 'suelo_ceniza', 'pasadizo_secreto', 'pasadizo_secreto', 'altar_bel', 'altar_bel'],
        ['suelo_ceniza', 'suelo_ceniza', 'pasadizo_secreto', 'pasadizo_secreto', 'pasadizo_secreto', 'altar_bel', 'altar_bel'],
        ['patio_sacerdotal', 'patio_sacerdotal', 'pasadizo_secreto', 'pasadizo_secreto', 'pasadizo_secreto', 'patio_sacerdotal', 'patio_sacerdotal'],
        ['patio_sacerdotal', 'patio_sacerdotal', 'patio_sacerdotal', 'patio_sacerdotal', 'patio_sacerdotal', 'patio_sacerdotal', 'patio_sacerdotal'],
        ['patio_sacerdotal', 'patio_sacerdotal', 'patio_sacerdotal', 'patio_sacerdotal', 'patio_sacerdotal', 'patio_sacerdotal', 'patio_sacerdotal']
      ],
      blockedObjects: {
        '0,5': {
          emoji: '🗿',
          name: 'Ídolo de Bronce de Bel',
          evidenceCode: 'EV-01',
          description: 'Efigie idolátrica que por dentro no era más que barro inerte.'
        },
        '1,0': {
          emoji: '💍',
          name: 'Sello de Cera Real Intacto',
          evidenceCode: 'EV-02',
          description: 'Lacre estampado con el anillo de Ciro que acreditaba la inviolabilidad de la puerta.'
        },
        '2,3': {
          emoji: '🕳️',
          name: 'Trampilla Oculta en el Suelo',
          evidenceCode: 'EV-03',
          description: 'Acceso bajo la mesa de los banquetes por el que cenaban las familias.'
        },
        '4,1': {
          emoji: '🧺',
          name: 'Criba con Ceniza Fina',
          evidenceCode: 'EV-04',
          description: 'Tamiz empleado por los sirvientes de Daniel para sembrar la evidencia.'
        }
      },
      suspects: [
        {
          id: 'C',
          name: 'Ciro el Persa',
          role: 'Emperador crédulo y amigo de Daniel',
          avatar: '👑',
          color: 'from-amber-600 to-amber-900',
          isVictim: true,
          clueText: 'En el Pórtico de Sellos asombrado al examinar las huellas con la antorcha.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'portico_sellos' },
            { tipo: 'filaObjeto', objeto: '1,0' }
          ]
        },
        {
          id: 'D',
          name: 'Daniel',
          role: 'Sabio judío desmitificador',
          avatar: '📜',
          color: 'from-blue-600 to-cyan-800',
          clueText: 'Frente a la residencia de los sacerdotes, sonriendo al señalar al rey la variedad de huellas.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patio_sacerdotal' },
            { tipo: 'norteDe', sospechoso: 'E' }
          ]
        },
        {
          id: 'S',
          name: 'Sacerdote Mayor de Bel',
          role: 'Líder del culto fraudulento',
          avatar: '🧙‍♂️',
          color: 'from-red-600 to-rose-900',
          isMurderer: true,
          clueText: 'Ante la puerta sellada del templo, tras liderar la incursión nocturna por el pasadizo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'portico_sellos' },
            { tipo: 'filaObjeto', objeto: '2,3' }
          ]
        },
        {
          id: 'E',
          name: 'Esposa del Sacerdote',
          role: 'Partícipe en el festín nocturno',
          avatar: '👵',
          color: 'from-purple-600 to-purple-800',
          clueText: 'En la Residencia Sacerdotal cargando canastas con viandas del ídolo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patio_sacerdotal' },
            { tipo: 'columnaObjeto', objeto: '2,3' }
          ]
        },
        {
          id: 'H',
          name: 'Hijo del Sacerdote',
          role: 'Niño cuyas huellas delataron la farsa',
          avatar: '👦',
          color: 'from-teal-600 to-emerald-800',
          clueText: 'En la residencia de las familias sacerdotales, tras dejar pisadas pequeñas en la ceniza junto a los manjares.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patio_sacerdotal' },
            { tipo: 'borde', lado: 'este' }
          ]
        },
        {
          id: 'V',
          name: 'Sirviente de Daniel',
          role: 'Ayudante que esparció la ceniza',
          avatar: '🧹',
          color: 'from-stone-600 to-stone-800',
          clueText: 'En el Suelo de Ceniza colando el polvo gris en presencia exclusiva del rey.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'suelo_ceniza' },
            { tipo: 'oesteDe', sospechoso: 'D' }
          ]
        },
        {
          id: 'G',
          name: 'Centinela del Sello',
          role: 'Guardia imperial de la puerta',
          avatar: '🛡️',
          color: 'from-zinc-600 to-zinc-800',
          clueText: 'Junto al altar de Bel, confirmando que nadie abrió el cerrojo principal.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'altar_bel' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Un monarca exigía adorar a un ídolo babilónico porque este "devoraba" grandes cantidades de harina, ovejas y vino cada noche.',
          narrative: 'Ciro creía con ingenuidad que el dios de bronce comía las viandas.',
          relatedSuspects: ['C', 'D']
        },
        {
          id: 'c2',
          text: 'Un sabio judío se negó a adorarlo, afirmando que el ídolo era solo barro por dentro y bronce por fuera, y nunca comía.',
          narrative: 'Daniel rió con franqueza advirtiendo al soberano del engaño idolátrico.',
          relatedSuspects: ['D']
        },
        {
          id: 'c3',
          text: 'Los clérigos propusieron dejar la comida, cerrar el templo y sellarlo con el anillo real para probar que la deidad existía.',
          narrative: 'El sacerdote mayor desafió con arrogancia a Daniel ante el emperador.',
          relatedSuspects: ['S', 'C']
        },
        {
          id: 'c4',
          text: 'Antes de que el templo fuera sellado, el sabio ordenó a sus siervos esparcir ceniza por todo el suelo sin que los clérigos se percataran.',
          narrative: 'El sirviente de Daniel cubrió discretamente el suelo en presencia del monarca.',
          relatedSuspects: ['V', 'D']
        },
        {
          id: 'c5',
          text: 'A la mañana siguiente, los sellos permanecían intactos y la comida había desaparecido, alegrando enormemente al monarca.',
          narrative: 'El centinela ratificó que el lacre del portón no había sido quebrantado.',
          relatedSuspects: ['G', 'C']
        },
        {
          id: 'c6',
          text: 'El sabio detuvo al monarca antes de que entrara y le pidió que observara atentamente el suelo gris.',
          narrative: 'Daniel alumbró el polvo para mostrar los rastros dejados en el pavimento.',
          relatedSuspects: ['D', 'C']
        },
        {
          id: 'c7',
          text: 'En la ceniza descubrieron marcas evidentes que revelaron un pasadizo secreto bajo la mesa de las ofrendas.',
          narrative: 'Las huellas de hombres, mujeres y niños guiaron directo a la trampilla secreta.',
          relatedSuspects: ['S', 'E', 'H']
        }
      ],
      solution: {
        C: { row: 1, col: 1 },
        D: { row: 5, col: 4 },
        S: { row: 2, col: 0 },
        E: { row: 6, col: 3 },
        H: { row: 4, col: 6 },
        V: { row: 0, col: 2 },
        G: { row: 3, col: 5 }
      }
    }
  },

  // RETO 010-B: El Yugo Roto
  {
    id: '010-B',
    nombre: 'El Yugo Roto',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Jeremías 28, 1-17',
      textoBiblicoClave: 'En lugar del yugo de madera, has hecho un yugo de hierro. (...) a Hananías: «El Señor no te ha enviado, y tú has hecho que este pueblo confíe en una mentira».',
      contextoTeologico: 'Critica duramente la teología del falso optimismo. Fe Adulta subraya que el verdadero profeta a menudo anuncia realidades dolorosas que exigen conversión, frente a los nacionalismos religiosos y discursos complacientes.',
      solucionExplicacion: 'Jeremías profetizó el sometimiento a Babilonia usando un yugo de madera. El falso profeta Hananías lo rompió prediciendo una falsa victoria. Dios respondió imponiendo un yugo de hierro (exilio inevitable) y Hananías murió por mentir.',
      storyIntro: 'En los tensos años previos al exilio, dos hombres se enfrentan en el templo. Uno porta un mensaje de sumisión cargando madera al cuello; el otro ofrece un mensaje populista de victoria y rompe la madera. La realidad les dará a ambos un veredicto de hierro.',
      epilogue: '¡Caso resuelto! Hananías quebró el madero de Jeremías alimentando falsas ilusiones populares. La palabra de Dios fue tajante: el yugo de madera se convirtió en yugo de hierro y el falso profeta pagó con su vida su engaño.',
      subtitle: 'Descubrimiento de acciones ocultas · Jeremías 28 · 7x7',
      badge: 'EL YUGO ROTO · 7x7',
      victimId: 'J',
      murdererId: 'H',
      rooms: {
        atrio_templo: {
          id: 'atrio_templo',
          name: 'Atrio Principal de la Casa del Señor',
          shortName: 'Atrio Templo',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Lugar público de asamblea donde los sacerdotes y el pueblo escuchaban los oráculos.'
        },
        estrado_sacerdotes: {
          id: 'estrado_sacerdotes',
          name: 'Estrado de los Sacerdotes y Ancianos',
          shortName: 'Estrado Clérigos',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Plataforma donde los líderes religiosos aplaudían los discursos triunfalistas.'
        },
        palacio_sedecias: {
          id: 'palacio_sedecias',
          name: 'Palacio Real del Rey Sedecías',
          shortName: 'Palacio Sedecías',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Cámara del último monarca de Judá, dividido entre la sumisión y la rebelión.'
        },
        puerta_muralla: {
          id: 'puerta_muralla',
          name: 'Puerta de la Muralla de Jerusalén',
          shortName: 'Puerta Muralla',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Acceso por donde se atisbaban los estandartes amenazantes del ejército caldeo.'
        },
        taller_herreria: {
          id: 'taller_herreria',
          name: 'Fragua y Herrería del Yugo de Hierro',
          shortName: 'Fragua Hierro',
          bgColor: 'bg-zinc-100/70',
          borderColor: 'border-zinc-700/60',
          textColor: 'text-zinc-950',
          tagColor: 'bg-zinc-800 text-zinc-100',
          description: 'Lugar donde se forjó el yugo indestructible anunciado en la nueva profecía.'
        }
      },
      cellRooms: [
        ['atrio_templo', 'atrio_templo', 'estrado_sacerdotes', 'estrado_sacerdotes', 'estrado_sacerdotes', 'palacio_sedecias', 'palacio_sedecias'],
        ['atrio_templo', 'atrio_templo', 'estrado_sacerdotes', 'estrado_sacerdotes', 'estrado_sacerdotes', 'palacio_sedecias', 'palacio_sedecias'],
        ['atrio_templo', 'atrio_templo', 'atrio_templo', 'palacio_sedecias', 'palacio_sedecias', 'palacio_sedecias', 'palacio_sedecias'],
        ['puerta_muralla', 'puerta_muralla', 'taller_herreria', 'taller_herreria', 'taller_herreria', 'palacio_sedecias', 'palacio_sedecias'],
        ['puerta_muralla', 'puerta_muralla', 'taller_herreria', 'taller_herreria', 'taller_herreria', 'puerta_muralla', 'puerta_muralla'],
        ['puerta_muralla', 'puerta_muralla', 'taller_herreria', 'taller_herreria', 'taller_herreria', 'puerta_muralla', 'puerta_muralla'],
        ['puerta_muralla', 'puerta_muralla', 'puerta_muralla', 'puerta_muralla', 'puerta_muralla', 'puerta_muralla', 'puerta_muralla']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '🪵',
          name: 'Yugo de Madera Roto',
          evidenceCode: 'EV-01',
          description: 'Varales de madera arrancados del cuello de Jeremías y destrozados por Hananías.'
        },
        '1,4': {
          emoji: '⚙️',
          name: 'Yugo de Hierro Inquebrantable',
          evidenceCode: 'EV-02',
          description: 'Nuevo instrumento profético que simbolizaba el sometimiento forzoso a Babilonia.'
        },
        '2,6': {
          emoji: '👑',
          name: 'Corona Vacilante de Sedecías',
          evidenceCode: 'EV-03',
          description: 'Insignia real del monarca que se negó a escuchar la voz de Jeremías.'
        },
        '4,1': {
          emoji: '🛡️',
          name: 'Lanza y Escudo de la Guardia',
          evidenceCode: 'EV-04',
          description: 'Armas apostadas en las almenas ante la inminencia del asedio de Nabucodonosor.'
        }
      },
      suspects: [
        {
          id: 'J',
          name: 'Jeremías',
          role: 'Profeta de la verdad y el duelo',
          avatar: '📜',
          color: 'from-blue-600 to-slate-800',
          isVictim: true,
          clueText: 'En el Atrio del Templo cargando con humildad las correas de madera al cuello.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'atrio_templo' },
            { tipo: 'filaObjeto', objeto: '0,1' }
          ]
        },
        {
          id: 'H',
          name: 'Hananías',
          role: 'Falso profeta populista',
          avatar: '🪓',
          color: 'from-red-600 to-rose-900',
          isMurderer: true,
          clueText: 'En el Atrio del Templo quebrando el madero ante el clamor de la multitud.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'atrio_templo' }
          ]
        },
        {
          id: 'S',
          name: 'Sedecías',
          role: 'Rey indeciso de Judá',
          avatar: '👑',
          color: 'from-amber-600 to-amber-900',
          clueText: 'En la puerta de la muralla, temiendo la reacción de los oficiales ante el asedio.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_muralla' },
            { tipo: 'columnaObjeto', objeto: '2,6' }
          ]
        },
        {
          id: 'T',
          name: 'Sacerdote del Templo',
          role: 'Clérigo complaciente con la multitud',
          avatar: '🕯️',
          color: 'from-purple-600 to-purple-800',
          clueText: 'En el Estrado de Sacerdotes aplaudiendo el vaticinio optimista de dos años.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'estrado_sacerdotes' },
            { tipo: 'oesteDe', sospechoso: 'B' }
          ]
        },
        {
          id: 'G',
          name: 'Guardia del Rey',
          role: 'Centinela del palacio',
          avatar: '🛡️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'En la Puerta de la Muralla vigilando con temor el avance de las tropas invasoras.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_muralla' },
            { tipo: 'columnaObjeto', objeto: '1,4' }
          ]
        },
        {
          id: 'B',
          name: 'Baruc el Escriba',
          role: 'Secretario fiel de Jeremías',
          avatar: '✒️',
          color: 'from-teal-600 to-teal-800',
          clueText: 'En la Fragua del Hierro consignando por escrito el nuevo oráculo del Señor.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'taller_herreria' },
            { tipo: 'filaObjeto', objeto: '4,1' }
          ]
        },
        {
          id: 'A',
          name: 'Anciano de Judá',
          role: 'Líder civil de la ciudad',
          avatar: '👴',
          color: 'from-stone-700 to-zinc-900',
          clueText: 'En el palacio real, dudando en secreto de las promesas de Hananías.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'palacio_sedecias' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Un profeta caminaba por la ciudad llevando un yugo de madera al cuello como advertencia visual de parte de Dios.',
          narrative: 'Jeremías recorría el atrio mostrando la carga inminente del exilio.',
          relatedSuspects: ['J']
        },
        {
          id: 'c2',
          text: 'El yugo simbolizaba la orden ineludible de someterse al Imperio Babilónico para evitar la destrucción total de la ciudad.',
          narrative: 'La advertencia instaba a deponer las armas para salvar la vida del pueblo.',
          relatedSuspects: ['J', 'S']
        },
        {
          id: 'c3',
          text: 'Un profeta rival contradijo el mensaje ante los sacerdotes, prometiendo que Dios destruiría el poder babilónico en solo dos años.',
          narrative: 'Hananías proclamó en el templo una falsa liberación en breve tiempo.',
          relatedSuspects: ['H', 'T']
        },
        {
          id: 'c4',
          text: 'Para ilustrar su mensaje populista, el rival arrancó el yugo de madera del cuello del profeta verdadero y lo rompió.',
          narrative: 'El madero quebrado cayó ante los ojos de los sacerdotes y ancianos.',
          relatedSuspects: ['H', 'J', 'A']
        },
        {
          id: 'c5',
          text: 'El profeta verdadero se retiró pacíficamente, pero poco después regresó con una nueva sentencia divina.',
          narrative: 'Jeremías y Baruc escribieron la respuesta inmutable del Señor.',
          relatedSuspects: ['J', 'B']
        },
        {
          id: 'c6',
          text: 'Dios le reveló que la madera sería reemplazada por un yugo de hierro, asegurando el dominio del imperio invasor.',
          narrative: 'El yugo de hierro fue proclamado como sentencia inquebrantable.',
          relatedSuspects: ['J', 'B', 'G']
        },
        {
          id: 'c7',
          text: 'El profeta que rompió la madera murió pocos meses después, condenado por incitar a la rebelión mediante falsas esperanzas.',
          narrative: 'Hananías falleció en el séptimo mes del mismo año según la palabra profética.',
          relatedSuspects: ['H', 'J']
        }
      ],
      solution: {
        J: { row: 0, col: 0 },
        H: { row: 2, col: 1 },
        S: { row: 5, col: 6 },
        T: { row: 1, col: 2 },
        G: { row: 6, col: 4 },
        B: { row: 4, col: 3 },
        A: { row: 3, col: 5 }
      }
    }
  }
];
