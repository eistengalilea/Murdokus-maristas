import { RetoTraduccion } from './types';

export const RETOS_FACILES_HECHOS_GL: Record<string, RetoTraduccion> = {
  // RETO 002-HCH: Huida por la Muralla -> Fuxida pola Muralla
  '002-HCH': {
    nombre: 'Fuxida pola Muralla',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Feitos dos Apóstolos 9, 23-25',
    textoBiblicoClave: 'Pero os seus discípulos collérono de noite e baixárono pola muralla descolgándoo nunha cesta.',
    contextoTeologico: 'Amosa a vulnerabilidade dos primeiros apóstolos. O Vaticano sinala que a fraqueza de Paulo é o lugar onde se manifesta o poder de Deus, fuxindo agochado coma un criminal para poder seguir evanxelizando.',
    solucionExplicacion: 'Saulo (Paulo) fuxiu de Damasco porque as autoridades e o gobernador querían matalo. Os seus discípulos metérono nunha gran cesta e descolgárono de noite pola muralla da cidade para que escapase.',
    storyIntro: 'Un antigo perseguidor convertido en predicador atópase atrapado nunha cidade amurallada. O gobernador ordenou vixiar todas as portas día e noite para asasinalo, pero o predicador desaparece da cidade sen cruzar ningunha porta.',
    epilogue: '¡Evacuado no silencio da noite! Saulo descendeu pola corda suspendido no cesto de vimbio e logrou fuxir a Xerusalén, salvando a vida para continuar a súa misión entre os xentís.',
    subtitle: 'Descubrimento de accións ocultas · Feitos 9 · 5x5',
    badge: 'FUXIDA POLA MURALLA · 5x5',
    rooms: {
      puerta_ciudad: {
        name: 'Portas Fortificadas de Damasco',
        shortName: 'Portas Damasco',
        description: 'Accesos fortemente custodiados día e noite polos sentinelas do rei Aretas.'
      },
      ventana_muralla: {
        name: 'Xanela Alta no Parapeto da Muralla',
        shortName: 'Xanela Muralla',
        description: 'Abertura sobre o adarve desde onde se descolgou o cesto con cordas de cáñamo.'
      },
      casa_refugio: {
        name: 'Casa Clandestina dos Discípulos',
        shortName: 'Casa Refuxio',
        description: 'Fogar onde Saulo permaneceu oculto mentres se preparaba o plan de evasión.'
      },
      camino_exterior: {
        name: 'Foso e Campiña Exterior de Damasco',
        shortName: 'Campiña Exterior',
        description: 'Terreo aberto en penumbra polo que o apóstolo correu tras tocar o chan.'
      },
      calle_derecha: {
        name: 'Rúa Chamada Recta',
        shortName: 'Rúa Recta',
        description: 'Vía principal onde Saulo recuperou a vista antes de ser axexado polos seus adversarios.'
      }
    },
    blockedObjects: {
      '0,2': {
        name: 'Cesto de Vimbio Grande',
        description: 'Cesta empregada para transportar provisións na que se introduciu Saulo.'
      },
      '2,0': {
        name: 'Corda Forte de Cáñamo',
        description: 'Corda grosa coa que os discípulos sostiveron o peso do fuxitivo.'
      },
      '4,4': {
        name: 'Espada dos Sentinelas',
        description: 'Armas dos gardas apostados inutilmente nos portais principais.'
      }
    },
    suspects: {
      S: {
        name: 'Saulo (Paulo)',
        role: 'Predicador Perseguido',
        clueText: 'Evadido no cesto a través do muro exterior sen que os sentinelas o notasen.'
      },
      G: {
        name: 'Gobernador de Aretas',
        role: 'Etnarca de Damasco',
        clueText: 'Selou todas as saídas da muralla con patrullas armadas para capturar ao apóstolo.'
      },
      GD: {
        name: 'Garda da Cidade',
        role: 'Sentinela de Quenda',
        clueText: 'Vixiaba as portas día e noite sen sospeitar a saída polo muro de pedra.'
      },
      D1: {
        name: 'Primeiro Discípulo',
        role: 'Rescatador Fiel',
        clueText: 'Suxeitou os cabos da corda descolgando o cesto con extrema precaución.'
      },
      D2: {
        name: 'Segundo Discípulo',
        role: 'Compañeiro Conspirador',
        clueText: 'Axudou a Saulo a entrar no cesto e comprobou que ninguén patrullase ao pé da muralla.'
      }
    },
    clues: {
      c1: {
        text: 'O protagonista cambiara radicalmente as súas crenzas, gañando o odio dos líderes locais.',
        narrative: 'Saulo proclamaba con fervor a Xesús nas sinagogas de Damasco.'
      },
      c2: {
        text: 'As autoridades da cidade de Damasco pecharon todas as portas para capturalo e matalo.',
        narrative: 'O Gobernador de Aretas despregou á garda en cada acceso.'
      },
      c3: {
        text: 'Un grupo de seguidores leais decidiu actuar ao amparo da escuridade para salvalo.',
        narrative: 'Os dous discípulos idearon unha arriscada ruta alternativa.'
      },
      c4: {
        text: 'Empregaron unha abertura ou xanela situada na propia muralla da cidade.',
        narrative: 'A xanela daba directamente ao campo exterior fóra do alcance da garda.'
      },
      c5: {
        text: 'O fuxitivo foi introducido nun gran cesto de vimbio e descolgado amodo cara ao exterior.',
        narrative: 'Saulo tocou terra firme e escapou na noite cara á liberdade.'
      }
    }
  },

  // RETO 004-HCH: El Precio del Espíritu -> O Prezo do Espírito
  '004-HCH': {
    nombre: 'O Prezo do Espírito',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Feitos dos Apóstolos 8, 14-24',
    textoBiblicoClave: 'Pedro contestoulle: «Que os teus cartos perezan contigo, se cres que o don de Deus se compra con cartos!»',
    contextoTeologico: 'Dá orixe ao termo «simonía». O maxisterio condena tallantemente a mercantilización do sagrado. A graza e os dons do Espírito son puramente gratuítos e non poden someterse á lóxica do mercado nin ao poder.',
    solucionExplicacion: 'Simón o Mago intentou mercar con diñeiro o poder de conferir o Espírito Santo aos apóstolos Pedro e Xoán en Samaría. Pedro reprendeuo duramente, orixinando o termo «simonía».',
    storyIntro: 'Un famoso ilusionista, abraiado polos poderes reais de dous visitantes, ofrécelles unha gran cantidade de diñeiro en segredo. En lugar de aceptar o suborno, os visitantes maldíxeno xunto cos seus cartos, temendo pola súa alma.',
    epilogue: '¡«O teu corazón non é recto diante de Deus»! Simón o Mago, aterrado polas severas palabras de Pedro, rogou: «Orade vós por min ao Señor para que nada disto caia sobre min».',
    subtitle: 'Descubrimento de accións ocultas · Feitos 8 · 5x5',
    badge: 'O PREZO DO ESPÍRITO · 5x5',
    rooms: {
      asamblea_samaria: {
        name: 'Lugar de Imposición de Mans',
        shortName: 'Imposición Mans',
        description: 'Recinto público onde os convertidos recibían o don do Espírito Santo baixo a oración dos apóstolos.'
      },
      estrado_ilusionista: {
        name: 'Plataforma dos Prodixios de Simón',
        shortName: 'Estrado Mago',
        description: 'Lugar onde Simón adoitaba abraiarse ao pobo facéndose pasar pola gran forza de Deus.'
      },
      camara_secreta: {
        name: 'Recuncho da Oferta Oculta de Prata',
        shortName: 'Recuncho Suborno',
        description: 'Apartado reservado onde o mago deslizou a bolsa de caudais ante os apóstolos.'
      },
      bautisterio_felipe: {
        name: 'Augas do Bautismo do Diácono',
        shortName: 'Augas Filipe',
        description: 'Pozas onde Filipe bautizou aos samaritanos tras anunciarlles o evanxeo do Reino.'
      },
      plaza_pueblo: {
        name: 'Praza Maior da Cidade de Samaría',
        shortName: 'Praza Samaría',
        description: 'Ágora buliciosa onde os cidadáns celebraban con gran xúbilo as liberacións e curacións.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Bolsa de Prata Ofrecida',
        description: 'Moedas coas que Simón pretendeu mercar o poder de transmitir o Espírito Santo.'
      },
      '2,1': {
        name: 'Óleo e Cinzas da Imposición',
        description: 'Signo visíbel da bendición apostólica derramada sobre os novos crentes.'
      },
      '4,0': {
        name: 'Libro de Meigallos Antigos',
        description: 'Manuscritos de artes arcanas cos que o mago enganaba á multitude de Samaría.'
      }
    },
    suspects: {
      P: {
        name: 'Pedro',
        role: 'Apóstolo Líder',
        clueText: 'Reprendeu con severidade ao meigo: «En fel de amargura e prisión de maldade te vexo».'
      },
      JN: {
        name: 'Xoán',
        role: 'Apóstolo Testemuña',
        clueText: 'Impoñía as mans xunto a Pedro para que os samaritanos recibisen o Espírito Santo.'
      },
      SM: {
        name: 'Simón o Mago',
        role: 'Ilusionista Cobizoso',
        clueText: 'Ofreceu cartos aos apóstolos dicindo: «Dádeme a min tamén este poder».'
      },
      F: {
        name: 'Filipe',
        role: 'Diácono Evanxelizador',
        clueText: 'Predicara primeiro en Samaría expulsando espíritos e curando paralíticos.'
      },
      CS: {
        name: 'Cidadán de Samaría',
        role: 'Novo Crente',
        clueText: 'Abandonara os meigallos de Simón para recibir con sinxeleza a fe e o bautismo.'
      }
    },
    clues: {
      c1: {
        text: 'O ilusionista bautizárase ao ver os milagres dun diácono, pero aínda tiña unha mentalidade comercial.',
        narrative: 'Simón seguía abraiado os prodixios que realizaba Filipe.'
      },
      c2: {
        text: 'Dous líderes principais da igrexa chegaron á cidade para impoñer as mans aos novos crentes.',
        narrative: 'Pedro e Xoán chegaron desde Xerusalén para orar pola comunidade samaritana.'
      },
      c3: {
        text: 'O ilusionista observou que o Espírito Santo se transmitía mediante o xesto da imposición de mans.',
        narrative: 'Simón calculou de inmediato o inmenso valor financeiro de posuír tal facultade.'
      },
      c4: {
        text: 'O ilusionista ofreceu cartos aos líderes para mercar o poder de transmitir o Espírito.',
        narrative: 'Simón estendeu a bolsa de prata buscando pechar un trato pecuniario.'
      },
      c5: {
        text: 'O líder principal respondeulle que o seu diñeiro perecese con el por intentar mercar o don de Deus.',
        narrative: 'Pedro desenmascarou o pecado de simonía ante toda a asemblea reunida.'
      }
    }
  },

  // RETO 008-HCH: La Mordedura del Fuego -> A Mordedura do Lume
  '008-HCH': {
    nombre: 'A Mordedura do Lume',
    categoria: 'Desenlaces de historias e parábolas',
    citasBiblicas: 'Feitos dos Apóstolos 28, 1-6',
    textoBiblicoClave: 'Paulo sacudiu o réptil sobre o lume e non sufriu dano ningún. (...) Ao ver que non lle pasaba nada anormal, cambiaron de opinión e empezaron a dicir que era un deus.',
    contextoTeologico: 'O Vaticano sinala que esta pasaxe desminte a mentalidade pagá do «castigo divino» inminente (karma). Deus protexe ao seu enviado para que complete a súa misión evanxelizadora final en Roma, cumprindo a promesa apostólica.',
    solucionExplicacion: 'Tras naufragar en Malta, Paulo recollía leña para o lume e foi mordido por unha víbora. Os insulares pensaron que era un culpable castigado, pero ao ver que non morría e sacudía a serpe ao lume, creron que era un deus.',
    storyIntro: 'Un grupo de náufragos sobrevive a unha treboada e é acollido nunha illa. Mentres un dos superviventes axuda a acender o lume, unha besta letal aférrase ao seu brazo. Os nativos agardan velo caer morto, pero a súa reacción desafía toda lóxica.',
    epilogue: '¡Inmune ante o veleno da víbora! Paulo continuou curando aos enfermos de Malta antes de ceibar áncoras rumbo a Roma baixo a providencia divina.',
    subtitle: 'Desenlaces de historias e parábolas · Feitos 28 · 5x5',
    badge: 'A MORDEDURA DO LUME · 5x5',
    rooms: {
      playa_naufragio: {
        name: 'Praia Rochosa do Naufraxio en Malta',
        shortName: 'Praia Malta',
        description: 'Beira onde as 276 persoas do barco chegaron con vida tras a tempestade.'
      },
      gran_hoguera: {
        name: 'Gran Fogueira Hospitalaria dos Nativos',
        shortName: 'Gran Fogueira',
        description: 'Lume acendido polos lugareños para aliviar a choiva torrencial e o frío xeado.'
      },
      matorral_sarmientos: {
        name: 'Matorreira de Pólas Secas e Sarmiento',
        shortName: 'Matorreira Leña',
        description: 'Espiñento de onde o apóstolo colleu o feixe de leña no que durmía a víbora.'
      },
      residencia_publio: {
        name: 'Propiedades do Principal da Illa (Publio)',
        shortName: 'Finca Publio',
        description: 'Mansión onde os náufragos recibiron xeneroso hospedaxe durante tres días.'
      },
      campamento_escolta: {
        name: 'Posto de Custodia do Centurión Xulio',
        shortName: 'Posto Centurión',
        description: 'Zona de control onde os soldados coidaban de que ningún recluso escapase.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Feixe de Leña Seca Recollido',
        description: 'Sarmientos amontoados por Paulo para alimentar as lapas do lume.'
      },
      '2,2': {
        name: 'Víbora Venenosa Calcinada',
        description: 'Réptil letal sacudido con serenidade cara ás brasas ardentes.'
      },
      '4,4': {
        name: 'Áncoras Soltas do Navío',
        description: 'Ferros cortados e deixados no mar antes de encallar no areal.'
      }
    },
    suspects: {
      P: {
        name: 'Paulo',
        role: 'Apóstolo Inmune',
        clueText: 'Sacudiu a víbora ao lume con total tranquilidade e non sufriu inchazón nin dano ningún.'
      },
      J: {
        name: 'Xulio o Centurión',
        role: 'Oficial da Cohorte Augusta',
        clueText: 'Tratou humanamente a Paulo e evitou que os soldados desen morte aos presos.'
      },
      PU: {
        name: 'Publio',
        role: 'Gobernador de Malta',
        clueText: 'Acolleu con honras aos náufragos cuxo líder curou a seu pai enfermo de febres.'
      },
      HM: {
        name: 'Habitante de Malta',
        role: 'Nativo da Illa',
        clueText: 'Pensou primeiro que Paulo era un homicida fuxitivo e logo cambiou de opinión dicindo que era un deus.'
      },
      PA: {
        name: 'Preso Anónimo',
        role: 'Náufrago Supervivente',
        clueText: 'Tremía xunto á lumbre agradecido por ter alcanzado a costa sobre táboas.'
      }
    },
    clues: {
      c1: {
        text: 'O barco que levaba aos prisioneiros cara a Roma naufragou, pero todos chegaron a salvo a unha illa descoñecida.',
        narrative: 'Xulio e os soldados comprobaron que todos os náufragos estaban ilesos na praia.'
      },
      c2: {
        text: 'Os nativos da illa acenderon unha gran fogueira para abrigar aos náufragos da choiva e do frío.',
        narrative: 'O Habitante de Malta e os seus veciños demostraron unha hospitalidade extraordinaria.'
      },
      c3: {
        text: 'Un prisioneiro estaba recollendo un feixe de leña seca cando unha víbora, fuxindo da calor, trabou a súa man.',
        narrative: 'Paulo sentiu os dentes do réptil aferrados aos seus dedos sobre as lapas.'
      },
      c4: {
        text: 'Os nativos, ao ver á víbora colgando do seu brazo, concluíron que o home era un culpable castigado polos deuses.',
        narrative: 'Os lugareños agardaban o desenlace fatal atribuíndoo á xustiza divina.'
      },
      c5: {
        text: 'O prisioneiro simplemente sacudiu a besta cara ao lume sen sufrir ningún dano.',
        narrative: 'Publio e o centurión contemplaron admirados o prodixio que inaugurou a acollida na illa.'
      }
    }
  }
};
