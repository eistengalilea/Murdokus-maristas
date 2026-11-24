import { RetoTraduccion } from './types';

export const RETOS_MEDIOS_EVANGELIOS_GL: Record<string, RetoTraduccion> = {
  // RETO 001-NT: La Danza Mortal -> A Danza Mortal
  '001-NT': {
    nombre: 'A Danza Mortal',
    categoria: 'Asesinatos ou crimes',
    citasBiblicas: 'Marcos 6, 17-29',
    textoBiblicoClave: 'A rapaza saíu e díxolle á súa nai: «¿Que vou pedir?». Ela contestoulle: «A cabeza de Xoán o Bautista». Inmediatamente entrou con présa diante do rei...',
    contextoTeologico: 'O martirio de Xoán o Bautista anticipa a paixón de Xesús. Fe Adulta salienta a valentía profética que denuncia a corrupción e a inmoralidade dos gobernantes, fronte á debilidade covarde dun poder que asasina para salvar as aparencias.',
    solucionExplicacion: 'Herodías odiaba a Xoán por denunciar o seu matrimonio ilícito con Herodes Antipas. Na festa de aniversario, a súa filla Salomé engaiolou ao rei cun baile. Instigada pola súa nai, pediu a cabeza de Xoán nunha bandexa de prata, e o rei mandou decapitalo na prisión.',
    storyIntro: 'Un soberano celebra o seu aniversario cun fastuoso banquete para nobres e militares. O baile hipnótico dunha moza esperta un xuramento imprudente que rematará co asasinato sanguento dun profeta na escuridade dunha alxube.',
    epilogue: '¡A bandexa de prata manchada co sangue do precursor! Herodes decapitou ao profeta de Deus para non quedar mal perante os seus convidados, convertendo un banquete de festa nunha traxedia infame.',
    subtitle: 'Asesinatos ou crimes · Marcos 6 · 7x7',
    badge: 'A DANZA MORTAL · 7x7',
    rooms: {
      sala_banquete: {
        name: 'Gran Salón do Banquete Real',
        shortName: 'Salón Banquete',
        description: 'Comedor fastuoso onde magnates e tribunos de Galilea celebraban o aniversario do tetrarca.'
      },
      estrado_danza: {
        name: 'Estrado Central da Danza',
        shortName: 'Estrado Danza',
        description: 'Alfombra onde a filla de Herodías cativou co seu baile ao monarca e aos seus comensais.'
      },
      camara_herodias: {
        name: 'Aposento Privado de Herodías',
        shortName: 'Cámara Herodías',
        description: 'Recinto secreto onde a raíña instigou á súa filla a pedir a execución inmediata do profeta.'
      },
      mazmorra_maqueronte: {
        name: 'Alxube Subterránea de Maqueronte',
        shortName: 'Alxube Cárcere',
        description: 'Cripta húmida e fonda na fortaleza onde Xoán o Bautista agardaba atado con cadeas.'
      },
      pasillo_verdugos: {
        name: 'Corredor de Garda e Verdugos',
        shortName: 'Corredor Garda',
        description: 'Pasaxe de pedra por onde o centinela levou a bandexa de prata ensanguentada.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Bandexa de Prata Real',
        description: 'Prato cerimonial solicitado por Salomé para presentar a cabeza decapitada.'
      },
      '2,5': {
        name: 'Decreto de Repudio Ilícito',
        description: 'Escrito censurado por Xoán que condenaba o matrimonio incestuoso de Herodes.'
      },
      '4,1': {
        name: 'Espada do Especulador Romano',
        description: 'Arma do verdugo da garda que executou a orde sumarísima na prisión.'
      },
      '6,3': {
        name: 'Grillóns de Ferro do Bautista',
        description: 'Cadeas que prendían ao precursor nas profundidades de Maqueronte.'
      }
    },
    suspects: {
      HA: {
        name: 'Herodes Antipas',
        role: 'Tetrarca de Galilea',
        clueText: 'Entristeceuse polo pedido, pero por non defraudar aos seus convidados cumpriu o xuramento.'
      },
      HE: {
        name: 'Herodías',
        role: 'Esposa Ilexítima e Raíña',
        clueText: 'Odiaba a morte a Xoán porque proclamaba: «Non che é lícito ter a muller do teu irmán».'
      },
      SA: {
        name: 'Salomé',
        role: 'Moza Bailarina',
        clueText: 'Entrou precipitadamente diante do rei esixindo: «Quero que agora mesmo me deas a cabeza de Xoán».'
      },
      JB: {
        name: 'Xoán o Bautista',
        role: 'Profeta e Prisioneiro',
        clueText: 'Voz veraz e incorruptible martirizada na soidade das alxubes.'
      },
      GU: {
        name: 'Garda Verdugo',
        role: 'Soldado da Escolta',
        clueText: 'Baixou á prisión de Maqueronte, decapitou ao profeta e trouxo o trofeo na bandexa.'
      },
      NO: {
        name: 'Noble Comensal',
        role: 'Tribuno Convidado de Honra',
        clueText: 'Testemuña do xuramento imprudente pronunciado ao calor do viño na festa.'
      },
      CA: {
        name: 'Carceleiro de Maqueronte',
        role: 'Gardián da Alxube',
        clueText: 'Abriu os ferrollos da cela ao emisario do tetrarca en plena noite.'
      }
    },
    clues: {
      c1: {
        text: 'O rei ofreceu á moza bailarina calquera cousa que pedise, ata a metade do seu reino.'
      },
      c2: {
        text: 'A moza non sabía que pedir e saíu do banquete para consultar coa súa nai.'
      },
      c3: {
        text: 'A nai odiaba ao prisioneiro porque este denunciaba constantemente o seu matrimonio ilícito co rei.'
      },
      c4: {
        text: 'A moza regresou e pediu inmediatamente a cabeza do prisioneiro nunha bandexa de prata.'
      },
      c5: {
        text: 'O rei entristeceuse, pero non quixo romper o seu xuramento fronte aos convidados ao banquete.'
      },
      c6: {
        text: 'O prisioneiro foi decapitado na alxube e a súa cabeza foi entregada á moza.'
      },
      c7: {
        text: 'A moza entregou a macabra recompensa á súa nai, consumando así a vinganza.'
      }
    }
  },

  // RETO 002-NT: El Toque Clandestino -> O Toque Clandestino
  '002-NT': {
    nombre: 'O Toque Clandestino',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Lucas 8, 43-48',
    textoBiblicoClave: 'Pero Xesús dixo: «Alguén me tocou, porque sentín que saíu unha forza de min». A muller, ao ver que non podía pasar desapercibida, achegouse tremendo...',
    contextoTeologico: 'A lei do Levítico consideraba impura á muller con hemorraxias, condenándoa ao illamento social. O Maxisterio subliña como Xesús racha o tabú relixioso da impureza, sandando non só o corpo, senón reintegrando á persoa á comunidade.',
    solucionExplicacion: 'Unha muller que padecía hemorraxias dende facía doce anos tocou ás agachadas o manto de Xesús no medio do balbordo. Ao quedar sandada ao instante, Xesús notou que unha forza saía del e fíxoa testemuñar publicamente para dignificala.',
    storyIntro: 'No medio dunha multitude caótica que empuxa a un rabí famoso cara á casa dun líder local, ocorre un milagre invisible. Ninguén ve o intre exacto, pero unha enerxía curativa delata que alguén rachou as regras de pureza ritual.',
    epilogue: '¡«Filla, a túa fe salvoute, vaite en paz»! A muller confesou o seu segredo perante toda a comitiva. O que a lei cualificaba de impureza transformouse en testemuño vivo do poder liberador da graza divina.',
    subtitle: 'Descubrimento de accións ocultas · Lucas 8 · 7x7',
    badge: 'O TOQUE CLANDESTINO · 7x7',
    rooms: {
      camino_apretujado: {
        name: 'Calexón Concurrido de Cafarnaúm',
        shortName: 'Calexón Xente',
        description: 'Calella estreita onde o xentío apretuxaba a Xesús camiño da casa de Xairo.'
      },
      borde_manto: {
        name: 'Zona dos Flocos do Manto (Tzitzit)',
        shortName: 'Floco Manto',
        description: 'Espazo ao nivel do chan por detrás de Xesús onde a man trémula rozou a orla da súa túnica.'
      },
      comitiva_jairo: {
        name: 'Avance da Familia de Xairo',
        shortName: 'Comitiva Xairo',
        description: 'Grupo impaciente do xefe da sinagoga que urxía ao Mestre a chegar antes de que a nena morrese.'
      },
      circulo_apostoles: {
        name: 'Círculo de Pedro e os Discípulos',
        shortName: 'Círculo Discípulos',
        description: 'Acompañantes inmediatos que expresaron o seu asombro perante a pregunta de quen o tocara.'
      },
      esquina_testimonio: {
        name: 'Bancada Pública do Testemuño',
        shortName: 'Bancada Testemuño',
        description: 'Recuncho onde a muller se axeonllou confesando a curación instantánea perante todos os presentes.'
      }
    },
    blockedObjects: {
      '0,5': {
        name: 'Orla de Liño e Flocos Azuis',
        description: 'Bordo do manto onde se concentrou a forza sandadora ao mero contacto da fe.'
      },
      '2,1': {
        name: 'Prescricións do Levítico',
        description: 'Leis cerimoniais sobre fluxos de sangue que apartaban á muller da sociedade.'
      },
      '4,6': {
        name: 'Frascos Baleiros de Médicos',
        description: 'Remedios caros nos que a muller gastara toda a súa fortuna durante doce anos.'
      },
      '6,2': {
        name: 'Reloxo de Area da Agonía',
        description: 'A présa angustiosa de Xairo cuxa filla de doce anos xacía a piques de expirar.'
      }
    },
    suspects: {
      J: {
        name: 'Xesús',
        role: 'O Mestre Sandador',
        clueText: 'Detívose en seco dicindo: «¿Quen me tocou? Porque sentín que unha forza saíu de min».'
      },
      MH: {
        name: 'Muller Hemorroísa',
        role: 'Enferma de Fe Valente',
        clueText: 'Tocou o bordo por detrás pensando: «Se tan só toco o seu manto, quedarei curada».'
      },
      P: {
        name: 'Pedro',
        role: 'Apóstolo Impulsivo',
        clueText: 'Obxectou perplexo: «Mestre, a multitude aprétate e achégate, ¿e preguntas quen te tocou?».'
      },
      JR: {
        name: 'Xairo',
        role: 'Xefe da Sinagoga',
        clueText: 'Ía á fronte guiando a Xesús desesperado por salvar a vida da súa única filla.'
      },
      D: {
        name: 'Discípulo Anónimo',
        role: 'Compañeiro de Camiño',
        clueText: 'Abría paso con dificultade entre a masa de veciños que enchía a rúa.'
      },
      SJ: {
        name: 'Servinte de Xairo',
        role: 'Criado Mensaxeiro',
        clueText: 'Chegaba correndo dende a casa coa nova: «A túa filla morreu; non molestes máis ao Mestre».'
      },
      EM: {
        name: 'Muller da Multitude',
        role: 'Testemuña da Rúa',
        clueText: 'Viu á hemorroísa abrirse paso furtivamente axeonllándose entre as pernas do xentío.'
      }
    },
    clues: {
      c1: {
        text: 'Unha gran multitude apretuxaba ao Mestre mentres se dirixía á casa dun xefe da sinagoga.'
      },
      c2: {
        text: 'Unha persoa impura pola lei levaba doce anos sufrindo unha enfermidade incurable.'
      },
      c3: {
        text: 'Esta persoa pensou que abondaba con rozar o bordo do manto do Mestre para quedar sa.'
      },
      c4: {
        text: 'Ao tocar o manto por detrás, a persoa sentiu inmediatamente que a súa enfermidade desaparecía.'
      },
      c5: {
        text: 'O Mestre detívose bruscamente preguntando quen o tocara, pois notou que unha forza saía del.'
      },
      c6: {
        text: 'O discípulo principal e outro compañeiro dixéronlle que era ilóxico preguntar iso no medio de tantos empurróns.'
      },
      c7: {
        text: 'A persoa culpable do toque prostrouse tremendo, confesou a verdade e recibiu a paz.'
      }
    }
  },

  // RETO 006-NT: El Aroma de la Pobreza Fingida -> O Aroma da Pobreza Finxida
  '006-NT': {
    nombre: 'O Aroma da Pobreza Finxida',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Xoán 12, 1-8',
    textoBiblicoClave: 'Xudas Iscariote dixo: «¿Por que non se vendeu este perfume por trescentos denarios e se lle deu aos pobres?». Pero dixo isto non porque lle importasen os pobres, senón porque era un ladrón...',
    contextoTeologico: 'Contrapón a entrega gratuíta e agarimosa de María fronte á hipocrisía utilitarista de Xudas. Fe Adulta destaca a crítica de Xesús aos falsos discursos sociais que instrumentalizan a causa dos pobres para ocultar a propia avaricia.',
    solucionExplicacion: 'María de Betania unxiu os pés de Xesús cun perfume de nardo purísimo de gran valor. Xudas protestou hipocritamente dicindo que se debía vender para axudar aos pobres, cando en realidade roubaba do peto común.',
    storyIntro: 'Nunha cea de celebración nunha aldea acolledora, unha muller quebra un frasco de perfume carísimo sobre os pés dun convidado especial. O tesoureiro do grupo monta en cólera en nome da caridade, pero o seu afán oculta un segredo escuro.',
    epilogue: '¡O perfume da gratitude fronte á cobiza do traidor! Xesús eloxiou a María por anticipar o aroma da súa sepultura, mentres o reproche hipócrita de Xudas deixou ao descuberto o corazón do ladrón que roubaba da bolsa común.',
    subtitle: 'Descubrimento de accións ocultas · Xoán 12 · 7x7',
    badge: 'O AROMA DA POBREZA FINXIDA · 7x7',
    rooms: {
      mesa_banquete: {
        name: 'Mesa Principal dos Óspedes',
        shortName: 'Mesa Banquete',
        description: 'Triclinio onde Xesús e Lázaro compartían o pan seis días antes da Pascua.'
      },
      pies_maestro: {
        name: 'Alfombra da Unción con Nardo',
        shortName: 'Alfombra Nardo',
        description: 'Lugar onde o frasco de alabastro foi quebrado e o perfume secado con cabelos.'
      },
      cocina_servicio: {
        name: 'Cociña do Afán de Marta',
        shortName: 'Cociña Marta',
        description: 'Estancia culinaria dende onde Marta servía con dilixencia a todos os comensais.'
      },
      esquina_bolsa: {
        name: 'Recuncho da Bolsa Común',
        shortName: 'Recuncho Bolsa',
        description: 'Posto sombrío onde Xudas custodiaba o peto do grupo subtraendo do que se depositaba.'
      },
      patio_exterior: {
        name: 'Patio Aberto de Betania',
        shortName: 'Patio Betania',
        description: 'Entrada onde os curiosos se congregaban atraídos tanto por Xesús como polo resucitado Lázaro.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Frasco Roto de Alabastro',
        description: 'Recipiente dunha libra de perfume lexítimo de nardo de altísimo prezo.'
      },
      '2,1': {
        name: 'Bolsa de Caudais Furtados',
        description: 'Caixa do diñeiro administrada fraudulentamente por Xudas Iscariote.'
      },
      '4,5': {
        name: 'Bandexa de Pans de Marta',
        description: 'Servizo solícito co que Marta agasallaba aos convidados en Betania.'
      },
      '6,0': {
        name: 'Sudario Dobrado de Lázaro',
        description: 'Vendas funerarias que lembraban a recente resurrección do irmán da casa.'
      }
    },
    suspects: {
      J: {
        name: 'Xesús',
        role: 'O Unxido de Deus',
        clueText: 'Aceptou a unción como anticipo do embalsamamento do seu corpo para a sepultura.'
      },
      MB: {
        name: 'María de Betania',
        role: 'Irmá Devota',
        clueText: 'Derramou o perfume carísimo de trescentos denarios e secou os pés cos seus cabelos.'
      },
      M: {
        name: 'Marta',
        role: 'Irmá Servizal',
        clueText: 'Atendía as mesas preparando viandas para agasallar ao Mestre e aos discípulos.'
      },
      JI: {
        name: 'Xudas Iscariote',
        role: 'Tesoureiro Traidor',
        clueText: 'Criticou o malgasto finxindo interese polos pobres, pois roubaba da bolsa común.'
      },
      L: {
        name: 'Lázaro',
        role: 'Irmán Resucitado',
        clueText: 'Recostado na mesa vivo despois de pasar catro días no sepulcro.'
      },
      SL: {
        name: 'Simón o Anfitrión',
        role: 'Dono da Casa',
        clueText: 'Ofreceu a cea de honra en Betania para celebrar os prodixios de Xesús.'
      },
      DC: {
        name: 'Discípulo Comensal',
        role: 'Apóstolo Convidado',
        clueText: 'Marabillado pola fragrancia intensa que enchía cada recuncho da estancia.'
      }
    },
    clues: {
      c1: {
        text: 'Durante unha cea a seis días da Pascua, unha muller colleu unha libra dun perfume carísimo de nardo puro.'
      },
      c2: {
        text: 'A muller rompeu o frasco, unxiu os pés do Mestre e secounos cos seus propios cabelos.'
      },
      c3: {
        text: 'Toda a casa encheuse do intenso aroma do perfume derramado.'
      },
      c4: {
        text: 'O tesoureiro do grupo protestou, argumentando que o perfume debera venderse por trescentos denarios para os pobres.'
      },
      c5: {
        text: 'O verdadeiro motivo do tesoureiro non era a caridade, senón que roubaba da bolsa común.'
      },
      c6: {
        text: 'O irmán da muller, que fora resucitado recentemente, estaba sentado á mesa como convidado.'
      },
      c7: {
        text: 'O Mestre defendeu á muller, afirmando que anticipara a unción do seu corpo para a sepultura.'
      }
    }
  },

  // RETO 010-NT: El Soborno del Sepulcro -> O Suborno do Sepulcro
  '010-NT': {
    nombre: 'O Suborno do Sepulcro',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Mateo 28, 1-15',
    textoBiblicoClave: 'Eles reuníronse cos anciáns e, despois de deliberar, deron unha gran suma de diñeiro aos soldados con esta encomenda: «Dicid que os seus discípulos viñeron de noite e roubaron o corpo mentres vós durmíades».',
    contextoTeologico: 'O evanxeo de Mateo desmonta unha das primeiras polémicas anticristiás (o suposto roubo do cadáver). Teoloxicamente, ilustra como o sistema corrupto tenta silenciar o acontecemento da Resurrección mediante o suborno e a desinformación.',
    solucionExplicacion: 'Tras a resurrección de Xesús, o Sanedrín subornou aos soldados romanos que custodiaban o sepulcro. Pagáronlles para que espallasen a mentira de que os discípulos roubaran o corpo mentres eles durmían.',
    storyIntro: 'A máxima autoridade política e relixiosa suborna a un escuadrón militar de elite para que admitan terse quedado durmidos no seu posto de garda. Todo para ocultar un suceso inexplicable fronte a unha tumba baleira.',
    epilogue: '¡«Non está aquí, resucitou como dixo»! Nin o selo de pedra, nin a garda romana, nin os cartos do Sanedrín puideron frear a proclamación do triunfo da vida sobre a morte.',
    subtitle: 'Descubrimento de accións ocultas · Mateo 28 · 7x7',
    badge: 'O SUBORNO DO SEPULCRO · 7x7',
    rooms: {
      huerto_sepulcro: {
        name: 'Horta da Tumba Labrada en Rocha',
        shortName: 'Horta Tumba',
        description: 'Xardín de Xosé de Arimatea onde a gran pedra redonda foi rodada da entrada.'
      },
      puesto_guardia: {
        name: 'Posto de Garda Militar Romana',
        shortName: 'Posto Garda',
        description: 'Campamento de vixilia onde os soldados caeron como mortos polo fulgor anxélico.'
      },
      sanedrin_reunion: {
        name: 'Cámara Secreta do Sanedrín',
        shortName: 'Cámara Sanedrín',
        description: 'Sala capitular onde os sacerdotes idearon o encubrimento e repartiron as moedas de prata.'
      },
      sendero_magdalena: {
        name: 'Camiño da Alborada e Aparición',
        shortName: 'Camiño Alborada',
        description: 'Senda por onde correu María Madalena chea de ledicia tras atopar o sepulcro aberto.'
      },
      calzadas_rumores: {
        name: 'Prazas Públicas de Xerusalén',
        shortName: 'Prazas Xerusalén',
        description: 'Rúas por onde os soldados difundiron a falsa historia do roubo nocturno do cadáver.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Pedra Rodada e Selo Quebrantado',
        description: 'Enorme laxe que pechaba o sepulcro apartada sen intervención humana.'
      },
      '2,3': {
        name: 'Lenenzos Mortuorios Enrolados',
        description: 'Sudario e vendas deixados pulcramente no seu sitio na peña baleira.'
      },
      '4,0': {
        name: 'Bolsa de Prata do Suborno',
        description: 'Suma cuantiosa pagada á garda romana para pactar a mentira.'
      },
      '6,5': {
        name: 'Pacto de Inmunidade con Pilato',
        description: 'Promesa do Sanedrín de calmar ao gobernador se a nova do sono chegaba aos seus oídos.'
      }
    },
    suspects: {
      J: {
        name: 'Xesús Resucitado',
        role: 'O Vencedor da Morte',
        clueText: 'Apareceu vivo ás mulleres ao amencer dicindo: «Alegrádevos; non teñades medo».'
      },
      MM: {
        name: 'María Madalena',
        role: 'Apóstolo dos Apóstolos',
        clueText: 'Chegou ao sepulcro de madrugada con aromas e viu a pedra corrida.'
      },
      G1: {
        name: 'Garda Romano Principal',
        role: 'Centinela Subornado',
        clueText: 'Esborrallouse de pánico ante o tremor e logo aceptou o suborno para espallar o engano.'
      },
      CF: {
        name: 'Caifás',
        role: 'Sumo Sacerdote',
        clueText: 'Convocou a sesión de urxencia do Sanedrín para comprar o silencio militar.'
      },
      AN: {
        name: 'Ancián do Sanedrín',
        role: 'Maxistrado Cómplice',
        clueText: 'Redactou o lema: «Dicid que viñeron os seus discípulos de noite e levárono».'
      },
      G2: {
        name: 'Segundo Garda Romano',
        role: 'Soldado Cómplice',
        clueText: 'Repetiu polos campamentos a versión falsa a cambio da súa parte do botín.'
      },
      AG: {
        name: 'Anxo do Señor',
        role: 'Heraldo Celestial',
        clueText: 'Descendeu coma un relampo con vestiduras brancas coma a neve e moveu a pedra.'
      }
    },
    clues: {
      c1: {
        text: 'Unha tumba foi asegurada cunha gran pedra e custodiada por soldados para evitar o roubo dun cadáver.'
      },
      c2: {
        text: 'Un violento terremoto sacudiu o lugar mentres un ser resplandecente baixaba do ceo e apartaba a pedra.'
      },
      c3: {
        text: 'Os custodios da tumba quedaron paralizados de terror, caendo ao chan como mortos.'
      },
      c4: {
        text: 'Ao recuperárense, os custodios correron á cidade para informar aos sumos sacerdotes do acontecido.'
      },
      c5: {
        text: 'As autoridades relixiosas, temendo que se soubese a verdade, entregaron unha gran suma de diñeiro aos custodios.'
      },
      c6: {
        text: 'A cambio dos cartos, os soldados debían difundir o rumor de que os discípulos roubaran o corpo de noite.'
      },
      c7: {
        text: 'O cadáver nunca foi atopado porque o sepultado volvera á vida.'
      }
    }
  }
};
