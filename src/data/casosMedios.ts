import { Reto } from '../types';

/**
 * CASOS BÍBLICOS DE DIFICULTAD MEDIA (CUADRÍCULA 7x7 - 49 CELDAS)
 * Basados fielmente en los relatos del libro de Génesis.
 */
export const CASOS_MEDIOS: Reto[] = [
  // RETO 001: La Venganza en Siquén
  {
    id: '001',
    nombre: 'La Venganza en Siquén',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Asesinatos o crímenes',
      citasBiblicas: 'Génesis 34, 1-29',
      textoBiblicoClave: 'Al tercer día, cuando más les dolía, dos hijos de Jacob, Simeón y Leví, hermanos de Dina, agarraron sus espadas, entraron en la ciudad sin encontrar resistencia y mataron a todos los varones.',
      contextoTeologico: 'La exégesis histórico-crítica (Fe Adulta) sitúa este relato como un reflejo de las tensiones e integraciones tribales en Canaán. Teológicamente, la Biblia no oculta la violencia patriarcal, pero muestra un rechazo a la venganza desproporcionada, como se ve en la condena final de Jacob (Gén 49,5-7).',
      solucionExplicacion: 'Simeón y Leví vengaron el honor de su hermana Dina. Engañaron a Siquén y a los hombres de su ciudad exigiéndoles circuncidarse para poder emparentar. Al tercer día, aprovechando su dolor, los asesinaron a espada.',
      subtitle: 'Asesinatos o crímenes · Génesis 34 · 7x7',
      badge: 'LA VENGANZA EN SIQUÉN · 7x7',
      victimId: 'D',
      murdererId: 'S',
      storyIntro: 'Una joven es deshonrada. Los líderes de la ciudad intentan arreglarlo con un pacto matrimonial y económico, pero un sangriento engaño deja a todos los varones de la ciudad pasados a cuchillo mientras convalecían.',
      epilogue: '¡Dictamen forense completado! Simeón y Leví perpetraron la masacre en el momento de mayor vulnerabilidad de la ciudad. Dina fue rescatada, pero la desmesura de la represalia provocó el reproche de Jacob.',
      rooms: {
        tienda_dina: {
          id: 'tienda_dina',
          name: 'Aposento de Dina en Siquén',
          shortName: 'Ap. Dina',
          bgColor: 'bg-rose-100/70',
          borderColor: 'border-rose-700/60',
          textColor: 'text-rose-950',
          tagColor: 'bg-rose-800 text-rose-100',
          description: 'Aposento donde Dina fue retenida y donde Simeón irrumpió a rescatarla a espada.'
        },
        palacio_jamor: {
          id: 'palacio_jamor',
          name: 'Palacio del Príncipe Jamor',
          shortName: 'Palacio Jamor',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Residencia de los gobernantes heveos donde Leví abatió a los líderes.'
        },
        zona_convalecencia: {
          id: 'zona_convalecencia',
          name: 'Zona de Convalecencia Ciudadana',
          shortName: 'Convalecencia',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Casas de los varones siquenitas que reposaban al tercer día del pacto.'
        },
        puerta_ciudad: {
          id: 'puerta_ciudad',
          name: 'Puerta Principal de Siquén',
          shortName: 'Puerta Siquén',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Lugar del consejo ciudadano donde Jamor convenció a los hombres de aceptar el trato.'
        },
        campamento_jacob: {
          id: 'campamento_jacob',
          name: 'Campamento de Jacob',
          shortName: 'Camp. Jacob',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Tiendas de Israel en las afueras, ajeno a la matanza planeada por sus hijos.'
        },
        muros_siquen: {
          id: 'muros_siquen',
          name: 'Murallas Fortificadas',
          shortName: 'Murallas',
          bgColor: 'bg-yellow-100/70',
          borderColor: 'border-yellow-700/60',
          textColor: 'text-yellow-950',
          tagColor: 'bg-yellow-800 text-yellow-100',
          description: 'Defensas desiertas que no pudieron repeler el asalto sorpresivo.'
        },
        campo_saqueo: {
          id: 'campo_saqueo',
          name: 'Campos y Corrales del Saqueo',
          shortName: 'Saqueo',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Prados de la ciudad donde los demás hermanos se llevaron ovejas y bueyes.'
        }
      },
      cellRooms: [
        ['tienda_dina', 'tienda_dina', 'palacio_jamor', 'palacio_jamor', 'muros_siquen', 'muros_siquen', 'campamento_jacob'],
        ['tienda_dina', 'tienda_dina', 'palacio_jamor', 'palacio_jamor', 'muros_siquen', 'muros_siquen', 'campamento_jacob'],
        ['zona_convalecencia', 'zona_convalecencia', 'palacio_jamor', 'palacio_jamor', 'puerta_ciudad', 'puerta_ciudad', 'campamento_jacob'],
        ['zona_convalecencia', 'zona_convalecencia', 'zona_convalecencia', 'puerta_ciudad', 'puerta_ciudad', 'puerta_ciudad', 'campamento_jacob'],
        ['puerta_ciudad', 'puerta_ciudad', 'puerta_ciudad', 'puerta_ciudad', 'campo_saqueo', 'campo_saqueo', 'campamento_jacob'],
        ['campo_saqueo', 'campo_saqueo', 'campo_saqueo', 'campo_saqueo', 'campo_saqueo', 'campo_saqueo', 'campamento_jacob'],
        ['campo_saqueo', 'campo_saqueo', 'campo_saqueo', 'campo_saqueo', 'campo_saqueo', 'campo_saqueo', 'campamento_jacob']
      ],
      blockedObjects: {
        '0,4': {
          emoji: '⚔️',
          name: 'Espada de Bronce',
          evidenceCode: 'EV-01',
          description: 'Arma desenvainada por los hijos de Jacob para ejecutar la venganza.'
        },
        '2,2': {
          emoji: '🧱',
          name: 'Muro Almenado',
          evidenceCode: 'EV-02',
          description: 'Balcones de piedra del palacio donde se pactó la dote fallida.'
        },
        '4,6': {
          emoji: '🏺',
          name: 'Vasijas de Botín',
          evidenceCode: 'EV-03',
          description: 'Bienes y alhajas confiscados tras la incursión de los hermanos.'
        },
        '6,1': {
          emoji: '🚪',
          name: 'Portón de la Ciudad',
          evidenceCode: 'EV-04',
          description: 'Gran puerta de vigas de cedro franqueada sin resistencia.'
        }
      },
      suspects: [
        {
          id: 'D',
          name: 'Dina',
          role: 'Única mujer / Víctima inicial del ultraje',
          avatar: '👧',
          color: 'from-rose-500 to-rose-700',
          isVictim: true,
          clueText: 'En su aposento de Siquén aguardando su liberación.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_dina' },
            { tipo: 'filaObjeto', objeto: '0,4' }
          ]
        },
        {
          id: 'S',
          name: 'Simeón',
          role: 'Hermano vengador a espada / Culpable del asalto',
          avatar: '⚔️',
          color: 'from-red-700 to-red-950',
          isMurderer: true,
          clueText: 'Entró en el aposento de Dina a solas para rescatarla a sangre y fuego.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_dina' },
            { tipo: 'borde', lado: 'oeste' }
          ]
        },
        {
          id: 'L',
          name: 'Leví',
          role: 'Hermano co-autor de la represalia',
          avatar: '🗡️',
          color: 'from-red-600 to-red-800',
          clueText: 'Asaltó el Palacio de Jamor por la vía central.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'palacio_jamor' }
          ]
        },
        {
          id: 'Q',
          name: 'Siquén',
          role: 'Hijo de Jamor / Perpetrador del ultraje inicial',
          avatar: '🤴',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Aún convaleciente, cerca de la puerta principal de Siquén.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_ciudad' },
            { tipo: 'esteDe', sospechoso: 'M' }
          ]
        },
        {
          id: 'H',
          name: 'Jamor',
          role: 'Príncipe heveo / Padre de Siquén',
          avatar: '👑',
          color: 'from-amber-800 to-amber-950',
          clueText: 'En la Puerta Principal de la urbe junto al consejo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_ciudad' }
          ]
        },
        {
          id: 'J',
          name: 'Jacob',
          role: 'Padre que no participó y reprochó el peligro',
          avatar: '👴',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Permanece en el Campamento de Jacob en la zona oriental.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'campamento_jacob' },
            { tipo: 'junto_objeto', objeto: '4,6' }
          ]
        },
        {
          id: 'M',
          name: 'Habitante siquenita',
          role: 'Varón convaleciente de la ciudad',
          avatar: '🤕',
          color: 'from-zinc-500 to-zinc-700',
          clueText: 'Alcanzado en los corrales durante el saqueo final.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'campo_saqueo' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'La única mujer de la lista fue la víctima inicial de un ultraje.',
          narrative: 'Dina está en su aposento de Siquén aguardando su liberación.',
          relatedSuspects: ['D']
        },
        {
          id: 'c2',
          text: 'El perpetrador del ultraje (Siquén) y su padre intentaron arreglar la situación ofreciendo dote.',
          narrative: 'Siquén yace convaleciente en la zona de reposo.',
          relatedSuspects: ['Q']
        },
        {
          id: 'c3',
          text: 'Los dos hermanos exigieron el requisito doloroso que incapacitó a los hombres al tercer día.',
          narrative: 'Simeón irrumpió a solas en el aposento de Dina a sangre y fuego.',
          relatedSuspects: ['S']
        },
        {
          id: 'c4',
          text: 'Leví avanzó sobre el palacio noble de los gobernantes heveos.',
          narrative: 'Leví se halla asaltando el Palacio de Jamor por la vía central.',
          relatedSuspects: ['L']
        },
        {
          id: 'c5',
          text: 'El príncipe Jamor aguardaba en la gran puerta comunal.',
          narrative: 'Jamor ocupa la Puerta Principal de la urbe junto al consejo.',
          relatedSuspects: ['H']
        },
        {
          id: 'c6',
          text: 'El padre de los vengadores no participó y condenó el descrédito ante los cananeos.',
          narrative: 'Jacob se sitúa en el campamento exterior.',
          relatedSuspects: ['J']
        },
        {
          id: 'c7',
          text: 'Los varones convalecientes de la ciudad no pudieron oponer defensa alguna.',
          narrative: 'El habitante siquenita fue alcanzado en los corrales durante el saqueo.',
          relatedSuspects: ['M']
        }
      ],
      solution: {
        D: { row: 0, col: 1 },
        S: { row: 1, col: 0 },
        L: { row: 2, col: 3 },
        Q: { row: 3, col: 5 },
        H: { row: 4, col: 2 },
        J: { row: 5, col: 6 },
        M: { row: 6, col: 4 }
      }
    }
  },

  // RETO 006: El Sello y el Cordón
  {
    id: '006',
    nombre: 'El Sello y el Cordón',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Génesis 38, 1-26',
      textoBiblicoClave: 'Mientras la sacaban, mandó decir a su suegro: «Estoy encinta del dueño de estas cosas.» Y añadió: «Fíjate bien de quién es este sello, este cordón y este bastón.»',
      contextoTeologico: 'La ley del levirato obligaba a dar descendencia a la viuda. Tamar asume el derecho que la institución patriarcal le negaba. Judá reconoce: "Ella es más justa que yo". El Magisterio la incluye en la genealogía de Jesús, destacando que la salvación integra a los marginados y extranjeros.',
      solucionExplicacion: 'Tamar se disfrazó de prostituta para acostarse con su suegro Judá, quien no había cumplido la ley del levirato. Cuando él la condenó a muerte por su embarazo, ella presentó el sello, el cordón y el bastón que él le había dejado en prenda.',
      subtitle: 'Descubrimiento de acciones ocultas · Génesis 38 · 7x7',
      badge: 'EL SELLO Y EL CORDÓN · 7x7',
      victimId: 'S',
      murdererId: 'J',
      storyIntro: 'Una viuda desamparada, a la que se le niega el derecho de la ley del levirato, se hace pasar por prostituta velada. Años después, cuando es condenada a la hoguera por embarazo ilícito, presenta tres objetos que salvan su vida y exponen al verdadero responsable.',
      epilogue: '¡Verdad forense demostrada! El sello cilíndrico, el cordón trenzado y el báculo patriarcal atestiguaron la paternidad de Judá. El patriarca confesó públicamente la justicia superior de Tamar.',
      rooms: {
        cruce_enaim: {
          id: 'cruce_enaim',
          name: 'Cruce de Caminos en Enaim',
          shortName: 'Enaim',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Bifurcación del camino hacia Timná donde Tamar aguardó cubierta con un velo.'
        },
        tienda_juda: {
          id: 'tienda_juda',
          name: 'Tienda Patriarcal de Judá',
          shortName: 'T. Judá',
          bgColor: 'bg-orange-100/70',
          borderColor: 'border-orange-700/60',
          textColor: 'text-orange-950',
          tagColor: 'bg-orange-800 text-orange-100',
          description: 'Morada de Judá donde retuvo a Selah sin entregarlo a su nuera por temor a su muerte.'
        },
        camino_timna: {
          id: 'camino_timna',
          name: 'Camino del Esquileo en Timná',
          shortName: 'C. Timná',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Sendero polvoriento por donde subían los rebaños y el amigo adulamita con el cabrito.'
        },
        esquileo_ovejas: {
          id: 'esquileo_ovejas',
          name: 'Corrales del Esquileo',
          shortName: 'Esquileo',
          bgColor: 'bg-yellow-100/70',
          borderColor: 'border-yellow-700/60',
          textColor: 'text-yellow-950',
          tagColor: 'bg-yellow-800 text-yellow-100',
          description: 'Fiesta de la lana donde los criados y pastores celebraban la esquila anual.'
        },
        casa_tamar: {
          id: 'casa_tamar',
          name: 'Casa Paterna de Tamar',
          shortName: 'Casa Tamar',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Vivienda donde Tamar guardó riguroso luto tras quedar viuda dos veces.'
        },
        tribunal_juicio: {
          id: 'tribunal_juicio',
          name: 'Plaza del Juicio y Hoguera',
          shortName: 'Tribunal',
          bgColor: 'bg-rose-100/70',
          borderColor: 'border-rose-700/60',
          textColor: 'text-rose-950',
          tagColor: 'bg-rose-800 text-rose-100',
          description: 'Lugar donde se encendió el fuego para quemarla antes de mostrar las tres prendas.'
        },
        almacen_prendas: {
          id: 'almacen_prendas',
          name: 'Cofre Secreto de las Prendas',
          shortName: 'Prendas',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Arqueta donde Tamar custodió celosamente el sello, el cordón y el bastón.'
        }
      },
      cellRooms: [
        ['cruce_enaim', 'cruce_enaim', 'cruce_enaim', 'camino_timna', 'camino_timna', 'esquileo_ovejas', 'esquileo_ovejas'],
        ['tienda_juda', 'tienda_juda', 'cruce_enaim', 'camino_timna', 'camino_timna', 'esquileo_ovejas', 'esquileo_ovejas'],
        ['tienda_juda', 'tienda_juda', 'casa_tamar', 'casa_tamar', 'casa_tamar', 'tribunal_juicio', 'tribunal_juicio'],
        ['casa_tamar', 'casa_tamar', 'casa_tamar', 'casa_tamar', 'casa_tamar', 'tribunal_juicio', 'tribunal_juicio'],
        ['almacen_prendas', 'almacen_prendas', 'almacen_prendas', 'tribunal_juicio', 'tribunal_juicio', 'tribunal_juicio', 'tribunal_juicio'],
        ['almacen_prendas', 'almacen_prendas', 'almacen_prendas', 'tribunal_juicio', 'tribunal_juicio', 'almacen_prendas', 'almacen_prendas'],
        ['almacen_prendas', 'almacen_prendas', 'almacen_prendas', 'almacen_prendas', 'almacen_prendas', 'almacen_prendas', 'almacen_prendas']
      ],
      blockedObjects: {
        '1,3': {
          emoji: '📜',
          name: 'Sello Cilíndrico y Cordón',
          evidenceCode: 'EV-01',
          description: 'Sello personal de Judá colgado de su cordón como prenda de pago.'
        },
        '3,1': {
          emoji: '🦯',
          name: 'Báculo de Pastor',
          evidenceCode: 'EV-02',
          description: 'Bastón de madera labrado perteneciente al patriarca de la tribu.'
        },
        '5,5': {
          emoji: '🔥',
          name: 'Pira de Fuego',
          evidenceCode: 'EV-03',
          description: 'Leña dispuesta para la quema pública antes de revelarse la verdad.'
        },
        '0,6': {
          emoji: '🐑',
          name: 'Vellón de Esquileo',
          evidenceCode: 'EV-04',
          description: 'Fardo de lana recién cortada en las majadas de Timná.'
        }
      },
      suspects: [
        {
          id: 'T',
          name: 'Tamar',
          role: 'Viuda audaz / Se vistió con velo en Enaim',
          avatar: '🧕',
          color: 'from-amber-500 to-amber-700',
          clueText: 'En el Cruce de Caminos en Enaim.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'cruce_enaim' }
          ]
        },
        {
          id: 'J',
          name: 'Judá',
          role: 'Suegro que negó a Selah y dejó las prendas',
          avatar: '🧔',
          color: 'from-amber-800 to-amber-950',
          isMurderer: true,
          clueText: 'En su tienda patriarcal reteniendo a su hijo por miedo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_juda' }
          ]
        },
        {
          id: 'S',
          name: 'Selah',
          role: 'Tercer hijo protegido / Víctima de la dilación',
          avatar: '👦',
          color: 'from-blue-600 to-blue-800',
          isVictim: true,
          clueText: 'Retenido en la Tienda de Judá a solas con su padre.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_juda' },
            { tipo: 'junto_objeto', objeto: '3,1' }
          ]
        },
        {
          id: 'E',
          name: 'Memoria de Er',
          role: 'Primer esposo fallecido',
          avatar: '🪦',
          color: 'from-stone-600 to-stone-800',
          clueText: 'En el recuerdo de la Casa Paterna de Tamar.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'casa_tamar' }
          ]
        },
        {
          id: 'O',
          name: 'Memoria de Onán',
          role: 'Segundo esposo que no cumplió la ley',
          avatar: '🪦',
          color: 'from-stone-500 to-stone-700',
          clueText: 'Su memoria se evoca en la plaza del juicio, junto a la hoguera.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tribunal_juicio' },
            { tipo: 'columnaObjeto', objeto: '0,6' }
          ]
        },
        {
          id: 'H',
          name: 'Jirá',
          role: 'Amigo adulamita / Portador del cabrito de pago',
          avatar: '🧑‍🦱',
          color: 'from-emerald-700 to-emerald-900',
          clueText: 'Llegó a la plaza del juicio tras buscar en vano a la ramera por el camino de Timná.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tribunal_juicio' },
            { tipo: 'columnaObjeto', objeto: '1,3' }
          ]
        },
        {
          id: 'P',
          name: 'Pastor de Timná',
          role: 'Guardián del rebaño de Judá',
          avatar: '🐑',
          color: 'from-zinc-600 to-zinc-800',
          clueText: 'Junto al Cofre Secreto de las Prendas.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'almacen_prendas' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Una mujer quedó viuda dos veces sucesivas sin lograr tener descendencia.',
          narrative: 'Tamar se encuentra en el cruce de caminos en Enaim.',
          relatedSuspects: ['T']
        },
        {
          id: 'c2',
          text: 'El suegro prometió entregarle a su tercer hijo pero no cumplió por miedo.',
          narrative: 'Judá está en su tienda patriarcal reteniendo a Selah.',
          relatedSuspects: ['J']
        },
        {
          id: 'c3',
          text: 'Selah creció en la tienda de Judá sin ser enviado al levirato.',
          narrative: 'Selah permanece en la tienda de Judá bajo la tutela de su padre.',
          relatedSuspects: ['S']
        },
        {
          id: 'c4',
          text: 'La memoria del primer difunto Er reposa en la casa paterna.',
          narrative: 'El recuerdo de Er figura en la casa paterna de Tamar.',
          relatedSuspects: ['E']
        },
        {
          id: 'c5',
          text: 'El recuerdo de Onán se evoca en la plaza del juicio de Timná.',
          narrative: 'Onán es recordado en la plaza del juicio, junto a la hoguera.',
          relatedSuspects: ['O']
        },
        {
          id: 'c6',
          text: 'El amigo adulamita Jirá recorrió el camino para entregar el cabrito sin hallar a nadie.',
          narrative: 'Jirá camina por el sendero buscando a la mujer con el velo.',
          relatedSuspects: ['H']
        },
        {
          id: 'c7',
          text: 'El pastor de la majada observó la entrega secreta cerca del almacén de prendas.',
          narrative: 'El pastor se sitúa custodiando el cofre de prendas.',
          relatedSuspects: ['P']
        }
      ],
      solution: {
        T: { row: 0, col: 2 },
        J: { row: 1, col: 0 },
        S: { row: 2, col: 1 },
        E: { row: 3, col: 4 },
        O: { row: 4, col: 6 },
        H: { row: 5, col: 3 },
        P: { row: 6, col: 5 }
      }
    }
  },

  // RETO 008: El Pozo del Desierto
  {
    id: '008',
    nombre: 'El Pozo del Desierto',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Desenlaces de historias y parábolas',
      citasBiblicas: 'Génesis 21, 8-21',
      textoBiblicoClave: 'Dios le abrió los ojos y vio un pozo de agua. Fue a llenar el odre de agua y dio de beber al muchacho.',
      contextoTeologico: 'Muestra a Dios haciéndose cargo de las víctimas colaterales del sistema patriarcal. La exégesis destaca que Dios escucha el clamor del marginado (Agar es extranjera y esclava). El Vaticano resalta este pasaje en el diálogo interreligioso, pues Ismael es figura central en el Islam.',
      solucionExplicacion: 'Sara exigió expulsar a Agar y a Ismael. En el desierto, cuando se quedaron sin agua y Agar esperaba la muerte del niño, Dios escuchó el llanto de Ismael y le mostró a Agar un pozo, salvándolos.',
      subtitle: 'Desenlaces de historias y parábolas · Génesis 21 · 7x7',
      badge: 'EL POZO DEL DESIERTO · 7x7',
      victimId: 'I',
      murdererId: 'G',
      storyIntro: 'Por celos y disputas de herencia, una madre y su hijo son desterrados al desierto con provisiones insuficientes. Cuando el agua se agota y la muerte parece inminente, un llanto provoca una intervención celestial que abre una fuente de vida.',
      epilogue: '¡Milagro y deducción constatados! En la desolación de Beerseba, el ángel del Señor escuchó el gemido de Ismael bajo la retama y descubrió a Agar el manantial providencial.',
      rooms: {
        pozo_revelado: {
          id: 'pozo_revelado',
          name: 'Pozo Milagroso en el Desierto',
          shortName: 'Pozo Vida',
          bgColor: 'bg-sky-100/70',
          borderColor: 'border-sky-700/60',
          textColor: 'text-sky-950',
          tagColor: 'bg-sky-800 text-sky-100',
          description: 'Manantial de aguas vivas mostrado por el ángel para salvar la vida de Ismael.'
        },
        arbusto_retama: {
          id: 'arbusto_retama',
          name: 'Sombra del Arbusto de Retama',
          shortName: 'Retama',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Lugar donde la madre desconsolada dejó al muchacho para no verlo morir.'
        },
        desierto_berseba: {
          id: 'desierto_berseba',
          name: 'Desierto de Berseba',
          shortName: 'Berseba',
          bgColor: 'bg-yellow-100/70',
          borderColor: 'border-yellow-700/60',
          textColor: 'text-yellow-950',
          tagColor: 'bg-yellow-800 text-yellow-100',
          description: 'Arenales áridos donde vagaron errantes hasta consumir el último trago de agua.'
        },
        campamento_abrahan: {
          id: 'campamento_abrahan',
          name: 'Campamento de Abrahán',
          shortName: 'Camp. Abrahán',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Lugar donde el patriarca despidió de madrugada a la esclava con pan y un odre.'
        },
        tienda_sara: {
          id: 'tienda_sara',
          name: 'Tienda de Sara',
          shortName: 'T. Sara',
          bgColor: 'bg-rose-100/70',
          borderColor: 'border-rose-700/60',
          textColor: 'text-rose-950',
          tagColor: 'bg-rose-800 text-rose-100',
          description: 'Morada de la matriarca que demandó con firmeza: «Echa a esa esclava y a su hijo».'
        },
        sendero_destierro: {
          id: 'sendero_destierro',
          name: 'Sendero de Destierro',
          shortName: 'Destierro',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Paso pedregoso que separa los dominios de la tribu de las tierras estériles.'
        },
        oasis_paran: {
          id: 'oasis_paran',
          name: 'Confines del Desierto de Parán',
          shortName: 'Parán',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Tierra futura donde Ismael creció como diestro tirador de arco.'
        }
      },
      cellRooms: [
        ['campamento_abrahan', 'desierto_berseba', 'desierto_berseba', 'desierto_berseba', 'pozo_revelado', 'pozo_revelado', 'sendero_destierro'],
        ['campamento_abrahan', 'desierto_berseba', 'desierto_berseba', 'arbusto_retama', 'pozo_revelado', 'pozo_revelado', 'sendero_destierro'],
        ['campamento_abrahan', 'desierto_berseba', 'desierto_berseba', 'arbusto_retama', 'arbusto_retama', 'sendero_destierro', 'sendero_destierro'],
        ['campamento_abrahan', 'campamento_abrahan', 'desierto_berseba', 'desierto_berseba', 'sendero_destierro', 'sendero_destierro', 'oasis_paran'],
        ['tienda_sara', 'tienda_sara', 'desierto_berseba', 'desierto_berseba', 'sendero_destierro', 'oasis_paran', 'oasis_paran'],
        ['sendero_destierro', 'sendero_destierro', 'sendero_destierro', 'sendero_destierro', 'sendero_destierro', 'oasis_paran', 'oasis_paran'],
        ['oasis_paran', 'oasis_paran', 'oasis_paran', 'oasis_paran', 'oasis_paran', 'oasis_paran', 'oasis_paran']
      ],
      blockedObjects: {
        '1,2': {
          emoji: '🌿',
          name: 'Arbusto de Retama',
          evidenceCode: 'EV-01',
          description: 'Mata espinosa del desierto que brindó sombra precaria al niño sediento.'
        },
        '3,4': {
          emoji: '🫗',
          name: 'Odre Vacío',
          evidenceCode: 'EV-02',
          description: 'Piel de cabra vacía donde ya no quedaba ni una sola gota de agua.'
        },
        '5,0': {
          emoji: '⛲',
          name: 'Ojo de Agua',
          evidenceCode: 'EV-03',
          description: 'Fuente subterránea descubierta milagrosamente a los ojos de Agar.'
        },
        '6,6': {
          emoji: '🏹',
          name: 'Arco de Ismael',
          evidenceCode: 'EV-04',
          description: 'Arma de caza que forjó el futuro del muchacho en el desierto de Parán.'
        }
      },
      suspects: [
        {
          id: 'I',
          name: 'Ismael',
          role: 'Hijo desterrado / Su llanto fue escuchado',
          avatar: '👦',
          color: 'from-orange-600 to-orange-800',
          isVictim: true,
          clueText: 'En el Pozo de Agua Milagroso esperando salvación.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'pozo_revelado' },
            { tipo: 'columnaObjeto', objeto: '3,4' }
          ]
        },
        {
          id: 'G',
          name: 'Un ángel',
          role: 'Mensajero divino que revela el agua',
          avatar: '👼',
          color: 'from-yellow-400 to-amber-500',
          isMurderer: true,
          clueText: 'Descendió en el Pozo Milagroso a solas con Ismael.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'pozo_revelado' },
            { tipo: 'filaObjeto', objeto: '1,2' }
          ]
        },
        {
          id: 'H',
          name: 'Agar',
          role: 'Madre esclava / A la distancia de un tiro de arco',
          avatar: '🧕',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Llora junto al Arbusto de Retama.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'arbusto_retama' }
          ]
        },
        {
          id: 'A',
          name: 'Abrahán',
          role: 'Patriarca que entregó pan y agua',
          avatar: '🧔',
          color: 'from-stone-600 to-stone-800',
          clueText: 'En su campamento de despedida.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'campamento_abrahan' },
            { tipo: 'columnaObjeto', objeto: '5,0' }
          ]
        },
        {
          id: 'S',
          name: 'Sara',
          role: 'Esposa que demandó el destierro',
          avatar: '👵',
          color: 'from-rose-600 to-rose-800',
          clueText: 'En su tienda privada.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_sara' }
          ]
        },
        {
          id: 'C',
          name: 'Criada de Agar',
          role: 'Compañera en el paso del destierro',
          avatar: '👩',
          color: 'from-teal-600 to-teal-800',
          clueText: 'En los confines del desierto de Parán.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'oasis_paran' },
            { tipo: 'filaObjeto', objeto: '5,0' }
          ]
        },
        {
          id: 'M',
          name: 'Vigía de Parán',
          role: 'Explorador en los confines del desierto',
          avatar: '🏃',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Oteando en el Oasis de Parán.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'oasis_paran' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'La esposa del patriarca exigió la expulsión de la esclava y del hijo de esta.',
          narrative: 'Sara está en su tienda privada.',
          relatedSuspects: ['S']
        },
        {
          id: 'c2',
          text: 'El patriarca se entristeció, pero despidió a ambos al amanecer con pan y agua.',
          narrative: 'Abrahán despide a ambos desde su campamento.',
          relatedSuspects: ['A']
        },
        {
          id: 'c3',
          text: 'La madre dejó al muchacho bajo un arbusto para no presenciar su final.',
          narrative: 'Agar permanece llorando junto al arbusto de retama.',
          relatedSuspects: ['H']
        },
        {
          id: 'c4',
          text: 'Dios escuchó el gemido del muchacho tendido en el pozo providencial.',
          narrative: 'Ismael se halla en el pozo de agua esperando auxilio.',
          relatedSuspects: ['I']
        },
        {
          id: 'c5',
          text: 'Un mensajero divino llamó desde el cielo y abrió los ojos de la madre.',
          narrative: 'El ángel acude al pozo milagroso con el consuelo.',
          relatedSuspects: ['G']
        },
        {
          id: 'c6',
          text: 'La criada del campamento acompañó los primeros pasos del sendero.',
          narrative: 'La criada se sitúa en los confines del desierto de Parán.',
          relatedSuspects: ['C']
        },
        {
          id: 'c7',
          text: 'En los confines de Parán el destino del muchacho florecería como nación.',
          narrative: 'El vigía observa desde el oasis de Parán.',
          relatedSuspects: ['M']
        }
      ],
      solution: {
        I: { row: 0, col: 4 },
        G: { row: 1, col: 5 },
        H: { row: 2, col: 3 },
        A: { row: 3, col: 0 },
        S: { row: 4, col: 1 },
        C: { row: 5, col: 6 },
        M: { row: 6, col: 2 }
      }
    }
  }
];
