import { Reto } from '../types';

/**
 * NUEVOS RETOS BÍBLICOS - DIFICULTAD MEDIO (7x7 - 49 CELDAS)
 * Ciclo de los Evangelios / Nuevo Testamento.
 */
export const RETOS_EVANGELIOS_MEDIOS: Reto[] = [
  // RETO 001-NT: La Danza Mortal
  {
    id: '001-NT',
    nombre: 'La Danza Mortal',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Asesinatos o crímenes',
      citasBiblicas: 'Marcos 6, 17-29',
      textoBiblicoClave: 'El rey envió en seguida a un guardia con orden de traer la cabeza de Juan. El guardia fue a la cárcel, lo decapitó, trajo la cabeza en una bandeja y se la dio a la muchacha.',
      contextoTeologico: 'Este relato denuncia la tiranía y la frivolidad del poder político frente a la integridad del profeta. Fe Adulta destaca que el martirio de Juan prefigura el destino de Jesús, mostrando que el mensaje del Reino siempre entra en conflicto con las estructuras de poder injustas.',
      solucionExplicacion: 'Salomé bailó ante Herodes Antipas, quien prometió darle lo que pidiera. Instigada por su madre Herodías, enemiga de Juan el Bautista, Salomé pidió su cabeza. Herodes, por no faltar a su juramento, ordenó decapitar a Juan en la prisión.',
      storyIntro: 'Durante un espléndido banquete de cumpleaños, un gobernante queda hechizado por un baile y hace una promesa temeraria. Esa promesa, manipulada por el rencor, culmina con la sangre de un profeta sirviéndose como plato principal.',
      epilogue: '¡La voz en el desierto silenciada por el capricho! La bandeja de plata con la cabeza del Bautista fue entregada a la joven y luego a Herodías. Sus discípulos vinieron con gran dolor, tomaron el cuerpo y le dieron digna sepultura.',
      subtitle: 'Asesinatos o crímenes · Marcos 6 · 7x7',
      badge: 'LA DANZA MORTAL · 7x7',
      victimId: 'JB',
      murdererId: 'HA',
      rooms: {
        sala_banquete: {
          id: 'sala_banquete',
          name: 'Gran Salón del Banquete Real',
          shortName: 'Salón Banquete',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Comedor fastuoso donde magnates y tribunos de Galilea celebraban el cumpleaños del tetrarca.'
        },
        estrado_danza: {
          id: 'estrado_danza',
          name: 'Estrado Central de la Danza',
          shortName: 'Estrado Danza',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Alfombra donde la hija de Herodías cautivó con su baile al monarca y a sus comensales.'
        },
        camara_herodias: {
          id: 'camara_herodias',
          name: 'Aposento Privado de Herodías',
          shortName: 'Cámara Herodías',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Recinto secreto donde la reina instigó a su hija a pedir la ejecución inmediata del profeta.'
        },
        mazmorra_maqueronte: {
          id: 'mazmorra_maqueronte',
          name: 'Mazmorra Subterránea de Maqueronte',
          shortName: 'Mazmorra Cárcel',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Cripta húmeda y profunda en la fortaleza donde Juan el Bautista aguardaba atado con cadenas.'
        },
        pasillo_verdugos: {
          id: 'pasillo_verdugos',
          name: 'Corredor de Guardia y Verdugos',
          shortName: 'Corredor Guardia',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Pasaje de piedra por donde el centinela llevó la bandeja de plata ensangrentada.'
        }
      },
      cellRooms: [
        ['sala_banquete', 'sala_banquete', 'sala_banquete', 'estrado_danza', 'estrado_danza', 'camara_herodias', 'camara_herodias'],
        ['sala_banquete', 'sala_banquete', 'estrado_danza', 'estrado_danza', 'estrado_danza', 'camara_herodias', 'camara_herodias'],
        ['sala_banquete', 'sala_banquete', 'sala_banquete', 'estrado_danza', 'camara_herodias', 'camara_herodias', 'camara_herodias'],
        ['pasillo_verdugos', 'pasillo_verdugos', 'pasillo_verdugos', 'camara_herodias', 'camara_herodias', 'camara_herodias', 'camara_herodias'],
        ['pasillo_verdugos', 'pasillo_verdugos', 'pasillo_verdugos', 'mazmorra_maqueronte', 'mazmorra_maqueronte', 'mazmorra_maqueronte', 'mazmorra_maqueronte'],
        ['mazmorra_maqueronte', 'mazmorra_maqueronte', 'mazmorra_maqueronte', 'mazmorra_maqueronte', 'mazmorra_maqueronte', 'mazmorra_maqueronte', 'mazmorra_maqueronte'],
        ['mazmorra_maqueronte', 'mazmorra_maqueronte', 'mazmorra_maqueronte', 'mazmorra_maqueronte', 'mazmorra_maqueronte', 'mazmorra_maqueronte', 'mazmorra_maqueronte']
      ],
      blockedObjects: {
        '0,3': {
          emoji: '🍽️',
          name: 'Bandeja de Plata Real',
          evidenceCode: 'EV-01',
          description: 'Plato ceremonial solicitado por Salomé para presentar la cabeza decapitada.'
        },
        '2,5': {
          emoji: '📜',
          name: 'Decreto de Repudio Ilícito',
          evidenceCode: 'EV-02',
          description: 'Escrito censurado por Juan que condenaba el matrimonio incestuoso de Herodes.'
        },
        '4,1': {
          emoji: '🗡️',
          name: 'Espada del Especulador Romano',
          evidenceCode: 'EV-03',
          description: 'Arma del verdugo de la guardia que ejecutó la orden sumarísima en la prisión.'
        },
        '6,3': {
          emoji: '⛓️',
          name: 'Grilletes de Hierro del Bautista',
          evidenceCode: 'EV-04',
          description: 'Cadenas que apresaban al precursor en las profundidades de Maqueronte.'
        }
      },
      suspects: [
        {
          id: 'HA',
          name: 'Herodes Antipas',
          role: 'Tetrarca de Galilea',
          avatar: '👑',
          color: 'from-amber-600 to-amber-800',
          isMurderer: true,
          clueText: 'Se entristeció por el pedido, pero por no desairar a sus invitados cumplió el juramento.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'pasillo_verdugos' },
            { tipo: 'columnaObjeto', objeto: '4,1' }
          ]
        },
        {
          id: 'HE',
          name: 'Herodías',
          role: 'Esposa Ilegítima y Reina',
          avatar: '🦹‍♀️',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Odiaba a muerte a Juan porque proclamaba: «No te es lícito tener la mujer de tu hermano».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camara_herodias' },
            { tipo: 'filaObjeto', objeto: '0,3' }
          ]
        },
        {
          id: 'SA',
          name: 'Salomé',
          role: 'Joven Bailarina',
          avatar: '💃',
          color: 'from-rose-600 to-rose-800',
          clueText: 'Entró precipitadamente ante el rey exigiendo: «Quiero que ahora mismo me des la cabeza de Juan».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'estrado_danza' },
            { tipo: 'columnaObjeto', objeto: '0,3' }
          ]
        },
        {
          id: 'JB',
          name: 'Juan el Bautista',
          role: 'Profeta y Prisionero',
          avatar: '🕊️',
          color: 'from-red-600 to-red-800',
          isVictim: true,
          clueText: 'Voz veraz e incorruptible martirizada en la soledad de las mazmorras.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'pasillo_verdugos' }
          ]
        },
        {
          id: 'GU',
          name: 'Guardia Verdugo',
          role: 'Soldado de la Escolta',
          avatar: '⚔️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Bajó a la prisión de Maqueronte, decapitó al profeta y trajo el trofeo en la bandeja.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'mazmorra_maqueronte' },
            { tipo: 'columnaObjeto', objeto: '2,5' }
          ]
        },
        {
          id: 'NO',
          name: 'Noble Comensal',
          role: 'Tribuno Invitado de Honor',
          avatar: '🍷',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Testigo del juramento imprudente pronunciado al calor del vino en la fiesta.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camara_herodias' }
          ]
        },
        {
          id: 'CA',
          name: 'Carcelero de Maqueronte',
          role: 'Guardián de la Mazmorra',
          avatar: '🗝️',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Abrió los cerrojos de la celda al emisario del tetrarca en plena noche.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'mazmorra_maqueronte' },
            { tipo: 'junto_objeto', objeto: '6,3' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El rey ofreció a la joven bailarina cualquier cosa que pidiera, hasta la mitad de su reino.',
          narrative: 'Herodes Antipas juró públicamente complacer cualquier petición de Salomé.',
          relatedSuspects: ['HA', 'SA']
        },
        {
          id: 'c2',
          text: 'La joven no sabía qué pedir y salió del banquete para consultar a su madre.',
          narrative: 'Salomé fue presurosa al aposento de Herodías para recibir instrucciones.',
          relatedSuspects: ['SA', 'HE']
        },
        {
          id: 'c3',
          text: 'La madre odiaba al prisionero porque este denunciaba constantemente su matrimonio ilícito con el rey.',
          narrative: 'Herodías aprovechó la oportunidad perfecta para eliminar la voz de Juan.',
          relatedSuspects: ['HE', 'JB']
        },
        {
          id: 'c4',
          text: 'La joven regresó y pidió inmediatamente la cabeza del prisionero en una bandeja de plata.',
          narrative: 'Salomé repitió sin titubear la sanguinaria demanda ante todos los nobles.',
          relatedSuspects: ['SA', 'HA', 'NO']
        },
        {
          id: 'c5',
          text: 'El rey se entristeció, pero no quiso romper su juramento frente a los invitados al banquete.',
          narrative: 'El respeto humano y el miedo al qué dirán empujaron al tetrarca al crimen.',
          relatedSuspects: ['HA', 'NO']
        },
        {
          id: 'c6',
          text: 'El prisionero fue decapitado en la mazmorra y su cabeza fue entregada a la joven.',
          narrative: 'El guardia cumplió la orden ejecutando a Juan en presencia del carcelero.',
          relatedSuspects: ['GU', 'CA', 'JB', 'SA']
        },
        {
          id: 'c7',
          text: 'La joven entregó la macabra recompensa a su madre, consumando así la venganza.',
          narrative: 'Herodías recibió complacida la bandeja con la cabeza del bautista.',
          relatedSuspects: ['SA', 'HE']
        }
      ],
      solution: {
        HA: { row: 3, col: 1 },
        HE: { row: 0, col: 6 },
        SA: { row: 1, col: 3 },
        JB: { row: 4, col: 0 },
        GU: { row: 5, col: 5 },
        NO: { row: 2, col: 4 },
        CA: { row: 6, col: 2 }
      }
    }
  },

  // RETO 002-NT: El Toque Clandestino
  {
    id: '002-NT',
    nombre: 'El Toque Clandestino',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Lucas 8, 43-48',
      textoBiblicoClave: 'Pero Jesús dijo: «Alguien me ha tocado, porque he sentido que ha salido una fuerza de mí». La mujer, al ver que no podía pasar inadvertida, se acercó temblando...',
      contextoTeologico: 'La ley del Levítico consideraba impura a la mujer con hemorragias, condenándola al aislamiento social. El Magisterio subraya cómo Jesús rompe el tabú religioso de la impureza, sanando no solo el cuerpo, sino reintegrando a la persona a la comunidad.',
      solucionExplicacion: 'Una mujer que padecía hemorragias desde hacía doce años tocó a escondidas el manto de Jesús en medio de la multitud. Al quedar curada al instante, Jesús notó que una fuerza salía de él y la hizo testificar públicamente para dignificarla.',
      storyIntro: 'En medio de una multitud caótica que empuja a un rabino famoso hacia la casa de un líder local, ocurre un milagro invisible. Nadie ve el momento exacto, pero una energía curativa delata que alguien rompió las reglas de pureza ritual.',
      epilogue: '¡«Hija, tu fe te ha salvado, vete en paz»! La mujer confesó su secreto ante toda la comitiva. Lo que la ley calificaba de impureza se transformó en testimonio vivo del poder liberador de la gracia divina.',
      subtitle: 'Descubrimiento de acciones ocultas · Lucas 8 · 7x7',
      badge: 'EL TOQUE CLANDESTINO · 7x7',
      victimId: 'MH',
      murdererId: 'J',
      rooms: {
        camino_apretujado: {
          id: 'camino_apretujado',
          name: 'Callejón Abarrotado de Cafarnaúm',
          shortName: 'Callejón Gentío',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Callejuela angosta donde la muchedumbre apretujaba a Jesús camino de la casa de Jairo.'
        },
        borde_manto: {
          id: 'borde_manto',
          name: 'Zona del Fleco del Manto (Tzitzit)',
          shortName: 'Fleco Manto',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Espacio a ras del suelo por detrás de Jesús donde la mano temblorosa rozó la orla de su túnica.'
        },
        comitiva_jairo: {
          id: 'comitiva_jairo',
          name: 'Avance de la Familia de Jairo',
          shortName: 'Comitiva Jairo',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Grupo impaciente del jefe de la sinagoga que urgía al Maestro a llegar antes de que la niña muriera.'
        },
        circulo_apostoles: {
          id: 'circulo_apostoles',
          name: 'Círculo de Pedro y los Discípulos',
          shortName: 'Círculo Discípulos',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Acompañantes inmediatos que expresaron su asombro ante la pregunta de quién le había tocado.'
        },
        esquina_testimonio: {
          id: 'esquina_testimonio',
          name: 'Poyo Público del Testimonio',
          shortName: 'Poyo Testimonio',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Rincón donde la mujer se arrodilló confesando la sanación instantánea ante todos los presentes.'
        }
      },
      cellRooms: [
        ['comitiva_jairo', 'comitiva_jairo', 'comitiva_jairo', 'camino_apretujado', 'camino_apretujado', 'camino_apretujado', 'camino_apretujado'],
        ['comitiva_jairo', 'circulo_apostoles', 'circulo_apostoles', 'camino_apretujado', 'camino_apretujado', 'camino_apretujado', 'camino_apretujado'],
        ['circulo_apostoles', 'circulo_apostoles', 'borde_manto', 'borde_manto', 'camino_apretujado', 'camino_apretujado', 'esquina_testimonio'],
        ['circulo_apostoles', 'circulo_apostoles', 'borde_manto', 'borde_manto', 'borde_manto', 'esquina_testimonio', 'esquina_testimonio'],
        ['borde_manto', 'borde_manto', 'borde_manto', 'borde_manto', 'borde_manto', 'esquina_testimonio', 'esquina_testimonio'],
        ['borde_manto', 'borde_manto', 'borde_manto', 'borde_manto', 'esquina_testimonio', 'esquina_testimonio', 'esquina_testimonio'],
        ['borde_manto', 'borde_manto', 'borde_manto', 'esquina_testimonio', 'esquina_testimonio', 'esquina_testimonio', 'esquina_testimonio']
      ],
      blockedObjects: {
        '0,5': {
          emoji: '🧶',
          name: 'Orla de Lino y Flecos Azules',
          evidenceCode: 'EV-01',
          description: 'Borde del manto donde se concentró la fuerza sanadora al mero contacto de la fe.'
        },
        '2,1': {
          emoji: '📜',
          name: 'Prescripciones del Levítico',
          evidenceCode: 'EV-02',
          description: 'Leyes ceremoniales sobre flujos de sangre que apartaban a la mujer de la sociedad.'
        },
        '4,6': {
          emoji: '🏺',
          name: 'Frascos Vacíos de Médicos',
          evidenceCode: 'EV-03',
          description: 'Remedios costosos en los que la mujer había gastado toda su fortuna durante doce años.'
        },
        '6,2': {
          emoji: '⏳',
          name: 'Reloj de Arena de la Agonía',
          evidenceCode: 'EV-04',
          description: 'La prisa angustiosa de Jairo cuya hija de doce años yacía a punto de expirar.'
        }
      },
      suspects: [
        {
          id: 'J',
          name: 'Jesús',
          role: 'El Maestro Sanador',
          avatar: '🕊️',
          color: 'from-amber-600 to-amber-800',
          isMurderer: true,
          clueText: 'Se detuvo en seco diciendo: «¿Quién me ha tocado? Porque he sentido que una fuerza ha salido de mí».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_apretujado' },
            { tipo: 'filaObjeto', objeto: '0,5' }
          ]
        },
        {
          id: 'MH',
          name: 'Mujer Hemorroísa',
          role: 'Enferma de Fe Valiente',
          avatar: '🧕',
          color: 'from-purple-600 to-purple-800',
          isVictim: true,
          clueText: 'Tocó el borde por detrás pensando: «Si tocare tan solo su manto, quedaré sana».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_apretujado' },
            { tipo: 'esteDe', sospechoso: 'J' }
          ]
        },
        {
          id: 'P',
          name: 'Pedro',
          role: 'Apóstol Impulsivo',
          avatar: '🧔',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Objetó perplejo: «Maestro, la multitud te aprieta y te estruja, ¿y preguntas quién te ha tocado?».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'circulo_apostoles' },
            { tipo: 'filaObjeto', objeto: '2,1' }
          ]
        },
        {
          id: 'JR',
          name: 'Jairo',
          role: 'Jefe de la Sinagoga',
          avatar: '🕍',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Iba al frente guiando a Jesús desesperado por salvar la vida de su única hija.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'esquina_testimonio' },
            { tipo: 'norteDe', sospechoso: 'D' }
          ]
        },
        {
          id: 'D',
          name: 'Discípulo Anónimo',
          role: 'Compañero de Camino',
          avatar: '🧑',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Abría paso con dificultad entre la masa de vecinos que colmaba la rúa.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'borde_manto' },
            { tipo: 'filaObjeto', objeto: '4,6' }
          ]
        },
        {
          id: 'SJ',
          name: 'Sirviente de Jairo',
          role: 'Criado Mensajero',
          avatar: '🏃',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Llegaba corriendo desde la casa con la noticia: «Tu hija ha muerto; no molestes más al Maestro».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'esquina_testimonio' },
            { tipo: 'columnaObjeto', objeto: '4,6' }
          ]
        },
        {
          id: 'EM',
          name: 'Mujer de la Multitud',
          role: 'Testigo Callejera',
          avatar: '👵',
          color: 'from-rose-600 to-rose-800',
          clueText: 'Vio a la hemorroísa abrirse paso furtivamente agachándose entre las piernas del gentío.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'borde_manto' },
            { tipo: 'filaObjeto', objeto: '6,2' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Una gran multitud apretujaba al Maestro mientras se dirigía a la casa de un jefe de la sinagoga.',
          narrative: 'Jairo y los discípulos intentaban abrir brecha en medio del bullicio.',
          relatedSuspects: ['JR', 'J', 'D']
        },
        {
          id: 'c2',
          text: 'Una persona impura por la ley llevaba doce años sufriendo una enfermedad incurable.',
          narrative: 'La Mujer Hemorroísa vivía marginada socialmente por su padecimiento constante.',
          relatedSuspects: ['MH']
        },
        {
          id: 'c3',
          text: 'Esta persona pensó que bastaba con rozar el borde del manto del Maestro para quedar sana.',
          narrative: 'La fe silenciosa de la mujer la llevó a arrastrarse en pos de Jesús.',
          relatedSuspects: ['MH', 'J']
        },
        {
          id: 'c4',
          text: 'Al tocar el manto por detrás, la persona sintió inmediatamente que su enfermedad desaparecía.',
          narrative: 'El flujo de sangre cesó en el mismo instante del contacto furtivo.',
          relatedSuspects: ['MH']
        },
        {
          id: 'c5',
          text: 'El Maestro se detuvo bruscamente preguntando quién le había tocado, pues notó que una fuerza salía de él.',
          narrative: 'Jesús giró sobre sus pasos buscando con la mirada a la persona agraciada.',
          relatedSuspects: ['J', 'MH']
        },
        {
          id: 'c6',
          text: 'El discípulo principal y otro compañero le dijeron que era ilógico preguntar eso en medio de tantos empujones.',
          narrative: 'Pedro y el discípulo señalaban la aglomeración de la gente como respuesta.',
          relatedSuspects: ['P', 'D', 'J']
        },
        {
          id: 'c7',
          text: 'La persona culpable del toque se postró temblando, confesó la verdad y recibió la paz.',
          narrative: 'La mujer, la comitiva y la multitud escucharon la bendición de salvación de labios de Jesús.',
          relatedSuspects: ['MH', 'J', 'SJ', 'EM']
        }
      ],
      solution: {
        J: { row: 0, col: 3 },
        MH: { row: 1, col: 4 },
        P: { row: 2, col: 0 },
        JR: { row: 3, col: 5 },
        D: { row: 4, col: 2 },
        SJ: { row: 5, col: 6 },
        EM: { row: 6, col: 1 }
      }
    }
  },

  // RETO 006-NT: El Aroma de la Pobreza Fingida
  {
    id: '006-NT',
    nombre: 'El Aroma de la Pobreza Fingida',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Juan 12, 1-8',
      textoBiblicoClave: 'Pero Judas Iscariote (...) dijo: «¿Por qué no se ha vendido este perfume por trescientos denarios para dárselos a los pobres?». Dijo esto, no porque le importaran los pobres, sino porque era ladrón...',
      contextoTeologico: 'El texto contrapone la gratuidad del amor sincero (María) frente al utilitarismo y la hipocresía económica (Judas). La teología contemporánea (Fe Adulta) subraya que la caridad verdadera no se opone a la belleza del gesto amoroso ni a la entrega desinteresada a Cristo.',
      solucionExplicacion: 'María de Betania ungió los pies de Jesús con nardo puro. Judas Iscariote criticó el gasto fingiendo preocupación por los pobres, pero en realidad era un ladrón. Jesús defendió la acción como un homenaje profético de amor previo a su muerte inminente.',
      storyIntro: 'En medio de una cena amistosa, una mujer gasta una fortuna derramando perfume sobre los pies de un invitado. Mientras uno de los apóstoles apela hipócritamente a la justicia social, el invitado revela el oscuro y trágico propósito del gesto.',
      epilogue: '¡Ungido para la sepultura! La casa entera quedó perfumada con el olor del nardo genuino. Jesús elogió la generosidad de María: «A los pobres siempre los tendréis con vosotros, pero a mí no siempre me tendréis».',
      subtitle: 'Descubrimiento de acciones ocultas · Juan 12 · 7x7',
      badge: 'EL AROMA DE LA POBREZA FINGIDA · 7x7',
      victimId: 'MB',
      murdererId: 'JI',
      rooms: {
        mesa_banquete: {
          id: 'mesa_banquete',
          name: 'Mesa Principal de los Huéspedes',
          shortName: 'Mesa Banquete',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Triclinio donde Jesús y Lázaro compartían el pan seis días antes de la Pascua.'
        },
        pies_maestro: {
          id: 'pies_maestro',
          name: 'Alfombra de la Unción con Nardo',
          shortName: 'Alfombra Nardo',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Lugar donde el frasco de alabastro fue quebrado y el perfume secado con cabellos.'
        },
        cocina_servicio: {
          id: 'cocina_servicio',
          name: 'Cocina del Afán de Marta',
          shortName: 'Cocina Marta',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Estancia culinaria desde donde Marta servía con diligencia a todos los comensales.'
        },
        esquina_bolsa: {
          id: 'esquina_bolsa',
          name: 'Rincón de la Bolsa Común',
          shortName: 'Rincón Bolsa',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Puesto sombrío donde Judas custodiaba el cepillo del grupo sustrayendo de lo que se depositaba.'
        },
        patio_exterior: {
          id: 'patio_exterior',
          name: 'Patio Abierto de Betania',
          shortName: 'Patio Betania',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Entrada donde los curiosos se congregaban atraídos tanto por Jesús como por el resucitado Lázaro.'
        }
      },
      cellRooms: [
        ['cocina_servicio', 'cocina_servicio', 'mesa_banquete', 'mesa_banquete', 'mesa_banquete', 'patio_exterior', 'patio_exterior'],
        ['cocina_servicio', 'mesa_banquete', 'mesa_banquete', 'mesa_banquete', 'mesa_banquete', 'patio_exterior', 'patio_exterior'],
        ['cocina_servicio', 'mesa_banquete', 'pies_maestro', 'pies_maestro', 'mesa_banquete', 'patio_exterior', 'patio_exterior'],
        ['esquina_bolsa', 'esquina_bolsa', 'pies_maestro', 'pies_maestro', 'pies_maestro', 'patio_exterior', 'patio_exterior'],
        ['esquina_bolsa', 'esquina_bolsa', 'esquina_bolsa', 'pies_maestro', 'pies_maestro', 'patio_exterior', 'patio_exterior'],
        ['esquina_bolsa', 'esquina_bolsa', 'esquina_bolsa', 'patio_exterior', 'patio_exterior', 'patio_exterior', 'patio_exterior'],
        ['patio_exterior', 'patio_exterior', 'patio_exterior', 'patio_exterior', 'patio_exterior', 'patio_exterior', 'patio_exterior']
      ],
      blockedObjects: {
        '0,4': {
          emoji: '🏺',
          name: 'Frasco Roto de Alabastro',
          evidenceCode: 'EV-01',
          description: 'Recipiente de una libra de perfume legítimo de nardo de altísimo precio.'
        },
        '2,1': {
          emoji: '👜',
          name: 'Bolsa de Caudales Hurtados',
          evidenceCode: 'EV-02',
          description: 'Caja del dinero administrada fraudulentamente por Judas Iscariote.'
        },
        '4,5': {
          emoji: '🥖',
          name: 'Bandeja de Panes de Marta',
          evidenceCode: 'EV-03',
          description: 'Servicio solícito con el que Marta agasajaba a los invitados en Betania.'
        },
        '6,0': {
          emoji: '⚰️',
          name: 'Sudario Doblado de Lázaro',
          evidenceCode: 'EV-04',
          description: 'Vendas funerarias que recordaban la reciente resurrección del hermano de la casa.'
        }
      },
      suspects: [
        {
          id: 'J',
          name: 'Jesús',
          role: 'El Ungido de Dios',
          avatar: '🕊️',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Aceptó la unción como anticipo del embalsamamiento de su cuerpo para el sepulcro.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'pies_maestro' },
            { tipo: 'esteDe', sospechoso: 'JI' },
            { tipo: 'filaObjeto', objeto: '2,1' }
          ]
        },
        {
          id: 'MB',
          name: 'María de Betania',
          role: 'Hermana Devota',
          avatar: '🧴',
          color: 'from-rose-600 to-rose-800',
          isVictim: true,
          clueText: 'Derramó el perfume carísimo de trescientos denarios y secó los pies con sus cabellos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'mesa_banquete' },
            { tipo: 'columnaObjeto', objeto: '2,1' }
          ]
        },
        {
          id: 'M',
          name: 'Marta',
          role: 'Hermana Servicial',
          avatar: '👩‍🍳',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Atendía las mesas preparando viandas para agasajar al Maestro y a los discípulos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patio_exterior' },
            { tipo: 'norteDe', sospechoso: 'L' }
          ]
        },
        {
          id: 'JI',
          name: 'Judas Iscariote',
          role: 'Tesorero Traidor',
          avatar: '💰',
          color: 'from-red-600 to-red-800',
          isMurderer: true,
          clueText: 'Criticó el derroche fingiendo interés por los pobres, pues robaba de la bolsa común.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'mesa_banquete' }
          ]
        },
        {
          id: 'L',
          name: 'Lázaro',
          role: 'Hermano Resucitado',
          avatar: '🧔',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Reclinado a la mesa vivo después de haber pasado cuatro días en el sepulcro.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'esquina_bolsa' },
            { tipo: 'filaObjeto', objeto: '4,5' }
          ]
        },
        {
          id: 'SL',
          name: 'Simón el Anfitrión',
          role: 'Dueño de Casa',
          avatar: '🏠',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Ofreció la cena de honor en Betania para celebrar los prodigios de Jesús.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patio_exterior' },
            { tipo: 'junto_objeto', objeto: '4,5' }
          ]
        },
        {
          id: 'DC',
          name: 'Discípulo Comensal',
          role: 'Apóstol Invitado',
          avatar: '🧑',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Maravillado por la fragancia intensa que colmó cada rincón de la estancia.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patio_exterior' },
            { tipo: 'columnaObjeto', objeto: '0,4' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Durante una cena a seis días de la Pascua, una mujer tomó una libra de un perfume carísimo de nardo puro.',
          narrative: 'María sacó el frasco guardado para una ocasión única y solemne.',
          relatedSuspects: ['MB', 'J']
        },
        {
          id: 'c2',
          text: 'La mujer rompió el frasco, ungió los pies del Maestro y los secó con sus propios cabellos.',
          narrative: 'El gesto de amor desbordado dejó a todos en silencio alrededor del triclinio.',
          relatedSuspects: ['MB', 'J']
        },
        {
          id: 'c3',
          text: 'Toda la casa se llenó del intenso aroma del perfume derramado.',
          narrative: 'Marta en la cocina y los comensales respiraron el aroma balsámico.',
          relatedSuspects: ['M', 'DC', 'SL']
        },
        {
          id: 'c4',
          text: 'El tesorero del grupo protestó, argumentando que el perfume debió venderse por trescientos denarios para los pobres.',
          narrative: 'Judas levantó la voz censurando con aspereza la devoción de María.',
          relatedSuspects: ['JI', 'MB']
        },
        {
          id: 'c5',
          text: 'El verdadero motivo del tesorero no era la caridad, sino que robaba de la bolsa común.',
          narrative: 'La codicia de Judas ensombrecía el ambiente festivo de la reunión.',
          relatedSuspects: ['JI']
        },
        {
          id: 'c6',
          text: 'El hermano de la mujer, que había sido resucitado recientemente, estaba sentado a la mesa como invitado.',
          narrative: 'Lázaro compartía el banquete como prueba viviente del poder sobre la muerte.',
          relatedSuspects: ['L', 'SL', 'J']
        },
        {
          id: 'c7',
          text: 'El Maestro defendió a la mujer, afirmando que había anticipado la unción de su cuerpo para la sepultura.',
          narrative: 'Jesús frenó el ataque de Judas vindicando el valor eterno del amor de María.',
          relatedSuspects: ['J', 'JI', 'MB']
        }
      ],
      solution: {
        J: { row: 2, col: 3 },
        MB: { row: 1, col: 1 },
        M: { row: 3, col: 6 },
        JI: { row: 0, col: 2 },
        L: { row: 4, col: 0 },
        SL: { row: 5, col: 5 },
        DC: { row: 6, col: 4 }
      }
    }
  },

  // RETO 010-NT: El Soborno del Sepulcro
  {
    id: '010-NT',
    nombre: 'El Soborno del Sepulcro',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Mateo 28, 1-15',
      textoBiblicoClave: 'Ellos se reunieron con los ancianos y, después de deliberar, dieron una gran suma de dinero a los soldados con este encargo: «Decid que sus discípulos fueron de noche y robaron el cuerpo mientras vosotros dormíais».',
      contextoTeologico: 'El evangelio de Mateo desmonta una de las primeras polémicas anticristianas (el supuesto robo del cadáver). Teológicamente, ilustra cómo el sistema corrupto intenta silenciar el evento de la Resurrección mediante el soborno y la desinformación, enfrentando la Verdad con la manipulación del poder.',
      solucionExplicacion: 'Tras la resurrección de Jesús, el Sanedrín sobornó a los soldados romanos que custodiaban el sepulcro. Les pagaron para que difundieran la mentira de que los discípulos habían robado el cuerpo mientras ellos dormían, encubriendo así el milagro.',
      storyIntro: 'La máxima autoridad política y religiosa soborna a un escuadrón militar de élite para que admitan haberse quedado dormidos en su puesto de guardia. Todo para ocultar un suceso inexplicable frente a una tumba vacía.',
      epilogue: '¡«No está aquí, ha resucitado como dijo»! Ni el sello de piedra, ni la guardia romana, ni el dinero del Sanedrín pudieron frenar la proclamación del triunfo de la vida sobre la muerte en el huerto del sepulcro.',
      subtitle: 'Descubrimiento de acciones ocultas · Mateo 28 · 7x7',
      badge: 'EL SOBORNO DEL SEPULCRO · 7x7',
      victimId: 'MM',
      murdererId: 'CF',
      rooms: {
        huerto_sepulcro: {
          id: 'huerto_sepulcro',
          name: 'Huerto de la Tumba Tallada en Roca',
          shortName: 'Huerto Tumba',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Jardín de José de Arimatea donde la gran piedra redonda fue rodada de la entrada.'
        },
        puesto_guardia: {
          id: 'puesto_guardia',
          name: 'Puesto de Guardia Militar Romana',
          shortName: 'Puesto Guardia',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Campamento de vigilia donde los soldados cayeron como muertos por el fulgor angélico.'
        },
        sanedrin_reunion: {
          id: 'sanedrin_reunion',
          name: 'Cámara Secreta del Sanedrín',
          shortName: 'Cámara Sanedrín',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Sala capitular donde los sacerdotes idearon el encubrimiento y repartieron las monedas de plata.'
        },
        sendero_magdalena: {
          id: 'sendero_magdalena',
          name: 'Camino del Alba y Aparición',
          shortName: 'Camino Alba',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Senda por donde corrió María Magdalena llena de gozo tras encontrar el sepulcro abierto.'
        },
        calzadas_rumores: {
          id: 'calzadas_rumores',
          name: 'Plazas Públicas de Jerusalén',
          shortName: 'Plazas Jerusalén',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Calles por donde los soldados difundieron la falsa historia del robo nocturno del cadáver.'
        }
      },
      cellRooms: [
        ['huerto_sepulcro', 'huerto_sepulcro', 'huerto_sepulcro', 'puesto_guardia', 'puesto_guardia', 'puesto_guardia', 'puesto_guardia'],
        ['huerto_sepulcro', 'huerto_sepulcro', 'huerto_sepulcro', 'puesto_guardia', 'puesto_guardia', 'puesto_guardia', 'puesto_guardia'],
        ['sendero_magdalena', 'sendero_magdalena', 'huerto_sepulcro', 'huerto_sepulcro', 'calzadas_rumores', 'calzadas_rumores', 'calzadas_rumores'],
        ['sendero_magdalena', 'sendero_magdalena', 'sanedrin_reunion', 'sanedrin_reunion', 'calzadas_rumores', 'calzadas_rumores', 'calzadas_rumores'],
        ['sendero_magdalena', 'sanedrin_reunion', 'sanedrin_reunion', 'sanedrin_reunion', 'sanedrin_reunion', 'calzadas_rumores', 'calzadas_rumores'],
        ['sanedrin_reunion', 'sanedrin_reunion', 'sanedrin_reunion', 'sanedrin_reunion', 'sanedrin_reunion', 'calzadas_rumores', 'calzadas_rumores'],
        ['sanedrin_reunion', 'sanedrin_reunion', 'sanedrin_reunion', 'sanedrin_reunion', 'sanedrin_reunion', 'calzadas_rumores', 'calzadas_rumores']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '🪨',
          name: 'Piedra Rodada y Sello Quebrantado',
          evidenceCode: 'EV-01',
          description: 'Enorme losa que cerraba el sepulcro apartada sin intervención humana.'
        },
        '2,3': {
          emoji: '🧖',
          name: 'Lienzos Mortuorios Enrollados',
          evidenceCode: 'EV-02',
          description: 'Sudario y vendas dejados pulcramente en su sitio en la peña vacía.'
        },
        '4,0': {
          emoji: '💰',
          name: 'Bolsa de Plata del Soborno',
          evidenceCode: 'EV-03',
          description: 'Suma cuantiosa pagada a la guardia romana para pactar la mentira.'
        },
        '6,5': {
          emoji: '📜',
          name: 'Pacto de Inmunidad con Pilato',
          evidenceCode: 'EV-04',
          description: 'Promesa del Sanedrín de calmar al gobernador si la noticia del sueño llegaba a sus oídos.'
        }
      },
      suspects: [
        {
          id: 'J',
          name: 'Jesús Resucitado',
          role: 'El Vencedor de la Muerte',
          avatar: '🌅',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Apareció vivo a las mujeres al amanecer diciendo: «Alegraos; no tengáis miedo».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puesto_guardia' },
            { tipo: 'oesteDe', sospechoso: 'AN' }
          ]
        },
        {
          id: 'MM',
          name: 'María Magdalena',
          role: 'Apóstol de los Apóstoles',
          avatar: '🧕',
          color: 'from-rose-600 to-rose-800',
          isVictim: true,
          clueText: 'Llegó al sepulcro de madrugada con aromas y vio la piedra corrida.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'huerto_sepulcro' },
            { tipo: 'columnaObjeto', objeto: '0,1' }
          ]
        },
        {
          id: 'G1',
          name: 'Guardia Romano Principal',
          role: 'Centinela Sobornado',
          avatar: '🛡️',
          color: 'from-red-600 to-red-800',
          clueText: 'Se desplomó de pánico ante el temblor y luego aceptó el soborno para difundir el engaño.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'calzadas_rumores' },
            { tipo: 'columnaObjeto', objeto: '6,5' }
          ]
        },
        {
          id: 'CF',
          name: 'Caifás',
          role: 'Sumo Sacerdote',
          avatar: '🕍',
          color: 'from-purple-600 to-purple-800',
          isMurderer: true,
          clueText: 'Convocó la sesión de urgencia del Sanedrín para comprar el silencio militar.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'huerto_sepulcro' }
          ]
        },
        {
          id: 'AN',
          name: 'Anciano del Sanedrín',
          role: 'Magistrado Cómplice',
          avatar: '📜',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Redactó la consigna: «Decid que vinieron sus discípulos de noche y se lo llevaron».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'sanedrin_reunion' },
            { tipo: 'norteDe', sospechoso: 'G2' }
          ]
        },
        {
          id: 'G2',
          name: 'Segundo Guardia Romano',
          role: 'Soldado Cómplice',
          avatar: '⚔️',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Repitió por los campamentos la falsa versión a cambio de su parte del botín.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'calzadas_rumores' }
          ]
        },
        {
          id: 'AG',
          name: 'Ángel del Señor',
          role: 'Heraldo Celestial',
          avatar: '⚡',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Descendió como un relámpago con vestiduras blancas como la nieve y removió la piedra.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'sanedrin_reunion' },
            { tipo: 'filaObjeto', objeto: '6,5' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Una tumba fue asegurada con una gran piedra y custodiada por soldados para evitar el robo de un cadáver.',
          narrative: 'Los guardias romanos montaban guardia estricta sellando el acceso a la cueva.',
          relatedSuspects: ['G1', 'G2', 'CF']
        },
        {
          id: 'c2',
          text: 'Un violento terremoto sacudió el lugar mientras un ser resplandeciente bajaba del cielo y apartaba la piedra.',
          narrative: 'El Ángel del Señor desbarató las defensas humanas en un instante.',
          relatedSuspects: ['AG', 'G1', 'G2']
        },
        {
          id: 'c3',
          text: 'Los custodios de la tumba quedaron paralizados de terror, cayendo al suelo como muertos.',
          narrative: 'Los soldados temblaron y quedaron sin sentido ante el fulgor celestial.',
          relatedSuspects: ['G1', 'G2', 'AG']
        },
        {
          id: 'c4',
          text: 'Al recuperarse, los custodios corrieron a la ciudad para informar a los sumos sacerdotes de lo ocurrido.',
          narrative: 'Los guardias fugitivos relataron a Caifás el misterio del sepulcro vacío.',
          relatedSuspects: ['G1', 'CF']
        },
        {
          id: 'c5',
          text: 'Las autoridades religiosas, temiendo que se supiera la verdad, entregaron una gran suma de dinero a los custodios.',
          narrative: 'Caifás y el Anciano del Sanedrín sellaron el soborno en metálico.',
          relatedSuspects: ['CF', 'AN', 'G1', 'G2']
        },
        {
          id: 'c6',
          text: 'A cambio del dinero, los soldados debían difundir el rumor de que los discípulos robaron el cuerpo de noche.',
          narrative: 'El rumor comprado fue propagado para tapar el impacto de la resurrección.',
          relatedSuspects: ['G1', 'G2', 'AN']
        },
        {
          id: 'c7',
          text: 'El cadáver nunca fue encontrado porque el sepultado había vuelto a la vida.',
          narrative: 'María Magdalena se encontró cara a cara con Jesús resucitado en el huerto.',
          relatedSuspects: ['J', 'MM']
        }
      ],
      solution: {
        J: { row: 0, col: 3 },
        MM: { row: 1, col: 1 },
        G1: { row: 3, col: 5 },
        CF: { row: 2, col: 2 },
        AN: { row: 4, col: 4 },
        G2: { row: 5, col: 6 },
        AG: { row: 6, col: 0 }
      }
    }
  }
];
