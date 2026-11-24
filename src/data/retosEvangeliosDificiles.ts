import { Reto } from '../types';

/**
 * NUEVOS RETOS BÍBLICOS - DIFICULTAD DIFÍCIL (9x9 - 81 CELDAS)
 * Ciclo de los Evangelios / Nuevo Testamento.
 */
export const RETOS_EVANGELIOS_DIFICILES: Reto[] = [
  // RETO 004-NT: La Señal del Huerto
  {
    id: '004-NT',
    nombre: 'La Señal del Huerto',
    datos_juego: {
      Tamano_Cuadricula: '9x9',
      gridSize: 9,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Mateo 26, 47-56',
      textoBiblicoClave: 'El traidor les había dado esta señal: «Aquel a quien yo dé un beso, ése es; prendedlo». En seguida se acercó a Jesús y le dijo: «¡Salve, Maestro!», y lo besó.',
      contextoTeologico: 'Muestra el profundo contraste entre la violencia institucional, la traición interesada y la respuesta pacífica de Jesús. El Magisterio destaca que la sumisión voluntaria de Cristo desbarata la lógica de la fuerza humana (la espada de Pedro) para instaurar un reino espiritual.',
      solucionExplicacion: 'Judas pactó con los sacerdotes entregar a Jesús mediante un beso como señal. Al realizar la traición en el huerto de Getsemaní, Pedro intentó defender a Jesús cortando la oreja a Malco, pero Jesús sanó al siervo y aceptó su arresto pacíficamente.',
      storyIntro: 'Una fuerza armada entra sigilosamente en un huerto de olivos en plena noche. Para no equivocarse de objetivo en la oscuridad, utilizan un pacto secreto basado en el más íntimo de los gestos de afecto.',
      epilogue: '¡«Guarda tu espada en su sitio, pues quien a hierro mata a hierro muere»! Jesús sanó la oreja de Malco y se entregó libremente para el cumplimiento de las Escrituras mientras los discípulos huían despavoridos entre los olivares.',
      subtitle: 'Descubrimiento de acciones ocultas · Mateo 26 · 9x9',
      badge: 'LA SEÑAL DEL HUERTO · 9x9',
      victimId: 'J',
      murdererId: 'JI',
      rooms: {
        huerto_olivos: {
          id: 'huerto_olivos',
          name: 'Huerto de Getsemaní y Prensa de Aceite',
          shortName: 'Huerto Getsemaní',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Olivares centenarios al pie del torrente Cedrón donde Jesús oró en su agonía nocturna.'
        },
        lugar_oracion: {
          id: 'lugar_oracion',
          name: 'Roca de la Agonía del Maestro',
          shortName: 'Roca Agonía',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Peña solitaria a un tiro de piedra donde cayó rostro en tierra con sudor como gotas de sangre.'
        },
        camino_antorchas: {
          id: 'camino_antorchas',
          name: 'Senda de Antorchas y Garrotes',
          shortName: 'Senda Antorchas',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Ruta nocturna por donde avanzó la tropa enviada por los príncipes de los sacerdotes.'
        },
        palacio_caifas: {
          id: 'palacio_caifas',
          name: 'Tribunal y Palacio de Caifás',
          shortName: 'Palacio Caifás',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Sede del sumo sacerdocio donde se entregaron las treinta monedas y se preparó el juicio nocturno.'
        },
        remanso_cedron: {
          id: 'remanso_cedron',
          name: 'Vado y Puente del Torrente Cedrón',
          shortName: 'Vado Cedrón',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Paso de agua sombrío entre las murallas de Jerusalén y las laderas del monte de los Olivos.'
        }
      },
      cellRooms: [
        ['palacio_caifas', 'palacio_caifas', 'palacio_caifas', 'palacio_caifas', 'remanso_cedron', 'remanso_cedron', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos'],
        ['palacio_caifas', 'palacio_caifas', 'palacio_caifas', 'remanso_cedron', 'remanso_cedron', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos'],
        ['camino_antorchas', 'camino_antorchas', 'remanso_cedron', 'remanso_cedron', 'huerto_olivos', 'huerto_olivos', 'lugar_oracion', 'lugar_oracion', 'huerto_olivos'],
        ['camino_antorchas', 'camino_antorchas', 'camino_antorchas', 'huerto_olivos', 'huerto_olivos', 'lugar_oracion', 'lugar_oracion', 'lugar_oracion', 'huerto_olivos'],
        ['camino_antorchas', 'camino_antorchas', 'camino_antorchas', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'lugar_oracion', 'huerto_olivos', 'huerto_olivos'],
        ['camino_antorchas', 'camino_antorchas', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos'],
        ['camino_antorchas', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos'],
        ['huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos'],
        ['huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos', 'huerto_olivos']
      ],
      blockedObjects: {
        '0,2': {
          emoji: '💰',
          name: 'Treinta Monedas de Plata',
          evidenceCode: 'EV-01',
          description: 'Precio de siervo acordado en el Sanedrín para entregar a Jesús de noche.'
        },
        '2,7': {
          emoji: '🍷',
          name: 'Cáliz Amargo de la Agonía',
          evidenceCode: 'EV-02',
          description: 'Símbolo de la voluntad del Padre aceptada por Cristo en Getsemaní.'
        },
        '4,1': {
          emoji: '🔥',
          name: 'Antorchas y Faroles del Asalto',
          evidenceCode: 'EV-03',
          description: 'Luminarias con las que la soldadesca penetró la espesura de los olivos.'
        },
        '6,3': {
          emoji: '🗡️',
          name: 'Espada Desenvainada de Pedro',
          evidenceCode: 'EV-04',
          description: 'Arma corta con la que el apóstol cercenó la oreja derecha del siervo Malco.'
        },
        '8,8': {
          emoji: '👂',
          name: 'Oreja Sanada por el Toque Divino',
          evidenceCode: 'EV-05',
          description: 'Milagro final de misericordia realizado por Jesús antes de poner sus manos en las sogas.'
        }
      },
      suspects: [
        {
          id: 'J',
          name: 'Jesús',
          role: 'El Maestro Apresado',
          avatar: '🕊️',
          color: 'from-amber-600 to-amber-800',
          isVictim: true,
          clueText: 'Dijo al traidor: «Amigo, ¿a qué vienes? ¿Con un beso entregas al Hijo del Hombre?».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'huerto_olivos' }
          ]
        },
        {
          id: 'JI',
          name: 'Judas Iscariote',
          role: 'El Apóstol Traidor',
          avatar: '🪙',
          color: 'from-red-600 to-red-800',
          isMurderer: true,
          clueText: 'Acordó la seña convenida: «Al que yo bese, ése es; prendedle con seguridad».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'huerto_olivos' },
            { tipo: 'oesteDe', sospechoso: 'OF' }
          ]
        },
        {
          id: 'CF',
          name: 'Caifás',
          role: 'Sumo Sacerdote',
          avatar: '🕍',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Aguardaba en la senda de las antorchas a que la cohorte trajera al prisionero atado sin alboroto popular.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_antorchas' },
            { tipo: 'columnaObjeto', objeto: '0,2' }
          ]
        },
        {
          id: 'P',
          name: 'Pedro',
          role: 'Discípulo Defensor',
          avatar: '⚔️',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Desenvainó su espada e hirió a Malco antes de recibir la reprensión de Jesús.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'lugar_oracion' },
            { tipo: 'columnaObjeto', objeto: '2,7' }
          ]
        },
        {
          id: 'M',
          name: 'Malco',
          role: 'Siervo del Sumo Sacerdote',
          avatar: '🤕',
          color: 'from-rose-600 to-rose-800',
          clueText: 'Sufrió la mutilación de su oreja derecha y fue restaurado al instante por el toque del Señor.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'lugar_oracion' }
          ]
        },
        {
          id: 'GT',
          name: 'Guardia del Templo',
          role: 'Oficial Armado',
          avatar: '🛡️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Echó mano a Jesús y le sujetó con cuerdas tras la señal del beso de Judas.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_antorchas' },
            { tipo: 'columnaObjeto', objeto: '4,1' }
          ]
        },
        {
          id: 'JN',
          name: 'Juan Apóstol',
          role: 'Discípulo Amado',
          avatar: '🧑',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Acompañó a Jesús aquella noche y huyó junto a los demás cuando fue rodeado.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_antorchas' }
          ]
        },
        {
          id: 'ST',
          name: 'Santiago Apóstol',
          role: 'Hijo del Trueno',
          avatar: '🧔',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Despertado del sueño en tres ocasiones durante la dolorosa agonía de Getsemaní.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'remanso_cedron' },
            { tipo: 'columnaObjeto', objeto: '6,3' }
          ]
        },
        {
          id: 'OF',
          name: 'Oficial del Sanedrín',
          role: 'Escriba Delegado',
          avatar: '📜',
          color: 'from-orange-600 to-orange-800',
          clueText: 'Supervisó que el arresto se realizara al amparo de las sombras de la noche.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'remanso_cedron' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Las autoridades religiosas buscaban arrestar al Maestro de noche para evitar un motín del pueblo.',
          narrative: 'Caifás y el oficial del Sanedrín planearon la captura en la penumbra.',
          relatedSuspects: ['CF', 'OF']
        },
        {
          id: 'c2',
          text: 'Uno de los doce íntimos del Maestro acudió a los sumos sacerdotes ofreciéndose a entregarlo por dinero.',
          narrative: 'Judas Iscariote selló la traición recibiendo las treinta monedas de plata.',
          relatedSuspects: ['JI', 'CF']
        },
        {
          id: 'c3',
          text: 'El traidor acordó una señal: besaría al Maestro para que los guardias supieran a quién arrestar en la oscuridad.',
          narrative: 'La seña perversa fue comunicada a la guardia del templo y a Malco.',
          relatedSuspects: ['JI', 'GT', 'M']
        },
        {
          id: 'c4',
          text: 'En el huerto, el traidor se acercó al Maestro, lo saludó y le dio el beso acordado.',
          narrative: 'Judas se adelantó a la tropa diciendo «¡Salve, Rabí!» en presencia de Juan y Santiago.',
          relatedSuspects: ['JI', 'J', 'JN', 'ST']
        },
        {
          id: 'c5',
          text: 'Al ser arrestado el Maestro, el discípulo más impulsivo sacó una espada e intentó defenderlo.',
          narrative: 'Pedro reaccionó con violencia al ver a los guardias poner manos sobre Jesús.',
          relatedSuspects: ['P', 'J', 'GT']
        },
        {
          id: 'c6',
          text: 'La espada cortó la oreja derecha del siervo del sumo sacerdote en medio de la confusión.',
          narrative: 'El golpe de Pedro alcanzó de lleno al siervo Malco junto a los olivos.',
          relatedSuspects: ['P', 'M']
        },
        {
          id: 'c7',
          text: 'El Maestro detuvo la violencia curando al siervo y se entregó voluntariamente a los guardias.',
          narrative: 'Jesús tocó la oreja de Malco devolviéndosela sana y fue atado por la comitiva.',
          relatedSuspects: ['J', 'M', 'GT', 'OF']
        }
      ],
      solution: {
        J: { row: 7, col: 8 },
        JI: { row: 8, col: 4 },
        CF: { row: 4, col: 2 },
        P: { row: 3, col: 7 },
        M: { row: 2, col: 6 },
        GT: { row: 5, col: 1 },
        JN: { row: 6, col: 0 },
        ST: { row: 1, col: 3 },
        OF: { row: 0, col: 5 }
      }
    }
  },

  // RETO 007-NT: El Llanto de Ramá
  {
    id: '007-NT',
    nombre: 'El Llanto de Ramá',
    datos_juego: {
      Tamano_Cuadricula: '9x9',
      gridSize: 9,
      categoria: 'Asesinatos o crímenes',
      citasBiblicas: 'Mateo 2, 13-18',
      textoBiblicoClave: 'Al verse burlado por los magos, Herodes se enfureció terriblemente y mandó matar a todos los niños de Belén y de toda su comarca, de dos años para abajo...',
      contextoTeologico: 'Este sangriento episodio enmarca la vida de Jesús en la cruda realidad política de la época. El Vaticano ha conectado históricamente la huida a Egipto con el drama contemporáneo de los refugiados, mostrando un Dios solidario con las víctimas del terrorismo de Estado.',
      solucionExplicacion: 'Herodes el Grande, temiendo perder el trono ante el nacimiento de Jesús, ordenó matar a todos los niños menores de dos años en Belén. San José, advertido en sueños, logró salvar al niño Jesús y a María huyendo como refugiados hacia Egipto.',
      storyIntro: 'El anuncio del nacimiento de un rey no trae paz, sino el terror del estado. La obsesión política por aferrarse al poder desata una matanza de inocentes, de la que solo una familia escapa gracias a un susurro en sueños.',
      epilogue: '¡«Voz en Ramá se oyó, llanto y gran lamento; Raquel que llora a sus hijos»! El tirano pereció consumido por sus crímenes mientras la Sagrada Familia hallaba amparo como refugiada en tierras del Nilo hasta que fue seguro volver.',
      subtitle: 'Asesinatos o crímenes · Mateo 2 · 9x9',
      badge: 'EL LLANTO DE RAMÁ · 9x9',
      victimId: 'JN',
      murdererId: 'HG',
      rooms: {
        palacio_herodes: {
          id: 'palacio_herodes',
          name: 'Fortaleza y Palacio de Herodes en Jerusalén',
          shortName: 'Palacio Herodes',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Sede regia donde el rey envejecido interrogó con falsedad a los sabios sobre la estrella naciente.'
        },
        portal_belen: {
          id: 'portal_belen',
          name: 'Casa y Pesebre de Belén de Judá',
          shortName: 'Casa Belén',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Hogar donde los sabios de oriente encontraron al Niño con María su madre y le ofrecieron oro, incienso y mirra.'
        },
        ruta_egipto: {
          id: 'ruta_egipto',
          name: 'Desierto del Sinaí y Ruta de Huida a Egipto',
          shortName: 'Ruta Egipto',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Camino nocturno por donde José guio el asno llevando a la madre y al niño hacia el refugio seguro.'
        },
        calles_belen: {
          id: 'calles_belen',
          name: 'Comarca y Calles de Belén Asoladas',
          shortName: 'Calles Belén',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Aldeas de Judea donde la soldadesca real ejecutó la orden implacable contra los infantes.'
        },
        oasis_oriente: {
          id: 'oasis_oriente',
          name: 'Ruta de Retorno de los Sabios por Otro Camino',
          shortName: 'Ruta Sabios',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Sendero apartado que tomaron los magos guiados por el aviso divino para no regresar a Jerusalén.'
        }
      },
      cellRooms: [
        ['palacio_herodes', 'palacio_herodes', 'palacio_herodes', 'palacio_herodes', 'palacio_herodes', 'oasis_oriente', 'oasis_oriente', 'oasis_oriente', 'oasis_oriente'],
        ['palacio_herodes', 'palacio_herodes', 'palacio_herodes', 'palacio_herodes', 'portal_belen', 'portal_belen', 'oasis_oriente', 'oasis_oriente', 'oasis_oriente'],
        ['calles_belen', 'calles_belen', 'calles_belen', 'portal_belen', 'portal_belen', 'portal_belen', 'portal_belen', 'oasis_oriente', 'oasis_oriente'],
        ['calles_belen', 'calles_belen', 'calles_belen', 'portal_belen', 'portal_belen', 'portal_belen', 'portal_belen', 'oasis_oriente', 'oasis_oriente'],
        ['calles_belen', 'calles_belen', 'calles_belen', 'calles_belen', 'portal_belen', 'portal_belen', 'portal_belen', 'oasis_oriente', 'oasis_oriente'],
        ['calles_belen', 'calles_belen', 'calles_belen', 'calles_belen', 'calles_belen', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto'],
        ['calles_belen', 'calles_belen', 'calles_belen', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto'],
        ['ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto'],
        ['ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto', 'ruta_egipto']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '👑',
          name: 'Decreto Sanguinario de Herodes',
          evidenceCode: 'EV-01',
          description: 'Orden firmada que ordenaba degollar a todo varón menor de dos años en Belén.'
        },
        '2,5': {
          emoji: '🎁',
          name: 'Cofres de Oro, Incienso y Mirra',
          evidenceCode: 'EV-02',
          description: 'Dones sagrados ofrecidos al Mesías rey por los sabios astrónomos de oriente.'
        },
        '4,1': {
          emoji: '🗡️',
          name: 'Espada de la Guardia de Judea',
          evidenceCode: 'EV-03',
          description: 'Acero mercenario empleado para asolar las aldeas de la comarca.'
        },
        '6,5': {
          emoji: '🫏',
          name: 'Albarda del Asno de San José',
          evidenceCode: 'EV-04',
          description: 'Montura humilde con la que la familia cruzó la frontera en el silencio de la noche.'
        },
        '8,8': {
          emoji: '⭐',
          name: 'Estrella Guía de Oriente',
          evidenceCode: 'EV-05',
          description: 'Astro celestial que condujo a los magos hasta el lugar exacto del alumbramiento.'
        }
      },
      suspects: [
        {
          id: 'HG',
          name: 'Herodes el Grande',
          role: 'Monarca Tiránico',
          avatar: '👑',
          color: 'from-red-600 to-red-800',
          isMurderer: true,
          clueText: 'Calculó con furia la fecha de la estrella y decretó el infanticidio para no perder su corona.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'portal_belen' },
            { tipo: 'oesteDe', sospechoso: 'JN' }
          ]
        },
        {
          id: 'JN',
          name: 'Jesús Niño',
          role: 'El Rey Recién Nacido',
          avatar: '👶',
          color: 'from-amber-600 to-amber-800',
          isVictim: true,
          clueText: 'Objetivo de la persecución del imperio, salvado gracias a la revelación angelical.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'portal_belen' },
            { tipo: 'filaObjeto', objeto: '2,5' }
          ]
        },
        {
          id: 'M',
          name: 'María',
          role: 'Madre Protectora',
          avatar: '🤱',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Abrazó a su hijo en el regazo durante la apresurada travesía hacia Egipto.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'ruta_egipto' },
            { tipo: 'filaObjeto', objeto: '6,5' }
          ]
        },
        {
          id: 'J',
          name: 'José',
          role: 'Padre Custodio',
          avatar: '🧔',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Despertó de noche tras oír al ángel en sueños, tomó al niño y a su madre y escapó al instante.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'ruta_egipto' },
            { tipo: 'norteDe', sospechoso: 'S3' }
          ]
        },
        {
          id: 'S1',
          name: 'Sabio Primero',
          role: 'Mago Portador de Oro',
          avatar: '🧙‍♂️',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Ofreció el oro regio al recién nacido y fue avisado en sueños de no volver ante Herodes.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'oasis_oriente' },
            { tipo: 'filaObjeto', objeto: '0,1' }
          ]
        },
        {
          id: 'S2',
          name: 'Sabio Segundo',
          role: 'Mago Portador de Incienso',
          avatar: '👳‍♂️',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Reconoció la divinidad del niño y regresó a su patria por una ruta secreta.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'ruta_egipto' },
            { tipo: 'columnaObjeto', objeto: '8,8' }
          ]
        },
        {
          id: 'S3',
          name: 'Sabio Tercero',
          role: 'Mago Portador de Mirra',
          avatar: '✨',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Entregó la mirra profética y burló la vigilancia de los espías de Jerusalén.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'ruta_egipto' },
            { tipo: 'columnaObjeto', objeto: '2,5' }
          ]
        },
        {
          id: 'CP',
          name: 'Capitán de Belén',
          role: 'Oficial Ejecutor',
          avatar: '🛡️',
          color: 'from-rose-600 to-rose-800',
          clueText: 'Comandó la incursión armada en los hogares de Belén cumpliendo la orden del rey.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'calles_belen' },
            { tipo: 'columnaObjeto', objeto: '0,1' }
          ]
        },
        {
          id: 'MB',
          name: 'Madre de Belén',
          role: 'Raquel que Llora',
          avatar: '😭',
          color: 'from-yellow-600 to-yellow-800',
          clueText: 'Lloró desconsolada la pérdida de su pequeño inocente sin querer ser consolada.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'calles_belen' },
            { tipo: 'esteDe', sospechoso: 'J' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Un monarca paranoico pidió a unos viajeros extranjeros que le informaran sobre la ubicación exacta de un nuevo rey niño.',
          narrative: 'Herodes convocó a los sabios de oriente en secreto con disimulo pérfido.',
          relatedSuspects: ['HG', 'S1', 'S2', 'S3']
        },
        {
          id: 'c2',
          text: 'Los viajeros encontraron al niño, pero fueron advertidos en sueños de no volver a palacio.',
          narrative: 'Los tres magos adoraron al niño y emprendieron el regreso por otro camino.',
          relatedSuspects: ['S1', 'S2', 'S3', 'JN', 'M']
        },
        {
          id: 'c3',
          text: 'El monarca, al verse burlado por los viajeros, enfureció y calculó la edad del niño según los datos que tenía.',
          narrative: 'Herodes ordenó la matanza furioso al ver que los sabios no regresaban.',
          relatedSuspects: ['HG', 'CP']
        },
        {
          id: 'c4',
          text: 'El padre del niño recibió un aviso angelical en sueños y huyó de noche con su familia hacia un país vecino.',
          narrative: 'José actuó inmediatamente protegiendo a María y al niño en la oscuridad.',
          relatedSuspects: ['J', 'M', 'JN']
        },
        {
          id: 'c5',
          text: 'El monarca ordenó ejecutar a todos los niños varones menores de dos años en una ciudad y sus alrededores.',
          narrative: 'El capitán de la guardia y sus soldados asolaron las casas de Belén.',
          relatedSuspects: ['CP', 'HG', 'MB']
        },
        {
          id: 'c6',
          text: 'La familia refugiada no regresó a su tierra hasta que recibieron la noticia de la muerte del monarca culpable.',
          narrative: 'José y María permanecieron en Egipto hasta el aviso del fin del tirano.',
          relatedSuspects: ['J', 'M', 'JN']
        },
        {
          id: 'c7',
          text: 'El llanto de las madres en la ciudad cumplió una antigua y dolorosa profecía de dolor irreparable.',
          narrative: 'El clamor desgarrador de las madres de Belén resonó por toda la Judea.',
          relatedSuspects: ['MB', 'CP']
        }
      ],
      solution: {
        HG: { row: 1, col: 4 },
        JN: { row: 2, col: 6 },
        M: { row: 6, col: 3 },
        J: { row: 7, col: 0 },
        S1: { row: 0, col: 7 },
        S2: { row: 5, col: 8 },
        S3: { row: 8, col: 5 },
        CP: { row: 3, col: 1 },
        MB: { row: 4, col: 2 }
      }
    }
  }
];
