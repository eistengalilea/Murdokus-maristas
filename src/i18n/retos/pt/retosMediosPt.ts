import { RetoTraduccion } from '../types';

/**
 * Traducciones al portugués de Portugal (pt-PT) de los retos de dificultad «medium».
 * Las claves de rooms, suspects, clues y blockedObjects deben coincidir con las del reto en castellano
 * (lo comprueba `npm run validar`).
 */
export const RETOS_MEDIOS_PT: Record<string, RetoTraduccion> = {
  // DESAFIO 001: La Venganza en Siquén -> A Vingança em Siquém
  '001': {
    nombre: 'A Vingança em Siquém',
    categoria: 'Assassínios ou crimes',
    citasBiblicas: 'Génesis 34, 1-29',
    textoBiblicoClave: 'Ao terceiro dia, quando eles estavam mais doridos, dois filhos de Jacob, Simeão e Levi, irmãos de Dina, pegaram nas espadas, entraram na cidade sem encontrar resistência e mataram todos os homens.',
    contextoTeologico: 'A exegese histórico-crítica (Fé Adulta) situa este relato como reflexo das tensões e integrações tribais em Canaã. Teologicamente, a Bíblia não esconde a violência patriarcal, mas mostra uma rejeição da vingança desproporcionada, como se vê na condenação final de Jacob (Gn 49,5-7).',
    solucionExplicacion: 'Simeão e Levi vingaram a honra da sua irmã Dina. Enganaram Siquém e os homens da sua cidade exigindo-lhes que se circuncidassem para poderem aparentar-se. Ao terceiro dia, aproveitando a sua dor, mataram-nos à espada.',
    storyIntro: 'Uma jovem é desonrada. Os líderes da cidade tentam resolver a questão com um pacto matrimonial e económico, mas um engano sangrento deixa todos os homens da cidade passados à espada enquanto convalesciam.',
    epilogue: 'Parecer forense concluído! Simeão e Levi cometeram o massacre no momento de maior vulnerabilidade da cidade. Dina foi resgatada, mas a desmesura da represália provocou a censura de Jacob.',
    subtitle: 'Assassínios ou crimes · Génesis 34 · 7x7',
    badge: 'A VINGANÇA EM SIQUÉM · 7x7',
    rooms: {
      tienda_dina: {
        name: 'Aposento de Dina em Siquém',
        shortName: 'Ap. Dina',
        description: 'Aposento onde Dina foi retida e onde Simeão irrompeu de espada para a resgatar.'
      },
      palacio_jamor: {
        name: 'Palácio do Príncipe Hamor',
        shortName: 'Palácio Hamor',
        description: 'Residência dos governantes heveus onde Levi abateu os líderes.'
      },
      zona_convalecencia: {
        name: 'Zona de Convalescença da Cidade',
        shortName: 'Convalescença',
        description: 'Casas dos homens de Siquém que repousavam ao terceiro dia do pacto.'
      },
      puerta_ciudad: {
        name: 'Porta Principal de Siquém',
        shortName: 'Porta Siquém',
        description: 'Lugar do conselho da cidade onde Hamor convenceu os homens a aceitar o acordo.'
      },
      campamento_jacob: {
        name: 'Acampamento de Jacob',
        shortName: 'Acamp. Jacob',
        description: 'Tendas de Israel nos arredores, alheio à matança planeada pelos filhos.'
      },
      muros_siquen: {
        name: 'Muralhas Fortificadas',
        shortName: 'Muralhas',
        description: 'Defesas desertas que não conseguiram repelir o ataque de surpresa.'
      },
      campo_saqueo: {
        name: 'Campos e Currais do Saque',
        shortName: 'Saque',
        description: 'Prados da cidade de onde os outros irmãos levaram ovelhas e bois.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Espada de Bronze',
        description: 'Arma desembainhada pelos filhos de Jacob para executar a vingança.'
      },
      '2,2': {
        name: 'Muro Ameado',
        description: 'Varandas de pedra do palácio onde se combinou o dote falhado.'
      },
      '4,6': {
        name: 'Vasilhas do Saque',
        description: 'Bens e joias confiscados depois da incursão dos irmãos.'
      },
      '6,1': {
        name: 'Portão da Cidade',
        description: 'Grande porta de vigas de cedro transposta sem resistência.'
      }
    },
    suspects: {
      D: {
        name: 'Dina',
        role: 'Única mulher / Vítima inicial do ultraje',
        clueText: 'No seu aposento de Siquém, à espera de ser libertada.'
      },
      S: {
        name: 'Simeão',
        role: 'Irmão vingador à espada / Culpado do ataque',
        clueText: 'Entrou a sós no aposento de Dina para a resgatar a ferro e fogo.'
      },
      L: {
        name: 'Levi',
        role: 'Irmão coautor da represália',
        clueText: 'Atacou o Palácio de Hamor pela via central.'
      },
      Q: {
        name: 'Siquém',
        role: 'Filho de Hamor / Autor do ultraje inicial',
        clueText: 'Ainda convalescente, perto da porta principal de Siquém.'
      },
      H: {
        name: 'Hamor',
        role: 'Príncipe heveu / Pai de Siquém',
        clueText: 'Na Porta Principal da cidade, junto ao conselho.'
      },
      J: {
        name: 'Jacob',
        role: 'Pai que não participou e censurou o perigo',
        clueText: 'Permanece no Acampamento de Jacob, na zona oriental.'
      },
      M: {
        name: 'Habitante de Siquém',
        role: 'Homem convalescente da cidade',
        clueText: 'Apanhado nos currais durante o saque final.'
      }
    },
    clues: {
      c1: {
        text: 'A única mulher da lista foi a vítima inicial de um ultraje.',
        narrative: 'Dina está no seu aposento de Siquém, à espera de ser libertada.'
      },
      c2: {
        text: 'O autor do ultraje (Siquém) e o seu pai tentaram resolver a situação oferecendo um dote.',
        narrative: 'Siquém jaz convalescente na zona de repouso.'
      },
      c3: {
        text: 'Os dois irmãos exigiram o requisito doloroso que incapacitou os homens ao terceiro dia.',
        narrative: 'Simeão irrompeu a sós no aposento de Dina a ferro e fogo.'
      },
      c4: {
        text: 'Levi avançou sobre o palácio nobre dos governantes heveus.',
        narrative: 'Levi está a atacar o Palácio de Hamor pela via central.'
      },
      c5: {
        text: 'O príncipe Hamor esperava junto à grande porta comunitária.',
        narrative: 'Hamor ocupa a Porta Principal da cidade, junto ao conselho.'
      },
      c6: {
        text: 'O pai dos vingadores não participou e condenou o descrédito perante os cananeus.',
        narrative: 'Jacob encontra-se no acampamento exterior.'
      },
      c7: {
        text: 'Os homens convalescentes da cidade não conseguiram opor qualquer defesa.',
        narrative: 'O habitante de Siquém foi apanhado nos currais durante o saque.'
      }
    }
  },

  // DESAFIO 006: El Sello y el Cordón -> O Selo e o Cordão
  '006': {
    nombre: 'O Selo e o Cordão',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Génesis 38, 1-26',
    textoBiblicoClave: 'Quando a levavam, mandou dizer ao sogro: «Estou grávida do dono destas coisas.» E acrescentou: «Vê bem de quem são este selo, este cordão e este cajado.»',
    contextoTeologico: 'A lei do levirato obrigava a dar descendência à viúva. Tamar reclama o direito que a instituição patriarcal lhe negava. Judá reconhece: «Ela é mais justa do que eu». O Magistério inclui-a na genealogia de Jesus, sublinhando que a salvação integra os marginalizados e os estrangeiros.',
    solucionExplicacion: 'Tamar disfarçou-se de prostituta para se deitar com o sogro Judá, que não tinha cumprido a lei do levirato. Quando ele a condenou à morte pela sua gravidez, ela apresentou o selo, o cordão e o cajado que ele lhe tinha deixado como penhor.',
    storyIntro: 'Uma viúva desamparada, a quem é negado o direito da lei do levirato, faz-se passar por prostituta velada. Meses depois, quando é condenada à fogueira por uma gravidez ilícita, apresenta três objetos que lhe salvam a vida e expõem o verdadeiro responsável.',
    epilogue: 'Verdade forense demonstrada! O selo cilíndrico, o cordão entrançado e o cajado patriarcal comprovaram a paternidade de Judá. O patriarca confessou publicamente a justiça superior de Tamar.',
    subtitle: 'Descoberta de ações ocultas · Génesis 38 · 7x7',
    badge: 'O SELO E O CORDÃO · 7x7',
    rooms: {
      cruce_enaim: {
        name: 'Encruzilhada em Enaim',
        shortName: 'Enaim',
        description: 'Bifurcação do caminho para Timna onde Tamar esperou coberta com um véu.'
      },
      tienda_juda: {
        name: 'Tenda Patriarcal de Judá',
        shortName: 'T. Judá',
        description: 'Morada de Judá onde reteve Selá, sem o entregar à nora por medo da sua morte.'
      },
      camino_timna: {
        name: 'Caminho da Tosquia em Timna',
        shortName: 'C. Timna',
        description: 'Trilho poeirento por onde subiam os rebanhos e o amigo adulamita com o cabrito.'
      },
      esquileo_ovejas: {
        name: 'Currais da Tosquia',
        shortName: 'Tosquia',
        description: 'Festa da lã onde os criados e pastores celebravam a tosquia anual.'
      },
      casa_tamar: {
        name: 'Casa Paterna de Tamar',
        shortName: 'Casa Tamar',
        description: 'Casa onde Tamar guardou luto rigoroso depois de enviuvar duas vezes.'
      },
      tribunal_juicio: {
        name: 'Praça do Juízo e da Fogueira',
        shortName: 'Tribunal',
        description: 'Lugar onde se acendeu o fogo para a queimar antes de ela mostrar os três penhores.'
      },
      almacen_prendas: {
        name: 'Cofre Secreto dos Penhores',
        shortName: 'Penhores',
        description: 'Arca onde Tamar guardou zelosamente o selo, o cordão e o cajado.'
      }
    },
    blockedObjects: {
      '1,3': {
        name: 'Selo Cilíndrico e Cordão',
        description: 'Selo pessoal de Judá pendurado no seu cordão como penhor de pagamento.'
      },
      '3,1': {
        name: 'Cajado de Pastor',
        description: 'Bastão de madeira lavrada pertencente ao patriarca da tribo.'
      },
      '5,5': {
        name: 'Pira de Fogo',
        description: 'Lenha preparada para a queima pública antes de se revelar a verdade.'
      },
      '0,6': {
        name: 'Velo da Tosquia',
        description: 'Fardo de lã acabada de cortar nos currais de Timna.'
      }
    },
    suspects: {
      T: {
        name: 'Tamar',
        role: 'Viúva audaz / Cobriu-se com um véu em Enaim',
        clueText: 'Na Encruzilhada em Enaim.'
      },
      J: {
        name: 'Judá',
        role: 'Sogro que negou Selá e deixou os penhores',
        clueText: 'Na sua tenda patriarcal, retendo o filho por medo.'
      },
      S: {
        name: 'Selá',
        role: 'Terceiro filho protegido / Vítima do adiamento',
        clueText: 'Retido na Tenda de Judá a sós com o pai.'
      },
      E: {
        name: 'Memória de Er',
        role: 'Primeiro marido falecido',
        clueText: 'Na lembrança da Casa Paterna de Tamar.'
      },
      O: {
        name: 'Memória de Onã',
        role: 'Segundo marido que não cumpriu a lei',
        clueText: 'A sua memória é evocada na praça do juízo, junto à fogueira.'
      },
      H: {
        name: 'Hira',
        role: 'Amigo adulamita / Portador do cabrito de pagamento',
        clueText: 'Chegou à praça do juízo depois de procurar em vão a prostituta pelo caminho de Timna.'
      },
      P: {
        name: 'Pastor de Timna',
        role: 'Guardião do rebanho de Judá',
        clueText: 'Junto ao Cofre Secreto dos Penhores.'
      }
    },
    clues: {
      c1: {
        text: 'Uma mulher enviuvou duas vezes seguidas sem conseguir ter descendência.',
        narrative: 'Tamar encontra-se na encruzilhada em Enaim.'
      },
      c2: {
        text: 'O sogro prometeu dar-lhe o terceiro filho, mas não cumpriu por medo.',
        narrative: 'Judá está na sua tenda patriarcal, retendo Selá.'
      },
      c3: {
        text: 'Selá cresceu na tenda de Judá sem ser entregue para o levirato.',
        narrative: 'Selá permanece na tenda de Judá sob a tutela do pai.'
      },
      c4: {
        text: 'A memória do primeiro defunto, Er, repousa na casa paterna.',
        narrative: 'A lembrança de Er está na casa paterna de Tamar.'
      },
      c5: {
        text: 'A lembrança de Onã é evocada na praça do juízo de Timna.',
        narrative: 'Onã é recordado na praça do juízo, junto à fogueira.'
      },
      c6: {
        text: 'O amigo adulamita Hira percorreu o caminho para entregar o cabrito sem encontrar ninguém.',
        narrative: 'Hira caminha pelo trilho à procura da mulher com o véu.'
      },
      c7: {
        text: 'O pastor do curral observou a entrega secreta perto do cofre dos penhores.',
        narrative: 'O pastor encontra-se a guardar o cofre dos penhores.'
      }
    }
  },

  // DESAFIO 008: El Pozo del Desierto -> O Poço do Deserto
  '008': {
    nombre: 'O Poço do Deserto',
    categoria: 'Desfechos de histórias e parábolas',
    citasBiblicas: 'Génesis 21, 8-21',
    textoBiblicoClave: 'Deus abriu-lhe os olhos e ela viu um poço de água. Foi encher o odre de água e deu de beber ao rapaz.',
    contextoTeologico: 'Mostra Deus a cuidar das vítimas colaterais do sistema patriarcal. A exegese sublinha que Deus escuta o clamor do marginalizado (Agar é estrangeira e escrava). O Vaticano destaca esta passagem no diálogo inter-religioso, pois Ismael é figura central no Islão.',
    solucionExplicacion: 'Sara exigiu a expulsão de Agar e de Ismael. No deserto, quando ficaram sem água e Agar esperava a morte do menino, Deus ouviu o choro de Ismael e mostrou a Agar um poço, salvando-os.',
    storyIntro: 'Por ciúmes e disputas de herança, uma mãe e o seu filho são desterrados para o deserto com provisões insuficientes. Quando a água se esgota e a morte parece iminente, um choro provoca uma intervenção celeste que abre uma fonte de vida.',
    epilogue: 'Milagre e dedução confirmados! Na desolação de Bersabé, o anjo do Senhor ouviu o gemido de Ismael debaixo da giesta e revelou a Agar a fonte providencial.',
    subtitle: 'Desfechos de histórias e parábolas · Génesis 21 · 7x7',
    badge: 'O POÇO DO DESERTO · 7x7',
    rooms: {
      pozo_revelado: {
        name: 'Poço Milagroso no Deserto',
        shortName: 'Poço Vida',
        description: 'Nascente de água viva mostrada pelo anjo para salvar a vida de Ismael.'
      },
      arbusto_retama: {
        name: 'Sombra da Giesta',
        shortName: 'Giesta',
        description: 'Lugar onde a mãe desconsolada deixou o rapaz para não o ver morrer.'
      },
      desierto_berseba: {
        name: 'Deserto de Bersabé',
        shortName: 'Bersabé',
        description: 'Areais áridos onde vaguearam até consumirem o último gole de água.'
      },
      campamento_abrahan: {
        name: 'Acampamento de Abraão',
        shortName: 'Acamp. Abraão',
        description: 'Lugar onde o patriarca despediu de madrugada a escrava com pão e um odre.'
      },
      tienda_sara: {
        name: 'Tenda de Sara',
        shortName: 'T. Sara',
        description: 'Morada da matriarca que exigiu com firmeza: «Expulsa essa escrava e o seu filho».'
      },
      sendero_destierro: {
        name: 'Trilho do Desterro',
        shortName: 'Desterro',
        description: 'Passagem pedregosa que separa os domínios da tribo das terras estéreis.'
      },
      oasis_paran: {
        name: 'Confins do Deserto de Parã',
        shortName: 'Parã',
        description: 'Terra futura onde Ismael cresceu como hábil atirador de arco.'
      }
    },
    blockedObjects: {
      '1,2': {
        name: 'Arbusto de Giesta',
        description: 'Planta espinhosa do deserto que deu uma sombra precária ao menino sedento.'
      },
      '3,4': {
        name: 'Odre Vazio',
        description: 'Pele de cabra vazia onde já não restava uma única gota de água.'
      },
      '5,0': {
        name: 'Olho de Água',
        description: 'Fonte subterrânea descoberta milagrosamente aos olhos de Agar.'
      },
      '6,6': {
        name: 'Arco de Ismael',
        description: 'Arma de caça que moldou o futuro do rapaz no deserto de Parã.'
      }
    },
    suspects: {
      I: {
        name: 'Ismael',
        role: 'Filho desterrado / O seu choro foi ouvido',
        clueText: 'No Poço Milagroso, à espera de salvação.'
      },
      G: {
        name: 'Um anjo',
        role: 'Mensageiro divino que revela a água',
        clueText: 'Desceu ao Poço Milagroso, a sós com Ismael.'
      },
      H: {
        name: 'Agar',
        role: 'Mãe escrava / À distância de um tiro de arco',
        clueText: 'Chora junto à Giesta.'
      },
      A: {
        name: 'Abraão',
        role: 'Patriarca que deu pão e água',
        clueText: 'No seu acampamento de despedida.'
      },
      S: {
        name: 'Sara',
        role: 'Esposa que exigiu o desterro',
        clueText: 'Na sua tenda privada.'
      },
      C: {
        name: 'Criada de Agar',
        role: 'Companheira no caminho do desterro',
        clueText: 'Nos confins do deserto de Parã.'
      },
      M: {
        name: 'Vigia de Parã',
        role: 'Explorador nos confins do deserto',
        clueText: 'A observar do Oásis de Parã.'
      }
    },
    clues: {
      c1: {
        text: 'A esposa do patriarca exigiu a expulsão da escrava e do filho desta.',
        narrative: 'Sara está na sua tenda privada.'
      },
      c2: {
        text: 'O patriarca entristeceu-se, mas despediu ambos ao amanhecer com pão e água.',
        narrative: 'Abraão despede-se de ambos no seu acampamento.'
      },
      c3: {
        text: 'A mãe deixou o rapaz debaixo de um arbusto para não assistir ao seu fim.',
        narrative: 'Agar continua a chorar junto à giesta.'
      },
      c4: {
        text: 'Deus ouviu o gemido do rapaz deitado junto ao poço providencial.',
        narrative: 'Ismael encontra-se no poço de água, à espera de socorro.'
      },
      c5: {
        text: 'Um mensageiro divino chamou do céu e abriu os olhos da mãe.',
        narrative: 'O anjo vem ao poço milagroso com consolo.'
      },
      c6: {
        text: 'A criada do acampamento acompanhou os primeiros passos do trilho.',
        narrative: 'A criada encontra-se nos confins do deserto de Parã.'
      },
      c7: {
        text: 'Nos confins de Parã, o destino do rapaz floresceria como nação.',
        narrative: 'O vigia observa a partir do oásis de Parã.'
      }
    }
  },

  // DESAFIO 003-B: El Decreto de los Treinta Días -> O Decreto dos Trinta Dias
  '003-B': {
    nombre: 'O Decreto dos Trinta Dias',
    categoria: 'Assassínios ou crimes',
    citasBiblicas: 'Daniel 6, 1-25',
    textoBiblicoClave: 'O meu Deus enviou o seu anjo a fechar a boca dos leões, e não me fizeram mal nenhum, porque fui achado inocente diante dele.',
    contextoTeologico: 'Este relato mostra o conflito ético entre o poder civil absoluto e a fidelidade religiosa. O Magistério destaca aqui o primado da consciência e a proteção providencial do justo que sofre perseguição legal.',
    solucionExplicacion: 'Uns altos funcionários enganaram Dario para que proibisse a oração, procurando matar Daniel por inveja política. Daniel continuou a rezar, foi lançado na cova dos leões, mas um anjo protegeu-o fechando a boca das feras.',
    storyIntro: 'Um ancião de conduta política irrepreensível é condenado a uma morte brutal. O próprio monarca que dita a sentença passa a noite em claro e em jejum, esperando contra toda a lógica que o condenado sobreviva até ao amanhecer.',
    epilogue: 'Caso resolvido! Daniel manteve-se fiel, rezando três vezes por dia no seu quarto de cima. Deus enviou o seu anjo para fechar a boca dos leões, livrando o justo da armadilha invejosa dos sátrapas.',
    subtitle: 'Assassínios ou crimes · Daniel 6 · 7x7',
    badge: 'O DECRETO DOS TRINTA DIAS · 7x7',
    rooms: {
      foso_leones: {
        name: 'Cova Subterrânea dos Leões',
        shortName: 'Cova Leões',
        description: 'Gruta fechada com uma grande pedra selada com o anel do rei e dos nobres.'
      },
      camara_oracion: {
        name: 'Quarto de Oração de Daniel',
        shortName: 'Quarto Daniel',
        description: 'Aposento com janelas abertas para Jerusalém onde Daniel rezava de joelhos.'
      },
      palacio_dario: {
        name: 'Palácio Real de Dario',
        shortName: 'Palácio Dario',
        description: 'Câmara régia onde o monarca passou a noite em jejum e em claro pelo seu amigo.'
      },
      sala_satrapas: {
        name: 'Sala de Audiências dos Sátrapas',
        shortName: 'Sala Sátrapas',
        description: 'Lugar de conspiração onde os governadores redigiram a armadilha legal.'
      },
      puesto_guardia_foso: {
        name: 'Pórtico e Guarda da Cova',
        shortName: 'Pórtico Cova',
        description: 'Acesso superior onde as sentinelas montaram guarda noturna junto à pedra selada.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Janela Voltada para Jerusalém',
        description: 'Abertura por onde Daniel elevava as suas orações três vezes por dia.'
      },
      '2,3': {
        name: 'Édito Real Selado',
        description: 'Decreto irrevogável dos medos e persas que proibia a oração.'
      },
      '4,1': {
        name: 'Alcateia de Leões Famintos',
        description: 'Feras que permaneceram mansas sem tocar no profeta inocente.'
      },
      '6,5': {
        name: 'Pedra Selada com o Anel',
        description: 'Pedra circular selada para garantir que nada se alterava no castigo.'
      }
    },
    suspects: {
      R: {
        name: 'Dario',
        role: 'Rei enganado dos medos',
        clueText: 'No Palácio Real, angustiado, passando a noite em jejum rigoroso.'
      },
      D: {
        name: 'Daniel',
        role: 'Primeiro-ministro irrepreensível',
        clueText: 'Na Cova dos Leões, acompanhado pelo enviado divino.'
      },
      S: {
        name: 'Sátrapa Conspirador',
        role: 'Promotor da inveja legal',
        clueText: 'Junto à cova dos leões, a celebrar a aparente queda do seu rival.'
      },
      G: {
        name: 'Governador Cúmplice',
        role: 'Testemunha acusadora perante o rei',
        clueText: 'Na Sala dos Sátrapas, a exigir o cumprimento rigoroso da lei persa.'
      },
      A: {
        name: 'Um Anjo',
        role: 'Mensageiro protetor celeste',
        clueText: 'A velar no quarto de oração, enviado para fechar a boca das feras.'
      },
      C: {
        name: 'Sentinela da Cova',
        role: 'Guarda da pedra selada',
        clueText: 'No Pórtico da Cova, a vigiar para que ninguém mova a pedra selada.'
      },
      E: {
        name: 'Escriba da Corte',
        role: 'Notário da lei medo-persa',
        clueText: 'No Quarto de Oração, a lavrar auto das orações de Daniel.'
      }
    },
    clues: {
      c1: {
        text: 'O rei planeava pôr um dos seus altos funcionários à frente de todo o reino pelo seu espírito extraordinário e honestidade.',
        narrative: 'Dario apreciava o desempenho íntegro e a lealdade sincera de Daniel.'
      },
      c2: {
        text: 'Outros altos cargos políticos, movidos pela inveja, procuraram um pretexto legal para eliminar o rival, sabendo que ele era irrepreensível.',
        narrative: 'O sátrapa e o governador tramaram a armadilha na sala de audiências.'
      },
      c3: {
        text: 'Os conspiradores enganaram o monarca para que assinasse um édito irrevogável que proibia rezar a qualquer deus ou homem que não fosse o rei.',
        narrative: 'O escriba da corte redigiu a proibição de trinta dias com o selo real.'
      },
      c4: {
        text: 'A vítima designada ignorou a proibição temporária e continuou a rezar três vezes por dia com as janelas abertas para Jerusalém.',
        narrative: 'Daniel manteve o seu costume, rezando de joelhos no quarto de cima.'
      },
      c5: {
        text: 'O rei, preso à sua própria lei, viu-se obrigado, com grande dor, a condenar o seu funcionário preferido à cova das feras.',
        narrative: 'A sentinela fechou a cova com a pedra enquanto o monarca confiava em Deus.'
      },
      c6: {
        text: 'Durante toda a noite o rei recusou-se a comer e, ao amanhecer, correu à cova temendo o pior.',
        narrative: 'Dario chegou apressado ao amanhecer, gritando com voz aflita.'
      },
      c7: {
        text: 'Um mensageiro divino fechou a boca das feras porque a vítima era inocente diante de Deus e não tinha feito mal ao monarca.',
        narrative: 'O anjo protegeu Daniel no fundo da cova.'
      }
    }
  },

  // DESAFIO 004-B: Los Árboles de la Mentira -> As Árvores da Mentira
  '004-B': {
    nombre: 'As Árvores da Mentira',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Daniel 13, 1-64',
    textoBiblicoClave: 'Daniel separou-os um do outro e (...) perguntou-lhe: «Diz-me, debaixo de que árvore os viste juntos?» Ele respondeu: «Debaixo de uma acácia.»',
    contextoTeologico: 'Destaca a corrupção das autoridades durante a diáspora. Teologicamente, ilustra que Deus defende a dignidade das mulheres vítimas de opressão, usando a sabedoria dos jovens para desarmar o abuso de poder institucionalizado.',
    solucionExplicacion: 'Dois juízes anciãos tentaram abusar de Susana. Ao serem rejeitados, acusaram-na falsamente de adultério. Daniel provou que mentiam ao interrogá-los separadamente sobre a árvore onde supostamente ocorrera o delito, encontrando contradição.',
    storyIntro: 'Uma mulher inocente de alta posição é condenada à morte depois do testemunho de dois líderes da comunidade. Precisamente quando a levam para o cadafalso, um jovem exige separar as testemunhas e faz-lhes uma simples pergunta de botânica que anula a condenação.',
    epilogue: 'Caso resolvido! A contradição botânica entre a acácia e a azinheira desarmou a calúnia dos dois anciãos. Susana recuperou a sua honra e Daniel foi reconhecido como juiz justo inspirado por Deus.',
    subtitle: 'Descoberta de ações ocultas · Daniel 13 · 7x7',
    badge: 'AS ÁRVORES DA MENTIRA · 7x7',
    rooms: {
      huerto_banos: {
        name: 'Pomar Privado de Joaquim (A Fonte)',
        shortName: 'Pomar Fonte',
        description: 'Jardim fechado onde Susana costumava passear e banhar-se nas horas de calor.'
      },
      arboleda_acacia: {
        name: 'Recanto das Acácias e Carvalhos',
        shortName: 'Recanto Acácias',
        description: 'Lugar citado pelo primeiro juiz, que afirmou ter visto o falso encontro.'
      },
      bosquete_encinas: {
        name: 'Bosquete das Azinheiras',
        shortName: 'Bosque Azinheiras',
        description: 'Setor oposto do parque, apontado em flagrante discordância pelo segundo ancião.'
      },
      tribunal_asamblea: {
        name: 'Tribunal da Assembleia Popular',
        shortName: 'Tribunal Povo',
        description: 'Sala judicial onde o povo acreditou inicialmente nos dois anciãos prestigiados.'
      },
      patibulo_lapidacion: {
        name: 'Cadafalso de Lapidação Exterior',
        shortName: 'Cadafalso Exterior',
        description: 'Caminho para os arredores onde Daniel interveio, travando a execução injusta.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Acácia Frondosa',
        description: 'Árvore alegada com soberba pelo primeiro ancião durante o interrogatório isolado.'
      },
      '1,6': {
        name: 'Azinheira Centenária',
        description: 'Árvore totalmente diferente nomeada pelo segundo ancião acusador.'
      },
      '2,1': {
        name: 'Fonte e Óleos Aromáticos',
        description: 'Tanque privado de banho do pomar onde Susana foi espiada.'
      },
      '5,2': {
        name: 'Balança do Juízo Corrompido',
        description: 'Estrado judicial revogado pelo discernimento do jovem Daniel.'
      }
    },
    suspects: {
      S: {
        name: 'Susana',
        role: 'Esposa piedosa falsamente acusada',
        clueText: 'No Pomar da Fonte, confiando em Deus com lágrimas nos olhos.'
      },
      J: {
        name: 'Joaquim',
        role: 'Esposo ilustre e anfitrião',
        clueText: 'Junto ao cadafalso, consternado perante a acusação contra a esposa.'
      },
      A1: {
        name: 'Primeiro Ancião',
        role: 'Juiz perverso acusador',
        clueText: 'No pomar dos banhos, sustentando a sua mentira contra Susana.'
      },
      A2: {
        name: 'Segundo Ancião',
        role: 'Juiz cúmplice e perjuro',
        clueText: 'No Bosquete das Azinheiras, isolado do primeiro juiz antes do interrogatório.'
      },
      D: {
        name: 'Daniel',
        role: 'Jovem defensor inspirado',
        clueText: 'No Cadafalso Exterior, levantando a voz para travar a lapidação injusta.'
      },
      M: {
        name: 'Donzela do Pomar',
        role: 'Criada que fechou as portas',
        clueText: 'No tribunal da assembleia, depois de sair do pomar para ir buscar os sabões que a sua senhora pediu.'
      },
      G: {
        name: 'Oficial do Tribunal',
        role: 'Executor da ordem judicial',
        clueText: 'No Cadafalso de Lapidação, conduzindo os presos à espera do veredicto.'
      }
    },
    clues: {
      c1: {
        text: 'Dois juízes anciãos que frequentavam a casa de um homem rico encheram-se de desejo pela esposa dele.',
        narrative: 'Os anciãos disfarçavam a sua intenção no pomar privado de Joaquim.'
      },
      c2: {
        text: 'Os líderes esconderam-se no pomar privado enquanto a mulher se preparava para se banhar sem as suas donzelas.',
        narrative: 'Susana mandou fechar os portões para se lavar junto à fonte.'
      },
      c3: {
        text: 'Ao serem rejeitados nas suas propostas, os líderes gritaram e acusaram-na publicamente de adultério com um jovem fictício.',
        narrative: 'Os juízes tramaram a calúnia depois de receberem a recusa corajosa de Susana.'
      },
      c4: {
        text: 'O tribunal acreditou na versão dos anciãos pelo seu prestígio social, condenando a mulher a morrer apedrejada.',
        narrative: 'A assembleia popular deu crédito cego à autoridade dos acusadores.'
      },
      c5: {
        text: 'Um jovem movido pelo Espírito travou a execução e exigiu interrogar os dois acusadores separadamente.',
        narrative: 'Daniel proclamou que a filha de Judá estava a ser condenada sem um julgamento íntegro.'
      },
      c6: {
        text: 'Ao perguntar ao primeiro acusador debaixo de que árvore ocorrera o suposto adultério, este respondeu que debaixo de uma acácia.',
        narrative: 'O primeiro ancião afirmou com segurança botânica o seu falso testemunho.'
      },
      c7: {
        text: 'O segundo acusador, isolado do primeiro, afirmou que tudo ocorrera debaixo de uma azinheira, demonstrando o perjúrio de ambos.',
        narrative: 'O segundo testemunho pôs a nu a contradição perante todo o povo.'
      }
    }
  },

  // DESAFIO 005-B: El Banquete de la Reina -> O Banquete da Rainha
  '005-B': {
    nombre: 'O Banquete da Rainha',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Ester 7, 1-10',
    textoBiblicoClave: 'Ester respondeu: «O inimigo e adversário é este malvado Amã!» Amã ficou aterrorizado diante do rei e da rainha.',
    contextoTeologico: 'O livro de Ester mostra a sobrevivência no exílio. Embora não mencione Deus diretamente, a Fé Adulta interpreta-o como a providência oculta: a coragem cívica e a resistência desfazem o antissemitismo e as injustiças de Estado.',
    solucionExplicacion: 'Amã planeou o extermínio dos judeus porque Mardoqueu não se prostrava diante dele. Ester, ocultando a sua origem, convidou o rei e Amã para um banquete, onde revelou a conspiração. Amã foi enforcado na forca que ele próprio construíra.',
    storyIntro: 'Um ministro poderoso subornou o soberano para exterminar um povo inteiro. Quando já tinha uma grande forca preparada no seu pátio, foi convidado para um banquete privado exclusivo, sem saber que ali se assinaria a sua própria sentença de morte.',
    epilogue: 'Caso resolvido! Ester intercedeu pelo seu povo no banquete privado. O rei Assuero descobriu a vileza de Amã e mandou enforcá-lo na forca de cinquenta côvados que ele tinha levantado para Mardoqueu.',
    subtitle: 'Descoberta de ações ocultas · Ester 7 · 7x7',
    badge: 'O BANQUETE DA RAINHA · 7x7',
    rooms: {
      banquete_vino: {
        name: 'Salão do Banquete Íntimo de Vinho',
        shortName: 'Banquete Rainha',
        description: 'Mesa privada reservada apenas ao rei Assuero, à rainha Ester e a Amã.'
      },
      patio_horca: {
        name: 'Pátio da Mansão de Amã (A Forca)',
        shortName: 'Pátio Forca',
        description: 'Lugar onde o ministro levantou um madeiro de cinquenta côvados de altura.'
      },
      puerta_palacio: {
        name: 'Porta Real do Palácio em Susa',
        shortName: 'Porta Real',
        description: 'Entrada onde Mardoqueu se recusava a inclinar-se perante a soberba de Amã.'
      },
      jardin_interior: {
        name: 'Jardim Interior do Palácio',
        shortName: 'Jardim Real',
        description: 'Parque para onde o rei saiu enfurecido a respirar depois de ouvir a denúncia de Ester.'
      },
      camara_consejeros: {
        name: 'Câmara dos Escribas e Dignitários',
        shortName: 'Câm. Conselheiros',
        description: 'Sala onde os cortesãos presenciaram a reviravolta providencial dos acontecimentos.'
      }
    },
    blockedObjects: {
      '0,5': {
        name: 'Madeiro de Cinquenta Côvados',
        description: 'Estrutura levantada por Amã para justiçar Mardoqueu.'
      },
      '1,1': {
        name: 'Taça de Vinho do Banquete',
        description: 'Cálice com que Assuero perguntou a Ester qual era o seu verdadeiro pedido.'
      },
      '3,0': {
        name: 'Limiar de Mardoqueu',
        description: 'Banco da guarda onde o tio da rainha vestia saco de luto.'
      },
      '5,4': {
        name: 'Decreto de Extermínio Selado',
        description: 'Documento comprado por dez mil talentos de prata para destruir os judeus.'
      }
    },
    suspects: {
      R: {
        name: 'Assuero',
        role: 'Rei persa comovido',
        clueText: 'No Jardim Interior, passeando enfurecido depois de ouvir o clamor de Ester.'
      },
      E: {
        name: 'Ester',
        role: 'Rainha corajosa e intercessora',
        clueText: 'No Banquete de Vinho, apontando com coragem o ministro perverso.'
      },
      M: {
        name: 'Mardoqueu',
        role: 'Tio leal que não se ajoelha',
        clueText: 'Na Porta Real do Palácio, confiando que a ajuda viria de Deus.'
      },
      A: {
        name: 'Amã',
        role: 'Ministro genocida e arrogante',
        clueText: 'No Banquete de Vinho, atirando-se aterrorizado para o leito a implorar perdão.'
      },
      H: {
        name: 'Harbona',
        role: 'Eunuco da corte que denunciou a forca',
        clueText: 'Na câmara dos dignitários, pronto a mostrar ao rei o madeiro preparado por Amã.'
      },
      C: {
        name: 'Mordomo do Banquete',
        role: 'Servidor da taça real',
        clueText: 'Na câmara dos escribas, depois de servir as iguarias aos três convivas.'
      },
      T: {
        name: 'Escriba do Tesouro',
        role: 'Contabilista imperial de Susa',
        clueText: 'Na Câmara dos Conselheiros, registando os talentos de prata prometidos por Amã.'
      }
    },
    clues: {
      c1: {
        text: 'Um alto dignitário do império exigia que todos se ajoelhassem diante dele à porta do palácio, mas um judeu recusou-se.',
        narrative: 'Mardoqueu recusou dobrar o joelho perante o ministro Amã na porta real.'
      },
      c2: {
        text: 'Enfurecido, o dignitário convenceu o rei a assinar um decreto de genocídio, oferecendo milhares de talentos de prata ao tesouro.',
        narrative: 'O escriba do tesouro anotou a soma acordada contra o povo desterrado.'
      },
      c3: {
        text: 'A rainha consorte, que mantinha a sua origem em segredo, foi instada pelo tio a interceder, arriscando a vida ao ir ter com o rei sem permissão.',
        narrative: 'Ester atravessou para o pátio interior do palácio dizendo: Se tiver de morrer, morrerei.'
      },
      c4: {
        text: 'Para ganhar o favor do rei, a rainha organizou dois banquetes íntimos, convidando apenas o monarca e o ministro genocida.',
        narrative: 'O mordomo preparou as iguarias para os dois únicos convidados.'
      },
      c5: {
        text: 'O ministro estava tão eufórico com o convite que mandou construir uma forca de cinquenta côvados para enforcar o judeu rebelde.',
        narrative: 'Amã contemplava satisfeito a forca no pátio da sua mansão.'
      },
      c6: {
        text: 'No segundo banquete, a rainha revelou a sua origem e apontou o ministro como o inimigo que planeava assassiná-la a ela e ao seu povo.',
        narrative: 'Assuero saltou do seu lugar e saiu para o jardim, abalado pela indignação.'
      },
      c7: {
        text: 'O rei, furioso, ordenou que o ministro fosse executado imediatamente na mesma forca que preparara para o tio da rainha.',
        narrative: 'Harbona apontou o madeiro e os guardas executaram a sentença sobre Amã.'
      }
    }
  },

  // DESAFIO 008-B: Las Pisadas en la Ceniza -> As Pegadas na Cinza
  '008-B': {
    nombre: 'As Pegadas na Cinza',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Daniel 14, 1-22',
    textoBiblicoClave: 'Daniel disse: «Olha para o chão e vê de quem são estas pegadas.» O rei disse: «Vejo pegadas de homens, mulheres e crianças.»',
    contextoTeologico: 'Constitui uma antiga sátira contra as fraudes religiosas e a idolatria. Desmistifica o poder das religiões do império e dá aos exilados ferramentas críticas para não se deixarem enganar pelo falso prestígio institucional.',
    solucionExplicacion: 'Os sacerdotes fingiam que o ídolo Bel comia as oferendas, entrando por uma passagem secreta durante a noite. Daniel desvendou a fraude espalhando cinza no chão, o que denunciou as pegadas dos sacerdotes e das suas famílias.',
    storyIntro: 'Uma divindade babilónica era famosa por devorar quantidades colossais de comida todas as noites à porta fechada. Um homem astuto demonstrou perante o imperador que a divindade era de bronze e que a fome era puramente humana.',
    epilogue: 'Caso resolvido! Daniel espalhou cinza fina antes de selarem o templo. Na manhã seguinte, as pegadas de sacerdotes, esposas e crianças descobriram a passagem secreta e acabaram com o engano do ídolo Bel.',
    subtitle: 'Descoberta de ações ocultas · Daniel 14 · 7x7',
    badge: 'AS PEGADAS NA CINZA · 7x7',
    rooms: {
      altar_bel: {
        name: 'Altar do Ídolo de Bronze Bel',
        shortName: 'Altar Bel',
        description: 'Estátua colossal com mesa de oferendas onde se deixava farinha fina, carneiros e vinho.'
      },
      suelo_ceniza: {
        name: 'Nave do Templo Coberta de Cinza',
        shortName: 'Chão Cinza',
        description: 'Pavimento lajeado coberto subtilmente com cinza peneirada para imprimir pegadas.'
      },
      pasadizo_secreto: {
        name: 'Alçapão e Passagem Sob a Mesa',
        shortName: 'Passagem Oculta',
        description: 'Acesso subterrâneo por onde os clérigos e as suas famílias entravam às escuras.'
      },
      portico_sellos: {
        name: 'Porta Principal do Templo Selada',
        shortName: 'Pórtico Selos',
        description: 'Portão de bronze fechado e garantido com o anel de selo do rei Ciro.'
      },
      patio_sacerdotal: {
        name: 'Residência das Famílias Sacerdotais',
        shortName: 'Pátio Clérigos',
        description: 'Habitações anexas onde setenta sacerdotes viviam com as mulheres e os filhos.'
      }
    },
    blockedObjects: {
      '0,5': {
        name: 'Ídolo de Bronze de Bel',
        description: 'Efígie idolátrica que por dentro não passava de barro inerte.'
      },
      '1,0': {
        name: 'Selo de Cera Real Intacto',
        description: 'Lacre estampado com o anel de Ciro que atestava a inviolabilidade da porta.'
      },
      '2,3': {
        name: 'Alçapão Oculto no Chão',
        description: 'Acesso sob a mesa dos banquetes por onde as famílias vinham cear.'
      },
      '4,1': {
        name: 'Crivo com Cinza Fina',
        description: 'Peneira usada pelos servos de Daniel para semear a prova.'
      }
    },
    suspects: {
      C: {
        name: 'Ciro, o Persa',
        role: 'Imperador crédulo e amigo de Daniel',
        clueText: 'No Pórtico dos Selos, assombrado ao examinar as pegadas com a tocha.'
      },
      D: {
        name: 'Daniel',
        role: 'Sábio judeu desmistificador',
        clueText: 'Em frente à residência dos sacerdotes, sorrindo ao mostrar ao rei a variedade de pegadas.'
      },
      S: {
        name: 'Sumo Sacerdote de Bel',
        role: 'Líder do culto fraudulento',
        clueText: 'Diante da porta selada do templo, depois de liderar a incursão noturna pela passagem.'
      },
      E: {
        name: 'Esposa do Sacerdote',
        role: 'Participante no festim noturno',
        clueText: 'Na Residência Sacerdotal, carregando cestos com as iguarias do ídolo.'
      },
      H: {
        name: 'Filho do Sacerdote',
        role: 'Criança cujas pegadas denunciaram a farsa',
        clueText: 'Na residência das famílias sacerdotais, depois de deixar pequenas pegadas na cinza junto às iguarias.'
      },
      V: {
        name: 'Servo de Daniel',
        role: 'Ajudante que espalhou a cinza',
        clueText: 'No Chão de Cinza, peneirando o pó cinzento apenas na presença do rei.'
      },
      G: {
        name: 'Sentinela do Selo',
        role: 'Guarda imperial da porta',
        clueText: 'Junto ao altar de Bel, confirmando que ninguém abriu o ferrolho principal.'
      }
    },
    clues: {
      c1: {
        text: 'Um monarca exigia que se adorasse um ídolo babilónico porque este "devorava" grandes quantidades de farinha, ovelhas e vinho todas as noites.',
        narrative: 'Ciro acreditava ingenuamente que o deus de bronze comia as iguarias.'
      },
      c2: {
        text: 'Um sábio judeu recusou-se a adorá-lo, afirmando que o ídolo era só barro por dentro e bronze por fora, e nunca comia.',
        narrative: 'Daniel riu-se com franqueza, avisando o soberano do engano idolátrico.'
      },
      c3: {
        text: 'Os clérigos propuseram deixar a comida, fechar o templo e selá-lo com o anel real para provar que a divindade existia.',
        narrative: 'O sumo sacerdote desafiou Daniel com arrogância perante o imperador.'
      },
      c4: {
        text: 'Antes de o templo ser selado, o sábio mandou os seus servos espalhar cinza por todo o chão sem que os clérigos dessem por isso.',
        narrative: 'O servo de Daniel cobriu discretamente o chão na presença do monarca.'
      },
      c5: {
        text: 'Na manhã seguinte, os selos continuavam intactos e a comida tinha desaparecido, alegrando enormemente o monarca.',
        narrative: 'A sentinela confirmou que o lacre do portão não tinha sido quebrado.'
      },
      c6: {
        text: 'O sábio deteve o monarca antes de este entrar e pediu-lhe que observasse com atenção o chão cinzento.',
        narrative: 'Daniel iluminou o pó para mostrar os rastos deixados no pavimento.'
      },
      c7: {
        text: 'Na cinza descobriram marcas evidentes que revelaram uma passagem secreta sob a mesa das oferendas.',
        narrative: 'As pegadas de homens, mulheres e crianças levaram diretamente ao alçapão secreto.'
      }
    }
  },

  // DESAFIO 010-B: El Yugo Roto -> O Jugo Partido
  '010-B': {
    nombre: 'O Jugo Partido',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Jeremias 28, 1-17',
    textoBiblicoClave: 'Em vez do jugo de madeira, fizeste um jugo de ferro. (...) a Hananias: «O Senhor não te enviou, e tu fizeste com que este povo confiasse numa mentira.»',
    contextoTeologico: 'Critica duramente a teologia do falso otimismo. A Fé Adulta sublinha que o verdadeiro profeta anuncia muitas vezes realidades dolorosas que exigem conversão, face aos nacionalismos religiosos e aos discursos complacentes.',
    solucionExplicacion: 'Jeremias profetizou a submissão à Babilónia usando um jugo de madeira. O falso profeta Hananias partiu-o, predizendo uma falsa vitória. Deus respondeu impondo um jugo de ferro (exílio inevitável) e Hananias morreu por mentir.',
    storyIntro: 'Nos anos tensos que antecederam o exílio, dois homens enfrentam-se no templo. Um traz uma mensagem de submissão carregando madeira ao pescoço; o outro oferece uma mensagem populista de vitória e parte a madeira. A realidade dará a ambos um veredicto de ferro.',
    epilogue: 'Caso resolvido! Hananias partiu o madeiro de Jeremias, alimentando falsas ilusões populares. A palavra de Deus foi taxativa: o jugo de madeira converteu-se em jugo de ferro e o falso profeta pagou com a vida o seu engano.',
    subtitle: 'Descoberta de ações ocultas · Jeremias 28 · 7x7',
    badge: 'O JUGO PARTIDO · 7x7',
    rooms: {
      atrio_templo: {
        name: 'Átrio Principal da Casa do Senhor',
        shortName: 'Átrio Templo',
        description: 'Lugar público de assembleia onde os sacerdotes e o povo escutavam os oráculos.'
      },
      estrado_sacerdotes: {
        name: 'Estrado dos Sacerdotes e Anciãos',
        shortName: 'Estrado Clérigos',
        description: 'Plataforma onde os líderes religiosos aplaudiam os discursos triunfalistas.'
      },
      palacio_sedecias: {
        name: 'Palácio Real do Rei Sedecias',
        shortName: 'Palácio Sedecias',
        description: 'Câmara do último monarca de Judá, dividido entre a submissão e a rebelião.'
      },
      puerta_muralla: {
        name: 'Porta da Muralha de Jerusalém',
        shortName: 'Porta Muralha',
        description: 'Acesso de onde se avistavam os estandartes ameaçadores do exército caldeu.'
      },
      taller_herreria: {
        name: 'Forja e Ferraria do Jugo de Ferro',
        shortName: 'Forja Ferro',
        description: 'Lugar onde se forjou o jugo indestrutível anunciado na nova profecia.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Jugo de Madeira Partido',
        description: 'Varas de madeira arrancadas do pescoço de Jeremias e destroçadas por Hananias.'
      },
      '1,4': {
        name: 'Jugo de Ferro Inquebrável',
        description: 'Novo instrumento profético que simbolizava a submissão forçada à Babilónia.'
      },
      '2,6': {
        name: 'Coroa Vacilante de Sedecias',
        description: 'Insígnia real do monarca que se recusou a escutar a voz de Jeremias.'
      },
      '4,1': {
        name: 'Lança e Escudo da Guarda',
        description: 'Armas colocadas nas ameias perante a iminência do cerco de Nabucodonosor.'
      }
    },
    suspects: {
      J: {
        name: 'Jeremias',
        role: 'Profeta da verdade e do luto',
        clueText: 'No Átrio do Templo, carregando com humildade as correias de madeira ao pescoço.'
      },
      H: {
        name: 'Hananias',
        role: 'Falso profeta populista',
        clueText: 'No Átrio do Templo, partindo o madeiro perante o clamor da multidão.'
      },
      S: {
        name: 'Sedecias',
        role: 'Rei indeciso de Judá',
        clueText: 'Na porta da muralha, temendo a reação dos oficiais perante o cerco.'
      },
      T: {
        name: 'Sacerdote do Templo',
        role: 'Clérigo complacente com a multidão',
        clueText: 'No Estrado dos Sacerdotes, aplaudindo o vaticínio otimista de dois anos.'
      },
      G: {
        name: 'Guarda do Rei',
        role: 'Sentinela do palácio',
        clueText: 'Na Porta da Muralha, vigiando com temor o avanço das tropas invasoras.'
      },
      B: {
        name: 'Baruc, o Escriba',
        role: 'Secretário fiel de Jeremias',
        clueText: 'Na Forja do Ferro, registando por escrito o novo oráculo do Senhor.'
      },
      A: {
        name: 'Ancião de Judá',
        role: 'Líder civil da cidade',
        clueText: 'No palácio real, duvidando em segredo das promessas de Hananias.'
      }
    },
    clues: {
      c1: {
        text: 'Um profeta andava pela cidade com um jugo de madeira ao pescoço como aviso visual da parte de Deus.',
        narrative: 'Jeremias percorria o átrio mostrando o peso iminente do exílio.'
      },
      c2: {
        text: 'O jugo simbolizava a ordem inevitável de se submeter ao Império Babilónico para evitar a destruição total da cidade.',
        narrative: 'O aviso exortava a depor as armas para salvar a vida do povo.'
      },
      c3: {
        text: 'Um profeta rival contradisse a mensagem perante os sacerdotes, prometendo que Deus destruiria o poder babilónico em apenas dois anos.',
        narrative: 'Hananias proclamou no templo uma falsa libertação a breve prazo.'
      },
      c4: {
        text: 'Para ilustrar a sua mensagem populista, o rival arrancou o jugo de madeira do pescoço do verdadeiro profeta e partiu-o.',
        narrative: 'O madeiro partido caiu diante dos olhos dos sacerdotes e anciãos.'
      },
      c5: {
        text: 'O verdadeiro profeta retirou-se pacificamente, mas pouco depois voltou com uma nova sentença divina.',
        narrative: 'Jeremias e Baruc escreveram a resposta imutável do Senhor.'
      },
      c6: {
        text: 'Deus revelou-lhe que a madeira seria substituída por um jugo de ferro, assegurando o domínio do império invasor.',
        narrative: 'O jugo de ferro foi proclamado como sentença inquebrável.'
      },
      c7: {
        text: 'O profeta que partiu a madeira morreu poucos meses depois, condenado por incitar à rebelião com falsas esperanças.',
        narrative: 'Hananias morreu no sétimo mês desse mesmo ano, segundo a palavra profética.'
      }
    }
  },

  // DESAFIO 001-C: La Carta de la Muerte -> A Carta da Morte
  '001-C': {
    nombre: 'A Carta da Morte',
    categoria: 'Assassínios ou crimes',
    citasBiblicas: '2 Samuel 11, 1-27',
    textoBiblicoClave: 'Escreveu na carta: «Ponde Urias na primeira linha, onde a batalha for mais renhida, e retirai-vos deixando-o sozinho, para que seja ferido e morra.»',
    contextoTeologico: 'A Fé Adulta assinala que a Bíblia não esconde os crimes dos seus heróis. Mostra como o poder monárquico tende para a corrupção e a tirania. Deus condena este abuso de poder e não aceita que a razão de Estado justifique o assassínio.',
    solucionExplicacion: 'David cometeu adultério com Betsabé. Para encobrir a gravidez, ordenou ao seu general Joab que pusesse Urias (marido de Betsabé) na vanguarda para morrer em combate, usando o próprio Urias como mensageiro da sua execução.',
    storyIntro: 'Um soldado valente leva para a frente de batalha um envelope lacrado escrito pelo seu próprio rei. O soldado morre em combate e a sua viúva é instalada rapidamente no palácio real, mas o verdadeiro responsável pelo crime não estava na guerra.',
    epilogue: 'Conspiração criminosa a descoberto! A missiva selada com o anel de David selou o destino de Urias, o hitita, sob as muralhas de Rabá. A pretensa razão de Estado ficou a nu diante dos olhos do Senhor.',
    subtitle: 'Assassínios ou crimes · 2 Samuel 11 · 7x7',
    badge: 'A CARTA DA MORTE · 7x7',
    rooms: {
      azotea_palacio: {
        name: 'Terraço do Palácio de David',
        shortName: 'Terraço Real',
        description: 'Miradouro régio em Jerusalém de onde o rei ocioso observou o banho de purificação.'
      },
      casa_betsabe: {
        name: 'Mansão Familiar de Betsabé',
        shortName: 'Casa Betsabé',
        description: 'Casa contígua onde a mulher de Urias recebeu a convocatória do monarca.'
      },
      muralla_raba: {
        name: 'Vanguarda sob a Muralha de Rabá',
        shortName: 'Muralha Rabá',
        description: 'Frente de combate encarniçado onde os arqueiros amonitas crivaram Urias de setas.'
      },
      tienda_joab: {
        name: 'Posto de Comando do General Joab',
        shortName: 'Tenda Joab',
        description: 'Acampamento sitiante onde se abriu a carta real com a ordem de traição.'
      },
      umbral_guardia: {
        name: 'Limiar do Quartel da Guarda',
        shortName: 'Limiar Guarda',
        description: 'Entrada onde Urias dormiu no chão, recusando descer a sua casa por lealdade aos camaradas.'
      }
    },
    blockedObjects: {
      '0,5': {
        name: 'Carta Lacrada do Rei',
        description: 'Carta mortal levada por Urias sem conhecer o seu conteúdo homicida.'
      },
      '2,2': {
        name: 'Taça de Vinho da Festa Real',
        description: 'Copo com que David embebedou Urias, tentando forçar o seu regresso a casa.'
      },
      '4,0': {
        name: 'Escudo Hitita de Urias',
        description: 'Arma defensiva que não conseguiu conter a chuva de setas inimigas.'
      },
      '6,3': {
        name: 'Seta Amonita de Rabá',
        description: 'Projétil disparado do adarve que abateu o fiel guerreiro abandonado.'
      }
    },
    suspects: {
      D: {
        name: 'David',
        role: 'Rei de Israel',
        clueText: 'Permaneceu em Jerusalém a redigir a ordem de morte para encobrir o seu pecado.'
      },
      B: {
        name: 'Betsabé',
        role: 'Mulher de Urias',
        clueText: 'Guardou luto pelo marido antes de ser introduzida no harém real.'
      },
      U: {
        name: 'Urias',
        role: 'Soldado Hitita Leal',
        clueText: 'Recusou desfrutar do seu lar enquanto a arca e o exército dormiam em tendas.'
      },
      J: {
        name: 'Joab',
        role: 'General do Exército',
        clueText: 'Colocou Urias no setor mais perigoso e ordenou a retirada estratégica.'
      },
      M: {
        name: 'Mensageiro Real',
        role: 'Emissário de Campanha',
        clueText: 'Levou ao rei a notícia da queda de vários oficiais e da morte de Urias.'
      },
      G: {
        name: 'Guarda do Limiar',
        role: 'Sentinela do Palácio',
        clueText: 'Viu Urias descansar junto dos servos do seu senhor sem atravessar o portão de casa.'
      },
      C: {
        name: 'Capitão da Vanguarda',
        role: 'Oficial de Assalto',
        clueText: 'Testemunhou o recuo premeditado das linhas sob as muralhas amonitas.'
      }
    },
    clues: {
      c1: {
        text: 'O rei ficou no palácio enquanto o seu exército lutava em campanha militar contra os amonitas.',
        narrative: 'David permaneceu ocioso em Jerusalém, delegando o cerco em Joab.'
      },
      c2: {
        text: 'Do terraço, o monarca viu a mulher de um dos seus guerreiros a purificar-se e cometeu adultério com ela.',
        narrative: 'Betsabé foi conduzida à câmara real depois de ser avistada das alturas.'
      },
      c3: {
        text: 'Quando a mulher ficou grávida, o rei tentou que o marido voltasse a dormir em casa para encobrir a paternidade.',
        narrative: 'Urias foi chamado da frente com perguntas fingidas sobre o andamento da guerra.'
      },
      c4: {
        text: 'O guerreiro recusou-se a ir a casa por solidariedade com as tropas que dormiam em tendas de campanha.',
        narrative: 'Urias dormiu no limiar junto da guarda vigiada por sentinelas.'
      },
      c5: {
        text: 'O guerreiro levou ao comandante-geral uma carta selada escrita pelo rei, ignorando que continha a sua própria sentença.',
        narrative: 'Urias entregou em mão a sua própria sentença ao general Joab.'
      },
      c6: {
        text: 'O comandante cumpriu a ordem: expôs o guerreiro na primeira linha de combate e ordenou a retirada para que o matassem.',
        narrative: 'Joab e o capitão de assalto deixaram Urias desprotegido sob as muralhas de Rabá.'
      },
      c7: {
        text: 'A viúva guardou o luto oficial, mas foi imediatamente instalada no harém do monarca culpado.',
        narrative: 'O mensageiro real confirmou a David a morte para concluir o casamento.'
      }
    }
  },

  // DESAFIO 003-C: El Viñedo Ensangrentado -> A Vinha Ensanguentada
  '003-C': {
    nombre: 'A Vinha Ensanguentada',
    categoria: 'Assassínios ou crimes',
    citasBiblicas: '1 Reis 21, 1-24',
    textoBiblicoClave: 'Jezabel disse-lhe: «Levanta-te, come e anima-te. Eu te darei a vinha de Nabot, o de Jezrael.»',
    contextoTeologico: 'É um clássico da denúncia profética contra o latifúndio. A Fé Adulta realça que a monarquia corrompe o direito antigo de Israel (a terra pertence a Deus). O profeta defende a justiça social face ao absolutismo.',
    solucionExplicacion: 'A rainha Jezabel orquestrou um julgamento falso com testemunhas compradas para assassinar Nabot e assim oferecer a sua vinha ao rei Acab. O profeta Elias interveio para denunciar este crime de Estado.',
    storyIntro: 'Um proprietário recusa-se a vender ao rei um pequeno campo de família. Semanas depois, é executado publicamente por blasfémia e o rei toma posse do terreno, mas um profeta intercepta-o na própria propriedade.',
    epilogue: 'A vinha de Jezrael manchada de sangue inocente! Elias, o tesbita, confrontou Acab cara a cara: no mesmo lugar onde os cães lamberam o sangue de Nabot, a justiça divina sentenciou a queda da casa de Omri.',
    subtitle: 'Assassínios ou crimes · 1 Reis 21 · 7x7',
    badge: 'A VINHA ENSANGUENTADA · 7x7',
    rooms: {
      palacio_acab: {
        name: 'Palácio Real da Samaria',
        shortName: 'Palácio Acab',
        description: 'Câmara onde Acab se deitou no leito, voltou o rosto para a parede e se recusou a comer.'
      },
      vina_nabot: {
        name: 'Vinha Ancestral de Nabot',
        shortName: 'Vinha Nabot',
        description: 'Herdade fértil contígua ao palácio que Nabot não quis alienar por fidelidade à Aliança.'
      },
      asamblea_ciudad: {
        name: 'Praça do Tribunal e do Jejum',
        shortName: 'Praça Tribunal',
        description: 'Lugar onde se convocou o jejum de fachada e se sentou Nabot à cabeça do povo.'
      },
      pedregal_lapidacion: {
        name: 'Pedregal da Lapidação',
        shortName: 'Pedregal',
        description: 'Fora das muralhas da cidade, onde Nabot foi apedrejado por ordem das falsas testemunhas.'
      },
      camino_elias: {
        name: 'Trilho Profético do Carmelo',
        shortName: 'Trilho Elias',
        description: 'Caminho por onde Elias desceu com a palavra do Senhor a arder na garganta.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Parras e Cachos da Vinha',
        description: 'Vinha cobiçada pelo rei para a transformar em horta de legumes.'
      },
      '2,4': {
        name: 'Cartas Reais Seladas por Jezabel',
        description: 'Instruções secretas dirigidas aos anciãos para contratar testemunhas de perjúrio.'
      },
      '4,6': {
        name: 'Monte de Pedras da Execução',
        description: 'Pedras ensanguentadas atiradas contra o justo Nabot fora das muralhas.'
      },
      '6,0': {
        name: 'Manto de Pelo de Elias',
        description: 'Símbolo do profetismo incorruptível que denunciou a tirania do Estado.'
      }
    },
    suspects: {
      A: {
        name: 'Acab',
        role: 'Rei de Israel',
        clueText: 'Aceitou a vinha arrebatada, descendo eufórico para tomar posse dela.'
      },
      J: {
        name: 'Jezabel',
        role: 'Rainha de Israel',
        clueText: 'Usou o selo do rei e orquestrou a condenação à morte com testemunhas compradas.'
      },
      N: {
        name: 'Nabot',
        role: 'Proprietário Legítimo',
        clueText: 'Declarou: "Livre-me o Senhor de te dar a herança dos meus pais".'
      },
      T1: {
        name: 'Primeira Testemunha Falsa',
        role: 'Acusador de Belial',
        clueText: 'Afirmou falsamente no tribunal: "Nabot amaldiçoou Deus e o rei".'
      },
      T2: {
        name: 'Segunda Testemunha Falsa',
        role: 'Cúmplice de Perjúrio',
        clueText: 'Secundou a calúnia para garantir a sentença de lapidação imediata.'
      },
      E: {
        name: 'Elias',
        role: 'Profeta do Senhor',
        clueText: 'Intercetou o rei na vinha dizendo: "Mataste e ainda por cima tomas posse?".'
      },
      M: {
        name: 'Mordomo da Samaria',
        role: 'Funcionário Cúmplice',
        clueText: 'Transmitiu as cartas da rainha aos magistrados de Jezrael.'
      }
    },
    clues: {
      c1: {
        text: 'O monarca encheu-se de desejo por uma vinha contígua ao seu palácio para a converter numa horta de legumes.',
        narrative: 'Acab ofereceu dinheiro ou uma vinha melhor ao camponês de Jezrael.'
      },
      c2: {
        text: 'O proprietário recusou-se a vendê-la, apelando à lei sagrada que proibia alienar a herança familiar.',
        narrative: 'Nabot defendeu perante o rei a propriedade herdada dos antepassados.'
      },
      c3: {
        text: 'O monarca reagiu com uma birra infantil, recusando-se a comer e deitando-se de cara para a parede.',
        narrative: 'Acab ficou de cama, entristecido, no seu palácio real.'
      },
      c4: {
        text: 'A sua esposa estrangeira usurpou o selo real e escreveu cartas aos anciãos da cidade em nome do rei.',
        narrative: 'Jezabel prometeu a Acab que ela própria lhe conseguiria a vinha de Nabot.'
      },
      c5: {
        text: 'Seguindo as cartas, convocou-se um jejum público e sentou-se o proprietário da vinha num lugar de destaque.',
        narrative: 'Os anciãos prepararam o falso julgamento na praça da cidade.'
      },
      c6: {
        text: 'Dois homens sem escrúpulos acusaram falsamente o proprietário de blasfemar contra Deus e contra a coroa.',
        narrative: 'As duas testemunhas subornadas consumaram a calúnia na presença de todo o povo.'
      },
      c7: {
        text: 'Depois de ele ser apedrejado injustamente, o monarca desceu para tomar o terreno, mas o profeta do Senhor anunciou-lhe a ruína da sua dinastia.',
        narrative: 'Elias plantou-se diante de Acab no meio das vinhas ensanguentadas.'
      }
    }
  },

  // DESAFIO 004-C: El Falso Enfermo -> O Falso Doente
  '004-C': {
    nombre: 'O Falso Doente',
    categoria: 'Assassínios ou crimes',
    citasBiblicas: '2 Samuel 13, 1-22',
    textoBiblicoClave: 'Mas ele não a quis ouvir e, sendo mais forte, forçou-a e deitou-se com ela.',
    contextoTeologico: 'Revela as funestas consequências do pecado a reproduzir-se na família real. Teologicamente, condena a violência contra as mulheres e critica a inação patriarcal de David, que se enfurece mas não exerce a justiça.',
    solucionExplicacion: 'Amnon, aconselhado por Jonadab, fingiu-se doente para violar a sua meia-irmã Tamar. Depois de a forçar, desprezou-a. Absalão, irmão de Tamar, acolheu-a e jurou vingar o ultraje, assassinando mais tarde Amnon.',
    storyIntro: 'Um príncipe finge estar às portas da morte para conseguir que a sua meia-irmã entre no seu quarto privado. O engano termina numa tragédia que dividirá a família real para sempre.',
    epilogue: 'Crime infame no aposento régio! A simulação do falso convalescente ficou exposta. Tamar cobriu a cabeça de cinza com a túnica de mangas rasgada, enquanto Absalão selava no coração a vingança que rebentaria dois anos depois.',
    subtitle: 'Assassínios ou crimes · 2 Samuel 13 · 7x7',
    badge: 'O FALSO DOENTE · 7x7',
    rooms: {
      lecho_amnon: {
        name: 'Aposento Privado de Amnon',
        shortName: 'Leito Amnon',
        description: 'Quarto fechado com tranca onde o primogénito fingiu definhar para perpetrar o ultraje.'
      },
      cocina_tortas: {
        name: 'Mesa dos Bolos Rituais',
        shortName: 'Mesa Bolos',
        description: 'Lugar onde Tamar amassou, à vista do suposto doente, os bolos reconfortantes.'
      },
      palacio_david: {
        name: 'Sala de Audiências de David',
        shortName: 'Palácio David',
        description: 'Trono onde o rei atendeu o pedido enganoso de Amnon e mandou a filha ir ter com ele.'
      },
      residencia_absalon: {
        name: 'Mansão Protetora de Absalão',
        shortName: 'Casa Absalão',
        description: 'Refúgio fraterno onde Tamar, desolada, encontrou asilo e o irmão jurou silêncio e vingança.'
      },
      galeria_cerrojos: {
        name: 'Galeria do Ferrolho Exterior',
        shortName: 'Galeria Ferrolho',
        description: 'Corredor onde o servo expulsou bruscamente a donzela, passando a tranca.'
      }
    },
    blockedObjects: {
      '0,0': {
        name: 'Alguidar de Farinha e Sertã',
        description: 'Ingredientes com que a princesa cozinhou para o irmão.'
      },
      '2,3': {
        name: 'Túnica de Mangas Compridas Rasgada',
        description: 'Veste talar própria das filhas virgens do rei, rasgada pela dor.'
      },
      '4,5': {
        name: 'Ferrolho de Ferro da Porta',
        description: 'Tranca que o criado fechou ao lançar Tamar para fora do quarto.'
      },
      '6,1': {
        name: 'Punhal Vingador de Absalão',
        description: 'Aço afiado em segredo pelo irmão de mãe para ajustar contas em Baal-Hasor.'
      }
    },
    suspects: {
      A: {
        name: 'Amnon',
        role: 'Príncipe Primogénito',
        clueText: 'Simulou uma prostração fingida e depois aborreceu a irmã com um desprezo maior do que o amor.'
      },
      T: {
        name: 'Tamar',
        role: 'Princesa, Irmã de Absalão',
        clueText: 'Suplicou a Amnon que não cometesse tal vileza e pediu-lhe que falasse com o rei.'
      },
      J: {
        name: 'Jonadab',
        role: 'Conselheiro e Primo',
        clueText: 'Sugeriu ao primogénito o engano maquiavélico da falsa doença.'
      },
      D: {
        name: 'David',
        role: 'Rei e Pai',
        clueText: 'Enviou Tamar a casa de Amnon e, embora se tenha enfurecido, não castigou o seu herdeiro.'
      },
      B: {
        name: 'Absalão',
        role: 'Irmão Protetor',
        clueText: 'Recebeu a irmã desolada em sua casa e urdiu a vingança silenciosa.'
      },
      M: {
        name: 'Donzela de Tamar',
        role: 'Criada de Companhia',
        clueText: 'Mandada sair do quarto juntamente com todos os criados antes do ataque.'
      },
      S: {
        name: 'Servo da Porta',
        role: 'Criado de Amnon',
        clueText: 'Cumpriu a ordem de pôr a donzela fora à força e passar o ferrolho atrás dela.'
      }
    },
    clues: {
      c1: {
        text: 'O filho primogénito do rei consumia-se de desejo proibido pela sua meia-irmã, que era virgem.',
        narrative: 'Amnon consumia-se em segredo por Tamar no palácio real.'
      },
      c2: {
        text: 'Um primo astuto sugeriu ao primogénito que fingisse estar gravemente doente para receber a visita do rei.',
        narrative: 'Jonadab idealizou a cilada servindo-se do afeto paternal de David.'
      },
      c3: {
        text: 'O rei, enganado pela farsa, mandou a filha preparar uns bolos à vista do suposto doente.',
        narrative: 'David enviou Tamar a casa do meio-irmão, ignorando o perigo.'
      },
      c4: {
        text: 'Uma vez sozinhos no quarto, o primogénito forçou a jovem, ignorando as suas súplicas e a sua proposta de um casamento legal.',
        narrative: 'Amnon despediu os criados e cometeu o violento ultraje.'
      },
      c5: {
        text: 'Logo a seguir ao crime, o amor obsessivo do agressor transformou-se em nojo visceral e ele expulsou-a.',
        narrative: 'O agressor mandou o seu servo pô-la fora sem contemplações.'
      },
      c6: {
        text: 'A vítima rasgou a sua túnica de mangas compridas (própria das princesas) e deitou cinza sobre a cabeça, chorando aos gritos.',
        narrative: 'Tamar proclamou o seu ultraje pelas ruas de Jerusalém com luto amargo.'
      },
      c7: {
        text: 'O seu irmão de pai e mãe acolheu-a em sua casa e planeou em silêncio uma vingança mortal.',
        narrative: 'Absalão deu abrigo à irmã e selou na memória a afronta de Amnon.'
      }
    }
  },

  // DESAFIO 006-C: El Manto Rasgado -> O Manto Rasgado
  '006-C': {
    nombre: 'O Manto Rasgado',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: '1 Reis 11, 1-40',
    textoBiblicoClave: 'Aías pegou no manto novo que trazia, rasgou-o em doze pedaços e disse a Jeroboão: «Toma dez pedaços...»',
    contextoTeologico: 'Explica teologicamente o Cisma de Israel. A Fé Adulta mostra que a "glória" salomónica assentava na opressão laboral e no sincretismo. A infidelidade à Aliança e a injustiça social destroem a unidade nacional.',
    solucionExplicacion: 'Por causa da idolatria de Salomão, o profeta Aías rasgou o seu manto em doze pedaços, dando dez a Jeroboão para profetizar que Deus fraturaria o império, entregando-lhe o governo das dez tribos do norte (Cisma).',
    storyIntro: 'O monarca mais glorioso de Israel mancha o seu legado ao permitir o culto a deuses estrangeiros. Em resposta, um encontro enigmático em pleno campo com um manto novo prediz a inevitável fratura do país.',
    epilogue: 'O império despedaçado em dez pedaços! O manto novo rasgado por Aías de Silo sentenciou a ruína da dinastia unida. A prepotência fiscal e o culto a Astarte quebraram para sempre o sonho salomónico.',
    subtitle: 'Descoberta de ações ocultas · 1 Reis 11 · 7x7',
    badge: 'O MANTO RASGADO · 7x7',
    rooms: {
      palacio_idolatrico: {
        name: 'Lugares Altos de Culto Pagão de Salomão',
        shortName: 'Altos Pagãos',
        description: 'Santuários erguidos diante de Jerusalém a Milcom e Camos para agradar às suas esposas estrangeiras.'
      },
      campo_silo: {
        name: 'Campo Deserto nos Arredores de Jerusalém',
        shortName: 'Campo Silo',
        description: 'Lugar solitário onde o profeta Aías e o capataz Jeroboão se encontraram a sós.'
      },
      obras_milo: {
        name: 'Fortificação do Milo e Muralha Real',
        shortName: 'Obras Milo',
        description: 'Construções maciças onde os servos da casa de José sofriam duros trabalhos forçados.'
      },
      camara_reina: {
        name: 'Aposento da Rainha Naama',
        shortName: 'Câmara Naama',
        description: 'Recinto da princesa amonita, mãe de Roboão, cujo culto idolátrico desviou o rei sábio.'
      },
      frontera_egipto: {
        name: 'Rota do Exílio para o Egito',
        shortName: 'Rota Egito',
        description: 'Caminho por onde Jeroboão fugiu em busca de refúgio sob a proteção do faraó Sisac.'
      }
    },
    blockedObjects: {
      '0,2': {
        name: 'Altar de Astarte e Camos',
        description: 'Santuários idolátricos construídos por Salomão no monte das Oliveiras.'
      },
      '2,5': {
        name: 'Retalhos do Manto Rasgado',
        description: 'Dez pedaços de tecido novo que anunciaram a entrega de dez tribos ao rebelde.'
      },
      '4,4': {
        name: 'Maço de Pedra das Obras do Milo',
        description: 'Ferramenta de pedreira que testemunhava a exploração da tribo de Efraim.'
      },
      '6,0': {
        name: 'Vaso do Faraó Sisac',
        description: 'Emblema do asilo que o monarca egípcio concedeu ao fugitivo Jeroboão.'
      }
    },
    suspects: {
      S: {
        name: 'Salomão',
        role: 'Rei em Declínio',
        clueText: 'Quis matar Jeroboão logo que lhe chegou aos ouvidos o oráculo do profeta de Silo.'
      },
      J: {
        name: 'Jeroboão',
        role: 'Capataz Efraimita',
        clueText: 'Recebeu dez dos doze pedaços e ergueu-se como futuro rei do reino do norte.'
      },
      A: {
        name: 'Aías',
        role: 'Profeta de Silo',
        clueText: 'Intercetou o capataz a sós no caminho e rasgou o seu manto novinho em doze tiras.'
      },
      N: {
        name: 'Naama',
        role: 'Esposa Amonita',
        clueText: 'Manteve as oferendas a Moloc em Jerusalém, levando o coração do rei ao extravio.'
      },
      R: {
        name: 'Roboão',
        role: 'Príncipe Herdeiro',
        clueText: 'Futuro rei que responderia aos anciãos com chicotes e escorpiões, provocando o cisma.'
      },
      C: {
        name: 'Capataz Real',
        role: 'Inspetor das Pedreiras',
        clueText: 'Supervisionava as equipas de lenhadores e pedreiros do norte sob as ordens de Jeroboão.'
      },
      H: {
        name: 'Arauto de Silo',
        role: 'Testemunha do Campo',
        clueText: 'Viu o profeta regressar a Silo vestido apenas com o seu saco puído.'
      }
    },
    clues: {
      c1: {
        text: 'O rei sábio de Israel envelheceu e deixou-se seduzir pelas suas numerosas esposas pagãs.',
        narrative: 'Salomão desviou a sua fidelidade ao Deus único, adorando divindades estrangeiras.'
      },
      c2: {
        text: 'O rei começou a construir santuários a deuses estrangeiros diante de Jerusalém, rompendo a exclusividade do Senhor.',
        narrative: 'Naama e outras princesas estrangeiras promoveram templos a Camos e Milcom.'
      },
      c3: {
        text: 'Um capataz eficiente da tribo de Efraim foi posto à frente dos trabalhos forçados do norte.',
        narrative: 'Jeroboão destacou-se nas obras do Milo e recebeu o comando das levas de José.'
      },
      c4: {
        text: 'Um profeta de Silo intercetou o capataz quando este saía de Jerusalém e ficaram a sós no campo.',
        narrative: 'Aías abordou o jovem funcionário num descampado sem testemunhas.'
      },
      c5: {
        text: 'O profeta trazia um manto novo, que rasgou violentamente em doze pedaços diante do capataz.',
        narrative: 'Aías realizou a ação profética rasgando a sua veste novinha.'
      },
      c6: {
        text: 'A ação simbolizava que Deus arrancaria a maior parte do reino à dinastia reinante, deixando-lhe apenas uma tribo.',
        narrative: 'Roboão conservaria apenas uma tribo por amor à memória de David.'
      },
      c7: {
        text: 'Ao saber da profecia, o rei tentou assassinar o capataz, que teve de se exilar no Egito.',
        narrative: 'Salomão perseguiu Jeroboão de morte, e este fugiu com o arauto para a corte de Sisac.'
      }
    }
  },

  // DESAFIO 008-C: Atrapado en la Encina -> Preso no Carvalho
  '008-C': {
    nombre: 'Preso no Carvalho',
    categoria: 'Desfechos de histórias e parábolas',
    citasBiblicas: '2 Samuel 18, 1-33',
    textoBiblicoClave: 'Joab pegou em três dardos e cravou-os no coração de Absalão, que ainda estava vivo, preso no carvalho.',
    contextoTeologico: 'O desfecho trágico da guerra civil mostra a dor paternal face à razão de Estado. Teologicamente, sublinha que a ambição política e a vaidade (simbolizada pelo cabelo) conduzem inevitavelmente à ruína.',
    solucionExplicacion: 'Absalão ficou pendurado num carvalho pela sua longa cabeleira depois de fugir na batalha. Joab, desobedecendo à ordem de David de lhe poupar a vida, assassinou-o cravando-lhe três dardos enquanto pendia da árvore.',
    storyIntro: 'Um líder rebelde foge no meio de um massacre na floresta. O seu maior orgulho físico torna-se a sua armadilha mortal, e o general do seu próprio pai executa-o a sangue-frio, desobedecendo a ordens diretas.',
    epilogue: 'Três dardos no coração do usurpador! Absalão ficou suspenso entre o céu e a terra no meio da floresta de Efraim. Joab consumou a execução sem hesitar, enquanto David chorava à porta da cidade: «Meu filho Absalão, quem me dera ter morrido em teu lugar!»',
    subtitle: 'Desfechos de histórias e parábolas · 2 Samuel 18 · 7x7',
    badge: 'PRESO NO CARVALHO · 7x7',
    rooms: {
      bosque_efrain: {
        name: 'Mata Cerrada da Floresta de Efraim',
        shortName: 'Floresta Efraim',
        description: 'Matagal inextricável e barrancos onde a floresta devorou mais soldados do que a espada.'
      },
      gran_encina: {
        name: 'Copa do Grande Carvalho Centenário',
        shortName: 'Grande Carvalho',
        description: 'Ramos grossos onde a cabeleira de Absalão ficou presa enquanto o seu mulo seguiu caminho.'
      },
      puerta_majanayin: {
        name: 'Porta e Torre de Maanaim',
        shortName: 'Torre Maanaim',
        description: 'Acesso à praça fortificada onde o rei David aguardava notícias com o coração apertado.'
      },
      camino_llanura: {
        name: 'Caminho da Planície do Jordão',
        shortName: 'Caminho Planície',
        description: 'Rota desimpedida por onde correu velozmente o mensageiro Aimaás, ultrapassando os emissários.'
      },
      fosa_pedruscos: {
        name: 'Grande Fossa e Monte de Pedras',
        shortName: 'Fossa Pedras',
        description: 'Cova profunda na floresta onde lançaram o corpo sem vida de Absalão, coberto de pedras.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Mulo Real que Seguiu Caminho',
        description: 'Montada em que fugia o rebelde até ficar suspenso dos ramos.'
      },
      '2,4': {
        name: 'Três Dardos de Joab',
        description: 'Setas mortais cravadas com fúria no peito de Absalão pelo general.'
      },
      '4,6': {
        name: 'Shofar do Cessar-Fogo',
        description: 'Corneta com que Joab deteve a matança depois de abater o cabecilha.'
      },
      '6,2': {
        name: 'Túmulo Fúnebre na Floresta',
        description: 'Enorme monte de pedras erguido sobre o cadáver do filho do rei.'
      }
    },
    suspects: {
      A: {
        name: 'Absalão',
        role: 'Príncipe Usurpador',
        clueText: 'Preso e indefeso pela cabeleira, entre o céu e a terra, no grande carvalho.'
      },
      J: {
        name: 'Joab',
        role: 'Comandante-Chefe',
        clueText: 'Desprezou a ordem expressa de clemência do rei e executou pessoalmente Absalão.'
      },
      D: {
        name: 'David',
        role: 'Rei e Pai Aflito',
        clueText: 'Ordenou a todos os seus chefes: "Tratai-me com brandura o jovem Absalão".'
      },
      S: {
        name: 'Soldado Informador',
        role: 'Guerreiro Temente a Deus',
        clueText: 'Recusou as dez moedas de Joab, dizendo que não tocaria no filho do monarca nem por mil siclos.'
      },
      M: {
        name: 'Aimaás',
        role: 'Mensageiro Veloz',
        clueText: 'Correu pelo atalho do vale para levar primeiro a notícia do triunfo militar.'
      },
      E: {
        name: 'Escudeiro de Joab',
        role: 'Armeiro que Rematou',
        clueText: 'Um dos dez jovens escudeiros que cercaram e feriram Absalão na árvore.'
      },
      C: {
        name: 'Sentinela da Torre',
        role: 'Vigia de Maanaim',
        clueText: 'Avisou o monarca, do alto da muralha, da chegada dos mensageiros.'
      }
    },
    clues: {
      c1: {
        text: 'O filho rebelde tinha usurpado o trono do pai através de uma revolta populista e liderava um grande exército.',
        narrative: 'Absalão marchou com as tropas sublevadas ao atravessar o rio Jordão.'
      },
      c2: {
        text: 'Antes da batalha, o velho rei ordenou publicamente aos seus generais que tratassem com brandura o jovem usurpador.',
        narrative: 'David instruiu Joab e todo o exército a não fazerem mal ao seu filho.'
      },
      c3: {
        text: 'O exército rebelde foi massacrado num combate feroz em que o terreno escarpado devorou mais homens do que a espada.',
        narrative: 'O matagal da floresta de Efraim desfez as fileiras rebeldes.'
      },
      c4: {
        text: 'O usurpador fugia no seu mulo quando a sua farta cabeleira, de que se vangloriava, ficou fortemente presa num carvalho.',
        narrative: 'A montada seguiu caminho e Absalão ficou pendurado entre o céu e a terra.'
      },
      c5: {
        text: 'Um soldado encontrou-o suspenso, mas recusou-se a rematá-lo, recordando a ordem estrita do monarca.',
        narrative: 'O soldado avisou Joab da localização do príncipe na ramagem.'
      },
      c6: {
        text: 'O comandante-geral do exército, desprezando a piedade do rei, cravou três dardos no coração do usurpador imobilizado.',
        narrative: 'Joab e os seus escudeiros armados executaram Absalão na árvore.'
      },
      c7: {
        text: 'Ao receber a notícia da vitória, o rei chorou amargamente fechado no seu quarto, lamentando não ter morrido em seu lugar.',
        narrative: 'Aimaás e a sentinela levaram a dolorosa notícia que quebrou o velho rei.'
      }
    }
  },

  // DESAFIO 009-C: El Ídolo en la Cama -> O Ídolo na Cama
  '009-C': {
    nombre: 'O Ídolo na Cama',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: '1 Samuel 19, 11-17',
    textoBiblicoClave: 'Micol pegou no ídolo, deitou-o na cama, pôs-lhe à cabeceira uma pele de cabra e cobriu-o com uma colcha.',
    contextoTeologico: 'Expõe a divisão familiar provocada pelo poder absoluto. A Fé Adulta realça como Micol usa a astúcia e a insubmissão para subverter as ordens injustas do Estado. Ironicamente, um ídolo pagão protege o ungido do Senhor.',
    solucionExplicacion: 'Micol salvou David dos emissários de Saul. Desceu-o por uma janela e meteu na cama um ídolo coberto de pelos de cabra para enganar os sicários, fingindo que David estava gravemente doente.',
    storyIntro: 'Uma princesa tem de escolher entre a lealdade ao pai, que é o rei, e a vida do marido. Para garantir a fuga, usa um falso manequim caseiro que engana os verdadeiros culpados até ao amanhecer.',
    epilogue: 'A colcha destapada diante dos emissários reais! Saul mandou trazer David na sua própria cama para o matar com as suas mãos, mas os soldados só encontraram um ídolo doméstico com lã de cabra na cabeceira.',
    subtitle: 'Descoberta de ações ocultas · 1 Samuel 19 · 7x7',
    badge: 'O ÍDOLO NA CAMA · 7x7',
    rooms: {
      alcoba_david: {
        name: 'Quarto Nupcial de David e Micol',
        shortName: 'Quarto Micol',
        description: 'Leito conjugal onde se colocaram os terafins cobertos com pele lanosa.'
      },
      ventana_escape: {
        name: 'Janelão Traseiro da Muralha',
        shortName: 'Janela Fuga',
        description: 'Abertura voltada para o campo exterior por onde David desceu pendurado em cordas.'
      },
      palacio_saul: {
        name: 'Câmara Real de Saul em Guibeá',
        shortName: 'Palácio Saul',
        description: 'Trono onde o monarca impaciente aguardava o cadáver do genro para saciar os seus ciúmes.'
      },
      puerta_emboscada: {
        name: 'Limiar Vigiado pelos Sicários',
        shortName: 'Limiar Sicários',
        description: 'Viela onde os espiões de Saul montaram guarda toda a noite para prender David ao alvorecer.'
      },
      refugio_ramat: {
        name: 'Colinas da Fuga para Ramá',
        shortName: 'Rota Ramá',
        description: 'Trilho pedregoso por onde David fugiu para se pôr sob o amparo de Samuel.'
      }
    },
    blockedObjects: {
      '0,2': {
        name: 'Estátua do Ídolo Terafim',
        description: 'Figura de tamanho humano vestida com roupas de David no leito.'
      },
      '2,4': {
        name: 'Corda Entrançada da Fuga',
        description: 'Corda atada ao caixilho da janela por onde David desceu para o vazio.'
      },
      '4,6': {
        name: 'Pele e Tecido de Pelo de Cabra',
        description: 'Madeixas colocadas na almofada a imitar a cabeleira de um homem a dormir.'
      },
      '6,0': {
        name: 'Maca Portátil para Levar o Réu',
        description: 'Leito mandado trazer por Saul para levar David, ainda que estivesse moribundo.'
      }
    },
    suspects: {
      S: {
        name: 'Saul',
        role: 'Rei Perseguidor',
        clueText: 'Repreendeu a filha dizendo: "Porque me enganaste e deixaste fugir o meu inimigo?".'
      },
      D: {
        name: 'David',
        role: 'Ungido em Fuga',
        clueText: 'Fugiu nas sombras da noite antes de os guardas irromperem em sua casa.'
      },
      M: {
        name: 'Micol',
        role: 'Princesa e Esposa',
        clueText: 'Disse aos emissários: "Está doente", atrasando a busca até ao meio-dia.'
      },
      S1: {
        name: 'Primeiro Sicário',
        role: 'Guarda de Vigia',
        clueText: 'Vigiou o portão da casa, garantindo que ninguém sairia com vida ao amanhecer.'
      },
      S2: {
        name: 'Segundo Sicário',
        role: 'Guarda que Revistou',
        clueText: 'Retirou a colcha e exclamou perplexo ao ver que só havia madeira e pele de cabra.'
      },
      C: {
        name: 'Criada Cúmplice',
        role: 'Serva de Confiança',
        clueText: 'Trouxe o cobertor e a pele de cabra sem fazer barulho para montar o engodo.'
      },
      R: {
        name: 'Mensageiro do Rei',
        role: 'Emissário de Guibeá',
        clueText: 'Voltou a correr para junto de Saul com a ordem de trazer a cama para o palácio.'
      }
    },
    clues: {
      c1: {
        text: 'O monarca, consumido pelos ciúmes políticos, enviou sicários para vigiar de noite a casa do próprio genro.',
        narrative: 'Saul colocou guardas em segredo às portas da residência de David.'
      },
      c2: {
        text: 'A princesa, apaixonada pelo marido, avisou-o de que, se não fugisse nessa mesma noite, o matariam ao alvorecer.',
        narrative: 'Micol descobriu a cilada do pai e organizou a fuga noturna.'
      },
      c3: {
        text: 'A mulher ajudou o marido a fugir, descendo-o por uma janela traseira para o exterior.',
        narrative: 'David desceu por uma corda em direção às colinas de Ramá.'
      },
      c4: {
        text: 'Para ganhar tempo, a mulher pegou num ídolo doméstico, deitou-o na cama e pôs-lhe pelo de cabra na cabeça.',
        narrative: 'Micol e a sua criada fizeram o manequim para simular um doente acamado.'
      },
      c5: {
        text: 'Quando os sicários chegaram para o prender, ela disse-lhes que o marido estava muito doente, de cama.',
        narrative: 'Os emissários de Saul acreditaram na desculpa da febre e não entraram logo.'
      },
      c6: {
        text: 'O monarca ordenou aos mensageiros que trouxessem o genro com cama e tudo para o assassinar ele próprio.',
        narrative: 'Saul exigiu ao mensageiro real que trouxesse o leito em andas, sem se importar com a sua agonia.'
      },
      c7: {
        text: 'Ao levantarem a colcha, descobriram a farsa, e a princesa mentiu ao pai dizendo que fora obrigada sob ameaça.',
        narrative: 'Os guardas descobriram os terafins e Saul censurou a deslealdade da filha.'
      }
    }
  },

  // DESAFIO 001-NT: La Danza Mortal -> A Dança Mortal
  '001-NT': {
    nombre: 'A Dança Mortal',
    categoria: 'Assassínios ou crimes',
    citasBiblicas: 'Marcos 6, 17-29',
    textoBiblicoClave: 'O rei enviou logo um guarda com ordem de trazer a cabeça de João. O guarda foi à prisão, decapitou-o, trouxe a cabeça num prato e deu-a à rapariga.',
    contextoTeologico: 'Este relato denuncia a tirania e a frivolidade do poder político face à integridade do profeta. A Fé Adulta destaca que o martírio de João prefigura o destino de Jesus, mostrando que a mensagem do Reino entra sempre em conflito com as estruturas de poder injustas.',
    solucionExplicacion: 'Salomé dançou diante de Herodes Antipas, que prometeu dar-lhe o que ela pedisse. Instigada pela mãe, Herodíade, inimiga de João Batista, Salomé pediu a sua cabeça. Herodes, para não faltar ao juramento, mandou decapitar João na prisão.',
    storyIntro: 'Durante um esplêndido banquete de aniversário, um governante fica enfeitiçado por uma dança e faz uma promessa temerária. Essa promessa, manipulada pelo rancor, culmina com o sangue de um profeta servido como prato principal.',
    epilogue: 'A voz no deserto silenciada pelo capricho! O prato de prata com a cabeça do Batista foi entregue à jovem e depois a Herodíade. Os seus discípulos vieram com grande dor, levaram o corpo e deram-lhe digna sepultura.',
    subtitle: 'Assassínios ou crimes · Marcos 6 · 7x7',
    badge: 'A DANÇA MORTAL · 7x7',
    rooms: {
      sala_banquete: {
        name: 'Grande Salão do Banquete Real',
        shortName: 'Salão Banquete',
        description: 'Sala de jantar faustosa onde magnatas e tribunos da Galileia celebravam o aniversário do tetrarca.'
      },
      estrado_danza: {
        name: 'Estrado Central da Dança',
        shortName: 'Estrado Dança',
        description: 'Tapete onde a filha de Herodíade cativou com a sua dança o monarca e os seus convivas.'
      },
      camara_herodias: {
        name: 'Aposento Privado de Herodíade',
        shortName: 'Câmara Herodíade',
        description: 'Recinto secreto onde a rainha instigou a filha a pedir a execução imediata do profeta.'
      },
      mazmorra_maqueronte: {
        name: 'Masmorra Subterrânea de Maqueronte',
        shortName: 'Masmorra Prisão',
        description: 'Cripta húmida e profunda na fortaleza onde João Batista aguardava preso com correntes.'
      },
      pasillo_verdugos: {
        name: 'Corredor da Guarda e dos Carrascos',
        shortName: 'Corredor Guarda',
        description: 'Passagem de pedra por onde a sentinela levou o prato de prata ensanguentado.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Prato de Prata Real',
        description: 'Prato cerimonial pedido por Salomé para apresentar a cabeça decapitada.'
      },
      '2,5': {
        name: 'Decreto de Repúdio Ilícito',
        description: 'Escrito censurado por João que condenava o casamento incestuoso de Herodes.'
      },
      '4,1': {
        name: 'Espada do Carrasco Romano',
        description: 'Arma do carrasco da guarda que executou a ordem sumaríssima na prisão.'
      },
      '6,3': {
        name: 'Grilhetas de Ferro do Batista',
        description: 'Correntes que prendiam o precursor nas profundezas de Maqueronte.'
      }
    },
    suspects: {
      HA: {
        name: 'Herodes Antipas',
        role: 'Tetrarca da Galileia',
        clueText: 'Entristeceu-se com o pedido, mas para não desagradar aos convidados cumpriu o juramento.'
      },
      HE: {
        name: 'Herodíade',
        role: 'Esposa Ilegítima e Rainha',
        clueText: 'Odiava João de morte porque ele proclamava: «Não te é lícito ter a mulher do teu irmão».'
      },
      SA: {
        name: 'Salomé',
        role: 'Jovem Bailarina',
        clueText: 'Entrou precipitadamente diante do rei exigindo: «Quero que me dês agora mesmo a cabeça de João».'
      },
      JB: {
        name: 'João Batista',
        role: 'Profeta e Prisioneiro',
        clueText: 'Voz verdadeira e incorruptível martirizada na solidão das masmorras.'
      },
      GU: {
        name: 'Guarda Carrasco',
        role: 'Soldado da Escolta',
        clueText: 'Desceu à prisão de Maqueronte, decapitou o profeta e trouxe o troféu no prato.'
      },
      NO: {
        name: 'Nobre Conviva',
        role: 'Tribuno Convidado de Honra',
        clueText: 'Testemunha do juramento imprudente pronunciado ao calor do vinho na festa.'
      },
      CA: {
        name: 'Carcereiro de Maqueronte',
        role: 'Guardião da Masmorra',
        clueText: 'Abriu os ferrolhos da cela ao emissário do tetrarca em plena noite.'
      }
    },
    clues: {
      c1: {
        text: 'O rei ofereceu à jovem bailarina tudo o que ela pedisse, até metade do seu reino.',
        narrative: 'Herodes Antipas jurou publicamente satisfazer qualquer pedido de Salomé.'
      },
      c2: {
        text: 'A jovem não sabia o que pedir e saiu do banquete para consultar a mãe.',
        narrative: 'Salomé foi apressada ao aposento de Herodíade para receber instruções.'
      },
      c3: {
        text: 'A mãe odiava o prisioneiro porque este denunciava constantemente o seu casamento ilícito com o rei.',
        narrative: 'Herodíade aproveitou a oportunidade perfeita para eliminar a voz de João.'
      },
      c4: {
        text: 'A jovem regressou e pediu imediatamente a cabeça do prisioneiro num prato de prata.',
        narrative: 'Salomé repetiu sem hesitar a exigência sanguinária diante de todos os nobres.'
      },
      c5: {
        text: 'O rei entristeceu-se, mas não quis quebrar o juramento perante os convidados do banquete.',
        narrative: 'O respeito humano e o medo do que diriam empurraram o tetrarca para o crime.'
      },
      c6: {
        text: 'O prisioneiro foi decapitado na masmorra e a sua cabeça foi entregue à jovem.',
        narrative: 'O guarda cumpriu a ordem, executando João na presença do carcereiro.'
      },
      c7: {
        text: 'A jovem entregou a macabra recompensa à mãe, consumando assim a vingança.',
        narrative: 'Herodíade recebeu satisfeita o prato com a cabeça do Batista.'
      }
    }
  },

  // DESAFIO 002-NT: El Toque Clandestino -> O Toque Clandestino
  '002-NT': {
    nombre: 'O Toque Clandestino',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Lucas 8, 43-48',
    textoBiblicoClave: 'Mas Jesus disse: «Alguém me tocou, porque senti que saiu de mim uma força.» A mulher, vendo que não podia passar despercebida, aproximou-se a tremer...',
    contextoTeologico: 'A lei do Levítico considerava impura a mulher com hemorragias, condenando-a ao isolamento social. O Magistério sublinha como Jesus rompe o tabu religioso da impureza, curando não só o corpo, mas reintegrando a pessoa na comunidade.',
    solucionExplicacion: 'Uma mulher que sofria de hemorragias havia doze anos tocou às escondidas o manto de Jesus no meio da multidão. Ao ficar curada no mesmo instante, Jesus notou que uma força saía dele e fê-la testemunhar publicamente para a dignificar.',
    storyIntro: 'No meio de uma multidão caótica que empurra um rabino famoso para a casa de um líder local, acontece um milagre invisível. Ninguém vê o momento exato, mas uma energia curativa denuncia que alguém quebrou as regras de pureza ritual.',
    epilogue: '«Filha, a tua fé te salvou; vai em paz»! A mulher confessou o seu segredo perante toda a comitiva. O que a lei qualificava de impureza transformou-se em testemunho vivo do poder libertador da graça divina.',
    subtitle: 'Descoberta de ações ocultas · Lucas 8 · 7x7',
    badge: 'O TOQUE CLANDESTINO · 7x7',
    rooms: {
      camino_apretujado: {
        name: 'Viela Apinhada de Cafarnaum',
        shortName: 'Viela Multidão',
        description: 'Ruela estreita onde a multidão apertava Jesus a caminho da casa de Jairo.'
      },
      borde_manto: {
        name: 'Zona da Franja do Manto (Tzitzit)',
        shortName: 'Franja Manto',
        description: 'Espaço rente ao chão, atrás de Jesus, onde a mão trémula roçou a orla da sua túnica.'
      },
      comitiva_jairo: {
        name: 'Avanço da Família de Jairo',
        shortName: 'Comitiva Jairo',
        description: 'Grupo impaciente do chefe da sinagoga que pedia ao Mestre que chegasse antes de a menina morrer.'
      },
      circulo_apostoles: {
        name: 'Círculo de Pedro e dos Discípulos',
        shortName: 'Círculo Discípulos',
        description: 'Acompanhantes imediatos que exprimiram o seu espanto perante a pergunta sobre quem lhe tocara.'
      },
      esquina_testimonio: {
        name: 'Banco Público do Testemunho',
        shortName: 'Banco Testemunho',
        description: 'Recanto onde a mulher se ajoelhou, confessando a cura instantânea perante todos os presentes.'
      }
    },
    blockedObjects: {
      '0,5': {
        name: 'Orla de Linho e Franjas Azuis',
        description: 'Borda do manto onde se concentrou a força curativa ao mero contacto da fé.'
      },
      '2,1': {
        name: 'Prescrições do Levítico',
        description: 'Leis cerimoniais sobre fluxos de sangue que afastavam a mulher da sociedade.'
      },
      '4,6': {
        name: 'Frascos Vazios de Médicos',
        description: 'Remédios caros em que a mulher tinha gastado toda a sua fortuna durante doze anos.'
      },
      '6,2': {
        name: 'Ampulheta da Agonia',
        description: 'A pressa angustiada de Jairo, cuja filha de doze anos estava prestes a expirar.'
      }
    },
    suspects: {
      J: {
        name: 'Jesus',
        role: 'O Mestre que Cura',
        clueText: 'Parou de repente dizendo: «Quem me tocou? Porque senti que saiu de mim uma força».'
      },
      MH: {
        name: 'Mulher Hemorroíssa',
        role: 'Doente de Fé Corajosa',
        clueText: 'Tocou a orla por trás pensando: «Se ao menos tocar no seu manto, ficarei curada».'
      },
      P: {
        name: 'Pedro',
        role: 'Apóstolo Impulsivo',
        clueText: 'Objetou perplexo: «Mestre, a multidão aperta-te e empurra-te, e perguntas quem te tocou?».'
      },
      JR: {
        name: 'Jairo',
        role: 'Chefe da Sinagoga',
        clueText: 'Ia à frente guiando Jesus, desesperado por salvar a vida da sua única filha.'
      },
      D: {
        name: 'Discípulo Anónimo',
        role: 'Companheiro de Caminho',
        clueText: 'Abria caminho com dificuldade entre a massa de vizinhos que enchia a rua.'
      },
      SJ: {
        name: 'Servo de Jairo',
        role: 'Criado Mensageiro',
        clueText: 'Chegava a correr da casa com a notícia: «A tua filha morreu; não incomodes mais o Mestre».'
      },
      EM: {
        name: 'Mulher da Multidão',
        role: 'Testemunha da Rua',
        clueText: 'Viu a hemorroíssa abrir caminho furtivamente, agachando-se entre as pernas da multidão.'
      }
    },
    clues: {
      c1: {
        text: 'Uma grande multidão apertava o Mestre enquanto se dirigia a casa de um chefe da sinagoga.',
        narrative: 'Jairo e os discípulos tentavam abrir caminho no meio da confusão.'
      },
      c2: {
        text: 'Uma pessoa impura segundo a lei sofria havia doze anos de uma doença incurável.',
        narrative: 'A Mulher Hemorroíssa vivia marginalizada socialmente pelo seu sofrimento constante.'
      },
      c3: {
        text: 'Esta pessoa pensou que bastava roçar a orla do manto do Mestre para ficar curada.',
        narrative: 'A fé silenciosa da mulher levou-a a arrastar-se atrás de Jesus.'
      },
      c4: {
        text: 'Ao tocar no manto por trás, a pessoa sentiu imediatamente que a sua doença desaparecia.',
        narrative: 'O fluxo de sangue parou no mesmo instante do contacto furtivo.'
      },
      c5: {
        text: 'O Mestre parou bruscamente, perguntando quem lhe tinha tocado, pois notou que uma força saía dele.',
        narrative: 'Jesus voltou-se, procurando com o olhar a pessoa agraciada.'
      },
      c6: {
        text: 'O discípulo principal e outro companheiro disseram-lhe que era ilógico perguntar aquilo no meio de tantos empurrões.',
        narrative: 'Pedro e o discípulo apontavam a aglomeração de gente como resposta.'
      },
      c7: {
        text: 'A pessoa culpada do toque prostrou-se a tremer, confessou a verdade e recebeu a paz.',
        narrative: 'A mulher, a comitiva e a multidão ouviram a bênção de salvação dos lábios de Jesus.'
      }
    }
  },

  // DESAFIO 006-NT: El Aroma de la Pobreza Fingida -> O Aroma da Pobreza Fingida
  '006-NT': {
    nombre: 'O Aroma da Pobreza Fingida',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'João 12, 1-8',
    textoBiblicoClave: 'Mas Judas Iscariotes (...) disse: «Porque não se vendeu este perfume por trezentos denários para os dar aos pobres?» Disse isto, não porque se importasse com os pobres, mas porque era ladrão...',
    contextoTeologico: 'O texto contrapõe a gratuidade do amor sincero (Maria) ao utilitarismo e à hipocrisia económica (Judas). A teologia contemporânea (Fé Adulta) sublinha que a verdadeira caridade não se opõe à beleza do gesto amoroso nem à entrega desinteressada a Cristo.',
    solucionExplicacion: 'Maria de Betânia ungiu os pés de Jesus com nardo puro. Judas Iscariotes criticou o gasto fingindo preocupação pelos pobres, mas na realidade era um ladrão. Jesus defendeu a ação como uma homenagem profética de amor antes da sua morte iminente.',
    storyIntro: 'No meio de um jantar entre amigos, uma mulher gasta uma fortuna derramando perfume sobre os pés de um convidado. Enquanto um dos apóstolos apela hipocritamente à justiça social, o convidado revela o propósito obscuro e trágico do gesto.',
    epilogue: 'Ungido para a sepultura! A casa inteira ficou perfumada com o cheiro do nardo genuíno. Jesus elogiou a generosidade de Maria: «Os pobres sempre os tereis convosco, mas a mim nem sempre me tereis.»',
    subtitle: 'Descoberta de ações ocultas · João 12 · 7x7',
    badge: 'O AROMA DA POBREZA FINGIDA · 7x7',
    rooms: {
      mesa_banquete: {
        name: 'Mesa Principal dos Convidados',
        shortName: 'Mesa Banquete',
        description: 'Triclínio onde Jesus e Lázaro partilhavam o pão seis dias antes da Páscoa.'
      },
      pies_maestro: {
        name: 'Tapete da Unção com Nardo',
        shortName: 'Tapete Nardo',
        description: 'Lugar onde o frasco de alabastro foi quebrado e o perfume enxugado com cabelos.'
      },
      cocina_servicio: {
        name: 'Cozinha do Afã de Marta',
        shortName: 'Cozinha Marta',
        description: 'Divisão de onde Marta servia com diligência todos os convivas.'
      },
      esquina_bolsa: {
        name: 'Recanto da Bolsa Comum',
        shortName: 'Recanto Bolsa',
        description: 'Lugar sombrio onde Judas guardava a caixa do grupo, tirando do que lá se depositava.'
      },
      patio_exterior: {
        name: 'Pátio Aberto de Betânia',
        shortName: 'Pátio Betânia',
        description: 'Entrada onde os curiosos se juntavam, atraídos tanto por Jesus como por Lázaro ressuscitado.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Frasco Partido de Alabastro',
        description: 'Recipiente com uma libra de perfume de nardo legítimo de altíssimo preço.'
      },
      '2,1': {
        name: 'Bolsa do Dinheiro Furtado',
        description: 'Caixa do dinheiro administrada fraudulentamente por Judas Iscariotes.'
      },
      '4,5': {
        name: 'Tabuleiro de Pães de Marta',
        description: 'Serviço solícito com que Marta obsequiava os convidados em Betânia.'
      },
      '6,0': {
        name: 'Sudário Dobrado de Lázaro',
        description: 'Ligaduras fúnebres que recordavam a recente ressurreição do irmão da casa.'
      }
    },
    suspects: {
      J: {
        name: 'Jesus',
        role: 'O Ungido de Deus',
        clueText: 'Aceitou a unção como antecipação do embalsamamento do seu corpo para o sepulcro.'
      },
      MB: {
        name: 'Maria de Betânia',
        role: 'Irmã Devota',
        clueText: 'Derramou o perfume caríssimo de trezentos denários e enxugou os pés com os cabelos.'
      },
      M: {
        name: 'Marta',
        role: 'Irmã Prestável',
        clueText: 'Servia às mesas preparando iguarias para obsequiar o Mestre e os discípulos.'
      },
      JI: {
        name: 'Judas Iscariotes',
        role: 'Tesoureiro Traidor',
        clueText: 'Criticou o desperdício fingindo interesse pelos pobres, pois roubava da bolsa comum.'
      },
      L: {
        name: 'Lázaro',
        role: 'Irmão Ressuscitado',
        clueText: 'Reclinado à mesa, vivo, depois de ter passado quatro dias no sepulcro.'
      },
      SL: {
        name: 'Simão, o Anfitrião',
        role: 'Dono da Casa',
        clueText: 'Ofereceu o jantar de honra em Betânia para celebrar os prodígios de Jesus.'
      },
      DC: {
        name: 'Discípulo Conviva',
        role: 'Apóstolo Convidado',
        clueText: 'Maravilhado com a fragrância intensa que encheu cada recanto da sala.'
      }
    },
    clues: {
      c1: {
        text: 'Durante um jantar a seis dias da Páscoa, uma mulher pegou numa libra de um perfume caríssimo de nardo puro.',
        narrative: 'Maria tirou o frasco guardado para uma ocasião única e solene.'
      },
      c2: {
        text: 'A mulher partiu o frasco, ungiu os pés do Mestre e enxugou-os com os próprios cabelos.',
        narrative: 'O gesto de amor transbordante deixou todos em silêncio à volta do triclínio.'
      },
      c3: {
        text: 'Toda a casa se encheu do aroma intenso do perfume derramado.',
        narrative: 'Marta na cozinha e os convivas respiraram o aroma balsâmico.'
      },
      c4: {
        text: 'O tesoureiro do grupo protestou, argumentando que o perfume devia ter sido vendido por trezentos denários para os pobres.',
        narrative: 'Judas levantou a voz, censurando com aspereza a devoção de Maria.'
      },
      c5: {
        text: 'O verdadeiro motivo do tesoureiro não era a caridade, mas o facto de roubar da bolsa comum.',
        narrative: 'A cobiça de Judas ensombrava o ambiente festivo da reunião.'
      },
      c6: {
        text: 'O irmão da mulher, que tinha sido ressuscitado recentemente, estava sentado à mesa como convidado.',
        narrative: 'Lázaro partilhava o banquete como prova viva do poder sobre a morte.'
      },
      c7: {
        text: 'O Mestre defendeu a mulher, afirmando que ela tinha antecipado a unção do seu corpo para a sepultura.',
        narrative: 'Jesus travou o ataque de Judas, reivindicando o valor eterno do amor de Maria.'
      }
    }
  },

  // DESAFIO 010-NT: El Soborno del Sepulcro -> O Suborno do Sepulcro
  '010-NT': {
    nombre: 'O Suborno do Sepulcro',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Mateus 28, 1-15',
    textoBiblicoClave: 'Eles reuniram-se com os anciãos e, depois de deliberarem, deram uma grande quantia de dinheiro aos soldados com esta incumbência: «Dizei que os discípulos dele vieram de noite e roubaram o corpo enquanto vós dormíeis.»',
    contextoTeologico: 'O evangelho de Mateus desmonta uma das primeiras polémicas anticristãs (o suposto roubo do cadáver). Teologicamente, ilustra como o sistema corrupto tenta silenciar o acontecimento da Ressurreição através do suborno e da desinformação, opondo à Verdade a manipulação do poder.',
    solucionExplicacion: 'Depois da ressurreição de Jesus, o Sinédrio subornou os soldados romanos que guardavam o sepulcro. Pagaram-lhes para espalharem a mentira de que os discípulos tinham roubado o corpo enquanto eles dormiam, encobrindo assim o milagre.',
    storyIntro: 'A máxima autoridade política e religiosa suborna um esquadrão militar de elite para que admita ter adormecido no seu posto de guarda. Tudo para ocultar um acontecimento inexplicável diante de um túmulo vazio.',
    epilogue: '«Não está aqui, ressuscitou como tinha dito»! Nem o selo de pedra, nem a guarda romana, nem o dinheiro do Sinédrio conseguiram travar a proclamação do triunfo da vida sobre a morte no jardim do sepulcro.',
    subtitle: 'Descoberta de ações ocultas · Mateus 28 · 7x7',
    badge: 'O SUBORNO DO SEPULCRO · 7x7',
    rooms: {
      huerto_sepulcro: {
        name: 'Jardim do Túmulo Talhado na Rocha',
        shortName: 'Jardim Túmulo',
        description: 'Jardim de José de Arimateia onde a grande pedra redonda foi rolada da entrada.'
      },
      puesto_guardia: {
        name: 'Posto da Guarda Militar Romana',
        shortName: 'Posto Guarda',
        description: 'Acampamento de vigília onde os soldados caíram como mortos perante o fulgor angélico.'
      },
      sanedrin_reunion: {
        name: 'Câmara Secreta do Sinédrio',
        shortName: 'Câmara Sinédrio',
        description: 'Sala capitular onde os sacerdotes idealizaram o encobrimento e repartiram as moedas de prata.'
      },
      sendero_magdalena: {
        name: 'Caminho da Alvorada e da Aparição',
        shortName: 'Caminho Alvorada',
        description: 'Trilho por onde correu Maria Madalena cheia de alegria depois de encontrar o sepulcro aberto.'
      },
      calzadas_rumores: {
        name: 'Praças Públicas de Jerusalém',
        shortName: 'Praças Jerusalém',
        description: 'Ruas por onde os soldados espalharam a falsa história do roubo noturno do cadáver.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Pedra Rolada e Selo Quebrado',
        description: 'Enorme laje que fechava o sepulcro, afastada sem intervenção humana.'
      },
      '2,3': {
        name: 'Lençóis Mortuários Enrolados',
        description: 'Sudário e ligaduras deixados cuidadosamente no seu lugar na rocha vazia.'
      },
      '4,0': {
        name: 'Bolsa de Prata do Suborno',
        description: 'Quantia avultada paga à guarda romana para combinar a mentira.'
      },
      '6,5': {
        name: 'Pacto de Imunidade com Pilatos',
        description: 'Promessa do Sinédrio de acalmar o governador se a notícia do sono lhe chegasse aos ouvidos.'
      }
    },
    suspects: {
      J: {
        name: 'Jesus Ressuscitado',
        role: 'O Vencedor da Morte',
        clueText: 'Apareceu vivo às mulheres ao amanhecer dizendo: «Alegrai-vos; não tenhais medo».'
      },
      MM: {
        name: 'Maria Madalena',
        role: 'Apóstola dos Apóstolos',
        clueText: 'Chegou ao sepulcro de madrugada com aromas e viu a pedra removida.'
      },
      G1: {
        name: 'Guarda Romano Principal',
        role: 'Sentinela Subornada',
        clueText: 'Caiu de pânico perante o tremor e depois aceitou o suborno para espalhar o engano.'
      },
      CF: {
        name: 'Caifás',
        role: 'Sumo Sacerdote',
        clueText: 'Convocou a sessão de urgência do Sinédrio para comprar o silêncio militar.'
      },
      AN: {
        name: 'Ancião do Sinédrio',
        role: 'Magistrado Cúmplice',
        clueText: 'Redigiu a palavra de ordem: «Dizei que os discípulos dele vieram de noite e o levaram».'
      },
      G2: {
        name: 'Segundo Guarda Romano',
        role: 'Soldado Cúmplice',
        clueText: 'Repetiu pelos acampamentos a falsa versão em troca da sua parte do saque.'
      },
      AG: {
        name: 'Anjo do Senhor',
        role: 'Arauto Celeste',
        clueText: 'Desceu como um relâmpago, com vestes brancas como a neve, e removeu a pedra.'
      }
    },
    clues: {
      c1: {
        text: 'Um túmulo foi protegido com uma grande pedra e guardado por soldados para evitar o roubo de um cadáver.',
        narrative: 'Os guardas romanos faziam guarda rigorosa, selando o acesso à gruta.'
      },
      c2: {
        text: 'Um violento terramoto abalou o lugar enquanto um ser resplandecente descia do céu e afastava a pedra.',
        narrative: 'O Anjo do Senhor desfez num instante as defesas humanas.'
      },
      c3: {
        text: 'Os guardas do túmulo ficaram paralisados de terror, caindo por terra como mortos.',
        narrative: 'Os soldados tremeram e ficaram sem sentidos perante o fulgor celeste.'
      },
      c4: {
        text: 'Ao recuperarem, os guardas correram para a cidade para informar os sumos sacerdotes do que acontecera.',
        narrative: 'Os guardas em fuga contaram a Caifás o mistério do sepulcro vazio.'
      },
      c5: {
        text: 'As autoridades religiosas, temendo que se soubesse a verdade, entregaram uma grande quantia de dinheiro aos guardas.',
        narrative: 'Caifás e o Ancião do Sinédrio selaram o suborno em dinheiro.'
      },
      c6: {
        text: 'Em troca do dinheiro, os soldados deviam espalhar o boato de que os discípulos tinham roubado o corpo de noite.',
        narrative: 'O boato comprado foi propagado para abafar o impacto da ressurreição.'
      },
      c7: {
        text: 'O cadáver nunca foi encontrado porque o sepultado tinha voltado à vida.',
        narrative: 'Maria Madalena encontrou-se cara a cara com Jesus ressuscitado no jardim.'
      }
    }
  },

  // DESAFIO 001-HCH: El Testigo Lapidado -> A Testemunha Apedrejada
  '001-HCH': {
    nombre: 'A Testemunha Apedrejada',
    categoria: 'Assassínios ou crimes',
    citasBiblicas: 'Atos 7, 54-60',
    textoBiblicoClave: 'As testemunhas depuseram os mantos aos pés de um jovem chamado Saulo. Enquanto o apedrejavam, Estêvão orava...',
    contextoTeologico: 'O martírio de Estêvão marca a primeira grande perseguição em Jerusalém. Teologicamente, Estêvão morre como Jesus: perdoando aos seus carrascos. A Fé Adulta destaca como o sangue do mártir marca silenciosamente o jovem Saulo.',
    solucionExplicacion: 'Estêvão foi acusado falsamente pelo Sinédrio. Ao afirmar que via Jesus no céu, foi apedrejado por blasfémia. Saulo (o futuro apóstolo Paulo) esteve presente, consentindo e guardando os mantos dos culpados.',
    storyIntro: 'Um jovem líder da comunidade pronuncia um discurso de defesa perante o tribunal supremo, mas as suas palavras provocam uma ira incontrolável. É levado aos empurrões para fora da cidade e executado brutalmente enquanto um jovem misterioso guarda a roupa dos culpados.',
    epilogue: '«Senhor, não lhes leves em conta este pecado»! Depois de pronunciar estas palavras perdoando aos seus assassinos, Estêvão adormeceu na paz do Senhor enquanto Saulo aprovava a sua morte em silêncio.',
    subtitle: 'Assassínios ou crimes · Atos 7 · 7x7',
    badge: 'A TESTEMUNHA APEDREJADA · 7x7',
    rooms: {
      sala_sanedrin: {
        name: 'Sala Capitular do Sinédrio',
        shortName: 'Sala Sinédrio',
        description: 'Tribunal onde o rosto de Estêvão resplandeceu como o de um anjo durante a sua defesa.'
      },
      puerta_damasco: {
        name: 'Porta Norte e Muralha de Jerusalém',
        shortName: 'Porta Norte',
        description: 'Saída da cidade por onde a turba enfurecida arrastou o diácono em tumulto.'
      },
      foso_lapidacion: {
        name: 'Depressão do Pedregal Fora da Muralha',
        shortName: 'Fosso Pedregal',
        description: 'Lugar de execução onde as falsas testemunhas atiraram as pedras sobre a vítima.'
      },
      puesto_mantos: {
        name: 'Pedra dos Mantos aos Pés de Saulo',
        shortName: 'Pedra Mantos',
        description: 'Rocha onde o jovem fariseu Saulo vigiava as roupas dos executores, aprovando o linchamento.'
      },
      cielo_abierto: {
        name: 'Visão Celeste do Filho do Homem',
        shortName: 'Visão Céu',
        description: 'A revelação da glória divina e de Jesus de pé à direita do Pai antes do desfecho.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Auto de Acusação por Blasfémia',
        description: 'Documento manipulado em que se acusava Estêvão de falar contra Moisés e o Templo.'
      },
      '2,3': {
        name: 'Portão da Muralha Transposto',
        description: 'Limiar por onde os sacerdotes levaram o condenado para fora da cidade santa.'
      },
      '4,5': {
        name: 'Pilha de Mantos dos Culpados',
        description: 'Peças de roupa depostas aos pés do jovem Saulo para poderem atirar pedras à vontade.'
      },
      '6,2': {
        name: 'Pedras Manchadas de Sangue',
        description: 'Seixo mortal recolhido do leito rochoso da torrente do Cédron.'
      }
    },
    suspects: {
      ES: {
        name: 'Estêvão',
        role: 'Diácono Protomártir',
        clueText: 'Cheio do Espírito Santo, exclamou: «Vejo os céus abertos e o Filho do Homem à direita de Deus».'
      },
      SA: {
        name: 'Saulo',
        role: 'Jovem Fariseu Zeloso',
        clueText: 'Guardava os mantos das testemunhas e consentia plenamente na morte de Estêvão.'
      },
      T1: {
        name: 'Primeira Testemunha Falsa',
        role: 'Subornado da Sinagoga',
        clueText: 'Declarou com dolo: «Ouvimo-lo dizer que Jesus de Nazaré destruirá este lugar santo».'
      },
      T2: {
        name: 'Segunda Testemunha Falsa',
        role: 'Acusador Cúmplice',
        clueText: 'Tirou a túnica exterior para atirar as primeiras pedras segundo a lei mosaica.'
      },
      SS: {
        name: 'Sumo Sacerdote',
        role: 'Presidente do Sinédrio',
        clueText: 'Perguntou a Estêvão: «É verdade o que estes dizem?», e tapou os ouvidos perante a resposta.'
      },
      AN: {
        name: 'Ancião do Conselho',
        role: 'Magistrado Furioso',
        clueText: 'Rangeu os dentes contra Estêvão ao ver-se censurado como perseguidor dos justos.'
      },
      VP: {
        name: 'Carrasco das Pedras',
        role: 'Executor da Turba',
        clueText: 'Atirou os projéteis sobre o mártir ajoelhado até lhe causar a morte.'
      }
    },
    clues: {
      c1: {
        text: 'A vítima era um dos sete homens escolhidos para administrar a comida das viúvas na comunidade.',
        narrative: 'Estêvão servia com graça e sabedoria na igreja de Jerusalém.'
      },
      c2: {
        text: 'Um grupo de homens foi subornado para o acusar de blasfemar contra o templo e a lei.',
        narrative: 'As duas testemunhas falsas e o Sumo Sacerdote organizaram a cilada judicial.'
      },
      c3: {
        text: 'Durante o julgamento, o rosto da vítima parecia o de um anjo, mas as suas palavras finais enfureceram o tribunal.',
        narrative: 'O Ancião e o conselho rangeram os dentes perante a eloquência de Estêvão.'
      },
      c4: {
        text: 'A vítima afirmou ver os céus abertos e o Filho do Homem à direita de Deus, o que desencadeou o linchamento.',
        narrative: 'O Sinédrio lançou-se em uníssono, gritando e tapando os ouvidos.'
      },
      c5: {
        text: 'Os carrascos arrastaram-no para fora das muralhas da cidade para o executarem à pedrada.',
        narrative: 'A turba e o carrasco atravessaram as portas com Estêvão preso.'
      },
      c6: {
        text: 'As testemunhas principais tiraram os mantos para atirar as pedras e deixaram-nos aos pés de um jovem fariseu.',
        narrative: 'Saulo guardou a roupa dos executores, aprovando solenemente o ato.'
      },
      c7: {
        text: 'Antes de morrer, a vítima pediu em voz alta que não se levasse em conta este pecado aos seus carrascos.',
        narrative: 'Estêvão expirou pedindo perdão para os que o apedrejavam.'
      }
    }
  },

  // DESAFIO 003-HCH: El Sueño Profundo -> O Sono Profundo
  '003-HCH': {
    nombre: 'O Sono Profundo',
    categoria: 'Desfechos de histórias e parábolas',
    citasBiblicas: 'Atos 20, 7-12',
    textoBiblicoClave: 'Paulo desceu, debruçou-se sobre ele, abraçou-o e disse: «Não vos alarmeis, que ele está vivo.»',
    contextoTeologico: 'Este relato de ressurreição confirma a autoridade apostólica de Paulo. A Fé Adulta realça que a eucaristia ("fração do pão") é o centro da vida comunitária que vence a morte na comunidade cristã.',
    solucionExplicacion: 'Durante um longuíssimo sermão noturno de Paulo em Tróade, o jovem Êutico adormeceu, caiu da janela do terceiro andar e morreu. Paulo desceu, abraçou-o, ressuscitando-o, e depois subiu para continuar a celebrar a eucaristia.',
    storyIntro: 'Numa reunião noturna no terceiro andar de uma casa, um jovem cai fulminado da janela para o chão. O pânico rebenta ao verificarem que não respira, mas o orador principal desce tranquilamente, abraça-o e anuncia que a reunião continua.',
    epilogue: 'Vida no meio da assembleia! Êutico subiu vivo pelo seu próprio pé, enchendo de imenso consolo a comunidade, que permaneceu em comunhão fraterna até ao romper da aurora.',
    subtitle: 'Desfechos de histórias e parábolas · Atos 20 · 7x7',
    badge: 'O SONO PROFUNDO · 7x7',
    rooms: {
      sala_alta: {
        name: 'Cenáculo e Aposento do Terceiro Andar',
        shortName: 'Terceiro Andar',
        description: 'Aposento iluminado por numerosas lâmpadas de azeite onde a comunidade partia o pão.'
      },
      marco_ventana: {
        name: 'Parapeito Perigoso da Janela',
        shortName: 'Parapeito Janela',
        description: 'Borda elevada onde o jovem Êutico lutava contra o sono no meio da penumbra.'
      },
      patio_empedrado: {
        name: 'Pátio Interior e Empedrado da Queda',
        shortName: 'Pátio Queda',
        description: 'Chão de pedra onde embateu o corpo do rapaz depois de cair no vazio.'
      },
      mesa_fraccion: {
        name: 'Mesa da Fração do Pão Eucarístico',
        shortName: 'Mesa Fração',
        description: 'Mesa solene onde continuaram a vigília e a refeição fraterna depois do milagre.'
      },
      escalera_exterior: {
        name: 'Escadaria Estreita de Acesso',
        shortName: 'Escadaria',
        description: 'Lanços de degraus que Paulo desceu à pressa para socorrer o infeliz.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Caixilho Desconjuntado da Janela',
        description: 'Abertura do terceiro andar de onde Êutico caiu no seu sono profundo.'
      },
      '1,2': {
        name: 'Lâmpadas de Azeite Fumegantes',
        description: 'Luzes que aqueciam a sala e esgotavam o ar respirável do aposento.'
      },
      '4,0': {
        name: 'Pedras do Impacto',
        description: 'Ponto exato do chão onde o jovem foi levantado inerte e sem pulso.'
      },
      '6,5': {
        name: 'Pão Partido da Fração',
        description: 'Alimento eucarístico consumido por Paulo e pela assembleia ao subirem de novo.'
      }
    },
    suspects: {
      P: {
        name: 'Paulo',
        role: 'O Apóstolo Incansável',
        clueText: 'Prolongou o seu discurso até à meia-noite porque tinha de partir ao amanhecer.'
      },
      EU: {
        name: 'Êutico',
        role: 'O Jovem Adormecido',
        clueText: 'Sentado na janela, vencido pelo sono profundo, caiu no vazio.'
      },
      LC: {
        name: 'Médico Lucas',
        role: 'Cronista e Clínico',
        clueText: 'Desceu a examinar o corpo e certificou pericialmente que tinha sido levantado morto.'
      },
      CV: {
        name: 'Companheiro de Viagem',
        role: 'Missionário Acompanhante',
        clueText: 'Acompanhava a delegação que aguardava embarcar no porto de Tróade.'
      },
      DC: {
        name: 'Dono da Casa',
        role: 'Anfitrião de Tróade',
        clueText: 'Ofereceu o seu aposento alto iluminado com abundantes lucernas para a vigília.'
      },
      MA: {
        name: 'Mulher Presente',
        role: 'Fiel da Comunidade',
        clueText: 'Gritou desesperada ao ver o jovem cair na escuridão da noite.'
      },
      SP: {
        name: 'Servidor do Pão',
        role: 'Diácono da Mesa',
        clueText: 'Guardava o pão e o cálice, esperando que Paulo acabasse de exortar.'
      }
    },
    clues: {
      c1: {
        text: 'O orador principal tinha previsto viajar no dia seguinte, por isso alongou o seu discurso até à meia-noite.',
        narrative: 'Paulo falava longamente, sabendo que não voltaria a vê-los tão cedo.'
      },
      c2: {
        text: 'A sala do terceiro andar estava muito iluminada por numerosas lâmpadas de azeite que consumiam o oxigénio.',
        narrative: 'O Dono da casa tinha colocado lucernas acesas em cada viga.'
      },
      c3: {
        text: 'Um jovem, sentado no parapeito da janela, foi vencido por um sono irresistível enquanto escutava.',
        narrative: 'Êutico cabeceava no parapeito entre o fumo e o calor da sala.'
      },
      c4: {
        text: 'Ao adormecer completamente, o jovem caiu no vazio do terceiro andar e foi recolhido morto.',
        narrative: 'A Mulher presente e Lucas constataram a tragédia no pátio empedrado.'
      },
      c5: {
        text: 'O orador desceu imediatamente da sala, debruçou-se sobre o corpo do jovem e estreitou-o nos braços.',
        narrative: 'Paulo desceu a escada e estendeu-se sobre Êutico como os antigos profetas.'
      },
      c6: {
        text: 'O orador tranquilizou a multidão, garantindo que o jovem tinha vida nele.',
        narrative: 'Paulo dissipou o pranto da assembleia, afirmando a graça curativa divina.'
      },
      c7: {
        text: 'Depois do milagre, todos voltaram a subir, partiram o pão e continuaram a conversar até ao amanhecer.',
        narrative: 'O servidor do pão repartiu as porções e continuaram a conversar alegremente.'
      }
    }
  },

  // DESAFIO 005-HCH: La Ceguera del Hechicero -> A Cegueira do Feiticeiro
  '005-HCH': {
    nombre: 'A Cegueira do Feiticeiro',
    categoria: 'Assassínios ou crimes',
    citasBiblicas: 'Atos 13, 6-12',
    textoBiblicoClave: 'No mesmo instante caíram sobre ele escuridão e trevas, e andava às apalpadelas, procurando quem lhe desse a mão.',
    contextoTeologico: 'Marca um ponto de viragem em que Saulo assume o nome de Paulo e a liderança ativa. Teologicamente, representa a vitória da revelação cristã sobre o esoterismo mágico e a manipulação psicológica.',
    solucionExplicacion: 'Em Chipre, o falso profeta e mago Elimas tentou impedir que o procônsul Sérgio Paulo se convertesse. Paulo, cheio do Espírito, deixou-o temporariamente cego, o que provocou a conversão do procônsul.',
    storyIntro: 'O governador de uma ilha convida dois pregadores para a sua corte para ouvir a sua mensagem. Um feiticeiro judeu tenta boicotar a reunião manipulando o governador. De repente, o feiticeiro fica cego e precisa que o levem pela mão.',
    epilogue: '«Ó homem cheio de todo o engano e de toda a maldade, filho do diabo»! Elimas ficou mergulhado em densas trevas. Ao ver o que acontecera, o procônsul Sérgio Paulo abraçou a doutrina do Senhor, profundamente comovido.',
    subtitle: 'Assassínios ou crimes · Atos 13 · 7x7',
    badge: 'A CEGUEIRA DO FEITICEIRO · 7x7',
    rooms: {
      palacio_proconsul: {
        name: 'Audiência Imperial de Pafos',
        shortName: 'Audiência Pafos',
        description: 'Sede do governo de Chipre onde Sérgio Paulo convocou os evangelizadores.'
      },
      estrado_mago: {
        name: 'Aposento Esotérico de Barjesus (Elimas)',
        shortName: 'Estrado Elimas',
        description: 'Lugar onde o adivinho exibia as suas artes arcanas para controlar as decisões do procônsul.'
      },
      zona_tinieblas: {
        name: 'Recanto da Névoa e da Escuridão',
        shortName: 'Recanto Cegueira',
        description: 'Espaço onde Elimas começou a tropeçar às apalpadelas, procurando uma mão que o guiasse.'
      },
      tribuna_pablo: {
        name: 'Púlpito de Proclamação de Paulo e Barnabé',
        shortName: 'Púlpito Missionário',
        description: 'Lugar onde Paulo fixou os olhos no adversário, proclamando o juízo divino.'
      },
      patio_guardia: {
        name: 'Átrio dos Escribas e da Escolta',
        shortName: 'Átrio Escolta',
        description: 'Pórtico onde os secretários romanos presenciaram o castigo sobrenatural.'
      }
    },
    blockedObjects: {
      '0,2': {
        name: 'Convocatória Consular',
        description: 'Convite oficial emitido pelo procônsul para ouvir a Palavra de Deus.'
      },
      '2,0': {
        name: 'Talismã Astrológico de Elimas',
        description: 'Objeto de adivinhação com que Barjesus enganava a corte de Chipre.'
      },
      '4,2': {
        name: 'Névoa Súbita de Trevas',
        description: 'Escuridão repentina que privou da luz do sol os olhos do feiticeiro.'
      },
      '6,5': {
        name: 'Selo do Senado Romano em Pafos',
        description: 'Emblema que atestava a jurisdição do governador Sérgio Paulo.'
      }
    },
    suspects: {
      P: {
        name: 'Paulo',
        role: 'Apóstolo dos Gentios',
        clueText: 'Cheio do Espírito Santo, fixou nele o olhar e declarou: «A mão do Senhor está contra ti».'
      },
      B: {
        name: 'Barnabé',
        role: 'Filho da Consolação',
        clueText: 'Natural de Chipre, acompanhou Paulo ao tribunal proconsular da sua pátria.'
      },
      EL: {
        name: 'Elimas, o Mago',
        role: 'Falso Profeta Judeu',
        clueText: 'Procurava afastar o procônsul da fé até que uma nuvem de escuridão lhe cegou os olhos.'
      },
      SP: {
        name: 'Sérgio Paulo',
        role: 'Procônsul Esclarecido',
        clueText: 'Homem prudente que mandou chamar os missionários, desejoso de conhecer a verdade.'
      },
      JM: {
        name: 'João Marcos',
        role: 'Auxiliar Evangelizador',
        clueText: 'Ajudava os apóstolos na travessia de Salamina até à cidade de Pafos.'
      },
      SC: {
        name: 'Soldado da Corte',
        role: 'Guardião do Pretório',
        clueText: 'Teve de segurar Elimas pela mão quando este começou a tropeçar, cego, pela sala.'
      },
      MP: {
        name: 'Médico de Pafos',
        role: 'Clínico Grego',
        clueText: 'Verificou com espanto que os olhos do feiticeiro não tinham dano físico visível, mas estavam cegos.'
      }
    },
    clues: {
      c1: {
        text: 'O governador era um homem inteligente que desejava sinceramente ouvir a palavra de Deus.',
        narrative: 'Sérgio Paulo convocou Paulo e Barnabé para a sua audiência em Pafos.'
      },
      c2: {
        text: 'O feiticeiro pertencia à corte do governador e intervinha para o afastar da fé.',
        narrative: 'Elimas contradizia os apóstolos, temendo perder a sua influência sobre o procônsul.'
      },
      c3: {
        text: 'Um dos pregadores, cheio do Espírito Santo, fixou o seu olhar penetrante no feiticeiro.',
        narrative: 'Paulo enfrentou com firmeza o impostor na presença de João Marcos.'
      },
      c4: {
        text: 'O pregador denunciou o feiticeiro, acusando-o de ser filho do diabo e inimigo da justiça.',
        narrative: 'Paulo desmascarou os ardis do falso profeta perante toda a corte.'
      },
      c5: {
        text: 'O pregador pronunciou uma sentença: a mão do Senhor cairia sobre ele e não veria o sol durante algum tempo.',
        narrative: 'O aviso apostólico ressoou no silêncio do pretório.'
      },
      c6: {
        text: 'Uma nuvem de escuridão caiu imediatamente sobre os olhos do feiticeiro, deixando-o totalmente cego.',
        narrative: 'O soldado da corte e o médico tiveram de guiar às apalpadelas o mago desorientado.'
      },
      c7: {
        text: 'Ao ver o poder que acompanhava a mensagem, o governador acreditou imediatamente.',
        narrative: 'Sérgio Paulo maravilhou-se perante a glória de Deus, abraçando a fé cristã.'
      }
    }
  },

  // DESAFIO 007-HCH: El Fantasma en la Puerta -> O Fantasma à Porta
  '007-HCH': {
    nombre: 'O Fantasma à Porta',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Atos 12, 1-17',
    textoBiblicoClave: 'Ao reconhecer a voz de Pedro, de pura alegria não abriu a porta, mas entrou a correr a anunciar que Pedro estava à porta.',
    contextoTeologico: 'O relato tem um tom quase cómico que realça o inesperado da ação de Deus. A comunidade reza fervorosamente por um milagre, mas quando Deus responde, a incredulidade inicial demonstra que a libertação é pura obra da graça.',
    solucionExplicacion: 'Pedro foi libertado milagrosamente da prisão por um anjo. Ao chegar a casa de Maria, a criada Rode ouviu-o, mas com a emoção não lhe abriu a porta. Os discípulos não acreditaram nela até o verem cara a cara.',
    storyIntro: 'Um líder religioso, condenado à morte, aparece à meia-noite a bater à porta de uma casa. A jovem que ouve a sua voz emociona-se tanto que se esquece de lhe abrir, deixando o homem na rua enquanto os de dentro julgam que é uma alucinação.',
    epilogue: 'As correntes caíram e o ferrolho de ferro cedeu! Pedro explicou à assembleia como o Senhor o livrara das mãos de Herodes e da expectativa do povo judeu.',
    subtitle: 'Descoberta de ações ocultas · Atos 12 · 7x7',
    badge: 'O FANTASMA À PORTA · 7x7',
    rooms: {
      prision_maxima: {
        name: 'Calabouço Militar da Fortaleza Antónia',
        shortName: 'Calabouço Prisão',
        description: 'Cela onde Pedro dormia preso com duas correntes entre dois soldados armados.'
      },
      puerta_hierro: {
        name: 'Portão de Ferro Automático',
        shortName: 'Portão Ferro',
        description: 'Portão monumental que dava para a cidade e se abriu espontaneamente sem chave.'
      },
      calle_medianoche: {
        name: 'Viela Noturna de Jerusalém',
        shortName: 'Viela Noite',
        description: 'Caminho solitário por onde o apóstolo andou depois de desaparecer a presença angélica.'
      },
      portal_exterior: {
        name: 'Vestíbulo e Porta Exterior da Casa',
        shortName: 'Vestíbulo Exterior',
        description: 'Entrada onde Pedro batia repetidamente enquanto a donzela corria para dentro.'
      },
      sala_oracion: {
        name: 'Aposento de Oração Fervorosa',
        shortName: 'Sala Oração',
        description: 'Sala onde muitos fiéis clamavam a Deus sem cessar pela vida de Pedro.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Duas Correntes de Ferro Caídas',
        description: 'Grilhetas que se soltaram milagrosamente dos pulsos de Pedro quando o anjo lhe tocou.'
      },
      '1,3': {
        name: 'Portão de Ferro Aberto',
        description: 'Grande porta da cidade que girou nos gonzos sem que ninguém a empurrasse.'
      },
      '3,5': {
        name: 'Batente de Bronze da Casa',
        description: 'Aldraba que Pedro fazia soar insistentemente, à espera de ser recebido.'
      },
      '5,2': {
        name: 'Velas da Vigília Comunitária',
        description: 'Luzes que iluminavam a oração incessante da igreja em casa de Maria.'
      }
    },
    suspects: {
      P: {
        name: 'Pedro',
        role: 'Prisioneiro Libertado',
        clueText: 'Batia à porta depois de passar a guarda, julgando primeiro que vivia um sonho.'
      },
      HA: {
        name: 'Rei Herodes Agripa',
        role: 'Monarca Perseguidor',
        clueText: 'Tinha matado Tiago à espada e prendera Pedro para o apresentar ao povo depois da Páscoa.'
      },
      R: {
        name: 'Rode',
        role: 'Jovem Criada',
        clueText: 'Reconheceu a voz de Pedro e, de pura alegria, não abriu a porta, mas correu para dentro a gritar.'
      },
      AG: {
        name: 'Anjo do Senhor',
        role: 'Libertador Celeste',
        clueText: 'Tocou Pedro no lado para o acordar e mandou-o calçar as sandálias e cingir o manto.'
      },
      MM: {
        name: 'Maria (Mãe de Marcos)',
        role: 'Anfitriã da Vigília',
        clueText: 'Acolhia em sua casa a multidão que orava com lágrimas pela libertação do apóstolo.'
      },
      CG: {
        name: 'Sentinela da Prisão',
        role: 'Guarda de Serviço',
        clueText: 'Permaneceu mergulhado num torpor sobrenatural enquanto o recluso fugia do seu lado.'
      },
      DI: {
        name: 'Discípulo Incrédulo',
        role: 'Fiel Relutante',
        clueText: 'Disse à criada: «Estás louca! É o anjo dele, não pode ser Pedro em pessoa».'
      }
    },
    clues: {
      c1: {
        text: 'O líder da comunidade estava acorrentado entre dois guardas numa cela de segurança máxima.',
        narrative: 'Herodes Agripa tinha destacado quatro piquetes de quatro soldados para guardar Pedro.'
      },
      c2: {
        text: 'Na noite anterior à execução, um ser luminoso acordou o prisioneiro e as correntes caíram sozinhas.',
        narrative: 'O Anjo do Senhor encheu a cela de resplendor e levantou o apóstolo.'
      },
      c3: {
        text: 'Depois de passarem a primeira e a segunda guarda, a porta de ferro que dava para a cidade abriu-se por si mesma.',
        narrative: 'Pedro e o anjo atravessaram os postos sem serem notados pelos soldados.'
      },
      c4: {
        text: 'O líder, julgando que era uma visão, caiu em si e dirigiu-se à casa onde a comunidade orava por ele.',
        narrative: 'Pedro deu-se conta, na rua, de que o Senhor o tinha libertado de verdade.'
      },
      c5: {
        text: 'Uma criada reconheceu a sua voz quando ele bateu à porta exterior, mas correu para dentro de alegria sem lhe abrir.',
        narrative: 'Rode ouviu a saudação de Pedro do outro lado da porta de madeira.'
      },
      c6: {
        text: 'Os que rezavam na casa chamaram louca à criada, afirmando que devia ser o anjo do prisioneiro.',
        narrative: 'O Discípulo incrédulo e a assembleia rejeitaram inicialmente o testemunho de Rode.'
      },
      c7: {
        text: 'Finalmente abriram a porta e, assombrados, ouviram o prisioneiro contar a sua libertação.',
        narrative: 'Todos se calaram quando Pedro lhes fez sinal com a mão para lhes contar o prodígio.'
      }
    }
  },

  // DESAFIO 009-HCH: La Adivina Silenciada -> A Adivinha Silenciada
  '009-HCH': {
    nombre: 'A Adivinha Silenciada',
    categoria: 'Assassínios ou crimes',
    citasBiblicas: 'Atos 16, 16-24',
    textoBiblicoClave: 'Vendo os seus donos que se lhes tinha esfumado a esperança de lucro, agarraram Paulo e Silas e arrastaram-nos para a praça...',
    contextoTeologico: 'Mostra como o Evangelho choca com a exploração humana. A Fé Adulta destaca que libertar uma pessoa oprimida traz consequências penais quando ataca os interesses do capital. A salvação cristã implica libertação integral.',
    solucionExplicacion: 'Em Filipos, Paulo exorcizou uma escrava que adivinhava o futuro e enriquecia os seus donos. Ao perderem o negócio, os donos denunciaram falsamente Paulo e Silas, que foram açoitados e presos até um terramoto os libertar.',
    storyIntro: 'Dois missionários são açoitados e presos sem julgamento prévio. O seu único "delito" foi realizar um exorcismo sobre uma mulher que, paradoxalmente, não parava de lhes fazer publicidade positiva pelas ruas.',
    epilogue: 'Meia-noite de cânticos e correntes partidas! O grande tremor abriu as portas do calabouço e o carcereiro de Filipos lavou-lhes as feridas e foi batizado com toda a família depois de ouvir: «Crê no Senhor Jesus e serás salvo».',
    subtitle: 'Assassínios ou crimes · Atos 16 · 7x7',
    badge: 'A ADIVINHA SILENCIADA · 7x7',
    rooms: {
      foro_mercado: {
        name: 'Fórum Público e Tribunal de Filipos',
        shortName: 'Fórum Filipos',
        description: 'Praça principal onde os donos enfurecidos apresentaram a falsa acusação de sedição.'
      },
      calle_pitonisa: {
        name: 'Avenida do Oráculo e da Adivinhação',
        shortName: 'Avenida Oráculo',
        description: 'Rua por onde a jovem escrava seguia Paulo, gritando atrás dele durante dias.'
      },
      calabozo_hondo: {
        name: 'Calabouço Interior da Prisão',
        shortName: 'Calabouço Interior',
        description: 'A cela mais escura e subterrânea, onde os apóstolos tinham os pés presos no tronco.'
      },
      patio_carcelero: {
        name: 'Casa e Pátio do Carcereiro',
        shortName: 'Pátio Carcereiro',
        description: 'Residência do carcereiro onde lavou as feridas dos prisioneiros e partilhou a mesa.'
      },
      ribera_gangites: {
        name: 'Margem do Rio Gangites',
        shortName: 'Margem Rio',
        description: 'Lugar de oração fora das muralhas onde Paulo costumava ir ensinar aos sábados.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Bolsa dos Lucros do Oráculo',
        description: 'Moedas cobradas pelos donos através dos vaticínios da jovem oprimida.'
      },
      '2,1': {
        name: 'Símbolo do Espírito Pitónico',
        description: 'Influência demoníaca da adivinhação expulsa pela ordem de Paulo.'
      },
      '4,5': {
        name: 'Tronco de Madeira para os Pés',
        description: 'Madeiro perfurado onde encaixaram com crueldade os tornozelos dos apóstolos.'
      },
      '6,3': {
        name: 'Espada Desembainhada do Carcereiro',
        description: 'Arma com que o oficial ia tirar a própria vida, julgando que os reclusos tinham fugido.'
      }
    },
    suspects: {
      P: {
        name: 'Paulo',
        role: 'Missionário Exorcista',
        clueText: 'Disse ao espírito: «Ordeno-te em nome de Jesus Cristo que saias dela». E saiu no mesmo instante.'
      },
      S: {
        name: 'Silas',
        role: 'Companheiro Açoitado',
        clueText: 'Cantava hinos de louvor à meia-noite no calabouço interior junto de Paulo.'
      },
      JE: {
        name: 'Jovem Escrava',
        role: 'Pitonisa Explorada',
        clueText: 'Gritava atrás deles: «Estes homens são servos do Deus Altíssimo, que vos anunciam o caminho da salvação».'
      },
      AE: {
        name: 'Dono da Escrava',
        role: 'Mercador Explorador',
        clueText: 'Ao ver esfumar-se o seu negócio lucrativo, arrastou os pregadores até aos magistrados.'
      },
      CF: {
        name: 'Carcereiro de Filipos',
        role: 'Oficial Convertido',
        clueText: 'Caiu a tremer aos seus pés dizendo: «Senhores, que devo fazer para ser salvo?».'
      },
      MR: {
        name: 'Magistrado Romano',
        role: 'Pretor da Colónia',
        clueText: 'Mandou rasgar as vestes dos apóstolos e açoitá-los severamente com varas.'
      },
      GV: {
        name: 'Guarda das Varas',
        role: 'Lictor Executor',
        clueText: 'Deu os açoites públicos aos réus na praça antes de os entregar ao calabouço.'
      }
    },
    clues: {
      c1: {
        text: 'Uma jovem possuía um espírito de adivinhação que gerava muitos lucros aos seus proprietários.',
        narrative: 'A jovem escrava era usada pelo dono ganancioso para lucrar nas ruas.'
      },
      c2: {
        text: 'A jovem seguia os missionários durante dias, gritando que eram servos do Deus Altíssimo.',
        narrative: 'Os seus clamores diários atraíam as atenções sobre Paulo e Silas.'
      },
      c3: {
        text: 'O líder dos missionários cansou-se da situação e ordenou ao espírito, em nome de Jesus Cristo, que saísse dela.',
        narrative: 'Paulo pronunciou a ordem apostólica, libertando a rapariga da sua servidão espiritual.'
      },
      c4: {
        text: 'Ao ficar a jovem libertada, os seus proprietários perceberam que a sua fonte de rendimentos tinha desaparecido.',
        narrative: 'O dono da escrava verificou indignado que a escrava já não adivinhava nada.'
      },
      c5: {
        text: 'Os donos arrastaram os missionários para a praça pública, acusando-os de perturbar a ordem romana.',
        narrative: 'O magistrado romano acolheu a denúncia sem verificar a cidadania dos réus.'
      },
      c6: {
        text: 'Depois de serem açoitados com varas, os missionários foram lançados no calabouço mais escuro com os pés no tronco.',
        narrative: 'O lictor e o carcereiro de Filipos fecharam Paulo e Silas no fundo da prisão.'
      },
      c7: {
        text: 'À meia-noite, um terramoto libertou os missionários e provocou a conversão do guarda da prisão.',
        narrative: 'O carcereiro de Filipos lavou-lhes as feridas e acreditou com toda a sua casa, recebendo a salvação.'
      }
    }
  }
};
