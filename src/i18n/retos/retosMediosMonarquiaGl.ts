import { RetoTraduccion } from './types';

export const RETOS_MEDIOS_MONARQUIA_GL: Record<string, RetoTraduccion> = {
  // RETO 001-C: La Carta de la Muerte -> A Carta da Morte
  '001-C': {
    nombre: 'A Carta da Morte',
    categoria: 'Asesinatos ou crimes',
    citasBiblicas: '2 Samuel 11, 1-27',
    textoBiblicoClave: 'David escribiu unha carta a Xoab e envioulla por medio de Urías. Na carta dicía: «Ponde a Urías na primeira liña, onde sexa máis duro o combate, e retirádevos del para que sexa ferido e morra».',
    contextoTeologico: 'Amosa sen paliativos a corrupción que produce o poder absoluto, mesmo no ungido de Deus. Fe Adulta subliña que a Biblia non idealiza aos líderes e que a dignidade da vítima (Urías, un estranxeiro fiel) pon en evidencia a podremia moral da corte.',
    solucionExplicacion: 'David cometeu adulterio con Betsabé e, tras fracasar no intento de que Urías durmise con ela para ocultalo, enviouno á fronte cunha carta selada para Xoab ordenando situalo onde o matasen. Urías levou a súa propia sentenza de morte sen sabelo.',
    storyIntro: 'Un rei poderoso comete un crime e intenta desesperadamente encubrilo. Cando a rectitude dun soldado honorable frustra todos os seus plans, o monarca utilízao como correo inconsciente da súa propia sentenza de morte.',
    epilogue: '¡O crime de Estado desvelado polo profeta Natán! Urías caeu fiel baixo os muros de Rabá mentres portaba a súa propia condena redactada polo rei. O Señor non deixou impune a infamia de David.',
    subtitle: 'Asesinatos ou crimes · 2 Samuel 11 · 7x7',
    badge: 'A CARTA DA MORTE · 7x7',
    rooms: {
      azotea_palacio: {
        name: 'Azotea do Pazo de Xerusalén',
        shortName: 'Azotea Pazo',
        description: 'Terraza real onde o monarca paseaba ao solpor e divisou o baño de Betsabé.'
      },
      casa_betsabe: {
        name: 'Mansión Familiar de Betsabé',
        shortName: 'Casa Betsabé',
        description: 'Vivenda lindeira onde a esposa de Urías recibiu o requirimento do monarca.'
      },
      muralla_raba: {
        name: 'Vangarda baixo a Muralla de Rabá',
        shortName: 'Muralla Rabá',
        description: 'Fronte de combate encarnizado onde os arqueiros amonitas acribillaron a Urías.'
      },
      tienda_joab: {
        name: 'Posto de Mando do Xeneral Xoab',
        shortName: 'Tenda Xoab',
        description: 'Campamento sitiador onde se abriu o prego real coa orde de traizón.'
      },
      umbral_guardia: {
        name: 'Limiar do Cuartel de Gardas',
        shortName: 'Limiar Gardas',
        description: 'Entrada onde Urías durmiu no chan negándose a baixar á súa casa por lealdade aos seus camaradas.'
      }
    },
    blockedObjects: {
      '0,5': {
        name: 'Prego Lacrado do Rei',
        description: 'Carta mortal levada por Urías sen coñecer o seu contido homicida.'
      },
      '2,2': {
        name: 'Copa de Viño da Festa Real',
        description: 'Vaso co que David emborrachou a Urías tentando forzar o seu regreso á casa.'
      },
      '4,0': {
        name: 'Escudo Hitita de Urías',
        description: 'Arma defensiva que non puido conter a chuvia de frechas inimigas.'
      },
      '6,3': {
        name: 'Saeta Amonita de Rabá',
        description: 'Proxectil disparado dende o adarve que abateu ao fiel guerreiro abandonado.'
      }
    },
    suspects: {
      D: {
        name: 'David',
        role: 'Rei de Israel',
        clueText: 'Permaneceu en Xerusalén redactando a orde de morte para encubrir o seu pecado.'
      },
      B: {
        name: 'Betsabé',
        role: 'Esposa de Urías',
        clueText: 'Gardou o loito polo seu esposo antes de ser introducida no harén real.'
      },
      U: {
        name: 'Urías',
        role: 'Soldado Leal Hitita',
        clueText: 'Negouse a gozar do seu fogar mentres a arca e o exército durmían en tendas.'
      },
      J: {
        name: 'Xoab',
        role: 'Xeneral do Exército',
        clueText: 'Situou a Urías no sector máis perigoso e ordenou a retirada estratéxica.'
      },
      M: {
        name: 'Mensaxeiro Real',
        role: 'Emisario de Campaña',
        clueText: 'Levou ao rei a nova da caída de varios oficiais e a morte de Urías.'
      },
      G: {
        name: 'Garda do Limiar',
        role: 'Centinela de Pazo',
        clueText: 'Viu a Urías descansar xunto aos servos do seu señor sen cruzar o portal da súa casa.'
      },
      C: {
        name: 'Capitán de Vangarda',
        role: 'Oficial de Asalto',
        clueText: 'Atestemuñou o retroceso premeditado das liñas baixo os muros amonitas.'
      }
    },
    clues: {
      c1: {
        text: 'O rei quedou no pazo mentres o seu exército loitaba en campaña militar contra os amonitas.'
      },
      c2: {
        text: 'Dende a azotea, o monarca viu á esposa dun dos seus guerreiros purificándose e cometeu adulterio con ela.'
      },
      c3: {
        text: 'Ao quedar en cinta a muller, o rei tentou que o esposo volvese durmir á súa casa para encubrir a paternidade.'
      },
      c4: {
        text: 'O guerreiro negouse a ir á súa casa por solidariedade coas tropas que durmían en tendas de campaña.'
      },
      c5: {
        text: 'O guerreiro levou ao comandante xeral unha carta selada escrita polo rei, ignorando que contiña a súa propia sentenza.'
      },
      c6: {
        text: 'O comandante cumpriu a orde: expuxo ao guerreiro na primeira liña de combate e ordenou a retirada para que o matasen.'
      },
      c7: {
        text: 'A viúva gardou o loito oficial, pero inmediatamente foi instalada no harén do monarca culpable.'
      }
    }
  },

  // RETO 003-C: El Viñedo Ensangrentado -> A Viña Ensanguentada
  '003-C': {
    nombre: 'A Viña Ensanguentada',
    categoria: 'Asesinatos ou crimes',
    citasBiblicas: '1 Reis 21, 1-24',
    textoBiblicoClave: 'Xezabel díxolle: «Éguete, come e anímate. Eu dareiche a viña de Nabot, o de Xizreel».',
    contextoTeologico: 'É un clásico da denuncia profética contra o latifundismo. Fe Adulta resalta que a monarquía corrompe o dereito antigo de Israel (a terra pertence a Deus). O profeta defende a xustiza social fronte ao absolutismo.',
    solucionExplicacion: 'A raíña Xezabel orquestrou un xuízo falso con testemuñas subornadas para asasinar a Nabot e así regalarlle a súa viña ao rei Acab. O profeta Elías interveu para denunciar este crime de Estado.',
    storyIntro: 'Un terratenente négase a vender un pequeno eido familiar ao rei. Semás despois, é executado publicamente por blasfemia e o rei toma posesión do terreo, pero un profeta interceptao na mesma leira.',
    epilogue: '¡A viña de Xizreel manchada de sangue inocente! Elías o tisbita confrontou cara a cara a Acab: no mesmo lugar onde os cans lamberon o sangue de Nabot, a xustiza divina sentenciou a caída da casa de Omrí.',
    subtitle: 'Asesinatos ou crimes · 1 Reis 21 · 7x7',
    badge: 'A VIÑA ENSANGUENTADA · 7x7',
    rooms: {
      palacio_acab: {
        name: 'Pazo Real de Samaría',
        shortName: 'Pazo Acab',
        description: 'Cámara onde Acab se deitou no seu leito, volveu o rostro á parede e se negou a comer.'
      },
      vina_nabot: {
        name: 'Viña Ancestral de Nabot',
        shortName: 'Viña Nabot',
        description: 'Fértil herdade contigua ao pazo que Nabot non quixo allear por fidelidade á Alianza.'
      },
      asamblea_ciudad: {
        name: 'Praza do Tribunal e Xaxún',
        shortName: 'Praza Tribunal',
        description: 'Lugar onde se convocou o xaxún farsesco e se sentou a Nabot á cabeza do pobo.'
      },
      pedregal_lapidacion: {
        name: 'Pedregal da Lapidación',
        shortName: 'Pedregal',
        description: 'Extramuros da cidade onde Nabot foi lapidado por orde das falsas testemuñas.'
      },
      camino_elias: {
        name: 'Sendeiro Profético do Carmelo',
        shortName: 'Sendeiro Elías',
        description: 'Ruta pola que Elías descendeu coa palabra de Yahvé acesa na súa gorxa.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Pámpanos e Acios da Viña',
        description: 'Viñedo cobizado polo rei para transformalo nunha horta de hortalizas.'
      },
      '2,4': {
        name: 'Cartas Reais Seladas por Xezabel',
        description: 'Instrucións secretas dirixidas aos anciáns para contratar testemuñas de perxurio.'
      },
      '4,6': {
        name: 'Morea de Pedras da Execución',
        description: 'Rochas ensanguentadas lanzadas contra o xusto Nabot fóra dos muros.'
      },
      '6,0': {
        name: 'Manto de Pelo de Elías',
        description: 'Símbolo do profetismo incorruptible que denunciou a tiranía do estado.'
      }
    },
    suspects: {
      A: {
        name: 'Acab',
        role: 'Rei de Israel',
        clueText: 'Aceptou a viña arrebatada baixando eufórico a tomar posesión dela.'
      },
      J: {
        name: 'Xezabel',
        role: 'Raíña de Israel',
        clueText: 'Usou o selo do rei e orquestrou a condena a morte con testemuñas subornadas.'
      },
      N: {
        name: 'Nabot',
        role: 'Terratenente Lexítimo',
        clueText: 'Declarou: «Líbreme Yahvé de darche a herdade dos meus pais».'
      },
      T1: {
        name: 'Primeira Testemuña Falsa',
        role: 'Acusador de Belial',
        clueText: 'Afirmou falsamente no tribunal: «Nabot maldixo a Deus e ao rei».'
      },
      T2: {
        name: 'Segunda Testemuña Falsa',
        role: 'Cómplice de Perxurio',
        clueText: 'Secundou a calumnia para asegurar a sentenza de lapidación inmediata.'
      },
      E: {
        name: 'Elías',
        role: 'Profeta de Yahvé',
        clueText: 'Interceptou ao rei na viña dicindo: «¿Asasinaches e aínda por riba tomas posesión?».'
      },
      M: {
        name: 'Moiordomo de Samaría',
        role: 'Funcionario Cómplice',
        clueText: 'Transmitiu as cartas da raíña aos maxistrados de Xizreel.'
      }
    },
    clues: {
      c1: {
        text: 'O monarca encaprichouse dunha viña contigua ao seu pazo para convertela nunha horta de hortalizas.'
      },
      c2: {
        text: 'O propietario negouse a vendela apelando á lei sagrada que prohibía allear a herdanza familiar.'
      },
      c3: {
        text: 'O monarca reaccionou cunha teima infantil, negándose a comer e tombándose de cara á parede.'
      },
      c4: {
        text: 'A súa esposa estranxeira usurpou o selo real e escribiu cartas aos anciáns da vila en nome do rei.'
      },
      c5: {
        text: 'Seguindo as cartas, convocouse un xaxún público e sentouse ao propietario da viña nun lugar destacado.'
      },
      c6: {
        text: 'Dous homes sen escrúpulos acusaron falsamente ao propietario de blasfemar contra Deus e contra a coroa.'
      },
      c7: {
        text: 'Tras ser lapidado inxustamente, o monarca baixou a tomar o terreo, pero o profeta de Yahvé anuncioulle a ruína da súa dinastía.'
      }
    }
  },

  // RETO 004-C: El Falso Enfermo -> O Falso Enfermo
  '004-C': {
    nombre: 'O Falso Enfermo',
    categoria: 'Asesinatos ou crimes',
    citasBiblicas: '2 Samuel 13, 1-22',
    textoBiblicoClave: 'Ela díxolle: «Non, meu irmán, non me violentes, que non se fai tal cousa en Israel; non cometas esta infamia».',
    contextoTeologico: 'Denuncia a violencia patriarcal e a impunidade dos privilexiados. A Biblia recolle con crueza como o desexo egoísta e a complicidade cortesá destrúen á muller inocente, amosando a fraxilidade moral da dinastía davídica.',
    solucionExplicacion: 'Amnón finxiu unha grave enfermidade aconsellado polo seu curmán Xonadab para que David lle enviase á súa media irmá Tamar a cociñarlle. Unha vez a soas, violouna e despois expulsouna con noxo e desprezo.',
    storyIntro: 'Un herdeiro real cae nunha paixón obsesiva e doentia. Seguindo o consello maquiavélico dun parente próximo, inventa unha doenza para atraer á súa media irmá a unha trampa sen saída na súa propia alcoba.',
    epilogue: '¡A vergoña da casa real! Tamar rasgou a súa túnica de princesa e botou cinza sobre a súa cabeza. David enfureceuse pero non quixo castigar ao seu primoxénito, sementando a futura vinganza mortal de Absalón.',
    subtitle: 'Asesinatos ou crimes · 2 Samuel 13 · 7x7',
    badge: 'O FALSO ENFERMO · 7x7',
    rooms: {
      cocina_tortas: {
        name: 'Mesa de Amasar as Tortas',
        shortName: 'Mesa Tortas',
        description: 'Lugar onde Tamar amasou á vista do suposto enfermo as tortas reconfortantes.'
      },
      palacio_david: {
        name: 'Sala de Audiencias de David',
        shortName: 'Pazo David',
        description: 'Trono onde o rei atendeu o rogo enganoso de Amnón e ordenou á súa filla que acudise.'
      },
      residencia_absalon: {
        name: 'Mansión Protectora de Absalón',
        shortName: 'Casa Absalón',
        description: 'Refuxio fraterno onde Tamar desolada achou asilo e o seu irmán xurou silencio e vinganza.'
      },
      galeria_cerrojos: {
        name: 'Galería do Ferrollo Exterior',
        shortName: 'Galería Ferrollo',
        description: 'Corredor onde o servinte expulsou bruscamente á doncela botando a tranca.'
      },
      lecho_amnon: {
        name: 'Aposento Privado de Amnón',
        shortName: 'Leito Amnón',
        description: 'Habitación pechada con ferrollo onde o primoxénito finxiu estar consumido para cometer a aldraxe.'
      }
    },
    blockedObjects: {
      '0,0': {
        name: 'Fonte de Fariña e Tixola',
        description: 'Ingredientes cos que a princesa cociñou a prol do seu irmán.'
      },
      '2,3': {
        name: 'Túnica de Mangas Longas Rasgada',
        description: 'Vestimenta talar propia das fillas virxes do rei, esgazada pola dor.'
      },
      '4,5': {
        name: 'Ferrollo de Ferro da Porta',
        description: 'Tranca que o criado asegurou ao guindar a Tamar ao exterior da alcoba.'
      },
      '6,1': {
        name: 'Daga Vingadora de Absalón',
        description: 'Aceiro afiado en segredo polo irmán de nai para axustar contas en Baal-Hazor.'
      }
    },
    suspects: {
      A: {
        name: 'Amnón',
        role: 'Príncipe Primoxénito',
        clueText: 'Simulou prostración finxida e despois aborreceu á súa irmá con maior desprezo que amor.'
      },
      T: {
        name: 'Tamar',
        role: 'Princesa Irmá de Absalón',
        clueText: 'Suplicou a Amnón que non cometese tal aldraxe e pediu que falase co rei.'
      },
      J: {
        name: 'Xonadab',
        role: 'Conselleiro e Curmán',
        clueText: 'Suxeridor do maquiavélico engano da falsa doenza ao primoxénito.'
      },
      D: {
        name: 'David',
        role: 'Rei e Pai',
        clueText: 'Enviou a Tamar á casa de Amnón e aínda que enfureceu non castigou ao seu herdeiro.'
      },
      B: {
        name: 'Absalón',
        role: 'Irmán Protector',
        clueText: 'Recibiu á súa irmá desolada na súa casa e urdiu a vinganza silenciosa.'
      },
      M: {
        name: 'Doncela de Tamar',
        role: 'Criada de Compañía',
        clueText: 'Ordenada a saír da cámara xunto con todos os criados antes do ataque.'
      },
      S: {
        name: 'Servo da Porta',
        role: 'Criado de Amnón',
        clueText: 'Cumpriu a orde de sacar á doncela pola forza e botar o ferrollo tras ela.'
      }
    },
    clues: {
      c1: {
        text: 'O fillo primoxénito do rei consumíase de desexo prohibido pola súa media irmá, que era virxe.'
      },
      c2: {
        text: 'Un curmán astuto suxeriu ao primoxénito que finxise estar gravemente enfermo para recibir a visita do rei.'
      },
      c3: {
        text: 'O rei, enganado pola farsa, ordenou á súa filla que preparase unhas tortas á vista do suposto enfermo.'
      },
      c4: {
        text: 'Unha vez a soas na habitación, o primoxénito forzou á moza, ignorando as súas súplicas e a súa oferta dun matrimonio legal.'
      },
      c5: {
        text: 'Inmediatamente despois do crime, o amor obsesivo do agresor transformouse en noxo visceral e expulsouna.'
      },
      c6: {
        text: 'A vítima rasgou a súa túnica de mangas longas (propia de princesas) e botou cinza sobre a súa cabeza berrando de dor.'
      },
      c7: {
        text: 'O seu irmán de pai e nai acolleuna na súa casa e planeou en silencio unha vinganza mortal.'
      }
    }
  },

  // RETO 006-C: El Manto Rasgado -> O Manto Rasgado
  '006-C': {
    nombre: 'O Manto Rasgado',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: '1 Reis 11, 1-40',
    textoBiblicoClave: 'Axías colleu o manto novo que levaba, rasgouno en doce anacos e díxolle a Xeroboán: «Toma dez anacos...»',
    contextoTeologico: 'Explica teoloxicamente o Cisma de Israel. Fe Adulta amosa que a "gloria" salomónica se baseaba na opresión laboral e no sincretismo. A infidelidade á Alianza e a inxustiza social destrúen a unidade nacional.',
    solucionExplicacion: 'Debido á idolatría de Salomón e ao traballo forzado, o profeta Axías rasgou o seu manto novo en doce anacos, dándolle dez a Xeroboán para profetizar que Deus fracturaría a monarquía unida, entregándolle dez tribus do norte.',
    storyIntro: 'O monarca máis glorioso de Israel mancha o seu legado permitindo o culto a deuses estranxeiros e o traballo escravo. En resposta, un enigmático encontro en pleno campo cun manto novo predice a inevitable fractura do reino.',
    epilogue: '¡O imperio rachado en dez anacos! O manto novo rasgado por Axías de Siló sentenciou a ruína da dinastía unida. A prepotencia fiscal e os santuarios pagáns crebaron o soño salomónico para sempre.',
    subtitle: 'Descubrimento de accións ocultas · 1 Reis 11 · 7x7',
    badge: 'O MANTO RASGADO · 7x7',
    rooms: {
      palacio_idolatrico: {
        name: 'Altos de Culto Pagán de Salomón',
        shortName: 'Altos Pagán',
        description: 'Santuarios erixidos fronte a Xerusalén a Milcom e Quemós para compracer ás súas mulleres estranxeiras.'
      },
      campo_silo: {
        name: 'Campo Deserto nos Arredores de Xerusalén',
        shortName: 'Campo Siló',
        description: 'Lugar solitario onde o profeta Axías e o capataz Xeroboán se atoparon a soas.'
      },
      obras_milo: {
        name: 'Fortificación do Miló e Muro Real',
        shortName: 'Obras Miló',
        description: 'Construcións masivas onde os servos da casa de Xosé sufrían duros traballos forzados.'
      },
      camara_reina: {
        name: 'Aposento da Raíña Naamá',
        shortName: 'Cámara Naamá',
        description: 'Recinto da princesa amonita, nai de Roboán, cuxo culto idolátrico desviou ao sabio rei.'
      },
      frontera_egipto: {
        name: 'Ruta de Exilio cara a Exipto',
        shortName: 'Ruta Exipto',
        description: 'Camiño polo que Xeroboán fuxiu buscando refuxio baixo a protección do faraón Sisac.'
      }
    },
    blockedObjects: {
      '0,2': {
        name: 'Altar de Astarté e Quemós',
        description: 'Santuarios idolátricos construídos sobre o monte das Oliveiras por Salomón.'
      },
      '2,5': {
        name: 'Retallos do Manto Rasgado',
        description: 'Dez anacos de tea nova que anunciaron a entrega de dez tribos ao rebelde.'
      },
      '4,4': {
        name: 'Maza de Pedra das Obras do Miló',
        description: 'Ferramenta de canteira que atestemuaba a explotación da tribo de Efraín.'
      },
      '6,0': {
        name: 'Vasilla do Faraón Sisac',
        description: 'Emblema do asilo que o monarca exipcio concedeu ao fuxitivo Xeroboán.'
      }
    },
    suspects: {
      S: {
        name: 'Salomón',
        role: 'Rei no Ocaso',
        clueText: 'Quixo matar a Xeroboán apenas chegou aos seus oídos o oráculo do profeta de Siló.'
      },
      J: {
        name: 'Xeroboán',
        role: 'Capataz Efraimita',
        clueText: 'Recibiu dez dos doce anacos e alzouse como futuro rei do reino do norte.'
      },
      A: {
        name: 'Axías',
        role: 'Profeta de Siló',
        clueText: 'Interceptou ao capataz a soas no camiño e rasgou o seu manto flamante en doce xiróns.'
      },
      N: {
        name: 'Naamá',
        role: 'Esposa Amonita',
        clueText: 'Manteu as ofrendas a Moloc en Xerusalén impulsando o corazón do rei ao extravío.'
      },
      R: {
        name: 'Roboán',
        role: 'Príncipe Herdeiro',
        clueText: 'Futuro rei que respondería aos anciáns con látegos e escorpións provocando o cisma.'
      },
      C: {
        name: 'Capataz Real',
        role: 'Inspector de Canteiras',
        clueText: 'Supervisaba ás cuadrillas de leñadores e albaneis do norte baixo ordes de Xeroboán.'
      },
      H: {
        name: 'Heraldo de Siló',
        role: 'Testemuña do Campo',
        clueText: 'Viu ao profeta regresar a Siló vestindo unicamente o seu saial vello.'
      }
    },
    clues: {
      c1: {
        text: 'O rei sabio de Israel avellentouse e deixouse seducir polas súas numerosas esposas pagás.'
      },
      c2: {
        text: 'O rei comezou a construír santuarios a deuses estranxeiros fronte a Xerusalén, rompendo a fidelidade exclusiva a Yahvé.'
      },
      c3: {
        text: 'Un eficiente capataz da tribo de Efraín foi posto ao mando dos traballos forzados do norte.'
      },
      c4: {
        text: 'Un profeta de Siló interceptou ao capataz cando este saía de Xerusalén e quedaron a soas no campo.'
      },
      c5: {
        text: 'O profeta levaba un manto novo, o cal rasgou violentamente en doce anacos perante o capataz.'
      },
      c6: {
        text: 'A acción simbolizaba que Deus arrincaría a maior parte do reino á dinastía reinante, deixando só unha tribo.'
      },
      c7: {
        text: 'Ao decatarse da profecía, o rei tentou asasinar ao capataz, quen tivo que exiliarse en Exipto.'
      }
    }
  },

  // RETO 008-C: Atrapado en la Encina -> Atrapado na Aciñeira
  '008-C': {
    nombre: 'Atrapado na Aciñeira',
    categoria: 'Desenlaces de historias e parábolas',
    citasBiblicas: '2 Samuel 18, 1-33',
    textoBiblicoClave: 'Xoab colleu tres dardos e cravounos no corazón de Absalón, mentres este aínda estaba vivo no medio da aciñeira.',
    contextoTeologico: 'Mosaico conmovedor sobre a traxedia familiar e política. Fe Adulta destaca a dor dun pai que por riba do triunfo militar só ve a perda irreversible do seu fillo: «¡Fillo meu, quen me dera morrer no teu lugar!»',
    solucionExplicacion: 'Absalón fuxía durante a batalla cando a súa longa melena quedou enredada nas pólas dunha gran aciñeira. A pesar da orde de David de perdoarlle a vida ao mozo, o xeneral Xoab cravoulle tres dardos e executouno.',
    storyIntro: 'Un fillo arrogante e fermoso eríxese en líder dunha rebelión armada contra o seu propio pai. Durante a fuxida tras a derrota dos seus soldados, a súa lendaria cabeleira convértese na súa sentenza de morte.',
    epilogue: '¡O pranto inconsolable de David en Majanayin! A vitoria militar do exército tornouse en loito amargo: o orgullo de Absalón quedou sepultado baixo unha morea de pedras na fraga de Efraín.',
    subtitle: 'Desenlaces de historias e parábolas · 2 Samuel 18 · 7x7',
    badge: 'ATRAPADO NA ACIÑEIRA · 7x7',
    rooms: {
      gran_encina: {
        name: 'Gran Aciñeira da Fraga de Efraín',
        shortName: 'Gran Aciñeira',
        description: 'Árbore grosa onde a cabeleira de Absalón quedou atrapada mentres o seu mulo seguiu de longo.'
      },
      puerta_majanayin: {
        name: 'Portal e Torre de Majanayin',
        shortName: 'Torre Majanayin',
        description: 'Acceso á praza fortificada onde o rei David agardaba novas co corazón encollido.'
      },
      camino_llanura: {
        name: 'Camiño da Chairega do Xordán',
        shortName: 'Camiño Chairega',
        description: 'Ruta despexada por onde correu velozmente o mensaxeiro Ahimaas adiantando aos emisarios.'
      },
      fosa_pedruscos: {
        name: 'Gran Fosa e Morea de Pedras',
        shortName: 'Fosa Pedras',
        description: 'Buraco fondo na fraga onde botaron o corpo sen vida de Absalón cuberto de pedras.'
      },
      bosque_efrain: {
        name: 'Espesura do Bosque de Efraín',
        shortName: 'Bosque Efraín',
        description: 'Matogueira impenetrable e barrancos onde o bosque devorou máis soldados ca a espada.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Mulo Real que Seguiu de Longo',
        description: 'Cabalgadura sobre a que escapaba o rebelde ata quedar suspendido das pólas.'
      },
      '2,4': {
        name: 'Tres Dardos de Xoab',
        description: 'Saetas mortais cravadas con saña no peito de Absalón polo xeneral.'
      },
      '4,6': {
        name: 'Corno de Shofar do Alto o Lume',
        description: 'Corneta coa que Xoab detivo a matanza tras abater ao cabecilla.'
      },
      '6,2': {
        name: 'Túmulo Fúnebre na Fraga',
        description: 'Enorme montón de pedras erixido sobre o cadáver do fillo do rei.'
      }
    },
    suspects: {
      A: {
        name: 'Absalón',
        role: 'Príncipe Usurpador',
        clueText: 'Atrapado indefenso pola súa cabeleira entre o ceo e a terra na gran aciñeira.'
      },
      J: {
        name: 'Xoab',
        role: 'Comandante en Xefe',
        clueText: 'Desprezou a orde expresa de clemencia do rei e executou persoalmente a Absalón.'
      },
      D: {
        name: 'David',
        role: 'Rei e Pai Aflixido',
        clueText: 'Ordenou a todos os seus mandos: «Tratádeme con suavidade ao mozo Absalón».'
      },
      S: {
        name: 'Soldado Informador',
        role: 'Guerreiro Temeroso de Deus',
        clueText: 'Rexeitou as dez moedas de Xoab dicindo que non tocaría ao fillo do monarca nin por mil siclos.'
      },
      M: {
        name: 'Ahimaas',
        role: 'Mensaxeiro Veloz',
        clueText: 'Correu polo atallo do val para levar primeiro a nova do triunfo militar.'
      },
      E: {
        name: 'Escudeiro de Xoab',
        role: 'Armeiro Rematador',
        clueText: 'Un dos dez mozos armeiros que rodearon e feriron a Absalón na árbore.'
      },
      C: {
        name: 'Centinela da Torre',
        role: 'Vixía de Majanayin',
        clueText: 'Avisou ao monarca dende o alto da muralla da chegada dos mensaxeiros.'
      }
    },
    clues: {
      c1: {
        text: 'O fillo rebelde usurpara o trono do seu pai mediante unha revolta populista e lideraba un gran exército.'
      },
      c2: {
        text: 'Antes da batalla, o ancián rei ordenou publicamente aos seus xenerais que tratasen con suavidade ao mozo usurpador.'
      },
      c3: {
        text: 'O exército rebelde foi masacrado nun combate feroz onde o terreo escarpado devorou máis homes que a espada.'
      },
      c4: {
        text: 'O usurpador fuxía no seu mulo cando a súa abundante cabeleira, da cal presumía, quedou fortemente enredada nunha aciñeira.'
      },
      c5: {
        text: 'Un soldado atopouno suspendido, pero negouse a rematalo lembrando a orde estrita do monarca.'
      },
      c6: {
        text: 'O comandante xeral do exército, desprezando a piedade do rei, cravou tres dardos no corazón do usurpador inmobilizado.'
      },
      c7: {
        text: 'Ao recibir a noticia da vitoria, o rei chorou amargamente pechado no seu cuarto, lamentando non ter morrido no seu lugar.'
      }
    }
  },

  // RETO 009-C: El Ídolo en la Cama -> O Ídolo na Cama
  '009-C': {
    nombre: 'O Ídolo na Cama',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: '1 Samuel 19, 11-17',
    textoBiblicoClave: 'Mical colleu o ídolo, deitouno na cama, púxolle na cabeceira unha pel de cabra e cubriuno cun cobertor.',
    contextoTeologico: 'Expón a división familiar provocada polo poder absoluto. Fe Adulta resalta como Mical usa a astucia e a insubmisión para subverter as ordes inxustas do Estado. Ironicamente, un ídolo doméstico protexe ao ungido de Yahvé.',
    solucionExplicacion: 'Mical salvou a David dos emisarios de Saúl. Descolgouno por unha ventá e meteu un ídolo na cama cuberto de pelos de cabra para enganar aos sicarios finxindo que David estaba gravemente enfermo.',
    storyIntro: 'Unha princesa ten que elixir entre a lealdade ao seu pai, que é o rei, e a vida do seu esposo. Para asegurar a fuxida, utiliza un falso manequín caseiro que engana aos culpables reais ata o amencer.',
    epilogue: '¡O cobertor destapado perante os emisarios reais! Saúl ordenou traer a David na súa propia cama para matalo coas súas mans, pero os soldados só acharon un ídolo doméstico con la de cabra na cabeceira.',
    subtitle: 'Descubrimento de accións ocultas · 1 Samuel 19 · 7x7',
    badge: 'O ÍDOLO NA CAMA · 7x7',
    rooms: {
      alcoba_david: {
        name: 'Alcoba Nupcial de David e Mical',
        shortName: 'Alcoba Mical',
        description: 'Leito conxugal onde se colocaron os terafíns cubertos con pel lanuda.'
      },
      ventana_escape: {
        name: 'Ventá Posterior da Muralla',
        shortName: 'Ventá Escape',
        description: 'Abertura que daba cara ao campo exterior por onde David baixou descolgado con cordas.'
      },
      palacio_saul: {
        name: 'Cámara Real de Saúl en Guibeá',
        shortName: 'Pazo Saúl',
        description: 'Trono onde o monarca impaciente agardaba o cadáver do seu xenro para saciar os seus celos.'
      },
      puerta_emboscada: {
        name: 'Limiar Vixiado polos Sicarios',
        shortName: 'Limiar Sicarios',
        description: 'Calexón onde os espías de Saúl montaron garda toda a noite para arrestar a David á alborada.'
      },
      refugio_ramat: {
        name: 'Outeiros de Fuxida cara a Ramat',
        shortName: 'Ruta Ramat',
        description: 'Senda pedregosa pola que David escapou para poñerse baixo o amparo de Samuel.'
      }
    },
    blockedObjects: {
      '0,2': {
        name: 'Estatua do Ídolo Terafín',
        description: 'Figura de tamaño humano vestida con roupas de David no leito.'
      },
      '2,4': {
        name: 'Corda Tranzada de Escape',
        description: 'Soga atada ao marco da ventá pola que descendeu David ao baleiro.'
      },
      '4,6': {
        name: 'Pel e Tecido de Pelo de Cabra',
        description: 'Guedellas colocadas na almofada imitando a cabeleira dun home durmido.'
      },
      '6,0': {
        name: 'Maca Portátil para Levar ao Reo',
        description: 'Leito ordenado por Saúl para traer a David aínda que estivese moribundo.'
      }
    },
    suspects: {
      S: {
        name: 'Saúl',
        role: 'Rei Perseguidor',
        clueText: 'Increpou á súa filla dicindo: «¿Por que me enganaches e deixaches escapar ao meu inimigo?».'
      },
      D: {
        name: 'David',
        role: 'Ungido en Fuxida',
        clueText: 'Escapou nas sombras da noite antes de que os gardas irrompesen na súa casa.'
      },
      M: {
        name: 'Mical',
        role: 'Princesa e Esposa',
        clueText: 'Dixo aos emisarios: «Está enfermo», atrasando o rexistro ata o mediodía.'
      },
      S1: {
        name: 'Primeiro Sicario',
        role: 'Garda Apostado',
        clueText: 'Vixiou o portalón da casa asegurando que ninguén sairía con vida ao amencer.'
      },
      S2: {
        name: 'Segundo Sicario',
        role: 'Garda Rexistrador',
        clueText: 'Retirou o cobertor e exclamou perplexo ao ver que só había madeira e pel de cabra.'
      },
      C: {
        name: 'Criada Cómplice',
        role: 'Serventa de Confianza',
        clueText: 'Trouxo o cobertor e a pel de cabra sen facer ruído para armar o reclamo.'
      },
      R: {
        name: 'Mensaxeiro do Rei',
        role: 'Emisario de Guibeá',
        clueText: 'Regresou correndo perante Saúl coa orde de traer a cama ao pazo.'
      }
    },
    clues: {
      c1: {
        text: 'O monarca, consumido polos celos políticos, enviou sicarios para vixiar de noite a casa do seu propio xenro.'
      },
      c2: {
        text: 'A princesa, namorada do seu esposo, advertiulle que se non escapaba esa mesma noite, mataríano ao amencer.'
      },
      c3: {
        text: 'A muller axudou ao seu esposo a fuxir descolgándoo por unha ventá traseira cara ao exterior.'
      },
      c4: {
        text: 'Para gañar tempo, a muller colleu un ídolo doméstico, deitouno na cama e púxolle pelo de cabra na cabeza.'
      },
      c5: {
        text: 'Cando os sicarios chegaron a arrestalo, ela díxolles que o seu esposo estaba moi enfermo postrado na cama.'
      },
      c6: {
        text: 'O monarca ordenou aos mensaxeiros que trouxesen ao xenro coa cama e todo para asasinalo el mesmo.'
      },
      c7: {
        text: 'Ao levantar o cobertor, descubriron a farsa, e a princesa mentiu ao seu pai dicindo que fora obrigada baixo ameaza.'
      }
    }
  }
};
