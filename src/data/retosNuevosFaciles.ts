import { Reto } from '../types';

/**
 * NUEVOS RETOS BÍBLICOS - DIFICULTAD FÁCIL (5x5)
 * Creados a partir de los casos canónicos del libro de Daniel, Ester, Ezequiel y Tobías.
 */
export const RETOS_NUEVOS_FACILES: Reto[] = [
  // RETO 001-B: El Horno Ardiente
  {
    id: '001-B',
    nombre: 'El Horno Ardiente',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Daniel 3, 1-30',
      textoBiblicoClave: 'Nabucodonosor exclamó: «¡Bendito sea el Dios de Sadrac, Mesac y Abednego, que envió a su ángel a salvar a sus siervos!»',
      contextoTeologico: 'Refleja la resistencia pasiva y la fidelidad a Yahvé frente a la asimilación cultural del Imperio Babilónico. Teológicamente, anima a los exiliados a mantener su identidad, mostrando que el poder de Dios es superior al totalitarismo.',
      solucionExplicacion: 'Sadrac, Mesac y Abednego se negaron a adorar la estatua del rey Nabucodonosor. Fueron arrojados al horno ardiente, pero Dios envió a un ángel para protegerlos, logrando salir completamente ilesos ante el asombro del rey.',
      storyIntro: 'El monarca de un gran imperio levanta un monumento y ordena la sumisión absoluta de todos sus oficiales bajo amenaza de muerte. Tras la ejecución de la sentencia contra unos rebeldes, el rey queda aterrorizado al asomarse al lugar del castigo y ver más personas de las que habían condenado.',
      epilogue: '¡Caso resuelto! Sadrac, Mesac y Abednego permanecieron fieles a Dios en medio del horno de fuego ardiente. El enviado divino los protegió de toda quemadura, demostrando ante Nabucodonosor que ningún ídolo humano puede compararse al Dios altísimo.',
      subtitle: 'Descubrimiento de acciones ocultas · Daniel 3 · 5x5',
      badge: 'EL HORNO ARDIENTE · 5x5',
      victimId: 'N',
      murdererId: 'S',
      rooms: {
        pedestal_oro: {
          id: 'pedestal_oro',
          name: 'Pedestal de la Estatua de Oro',
          shortName: 'Estatua Oro',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Llanura de Dura donde se erigió la colosal imagen de oro.'
        },
        horno_fuego: {
          id: 'horno_fuego',
          name: 'Horno de Fuego Ardiente',
          shortName: 'Horno Fuego',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Horno recalentado siete veces más de lo acostumbrado.'
        },
        estrado_real: {
          id: 'estrado_real',
          name: 'Estrado del Rey Nabucodonosor',
          shortName: 'Estrado Real',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Sitio elevado desde donde el rey observó el milagro de los cuatro varones.'
        },
        tribuna_heraldos: {
          id: 'tribuna_heraldos',
          name: 'Tribuna del Heraldo y Músicos',
          shortName: 'Tribuna Heraldo',
          bgColor: 'bg-sky-100/70',
          borderColor: 'border-sky-700/60',
          textColor: 'text-sky-950',
          tagColor: 'bg-sky-800 text-sky-100',
          description: 'Lugar donde resonaban trompetas, cítaras y arpas proclamando el edicto.'
        },
        acceso_guardia: {
          id: 'acceso_guardia',
          name: 'Acceso de la Guardia Caldea',
          shortName: 'Puesto Guardia',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Entrada donde los soldados ataron a los tres hebreos antes de caer abrasados.'
        }
      },
      cellRooms: [
        ['estrado_real', 'estrado_real', 'pedestal_oro', 'pedestal_oro', 'pedestal_oro'],
        ['estrado_real', 'tribuna_heraldos', 'tribuna_heraldos', 'pedestal_oro', 'pedestal_oro'],
        ['horno_fuego', 'horno_fuego', 'horno_fuego', 'acceso_guardia', 'acceso_guardia'],
        ['horno_fuego', 'horno_fuego', 'horno_fuego', 'acceso_guardia', 'acceso_guardia'],
        ['horno_fuego', 'horno_fuego', 'horno_fuego', 'acceso_guardia', 'acceso_guardia']
      ],
      blockedObjects: {
        '0,3': {
          emoji: '🗿',
          name: 'Estatua Colosal de Oro',
          evidenceCode: 'EV-01',
          description: 'Monumento de sesenta codos de alto levantado en la llanura de Dura.'
        },
        '2,1': {
          emoji: '🔥',
          name: 'Llamarada Voraz del Horno',
          evidenceCode: 'EV-02',
          description: 'Fuego ardiente recalentado siete veces que fulminó a los verdugos.'
        },
        '4,4': {
          emoji: '🎺',
          name: 'Corneta y Cítara Real',
          evidenceCode: 'EV-03',
          description: 'Instrumentos musicales que daban la señal de postración obligatoria.'
        }
      },
      suspects: [
        {
          id: 'N',
          name: 'Nabucodonosor',
          role: 'Rey de Babilonia',
          avatar: '👑',
          color: 'from-purple-600 to-indigo-800',
          isVictim: true,
          clueText: 'En el Estrado Real atónito al ver cuatro hombres paseando ilesos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'estrado_real' },
            { tipo: 'filaObjeto', objeto: '0,3' }
          ]
        },
        {
          id: 'S',
          name: 'Sadrac',
          role: 'Joven hebreo fiel',
          avatar: '🧑',
          color: 'from-amber-600 to-amber-800',
          isMurderer: true,
          clueText: 'Ante el estrado del rey se negó a postrarse y defendió su fe sin miedo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'estrado_real' }
          ]
        },
        {
          id: 'M',
          name: 'Mesac',
          role: 'Compañero exiliado',
          avatar: '🧔',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'En el Horno de Fuego con sus vestidos intactos sin olor a quemado.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'horno_fuego' }
          ]
        },
        {
          id: 'H',
          name: 'Un Heraldo',
          role: 'Pregonero del rey',
          avatar: '📜',
          color: 'from-blue-600 to-blue-800',
          clueText: 'En el acceso de la guardia pregonando el edicto de adoración obligatoria.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'acceso_guardia' },
            { tipo: 'filaObjeto', objeto: '2,1' }
          ]
        },
        {
          id: 'G',
          name: 'Un Guardia',
          role: 'Soldado caldeo',
          avatar: '🛡️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'En el Acceso de la Guardia custodiando las sogas antes de arrojarlos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'acceso_guardia' },
            { tipo: 'columnaObjeto', objeto: '4,4' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El rey construyó una gigantesca estatua de oro y ordenó que todos se postraran al escuchar la música.',
          narrative: 'Nabucodonosor contemplaba la sumisión desde su estrado de mando.',
          relatedSuspects: ['N']
        },
        {
          id: 'c2',
          text: 'Tres jóvenes exiliados que ocupaban altos cargos administrativos se negaron a participar en la idolatría impuesta.',
          narrative: 'Sadrac y Mesac no doblaron sus rodillas ante la imagen babilónica.',
          relatedSuspects: ['S', 'M']
        },
        {
          id: 'c3',
          text: 'Un heraldo proclamó que el castigo por desobedecer sería ser arrojado vivo a un horno de fuego ardiente.',
          narrative: 'El pregonero transmitió la orden con voz potente en su tribuna.',
          relatedSuspects: ['H']
        },
        {
          id: 'c4',
          text: 'Los guardias que cumplieron la sentencia murieron fulminados por el intenso calor de las llamas al acercarse.',
          narrative: 'El soldado de la guardia apostado en el acceso vio las llamaradas desbordadas.',
          relatedSuspects: ['G']
        },
        {
          id: 'c5',
          text: 'El rey se asombró al asomarse y ver a cuatro hombres paseando ilesos entre el fuego, siendo el cuarto de aspecto divino.',
          narrative: 'Los jóvenes hebreos caminaban libres de ataduras en medio de las brasas.',
          relatedSuspects: ['N', 'S', 'M']
        }
      ],
      solution: {
        N: { row: 0, col: 1 },
        S: { row: 1, col: 0 },
        M: { row: 4, col: 2 },
        H: { row: 2, col: 3 },
        G: { row: 3, col: 4 }
      }
    }
  },

  // RETO 002-B: La Escritura en la Pared
  {
    id: '002-B',
    nombre: 'La Escritura en la Pared',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Desenlaces de historias y parábolas',
      citasBiblicas: 'Daniel 5, 1-30',
      textoBiblicoClave: 'Esa misma noche fue asesinado Baltasar, rey de los caldeos, y Darío el medo se apoderó del reino.',
      contextoTeologico: 'El relato condena severamente la soberbia y la profanación del culto sagrado. Exegéticamente (Fe Adulta), demuestra que Yahvé es el verdadero Señor de la historia, capaz de derribar a los imperios más arrogantes en una sola noche.',
      solucionExplicacion: 'El rey Baltasar profanó los vasos sagrados del Templo en un banquete. Dios escribió un mensaje de juicio en la pared. Daniel lo descifró y esa misma noche Baltasar fue asesinado, cayendo Babilonia ante los medos y persas.',
      storyIntro: 'En medio de una majestuosa fiesta imperial donde abunda el vino, la algarabía se congela. Un suceso sobrenatural en los muros del palacio aterroriza al soberano. Esa misma madrugada, la fiesta termina en sangre y el imperio cambia de manos.',
      epilogue: '¡Caso resuelto! Daniel descifró con valentía la sentencia Mené, Tekel, Parsín. La soberbia de Baltasar fue pesada en balanza y hallada falta, concluyendo el reino babilónico esa misma noche.',
      subtitle: 'Desenlaces de historias y parábolas · Daniel 5 · 5x5',
      badge: 'LA ESCRITURA EN LA PARED · 5x5',
      victimId: 'B',
      murdererId: 'M',
      rooms: {
        muro_escritura: {
          id: 'muro_escritura',
          name: 'Muro Encalado de la Escritura',
          shortName: 'Muro Yeso',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Pared de yeso iluminada por el candelabro donde apareció la mano misteriosa.'
        },
        banquete_real: {
          id: 'banquete_real',
          name: 'Salón del Gran Banquete',
          shortName: 'Banquete Real',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Mesas con vino donde se profanaron los vasos de oro del Templo de Jerusalén.'
        },
        estrado_sabios: {
          id: 'estrado_sabios',
          name: 'Estrado de Sabios y Magos',
          shortName: 'Estrado Sabios',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Sitio donde astrólogos y adivinos fracasaron en leer las palabras divinas.'
        },
        aposento_reina: {
          id: 'aposento_reina',
          name: 'Cámara de la Reina Madre',
          shortName: 'Cám. Reina Madre',
          bgColor: 'bg-rose-100/70',
          borderColor: 'border-rose-700/60',
          textColor: 'text-rose-950',
          tagColor: 'bg-rose-800 text-rose-100',
          description: 'Lugar donde la reina acudió a recordar la memoria del sabio Daniel.'
        },
        puerta_persa: {
          id: 'puerta_persa',
          name: 'Pórtico de Invasión Medo-Persa',
          shortName: 'Pórtico Invasión',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Acceso exterior por el cauce del río por donde entraron las tropas de Darío.'
        }
      },
      cellRooms: [
        ['muro_escritura', 'muro_escritura', 'banquete_real', 'banquete_real', 'banquete_real'],
        ['muro_escritura', 'muro_escritura', 'banquete_real', 'banquete_real', 'banquete_real'],
        ['estrado_sabios', 'estrado_sabios', 'aposento_reina', 'aposento_reina', 'puerta_persa'],
        ['estrado_sabios', 'estrado_sabios', 'aposento_reina', 'aposento_reina', 'puerta_persa'],
        ['puerta_persa', 'puerta_persa', 'puerta_persa', 'puerta_persa', 'puerta_persa']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '✍️',
          name: 'Mano Misteriosa en el Yeso',
          evidenceCode: 'EV-01',
          description: 'Dedos sobrenaturales trazando Mené, Tekel, Parsín en el enlucido.'
        },
        '1,3': {
          emoji: '🏺',
          name: 'Vasos Sagrados del Templo',
          evidenceCode: 'EV-02',
          description: 'Copas de oro y plata consagradas robadas de Jerusalén.'
        },
        '3,0': {
          emoji: '📜',
          name: 'Rollo Astrológico sin Descifrar',
          evidenceCode: 'EV-03',
          description: 'Tratado con el que los caldeos intentaron sin éxito leer las letras.'
        }
      },
      suspects: [
        {
          id: 'B',
          name: 'Baltasar',
          role: 'Rey profanador de Babilonia',
          avatar: '🍷',
          color: 'from-purple-700 to-pink-900',
          isVictim: true,
          clueText: 'En el Salón del Banquete temblando con las rodillas chocando entre sí.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'banquete_real' },
            { tipo: 'oesteDe', sospechoso: 'R' }
          ]
        },
        {
          id: 'R',
          name: 'La Reina Madre',
          role: 'Consejera real',
          avatar: '👸',
          color: 'from-rose-600 to-amber-700',
          clueText: 'En la Cámara de la Reina Madre trayendo consuelo y recomendando a Daniel.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'aposento_reina' },
            { tipo: 'filaObjeto', objeto: '3,0' }
          ]
        },
        {
          id: 'D',
          name: 'Daniel',
          role: 'Sabio exiliado de Judá',
          avatar: '📜',
          color: 'from-blue-600 to-cyan-800',
          clueText: 'Junto al pórtico, tras descifrar el veredicto divino escrito en el muro.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_persa' },
            { tipo: 'columnaObjeto', objeto: '3,0' }
          ]
        },
        {
          id: 'N',
          name: 'Nabucodonosor',
          role: 'Evocado en el estrado de honor',
          avatar: '👑',
          color: 'from-amber-600 to-amber-900',
          clueText: 'En el Estrado de Sabios recordado por su arrepentimiento pasado.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'estrado_sabios' }
          ]
        },
        {
          id: 'M',
          name: 'Darío el Medo',
          role: 'Monarca conquistador invasor',
          avatar: '⚔️',
          color: 'from-stone-700 to-red-900',
          isMurderer: true,
          clueText: 'Irrumpió en el salón del banquete tomando el palacio en la noche de la sentencia.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'banquete_real' },
            { tipo: 'filaObjeto', objeto: '0,1' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Un rey organizó un gran banquete usando como copas los vasos sagrados robados del templo de Jerusalén.',
          narrative: 'Baltasar brindaba con sus nobles profanando los objetos sagrados.',
          relatedSuspects: ['B']
        },
        {
          id: 'c2',
          text: 'Durante la fiesta profana, una mano humana misteriosa apareció y escribió unas palabras incomprensibles en el yeso de la pared.',
          narrative: 'El trazo luminoso quedó grabado sobre la pared blanca.',
          relatedSuspects: ['D']
        },
        {
          id: 'c3',
          text: 'La reina madre sugirió llamar a un sabio cautivo que poseía el espíritu de los dioses santos para descifrar el mensaje.',
          narrative: 'La noble señora intervino serenando la histeria de la corte.',
          relatedSuspects: ['R']
        },
        {
          id: 'c4',
          text: 'El sabio interpretó las palabras «Mené, Tekel, Parsín» anunciando el inminente fin y división del reino babilónico.',
          narrative: 'Daniel rechazó los regalos del rey y pronunció el juicio de Dios.',
          relatedSuspects: ['D', 'B']
        },
        {
          id: 'c5',
          text: 'Esa misma noche, la profecía se cumplió: el rey fue asesinado y el imperio cayó en manos de un monarca extranjero.',
          narrative: 'Darío el medo cruzó el umbral y asumió el dominio del reino.',
          relatedSuspects: ['M', 'B']
        }
      ],
      solution: {
        B: { row: 1, col: 2 },
        R: { row: 3, col: 3 },
        D: { row: 4, col: 0 },
        N: { row: 2, col: 1 },
        M: { row: 0, col: 4 }
      }
    }
  },

  // RETO 006-B: El Complot del Umbral
  {
    id: '006-B',
    nombre: 'El Complot del Umbral',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Ester 2, 21-23',
      textoBiblicoClave: 'Mardoqueo se enteró del complot, se lo comunicó a la reina Ester, y Ester se lo dijo al rey de parte de Mardoqueo.',
      contextoTeologico: 'Este evento es el preludio histórico que justifica la futura exaltación del protagonista. Teológicamente, resalta cómo los marginados, a pesar de estar oprimidos en el exilio, obran con rectitud cívica, siendo instrumentos de justicia.',
      solucionExplicacion: 'Los eunucos Bictán y Teres planearon asesinar al rey Asuero. Mardoqueo descubrió el complot y avisó a la reina Ester, quien informó al rey. Esto salvó la vida del monarca y los conspiradores fueron ejecutados.',
      storyIntro: 'Dos guardianes del palacio traman un asesinato político al más alto nivel. Su plan fracasa cuando un forastero marginado los escucha y utiliza un canal indirecto para hacer llegar la información, ganándose un lugar en los anales del imperio.',
      epilogue: '¡Caso resuelto! Mardoqueo escuchó la conspiración en el portal y actuó con rectitud. Ester informó a Asuero, salvando la vida del rey y registrando el acto de lealtad en las crónicas de Persia.',
      subtitle: 'Descubrimiento de acciones ocultas · Ester 2 · 5x5',
      badge: 'EL COMPLOT DEL UMBRAL · 5x5',
      victimId: 'A',
      murdererId: 'B',
      rooms: {
        umbral_puerta: {
          id: 'umbral_puerta',
          name: 'Umbral de la Puerta del Rey',
          shortName: 'Umbral Puerta',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Pórtico exterior donde Mardoqueo se sentaba y oyó susurros sediciosos.'
        },
        camerino_guardia: {
          id: 'camerino_guardia',
          name: 'Camerino de los Guardias Reales',
          shortName: 'Camerino Guardias',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Aposento de descanso donde Bictán y Teres tramaron el atentado contra el rey.'
        },
        trono_asuero: {
          id: 'trono_asuero',
          name: 'Salón del Trono Imperial',
          shortName: 'Trono Asuero',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Trono donde el monarca persa despachaba los asuntos del vasto imperio.'
        },
        camara_ester: {
          id: 'camara_ester',
          name: 'Cámara Privada de la Reina Ester',
          shortName: 'Cámara Ester',
          bgColor: 'bg-rose-100/70',
          borderColor: 'border-rose-700/60',
          textColor: 'text-rose-950',
          tagColor: 'bg-rose-800 text-rose-100',
          description: 'Aposento en el harén real donde la reina recibió el aviso de su tío.'
        },
        sala_cronicas: {
          id: 'sala_cronicas',
          name: 'Archivo de las Crónicas Reales',
          shortName: 'Sala Crónicas',
          bgColor: 'bg-teal-100/70',
          borderColor: 'border-teal-700/60',
          textColor: 'text-teal-950',
          tagColor: 'bg-teal-800 text-teal-100',
          description: 'Lugar donde los escribas asentaron el hecho por escrito en el libro del reino.'
        }
      },
      cellRooms: [
        ['umbral_puerta', 'umbral_puerta', 'camerino_guardia', 'camerino_guardia', 'camerino_guardia'],
        ['umbral_puerta', 'umbral_puerta', 'camerino_guardia', 'camerino_guardia', 'camerino_guardia'],
        ['trono_asuero', 'trono_asuero', 'sala_cronicas', 'camara_ester', 'camara_ester'],
        ['trono_asuero', 'trono_asuero', 'sala_cronicas', 'camara_ester', 'camara_ester'],
        ['sala_cronicas', 'sala_cronicas', 'sala_cronicas', 'camara_ester', 'camara_ester']
      ],
      blockedObjects: {
        '0,4': {
          emoji: '🗡️',
          name: 'Daga Oculta de Conjurado',
          evidenceCode: 'EV-01',
          description: 'Arma blanca con la que los eunucos pretendían herir al soberano.'
        },
        '2,2': {
          emoji: '📖',
          name: 'Libro de los Anales del Rey',
          evidenceCode: 'EV-02',
          description: 'Crónica imperial abierta donde se registró el mérito de Mardoqueo.'
        },
        '4,1': {
          emoji: '🏛️',
          name: 'Columna de la Cancillería',
          evidenceCode: 'EV-03',
          description: 'Pilar persa de mármol del recinto del palacio en Susa.'
        }
      },
      suspects: [
        {
          id: 'M',
          name: 'Mardoqueo',
          role: 'Judío exiliado en el umbral',
          avatar: '🧔‍♂️',
          color: 'from-amber-600 to-amber-800',
          clueText: 'En el camerino de la guardia, atento a las conversaciones de los eunucos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camerino_guardia' },
            { tipo: 'filaObjeto', objeto: '0,4' }
          ]
        },
        {
          id: 'E',
          name: 'Ester',
          role: 'Reina de Persia',
          avatar: '👸',
          color: 'from-rose-600 to-rose-800',
          clueText: 'En su Cámara Privada transmitiendo el aviso al rey en nombre de su tío.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camara_ester' },
            { tipo: 'columnaObjeto', objeto: '0,4' }
          ]
        },
        {
          id: 'A',
          name: 'Asuero',
          role: 'Emperador persa',
          avatar: '👑',
          color: 'from-purple-600 to-indigo-800',
          isVictim: true,
          clueText: 'En el Salón del Trono ordenando investigar la conjura de los eunucos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'trono_asuero' },
            { tipo: 'junto_objeto', objeto: '2,2' }
          ]
        },
        {
          id: 'B',
          name: 'Bictán',
          role: 'Eunuco guardián de la puerta',
          avatar: '🗡️',
          color: 'from-red-600 to-red-900',
          isMurderer: true,
          clueText: 'Junto al trono imperial, al acecho para atentar contra el monarca.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'trono_asuero' }
          ]
        },
        {
          id: 'T',
          name: 'Teres',
          role: 'Eunuco cómplice conspirador',
          avatar: '🗝️',
          color: 'from-stone-700 to-stone-900',
          clueText: 'En el Camerino de Guardias ajustando el cerrojo para facilitar la emboscada.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camerino_guardia' },
            { tipo: 'esteDe', sospechoso: 'M' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Dos eunucos que custodiaban las puertas del recinto real se enfurecieron con el soberano y planearon asesinarlo.',
          narrative: 'Bictán y Teres murmuraban en el camerino de servicio.',
          relatedSuspects: ['B', 'T']
        },
        {
          id: 'c2',
          text: 'Un exiliado que solía sentarse a la puerta del palacio escuchó los detalles exactos de la conspiración.',
          narrative: 'Mardoqueo percibió el plan sedicioso desde su banco en el umbral.',
          relatedSuspects: ['M']
        },
        {
          id: 'c3',
          text: 'El descubridor del complot carecía de acceso directo al monarca, por lo que transmitió la información a un familiar infiltrado en la corte.',
          narrative: 'El mensaje llegó en secreto a los aposentos de la reina Ester.',
          relatedSuspects: ['M', 'E']
        },
        {
          id: 'c4',
          text: 'La reina comunicó la alerta al monarca en nombre del hombre que había descubierto el plan.',
          narrative: 'Ester expuso la trama ante Asuero citando con honor a Mardoqueo.',
          relatedSuspects: ['E', 'A']
        },
        {
          id: 'c5',
          text: 'Tras investigar y confirmar la conjura, los dos eunucos fueron ahorcados y el acto de lealtad fue registrado en las crónicas reales.',
          narrative: 'El soberano constató la veracidad y ordenó registrar la memoria en los anales.',
          relatedSuspects: ['A', 'B', 'T']
        }
      ],
      solution: {
        M: { row: 0, col: 2 },
        E: { row: 4, col: 4 },
        A: { row: 2, col: 1 },
        B: { row: 3, col: 0 },
        T: { row: 1, col: 3 }
      }
    }
  },

  // RETO 007-B: El Valle de la Muerte Vencida
  {
    id: '007-B',
    nombre: 'El Valle de la Muerte Vencida',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Desenlaces de historias y parábolas',
      citasBiblicas: 'Ezequiel 37, 1-14',
      textoBiblicoClave: 'Profetiza al espíritu, hijo de hombre (...) El espíritu entró en ellos, revivieron y se pusieron en pie: era una multitud inmensa.',
      contextoTeologico: 'Es un texto central en la teología de la esperanza. Frente al trauma del exilio (la "muerte" de la nación), Dios promete recrear a su pueblo. Muestra que la salvación bíblica tiene una dimensión comunitaria y social, no solo individual.',
      solucionExplicacion: 'Dios mostró al profeta Ezequiel un valle de huesos secos. Al profetizar sobre ellos, los huesos se ensamblaron y el Espíritu les infundió vida. Es una alegoría profética de la restauración y el fin del exilio del pueblo de Israel.',
      storyIntro: 'Un hombre es llevado a un paisaje desolador lleno de restos humanos abandonados. Ante la pregunta de si la vida es posible allí, un fenómeno ruidoso y misterioso responde, dando esperanza a toda una nación deprimida.',
      epilogue: '¡Caso resuelto! El profeta obedeció la voz divina y los cuatro vientos insuflaron aliento. Lo que parecía un desierto de muerte se transformó en un ejército viviente de esperanza restaurada para Israel.',
      subtitle: 'Desenlaces de historias y parábolas · Ezequiel 37 · 5x5',
      badge: 'EL VALLE DE LA MUERTE VENCIDA · 5x5',
      victimId: 'P',
      murdererId: 'E',
      rooms: {
        valle_huesos: {
          id: 'valle_huesos',
          name: 'Valle de los Huesos Secos',
          shortName: 'Valle Huesos',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Planicie desolada cubierta de innumerables esqueletos completamente secos.'
        },
        colina_vision: {
          id: 'colina_vision',
          name: 'Colina de la Visión Profética',
          shortName: 'Colina Visión',
          bgColor: 'bg-sky-100/70',
          borderColor: 'border-sky-700/60',
          textColor: 'text-sky-950',
          tagColor: 'bg-sky-800 text-sky-100',
          description: 'Promontorio donde el Espíritu de Dios colocó de pie al profeta Ezequiel.'
        },
        puerta_vientos: {
          id: 'puerta_vientos',
          name: 'Confluencia de los Cuatro Vientos',
          shortName: 'Cuatro Vientos',
          bgColor: 'bg-teal-100/70',
          borderColor: 'border-teal-700/60',
          textColor: 'text-teal-950',
          tagColor: 'bg-teal-800 text-teal-100',
          description: 'Punto cardinal desde donde el soplo divino trajo aliento vivificador.'
        },
        campamento_exiliados: {
          id: 'campamento_exiliados',
          name: 'Campamento de Cautivos en Babilonia',
          shortName: 'Camp. Cautivos',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Lugar junto al río Quebar donde resonaba el clamor de desesperanza.'
        },
        altar_reconstruccion: {
          id: 'altar_reconstruccion',
          name: 'Monumento del Pueblo Recreado',
          shortName: 'Pueblo Recreado',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Lugar de asamblea donde la inmensa multitud se puso en pie con vida.'
        }
      },
      cellRooms: [
        ['colina_vision', 'colina_vision', 'puerta_vientos', 'puerta_vientos', 'puerta_vientos'],
        ['colina_vision', 'colina_vision', 'valle_huesos', 'valle_huesos', 'puerta_vientos'],
        ['valle_huesos', 'valle_huesos', 'valle_huesos', 'altar_reconstruccion', 'altar_reconstruccion'],
        ['campamento_exiliados', 'campamento_exiliados', 'valle_huesos', 'altar_reconstruccion', 'altar_reconstruccion'],
        ['campamento_exiliados', 'campamento_exiliados', 'altar_reconstruccion', 'altar_reconstruccion', 'altar_reconstruccion']
      ],
      blockedObjects: {
        '1,2': {
          emoji: '💀',
          name: 'Restos Óseos Calcinados',
          evidenceCode: 'EV-01',
          description: 'Huesos diseminados en la faz del campo representando la muerte de la nación.'
        },
        '0,3': {
          emoji: '💨',
          name: 'Soplo de los Cuatro Vientos',
          evidenceCode: 'EV-02',
          description: 'Brisa vivificante que infunde aliento vital en los cuerpos restituidos.'
        },
        '4,0': {
          emoji: '⛺',
          name: 'Tienda del Cautiverio',
          evidenceCode: 'EV-03',
          description: 'Refugio de los deportados en tierra extranjera abatidos por la tristeza.'
        }
      },
      suspects: [
        {
          id: 'E',
          name: 'Ezequiel',
          role: 'Profeta y sacerdote exiliado',
          avatar: '📜',
          color: 'from-teal-600 to-emerald-800',
          isMurderer: true,
          clueText: 'En el campamento de los cautivos profetizando con voz firme hacia los cuatro rumbos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'campamento_exiliados' },
            { tipo: 'columnaObjeto', objeto: '4,0' }
          ]
        },
        {
          id: 'S',
          name: 'El Señor Yahvé',
          role: 'Voz soberana de la promesa',
          avatar: '✨',
          color: 'from-amber-500 to-amber-700',
          clueText: 'En el valle de los huesos secos guiando al profeta en medio de la desolación.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'valle_huesos' },
            { tipo: 'filaObjeto', objeto: '1,2' }
          ]
        },
        {
          id: 'V',
          name: 'El Espíritu Divino',
          role: 'Aliento de vida y renovación',
          avatar: '🕊️',
          color: 'from-sky-500 to-blue-700',
          clueText: 'Sobre el Valle de los Huesos recomponiendo tendones y carne sobre la estructura.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'valle_huesos' }
          ]
        },
        {
          id: 'P',
          name: 'Exiliado Primero',
          role: 'Portavoz de la desesperación',
          avatar: '🧑‍🦱',
          color: 'from-stone-600 to-stone-800',
          isVictim: true,
          clueText: 'En el Campamento de Cautivos repitiendo con desaliento que su esperanza pereció.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'campamento_exiliados' }
          ]
        },
        {
          id: 'R',
          name: 'Exiliado Segundo',
          role: 'Testigo de la restauración',
          avatar: '🧔',
          color: 'from-stone-700 to-amber-900',
          clueText: 'En la confluencia de los cuatro vientos poniéndose en pie lleno de admiración.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_vientos' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Un profeta fue llevado en visión a un valle inmenso completamente lleno de restos óseos calcinados y resecos.',
          narrative: 'Ezequiel contempló el lecho de huesos blanqueados por el sol.',
          relatedSuspects: ['E']
        },
        {
          id: 'c2',
          text: 'Una voz divina le preguntó al profeta si aquellos restos podrían volver a vivir.',
          narrative: 'El Señor interpeló la fe del vidente en la colina.',
          relatedSuspects: ['S', 'E']
        },
        {
          id: 'c3',
          text: 'El profeta pronunció un oráculo, y hubo un ruido estremecedor mientras los huesos se unían y se cubrían de carne y piel.',
          narrative: 'El estruendo recorrió el valle al encajarse cada hueso en su juntura.',
          relatedSuspects: ['E', 'V']
        },
        {
          id: 'c4',
          text: 'A pesar de estar reconstruidos, los cuerpos carecían de aliento vital, por lo que el profeta tuvo que invocar a los cuatro vientos.',
          narrative: 'El Espíritu sopló desde los confines celestes para insuflar vida.',
          relatedSuspects: ['V']
        },
        {
          id: 'c5',
          text: 'Toda esta visión fue la respuesta directa al lamento colectivo de los cautivos que repetían: «Nuestra esperanza ha muerto».',
          narrative: 'Los cautivos comprobaron que Dios abriría sus tumbas para devolverlos a su tierra.',
          relatedSuspects: ['P', 'R']
        }
      ],
      solution: {
        E: { row: 3, col: 0 },
        S: { row: 1, col: 3 },
        V: { row: 2, col: 2 },
        P: { row: 4, col: 1 },
        R: { row: 0, col: 4 }
      }
    }
  },

  // RETO 009-B: La Ceguera del Justo
  {
    id: '009-B',
    nombre: 'La Ceguera del Justo',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Desenlaces de historias y parábolas',
      citasBiblicas: 'Tobías 2, 1-10',
      textoBiblicoClave: 'Como hacía calor, dormí con la cara destapada. (...) Su excremento caliente me cayó en los ojos y me produjo unas manchas blancas.',
      contextoTeologico: 'El libro aborda el misterio del sufrimiento del justo (teodicea). Tobit cumple la ley pero es castigado por el azar. El magisterio lo usa para mostrar la constancia en la prueba y la solidaridad comunitaria en tiempos de persecución.',
      solucionExplicacion: 'Tobit era un exiliado que arriesgaba su vida enterrando a los muertos judíos. Tras un entierro, durmió en el patio de su casa y el excremento de unas aves cayó en sus ojos, dejándolo ciego y marcando el inicio de su gran prueba.',
      storyIntro: 'Un hombre piadoso que arriesgaba su vida haciendo obras de caridad en la clandestinidad, sufre un absurdo accidente doméstico. En lugar de ser recompensado por su valentía, pasa años en la más profunda oscuridad y dependencia.',
      epilogue: '¡Caso resuelto! Tobit soportó con resignación y fe la pérdida de la vista provocada por el infortunio en el patio, manteniendo su piedad inquebrantable hasta que la providencia obró su curación.',
      subtitle: 'Desenlaces de historias y parábolas · Tobías 2 · 5x5',
      badge: 'LA CEGUERA DEL JUSTO · 5x5',
      victimId: 'T',
      murdererId: 'M',
      rooms: {
        patio_exterior: {
          id: 'patio_exterior',
          name: 'Patio Exterior Junto al Muro',
          shortName: 'Patio Muro',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Lugar al pie de la pared donde dormían gorriones en el alero del tejado.'
        },
        comedor_pentecostes: {
          id: 'comedor_pentecostes',
          name: 'Comedor de la Fiesta de Pentecostés',
          shortName: 'Comedor Fiesta',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Mesa festiva preparada con alimentos que Tobit dejó intacta para socorrer al difunto.'
        },
        taller_telar: {
          id: 'taller_telar',
          name: 'Taller de Tejidos de Ana',
          shortName: 'Taller Telar',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Rincón de la casa donde la esposa hilaba y tejía para sostener a la familia.'
        },
        callejon_plaza: {
          id: 'callejon_plaza',
          name: 'Callejón de la Plaza de Nínive',
          shortName: 'Callejón Nínive',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Lugar público donde yacía abandonado el cadáver del compatriota estrangulado.'
        },
        cueva_sepulcro: {
          id: 'cueva_sepulcro',
          name: 'Sepultura Clandestina en el Huerto',
          shortName: 'Sepultura Huerto',
          bgColor: 'bg-teal-100/70',
          borderColor: 'border-teal-700/60',
          textColor: 'text-teal-950',
          tagColor: 'bg-teal-800 text-teal-100',
          description: 'Fosa excavada de noche para conceder descanso sagrado a los muertos.'
        }
      },
      cellRooms: [
        ['patio_exterior', 'patio_exterior', 'comedor_pentecostes', 'comedor_pentecostes', 'comedor_pentecostes'],
        ['patio_exterior', 'patio_exterior', 'comedor_pentecostes', 'taller_telar', 'taller_telar'],
        ['callejon_plaza', 'callejon_plaza', 'cueva_sepulcro', 'taller_telar', 'taller_telar'],
        ['callejon_plaza', 'cueva_sepulcro', 'cueva_sepulcro', 'cueva_sepulcro', 'taller_telar'],
        ['callejon_plaza', 'cueva_sepulcro', 'cueva_sepulcro', 'cueva_sepulcro', 'cueva_sepulcro']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '🐦',
          name: 'Nido de Gorriones en el Alero',
          evidenceCode: 'EV-01',
          description: 'Aves posadas en la cornisa del muro sobre el lecho nocturno.'
        },
        '1,4': {
          emoji: '🧶',
          name: 'Telar y Madejas de Lana',
          evidenceCode: 'EV-02',
          description: 'Herramientas de labor textil con las que Ana ganaba el sustento cotidiano.'
        },
        '4,0': {
          emoji: '🪦',
          name: 'Túmulo de Sepultura',
          evidenceCode: 'EV-03',
          description: 'Tierra recién removida donde fue enterrado el reo estrangulado.'
        }
      },
      suspects: [
        {
          id: 'T',
          name: 'Tobit',
          role: 'Israelita piadoso y caritativo',
          avatar: '👴',
          color: 'from-amber-600 to-stone-800',
          isVictim: true,
          clueText: 'En el Patio Exterior reposando junto al muro con el rostro destapado.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patio_exterior' },
            { tipo: 'filaObjeto', objeto: '0,1' }
          ]
        },
        {
          id: 'A',
          name: 'Ana',
          role: 'Esposa fiel y trabajadora',
          avatar: '👵',
          color: 'from-purple-600 to-rose-700',
          clueText: 'En el Taller de Tejidos hilando jornadas completas para el sustento de la casa.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'taller_telar' }
          ]
        },
        {
          id: 'J',
          name: 'Tobías',
          role: 'Hijo solícito que avisó del difunto',
          avatar: '🧑',
          color: 'from-blue-600 to-teal-700',
          clueText: 'En el taller de su madre, consternado tras hallar el cadáver en la plaza.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'taller_telar' },
            { tipo: 'columnaObjeto', objeto: '1,4' }
          ]
        },
        {
          id: 'V',
          name: 'Vecino Exiliado',
          role: 'Crítico mordaz de las limosnas',
          avatar: '🧔',
          color: 'from-stone-600 to-stone-800',
          clueText: 'En la Sepultura Clandestina murmurando que la caridad solo trajo ceguera.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'cueva_sepulcro' }
          ]
        },
        {
          id: 'M',
          name: 'Muerto Abandonado',
          role: 'Víctima estrangulada en la plaza',
          avatar: '🪦',
          color: 'from-red-700 to-stone-900',
          isMurderer: true,
          clueText: 'En el patio exterior, junto al muro, antes de recibir piadosa sepultura.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patio_exterior' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Un israelita piadoso desobedecía las leyes del imperio para enterrar en secreto a los compatriotas asesinados y abandonados.',
          narrative: 'Tobit consideraba un deber sagrado dar sepultura digna a sus hermanos.',
          relatedSuspects: ['T']
        },
        {
          id: 'c2',
          text: 'Durante una festividad, dejó su propia cena para dar sepultura a un hombre que acababa de ser estrangulado en la plaza.',
          narrative: 'Tobías entró corriendo a avisar a su padre de la víctima asesinada.',
          relatedSuspects: ['J', 'T', 'M']
        },
        {
          id: 'c3',
          text: 'Por miedo a las represalias y por sentirse impuro legalmente, esa noche decidió dormir al aire libre en su patio.',
          narrative: 'El anciano se acostó al pie de la tapia expuesto al relente nocturno.',
          relatedSuspects: ['T']
        },
        {
          id: 'c4',
          text: 'Mientras dormía con el rostro destapado, el excremento caliente de unos gorriones cayó directamente en sus ojos.',
          narrative: 'El infortunio privó al piadoso israelita de la luz del sol.',
          relatedSuspects: ['T']
        },
        {
          id: 'c5',
          text: 'Ningún médico pudo curarlo; las cataratas lo dejaron ciego y dependiente económicamente de su esposa durante cuatro años.',
          narrative: 'Ana asumió la carga del hogar tejiendo en su taller.',
          relatedSuspects: ['A', 'V']
        }
      ],
      solution: {
        T: { row: 0, col: 0 },
        A: { row: 2, col: 3 },
        J: { row: 3, col: 4 },
        V: { row: 4, col: 2 },
        M: { row: 1, col: 1 }
      }
    }
  }
];
