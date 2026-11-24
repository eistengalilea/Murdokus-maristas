import { Reto } from '../types';

/**
 * NUEVOS RETOS BÍBLICOS - DIFICULTAD MEDIO (7x7 - 49 CELDAS)
 * Ciclo de la Monarquía de Israel (1 y 2 Samuel, 1 Reyes).
 */
export const RETOS_MONARQUIA_MEDIOS: Reto[] = [
  // RETO 001-C: La Carta de la Muerte
  {
    id: '001-C',
    nombre: 'La Carta de la Muerte',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Asesinatos o crímenes',
      citasBiblicas: '2 Samuel 11, 1-27',
      textoBiblicoClave: 'Escribió en la carta: «Poned a Urías en primera línea, donde sea más recia la batalla, y retiraos dejándolo solo, para que lo hieran y muera».',
      contextoTeologico: 'Fe Adulta señala que la Biblia no oculta los crímenes de sus héroes. Muestra cómo el poder monárquico tiende a la corrupción y la tiranía. Dios condena este abuso de poder y no acepta que la razón de Estado justifique el asesinato.',
      solucionExplicacion: 'David cometió adulterio con Betsabé. Para encubrir el embarazo, ordenó a su general Joab poner a Urías (esposo de Betsabé) en la vanguardia para que muriera en combate, usando al propio Urías como mensajero de su ejecución.',
      storyIntro: 'Un valiente soldado lleva al frente de batalla un sobre lacrado escrito por su propio rey. El soldado muere en combate y su viuda es instalada rápidamente en el palacio real, pero el verdadero responsable del crimen no estaba en la guerra.',
      epilogue: '¡Complot criminal al descubierto! La misiva sellada con el anillo de David selló el destino de Urías el hitita bajo los muros de Rabá. La pretendida razón de Estado quedó al desnudo ante los ojos de Yahvé.',
      subtitle: 'Asesinatos o crímenes · 2 Samuel 11 · 7x7',
      badge: 'LA CARTA DE LA MUERTE · 7x7',
      victimId: 'U',
      murdererId: 'D',
      rooms: {
        azotea_palacio: {
          id: 'azotea_palacio',
          name: 'Azotea del Palacio de David',
          shortName: 'Azotea Real',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Mirador regio en Jerusalén donde el rey ocioso observó el baño de purificación.'
        },
        casa_betsabe: {
          id: 'casa_betsabe',
          name: 'Mansión Familiar de Betsabé',
          shortName: 'Casa Betsabé',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Vivienda contigua donde la esposa de Urías recibió el requerimiento del monarca.'
        },
        muralla_raba: {
          id: 'muralla_raba',
          name: 'Vanguardia bajo la Muralla de Rabá',
          shortName: 'Muralla Rabá',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Frente de combate encarnizado donde los arqueros amonitas acribillaron a Urías.'
        },
        tienda_joab: {
          id: 'tienda_joab',
          name: 'Puesto de Mando del General Joab',
          shortName: 'Tienda Joab',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Campamento sitiador donde se abrió el pliego real con la orden de traición.'
        },
        umbral_guardia: {
          id: 'umbral_guardia',
          name: 'Umbral del Cuartel de Guardias',
          shortName: 'Umbral Guardias',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Entrada donde Urías durmió en el suelo negándose a bajar a su casa por lealtad a sus camaradas.'
        }
      },
      cellRooms: [
        ['azotea_palacio', 'azotea_palacio', 'azotea_palacio', 'azotea_palacio', 'casa_betsabe', 'casa_betsabe', 'casa_betsabe'],
        ['azotea_palacio', 'casa_betsabe', 'casa_betsabe', 'casa_betsabe', 'casa_betsabe', 'casa_betsabe', 'casa_betsabe'],
        ['tienda_joab', 'tienda_joab', 'tienda_joab', 'tienda_joab', 'tienda_joab', 'tienda_joab', 'muralla_raba'],
        ['tienda_joab', 'tienda_joab', 'tienda_joab', 'tienda_joab', 'tienda_joab', 'muralla_raba', 'muralla_raba'],
        ['umbral_guardia', 'umbral_guardia', 'umbral_guardia', 'tienda_joab', 'tienda_joab', 'muralla_raba', 'muralla_raba'],
        ['umbral_guardia', 'umbral_guardia', 'umbral_guardia', 'muralla_raba', 'muralla_raba', 'muralla_raba', 'muralla_raba'],
        ['umbral_guardia', 'umbral_guardia', 'muralla_raba', 'muralla_raba', 'muralla_raba', 'muralla_raba', 'muralla_raba']
      ],
      blockedObjects: {
        '0,5': {
          emoji: '✉️',
          name: 'Pliego Lacrado del Rey',
          evidenceCode: 'EV-01',
          description: 'Carta mortal llevada por Urías sin conocer su contenido homicida.'
        },
        '2,2': {
          emoji: '🏺',
          name: 'Copa de Vino de la Fiesta Real',
          evidenceCode: 'EV-02',
          description: 'Vaso con el que David emborrachó a Urías intentando forzar su regreso a casa.'
        },
        '4,0': {
          emoji: '🛡️',
          name: 'Escudo Hitita de Urías',
          evidenceCode: 'EV-03',
          description: 'Arma defensiva que no pudo contener la lluvia de flechas enemigas.'
        },
        '6,3': {
          emoji: '🏹',
          name: 'Saeta Amonita de Rabá',
          evidenceCode: 'EV-04',
          description: 'Proyectil disparado desde el adarve que abatió al fiel guerrero abandonado.'
        }
      },
      suspects: [
        {
          id: 'D',
          name: 'David',
          role: 'Rey de Israel',
          avatar: '👑',
          color: 'from-amber-600 to-amber-800',
          isMurderer: true,
          clueText: 'Permaneció en Jerusalén redactando la orden de muerte para encubrir su pecado.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'azotea_palacio' },
            { tipo: 'filaObjeto', objeto: '0,5' }
          ]
        },
        {
          id: 'B',
          name: 'Betsabé',
          role: 'Esposa de Urías',
          avatar: '👰',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Guardó el luto por su esposo antes de ser introducida en el harén real.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'umbral_guardia' },
            { tipo: 'junto_objeto', objeto: '4,0' }
          ]
        },
        {
          id: 'U',
          name: 'Urías',
          role: 'Soldado Leal Hitita',
          avatar: '⚔️',
          color: 'from-red-600 to-red-800',
          isVictim: true,
          clueText: 'Se negó a disfrutar de su hogar mientras el arca y el ejército dormían en tiendas.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'azotea_palacio' }
          ]
        },
        {
          id: 'J',
          name: 'Joab',
          role: 'General del Ejército',
          avatar: '🛡️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Ubicó a Urías en el sector más peligroso y ordenó la retirada estratégica.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_joab' }
          ]
        },
        {
          id: 'M',
          name: 'Mensajero Real',
          role: 'Emisario de Campaña',
          avatar: '📜',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Llevó al rey la noticia de la caída de varios oficiales y la muerte de Urías.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_joab' },
            { tipo: 'columnaObjeto', objeto: '0,5' }
          ]
        },
        {
          id: 'G',
          name: 'Guardia del Umbral',
          role: 'Centinela de Palacio',
          avatar: '🗡️',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Vio a Urías descansar junto a los siervos de su señor sin cruzar el portal de su casa.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'umbral_guardia' }
          ]
        },
        {
          id: 'C',
          name: 'Capitán de Vanguardia',
          role: 'Oficial de Asalto',
          avatar: '🏹',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Atestiguó el retroceso premeditado de las líneas bajo los muros amonitas.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'muralla_raba' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El rey se quedó en palacio mientras su ejército luchaba en campaña militar contra los amonitas.',
          narrative: 'David permaneció ocioso en Jerusalén delegando el asedio en Joab.',
          relatedSuspects: ['D', 'J']
        },
        {
          id: 'c2',
          text: 'Desde la azotea, el monarca vio a la esposa de uno de sus guerreros purificándose y cometió adulterio con ella.',
          narrative: 'Betsabé fue conducida a la cámara real tras ser avistada desde las alturas.',
          relatedSuspects: ['D', 'B']
        },
        {
          id: 'c3',
          text: 'Al quedar encinta la mujer, el rey intentó que el esposo volviera a dormir a su casa para encubrir la paternidad.',
          narrative: 'Urías fue llamado del frente con preguntas fingidas sobre la marcha de la guerra.',
          relatedSuspects: ['D', 'U']
        },
        {
          id: 'c4',
          text: 'El guerrero se negó a ir a su casa por solidaridad con las tropas que dormían en tiendas de campaña.',
          narrative: 'Urías durmió en el umbral junto a la guardia custodiada por centinelas.',
          relatedSuspects: ['U', 'G']
        },
        {
          id: 'c5',
          text: 'El guerrero llevó al comandante general una carta sellada escrita por el rey, ignorando que contenía su propia sentencia.',
          narrative: 'Urías entregó en mano su propia sentencia al general Joab.',
          relatedSuspects: ['U', 'J']
        },
        {
          id: 'c6',
          text: 'El comandante cumplió la orden: expuso al guerrero en la primera línea de combate y ordenó la retirada para que lo mataran.',
          narrative: 'Joab y el capitán de asalto dejaron desprotegido a Urías bajo los muros de Rabá.',
          relatedSuspects: ['J', 'C', 'U']
        },
        {
          id: 'c7',
          text: 'La viuda guardó el luto oficial, pero inmediatamente fue instalada en el harén del monarca culpable.',
          narrative: 'El mensajero real confirmó a David el fallecimiento para ultimar el enlace.',
          relatedSuspects: ['B', 'D', 'M']
        }
      ],
      solution: {
        D: { row: 0, col: 3 },
        B: { row: 4, col: 1 },
        U: { row: 1, col: 0 },
        J: { row: 3, col: 4 },
        M: { row: 2, col: 5 },
        G: { row: 5, col: 2 },
        C: { row: 6, col: 6 }
      }
    }
  },

  // RETO 003-C: El Viñedo Ensangrentado
  {
    id: '003-C',
    nombre: 'El Viñedo Ensangrentado',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Asesinatos o crímenes',
      citasBiblicas: '1 Reyes 21, 1-24',
      textoBiblicoClave: 'Jezabel le dijo: «Levántate, come y anímate. Yo te daré la viña de Nabot, el de Jezrael».',
      contextoTeologico: 'Es un clásico de la denuncia profética contra el latifundismo. Fe Adulta resalta que la monarquía corrompe el derecho antiguo de Israel (la tierra pertenece a Dios). El profeta defiende la justicia social frente al absolutismo.',
      solucionExplicacion: 'La reina Jezabel orquestó un juicio falso con testigos comprados para asesinar a Nabot y así regalarle su viña al rey Acab. El profeta Elías intervino para denunciar este crimen de Estado.',
      storyIntro: 'Un terrateniente se niega a vender un pequeño campo familiar al rey. Semanas después, es ejecutado públicamente por blasfemia y el rey toma posesión del terreno, pero un profeta lo intercepta en la misma finca.',
      epilogue: '¡La viña de Jezrael manchada de sangre inocente! Elías el tisbita confrontó cara a cara a Acab: en el mismo lugar donde los perros lamieron la sangre de Nabot, la justicia divina sentenció la caída de la casa de Omrí.',
      subtitle: 'Asesinatos o crímenes · 1 Reyes 21 · 7x7',
      badge: 'EL VIÑEDO ENSANGRENTADO · 7x7',
      victimId: 'N',
      murdererId: 'J',
      rooms: {
        palacio_acab: {
          id: 'palacio_acab',
          name: 'Palacio Real de Samaria',
          shortName: 'Palacio Acab',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Cámara donde Acab se acostó en su lecho, volvió su rostro a la pared y se negó a comer.'
        },
        vina_nabot: {
          id: 'vina_nabot',
          name: 'Viña Ancestral de Nabot',
          shortName: 'Viña Nabot',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Fértil heredad contigua al palacio que Nabot no quiso enajenar por fidelidad a la Alianza.'
        },
        asamblea_ciudad: {
          id: 'asamblea_ciudad',
          name: 'Plaza del Tribunal y Ayuno',
          shortName: 'Plaza Tribunal',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Lugar donde se convocó el ayuno farsesco y se sentó a Nabot a la cabeza del pueblo.'
        },
        pedregal_lapidacion: {
          id: 'pedregal_lapidacion',
          name: 'Pedregal de la Lapidación',
          shortName: 'Pedregal',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Extramuros de la ciudad donde Nabot fue lapidado por orden de los falsos testigos.'
        },
        camino_elias: {
          id: 'camino_elias',
          name: 'Sendero Profético del Carmelo',
          shortName: 'Sendero Elías',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Ruta por la que Elías descendió con la palabra de Yahvé encendida en su garganta.'
        }
      },
      cellRooms: [
        ['palacio_acab', 'palacio_acab', 'palacio_acab', 'vina_nabot', 'vina_nabot', 'vina_nabot', 'vina_nabot'],
        ['palacio_acab', 'palacio_acab', 'palacio_acab', 'vina_nabot', 'vina_nabot', 'vina_nabot', 'vina_nabot'],
        ['asamblea_ciudad', 'asamblea_ciudad', 'asamblea_ciudad', 'asamblea_ciudad', 'vina_nabot', 'vina_nabot', 'vina_nabot'],
        ['asamblea_ciudad', 'asamblea_ciudad', 'asamblea_ciudad', 'asamblea_ciudad', 'asamblea_ciudad', 'asamblea_ciudad', 'pedregal_lapidacion'],
        ['camino_elias', 'camino_elias', 'asamblea_ciudad', 'asamblea_ciudad', 'pedregal_lapidacion', 'pedregal_lapidacion', 'pedregal_lapidacion'],
        ['camino_elias', 'camino_elias', 'camino_elias', 'camino_elias', 'camino_elias', 'camino_elias', 'pedregal_lapidacion'],
        ['camino_elias', 'camino_elias', 'camino_elias', 'camino_elias', 'camino_elias', 'pedregal_lapidacion', 'pedregal_lapidacion']
      ],
      blockedObjects: {
        '0,3': {
          emoji: '🍇',
          name: 'Pámpanos y Racimos de la Viña',
          evidenceCode: 'EV-01',
          description: 'Viñedo codiciado por el rey para transformarlo en huerta de hortalizas.'
        },
        '2,4': {
          emoji: '📜',
          name: 'Cartas Reales Selladas por Jezabel',
          evidenceCode: 'EV-02',
          description: 'Instrucciones secretas dirigidas a los ancianos para contratar testigos de perjurio.'
        },
        '4,6': {
          emoji: '🪨',
          name: 'Montón de Piedras de la Ejecución',
          evidenceCode: 'EV-03',
          description: 'Rocas ensangrentadas arrojadas contra el justo Nabot fuera de los muros.'
        },
        '6,0': {
          emoji: '🔥',
          name: 'Manto de Pelo de Elías',
          evidenceCode: 'EV-04',
          description: 'Símbolo del profetismo incorruptible que denunció la tiranía del estado.'
        }
      },
      suspects: [
        {
          id: 'A',
          name: 'Acab',
          role: 'Rey de Israel',
          avatar: '👑',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Aceptó la viña arrebatada bajando eufórico a tomar posesión de ella.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'palacio_acab' },
            { tipo: 'filaObjeto', objeto: '0,3' }
          ]
        },
        {
          id: 'J',
          name: 'Jezabel',
          role: 'Reina de Israel',
          avatar: '🦹‍♀️',
          color: 'from-purple-600 to-purple-800',
          isMurderer: true,
          clueText: 'Usó el sello del rey y orquestó la condena a muerte con testigos comprados.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'vina_nabot' },
            { tipo: 'columnaObjeto', objeto: '2,4' }
          ]
        },
        {
          id: 'N',
          name: 'Nabot',
          role: 'Terrateniente Legítimo',
          avatar: '🍇',
          color: 'from-emerald-600 to-emerald-800',
          isVictim: true,
          clueText: 'Declaró: "Líbreme Yahvé de darte la heredad de mis padres".',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'vina_nabot' }
          ]
        },
        {
          id: 'T1',
          name: 'Primer Testigo Falso',
          role: 'Acusador de Belial',
          avatar: '🗣️',
          color: 'from-red-600 to-red-800',
          clueText: 'Afirmó falsamente en el tribunal: "Nabot ha maldecido a Dios y al rey".',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'pedregal_lapidacion' }
          ]
        },
        {
          id: 'T2',
          name: 'Segundo Testigo Falso',
          role: 'Cómplice de Perjurio',
          avatar: '👤',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Secundó la calumnia para asegurar la sentencia de lapidación inmediata.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'asamblea_ciudad' },
            { tipo: 'filaObjeto', objeto: '4,6' }
          ]
        },
        {
          id: 'E',
          name: 'Elías',
          role: 'Profeta de Yahvé',
          avatar: '📜',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Interceptó al rey en la viña diciendo: "¿Has asesinado y encima tomas posesión?".',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_elias' },
            { tipo: 'columnaObjeto', objeto: '6,0' }
          ]
        },
        {
          id: 'M',
          name: 'Mayordomo de Samaria',
          role: 'Funcionario Cómplice',
          avatar: '🏛️',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Transmitió las cartas de la reina a los magistrados de Jezrael.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_elias' },
            { tipo: 'columnaObjeto', objeto: '0,3' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El monarca se encaprichó de una viña contigua a su palacio para convertirla en un huerto de hortalizas.',
          narrative: 'Acab ofreció dinero o una viña mejor al campesino de Jezrael.',
          relatedSuspects: ['A', 'N']
        },
        {
          id: 'c2',
          text: 'El propietario se negó a venderla apelando a la ley sagrada que prohibía enajenar la herencia familiar.',
          narrative: 'Nabot defendió la propiedad heredada de sus antepasados ante el rey.',
          relatedSuspects: ['N', 'A']
        },
        {
          id: 'c3',
          text: 'El monarca reaccionó con un berrinche infantil, negándose a comer y tumbándose de cara a la pared.',
          narrative: 'Acab guardó cama entristecido en su palacio real.',
          relatedSuspects: ['A']
        },
        {
          id: 'c4',
          text: 'Su esposa extranjera usurpó el sello real y escribió cartas a los ancianos de la ciudad en nombre del rey.',
          narrative: 'Jezabel prometió a Acab que ella misma le conseguiría la viña de Nabot.',
          relatedSuspects: ['J', 'M']
        },
        {
          id: 'c5',
          text: 'Siguiendo las cartas, se convocó un ayuno público y se sentó al propietario de la viña en un lugar destacado.',
          narrative: 'Los ancianos prepararon el falso juicio en la plaza de la ciudad.',
          relatedSuspects: ['N', 'M']
        },
        {
          id: 'c6',
          text: 'Dos hombres sin escrúpulos acusaron falsamente al propietario de blasfemar contra Dios y contra la corona.',
          narrative: 'Los dos testigos sobornados consumaron la calumnia en presencia de todo el pueblo.',
          relatedSuspects: ['T1', 'T2', 'N']
        },
        {
          id: 'c7',
          text: 'Tras ser lapidado injustamente, el monarca bajó a tomar el terreno, pero el profeta de Yahvé le anunció la ruina de su dinastía.',
          narrative: 'Elías se plantó ante Acab en medio de los viñedos ensangrentados.',
          relatedSuspects: ['E', 'A', 'N']
        }
      ],
      solution: {
        A: { row: 0, col: 1 },
        J: { row: 1, col: 4 },
        N: { row: 2, col: 5 },
        T1: { row: 3, col: 6 },
        T2: { row: 4, col: 2 },
        E: { row: 5, col: 0 },
        M: { row: 6, col: 3 }
      }
    }
  },

  // RETO 004-C: El Falso Enfermo
  {
    id: '004-C',
    nombre: 'El Falso Enfermo',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Asesinatos o crímenes',
      citasBiblicas: '2 Samuel 13, 1-22',
      textoBiblicoClave: 'Pero él no quiso escucharla, sino que, siendo más fuerte, la forzó y se acostó con ella.',
      contextoTeologico: 'Revela las funestas consecuencias del pecado reproduciéndose en la familia real. Teológicamente, condena la violencia contra las mujeres y critica la inacción patriarcal de David, quien se enfurece pero no ejerce la justicia.',
      solucionExplicacion: 'Amnón, aconsejado por Jonadab, fingió enfermedad para violar a su media hermana Tamar. Tras forzarla, la despreció. Absalón, hermano de Tamar, la acogió y juró vengar el ultraje asesinando posteriormente a Amnón.',
      storyIntro: 'Un príncipe simula estar al borde de la muerte para conseguir que su media hermana entre a su habitación privada. El engaño termina en una tragedia que dividirá a la familia real para siempre.',
      epilogue: '¡Crimen infame en el aposento regio! La simulación del falso convaleciente quedó expuesta. Tamar cubrió su cabeza de ceniza con la túnica de mangas rasgada, mientras Absalón sellaba en su corazón la venganza que estallaría dos años después.',
      subtitle: 'Asesinatos o crímenes · 2 Samuel 13 · 7x7',
      badge: 'EL FALSO ENFERMO · 7x7',
      victimId: 'T',
      murdererId: 'A',
      rooms: {
        lecho_amnon: {
          id: 'lecho_amnon',
          name: 'Aposento Privado de Amnón',
          shortName: 'Lecho Amnón',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Habitación cerrada con pestillo donde el primogénito fingió consunción para perpetrar el ultraje.'
        },
        cocina_tortas: {
          id: 'cocina_tortas',
          name: 'Mesa de las Tortas Rituales',
          shortName: 'Mesa Tortas',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Lugar donde Tamar amasó a la vista del supuesto enfermo las tortas reconfortantes.'
        },
        palacio_david: {
          id: 'palacio_david',
          name: 'Sala de Audiencias de David',
          shortName: 'Palacio David',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Trono donde el rey atendió el ruego engañoso de Amnón y ordenó a su hija que acudiera.'
        },
        residencia_absalon: {
          id: 'residencia_absalon',
          name: 'Mansión Protectora de Absalón',
          shortName: 'Casa Absalón',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Refugio fraterno donde Tamar desolada halló asilo y su hermano juró silencio y venganza.'
        },
        galeria_cerrojos: {
          id: 'galeria_cerrojos',
          name: 'Galería del Cerrojo Exterior',
          shortName: 'Galería Cerrojo',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Pasillo donde el sirviente expulsó bruscamente a la doncella echando la tranca.'
        }
      },
      cellRooms: [
        ['palacio_david', 'palacio_david', 'lecho_amnon', 'lecho_amnon', 'lecho_amnon', 'cocina_tortas', 'cocina_tortas'],
        ['palacio_david', 'palacio_david', 'lecho_amnon', 'lecho_amnon', 'cocina_tortas', 'cocina_tortas', 'cocina_tortas'],
        ['palacio_david', 'palacio_david', 'galeria_cerrojos', 'galeria_cerrojos', 'cocina_tortas', 'cocina_tortas', 'cocina_tortas'],
        ['residencia_absalon', 'residencia_absalon', 'galeria_cerrojos', 'galeria_cerrojos', 'galeria_cerrojos', 'galeria_cerrojos', 'galeria_cerrojos'],
        ['residencia_absalon', 'residencia_absalon', 'galeria_cerrojos', 'galeria_cerrojos', 'galeria_cerrojos', 'galeria_cerrojos', 'galeria_cerrojos'],
        ['residencia_absalon', 'residencia_absalon', 'galeria_cerrojos', 'galeria_cerrojos', 'galeria_cerrojos', 'galeria_cerrojos', 'galeria_cerrojos'],
        ['residencia_absalon', 'residencia_absalon', 'galeria_cerrojos', 'galeria_cerrojos', 'galeria_cerrojos', 'galeria_cerrojos', 'galeria_cerrojos']
      ],
      blockedObjects: {
        '0,0': {
          emoji: '🥣',
          name: 'Fuente de Harina y Sartén',
          evidenceCode: 'EV-01',
          description: 'Ingredientes con los que la princesa cocinó en favor de su hermano.'
        },
        '2,3': {
          emoji: '👗',
          name: 'Túnica de Mangas Largas Rasgada',
          evidenceCode: 'EV-02',
          description: 'Vestimenta talar propia de las hijas vírgenes del rey, desgarrada por el dolor.'
        },
        '4,5': {
          emoji: '🔒',
          name: 'Cerrojo de Hierro de la Puerta',
          evidenceCode: 'EV-03',
          description: 'Tranca que el criado aseguró al arrojar a Tamar al exterior de la alcoba.'
        },
        '6,1': {
          emoji: '🗡️',
          name: 'Daga Vengadora de Absalón',
          evidenceCode: 'EV-04',
          description: 'Acero afilado en secreto por el hermano de madre para ajustar cuentas en Baal-Jasor.'
        }
      },
      suspects: [
        {
          id: 'A',
          name: 'Amnón',
          role: 'Príncipe Primogénito',
          avatar: '🥀',
          color: 'from-red-600 to-red-800',
          isMurderer: true,
          clueText: 'Simuló postración fingida y después aborreció a su hermana con mayor desprecio que amor.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'cocina_tortas' },
            { tipo: 'filaObjeto', objeto: '0,0' }
          ]
        },
        {
          id: 'T',
          name: 'Tamar',
          role: 'Princesa Hermana de Absalón',
          avatar: '👸',
          color: 'from-rose-600 to-rose-800',
          isVictim: true,
          clueText: 'Suplicó a Amnón que no cometiera tal villanía y pidió que hablara con el rey.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'cocina_tortas' }
          ]
        },
        {
          id: 'J',
          name: 'Jonadab',
          role: 'Consejero y Primo',
          avatar: '🦊',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Sugeridor del maquiavélico engaño de la falsa enfermedad al primogénito.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'palacio_david' },
            { tipo: 'filaObjeto', objeto: '2,3' },
            { tipo: 'columnaObjeto', objeto: '6,1' }
          ]
        },
        {
          id: 'D',
          name: 'David',
          role: 'Rey y Padre',
          avatar: '👑',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Envió a Tamar a la casa de Amnón y aunque se enfureció no castigó a su heredero.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'galeria_cerrojos' },
            { tipo: 'junto_objeto', objeto: '2,3' }
          ]
        },
        {
          id: 'B',
          name: 'Absalón',
          role: 'Hermano Protector',
          avatar: '🛡️',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Recibió a su hermana desolada en su casa y urdió la venganza silenciosa.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'residencia_absalon' },
            { tipo: 'filaObjeto', objeto: '4,5' }
          ]
        },
        {
          id: 'M',
          name: 'Doncella de Tamar',
          role: 'Criada de Compañía',
          avatar: '🧕',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Ordenada a salir de la cámara junto con todos los criados antes del ataque.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'galeria_cerrojos' },
            { tipo: 'borde', lado: 'este' }
          ]
        },
        {
          id: 'S',
          name: 'Siervo de la Puerta',
          role: 'Criado de Amnón',
          avatar: '🚪',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Cumplió la orden de sacar a la doncella a la fuerza y echar el cerrojo tras ella.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'galeria_cerrojos' },
            { tipo: 'filaObjeto', objeto: '6,1' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El hijo primogénito del rey se consumía de deseo prohibido por su media hermana, que era virgen.',
          narrative: 'Amnón se consumía en secreto por Tamar en el palacio real.',
          relatedSuspects: ['A', 'T']
        },
        {
          id: 'c2',
          text: 'Un primo astuto sugirió al primogénito que fingiera estar gravemente enfermo para recibir la visita del rey.',
          narrative: 'Jonadab ideó la celada valiéndose del afecto paternal de David.',
          relatedSuspects: ['J', 'A', 'D']
        },
        {
          id: 'c3',
          text: 'El rey, engañado por la farsa, ordenó a su hija que preparara unas tortas a la vista del supuesto enfermo.',
          narrative: 'David envió a Tamar a la casa de su medio hermano ignorando el peligro.',
          relatedSuspects: ['D', 'T']
        },
        {
          id: 'c4',
          text: 'Una vez solos en la habitación, el primogénito forzó a la joven, ignorando sus súplicas y su oferta de un matrimonio legal.',
          narrative: 'Amnón despidió a los criados y cometió el violento ultraje.',
          relatedSuspects: ['A', 'T', 'M']
        },
        {
          id: 'c5',
          text: 'Inmediatamente después del crimen, el amor obsesivo del agresor se transformó en asco visceral y la expulsó.',
          narrative: 'El agresor ordenó a su siervo echarla fuera sin contemplación.',
          relatedSuspects: ['A', 'S']
        },
        {
          id: 'c6',
          text: 'La víctima rasgó su túnica de mangas largas (propia de princesas) y echó ceniza sobre su cabeza llorando a gritos.',
          narrative: 'Tamar proclamó su ultraje por las calles de Jerusalén con duelo amargo.',
          relatedSuspects: ['T']
        },
        {
          id: 'c7',
          text: 'Su hermano de padre y madre la acogió en su casa y planeó en silencio una venganza mortal.',
          narrative: 'Absalón dio cobijo a su hermana y selló en su memoria la afrenta de Amnón.',
          relatedSuspects: ['B', 'T', 'A']
        }
      ],
      solution: {
        A: { row: 0, col: 5 },
        T: { row: 1, col: 4 },
        J: { row: 2, col: 1 },
        D: { row: 3, col: 3 },
        B: { row: 4, col: 0 },
        M: { row: 5, col: 6 },
        S: { row: 6, col: 2 }
      }
    }
  },

  // RETO 006-C: El Manto Rasgado
  {
    id: '006-C',
    nombre: 'El Manto Rasgado',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: '1 Reyes 11, 1-40',
      textoBiblicoClave: 'Ajías agarró el manto nuevo que llevaba, lo rasgó en doce pedazos y dijo a Jeroboán: «Toma diez pedazos...»',
      contextoTeologico: 'Explica teológicamente el Cisma de Israel. Fe Adulta muestra que la "gloria" salomónica se basaba en la opresión laboral y el sincretismo. La infidelidad a la Alianza y la injusticia social destruyen la unidad nacional.',
      solucionExplicacion: 'Debido a la idolatría de Salomón, el profeta Ajías rasgó su manto en doce trozos, dando diez a Jeroboán para profetizar que Dios fracturaría el imperio, entregándole el gobierno de las diez tribus del norte (Cisma).',
      storyIntro: 'El monarca más glorioso de Israel mancha su legado permitiendo el culto a dioses extranjeros. En respuesta, un enigmático encuentro en pleno campo con un manto nuevo predice la inevitable fractura del país.',
      epilogue: '¡El imperio desgajado en diez pedazos! El manto nuevo rasgado por Ajías de Siló sentenció la ruina de la dinastía unida. La prepotencia fiscal y el culto a Astarté quebraron el sueño salomónico para siempre.',
      subtitle: 'Descubrimiento de acciones ocultas · 1 Reyes 11 · 7x7',
      badge: 'EL MANTO RASGADO · 7x7',
      victimId: 'S',
      murdererId: 'J',
      rooms: {
        palacio_idolatrico: {
          id: 'palacio_idolatrico',
          name: 'Altos de Culto Pagano de Salomón',
          shortName: 'Altos Pagano',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Santuarios erigidos frente a Jerusalén a Milcom y Quemós para complacer a sus esposas extranjeras.'
        },
        campo_silo: {
          id: 'campo_silo',
          name: 'Campo Desierto en las Afueras de Jerusalén',
          shortName: 'Campo Siló',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Lugar solitario donde el profeta Ajías y el capataz Jeroboán se encontraron a solas.'
        },
        obras_milo: {
          id: 'obras_milo',
          name: 'Fortificación del Milo y Muro Real',
          shortName: 'Obras Milo',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Construcciones masivas donde los siervos de la casa de José sufrían duros trabajos forzados.'
        },
        camara_reina: {
          id: 'camara_reina',
          name: 'Aposento de la Reina Naamá',
          shortName: 'Cámara Naamá',
          bgColor: 'bg-sky-100/70',
          borderColor: 'border-sky-700/60',
          textColor: 'text-sky-950',
          tagColor: 'bg-sky-800 text-sky-100',
          description: 'Recinto de la princesa amonita, madre de Roboán, cuyo culto idolátrico desvió al sabio rey.'
        },
        frontera_egipto: {
          id: 'frontera_egipto',
          name: 'Ruta de Exilio hacia Egipto',
          shortName: 'Ruta Egipto',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Camino por el que Jeroboán huyó buscando refugio bajo la protección del faraón Sisac.'
        }
      },
      cellRooms: [
        ['palacio_idolatrico', 'palacio_idolatrico', 'palacio_idolatrico', 'palacio_idolatrico', 'palacio_idolatrico', 'camara_reina', 'camara_reina'],
        ['campo_silo', 'campo_silo', 'obras_milo', 'obras_milo', 'obras_milo', 'camara_reina', 'camara_reina'],
        ['campo_silo', 'campo_silo', 'campo_silo', 'campo_silo', 'obras_milo', 'obras_milo', 'camara_reina'],
        ['obras_milo', 'obras_milo', 'obras_milo', 'obras_milo', 'obras_milo', 'camara_reina', 'camara_reina'],
        ['obras_milo', 'obras_milo', 'obras_milo', 'frontera_egipto', 'frontera_egipto', 'frontera_egipto', 'frontera_egipto'],
        ['frontera_egipto', 'frontera_egipto', 'frontera_egipto', 'frontera_egipto', 'frontera_egipto', 'frontera_egipto', 'frontera_egipto'],
        ['frontera_egipto', 'frontera_egipto', 'frontera_egipto', 'frontera_egipto', 'frontera_egipto', 'frontera_egipto', 'frontera_egipto']
      ],
      blockedObjects: {
        '0,2': {
          emoji: '🗿',
          name: 'Altar de Astarté y Quemós',
          evidenceCode: 'EV-01',
          description: 'Santuarios idolátricos construidos sobre el monte de los Olivos por Salomón.'
        },
        '2,5': {
          emoji: '👘',
          name: 'Retazos del Manto Rasgado',
          evidenceCode: 'EV-02',
          description: 'Diez trozos de tela nueva que anunciaron la entrega de diez tribus al rebelde.'
        },
        '4,4': {
          emoji: '🔨',
          name: 'Maza de Piedra de las Obras del Milo',
          evidenceCode: 'EV-03',
          description: 'Herramienta de cantera que atestiguaba la explotación de la tribu de Efraín.'
        },
        '6,0': {
          emoji: '🏺',
          name: 'Vasija del Faraón Sisac',
          evidenceCode: 'EV-04',
          description: 'Emblema del asilo que el monarca egipcio concedió al fugitivo Jeroboán.'
        }
      },
      suspects: [
        {
          id: 'S',
          name: 'Salomón',
          role: 'Rey en Ocaso',
          avatar: '👑',
          color: 'from-amber-600 to-amber-800',
          isVictim: true,
          clueText: 'Quiso matar a Jeroboán apenas llegó a sus oídos el oráculo del profeta de Siló.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'campo_silo' }
          ]
        },
        {
          id: 'J',
          name: 'Jeroboán',
          role: 'Capataz Efraimita',
          avatar: '⚒️',
          color: 'from-emerald-600 to-emerald-800',
          isMurderer: true,
          clueText: 'Recibió diez de los doce trozos y se alzó como futuro rey del reino del norte.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'campo_silo' },
            { tipo: 'columnaObjeto', objeto: '6,0' }
          ]
        },
        {
          id: 'A',
          name: 'Ajías',
          role: 'Profeta de Siló',
          avatar: '📜',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Interceptó al capataz a solas en el camino y rasgó su manto flamante en doce jirones.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'obras_milo' },
            { tipo: 'columnaObjeto', objeto: '4,4' }
          ]
        },
        {
          id: 'N',
          name: 'Naamá',
          role: 'Esposa Amonita',
          avatar: '👸',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Mantuvo las ofrendas a Moloc en Jerusalén impulsando el corazón del rey al extravío.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camara_reina' }
          ]
        },
        {
          id: 'R',
          name: 'Roboán',
          role: 'Príncipe Heredero',
          avatar: '🤴',
          color: 'from-rose-600 to-rose-800',
          clueText: 'Futuro rey que respondería a los ancianos con látigos y escorpiones provocando el cisma.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'obras_milo' }
          ]
        },
        {
          id: 'C',
          name: 'Capataz Real',
          role: 'Inspector de Canteras',
          avatar: '🏗️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Supervisaba a las cuadrillas de leñadores y albañiles del norte bajo órdenes de Jeroboán.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'frontera_egipto' },
            { tipo: 'columnaObjeto', objeto: '2,5' }
          ]
        },
        {
          id: 'H',
          name: 'Heraldo de Siló',
          role: 'Testigo del Campo',
          avatar: '🚶',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Vio al profeta regresar a Siló vistiendo únicamente su sayal raído.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'frontera_egipto' },
            { tipo: 'columnaObjeto', objeto: '0,2' },
            { tipo: 'filaObjeto', objeto: '6,0' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El rey sabio de Israel envejeció y se dejó seducir por sus numerosas esposas paganas.',
          narrative: 'Salomón desvió su fidelidad al Dios único adorando deidades extranjeras.',
          relatedSuspects: ['S', 'N']
        },
        {
          id: 'c2',
          text: 'El rey comenzó a construir santuarios a dioses extranjeros frente a Jerusalén, rompiendo la exclusividad de Yahvé.',
          narrative: 'Naamá y otras princesas extranjeras promovieron templos a Quemós y Milcom.',
          relatedSuspects: ['S', 'N']
        },
        {
          id: 'c3',
          text: 'Un eficiente capataz de la tribu de Efraín fue puesto a cargo de los trabajos forzados del norte.',
          narrative: 'Jeroboán se destacó en las obras del Milo y recibió mando sobre las levas de José.',
          relatedSuspects: ['J', 'C']
        },
        {
          id: 'c4',
          text: 'Un profeta de Siló interceptó al capataz cuando este salía de Jerusalén y se quedaron a solas en el campo.',
          narrative: 'Ajías abordó al joven funcionario en un descampado sin testigos.',
          relatedSuspects: ['A', 'J']
        },
        {
          id: 'c5',
          text: 'El profeta llevaba un manto nuevo, el cual rasgó violentamente en doce pedazos ante el capataz.',
          narrative: 'Ajías ejecutó la acción profética desgarrando su prenda flamante.',
          relatedSuspects: ['A', 'J']
        },
        {
          id: 'c6',
          text: 'La acción simbolizaba que Dios arrancaría la mayor parte del reino a la dinastía reinante, dejando solo una tribu.',
          narrative: 'Roboán retendría tan solo una tribu por amor a la memoria de David.',
          relatedSuspects: ['A', 'R', 'J']
        },
        {
          id: 'c7',
          text: 'Al enterarse de la profecía, el rey intentó asesinar al capataz, quien tuvo que exiliarse en Egipto.',
          narrative: 'Salomón persiguió a muerte a Jeroboán, quien huyó con el heraldo hacia la corte de Sisac.',
          relatedSuspects: ['S', 'J', 'H']
        }
      ],
      solution: {
        S: { row: 2, col: 3 },
        J: { row: 1, col: 0 },
        A: { row: 3, col: 4 },
        N: { row: 0, col: 6 },
        R: { row: 4, col: 1 },
        C: { row: 5, col: 5 },
        H: { row: 6, col: 2 }
      }
    }
  },

  // RETO 008-C: Atrapado en la Encina
  {
    id: '008-C',
    nombre: 'Atrapado en la Encina',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Desenlaces de historias y parábolas',
      citasBiblicas: '2 Samuel 18, 1-33',
      textoBiblicoClave: 'Joab agarró tres dardos y se los clavó en el corazón a Absalón, que aún estaba vivo, enredado en la encina.',
      contextoTeologico: 'El trágico desenlace de la guerra civil muestra el dolor paternal frente a la razón de Estado. Teológicamente, subraya que la ambición política y la vanidad (simbolizada por el cabello) conducen ineludiblemente a la ruina.',
      solucionExplicacion: 'Absalón quedó colgado de una encina por su larga cabellera tras huir en la batalla. Joab, desobedeciendo la orden de David de perdonarle la vida, lo asesinó clavándole tres dardos mientras colgaba del árbol.',
      storyIntro: 'Un líder rebelde huye en medio de una masacre en el bosque. Su mayor orgullo físico se convierte en su trampa mortal, y el general de su propio padre lo ejecuta a sangre fría, desobedeciendo órdenes directas.',
      epilogue: '¡Tres dardos en el corazón del usurpador! Absalón quedó suspendido entre el cielo y la tierra en la espesura del bosque de Efraín. Joab consumó la ejecución sin titubear, mientras David lloraba en la puerta de la ciudad: «¡Hijo mío Absalón, quién me diera haber muerto en tu lugar!»',
      subtitle: 'Desenlaces de historias y parábolas · 2 Samuel 18 · 7x7',
      badge: 'ATRAPADO EN LA ENCINA · 7x7',
      victimId: 'A',
      murdererId: 'J',
      rooms: {
        bosque_efrain: {
          id: 'bosque_efrain',
          name: 'Espesura del Bosque de Efraín',
          shortName: 'Bosque Efraín',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Maleza inextricable y barrancos donde el bosque devoró más soldados que la espada.'
        },
        gran_encina: {
          id: 'gran_encina',
          name: 'Copa de la Gran Encina Centenaria',
          shortName: 'Gran Encina',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Ramas gruesas donde la cabellera de Absalón quedó atrapada mientras su mulo siguió de largo.'
        },
        puerta_majanayin: {
          id: 'puerta_majanayin',
          name: 'Portal y Torre de Majanayin',
          shortName: 'Torre Majanayin',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Acceso a la plaza fortificada donde el rey David aguardaba noticias con el corazón encogido.'
        },
        camino_llanura: {
          id: 'camino_llanura',
          name: 'Camino de la Llanura del Jordán',
          shortName: 'Camino Llanura',
          bgColor: 'bg-sky-100/70',
          borderColor: 'border-sky-700/60',
          textColor: 'text-sky-950',
          tagColor: 'bg-sky-800 text-sky-100',
          description: 'Ruta despejada por donde corrió velozmente el mensajero Ahimaas adelantando a los emisarios.'
        },
        fosa_pedruscos: {
          id: 'fosa_pedruscos',
          name: 'Gran Fosa y Montículo de Piedras',
          shortName: 'Fosa Pedruscos',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Hoyo profundo en el bosque donde arrojaron el cuerpo sin vida de Absalón cubierto de piedras.'
        }
      },
      cellRooms: [
        ['bosque_efrain', 'bosque_efrain', 'gran_encina', 'gran_encina', 'gran_encina', 'gran_encina', 'puerta_majanayin'],
        ['bosque_efrain', 'bosque_efrain', 'gran_encina', 'gran_encina', 'camino_llanura', 'puerta_majanayin', 'puerta_majanayin'],
        ['bosque_efrain', 'bosque_efrain', 'bosque_efrain', 'camino_llanura', 'camino_llanura', 'puerta_majanayin', 'puerta_majanayin'],
        ['bosque_efrain', 'fosa_pedruscos', 'camino_llanura', 'camino_llanura', 'camino_llanura', 'puerta_majanayin', 'puerta_majanayin'],
        ['fosa_pedruscos', 'fosa_pedruscos', 'camino_llanura', 'camino_llanura', 'puerta_majanayin', 'puerta_majanayin', 'puerta_majanayin'],
        ['fosa_pedruscos', 'fosa_pedruscos', 'fosa_pedruscos', 'camino_llanura', 'puerta_majanayin', 'puerta_majanayin', 'puerta_majanayin'],
        ['fosa_pedruscos', 'fosa_pedruscos', 'fosa_pedruscos', 'puerta_majanayin', 'puerta_majanayin', 'puerta_majanayin', 'puerta_majanayin']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '🐴',
          name: 'Mulo Real que Siguió de Largo',
          evidenceCode: 'EV-01',
          description: 'Cabalgadura sobre la que escapaba el rebelde hasta quedar suspendido de las ramas.'
        },
        '2,4': {
          emoji: '🎯',
          name: 'Tres Dardos de Joab',
          evidenceCode: 'EV-02',
          description: 'Saetas mortales clavadas con saña en el pecho de Absalón por el general.'
        },
        '4,6': {
          emoji: '🎺',
          name: 'Cuerno de Shofar del Alto el Fuego',
          evidenceCode: 'EV-03',
          description: 'Corneta con la que Joab detuvo la matanza tras abatir al cabecilla.'
        },
        '6,2': {
          emoji: '🪨',
          name: 'Túmulo Fúnebre en el Bosque',
          evidenceCode: 'EV-04',
          description: 'Enorme montón de pedruscos erigido sobre el cadáver del hijo del rey.'
        }
      },
      suspects: [
        {
          id: 'A',
          name: 'Absalón',
          role: 'Príncipe Usurpador',
          avatar: '🦁',
          color: 'from-amber-600 to-amber-800',
          isVictim: true,
          clueText: 'Atrapado indefenso por su cabellera entre el cielo y la tierra en la gran encina.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'gran_encina' },
            { tipo: 'esteDe', sospechoso: 'C' }
          ]
        },
        {
          id: 'J',
          name: 'Joab',
          role: 'Comandante en Jefe',
          avatar: '🗡️',
          color: 'from-red-600 to-red-800',
          isMurderer: true,
          clueText: 'Despreció la orden expresa de clemencia del rey y ejecutó personalmente a Absalón.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'gran_encina' },
            { tipo: 'columnaObjeto', objeto: '6,2' }
          ]
        },
        {
          id: 'D',
          name: 'David',
          role: 'Rey y Padre Afligido',
          avatar: '👑',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Ordenó a todos sus mandos: "Tratadme con suavidad al joven Absalón".',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_majanayin' },
            { tipo: 'filaObjeto', objeto: '2,4' }
          ]
        },
        {
          id: 'S',
          name: 'Soldado Informador',
          role: 'Guerrero Temeroso de Dios',
          avatar: '🛡️',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Rechazó las diez monedas de Joab diciendo que no tocaría al hijo del monarca ni por mil siclos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'bosque_efrain' }
          ]
        },
        {
          id: 'M',
          name: 'Ahimaas',
          role: 'Mensajero Veloz',
          avatar: '🏃',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Corrió por el atajo del valle para llevar primero la noticia del triunfo militar.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_llanura' },
            { tipo: 'filaObjeto', objeto: '4,6' }
          ]
        },
        {
          id: 'E',
          name: 'Escudero de Joab',
          role: 'Armero Rematador',
          avatar: '⚔️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Uno de los diez jóvenes armeros que rodearon e hirieron a Absalón en el árbol.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'fosa_pedruscos' }
          ]
        },
        {
          id: 'C',
          name: 'Centinela de la Torre',
          role: 'Vigía de Majanayin',
          avatar: '👀',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Avisó al monarca desde lo alto de la muralla de la llegada de los mensajeros.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_majanayin' },
            { tipo: 'filaObjeto', objeto: '6,2' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El hijo rebelde había usurpado el trono de su padre mediante una revuelta populista y lideraba un gran ejército.',
          narrative: 'Absalón marchó con las tropas sublevadas al cruzar el río Jordán.',
          relatedSuspects: ['A', 'D']
        },
        {
          id: 'c2',
          text: 'Antes de la batalla, el anciano rey ordenó públicamente a sus generales que trataran con suavidad al joven usurpador.',
          narrative: 'David instruyó a Joab y a todo el ejército que no hicieran daño a su hijo.',
          relatedSuspects: ['D', 'J']
        },
        {
          id: 'c3',
          text: 'El ejército rebelde fue masacrado en un combate feroz donde el terreno escarpado devoró más hombres que la espada.',
          narrative: 'La maleza del bosque de Efraín desarticuló las filas rebeldes.',
          relatedSuspects: ['A', 'S']
        },
        {
          id: 'c4',
          text: 'El usurpador huía en su mulo cuando su abundante cabellera, de la cual presumía, quedó fuertemente enredada en una encina.',
          narrative: 'La montura siguió de largo y Absalón quedó colgando entre cielo y tierra.',
          relatedSuspects: ['A']
        },
        {
          id: 'c5',
          text: 'Un soldado lo encontró suspendido, pero se negó a rematarlo recordando la orden estricta del monarca.',
          narrative: 'El soldado avisó a Joab de la ubicación del príncipe en el ramaje.',
          relatedSuspects: ['S', 'J']
        },
        {
          id: 'c6',
          text: 'El comandante general del ejército, despreciando la piedad del rey, clavó tres dardos en el corazón del usurpador inmovilizado.',
          narrative: 'Joab y sus escuderos armados ejecutaron a Absalón en el árbol.',
          relatedSuspects: ['J', 'E', 'A']
        },
        {
          id: 'c7',
          text: 'Al recibir la noticia de la victoria, el rey lloró amargamente encerrado en su cuarto, lamentando no haber muerto en su lugar.',
          narrative: 'Ahimaas y el centinela llevaron el doloroso parte que quebró al anciano rey.',
          relatedSuspects: ['D', 'M', 'C']
        }
      ],
      solution: {
        A: { row: 0, col: 5 },
        J: { row: 1, col: 2 },
        D: { row: 2, col: 6 },
        S: { row: 3, col: 0 },
        M: { row: 4, col: 3 },
        E: { row: 5, col: 1 },
        C: { row: 6, col: 4 }
      }
    }
  },

  // RETO 009-C: El Ídolo en la Cama
  {
    id: '009-C',
    nombre: 'El Ídolo en la Cama',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: '1 Samuel 19, 11-17',
      textoBiblicoClave: 'Mical tomó el ídolo, lo acostó en la cama, le puso en la cabecera una piel de cabra y lo cubrió con una colcha.',
      contextoTeologico: 'Expone la división familiar provocada por el poder absoluto. Fe Adulta resalta cómo Mical usa la astucia y la insumisión para subvertir las órdenes injustas del Estado. Irónicamente, un ídolo pagano protege al ungido de Yahvé.',
      solucionExplicacion: 'Mical salvó a David de los emisarios de Saúl. Lo descolgó por una ventana y metió un ídolo en la cama cubierto de pelos de cabra para engañar a los sicarios fingiendo que David estaba gravemente enfermo.',
      storyIntro: 'Una princesa tiene que elegir entre la lealtad a su padre, que es el rey, y la vida de su esposo. Para asegurar la huida, utiliza un falso maniquí casero que engaña a los culpables reales hasta el amanecer.',
      epilogue: '¡La colcha destapada ante los emisarios reales! Saúl ordenó traer a David en su propia cama para matarlo con sus manos, pero los soldados solo hallaron un ídolo doméstico con lana de cabra en la cabecera.',
      subtitle: 'Descubrimiento de acciones ocultas · 1 Samuel 19 · 7x7',
      badge: 'EL ÍDOLO EN LA CAMA · 7x7',
      victimId: 'D',
      murdererId: 'S',
      rooms: {
        alcoba_david: {
          id: 'alcoba_david',
          name: 'Alcoba Nupcial de David y Mical',
          shortName: 'Alcoba Mical',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Lecho conyugal donde se colocaron los terafines cubiertos con piel lanuda.'
        },
        ventana_escape: {
          id: 'ventana_escape',
          name: 'Ventanal Posterior de la Muralla',
          shortName: 'Ventana Escape',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Abertura que daba hacia el campo exterior por donde David bajó descolgado con sogas.'
        },
        palacio_saul: {
          id: 'palacio_saul',
          name: 'Cámara Real de Saúl en Guibeá',
          shortName: 'Palacio Saúl',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Trono donde el monarca impaciente aguardaba el cadáver de su yerno para saciar sus celos.'
        },
        puerta_emboscada: {
          id: 'puerta_emboscada',
          name: 'Umbral Vigilado por los Sicarios',
          shortName: 'Umbral Sicarios',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Callejón donde los espías de Saúl montaron guardia toda la noche para arrestar a David al alba.'
        },
        refugio_ramat: {
          id: 'refugio_ramat',
          name: 'Colinas de Huida hacia Ramat',
          shortName: 'Ruta Ramat',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Senda pedregosa por donde David escapó para ponerse bajo el amparo de Samuel.'
        }
      },
      cellRooms: [
        ['alcoba_david', 'alcoba_david', 'alcoba_david', 'ventana_escape', 'ventana_escape', 'palacio_saul', 'palacio_saul'],
        ['alcoba_david', 'alcoba_david', 'ventana_escape', 'ventana_escape', 'ventana_escape', 'palacio_saul', 'palacio_saul'],
        ['alcoba_david', 'alcoba_david', 'puerta_emboscada', 'puerta_emboscada', 'ventana_escape', 'ventana_escape', 'refugio_ramat'],
        ['puerta_emboscada', 'puerta_emboscada', 'puerta_emboscada', 'puerta_emboscada', 'refugio_ramat', 'refugio_ramat', 'refugio_ramat'],
        ['puerta_emboscada', 'puerta_emboscada', 'puerta_emboscada', 'puerta_emboscada', 'refugio_ramat', 'refugio_ramat', 'refugio_ramat'],
        ['puerta_emboscada', 'puerta_emboscada', 'puerta_emboscada', 'refugio_ramat', 'refugio_ramat', 'refugio_ramat', 'refugio_ramat'],
        ['puerta_emboscada', 'puerta_emboscada', 'puerta_emboscada', 'refugio_ramat', 'refugio_ramat', 'refugio_ramat', 'refugio_ramat']
      ],
      blockedObjects: {
        '0,2': {
          emoji: '🗿',
          name: 'Estatua del Ídolo Terafín',
          evidenceCode: 'EV-01',
          description: 'Figura de tamaño humano vestida con ropas de David en el lecho.'
        },
        '2,4': {
          emoji: '🪢',
          name: 'Cuerda Trenzada de Escape',
          evidenceCode: 'EV-02',
          description: 'Soga anudada al marco de la ventana por la que descendió David al vacío.'
        },
        '4,6': {
          emoji: '🐐',
          name: 'Piel y Tejido de Pelo de Cabra',
          evidenceCode: 'EV-03',
          description: 'Mechones colocados en la almohada imitando la cabellera de un hombre dormido.'
        },
        '6,0': {
          emoji: '🛏️',
          name: 'Camilla Portátil para Llevar al Reo',
          evidenceCode: 'EV-04',
          description: 'Lecho ordenado por Saúl para traer a David aunque estuviera moribundo.'
        }
      },
      suspects: [
        {
          id: 'S',
          name: 'Saúl',
          role: 'Rey Perseguidor',
          avatar: '👑',
          color: 'from-amber-600 to-amber-800',
          isMurderer: true,
          clueText: 'Increpó a su hija diciendo: "¿Por qué me has engañado y dejado escapar a mi enemigo?".',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'ventana_escape' },
            { tipo: 'filaObjeto', objeto: '0,2' }
          ]
        },
        {
          id: 'D',
          name: 'David',
          role: 'Ungido en Fuga',
          avatar: '🏃',
          color: 'from-blue-600 to-blue-800',
          isVictim: true,
          clueText: 'Escapó en las sombras de la noche antes de que los guardias irrumpieran en su casa.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'ventana_escape' },
            { tipo: 'oesteDe', sospechoso: 'S' }
          ]
        },
        {
          id: 'M',
          name: 'Mical',
          role: 'Princesa y Esposa',
          avatar: '👸',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Dijo a los emisarios: "Está enfermo", retrasando el registro hasta el mediodía.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'alcoba_david' }
          ]
        },
        {
          id: 'S1',
          name: 'Primer Sicario',
          role: 'Guardia Apostado',
          avatar: '🗡️',
          color: 'from-red-600 to-red-800',
          clueText: 'Vigiló el portalón de la casa asegurando que nadie saldría con vida al amanecer.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'refugio_ramat' },
            { tipo: 'norteDe', sospechoso: 'S2' }
          ]
        },
        {
          id: 'S2',
          name: 'Segundo Sicario',
          role: 'Guardia Registrador',
          avatar: '🥷',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Retiró la colcha y exclamó perplejo al ver que solo había madera y piel de cabra.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_emboscada' },
            { tipo: 'columnaObjeto', objeto: '6,0' },
            { tipo: 'filaObjeto', objeto: '4,6' }
          ]
        },
        {
          id: 'C',
          name: 'Criada Cómplice',
          role: 'Sirvienta de Confianza',
          avatar: '🧺',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Trajo el cobertor y la piel de cabra sin hacer ruido para armar el señuelo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'refugio_ramat' },
            { tipo: 'columnaObjeto', objeto: '4,6' }
          ]
        },
        {
          id: 'R',
          name: 'Mensajero del Rey',
          role: 'Emisario de Guibeá',
          avatar: '📜',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Regresó corriendo ante Saúl con la orden de traer la cama a palacio.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_emboscada' },
            { tipo: 'filaObjeto', objeto: '6,0' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El monarca, consumido por los celos políticos, envió sicarios para vigilar de noche la casa de su propio yerno.',
          narrative: 'Saúl apostó guardias secretamente a las puertas de la residencia de David.',
          relatedSuspects: ['S', 'S1', 'D']
        },
        {
          id: 'c2',
          text: 'La princesa, enamorada de su esposo, le advirtió que si no escapaba esa misma noche, lo matarían al alba.',
          narrative: 'Mical descubrió la celada de su padre y organizó la huida nocturna.',
          relatedSuspects: ['M', 'D']
        },
        {
          id: 'c3',
          text: 'La mujer ayudó a su esposo a huir descolgándolo por una ventana trasera hacia el exterior.',
          narrative: 'David bajó por una soga hacia las colinas de Ramat.',
          relatedSuspects: ['D', 'M']
        },
        {
          id: 'c4',
          text: 'Para ganar tiempo, la mujer tomó un ídolo doméstico, lo acostó en la cama y le puso pelo de cabra en la cabeza.',
          narrative: 'Mical y su criada confeccionaron el maniquí para simular un enfermo postrado.',
          relatedSuspects: ['M', 'C']
        },
        {
          id: 'c5',
          text: 'Cuando los sicarios llegaron a arrestarlo, ella les dijo que su esposo estaba muy enfermo postrado en cama.',
          narrative: 'Los emisarios de Saúl creyeron la excusa de la fiebre y no entraron de inmediato.',
          relatedSuspects: ['M', 'S1', 'S2']
        },
        {
          id: 'c6',
          text: 'El monarca ordenó a los mensajeros que trajeran al yerno con cama y todo para asesinarlo él mismo.',
          narrative: 'Saúl exigió al mensajero real traer el lecho en andas sin importar su agonía.',
          relatedSuspects: ['S', 'R']
        },
        {
          id: 'c7',
          text: 'Al levantar la colcha, descubrieron la farsa, y la princesa mintió a su padre diciendo que fue obligada bajo amenaza.',
          narrative: 'Los guardias descubrieron los terafines y Saúl reprochó la deslealtad a su hija.',
          relatedSuspects: ['S2', 'S', 'M']
        }
      ],
      solution: {
        S: { row: 0, col: 4 },
        D: { row: 1, col: 3 },
        M: { row: 2, col: 1 },
        S1: { row: 3, col: 5 },
        S2: { row: 4, col: 0 },
        C: { row: 5, col: 6 },
        R: { row: 6, col: 2 }
      }
    }
  }
];
