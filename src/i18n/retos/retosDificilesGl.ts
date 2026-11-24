import { RetoTraduccion } from './types';

export const RETOS_DIFICILES_GL: Record<string, RetoTraduccion> = {
  // RETO 004: El Olor a Campo -> O Cheiro a Campo
  '004': {
    nombre: 'O Cheiro a Campo',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Xénese 27, 1-40',
    textoBiblicoClave: 'El achegouse e bicouno; e cheirou Isaac o cheiro dos seus vestidos, e bendíxoo dicindo: «Mira, o cheiro do meu fillo é coma o cheiro do campo que o Señor benceu».',
    contextoTeologico: 'Este pasaxe amosa como a providencia divina actúa a través das imperfeccións humanas. Fe Adulta salienta que, a pesar do engano urdido por Rebeca e Xacob, a promesa patriarcal avanza cara á súa culminación histórica.',
    solucionExplicacion: 'Xacob, animado pola súa nai Rebeca, suplantou ao seu irmán Esaú cubríndose os brazos con peles de cabrito e vestindo as roupas do primoxénito. Aproveitando a cegueira do seu pai Isaac, obtivo fraudulentamente a bendición.',
    storyIntro: 'Un ancián patriarca cego desexa bendicir ao seu fillo primoxénito cazador antes de morrer. A nai urde un engano audaz na cociña da tenda: o fillo menor vístese coas roupas perfumadas do seu irmán e cobre a súa pel lisa para enganar o tacto e o olfacto do pai.',
    epilogue: '¡O engano consumado polo tacto e o arrecendo! Isaac bendixo a Xacob crendo que era Esaú. Cando o cazador volveu do monte, só quedaba a amargura dun berro desesperado e o comezo dun longo exilio.',
    subtitle: 'Descubrimento de accións ocultas · Xénese 27 · 9x9',
    badge: 'O CHEIRO A CAMPO · 9x9',
    rooms: {
      tienda_isaac: {
        name: 'Tenda Patriarcal de Isaac',
        shortName: 'T. Isaac',
        description: 'Leito do ancián cego onde se consumou a bendición do orballo do ceo e a fartura da terra.'
      },
      cocina_rebeca: {
        name: 'Cociña e Tenda de Rebeca',
        shortName: 'Cociña Rebeca',
        description: 'Lugar onde a nai preparou a toda présa os dous cabritos tenros tal como a Isaac lle gustaban.'
      },
      campo_caza: {
        name: 'Montes de Caza de Esaú',
        shortName: 'Montes Caza',
        description: 'Estepa bravía onde o cazador peludo rastrexaba unha peza de caza para o seu pai.'
      },
      redil_cabritos: {
        name: 'Curral dos Cabritos',
        shortName: 'Curral',
        description: 'Cercado de onde Xacob escolleu axiña os dous mellores cabritos para o disfrace.'
      },
      tienda_esau: {
        name: 'Tenda de Armas de Esaú',
        shortName: 'T. Esaú',
        description: 'Estancia onde se gardaban as roupas de festa perfumadas co aroma agreste.'
      },
      tienda_judit: {
        name: 'Tenda das Esposas Hititas',
        shortName: 'T. Xudit',
        description: 'Aposentos de Xudit e Basemat, causa continua de amargura de espírito para Rebeca.'
      },
      pozo_beerseba: {
        name: 'Pozo Central de Beerxeba',
        shortName: 'Pozo Beerxeba',
        description: 'Abastecemento de auga do campamento onde se congregaban as serventas.'
      },
      majada_rebanos: {
        name: 'Cercado de Rabaños',
        shortName: 'Cercado',
        description: 'Ampliación de pastos vixiada polos pastores de confianza do clan.'
      },
      camino_haran: {
        name: 'Camiño de Fuxida a Harán',
        shortName: 'Camiño Harán',
        description: 'Ruta setentrional pola que Xacob emprendería o desterro para esquivar a ira fraterna.'
      }
    },
    blockedObjects: {
      '6,2': {
        name: 'Pozo de Beerxeba',
        description: 'Cisterna histórica onde xuraron alianza os antepasados.'
      },
      '0,2': {
        name: 'Prato de Guiso Saboroso',
        description: 'Guisado aromatizado cociñado por Rebeca imitando a caza do monte.'
      },
      '2,6': {
        name: 'Peles de Cabrito',
        description: 'Vélaro suave colocado sobre os brazos e a caluga do fillo menor.'
      },
      '4,4': {
        name: 'Manto con Fragrancia do Campo',
        description: 'Vestimenta de Esaú perfumada co cheiro dos campos regados por Deus.'
      },
      '6,0': {
        name: 'Arco e Carcaxe',
        description: 'Aparellos de caza levados polo primoxénito á espesura.'
      }
    },
    suspects: {
      I: {
        name: 'Isaac',
        role: 'Patriarca cego / Vítima da suplantación',
        clueText: 'No seu leito na Tenda Patriarcal.'
      },
      J: {
        name: 'Xacob',
        role: 'Fillo menor disfrazado / Usurpou a bendición',
        clueText: 'Na Tenda de Isaac a soas co seu pai apalpándolle as mans.'
      },
      R: {
        name: 'Rebeca',
        role: 'Nai estratega que artellou o plan',
        clueText: 'Na súa cociña dando as instrucións definitivas.'
      },
      E: {
        name: 'Esaú',
        role: 'Primoxénito peludo cazando no monte',
        clueText: 'De volta xunto ao curral dos cabritos tras rastrexar feras polos montes.'
      },
      U: {
        name: 'Xudit',
        role: 'Esposa hitita de Esaú',
        clueText: 'Xunto ao cercado dos rabaños de Esaú.'
      },
      B: {
        name: 'Basemat',
        role: 'Segunda esposa de Esaú',
        clueText: 'Agardando xunto ao pozo central de Beerxeba.'
      },
      C: {
        name: 'Cociñeira do clan',
        role: 'Serventa encargada de atizar o lume',
        clueText: 'No cercado dos rabaños, cargando a auga sacada do pozo central.'
      },
      P: {
        name: 'Pastor de Isaac',
        role: 'Coidador dos cabritos seleccionados',
        clueText: 'Guiando o gando polo camiño cara a Harán.'
      },
      K: {
        name: 'Cazador de Esaú',
        role: 'Compañeiro de rastrexo no campo',
        clueText: 'No paso cara ao Camiño de Harán.'
      }
    },
    clues: {
      c1: {
        text: 'O ancián patriarca quería outorgar a bendición antes de morrer ao seu primoxénito.'
      },
      c2: {
        text: 'A nai escoitou o plan e interveu para favorecer ao seu fillo menor predilecto.'
      },
      c3: {
        text: 'O fillo maior saíu ao campo a cazar para preparar a vianda solicitada.'
      },
      c4: {
        text: 'O menor temía ser descuberto por ser espelido e foi cuberto con peles de cabrito.'
      },
      c5: {
        text: 'A esposa hitita Xudit non interveu nas decisións familiares do patriarca.',
        narrative: 'Xudit permanece xunto ao cercado dos rabaños.'
      },
      c6: {
        text: 'Basemat agardaba o regreso da partida de caza nos aposentos.'
      },
      c7: {
        text: 'A cociñeira acudiu ao pozo central por cántaros de auga fresca.'
      },
      c8: {
        text: 'O pastor seleccionou os dous cabritos máis tenros do curral.',
        narrative: 'O pastor guía o gando polo camiño cara a Harán.'
      },
      c9: {
        text: 'O compañeiro de cacería observou o sendeiro que axiña marcaría o exilio de Xacob.'
      }
    }
  },

  // RETO 010: El Manto y la Mentira -> O Manto e a Mentira
  '010': {
    nombre: 'O Manto e a Mentira',
    categoria: 'Asesinatos ou crimes',
    citasBiblicas: 'Xénese 39, 1-20',
    textoBiblicoClave: 'Ela agarrouno polo manto, dicindo: «¡Déitaste comigo!». Pero el, deixándolle o manto nas mans, fuxiu e saíu fóra.',
    contextoTeologico: 'A pasaxe actúa como un exemplo moral de sabedoría e integridade fronte á tentación. Exexéticamente contrasta a fidelidade de Xosé fronte ao comportamento dos seus irmáns. Amosa a un Deus que acompaña ao xusto mesmo no sufrimento inxusto da prisión.',
    solucionExplicacion: 'A dona de Putifar tentou seducir a Xosé. Ao ser rexeitada e fuxir Xosé deixando o seu manto nas mans dela, a muller acusouno falsamente de intento de violación usando a peza como proba, enviándoo ao cárcere.',
    storyIntro: 'Un escravo ascende ata administrar a casa dun alto oficial exipcio. Cando rexeita as insinuacións íntimas da señora da casa, ela emprega unha peza que el deixou atrás ao fuxir para incriminalo falsamente dun crime atroz.',
    epilogue: '¡Calumnia desenmascarada pola peritaxe! O manto retido non probaba violencia, senón a fuxida apresurada de Xosé por manterse íntegro. Aínda que Putifar o enviou ao calabozo real, a providencia divina non o abandonou.',
    subtitle: 'Asesinatos ou crimes · Xénese 39 · 9x9',
    badge: 'O MANTO E A MENTIRA · 9x9',
    rooms: {
      aposento_senora: {
        name: 'Aposento Íntimo da Señora',
        shortName: 'Ap. Señora',
        description: 'Cámara privada onde a dona de Putifar retivo o manto de liño e lanzou o berro de alarma.'
      },
      gran_sala: {
        name: 'Gran Sala de Putifar',
        shortName: 'Sala Putifar',
        description: 'Salón de audiencias do capitán da garda onde se ditou o peche inmediato.'
      },
      patio_criados: {
        name: 'Patio Interior dos Criados',
        shortName: 'Patio Criados',
        description: 'Patio con columnas de loto onde a dona convocou aos serventes axitando o manto.'
      },
      puerta_escape: {
        name: 'Pórtico Exterior de Fuxida',
        shortName: 'Pórtico',
        description: 'Saída cara á rúa por onde Xosé fuxiu despavorido deixando atrás a súa túnica.'
      },
      carcel_real: {
        name: 'Cárcere Real dos Presos do Rei',
        shortName: 'Cárcere Real',
        description: 'Fortaleza subterránea onde estaban recluídos os infractores da corte faraónica.'
      },
      despacho_jose: {
        name: 'Despacho Administrativo de Xosé',
        shortName: 'Despacho',
        description: 'Oficina con papiros e balanzas dende onde Xosé gobernaba con éxito toda a facenda.'
      },
      almacen_granos: {
        name: 'Silos e Almacéns Domésticos',
        shortName: 'Almacéns',
        description: 'Graneiros que prosperaron baixo a bendición que Yahvé concedía a causa de Xosé.'
      },
      aposento_carcelero: {
        name: 'Cámara do Alcalde da Prisión',
        shortName: 'Alcalde',
        description: 'Despacho do xefe do calabozo que axiña poría a todos os reclusos baixo o coidado de Xosé.'
      },
      muralla_egipcia: {
        name: 'Murallas da Fortaleza',
        shortName: 'Murallas',
        description: 'Almeas vixiadas por gardas que custodian o perímetro da cidadela.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Manto de Liño Abandonado',
        description: 'Vestidura exterior de Xosé esgrimida como falsa proba de aldraxe.'
      },
      '2,2': {
        name: 'Selo de Ouro de Putifar',
        description: 'Anel distintivo do capitán da garda con autoridade de encarceramento.'
      },
      '4,6': {
        name: 'Monllo de Chaves do Cárcere',
        description: 'Chaves de ferro forxado custodiadas polo alcalde da prisión.'
      },
      '6,1': {
        name: 'Estatua de Anubis',
        description: 'Ídolo ornamental nos nichos do palacio de goberno.'
      },
      '8,7': {
        name: 'Grillóns de Calabozo',
        description: 'Cadeas dos presos do rei nas celas inferiores.'
      }
    },
    suspects: {
      J: {
        name: 'Xosé',
        role: 'Administrador hebreo / Inocente calumniado',
        clueText: 'No Aposento Íntimo fuxindo da coacción.'
      },
      E: {
        name: 'Dona de Putifar',
        role: 'Señora acusadora / Retivo o manto e mentiu',
        clueText: 'No Aposento Íntimo a soas con Xosé antes de alzar a voz.'
      },
      P: {
        name: 'Putifar',
        role: 'Capitán da garda do Faraón',
        clueText: 'Na Gran Sala enfurecido co relato da súa muller.'
      },
      C: {
        name: 'O carceleiro',
        role: 'Alcalde da prisión real',
        clueText: 'Revisando as racións nos silos antes de preparar a cela.'
      },
      K: {
        name: 'Xacob en memoria',
        role: 'Pai afastado en terra de Canaán',
        clueText: 'Evocado nas murallas fronteirizas da lonxanía.'
      },
      O: {
        name: 'O copeiro real',
        role: 'Oficial do Faraón preso na torre',
        clueText: 'No Cárcere Real agardando xuízo.'
      },
      A: {
        name: 'O panadeiro real',
        role: 'Panadeiro cortesán recluído',
        clueText: 'Na cela común do Cárcere Real.'
      },
      M: {
        name: 'Maiordomo exipcio',
        role: 'Servente da casa testemuña do berro',
        clueText: 'Supervisando as murallas da fortaleza por orde do seu amo.'
      },
      G: {
        name: 'Garda de escape',
        role: 'Centinela apostado no pórtico exterior',
        clueText: 'Patrullando as murallas da fortaleza para impedir calquera fuxida.'
      }
    },
    clues: {
      c1: {
        text: 'Un mozo hebreo administraba a casa e gozaba da confianza total do seu amo.'
      },
      c2: {
        text: 'A muller do amo encaprichouse do mozo e insistiulle repetidamente para pecar.'
      },
      c3: {
        text: 'O capitán da garda deu total crédito ao testemuño sesgado da súa dona.'
      },
      c4: {
        text: 'O alcalde da fortaleza carceraria recibiu a orde de custodiar ao reo.',
        narrative: 'O carcereiro revisa as racións nos silos antes de preparar a cela.'
      },
      c5: {
        text: 'A memoria de Xacob e a fe no Deus dos seus pais inspiraron a fidelidade de Xosé.'
      },
      c6: {
        text: 'O copeiro principal do Faraón xa se atopaba detido nos calabozos reais.'
      },
      c7: {
        text: 'O panadeiro maior compartía peche nas alxubes contiguas.'
      },
      c8: {
        text: 'Os criados da casa acudiron ao patio tras os berros finxidos da señora.',
        narrative: 'O maiordomo doméstico supervisa as murallas da fortaleza.'
      },
      c9: {
        text: 'O garda do pórtico viu cruzar velozmente ao administrador desprovisto do seu manto.',
        narrative: 'O centinela patrulla as murallas da fortaleza.'
      }
    }
  },

  // RETO 010-C: El Niño Oculto en el Templo -> O Neno Oculto no Templo
  '010-C': {
    nombre: 'O Neno Oculto no Templo',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: '2 Reis 11, 1-20',
    textoBiblicoClave: 'Xoiadá sacou ao fillo do rei, púxolle a coroa e entregoulle o Libro da Lei; proclamárono rei, unxírono e, batendo palmas, berraron: «¡Viva o rei!». Atalía oíu o balbordo do pobo...',
    contextoTeologico: 'A preservación da liñaxe de David a través do rescate do pequeno Xoás é fundamental para a esperanza mesiánica. O relato resalta a lexitimidade do culto fronte á tiranía usurpadora de Atalía, quen introducira o culto a Baal en Xerusalén.',
    solucionExplicacion: 'Trala morte de Ocozías, a súa nai Atalía asasinou aos descendentes reais para usurpar o trono. Pero Xoxebá salvou ao neno Xoás e escondeuno no Templo seis anos. Ao sétimo ano, o sacerdote Xoiadá organizou un golpe lexitimista, coroou a Xoás e axustizou a Atalía.',
    storyIntro: 'Unha raíña déspota usurpa o trono asasinando a todos os seus netos e herdeiros lexítimos. Seis anos despois, entre os muros do santuario sagrado, un sacerdote arma secretamente aos gardas para presentar ao único supervivente: un neno de sete anos.',
    epilogue: '¡«¡Traizón, traizón!»! berrou a raíña déspota ao ver ao pequeno coroado xunto á columna real. Os centurións sacárona fóra dos adros sagrados e o pobo celebrou que a lámpada de David seguía acesa en Xerusalén.',
    subtitle: 'Descubrimento de accións ocultas · 2 Reis 11 · 9x9',
    badge: 'O NENO OCULTO NO TEMPLO · 9x9',
    rooms: {
      atrio_templo: {
        name: 'Atrio Principal e Columna Real',
        shortName: 'Atrio Templo',
        description: 'Lugar solemne onde o mozo Xoás foi unxido e coroado coa diadema e o libro do Testemuño.'
      },
      aposento_dormitorios: {
        name: 'Cámara Secreta dos Leitos',
        shortName: 'Cámara Leitos',
        description: 'Habitación recóndita dos sacerdotes onde o infante e a súa ama de cría viviron ocultos durante seis anos.'
      },
      palacio_atalia: {
        name: 'Palacio Real Usurpado de Atalía',
        shortName: 'Palacio Atalía',
        description: 'Sede do goberno tiránico dende onde a raíña ouviu o estrondo do pobo aclamando ao rei.'
      },
      puerta_sur: {
        name: 'Porta dos Cabalos e Desfiladeiro',
        shortName: 'Porta Cabalos',
        description: 'Acceso por onde os capitáns sacaron á usurpadora para non manchar de sangue o recinto sagrado.'
      },
      santuario_interior: {
        name: 'Armería Consagrada do Templo',
        shortName: 'Armería Templo',
        description: 'Depósito onde se gardaban as lanzas e escudos do rei David entregados aos centurións levitas.'
      }
    },
    blockedObjects: {
      '6,5': {
        name: 'Vestiduras Reais Rasgadas de Atalía',
        description: 'Roupaxes de púrpura que a usurpadora desgastou con rabia ao verse arrodeada.'
      },
      '8,1': {
        name: 'Trompetas de Prata do Pobo',
        description: 'Instrumentos sagrados que fixeron vibrar os muros proclamando: «¡Viva o Rei!». '
      },
      '0,0': {
        name: 'Coroa Imperial de Xudá',
        description: 'Diadema dourada posta sobre as tempas do neno de sete anos polo sumo sacerdote.'
      },
      '2,2': {
        name: 'Escudos e Lanzas de David',
        description: 'Armamento consagrado sacado do santuario para equipar aos gardas no sábado.'
      },
      '4,8': {
        name: 'Columna Solemne da Coroación',
        description: 'Piar do templo xunto ao que comparecía tradicionalmente o rei nas cerimonias públicas.'
      }
    },
    suspects: {
      A: {
        name: 'Raíña Atalía',
        role: 'Usurpadora Tiránica',
        clueText: 'Buscou aniquilar a toda a descendencia real para reinar sobre Xudá a sangue e lume.'
      },
      J: {
        name: 'Xoás',
        role: 'Neno Herdeiro de David',
        clueText: 'Supervivente milagroso protexido en segredo dentro da casa do Señor.'
      },
      S: {
        name: 'Princesa Xoxebá',
        role: 'Tía Protectora Heroica',
        clueText: 'Arriscou a súa propia vida para arrebatar ao bebé de entre os príncipes asasinados.'
      },
      P: {
        name: 'Sumo Sacerdote Xoiadá',
        role: 'Estratega do Templo',
        clueText: 'Organizou aos capitáns de cen e pactou o xuramento de lealdade en día de descanso.'
      },
      C: {
        name: 'Capitán Carieo',
        role: 'Xefe da Garda Real',
        clueText: 'Apostou aos seus soldados armados arrodeando o altar para protexer ao pequeno unxido.'
      },
      N: {
        name: 'Ama de Cría Fiel',
        role: 'Coidadora de Xoás',
        clueText: 'Amamantou e coidou ao lexítimo rei na penumbra do aposento sacerdotal.'
      },
      L: {
        name: 'Levita do Limiar',
        role: 'Centinela do Santuario',
        clueText: 'Custodiou o portón impedindo que os espías de Atalía descubrisen o agocho.'
      },
      Z: {
        name: 'Sacerdote do Altar',
        role: 'Oficiante do Sacrificio',
        clueText: 'Mantivo acendido o lume do holocausto durante o pacto secreto da restauración.'
      },
      H: {
        name: 'Heraldo de Xudá',
        role: 'Trompeteiro Maior',
        clueText: 'Tocou o shofar que anunciou a toda Xerusalén que a estirpe de David seguía con vida.'
      }
    },
    clues: {
      c1: {
        text: 'A raíña nai ordenou a matanza sistemática de todos os descendentes reais trala morte do seu fillo.'
      },
      c2: {
        text: 'Unha tía valente (irmá do defunto rei) raptou ao bebé recentemente nado de entre os infantes condenados.'
      },
      c3: {
        text: 'O herdeiro e a súa ama de cría permaneceron agochados durante seis anos enteiros nun cuarto secreto do Templo de Yahvé.'
      },
      c4: {
        text: 'Ao sétimo ano, o sumo sacerdote pactou en segredo cos centurións da garda e introduciunos no santuario.'
      },
      c5: {
        text: 'O sacerdote entregou aos capitáns as lanzas e escudos sagrados que pertenceran ao rei David.'
      },
      c6: {
        text: 'Colocouse ao neno xunto á columna, cinguiuse a diadema real, entregóuselle a Lei e unxiuse rei entre aclamacións.'
      },
      c7: {
        text: 'A usurpadora ouviu o estrondo, acudiu ao Templo berrando «¡Traizón!» e foi capturada e executada fóra do recinto sagrado.'
      }
    }
  },

  // RETO 004-NT: La Señal del Huerto -> O Sinal do Horto
  '004-NT': {
    nombre: 'O Sinal do Horto',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Mateo 26, 47-56; Xoán 18, 1-12',
    textoBiblicoClave: 'E o que o entregaba déralles sinal, dicindo: «A quen eu bicar, ese é; prendédeo». E logo achegouse a Xesús e dixo: «¡Salve, Mestre!». E bicouno.',
    contextoTeologico: 'O bico da traizón é a culminación dramática do rexeitamento dos poderes relixiosos e políticos. Xesús enfróntase ao seu destino con soberanía e liberdade, rexeitando a violencia de Pedro e curando ao servo ferido.',
    solucionExplicacion: 'Xudas Iscariote guiou á cohorte armada ata Xetsemaní e identificou a Xesús cun bico pactado. Pedro feriu ao servo Malco cunha espada, pero Xesús restaurouno milagrosamente e entregouse voluntariamente ás autoridades.',
    storyIntro: 'Na espesura dun souto de oliveiras á beira dun torrente escuro, unha turba con fachos, espadas e garrotes avanza en silencio. Un dos compañeiros máis achegados achégase ao líder do grupo e sela o seu destino cun bico frío.',
    epilogue: '¡«¿Amigo, a que vés? ¿Cun bico entregas ao Fillo do Home?»! A traizón consumouse baixo as oliveiras de Xetsemaní. Mentres os discípulos fuxían no medio da noite, Xesús foi conducido atado ao tribunal de Caifás.',
    subtitle: 'Descubrimento de accións ocultas · Mateo 26 · 9x9',
    badge: 'O SINAL DO HORTO · 9x9',
    rooms: {
      huerto_olivos: {
        name: 'Horto de Xetsemaní e Prensa de Aceite',
        shortName: 'Horto Xetsemaní',
        description: 'Oliveiras centenarias ao pé do torrente Cedrón onde Xesús orou na súa agonía nocturna.'
      },
      lugar_oracion: {
        name: 'Rocha da Agonía do Mestre',
        shortName: 'Rocha Agonía',
        description: 'Peña solitaria a un tiro de pedra onde caeu rostro en terra con suor coma pingas de sangue.'
      },
      camino_antorchas: {
        name: 'Senda de Fachos e Garrotes',
        shortName: 'Senda Fachos',
        description: 'Ruta nocturna por onde avanzou a tropa enviada polos príncipes dos sacerdotes.'
      },
      palacio_caifas: {
        name: 'Tribunal e Palacio de Caifás',
        shortName: 'Palacio Caifás',
        description: 'Sede do sumo sacerdocio onde se entregaron as trinta moedas e se preparou o xuízo nocturno.'
      },
      remanso_cedron: {
        name: 'Vao e Ponte do Torrente Cedrón',
        shortName: 'Vao Cedrón',
        description: 'Paso de auga sombrío entre as murallas de Xerusalén e as abas do monte das Oliveiras.'
      }
    },
    blockedObjects: {
      '2,7': {
        name: 'Cáliz Amargo da Agonía',
        description: 'Símbolo da vontade do Pai aceptada por Cristo en Xetsemaní.'
      },
      '4,1': {
        name: 'Fachos e Farois do Asalto',
        description: 'Luminarias coas que a soldadesca penetrou a fraga das oliveiras.'
      },
      '6,3': {
        name: 'Espada Desenvaiñada de Pedro',
        description: 'Arma curta coa que o apóstolo cortou a orella dereita do servo Malco.'
      },
      '8,8': {
        name: 'Orella Sandada polo Toque Divino',
        description: 'Milagre final de misericordia realizado por Xesús antes de pór as súas mans nas cordas.'
      },
      '0,2': {
        name: 'Trinta Moedas de Prata',
        description: 'Prezo de escravo acordado no Sanedrín para entregar a Xesús de noite.'
      }
    },
    suspects: {
      J: {
        name: 'Xesús',
        role: 'O Mestre Preso',
        clueText: 'Dixo ao traidor: «Amigo, ¿a que vés? ¿Cun bico entregas ao Fillo do Home?».'
      },
      JI: {
        name: 'Xudas Iscariote',
        role: 'O Apóstolo Traidor',
        clueText: 'Acordou o sinal convido: «A quen eu bique, ese é; prendédeo con seguridade».'
      },
      CF: {
        name: 'Caifás',
        role: 'Sumo Sacerdote',
        clueText: 'Agardaba na senda dos fachos a que a cohorte trouxese ao prisioneiro atado sen rebumbio popular.'
      },
      P: {
        name: 'Pedro',
        role: 'Discípulo Defensor',
        clueText: 'Desenvaiñou a súa espada e feriu a Malco antes de recibir a reprensión de Xesús.'
      },
      M: {
        name: 'Malco',
        role: 'Servo do Sumo Sacerdote',
        clueText: 'Sufriu a mutilación da súa orella dereita e foi restaurado ao instante polo toque do Señor.'
      },
      GT: {
        name: 'Garda do Templo',
        role: 'Oficial Armado',
        clueText: 'Botou man a Xesús e suxeitouno con cordas tras o sinal do bico de Xudas.'
      },
      JN: {
        name: 'Xoán Apóstolo',
        role: 'Discípulo Amado',
        clueText: 'Acompañou a Xesús aquela noite e fuxiu xunto aos demais cando foi arrodeado.'
      },
      ST: {
        name: 'Santiago Apóstolo',
        role: 'Fillo do Trono',
        clueText: 'Espertado do sono en tres ocasións durante a dolorosa agonía de Xetsemaní.'
      },
      OF: {
        name: 'Oficial do Sanedrín',
        role: 'Escriba Delegado',
        clueText: 'Supervisou que o arresto se realizase ao abeiro das sombras da noite.'
      }
    },
    clues: {
      c1: {
        text: 'As autoridades relixiosas buscaban arrestar ao Mestre de noite para evitar un motín do pobo.'
      },
      c2: {
        text: 'Un dos doce íntimos do Mestre acudiu aos sumos sacerdotes ofrecéndose a entregalo por cartos.'
      },
      c3: {
        text: 'O traidor acordou un sinal: bicaría ao Mestre para que os gardas soubesen a quen arrestar na escuridade.'
      },
      c4: {
        text: 'No horto, o traidor achegouse ao Mestre, saudouno e deulle o bico acordado.'
      },
      c5: {
        text: 'Ao ser arrestado o Mestre, o discípulo máis impulsivo sacou unha espada e tentou defendelo.'
      },
      c6: {
        text: 'A espada cortou a orella dereita do servo do sumo sacerdote no medio da confusión.'
      },
      c7: {
        text: 'O Mestre detivo a violencia curando ao servo e entregouse voluntariamente aos gardas.'
      }
    }
  },

  // RETO 007-NT: El Llanto de Ramá -> O Pranto de Ramá
  '007-NT': {
    nombre: 'O Pranto de Ramá',
    categoria: 'Asesinatos ou crimes',
    citasBiblicas: 'Mateo 2, 13-18',
    textoBiblicoClave: 'Ao verse burlado polos magos, Herodes enfureceuse terriblemente e mandou matar a todos os nenos de Belén e de toda a súa comarca, de dous anos para abaixo...',
    contextoTeologico: 'Este sanguento episodio enmarca a vida de Xesús na crúa realidade política da época. Conecta historicamente a fuxida a Exipto co drama dos refuxiados, amosando un Deus solidario coas vítimas do terrorismo de Estado.',
    solucionExplicacion: 'Herodes o Grande, temendo perder o trono polo nacemento de Xesús, ordenou matar a todos os nenos menores de dous anos en Belén. San Xosé, advertido en soños, logrou salvar ao neno Xesús e a María fuxindo como refuxiados cara a Exipto.',
    storyIntro: 'O anuncio do nacemento dun rei non trae paz, senón o terror do estado. A obsesión política por aferrarse ao poder desata unha matanza de inocentes, da que só unha familia escapa grazas a un murmurio en soños.',
    epilogue: '¡«Voz en Ramá se ouviu, pranto e gran lamento; Raquel que chora polos seus fillos»! O tirano pereceu consumido polos seus crimes mentres a Sagrada Familia atopaba amparo como refuxiada en terras do Nilo ata que foi seguro volver.',
    subtitle: 'Asesinatos ou crimes · Mateo 2 · 9x9',
    badge: 'O PRANTO DE RAMÁ · 9x9',
    rooms: {
      palacio_herodes: {
        name: 'Fortaleza e Palacio de Herodes en Xerusalén',
        shortName: 'Palacio Herodes',
        description: 'Sede rexia onde o rei envellecido interrogou con falsidade aos sabios sobre a estrela nacente.'
      },
      portal_belen: {
        name: 'Casa e Presebe de Belén de Xudá',
        shortName: 'Casa Belén',
        description: 'Fogar onde os sabios de oriente atoparon ao Neno con María a súa nai e lle ofreceron ouro, incenso e mirra.'
      },
      ruta_egipto: {
        name: 'Deserto do Sinaí e Ruta de Fuxida a Exipto',
        shortName: 'Ruta Exipto',
        description: 'Camiño nocturno por onde Xosé guiou o asno levando á nai e ao neno cara ao refuxio seguro.'
      },
      calles_belen: {
        name: 'Comarca e Rúas de Belén Asoladas',
        shortName: 'Rúas Belén',
        description: 'Aldeas de Xudea onde a soldadesca real executou a orde implacable contra os infantes.'
      },
      oasis_oriente: {
        name: 'Ruta de Retorno dos Sabios por Outro Camiño',
        shortName: 'Ruta Sabios',
        description: 'Sendeiro apartado que tomaron os magos guiados polo aviso divino para non regresar a Xerusalén.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Decreto Sanguinario de Herodes',
        description: 'Orde asina que mandaba degolar a todo varón menor de dous anos en Belén.'
      },
      '2,5': {
        name: 'Arquetas de Ouro, Incenso e Mirra',
        description: 'Dons sagrados ofrecidos ao Mesías rei polos sabios astrónomos de oriente.'
      },
      '4,1': {
        name: 'Espada da Garda de Xudea',
        description: 'Aceiro mercenario empregado para asolar as aldeas da comarca.'
      },
      '6,5': {
        name: 'Albarda do Asno de San Xosé',
        description: 'Montura humilde coa que a familia cruzou a fronteira no silencio da noite.'
      },
      '8,8': {
        name: 'Estrela Guía de Oriente',
        description: 'Astro celestial que conduciu aos magos ata o lugar exacto do alumeamento.'
      }
    },
    suspects: {
      HG: {
        name: 'Herodes o Grande',
        role: 'Monarca Tiránico',
        clueText: 'Calculou con furia a data da estrela e decretou o infanticidio para non perder a súa coroa.'
      },
      JN: {
        name: 'Xesús Neno',
        role: 'O Rei Recén Nado',
        clueText: 'Obxectivo da persecución do imperio, salvado grazas á revelación anxélica.'
      },
      M: {
        name: 'María',
        role: 'Nai Protectora',
        clueText: 'Abrazou ao seu fillo no colo durante a apresurada travesía cara a Exipto.'
      },
      J: {
        name: 'Xosé',
        role: 'Pai Custodio',
        clueText: 'Espertou de noite tras oír ao anxo en soños, tomou ao neno e á súa nai e escapou ao instante.'
      },
      S1: {
        name: 'Sabio Primeiro',
        role: 'Mago Portador de Ouro',
        clueText: 'Ofreceu o ouro rexio ao recén nado e foi avisado en soños de non volver diante de Herodes.'
      },
      S2: {
        name: 'Sabio Segundo',
        role: 'Mago Portador de Incenso',
        clueText: 'Recoñeceu a divindade do neno e regresou á súa patria por unha ruta secreta.'
      },
      S3: {
        name: 'Sabio Terceiro',
        role: 'Mago Portador de Mirra',
        clueText: 'Entregou a mirra profética e burlou a vixilancia dos espías de Xerusalén.'
      },
      CP: {
        name: 'Capitán de Belén',
        role: 'Oficial Executor',
        clueText: 'Comandou a incursión armada nos fogares de Belén cumprindo a orde do rei.'
      },
      MB: {
        name: 'Nai de Belén',
        role: 'Raquel que Chora',
        clueText: 'Chorou desconsolada a perda do seu pequeno inocente sen querer ser consolada.'
      }
    },
    clues: {
      c1: {
        text: 'Un monarca paranoico pediu a uns viaxeiros estranxeiros que lle informasen sobre a situación exacta dun novo rei neno.'
      },
      c2: {
        text: 'Os viaxeiros atoparon ao neno, pero foron advertidos en soños de non volver a palacio.'
      },
      c3: {
        text: 'O monarca, ao verse burlado polos viaxeiros, enfureceu e calculou a idade do neno segundo os datos que tiña.'
      },
      c4: {
        text: 'O pai do neno recibiu un aviso anxélico en soños e fuxiu de noite coa súa familia cara a un país veciño.'
      },
      c5: {
        text: 'O monarca ordenou executar a todos os nenos varóns menores de dous anos nunha cidade e arredores.'
      },
      c6: {
        text: 'A familia refuxiada non regresou á súa terra ata recibir a nova da morte do monarca culpable.'
      },
      c7: {
        text: 'O pranto das nais na cidade cumpriu unha antiga e dolorosa profecía de dor irreparable.'
      }
    }
  },

  // RETO 006-HCH: El Motín de los Plateros -> O Motín dos Prateiros
  '006-HCH': {
    nombre: 'O Motín dos Prateiros',
    categoria: 'Conspiración ou traizón',
    citasBiblicas: 'Feitos 19, 23-41',
    textoBiblicoClave: 'Demetrio reuniu aos oficiais e obreiros deste ramo e dixo: «Compañeiros, sabedes que deste oficio obtemos a nosa ganancia...»',
    contextoTeologico: 'O choque entre o Evanxeo e a idolatría lucrativa en Éfeso. A teoloxía de Feitos subliña como os intereses económicos manipulan a relixión para preservar privilexios.',
    solucionExplicacion: 'Demetrio o prateiro, ao ver que a predicación de Pablo minguaba a venda de estatuíñas de prata da deusa Artemisa, instigou unha revolta gremial masiva. A multitude secuestrou a Gaio e Aristarco e encheu o gran teatro durante dúas horas berrando lemas.',
    storyIntro: 'Unha gran cidade comercial convértese nun polvoreiro cando o gremio de artesáns da prata convoca unha folga tumultuosa que enche o anfiteatro romano. Dous colaboradores estranxeiros son arrastrados violentamente mentres a turba berra lemas sen saber por que están alí.',
    epilogue: '¡«¡Grande é Artemisa dos efesios!»! Durante dúas horas a multitude ruxiu enardecida no anfiteatro, ata que a prudente elocuencia do chanceler acougou á asemblea advertíndolles do risco de seren acusados de sedición por Roma.',
    subtitle: 'Conspiración ou traizón · Feitos 19 · 9x9',
    badge: 'O MOTÍN DOS PRATEIROS · 9x9',
    rooms: {
      taller_plateros: {
        name: 'Gremio e Fundición dos Prateiros',
        shortName: 'Obradoiro Prateiros',
        description: 'Fundición onde Demetrio arengou aos oficiais ante a diminución na venda de templos de prata.'
      },
      teatro_efeso: {
        name: 'Gran Anfiteatro Romano de Éfeso',
        shortName: 'Gran Anfiteatro',
        description: 'Coliseo abarrotado por vinte e cinco mil persoas berrando en confusión.'
      },
      templo_diana: {
        name: 'Santuario Monumental de Artemisa',
        shortName: 'Templo Artemisa',
        description: 'Unha das sete marabillas do mundo antigo, sede do culto á imaxe caída do ceo.'
      },
      residencia_asiarcas: {
        name: 'Pazo dos Maxistrados Asiarcas',
        shortName: 'Palacio Asiarcas',
        description: 'Aposento onde as autoridades provinciais amigas de Pablo lle suplicaron non expoñerse ao teatro.'
      },
      estrado_canciller: {
        name: 'Tribuna Cívica do Escribano Maior',
        shortName: 'Tribuna Chanceler',
        description: 'Púlpito municipal dende o que se leu o edicto legal que dispersou o motín.'
      },
      calle_macedonios: {
        name: 'Vía Comercial dos Macedonios',
        shortName: 'Vía Comercial',
        description: 'Calzada empedrada onde Gaio e Aristarco foron atrapados pola turba desbocada.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Nicho Votivo de Prata',
        description: 'Santuario en miniatura de Diana fabricado en masa para os devotos forasteiros.'
      },
      '2,7': {
        name: 'Estatua Caída de Xúpiter',
        description: 'Reliquia sagrada da deusa venerada en Éfeso.'
      },
      '4,4': {
        name: 'Convocatoria Tumultuaria',
        description: 'Berros enardecidos dunha multitude que descoñecía a orixe real da concentración.'
      },
      '7,6': {
        name: 'Rollo do Proconsulado de Asia',
        description: 'Normativa romana contra asembleas ilegais esgrimida polo chanceler para disolver a turba.'
      }
    },
    suspects: {
      P: {
        name: 'Pablo',
        role: 'Apóstolo Provocador',
        clueText: 'Predicaba con insistencia que non son deuses os que se fan coas mans do home.'
      },
      DE: {
        name: 'Demetrio o Prateiro',
        role: 'Líder Gremial Conspirador',
        clueText: 'Arengou aos artesáns advertíndolles que a súa prosperidade económica corría perigo mortal.'
      },
      GA: {
        name: 'Gaio de Macedonia',
        role: 'Colaborador Secuestrado',
        clueText: 'Compañeiro de viaxe de Pablo, foi prendido pola multitude e arrastrado á bancada.'
      },
      AR: {
        name: 'Aristarco de Tesalónica',
        role: 'Prisioneiro do Motín',
        clueText: 'Conducido pola forza xunto a Gaio ata a area central do teatro.'
      },
      CA: {
        name: 'Chanceler da Cidade',
        role: 'Escribano Maior Legal',
        clueText: 'Logrou acougar á multitude lembrando que os tribunais proconsulares estaban abertos.'
      },
      SD: {
        name: 'Sacerdotisa de Diana',
        role: 'Custodia do Artemision',
        clueText: 'Defendía o prestixio do templo universal ameazado pola herexía cristiá.'
      },
      AL: {
        name: 'Alexandre o Xudeu',
        role: 'Voceiro Rexeitado',
        clueText: 'Tentou falar facendo acenos coa man, pero a multitude acalouno ao saber que era xudeu.'
      },
      AS: {
        name: 'Asiarca Protector',
        role: 'Maxistrado Provincial',
        clueText: 'Amigo de Pablo que lle enviou emisarios urxentes pregándolle que non pisase o anfiteatro.'
      },
      AE: {
        name: 'Artesán Enfurecido',
        role: 'Obreiro da Fundición',
        clueText: 'Repetía mecanicamente o berro «¡Grande é Artemisa!» sen saber sequera por que protestaban.'
      }
    },
    clues: {
      c1: {
        text: 'Un fabricante de imaxes relixiosas convocou unha reunión gremial alertando sobre perdas no seu negocio.'
      },
      c2: {
        text: 'O líder gremial acusou a un misioneiro de convencer á xente de que os ídolos de prata non son deuses.'
      },
      c3: {
        text: 'A multitude enfurecida prendeu a dous compañeiros estranxeiros do misioneiro e arrastrounos ao teatro.'
      },
      c4: {
        text: 'O misioneiro principal quixo presentarse ante a multitude no teatro, pero os seus discípulos e amigos maxistrados impedíronllo.'
      },
      c5: {
        text: 'Durante máis de dúas horas, milleiros de persoas berraron a mesma frase relixiosa sen cesar nas bancadas.'
      },
      c6: {
        text: 'Un home tentou defender á súa comunidade con acenos, pero a multitude acalouno violentamente ao notar a súa orixe.'
      },
      c7: {
        text: 'O maxistrado da cidade interveu advertindo do perigo de seren acusados de sedición polo imperio romano e disolveu a asemblea.'
      }
    }
  },

  // RETO 010-HCH: El Voto Secreto de Muerte -> O Voto Secreto de Morte
  '010-HCH': {
    nombre: 'O Voto Secreto de Morte',
    categoria: 'Conspiración ou traizón',
    citasBiblicas: 'Feitos 23, 12-24',
    textoBiblicoClave: 'Máis de corenta deles artellaron un complot e comprometéronse baixo anatema a non comer nin beber ata matar a Pablo...',
    contextoTeologico: 'Amosa a providencia de Deus protexendo ao seu enviado a través de medios ordinarios e insólitos: un neno e o exército romano. Fe Adulta resalta que o fanatismo relixioso cego queda en evidencia fronte á legalidade secular.',
    solucionExplicacion: 'Máis de corenta fanáticos xuraron non comer nin beber ata asasinar a Pablo nunha emboscada coa axuda das autoridades. O sobriño de Pablo descubriu o plan e avisou ao tribuno Claudio Lisias, quen organizou unha escolta armada de case 500 homes para poñelo a salvo en Cesarea.',
    storyIntro: 'Máis de corenta extremistas xuran solemne xaxún mortal ata executar a un prisioneiro baixo custodia militar. Conspiran coas autoridades relixiosas para tender unha trampa no camiño, pero un rapaz escoita a conversa e cámbiao todo.',
    epilogue: '¡«Dous escuadróns de infantes, setenta xinetes e douscentos lanceiros»! Ao abeiro da terceira hora da noite, o tribuno Claudio Lisias evacuou a Pablo a galope cara á corte do gobernador Félix en Cesarea, frustrando o xuramento fanático.',
    subtitle: 'Conspiración ou traizón · Feitos 23 · 9x9',
    badge: 'O VOTO SECRETO DE MORTE · 9x9',
    rooms: {
      torre_antonia: {
        name: 'Fortaleza Antonia e Cuartel do Tribuno',
        shortName: 'Torre Antonia',
        description: 'Cuartel xeral onde o prisioneiro Pablo permanecía custodiado baixo garda pretoriana.'
      },
      cripta_conjurados: {
        name: 'Cripta Secreta do Xuramento Fanático',
        shortName: 'Cripta Conxurados',
        description: 'Cova oculta onde os corenta fanáticos pronunciaron o anatema de xaxún a morte.'
      },
      camara_sacerdotal: {
        name: 'Cámara de Audiencia do Sanedrín',
        shortName: 'Cámara Sanedrín',
        description: 'Aposento onde os xefes relixiosos pactaron cos sicarios simular unha petición xudicial.'
      },
      despacho_tribuno: {
        name: 'Despacho de Mando de Claudio Lisias',
        shortName: 'Despacho Tribuno',
        description: 'Oficina reservada onde o tribuno colleu da man ao mozo sobriño para oír a delación.'
      },
      via_antipatride: {
        name: 'Calzada Militar cara a Antipátride e Cesarea',
        shortName: 'Calzada Cesarea',
        description: 'Ruta nocturna blindada por onde xinetes e lanceiros escoltaron ao apóstolo cara á costa.'
      },
      esquina_emboscada: {
        name: 'Recanto do Muro para a Emboscada',
        shortName: 'Recanto Emboscada',
        description: 'Paso estreito onde os conxurados planeaban degolar a Pablo antes de chegar ao xuízo.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Cadea de Custodia Pretoriana',
        description: 'Seguridade imperial coa que Roma mantiña ao apóstolo protexido da turba.'
      },
      '4,4': {
        name: 'Daga Oculta para a Emboscada',
        description: 'Arma branca coa que os sicarios fanáticos pretendían asestar o golpe mortal.'
      },
      '6,4': {
        name: 'Pacto Sacrílego Baixo Anatema',
        description: 'Xuramento de non probar bocado nin auga ata verter o sangue de Pablo.'
      },
      '8,8': {
        name: 'Ferradura da Cabalaría de Escolta',
        description: 'Rastro da columna armada de 470 soldados que trasladou ao recluso á medianoite.'
      }
    },
    suspects: {
      PA: {
        name: 'Pablo',
        role: 'Prisioneiro Ameazado',
        clueText: 'Encarcerado na fortaleza, o Señor aparecéuselle de noite dicíndolle: «Ten ánimo; testemuñarás en Roma».'
      },
      CL: {
        name: 'Conxurado Líder',
        role: 'Sicario Xuramentado',
        clueText: 'Encabezou o grupo dos corenta que se maldixeron a si mesmos se comían antes do homicidio.'
      },
      SO: {
        name: 'Sobriño de Pablo',
        role: 'O Mozo Informante',
        clueText: 'Escoitou a emboscada xunto á cripta e correu á fortaleza para alertar ao seu tío e ao comandante.'
      },
      TL: {
        name: 'Tribuno Claudio Lisias',
        role: 'Comandante da Cohorte',
        clueText: 'Tomou ao rapaz da man a soas, creu o seu informe e redactou unha carta oficial ao gobernador Félix.'
      },
      AN: {
        name: 'Sumo Sacerdote Ananías',
        role: 'Conspirador Xerárquico',
        clueText: 'Aceptou a proposta de finxir unha audiencia máis minuciosa para propiciar o ataque na rúa.'
      },
      CR: {
        name: 'Centurión Romano',
        role: 'Oficial de Garda',
        clueText: 'Conduciu ao mozo sobriño ante a presenza do tribuno por petición expresa do apóstolo.'
      },
      JE: {
        name: 'Xinete de Escolta',
        role: 'Cabalaría de Rescate',
        clueText: 'Montou a Pablo nunha cabalgadura e cabalgou velozmente na noite protexendo ao cidadán romano.'
      },
      AC: {
        name: 'Ancián Conxurado',
        role: 'Fanático do Anatema',
        clueText: 'Agardaba apostado con puñal en man no estreito calexón fronte ao adro.'
      },
      FT: {
        name: 'Falsa Testemuña',
        role: 'Emisario do Sanedrín',
        clueText: 'Levaba a falsa solicitude de comparecencia ao comandante romano.'
      }
    },
    clues: {
      c1: {
        text: 'Máis de corenta homes fixeron un xuramento solemne de non comer nin beber ata matar ao acusado.'
      },
      c2: {
        text: 'Os conxurados propuxeron aos sacerdotes finxir que precisaban interrogar de novo ao prisioneiro.'
      },
      c3: {
        text: 'O plan consistía en emboscar e asasinar ao prisioneiro durante o traxecto entre a prisión e o tribunal.'
      },
      c4: {
        text: 'Un mozo familiar do prisioneiro decatouse da conspiración secreta e logrou entrar na fortaleza para avisalo.'
      },
      c5: {
        text: 'O prisioneiro pediu a un centurión que levase ao rapaz ante o máximo comandante militar da cidade.'
      },
      c6: {
        text: 'O comandante creu o testemuño do mozo e ordenoulle manter silencio absoluto sobre a súa entrevista.'
      },
      c7: {
        text: 'Esa mesma noite, un destacamento masivo de case cincocentos soldados e xinetes trasladou ao prisioneiro a outra cidade protexida.'
      }
    }
  }
};
