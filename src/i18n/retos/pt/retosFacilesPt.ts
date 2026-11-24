import { RetoTraduccion } from '../types';

/**
 * Traducciones al portugués de Portugal (pt-PT) de los retos de dificultad «easy».
 * Las claves de rooms, suspects, clues y blockedObjects deben coincidir con las del reto en castellano
 * (lo comprueba `npm run validar`).
 */
export const RETOS_FACILES_PT: Record<string, RetoTraduccion> = {
  // DESAFIO 002: Los Dioses Robados -> Os Deuses Roubados
  '002': {
    nombre: 'Os Deuses Roubados',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Génesis 31, 17-35',
    textoBiblicoClave: 'Raquel tinha pegado nos ídolos, tinha-os metido na sela do camelo e tinha-se sentado em cima. Labão revistou toda a tenda sem encontrar nada.',
    contextoTeologico: 'No antigo Oriente, possuir os terafins conferia direitos de herança (contexto histórico). Teologicamente, o relato tem um tom irónico: os "deuses" de Labão são tão inúteis que podem ser roubados e escondidos debaixo de uma mulher impura, sublinhando a superioridade do Deus de Israel.',
    solucionExplicacion: 'Raquel roubou os ídolos (terafins) do seu pai Labão. Quando este revistou o acampamento, Raquel escondeu-os na sela do camelo, sentou-se em cima e mentiu dizendo que estava com a menstruação para não se levantar.',
    storyIntro: 'Uma família foge do sogro. Este persegue-os furioso, afirmando que lhe roubaram os ídolos domésticos. O chefe da caravana, confiante, jura que quem os tiver morrerá, sem saber que a culpada está na sua própria tenda.',
    epilogue: 'Caso resolvido! Raquel escondeu com astúcia os terafins da família na sela do camelo. Labão revistou minuciosamente cada canto sem suspeitar do segredo escondido debaixo da sua própria filha.',
    subtitle: 'Descoberta de ações ocultas · Génesis 31 · 5x5',
    badge: 'OS DEUSES ROUBADOS · 5x5',
    rooms: {
      tienda_raquel: {
        name: 'Tenda de Raquel (Sela do Camelo)',
        shortName: 'T. Raquel',
        description: 'Lugar onde se guardam os arreios de viagem e a sela do camelo com os terafins.'
      },
      tienda_jacob: {
        name: 'Tenda de Jacob',
        shortName: 'T. Jacob',
        description: 'Tenda do patriarca que jurou desconhecer a existência dos ídolos roubados.'
      },
      tienda_lia: {
        name: 'Tenda de Lia',
        shortName: 'T. Lia',
        description: 'Tenda revistada primeiro por Labão sem encontrar qualquer indício.'
      },
      campamento_laban: {
        name: 'Acampamento de Labão',
        shortName: 'Acamp. Labão',
        description: 'Posição dos perseguidores após sete dias de marcha forçada.'
      },
      caravana: {
        name: 'Caravana de Rebanhos',
        shortName: 'Caravana',
        description: 'Área exterior com os camelos, jumentos e servos a caminho de Galaad.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Sela de Camelo',
        description: 'Albarda de viagem onde repousam os terafins escondidos.'
      },
      '2,1': {
        name: 'Terafins Domésticos',
        description: 'Estatueta de culto familiar e direito de primogenitura reclamado por Labão.'
      },
      '4,0': {
        name: 'Fardo do Acampamento',
        description: 'Bagagem pesada revistada pelo grupo de Labão.'
      }
    },
    suspects: {
      R: {
        name: 'Raquel',
        role: 'Filha de Labão / Escondeu os terafins',
        clueText: 'Sentada junto à sela do camelo, na sua tenda privada.'
      },
      L: {
        name: 'Labão',
        role: 'Sogro ultrajado / Procura os seus deuses',
        clueText: 'Revistou furioso a tenda de Raquel a sós com ela.'
      },
      J: {
        name: 'Jacob',
        role: 'Chefe da caravana / Ignora o roubo',
        clueText: 'Declarou a sua inocência na Tenda de Jacob.'
      },
      A: {
        name: 'Lia',
        role: 'Primeira esposa de Jacob',
        clueText: 'Permanece na sua própria tenda, sem suspeitar do estratagema da irmã.'
      },
      S: {
        name: 'Um servo',
        role: 'Vigia do gado',
        clueText: 'Vigia o comboio exterior junto ao rebanho.'
      }
    },
    clues: {
      c1: {
        text: 'O chefe da caravana (Jacob) fugiu em segredo depois de trabalhar vinte anos.',
        narrative: 'Jacob encontra-se na sua própria tenda.'
      },
      c2: {
        text: 'O sogro perseguiu a caravana alegando o roubo dos seus deuses familiares.',
        narrative: 'Labão está a revistar a Tenda de Raquel.'
      },
      c3: {
        text: 'A culpada era a filha preferida, que escondeu os ídolos na sela do seu camelo.',
        narrative: 'Raquel encontra-se na sua tenda privada, junto à sela.'
      },
      c4: {
        text: 'Lia permanece na sua própria tenda sem suspeitar do estratagema da irmã.',
        narrative: 'Lia ocupa a sua própria tenda.'
      },
      c5: {
        text: 'O servo do gado guarda a caravana no comboio exterior.',
        narrative: 'O servo está a guardar a caravana.'
      }
    }
  },

  // DESAFIO 003: El Sacrificio Interrumpido -> O Sacrifício Interrompido
  '003': {
    nombre: 'O Sacrifício Interrompido',
    categoria: 'Desfechos de histórias e parábolas',
    citasBiblicas: 'Génesis 22, 1-14',
    textoBiblicoClave: 'O anjo do Senhor gritou-lhe do céu: «Abraão, Abraão! (...) Não estendas a mão contra o menino nem lhe faças mal algum. Agora sei que temes a Deus.»',
    contextoTeologico: 'Lido a partir do Magistério e da exegese, este texto polemiza contra os sacrifícios humanos de crianças, comuns nos povos cananeus vizinhos. Deus revela-se como o Deus da vida que rejeita esses atos. Além disso, simboliza a entrega total da fé sem reservas.',
    solucionExplicacion: 'Deus pôs Abraão à prova pedindo-lhe que sacrificasse Isaac. Abraão obedeceu, mas um anjo deteve-o no último segundo. Um carneiro preso no mato serviu de oferta substituta.',
    storyIntro: 'Um ancião viaja até uma montanha com o seu filho amado e lenha para um holocausto. O jovem pergunta pela oferta, sem conhecer a terrível ordem que o ancião recebeu. No fim, o sangue derramado não é humano.',
    epilogue: 'Dedução pericial concluída! O mensageiro divino deteve a mão de Abraão no último instante. A fé do patriarca ficou provada e o carneiro substituto consagrou o monte como lugar de vida.',
    subtitle: 'Desfechos de histórias e parábolas · Génesis 22 · 5x5',
    badge: 'O SACRIFÍCIO INTERROMPIDO · 5x5',
    rooms: {
      altar_moria: {
        name: 'Cimo do Monte Moriá (Altar)',
        shortName: 'Altar Moriá',
        description: 'Altar de pedras onde Isaac foi amarrado e a intervenção celeste deteve a faca.'
      },
      maleza_carnero: {
        name: 'Mato do Carneiro',
        shortName: 'Mato',
        description: 'Matagal onde um carneiro ficou preso pelos chifres para a substituição.'
      },
      ladera_monte: {
        name: 'Encosta do Monte',
        shortName: 'Encosta',
        description: 'Caminho em subida por onde subiram o pai e o menino carregando a lenha.'
      },
      campamento_base: {
        name: 'Acampamento Base',
        shortName: 'Acamp. Base',
        description: 'Lugar onde ficaram os servos e o jumento à espera do regresso.'
      },
      sendero_asno: {
        name: 'Trilho do Deserto',
        shortName: 'Trilho',
        description: 'Rota distante onde vive o meio-irmão Ismael, no deserto.'
      }
    },
    blockedObjects: {
      '0,2': {
        name: 'Carneiro no Mato',
        description: 'Carneiro preso pelos chifres num silvado como vítima expiatória.'
      },
      '1,1': {
        name: 'Lenha do Holocausto',
        description: 'Troncos atados que o menino carregou até ao altar.'
      },
      '3,4': {
        name: 'Altar de Pedras',
        description: 'Pedras amontoadas sobre as quais se preparou o sacrifício.'
      }
    },
    suspects: {
      A: {
        name: 'Abraão',
        role: 'O Patriarca fiel / Empunha a faca sobre o altar',
        clueText: 'No cimo do Moriá junto à lenha.'
      },
      I: {
        name: 'Isaac',
        role: 'Filho da promessa / Vítima designada',
        clueText: 'Prostrado no Altar do Moriá à espera do desfecho.'
      },
      G: {
        name: 'Um anjo',
        role: 'Mensageiro celeste / Detém a mão a partir da encosta',
        clueText: 'Aparece na Encosta do Monte detendo a ação.'
      },
      S: {
        name: 'Sara',
        role: 'Mãe à distância',
        clueText: 'Permanece no Acampamento Base, a sul.'
      },
      M: {
        name: 'Ismael',
        role: 'Meio-irmão no deserto',
        clueText: 'No trilho do deserto distante.'
      }
    },
    clues: {
      c1: {
        text: 'O patriarca recebeu uma ordem incompreensível, mas obedeceu ao amanhecer.',
        narrative: 'Abraão está no cimo do Altar junto à lenha.'
      },
      c2: {
        text: 'A vítima designada carregou a lenha sem saber que ele próprio era a oferta.',
        narrative: 'Isaac está prostrado no Altar do Moriá à espera do desfecho.'
      },
      c3: {
        text: 'Precisamente quando levantou a faca, o mensageiro divino interveio detendo a ação.',
        narrative: 'O anjo desce na Encosta do Monte detendo a ação.'
      },
      c4: {
        text: 'A mãe do jovem não esteve presente no cimo do monte Moriá.',
        narrative: 'Sara espera no Acampamento Base, a sul.'
      },
      c5: {
        text: 'O meio-irmão Ismael vive no extremo do trilho do deserto.',
        narrative: 'Ismael espera no trilho do deserto distante.'
      }
    }
  },

  // DESAFIO 005: La Túnica Ensangrentada -> A Túnica Ensanguentada
  '005': {
    nombre: 'A Túnica Ensanguentada',
    categoria: 'Assassínios ou crimes',
    citasBiblicas: 'Génesis 37, 12-36',
    textoBiblicoClave: 'Judá propôs aos irmãos: «Que ganhamos em matar o nosso irmão e esconder o seu sangue? Vamos vendê-lo aos ismaelitas.»',
    contextoTeologico: 'Esta história reflete a profunda disfunção da família patriarcal, mas a trama revela um fio teológico providencial: o mal cometido pelos irmãos será o instrumento que Deus usará mais tarde para salvar a própria família da fome (Gn 50,20).',
    solucionExplicacion: 'Os irmãos de José atiraram-no a um poço. Judá propôs vendê-lo a uns mercadores ismaelitas por vinte moedas de prata. Depois, mancharam a sua túnica com sangue para enganar o pai, Jacob.',
    storyIntro: 'Um jovem sonhador é enviado ao encontro dos irmãos. Estes, fartos da sua arrogância e do favoritismo do pai, conspiram para se livrarem dele e apresentam como prova uma túnica manchada de sangue animal.',
    epilogue: 'Brilhante resolução forense! A venda de José na cisterna de Dotã e a farsa da túnica rasgada foram desvendadas. O ardil económico de Judá ficou a descoberto.',
    subtitle: 'Assassínios ou crimes · Génesis 37 · 5x5',
    badge: 'A TÚNICA ENSANGUENTADA · 5x5',
    rooms: {
      cisterna_dotan: {
        name: 'Cisterna Seca de Dotã',
        shortName: 'Cisterna',
        description: 'Buraco na rocha onde atiraram José antes de combinarem a sua venda.'
      },
      pastizal_siquen: {
        name: 'Pastagens de Dotã',
        shortName: 'Pastagens',
        description: 'Campos onde pastavam os rebanhos e Rúben se afastou por algum tempo.'
      },
      campamento_hermanos: {
        name: 'Acampamento dos Irmãos',
        shortName: 'Acampamento',
        description: 'Lugar de reunião onde se conspirou contra o sonhador e se degolou o cabrito.'
      },
      ruta_caravana: {
        name: 'Rota Comercial Ismaelita',
        shortName: 'Rota Caravana',
        description: 'Caminho com camelos que transportam resina, bálsamo e mirra para o Egito.'
      },
      tienda_jacob: {
        name: 'Tenda de Jacob em Hebron',
        shortName: 'Tenda Hebron',
        description: 'Tenda distante onde o velho pai, vestido de saco, chora a suposta fera.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Cisterna sem Água',
        description: 'Poço escavado na rocha calcária onde não havia água para beber.'
      },
      '2,0': {
        name: 'Túnica de Mangas Compridas',
        description: 'Veste de honra embebida no sangue de um cabrito.'
      },
      '4,4': {
        name: '20 Siclos de Prata',
        description: 'Preço cobrado aos mercadores pela entrega do rapaz.'
      }
    },
    suspects: {
      J: {
        name: 'José',
        role: 'O sonhador da túnica / Vítima vendida',
        clueText: 'No fundo da Cisterna de Dotã.'
      },
      U: {
        name: 'Judá',
        role: 'Irmão que propôs vendê-lo aos mercadores',
        clueText: 'Na Cisterna de Dotã, a negociar a sós com José.'
      },
      R: {
        name: 'Rúben',
        role: 'Irmão mais velho / Queria salvá-lo',
        clueText: 'Afastado nas Pastagens de Dotã.'
      },
      K: {
        name: 'Jacob',
        role: 'Pai que enviou o filho e recebe a túnica',
        clueText: 'Na sua tenda de Hebron.'
      },
      I: {
        name: 'Um ismaelita',
        role: 'Mercador da caravana para o Egito',
        clueText: 'À espera na Rota Comercial Ismaelita.'
      }
    },
    clues: {
      c1: {
        text: 'O irmão mais velho (Rúben) sugeriu atirá-lo a uma cisterna vazia para o salvar mais tarde.',
        narrative: 'Rúben afastou-se para as Pastagens de Dotã.'
      },
      c2: {
        text: 'Enquanto o mais velho estava ausente, outro irmão sugeriu que era melhor tirar proveito económico.',
        narrative: 'Judá foi à cisterna negociar a venda.'
      },
      c3: {
        text: 'O jovem sonhador ficou preso no fundo da cisterna.',
        narrative: 'José está no fundo da Cisterna de Dotã.'
      },
      c4: {
        text: 'O pai, aflito, chora na sua tenda ao receber a túnica rasgada.',
        narrative: 'Jacob encontra-se aflito na sua tenda de Hebron.'
      },
      c5: {
        text: 'O mercador ismaelita concluiu a compra por vinte moedas de prata na rota.',
        narrative: 'O ismaelita espera na Rota Comercial.'
      }
    }
  },

  // DESAFIO 007: La Copa de Adivinación -> A Taça da Adivinhação
  '007': {
    nombre: 'A Taça da Adivinhação',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Génesis 44, 1-17',
    textoBiblicoClave: 'O mordomo alcançou-os e repetiu-lhes essas mesmas palavras... Ao abrirem os sacos, a taça apareceu no saco de Benjamim.',
    contextoTeologico: 'É o clímax dramático da reconciliação fraterna. Teologicamente, representa o arrependimento genuíno. Judá, que antes propusera vender José, oferece agora a sua vida por Benjamim. É um ato de redenção que prefigura o amor oblativo.',
    solucionExplicacion: 'José ordenou ao seu mordomo que escondesse a sua taça de prata no saco do irmão mais novo, Benjamim. Foi uma prova para ver se os irmãos o abandonariam, mas Judá ofereceu-se como escravo no seu lugar.',
    storyIntro: 'Um governante poderoso acolhe uns viajantes estrangeiros, mas, antes de partirem, prepara uma armadilha. Esconde um objeto de grande valor no saco do mais novo para ver se os outros estão dispostos a abandoná-lo.',
    epilogue: 'Prova pericial superada! A taça no saco de Benjamim serviu para confirmar a sincera transformação dos irmãos: Judá intercedeu com a sua própria vida para não despedaçar o coração do pai.',
    subtitle: 'Descoberta de ações ocultas · Génesis 44 · 5x5',
    badge: 'A TAÇA DA ADIVINHAÇÃO · 5x5',
    rooms: {
      palacio_jose: {
        name: 'Palácio do Governador do Egito',
        shortName: 'Palácio José',
        description: 'Sede de comando onde José mandou colocar em segredo a taça de prata.'
      },
      camino_retorno: {
        name: 'Caminho de Regresso a Canaã',
        shortName: 'Caminho',
        description: 'Trilho onde os irmãos foram alcançados e os sacos foram abertos.'
      },
      almacen_grano: {
        name: 'Armazém de Cereais do Nilo',
        shortName: 'Armazém',
        description: 'Silos onde se encheram os sacos de trigo e se devolveu o dinheiro.'
      },
      puesto_guardia: {
        name: 'Posto de Guarda Egípcio',
        shortName: 'P. Guarda',
        description: 'Destacamento de sentinelas que guardava as portas da cidade.'
      },
      aposentos_mayordomo: {
        name: 'Aposentos do Mordomo',
        shortName: 'Mordomo',
        description: 'Lugar onde o mordomo recebeu as instruções da armadilha.'
      }
    },
    blockedObjects: {
      '1,1': {
        name: 'Taça de Prata',
        description: 'Taça sagrada usada pelo vice-rei para beber e adivinhar.'
      },
      '2,4': {
        name: 'Saco de Trigo',
        description: 'Saco de serapilheira onde a taça foi escondida, na boca do saco.'
      },
      '0,3': {
        name: 'Carroça de Mantimentos',
        description: 'Carga de cereal preparada no armazém para a viagem de regresso.'
      }
    },
    suspects: {
      J: {
        name: 'José',
        role: 'Vice-rei do Egito / Autor da prova',
        clueText: 'No Palácio do Governador.'
      },
      B: {
        name: 'Benjamim',
        role: 'Irmão mais novo / A taça apareceu no seu saco',
        clueText: 'No Caminho de Regresso, espantado com a revista.'
      },
      U: {
        name: 'Judá',
        role: 'Irmão que se oferece como escravo no seu lugar',
        clueText: 'Junto a Benjamim no Caminho de Regresso, a interceder.'
      },
      R: {
        name: 'Rúben',
        role: 'Irmão que lamenta a angústia da família',
        clueText: 'Detido no Posto de Guarda.'
      },
      M: {
        name: 'O mordomo',
        role: 'Servo executor que colocou a taça',
        clueText: 'Nos Aposentos do Mordomo.'
      }
    },
    clues: {
      c1: {
        text: 'O governador do Egito preparou uma última armadilha para pôr à prova a lealdade entre irmãos.',
        narrative: 'José permanece no Palácio do Governador.'
      },
      c2: {
        text: 'O servo de confiança recebeu ordem de esconder o objeto de prata no saco do mais novo.',
        narrative: 'O mordomo está nos seus aposentos privados.'
      },
      c3: {
        text: 'O objeto apareceu no saco do mais novo quando foram alcançados no caminho.',
        narrative: 'Benjamim está no Caminho de Regresso.'
      },
      c4: {
        text: 'Judá ofereceu a sua própria liberdade como escravo para não regressar sem o rapaz.',
        narrative: 'Judá acompanha Benjamim no Caminho de Regresso, intercedendo por ele.'
      },
      c5: {
        text: 'Rúben foi retido junto dos guardas egípcios à saída da cidade.',
        narrative: 'Rúben foi detido no Posto de Guarda.'
      }
    }
  },

  // DESAFIO 009: El Lecho Profanado -> O Leito Profanado
  '009': {
    nombre: 'O Leito Profanado',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Génesis 35, 22 e Génesis 49, 3-4',
    textoBiblicoClave: 'Enquanto Israel habitava naquela região, Rúben foi deitar-se com Bila, concubina de seu pai, e Israel soube-o.',
    contextoTeologico: 'Historicamente, tomar as concubinas do patriarca era uma forma de usurpar a sua liderança. Teologicamente, sublinha que as promessas divinas não se herdam automaticamente pela ordem biológica; o comportamento ético tem um papel fundamental na história sagrada.',
    solucionExplicacion: 'Rúben deitou-se com Bila, a concubina do seu pai Jacob. Jacob soube e, embora se tenha calado no momento, no fim da vida retirou a Rúben a bênção da primogenitura por ter profanado o seu leito.',
    storyIntro: 'O filho mais velho, numa tentativa de afirmar o seu poder após uma tragédia familiar, toma em segredo a concubina do pai. Embora julgue que o seu ato ficou impune, o ancião descobre-o e reserva-lhe um castigo que se cumprirá no leito de morte.',
    epilogue: 'Resolução conclusiva! O pecado escondido em Migdal-Éder não passou despercebido. Rúben perdeu a primogenitura e a sua impetuosidade ficou selada nas bênçãos finais do patriarca.',
    subtitle: 'Descoberta de ações ocultas · Génesis 35 e 49 · 5x5',
    badge: 'O LEITO PROFANADO · 5x5',
    rooms: {
      tienda_bilha: {
        name: 'Tenda de Bila (Concubina)',
        shortName: 'T. Bila',
        description: 'Tenda onde se cometeu o ultraje proibido após a morte de Raquel.'
      },
      tienda_jacob: {
        name: 'Tenda de Jacob (Israel)',
        shortName: 'T. Jacob',
        description: 'Tenda do patriarca que soube em silêncio do desmando do seu primogénito.'
      },
      torre_eder: {
        name: 'Torre de Éder (Migdal-Éder)',
        shortName: 'Torre Éder',
        description: 'Atalaia de pastores nos campos de Belém onde Israel acampou.'
      },
      tienda_lia: {
        name: 'Tenda de Lia',
        shortName: 'T. Lia',
        description: 'Morada da mãe de Rúben no acampamento patriarcal.'
      },
      sepulcro_raquel: {
        name: 'Sepulcro de Raquel em Efrata',
        shortName: 'Sepulcro',
        description: 'Monumento de luto erguido por Jacob no caminho de Belém.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Madeira do Leito',
        description: 'Armação de campanha que representava a dignidade conjugal do patriarca.'
      },
      '2,1': {
        name: 'Estela Comemorativa',
        description: 'Pilar erguido por Jacob depois de sepultar Raquel junto ao caminho.'
      },
      '3,4': {
        name: 'Atalaia de Migdal-Éder',
        description: 'Torre de vigia do rebanho que domina os vales de pastoreio.'
      }
    },
    suspects: {
      J: {
        name: 'Jacob',
        role: 'Patriarca ofendido / Guardou silêncio',
        clueText: 'Na sua tenda patriarcal.'
      },
      B: {
        name: 'Bila',
        role: 'Concubina de Jacob / Vítima do abuso',
        clueText: 'Na Tenda de Bila.'
      },
      R: {
        name: 'Rúben',
        role: 'Primogénito transgressor / Profanou o leito',
        clueText: 'Entrou na Tenda de Bila a sós com ela.'
      },
      L: {
        name: 'Lia',
        role: 'Mãe de Rúben',
        clueText: 'Permanece na sua própria tenda.'
      },
      Q: {
        name: 'Memória de Raquel',
        role: 'Esposa falecida no sepulcro',
        clueText: 'No Sepulcro de Raquel em Efrata.'
      }
    },
    clues: {
      c1: {
        text: 'Aconteceu pouco depois da morte da esposa preferida, perto de Migdal-Éder.',
        narrative: 'A memória de Raquel encontra-se no Sepulcro de Efrata.'
      },
      c2: {
        text: 'O primogénito cometeu um ato proibido, desafiando a autoridade patriarcal.',
        narrative: 'Rúben entrou às escondidas na Tenda de Bila, profanando a intimidade.'
      },
      c3: {
        text: 'A mulher envolvida era a concubina do patriarca.',
        narrative: 'Bila está consternada na sua tenda.'
      },
      c4: {
        text: 'O patriarca soube do sucedido e guardou um aparente silêncio.',
        narrative: 'Jacob está em silêncio na sua tenda patriarcal.'
      },
      c5: {
        text: 'Lia encontra-se na sua tenda de mãe, sem intervir na transgressão.',
        narrative: 'Lia permanece na sua própria tenda.'
      }
    }
  },

  // DESAFIO 001-B: El Horno Ardiente -> A Fornalha Ardente
  '001-B': {
    nombre: 'A Fornalha Ardente',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Daniel 3, 1-30',
    textoBiblicoClave: 'Nabucodonosor exclamou: «Bendito seja o Deus de Sadrac, Mesac e Abednego, que enviou o seu anjo para salvar os seus servos!»',
    contextoTeologico: 'Reflete a resistência passiva e a fidelidade a Javé perante a assimilação cultural do Império Babilónico. Teologicamente, anima os exilados a manterem a sua identidade, mostrando que o poder de Deus é superior ao totalitarismo.',
    solucionExplicacion: 'Sadrac, Mesac e Abednego recusaram-se a adorar a estátua do rei Nabucodonosor. Foram lançados na fornalha ardente, mas Deus enviou um anjo para os proteger, e saíram completamente ilesos perante o espanto do rei.',
    storyIntro: 'O monarca de um grande império ergue um monumento e ordena a submissão absoluta de todos os seus oficiais sob ameaça de morte. Depois de executada a sentença contra uns rebeldes, o rei fica aterrorizado ao espreitar o lugar do castigo e ver mais pessoas do que as que tinha condenado.',
    epilogue: 'Caso resolvido! Sadrac, Mesac e Abednego permaneceram fiéis a Deus no meio da fornalha de fogo ardente. O enviado divino protegeu-os de qualquer queimadura, mostrando a Nabucodonosor que nenhum ídolo humano se pode comparar ao Deus altíssimo.',
    subtitle: 'Descoberta de ações ocultas · Daniel 3 · 5x5',
    badge: 'A FORNALHA ARDENTE · 5x5',
    rooms: {
      pedestal_oro: {
        name: 'Pedestal da Estátua de Ouro',
        shortName: 'Estátua Ouro',
        description: 'Planície de Dura onde se ergueu a colossal imagem de ouro.'
      },
      horno_fuego: {
        name: 'Fornalha de Fogo Ardente',
        shortName: 'Fornalha',
        description: 'Fornalha aquecida sete vezes mais do que o costume.'
      },
      estrado_real: {
        name: 'Estrado do Rei Nabucodonosor',
        shortName: 'Estrado Real',
        description: 'Lugar elevado de onde o rei observou o milagre dos quatro homens.'
      },
      tribuna_heraldos: {
        name: 'Tribuna do Arauto e dos Músicos',
        shortName: 'Tribuna Arauto',
        description: 'Lugar onde ressoavam trombetas, cítaras e harpas a proclamar o édito.'
      },
      acceso_guardia: {
        name: 'Acesso da Guarda Caldeia',
        shortName: 'Posto Guarda',
        description: 'Entrada onde os soldados amarraram os três hebreus antes de caírem abrasados.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Estátua Colossal de Ouro',
        description: 'Monumento de sessenta côvados de altura erguido na planície de Dura.'
      },
      '2,1': {
        name: 'Labareda Voraz da Fornalha',
        description: 'Fogo ardente aquecido sete vezes que fulminou os carrascos.'
      },
      '4,4': {
        name: 'Trombeta e Cítara Real',
        description: 'Instrumentos musicais que davam o sinal de prostração obrigatória.'
      }
    },
    suspects: {
      N: {
        name: 'Nabucodonosor',
        role: 'Rei da Babilónia',
        clueText: 'No Estrado Real, atónito ao ver quatro homens a passear ilesos.'
      },
      S: {
        name: 'Sadrac',
        role: 'Jovem hebreu fiel',
        clueText: 'Diante do estrado do rei recusou prostrar-se e defendeu a sua fé sem medo.'
      },
      M: {
        name: 'Mesac',
        role: 'Companheiro exilado',
        clueText: 'Na Fornalha de Fogo com as vestes intactas e sem cheiro a queimado.'
      },
      H: {
        name: 'Um Arauto',
        role: 'Pregoeiro do rei',
        clueText: 'No acesso da guarda a apregoar o édito de adoração obrigatória.'
      },
      G: {
        name: 'Um Guarda',
        role: 'Soldado caldeu',
        clueText: 'No Acesso da Guarda a vigiar as cordas antes de os lançarem.'
      }
    },
    clues: {
      c1: {
        text: 'O rei construiu uma gigantesca estátua de ouro e ordenou que todos se prostrassem ao ouvir a música.',
        narrative: 'Nabucodonosor contemplava a submissão a partir do seu estrado de comando.'
      },
      c2: {
        text: 'Três jovens exilados que ocupavam altos cargos administrativos recusaram participar na idolatria imposta.',
        narrative: 'Sadrac e Mesac não dobraram os joelhos diante da imagem babilónica.'
      },
      c3: {
        text: 'Um arauto proclamou que o castigo pela desobediência seria ser lançado vivo numa fornalha de fogo ardente.',
        narrative: 'O pregoeiro transmitiu a ordem com voz potente na sua tribuna.'
      },
      c4: {
        text: 'Os guardas que cumpriram a sentença morreram fulminados pelo calor intenso das chamas ao aproximarem-se.',
        narrative: 'O soldado da guarda posicionado no acesso viu as labaredas transbordarem.'
      },
      c5: {
        text: 'O rei espantou-se ao espreitar e ver quatro homens a passear ilesos no meio do fogo, e o quarto tinha aspeto divino.',
        narrative: 'Os jovens hebreus caminhavam livres de amarras no meio das brasas.'
      }
    }
  },

  // DESAFIO 002-B: La Escritura en la Pared -> A Escrita na Parede
  '002-B': {
    nombre: 'A Escrita na Parede',
    categoria: 'Desfechos de histórias e parábolas',
    citasBiblicas: 'Daniel 5, 1-30',
    textoBiblicoClave: 'Nessa mesma noite foi assassinado Baltasar, rei dos caldeus, e Dario, o medo, apoderou-se do reino.',
    contextoTeologico: 'O relato condena severamente a soberba e a profanação do culto sagrado. Exegeticamente (Fé Adulta), mostra que Javé é o verdadeiro Senhor da história, capaz de derrubar os impérios mais arrogantes numa só noite.',
    solucionExplicacion: 'O rei Baltasar profanou os vasos sagrados do Templo num banquete. Deus escreveu uma mensagem de juízo na parede. Daniel decifrou-a e nessa mesma noite Baltasar foi assassinado, caindo a Babilónia nas mãos dos medos e dos persas.',
    storyIntro: 'No meio de uma majestosa festa imperial onde o vinho corre em abundância, a algazarra congela. Um acontecimento sobrenatural nas paredes do palácio aterroriza o soberano. Nessa mesma madrugada, a festa acaba em sangue e o império muda de mãos.',
    epilogue: 'Caso resolvido! Daniel decifrou com coragem a sentença Mené, Tequel, Parsin. A soberba de Baltasar foi pesada na balança e achada em falta, e o reino babilónico terminou nessa mesma noite.',
    subtitle: 'Desfechos de histórias e parábolas · Daniel 5 · 5x5',
    badge: 'A ESCRITA NA PAREDE · 5x5',
    rooms: {
      muro_escritura: {
        name: 'Parede Caiada da Escrita',
        shortName: 'Parede Gesso',
        description: 'Parede de gesso iluminada pelo candelabro onde apareceu a mão misteriosa.'
      },
      banquete_real: {
        name: 'Salão do Grande Banquete',
        shortName: 'Banquete Real',
        description: 'Mesas com vinho onde se profanaram os vasos de ouro do Templo de Jerusalém.'
      },
      estrado_sabios: {
        name: 'Estrado dos Sábios e Magos',
        shortName: 'Estrado Sábios',
        description: 'Lugar onde astrólogos e adivinhos falharam ao ler as palavras divinas.'
      },
      aposento_reina: {
        name: 'Câmara da Rainha-Mãe',
        shortName: 'Câm. Rainha-Mãe',
        description: 'Lugar onde a rainha veio recordar a memória do sábio Daniel.'
      },
      puerta_persa: {
        name: 'Pórtico da Invasão Medo-Persa',
        shortName: 'Pórtico Invasão',
        description: 'Acesso exterior pelo leito do rio por onde entraram as tropas de Dario.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Mão Misteriosa no Gesso',
        description: 'Dedos sobrenaturais a traçar Mené, Tequel, Parsin no reboco.'
      },
      '1,3': {
        name: 'Vasos Sagrados do Templo',
        description: 'Taças de ouro e prata consagradas roubadas de Jerusalém.'
      },
      '3,0': {
        name: 'Rolo Astrológico por Decifrar',
        description: 'Tratado com que os caldeus tentaram, sem êxito, ler as letras.'
      }
    },
    suspects: {
      B: {
        name: 'Baltasar',
        role: 'Rei profanador da Babilónia',
        clueText: 'No Salão do Banquete a tremer, com os joelhos a bater um no outro.'
      },
      R: {
        name: 'A Rainha-Mãe',
        role: 'Conselheira real',
        clueText: 'Na Câmara da Rainha-Mãe, a trazer consolo e a recomendar Daniel.'
      },
      D: {
        name: 'Daniel',
        role: 'Sábio exilado de Judá',
        clueText: 'Junto ao pórtico, depois de decifrar o veredicto divino escrito na parede.'
      },
      N: {
        name: 'Nabucodonosor',
        role: 'Evocado no estrado de honra',
        clueText: 'No Estrado dos Sábios, recordado pelo seu arrependimento passado.'
      },
      M: {
        name: 'Dario, o Medo',
        role: 'Monarca conquistador invasor',
        clueText: 'Irrompeu no salão do banquete tomando o palácio na noite da sentença.'
      }
    },
    clues: {
      c1: {
        text: 'Um rei organizou um grande banquete usando como taças os vasos sagrados roubados do templo de Jerusalém.',
        narrative: 'Baltasar brindava com os seus nobres, profanando os objetos sagrados.'
      },
      c2: {
        text: 'Durante a festa profana, uma misteriosa mão humana apareceu e escreveu umas palavras incompreensíveis no gesso da parede.',
        narrative: 'O traço luminoso ficou gravado na parede branca.'
      },
      c3: {
        text: 'A rainha-mãe sugeriu chamar um sábio cativo que possuía o espírito dos deuses santos para decifrar a mensagem.',
        narrative: 'A nobre senhora interveio, serenando a histeria da corte.'
      },
      c4: {
        text: 'O sábio interpretou as palavras «Mené, Tequel, Parsin», anunciando o fim iminente e a divisão do reino babilónico.',
        narrative: 'Daniel recusou os presentes do rei e pronunciou o juízo de Deus.'
      },
      c5: {
        text: 'Nessa mesma noite cumpriu-se a profecia: o rei foi assassinado e o império caiu nas mãos de um monarca estrangeiro.',
        narrative: 'Dario, o medo, atravessou o limiar e assumiu o domínio do reino.'
      }
    }
  },

  // DESAFIO 006-B: El Complot del Umbral -> A Conspiração da Porta
  '006-B': {
    nombre: 'A Conspiração da Porta',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Ester 2, 21-23',
    textoBiblicoClave: 'Mardoqueu soube da conspiração e comunicou-a à rainha Ester, e Ester disse-a ao rei da parte de Mardoqueu.',
    contextoTeologico: 'Este acontecimento é o prelúdio histórico que justifica a futura exaltação do protagonista. Teologicamente, realça como os marginalizados, apesar de oprimidos no exílio, agem com retidão cívica e se tornam instrumentos de justiça.',
    solucionExplicacion: 'Os eunucos Bigtan e Teres planearam assassinar o rei Assuero. Mardoqueu descobriu a conspiração e avisou a rainha Ester, que informou o rei. Isto salvou a vida do monarca e os conspiradores foram executados.',
    storyIntro: 'Dois guardas do palácio tramam um assassinato político ao mais alto nível. O plano falha quando um forasteiro marginalizado os ouve e usa um canal indireto para fazer chegar a informação, ganhando um lugar nos anais do império.',
    epilogue: 'Caso resolvido! Mardoqueu ouviu a conspiração à porta e agiu com retidão. Ester informou Assuero, salvando a vida do rei e deixando registado o ato de lealdade nas crónicas da Pérsia.',
    subtitle: 'Descoberta de ações ocultas · Ester 2 · 5x5',
    badge: 'A CONSPIRAÇÃO DA PORTA · 5x5',
    rooms: {
      umbral_puerta: {
        name: 'Limiar da Porta do Rei',
        shortName: 'Limiar Porta',
        description: 'Pórtico exterior onde Mardoqueu se sentava e ouviu murmúrios sediciosos.'
      },
      camerino_guardia: {
        name: 'Camarim dos Guardas Reais',
        shortName: 'Camarim Guardas',
        description: 'Aposento de descanso onde Bigtan e Teres tramaram o atentado contra o rei.'
      },
      trono_asuero: {
        name: 'Sala do Trono Imperial',
        shortName: 'Trono Assuero',
        description: 'Trono onde o monarca persa despachava os assuntos do vasto império.'
      },
      camara_ester: {
        name: 'Câmara Privada da Rainha Ester',
        shortName: 'Câmara Ester',
        description: 'Aposento no harém real onde a rainha recebeu o aviso do seu tio.'
      },
      sala_cronicas: {
        name: 'Arquivo das Crónicas Reais',
        shortName: 'Sala Crónicas',
        description: 'Lugar onde os escribas registaram o facto por escrito no livro do reino.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Punhal Escondido do Conjurado',
        description: 'Arma branca com que os eunucos pretendiam ferir o soberano.'
      },
      '2,2': {
        name: 'Livro dos Anais do Rei',
        description: 'Crónica imperial aberta onde ficou registado o mérito de Mardoqueu.'
      },
      '4,1': {
        name: 'Coluna da Chancelaria',
        description: 'Pilar persa de mármore do recinto do palácio em Susa.'
      }
    },
    suspects: {
      M: {
        name: 'Mardoqueu',
        role: 'Judeu exilado à porta',
        clueText: 'No camarim da guarda, atento às conversas dos eunucos.'
      },
      E: {
        name: 'Ester',
        role: 'Rainha da Pérsia',
        clueText: 'Na sua Câmara Privada, a transmitir o aviso ao rei em nome do tio.'
      },
      A: {
        name: 'Assuero',
        role: 'Imperador persa',
        clueText: 'Na Sala do Trono, a mandar investigar a conjura dos eunucos.'
      },
      B: {
        name: 'Bigtan',
        role: 'Eunuco guardião da porta',
        clueText: 'Junto ao trono imperial, à espreita para atentar contra o monarca.'
      },
      T: {
        name: 'Teres',
        role: 'Eunuco cúmplice conspirador',
        clueText: 'No Camarim dos Guardas, a ajustar o ferrolho para facilitar a emboscada.'
      }
    },
    clues: {
      c1: {
        text: 'Dois eunucos que guardavam as portas do recinto real enfureceram-se com o soberano e planearam assassiná-lo.',
        narrative: 'Bigtan e Teres murmuravam no camarim de serviço.'
      },
      c2: {
        text: 'Um exilado que costumava sentar-se à porta do palácio ouviu os pormenores exatos da conspiração.',
        narrative: 'Mardoqueu apercebeu-se do plano sedicioso a partir do seu banco no limiar.'
      },
      c3: {
        text: 'O descobridor da conspiração não tinha acesso direto ao monarca, por isso transmitiu a informação a uma familiar introduzida na corte.',
        narrative: 'A mensagem chegou em segredo aos aposentos da rainha Ester.'
      },
      c4: {
        text: 'A rainha comunicou o alerta ao monarca em nome do homem que tinha descoberto o plano.',
        narrative: 'Ester expôs a trama a Assuero, citando com honra Mardoqueu.'
      },
      c5: {
        text: 'Depois de investigar e confirmar a conjura, os dois eunucos foram enforcados e o ato de lealdade foi registado nas crónicas reais.',
        narrative: 'O soberano verificou a veracidade e mandou registar o feito nos anais.'
      }
    }
  },

  // DESAFIO 007-B: El Valle de la Muerte Vencida -> O Vale da Morte Vencida
  '007-B': {
    nombre: 'O Vale da Morte Vencida',
    categoria: 'Desfechos de histórias e parábolas',
    citasBiblicas: 'Ezequiel 37, 1-14',
    textoBiblicoClave: 'Profetiza ao espírito, filho do homem (...) O espírito entrou neles, voltaram à vida e puseram-se de pé: era uma multidão imensa.',
    contextoTeologico: 'É um texto central na teologia da esperança. Perante o trauma do exílio (a "morte" da nação), Deus promete recriar o seu povo. Mostra que a salvação bíblica tem uma dimensão comunitária e social, e não apenas individual.',
    solucionExplicacion: 'Deus mostrou ao profeta Ezequiel um vale de ossos secos. Ao profetizar sobre eles, os ossos juntaram-se e o Espírito infundiu-lhes vida. É uma alegoria profética da restauração e do fim do exílio do povo de Israel.',
    storyIntro: 'Um homem é levado para uma paisagem desoladora cheia de restos humanos abandonados. À pergunta sobre se a vida é possível ali, responde um fenómeno ruidoso e misterioso, dando esperança a uma nação inteira abatida.',
    epilogue: 'Caso resolvido! O profeta obedeceu à voz divina e os quatro ventos insuflaram alento. O que parecia um deserto de morte transformou-se num exército vivo de esperança restaurada para Israel.',
    subtitle: 'Desfechos de histórias e parábolas · Ezequiel 37 · 5x5',
    badge: 'O VALE DA MORTE VENCIDA · 5x5',
    rooms: {
      valle_huesos: {
        name: 'Vale dos Ossos Secos',
        shortName: 'Vale Ossos',
        description: 'Planície desolada coberta de inúmeros esqueletos completamente secos.'
      },
      colina_vision: {
        name: 'Colina da Visão Profética',
        shortName: 'Colina Visão',
        description: 'Promontório onde o Espírito de Deus pôs de pé o profeta Ezequiel.'
      },
      puerta_vientos: {
        name: 'Confluência dos Quatro Ventos',
        shortName: 'Quatro Ventos',
        description: 'Ponto cardeal de onde o sopro divino trouxe alento vivificante.'
      },
      campamento_exiliados: {
        name: 'Acampamento de Cativos na Babilónia',
        shortName: 'Acamp. Cativos',
        description: 'Lugar junto ao rio Quebar onde ressoava o clamor da desesperança.'
      },
      altar_reconstruccion: {
        name: 'Monumento do Povo Recriado',
        shortName: 'Povo Recriado',
        description: 'Lugar de assembleia onde a imensa multidão se pôs de pé com vida.'
      }
    },
    blockedObjects: {
      '1,2': {
        name: 'Restos Ósseos Calcinados',
        description: 'Ossos espalhados pela face do campo, representando a morte da nação.'
      },
      '0,3': {
        name: 'Sopro dos Quatro Ventos',
        description: 'Brisa vivificante que infunde alento vital nos corpos restituídos.'
      },
      '4,0': {
        name: 'Tenda do Cativeiro',
        description: 'Refúgio dos deportados em terra estrangeira, abatidos pela tristeza.'
      }
    },
    suspects: {
      E: {
        name: 'Ezequiel',
        role: 'Profeta e sacerdote exilado',
        clueText: 'No acampamento dos cativos, a profetizar com voz firme para os quatro rumos.'
      },
      S: {
        name: 'O Senhor Javé',
        role: 'Voz soberana da promessa',
        clueText: 'No vale dos ossos secos, a guiar o profeta no meio da desolação.'
      },
      V: {
        name: 'O Espírito Divino',
        role: 'Alento de vida e renovação',
        clueText: 'Sobre o Vale dos Ossos, a recompor tendões e carne sobre a estrutura.'
      },
      P: {
        name: 'Primeiro Exilado',
        role: 'Porta-voz do desespero',
        clueText: 'No Acampamento de Cativos, a repetir desalentado que a sua esperança morreu.'
      },
      R: {
        name: 'Segundo Exilado',
        role: 'Testemunha da restauração',
        clueText: 'Na confluência dos quatro ventos, a pôr-se de pé cheio de admiração.'
      }
    },
    clues: {
      c1: {
        text: 'Um profeta foi levado em visão a um vale imenso, completamente cheio de restos ósseos calcinados e ressequidos.',
        narrative: 'Ezequiel contemplou o leito de ossos branqueados pelo sol.'
      },
      c2: {
        text: 'Uma voz divina perguntou ao profeta se aqueles restos poderiam voltar a viver.',
        narrative: 'O Senhor interpelou a fé do vidente na colina.'
      },
      c3: {
        text: 'O profeta pronunciou um oráculo e ouviu-se um ruído estremecedor enquanto os ossos se uniam e se cobriam de carne e pele.',
        narrative: 'O estrondo percorreu o vale à medida que cada osso encaixava na sua junta.'
      },
      c4: {
        text: 'Apesar de reconstruídos, os corpos não tinham alento vital, pelo que o profeta teve de invocar os quatro ventos.',
        narrative: 'O Espírito soprou dos confins celestes para insuflar vida.'
      },
      c5: {
        text: 'Toda esta visão foi a resposta direta ao lamento coletivo dos cativos que repetiam: «A nossa esperança morreu».',
        narrative: 'Os cativos verificaram que Deus abriria os seus túmulos para os devolver à sua terra.'
      }
    }
  },

  // DESAFIO 009-B: La Ceguera del Justo -> A Cegueira do Justo
  '009-B': {
    nombre: 'A Cegueira do Justo',
    categoria: 'Desfechos de histórias e parábolas',
    citasBiblicas: 'Tobias 2, 1-10',
    textoBiblicoClave: 'Como fazia calor, dormi com o rosto descoberto. (...) O excremento quente caiu-me nos olhos e produziu-me umas manchas brancas.',
    contextoTeologico: 'O livro aborda o mistério do sofrimento do justo (teodiceia). Tobite cumpre a lei, mas é castigado pelo acaso. O Magistério usa-o para mostrar a constância na prova e a solidariedade comunitária em tempos de perseguição.',
    solucionExplicacion: 'Tobite era um exilado que arriscava a vida a sepultar os mortos judeus. Depois de um enterro, dormiu no pátio da sua casa e o excremento de umas aves caiu-lhe nos olhos, deixando-o cego e marcando o início da sua grande prova.',
    storyIntro: 'Um homem piedoso que arriscava a vida a fazer obras de caridade na clandestinidade sofre um absurdo acidente doméstico. Em vez de ser recompensado pela sua coragem, passa anos na mais profunda escuridão e dependência.',
    epilogue: 'Caso resolvido! Tobite suportou com resignação e fé a perda da vista provocada pelo infortúnio no pátio, mantendo a sua piedade inabalável até que a providência operou a sua cura.',
    subtitle: 'Desfechos de histórias e parábolas · Tobias 2 · 5x5',
    badge: 'A CEGUEIRA DO JUSTO · 5x5',
    rooms: {
      patio_exterior: {
        name: 'Pátio Exterior Junto ao Muro',
        shortName: 'Pátio Muro',
        description: 'Lugar ao pé da parede onde dormiam pardais no beiral do telhado.'
      },
      comedor_pentecostes: {
        name: 'Sala de Jantar da Festa de Pentecostes',
        shortName: 'Sala da Festa',
        description: 'Mesa festiva preparada com alimentos que Tobite deixou intacta para socorrer o defunto.'
      },
      taller_telar: {
        name: 'Oficina de Tecidos de Ana',
        shortName: 'Oficina Tear',
        description: 'Canto da casa onde a esposa fiava e tecia para sustentar a família.'
      },
      callejon_plaza: {
        name: 'Viela da Praça de Nínive',
        shortName: 'Viela Nínive',
        description: 'Lugar público onde jazia abandonado o cadáver do compatriota estrangulado.'
      },
      cueva_sepulcro: {
        name: 'Sepultura Clandestina na Horta',
        shortName: 'Sepultura Horta',
        description: 'Cova escavada de noite para dar descanso sagrado aos mortos.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Ninho de Pardais no Beiral',
        description: 'Aves pousadas na cornija do muro, por cima do leito noturno.'
      },
      '1,4': {
        name: 'Tear e Meadas de Lã',
        description: 'Instrumentos de trabalho têxtil com que Ana ganhava o sustento diário.'
      },
      '4,0': {
        name: 'Túmulo de Sepultura',
        description: 'Terra acabada de revolver onde foi sepultado o homem estrangulado.'
      }
    },
    suspects: {
      T: {
        name: 'Tobite',
        role: 'Israelita piedoso e caridoso',
        clueText: 'No Pátio Exterior, a repousar junto ao muro com o rosto descoberto.'
      },
      A: {
        name: 'Ana',
        role: 'Esposa fiel e trabalhadora',
        clueText: 'Na Oficina de Tecidos, a fiar dias inteiros para o sustento da casa.'
      },
      J: {
        name: 'Tobias',
        role: 'Filho solícito que avisou do defunto',
        clueText: 'Na oficina da mãe, consternado depois de encontrar o cadáver na praça.'
      },
      V: {
        name: 'Vizinho Exilado',
        role: 'Crítico mordaz das esmolas',
        clueText: 'Na Sepultura Clandestina, a murmurar que a caridade só trouxe cegueira.'
      },
      M: {
        name: 'Morto Abandonado',
        role: 'Vítima estrangulada na praça',
        clueText: 'No pátio exterior, junto ao muro, antes de receber piedosa sepultura.'
      }
    },
    clues: {
      c1: {
        text: 'Um israelita piedoso desobedecia às leis do império para sepultar em segredo os compatriotas assassinados e abandonados.',
        narrative: 'Tobite considerava um dever sagrado dar sepultura digna aos seus irmãos.'
      },
      c2: {
        text: 'Durante uma festa, deixou o seu próprio jantar para sepultar um homem que acabara de ser estrangulado na praça.',
        narrative: 'Tobias entrou a correr para avisar o pai da vítima assassinada.'
      },
      c3: {
        text: 'Com medo de represálias e por se sentir legalmente impuro, nessa noite decidiu dormir ao ar livre no seu pátio.',
        narrative: 'O ancião deitou-se ao pé do muro, exposto ao sereno da noite.'
      },
      c4: {
        text: 'Enquanto dormia com o rosto descoberto, o excremento quente de uns pardais caiu-lhe diretamente nos olhos.',
        narrative: 'O infortúnio privou o piedoso israelita da luz do sol.'
      },
      c5: {
        text: 'Nenhum médico o conseguiu curar; as cataratas deixaram-no cego e dependente da esposa durante quatro anos.',
        narrative: 'Ana assumiu o peso da casa, tecendo na sua oficina.'
      }
    }
  },

  // DESAFIO 002-C: La Espada de la Verdad -> A Espada da Verdade
  '002-C': {
    nombre: 'A Espada da Verdade',
    categoria: 'Desfechos de histórias e parábolas',
    citasBiblicas: '1 Reis 3, 16-28',
    textoBiblicoClave: 'O rei sentenciou: «Entregai à primeira o menino vivo, não o mateis; ela é a mãe».',
    contextoTeologico: 'O relato ilustra o dom divino da sabedoria (discernimento). O Magistério sublinha o valor supremo da vida humana e o amor materno oblativo que prefigura o amor de Deus, pondo a vida acima da posse.',
    solucionExplicacion: 'Salomão resolveu a disputa ameaçando cortar o bebé em dois. A verdadeira mãe preferiu renunciar ao filho a vê-lo morrer, revelando assim ao rei quem sentia autêntico amor de mãe.',
    storyIntro: 'Duas mulheres reclamam na corte a maternidade do mesmo bebé vivo. O monarca, na falta de testemunhas, ordena uma solução macabra que obriga a verdadeira mãe a renunciar ao filho.',
    epilogue: 'Sabedoria divina manifestada! A espada desembainhada revelou o instinto compassivo do verdadeiro amor de mãe. Salomão devolveu o menino aos braços da sua mãe legítima diante de todo o povo de Israel.',
    subtitle: 'Desfechos de histórias e parábolas · 1 Reis 3 · 5x5',
    badge: 'A ESPADA DA VERDADE · 5x5',
    rooms: {
      trono_salomon: {
        name: 'Trono do Juízo de Salomão',
        shortName: 'Trono Salomão',
        description: 'Estrado régio de marfim e ouro onde o jovem monarca proferiu a sua célebre sentença.'
      },
      estrado_litigio: {
        name: 'Estrado dos Litigantes',
        shortName: 'Estrado Litígio',
        description: 'Lugar onde compareceram as duas mulheres com o bebé vivo e o pranto da reclamação.'
      },
      camara_guardia: {
        name: 'Câmara do Carrasco Real',
        shortName: 'Câmara Guarda',
        description: 'Posto militar onde o soldado empunhou a espada reluzente de dois gumes.'
      },
      posada_mujeres: {
        name: 'Aposento Comum das Mães',
        shortName: 'Aposento Mães',
        description: 'Casa partilhada onde nasceram os dois meninos e aconteceu a trágica troca noturna.'
      },
      galeria_escribas: {
        name: 'Galeria de Notários e Sábios',
        shortName: 'Galeria Sábios',
        description: 'Corredor onde os cronistas reais registaram a fama de sabedoria do rei.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Rolo das Leis de Israel',
        description: 'Decretos sobre guarda e herança que não previam este caso sem testemunhas.'
      },
      '2,1': {
        name: 'Candeia de Azeite da Estalagem',
        description: 'Testemunha muda da noite em que um dos meninos morreu asfixiado na cama.'
      },
      '4,0': {
        name: 'Espada Afiada do Juízo',
        description: 'Aço desembainhado com que o rei mandou dividir o menino em duas partes.'
      }
    },
    suspects: {
      S: {
        name: 'Salomão',
        role: 'Rei e Juiz Supremo',
        clueText: 'Preside no Trono Real e escuta o clamor das duas partes.'
      },
      M: {
        name: 'Mãe Verdadeira',
        role: 'Primeira Prostituta (Mãe Legítima)',
        clueText: 'Preferiu ceder o menino para lhe conservar a vida.'
      },
      F: {
        name: 'Segunda Prostituta',
        role: 'Falsa Mãe Acusadora',
        clueText: 'Aceitou que o menino fosse cortado com a espada, dizendo: "Nem para mim nem para ti".'
      },
      N: {
        name: 'Menino Vivo',
        role: 'Lactente Disputado',
        clueText: 'O pequeno inocente ameaçado pelo gume do juízo.'
      },
      G: {
        name: 'Guarda Real',
        role: 'Carrasco da Corte',
        clueText: 'Posicionado na Câmara da Guarda, à espera da ordem final do monarca.'
      }
    },
    clues: {
      c1: {
        text: 'Duas mulheres que viviam sozinhas na mesma casa deram à luz com apenas três dias de diferença.',
        narrative: 'A Mãe Verdadeira e a Falsa Mãe partilhavam o aposento antes da tragédia.'
      },
      c2: {
        text: 'Uma das mulheres asfixiou acidentalmente o seu bebé enquanto dormia e trocou-o em segredo pelo filho vivo da companheira.',
        narrative: 'A Segunda Prostituta levou a cabo o engano na escuridão da noite.'
      },
      c3: {
        text: 'Ao amanhecer, a verdadeira mãe descobriu o engano ao observar com atenção o rosto do menino morto.',
        narrative: 'A Mãe Verdadeira soube de imediato que aquele corpinho sem vida não era o seu filho.'
      },
      c4: {
        text: 'O monarca, na falta de provas, mandou um guarda trazer uma espada para cortar o menino vivo em duas metades iguais.',
        narrative: 'Salomão confiou a prova da espada ao soldado da sua corte.'
      },
      c5: {
        text: 'A falsa mãe aceitou a solução, mas a verdadeira suplicou que entregassem o menino à rival para lhe salvar a vida.',
        narrative: 'O amor de mãe genuíno preferiu a renúncia à morte do menino.'
      }
    }
  },

  // DESAFIO 005-C: La Sesión Espiritista -> A Sessão Espírita
  '005-C': {
    nombre: 'A Sessão Espírita',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: '1 Samuel 28, 3-25',
    textoBiblicoClave: 'Samuel disse a Saul: «Porque me perturbas, fazendo-me subir? (...) Amanhã tu e os teus filhos estareis comigo».',
    contextoTeologico: 'Mostra um líder desesperado a violar as suas próprias leis religiosas. O Magistério adverte aqui contra o espiritismo. Reflete a tragédia psicológica de quem perdeu o favor divino e a sua própria coerência moral.',
    solucionExplicacion: 'Perante o silêncio divino, o rei Saul consultou em segredo a necromante de En-Dor para invocar o falecido profeta Samuel. Este anunciou-lhe a sua derrota iminente e a morte às mãos dos filisteus.',
    storyIntro: 'Na véspera de uma batalha desesperada, um governante vai disfarçado ao encontro de uma mulher proscrita. Procura contactar o seu antigo conselheiro no além, mas a mensagem que recebe sela a sua condenação.',
    epilogue: 'Evocação funesta na penumbra de En-Dor! Saul caiu estendido por terra ao ouvir a voz de Samuel. Ao amanhecer, nas colinas de Gelboé, a sentença do além cumpriu-se inexoravelmente.',
    subtitle: 'Descoberta de ações ocultas · 1 Samuel 28 · 5x5',
    badge: 'A SESSÃO ESPÍRITA · 5x5',
    rooms: {
      choza_nigromante: {
        name: 'Gruta da Necromante de En-Dor',
        shortName: 'Gruta En-Dor',
        description: 'Refúgio clandestino iluminado por brasas onde se faziam conjuros proibidos.'
      },
      circulo_evocacion: {
        name: 'Círculo da Aparição de Samuel',
        shortName: 'Círculo Aparição',
        description: 'Fenda no chão de onde subiu o ancião envolto no seu venerável manto.'
      },
      senda_nocturna: {
        name: 'Trilho Noturno de Gelboé',
        shortName: 'Trilho Noturno',
        description: 'Caminho furtivo por onde o rei e a sua escolta atravessaram as linhas inimigas.'
      },
      establo_ternero: {
        name: 'Estábulo do Vitelo Cevado',
        shortName: 'Estábulo Vitelo',
        description: 'Lugar onde a mulher matou um vitelo para o rei recuperar forças antes da alvorada.'
      },
      puesto_vigilancia: {
        name: 'Posto de Guarda Exterior',
        shortName: 'Posto Guarda',
        description: 'Entrada onde a escolta montou vigilância com medo de uma emboscada filisteia.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Disfarce Plebeu de Saul',
        description: 'Roupas vulgares que o rei usou para esconder a coroa e a estatura régia.'
      },
      '2,2': {
        name: 'Braseiro de Cinzas Místicas',
        description: 'Recipiente fumegante no chão rochoso onde se invocavam espíritos subterrâneos.'
      },
      '4,4': {
        name: 'Mesa do Vitelo e Pão Ázimo',
        description: 'Última refeição oferecida com temor pela adivinha ao rei abatido.'
      }
    },
    suspects: {
      S: {
        name: 'Saul',
        role: 'Rei Desesperado Disfarçado',
        clueText: 'Aflito com o silêncio divino e aterrorizado com o acampamento filisteu.'
      },
      N: {
        name: 'Necromante de En-Dor',
        role: 'Médium Proscrita',
        clueText: 'Evocou a figura que fez tremer o próprio monarca depois de exigir juramento de impunidade.'
      },
      P: {
        name: 'Profeta Samuel',
        role: 'Espírito Invocado do Além',
        clueText: 'Apareceu coberto com o seu manto profético para confirmar o fim da dinastia de Saul.'
      },
      C1: {
        name: 'Primeiro Escolta',
        role: 'Servo Confidente do Rei',
        clueText: 'Guiou Saul na escuridão da noite até à aldeia de En-Dor.'
      },
      C2: {
        name: 'Segundo Escolta',
        role: 'Servo Sentinela',
        clueText: 'Posicionado à entrada do estábulo, atento aos rumores dos montes.'
      }
    },
    clues: {
      c1: {
        text: 'O primeiro rei de Israel estava aterrorizado com o exército filisteu e Deus não lhe respondia por nenhum meio.',
        narrative: 'Saul procurou oráculos divinos sem receber resposta por sonhos nem por profetas.'
      },
      c2: {
        text: 'Apesar de ter proibido a adivinhação no país, o rei disfarçou-se de noite para consultar uma médium em En-Dor.',
        narrative: 'O monarca violou o seu próprio decreto real por desespero.'
      },
      c3: {
        text: 'O rei fez-se acompanhar de dois escoltas e jurou por Deus à mulher que ela não sofreria represálias.',
        narrative: 'Os dois guardas vigiaram a entrada, garantindo o segredo.'
      },
      c4: {
        text: 'A médium invocou um ancião envolto num manto, que o rei reconheceu de imediato como o seu falecido mentor.',
        narrative: 'O espírito de Samuel subiu da terra com o seu manto característico.'
      },
      c5: {
        text: 'Em vez de consolo, o espírito profetizou-lhe que no dia seguinte Javé entregaria o acampamento e ele morreria.',
        narrative: 'O oráculo lapidar anunciou a derrota inevitável nos montes de Gelboé.'
      }
    }
  },

  // DESAFIO 007-C: El Gigante Decapitado -> O Gigante Decapitado
  '007-C': {
    nombre: 'O Gigante Decapitado',
    categoria: 'Desfechos de histórias e parábolas',
    citasBiblicas: '1 Samuel 17, 1-54',
    textoBiblicoClave: 'David meteu a mão no alforge, tirou uma pedra, atirou-a com a funda e feriu o filisteu na testa.',
    contextoTeologico: 'É o paradigma bíblico da fraqueza perante o poder arrogante. O Vaticano usa esta passagem para ilustrar que as verdadeiras vitórias se alcançam confiando na graça providencial de Deus, e não na tecnologia militar humana.',
    solucionExplicacion: 'David recusou a armadura de Saul e enfrentou o gigante filisteu Golias apenas com a sua funda e cinco pedras. Depois de o atordoar com uma pedrada na testa, usou a espada do próprio Golias para lhe cortar a cabeça.',
    storyIntro: 'Um exército inteiro treme diante de um único guerreiro descomunal. Um jovem pastor recusa a proteção do rei e avança para a batalha armado apenas com instrumentos do campo e uma confiança inabalável.',
    epilogue: 'Triunfo da fé sobre a força bruta! A pedra da torrente rachou a testa do gigante de seis côvados. David pegou no aço de Golias e cortou-lhe a cabeça perante a debandada geral das tropas filisteias.',
    subtitle: 'Desfechos de histórias e parábolas · 1 Samuel 17 · 5x5',
    badge: 'O GIGANTE DECAPITADO · 5x5',
    rooms: {
      valle_elah: {
        name: 'Vale de Elá (Campo do Desafio)',
        shortName: 'Vale Elá',
        description: 'Depressão entre duas colinas onde Golias desafiou Israel durante quarenta dias.'
      },
      torrente_guijarros: {
        name: 'Leito da Torrente e Seixos',
        shortName: 'Torrente Seixos',
        description: 'Ribeiro seco onde o pastor escolheu cinco pedras lisas para o seu alforge.'
      },
      tienda_saul: {
        name: 'Tenda de Campanha de Saul',
        shortName: 'Tenda Saul',
        description: 'Posto de comando real onde David experimentou a pesada cota de malha de bronze e a recusou.'
      },
      campamento_israel: {
        name: 'Linha de Batalha de Israel',
        shortName: 'Linha Israel',
        description: 'Trincheira onde os soldados tremiam com os insultos do guerreiro de Gat.'
      },
      posicion_filisteos: {
        name: 'Colina dos Filisteus',
        shortName: 'Colina Filisteus',
        description: 'Colina inimiga onde esperava o exército de Socó com carros de combate.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Armadura de Bronze Abandonada',
        description: 'Cota de malha de Saul que David tirou por lhe ser inútil e pesada.'
      },
      '2,3': {
        name: 'Lança Gigante como Cilindro de Tear',
        description: 'Arma descomunal de Golias com ponta de ferro de seiscentos siclos.'
      },
      '4,0': {
        name: 'Alforge de Pastor com Quatro Pedras',
        description: 'Bolsa de couro onde ficaram as pedras que sobraram depois do tiro certeiro.'
      }
    },
    suspects: {
      D: {
        name: 'David',
        role: 'Jovem Pastor com Funda',
        clueText: 'Avançou para o combate em nome do Senhor dos exércitos de Israel.'
      },
      G: {
        name: 'Golias',
        role: 'Campeão Filisteu de Gat',
        clueText: 'Desprezou o rapaz ruivo e amaldiçoou Israel pelos seus deuses pagãos.'
      },
      S: {
        name: 'Rei Saul',
        role: 'Monarca de Israel',
        clueText: 'Ofereceu a mão da filha e isenção de tributos a quem derrotasse o gigante.'
      },
      E: {
        name: 'Eliab',
        role: 'Irmão Mais Velho de David',
        clueText: 'Repreendeu David, acusando-o de abandonar as ovelhas no deserto por vaidade.'
      },
      A: {
        name: 'Abner',
        role: 'General do Exército Hebreu',
        clueText: 'Apresentou o pastor ao rei com a cabeça ensanguentada do filisteu na mão.'
      }
    },
    clues: {
      c1: {
        text: 'Durante quarenta dias, o campeão filisteu desafiou os exércitos de Israel sem que ninguém se atrevesse a lutar.',
        narrative: 'Golias aterrorizava as tropas todas as manhãs e tardes.'
      },
      c2: {
        text: 'O irmão mais velho do jovem voluntário desprezou-o, acusando-o de ir ao acampamento só por curiosidade mórbida.',
        narrative: 'Eliab repreendeu com amargura a ousadia de David nas fileiras.'
      },
      c3: {
        text: 'O rei ofereceu a sua própria armadura ao jovem, mas este tirou-a porque nem conseguia andar com ela.',
        narrative: 'Saul vestiu David com os seus apetrechos de bronze, mas estes foram rejeitados.'
      },
      c4: {
        text: 'O jovem avançou com o seu cajado de pastor, cinco seixos da torrente e uma funda.',
        narrative: 'David desceu ao leito do ribeiro com a confiança posta em Javé.'
      },
      c5: {
        text: 'Depois de derrubar o gigante com uma pedra certeira, o jovem usou a pesada espada do inimigo para o decapitar.',
        narrative: 'O general Abner guiou as tropas na perseguição após a queda do campeão.'
      }
    }
  },

  // DESAFIO 003-NT: El Prójimo Inesperado -> O Próximo Inesperado
  '003-NT': {
    nombre: 'O Próximo Inesperado',
    categoria: 'Desfechos de histórias e parábolas',
    citasBiblicas: 'Lucas 10, 25-37',
    textoBiblicoClave: 'Mas um samaritano, que ia de viagem, chegou junto dele e, ao vê-lo, encheu-se de compaixão. Aproximou-se, ligou-lhe as feridas, deitando nelas azeite e vinho...',
    contextoTeologico: 'A parábola redefine radicalmente o conceito de próximo. A Fé Adulta indica que Jesus critica a religião centrada no culto e na pureza estéril, propondo que a verdadeira vontade de Deus se manifesta na misericórdia ativa e incondicional para com quem sofre.',
    solucionExplicacion: 'Na parábola do bom samaritano, um homem é ignorado por um sacerdote e por um levita. Por fim, é um samaritano (considerado herege e inimigo pelos judeus) quem se compadece dele, tratando-o e pagando a sua estadia numa estalagem.',
    storyIntro: 'Um homem moribundo jaz num caminho perigoso. Dois representantes da alta moralidade religiosa ignoram-no, deixando a salvação nas mãos da personagem mais odiada socialmente naquela época.',
    epilogue: 'Misericórdia que ultrapassa fronteiras! O samaritano ligou as chagas do viajante e pagou dois denários ao estalajadeiro para garantir a sua cura. Jesus concluiu: «Vai e faz tu o mesmo».',
    subtitle: 'Desfechos de histórias e parábolas · Lucas 10 · 5x5',
    badge: 'O PRÓXIMO INESPERADO · 5x5',
    rooms: {
      camino_jerico: {
        name: 'Descida Rochosa de Jerusalém a Jericó',
        shortName: 'Caminho Jericó',
        description: 'Desfiladeiro solitário e escarpado atacado por quadrilhas de salteadores do deserto.'
      },
      senda_orilla: {
        name: 'Berma da Evasão Ritual',
        shortName: 'Berma Evasão',
        description: 'Lado oposto do caminho por onde os ministros do culto passaram ao largo sem parar.'
      },
      albergue_posada: {
        name: 'Estalagem do Caminho',
        shortName: 'Estalagem',
        description: 'Hospedaria rústica onde o ferido recebeu teto, cuidados e alimento durante a noite.'
      },
      establo_cabalgadura: {
        name: 'Estábulo da Montada',
        shortName: 'Estábulo Montada',
        description: 'Pátio onde o animal de carga transportou o convalescente no dorso, a passo lento.'
      },
      mostrador_denarios: {
        name: 'Balcão do Estalajadeiro',
        shortName: 'Balcão Pagamento',
        description: 'Mesa de madeira onde o samaritano deixou as moedas, prometendo pagar qualquer despesa extra quando voltasse.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Frasco de Azeite e Vinho',
        description: 'Bálsamo derramado nas chagas para desinfetar e aliviar a dor.'
      },
      '2,1': {
        name: 'Dois Denários de Prata',
        description: 'Salário completo de dois dias entregue ao estalajadeiro para cobrir a estadia.'
      },
      '4,0': {
        name: 'Ligaduras de Linho Rasgadas',
        description: 'Tiras de pano com que o samaritano estancou a hemorragia do viajante.'
      }
    },
    suspects: {
      H: {
        name: 'Homem Assaltado',
        role: 'Viajante Meio Morto',
        clueText: 'Despojado das suas vestes e abandonado a sangrar no pó do caminho.'
      },
      S: {
        name: 'Sacerdote do Templo',
        role: 'Clérigo Indiferente',
        clueText: 'Viu o ferido de longe e deu uma volta com medo da impureza do cadáver.'
      },
      L: {
        name: 'Levita',
        role: 'Ministro do Culto',
        clueText: 'Chegou ao mesmo sítio, olhou para o moribundo e também passou ao largo.'
      },
      M: {
        name: 'Bom Samaritano',
        role: 'Estrangeiro Compassivo',
        clueText: 'Sentiu profunda compaixão, tratou as feridas e levou o forasteiro na sua montada.'
      },
      P: {
        name: 'Estalajadeiro',
        role: 'Dono da Estalagem',
        clueText: 'Aceitou o dinheiro e cuidou do hóspede seguindo as instruções do samaritano.'
      }
    },
    clues: {
      c1: {
        text: 'Um viajante foi assaltado, despojado e abandonado meio morto no perigoso caminho para Jericó.',
        narrative: 'O homem assaltado jazia sem forças nas pedras do desfiladeiro.'
      },
      c2: {
        text: 'Dois religiosos do templo passaram ao largo para não se contaminarem e perderem a sua pureza ritual.',
        narrative: 'O sacerdote e o levita passaram para o outro lado do caminho com passo apressado.'
      },
      c3: {
        text: 'Um estrangeiro de um povo inimigo aproximou-se, sentiu compaixão e ligou-lhe as feridas com azeite e vinho.',
        narrative: 'O bom samaritano rompeu o ódio sectário para socorrer o caído.'
      },
      c4: {
        text: 'O estrangeiro levou-o para uma estalagem na sua própria montada, para passar a noite a cuidar dele.',
        narrative: 'O samaritano velou toda a noite junto à cama da estalagem.'
      },
      c5: {
        text: 'Ao partir, o salvador pagou dois denários ao dono da estalagem, comprometendo-se a cobrir qualquer despesa extra.',
        narrative: 'O estalajadeiro recebeu a caução em prata antes da alvorada.'
      }
    }
  },

  // DESAFIO 005-NT: El Deudor Despiadado -> O Devedor Implacável
  '005-NT': {
    nombre: 'O Devedor Implacável',
    categoria: 'Desfechos de histórias e parábolas',
    citasBiblicas: 'Mateus 18, 23-35',
    textoBiblicoClave: 'O senhor, indignado, entregou-o aos carrascos até pagar toda a dívida. Assim também vos tratará o meu Pai celeste, se cada um de vós não perdoar de coração ao seu irmão.',
    contextoTeologico: 'A parábola aborda a exigência cristã do perdão comunitário. A Fé Adulta insiste em que o perdão gratuito que Deus oferece ao ser humano se anula a si mesmo se o ser humano não se tornar canal desse perdão para os outros.',
    solucionExplicacion: 'Na parábola do servo sem compaixão, um rei perdoa uma enorme dívida ao seu servo. Este, por sua vez, recusa perdoar uma dívida minúscula a um companheiro. O rei, ao saber disso, castiga-o severamente pela sua falta de misericórdia.',
    storyIntro: 'Um homem é salvo da ruína total pela infinita generosidade do seu senhor. Logo a seguir, arruína a sua própria salvação ao estrangular um subordinado por um punhado de moedas.',
    epilogue: 'Justiça divina inexorável! A falta de misericórdia anulou o perdão recebido. O rei entregou o devedor implacável à prisão de tormento até pagar o último cêntimo da sua dívida infinita.',
    subtitle: 'Desfechos de histórias e parábolas · Mateus 18 · 5x5',
    badge: 'O DEVEDOR IMPLACÁVEL · 5x5',
    rooms: {
      trono_cuentas: {
        name: 'Sala do Trono e Ajuste de Contas',
        shortName: 'Trono Contas',
        description: 'Audiência real onde se perdoou a dívida astronómica de dez mil talentos.'
      },
      callejon_ahorcamiento: {
        name: 'Viela do Agarrão',
        shortName: 'Viela Agarrão',
        description: 'Lugar onde o funcionário agarrou o companheiro pelo pescoço, exigindo-lhe os cem denários.'
      },
      hogar_familia: {
        name: 'Casa e Família do Servo',
        shortName: 'Casa Servo',
        description: 'Morada que esteve prestes a ser vendida, com mulher e filhos, para pagar a dívida.'
      },
      prision_deudores: {
        name: 'Prisão Pública de Devedores',
        shortName: 'Prisão Devedores',
        description: 'Masmorra onde foi lançado o companheiro sem que ouvissem os seus idênticos pedidos de paciência.'
      },
      camara_verdugos: {
        name: 'Aposento dos Carrascos',
        shortName: 'Câmara Carrascos',
        description: 'Recinto de castigo onde o rei entregou o homem ingrato depois de revogar a sua clemência.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Papiro de Dez Mil Talentos',
        description: 'Quantia impagável perdoada generosamente pelo soberano compassivo.'
      },
      '2,2': {
        name: 'Bolsa de Cem Denários',
        description: 'Quantia insignificante pela qual o primeiro servo estrangulou o seu próximo.'
      },
      '4,4': {
        name: 'Grilhetas dos Carrascos',
        description: 'Correntes com que o servo sem compaixão foi definitivamente aprisionado.'
      }
    },
    suspects: {
      R: {
        name: 'O Rei Magnânimo',
        role: 'Soberano e Credor',
        clueText: 'Comoveu-se com o choro do seu funcionário e perdoou-lhe toda a dívida.'
      },
      D1: {
        name: 'Primeiro Servo',
        role: 'Devedor Implacável',
        clueText: 'Recebeu o perdão real, mas agarrou o companheiro pelo pescoço dizendo: «Paga o que deves».'
      },
      D2: {
        name: 'Segundo Servo',
        role: 'Companheiro Encarcerado',
        clueText: 'Ajoelhou-se suplicando com as mesmas palavras: «Tem paciência comigo e pagar-te-ei tudo».'
      },
      E: {
        name: 'Esposa do Primeiro Servo',
        role: 'Família Resgatada',
        clueText: 'Ia ser vendida como escrava com os filhos, segundo a primeira ordem do rei.'
      },
      V: {
        name: 'O Carrasco',
        role: 'Carcereiro do Tormento',
        clueText: 'Recebeu ordem de não libertar o devedor iníquo até ele pagar o último talento.'
      }
    },
    clues: {
      c1: {
        text: 'Um monarca perdoou a um dos seus altos funcionários uma dívida impagável de dez mil talentos por pura compaixão.',
        narrative: 'O Rei ouviu a súplica do Primeiro Servo e rasgou a promissória.'
      },
      c2: {
        text: 'O funcionário perdoado saiu e encontrou um companheiro que lhe devia a ridícula quantia de cem denários.',
        narrative: 'O Primeiro Servo intercetou o Segundo Servo na viela.'
      },
      c3: {
        text: 'Apesar das súplicas idênticas do companheiro, o funcionário recusou-se a perdoar e mandou-o para a prisão.',
        narrative: 'O Segundo Servo implorava clemência, mas foi arrastado para o calabouço.'
      },
      c4: {
        text: 'Outros empregados viram a injustiça e correram a informar o monarca do sucedido.',
        narrative: 'O palácio indignou-se ao saber da crueldade do servo perdoado.'
      },
      c5: {
        text: 'O monarca, enfurecido, anulou o perdão anterior e entregou o funcionário implacável aos carrascos.',
        narrative: 'O Carrasco prendeu o Primeiro Servo por ordem irrefutável do soberano.'
      }
    }
  },

  // DESAFIO 008-NT: El Sicómoro de Jericó -> O Sicómoro de Jericó
  '008-NT': {
    nombre: 'O Sicómoro de Jericó',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Lucas 19, 1-10',
    textoBiblicoClave: 'Ao chegar àquele lugar, Jesus levantou os olhos e disse-lhe: «Zaqueu, desce depressa, porque hoje tenho de ficar em tua casa». Ele desceu a toda a pressa e recebeu-o cheio de alegria.',
    contextoTeologico: 'A história ilustra a iniciativa salvífica de Deus («o Filho do Homem veio procurar e salvar o que estava perdido»). Teologicamente, a autêntica conversão de Zaqueu não é apenas espiritual: implica uma justiça restitutiva radical dos bens económicos.',
    solucionExplicacion: 'Zaqueu, chefe dos publicanos e de baixa estatura, subiu a um sicómoro para ver Jesus. Jesus pediu-lhe que descesse para ficar em sua casa. Perante as críticas do povo, Zaqueu converteu-se e prometeu devolver o quádruplo do que tinha roubado e dar metade dos seus bens aos pobres.',
    storyIntro: 'Um alto funcionário corrupto sobe a uma árvore, fugindo da multidão, para espreitar o profeta do momento. Para surpresa de todos, o profeta convida-se para sua casa, provocando a indignação da cidade e a salvação do corrupto.',
    epilogue: 'A salvação chegou a esta casa! Zaqueu desceu do sicómoro com imensa alegria, repartiu metade da sua fortuna pelos necessitados e restituiu com abundância tudo o que tinha defraudado.',
    subtitle: 'Descoberta de ações ocultas · Lucas 19 · 5x5',
    badge: 'O SICÓMORO DE JERICÓ · 5x5',
    rooms: {
      copa_sicomoro: {
        name: 'Ramos Altos do Sicómoro',
        shortName: 'Copa Sicómoro',
        description: 'Copa frondosa sobre o caminho onde o homem pequeno trepou para ultrapassar a barreira da multidão.'
      },
      calzada_multitud: {
        name: 'Calçada Principal de Jericó',
        shortName: 'Calçada Jericó',
        description: 'Avenida apinhada de peregrinos e vizinhos curiosos que apertavam o Mestre.'
      },
      'mansión_zaqueo': {
        name: 'Mansão do Chefe dos Cobradores',
        shortName: 'Mansão Zaqueu',
        description: 'Residência opulenta onde se serviu o banquete e se selou o pacto de restituição.'
      },
      mesa_tributos: {
        name: 'Repartição de Taxas Romanas',
        shortName: 'Repartição Taxas',
        description: 'Posto fiscal onde os publicanos cobravam as portagens e a alfândega sobre o bálsamo de Jericó.'
      },
      barrio_menesterosos: {
        name: 'Viela dos Desfavorecidos',
        shortName: 'Viela Pobres',
        description: 'Bairro humilde que beneficiaria da doação de metade dos bens de Zaqueu.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Tronco Robusto do Sicómoro',
        description: 'Árvore providencial plantada à beira da calçada de passagem obrigatória.'
      },
      '2,0': {
        name: 'Balança das Moedas Defraudadas',
        description: 'Instrumento com que Zaqueu cobrava sobretaxas aos comerciantes.'
      },
      '4,4': {
        name: 'Cofre de Metade dos Bens',
        description: 'Tesouro aberto com generosidade para socorrer os necessitados da região.'
      }
    },
    suspects: {
      J: {
        name: 'Jesus',
        role: 'O Mestre da Galileia',
        clueText: 'Levantou os olhos para os ramos da árvore e chamou Zaqueu pelo seu próprio nome.'
      },
      Z: {
        name: 'Zaqueu',
        role: 'Chefe dos Publicanos de Jericó',
        clueText: 'Desceu do sicómoro e foi repartir metade dos seus bens pelos pobres do bairro.'
      },
      M1: {
        name: 'Primeiro Murmurador',
        role: 'Fariseu Escandalizado',
        clueText: 'Criticou abertamente, dizendo: «Foi hospedar-se em casa de um pecador público».'
      },
      M2: {
        name: 'Segundo Murmurador',
        role: 'Vizinho Indignado',
        clueText: 'Recordava com rancor os impostos abusivos cobrados pela administração de Zaqueu.'
      },
      P: {
        name: 'Pobre de Jericó',
        role: 'Beneficiário da Restituição',
        clueText: 'Receberá o quádruplo do que foi defraudado e metade da fortuna do publicano convertido.'
      }
    },
    clues: {
      c1: {
        text: 'Um homem muito rico, chefe dos cobradores de impostos, queria ver quem era o Mestre que passava por Jericó.',
        narrative: 'Zaqueu procurava na multidão o rosto do profeta de Nazaré.'
      },
      c2: {
        text: 'Por ser de baixa estatura e por causa da grande multidão, era-lhe impossível consegui-lo a partir do chão.',
        narrative: 'A massa de curiosos tapava por completo o campo de visão do publicano.'
      },
      c3: {
        text: 'O homem correu à frente e subiu a um sicómoro para O poder ver do alto.',
        narrative: 'Zaqueu trepou aos ramos altos sem se importar com o ridículo.'
      },
      c4: {
        text: 'Ao chegar ao local, o Mestre levantou os olhos e pediu-lhe que descesse depressa, porque ia hospedar-se em sua casa.',
        narrative: 'Jesus surpreendeu a multidão dirigindo-se à árvore.'
      },
      c5: {
        text: 'Os presentes murmuraram escandalizados porque o Mestre fora hospedar-se em casa de um pecador público.',
        narrative: 'Os dois murmuradores e o povo criticavam a escolha do Mestre.'
      }
    }
  },

  // DESAFIO 009-NT: El Banquete del Perdón -> O Banquete do Perdão
  '009-NT': {
    nombre: 'O Banquete do Perdão',
    categoria: 'Desfechos de histórias e parábolas',
    citasBiblicas: 'Lucas 15, 11-32',
    textoBiblicoClave: 'O pai disse-lhe: «Filho, tu estás sempre comigo e tudo o que é meu é teu; mas era preciso fazer festa e alegrar-nos, porque este teu irmão estava morto e voltou à vida...»',
    contextoTeologico: 'Conhecida na exegese como «a parábola do Pai Misericordioso», retrata um Deus cujo amor rompe as lógicas jurídicas do mérito (representadas pelo irmão mais velho). É uma resposta contundente de Jesus aos fariseus que criticavam o facto de Ele acolher os pecadores.',
    solucionExplicacion: 'É a parábola do Filho Pródigo. O filho mais novo esbanja a herança e volta arrependido; o pai perdoa-lhe incondicionalmente e faz uma festa. O filho mais velho representa os religiosos rigorosos, que recusam aceitar a misericórdia imerecida do pai.',
    storyIntro: 'Um filho despreza a família, foge com a sua parte do património e acaba na miséria mais absoluta. Quando regressa para sobreviver como jornaleiro, encontra uma festa que enfurece o filho leal que nunca partiu.',
    epilogue: 'O anel no dedo e as sandálias nos pés! O pai saiu a suplicar ao irmão mais velho que entrasse para partilhar a alegria: «Este teu irmão estava perdido e foi encontrado».',
    subtitle: 'Desfechos de histórias e parábolas · Lucas 15 · 5x5',
    badge: 'O BANQUETE DO PERDÃO · 5x5',
    rooms: {
      umbral_paterno: {
        name: 'Caminho do Regresso e Abraço do Pai',
        shortName: 'Caminho Abraço',
        description: 'Limite da propriedade onde o pai viu chegar o rapaz andrajoso e correu ao seu encontro.'
      },
      salon_banquete: {
        name: 'Sala do Banquete do Vitelo Gordo',
        shortName: 'Sala Banquete',
        description: 'Grande sala de jantar enfeitada com música, danças e a melhor túnica reservada para o filho restituído.'
      },
      campo_labranza: {
        name: 'Campos de Lavoura do Primogénito',
        shortName: 'Campos Lavoura',
        description: 'Terras de cultivo de onde o filho mais velho regressava exausto ao fim da tarde.'
      },
      pocilga_algarrobas: {
        name: 'País Distante e Pocilga dos Porcos',
        shortName: 'Pocilga Porcos',
        description: 'Lugar de humilhação extrema onde o jovem desejou saciar-se com as alfarrobas dos animais impuros.'
      },
      cocina_sirvientes: {
        name: 'Pavilhão dos Servos e Jornaleiros',
        shortName: 'Pavilhão Servos',
        description: 'Aposento onde os trabalhadores tinham pão em abundância enquanto o mais novo morria de fome.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Alfarrobas dos Porcos',
        description: 'Comida dos animais que ninguém no país distante queria dar ao faminto.'
      },
      '2,2': {
        name: 'Anel de Ouro e Melhor Túnica',
        description: 'Peças de honra postas ao filho descalço, restituindo-lhe a dignidade familiar.'
      },
      '4,4': {
        name: 'Vitelo Gordo do Banquete',
        description: 'Iguaria de festa sacrificada para celebrar o regresso à vida do irmão perdido.'
      }
    },
    suspects: {
      P: {
        name: 'O Pai',
        role: 'Progenitor Misericordioso',
        clueText: 'Correu comovido a abraçar o filho mais novo e saiu ao campo a pedir ao mais velho que entrasse.'
      },
      HM: {
        name: 'Filho Mais Novo',
        role: 'O Filho Pródigo Arrependido',
        clueText: 'Reconheceu o seu erro: «Pai, pequei contra o céu e contra ti; já não mereço ser chamado teu filho».'
      },
      MY: {
        name: 'Filho Mais Velho',
        role: 'Irmão Escrupuloso e Indignado',
        clueText: 'Recusou-se a festejar, alegando que nunca desobedeceu a uma ordem e nunca lhe deram um cabrito.'
      },
      C: {
        name: 'O Criado',
        role: 'Servo de Confiança',
        clueText: 'Informou o irmão mais velho de que o irmão tinha voltado são e salvo e por isso havia festa.'
      },
      A: {
        name: 'Amigo do Filho Mais Velho',
        role: 'Companheiro de Trabalho',
        clueText: 'Testemunha do trabalho fiel nos campos durante os anos de ausência do mais novo.'
      }
    },
    clues: {
      c1: {
        text: 'Um jovem exigiu a herança antecipadamente e esbanjou-a num país distante, levando uma vida desregrada.',
        narrative: 'O filho mais novo abandonou a casa paterna carregado de prata.'
      },
      c2: {
        text: 'Quando chegou uma fome, o jovem acabou por invejar as alfarrobas dos porcos de que tomava conta.',
        narrative: 'O filho mais novo caiu na maior indigência entre os porcos.'
      },
      c3: {
        text: 'Arrependido por causa da fome, decidiu voltar a casa para pedir ao pai trabalho como jornaleiro.',
        narrative: 'Abriu o coração e empreendeu, descalço, o caminho de regresso.'
      },
      c4: {
        text: 'O pai viu-o ao longe, correu a abraçá-lo e organizou um grande banquete com um vitelo gordo.',
        narrative: 'O Pai mandou o Criado trazer a melhor túnica e preparar o festim.'
      },
      c5: {
        text: 'O irmão mais velho, ao voltar do campo e ouvir a música do banquete, recusou-se a entrar por indignação e ciúme.',
        narrative: 'O filho mais velho e o seu amigo ouviram os cânticos com perplexidade e irritação.'
      }
    }
  },

  // DESAFIO 002-HCH: Huida por la Muralla -> Fuga pela Muralha
  '002-HCH': {
    nombre: 'Fuga pela Muralha',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Atos 9, 23-25',
    textoBiblicoClave: 'Mas os seus discípulos pegaram nele de noite e desceram-no pela muralha, metido num cesto.',
    contextoTeologico: 'Mostra a vulnerabilidade dos primeiros apóstolos. O Vaticano sublinha que a fraqueza de Paulo é o lugar onde se manifesta o poder de Deus: foge escondido como um criminoso para poder continuar a evangelizar.',
    solucionExplicacion: 'Saulo (Paulo) fugiu de Damasco porque os judeus e o governador o queriam matar. Os seus discípulos meteram-no num grande cesto e desceram-no de noite pela muralha da cidade para que escapasse.',
    storyIntro: 'Um antigo perseguidor convertido em pregador está encurralado numa cidade amuralhada. O governador mandou vigiar todas as portas dia e noite para o assassinar, mas o pregador desaparece da cidade sem passar por nenhuma porta.',
    epilogue: 'Evacuado no silêncio da noite! Saulo desceu pela corda suspenso no cesto de vime e conseguiu fugir para Jerusalém, salvando a vida para continuar a sua missão entre os gentios.',
    subtitle: 'Descoberta de ações ocultas · Atos 9 · 5x5',
    badge: 'FUGA PELA MURALHA · 5x5',
    rooms: {
      puerta_ciudad: {
        name: 'Portas Fortificadas de Damasco',
        shortName: 'Portas Damasco',
        description: 'Acessos fortemente guardados dia e noite pelas sentinelas do rei Aretas.'
      },
      ventana_muralla: {
        name: 'Janela Alta no Pano da Muralha',
        shortName: 'Janela Muralha',
        description: 'Abertura sobre o adarve de onde se desceu o cesto com cordas de cânhamo.'
      },
      casa_refugio: {
        name: 'Casa Clandestina dos Discípulos',
        shortName: 'Casa Refúgio',
        description: 'Casa onde Saulo permaneceu escondido enquanto se preparava o plano de fuga.'
      },
      camino_exterior: {
        name: 'Fosso e Campos Exteriores de Damasco',
        shortName: 'Campos Exteriores',
        description: 'Terreno aberto, na penumbra, por onde o apóstolo correu depois de tocar o chão.'
      },
      calle_derecha: {
        name: 'Rua Chamada Direita',
        shortName: 'Rua Direita',
        description: 'Via principal onde Saulo recuperou a vista antes de ser espiado pelos seus adversários.'
      }
    },
    blockedObjects: {
      '0,2': {
        name: 'Grande Cesto de Vime',
        description: 'Cesto usado para transportar provisões, no qual Saulo se meteu.'
      },
      '2,0': {
        name: 'Corda Forte de Cânhamo',
        description: 'Corda grossa com que os discípulos aguentaram o peso do fugitivo.'
      },
      '4,4': {
        name: 'Espada das Sentinelas',
        description: 'Armas dos guardas postados inutilmente nos portões principais.'
      }
    },
    suspects: {
      S: {
        name: 'Saulo (Paulo)',
        role: 'Pregador Perseguido',
        clueText: 'Fugiu no cesto através do muro exterior sem que as sentinelas dessem por isso.'
      },
      G: {
        name: 'Governador de Aretas',
        role: 'Etnarca de Damasco',
        clueText: 'Selou todas as saídas da muralha com patrulhas armadas para capturar o apóstolo.'
      },
      GD: {
        name: 'Guarda da Cidade',
        role: 'Sentinela de Serviço',
        clueText: 'Vigiava as portas dia e noite sem suspeitar da saída pelo pano de pedra.'
      },
      D1: {
        name: 'Primeiro Discípulo',
        role: 'Salvador Fiel',
        clueText: 'Segurou as pontas da corda, descendo o cesto com extremo cuidado.'
      },
      D2: {
        name: 'Segundo Discípulo',
        role: 'Companheiro Conspirador',
        clueText: 'Ajudou Saulo a entrar no cesto e verificou que ninguém patrulhava ao pé da muralha.'
      }
    },
    clues: {
      c1: {
        text: 'O protagonista tinha mudado radicalmente de crenças, ganhando o ódio dos líderes locais.',
        narrative: 'Saulo proclamava Jesus com fervor nas sinagogas de Damasco.'
      },
      c2: {
        text: 'As autoridades da cidade de Damasco fecharam todas as portas para o capturar e matar.',
        narrative: 'O Governador de Aretas colocou a guarda em cada acesso.'
      },
      c3: {
        text: 'Um grupo de seguidores leais decidiu agir a coberto da escuridão para o salvar.',
        narrative: 'Os dois discípulos idealizaram uma arriscada rota alternativa.'
      },
      c4: {
        text: 'Usaram uma abertura ou janela situada na própria muralha da cidade.',
        narrative: 'A janela dava diretamente para os campos exteriores, fora do alcance da guarda.'
      },
      c5: {
        text: 'O fugitivo foi metido num grande cesto de vime e descido lentamente para o exterior.',
        narrative: 'Saulo tocou terra firme e fugiu na noite para a liberdade.'
      }
    }
  },

  // DESAFIO 004-HCH: El Precio del Espíritu -> O Preço do Espírito
  '004-HCH': {
    nombre: 'O Preço do Espírito',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Atos 8, 14-24',
    textoBiblicoClave: 'Pedro respondeu-lhe: «Pereça o teu dinheiro contigo, se julgas que o dom de Deus se compra com dinheiro!»',
    contextoTeologico: 'Dá origem ao termo «simonia». O Magistério condena categoricamente a mercantilização do sagrado. A graça e os dons do Espírito são puramente gratuitos e não podem submeter-se à lógica do mercado nem do poder.',
    solucionExplicacion: 'Simão, o Mago, tentou comprar com dinheiro aos apóstolos Pedro e João, na Samaria, o poder de conferir o Espírito Santo. Pedro repreendeu-o duramente, dando origem ao termo «simonia».',
    storyIntro: 'Um ilusionista famoso, espantado com os poderes reais de dois visitantes, oferece-lhes em segredo uma grande quantia de dinheiro. Em vez de aceitarem o suborno, os visitantes amaldiçoam-no a ele e ao seu dinheiro, temendo pela sua alma.',
    epilogue: '«O teu coração não é reto diante de Deus»! Simão, o Mago, aterrado com as severas palavras de Pedro, pediu: «Orai vós por mim ao Senhor, para que nada disto me aconteça».',
    subtitle: 'Descoberta de ações ocultas · Atos 8 · 5x5',
    badge: 'O PREÇO DO ESPÍRITO · 5x5',
    rooms: {
      asamblea_samaria: {
        name: 'Lugar da Imposição das Mãos',
        shortName: 'Imposição Mãos',
        description: 'Recinto público onde os convertidos recebiam o dom do Espírito Santo pela oração dos apóstolos.'
      },
      estrado_ilusionista: {
        name: 'Plataforma dos Prodígios de Simão',
        shortName: 'Estrado Mago',
        description: 'Lugar onde Simão costumava deslumbrar o povo, fazendo-se passar pela grande força de Deus.'
      },
      camara_secreta: {
        name: 'Recanto da Oferta Escondida de Prata',
        shortName: 'Recanto Suborno',
        description: 'Canto reservado onde o mago fez deslizar a bolsa de dinheiro diante dos apóstolos.'
      },
      bautisterio_felipe: {
        name: 'Águas do Batismo do Diácono',
        shortName: 'Águas Filipe',
        description: 'Poças onde Filipe batizou os samaritanos depois de lhes anunciar o evangelho do Reino.'
      },
      plaza_pueblo: {
        name: 'Praça Principal da Cidade da Samaria',
        shortName: 'Praça Samaria',
        description: 'Ágora animada onde os cidadãos celebravam com grande júbilo as libertações e curas.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Bolsa de Prata Oferecida',
        description: 'Moedas com que Simão pretendeu comprar o poder de transmitir o Espírito Santo.'
      },
      '2,1': {
        name: 'Óleo e Cinzas da Imposição',
        description: 'Sinal visível da bênção apostólica derramada sobre os novos crentes.'
      },
      '4,0': {
        name: 'Livro de Feitiçarias Antigas',
        description: 'Manuscritos de artes ocultas com que o mago enganava a multidão da Samaria.'
      }
    },
    suspects: {
      P: {
        name: 'Pedro',
        role: 'Apóstolo Líder',
        clueText: 'Repreendeu com severidade o feiticeiro: «Vejo-te em fel de amargura e em laços de iniquidade».'
      },
      JN: {
        name: 'João',
        role: 'Apóstolo Testemunha',
        clueText: 'Impunha as mãos com Pedro para que os samaritanos recebessem o Espírito Santo.'
      },
      SM: {
        name: 'Simão, o Mago',
        role: 'Ilusionista Ganancioso',
        clueText: 'Ofereceu dinheiro aos apóstolos dizendo: «Dai-me também a mim este poder».'
      },
      F: {
        name: 'Filipe',
        role: 'Diácono Evangelizador',
        clueText: 'Tinha pregado primeiro na Samaria, expulsando espíritos e curando paralíticos.'
      },
      CS: {
        name: 'Cidadão da Samaria',
        role: 'Novo Crente',
        clueText: 'Tinha abandonado os feitiços de Simão para receber com simplicidade a fé e o batismo.'
      }
    },
    clues: {
      c1: {
        text: 'O ilusionista tinha-se batizado ao ver os milagres de um diácono, mas ainda tinha uma mentalidade comercial.',
        narrative: 'Simão continuava deslumbrado com os prodígios que Filipe realizava.'
      },
      c2: {
        text: 'Dois líderes principais da Igreja chegaram à cidade para impor as mãos aos novos crentes.',
        narrative: 'Pedro e João vieram de Jerusalém para orar pela comunidade samaritana.'
      },
      c3: {
        text: 'O ilusionista observou que o Espírito Santo era transmitido pelo gesto da imposição das mãos.',
        narrative: 'Simão calculou de imediato o imenso valor financeiro de possuir tal faculdade.'
      },
      c4: {
        text: 'O ilusionista ofereceu dinheiro aos líderes para comprar o poder de transmitir o Espírito.',
        narrative: 'Simão estendeu a bolsa de prata, procurando fechar um negócio.'
      },
      c5: {
        text: 'O líder principal respondeu-lhe que o seu dinheiro perecesse com ele por tentar comprar o dom de Deus.',
        narrative: 'Pedro desmascarou o pecado de simonia diante de toda a assembleia reunida.'
      }
    }
  },

  // DESAFIO 008-HCH: La Mordedura del Fuego -> A Mordedura do Fogo
  '008-HCH': {
    nombre: 'A Mordedura do Fogo',
    categoria: 'Desfechos de histórias e parábolas',
    citasBiblicas: 'Atos 28, 1-6',
    textoBiblicoClave: 'Paulo sacudiu o réptil para o fogo e não sofreu mal nenhum. (...) Ao verem que nada de anormal lhe acontecia, mudaram de opinião e começaram a dizer que era um deus.',
    contextoTeologico: 'O Vaticano sublinha que esta passagem desmente a mentalidade pagã do «castigo divino» iminente (carma). Deus protege o seu enviado para que cumpra a sua missão evangelizadora final em Roma, realizando a promessa apostólica.',
    solucionExplicacion: 'Depois de naufragar em Malta, Paulo apanhava lenha para o fogo e foi mordido por uma víbora. Os ilhéus pensaram que era um culpado a ser castigado, mas ao verem que não morria e sacudia a serpente para o fogo, julgaram que era um deus.',
    storyIntro: 'Um grupo de náufragos sobrevive a uma tempestade e é acolhido numa ilha. Enquanto um dos sobreviventes ajuda a acender o fogo, uma criatura letal agarra-se ao seu braço. Os nativos esperam vê-lo cair morto, mas a sua reação desafia toda a lógica.',
    epilogue: 'Imune ao veneno da víbora! Paulo continuou a curar os doentes de Malta antes de zarpar definitivamente rumo a Roma sob a providência divina.',
    subtitle: 'Desfechos de histórias e parábolas · Atos 28 · 5x5',
    badge: 'A MORDEDURA DO FOGO · 5x5',
    rooms: {
      playa_naufragio: {
        name: 'Praia Rochosa do Naufrágio em Malta',
        shortName: 'Praia Malta',
        description: 'Costa onde as 276 pessoas do barco chegaram com vida depois da tempestade.'
      },
      gran_hoguera: {
        name: 'Grande Fogueira Hospitaleira dos Nativos',
        shortName: 'Grande Fogueira',
        description: 'Fogo aceso pelos habitantes do lugar para aliviar a chuva torrencial e o frio gelado.'
      },
      matorral_sarmientos: {
        name: 'Mato de Ramos Secos e Vides',
        shortName: 'Mato Lenha',
        description: 'Espinhal de onde o apóstolo apanhou o feixe de lenha onde dormia a víbora.'
      },
      residencia_publio: {
        name: 'Propriedades do Chefe da Ilha (Públio)',
        shortName: 'Quinta Públio',
        description: 'Mansão onde os náufragos receberam generosa hospedagem durante três dias.'
      },
      campamento_escolta: {
        name: 'Posto de Custódia do Centurião Júlio',
        shortName: 'Posto Centurião',
        description: 'Zona de controlo onde os soldados vigiavam para que nenhum prisioneiro fugisse.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Feixe de Lenha Seca Apanhado',
        description: 'Vides amontoadas por Paulo para alimentar as chamas do fogo.'
      },
      '2,2': {
        name: 'Víbora Venenosa Calcinada',
        description: 'Réptil letal sacudido com serenidade para as brasas ardentes.'
      },
      '4,4': {
        name: 'Âncoras Soltas do Navio',
        description: 'Ferros cortados e deixados no mar antes de encalhar no areal.'
      }
    },
    suspects: {
      P: {
        name: 'Paulo',
        role: 'Apóstolo Imune',
        clueText: 'Sacudiu a víbora para o fogo com toda a tranquilidade e não sofreu inchaço nem dano algum.'
      },
      J: {
        name: 'Júlio, o Centurião',
        role: 'Oficial da Coorte Augusta',
        clueText: 'Tratou Paulo com humanidade e impediu que os soldados matassem os presos.'
      },
      PU: {
        name: 'Públio',
        role: 'Governador de Malta',
        clueText: 'Acolheu com honras os náufragos, cujo líder curou o seu pai doente com febres.'
      },
      HM: {
        name: 'Habitante de Malta',
        role: 'Nativo da Ilha',
        clueText: 'Pensou primeiro que Paulo era um homicida fugitivo e depois mudou de opinião, dizendo que era um deus.'
      },
      PA: {
        name: 'Preso Anónimo',
        role: 'Náufrago Sobrevivente',
        clueText: 'Tremia junto à fogueira, agradecido por ter chegado à costa agarrado a tábuas.'
      }
    },
    clues: {
      c1: {
        text: 'O barco que levava os prisioneiros para Roma naufragou, mas todos chegaram a salvo a uma ilha desconhecida.',
        narrative: 'Júlio e os soldados verificaram que todos os náufragos estavam ilesos na praia.'
      },
      c2: {
        text: 'Os nativos da ilha acenderam uma grande fogueira para abrigar os náufragos da chuva e do frio.',
        narrative: 'O Habitante de Malta e os seus vizinhos mostraram uma hospitalidade extraordinária.'
      },
      c3: {
        text: 'Um prisioneiro estava a apanhar um molho de lenha seca quando uma víbora, fugindo do calor, lhe mordeu a mão.',
        narrative: 'Paulo sentiu as presas do réptil agarradas aos dedos sobre as chamas.'
      },
      c4: {
        text: 'Os nativos, ao verem a víbora pendurada no seu braço, concluíram que o homem era um culpado castigado pelos deuses.',
        narrative: 'Os habitantes esperavam o desfecho fatal, atribuindo-o à justiça de Némesis.'
      },
      c5: {
        text: 'O prisioneiro limitou-se a sacudir a criatura para o fogo, sem sofrer qualquer dano.',
        narrative: 'Públio e o centurião contemplaram admirados o prodígio que inaugurou o acolhimento na ilha.'
      }
    }
  }
};
