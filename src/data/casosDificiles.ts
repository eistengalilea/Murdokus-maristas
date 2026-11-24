import { Reto } from '../types';

/**
 * CASOS BÍBLICOS DE DIFICULTAD DIFÍCIL (CUADRÍCULA 9x9 - 81 CELDAS)
 * Basados fielmente en los relatos del libro de Génesis.
 */
export const CASOS_DIFICILES: Reto[] = [
  // RETO 004: El Olor a Campo
  {
    id: '004',
    nombre: 'El Olor a Campo',
    datos_juego: {
      Tamano_Cuadricula: '9x9',
      gridSize: 9,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Génesis 27, 1-29',
      textoBiblicoClave: 'Jacob se acercó a su padre Isaac, que lo palpó y dijo: «La voz es de Jacob, pero las manos son de Esaú.»',
      contextoTeologico: 'La Biblia no moraliza el engaño ocultando las debilidades de los patriarcas. Teológicamente, subraya que la elección de Dios no sigue las reglas humanas del primogénito o del mérito (Fe Adulta), manifestando que la promesa divina se abre camino a través de la fragilidad humana.',
      solucionExplicacion: 'Rebeca y Jacob engañaron a Isaac. Jacob se puso las ropas de Esaú y pieles de cabrito en brazos y cuello para simular ser velludo. Isaac, ciego, bendijo a Jacob creyendo que era Esaú.',
      subtitle: 'Descubrimiento de acciones ocultas · Génesis 27 · 9x9',
      badge: 'EL OLOR A CAMPO · 9x9',
      victimId: 'I',
      murdererId: 'J',
      storyIntro: 'Un patriarca ciego decide dar la bendición principal a su primogénito. Sin embargo, mediante un disfraz olfativo y táctil, otro miembro de la familia usurpa el derecho divino ante las narices del anciano.',
      epilogue: '¡Usurpación pericial revelada! El guiso apetitoso, la fragancia campestre en las ropas de gala y las pieles lanudas de cabrito confundieron las manos trémulas de Isaac. La bendición irrevocable quedó transferida a Jacob.',
      rooms: {
        tienda_isaac: {
          id: 'tienda_isaac',
          name: 'Tienda Patriarcal de Isaac',
          shortName: 'T. Isaac',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Lecho del anciano ciego donde se consumó la bendición del rocío del cielo y la grosura de la tierra.'
        },
        cocina_rebeca: {
          id: 'cocina_rebeca',
          name: 'Cocina y Tienda de Rebeca',
          shortName: 'Cocina Rebeca',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Lugar donde la madre preparó a toda prisa los dos cabritos tiernos tal como a Isaac le gustaban.'
        },
        campo_caza: {
          id: 'campo_caza',
          name: 'Montes de Caza de Esaú',
          shortName: 'Montes Caza',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Estepa bravía donde el cazador velludo rastreaba una pieza de caza para su padre.'
        },
        redil_cabritos: {
          id: 'redil_cabritos',
          name: 'Redil de los Cabritos',
          shortName: 'Redil',
          bgColor: 'bg-yellow-100/70',
          borderColor: 'border-yellow-700/60',
          textColor: 'text-yellow-950',
          tagColor: 'bg-yellow-800 text-yellow-100',
          description: 'Majada de donde Jacob escogió rápidamente los dos mejores cabritos para el disfraz.'
        },
        tienda_esau: {
          id: 'tienda_esau',
          name: 'Tienda de Armas de Esaú',
          shortName: 'T. Esaú',
          bgColor: 'bg-orange-100/70',
          borderColor: 'border-orange-700/60',
          textColor: 'text-orange-950',
          tagColor: 'bg-orange-800 text-orange-100',
          description: 'Estancia donde se guardaban las ropas de fiesta perfumadas con el aroma agreste.'
        },
        tienda_judit: {
          id: 'tienda_judit',
          name: 'Tienda de las Esposas Hititas',
          shortName: 'T. Judit',
          bgColor: 'bg-rose-100/70',
          borderColor: 'border-rose-700/60',
          textColor: 'text-rose-950',
          tagColor: 'bg-rose-800 text-rose-100',
          description: 'Aposentos de Judit y Basemat, causa continua de amargura de espíritu para Rebeca.'
        },
        pozo_beerseba: {
          id: 'pozo_beerseba',
          name: 'Pozo Central de Beerseba',
          shortName: 'Pozo Beerseba',
          bgColor: 'bg-sky-100/70',
          borderColor: 'border-sky-700/60',
          textColor: 'text-sky-950',
          tagColor: 'bg-sky-800 text-sky-100',
          description: 'Abastecimiento de agua del campamento donde se congregaban las sirvientas.'
        },
        majada_rebanos: {
          id: 'majada_rebanos',
          name: 'Majada de Rebaños',
          shortName: 'Majada',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Ampliación de pastos vigilada por los pastores de confianza del clan.'
        },
        camino_haran: {
          id: 'camino_haran',
          name: 'Camino de Huida a Jarán',
          shortName: 'Camino Jarán',
          bgColor: 'bg-zinc-100/70',
          borderColor: 'border-zinc-700/60',
          textColor: 'text-zinc-950',
          tagColor: 'bg-zinc-800 text-zinc-100',
          description: 'Ruta septentrional por la que Jacob emprendería el destierro para esquivar la ira fraterna.'
        }
      },
      cellRooms: [
        ['tienda_isaac', 'tienda_isaac', 'cocina_rebeca', 'cocina_rebeca', 'tienda_esau', 'tienda_esau', 'campo_caza', 'campo_caza', 'campo_caza'],
        ['tienda_isaac', 'tienda_isaac', 'cocina_rebeca', 'cocina_rebeca', 'tienda_esau', 'tienda_esau', 'campo_caza', 'campo_caza', 'campo_caza'],
        ['tienda_isaac', 'tienda_isaac', 'cocina_rebeca', 'cocina_rebeca', 'redil_cabritos', 'redil_cabritos', 'campo_caza', 'campo_caza', 'campo_caza'],
        ['tienda_judit', 'tienda_judit', 'pozo_beerseba', 'pozo_beerseba', 'redil_cabritos', 'redil_cabritos', 'campo_caza', 'campo_caza', 'campo_caza'],
        ['tienda_judit', 'tienda_judit', 'pozo_beerseba', 'pozo_beerseba', 'redil_cabritos', 'redil_cabritos', 'majada_rebanos', 'majada_rebanos', 'majada_rebanos'],
        ['pozo_beerseba', 'pozo_beerseba', 'pozo_beerseba', 'pozo_beerseba', 'majada_rebanos', 'majada_rebanos', 'majada_rebanos', 'majada_rebanos', 'majada_rebanos'],
        ['pozo_beerseba', 'pozo_beerseba', 'pozo_beerseba', 'pozo_beerseba', 'majada_rebanos', 'majada_rebanos', 'camino_haran', 'camino_haran', 'camino_haran'],
        ['camino_haran', 'camino_haran', 'camino_haran', 'camino_haran', 'majada_rebanos', 'majada_rebanos', 'camino_haran', 'camino_haran', 'camino_haran'],
        ['camino_haran', 'camino_haran', 'camino_haran', 'camino_haran', 'camino_haran', 'camino_haran', 'camino_haran', 'camino_haran', 'camino_haran']
      ],
      blockedObjects: {
        '0,2': {
          emoji: '🍲',
          name: 'Plato de Guiso Sabroso',
          evidenceCode: 'EV-01',
          description: 'Guisado aromatizado cocinado por Rebeca imitando la caza montés.'
        },
        '2,6': {
          emoji: '🐐',
          name: 'Pieles de Cabrito',
          evidenceCode: 'EV-02',
          description: 'Vellón suave colocado sobre los brazos y la cerviz del hijo menor.'
        },
        '4,4': {
          emoji: '👘',
          name: 'Manto con Fragancia Campestre',
          evidenceCode: 'EV-03',
          description: 'Vestimenta de Esaú perfumada con el olor de los campos regados por Dios.'
        },
        '6,0': {
          emoji: '🏹',
          name: 'Arco y Aljaba',
          evidenceCode: 'EV-04',
          description: 'Aparejos de caza llevados por el primogénito a la espesura.'
        },
        '6,2': {
          emoji: '⛲',
          name: 'Pozo de Beerseba',
          evidenceCode: 'EV-05',
          description: 'Cisterna histórica donde juraron alianza los antepasados.'
        }
      },
      suspects: [
        {
          id: 'I',
          name: 'Isaac',
          role: 'Patriarca ciego / Víctima de la suplantación',
          avatar: '👴',
          color: 'from-amber-700 to-amber-900',
          isVictim: true,
          clueText: 'En su lecho en la Tienda Patriarcal.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_isaac' },
            { tipo: 'filaObjeto', objeto: '0,2' }
          ]
        },
        {
          id: 'J',
          name: 'Jacob',
          role: 'Hijo menor disfrazado / Usurpó la bendición',
          avatar: '🧔',
          color: 'from-red-600 to-red-800',
          isMurderer: true,
          clueText: 'En la Tienda de Isaac a solas con su padre palpándole las manos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_isaac' },
            { tipo: 'esteDe', sospechoso: 'I' }
          ]
        },
        {
          id: 'R',
          name: 'Rebeca',
          role: 'Madre estratega que urdió el plan',
          avatar: '👵',
          color: 'from-purple-600 to-purple-800',
          clueText: 'En su cocina dando las instrucciones definitivas.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'cocina_rebeca' },
            { tipo: 'filaObjeto', objeto: '2,6' }
          ]
        },
        {
          id: 'E',
          name: 'Esaú',
          role: 'Primogénito velludo cazando en el monte',
          avatar: '🏹',
          color: 'from-orange-700 to-orange-900',
          clueText: 'De vuelta junto al redil de los cabritos tras rastrear fieras por los montes.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'redil_cabritos' }
          ]
        },
        {
          id: 'U',
          name: 'Judit',
          role: 'Esposa hitita de Esaú',
          avatar: '🧕',
          color: 'from-rose-600 to-rose-800',
          clueText: 'Junto a la majada de los rebaños de Esaú.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'majada_rebanos' },
            { tipo: 'filaObjeto', objeto: '4,4' }
          ]
        },
        {
          id: 'B',
          name: 'Basemat',
          role: 'Segunda esposa de Esaú',
          avatar: '👩',
          color: 'from-teal-600 to-teal-800',
          clueText: 'Aguardando junto al pozo central de Beerseba.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'pozo_beerseba' },
            { tipo: 'columnaObjeto', objeto: '0,2' }
          ]
        },
        {
          id: 'C',
          name: 'Cocinera del clan',
          role: 'Sirvienta encargada de atizar el fuego',
          avatar: '🍲',
          color: 'from-yellow-600 to-yellow-800',
          clueText: 'En la majada, cargando el agua sacada del pozo central.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'majada_rebanos' },
            { tipo: 'columnaObjeto', objeto: '4,4' },
            { tipo: 'filaObjeto', objeto: '6,0' }
          ]
        },
        {
          id: 'P',
          name: 'Pastor de Isaac',
          role: 'Cuidador de los cabritos seleccionados',
          avatar: '🐑',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Guiando el ganado por el camino hacia Jarán.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_haran' },
            { tipo: 'columnaObjeto', objeto: '2,6' }
          ]
        },
        {
          id: 'K',
          name: 'Cazador de Esaú',
          role: 'Compañero de rastreo en el campo',
          avatar: '🦌',
          color: 'from-zinc-600 to-zinc-800',
          clueText: 'En el paso hacia el Camino de Jarán.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_haran' },
            { tipo: 'borde', lado: 'sur' },
            { tipo: 'borde', lado: 'este' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El anciano patriarca quería otorgar la bendición antes de morir a su primogénito.',
          narrative: 'Isaac descansa en su lecho en la Tienda Patriarcal.',
          relatedSuspects: ['I']
        },
        {
          id: 'c2',
          text: 'La madre escuchó el plan e intervino para favorecer a su hijo menor predilecto.',
          narrative: 'Rebeca trama el guiso en su cocina dando instrucciones.',
          relatedSuspects: ['R']
        },
        {
          id: 'c3',
          text: 'El hijo mayor salió al campo a cazar para preparar la vianda solicitada.',
          narrative: 'Esaú recorre los montes rastreando fieras.',
          relatedSuspects: ['E']
        },
        {
          id: 'c4',
          text: 'El menor temía ser descubierto por ser lampiño y fue cubierto con pieles de cabrito.',
          narrative: 'Jacob se aproxima a la cabecera palpándole las manos a su padre.',
          relatedSuspects: ['J']
        },
        {
          id: 'c5',
          text: 'La esposa hitita Judit no intervino en las decisiones familiares del patriarca.',
          narrative: 'Judit permanece junto a la majada de los rebaños.',
          relatedSuspects: ['U']
        },
        {
          id: 'c6',
          text: 'Basemat aguardaba el regreso de la partida de caza en los aposentos.',
          narrative: 'Basemat aguarda en la Tienda de Esaú.',
          relatedSuspects: ['B']
        },
        {
          id: 'c7',
          text: 'La cocinera acudió al pozo central a por cántaros de agua fresca.',
          narrative: 'La cocinera se encuentra trayendo agua desde el Pozo Central.',
          relatedSuspects: ['C']
        },
        {
          id: 'c8',
          text: 'El pastor seleccionó los dos cabritos más tiernos de la majada.',
          narrative: 'El pastor guía el ganado por el camino hacia Jarán.',
          relatedSuspects: ['P']
        },
        {
          id: 'c9',
          text: 'El compañero de cacería observó el sendero que pronto marcaría el exilio de Jacob.',
          narrative: 'El cazador vigila en el paso hacia el Camino de Jarán.',
          relatedSuspects: ['K']
        }
      ],
      solution: {
        I: { row: 0, col: 0 },
        J: { row: 1, col: 1 },
        R: { row: 2, col: 3 },
        E: { row: 3, col: 5 },
        U: { row: 4, col: 7 },
        B: { row: 5, col: 2 },
        C: { row: 6, col: 4 },
        P: { row: 7, col: 6 },
        K: { row: 8, col: 8 }
      }
    }
  },

  // RETO 010: El Manto y la Mentira
  {
    id: '010',
    nombre: 'El Manto y la Mentira',
    datos_juego: {
      Tamano_Cuadricula: '9x9',
      gridSize: 9,
      categoria: 'Asesinatos o crímenes',
      citasBiblicas: 'Génesis 39, 1-20',
      textoBiblicoClave: 'Ella lo agarró por el manto, diciendo: «¡Acuéstate conmigo!». Pero él, dejándole el manto en las manos, huyó y salió afuera.',
      contextoTeologico: 'El pasaje actúa como un ejemplo moral de sabiduría y castidad frente a la tentación. Exegéticamente contrasta la fidelidad de José frente al comportamiento de sus hermanos. Muestra a un Dios que acompaña al justo incluso en el sufrimiento injusto de la prisión.',
      solucionExplicacion: 'La esposa de Putifar intentó seducir a José. Al ser rechazada y huir José dejando su manto en las manos de ella, la mujer lo acusó falsamente de intento de violación usando la prenda como prueba, enviándolo a prisión.',
      subtitle: 'Asesinatos o crímenes · Génesis 39 · 9x9',
      badge: 'EL MANTO Y LA MENTIRA · 9x9',
      victimId: 'J',
      murdererId: 'E',
      storyIntro: 'Un esclavo asciende hasta administrar la casa de un alto oficial egipcio. Cuando rechaza las insinuaciones íntimas de la señora de la casa, ella usa una prenda que él dejó atrás al huir para incriminarlo falsamente de un crimen atroz.',
      epilogue: '¡Calumnia desenmascarada por el peritaje! El manto retenido no probaba violencia, sino la huida apresurada de José por mantenerse íntegro. Aunque Putifar lo envió al calabozo real, la providencia divina no lo abandonó.',
      rooms: {
        aposento_senora: {
          id: 'aposento_senora',
          name: 'Aposento Íntimo de la Señora',
          shortName: 'Ap. Señora',
          bgColor: 'bg-rose-100/70',
          borderColor: 'border-rose-700/60',
          textColor: 'text-rose-950',
          tagColor: 'bg-rose-800 text-rose-100',
          description: 'Cámara privada donde la esposa de Putifar retuvo el manto de lino y lanzó el grito de alarma.'
        },
        gran_sala: {
          id: 'gran_sala',
          name: 'Gran Sala de Putifar',
          shortName: 'Sala Putifar',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Salón de audiencias del capitán de la guardia donde se dictó el encierro inmediato.'
        },
        patio_criados: {
          id: 'patio_criados',
          name: 'Patio Interior de los Criados',
          shortName: 'Patio Criados',
          bgColor: 'bg-teal-100/70',
          borderColor: 'border-teal-700/60',
          textColor: 'text-teal-950',
          tagColor: 'bg-teal-800 text-teal-100',
          description: 'Patio con columnas de loto donde la dueña convocó a los sirvientes agitando el manto.'
        },
        puerta_escape: {
          id: 'puerta_escape',
          name: 'Pórtico Exterior de Escape',
          shortName: 'Pórtico',
          bgColor: 'bg-yellow-100/70',
          borderColor: 'border-yellow-700/60',
          textColor: 'text-yellow-950',
          tagColor: 'bg-yellow-800 text-yellow-100',
          description: 'Salida hacia la calle por donde José huyó despavorido dejando atrás su túnica.'
        },
        carcel_real: {
          id: 'carcel_real',
          name: 'Cárcel Real de los Presos del Rey',
          shortName: 'Cárcel Real',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Fortaleza subterránea donde estaban recluidos los infractores de la corte faraónica.'
        },
        despacho_jose: {
          id: 'despacho_jose',
          name: 'Despacho Administrativo de José',
          shortName: 'Despacho',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Oficina con papiros y balanzas desde donde José gobernaba con éxito toda la hacienda.'
        },
        almacen_granos: {
          id: 'almacen_granos',
          name: 'Silos y Almacenes Domésticos',
          shortName: 'Almacenes',
          bgColor: 'bg-orange-100/70',
          borderColor: 'border-orange-700/60',
          textColor: 'text-orange-950',
          tagColor: 'bg-orange-800 text-orange-100',
          description: 'Graneros que prosperaron bajo la bendición que Yahvé concedía a causa de José.'
        },
        aposento_carcelero: {
          id: 'aposento_carcelero',
          name: 'Cámara del Alcaide de la Prisión',
          shortName: 'Alcaide',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Despacho del jefe del calabozo que pronto pondría todos los reclusos bajo el cuidado de José.'
        },
        muralla_egipcia: {
          id: 'muralla_egipcia',
          name: 'Murallas de la Fortaleza',
          shortName: 'Murallas',
          bgColor: 'bg-zinc-100/70',
          borderColor: 'border-zinc-700/60',
          textColor: 'text-zinc-950',
          tagColor: 'bg-zinc-800 text-zinc-100',
          description: 'Almenas vigiladas por guardias que custodian el perímetro de la ciudadela.'
        }
      },
      cellRooms: [
        ['aposento_senora', 'aposento_senora', 'gran_sala', 'gran_sala', 'despacho_jose', 'despacho_jose', 'patio_criados', 'patio_criados', 'patio_criados'],
        ['aposento_senora', 'aposento_senora', 'gran_sala', 'gran_sala', 'despacho_jose', 'despacho_jose', 'patio_criados', 'patio_criados', 'patio_criados'],
        ['gran_sala', 'gran_sala', 'gran_sala', 'gran_sala', 'almacen_granos', 'almacen_granos', 'patio_criados', 'patio_criados', 'patio_criados'],
        ['carcel_real', 'carcel_real', 'carcel_real', 'aposento_carcelero', 'aposento_carcelero', 'almacen_granos', 'patio_criados', 'patio_criados', 'patio_criados'],
        ['carcel_real', 'carcel_real', 'carcel_real', 'aposento_carcelero', 'aposento_carcelero', 'muralla_egipcia', 'muralla_egipcia', 'muralla_egipcia', 'muralla_egipcia'],
        ['carcel_real', 'carcel_real', 'carcel_real', 'carcel_real', 'carcel_real', 'muralla_egipcia', 'muralla_egipcia', 'muralla_egipcia', 'muralla_egipcia'],
        ['carcel_real', 'carcel_real', 'carcel_real', 'carcel_real', 'carcel_real', 'muralla_egipcia', 'muralla_egipcia', 'muralla_egipcia', 'muralla_egipcia'],
        ['puerta_escape', 'puerta_escape', 'puerta_escape', 'puerta_escape', 'muralla_egipcia', 'muralla_egipcia', 'muralla_egipcia', 'muralla_egipcia', 'muralla_egipcia'],
        ['puerta_escape', 'puerta_escape', 'puerta_escape', 'puerta_escape', 'muralla_egipcia', 'muralla_egipcia', 'muralla_egipcia', 'muralla_egipcia', 'muralla_egipcia']
      ],
      blockedObjects: {
        '0,4': {
          emoji: '🧥',
          name: 'Manto de Lino Abandonado',
          evidenceCode: 'EV-01',
          description: 'Vestidura exterior de José esgrimida como falsa prueba de ultraje.'
        },
        '2,2': {
          emoji: '💍',
          name: 'Sello de Oro de Putifar',
          evidenceCode: 'EV-02',
          description: 'Anillo distintivo del capitán de la guardia con autoridad de encarcelamiento.'
        },
        '4,6': {
          emoji: '🗝️',
          name: 'Manojo de Llaves de la Cárcel',
          evidenceCode: 'EV-03',
          description: 'Llaves de hierro forjado custodiadas por el alcaide de la prisión.'
        },
        '6,1': {
          emoji: '🛕',
          name: 'Estatua de Anubis',
          evidenceCode: 'EV-04',
          description: 'Ídolo ornamental en los nichos del palacio de gobierno.'
        },
        '8,7': {
          emoji: '⛓️',
          name: 'Grilletes de Calabozo',
          evidenceCode: 'EV-05',
          description: 'Cadenas de los presos del rey en las celdas inferiores.'
        }
      },
      suspects: [
        {
          id: 'J',
          name: 'José',
          role: 'Administrador hebreo / Inocente calumniado',
          avatar: '🧑',
          color: 'from-blue-600 to-indigo-800',
          isVictim: true,
          clueText: 'En el Aposento Íntimo huyendo de la coacción.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'aposento_senora' },
            { tipo: 'filaObjeto', objeto: '0,4' }
          ]
        },
        {
          id: 'E',
          name: 'Esposa de Putifar',
          role: 'Señora acusadora / Retuvo el manto y mintió',
          avatar: '👸',
          color: 'from-rose-600 to-rose-900',
          isMurderer: true,
          clueText: 'En el Aposento Íntimo a solas con José antes de alzar la voz.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'aposento_senora' },
            { tipo: 'columnaObjeto', objeto: '6,1' }
          ]
        },
        {
          id: 'P',
          name: 'Putifar',
          role: 'Capitán de la guardia del Faraón',
          avatar: '💂',
          color: 'from-amber-700 to-amber-950',
          clueText: 'En la Gran Sala enfurecido con el relato de su mujer.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'gran_sala' }
          ]
        },
        {
          id: 'C',
          name: 'El carcelero',
          role: 'Alcaide de la prisión real',
          avatar: '🗝️',
          color: 'from-stone-700 to-stone-900',
          clueText: 'Revisando las raciones en los silos antes de preparar la celda.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'almacen_granos' }
          ]
        },
        {
          id: 'K',
          name: 'Jacob en memoria',
          role: 'Padre lejano en tierra de Canaán',
          avatar: '👴',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Evocado en las murallas fronterizas de la lejanía.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'muralla_egipcia' },
            { tipo: 'junto_objeto', objeto: '4,6' }
          ]
        },
        {
          id: 'O',
          name: 'El copero real',
          role: 'Oficial del Faraón preso en la torre',
          avatar: '🍷',
          color: 'from-purple-600 to-purple-800',
          clueText: 'En la Cárcel Real aguardando juicio.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'carcel_real' },
            { tipo: 'columnaObjeto', objeto: '2,2' }
          ]
        },
        {
          id: 'A',
          name: 'El panadero real',
          role: 'Panadero cortesano recluido',
          avatar: '🥖',
          color: 'from-yellow-700 to-yellow-900',
          clueText: 'En la celda común de la Cárcel Real.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'carcel_real' },
            { tipo: 'filaObjeto', objeto: '6,1' }
          ]
        },
        {
          id: 'M',
          name: 'Mayordomo egipcio',
          role: 'Sirviente de la casa testigo del grito',
          avatar: '📜',
          color: 'from-teal-600 to-teal-800',
          clueText: 'Supervisando las murallas de la fortaleza por orden de su amo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'muralla_egipcia' },
            { tipo: 'columnaObjeto', objeto: '4,6' }
          ]
        },
        {
          id: 'G',
          name: 'Guardia de escape',
          role: 'Centinela apostado en el pórtico exterior',
          avatar: '🛡️',
          color: 'from-zinc-600 to-zinc-800',
          clueText: 'Patrullando las murallas de la fortaleza para impedir cualquier huida.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'muralla_egipcia' },
            { tipo: 'filaObjeto', objeto: '8,7' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Un joven hebreo administraba la casa y gozaba de la confianza total de su amo.',
          narrative: 'José se encontraba en el Aposento Íntimo huyendo de la coacción.',
          relatedSuspects: ['J']
        },
        {
          id: 'c2',
          text: 'La mujer del amo se encaprichó del joven y le insistió repetidamente para pecar.',
          narrative: 'La esposa retiene la prenda tras quedar a solas en el aposento.',
          relatedSuspects: ['E']
        },
        {
          id: 'c3',
          text: 'El capitán de la guardia dio total crédito al testimonio sesgado de su esposa.',
          narrative: 'Putifar clama justicia enfurecido en la Gran Sala.',
          relatedSuspects: ['P']
        },
        {
          id: 'c4',
          text: 'El alcaide de la fortaleza carcelaria recibió la orden de custodiar al reo.',
          narrative: 'El carcelero revisa las raciones en los silos antes de preparar la celda.',
          relatedSuspects: ['C']
        },
        {
          id: 'c5',
          text: 'La memoria de Jacob y la fe en el Dios de sus padres inspiraron la fidelidad de José.',
          narrative: 'El recuerdo paterno se alza evocado en las murallas fronterizas.',
          relatedSuspects: ['K']
        },
        {
          id: 'c6',
          text: 'El copero principal del Faraón ya se encontraba detenido en los calabozos reales.',
          narrative: 'El copero está recluido en la Cárcel Real aguardando juicio.',
          relatedSuspects: ['O']
        },
        {
          id: 'c7',
          text: 'El panadero mayor compartía encierro en las mazmorras contiguas.',
          narrative: 'El panadero ocupa la celda común de la prisión.',
          relatedSuspects: ['A']
        },
        {
          id: 'c8',
          text: 'Los criados de la casa acudieron al patio tras los alaridos fingidos de la señora.',
          narrative: 'El mayordomo doméstico supervisa las murallas de la fortaleza.',
          relatedSuspects: ['M']
        },
        {
          id: 'c9',
          text: 'El guardia del pórtico vio cruzar velozmente al administrador desprovisto de su manto.',
          narrative: 'El centinela patrulla las murallas de la fortaleza.',
          relatedSuspects: ['G']
        }
      ],
      solution: {
        J: { row: 0, col: 0 },
        E: { row: 1, col: 1 },
        P: { row: 2, col: 3 },
        C: { row: 3, col: 5 },
        K: { row: 4, col: 7 },
        O: { row: 5, col: 2 },
        A: { row: 6, col: 4 },
        M: { row: 7, col: 6 },
        G: { row: 8, col: 8 }
      }
    }
  }
];
