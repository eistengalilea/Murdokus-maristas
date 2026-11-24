import { RetoTraduccion } from './types';

export const RETOS_FACILES_GENESIS_GL: Record<string, RetoTraduccion> = {
  // RETO 002: Los Dioses Robados -> Os Deuses Roubados
  '002': {
    nombre: 'Os Deuses Roubados',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Xénese 31, 19-35',
    textoBiblicoClave: 'Raquel collera os ídolos domésticos, metéraos na albarda do camelo e sentárase enriba deles. Labán rexistrou toda a tenda, pero non atopou nada.',
    contextoTeologico: 'A teoloxía bíblica subliña a inutilidade dos deuses feitos por mans humanas (Terafim), que nin sequera poden defenderse de ser roubados nin librarse de quedar debaixo dun asento impuro segundo a lei.',
    solucionExplicacion: 'Raquel roubou os terafim do seu pai Labán e agochounos na albarda do seu camelo. Cando Labán rexistrou o campamento, ela finxiu atoparse no seu período feminino para non levantarse, evitando así ser descuberta.',
    storyIntro: 'Un patriarca fuxitivo é alcanzado polo seu sogro tras unha marcha forzada polo deserto. O ancián clama que alguén furtou os seus deuses tutelares, mentres unha muller garda silencio sentada sobre a súa montura.',
    epilogue: '¡O engano tivo éxito no corazón de Galaad! Labán rexistrou cada recuncho da tenda sen sospeitar que os seus venerados ídolos estaban baixo a albarda de Raquel. Xacob e Labán erixiron un esteo de pedras como pacto de paz.',
    subtitle: 'Descubrimento de accións ocultas · Xénese 31 · 5x5',
    badge: 'OS DEUSES ROUBADOS · 5x5',
    rooms: {
      tienda_raquel: {
        name: 'Tenda de Raquel (Albarda do Camelo)',
        shortName: 'T. Raquel',
        description: 'Lugar onde se gardan os aparellos de viaxe e a albarda do camelo cos terafins.'
      },
      tienda_jacob: {
        name: 'Tenda de Xacob',
        shortName: 'T. Xacob',
        description: 'Tenda do patriarca que xurou descoñecer a existencia dos ídolos roubados.'
      },
      tienda_lia: {
        name: 'Tenda de Lía',
        shortName: 'T. Lía',
        description: 'Estancia rexistrada primeiro por Labán sen atopar indicio ningún.'
      },
      campamento_laban: {
        name: 'Campamento de Labán',
        shortName: 'Camp. Labán',
        description: 'Posición dos perseguidores tras sete días de marcha forzada.'
      },
      caravana: {
        name: 'Caravana de Rabaños',
        shortName: 'Caravana',
        description: 'Área exterior cos camelos, asnos e servos en marcha cara a Galaad.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Albarda de Camelo',
        description: 'Albarda de viaxe onde repousan os terafins agochados.'
      },
      '2,1': {
        name: 'Terafins Domésticos',
        description: 'Estatua familiar de culto e dereito de primoxenitura reclamada por Labán.'
      },
      '4,0': {
        name: 'Fardo de Campamento',
        description: 'Equipaxe pesada rexistrada pola partida de Labán.'
      }
    },
    suspects: {
      R: {
        name: 'Raquel',
        role: 'Filla de Labán / Agochou os terafins',
        clueText: 'Sentada ao carón da albarda do camelo, na súa tenda privada.'
      },
      L: {
        name: 'Labán',
        role: 'Sogro aldraxado / Busca os seus deuses',
        clueText: 'Rexistrou furioso a tenda de Raquel a soas con ela.'
      },
      J: {
        name: 'Xacob',
        role: 'Xefe da caravana / Ignora o roubo',
        clueText: 'Declarou a súa inocencia na Tenda de Xacob.'
      },
      A: {
        name: 'Lía',
        role: 'Primeira esposa de Xacob',
        clueText: 'Permanece na súa propia tenda, sen sospeitar a artimaña da súa irmá.'
      },
      S: {
        name: 'Un servo',
        role: 'Vixía do gando',
        clueText: 'Vixía o convoi exterior xunto ao rabaño.'
      }
    },
    clues: {
      c1: {
        text: 'O xefe da caravana (Xacob) fuxiu en segredo despois de traballar vinte anos.',
        narrative: 'Xacob sitúase na súa propia tenda.'
      },
      c2: {
        text: 'O sogro perseguiu a caravana alegando o roubo dos seus deuses familiares.',
        narrative: 'Labán está a rexistrar a Tenda de Raquel.'
      },
      c3: {
        text: 'A culpable era a filla favorita, que agochou os ídolos na albarda do seu camelo.',
        narrative: 'Raquel atópase na súa tenda privada, ao carón da albarda.'
      },
      c4: {
        text: 'Lía permanece na súa propia tenda sen sospeitar a artimaña da súa irmá.',
        narrative: 'Lía ocupa a súa propia tenda.'
      },
      c5: {
        text: 'O servo do gando custodia a caravana no convoi exterior.',
        narrative: 'O servo está a custodiar a caravana.'
      }
    }
  },

  // RETO 003: El Sacrificio Interrumpido -> O Sacrificio Interrompido
  '003': {
    nombre: 'O Sacrificio Interrompido',
    categoria: 'Desenlaces de historias e parábolas',
    citasBiblicas: 'Xénese 22, 1-19',
    textoBiblicoClave: 'O anxo do Señor chamouno desde o ceo: «Abraham, Abraham! (...) Non poñas a man sobre o rapaz nin lle fagas dano ningún».',
    contextoTeologico: 'Máis ca unha proba de obediencia cega, a exéxese contemporánea e o maxisterio ven aquí a abolición radical e definitiva dos sacrificios humanos, moi comúns nas culturas circundantes de Canaán.',
    solucionExplicacion: 'Abraham levou a Isaac ao monte Moria para ofrecelo en holocausto en obediencia a Deus. Xusto cando ía asestar o golpe, a voz do anxo detívoo e proveuse un carneiro enredado nunhas silveiras.',
    storyIntro: 'Tres días de camiño levan a un ancián e ao seu único fillo cara a un cumpre solitario. O lume e a leña están listos, pero a vítima elixida polo mandato divino permanece na sombra ata o último instante.',
    epilogue: '¡A fe foi consumada e a vida preservada! O anxo do Señor detivo a folla no aire. Abraham chamou a aquel lugar «Yahvé proverá», ofrecendo o carneiro e descendendo con Isaac cara a Berseba.',
    subtitle: 'Desenlaces de historias e parábolas · Xénese 22 · 5x5',
    badge: 'O SACRIFICIO INTERROMPIDO · 5x5',
    rooms: {
      altar_moria: {
        name: 'Cume do Monte Moria (Altar)',
        shortName: 'Altar Moria',
        description: 'Altar de pedras onde Isaac foi atado e a intervención celestial detivo o coitelo.'
      },
      maleza_carnero: {
        name: 'Matogueira do Carneiro',
        shortName: 'Matogueira',
        description: 'Espesura onde un carneiro quedou trabado polos cornos para a substitución.'
      },
      ladera_monte: {
        name: 'Ladeira do Monte',
        shortName: 'Ladeira',
        description: 'Camiño en subida polo que subiron o pai e o rapaz cargando a leña.'
      },
      campamento_base: {
        name: 'Campamento Base',
        shortName: 'Camp. Base',
        description: 'Lugar onde quedaron os criados e o asno agardando o regreso.'
      },
      sendero_asno: {
        name: 'Sendeiro do Deserto',
        shortName: 'Sendeiro',
        description: 'Ruta afastada onde mora o medio irmán Ismael no deserto.'
      }
    },
    blockedObjects: {
      '0,2': {
        name: 'Carneiro na Matogueira',
        description: 'Carneiro enredado polos cornos nunha silveira como vítima expiatoria.'
      },
      '1,1': {
        name: 'Leña do Holocausto',
        description: 'Madeiros atados que o rapaz cargou ata o altar.'
      },
      '3,4': {
        name: 'Altar de Pedras',
        description: 'Pedras amoreadas sobre as que se dispuxo o sacrificio.'
      }
    },
    suspects: {
      A: {
        name: 'Abrahán',
        role: 'O Patriarca fiel / Empuña o coitelo sobre o altar',
        clueText: 'No cume do Moria xunto ao madeiro.'
      },
      I: {
        name: 'Isaac',
        role: 'Fillo da promesa / Vítima designada',
        clueText: 'Prostrado no Altar do Moria agardando o desenlace.'
      },
      G: {
        name: 'Un anxo',
        role: 'Mensaxeiro celestial / Detén a man dende a ladeira',
        clueText: 'Aparece na Ladeira do Monte detendo a acción.'
      },
      S: {
        name: 'Sara',
        role: 'Nai na distancia',
        clueText: 'Permanece no Campamento Base, ao sur.'
      },
      M: {
        name: 'Ismael',
        role: 'Medio irmán no deserto',
        clueText: 'No sendeiro do deserto afastado.'
      }
    },
    clues: {
      c1: {
        text: 'O patriarca recibiu unha orde incomprensible pero obedeceu ao amencer.',
        narrative: 'Abrahán está no cume do Altar xunto ao madeiro.'
      },
      c2: {
        text: 'A vítima designada cargou coa leña sen saber que el mesmo era a ofrenda.',
        narrative: 'Isaac está prostrado no Altar do Moria agardando o desenlace.'
      },
      c3: {
        text: 'Xusto cando ergueu o coitelo, o mensaxeiro divino interveu detendo a acción.',
        narrative: 'O anxo descende na Ladeira do Monte detendo a acción.'
      },
      c4: {
        text: 'A nai do mozo non estivo presente no cume do monte Moria.',
        narrative: 'Sara agarda no Campamento Base, ao sur.'
      },
      c5: {
        text: 'O medio irmán Ismael habita no extremo do sendeiro do deserto.',
        narrative: 'Ismael agarda no sendeiro do deserto afastado.'
      }
    }
  },

  // RETO 005: La Túnica Ensangrentada -> A Túnica Ensanguentada
  '005': {
    nombre: 'A Túnica Ensanguentada',
    categoria: 'Asesinatos ou crimes',
    citasBiblicas: 'Xénese 37, 12-36',
    textoBiblicoClave: 'Degolaron un cabrito e tinguiron a túnica con sangue. Enviáronlla a seu pai dicindo: «Atopamos isto; mira a ver se é a túnica do teu fillo».',
    contextoTeologico: 'Amosa o dano destructivo da envexa e o favoritismo familiar. O patriarca que enganara a seu pai coas peles dun cabrito é agora enganado polos seus propios fillos co sangue doutro cabrito.',
    solucionExplicacion: 'Os fillos de Xacob conspiraron contra Xosé pola envexa que lle tiñan. Tras botalo a unha cisterna, vendérono aos madianitas. Para ocultar o crime, mancharon a súa túnica de cores con sangue dun cabrito e fixéronlle crer ao seu pai que o devorara unha fera.',
    storyIntro: 'Un mozo soñador chega aos pastos buscando os seus irmáns. Horas máis tarde, unha peza de roupa multicolor empapada en sangue é levada a un pai devorado polas bágoas, mentres o mozo viaxa encadeado cara ao Nilo.',
    epilogue: '¡O engano consumouse na tenda de Hebrón! Xacob rachou os seus vestidos e vestiuse de loito, rexeitando calquera consolo. Mentres tanto, en Exipto, Xosé era vendido a Putifar, capitán da garda do Faraón.',
    subtitle: 'Asesinatos ou crimes · Xénese 37 · 5x5',
    badge: 'A TÚNICA ENSANGUENTADA · 5x5',
    rooms: {
      cisterna_dotan: {
        name: 'Cisterna Seca de Dotán',
        shortName: 'Cisterna',
        description: 'Burato de rocha onde botaron a Xosé antes de acordar a súa venda.'
      },
      pastizal_siquen: {
        name: 'Pastos de Dotán',
        shortName: 'Pastos',
        description: 'Campía onde pacían os rabaños e Rubén se apartou un tempo.'
      },
      campamento_hermanos: {
        name: 'Campamento dos Irmáns',
        shortName: 'Campamento',
        description: 'Lugar de reunión onde se conspirou contra o soñador e se degolou o cabrito.'
      },
      ruta_caravana: {
        name: 'Ruta Comercial Ismaelita',
        shortName: 'Ruta Caravana',
        description: 'Camiño con camelos que levan resina, bálsamo e mirra cara a Exipto.'
      },
      tienda_jacob: {
        name: 'Tenda de Xacob en Hebrón',
        shortName: 'Tenda Hebrón',
        description: 'Estancia afastada onde o vello pai chora vestido de saco pola suposta fera.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Cisterna sen Auga',
        description: 'Pozo cavado na rocha calcaria onde non había auga para beber.'
      },
      '2,0': {
        name: 'Túnica de Mangas Longas',
        description: 'Vestidura de honra empapada co sangue dun cabrito.'
      },
      '4,4': {
        name: '20 Siclos de Prata',
        description: 'Prezo cobrado aos mercadores por entregar ao rapaz.'
      }
    },
    suspects: {
      J: {
        name: 'Xosé',
        role: 'O soñador da túnica / Vítima vendida',
        clueText: 'No fondo da Cisterna de Dotán.'
      },
      U: {
        name: 'Xudá',
        role: 'Irmán que propuxo vendelo aos mercadores',
        clueText: 'Na Cisterna de Dotán negociando a soas con Xosé.'
      },
      R: {
        name: 'Rubén',
        role: 'Irmán maior / Quería rescatalo',
        clueText: 'Apartado nos Pastos de Dotán.'
      },
      K: {
        name: 'Xacob',
        role: 'Pai que mandou o fillo e recibe a túnica',
        clueText: 'Na súa tenda de Hebrón.'
      },
      I: {
        name: 'Un ismaelita',
        role: 'Mercador da caravana a Exipto',
        clueText: 'Agardando na Ruta Comercial Ismaelita.'
      }
    },
    clues: {
      c1: {
        text: 'O irmán maior (Rubén) suxeriu botalo nunha cisterna baleira para salvalo máis tarde.',
        narrative: 'Rubén apartouse nos Pastos de Dotán.'
      },
      c2: {
        text: 'Mentres o maior non estaba, outro irmán suxeriu que era mellor sacar proveito económico.',
        narrative: 'Xudá acudiu á cisterna negociando a venda.'
      },
      c3: {
        text: 'O mozo soñador quedou atrapado no fondo da cisterna.',
        narrative: 'Xosé está no fondo da Cisterna de Dotán.'
      },
      c4: {
        text: 'O pai aflixido chora na súa tenda ao recibir a túnica esgazada.',
        narrative: 'Xacob sitúase aflixido na súa tenda de Hebrón.'
      },
      c5: {
        text: 'O mercador ismaelita completou a compra por vinte moedas de prata na ruta.',
        narrative: 'O ismaelita agarda na Ruta Comercial.'
      }
    }
  },

  // RETO 007: La Copa de Adivinación -> A Copa de Adiviñación
  '007': {
    nombre: 'A Copa de Adiviñación',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Xénese 44, 1-17',
    textoBiblicoClave: 'O mordomo rexistrou, comezando polo máis vello e rematando polo máis novo; e a copa apareceu no saco de Benxamín.',
    contextoTeologico: 'Máis ca unha vinganza, é unha proba pedagóxica e moral preparada por Xosé para ver se os seus irmáns cambiaran e se estaban dispostos a protexer ao fillo máis novo ou a abandonalo como fixeran con el.',
    solucionExplicacion: 'Xosé ordenou ao seu mordomo meter a súa copa de prata no saco de gran de Benxamín. Despois mandou perseguir os seus irmáns acusándoos de roubo para comprobar a súa fidelidade fraterna.',
    storyIntro: 'Un grupo de irmáns abandona a capital do imperio cos seus sacos cheos de gran e o corazón aliviado. Pero os ginetes do vicerrei alcánzanlos pronto cunha acusación terrible: un cáliz imperial de prata desapareceu.',
    epilogue: '¡O amor fraterno superou a proba suprema! Xudá adiantouse e ofreceuse como escravo perpetuo no lugar de Benxamín para evitar que o seu ancián pai morrese de dor. Ante isto, Xosé non puido conter máis o chanto.',
    subtitle: 'Descubrimento de accións ocultas · Xénese 44 · 5x5',
    badge: 'A COPA DE ADIVIÑACIÓN · 5x5',
    rooms: {
      palacio_jose: {
        name: 'Pazo do Gobernador de Exipto',
        shortName: 'Pazo Xosé',
        description: 'Sede de mando onde Xosé ordenou en segredo colocar a copa de prata.'
      },
      camino_retorno: {
        name: 'Camiño de Regreso a Canaán',
        shortName: 'Camiño',
        description: 'Sendeiro onde os irmáns foron alcanzados e se abriron os sacos.'
      },
      almacen_grano: {
        name: 'Almacén de Gran do Nilo',
        shortName: 'Almacén',
        description: 'Silos onde se encheron os sacos de trigo e se devolveu o diñeiro.'
      },
      puesto_guardia: {
        name: 'Posto de Garda Exipcio',
        shortName: 'P. Garda',
        description: 'Destacamento de sentinelas que custodiaba as portas da cidade.'
      },
      aposentos_mayordomo: {
        name: 'Aposentos do Maiordomo',
        shortName: 'Maiordomo',
        description: 'Lugar onde o maiordomo recibiu as instrucións da trampa.'
      }
    },
    blockedObjects: {
      '1,1': {
        name: 'Copa de Prata',
        description: 'Vaso sagrado que usaba o vicerrei para beber e adiviñar.'
      },
      '2,4': {
        name: 'Saco de Trigo',
        description: 'Saco de arpilleira onde se agochou a copa, na boca do saco.'
      },
      '0,3': {
        name: 'Carro de Víveres',
        description: 'Carga de gran preparada no almacén para a viaxe de volta.'
      }
    },
    suspects: {
      J: {
        name: 'Xosé',
        role: 'Vicerrei de Exipto / Artífice da proba',
        clueText: 'No Pazo do Gobernador.'
      },
      B: {
        name: 'Benxamín',
        role: 'Irmán menor / No seu saco apareceu a copa',
        clueText: 'No Camiño de Regreso, abraiado ante o rexistro.'
      },
      U: {
        name: 'Xudá',
        role: 'Irmán que se ofrece como escravo no seu lugar',
        clueText: 'Xunto a Benxamín no Camiño de Regreso, intercedendo.'
      },
      R: {
        name: 'Rubén',
        role: 'Irmán que lamenta a angustia familiar',
        clueText: 'Detido no Posto de Garda.'
      },
      M: {
        name: 'O maiordomo',
        role: 'Servo executor que colocou a copa',
        clueText: 'Nos Aposentos do Maiordomo.'
      }
    },
    clues: {
      c1: {
        text: 'O gobernador de Exipto preparou unha trampa final para probar a lealdade fraterna.',
        narrative: 'Xosé permanece no Pazo do Gobernador.'
      },
      c2: {
        text: 'O servo de confianza recibiu a orde de agochar o obxecto de prata no saco do menor.',
        narrative: 'O maiordomo está nos seus aposentos privados.'
      },
      c3: {
        text: 'O obxecto apareceu no saco do menor cando foron alcanzados no camiño.',
        narrative: 'Benxamín está no Camiño de Regreso.'
      },
      c4: {
        text: 'Xudá ofreceu a súa propia liberdade como escravo para non volver sen o rapaz.',
        narrative: 'Xudá acompaña a Benxamín no Camiño de Regreso intercedendo por el.'
      },
      c5: {
        text: 'Rubén foi retido xunto aos gardas exipcios á saída da cidade.',
        narrative: 'Rubén foi detido no Posto de Garda.'
      }
    }
  },

  // RETO 009: El Lecho Profanado -> O Leito Profanado
  '009': {
    nombre: 'O Leito Profanado',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Xénese 35, 21-22',
    textoBiblicoClave: 'Mentres Israel habitaba naquela terra, Rubén foi e deitouse con Bilhá, a concubina de seu pai; e Israel chegou a sabelo.',
    contextoTeologico: 'No antigo Oriente Próximo, unirse coa concubina do patriarca era un acto político para reclamar o liderado do clan. Pola súa acción impulsiva e deshonesta, Rubén perdeu os dereitos da primoxenitura.',
    solucionExplicacion: 'Rubén, primoxénito de Xacob, cometeu incesto con Bilhá, concubina de seu pai, nun intento ilícito de consolidar a súa autoridade no clan tras a morte de Raquel. Como consecuencia, perdeu a primoxenitura.',
    storyIntro: 'O campamento de Israel pasa a noite xunto a unha vella torre de vixilancia. No silencio da noite, o primoxénito traspasa os límites sagrados do respecto familiar; aínda que ninguén levanta a voz, a acción chega aos oídos do patriarca.',
    epilogue: '¡O patriarca soubo a aldraxe en silencio! No seu leito de morte anos despois, Xacob sentenciou: «Rubén, o meu primoxénito, impetuoso como a auga, non terás a preeminencia, porque subiches ao leito de teu pai».',
    subtitle: 'Descubrimento de accións ocultas · Xénese 35 · 5x5',
    badge: 'O LEITO PROFANADO · 5x5',
    rooms: {
      tienda_bilha: {
        name: 'Tenda de Bilhá (Concubina)',
        shortName: 'T. Bilhá',
        description: 'Tenda onde se cometeu a aldraxe prohibida tras a morte de Raquel.'
      },
      tienda_jacob: {
        name: 'Tenda de Xacob (Israel)',
        shortName: 'T. Xacob',
        description: 'Estancia do patriarca que soubo en silencio o desafuero do seu primoxénito.'
      },
      torre_eder: {
        name: 'Torre de Éder (Migdal Éder)',
        shortName: 'Torre Éder',
        description: 'Atalaia de pastores nos campos de Belén onde acampou Israel.'
      },
      tienda_lia: {
        name: 'Tenda de Lía',
        shortName: 'T. Lía',
        description: 'Morada da nai de Rubén no campamento patriarcal.'
      },
      sepulcro_raquel: {
        name: 'Sepulcro de Raquel en Efrata',
        shortName: 'Sepulcro',
        description: 'Monumento de loito erixido por Xacob no camiño de Belén.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Madeiro do Leito',
        description: 'Armazón de campaña que representaba a dignidade conxugal do patriarca.'
      },
      '2,1': {
        name: 'Estela Conmemorativa',
        description: 'Piar erguido por Xacob tras enterrar a Raquel xunto ao camiño.'
      },
      '3,4': {
        name: 'Atalaia de Migdal Éder',
        description: 'Torre de vixía do rabaño que domina os vales de pastoreo.'
      }
    },
    suspects: {
      J: {
        name: 'Xacob',
        role: 'Patriarca agraviado / Gardou silencio',
        clueText: 'Na súa tenda patriarcal.'
      },
      B: {
        name: 'Bilhá',
        role: 'Concubina de Xacob / Vítima do abuso',
        clueText: 'Na Tenda de Bilhá.'
      },
      R: {
        name: 'Rubén',
        role: 'Primoxénito transgresor / Profanou o leito',
        clueText: 'Entrou na Tenda de Bilhá a soas con ela.'
      },
      L: {
        name: 'Lía',
        role: 'Nai de Rubén',
        clueText: 'Permanece na súa propia tenda.'
      },
      Q: {
        name: 'Memoria de Raquel',
        role: 'Esposa defunta no sepulcro',
        clueText: 'No Sepulcro de Raquel en Efrata.'
      }
    },
    clues: {
      c1: {
        text: 'Ocorreu pouco despois da morte da esposa favorita, preto de Migdal Éder.',
        narrative: 'A memoria de Raquel atópase no Sepulcro de Efrata.'
      },
      c2: {
        text: 'O primoxénito cometeu un acto prohibido desafiando a autoridade patriarcal.',
        narrative: 'Rubén coouse na Tenda de Bilhá profanando a intimidade.'
      },
      c3: {
        text: 'A muller implicada era a concubina do patriarca.',
        narrative: 'Bilhá está consternada na súa tenda.'
      },
      c4: {
        text: 'O patriarca soubo do suceso e gardou un aparente silencio.',
        narrative: 'Xacob está gardando silencio na súa tenda patriarcal.'
      },
      c5: {
        text: 'Lía atópase na súa estancia materna sen intervir na transgresión.',
        narrative: 'Lía permanece na súa propia tenda.'
      }
    }
  }
};
