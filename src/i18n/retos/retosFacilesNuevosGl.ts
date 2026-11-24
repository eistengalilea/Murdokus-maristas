import { RetoTraduccion } from './types';

export const RETOS_FACILES_NUEVOS_GL: Record<string, RetoTraduccion> = {
  // RETO 001-B: El Horno Ardiente -> O Forno Ardente
  '001-B': {
    nombre: 'O Forno Ardente',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Daniel 3, 1-30',
    textoBiblicoClave: 'Nabucodonosor dixo: «Vexo catro homes desatados, que camiñan no medio do lume sen sufrir dano ningún; e o aspecto do cuarto semella o dun fillo dos deuses».',
    contextoTeologico: 'Simboliza a resistencia non violenta e a fidelidade inquebrantable a Deus fronte á idolatría do poder imperial. O Vaticano resalta como o cuarto persoeiro prefigura a presenza de Cristo confortando aos que sofren pola xustiza.',
    solucionExplicacion: 'Tres mozos xudeus negáronse a axeonllarse ante a estatua de ouro do rei babilónico. Foron guindados a un forno quecera sete veces máis do habitual, pero foron protexidos por unha figura celestial e saíron ilesos.',
    storyIntro: 'Un son de bucinas e arpas esixe a prostración de todo un imperio ante unha xigantesca efixie dourada. Tres funcionarios rexeitan a orde sabendo que a pena inmediata é o lume dunha caldeira abrasadora.',
    epilogue: '¡O lume perdeu o seu poder destructor! O rei recoñeceu ao Deus altísimo e promoveu a Sadrac, Mesac e Abed-Nego a cargos aínda maiores en toda a provincia de Babilonia.',
    subtitle: 'Descubrimento de accións ocultas · Daniel 3 · 5x5',
    badge: 'O FORNO ARDENTE · 5x5',
    rooms: {
      pedestal_oro: {
        name: 'Pedestal da Estatua de Ouro',
        shortName: 'Estatua Ouro',
        description: 'Chaira de Dura onde se ergueu a colosal imaxe de ouro.'
      },
      horno_fuego: {
        name: 'Forno de Lume Ardente',
        shortName: 'Forno Lume',
        description: 'Forno requentado sete veces máis do acostumado.'
      },
      estrado_real: {
        name: 'Estrado do Rei Nabucodonosor',
        shortName: 'Estrado Real',
        description: 'Sitio elevado dende onde o rei observou o milagre dos catro varóns.'
      },
      tribuna_heraldos: {
        name: 'Tribuna do Heraldo e Músicos',
        shortName: 'Tribuna Heraldo',
        description: 'Lugar onde resoaban trompetas, cítaras e arpas proclamando o edicto.'
      },
      acceso_guardia: {
        name: 'Acceso da Garda Caldea',
        shortName: 'Posto Garda',
        description: 'Entrada onde os soldados ataron aos tres hebreos antes de caer abrasados.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Estatua Colosal de Ouro',
        description: 'Monumento de sesenta cóbados de alto levantado na chaira de Dura.'
      },
      '2,1': {
        name: 'Labarada Voraz do Forno',
        description: 'Lume ardente requentado sete veces que fulminou aos verdugos.'
      },
      '4,4': {
        name: 'Corneta e Cítara Real',
        description: 'Instrumentos musicais que daban o sinal de prostración obrigatoria.'
      }
    },
    suspects: {
      N: {
        name: 'Nabucodonosor',
        role: 'Rei de Babilonia',
        clueText: 'No Estrado Real, atónito ao ver catro homes paseando ilesos.'
      },
      S: {
        name: 'Sadrac',
        role: 'Mozo hebreo fiel',
        clueText: 'Ante o estrado do rei negouse a prostrarse e defendeu a súa fe sen medo.'
      },
      M: {
        name: 'Mesac',
        role: 'Compañeiro exiliado',
        clueText: 'No Forno de Lume cos seus vestidos intactos e sen cheiro a queimado.'
      },
      H: {
        name: 'Un Heraldo',
        role: 'Pregoeiro do rei',
        clueText: 'No acceso da garda pregoando o edicto de adoración obrigatoria.'
      },
      G: {
        name: 'Un Garda',
        role: 'Soldado caldeo',
        clueText: 'No Acceso da Garda custodiando as cordas antes de botalos ao forno.'
      }
    },
    clues: {
      c1: {
        text: 'O rei construíu unha xigantesca estatua de ouro e ordenou que todos se prostrasen ao escoitar a música.',
        narrative: 'Nabucodonosor contemplaba a submisión dende o seu estrado de mando.'
      },
      c2: {
        text: 'Tres mozos exiliados que ocupaban altos cargos administrativos negáronse a participar na idolatría imposta.',
        narrative: 'Sadrac e Mesac non dobraron os xeonllos ante a imaxe babilónica.'
      },
      c3: {
        text: 'Un heraldo proclamou que o castigo por desobedecer sería ser botado vivo a un forno de lume ardente.',
        narrative: 'O pregoeiro transmitiu a orde con voz potente.'
      },
      c4: {
        text: 'Os gardas que cumpriron a sentenza morreron fulminados pola intensa calor das lapas ao achegarse.',
        narrative: 'O soldado da garda apostado no acceso viu as labaradas desbordadas.'
      },
      c5: {
        text: 'O rei abraiouse ao asomarse e ver catro homes paseando ilesos entre o lume, e o cuarto tiña aspecto divino.',
        narrative: 'Os mozos hebreos camiñaban libres de ataduras no medio das brasas.'
      }
    }
  },

  // RETO 002-B: La Escritura en la Pared -> A Escritura na Parede
  '002-B': {
    nombre: 'A Escritura na Parede',
    categoria: 'Desenlaces de historias e parábolas',
    citasBiblicas: 'Daniel 5, 1-30',
    textoBiblicoClave: 'Naquela mesma hora apareceron os dedos dunha man de home, que escribían diante do candelabro sobre o estuco da parede do palacio real.',
    contextoTeologico: 'Simboliza a caída da arrogancia terreal e a profanación do sagrado. O Reino de Deus pesa aos imperios na balanza da xustiza e a soberbia recibe o seu xuízo inexorable.',
    solucionExplicacion: 'O rei Belsasar profanou os vasos de ouro do Templo de Xerusalén nun festín sacrílego. Apareceu unha man que escribiu «MENE, MENE, TEQUEL, UFARSIN». Daniel descifrou o enigma anunciando a caída de Babilonia esa mesma noite.',
    storyIntro: 'Un banquete de luxo desenfreado énchese de terror cando os dedos dunha man sen corpo comezan a trazar letras luminosas sobre a parede de cal. Ningún mago nin astrólogo imperial é quen de ler o enigma misterioso.',
    epilogue: '¡Aquela mesma noite caeu o imperio caldeo! Belsasar foi asasinado no seu leito e Darío o Medo asumiu a coroa, cumpríndose a profecía interpretada por Daniel.',
    subtitle: 'Desenlaces de historias e parábolas · Daniel 5 · 5x5',
    badge: 'A ESCRITURA NA PAREDE · 5x5',
    rooms: {
      muro_escritura: {
        name: 'Muro Encalado da Escritura',
        shortName: 'Muro Xeso',
        description: 'Parede de xeso iluminada polo candelabro onde apareceu a man misteriosa.'
      },
      banquete_real: {
        name: 'Salón do Gran Banquete',
        shortName: 'Banquete Real',
        description: 'Mesas con viño onde se profanaron os vasos de ouro do Templo de Xerusalén.'
      },
      estrado_sabios: {
        name: 'Estrado de Sabios e Magos',
        shortName: 'Estrado Sabios',
        description: 'Sitio onde astrólogos e adiviños fracasaron ao ler as palabras divinas.'
      },
      aposento_reina: {
        name: 'Cámara da Raíña Nai',
        shortName: 'Cám. Raíña Nai',
        description: 'Lugar onde a raíña acudiu a lembrar a memoria do sabio Daniel.'
      },
      puerta_persa: {
        name: 'Pórtico da Invasión Medo-Persa',
        shortName: 'Pórtico Invasión',
        description: 'Acceso exterior polo leito do río por onde entraron as tropas de Darío.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Man Misteriosa no Xeso',
        description: 'Dedos sobrenaturais trazando Mené, Tekel, Parsín no enlucido.'
      },
      '1,3': {
        name: 'Vasos Sagrados do Templo',
        description: 'Copas de ouro e prata consagradas roubadas de Xerusalén.'
      },
      '3,0': {
        name: 'Rolo Astrolóxico sen Descifrar',
        description: 'Tratado co que os caldeos intentaron sen éxito ler as letras.'
      }
    },
    suspects: {
      B: {
        name: 'Baltasar',
        role: 'Rei profanador de Babilonia',
        clueText: 'No Salón do Banquete tremendo, cos xeonllos batendo entre si.'
      },
      R: {
        name: 'A Raíña Nai',
        role: 'Conselleira real',
        clueText: 'Na Cámara da Raíña Nai traendo consolo e recomendando a Daniel.'
      },
      D: {
        name: 'Daniel',
        role: 'Sabio exiliado de Xudá',
        clueText: 'Xunto ao pórtico, tras descifrar o veredicto divino escrito no muro.'
      },
      N: {
        name: 'Nabucodonosor',
        role: 'Evocado no estrado de honra',
        clueText: 'No Estrado de Sabios, lembrado polo seu arrepentimento pasado.'
      },
      M: {
        name: 'Darío o Medo',
        role: 'Monarca conquistador invasor',
        clueText: 'Irrompeu no salón do banquete tomando o pazo na noite da sentenza.'
      }
    },
    clues: {
      c1: {
        text: 'Un rei organizou un gran banquete usando como copas os vasos sagrados roubados do templo de Xerusalén.',
        narrative: 'Baltasar brindaba cos seus nobres profanando os obxectos sagrados.'
      },
      c2: {
        text: 'Durante a festa profana, unha man humana misteriosa apareceu e escribiu unhas palabras incomprensibles no xeso da parede.',
        narrative: 'O trazo luminoso quedou gravado sobre a parede branca.'
      },
      c3: {
        text: 'A raíña nai suxeriu chamar a un sabio cativo que posuía o espírito dos deuses santos para descifrar a mensaxe.',
        narrative: 'A nobre señora interveu serenando a histeria da corte.'
      },
      c4: {
        text: 'O sabio interpretou as palabras «Mené, Tekel, Parsín» anunciando o inminente fin e división do reino babilónico.',
        narrative: 'Daniel rexeitou os agasallos do rei e pronunciou o xuízo de Deus.'
      },
      c5: {
        text: 'Esa mesma noite cumpriuse a profecía: o rei foi asasinado e o imperio caeu en mans dun monarca estranxeiro.',
        narrative: 'Darío o medo cruzou o limiar e asumiu o dominio do reino.'
      }
    }
  },

  // RETO 006-B: El Complot del Umbral -> O Complot do Solleiro
  '006-B': {
    nombre: 'O Complot do Solleiro',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Ester 2, 21-23',
    textoBiblicoClave: 'Bigtán e Teres, dous eunucos do rei que gardaban o solleiro, amoscáronse descontentos e conspiraban para matar ao rei Asuero.',
    contextoTeologico: 'Amosa a providencia silenciosa de Deus que actúa a través da lealdade cotiá e feitos aparentemente casuais, protexendo ao pobo elixido de conspiracións mortais.',
    solucionExplicacion: 'Mardoqueo escoitou a dous gardas reais (Bigtán e Teres) conspirar para asasinar ao rei Asuero. Informou á raíña Ester, quen advertiu ao rei en nome de Mardoqueo. Os dous gardas foron aforcados nun madeiro.',
    storyIntro: 'No bulicio da porta real, dous gardas de confianza cuchichean un plan homicida. Un ancián sentado no patio escoita as súas palabras e activa unha cadea de avisos que salvará a vida do soberano de Persia.',
    epilogue: '¡O complot foi debelado e rexistrado nas crónicas! Os dous gardas foron axustizados nun madeiro, mentres a anotación do mérito de Mardoqueo agardou a noite de insomnio providencial do rei.',
    subtitle: 'Descubrimento de accións ocultas · Ester 2 · 5x5',
    badge: 'O COMPLOT DO SOLLEIRO · 5x5',
    rooms: {
      umbral_puerta: {
        name: 'Limiar da Porta do Rei',
        shortName: 'Limiar Porta',
        description: 'Pórtico exterior onde Mardoqueo se sentaba e oíu murmurios sediciosos.'
      },
      camerino_guardia: {
        name: 'Camerino dos Gardas Reais',
        shortName: 'Camerino Gardas',
        description: 'Aposento de descanso onde Bigtán e Teres tramaron o atentado contra o rei.'
      },
      trono_asuero: {
        name: 'Salón do Trono Imperial',
        shortName: 'Trono Asuero',
        description: 'Trono onde o monarca persa despachaba os asuntos do vasto imperio.'
      },
      camara_ester: {
        name: 'Cámara Privada da Raíña Ester',
        shortName: 'Cámara Ester',
        description: 'Aposento no harén real onde a raíña recibiu o aviso do seu tío.'
      },
      sala_cronicas: {
        name: 'Arquivo das Crónicas Reais',
        shortName: 'Sala Crónicas',
        description: 'Lugar onde os escribas deixaron o feito por escrito no libro do reino.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Daga Oculta do Conxurado',
        description: 'Arma branca coa que os eunucos pretendían ferir ao soberano.'
      },
      '2,2': {
        name: 'Libro dos Anais do Rei',
        description: 'Crónica imperial aberta onde se rexistrou o mérito de Mardoqueo.'
      },
      '4,1': {
        name: 'Columna da Chancelaría',
        description: 'Piar persa de mármore do recinto do pazo en Susa.'
      }
    },
    suspects: {
      M: {
        name: 'Mardoqueo',
        role: 'Xudeu exiliado no limiar',
        clueText: 'No camerino da garda, atento ás conversas dos eunucos.'
      },
      E: {
        name: 'Ester',
        role: 'Raíña de Persia',
        clueText: 'Na súa Cámara Privada transmitindo o aviso ao rei en nome do seu tío.'
      },
      A: {
        name: 'Asuero',
        role: 'Emperador persa',
        clueText: 'No Salón do Trono ordenando investigar a conxura dos eunucos.'
      },
      B: {
        name: 'Bigtán',
        role: 'Eunuco gardián da porta',
        clueText: 'Xunto ao trono imperial, á espreita para atentar contra o monarca.'
      },
      T: {
        name: 'Teres',
        role: 'Eunuco cómplice conspirador',
        clueText: 'No Camerino dos Gardas axustando o ferrollo para facilitar a emboscada.'
      }
    },
    clues: {
      c1: {
        text: 'Dous eunucos que custodiaban as portas do recinto real anoxáronse co soberano e planearon asasinalo.',
        narrative: 'Bigtán e Teres murmuraban no camerino de servizo.'
      },
      c2: {
        text: 'Un exiliado que adoitaba sentar á porta do pazo escoitou os detalles exactos da conspiración.',
        narrative: 'Mardoqueo decatouse do plan sedicioso dende o seu banco no limiar.'
      },
      c3: {
        text: 'O descubridor do complot non tiña acceso directo ao monarca, así que transmitiu a información a unha familiar introducida na corte.',
        narrative: 'A mensaxe chegou en segredo aos aposentos da raíña Ester.'
      },
      c4: {
        text: 'A raíña comunicou a alerta ao monarca en nome do home que descubrira o plan.',
        narrative: 'Ester expuxo a trama ante Asuero citando con honra a Mardoqueo.'
      },
      c5: {
        text: 'Tras investigar e confirmar a conxura, os dous eunucos foron aforcados e o acto de lealdade quedou rexistrado nas crónicas reais.',
        narrative: 'O soberano comprobou a veracidade e ordenou rexistrar a memoria nos anais.'
      }
    }
  },

  // RETO 007-B: El Valle de la Muerte Vencida -> O Val da Morte Vencida
  '007-B': {
    nombre: 'O Val da Morte Vencida',
    categoria: 'Desenlaces de historias e parábolas',
    citasBiblicas: 'Ezequiel 37, 1-14',
    textoBiblicoClave: 'Profeticei como me ordenara, e entrou o alento neles, e viviron, e puxéronse en pé: un exército grande en extremo.',
    contextoTeologico: 'É a visión profética suprema da resurrección e a restauración nacional e espiritual de Israel. Deus ten poder para dar vida mesmo alí onde só reina o po e a desesperanza absoluta.',
    solucionExplicacion: 'O profeta Ezequiel foi transportado a un val cheo de ósos secos. Por mandato de Deus, profetizou sobre eles; os ósos xuntáronse, cobríronse de carne e volveron á vida ao soprar o espírito desde os catro ventos.',
    storyIntro: 'Un home é depositado pola man divina no medio dunha fondalada chea de ósos completamente secos e esparexidos. Ante a pregunta de se eses ósos poderán revivir, o home ergue a voz anunciando un estrondo sobrenatural.',
    epilogue: '¡A vida venceu á morte no val! Asemblea de viventes ergueuse en pé coma un exército inmenso. Deus declarou: «Vou abrir os vosos sepulcros e faréivos subir deles, pobo meu».',
    subtitle: 'Desenlaces de historias e parábolas · Ezequiel 37 · 5x5',
    badge: 'O VAL DA MORTE VENCIDA · 5x5',
    rooms: {
      valle_huesos: {
        name: 'Val dos Ósos Secos',
        shortName: 'Val Ósos',
        description: 'Chaira desolada cuberta de innumerables esqueletos completamente secos.'
      },
      colina_vision: {
        name: 'Outeiro da Visión Profética',
        shortName: 'Outeiro Visión',
        description: 'Promontorio onde o Espírito de Deus puxo de pé ao profeta Ezequiel.'
      },
      puerta_vientos: {
        name: 'Confluencia dos Catro Ventos',
        shortName: 'Catro Ventos',
        description: 'Punto cardinal dende onde o sopro divino trouxo alento vivificador.'
      },
      campamento_exiliados: {
        name: 'Campamento de Cativos en Babilonia',
        shortName: 'Camp. Cativos',
        description: 'Lugar xunto ao río Quebar onde resoaba o clamor da desesperanza.'
      },
      altar_reconstruccion: {
        name: 'Monumento do Pobo Recreado',
        shortName: 'Pobo Recreado',
        description: 'Lugar de asemblea onde a inmensa multitude se puxo en pé con vida.'
      }
    },
    blockedObjects: {
      '1,2': {
        name: 'Restos Óseos Calcinados',
        description: 'Ósos espallados pola face do campo que representan a morte da nación.'
      },
      '0,3': {
        name: 'Sopro dos Catro Ventos',
        description: 'Brisa vivificante que infunde alento vital nos corpos restituídos.'
      },
      '4,0': {
        name: 'Tenda do Cativerio',
        description: 'Refuxio dos deportados en terra estranxeira abatidos pola tristeza.'
      }
    },
    suspects: {
      E: {
        name: 'Ezequiel',
        role: 'Profeta e sacerdote exiliado',
        clueText: 'No campamento dos cativos profetizando con voz firme cara aos catro rumbos.'
      },
      S: {
        name: 'O Señor Iavé',
        role: 'Voz soberana da promesa',
        clueText: 'No val dos ósos secos guiando ao profeta no medio da desolación.'
      },
      V: {
        name: 'O Espírito Divino',
        role: 'Alento de vida e renovación',
        clueText: 'Sobre o Val dos Ósos recompoñendo tendóns e carne sobre a estrutura.'
      },
      P: {
        name: 'Exiliado Primeiro',
        role: 'Voceiro da desesperación',
        clueText: 'No Campamento de Cativos repetindo con desalento que a súa esperanza morreu.'
      },
      R: {
        name: 'Exiliado Segundo',
        role: 'Testemuña da restauración',
        clueText: 'Na confluencia dos catro ventos poñéndose en pé cheo de admiración.'
      }
    },
    clues: {
      c1: {
        text: 'Un profeta foi levado en visión a un val inmenso completamente cheo de restos óseos calcinados e resecos.',
        narrative: 'Ezequiel contemplou o leito de ósos branqueados polo sol.'
      },
      c2: {
        text: 'Unha voz divina preguntoulle ao profeta se aqueles restos poderían volver vivir.',
        narrative: 'O Señor interpelou a fe do vidente.'
      },
      c3: {
        text: 'O profeta pronunciou un oráculo e houbo un ruído estremecedor mentres os ósos se unían e se cubrían de carne e pel.',
        narrative: 'O estrondo percorreu o val ao encaixar cada óso na súa xuntura.'
      },
      c4: {
        text: 'Aínda reconstruídos, os corpos carecían de alento vital, polo que o profeta tivo que invocar os catro ventos.',
        narrative: 'O Espírito soprou dende os confíns celestes para insuflar vida.'
      },
      c5: {
        text: 'Toda esta visión foi a resposta directa ao laio colectivo dos cativos que repetían: «A nosa esperanza morreu».',
        narrative: 'Os cativos comprobaron que Deus abriría as súas tumbas para devolvelos á súa terra.'
      }
    }
  },

  // RETO 009-B: La Ceguera del Justo -> A Cegueira do Xusto
  '009-B': {
    nombre: 'A Cegueira do Xusto',
    categoria: 'Desenlaces de historias e parábolas',
    citasBiblicas: 'Tobías 2, 1-14',
    textoBiblicoClave: 'Dormín xunto á parede do patio co rostro descuberto por mor da calor, sen saber que había andoriñas na muralla. As súas dexeccións caeron quentes sobre os meus ollos e provocáronme manchas brancas.',
    contextoTeologico: 'Mostra o misterio do sufrimento do inocente. Tobit é cegado xusto despois de cumprir unha obra de misericordia heróica (enterrar aos mortos), anticipando que a providencia divina probará a súa fe antes de enviar a curación polo arcanxo Rafael.',
    solucionExplicacion: 'Tobit arriscou a súa vida para enterrar a un compatriota asasinado na rúa. Ao volver cansado, deitouse xunto á parede do patio; o esterco quente das andoriñas caeu sobre os seus ollos abertos e deixouno cego.',
    storyIntro: 'Tras abandonar un banquete festivo para dar digna sepultura a un cadáver botado na praza, un home piadoso regresa á súa casa extenuado. Deitase a durmir no patio ao abrigo da noite, pero a mañá tráelle unha cegueira repentina e cruel.',
    epilogue: '¡A fe do xusto permaneceu firme no medio das burlas! Tobit soportou a cegueira durante anos sen blasfemar, ata que o arcanxo Rafael usou o fel do peixe para devolverlle a luz aos seus ollos.',
    subtitle: 'Desenlaces de historias e parábolas · Tobías 2 · 5x5',
    badge: 'A CEGUEIRA DO XUSTO · 5x5',
    rooms: {
      patio_exterior: {
        name: 'Patio Exterior Xunto ao Muro',
        shortName: 'Patio Muro',
        description: 'Lugar ao pé da parede onde durmían pardais no beirado do tellado.'
      },
      comedor_pentecostes: {
        name: 'Comedor da Festa de Pentecostés',
        shortName: 'Comedor Festa',
        description: 'Mesa festiva preparada con alimentos que Tobit deixou intacta para socorrer ao defunto.'
      },
      taller_telar: {
        name: 'Obradoiro de Tecidos de Ana',
        shortName: 'Obradoiro Tear',
        description: 'Recuncho da casa onde a esposa fiaba e tecía para sustentar a familia.'
      },
      callejon_plaza: {
        name: 'Ruela da Praza de Nínive',
        shortName: 'Ruela Nínive',
        description: 'Lugar público onde xacía abandonado o cadáver do compatriota estrangulado.'
      },
      cueva_sepulcro: {
        name: 'Sepultura Clandestina na Horta',
        shortName: 'Sepultura Horta',
        description: 'Fosa escavada de noite para conceder descanso sagrado aos mortos.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Niño de Pardais no Beirado',
        description: 'Aves pousadas na cornixa do muro sobre o leito nocturno.'
      },
      '1,4': {
        name: 'Tear e Madeixas de La',
        description: 'Ferramentas de labor téxtil coas que Ana gañaba o sustento cotián.'
      },
      '4,0': {
        name: 'Túmulo de Sepultura',
        description: 'Terra recén removida onde foi enterrado o estrangulado.'
      }
    },
    suspects: {
      T: {
        name: 'Tobit',
        role: 'Israelita piadoso e caritativo',
        clueText: 'No Patio Exterior repousando xunto ao muro co rostro destapado.'
      },
      A: {
        name: 'Ana',
        role: 'Esposa fiel e traballadora',
        clueText: 'No Obradoiro de Tecidos fiando xornadas enteiras para o sustento da casa.'
      },
      J: {
        name: 'Tobías',
        role: 'Fillo solícito que avisou do defunto',
        clueText: 'No obradoiro da súa nai, consternado tras atopar o cadáver na praza.'
      },
      V: {
        name: 'Veciño Exiliado',
        role: 'Crítico mordaz das esmolas',
        clueText: 'Na Sepultura Clandestina murmurando que a caridade só trouxo cegueira.'
      },
      M: {
        name: 'Morto Abandonado',
        role: 'Vítima estrangulada na praza',
        clueText: 'No patio exterior, xunto ao muro, antes de recibir piadosa sepultura.'
      }
    },
    clues: {
      c1: {
        text: 'Un israelita piadoso desobedecía as leis do imperio para enterrar en segredo aos compatriotas asasinados e abandonados.',
        narrative: 'Tobit consideraba un deber sagrado dar sepultura digna aos seus irmáns.'
      },
      c2: {
        text: 'Durante unha festividade, deixou a súa propia cea para dar sepultura a un home que acababa de ser estrangulado na praza.',
        narrative: 'Tobías entrou correndo a avisar ao seu pai da vítima asasinada.'
      },
      c3: {
        text: 'Por medo ás represalias e por sentirse impuro legalmente, esa noite decidiu durmir ao aire libre no seu patio.',
        narrative: 'O ancián deitouse ao pé da tapia exposto ao relento nocturno.'
      },
      c4: {
        text: 'Mentres durmía co rostro destapado, o excremento quente duns pardais caeulle directamente nos ollos.',
        narrative: 'O infortunio privou ao piadoso israelita da luz do sol.'
      },
      c5: {
        text: 'Ningún médico puido curalo; as cataratas deixárono cego e dependente economicamente da súa esposa durante catro anos.',
        narrative: 'Ana asumiu a carga do fogar tecendo no seu obradoiro.'
      }
    }
  }
};
