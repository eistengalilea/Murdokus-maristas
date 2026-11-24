import { Reto } from '../types';

/**
 * CASOS BÍBLICOS DE DIFICULTAD FÁCIL (CUADRÍCULA 5x5 - 25 CELDAS)
 * Basados fielmente en los relatos del libro de Génesis.
 */
export const CASOS_FACILES: Reto[] = [
  // RETO 002: Los Dioses Robados
  {
    id: '002',
    nombre: 'Los Dioses Robados',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Génesis 31, 17-35',
      textoBiblicoClave: 'Raquel había agarrado los ídolos, los había metido en la montura del camello y se había sentado encima. Labán registró toda la tienda sin encontrar nada.',
      contextoTeologico: 'En el antiguo Oriente, poseer los terafines otorgaba derechos de herencia (contexto histórico). Teológicamente, el relato tiene un tono irónico: los "dioses" de Labán son tan inútiles que pueden ser robados y ocultados bajo una mujer impura, subrayando la superioridad del Dios de Israel.',
      solucionExplicacion: 'Raquel robó los ídolos (terafines) de su padre Labán. Cuando este registró el campamento, Raquel los escondió en la montura del camello, se sentó encima y mintió diciendo que estaba con la menstruación para no levantarse.',
      subtitle: 'Descubrimiento de acciones ocultas · Génesis 31 · 5x5',
      badge: 'LOS DIOSES ROBADOS · 5x5',
      victimId: 'L',
      murdererId: 'R',
      storyIntro: 'Una familia huye de su suegro. Este los persigue furioso afirmando que le han robado sus ídolos domésticos. El líder de la caravana, confiado, jura que quien los tenga morirá, ignorando que el culpable está en su propia tienda.',
      epilogue: '¡Caso resuelto! Raquel ocultó con astucia los terafines familiares en la montura del camello. Labán registró minuciosamente cada rincón sin sospechar el secreto escondido bajo su propia hija.',
      rooms: {
        tienda_raquel: {
          id: 'tienda_raquel',
          name: 'Tienda de Raquel (Montura del Camello)',
          shortName: 'T. Raquel',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Lugar donde se guardan los aparejos de viaje y la montura del camello con los terafines.'
        },
        tienda_jacob: {
          id: 'tienda_jacob',
          name: 'Tienda de Jacob',
          shortName: 'T. Jacob',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Tienda del patriarca que juró desconocer la existencia de los ídolos robados.'
        },
        tienda_lia: {
          id: 'tienda_lia',
          name: 'Tienda de Lía',
          shortName: 'T. Lía',
          bgColor: 'bg-teal-100/70',
          borderColor: 'border-teal-700/60',
          textColor: 'text-teal-950',
          tagColor: 'bg-teal-800 text-teal-100',
          description: 'Estancia registrada primero por Labán sin hallar indicio alguno.'
        },
        campamento_laban: {
          id: 'campamento_laban',
          name: 'Campamento de Labán',
          shortName: 'Camp. Labán',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Posición de los perseguidores tras siete días de marcha forzada.'
        },
        caravana: {
          id: 'caravana',
          name: 'Caravana de Rebaños',
          shortName: 'Caravana',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Área exterior con los camellos, asnos y sirvientes en marcha hacia Galaad.'
        }
      },
      cellRooms: [
        ['tienda_raquel', 'tienda_raquel', 'campamento_laban', 'campamento_laban', 'campamento_laban'],
        ['tienda_raquel', 'tienda_raquel', 'campamento_laban', 'campamento_laban', 'campamento_laban'],
        ['tienda_lia', 'tienda_lia', 'tienda_lia', 'tienda_jacob', 'tienda_jacob'],
        ['tienda_lia', 'tienda_lia', 'tienda_lia', 'tienda_jacob', 'tienda_jacob'],
        ['caravana', 'caravana', 'caravana', 'caravana', 'caravana']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '🐪',
          name: 'Montura de Camello',
          evidenceCode: 'EV-01',
          description: 'Albardón de viaje donde reposan los terafines ocultos.'
        },
        '2,1': {
          emoji: '🗿',
          name: 'Terafines Domésticos',
          evidenceCode: 'EV-02',
          description: 'Estatua familiar de culto y derecho de primogenitura reclamada por Labán.'
        },
        '4,0': {
          emoji: '⛺',
          name: 'Fardo de Campamento',
          evidenceCode: 'EV-03',
          description: 'Equipaje pesado registrado por la partida de Labán.'
        }
      },
      suspects: [
        {
          id: 'R',
          name: 'Raquel',
          role: 'Hija de Labán / Ocultó los terafines',
          avatar: '👩',
          color: 'from-purple-600 to-rose-700',
          isMurderer: true,
          clueText: 'Sentada junto a la montura del camello, en su tienda privada.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_raquel' },
            { tipo: 'filaObjeto', objeto: '0,1' }
          ]
        },
        {
          id: 'L',
          name: 'Labán',
          role: 'Suegro ultrajado / Busca sus dioses',
          avatar: '🧔‍♂️',
          color: 'from-amber-700 to-amber-900',
          isVictim: true,
          clueText: 'Registró furioso en la tienda de Raquel a solas con ella.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_raquel' }
          ]
        },
        {
          id: 'J',
          name: 'Jacob',
          role: 'Líder de la caravana / Ignora el robo',
          avatar: '👴',
          color: 'from-blue-600 to-indigo-800',
          clueText: 'Declaró su inocencia en la Tienda de Jacob.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_jacob' },
            { tipo: 'filaObjeto', objeto: '2,1' }
          ]
        },
        {
          id: 'A',
          name: 'Lía',
          role: 'Primera esposa de Jacob',
          avatar: '🧕',
          color: 'from-teal-600 to-teal-800',
          clueText: 'Permanece en su propia tienda, sin sospechar la estratagema de su hermana.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_lia' }
          ]
        },
        {
          id: 'S',
          name: 'Un siervo',
          role: 'Vigía del ganado',
          avatar: '🧑',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Vigila el convoy exterior junto al rebaño.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'caravana' },
            { tipo: 'oesteDe', sospechoso: 'J' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El líder de la caravana (Jacob) huyó en secreto después de trabajar veinte años.',
          narrative: 'Jacob se sitúa en su propia tienda.',
          relatedSuspects: ['J']
        },
        {
          id: 'c2',
          text: 'El suegro persiguió a la caravana alegando el robo de sus dioses familiares.',
          narrative: 'Labán está registrando en la Tienda de Raquel.',
          relatedSuspects: ['L']
        },
        {
          id: 'c3',
          text: 'La culpable era la hija favorita, quien escondió los ídolos en la montura de su camello.',
          narrative: 'Raquel se encuentra en su tienda privada, junto a la montura.',
          relatedSuspects: ['R']
        },
        {
          id: 'c4',
          text: 'Lía permanece en su propia tienda sin sospechar la estratagema de su hermana.',
          narrative: 'Lía ocupa su propia tienda.',
          relatedSuspects: ['A']
        },
        {
          id: 'c5',
          text: 'El siervo del ganado custodia la caravana en el convoy exterior.',
          narrative: 'El siervo se halla custodiando la caravana.',
          relatedSuspects: ['S']
        }
      ],
      solution: {
        R: { row: 0, col: 0 },
        L: { row: 1, col: 1 },
        J: { row: 2, col: 4 },
        A: { row: 3, col: 2 },
        S: { row: 4, col: 3 }
      }
    }
  },

  // RETO 003: El Sacrificio Interrumpido
  {
    id: '003',
    nombre: 'El Sacrificio Interrumpido',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Desenlaces de historias y parábolas',
      citasBiblicas: 'Génesis 22, 1-14',
      textoBiblicoClave: 'El ángel del Señor le gritó desde el cielo: «¡Abrahán, Abrahán! (...) No alargues la mano contra el muchacho ni le hagas nada. Ahora sé que temes a Dios.»',
      contextoTeologico: 'Leído desde el Magisterio y la exégesis, este texto polemiza contra los sacrificios humanos infantiles, comunes en los pueblos cananeos vecinos. Dios se revela como el Dios de la vida que rechaza esos actos. Además, tipifica la entrega total de la fe sin reservas.',
      solucionExplicacion: 'Dios puso a prueba a Abrahán pidiéndole sacrificar a Isaac. Abrahán obedeció, pero un ángel lo detuvo en el último segundo. Un carnero enredado en la maleza sirvió como ofrenda sustitutoria.',
      subtitle: 'Desenlaces de historias y parábolas · Génesis 22 · 5x5',
      badge: 'EL SACRIFICIO INTERRUMPIDO · 5x5',
      victimId: 'I',
      murdererId: 'A',
      storyIntro: 'Un anciano viaja a una montaña con su hijo amado y leña para un holocausto. El joven pregunta por la ofrenda, desconociendo el terrible mandato que el anciano ha recibido. Al final, la sangre derramada no es humana.',
      epilogue: '¡Deducción pericial completada! El mensajero divino detuvo la mano de Abrahán en el último instante. La fe del patriarca quedó probada y el carnero sustitutorio consagró el monte como lugar de vida.',
      rooms: {
        altar_moria: {
          id: 'altar_moria',
          name: 'Cima del Monte Moria (Altar)',
          shortName: 'Altar Moria',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Altar de piedras donde Isaac fue atado y la intervención celestial detuvo el cuchillo.'
        },
        maleza_carnero: {
          id: 'maleza_carnero',
          name: 'Maleza del Carnero',
          shortName: 'Maleza',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Espesura donde un carnero quedó trabado por los cuernos para la sustitución.'
        },
        ladera_monte: {
          id: 'ladera_monte',
          name: 'Ladera del Monte',
          shortName: 'Ladera',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Camino ascendente por donde subieron el padre y el muchacho cargando la leña.'
        },
        campamento_base: {
          id: 'campamento_base',
          name: 'Campamento Base',
          shortName: 'Camp. Base',
          bgColor: 'bg-rose-100/70',
          borderColor: 'border-rose-700/60',
          textColor: 'text-rose-950',
          tagColor: 'bg-rose-800 text-rose-100',
          description: 'Lugar donde quedaron los criados y el asno esperando el regreso.'
        },
        sendero_asno: {
          id: 'sendero_asno',
          name: 'Sendero del Desierto',
          shortName: 'Sendero',
          bgColor: 'bg-yellow-100/70',
          borderColor: 'border-yellow-700/60',
          textColor: 'text-yellow-950',
          tagColor: 'bg-yellow-800 text-yellow-100',
          description: 'Ruta distante donde mora el medio hermano Ismael en el desierto.'
        }
      },
      cellRooms: [
        ['altar_moria', 'altar_moria', 'altar_moria', 'maleza_carnero', 'maleza_carnero'],
        ['ladera_monte', 'altar_moria', 'altar_moria', 'maleza_carnero', 'maleza_carnero'],
        ['ladera_monte', 'ladera_monte', 'ladera_monte', 'campamento_base', 'campamento_base'],
        ['campamento_base', 'campamento_base', 'campamento_base', 'campamento_base', 'sendero_asno'],
        ['sendero_asno', 'sendero_asno', 'sendero_asno', 'sendero_asno', 'sendero_asno']
      ],
      blockedObjects: {
        '0,2': {
          emoji: '🐏',
          name: 'Carnero en Maleza',
          evidenceCode: 'EV-01',
          description: 'Carnero enredado por los cuernos en un zarzal como víctima expiatoria.'
        },
        '1,1': {
          emoji: '🪵',
          name: 'Leña del Holocausto',
          evidenceCode: 'EV-02',
          description: 'Maderos atados cargados por el muchacho hasta el altar.'
        },
        '3,4': {
          emoji: '🪨',
          name: 'Altar de Piedras',
          evidenceCode: 'EV-03',
          description: 'Piedras amontonadas sobre las cuales se dispuso el sacrificio.'
        }
      },
      suspects: [
        {
          id: 'A',
          name: 'Abrahán',
          role: 'El Patriarca fiel / Empuña el cuchillo sobre el altar',
          avatar: '🧔',
          color: 'from-amber-600 to-amber-800',
          isMurderer: true,
          clueText: 'En la cumbre de Moria junto al madero.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'altar_moria' },
            { tipo: 'borde', lado: 'oeste' }
          ]
        },
        {
          id: 'I',
          name: 'Isaac',
          role: 'Hijo de la promesa / Víctima designada',
          avatar: '👦',
          color: 'from-sky-600 to-sky-800',
          isVictim: true,
          clueText: 'Postrado en el Altar de Moria esperando el desenlace.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'altar_moria' }
          ]
        },
        {
          id: 'G',
          name: 'Un ángel',
          role: 'Mensajero celestial / Detiene la mano desde la ladera',
          avatar: '👼',
          color: 'from-yellow-400 to-amber-500',
          clueText: 'Aparece en la Ladera del Monte deteniendo la acción.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'ladera_monte' }
          ]
        },
        {
          id: 'S',
          name: 'Sara',
          role: 'Madre en la lejanía',
          avatar: '👵',
          color: 'from-rose-600 to-rose-800',
          clueText: 'Permanece en el Campamento Base al sur.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'campamento_base' }
          ]
        },
        {
          id: 'M',
          name: 'Ismael',
          role: 'Medio hermano en el desierto',
          avatar: '🏹',
          color: 'from-emerald-700 to-emerald-900',
          clueText: 'En el sendero del desierto lejano.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'sendero_asno' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El patriarca recibió una orden incomprensible pero obedeció al amanecer.',
          narrative: 'Abrahán está en la cima del Altar junto al madero.',
          relatedSuspects: ['A']
        },
        {
          id: 'c2',
          text: 'La víctima designada cargó con la leña sin saber que él mismo era la ofrenda.',
          narrative: 'Isaac está postrado en el Altar de Moria esperando el desenlace.',
          relatedSuspects: ['I']
        },
        {
          id: 'c3',
          text: 'Justo cuando levantó el cuchillo, el mensajero divino intervino deteniendo la acción.',
          narrative: 'El ángel desciende en la Ladera del Monte deteniendo la acción.',
          relatedSuspects: ['G']
        },
        {
          id: 'c4',
          text: 'La madre del joven no estuvo presente en la cumbre del monte Moria.',
          narrative: 'Sara aguarda en el Campamento Base al sur.',
          relatedSuspects: ['S']
        },
        {
          id: 'c5',
          text: 'El medio hermano Ismael habita en el confín del sendero del desierto.',
          narrative: 'Ismael aguarda en el sendero del desierto lejano.',
          relatedSuspects: ['M']
        }
      ],
      solution: {
        A: { row: 0, col: 0 },
        I: { row: 1, col: 2 },
        G: { row: 2, col: 1 },
        S: { row: 3, col: 3 },
        M: { row: 4, col: 4 }
      }
    }
  },

  // RETO 005: La Túnica Ensangrentada
  {
    id: '005',
    nombre: 'La Túnica Ensangrentada',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Asesinatos o crímenes',
      citasBiblicas: 'Génesis 37, 12-36',
      textoBiblicoClave: 'Judá propuso a sus hermanos: «¿Qué sacamos con asesinar a nuestro hermano y ocultar su sangre? Vamos a vendérselo a los ismaelitas.»',
      contextoTeologico: 'Esta historia refleja la profunda disfuncionalidad familiar patriarcal, pero la trama revela un hilo teológico providencial: el mal perpetrado por los hermanos será el instrumento que Dios usará más tarde para salvar a la propia familia del hambre (Gén 50,20).',
      solucionExplicacion: 'Los hermanos de José lo arrojaron a un pozo. Judá propuso venderlo a unos mercaderes ismaelitas por veinte monedas de plata. Luego, mancharon su túnica con sangre para engañar a su padre Jacob.',
      subtitle: 'Asesinatos o crímenes · Génesis 37 · 5x5',
      badge: 'LA TÚNICA ENSANGRENTADA · 5x5',
      victimId: 'J',
      murdererId: 'U',
      storyIntro: 'Un joven soñador es enviado a ver a sus hermanos. Estos, hartos de su arrogancia y del favoritismo de su padre, conspiran para deshacerse de él y presentan como prueba una túnica manchada de sangre animal.',
      epilogue: '¡Brillante resolución forense! La venta de José en la cisterna de Dotán y la farsa de la túnica desgarrada han sido desveladas. El ardid económico de Judá ha quedado al descubierto.',
      rooms: {
        cisterna_dotan: {
          id: 'cisterna_dotan',
          name: 'Cisterna Seca de Dotán',
          shortName: 'Cisterna',
          bgColor: 'bg-indigo-100/70',
          borderColor: 'border-indigo-700/60',
          textColor: 'text-indigo-950',
          tagColor: 'bg-indigo-800 text-indigo-100',
          description: 'Hoyo de roca donde arrojaron a José antes de acordar su venta comercial.'
        },
        pastizal_siquen: {
          id: 'pastizal_siquen',
          name: 'Pastizales de Dotán',
          shortName: 'Pastizales',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Campiña donde pastaban los rebaños y Rubén se apartó temporalmente.'
        },
        campamento_hermanos: {
          id: 'campamento_hermanos',
          name: 'Campamento de los Hermanos',
          shortName: 'Campamento',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Lugar de reunión donde se conspiró contra el soñador y se degolló el cabrito.'
        },
        ruta_caravana: {
          id: 'ruta_caravana',
          name: 'Ruta Comercial Ismaelita',
          shortName: 'Ruta Caravana',
          bgColor: 'bg-orange-100/70',
          borderColor: 'border-orange-700/60',
          textColor: 'text-orange-950',
          tagColor: 'bg-orange-800 text-orange-100',
          description: 'Camino con camellos que transportan resina, bálsamo y mirra hacia Egipto.'
        },
        tienda_jacob: {
          id: 'tienda_jacob',
          name: 'Tienda de Jacob en Hebrón',
          shortName: 'Tienda Hebrón',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Estancia lejana donde el anciano padre llora con sayal la supuesta fiera voraz.'
        }
      },
      cellRooms: [
        ['pastizal_siquen', 'pastizal_siquen', 'campamento_hermanos', 'cisterna_dotan', 'cisterna_dotan'],
        ['pastizal_siquen', 'pastizal_siquen', 'campamento_hermanos', 'cisterna_dotan', 'cisterna_dotan'],
        ['pastizal_siquen', 'pastizal_siquen', 'campamento_hermanos', 'ruta_caravana', 'ruta_caravana'],
        ['tienda_jacob', 'tienda_jacob', 'campamento_hermanos', 'ruta_caravana', 'ruta_caravana'],
        ['tienda_jacob', 'tienda_jacob', 'ruta_caravana', 'ruta_caravana', 'ruta_caravana']
      ],
      blockedObjects: {
        '0,4': {
          emoji: '🕳️',
          name: 'Cisterna sin Agua',
          evidenceCode: 'EV-01',
          description: 'Pozo cavado en la roca calcárea donde no había agua para beber.'
        },
        '2,0': {
          emoji: '👘',
          name: 'Túnica de Mangas Largas',
          evidenceCode: 'EV-02',
          description: 'Vestidura de honor empapada con la sangre de un cabrito.'
        },
        '4,4': {
          emoji: '🪙',
          name: '20 Siclos de Plata',
          evidenceCode: 'EV-03',
          description: 'Precio cobrado a los mercaderes por entregar al muchacho.'
        }
      },
      suspects: [
        {
          id: 'J',
          name: 'José',
          role: 'El soñador de la túnica / Víctima vendida',
          avatar: '🧒',
          color: 'from-indigo-600 to-violet-800',
          isVictim: true,
          clueText: 'En el fondo de la Cisterna de Dotán.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'cisterna_dotan' },
            { tipo: 'filaObjeto', objeto: '0,4' }
          ]
        },
        {
          id: 'U',
          name: 'Judá',
          role: 'Hermano que propuso venderlo a los mercaderes',
          avatar: '🧔',
          color: 'from-amber-700 to-amber-900',
          isMurderer: true,
          clueText: 'En la Cisterna de Dotán negociando a solas con José.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'cisterna_dotan' }
          ]
        },
        {
          id: 'R',
          name: 'Rubén',
          role: 'Hermano mayor / Quería rescatarlo',
          avatar: '🧑',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Apartado en los Pastizales de Dotán.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'pastizal_siquen' }
          ]
        },
        {
          id: 'K',
          name: 'Jacob',
          role: 'Padre que envió al hijo y recibe la túnica',
          avatar: '👴',
          color: 'from-stone-600 to-stone-800',
          clueText: 'En su tienda de Hebrón.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_jacob' }
          ]
        },
        {
          id: 'I',
          name: 'Un ismaelita',
          role: 'Mercader de la caravana a Egipto',
          avatar: '🐫',
          color: 'from-orange-600 to-orange-800',
          clueText: 'Aguardando en la Ruta Comercial Ismaelita.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'ruta_caravana' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El hermano mayor (Rubén) sugirió arrojarlo a una cisterna vacía para salvarlo más tarde.',
          narrative: 'Rubén se apartó en los Pastizales de Dotán.',
          relatedSuspects: ['R']
        },
        {
          id: 'c2',
          text: 'Mientras el mayor no estaba, otro hermano sugirió que era mejor sacar provecho económico.',
          narrative: 'Judá acudió a la cisterna negociando la venta.',
          relatedSuspects: ['U']
        },
        {
          id: 'c3',
          text: 'El joven soñador quedó atrapado en el brocal de la cisterna.',
          narrative: 'José está en el fondo de la Cisterna de Dotán.',
          relatedSuspects: ['J']
        },
        {
          id: 'c4',
          text: 'El padre afligido llora en su tienda al recibir la túnica rasgada.',
          narrative: 'Jacob se sitúa afligido en su tienda de Hebrón.',
          relatedSuspects: ['K']
        },
        {
          id: 'c5',
          text: 'El mercader ismaelita completó la compra por veinte monedas de plata en la ruta.',
          narrative: 'El ismaelita aguarda en la Ruta Comercial.',
          relatedSuspects: ['I']
        }
      ],
      solution: {
        J: { row: 0, col: 3 },
        U: { row: 1, col: 4 },
        R: { row: 2, col: 1 },
        K: { row: 3, col: 0 },
        I: { row: 4, col: 2 }
      }
    }
  },

  // RETO 007: La Copa de Adivinación
  {
    id: '007',
    nombre: 'La Copa de Adivinación',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Génesis 44, 1-17',
      textoBiblicoClave: 'El mayordomo los alcanzó y les repitió esas mismas palabras... Al abrir los sacos, apareció la copa en el saco de Benjamín.',
      contextoTeologico: 'Es el clímax dramático de la reconciliación fraterna. Teológicamente representa el arrepentimiento genuino. Judá, quien antes propuso vender a José, ahora ofrece su vida por Benjamín. Es un acto de redención que prefigura el amor oblativo.',
      solucionExplicacion: 'José ordenó a su mayordomo esconder su copa de plata en el saco de su hermano menor, Benjamín. Fue una prueba para ver si sus hermanos lo abandonarían, pero Judá se ofreció como esclavo en su lugar.',
      subtitle: 'Descubrimiento de acciones ocultas · Génesis 44 · 5x5',
      badge: 'LA COPA DE ADIVINACIÓN · 5x5',
      victimId: 'B',
      murdererId: 'U',
      storyIntro: 'Un poderoso gobernante acoge a unos viajeros extranjeros, pero antes de que partan, organiza una trampa. Planta un objeto de gran valor en el saco del más joven para probar si los otros están dispuestos a abandonarlo.',
      epilogue: '¡Prueba pericial superada! La copa en el costal de Benjamín sirvió para constatar la sincera transformación fraterna: Judá intercedió con su propia vida para no desgarrar el corazón de su padre.',
      rooms: {
        palacio_jose: {
          id: 'palacio_jose',
          name: 'Palacio del Gobernador de Egipto',
          shortName: 'Palacio José',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Sede de mando donde José ordenó en secreto colocar la copa de plata.'
        },
        camino_retorno: {
          id: 'camino_retorno',
          name: 'Camino de Retorno a Canaán',
          shortName: 'Camino',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Sendero donde los hermanos fueron alcanzados y se abrieron los sacos.'
        },
        almacen_grano: {
          id: 'almacen_grano',
          name: 'Almacén de Granos del Nilo',
          shortName: 'Almacén',
          bgColor: 'bg-yellow-100/70',
          borderColor: 'border-yellow-700/60',
          textColor: 'text-yellow-950',
          tagColor: 'bg-yellow-800 text-yellow-100',
          description: 'Silos donde se llenaron los sacos de trigo y se reintegró el dinero.'
        },
        puesto_guardia: {
          id: 'puesto_guardia',
          name: 'Puesto de Guardia Egipcio',
          shortName: 'P. Guardia',
          bgColor: 'bg-rose-100/70',
          borderColor: 'border-rose-700/60',
          textColor: 'text-rose-950',
          tagColor: 'bg-rose-800 text-rose-100',
          description: 'Destacamento de centinelas que custodiaba las puertas de la urbe.'
        },
        aposentos_mayordomo: {
          id: 'aposentos_mayordomo',
          name: 'Aposentos del Mayordomo',
          shortName: 'Mayordomo',
          bgColor: 'bg-teal-100/70',
          borderColor: 'border-teal-700/60',
          textColor: 'text-teal-950',
          tagColor: 'bg-teal-800 text-teal-100',
          description: 'Lugar donde el mayordomo recibió las instrucciones de la trampa.'
        }
      },
      cellRooms: [
        ['palacio_jose', 'palacio_jose', 'almacen_grano', 'almacen_grano', 'puesto_guardia'],
        ['palacio_jose', 'camino_retorno', 'camino_retorno', 'almacen_grano', 'puesto_guardia'],
        ['camino_retorno', 'camino_retorno', 'camino_retorno', 'camino_retorno', 'puesto_guardia'],
        ['camino_retorno', 'camino_retorno', 'puesto_guardia', 'puesto_guardia', 'puesto_guardia'],
        ['aposentos_mayordomo', 'aposentos_mayordomo', 'puesto_guardia', 'puesto_guardia', 'puesto_guardia']
      ],
      blockedObjects: {
        '1,1': {
          emoji: '🏆',
          name: 'Copa de Plata',
          evidenceCode: 'EV-01',
          description: 'Vaso sagrado utilizado por el virrey para beber y adivinar.'
        },
        '2,4': {
          emoji: '🌾',
          name: 'Saco de Trigo',
          evidenceCode: 'EV-02',
          description: 'Costal de arpillera donde se ocultó la copa en la boca del saco.'
        },
        '0,3': {
          emoji: '🛒',
          name: 'Carreta de Víveres',
          evidenceCode: 'EV-03',
          description: 'Carga de grano preparada en el almacén para el viaje de regreso.'
        }
      },
      suspects: [
        {
          id: 'J',
          name: 'José',
          role: 'Virrey de Egipto / Orquestador de la prueba',
          avatar: '👑',
          color: 'from-amber-600 to-amber-800',
          clueText: 'En el Palacio del Gobernador.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'palacio_jose' },
            { tipo: 'columnaObjeto', objeto: '1,1' }
          ]
        },
        {
          id: 'B',
          name: 'Benjamín',
          role: 'Hermano menor / En su saco apareció la copa',
          avatar: '👦',
          color: 'from-emerald-600 to-emerald-800',
          isVictim: true,
          clueText: 'En el Camino de Retorno asombrado ante el registro.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_retorno' },
            { tipo: 'filaObjeto', objeto: '1,1' }
          ]
        },
        {
          id: 'U',
          name: 'Judá',
          role: 'Hermano que se ofrece como esclavo en su lugar',
          avatar: '🧔',
          color: 'from-rose-700 to-rose-900',
          isMurderer: true,
          clueText: 'Junto a Benjamín en el Camino de Retorno intercediendo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_retorno' }
          ]
        },
        {
          id: 'R',
          name: 'Rubén',
          role: 'Hermano que lamenta la angustia familiar',
          avatar: '🧑',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Detenido en el Puesto de Guardia.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puesto_guardia' }
          ]
        },
        {
          id: 'M',
          name: 'El mayordomo',
          role: 'Siervo ejecutor que colocó la copa',
          avatar: '📜',
          color: 'from-teal-600 to-teal-800',
          clueText: 'En los Aposentos del Mayordomo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'aposentos_mayordomo' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El gobernador de Egipto preparó una trampa final para probar la lealtad fraterna.',
          narrative: 'José permanece en el Palacio del Gobernador.',
          relatedSuspects: ['J']
        },
        {
          id: 'c2',
          text: 'El siervo de confianza recibió la orden de esconder el objeto de plata en el saco del menor.',
          narrative: 'El mayordomo está en sus aposentos privados.',
          relatedSuspects: ['M']
        },
        {
          id: 'c3',
          text: 'El objeto apareció en el saco del menor cuando fueron alcanzados en el camino.',
          narrative: 'Benjamín está en el Camino de Retorno.',
          relatedSuspects: ['B']
        },
        {
          id: 'c4',
          text: 'Judá ofreció su propia libertad como esclavo para no regresar sin el muchacho.',
          narrative: 'Judá acompaña a Benjamín en el Camino de Retorno intercediendo por él.',
          relatedSuspects: ['U']
        },
        {
          id: 'c5',
          text: 'Rubén fue retenido junto a los guardias egipcios a la salida de la ciudad.',
          narrative: 'Rubén fue detenido en el Puesto de Guardia.',
          relatedSuspects: ['R']
        }
      ],
      solution: {
        J: { row: 0, col: 1 },
        B: { row: 1, col: 2 },
        U: { row: 2, col: 3 },
        R: { row: 3, col: 4 },
        M: { row: 4, col: 0 }
      }
    }
  },

  // RETO 009: El Lecho Profanado
  {
    id: '009',
    nombre: 'El Lecho Profanado',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Génesis 35, 22 y Génesis 49, 3-4',
      textoBiblicoClave: 'Mientras Israel habitaba en aquella región, Rubén fue y se acostó con Bilhá, la concubina de su padre, e Israel se enteró.',
      contextoTeologico: 'Históricamente, tomar las concubinas del patriarca era una forma de usurpar su liderazgo. Teológicamente, subraya que las promesas divinas no se heredan automáticamente por orden biológico; el comportamiento ético tiene un papel fundamental en la historia sagrada.',
      solucionExplicacion: 'Rubén se acostó con Bilhá, la concubina de su padre Jacob. Jacob se enteró y, aunque guardó silencio en el momento, al final de su vida le retiró a Rubén la bendición de la primogenitura por haber profanado su lecho.',
      subtitle: 'Descubrimiento de acciones ocultas · Génesis 35 y 49 · 5x5',
      badge: 'EL LECHO PROFANADO · 5x5',
      victimId: 'B',
      murdererId: 'R',
      storyIntro: 'El hijo mayor, en un intento de afirmar su poder tras una tragedia familiar, toma en secreto a la concubina de su padre. Aunque cree que su acción ha quedado impune, el anciano lo descubre y le reserva un castigo que se hará efectivo en el lecho de muerte.',
      epilogue: '¡Resolución concluyente! El pecado oculto en Migdal Éder no pasó desapercibido. Rubén perdió la primogenitura y su impetuosidad quedó sellada en las bendiciones finales del patriarca.',
      rooms: {
        tienda_bilha: {
          id: 'tienda_bilha',
          name: 'Tienda de Bilhá (Concubina)',
          shortName: 'T. Bilhá',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Tienda donde se cometió el ultraje prohibido tras la muerte de Raquel.'
        },
        tienda_jacob: {
          id: 'tienda_jacob',
          name: 'Tienda de Jacob (Israel)',
          shortName: 'T. Jacob',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Estancia del patriarca que conoció en silencio el desafuero de su primogénito.'
        },
        torre_eder: {
          id: 'torre_eder',
          name: 'Torre de Éder (Migdal Éder)',
          shortName: 'Torre Éder',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Atalaya de pastores en los campos de Belén donde acampó Israel.'
        },
        tienda_lia: {
          id: 'tienda_lia',
          name: 'Tienda de Lía',
          shortName: 'T. Lía',
          bgColor: 'bg-teal-100/70',
          borderColor: 'border-teal-700/60',
          textColor: 'text-teal-950',
          tagColor: 'bg-teal-800 text-teal-100',
          description: 'Morada de la madre de Rubén en el campamento patriarcal.'
        },
        sepulcro_raquel: {
          id: 'sepulcro_raquel',
          name: 'Sepulcro de Raquel en Efrata',
          shortName: 'Sepulcro',
          bgColor: 'bg-rose-100/70',
          borderColor: 'border-rose-700/60',
          textColor: 'text-rose-950',
          tagColor: 'bg-rose-800 text-rose-100',
          description: 'Monumento de duelo erigido por Jacob en el camino de Belén.'
        }
      },
      cellRooms: [
        ['tienda_jacob', 'tienda_jacob', 'tienda_jacob', 'torre_eder', 'torre_eder'],
        ['tienda_bilha', 'tienda_bilha', 'tienda_jacob', 'torre_eder', 'torre_eder'],
        ['tienda_bilha', 'tienda_bilha', 'tienda_bilha', 'tienda_bilha', 'tienda_bilha'],
        ['tienda_lia', 'tienda_lia', 'tienda_bilha', 'sepulcro_raquel', 'sepulcro_raquel'],
        ['tienda_lia', 'tienda_lia', 'sepulcro_raquel', 'sepulcro_raquel', 'sepulcro_raquel']
      ],
      blockedObjects: {
        '0,3': {
          emoji: '🛏️',
          name: 'Leño del Lecho',
          evidenceCode: 'EV-01',
          description: 'Armazón de campaña que representaba la dignidad conyugal del patriarca.'
        },
        '2,1': {
          emoji: '🪨',
          name: 'Estela Conmemorativa',
          evidenceCode: 'EV-02',
          description: 'Pilar alzado por Jacob tras enterrar a Raquel junto al camino.'
        },
        '3,4': {
          emoji: '🏰',
          name: 'Atalaya de Migdal Éder',
          evidenceCode: 'EV-03',
          description: 'Torre de vigía del rebaño que domina los valles de pastoreo.'
        }
      },
      suspects: [
        {
          id: 'J',
          name: 'Jacob',
          role: 'Patriarca agraviado / Guardó silencio',
          avatar: '👴',
          color: 'from-amber-700 to-amber-900',
          clueText: 'En su tienda patriarcal.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_jacob' }
          ]
        },
        {
          id: 'B',
          name: 'Bilhá',
          role: 'Concubina de Jacob / Víctima del abuso',
          avatar: '👩',
          color: 'from-purple-600 to-purple-800',
          isVictim: true,
          clueText: 'En la Tienda de Bilhá.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_bilha' },
            { tipo: 'borde', lado: 'oeste' }
          ]
        },
        {
          id: 'R',
          name: 'Rubén',
          role: 'Primogénito transgresor / Profanó el lecho',
          avatar: '🧑',
          color: 'from-rose-700 to-rose-900',
          isMurderer: true,
          clueText: 'Entró en la Tienda de Bilhá a solas con ella.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_bilha' },
            { tipo: 'columnaObjeto', objeto: '3,4' }
          ]
        },
        {
          id: 'L',
          name: 'Lía',
          role: 'Madre de Rubén',
          avatar: '🧕',
          color: 'from-teal-600 to-teal-800',
          clueText: 'Permanece en su propia tienda.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_lia' },
            { tipo: 'junto_objeto', objeto: '2,1' }
          ]
        },
        {
          id: 'Q',
          name: 'Memoria de Raquel',
          role: 'Esposa difunta en el sepulcro',
          avatar: '🪦',
          color: 'from-stone-500 to-stone-700',
          clueText: 'En el Sepulcro de Raquel en Efrata.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'sepulcro_raquel' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Ocurrió poco después de la muerte de la esposa favorita, cerca de Migdal Éder.',
          narrative: 'La memoria de Raquel se halla en el Sepulcro de Efrata.',
          relatedSuspects: ['Q']
        },
        {
          id: 'c2',
          text: 'El primogénito cometió un acto prohibido desafiando la autoridad patriarcal.',
          narrative: 'Rubén se coló en la Tienda de Bilhá profanando la intimidad.',
          relatedSuspects: ['R']
        },
        {
          id: 'c3',
          text: 'La mujer involucrada era la concubina del patriarca.',
          narrative: 'Bilhá está consternada en su tienda.',
          relatedSuspects: ['B']
        },
        {
          id: 'c4',
          text: 'El patriarca se enteró del suceso y guardó un aparente silencio.',
          narrative: 'Jacob se ubica guardando silencio en su tienda patriarcal.',
          relatedSuspects: ['J']
        },
        {
          id: 'c5',
          text: 'Lía se encuentra en su estancia maternal sin intervenir en la transgresión.',
          narrative: 'Lía permanece en su propia tienda.',
          relatedSuspects: ['L']
        }
      ],
      solution: {
        J: { row: 0, col: 2 },
        B: { row: 1, col: 0 },
        R: { row: 2, col: 4 },
        L: { row: 3, col: 1 },
        Q: { row: 4, col: 3 }
      }
    }
  }
];
