import { Reto } from '../types';

/**
 * NUEVOS RETOS BÍBLICOS - DIFICULTAD MEDIO (7x7 - 49 CELDAS)
 * Ciclo del libro de los Hechos de los Apóstoles (HCH)
 */
export const RETOS_HECHOS_MEDIOS: Reto[] = [
  // RETO 001-HCH: El Testigo Lapidado
  {
    id: '001-HCH',
    nombre: 'El Testigo Lapidado',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Asesinatos o crímenes',
      citasBiblicas: 'Hechos 7, 54-60',
      textoBiblicoClave: 'Los testigos dejaron sus mantos a los pies de un joven llamado Saulo. Mientras lo apedreaban, Esteban oraba...',
      contextoTeologico: 'El martirio de Esteban marca la primera gran persecución en Jerusalén. Teológicamente, Esteban muere como Jesús: perdonando a sus verdugos. Fe Adulta destaca cómo la sangre del mártir impacta silenciosamente al joven Saulo.',
      solucionExplicacion: 'Esteban fue acusado falsamente por el Sanedrín. Al afirmar que veía a Jesús en el cielo, fue lapidado por blasfemia. Saulo (el futuro apóstol Pablo) estuvo presente consintiendo y guardando los mantos de los culpables.',
      storyIntro: 'Un joven líder comunitario pronuncia un discurso de defensa ante el tribunal supremo, pero sus palabras provocan una ira incontrolable. Es sacado a empujones de la ciudad y ejecutado brutalmente mientras un misterioso joven guarda la ropa de los culpables.',
      epilogue: '¡«Señor, no les tomes en cuenta este pecado»! Tras pronunciar estas palabras perdonando a sus homicidas, Esteban se durmió en la paz del Señor mientras Saulo aprobaba su muerte en silencio.',
      subtitle: 'Asesinatos o crímenes · Hechos 7 · 7x7',
      badge: 'EL TESTIGO LAPIDADO · 7x7',
      victimId: 'ES',
      murdererId: 'SA',
      rooms: {
        sala_sanedrin: {
          id: 'sala_sanedrin',
          name: 'Sala Capitular del Sanedrín',
          shortName: 'Sala Sanedrín',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Tribunal donde el rostro de Esteban resplandeció como el de un ángel durante su defensa.'
        },
        puerta_damasco: {
          id: 'puerta_damasco',
          name: 'Puerta Norte y Muralla de Jerusalén',
          shortName: 'Puerta Norte',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Salida de la ciudad por donde la turba enfurecida arrastró al diácono en tumulto.'
        },
        foso_lapidacion: {
          id: 'foso_lapidacion',
          name: 'Hondonada del Pedregal Fuera del Muro',
          shortName: 'Foso Pedregal',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Lugar de ejecución donde los falsos testigos arrojaron las piedras sobre la víctima.'
        },
        puesto_mantos: {
          id: 'puesto_mantos',
          name: 'Poyo de los Mantos a los Pies de Saulo',
          shortName: 'Poyo Mantos',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Roca donde el joven fariseo Saulo vigilaba los ropajes de los ejecutores aprobando el linchamiento.'
        },
        cielo_abierto: {
          id: 'cielo_abierto',
          name: 'Visión Celestial del Hijo del Hombre',
          shortName: 'Visión Cielo',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'La revelación de la gloria divina y de Jesús de pie a la diestra del Padre antes del desenlace.'
        }
      },
      cellRooms: [
        ['sala_sanedrin', 'sala_sanedrin', 'sala_sanedrin', 'cielo_abierto', 'cielo_abierto', 'cielo_abierto', 'cielo_abierto'],
        ['sala_sanedrin', 'sala_sanedrin', 'sala_sanedrin', 'puerta_damasco', 'puerta_damasco', 'cielo_abierto', 'cielo_abierto'],
        ['sala_sanedrin', 'puerta_damasco', 'puerta_damasco', 'puerta_damasco', 'puerta_damasco', 'puesto_mantos', 'puesto_mantos'],
        ['puerta_damasco', 'puerta_damasco', 'foso_lapidacion', 'foso_lapidacion', 'puesto_mantos', 'puesto_mantos', 'puesto_mantos'],
        ['foso_lapidacion', 'foso_lapidacion', 'foso_lapidacion', 'foso_lapidacion', 'foso_lapidacion', 'puesto_mantos', 'puesto_mantos'],
        ['foso_lapidacion', 'foso_lapidacion', 'foso_lapidacion', 'foso_lapidacion', 'foso_lapidacion', 'foso_lapidacion', 'foso_lapidacion'],
        ['foso_lapidacion', 'foso_lapidacion', 'foso_lapidacion', 'foso_lapidacion', 'foso_lapidacion', 'foso_lapidacion', 'foso_lapidacion']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '📜',
          name: 'Acta de Acusación por Blasfemia',
          evidenceCode: 'EV-01',
          description: 'Documento manipulado en el que se imputaba a Esteban hablar contra Moisés y el Templo.'
        },
        '2,3': {
          emoji: '🚪',
          name: 'Portal de la Muralla Rebasado',
          evidenceCode: 'EV-02',
          description: 'Umbral por el que los sacerdotes sacaron al condenado fuera de la ciudad santa.'
        },
        '4,5': {
          emoji: '🧥',
          name: 'Pila de Mantos de los Culpables',
          evidenceCode: 'EV-03',
          description: 'Prendas depositadas a los pies del joven Saulo para poder lanzar piedras con soltura.'
        },
        '6,2': {
          emoji: '🪨',
          name: 'Piedras Manchadas de Sangre',
          evidenceCode: 'EV-04',
          description: 'Canto rodado mortal recogido del lecho rocoso del torrente de Cedrón.'
        }
      },
      suspects: [
        {
          id: 'ES',
          name: 'Esteban',
          role: 'Diácono Protomártir',
          avatar: '🕊️',
          color: 'from-amber-600 to-amber-800',
          isVictim: true,
          clueText: 'Lleno del Espíritu Santo exclamó: «Veo los cielos abiertos y al Hijo del Hombre a la derecha de Dios».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'foso_lapidacion' },
            { tipo: 'oesteDe', sospechoso: 'AN' }
          ]
        },
        {
          id: 'SA',
          name: 'Saulo',
          role: 'Joven Fariseo Celoso',
          avatar: '🧑',
          color: 'from-purple-600 to-purple-800',
          isMurderer: true,
          clueText: 'Custodiaba los mantos de los testigos y consentía plenamente en la muerte de Esteban.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'foso_lapidacion' },
            { tipo: 'filaObjeto', objeto: '6,2' }
          ]
        },
        {
          id: 'T1',
          name: 'Testigo Falso Primero',
          role: 'Sobornado de la Sinagoga',
          avatar: '🗣️',
          color: 'from-red-600 to-red-800',
          clueText: 'Declaró con dolo: «Le hemos oído decir que Jesús de Nazaret destruirá este lugar santo».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'sala_sanedrin' },
            { tipo: 'borde', lado: 'oeste' }
          ]
        },
        {
          id: 'T2',
          name: 'Testigo Falso Segundo',
          role: 'Acusador Cómplice',
          avatar: '😠',
          color: 'from-rose-600 to-rose-800',
          clueText: 'Se quitó la túnica exterior para arrojar las primeras piedras según la ley mosaica.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_damasco' }
          ]
        },
        {
          id: 'SS',
          name: 'Sumo Sacerdote',
          role: 'Presidente del Sanedrín',
          avatar: '🕍',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Preguntó a Esteban: «¿Es verdad lo que dicen estos?», y se tapó los oídos ante la respuesta.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'sala_sanedrin' },
            { tipo: 'filaObjeto', objeto: '0,1' }
          ]
        },
        {
          id: 'AN',
          name: 'Anciano del Consejo',
          role: 'Magistrado Furioso',
          avatar: '📜',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Rechinó los dientes contra Esteban al verse censurado como perseguidor de los justos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puerta_damasco' },
            { tipo: 'filaObjeto', objeto: '2,3' }
          ]
        },
        {
          id: 'VP',
          name: 'Verdugo de las Piedras',
          role: 'Ejecutor de la Turba',
          avatar: '🪨',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Lanzó los proyectiles sobre el mártir arrodillado hasta causarle la muerte.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'puesto_mantos' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'La víctima era uno de los siete hombres elegidos para administrar la comida de las viudas en la comunidad.',
          narrative: 'Esteban servía con gracia y sabiduría en la iglesia de Jerusalén.',
          relatedSuspects: ['ES']
        },
        {
          id: 'c2',
          text: 'Un grupo de hombres fue sobornado para acusarlo de blasfemar contra el templo y la ley.',
          narrative: 'Los dos testigos falsos y el Sumo Sacerdote organizaron la celada judicial.',
          relatedSuspects: ['T1', 'T2', 'SS']
        },
        {
          id: 'c3',
          text: 'Durante el juicio, el rostro de la víctima parecía el de un ángel, pero sus palabras finales enfurecieron al tribunal.',
          narrative: 'El Anciano y el consejo rechinaron los dientes ante la elocuencia de Esteban.',
          relatedSuspects: ['ES', 'AN', 'SS']
        },
        {
          id: 'c4',
          text: 'La víctima afirmó ver los cielos abiertos y al Hijo del Hombre a la derecha de Dios, lo que desató el linchamiento.',
          narrative: 'El Sanedrín se abalanzó al unísono gritando y tapándose los oídos.',
          relatedSuspects: ['ES', 'SS', 'AN']
        },
        {
          id: 'c5',
          text: 'Los verdugos lo arrastraron fuera de las murallas de la ciudad para ejecutarlo a pedradas.',
          narrative: 'La turba y el verdugo cruzaron las puertas con Esteban apresado.',
          relatedSuspects: ['VP', 'ES']
        },
        {
          id: 'c6',
          text: 'Los testigos principales se quitaron los mantos para lanzar las piedras y los dejaron a los pies de un joven fariseo.',
          narrative: 'Saulo custodió la ropa de los ejecutores aprobando solemnemente el acto.',
          relatedSuspects: ['SA', 'T1', 'T2']
        },
        {
          id: 'c7',
          text: 'Antes de morir, la víctima pidió a gritos que no se les tuviera en cuenta este pecado a sus verdugos.',
          narrative: 'Esteban expiró rogando por el perdón de quienes lo apedreaban.',
          relatedSuspects: ['ES', 'SA', 'VP']
        }
      ],
      solution: {
        ES: { row: 5, col: 3 },
        SA: { row: 6, col: 5 },
        T1: { row: 1, col: 0 },
        T2: { row: 3, col: 1 },
        SS: { row: 0, col: 2 },
        AN: { row: 2, col: 4 },
        VP: { row: 4, col: 6 }
      }
    }
  },

  // RETO 003-HCH: El Sueño Profundo
  {
    id: '003-HCH',
    nombre: 'El Sueño Profundo',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Desenlaces de historias y parábolas',
      citasBiblicas: 'Hechos 20, 7-12',
      textoBiblicoClave: 'Pablo bajó, se echó sobre él, lo abrazó y dijo: «No os alarméis, que está vivo».',
      contextoTeologico: 'Este relato de resurrección confirma la autoridad apostólica de Pablo. Fe Adulta resalta que la eucaristía ("fracción del pan") es el centro de la vida comunitaria que vence a la muerte en la comunidad cristiana.',
      solucionExplicacion: 'Durante un larguísimo sermón nocturno de Pablo en Tróade, el joven Eutico se durmió, cayó por la ventana del tercer piso y murió. Pablo bajó, lo abrazó resucitándolo, y luego subió para seguir celebrando la eucaristía.',
      storyIntro: 'En una reunión nocturna en el tercer piso de una casa, un joven cae fulminado al suelo desde la ventana. El pánico estalla al comprobar que no respira, pero el orador principal baja tranquilamente, lo abraza y anuncia que la reunión continúa.',
      epilogue: '¡Vida en medio de la asamblea! Eutico subió con vida por su propio pie, llenando de inmenso consuelo a la comunidad que permaneció en comunión fraterna hasta el despuntar de la aurora.',
      subtitle: 'Desenlaces de historias y parábolas · Hechos 20 · 7x7',
      badge: 'EL SUEÑO PROFUNDO · 7x7',
      victimId: 'EU',
      murdererId: 'P',
      rooms: {
        sala_alta: {
          id: 'sala_alta',
          name: 'Cenáculo y Aposento del Tercer Piso',
          shortName: 'Tercer Piso',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Aposento iluminado por numerosas lámparas de aceite donde la comunidad partía el pan.'
        },
        marco_ventana: {
          id: 'marco_ventana',
          name: 'Alféizar Peligroso de la Ventana',
          shortName: 'Alféizar Ventana',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Borde elevado donde el joven Eutico luchaba contra el sopor en medio de la penumbra.'
        },
        patio_empedrado: {
          id: 'patio_empedrado',
          name: 'Patio Interior y Empedrado de la Caída',
          shortName: 'Patio Caída',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Suelo de piedra en el que impactó el cuerpo del muchacho tras precipitarse al vacío.'
        },
        mesa_fraccion: {
          id: 'mesa_fraccion',
          name: 'Mesa de la Fracción del Pan Eucarístico',
          shortName: 'Mesa Fracción',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Mesa solemne donde continuaron la vigilia y la comida fraterna tras el milagro.'
        },
        escalera_exterior: {
          id: 'escalera_exterior',
          name: 'Escalinata Angosta de Acceso',
          shortName: 'Escalinata',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Tramos de peldaños que Pablo bajó apresuradamente para socorrer al infortunado.'
        }
      },
      cellRooms: [
        ['sala_alta', 'sala_alta', 'sala_alta', 'marco_ventana', 'marco_ventana', 'mesa_fraccion', 'mesa_fraccion'],
        ['sala_alta', 'sala_alta', 'sala_alta', 'marco_ventana', 'marco_ventana', 'mesa_fraccion', 'mesa_fraccion'],
        ['sala_alta', 'sala_alta', 'sala_alta', 'sala_alta', 'sala_alta', 'mesa_fraccion', 'escalera_exterior'],
        ['sala_alta', 'sala_alta', 'sala_alta', 'sala_alta', 'escalera_exterior', 'escalera_exterior', 'escalera_exterior'],
        ['patio_empedrado', 'patio_empedrado', 'patio_empedrado', 'patio_empedrado', 'patio_empedrado', 'patio_empedrado', 'patio_empedrado'],
        ['patio_empedrado', 'patio_empedrado', 'patio_empedrado', 'patio_empedrado', 'patio_empedrado', 'patio_empedrado', 'patio_empedrado'],
        ['patio_empedrado', 'patio_empedrado', 'patio_empedrado', 'patio_empedrado', 'patio_empedrado', 'patio_empedrado', 'patio_empedrado']
      ],
      blockedObjects: {
        '0,3': {
          emoji: '🪟',
          name: 'Marco Desvencijado de la Ventana',
          evidenceCode: 'EV-01',
          description: 'Abertura del tercer piso desde donde Eutico cayó en su profundo sueño.'
        },
        '1,2': {
          emoji: '🪔',
          name: 'Lámparas de Aceite Humeantes',
          evidenceCode: 'EV-02',
          description: 'Luces que caldeaban la sala y agotaban el aire respirable de la estancia.'
        },
        '4,0': {
          emoji: '🩸',
          name: 'Piedras del Impacto',
          evidenceCode: 'EV-03',
          description: 'Punto exacto del suelo donde el joven fue levantado inerte y sin pulso.'
        },
        '6,5': {
          emoji: '🍞',
          name: 'Pan Partido de la Fracción',
          evidenceCode: 'EV-04',
          description: 'Alimento eucarístico consumido por Pablo y la asamblea al subir de nuevo.'
        }
      },
      suspects: [
        {
          id: 'P',
          name: 'Pablo',
          role: 'El Apóstol Incansable',
          avatar: '🧔',
          color: 'from-amber-600 to-amber-800',
          isMurderer: true,
          clueText: 'Prolongó su discurso hasta la medianoche porque debía partir al amanecer.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'sala_alta' },
            { tipo: 'columnaObjeto', objeto: '0,3' }
          ]
        },
        {
          id: 'EU',
          name: 'Eutico',
          role: 'El Joven Dormido',
          avatar: '😴',
          color: 'from-red-600 to-red-800',
          isVictim: true,
          clueText: 'Sentado en la ventana, vencido por el sueño profundo, se precipitó al vacío.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'sala_alta' },
            { tipo: 'surDe', sospechoso: 'P' }
          ]
        },
        {
          id: 'LC',
          name: 'Médico Lucas',
          role: 'Cronista y Facultativo',
          avatar: '🩺',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Bajó a examinar el cuerpo y certificó pericialmente que había sido levantado muerto.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patio_empedrado' },
            { tipo: 'filaObjeto', objeto: '4,0' }
          ]
        },
        {
          id: 'CV',
          name: 'Compañero de Viaje',
          role: 'Misionero Acompañante',
          avatar: '🧑',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Acompañaba a la delegación que aguardaba embarcar en el puerto de Tróade.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patio_empedrado' },
            { tipo: 'columnaObjeto', objeto: '1,2' }
          ]
        },
        {
          id: 'DC',
          name: 'Dueño de la Casa',
          role: 'Anfitrión de Tróade',
          avatar: '🏠',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Ofreció su aposento alto iluminado con abundantes lucernas para la vigilia.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'mesa_fraccion' },
            { tipo: 'filaObjeto', objeto: '1,2' }
          ]
        },
        {
          id: 'MA',
          name: 'Mujer Asistente',
          role: 'Fiel de la Comunidad',
          avatar: '🧕',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Gritó desesperada al ver desplomarse al joven en la oscuridad de la noche.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patio_empedrado' },
            { tipo: 'columnaObjeto', objeto: '4,0' },
            { tipo: 'filaObjeto', objeto: '6,5' }
          ]
        },
        {
          id: 'SP',
          name: 'Servidor del Pan',
          role: 'Diácono de Mesa',
          avatar: '🥖',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Custodiaba el pan y el cáliz esperando a que Pablo terminase de exhortar.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'mesa_fraccion' },
            { tipo: 'borde', lado: 'este' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El orador principal tenía previsto viajar al día siguiente, por lo que alargó su discurso hasta la medianoche.',
          narrative: 'Pablo hablaba largamente sabiendo que no volvería a verlos pronto.',
          relatedSuspects: ['P', 'CV']
        },
        {
          id: 'c2',
          text: 'La sala del tercer piso estaba muy iluminada por numerosas lámparas de aceite que consumían el oxígeno.',
          narrative: 'El Dueño de la casa había dispuesto lucernas encendidas en cada viga.',
          relatedSuspects: ['DC', 'P']
        },
        {
          id: 'c3',
          text: 'Un joven, sentado en el borde de la ventana, fue vencido por un sueño insuperable mientras escuchaba.',
          narrative: 'Eutico cabeceaba en el alféizar entre el humo y el calor de la sala.',
          relatedSuspects: ['EU']
        },
        {
          id: 'c4',
          text: 'Al quedarse completamente dormido, el joven se precipitó al vacío desde el tercer piso y fue recogido muerto.',
          narrative: 'La Mujer asistente y Lucas constataron la tragedia en el patio empedrado.',
          relatedSuspects: ['EU', 'LC', 'MA']
        },
        {
          id: 'c5',
          text: 'El orador bajó inmediatamente de la sala, se echó sobre el cuerpo del joven y lo estrechó entre sus brazos.',
          narrative: 'Pablo descendió la escalera y se tendió sobre Eutico como los antiguos profetas.',
          relatedSuspects: ['P', 'EU', 'LC']
        },
        {
          id: 'c6',
          text: 'El orador tranquilizó a la multitud asegurando que el joven tenía vida en él.',
          narrative: 'Pablo disipó el llanto de la asamblea afirmando la gracia sanadora divina.',
          relatedSuspects: ['P', 'MA', 'DC']
        },
        {
          id: 'c7',
          text: 'Después del milagro, todos volvieron a subir, partieron el pan y siguieron hablando hasta el amanecer.',
          narrative: 'El servidor del pan repartió las porciones y continuaron conversando alegremente.',
          relatedSuspects: ['SP', 'P', 'EU', 'CV']
        }
      ],
      solution: {
        P: { row: 2, col: 3 },
        EU: { row: 3, col: 1 },
        LC: { row: 4, col: 4 },
        CV: { row: 5, col: 2 },
        DC: { row: 1, col: 5 },
        MA: { row: 6, col: 0 },
        SP: { row: 0, col: 6 }
      }
    }
  },

  // RETO 005-HCH: La Ceguera del Hechicero
  {
    id: '005-HCH',
    nombre: 'La Ceguera del Hechicero',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Asesinatos o crímenes',
      citasBiblicas: 'Hechos 13, 6-12',
      textoBiblicoClave: 'Al instante cayeron sobre él oscuridad y tinieblas, y andaba a tientas buscando quién le diera la mano.',
      contextoTeologico: 'Marca un punto de inflexión donde Saulo asume el nombre de Pablo y el liderazgo activo. Teológicamente, representa la victoria de la revelación cristiana sobre el esoterismo mágico y la manipulación psicológica.',
      solucionExplicacion: 'En Chipre, el falso profeta y mago Elimas intentó impedir que el procónsul Sergio Paulo se convirtiera. Pablo, lleno del Espíritu, lo dejó temporalmente ciego, lo que provocó la conversión del procónsul.',
      storyIntro: 'El gobernador de una isla invita a dos predicadores a su corte para escuchar su mensaje. Un hechicero judío intenta boicotear la reunión manipulando al gobernador. De repente, el hechicero queda ciego y necesita que lo lleven de la mano.',
      epilogue: '¡«Oh, lleno de todo engaño y de toda maldad, hijo del diablo»! Elimas quedó sumido en densas tinieblas. Al ver lo sucedido, el procónsul Sergio Paulo abrazó la doctrina del Señor profundamente conmovido.',
      subtitle: 'Asesinatos o crímenes · Hechos 13 · 7x7',
      badge: 'LA CEGUERA DEL HECHICERO · 7x7',
      victimId: 'SP',
      murdererId: 'EL',
      rooms: {
        palacio_proconsul: {
          id: 'palacio_proconsul',
          name: 'Audiencia Imperial de Pafos',
          shortName: 'Audiencia Pafos',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Sede gubernamental de Chipre donde Sergio Paulo convocó a los evangelizadores.'
        },
        estrado_mago: {
          id: 'estrado_mago',
          name: 'Aposento Esotérico de Barjesús (Elimas)',
          shortName: 'Estrado Elimas',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Lugar donde el adivino desplegaba sus artes arcanas para controlar las decisiones del procónsul.'
        },
        zona_tinieblas: {
          id: 'zona_tinieblas',
          name: 'Rincón de la Niebla y la Oscuridad',
          shortName: 'Rincón Ceguera',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Espacio donde Elimas comenzó a tropezar a tientas buscando una mano que lo guiase.'
        },
        tribuna_pablo: {
          id: 'tribuna_pablo',
          name: 'Púlpito de Proclamación de Pablo y Bernabé',
          shortName: 'Púlpito Misionero',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Ubicación donde Pablo fijó sus ojos en el adversario proclamando el juicio divino.'
        },
        patio_guardia: {
          id: 'patio_guardia',
          name: 'Atrio de los Escribas y la Escolta',
          shortName: 'Atrio Escolta',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Pórtico donde los secretarios romanos presenciaron el castigo sobrenatural.'
        }
      },
      cellRooms: [
        ['palacio_proconsul', 'palacio_proconsul', 'palacio_proconsul', 'tribuna_pablo', 'tribuna_pablo', 'tribuna_pablo', 'tribuna_pablo'],
        ['palacio_proconsul', 'palacio_proconsul', 'palacio_proconsul', 'tribuna_pablo', 'tribuna_pablo', 'tribuna_pablo', 'tribuna_pablo'],
        ['estrado_mago', 'estrado_mago', 'palacio_proconsul', 'tribuna_pablo', 'tribuna_pablo', 'patio_guardia', 'patio_guardia'],
        ['estrado_mago', 'estrado_mago', 'zona_tinieblas', 'zona_tinieblas', 'patio_guardia', 'patio_guardia', 'patio_guardia'],
        ['estrado_mago', 'zona_tinieblas', 'zona_tinieblas', 'zona_tinieblas', 'patio_guardia', 'patio_guardia', 'patio_guardia'],
        ['zona_tinieblas', 'zona_tinieblas', 'zona_tinieblas', 'zona_tinieblas', 'patio_guardia', 'patio_guardia', 'patio_guardia'],
        ['zona_tinieblas', 'zona_tinieblas', 'zona_tinieblas', 'zona_tinieblas', 'patio_guardia', 'patio_guardia', 'patio_guardia']
      ],
      blockedObjects: {
        '0,2': {
          emoji: '📜',
          name: 'Despacho de Convocatoria Consular',
          evidenceCode: 'EV-01',
          description: 'Invitación oficial emitida por el procónsul para escuchar la Palabra de Dios.'
        },
        '2,0': {
          emoji: '🔮',
          name: 'Talismán Astrológico de Elimas',
          evidenceCode: 'EV-02',
          description: 'Objeto de adivinación con el que Barjesús engañaba a la corte de Chipre.'
        },
        '4,2': {
          emoji: '🌫️',
          name: 'Niebla Súbita de Tinieblas',
          evidenceCode: 'EV-03',
          description: 'Oscuridad repentina que privó de la luz del sol a los ojos del hechicero.'
        },
        '6,5': {
          emoji: '🏛️',
          name: 'Sello del Senado Romano en Pafos',
          evidenceCode: 'EV-04',
          description: 'Emblema que acreditaba la jurisdicción del gobernador Sergio Paulo.'
        }
      },
      suspects: [
        {
          id: 'P',
          name: 'Pablo',
          role: 'Apóstol de los Gentiles',
          avatar: '🧔',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Lleno del Espíritu Santo fijó en él la mirada y declaró: «La mano del Señor está contra ti».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tribuna_pablo' }
          ]
        },
        {
          id: 'B',
          name: 'Bernabé',
          role: 'Hijo de la Consolación',
          avatar: '🧑‍🦱',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Originario de Chipre, acompañó a Pablo ante el tribunal proconsular de su patria.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patio_guardia' },
            { tipo: 'filaObjeto', objeto: '4,2' }
          ]
        },
        {
          id: 'EL',
          name: 'Elimas el Mago',
          role: 'Falso Profeta Judío',
          avatar: '🧙‍♂️',
          color: 'from-purple-600 to-purple-800',
          isMurderer: true,
          clueText: 'Procuraba apartar de la fe al procónsul hasta que una nube de oscuridad cegó sus ojos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'palacio_proconsul' },
            { tipo: 'esteDe', sospechoso: 'SP' }
          ]
        },
        {
          id: 'SP',
          name: 'Sergio Paulo',
          role: 'Procónsul Ilustrado',
          avatar: '🏛️',
          color: 'from-blue-600 to-blue-800',
          isVictim: true,
          clueText: 'Varón prudente que mandó llamar a los misioneros deseoso de conocer la verdad.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'palacio_proconsul' },
            { tipo: 'filaObjeto', objeto: '0,2' }
          ]
        },
        {
          id: 'JM',
          name: 'Juan Marcos',
          role: 'Auxiliar Evangelizador',
          avatar: '📜',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Asistía a los apóstoles en su travesía desde Salamina hasta la ciudad de Pafos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'zona_tinieblas' },
            { tipo: 'norteDe', sospechoso: 'B' }
          ]
        },
        {
          id: 'SC',
          name: 'Soldado de la Corte',
          role: 'Guardián del Pretorio',
          avatar: '🛡️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Tuvo que sujetar de la mano a Elimas cuando este empezó a tropezar ciego por la estancia.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patio_guardia' },
            { tipo: 'borde', lado: 'este' }
          ]
        },
        {
          id: 'MP',
          name: 'Médico de Pafos',
          role: 'Facultativo Griego',
          avatar: '🏺',
          color: 'from-rose-600 to-rose-800',
          clueText: 'Comprobó con asombro que los ojos del hechicero carecían de daño físico visible pero estaban ciegos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'zona_tinieblas' },
            { tipo: 'columnaObjeto', objeto: '0,2' },
            { tipo: 'filaObjeto', objeto: '6,5' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El gobernador era un hombre inteligente que deseaba sinceramente escuchar la palabra de Dios.',
          narrative: 'Sergio Paulo convocó a Pablo y a Bernabé en su audiencia de Pafos.',
          relatedSuspects: ['SP', 'P', 'B']
        },
        {
          id: 'c2',
          text: 'El hechicero pertenecía a la corte del gobernador e intervenía para apartarlo de la fe.',
          narrative: 'Elimas contradecía a los apóstoles temiendo perder su influencia sobre el procónsul.',
          relatedSuspects: ['EL', 'SP']
        },
        {
          id: 'c3',
          text: 'Uno de los predicadores, lleno del Espíritu Santo, fijó su mirada penetrante en el hechicero.',
          narrative: 'Pablo se encaró firmemente con el farsante en presencia de Juan Marcos.',
          relatedSuspects: ['P', 'EL', 'JM']
        },
        {
          id: 'c4',
          text: 'El predicador denunció al hechicero acusándolo de ser hijo del diablo y enemigo de la justicia.',
          narrative: 'Pablo desenmascaró los ardides del falso profeta ante toda la corte.',
          relatedSuspects: ['P', 'EL', 'B']
        },
        {
          id: 'c5',
          text: 'El predicador pronunció una sentencia: la mano del Señor caería sobre él y no vería el sol por un tiempo.',
          narrative: 'La advertencia apostólica resonó en el silencio del pretorio.',
          relatedSuspects: ['P', 'EL']
        },
        {
          id: 'c6',
          text: 'Una nube de oscuridad cayó inmediatamente sobre los ojos del hechicero, dejándolo totalmente ciego.',
          narrative: 'El soldado de la corte y el médico tuvieron que guiar a tientas al desorientado mago.',
          relatedSuspects: ['EL', 'SC', 'MP']
        },
        {
          id: 'c7',
          text: 'Al ver el poder que acompañaba al mensaje, el gobernador creyó inmediatamente.',
          narrative: 'Sergio Paulo se maravilló ante la gloria de Dios abrazando la fe cristiana.',
          relatedSuspects: ['SP', 'P', 'B', 'JM']
        }
      ],
      solution: {
        P: { row: 2, col: 4 },
        B: { row: 4, col: 5 },
        EL: { row: 1, col: 1 },
        SP: { row: 0, col: 0 },
        JM: { row: 3, col: 3 },
        SC: { row: 5, col: 6 },
        MP: { row: 6, col: 2 }
      }
    }
  },

  // RETO 007-HCH: El Fantasma en la Puerta
  {
    id: '007-HCH',
    nombre: 'El Fantasma en la Puerta',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Hechos 12, 1-17',
      textoBiblicoClave: 'Al reconocer la voz de Pedro, de pura alegría no abrió la puerta, sino que entró corriendo a anunciar que Pedro estaba a la puerta.',
      contextoTeologico: 'El relato tiene un tono casi cómico que resalta lo inesperado de la acción de Dios. La comunidad reza fervorosamente por un milagro, pero cuando Dios responde, la incredulidad inicial demuestra que la liberación es obra pura de la gracia.',
      solucionExplicacion: 'Pedro fue liberado milagrosamente de la cárcel por un ángel. Al llegar a la casa de María, la sirvienta Rode lo escuchó, pero de la emoción no le abrió. Los discípulos no le creyeron hasta que lo vieron cara a cara.',
      storyIntro: 'Un líder religioso, condenado a muerte, aparece a medianoche llamando a la puerta de una casa. La joven que escucha su voz se emociona tanto que olvida abrirle, dejando al hombre en la calle mientras los de dentro creen que es una alucinación.',
      epilogue: '¡Las cadenas cayeron y el cerrojo de hierro cedió! Pedro explicó a la asamblea cómo el Señor lo libró de las manos de Herodes y de la expectación del pueblo judío.',
      subtitle: 'Descubrimiento de acciones ocultas · Hechos 12 · 7x7',
      badge: 'EL FANTASMA EN LA PUERTA · 7x7',
      victimId: 'R',
      murdererId: 'HA',
      rooms: {
        prision_maxima: {
          id: 'prision_maxima',
          name: 'Calabozo Militar de la Fortaleza Antonia',
          shortName: 'Calabozo Prisión',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Celda donde Pedro dormía atado con dos cadenas entre dos soldados armados.'
        },
        puerta_hierro: {
          id: 'puerta_hierro',
          name: 'Portón Automático de Hierro',
          shortName: 'Portón Hierro',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Cancel monumental que daba paso a la ciudad y se abrió espontáneamente sin llave.'
        },
        calle_medianoche: {
          id: 'calle_medianoche',
          name: 'Callejón Nocturno de Jerusalén',
          shortName: 'Callejón Noche',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Senda solitaria por donde el apóstol caminó tras desvanecerse la presencia angélica.'
        },
        portal_exterior: {
          id: 'portal_exterior',
          name: 'Zaguán y Puerta Exterior de la Casa',
          shortName: 'Zaguán Exterior',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Entrada donde Pedro golpeaba repetidamente mientras la doncella corría al interior.'
        },
        sala_oracion: {
          id: 'sala_oracion',
          name: 'Aposento de Oración Ferviente',
          shortName: 'Sala Oración',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Estancia donde muchos fieles clamaban a Dios sin cesar por la vida de Pedro.'
        }
      },
      cellRooms: [
        ['prision_maxima', 'prision_maxima', 'prision_maxima', 'puerta_hierro', 'calle_medianoche', 'calle_medianoche', 'calle_medianoche'],
        ['prision_maxima', 'prision_maxima', 'prision_maxima', 'puerta_hierro', 'calle_medianoche', 'calle_medianoche', 'calle_medianoche'],
        ['prision_maxima', 'prision_maxima', 'prision_maxima', 'puerta_hierro', 'calle_medianoche', 'portal_exterior', 'portal_exterior'],
        ['calle_medianoche', 'calle_medianoche', 'calle_medianoche', 'calle_medianoche', 'calle_medianoche', 'portal_exterior', 'portal_exterior'],
        ['sala_oracion', 'sala_oracion', 'sala_oracion', 'portal_exterior', 'portal_exterior', 'portal_exterior', 'portal_exterior'],
        ['sala_oracion', 'sala_oracion', 'sala_oracion', 'sala_oracion', 'sala_oracion', 'sala_oracion', 'sala_oracion'],
        ['sala_oracion', 'sala_oracion', 'sala_oracion', 'sala_oracion', 'sala_oracion', 'sala_oracion', 'sala_oracion']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '⛓️',
          name: 'Dos Cadenas de Hierro Caídas',
          evidenceCode: 'EV-01',
          description: 'Grilletes que se desprendieron milagrosamente de las muñecas de Pedro al tocarlo el ángel.'
        },
        '1,3': {
          emoji: '🗝️',
          name: 'Portón de Hierro Abierto',
          evidenceCode: 'EV-02',
          description: 'Gran puerta de la ciudad que giró sobre sus goznes sin que nadie la empujase.'
        },
        '3,5': {
          emoji: '🚪',
          name: 'Llamador de Bronce de la Casa',
          evidenceCode: 'EV-03',
          description: 'Aldaba que Pedro hacía sonar insistentemente esperando ser recibido.'
        },
        '5,2': {
          emoji: '🕯️',
          name: 'Velas de la Vigilia Comunitaria',
          evidenceCode: 'EV-04',
          description: 'Luces que alumbraban la oración incesante de la iglesia en casa de María.'
        }
      },
      suspects: [
        {
          id: 'P',
          name: 'Pedro',
          role: 'Prisionero Libertado',
          avatar: '🧔',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Llamaba a la puerta tras cruzar la guardia pensando primero que vivía un ensueño.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'calle_medianoche' },
            { tipo: 'junto_objeto', objeto: '3,5' }
          ]
        },
        {
          id: 'HA',
          name: 'Rey Herodes Agripa',
          role: 'Monarca Perseguidor',
          avatar: '👑',
          color: 'from-red-600 to-red-800',
          isMurderer: true,
          clueText: 'Había matado a espada a Santiago y apresó a Pedro para presentarlo ante el pueblo tras la Pascua.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'portal_exterior' },
            { tipo: 'columnaObjeto', objeto: '3,5' }
          ]
        },
        {
          id: 'R',
          name: 'Rode',
          role: 'Muchacha Sirvienta',
          avatar: '👧',
          color: 'from-rose-600 to-rose-800',
          isVictim: true,
          clueText: 'Reconoció la voz de Pedro y de puro gozo no abrió el portal sino que corrió adentro gritando.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'portal_exterior' },
            { tipo: 'surDe', sospechoso: 'P' }
          ]
        },
        {
          id: 'AG',
          name: 'Ángel del Señor',
          role: 'Libertador Celestial',
          avatar: '✨',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Hirió a Pedro en el costado para despertarlo y le ordenó calzarse las sandalias y ceñirse el manto.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'prision_maxima' },
            { tipo: 'junto_objeto', objeto: '1,3' }
          ]
        },
        {
          id: 'MM',
          name: 'María (Madre de Marcos)',
          role: 'Anfitriona de la Vigilia',
          avatar: '🧕',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Acogía en su morada a la multitud que oraba con lágrimas por la liberación apostólica.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'sala_oracion' },
            { tipo: 'borde', lado: 'sur' }
          ]
        },
        {
          id: 'CG',
          name: 'Centinela de la Cárcel',
          role: 'Guardia de Turno',
          avatar: '🛡️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Permaneció sumido en un sopor sobrenatural mientras el recluso escapaba de su flanco.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'prision_maxima' }
          ]
        },
        {
          id: 'DI',
          name: 'Discípulo Incrédulo',
          role: 'Fiel Reacio',
          avatar: '🤨',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Dijo a la sirvienta: «¡Estás loca! Es su ángel, no puede ser Pedro en persona».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'sala_oracion' },
            { tipo: 'columnaObjeto', objeto: '1,3' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El líder de la comunidad estaba encadenado entre dos guardias dentro de una celda de máxima seguridad.',
          narrative: 'Herodes Agripa había asignado cuatro piquetes de cuatro soldados para custodiar a Pedro.',
          relatedSuspects: ['HA', 'P', 'CG']
        },
        {
          id: 'c2',
          text: 'La noche antes de su ejecución, un ser luminoso despertó al prisionero, y las cadenas cayeron solas.',
          narrative: 'El Ángel del Señor llenó de resplandor la celda y levantó al apóstol.',
          relatedSuspects: ['AG', 'P', 'CG']
        },
        {
          id: 'c3',
          text: 'Tras pasar la primera y segunda guardia, la puerta de hierro que daba a la ciudad se abrió por sí misma.',
          narrative: 'Pedro y el ángel atravesaron los puestos sin ser advertidos por los soldados.',
          relatedSuspects: ['P', 'AG']
        },
        {
          id: 'c4',
          text: 'El líder, creyendo que era una visión, reaccionó y se dirigió a la casa donde la comunidad oraba por él.',
          narrative: 'Pedro se dio cuenta en la calle de que el Señor lo había librado de veras.',
          relatedSuspects: ['P', 'MM']
        },
        {
          id: 'c5',
          text: 'Una sirvienta reconoció su voz al llamar a la puerta exterior, pero corrió hacia adentro por la alegría sin abrirle.',
          narrative: 'Rode escuchó el saludo de Pedro al otro lado de la hoja de madera.',
          relatedSuspects: ['R', 'P']
        },
        {
          id: 'c6',
          text: 'Los que rezaban en la casa tacharon a la sirvienta de loca, afirmando que debía ser el ángel del prisionero.',
          narrative: 'El Discípulo incrédulo y la asamblea rechazaron inicialmente el testimonio de Rode.',
          relatedSuspects: ['DI', 'R', 'MM']
        },
        {
          id: 'c7',
          text: 'Finalmente abrieron la puerta y, asombrados, escucharon cómo el prisionero les relataba su liberación.',
          narrative: 'Todos enmudecieron cuando Pedro les hizo seña con la mano para contarles el prodigio.',
          relatedSuspects: ['P', 'MM', 'DI', 'R']
        }
      ],
      solution: {
        P: { row: 3, col: 4 },
        HA: { row: 2, col: 5 },
        R: { row: 4, col: 6 },
        AG: { row: 1, col: 2 },
        MM: { row: 6, col: 1 },
        CG: { row: 0, col: 0 },
        DI: { row: 5, col: 3 }
      }
    }
  },

  // RETO 009-HCH: La Adivina Silenciada
  {
    id: '009-HCH',
    nombre: 'La Adivina Silenciada',
    datos_juego: {
      Tamano_Cuadricula: '7x7',
      gridSize: 7,
      categoria: 'Asesinatos o crímenes',
      citasBiblicas: 'Hechos 16, 16-24',
      textoBiblicoClave: 'Al ver sus amos que se les había esfumado la esperanza de hacer negocio, agarraron a Pablo y a Silas y los arrastraron a la plaza...',
      contextoTeologico: 'Muestra cómo el Evangelio choca con la explotación humana. Fe Adulta destaca que liberar a una persona oprimida trae consecuencias penales cuando ataca los intereses del capital. La salvación cristiana implica liberación integral.',
      solucionExplicacion: 'En Filipos, Pablo exorcizó a una esclava que adivinaba el futuro y enriquecía a sus amos. Al perder su negocio, los amos denunciaron falsamente a Pablo y Silas, quienes fueron azotados y encarcelados hasta que un terremoto los liberó.',
      storyIntro: 'Dos misioneros son azotados y encarcelados sin juicio previo. Su único "delito" fue realizar un exorcismo sobre una mujer que, paradójicamente, no paraba de hacerles publicidad positiva por las calles.',
      epilogue: '¡Medianoche de cánticos y cadenas rotas! El gran temblor abrió las puertas del calabozo y el carcelero de Filipos se lavó las heridas y fue bautizado con toda su familia tras oír: «Cree en el Señor Jesús y serás salvo».',
      subtitle: 'Asesinatos o crímenes · Hechos 16 · 7x7',
      badge: 'LA ADIVINA SILENCIADA · 7x7',
      victimId: 'JE',
      murdererId: 'AE',
      rooms: {
        foro_mercado: {
          id: 'foro_mercado',
          name: 'Foro Público y Tribunal de Filipos',
          shortName: 'Foro Filipos',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Plaza mayor donde los amos enfurecidos presentaron la falsa acusación de sedición.'
        },
        calle_pitonisa: {
          id: 'calle_pitonisa',
          name: 'Avenida del Oráculo y Adivinación',
          shortName: 'Avenida Oráculo',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Calle por donde la joven esclava seguía a Pablo gritando tras sus pasos durante días.'
        },
        calabozo_hondo: {
          id: 'calabozo_hondo',
          name: 'Calabozo Interior de la Cárcel',
          shortName: 'Calabozo Interior',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Celda más oscura y subterránea donde los apóstoles tenían los pies trabados en el cepo.'
        },
        patio_carcelero: {
          id: 'patio_carcelero',
          name: 'Vivienda y Patio del Alcaide',
          shortName: 'Patio Alcaide',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Residencia del carcelero donde lavó los azotes de los prisioneros y compartió la mesa.'
        },
        ribera_gangites: {
          id: 'ribera_gangites',
          name: 'Ribera del Río Gangites',
          shortName: 'Ribera Río',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Lugar de oración a extramuros donde Pablo solía acudir a enseñar los sábados.'
        }
      },
      cellRooms: [
        ['ribera_gangites', 'ribera_gangites', 'calle_pitonisa', 'calle_pitonisa', 'foro_mercado', 'foro_mercado', 'foro_mercado'],
        ['ribera_gangites', 'calle_pitonisa', 'calle_pitonisa', 'calle_pitonisa', 'foro_mercado', 'foro_mercado', 'foro_mercado'],
        ['calle_pitonisa', 'calle_pitonisa', 'calle_pitonisa', 'foro_mercado', 'foro_mercado', 'foro_mercado', 'foro_mercado'],
        ['calle_pitonisa', 'foro_mercado', 'foro_mercado', 'foro_mercado', 'foro_mercado', 'foro_mercado', 'calabozo_hondo'],
        ['foro_mercado', 'foro_mercado', 'patio_carcelero', 'patio_carcelero', 'calabozo_hondo', 'calabozo_hondo', 'calabozo_hondo'],
        ['patio_carcelero', 'patio_carcelero', 'patio_carcelero', 'calabozo_hondo', 'calabozo_hondo', 'calabozo_hondo', 'calabozo_hondo'],
        ['patio_carcelero', 'calabozo_hondo', 'calabozo_hondo', 'calabozo_hondo', 'calabozo_hondo', 'calabozo_hondo', 'calabozo_hondo']
      ],
      blockedObjects: {
        '0,4': {
          emoji: '🪙',
          name: 'Bolsa de Ganancias del Oráculo',
          evidenceCode: 'EV-01',
          description: 'Monedas cobradas por los amos mediante los vaticinios de la joven oprimida.'
        },
        '2,1': {
          emoji: '🐍',
          name: 'Símbolo del Espíritu Pitónico',
          evidenceCode: 'EV-02',
          description: 'Influencia demoníaca de la adivinación expulsada por el mandato de Pablo.'
        },
        '4,5': {
          emoji: '🪵',
          name: 'Cepo de Madera para los Pies',
          evidenceCode: 'EV-03',
          description: 'Madero perforado en el que encajaron con crueldad los tobillos de los apóstoles.'
        },
        '6,3': {
          emoji: '🗡️',
          name: 'Espada Desenvainada del Carcelero',
          evidenceCode: 'EV-04',
          description: 'Arma con la que el oficial iba a quitarse la vida creyendo huidos a los reclusos.'
        }
      },
      suspects: [
        {
          id: 'P',
          name: 'Pablo',
          role: 'Misionero Exorcista',
          avatar: '🧔',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Dijo al espíritu: «Te mando en el nombre de Jesucristo que salgas de ella». Y salió al instante.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'foro_mercado' },
            { tipo: 'junto_objeto', objeto: '4,5' }
          ]
        },
        {
          id: 'S',
          name: 'Silas',
          role: 'Compañero Azotado',
          avatar: '🧑',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Cantaba himnos de alabanza a medianoche en el calabozo interior junto a Pablo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'calabozo_hondo' }
          ]
        },
        {
          id: 'JE',
          name: 'Joven Esclava',
          role: 'Pitonisa Explotada',
          avatar: '👧',
          color: 'from-rose-600 to-rose-800',
          isVictim: true,
          clueText: 'Gritaba tras ellos: «Estos hombres son siervos del Dios Altísimo, quienes os anuncian el camino de salvación».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'calle_pitonisa' },
            { tipo: 'columnaObjeto', objeto: '2,1' }
          ]
        },
        {
          id: 'AE',
          name: 'Amo de la Esclava',
          role: 'Mercader Explotador',
          avatar: '💰',
          color: 'from-red-600 to-red-800',
          isMurderer: true,
          clueText: 'Al ver que se esfumaba su negocio de lucro, arrastró a los predicadores a los magistrados.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'calle_pitonisa' }
          ]
        },
        {
          id: 'CF',
          name: 'Carcelero de Filipos',
          role: 'Oficial Converso',
          avatar: '🗝️',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Cayó temblando a sus pies diciendo: «Señores, ¿qué debo hacer para ser salvo?».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'patio_carcelero' }
          ]
        },
        {
          id: 'MR',
          name: 'Magistrado Romano',
          role: 'Pretor de la Colonia',
          avatar: '🏛️',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Ordenó rasgar las vestiduras de los apóstoles y golpearlos severamente con varas.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'foro_mercado' },
            { tipo: 'borde', lado: 'este' }
          ]
        },
        {
          id: 'GV',
          name: 'Guardia con Varas',
          role: 'Lictor Ejecutor',
          avatar: '🪓',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Propinó los azotes públicos a los reos en la plaza antes de entregarlos al calabozo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'foro_mercado' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Una joven poseía un espíritu de adivinación que generaba muchas ganancias económicas a sus propietarios.',
          narrative: 'La joven esclava era utilizada por el amo codicioso para lucrar en las calles.',
          relatedSuspects: ['JE', 'AE']
        },
        {
          id: 'c2',
          text: 'La joven seguía a los misioneros durante días gritando que eran siervos del Dios Altísimo.',
          narrative: 'Sus clamores diarios atraían la atención sobre Pablo y Silas.',
          relatedSuspects: ['JE', 'P', 'S']
        },
        {
          id: 'c3',
          text: 'El líder de los misioneros se hartó de la situación y ordenó al espíritu en el nombre de Jesucristo que saliera de ella.',
          narrative: 'Pablo pronunció el mandato apostólico liberando a la muchacha de su servidumbre espiritual.',
          relatedSuspects: ['P', 'JE']
        },
        {
          id: 'c4',
          text: 'Al quedar liberada la joven, sus propietarios se dieron cuenta de que su fuente de ingresos había desaparecido.',
          narrative: 'El amo de la esclava constató indignado que la esclava ya no adivinaba nada.',
          relatedSuspects: ['AE', 'JE']
        },
        {
          id: 'c5',
          text: 'Los dueños arrastraron a los misioneros a la plaza pública acusándolos de alterar el orden romano.',
          narrative: 'El magistrado romano acogió la denuncia sin verificar la ciudadanía de los reos.',
          relatedSuspects: ['AE', 'MR', 'P', 'S']
        },
        {
          id: 'c6',
          text: 'Tras ser golpeados con varas, los misioneros fueron arrojados al calabozo más oscuro con los pies en el cepo.',
          narrative: 'El lictor y el carcelero de Filipos encerraron a Pablo y Silas en el fondo de la prisión.',
          relatedSuspects: ['GV', 'CF', 'P', 'S']
        },
        {
          id: 'c7',
          text: 'A medianoche, un terremoto liberó a los misioneros y provocó la conversión del guardián de la prisión.',
          narrative: 'El carcelero de Filipos lavó sus heridas y creyó con toda su casa recibiendo la salvación.',
          relatedSuspects: ['CF', 'P', 'S']
        }
      ],
      solution: {
        P: { row: 3, col: 5 },
        S: { row: 6, col: 4 },
        JE: { row: 1, col: 1 },
        AE: { row: 0, col: 3 },
        CF: { row: 5, col: 2 },
        MR: { row: 2, col: 6 },
        GV: { row: 4, col: 0 }
      }
    }
  }
];
