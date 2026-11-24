import { RetoTraduccion } from './types';

export const RETOS_MEDIOS_GENESIS_GL: Record<string, RetoTraduccion> = {
  // RETO 001: La Venganza en Siquén -> A Vinganza en Siquem
  '001': {
    nombre: 'A Vinganza en Siquem',
    categoria: 'Asesinatos ou crimes',
    citasBiblicas: 'Xénese 34, 1-29',
    textoBiblicoClave: 'Ao terceiro día, cando máis lles doía, dous fillos de Xacob, Simeón e Leví, irmáns de Dina, colleron as súas espadas, entraron na cidade sen atoparen resistencia e mataron a todos os homes.',
    contextoTeologico: 'A exéxese histórico-crítica sitúa este relato como un reflexo das tensións e integracións tribais en Canaán. Teoloxicamente, a Biblia non oculta a violencia patriarcal, pero amosa un rexeitamento á vinganza desproporcionada, como se aprecia na condena final de Xacob (Xén 49, 5-7).',
    solucionExplicacion: 'Simeón e Leví vingaron a honra da súa irmá Dina. Enganaron a Siquem e aos homes da súa vila esixíndolles a circuncisión para poderen emparentar. Ao terceiro día, aproveitando a súa dor e convalecencia, asasináronos a espada.',
    storyIntro: 'Unha moza é deshonrada. Os líderes da cidade procuran arranxalo cun pacto matrimonial e económico, pero un sanguento engano deixa a todos os homes da vila pasados a coitelo mentres convalecían.',
    epilogue: '¡Dictame forense completado! Simeón e Leví perpetraron a masacre no intre de maior vulnerabilidade da cidade. Dina foi rescatada, pero a desmesura da represalia provocou o severo reproche de Xacob.',
    subtitle: 'Asesinatos ou crimes · Xénese 34 · 7x7',
    badge: 'A VINGANZA EN SIQUEM · 7x7',
    rooms: {
      tienda_dina: {
        name: 'Aposento de Dina en Siquem',
        shortName: 'Ap. Dina',
        description: 'Aposento onde Dina estivo retida e onde Simeón irrompeu para rescatala a espada.'
      },
      palacio_jamor: {
        name: 'Pazo do Príncipe Jamor',
        shortName: 'Pazo Jamor',
        description: 'Residencia dos gobernantes heveos onde Leví abateu os líderes da cidade.'
      },
      zona_convalecencia: {
        name: 'Zona de Convalecencia Cidadá',
        shortName: 'Convalecencia',
        description: 'Casas dos homes siquemitas que repousaban ao terceiro día do pacto.'
      },
      puerta_ciudad: {
        name: 'Porta Principal de Siquem',
        shortName: 'Porta Siquem',
        description: 'Lugar do consello cidadán onde Jamor convenceu aos homes de aceptar o trato.'
      },
      campamento_jacob: {
        name: 'Campamento de Xacob',
        shortName: 'Camp. Xacob',
        description: 'Tendas de Israel nos arredores, alleo á matanza planeada polos seus fillos.'
      },
      muros_siquen: {
        name: 'Murallas Fortificadas',
        shortName: 'Murallas',
        description: 'Defensas desertas que non puideron rexeitar o asalto por sorpresa.'
      },
      campo_saqueo: {
        name: 'Campos e Corrais do Saqueo',
        shortName: 'Saqueo',
        description: 'Prados da cidade onde os demais irmáns levaron ovellas e bois.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Espada de Bronce',
        description: 'Arma desenvaiñada polos fillos de Xacob para executar a vinganza.'
      },
      '2,2': {
        name: 'Muro Ameado',
        description: 'Varandas de pedra do pazo onde se pactou o dote infrutuoso.'
      },
      '4,6': {
        name: 'Vasillas de Botín',
        description: 'Bens e alfaias confiscados tras a incursión dos irmáns.'
      },
      '6,1': {
        name: 'Portón da Cidade',
        description: 'Gran porta de trabes de cedro franqueada sen resistencia.'
      }
    },
    suspects: {
      D: {
        name: 'Dina',
        role: 'Única muller / Vítima inicial do aldraxe',
        clueText: 'No seu aposento de Siquem agardando a súa liberación.'
      },
      S: {
        name: 'Simeón',
        role: 'Irmán vingador a espada / Culpable do asalto',
        clueText: 'Entrou no aposento de Dina a soas para rescatala a sangue e lume.'
      },
      L: {
        name: 'Leví',
        role: 'Irmán coautor da represalia',
        clueText: 'Asaltou o Pazo de Jamor pola vía central.'
      },
      Q: {
        name: 'Siquem',
        role: 'Fillo de Jamor / Perpetrador do aldraxe inicial',
        clueText: 'Aínda convalecente, preto da porta principal de Siquem.'
      },
      H: {
        name: 'Jamor',
        role: 'Príncipe heveo / Pai de Siquem',
        clueText: 'Na Porta Principal da urbe xunto ao consello.'
      },
      J: {
        name: 'Xacob',
        role: 'Pai que non participou e reprochou o perigo',
        clueText: 'Permanece no Campamento de Xacob na zona oriental.'
      },
      M: {
        name: 'Habitante siquemita',
        role: 'Varón convalecente da cidade',
        clueText: 'Alcanzado nos corrais durante o saqueo final.'
      }
    },
    clues: {
      c1: {
        text: 'A única muller da listaxe foi a vítima inicial dun aldraxe.'
      },
      c2: {
        text: 'O perpetrador do aldraxe (Siquem) e o seu pai tentaron arranxar a situación ofrecendo dote.'
      },
      c3: {
        text: 'Os dous irmáns esixiron o requisito doloroso que incapacitou aos homes ao terceiro día.'
      },
      c4: {
        text: 'Leví avanzou sobre o pazo nobre dos gobernantes heveos.'
      },
      c5: {
        text: 'O príncipe Jamor agardaba na gran porta comunal.'
      },
      c6: {
        text: 'O pai dos vingadores non participou e condenou o descrédito perante os cananeos.'
      },
      c7: {
        text: 'Os varóns convalecentes da cidade non puideron opoñer defensa ningunha.'
      }
    }
  },

  // RETO 006: El Sello y el Cordón -> O Selo e o Cordón
  '006': {
    nombre: 'O Selo e o Cordón',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Xénese 38, 1-26',
    textoBiblicoClave: 'Xudá recoñeceunos e dixo: «Ela é máis xusta ca min, porque non lla dei ao meu fillo Selah como esposa». E non volveu durmir con ela.',
    contextoTeologico: 'Tamar reivindica a súa dignidade e dereito á descendencia fronte ao incumprimento da lei do levirato polo seu sogro Xudá. A narración exalta o valor de Tamar, quen pasará a figurar na xenealoxía de Xesús (Mt 1, 3).',
    solucionExplicacion: 'Tamar, viúva e desatendida por Xudá, disfrazouse de rameira xunto ao camiño de Timná e demandoulle a Xudá as súas prendas persoais (selo, cordón e caxato) como aval. Ao ser condenada despois por embarazo, amosou as prendas demostrando que o propio Xudá era o pai.',
    storyIntro: 'Unha muller dobremente viúva é marxinada sen recibir ao fillo menor prometido. Anos despois, unha estratexia de disfrace nun encrucillamento recupera o dereito á descendencia mediante tres pezas persoais irrefutables.',
    epilogue: '¡Xustiza pericial corroborada! Ao presentar o selo, o cordón e o bastón diante do tribunal, Xudá tivo que recoñecer publicamente a súa falta e a xustiza lexítima de Tamar.',
    subtitle: 'Descubrimento de accións ocultas · Xénese 38 · 7x7',
    badge: 'O SELO E O CORDÓN · 7x7',
    rooms: {
      cruce_enaim: {
        name: 'Encrucillamento de Enaim',
        shortName: 'Enaim',
        description: 'Bifurcación do camiño cara a Timná onde Tamar agardou cuberta cun veo.'
      },
      tienda_juda: {
        name: 'Tenda Patriarcal de Xudá',
        shortName: 'T. Xudá',
        description: 'Morada de Xudá onde retivo a Selah sen entregalo á súa nora por medo á súa morte.'
      },
      camino_timna: {
        name: 'Camiño da Esquía en Timná',
        shortName: 'C. Timná',
        description: 'Sendeiro poeirento por onde subían os rabaños e o amigo adulamita co cabrito.'
      },
      esquileo_ovejas: {
        name: 'Corrais da Esquía',
        shortName: 'Esquía',
        description: 'Festa da la onde os criados e pastores celebraban a esquía anual.'
      },
      casa_tamar: {
        name: 'Casa Paterna de Tamar',
        shortName: 'Casa Tamar',
        description: 'Vivenda onde Tamar gardou rigoroso loito tras quedar viúva dúas veces.'
      },
      tribunal_juicio: {
        name: 'Praza do Xuízo e Fogueira',
        shortName: 'Tribunal',
        description: 'Lugar onde se prendeu o lume para queimala antes de amosar as tres pezas.'
      },
      almacen_prendas: {
        name: 'Cofre Secreto das Pezas',
        shortName: 'Pezas',
        description: 'Arqueta onde Tamar custodiou celosamente o selo, o cordón e o bastón.'
      }
    },
    blockedObjects: {
      '1,3': {
        name: 'Selo Cilíndrico e Cordón',
        description: 'Selo persoal de Xudá colgado do seu cordón como peza de pagamento.'
      },
      '3,1': {
        name: 'Báculo de Pastor',
        description: 'Bastón de madeira labrada pertencente ao patriarca da tribo.'
      },
      '5,5': {
        name: 'Pira de Lume',
        description: 'Leña disposta para a queima pública antes de revelarse a verdade.'
      },
      '0,6': {
        name: 'Vellón da Esquía',
        description: 'Fardo de la acabada de cortar nas cortes de Timná.'
      }
    },
    suspects: {
      T: {
        name: 'Tamar',
        role: 'Nora viúva / Reclamante lexítima de xustiza',
        clueText: 'No Encrucillamento de Enaim a soas co patriarca.'
      },
      J: {
        name: 'Xudá',
        role: 'Patriarca / Entregou o selo e o cordón',
        clueText: 'Na súa tenda patriarcal, retendo ao seu fillo por medo.'
      },
      S: {
        name: 'Selah',
        role: 'Terceiro fillo retido por Xudá',
        clueText: 'Permanece na Tenda de Xudá sen ser enviado a Tamar.'
      },
      E: {
        name: 'Er',
        role: 'Primeiro marido defunto de Tamar',
        clueText: 'Memoria na Casa Paterna de Tamar.'
      },
      O: {
        name: 'Onán',
        role: 'Segundo marido defunto / Negou a descendencia',
        clueText: 'A súa memoria evócase na praza do xuízo, xunto á fogueira.'
      },
      H: {
        name: 'Hirá',
        role: 'Amigo adulamita de Xudá',
        clueText: 'Chegou á praza do xuízo tras buscar en van á prostituta polo camiño de Timná.'
      },
      P: {
        name: 'Pastor da esquía',
        role: 'Testemuña da xornada da la',
        clueText: 'Observa preto do Cofre Secreto das Pezas.'
      }
    },
    clues: {
      c1: {
        text: 'Unha muller quedou viúva dúas veces sucesivas sen lograr ter descendencia.'
      },
      c2: {
        text: 'O sogro prometeu entregarlle o seu terceiro fillo pero non cumpriu por medo.'
      },
      c3: {
        text: 'Selah medrou na tenda de Xudá sen ser enviado ao levirato.'
      },
      c4: {
        text: 'A memoria do primeiro defunto Er repousa na casa paterna.'
      },
      c5: {
        text: 'O recordo de Onán evócase na praza do xuízo de Timná.',
        narrative: 'Onán é lembrado na praza do xuízo, xunto á fogueira.'
      },
      c6: {
        text: 'O amigo adulamita Hirá percorreu o camiño para entregar o cabrito sen atopar a ninguén.'
      },
      c7: {
        text: 'O pastor dos corrais observou a entrega secreta preto do almacén de pezas.'
      }
    }
  },

  // RETO 008: El Pozo del Desierto -> O Pozo do Deserto
  '008': {
    nombre: 'O Pozo do Deserto',
    categoria: 'Desenlaces de historias e parábolas',
    citasBiblicas: 'Xénese 21, 8-21',
    textoBiblicoClave: 'Deus abriulle os ollos e viu un pozo de auga. Foi encher o odre de auga e deulle de beber ao rapaz.',
    contextoTeologico: 'Amosa a Deus facéndose cargo das vítimas colaterais do sistema patriarcal. A exéxese salienta que Deus escoita o clamor do marxinado (Agar é estranxeira e escrava).',
    solucionExplicacion: 'Sara esixiu expulsar a Agar e a Ismael. No deserto, cando quedaron sen auga e Agar agardaba a morte do neno, Deus escoitou o pranto de Ismael e amosoulle a Agar un pozo de auga salvadora.',
    storyIntro: 'Por celos e disputas de herdanza, unha nai e o seu fillo son desterrados ao deserto con provisións insuficientes. Cando a auga se esgota, un pranto provoca unha intervención celestial que abre unha fonte de vida.',
    epilogue: '¡Milagre e dedución constatados! Na desolación de Berseba, o anxo do Señor escoitou o xemido de Ismael baixo a xesta e descubriu a Agar o manancial providencial.',
    subtitle: 'Desenlaces de historias e parábolas · Xénese 21 · 7x7',
    badge: 'O POZO DO DESERTO · 7x7',
    rooms: {
      pozo_revelado: {
        name: 'Pozo Milagroso no Deserto',
        shortName: 'Pozo Vida',
        description: 'Manancial de augas vivas amosado polo anxo para salvar a vida de Ismael.'
      },
      arbusto_retama: {
        name: 'Sombra do Arbusto de Xesta',
        shortName: 'Xesta',
        description: 'Lugar onde a nai desconsolada deixou o rapaz para non velo morrer.'
      },
      desierto_berseba: {
        name: 'Deserto de Berseba',
        shortName: 'Berseba',
        description: 'Areal árido onde vagaron errantes ata consumir o último grolo de auga.'
      },
      campamento_abrahan: {
        name: 'Campamento de Abrahán',
        shortName: 'Camp. Abrahán',
        description: 'Lugar onde o patriarca despediu de madrugada á escrava con pan e un odre.'
      },
      tienda_sara: {
        name: 'Tenda de Sara',
        shortName: 'T. Sara',
        description: 'Morada da matriarca que demandou con firmeza: «Bota fóra a esa escrava e ao seu fillo».'
      },
      sendero_destierro: {
        name: 'Sendeiro do Desterro',
        shortName: 'Desterro',
        description: 'Paso pedregoso que separa os dominios da tribo das terras estériles.'
      },
      oasis_paran: {
        name: 'Confíns do Deserto de Parán',
        shortName: 'Parán',
        description: 'Terra futura onde Ismael medrou como destro tirador de arco.'
      }
    },
    blockedObjects: {
      '1,2': {
        name: 'Arbusto de Xesta',
        description: 'Mata espiñenta do deserto que brindou sombra precaria ao neno sedento.'
      },
      '3,4': {
        name: 'Odre Baleiro',
        description: 'Pel de cabra baleira onde xa non quedaba nin unha soa pinga de auga.'
      },
      '5,0': {
        name: 'Ollo de Auga',
        description: 'Fonte subterránea descuberta milagrosamente aos ollos de Agar.'
      },
      '6,6': {
        name: 'Arco de Ismael',
        description: 'Arma de caza que forxou o futuro do rapaz no deserto de Parán.'
      }
    },
    suspects: {
      I: {
        name: 'Ismael',
        role: 'Fillo desterrado / O seu pranto foi escoitado',
        clueText: 'No Pozo de Auga Milagroso agardando salvación.'
      },
      G: {
        name: 'Un anxo',
        role: 'Mensaxeiro divino que revela a auga',
        clueText: 'Descendeu no Pozo Milagroso a soas con Ismael.'
      },
      H: {
        name: 'Agar',
        role: 'Nai escrava / Á distancia dun tiro de arco',
        clueText: 'Chora xunto ao Arbusto de Xesta.'
      },
      A: {
        name: 'Abrahán',
        role: 'Patriarca que entregou pan e auga',
        clueText: 'No seu campamento de despedida.'
      },
      S: {
        name: 'Sara',
        role: 'Esposa que demandou o desterro',
        clueText: 'Na súa tenda privada.'
      },
      C: {
        name: 'Criada de Agar',
        role: 'Compañeira no paso do desterro',
        clueText: 'Nos confíns do deserto de Parán.'
      },
      M: {
        name: 'Vixía de Parán',
        role: 'Explorador nos confíns do deserto',
        clueText: 'Oteando no Oasis de Parán.'
      }
    },
    clues: {
      c1: {
        text: 'A esposa do patriarca esixiu a expulsión da escrava e do fillo desta.'
      },
      c2: {
        text: 'O patriarca entristeceuse, pero despediu a ambos ao amencer con pan e auga.'
      },
      c3: {
        text: 'A nai deixou o rapaz baixo un arbusto para non presenciar o seu pasamento.'
      },
      c4: {
        text: 'Deus escoitou o xemido do rapaz deitado no pozo providencial.'
      },
      c5: {
        text: 'Un mensaxeiro divino chamou dende o ceo e abriu os ollos da nai.'
      },
      c6: {
        text: 'A criada do campamento acompañou os primeiros pasos do sendeiro.',
        narrative: 'A criada sitúase nos confíns do deserto de Parán.'
      },
      c7: {
        text: 'Nos confíns de Parán o destino do rapaz florecería como nación.'
      }
    }
  }
};
