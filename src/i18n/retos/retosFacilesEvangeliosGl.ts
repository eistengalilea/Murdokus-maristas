import { RetoTraduccion } from './types';

export const RETOS_FACILES_EVANGELIOS_GL: Record<string, RetoTraduccion> = {
  // RETO 003-NT: El Prójimo Inesperado -> O Próximo Inesperado
  '003-NT': {
    nombre: 'O Próximo Inesperado',
    categoria: 'Desenlaces de historias e parábolas',
    citasBiblicas: 'Lucas 10, 25-37',
    textoBiblicoClave: 'Pero un samaritano que ía de viaxe chegou onde el estaba e, ao velo, compadeceuse. Achegouse, vendoulle as feridas botando nelas aceite e viño...',
    contextoTeologico: 'A parábola redefine radicalmente o concepto de próximo. Fe Adulta indica que Xesús critica a relixión centrada no culto e a pureza estéril, propoñendo que a verdadeira vontade de Deus se manifesta na misericordia activa e incondicional cara a quen sofre.',
    solucionExplicacion: 'Na parábola do bo samaritano, un home é ignorado por un sacerdote e un levita. Finalmente, é un samaritano (considerado herexe e inimigo polos xudeus) quen se compadece del, curándoo e pagando a súa estanza nunha pousada.',
    storyIntro: 'Un home moribundo xace nun camiño perigoso. Dous representantes da alta moralidade relixiosa ignórano, deixando a salvación en mans do personaxe máis odiado socialmente naquela época.',
    epilogue: '¡Misericordia que transcende fronteiras! O samaritano vendou as chagas do viaxeiro e pagou dous denarios ao hostaleiro para asegurar a súa curación. Xesús sentenciou: «Vai e fai ti o mesmo».',
    subtitle: 'Desenlaces de historias e parábolas · Lucas 10 · 5x5',
    badge: 'O PRÓXIMO INESPERADO · 5x5',
    rooms: {
      camino_jerico: {
        name: 'Baixada Rochosa de Xerusalén a Xericó',
        shortName: 'Camiño Xericó',
        description: 'Desfiladeiro solitario e escarpado azoutado por cuadrillas de bandoleiros do deserto.'
      },
      senda_orilla: {
        name: 'Beirarrúa de Evasión Ritual',
        shortName: 'Beira Evasión',
        description: 'Beira oposta do sendeiro por onde os ministros do culto pasaron de largo sen se deter.'
      },
      albergue_posada: {
        name: 'Pousada do Camiño',
        shortName: 'Pousada Albergue',
        description: 'Hostalería rústica onde o ferido recibiu teito, coidados e alimento nocturno.'
      },
      establo_cabalgadura: {
        name: 'Estábulo da Cabalgadura',
        shortName: 'Estábulo Cabalo',
        description: 'Patio onde o animal de carga transportou ao convalecente no lombo con paso amodo.'
      },
      mostrador_denarios: {
        name: 'Mostrador do Hostaleiro',
        shortName: 'Mostrador Pago',
        description: 'Mesa de madeira onde o samaritano depositou as moedas prometendo saldar todo gasto extra ao volver.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Frasco de Aceite e Viño',
        description: 'Bálsamo vertido nas chagas para desinfectar e aliviar o escozor.'
      },
      '2,1': {
        name: 'Dous Denarios de Prata',
        description: 'Xornal completo de dous días entregado ao hostaleiro para cubrir a estanza.'
      },
      '4,0': {
        name: 'Vendaxes de Liño Rasgadas',
        description: 'Tiras de tea coas que o samaritano contivo a hemorraxia do viaxeiro.'
      }
    },
    suspects: {
      H: {
        name: 'Home Asaltado',
        role: 'Viaxeiro Medio Morto',
        clueText: 'Desposuído das súas vestiduras e abandonado sangrando no po do camiño.'
      },
      S: {
        name: 'Sacerdote do Templo',
        role: 'Clérigo Indiferente',
        clueText: 'Viu ao ferido desde lonxe e deu un rodeo por medo á impureza cadavérica.'
      },
      L: {
        name: 'Levita',
        role: 'Ministro do Culto',
        clueText: 'Chegou ao mesmo sitio, mirou ao moribundo e pasou tamén de largo.'
      },
      M: {
        name: 'Bo Samaritano',
        role: 'Estranxeiro Compasivo',
        clueText: 'Sentiu compaixón entrañable, curou as feridas e cargou ao forasteiro na súa montura.'
      },
      P: {
        name: 'Hostaleiro',
        role: 'Dono da Pousada',
        clueText: 'Aceptou o diñeiro e coidou do hóspede seguindo as instrucións do samaritano.'
      }
    },
    clues: {
      c1: {
        text: 'Un viaxeiro foi asaltado, desposuído e abandonado medio morto no perigoso camiño a Xericó.',
        narrative: 'O home asaltado xacía sen forzas sobre as pedras do desfiladeiro.'
      },
      c2: {
        text: 'Dous relixiosos do templo pasaron de largo para non se contaminar e perder a súa pureza ritual.',
        narrative: 'O sacerdote e o levita cruzaron cara á beira de enfronte con paso apresurado.'
      },
      c3: {
        text: 'Un estranxeiro dun pobo inimigo achegouse, sentiu compaixón e vendou as súas feridas con aceite e viño.',
        narrative: 'O bo samaritano rompeu o odio sectario para socorrer ao caído.'
      },
      c4: {
        text: 'O estranxeiro levouno a unha pousada na súa propia cabalgadura para pasar a noite coidándoo.',
        narrative: 'O samaritano velou toda a noite xunto á cama da pousada.'
      },
      c5: {
        text: 'Ao marchar, o salvador pagou dous denarios ao dono da pousada comprometéndose a cubrir calquera gasto extra.',
        narrative: 'O hostaleiro recibiu a fianza de prata antes da alba.'
      }
    }
  },

  // RETO 005-NT: El Deudor Despiadado -> O Débedor Desapiadado
  '005-NT': {
    nombre: 'O Débedor Desapiadado',
    categoria: 'Desenlaces de historias e parábolas',
    citasBiblicas: 'Mateo 18, 23-35',
    textoBiblicoClave: 'O seu señor, indignado, entregouno aos verdugos ata que pagase toda a débeda. Así tamén vos tratará o meu Pai celestial se non perdoades de corazón cada un ao seu irmán.',
    contextoTeologico: 'A parábola aborda a esixencia cristiá do perdón comunitario. Fe Adulta insiste en que o perdón gratuíto que Deus ofrece ao ser humano cancélase a si mesmo se o ser humano non se converte en canle dese perdón cara aos demais.',
    solucionExplicacion: 'Na parábola do servo sen corazón, un rei perdoa unha enorme débeda ao seu servidor. Este, á súa vez, négase a perdoar unha débeda minúscula a un compañeiro. O rei, ao decatarse, castígao con dureza pola súa falta de misericordia.',
    storyIntro: 'Un home é salvado da ruína total pola infinita xenerosidade do seu señor. Inmediatamente despois, arruína a súa propia salvación ao estrangular a un subordinado por un feixe de moedas.',
    epilogue: '¡Xustiza divina inexorábel! A falta de misericordia anulou o perdón recibido. O rei entregou ao débedor desapiadado ao cárcere de tormento ata satisfacer o último céntimo da súa débeda.',
    subtitle: 'Desenlaces de historias e parábolas · Mateo 18 · 5x5',
    badge: 'O DÉBEDOR DESAPIADADO · 5x5',
    rooms: {
      trono_cuentas: {
        name: 'Sala do Trono e Axuste de Contas',
        shortName: 'Trono Contas',
        description: 'Audiencia real onde se perdoou a débeda astronómica de dez mil talentos.'
      },
      callejon_ahorcamiento: {
        name: 'Calellón do Agarre e Pescozo',
        shortName: 'Calellón Agarre',
        description: 'Lugar onde o funcionario colleu polo pescozo ao seu compañeiro esixíndolle os cen denarios.'
      },
      hogar_familia: {
        name: 'Casa e Familia do Servo',
        shortName: 'Casa Servo',
        description: 'Morada que estivo a piques de ser vendida con muller e fillos para satisfacer a débeda.'
      },
      prision_deudores: {
        name: 'Cárcere Público de Débedores',
        shortName: 'Cárcere Débedores',
        description: 'Mazmorra onde foi guindado o compañeiro sen escoitar os seus idénticos rogos de paciencia.'
      },
      camara_verdugos: {
        name: 'Aposento dos Verdugos',
        shortName: 'Cámara Verdugos',
        description: 'Recinto de castigo onde o rei entregou ao home ingrato tras revogar a súa clemencia.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Papiro de Dez Mil Talentos',
        description: 'Cifra impagábel perdoada xenerosamente polo soberano compasivo.'
      },
      '2,2': {
        name: 'Bolsa de Cen Denarios',
        description: 'Contía insignificante pola que o primeiro servo estrangulou ao seu próximo.'
      },
      '4,4': {
        name: 'Grillóns dos Verdugos',
        description: 'Cadeas coas que o servo sen entrañas foi aprisionado definitivamente.'
      }
    },
    suspects: {
      R: {
        name: 'O Rei Magnánimo',
        role: 'Soberano e Acreedor',
        clueText: 'Conmoveuse ante o chanto do seu funcionario e perdooulle toda a débeda.'
      },
      D1: {
        name: 'Primeiro Servo',
        role: 'Débedor Desapiadado',
        clueText: 'Recibiu o perdón real pero colleu ao seu compañeiro polo pescozo dicindo: «Págame o que debes».'
      },
      D2: {
        name: 'Segundo Servo',
        role: 'Compañeiro Encarcerado',
        clueText: 'Axeonllouse suplicando coas mesmas palabras: «Ten paciencia comigo e pagaréicho todo».'
      },
      E: {
        name: 'Esposa do Primeiro Servo',
        role: 'Familia Rescatada',
        clueText: 'Ía ser vendida como escrava xunto aos seus fillos segundo o primeiro mandato do rei.'
      },
      V: {
        name: 'O Verdugo',
        role: 'Carceleiro do Tormento',
        clueText: 'Recibiu a orde de non liberar ao débedor inicuo ata saldar o último talento.'
      }
    },
    clues: {
      c1: {
        text: 'Un monarca perdoou a un dos seus altos funcionarios unha débeda impagábel de dez mil talentos por pura compaixón.',
        narrative: 'O Rei escoitou a súplica do Primeiro Servo e rachou o pagaré.'
      },
      c2: {
        text: 'O funcionario perdoado saíu e atopou a un compañeiro que lle debía a ridícula suma de cen denarios.',
        narrative: 'O Primeiro Servo interceptou ao Segundo Servo no calellón.'
      },
      c3: {
        text: 'A pesar das súplicas idénticas do seu compañeiro, o funcionario negouse a perdoar e mandouno a prisión.',
        narrative: 'O Segundo Servo imploraba clemencia pero foi arrastrado ao calabozo.'
      },
      c4: {
        text: 'Outros empregados viron a inxustiza e correron a informar ao monarca do acontecido.',
        narrative: 'O palacio indignouse ao decatarse da crueldade do servo perdoado.'
      },
      c5: {
        text: 'O monarca, enfurecido, anulou o perdón anterior e entregou ao funcionario desapiadado aos verdugos.',
        narrative: 'O Verdugo apresou ao Primeiro Servo por mandato irrefutábel do soberano.'
      }
    }
  },

  // RETO 008-NT: El Sicómoro de Jericó -> O Sicómoro de Xericó
  '008-NT': {
    nombre: 'O Sicómoro de Xericó',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Lucas 19, 1-10',
    textoBiblicoClave: 'Ao chegar a aquel lugar, Xesús levantou a vista e díxolle: «Zaqueo, baixa axiña, porque hoxe teño que aloxarme na túa casa». El baixou a toda présa e recibiuno moi contento.',
    contextoTeologico: 'A historia ilustra a iniciativa salvífica de Deus («o Fillo do Home veu buscar e salvar o que estaba perdido»). Teoloxicamente, a auténtica conversión de Zaqueo non é só espiritual, senón que implica unha xustiza restitutiva radical dos bens económicos.',
    solucionExplicacion: 'Zaqueo, xefe de publicanos e de baixa estatura, subiu a un sicómoro para ver a Xesús. Xesús pediulle baixar para hospedarse na súa casa. Ante as críticas do pobo, Zaqueo converteuse e prometeu devolver o cuádruplo do roubado e dar a metade dos seus bens aos pobres.',
    storyIntro: 'Un alto cargo corrupto sobe a unha árbore fuxindo do xentío para espreitar ao profeta de moda. Para sorpresa de todos, o profeta convídase á súa casa, provocando a indignación da cidade e a salvación do corrupto.',
    epilogue: '¡A salvación chegou a esta casa! Zaqueo baixou do sicómoro con alegría inmensa, repartiu a metade da súa fortuna aos menesterosos e restituíu con creces todo o defraudado.',
    subtitle: 'Descubrimento de accións ocultas · Lucas 19 · 5x5',
    badge: 'O SICÓMORO DE XERICÓ · 5x5',
    rooms: {
      copa_sicomoro: {
        name: 'Pólas Altas da Árbore Sicómoro',
        shortName: 'Árbore Sicómoro',
        description: 'Follaxe mesta sobre o camiño onde o home pequeno gabeou para superar a barreira do xentío.'
      },
      calzada_multitud: {
        name: 'Calzada Principal de Xericó',
        shortName: 'Calzada Xericó',
        description: 'Avenida ateigada de peregrinos e veciños curiosos que apretuxaban ao Mestre.'
      },
      'mansión_zaqueo': {
        name: 'Mansión do Xefe de Recadadores',
        shortName: 'Mansión Zaqueo',
        description: 'Residencia opulenta onde se serviu o banquete e se selou o pacto de restitución pecuniaria.'
      },
      mesa_tributos: {
        name: 'Oficina de Aranceis Romanos',
        shortName: 'Oficina Aranceis',
        description: 'Posto fiscal onde os publicanos cobraban as taxas de paso e aduana sobre o bálsamo de Xericó.'
      },
      barrio_menesterosos: {
        name: 'Calellón dos Desfavorecidos',
        shortName: 'Calellón Pobres',
        description: 'Arrabalde humilde que se beneficiaría da doazón do cincuenta por cento dos caudais de Zaqueo.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Tronco Robusto do Sicómoro',
        description: 'Árbore providencial plantada ao bordo da calzada de paso obrigado.'
      },
      '2,0': {
        name: 'Balanza de Moedas Defraudadas',
        description: 'Instrumento co que Zaqueo cobraba sobreprezos aos comerciantes.'
      },
      '4,4': {
        name: 'Cofre da Metade dos Bens',
        description: 'Tesouro aberto con xenerosidade para auxiliar aos menesterosos da comarca.'
      }
    },
    suspects: {
      J: {
        name: 'Xesús',
        role: 'O Mestre de Galilea',
        clueText: 'Ergueu a vista cara ás pólas da árbore e chamou a Zaqueo polo seu propio nome.'
      },
      Z: {
        name: 'Zaqueo',
        role: 'Xefe de Publicanos de Xericó',
        clueText: 'Baixou do sicómoro e foi repartir a metade dos seus bens entre os pobres do barrio.'
      },
      M1: {
        name: 'Primeiro Murmurador',
        role: 'Fariseo Escandalizado',
        clueText: 'Criticou abertamente dicindo: «Entrou a hospedarse na casa dun pecador público».'
      },
      M2: {
        name: 'Segundo Murmurador',
        role: 'Veciño Indignado',
        clueText: 'Lembraba con rancor os impostos abusivos cobrados pola administración de Zaqueo.'
      },
      P: {
        name: 'Pobre de Xericó',
        role: 'Beneficiario da Restitución',
        clueText: 'Recibirá o cuádruplo do defraudado e a metade da fortuna do publicano converso.'
      }
    },
    clues: {
      c1: {
        text: 'Un home moi rico, xefe dos recadadores de impostos, desexaba ver quen era o Mestre que pasaba por Xericó.',
        narrative: 'Zaqueo buscaba entre o xentío o rostro do profeta nazareno.'
      },
      c2: {
        text: 'Debido á súa baixa estatura e á gran multitude, resultáballe imposible acadar o seu obxectivo desde o chan.',
        narrative: 'A masa de curiosos tapaba por completo o campo de visión do publicano.'
      },
      c3: {
        text: 'O home adiantouse correndo e subiu a unha árbore sicómoro para poder velo desde as alturas.',
        narrative: 'Zaqueo gabeou ás pólas altas sen importarlle o ridículo público.'
      },
      c4: {
        text: 'Ao chegar ao lugar, o Mestre ergueu a vista e pediulle que baixase rápido porque ía hospedarse na súa casa.',
        narrative: 'Xesús sorprendeu á multitude dirixíndose á árbore.'
      },
      c5: {
        text: 'Os presentes murmuraron escandalizados porque o Mestre entrara a aloxarse na casa dun pecador público.',
        narrative: 'Os dous murmuradores e o pobo criticaban a elección do Mestre.'
      }
    }
  },

  // RETO 009-NT: El Banquete del Perdón -> O Banquete do Perdón
  '009-NT': {
    nombre: 'O Banquete do Perdón',
    categoria: 'Desenlaces de historias e parábolas',
    citasBiblicas: 'Lucas 15, 11-32',
    textoBiblicoClave: 'O seu pai díxolle: «Fillo, ti sempre estás comigo, e todo o meu é teu; pero cumpría facer festa e alegrarse, porque este irmán teu estaba morto e reviveu...»',
    contextoTeologico: 'Coñecida na exéxese como «a parábola do Pai Misericordioso», retrata a un Deus cuxo amor rompe as lóxicas xurídicas do mérito (representadas polo irmán maior). É unha resposta contundente de Xesús aos fariseos que criticaban que acollese aos pecadores.',
    solucionExplicacion: 'É a parábola do Fillo Pródigo. O fillo menor malgasta a súa herdanza e volve arrepentido; o pai perdóao incondicionalmente e fai unha festa. O fillo maior representa aos relixiosos estritos, negándose a aceptar a misericordia inmerecida do seu pai.',
    storyIntro: 'Un fillo despreza á súa familia, fuxe coa súa parte do patrimonio e remata na miseria máis absoluta. Cando regresa buscando sobrevivir como peón, atopa unha festa que enfurece ao fillo leal que nunca marchou.',
    epilogue: '¡O anel no dedo e as sandalias nos pés! O pai saíu a suplicar ao irmán maior que entrase a compartir o gozo: «Este irmán teu estaba perdido e atopámolo».',
    subtitle: 'Desenlaces de historias e parábolas · Lucas 15 · 5x5',
    badge: 'O BANQUETE DO PERDÓN · 5x5',
    rooms: {
      umbral_paterno: {
        name: 'Camiño do Retorno e Abrazo do Pai',
        shortName: 'Camiño Abrazo',
        description: 'Linde da herdade onde o proxenitor viu vir ao rapaz farrapento e botou a correr cara a el.'
      },
      salon_banquete: {
        name: 'Sala do Banquete do Xato Cebado',
        shortName: 'Salón Banquete',
        description: 'Gran comedor engalanado con música, danzas e o mellor vestido reservado para o fillo restituído.'
      },
      campo_labranza: {
        name: 'Campos de Labor do Primoxénito',
        shortName: 'Campos Labor',
        description: 'Terras de labor de onde regresaba extenuado o fillo maior á noitiña.'
      },
      pocilga_algarrobas: {
        name: 'País Lonxano e Cortello de Porcos',
        shortName: 'Cortello Porcos',
        description: 'Lugar de humillación extrema onde o mozo desexou saciarse coas landras dos animais impuros.'
      },
      cocina_sirvientes: {
        name: 'Pavillón dos Servos e Xornaleiros',
        shortName: 'Pavillón Servos',
        description: 'Aposento onde os traballadores dispoñían de pan abondoso mentres o menor morría de fame.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Alfarrobas dos Porcos',
        description: 'Comida dos animais que ninguén no país lonxano quería darlle ao famento.'
      },
      '2,2': {
        name: 'Anel de Ouro e Mellor Túnica',
        description: 'Prazas de honra impostas ao fillo descalzo restituíndolle a súa dignidade familiar.'
      },
      '4,4': {
        name: 'Xato Cebado do Banquete',
        description: 'Manxar de gala sacrificado para celebrar o regreso á vida do irmán perdido.'
      }
    },
    suspects: {
      P: {
        name: 'O Pai',
        role: 'Proxenitor Misericordioso',
        clueText: 'Correu conmovido a abrazar ao seu fillo menor e saíu ao campo a rogar ao maior que entrase.'
      },
      HM: {
        name: 'Fillo Menor',
        role: 'O Fillo Pródigo Arrepentido',
        clueText: 'Recoñeceu o seu erro: «Pai, pequei contra o ceo e contra ti; xa non merezo ser chamado fillo teu».'
      },
      MY: {
        name: 'Fillo Maior',
        role: 'Irmán Escrupuloso e Indignado',
        clueText: 'Negouse a festexar alegando que nunca desobedeceu unha orde e xamais lle deron un cabrito.'
      },
      C: {
        name: 'O Criado',
        role: 'Servidor de Confianza',
        clueText: 'Informou ao irmán maior de que o seu irmán volvera san e salvo e por iso se fixera festa.'
      },
      A: {
        name: 'Amigo do Fillo Maior',
        role: 'Compañeiro de Labores',
        clueText: 'Testemuña do traballo fiel nos campos durante os anos de ausencia do menor.'
      }
    },
    clues: {
      c1: {
        text: 'Un rapaz esixiu a súa herdanza por adiantado e malgastouna nun país lonxano levando unha vida desordenada.',
        narrative: 'O fillo menor abandonou a casa paterna cargado de prata.'
      },
      c2: {
        text: 'Ao chegar unha fame negra, o mozo rematou envexando as alfarrobas dos porcos que coidaba.',
        narrative: 'O fillo menor caeu na maior das indixencias entre os porcinos.'
      },
      c3: {
        text: 'Arrepentido pola fame, decidiu volver á casa para pedir traballo como xornaleiro ao seu proxenitor.',
        narrative: 'Ensanchou o corazón e colleu o camiño de regreso descalzo.'
      },
      c4: {
        text: 'O seu proxenitor vioo de lonxe, correu a abrazalo e organizou un gran banquete cun xato cebado.',
        narrative: 'O Pai ordenou ao Criado sacar o mellor traxe e preparar o festín.'
      },
      c5: {
        text: 'O irmán maior, ao volver do campo e escoitar a música do banquete, negouse a entrar por indignación e celos.',
        narrative: 'O fillo maior e o seu amigo escoitaron os cantos con perplexidade e enfado.'
      }
    }
  }
};
