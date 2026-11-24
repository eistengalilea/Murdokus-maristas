import { Reto } from '../types';

/**
 * NUEVOS RETOS BÍBLICOS - DIFICULTAD FÁCIL (5x5 - 25 CELDAS)
 * Ciclo de la Monarquía de Israel (1 y 2 Samuel, 1 Reyes).
 */
export const RETOS_MONARQUIA_FACILES: Reto[] = [
  // RETO 002-C: La Espada de la Verdad
  {
    id: '002-C',
    nombre: 'La Espada de la Verdad',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Desenlaces de historias y parábolas',
      citasBiblicas: '1 Reyes 3, 16-28',
      textoBiblicoClave: 'El rey sentenció: «Entregad a la primera el niño vivo, no lo matéis; ella es la madre».',
      contextoTeologico: 'El relato ilustra el don divino de la sabiduría (discernimiento). El magisterio subraya el valor supremo de la vida humana y el amor maternal oblato que prefigura el amor de Dios, priorizando la vida por encima de la posesión.',
      solucionExplicacion: 'Salomón resolvió la disputa amenazando con partir al bebé en dos. La verdadera madre prefirió renunciar a su hijo antes que verlo morir, revelando así al rey quién sentía auténtico amor maternal.',
      storyIntro: 'Dos mujeres reclaman la maternidad de un mismo bebé vivo en la corte. El monarca, ante la falta de testigos, ordena una solución macabra que obliga a la verdadera madre a renunciar a su hijo.',
      epilogue: '¡Sabiduría divina manifestada! La espada desenvainada reveló el instinto compasivo del verdadero amor maternal. Salomón restituyó al niño a los brazos de su legítima madre ante todo el pueblo de Israel.',
      subtitle: 'Desenlaces de historias y parábolas · 1 Reyes 3 · 5x5',
      badge: 'LA ESPADA DE LA VERDAD · 5x5',
      victimId: 'N',
      murdererId: 'F',
      rooms: {
        trono_salomon: {
          id: 'trono_salomon',
          name: 'Trono del Juicio de Salomón',
          shortName: 'Trono Salomón',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Estrado regio de marfil y oro donde el joven monarca impartió su célebre sentencia.'
        },
        estrado_litigio: {
          id: 'estrado_litigio',
          name: 'Estrado de los Litigantes',
          shortName: 'Estrado Litigio',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Lugar donde comparecieron ambas mujeres con el bebé vivo y el llanto del reclamo.'
        },
        camara_guardia: {
          id: 'camara_guardia',
          name: 'Cámara del Verdugo Real',
          shortName: 'Cámara Guardia',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Puesto militar donde el soldado empuñó la espada reluciente de dos filos.'
        },
        posada_mujeres: {
          id: 'posada_mujeres',
          name: 'Aposento Común de las Madres',
          shortName: 'Aposento Madres',
          bgColor: 'bg-sky-100/70',
          borderColor: 'border-sky-700/60',
          textColor: 'text-sky-950',
          tagColor: 'bg-sky-800 text-sky-100',
          description: 'Casa compartida donde nacieron ambos niños y ocurrió el trágico canje nocturno.'
        },
        galeria_escribas: {
          id: 'galeria_escribas',
          name: 'Galería de Notarios y Sabios',
          shortName: 'Galería Sabios',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Pasillo donde los cronistas reales registraron la fama de sabiduría del rey.'
        }
      },
      cellRooms: [
        ['trono_salomon', 'trono_salomon', 'trono_salomon', 'galeria_escribas', 'galeria_escribas'],
        ['posada_mujeres', 'posada_mujeres', 'estrado_litigio', 'estrado_litigio', 'galeria_escribas'],
        ['posada_mujeres', 'posada_mujeres', 'estrado_litigio', 'estrado_litigio', 'galeria_escribas'],
        ['camara_guardia', 'estrado_litigio', 'estrado_litigio', 'camara_guardia', 'camara_guardia'],
        ['camara_guardia', 'camara_guardia', 'camara_guardia', 'camara_guardia', 'camara_guardia']
      ],
      blockedObjects: {
        '0,4': {
          emoji: '📜',
          name: 'Rollo de Leyes de Israel',
          evidenceCode: 'EV-01',
          description: 'Decretos sobre custodia y herencia que no contemplaban este caso sin testigos.'
        },
        '2,1': {
          emoji: '🕯️',
          name: 'Lámpara de Aceite de la Posada',
          evidenceCode: 'EV-02',
          description: 'Testigo mudo de la noche cuando uno de los niños fue asfixiado en la cama.'
        },
        '4,0': {
          emoji: '⚔️',
          name: 'Espada Afilada del Juicio',
          evidenceCode: 'EV-03',
          description: 'Acero desenvainado con el que el rey ordenó dividir al niño en dos partes.'
        }
      },
      suspects: [
        {
          id: 'S',
          name: 'Salomón',
          role: 'Rey y Juez Supremo',
          avatar: '👑',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Preside en el Trono Real y escucha el clamor de ambas partes.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'trono_salomon' }
          ]
        },
        {
          id: 'M',
          name: 'Madre Verdadera',
          role: 'Primera Prostituta (Madre Legítima)',
          avatar: '🤱',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Prefirió ceder al infante con tal de conservar su vida.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'posada_mujeres' }
          ]
        },
        {
          id: 'F',
          name: 'Segunda Prostituta',
          role: 'Falsa Madre Acusadora',
          avatar: '👤',
          color: 'from-purple-600 to-purple-800',
          isMurderer: true,
          clueText: 'Aceptó que el niño fuera cortado con la espada diciendo: "Ni para mí ni para ti".',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'estrado_litigio' },
            { tipo: 'filaObjeto', objeto: '2,1' }
          ]
        },
        {
          id: 'N',
          name: 'Niño Vivo',
          role: 'Lactante Disputado',
          avatar: '👶',
          color: 'from-rose-600 to-rose-800',
          isVictim: true,
          clueText: 'El pequeño inocente amenazado por el filo del juicio.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'estrado_litigio' },
            { tipo: 'columnaObjeto', objeto: '2,1' }
          ]
        },
        {
          id: 'G',
          name: 'Guardia Real',
          role: 'Verdugo de la Corte',
          avatar: '🗡️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Apostado en la Cámara de la Guardia esperando la orden final del monarca.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camara_guardia' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Dos mujeres que vivían solas en la misma casa dieron a luz con tan solo tres días de diferencia.',
          narrative: 'Madre Verdadera y la Falsa Madre compartían aposento antes de la tragedia.',
          relatedSuspects: ['M', 'F']
        },
        {
          id: 'c2',
          text: 'Una de las mujeres asfixió accidentalmente a su bebé mientras dormía y lo intercambió en secreto por el hijo vivo de su compañera.',
          narrative: 'La Segunda Prostituta llevó a cabo el engaño en la oscuridad de la noche.',
          relatedSuspects: ['F', 'N']
        },
        {
          id: 'c3',
          text: 'Al amanecer, la verdadera madre descubrió el engaño al observar detenidamente el rostro del niño muerto.',
          narrative: 'La Madre Verdadera supo al instante que aquel cuerpecito sin vida no era su hijo.',
          relatedSuspects: ['M']
        },
        {
          id: 'c4',
          text: 'El monarca, ante la falta de pruebas, ordenó a un guardia traer una espada para partir al niño vivo en dos mitades iguales.',
          narrative: 'Salomón dispuso la prueba de la espada al soldado de su corte.',
          relatedSuspects: ['S', 'G']
        },
        {
          id: 'c5',
          text: 'La falsa madre aceptó la solución, pero la verdadera madre suplicó que entregaran el niño a su rival con tal de salvarle la vida.',
          narrative: 'El amor maternal genuino prefirió la renuncia antes que la muerte del infante.',
          relatedSuspects: ['M', 'F', 'S']
        }
      ],
      solution: {
        S: { row: 0, col: 2 },
        M: { row: 1, col: 0 },
        F: { row: 2, col: 3 },
        N: { row: 3, col: 1 },
        G: { row: 4, col: 4 }
      }
    }
  },

  // RETO 005-C: La Sesión Espiritista
  {
    id: '005-C',
    nombre: 'La Sesión Espiritista',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: '1 Samuel 28, 3-25',
      textoBiblicoClave: 'Samuel dijo a Saúl: «¿Por qué me molestas haciéndome subir? (...) Mañana tú y tus hijos estaréis conmigo».',
      contextoTeologico: 'Muestra a un líder desesperado rompiendo sus propias leyes religiosas. El magisterio advierte aquí contra el espiritismo. Refleja la tragedia psicológica de quien ha perdido el favor divino y su propia coherencia moral.',
      solucionExplicacion: 'Ante el silencio divino, el rey Saúl consultó en secreto a la nigromante de Endor para invocar al difunto profeta Samuel. Éste le anunció su inminente derrota y muerte a manos de los filisteos.',
      storyIntro: 'En vísperas de una batalla desesperada, un gobernante acude disfrazado a una mujer proscrita. Busca contactar con su antiguo consejero en el más allá, pero el mensaje que recibe sella su condena.',
      epilogue: '¡Evocación nefasta en la penumbra de Endor! Saúl cayó cuan largo era sobre la tierra al oír la voz de Samuel. Al amanecer, en las colinas de Gelboé, la sentencia del más allá se consumó inexorablemente.',
      subtitle: 'Descubrimiento de acciones ocultas · 1 Samuel 28 · 5x5',
      badge: 'LA SESIÓN ESPIRITISTA · 5x5',
      victimId: 'S',
      murdererId: 'N',
      rooms: {
        choza_nigromante: {
          id: 'choza_nigromante',
          name: 'Cueva de la Nigromante de Endor',
          shortName: 'Cueva Endor',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Refugio clandestino iluminado por brasas donde se realizaban conjuros prohibidos.'
        },
        circulo_evocacion: {
          id: 'circulo_evocacion',
          name: 'Círculo de Aparición de Samuel',
          shortName: 'Círculo Aparición',
          bgColor: 'bg-stone-200/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Hendedura en el suelo de donde ascendió el anciano envuelto en su venerable manto.'
        },
        senda_nocturna: {
          id: 'senda_nocturna',
          name: 'Senda Nocturna de Gelboé',
          shortName: 'Senda Nocturna',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Camino furtivo por el que el rey y sus escoltas cruzaron las líneas enemigas.'
        },
        establo_ternero: {
          id: 'establo_ternero',
          name: 'Establo del Ternero Cebado',
          shortName: 'Establo Ternero',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Lugar donde la mujer sacrificó un ternero para que el rey recobrase fuerzas antes del alba.'
        },
        puesto_vigilancia: {
          id: 'puesto_vigilancia',
          name: 'Puesto de Guardia Exterior',
          shortName: 'Puesto Guardia',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Entrada donde los escoltas apostaron vigilancia temiendo una emboscada filistea.'
        }
      },
      cellRooms: [
        ['senda_nocturna', 'senda_nocturna', 'puesto_vigilancia', 'puesto_vigilancia', 'choza_nigromante'],
        ['senda_nocturna', 'circulo_evocacion', 'puesto_vigilancia', 'choza_nigromante', 'choza_nigromante'],
        ['circulo_evocacion', 'circulo_evocacion', 'circulo_evocacion', 'choza_nigromante', 'choza_nigromante'],
        ['establo_ternero', 'establo_ternero', 'establo_ternero', 'establo_ternero', 'choza_nigromante'],
        ['establo_ternero', 'establo_ternero', 'establo_ternero', 'establo_ternero', 'choza_nigromante']
      ],
      blockedObjects: {
        '0,3': {
          emoji: '🎭',
          name: 'Disfraz Plebeyo de Saúl',
          evidenceCode: 'EV-01',
          description: 'Ropas vulgares que el rey usó para ocultar su corona y estatura regia.'
        },
        '2,2': {
          emoji: '🔥',
          name: 'Brasero de Cenizas Místicas',
          evidenceCode: 'EV-02',
          description: 'Recipiente humeante sobre el suelo rocoso donde se invocaban espíritus subterráneos.'
        },
        '4,4': {
          emoji: '🥩',
          name: 'Mesa del Ternero y Pan Ázimo',
          evidenceCode: 'EV-03',
          description: 'Última cena ofrecida con temor por la adivina al rey abatido.'
        }
      },
      suspects: [
        {
          id: 'S',
          name: 'Saúl',
          role: 'Rey Desesperado de Incógnito',
          avatar: '👑',
          color: 'from-amber-600 to-amber-800',
          isVictim: true,
          clueText: 'Afligido por el silencio divino y el terror al campamento filisteo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'senda_nocturna' },
            { tipo: 'filaObjeto', objeto: '0,3' }
          ]
        },
        {
          id: 'N',
          name: 'Nigromante de Endor',
          role: 'Médium Proscrita',
          avatar: '🔮',
          color: 'from-purple-600 to-purple-800',
          isMurderer: true,
          clueText: 'Evocó la figura que hizo temblar al propio monarca tras exigir juramento de impunidad.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'senda_nocturna' }
          ]
        },
        {
          id: 'P',
          name: 'Profeta Samuel',
          role: 'Espíritu Invocado del Más Allá',
          avatar: '📜',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Apareció cubierto con su manto profético para ratificar el fin de la dinastía de Saúl.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'choza_nigromante' }
          ]
        },
        {
          id: 'C1',
          name: 'Primer Escolta',
          role: 'Criado Confidente Real',
          avatar: '🛡️',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Guio a Saúl en la oscuridad de la noche hacia el poblado de Endor.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'establo_ternero' },
            { tipo: 'columnaObjeto', objeto: '0,3' }
          ]
        },
        {
          id: 'C2',
          name: 'Segundo Escolta',
          role: 'Criado Centinela',
          avatar: '🗡️',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Apostado en el acceso del establo atento a los rumores de los montes.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'establo_ternero' },
            { tipo: 'filaObjeto', objeto: '4,4' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El primer rey de Israel estaba aterrorizado ante el ejército filisteo y Dios no le respondía por ningún medio.',
          narrative: 'Saúl buscó oráculos divinos sin recibir respuesta por sueños ni por profetas.',
          relatedSuspects: ['S']
        },
        {
          id: 'c2',
          text: 'A pesar de haber prohibido la adivinación en el país, el rey se disfrazó de noche para consultar a una medium en Endor.',
          narrative: 'El monarca quebrantó su propio mandato real por desesperación.',
          relatedSuspects: ['S', 'N']
        },
        {
          id: 'c3',
          text: 'El rey se hizo acompañar de dos escoltas y juró por Dios a la mujer que no sufriría represalias.',
          narrative: 'Los dos guardias custodiaron el umbral asegurando el secreto.',
          relatedSuspects: ['C1', 'C2', 'N']
        },
        {
          id: 'c4',
          text: 'La medium invocó a un anciano envuelto en un manto, a quien el rey reconoció inmediatamente como su mentor fallecido.',
          narrative: 'El espíritu de Samuel subió de la tierra con su manto característico.',
          relatedSuspects: ['N', 'P']
        },
        {
          id: 'c5',
          text: 'En lugar de consuelo, el espíritu le profetizó que al día siguiente Yahvé entregaría el campamento y él moriría.',
          narrative: 'El oráculo lapidario anunció la derrota inevitable en los montes de Gelboé.',
          relatedSuspects: ['P', 'S']
        }
      ],
      solution: {
        S: { row: 0, col: 1 },
        N: { row: 1, col: 0 },
        P: { row: 2, col: 4 },
        C1: { row: 3, col: 3 },
        C2: { row: 4, col: 2 }
      }
    }
  },

  // RETO 007-C: El Gigante Decapitado
  {
    id: '007-C',
    nombre: 'El Gigante Decapitado',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Desenlaces de historias y parábolas',
      citasBiblicas: '1 Samuel 17, 1-54',
      textoBiblicoClave: 'David metió la mano en el zurrón, sacó una piedra, la tiró con la honda e hirió al filisteo en la frente.',
      contextoTeologico: 'Es el paradigma bíblico de la debilidad frente al poder arrogante. El Vaticano usa este pasaje para ilustrar que las verdaderas victorias se logran confiando en la gracia providencial de Dios, y no en la tecnología militar humana.',
      solucionExplicacion: 'David rechazó la armadura de Saúl, enfrentándose al gigante filisteo Goliat solo con su honda y cinco piedras. Tras aturdirlo con una pedrada en la frente, usó la espada del propio Goliat para cortarle la cabeza.',
      storyIntro: 'Un ejército entero tiembla ante un solo guerrero descomunal. Un joven pastor rechaza la protección del rey y avanza hacia la batalla armado únicamente con instrumentos de campo y una confianza inquebrantable.',
      epilogue: '¡Triunfo de la fe sobre la fuerza bruta! La piedra del torrente hendió la frente del gigante de seis codos. David tomó el acero de Goliat y cortó su cabeza ante la desbandada general de las tropas filisteas.',
      subtitle: 'Desenlaces de historias y parábolas · 1 Samuel 17 · 5x5',
      badge: 'EL GIGANTE DECAPITADO · 5x5',
      victimId: 'G',
      murdererId: 'D',
      rooms: {
        valle_elah: {
          id: 'valle_elah',
          name: 'Valle de Elah (Campo de Desafío)',
          shortName: 'Valle Elah',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Hondonada entre dos colinas donde Goliat desafió a Israel durante cuarenta días.'
        },
        torrente_guijarros: {
          id: 'torrente_guijarros',
          name: 'Lecho del Torrente y Cantos Rodados',
          shortName: 'Torrente Guijarros',
          bgColor: 'bg-sky-100/70',
          borderColor: 'border-sky-700/60',
          textColor: 'text-sky-950',
          tagColor: 'bg-sky-800 text-sky-100',
          description: 'Arroyo seco donde el pastor escogió cinco piedras lisas para su zurrón.'
        },
        tienda_saul: {
          id: 'tienda_saul',
          name: 'Tienda de Campaña de Saúl',
          shortName: 'Tienda Saúl',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Puesto de mando real donde David se probó la pesada cota de malla de bronce y la rechazó.'
        },
        campamento_israel: {
          id: 'campamento_israel',
          name: 'Línea de Batalla de Israel',
          shortName: 'Línea Israel',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Trinchera donde los soldados temblaban ante los insultos del guerrero de Gat.'
        },
        posicion_filisteos: {
          id: 'posicion_filisteos',
          name: 'Cerro de los Filisteos',
          shortName: 'Cerro Filisteos',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Colina enemiga donde aguardaba el ejército de Socó con carros de combate.'
        }
      },
      cellRooms: [
        ['campamento_israel', 'campamento_israel', 'campamento_israel', 'tienda_saul', 'tienda_saul'],
        ['campamento_israel', 'valle_elah', 'valle_elah', 'valle_elah', 'posicion_filisteos'],
        ['campamento_israel', 'campamento_israel', 'valle_elah', 'posicion_filisteos', 'posicion_filisteos'],
        ['torrente_guijarros', 'torrente_guijarros', 'valle_elah', 'posicion_filisteos', 'posicion_filisteos'],
        ['torrente_guijarros', 'torrente_guijarros', 'torrente_guijarros', 'torrente_guijarros', 'torrente_guijarros']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '🛡️',
          name: 'Armadura de Bronce Desechada',
          evidenceCode: 'EV-01',
          description: 'Cota de malla de Saúl que David se quitó por resultarle inútil y pesada.'
        },
        '2,3': {
          emoji: '⚔️',
          name: 'Lanza Gigante como Enjullo de Telar',
          evidenceCode: 'EV-02',
          description: 'Arma descomunal de Goliat con punta de hierro de seiscientos siclos.'
        },
        '4,0': {
          emoji: '🪨',
          name: 'Zurrón Pastoril con Cuatro Cantos',
          evidenceCode: 'EV-03',
          description: 'Bolsa de cuero donde quedaron las piedras sobrantes tras el disparo certero.'
        }
      },
      suspects: [
        {
          id: 'D',
          name: 'David',
          role: 'Joven Pastor con Honda',
          avatar: '🪨',
          color: 'from-amber-600 to-amber-800',
          isMurderer: true,
          clueText: 'Avanzó hacia el combate en el nombre del Señor de los ejércitos de Israel.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'valle_elah' }
          ]
        },
        {
          id: 'G',
          name: 'Goliat',
          role: 'Campeón Filisteo de Gat',
          avatar: '👹',
          color: 'from-red-600 to-red-800',
          isVictim: true,
          clueText: 'Despreció al muchacho rubio y maldijo a Israel por sus dioses paganos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'valle_elah' },
            { tipo: 'columnaObjeto', objeto: '0,1' }
          ]
        },
        {
          id: 'S',
          name: 'Rey Saúl',
          role: 'Monarca de Israel',
          avatar: '👑',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Ofreció la mano de su hija y exención de tributos a quien derrotara al gigante.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'tienda_saul' }
          ]
        },
        {
          id: 'E',
          name: 'Eliab',
          role: 'Hermano Mayor de David',
          avatar: '😠',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Increpó a David acusándolo de abandonar las ovejas en el desierto por vanagloria.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'campamento_israel' }
          ]
        },
        {
          id: 'A',
          name: 'Abner',
          role: 'General del Ejército Hebreo',
          avatar: '🛡️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Presentó al pastor ante el rey llevando en la mano la cabeza ensangrentada del filisteo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'torrente_guijarros' },
            { tipo: 'columnaObjeto', objeto: '2,3' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Durante cuarenta días, el campeón filisteo desafió a los ejércitos de Israel sin que nadie se atreviera a pelear.',
          narrative: 'Goliat atemorizaba a las tropas cada mañana y tarde.',
          relatedSuspects: ['G']
        },
        {
          id: 'c2',
          text: 'El hermano mayor del joven voluntario lo menospreció acusándolo de ir al campamento solo por curiosidad mórbida.',
          narrative: 'Eliab reprendió con amargura la osadía de David en las filas.',
          relatedSuspects: ['E', 'D']
        },
        {
          id: 'c3',
          text: 'El rey ofreció su propia armadura al joven, pero este se la quitó porque no podía ni caminar con ella.',
          narrative: 'Saúl vistió a David con sus pertrechos de bronce pero fueron desechados.',
          relatedSuspects: ['S', 'D']
        },
        {
          id: 'c4',
          text: 'El joven avanzó con su bastón pastoral, cinco cantos rodados del torrente y una honda.',
          narrative: 'David bajó al lecho del arroyo con la confianza puesta en Yahvé.',
          relatedSuspects: ['D']
        },
        {
          id: 'c5',
          text: 'Tras derribar al gigante con una piedra certera, el joven utilizó la pesada espada del enemigo para decapitarlo.',
          narrative: 'El general Abner guio a las tropas en la persecución tras la caída del campeón.',
          relatedSuspects: ['D', 'G', 'A']
        }
      ],
      solution: {
        D: { row: 3, col: 2 },
        G: { row: 1, col: 1 },
        S: { row: 0, col: 4 },
        E: { row: 2, col: 0 },
        A: { row: 4, col: 3 }
      }
    }
  }
];
