import { RetoTraduccion } from './types';

export const RETOS_MEDIOS_HECHOS_GL: Record<string, RetoTraduccion> = {
  // RETO 001-HCH: El Testigo Lapidado -> A Lapidación de Estevo
  '001-HCH': {
    nombre: 'A Lapidación de Estevo',
    categoria: 'Asesinatos ou crimes',
    citasBiblicas: 'Feitos 6, 8-15; 7, 54-60',
    textoBiblicoClave: 'Mentres o apedrexaban, Estevo oraba dicindo: «Señor Xesús, recibe o meu espírito». E, caendo de xeonllos, clamou con voz potente: «Señor, non lles tomes en conta este pecado». E, dito isto, durmiu.',
    contextoTeologico: 'Estevo encarna o modelo evanxélico de martirio: fidelidade ata o final e perdón aos opresores. A presenza silenciosa de Saulo consentindo a execución prepara o seu camiño de conversión.',
    solucionExplicacion: 'Estevo foi acusado falsamente de blasfemia perante o Sanedrín. Tras proclamar que vía a Xesús de pé á dereita de Deus, a turba enfurecida arrastrouno fóra de Xerusalén e apedreouno ata a morte. Os verdugos deixaron os seus mantos aos pés dun mozo chamado Saulo.',
    storyIntro: 'Un home acusado de blasfemia comparece ante o tribunal supremo. En lugar de pregar por piedade, pronuncia unha acusación fulminante contra os seus xuíces. A multitude, enfurecida, arrástrao fóra das murallas para unha execución sumaria.',
    epilogue: '¡O primeiro mártir da fe sela o seu testemuño co perdón! Estevo expirou mentres Saulo de Tarso, aínda cego polo fanatismo relixioso, gardaba a roupa dos executores.',
    subtitle: 'Asesinatos ou crimes · Feitos 6-7 · 7x7',
    badge: 'A LAPIDACIÓN DE ESTEVO · 7x7',
    rooms: {
      sala_sanedrin: {
        name: 'Sala Capitular do Sanedrín',
        shortName: 'Sala Sanedrín',
        description: 'Tribunal onde o rostro de Estevo resplandeceu coma o dun anxo durante a súa defensa.'
      },
      puerta_damasco: {
        name: 'Porta Norte e Muralla de Xerusalén',
        shortName: 'Porta Norte',
        description: 'Saída da cidade por onde a turba enfurecida arrastrou ao diácono en balbordo.'
      },
      foso_lapidacion: {
        name: 'Fondal do Pedregal Fóra do Muro',
        shortName: 'Foso Pedregal',
        description: 'Lugar de execución onde as falsas testemuñas lanzaron as pedras sobre a vítima.'
      },
      puesto_mantos: {
        name: 'Bancada dos Mantos aos Pés de Saulo',
        shortName: 'Bancada Mantos',
        description: 'Rocha onde o mozo fariseo Saulo vixiaba as roupas dos executores aprobando o linchamento.'
      },
      cielo_abierto: {
        name: 'Visión Celestial do Fillo do Home',
        shortName: 'Visión Ceo',
        description: 'A revelación da gloria divina e de Xesús de pé á destra do Pai antes do desenlace.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Acta de Acusación por Blasfemia',
        description: 'Documento manipulado no que se imputaba a Estevo falar contra Moisés e o Templo.'
      },
      '2,3': {
        name: 'Portal da Muralla Rebasado',
        description: 'Liar polo que os sacerdotes sacaron ao condenado fóra da cidade santa.'
      },
      '4,5': {
        name: 'Pilla de Mantos dos Culpables',
        description: 'Prendas depositadas aos pés do mozo Saulo para poder guindar pedras con soltura.'
      },
      '6,2': {
        name: 'Pedras Manchadas de Sangue',
        description: 'Canto rodado mortal recollido do leito rochoso do torrente de Cedrón.'
      }
    },
    suspects: {
      ES: {
        name: 'Estevo',
        role: 'Diácono Protomártir',
        clueText: 'Cheo do Espírito Santo exclamou: «Vexo os ceos abertos e ao Fillo do Home á dereita de Deus».'
      },
      SA: {
        name: 'Saulo',
        role: 'Mozo Fariseo Celoso',
        clueText: 'Custodiaba os mantos das testemuñas e consentía plenamente na morte de Estevo.'
      },
      T1: {
        name: 'Primeira Testemuña Falsa',
        role: 'Subornado da Sinagoga',
        clueText: 'Declarou con dolo: «Oímoslle dicir que Xesús de Nazaret destruirá este lugar santo».'
      },
      T2: {
        name: 'Segunda Testemuña Falsa',
        role: 'Acusador Cómplice',
        clueText: 'Quitouse a túnica exterior para guindar as primeiras pedras segundo a lei mosaica.'
      },
      SS: {
        name: 'Sumo Sacerdote',
        role: 'Presidente do Sanedrín',
        clueText: 'Preguntou a Estevo: «¿É verdade o que din estes?», e tapou os oídos perante a resposta.'
      },
      AN: {
        name: 'Ancián do Consello',
        role: 'Maxistrado Furioso',
        clueText: 'Ruxiu os dentes contra Estevo ao verse censurado como perseguidor dos xustos.'
      },
      VP: {
        name: 'Verdugo das Pedras',
        role: 'Executor da Turba',
        clueText: 'Lanzou os proxectís sobre o mártir axeonllado ata causarlle a morte.'
      }
    },
    clues: {
      c1: {
        text: 'Un diácono cheo de graza realizaba grandes prodixios e milagres entre o pobo.'
      },
      c2: {
        text: 'Membros da sinagoga subornaron a homes para que afirmasen que falara palabras blasfemas contra Moisés e Deus.'
      },
      c3: {
        text: 'Ao mirar ao acusado no tribunal supremo, o seu rostro parecía o dun anxo celestial.'
      },
      c4: {
        text: 'O acusado mirou fixamente ao ceo e dixo que vía a gloria de Deus e a Xesús de pé á dereita do Pai.'
      },
      c5: {
        text: 'Os xuíces taparon os oídos, berraron e arrastrárono fóra das murallas da cidade para executalo a pedradas.'
      },
      c6: {
        text: 'As testemuñas principais quitáronse os mantos para lanzar as pedras e deixáronos aos pés dun mozo fariseo.'
      },
      c7: {
        text: 'Antes de morrer, a vítima pediu a berros que non se lles tivese en conta este pecado aos seus verdugos.'
      }
    }
  },

  // RETO 003-HCH: El Sueño Profundo -> A Caída Mortal na Vixilia
  '003-HCH': {
    nombre: 'A Caída Mortal na Vixilia',
    categoria: 'Desenlaces de historias e parábolas',
    citasBiblicas: 'Feitos 20, 7-12',
    textoBiblicoClave: 'Pablo prolongou o seu discurso ata a medianoite. Había moitas lámpadas na sala de arriba... Un mozo chamado Éutico caeu nun sono profundo e precipitouuse dende o terceiro andar abaixo.',
    contextoTeologico: 'A escena en Tróade combina a solemnidade da fracción do pan coa debilidade humana ante o cansazo. Teoloxicamente, o milagre de Pablo confirma a vitoria da vida sobre a morte.',
    solucionExplicacion: 'En Tróade, Pablo predicou longamente ata a medianoite. O mozo Éutico, sentado nun xanel do terceiro andar, durmiuse polo fume e a calor das lámpadas e caeu ao baleiro, quedando morto. Pablo descendeu, abrazouno e devolveulle a vida.',
    storyIntro: 'Unha comunidade cristiá reúnese no andar superior dunha casa para compartir a cea do Señor. O predicador esténdese ata altas horas da madrugada. Un rapaz durmido no peitoril precipítase ao patio empedrado.',
    epilogue: '¡«Non vos alarmedes, que a súa alma está nel»! Pablo baixou, abrazou o corpo exánime de Éutico e o mozo recobrou o alento. Volveron subir, partiron o pan e continuaron falando gozosos ata o romper do día.',
    subtitle: 'Desenlaces de historias e parábolas · Feitos 20 · 7x7',
    badge: 'A CAÍDA MORTAL NA VIXILIA · 7x7',
    rooms: {
      sala_alta: {
        name: 'Cenáculo e Aposento do Terceiro Andar',
        shortName: 'Terceiro Andar',
        description: 'Aposento iluminado por numerosas lámpadas de aceite onde a comunidade partía o pan.'
      },
      marco_ventana: {
        name: 'Peitoril Perigoso da Ventá',
        shortName: 'Peitoril Ventá',
        description: 'Bordo elevado onde o mozo Éutico loitaba contra o sopor no medio da penumbra.'
      },
      patio_empedrado: {
        name: 'Patio Interior e Empedrado da Caída',
        shortName: 'Patio Caída',
        description: 'Chan de pedra no que impactou o corpo do rapaz tras precipitarse ao baleiro.'
      },
      mesa_fraccion: {
        name: 'Mesa da Fracción do Pan Eucarístico',
        shortName: 'Mesa Fracción',
        description: 'Mesa solemne onde continuaron a vixilia e a comida fraterna tras o milagre.'
      },
      escalera_exterior: {
        name: 'Escaleira Estreita de Acceso',
        shortName: 'Escaleira',
        description: 'Tramos de chanzos que Pablo baixou apresuradamente para socorrer ao infortunado.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Marco Esfarelado da Ventá',
        description: 'Abertura do terceiro andar dende onde Éutico caeu no seu profundo sono.'
      },
      '1,2': {
        name: 'Lámpadas de Aceite Fumentas',
        description: 'Luces que quentaban a sala e esgotaban o aire respirable da estancia.'
      },
      '4,0': {
        name: 'Pedras do Impacto',
        description: 'Punto exacto do chan onde o mozo foi erguido inerte e sen pulso.'
      },
      '6,5': {
        name: 'Pan Partido da Fracción',
        description: 'Alimento eucarístico consumido por Pablo e a asemblea ao subir de novo.'
      }
    },
    suspects: {
      P: {
        name: 'Pablo',
        role: 'O Apóstolo Incansable',
        clueText: 'Prolongou o seu discurso ata a medianoite porque debía partir ao amencer.'
      },
      EU: {
        name: 'Éutico',
        role: 'O Mozo Durmido',
        clueText: 'Sentado na ventá, vencido polo sono profundo, precipitouse ao baleiro.'
      },
      LC: {
        name: 'Médico Lucas',
        role: 'Cronista e Facultativo',
        clueText: 'Baixou a examinar o corpo e certificou pericialmente que fora erguido morto.'
      },
      CV: {
        name: 'Compañeiro de Viaxe',
        role: 'Misioneiro Acompañante',
        clueText: 'Acompañaba á delegación que agardaba embarcar no porto de Tróade.'
      },
      DC: {
        name: 'Dono da Casa',
        role: 'Anfitrión de Tróade',
        clueText: 'Ofreceu o seu aposento alto iluminado con abondosas lucernas para a vixilia.'
      },
      MA: {
        name: 'Muller Asistente',
        role: 'Fiel da Comunidade',
        clueText: 'Berrou desesperada ao ver esborrallarse ao mozo na escuridade da noite.'
      },
      SP: {
        name: 'Servidor do Pan',
        role: 'Diácono de Mesa',
        clueText: 'Custodiaba o pan e o cáliz agardando a que Pablo rematase de exhortar.'
      }
    },
    clues: {
      c1: {
        text: 'O orador principal tiña previsto viaxar ao día seguinte, polo que alongou o seu discurso ata a medianoite.'
      },
      c2: {
        text: 'A sala do terceiro andar estaba moi iluminada por numerosas lámpadas de aceite que consumían o osíxeno.'
      },
      c3: {
        text: 'Un mozo, sentado no bordo da ventá, foi vencido por un sono insuperable mentres escoitaba.'
      },
      c4: {
        text: 'Ao quedar completamente durmido, o mozo precipitouse ao baleiro dende o terceiro piso e foi recollido morto.'
      },
      c5: {
        text: 'O orador baixou inmediatamente da sala, botouse sobre o corpo do mozo e estreitouno entre os seus brazos.'
      },
      c6: {
        text: 'O orador tranquilizou á multitude asegurando que o mozo tiña vida nel.'
      },
      c7: {
        text: 'Despois do milagre, todos volveron subir, partiron o pan e seguiron falando ata o amencer.'
      }
    }
  },

  // RETO 005-HCH: La Ceguera del Hechicero -> A Cegueira do Feiticeiro
  '005-HCH': {
    nombre: 'A Cegueira do Feiticeiro',
    categoria: 'Asesinatos ou crimes',
    citasBiblicas: 'Feitos 13, 6-12',
    textoBiblicoClave: 'Ao instante caeron sobre el escuridade e tebras, e andaba ás apalpadelas buscando quen lle dese a man.',
    contextoTeologico: 'Marca un punto de inflexión onde Saulo asume o nome de Pablo e o liderado activo. Teoloxicamente, representa a vitoria da revelación cristiá sobre o esoterismo máxico e a manipulación psicolóxica.',
    solucionExplicacion: 'En Chipre, o falso profeta e mago Elimas tentou impedir que o procónsul Serxio Paulo se convertese. Pablo, cheo do Espírito, deixouno temporalmente cego, o que provocou a conversión do procónsul.',
    storyIntro: 'O gobernador dunha illa convida a dous predicadores á súa corte para escoitar a súa mensaxe. Un feiticeiro xudeu tenta boicotear a reunión manipulando ao gobernador. De socato, o meigo queda cego e precisa que o leven da man.',
    epilogue: '¡«¡Oh, cheo de todo engano e de toda maldade, fillo do demo!»! Elimas quedou sumido en mesto tebrume. Ao ver o acontecido, o procónsul Serxio Paulo abrazou a doutrina do Señor profundamente conmovido.',
    subtitle: 'Asesinatos ou crimes · Feitos 13 · 7x7',
    badge: 'A CEGUEIRA DO FEITICEIRO · 7x7',
    rooms: {
      palacio_proconsul: {
        name: 'Audiencia Imperial de Pafos',
        shortName: 'Audiencia Pafos',
        description: 'Sede gobernamental de Chipre onde Serxio Paulo convocou aos evanxelizadores.'
      },
      estrado_mago: {
        name: 'Aposento Esotérico de Barxesús (Elimas)',
        shortName: 'Estrado Elimas',
        description: 'Lugar onde o adiviño despregaba as súas artes arcanas para controlar as decisións do procónsul.'
      },
      zona_tinieblas: {
        name: 'Recuncho da Néboa e a Escuridade',
        shortName: 'Recuncho Cegueira',
        description: 'Espazo onde Elimas comezou a tropezar ás apalpadelas buscando unha man que o guiase.'
      },
      tribuna_pablo: {
        name: 'Púlpito de Proclamación de Pablo e Bernabé',
        shortName: 'Púlpito Misioneiro',
        description: 'Situación onde Pablo fixou os seus ollos no adversario proclamando o xuízo divino.'
      },
      patio_guardia: {
        name: 'Atrio dos Escribas e a Escolta',
        shortName: 'Atrio Escolta',
        description: 'Pórtico onde os secretarios romanos presenciaron o castigo sobrenatural.'
      }
    },
    blockedObjects: {
      '0,2': {
        name: 'Despacho de Convocatoria Consular',
        description: 'Convite oficial emitido polo procónsul para escoitar a Palabra de Deus.'
      },
      '2,0': {
        name: 'Talismán Astrolóxico de Elimas',
        description: 'Obxecto de adiviñación co que Barxesús enganaba á corte de Chipre.'
      },
      '4,2': {
        name: 'Néboa Súbita de Tebras',
        description: 'Escuridade repentina que privou da luz do sol aos ollos do feiticeiro.'
      },
      '6,5': {
        name: 'Selo do Senado Romano en Pafos',
        description: 'Emblema que acreditaba a xurisdición do gobernador Serxio Paulo.'
      }
    },
    suspects: {
      P: {
        name: 'Pablo',
        role: 'Apóstolo dos Xentís',
        clueText: 'Cheo do Espírito Santo fixou nel a mirada e declarou: «A man do Señor está contra ti».'
      },
      B: {
        name: 'Bernabé',
        role: 'Fillo da Consolación',
        clueText: 'Orixinario de Chipre, acompañou a Pablo ante o tribunal proconsular da súa patria.'
      },
      EL: {
        name: 'Elimas o Mago',
        role: 'Falso Profeta Xudeu',
        clueText: 'Procuraba apartar da fe ao procónsul ata que unha nube de tebras cegou os seus ollos.'
      },
      SP: {
        name: 'Serxio Paulo',
        role: 'Procónsul Ilustrado',
        clueText: 'Varón prudente que mandou chamar aos misioneiros desexoso de coñecer a verdade.'
      },
      JM: {
        name: 'Xoán Marcos',
        role: 'Auxiliar Evanxelizador',
        clueText: 'Asistía aos apóstolos na súa travesía dende Salamina ata a cidade de Pafos.'
      },
      SC: {
        name: 'Soldado da Corte',
        role: 'Gardián do Pretorio',
        clueText: 'Tivo que suxeitar da man a Elimas cando este comezou a tropezar cego pola estancia.'
      },
      MP: {
        name: 'Médico de Pafos',
        role: 'Facultativo Grego',
        clueText: 'Comprobou con asombro que os ollos do feiticeiro carecían de dano físico visible pero estaban cegos.'
      }
    },
    clues: {
      c1: {
        text: 'O gobernador era un home intelixente que desexaba sinceramente escoitar a palabra de Deus.'
      },
      c2: {
        text: 'O feiticeiro pertencía á corte do gobernador e interviña para apartalo da fe.'
      },
      c3: {
        text: 'Un dos predicadores, cheo do Espírito Santo, fixou a súa mirada penetrante no feiticeiro.'
      },
      c4: {
        text: 'O predicador denunciou ao feiticeiro acusándoo de ser fillo do demo e inimigo da xustiza.'
      },
      c5: {
        text: 'O predicador pronunciou unha sentenza: a man do Señor caería sobre el e non vería o sol por un tempo.'
      },
      c6: {
        text: 'Unha nube de escuridade caeu inmediatamente sobre os ollos do feiticeiro, deixándoo totalmente cego.'
      },
      c7: {
        text: 'Ao ver o poder que acompañaba á mensaxe, o gobernador creu inmediatamente.'
      }
    }
  },

  // RETO 007-HCH: El Fantasma en la Puerta -> A Pantasma na Porta
  '007-HCH': {
    nombre: 'A Pantasma na Porta',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Feitos 12, 1-17',
    textoBiblicoClave: 'Ao recoñecer a voz de Pedro, de pura ledicia non abriu a porta, senón que entrou correndo a anunciar que Pedro estaba á porta.',
    contextoTeologico: 'O relato ten un ton case cómico que resalta o inesperado da acción de Deus. A comunidade reza fervorosamente por un milagre, pero cando Deus responde, a incredulidade inicial demostra que a liberación é obra pura da graza.',
    solucionExplicacion: 'Pedro foi liberado milagrosamente da cadea por un anxo. Ao chegar á casa de María, a serventa Rode escoitouno, pero da emoción non lle abriu. Os discípulos non lle creron ata que o viron cara a cara.',
    storyIntro: 'Un líder relixioso, condenado a morte, aparece á medianoite petando á porta dunha casa. A moza que escoita a súa voz emociónase tanto que esquece abrirlle, deixando ao home na rúa mentres os de dentro cren que é unha alucinación.',
    epilogue: '¡As cadeas caeron e o ferrollo de ferro cedeu! Pedro explicou á asemblea como o Señor o librou das mans de Herodes e da expectación do pobo xudeu.',
    subtitle: 'Descubrimento de accións ocultas · Feitos 12 · 7x7',
    badge: 'A PANTASMA NA PORTA · 7x7',
    rooms: {
      prision_maxima: {
        name: 'Calabozo Militar da Fortaleza Antonia',
        shortName: 'Calabozo Prisión',
        description: 'Cela onde Pedro durmía atado con dúas cadeas entre dous soldados armados.'
      },
      puerta_hierro: {
        name: 'Portón Automático de Ferro',
        shortName: 'Portón Ferro',
        description: 'Cancel monumental que daba paso á cidade e abriuse espontaneamente sen chave.'
      },
      calle_medianoche: {
        name: 'Calexón Nocturno de Xerusalén',
        shortName: 'Calexón Noite',
        description: 'Senda solitaria por onde o apóstolo camiñou tras esvaecerse a presenza anxélica.'
      },
      portal_exterior: {
        name: 'Entreplanta e Porta Exterior da Casa',
        shortName: 'Portal Exterior',
        description: 'Entrada onde Pedro golpeaba repetidamente mentres a doncela corría cara ao interior.'
      },
      sala_oracion: {
        name: 'Aposento de Oración Fervente',
        shortName: 'Sala Oración',
        description: 'Estancia onde moitos fieis clamaban a Deus sen cesar pola vida de Pedro.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Dúas Cadeas de Ferro Caídas',
        description: 'Grillóns que se desprenderon milagrosamente dos pulsos de Pedro ao tocalo o anxo.'
      },
      '1,3': {
        name: 'Portón de Ferro Aberto',
        description: 'Gran porta da cidade que virou sobre os seus gonzos sen que ninguén a empuxase.'
      },
      '3,5': {
        name: 'Aldraba de Bronce da Casa',
        description: 'Aldraba que Pedro facía soar insistentemente agardando ser recibido.'
      },
      '5,2': {
        name: 'Velas da Vixilia Comunitaria',
        description: 'Luces que alumaban a oración incesante da igrexa na casa de María.'
      }
    },
    suspects: {
      P: {
        name: 'Pedro',
        role: 'Prisioneiro Liberado',
        clueText: 'Chamaba á porta tras cruzar a garda pensando primeiro que vivía un soño.'
      },
      HA: {
        name: 'Rei Herodes Agripa',
        role: 'Monarca Perseguidor',
        clueText: 'Matara a espada a Santiago e prendeu a Pedro para presentalo ante o pobo tras a Pascua.'
      },
      R: {
        name: 'Rode',
        role: 'Moza Serventa',
        clueText: 'Recoñeceu a voz de Pedro e de puro gozo non abriu o portal senón que correu dentro berrando.'
      },
      AG: {
        name: 'Anxo do Señor',
        role: 'Liberador Celestial',
        clueText: 'Firiu a Pedro no costado para espertalo e ordenoulle calzar as sandalias e cinguirse o manto.'
      },
      MM: {
        name: 'María (Nai de Marcos)',
        role: 'Anfitrioa da Vixilia',
        clueText: 'Acollía na súa morada á multitude que oraba con bágoas pola liberación apostólica.'
      },
      CG: {
        name: 'Centinela da Prisión',
        role: 'Garda de Quenda',
        clueText: 'Permaneceu sumido nun sopor sobrenatural mentres o recluso fuxía do seu carón.'
      },
      DI: {
        name: 'Discípulo Incrédulo',
        role: 'Fiel Rexeitador',
        clueText: 'Dixo á serventa: «¡Estás tola! É o seu anxo, non pode ser Pedro en persoa».'
      }
    },
    clues: {
      c1: {
        text: 'O líder da comunidade estaba encadeado entre dous gardas dentro dunha cela de máxima seguridade.'
      },
      c2: {
        text: 'A noite antes da súa execución, un ser luminoso espertou ao prisioneiro, e as cadeas caeron soas.'
      },
      c3: {
        text: 'Tras pasar a primeira e segunda garda, a porta de ferro que daba á cidade abriuse por si mesma.'
      },
      c4: {
        text: 'O líder, crendo que era unha visión, reaccionou e dirixiuse á casa onde a comunidade oraba por el.'
      },
      c5: {
        text: 'Unha serventa recoñeceu a súa voz ao petar á porta exterior, pero correu cara a dentro pola ledicia sen abrirlle.'
      },
      c6: {
        text: 'Os que rezaban na casa tacharon á serventa de tola, afirmando que debía ser o anxo do prisioneiro.'
      },
      c7: {
        text: 'Finalmente abriron a porta e, asombrados, escoitaron como o prisioneiro lles relataba a súa liberación.'
      }
    }
  },

  // RETO 009-HCH: La Adivina Silenciada -> A Adiviña Silenciada
  '009-HCH': {
    nombre: 'A Adiviña Silenciada',
    categoria: 'Asesinatos ou crimes',
    citasBiblicas: 'Feitos 16, 16-24',
    textoBiblicoClave: 'Ao ver os seus amos que se lles esfumara a esperanza de facer negocio, agarraron a Pablo e a Silas e arrastráronos á praza...',
    contextoTeologico: 'Amosa como o Evanxeo choca coa explotación humana. Fe Adulta salienta que liberar a unha persoa oprimida trae consecuencias penais cando ataca os intereses do capital. A salvación cristiá implica liberación integral.',
    solucionExplicacion: 'En Filipos, Pablo exorcizou a unha escrava que adiviñaba o futuro e enriquecía aos seus amos. Ao perder o seu negocio, os amos denunciaron falsamente a Pablo e Silas, quen foron azoutados e encarcerados ata que un terremoto os liberou.',
    storyIntro: 'Dous misioneiros son azoutados e encarcerados sen xuízo previo. O seu único "delito" foi realizar un exorcismo sobre unha muller que, paradoxalmente, non paraba de facerlles publicidade positiva polas rúas.',
    epilogue: '¡Medianoite de cánticos e cadeas rotas! O gran tremor abriu as portas do calabozo e o carceleiro de Filipos lavou as feridas e foi bautizado con toda a súa familia tras oír: «Cree no Señor Xesús e serás salvo».',
    subtitle: 'Asesinatos ou crimes · Feitos 16 · 7x7',
    badge: 'A ADIVIÑA SILENCIADA · 7x7',
    rooms: {
      foro_mercado: {
        name: 'Foro Público e Tribunal de Filipos',
        shortName: 'Foro Filipos',
        description: 'Praza maior onde os amos enfurecidos presentaron a falsa acusación de sedición.'
      },
      calle_pitonisa: {
        name: 'Avenida do Oráculo e Adiviñación',
        shortName: 'Avenida Oráculo',
        description: 'Rúa por onde a moza escrava seguía a Pablo berrando tras os seus pasos durante días.'
      },
      calabozo_hondo: {
        name: 'Calabozo Interior da Prisión',
        shortName: 'Calabozo Interior',
        description: 'Cela máis escura e subterránea onde os apóstolos tiñan os pés trabados no cepo.'
      },
      patio_carcelero: {
        name: 'Vivenda e Patio do Alcalde do Cárcere',
        shortName: 'Patio Alcalde',
        description: 'Residencia do carceleiro onde lavou os azoutamentos dos prisioneiros e compartiu a mesa.'
      },
      ribera_gangites: {
        name: 'Ribeira do Río Gangites',
        shortName: 'Ribeira Río',
        description: 'Lugar de oración fóra de murallas onde Pablo adoitaba acudir a ensinar os sábados.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Bolsa de Ganancias do Oráculo',
        description: 'Moedas cobradas polos amos mediante os vaticinios da moza oprimida.'
      },
      '2,1': {
        name: 'Símbolo do Espírito Pitónico',
        description: 'Influencia demoníaca da adiviñación expulsada polo mandato de Pablo.'
      },
      '4,5': {
        name: 'Cepo de Madeira para os Pés',
        description: 'Madeiro furado no que encaixaron con crueldade os nocellos dos apóstolos.'
      },
      '6,3': {
        name: 'Espada Desenvaiñada do Carceleiro',
        description: 'Arma coa que o oficial se ía quitar a vida crendo fuxidos aos reclusos.'
      }
    },
    suspects: {
      P: {
        name: 'Pablo',
        role: 'Misioneiro Exorcista',
        clueText: 'Dixo ao espírito: «Mándoche no nome de Xesucristo que saias dela». E saíu ao instante.'
      },
      S: {
        name: 'Silas',
        role: 'Compañeiro Azoutado',
        clueText: 'Cantaba himnos de loanza á medianoite no calabozo interior xunto a Pablo.'
      },
      JE: {
        name: 'Moza Escrava',
        role: 'Pitonisa Explotada',
        clueText: 'Gritaba tras eles: «Estes homes son servos do Deus Altísimo, quen vos anuncian o camiño de salvación».'
      },
      AE: {
        name: 'Amo da Escrava',
        role: 'Mercador Explotador',
        clueText: 'Ao ver que se esfumaba o seu negocio de lucro, arrastrou aos predicadores aos maxistrados.'
      },
      CF: {
        name: 'Carceleiro de Filipos',
        role: 'Oficial Converso',
        clueText: 'Caeu tremendo aos seus pés dicindo: «Señores, ¿que debo facer para ser salvo?».'
      },
      MR: {
        name: 'Maxistrado Romano',
        role: 'Pretor da Colonia',
        clueText: 'Ordenou rasgar as vestiduras dos apóstolos e golpealos severamente con varas.'
      },
      GV: {
        name: 'Garda con Varas',
        role: 'Lictor Executor',
        clueText: 'Propuxo os azoutes públicos aos reos na praza antes de entregalos ao calabozo.'
      }
    },
    clues: {
      c1: {
        text: 'Unha moza posuía un espírito de adiviñación que xeraba moitas ganancias económicas aos seus propietarios.'
      },
      c2: {
        text: 'A moza seguía aos misioneiros durante días berrando que eran servos do Deus Altísimo.'
      },
      c3: {
        text: 'O líder dos misioneiros fartouse da situación e ordenou ao espírito no nome de Xesucristo que saíse dela.'
      },
      c4: {
        text: 'Ao quedar liberada a moza, os seus propietarios decatáronse de que a súa fonte de ingresos desaparecera.'
      },
      c5: {
        text: 'Os donos arrastraron aos misioneiros á praza pública acusándoos de alterar a orde romana.'
      },
      c6: {
        text: 'Tras seren golpeados con varas, os misioneiros foron guindados ao calabozo máis escuro cos pés no cepo.'
      },
      c7: {
        text: 'Á medianoite, un terremoto liberou aos misioneiros e provocou a conversión do gardián da prisión.'
      }
    }
  }
};
