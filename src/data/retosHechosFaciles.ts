import { Reto } from '../types';

/**
 * NUEVOS RETOS BÍBLICOS - DIFICULTAD FÁCIL (5x5 - 25 CELDAS)
 * Ciclo del libro de los Hechos de los Apóstoles (HCH)
 */
export const RETOS_HECHOS_FACILES: Reto[] = [
  // RETO 002-HCH: Huida por la Muralla
  {
    id: '002-HCH',
    nombre: 'Huida por la Muralla',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Hechos 9, 23-25',
      textoBiblicoClave: 'Pero sus discípulos lo tomaron de noche y lo bajaron por la muralla descolgándolo en una canasta.',
      contextoTeologico: 'Muestra la vulnerabilidad de los primeros apóstoles. El Vaticano señala que la debilidad de Pablo es el lugar donde se manifiesta el poder de Dios, huyendo escondido como un criminal para poder seguir evangelizando.',
      solucionExplicacion: 'Saulo (Pablo) huyó de Damasco porque los judíos y el gobernador querían matarlo. Sus discípulos lo metieron en una gran canasta y lo descolgaron de noche por la muralla de la ciudad para que escapara.',
      storyIntro: 'Un antiguo perseguidor convertido en predicador se encuentra atrapado en una ciudad amurallada. El gobernador ha ordenado vigilar todas las puertas día y noche para asesinarlo, pero el predicador desaparece de la ciudad sin cruzar ninguna puerta.',
      epilogue: '¡Evacuado en el silencio de la noche! Saulo descendió por la soga suspendido en el cesto de mimbre y logró huir a Jerusalén, salvando la vida para continuar su misión entre los gentiles.',
      subtitle: 'Descubrimiento de acciones ocultas · Hechos 9 · 5x5',
      badge: 'HUIDA POR LA MURALLA · 5x5',
      victimId: 'S',
      murdererId: 'G',
      rooms: {
        puerta_ciudad: {
          id: 'puerta_ciudad',
          name: 'Puertas Fortificadas de Damasco',
          shortName: 'Puertas Damasco',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Accesos fuertemente custodiados día y noche por los centinelas del rey Aretas.'
        },
        ventana_muralla: {
          id: 'ventana_muralla',
          name: 'Ventana Alta en el Lienzo de la Muralla',
          shortName: 'Ventana Muralla',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Abertura sobre el adarve desde donde se descolgó el cesto con sogas de cáñamo.'
        },
        casa_refugio: {
          id: 'casa_refugio',
          name: 'Casa Clandestina de los Discípulos',
          shortName: 'Casa Refugio',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Hogar donde Saulo permaneció oculto mientras se preparaba el plan de evasión.'
        },
        camino_exterior: {
          id: 'camino_exterior',
          name: 'Foso y Campiña Exterior de Damasco',
          shortName: 'Campiña Exterior',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Tierra abierta en penumbra por donde el apóstol corrió tras tocar el suelo.'
        },
        calle_derecha: {
          id: 'calle_derecha',
          name: 'Calle Llamada Recta',
          shortName: 'Calle Recta',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Vía principal donde Saulo recuperó la vista antes de ser acechado por sus adversarios.'
        }
      },
      cellRooms: [
        ['puerta_ciudad', 'puerta_ciudad', 'puerta_ciudad', 'calle_derecha', 'calle_derecha'],
        ['puerta_ciudad', 'puerta_ciudad', 'casa_refugio', 'casa_refugio', 'calle_derecha'],
        ['ventana_muralla', 'ventana_muralla', 'casa_refugio', 'casa_refugio', 'calle_derecha'],
        ['ventana_muralla', 'ventana_muralla', 'camino_exterior', 'camino_exterior', 'camino_exterior'],
        ['camino_exterior', 'camino_exterior', 'camino_exterior', 'camino_exterior', 'camino_exterior']
      ],
      blockedObjects: {
        '0,2': {
          emoji: '🧺',
          name: 'Canasto de Mimbre Grande',
          evidenceCode: 'EV-01',
          description: 'Cesta empleada para transportar provisiones en la que se introdujo Saulo.'
        },
        '2,0': {
          emoji: '🪢',
          name: 'Soga Fuerte de Cáñamo',
          evidenceCode: 'EV-02',
          description: 'Cuerda gruesa con la que los discípulos sostuvieron el peso del fugitivo.'
        },
        '4,4': {
          emoji: '🗡️',
          name: 'Espada de los Centinelas',
          evidenceCode: 'EV-03',
          description: 'Armas de los guardias apostados inútilmente en los portales principales.'
        }
      },
      suspects: [
        {
          id: 'S',
          name: 'Saulo (Pablo)',
          role: 'Predicador Perseguido',
          avatar: '🧔',
          color: 'from-amber-600 to-amber-800',
          isVictim: true,
          clueText: 'Evadido en el canasto a través del muro exterior sin que los centinelas lo notasen.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'ventana_muralla' },
            { tipo: 'columnaObjeto', objeto: '2,0' }
          ]
        },
        {
          id: 'G',
          name: 'Gobernador de Aretas',
          role: 'Etnarca de Damasco',
          avatar: '👑',
          color: 'from-red-600 to-red-800',
          isMurderer: true,
          clueText: 'Selló todas las salidas de la muralla con patrullas armadas para capturar al apóstol.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'ventana_muralla' }
          ]
        },
        {
          id: 'GD',
          name: 'Guardia de la Ciudad',
          role: 'Centinela de Turno',
          avatar: '🛡️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Vigilaba las puertas día y noche sin sospechar la salida por el lienzo de piedra.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'calle_derecha' }
          ]
        },
        {
          id: 'D1',
          name: 'Discípulo Primero',
          role: 'Rescatador Fiel',
          avatar: '🧑',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Sujetó los cabos de la cuerda descolgando el cesto con extrema precaución.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'casa_refugio' },
            { tipo: 'columnaObjeto', objeto: '0,2' }
          ]
        },
        {
          id: 'D2',
          name: 'Discípulo Segundo',
          role: 'Compañero Conspirador',
          avatar: '🧔‍♂️',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Ayudó a Saulo a entrar en el cesto y comprobó que nadie patrullase al pie de la muralla.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_exterior' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El protagonista había cambiado radicalmente sus creencias, ganándose el odio de los líderes locales.',
          narrative: 'Saulo proclamaba con fervor a Jesús en las sinagogas de Damasco.',
          relatedSuspects: ['S', 'G']
        },
        {
          id: 'c2',
          text: 'Las autoridades de la ciudad de Damasco cerraron todas las puertas para capturarlo y matarlo.',
          narrative: 'El Gobernador de Aretas desplegó a la guardia en cada acceso.',
          relatedSuspects: ['G', 'GD', 'S']
        },
        {
          id: 'c3',
          text: 'Un grupo de seguidores leales decidió actuar bajo el amparo de la oscuridad para salvarlo.',
          narrative: 'Los dos discípulos idearon una arriesgada ruta alternativa.',
          relatedSuspects: ['D1', 'D2', 'S']
        },
        {
          id: 'c4',
          text: 'Utilizaron una abertura o ventana situada en la propia muralla de la ciudad.',
          narrative: 'La ventana daba directamente al campo exterior fuera del alcance de la guardia.',
          relatedSuspects: ['D1', 'D2']
        },
        {
          id: 'c5',
          text: 'El fugitivo fue introducido en un gran canasto de mimbre y descolgado lentamente hacia el exterior.',
          narrative: 'Saulo tocó tierra firme y escapó en la noche hacia la libertad.',
          relatedSuspects: ['S', 'D1', 'D2', 'GD']
        }
      ],
      solution: {
        S: { row: 3, col: 0 },
        G: { row: 2, col: 1 },
        GD: { row: 0, col: 4 },
        D1: { row: 1, col: 2 },
        D2: { row: 4, col: 3 }
      }
    }
  },

  // RETO 004-HCH: El Precio del Espíritu
  {
    id: '004-HCH',
    nombre: 'El Precio del Espíritu',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Hechos 8, 14-24',
      textoBiblicoClave: 'Pedro le contestó: «¡Que tu dinero perezca contigo, si crees que el don de Dios se compra con dinero!»',
      contextoTeologico: 'Da origen al término "simonía". El magisterio condena tajantemente la mercantilización de lo sagrado. La gracia y los dones del Espíritu son puramente gratuitos y no pueden someterse a la lógica del mercado ni al poder.',
      solucionExplicacion: 'Simón el Mago intentó comprar con dinero el poder de conferir el Espíritu Santo a los apóstoles Pedro y Juan en Samaria. Pedro lo reprendió duramente, originando el término "simonía".',
      storyIntro: 'Un famoso ilusionista, asombrado por los poderes reales de dos visitantes, les ofrece una gran cantidad de dinero en secreto. En lugar de aceptar el soborno, los visitantes lo maldicen junto con su dinero, temiendo por su alma.',
      epilogue: '¡«Tu corazón no es recto delante de Dios»! Simón el Mago, aterrado por las severas palabras de Pedro, rogó: «Orad vosotros por mí al Señor para que nada de esto caiga sobre mí».',
      subtitle: 'Descubrimiento de acciones ocultas · Hechos 8 · 5x5',
      badge: 'EL PRECIO DEL ESPÍRITU · 5x5',
      victimId: 'CS',
      murdererId: 'SM',
      rooms: {
        asamblea_samaria: {
          id: 'asamblea_samaria',
          name: 'Lugar de Imposición de Manos',
          shortName: 'Imposición Manos',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Recinto público donde los convertidos recibían el don del Espíritu Santo bajo la oración de los apóstoles.'
        },
        estrado_ilusionista: {
          id: 'estrado_ilusionista',
          name: 'Plataforma de los Prodigios de Simón',
          shortName: 'Estrado Mago',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Lugar donde Simón solía asombrar al pueblo haciéndose pasar por la gran fuerza de Dios.'
        },
        camara_secreta: {
          id: 'camara_secreta',
          name: 'Rincón de la Oferta Oculta de Plata',
          shortName: 'Rincón Soborno',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Apartado reservado donde el mago deslizó la bolsa de caudales ante los apóstoles.'
        },
        bautisterio_felipe: {
          id: 'bautisterio_felipe',
          name: 'Aguas del Bautismo del Diácono',
          shortName: 'Aguas Felipe',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Pozas donde Felipe bautizó a los samaritanos tras anunciarles el evangelio del Reino.'
        },
        plaza_pueblo: {
          id: 'plaza_pueblo',
          name: 'Plaza Mayor de la Ciudad de Samaria',
          shortName: 'Plaza Samaria',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Ágora bulliciosa donde los ciudadanos celebraban con gran júbilo las liberaciones y sanaciones.'
        }
      },
      cellRooms: [
        ['asamblea_samaria', 'asamblea_samaria', 'asamblea_samaria', 'camara_secreta', 'camara_secreta'],
        ['asamblea_samaria', 'asamblea_samaria', 'bautisterio_felipe', 'camara_secreta', 'camara_secreta'],
        ['bautisterio_felipe', 'bautisterio_felipe', 'bautisterio_felipe', 'plaza_pueblo', 'plaza_pueblo'],
        ['estrado_ilusionista', 'estrado_ilusionista', 'plaza_pueblo', 'plaza_pueblo', 'plaza_pueblo'],
        ['estrado_ilusionista', 'estrado_ilusionista', 'plaza_pueblo', 'plaza_pueblo', 'plaza_pueblo']
      ],
      blockedObjects: {
        '0,4': {
          emoji: '💰',
          name: 'Bolsa de Plata Ofrecida',
          evidenceCode: 'EV-01',
          description: 'Monedas con las que Simón pretendió comprar el poder de transmitir el Espíritu Santo.'
        },
        '2,1': {
          emoji: '🕊️',
          name: 'Óleo y Cenizas de la Imposición',
          evidenceCode: 'EV-02',
          description: 'Signo visible de la bendición apostólica derramada sobre los nuevos creyentes.'
        },
        '4,0': {
          emoji: '📜',
          name: 'Libro de Hechicerías Antiguas',
          evidenceCode: 'EV-03',
          description: 'Manuscritos de artes arcanas con los que el mago engañaba a la multitud de Samaria.'
        }
      },
      suspects: [
        {
          id: 'P',
          name: 'Pedro',
          role: 'Apóstol Líder',
          avatar: '🧔',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Reprendió con severidad al hechicero: «En hiel de amargura y prisión de maldad te veo».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'asamblea_samaria' },
            { tipo: 'filaObjeto', objeto: '0,4' }
          ]
        },
        {
          id: 'JN',
          name: 'Juan',
          role: 'Apóstol Testigo',
          avatar: '🧑',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Imponía las manos junto a Pedro para que los samaritanos recibieran el Espíritu Santo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'asamblea_samaria' },
            { tipo: 'columnaObjeto', objeto: '4,0' }
          ]
        },
        {
          id: 'SM',
          name: 'Simón el Mago',
          role: 'Ilusionista Codicioso',
          avatar: '🧙‍♂️',
          color: 'from-purple-600 to-purple-800',
          isMurderer: true,
          clueText: 'Ofreció dinero a los apóstoles diciendo: «Dadme a mí también este poder».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'plaza_pueblo' },
            { tipo: 'columnaObjeto', objeto: '0,4' }
          ]
        },
        {
          id: 'F',
          name: 'Felipe',
          role: 'Diácono Evangelizador',
          avatar: '📜',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Había predicado primero en Samaria expulsando espíritus y sanando paralíticos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'bautisterio_felipe' }
          ]
        },
        {
          id: 'CS',
          name: 'Ciudadano de Samaria',
          role: 'Nuevo Creyente',
          avatar: '👥',
          color: 'from-stone-600 to-stone-800',
          isVictim: true,
          clueText: 'Había abandonado los hechizos de Simón para recibir con sencillez la fe y el bautismo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'plaza_pueblo' },
            { tipo: 'filaObjeto', objeto: '4,0' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El ilusionista se había bautizado al ver los milagros de un diácono, pero aún tenía una mentalidad comercial.',
          narrative: 'Simón seguía asombrado los prodigios que realizaba Felipe.',
          relatedSuspects: ['SM', 'F']
        },
        {
          id: 'c2',
          text: 'Dos líderes principales de la iglesia llegaron a la ciudad para imponer las manos a los nuevos creyentes.',
          narrative: 'Pedro y Juan llegaron desde Jerusalén para orar por la comunidad samaritana.',
          relatedSuspects: ['P', 'JN', 'CS']
        },
        {
          id: 'c3',
          text: 'El ilusionista observó que el Espíritu Santo se transmitía mediante el gesto de la imposición de manos.',
          narrative: 'Simón calculó de inmediato el inmenso valor financiero de poseer tal facultad.',
          relatedSuspects: ['SM', 'P', 'JN']
        },
        {
          id: 'c4',
          text: 'El ilusionista ofreció dinero a los líderes para comprar el poder de transmitir el Espíritu.',
          narrative: 'Simón extendió la bolsa de plata buscando cerrar un trato pecuniario.',
          relatedSuspects: ['SM', 'P', 'JN']
        },
        {
          id: 'c5',
          text: 'El líder principal le respondió que su dinero pereciera con él por intentar comprar el don de Dios.',
          narrative: 'Pedro desenmascaró el pecado de simonía ante toda la asamblea reunida.',
          relatedSuspects: ['P', 'SM', 'CS']
        }
      ],
      solution: {
        P: { row: 0, col: 1 },
        JN: { row: 1, col: 0 },
        SM: { row: 3, col: 4 },
        F: { row: 2, col: 2 },
        CS: { row: 4, col: 3 }
      }
    }
  },

  // RETO 008-HCH: La Mordedura del Fuego
  {
    id: '008-HCH',
    nombre: 'La Mordedura del Fuego',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Desenlaces de historias y parábolas',
      citasBiblicas: 'Hechos 28, 1-6',
      textoBiblicoClave: 'Pablo sacudió el reptil sobre el fuego y no sufrió ningún daño. (...) Al ver que no le pasaba nada anormal, cambiaron de opinión y empezaron a decir que era un dios.',
      contextoTeologico: 'El Vaticano señala que este pasaje desmiente la mentalidad pagana del "castigo divino" inminente (karma). Dios protege a su enviado para que complete su misión evangelizadora final en Roma, cumpliendo la promesa apostólica.',
      solucionExplicacion: 'Tras naufragar en Malta, Pablo recogía leña para el fuego y fue mordido por una víbora. Los isleños pensaron que era un culpable castigado, pero al ver que no moría y sacudía la serpiente al fuego, creyeron que era un dios.',
      storyIntro: 'Un grupo de náufragos sobrevive a una tormenta y es acogido en una isla. Mientras uno de los supervivientes ayuda a encender el fuego, una bestia letal se aferra a su brazo. Los nativos esperan verlo caer muerto, pero su reacción desafía toda lógica.',
      epilogue: '¡Inmune ante el veneno de la víbora! Pablo continuó sanando a los enfermos de Malta antes de zarpar definitivamente rumbo a Roma bajo la providencia divina.',
      subtitle: 'Desenlaces de historias y parábolas · Hechos 28 · 5x5',
      badge: 'LA MORDEDURA DEL FUEGO · 5x5',
      victimId: 'PA',
      murdererId: 'HM',
      rooms: {
        playa_naufragio: {
          id: 'playa_naufragio',
          name: 'Playa Rocosa del Naufragio en Malta',
          shortName: 'Playa Malta',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Orilla donde las 276 personas del barco llegaron con vida tras la tempestad.'
        },
        gran_hoguera: {
          id: 'gran_hoguera',
          name: 'Gran Fogata Hospitalaria de los Nativos',
          shortName: 'Gran Fogata',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Fuego encendido por los lugareños para aliviar la lluvia torrencial y el frío helado.'
        },
        matorral_sarmientos: {
          id: 'matorral_sarmientos',
          name: 'Matorral de Ramas Secas y Sarmientos',
          shortName: 'Matorral Leña',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Espinar de donde el apóstol recogió el haz de leña en el que dormía la víbora.'
        },
        residencia_publio: {
          id: 'residencia_publio',
          name: 'Propiedades del Principal de la Isla (Publio)',
          shortName: 'Finca Publio',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Mansión donde los náufragos recibieron generoso hospedaje durante tres días.'
        },
        campamento_escolta: {
          id: 'campamento_escolta',
          name: 'Puesto de Custodia del Centurión Julio',
          shortName: 'Puesto Centurión',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Zona de control donde los soldados cuidaban de que ningún recluso escapara.'
        }
      },
      cellRooms: [
        ['playa_naufragio', 'playa_naufragio', 'playa_naufragio', 'campamento_escolta', 'campamento_escolta'],
        ['playa_naufragio', 'gran_hoguera', 'gran_hoguera', 'campamento_escolta', 'residencia_publio'],
        ['matorral_sarmientos', 'gran_hoguera', 'gran_hoguera', 'residencia_publio', 'residencia_publio'],
        ['matorral_sarmientos', 'matorral_sarmientos', 'gran_hoguera', 'residencia_publio', 'residencia_publio'],
        ['matorral_sarmientos', 'matorral_sarmientos', 'residencia_publio', 'residencia_publio', 'residencia_publio']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '🪵',
          name: 'Haz de Leña Seca Recogido',
          evidenceCode: 'EV-01',
          description: 'Sarmientos amontonados por Pablo para alimentar las llamas del fuego.'
        },
        '2,2': {
          emoji: '🐍',
          name: 'Víbora Venenosa Calcinada',
          evidenceCode: 'EV-02',
          description: 'Reptil letal sacudido con serenidad hacia las brasas ardientes.'
        },
        '4,4': {
          emoji: '⚓',
          name: 'Anclas Desprendidas del Navío',
          evidenceCode: 'EV-03',
          description: 'Hierros cortados y dejados en el mar antes de encallar en el arenal.'
        }
      },
      suspects: [
        {
          id: 'P',
          name: 'Pablo',
          role: 'Apóstol Inmune',
          avatar: '🧔',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Sacudió la víbora al fuego con total tranquilidad y no sufrió hinchazón ni daño alguno.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'gran_hoguera' }
          ]
        },
        {
          id: 'J',
          name: 'Julio el Centurión',
          role: 'Oficial de la Cohorte Augusta',
          avatar: '🛡️',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Trató humanamente a Pablo y evitó que los soldados diesen muerte a los presos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'campamento_escolta' }
          ]
        },
        {
          id: 'PU',
          name: 'Publio',
          role: 'Gobernador de Malta',
          avatar: '🏛️',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Acogió con honores a los náufragos cuyo líder sanó a su padre enfermo de fiebres.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'residencia_publio' },
            { tipo: 'columnaObjeto', objeto: '4,4' }
          ]
        },
        {
          id: 'HM',
          name: 'Habitante de Malta',
          role: 'Nativo Isleño',
          avatar: '🏝️',
          color: 'from-emerald-600 to-emerald-800',
          isMurderer: true,
          clueText: 'Pensó primero que Pablo era un homicida fugitivo y luego cambió de opinión diciendo que era un dios.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'matorral_sarmientos' },
            { tipo: 'columnaObjeto', objeto: '0,1' }
          ]
        },
        {
          id: 'PA',
          name: 'Preso Anónimo',
          role: 'Náufrago Superviviente',
          avatar: '🥶',
          color: 'from-stone-600 to-stone-800',
          isVictim: true,
          clueText: 'Temblaba junto a la lumbre agradecido por haber alcanzado la costa sobre tablones.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'matorral_sarmientos' },
            { tipo: 'filaObjeto', objeto: '4,4' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'El barco que llevaba a los prisioneros hacia Roma naufragó, pero todos llegaron a salvo a una isla desconocida.',
          narrative: 'Julio y los soldados comprobaron que todos los náufragos estaban ilesos en la playa.',
          relatedSuspects: ['J', 'PA', 'P']
        },
        {
          id: 'c2',
          text: 'Los nativos de la isla encendieron una gran hoguera para abrigar a los náufragos de la lluvia y el frío.',
          narrative: 'El Habitante de Malta y sus vecinos demostraron una hospitalidad extraordinaria.',
          relatedSuspects: ['HM', 'PA']
        },
        {
          id: 'c3',
          text: 'Un prisionero estaba recogiendo un manojo de leña seca cuando una víbora, huyendo del calor, mordió su mano.',
          narrative: 'Pablo sintió los colmillos del reptil aferrados a sus dedos sobre las llamas.',
          relatedSuspects: ['P', 'HM']
        },
        {
          id: 'c4',
          text: 'Los nativos, al ver a la víbora colgando de su brazo, concluyeron que el hombre era un culpable castigado por los dioses.',
          narrative: 'Los lugareños aguardaban el desenlace fatal atribuyéndolo a la justicia de Némesis.',
          relatedSuspects: ['HM', 'P']
        },
        {
          id: 'c5',
          text: 'El prisionero simplemente sacudió la bestia hacia el fuego sin sufrir ningún daño.',
          narrative: 'Publio y el centurión contemplaron admirados el prodigio que inauguró la acogida en la isla.',
          relatedSuspects: ['P', 'PU', 'J', 'HM']
        }
      ],
      solution: {
        P: { row: 1, col: 2 },
        J: { row: 0, col: 3 },
        PU: { row: 2, col: 4 },
        HM: { row: 3, col: 1 },
        PA: { row: 4, col: 0 }
      }
    }
  }
];
