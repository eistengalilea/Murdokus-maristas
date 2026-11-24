import { RetoTraduccion } from '../types';

/**
 * Traducciones al portugués de Portugal (pt-PT) de los retos de dificultad «hard».
 * Las claves de rooms, suspects, clues y blockedObjects deben coincidir con las del reto en castellano
 * (lo comprueba `npm run validar`).
 */
export const RETOS_DIFICILES_PT: Record<string, RetoTraduccion> = {
  // DESAFIO 004: El Olor a Campo -> O Cheiro do Campo
  '004': {
    nombre: 'O Cheiro do Campo',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Génesis 27, 1-29',
    textoBiblicoClave: 'Jacob aproximou-se do pai, Isaac, que o apalpou e disse: «A voz é de Jacob, mas as mãos são de Esaú.»',
    contextoTeologico: 'A Bíblia não moraliza o engano escondendo as fraquezas dos patriarcas. Teologicamente, sublinha que a eleição de Deus não segue as regras humanas da primogenitura ou do mérito (Fé Adulta), manifestando que a promessa divina abre caminho através da fragilidade humana.',
    solucionExplicacion: 'Rebeca e Jacob enganaram Isaac. Jacob vestiu as roupas de Esaú e pôs peles de cabrito nos braços e no pescoço para simular ser peludo. Isaac, cego, abençoou Jacob julgando que era Esaú.',
    storyIntro: 'Um patriarca cego decide dar a bênção principal ao seu primogénito. No entanto, através de um disfarce olfativo e tátil, outro membro da família usurpa o direito divino debaixo do nariz do ancião.',
    epilogue: 'Usurpação pericial revelada! O guisado apetitoso, a fragrância campestre nas roupas de festa e as peles lanosas de cabrito confundiram as mãos trémulas de Isaac. A bênção irrevogável ficou transferida para Jacob.',
    subtitle: 'Descoberta de ações ocultas · Génesis 27 · 9x9',
    badge: 'O CHEIRO DO CAMPO · 9x9',
    rooms: {
      tienda_isaac: {
        name: 'Tenda Patriarcal de Isaac',
        shortName: 'T. Isaac',
        description: 'Leito do ancião cego onde se consumou a bênção do orvalho do céu e da gordura da terra.'
      },
      cocina_rebeca: {
        name: 'Cozinha e Tenda de Rebeca',
        shortName: 'Cozinha Rebeca',
        description: 'Lugar onde a mãe preparou à pressa os dois cabritos tenros tal como Isaac gostava.'
      },
      campo_caza: {
        name: 'Montes de Caça de Esaú',
        shortName: 'Montes Caça',
        description: 'Estepe selvagem onde o caçador peludo rastreava uma peça de caça para o pai.'
      },
      redil_cabritos: {
        name: 'Redil dos Cabritos',
        shortName: 'Redil',
        description: 'Curral de onde Jacob escolheu rapidamente os dois melhores cabritos para o disfarce.'
      },
      tienda_esau: {
        name: 'Tenda das Armas de Esaú',
        shortName: 'T. Esaú',
        description: 'Divisão onde se guardavam as roupas de festa perfumadas com o aroma agreste.'
      },
      tienda_judit: {
        name: 'Tenda das Esposas Hititas',
        shortName: 'T. Judite',
        description: 'Aposentos de Judite e Basemat, causa contínua de amargura de espírito para Rebeca.'
      },
      pozo_beerseba: {
        name: 'Poço Central de Bersabé',
        shortName: 'Poço Bersabé',
        description: 'Abastecimento de água do acampamento onde se juntavam as criadas.'
      },
      majada_rebanos: {
        name: 'Curral dos Rebanhos',
        shortName: 'Curral',
        description: 'Extensão de pastagens vigiada pelos pastores de confiança do clã.'
      },
      camino_haran: {
        name: 'Caminho da Fuga para Harã',
        shortName: 'Caminho Harã',
        description: 'Rota setentrional por onde Jacob partiria para o desterro, fugindo à ira do irmão.'
      }
    },
    blockedObjects: {
      '0,2': {
        name: 'Prato de Guisado Saboroso',
        description: 'Guisado aromatizado cozinhado por Rebeca a imitar a caça do monte.'
      },
      '2,6': {
        name: 'Peles de Cabrito',
        description: 'Velo macio colocado sobre os braços e a nuca do filho mais novo.'
      },
      '4,4': {
        name: 'Manto com Fragrância Campestre',
        description: 'Veste de Esaú perfumada com o cheiro dos campos regados por Deus.'
      },
      '6,0': {
        name: 'Arco e Aljava',
        description: 'Apetrechos de caça levados pelo primogénito para o mato.'
      },
      '6,2': {
        name: 'Poço de Bersabé',
        description: 'Cisterna histórica onde os antepassados juraram aliança.'
      }
    },
    suspects: {
      I: {
        name: 'Isaac',
        role: 'Patriarca cego / Vítima da usurpação',
        clueText: 'No seu leito, na Tenda Patriarcal.'
      },
      J: {
        name: 'Jacob',
        role: 'Filho mais novo disfarçado / Usurpou a bênção',
        clueText: 'Na Tenda de Isaac, a sós com o pai, que lhe apalpa as mãos.'
      },
      R: {
        name: 'Rebeca',
        role: 'Mãe estratega que urdiu o plano',
        clueText: 'Na sua cozinha, dando as instruções definitivas.'
      },
      E: {
        name: 'Esaú',
        role: 'Primogénito peludo a caçar no monte',
        clueText: 'De volta, junto ao redil dos cabritos, depois de rastrear feras pelos montes.'
      },
      U: {
        name: 'Judite',
        role: 'Esposa hitita de Esaú',
        clueText: 'Junto ao curral dos rebanhos de Esaú.'
      },
      B: {
        name: 'Basemat',
        role: 'Segunda esposa de Esaú',
        clueText: 'À espera junto ao poço central de Bersabé.'
      },
      C: {
        name: 'Cozinheira do clã',
        role: 'Criada encarregada de atiçar o lume',
        clueText: 'No curral, carregando a água tirada do poço central.'
      },
      P: {
        name: 'Pastor de Isaac',
        role: 'Guardador dos cabritos escolhidos',
        clueText: 'Guiando o gado pelo caminho para Harã.'
      },
      K: {
        name: 'Caçador de Esaú',
        role: 'Companheiro de rastreio no campo',
        clueText: 'Na passagem para o Caminho de Harã.'
      }
    },
    clues: {
      c1: {
        text: 'O velho patriarca queria dar a bênção ao seu primogénito antes de morrer.',
        narrative: 'Isaac descansa no seu leito, na Tenda Patriarcal.'
      },
      c2: {
        text: 'A mãe ouviu o plano e interveio para favorecer o seu filho mais novo preferido.',
        narrative: 'Rebeca prepara o guisado na sua cozinha, dando instruções.'
      },
      c3: {
        text: 'O filho mais velho saiu para o campo a caçar, para preparar a refeição pedida.',
        narrative: 'Esaú percorre os montes rastreando feras.'
      },
      c4: {
        text: 'O mais novo temia ser descoberto por não ter pelos e foi coberto com peles de cabrito.',
        narrative: 'Jacob aproxima-se da cabeceira e o pai apalpa-lhe as mãos.'
      },
      c5: {
        text: 'A esposa hitita Judite não interveio nas decisões familiares do patriarca.',
        narrative: 'Judite permanece junto ao curral dos rebanhos.'
      },
      c6: {
        text: 'Basemat aguardava o regresso da partida de caça nos aposentos.',
        narrative: 'Basemat aguarda na Tenda de Esaú.'
      },
      c7: {
        text: 'A cozinheira foi ao poço central buscar cântaros de água fresca.',
        narrative: 'A cozinheira está a trazer água do Poço Central.'
      },
      c8: {
        text: 'O pastor escolheu os dois cabritos mais tenros do curral.',
        narrative: 'O pastor guia o gado pelo caminho para Harã.'
      },
      c9: {
        text: 'O companheiro de caça observou o trilho que em breve marcaria o exílio de Jacob.',
        narrative: 'O caçador vigia na passagem para o Caminho de Harã.'
      }
    }
  },

  // DESAFIO 010: El Manto y la Mentira -> O Manto e a Mentira
  '010': {
    nombre: 'O Manto e a Mentira',
    categoria: 'Assassínios ou crimes',
    citasBiblicas: 'Génesis 39, 1-20',
    textoBiblicoClave: 'Ela agarrou-o pelo manto, dizendo: «Deita-te comigo!» Mas ele, deixando-lhe o manto nas mãos, fugiu e saiu para fora.',
    contextoTeologico: 'A passagem funciona como exemplo moral de sabedoria e castidade perante a tentação. Exegeticamente, contrasta a fidelidade de José com o comportamento dos seus irmãos. Mostra um Deus que acompanha o justo mesmo no sofrimento injusto da prisão.',
    solucionExplicacion: 'A mulher de Potifar tentou seduzir José. Ao ser rejeitada e José fugir deixando o manto nas mãos dela, a mulher acusou-o falsamente de tentativa de violação usando a peça de roupa como prova, mandando-o para a prisão.',
    storyIntro: 'Um escravo sobe até administrar a casa de um alto oficial egípcio. Quando rejeita as insinuações íntimas da senhora da casa, ela usa uma peça de roupa que ele deixou para trás ao fugir para o incriminar falsamente de um crime atroz.',
    epilogue: 'Calúnia desmascarada pela perícia! O manto retido não provava violência, mas a fuga apressada de José para se manter íntegro. Embora Potifar o tenha mandado para o calabouço real, a providência divina não o abandonou.',
    subtitle: 'Assassínios ou crimes · Génesis 39 · 9x9',
    badge: 'O MANTO E A MENTIRA · 9x9',
    rooms: {
      aposento_senora: {
        name: 'Aposento Íntimo da Senhora',
        shortName: 'Ap. Senhora',
        description: 'Câmara privada onde a mulher de Potifar reteve o manto de linho e lançou o grito de alarme.'
      },
      gran_sala: {
        name: 'Grande Sala de Potifar',
        shortName: 'Sala Potifar',
        description: 'Salão de audiências do capitão da guarda onde se decretou a prisão imediata.'
      },
      patio_criados: {
        name: 'Pátio Interior dos Criados',
        shortName: 'Pátio Criados',
        description: 'Pátio com colunas de lótus onde a dona da casa convocou os servos agitando o manto.'
      },
      puerta_escape: {
        name: 'Pórtico Exterior de Fuga',
        shortName: 'Pórtico',
        description: 'Saída para a rua por onde José fugiu espavorido, deixando para trás a túnica.'
      },
      carcel_real: {
        name: 'Prisão Real dos Presos do Rei',
        shortName: 'Prisão Real',
        description: 'Fortaleza subterrânea onde estavam encarcerados os infratores da corte do faraó.'
      },
      despacho_jose: {
        name: 'Gabinete Administrativo de José',
        shortName: 'Gabinete',
        description: 'Escritório com papiros e balanças de onde José governava com êxito toda a propriedade.'
      },
      almacen_granos: {
        name: 'Silos e Armazéns Domésticos',
        shortName: 'Armazéns',
        description: 'Celeiros que prosperaram sob a bênção que o Senhor concedia por causa de José.'
      },
      aposento_carcelero: {
        name: 'Câmara do Diretor da Prisão',
        shortName: 'Diretor',
        description: 'Gabinete do chefe do calabouço que em breve poria todos os reclusos ao cuidado de José.'
      },
      muralla_egipcia: {
        name: 'Muralhas da Fortaleza',
        shortName: 'Muralhas',
        description: 'Ameias vigiadas por guardas que protegem o perímetro da cidadela.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Manto de Linho Abandonado',
        description: 'Veste exterior de José brandida como falsa prova de ultraje.'
      },
      '2,2': {
        name: 'Selo de Ouro de Potifar',
        description: 'Anel distintivo do capitão da guarda com autoridade para prender.'
      },
      '4,6': {
        name: 'Molho de Chaves da Prisão',
        description: 'Chaves de ferro forjado guardadas pelo diretor da prisão.'
      },
      '6,1': {
        name: 'Estátua de Anúbis',
        description: 'Ídolo ornamental nos nichos do palácio do governo.'
      },
      '8,7': {
        name: 'Grilhetas do Calabouço',
        description: 'Correntes dos presos do rei nas celas inferiores.'
      }
    },
    suspects: {
      J: {
        name: 'José',
        role: 'Administrador hebreu / Inocente caluniado',
        clueText: 'No Aposento Íntimo, fugindo da coação.'
      },
      E: {
        name: 'Mulher de Potifar',
        role: 'Senhora acusadora / Reteve o manto e mentiu',
        clueText: 'No Aposento Íntimo, a sós com José, antes de levantar a voz.'
      },
      P: {
        name: 'Potifar',
        role: 'Capitão da guarda do Faraó',
        clueText: 'Na Grande Sala, enfurecido com o relato da mulher.'
      },
      C: {
        name: 'O carcereiro',
        role: 'Diretor da prisão real',
        clueText: 'A rever as rações nos silos antes de preparar a cela.'
      },
      K: {
        name: 'Jacob em memória',
        role: 'Pai distante na terra de Canaã',
        clueText: 'Evocado nas muralhas fronteiriças da distância.'
      },
      O: {
        name: 'O copeiro real',
        role: 'Oficial do Faraó preso na torre',
        clueText: 'Na Prisão Real, à espera de julgamento.'
      },
      A: {
        name: 'O padeiro real',
        role: 'Padeiro da corte encarcerado',
        clueText: 'Na cela comum da Prisão Real.'
      },
      M: {
        name: 'Mordomo egípcio',
        role: 'Servo da casa, testemunha do grito',
        clueText: 'A supervisionar as muralhas da fortaleza por ordem do seu amo.'
      },
      G: {
        name: 'Guarda da fuga',
        role: 'Sentinela colocada no pórtico exterior',
        clueText: 'A patrulhar as muralhas da fortaleza para impedir qualquer fuga.'
      }
    },
    clues: {
      c1: {
        text: 'Um jovem hebreu administrava a casa e gozava da confiança total do seu amo.',
        narrative: 'José encontrava-se no Aposento Íntimo, fugindo da coação.'
      },
      c2: {
        text: 'A mulher do amo encheu-se de desejo pelo jovem e insistiu repetidamente com ele para pecar.',
        narrative: 'A mulher retém a peça de roupa depois de ficar a sós no aposento.'
      },
      c3: {
        text: 'O capitão da guarda deu total crédito ao testemunho tendencioso da mulher.',
        narrative: 'Potifar clama justiça, enfurecido, na Grande Sala.'
      },
      c4: {
        text: 'O diretor da fortaleza prisional recebeu a ordem de guardar o réu.',
        narrative: 'O carcereiro revê as rações nos silos antes de preparar a cela.'
      },
      c5: {
        text: 'A memória de Jacob e a fé no Deus de seus pais inspiraram a fidelidade de José.',
        narrative: 'A lembrança paterna ergue-se evocada nas muralhas fronteiriças.'
      },
      c6: {
        text: 'O copeiro-mor do Faraó já se encontrava detido nos calabouços reais.',
        narrative: 'O copeiro está encarcerado na Prisão Real, à espera de julgamento.'
      },
      c7: {
        text: 'O padeiro-mor partilhava a prisão nas masmorras contíguas.',
        narrative: 'O padeiro ocupa a cela comum da prisão.'
      },
      c8: {
        text: 'Os criados da casa acorreram ao pátio depois dos gritos fingidos da senhora.',
        narrative: 'O mordomo da casa supervisiona as muralhas da fortaleza.'
      },
      c9: {
        text: 'O guarda do pórtico viu passar velozmente o administrador sem o seu manto.',
        narrative: 'A sentinela patrulha as muralhas da fortaleza.'
      }
    }
  },

  // DESAFIO 010-C: El Niño Oculto en el Templo -> O Menino Escondido no Templo
  '010-C': {
    nombre: 'O Menino Escondido no Templo',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: '2 Reis 11, 1-16',
    textoBiblicoClave: 'Josebá raptou Joás, filho de Ocozias, do meio dos filhos do rei que estavam a ser assassinados, e escondeu-o de Atalia.',
    contextoTeologico: 'Relata a preservação providencial da linhagem davídica. Destaca a resistência das instituições religiosas (o Templo) contra os abusos tirânicos. A aliança entre clero e militares restaura a ordem prometida por Deus.',
    solucionExplicacion: 'A rainha Atalia tentou exterminar a casa de David, mas Josebá escondeu o bebé Joás no Templo. Depois de seis anos escondido, o sacerdote Joiada organizou um golpe, coroou o menino e mandou executar a usurpadora.',
    storyIntro: 'Uma rainha estrangeira massacra os próprios netos para se agarrar ao poder absoluto. No entanto, um ato de coragem esconde o último herdeiro no lugar mais sagrado, preparando uma revolução seis anos depois.',
    epilogue: 'A dinastia legítima restaurada diante do povo de Deus! O menino Joás, de sete anos, foi coroado junto à coluna real entre o clamor das trombetas e os aplausos de Judá. Atalia rasgou as vestes gritando «Traição, traição!», mas foi levada para fora do santuário pela porta dos cavalos para cumprir a sentença da justiça divina.',
    subtitle: 'Descoberta de ações ocultas · 2 Reis 11 · 9x9',
    badge: 'O MENINO ESCONDIDO NO TEMPLO · 9x9',
    rooms: {
      atrio_templo: {
        name: 'Átrio Principal e Coluna Real',
        shortName: 'Átrio Templo',
        description: 'Lugar solene onde o jovem Joás foi ungido e coroado com o diadema e o livro do Testemunho.'
      },
      aposento_dormitorios: {
        name: 'Câmara Secreta dos Leitos',
        shortName: 'Câmara Leitos',
        description: 'Quarto recôndito dos sacerdotes onde o menino e a sua ama viveram escondidos durante seis anos.'
      },
      palacio_atalia: {
        name: 'Palácio Real Usurpado de Atalia',
        shortName: 'Palácio Atalia',
        description: 'Sede do governo tirânico de onde a rainha ouviu o estrondo da multidão a aclamar o rei.'
      },
      puerta_sur: {
        name: 'Porta dos Cavalos e Desfiladeiro',
        shortName: 'Porta Cavalos',
        description: 'Acesso por onde os capitães levaram a usurpadora para não manchar de sangue o recinto sagrado.'
      },
      santuario_interior: {
        name: 'Arsenal Consagrado do Templo',
        shortName: 'Arsenal Templo',
        description: 'Depósito onde se guardavam as lanças e os escudos do rei David entregues aos centuriões levitas.'
      }
    },
    blockedObjects: {
      '0,0': {
        name: 'Coroa Real de Judá',
        description: 'Diadema dourado posto na fronte do menino de sete anos pelo sumo sacerdote.'
      },
      '2,2': {
        name: 'Escudos e Lanças de David',
        description: 'Armamento consagrado retirado do santuário para equipar os guardas ao sábado.'
      },
      '4,8': {
        name: 'Coluna Solene da Coroação',
        description: 'Pilar do templo junto ao qual o rei comparecia tradicionalmente nas cerimónias públicas.'
      },
      '6,5': {
        name: 'Vestes Reais Rasgadas de Atalia',
        description: 'Roupas de púrpura que a usurpadora rasgou com raiva ao ver-se cercada.'
      },
      '8,1': {
        name: 'Trombetas de Prata do Povo',
        description: 'Instrumentos sagrados que fizeram vibrar as muralhas proclamando: «Viva o Rei!».'
      }
    },
    suspects: {
      A: {
        name: 'Rainha Atalia',
        role: 'Usurpadora Tirânica',
        clueText: 'Procurou aniquilar toda a descendência real para reinar sobre Judá a ferro e fogo.'
      },
      J: {
        name: 'Joás',
        role: 'Menino Herdeiro de David',
        clueText: 'Sobrevivente milagroso protegido em segredo dentro da casa do Senhor.'
      },
      S: {
        name: 'Princesa Josebá',
        role: 'Tia Protetora e Heroica',
        clueText: 'Arriscou a própria vida para arrebatar o bebé do meio dos príncipes assassinados.'
      },
      P: {
        name: 'Sumo Sacerdote Joiada',
        role: 'Estratego do Templo',
        clueText: 'Organizou os capitães de cem e selou o juramento de lealdade num dia de repouso.'
      },
      C: {
        name: 'Capitão Cário',
        role: 'Chefe da Guarda Real',
        clueText: 'Colocou os seus soldados armados à volta do altar para proteger o pequeno ungido.'
      },
      N: {
        name: 'Ama Fiel',
        role: 'Cuidadora de Joás',
        clueText: 'Amamentou e cuidou do rei legítimo na penumbra do aposento sacerdotal.'
      },
      L: {
        name: 'Levita do Limiar',
        role: 'Sentinela do Santuário',
        clueText: 'Guardou o portão, impedindo que os espiões de Atalia descobrissem o esconderijo.'
      },
      Z: {
        name: 'Sacerdote do Altar',
        role: 'Oficiante do Sacrifício',
        clueText: 'Manteve aceso o fogo do holocausto durante o pacto secreto da restauração.'
      },
      H: {
        name: 'Arauto de Judá',
        role: 'Trombeteiro-Mor',
        clueText: 'Tocou o shofar que anunciou a toda a Jerusalém que a linhagem de David continuava viva.'
      }
    },
    clues: {
      c1: {
        text: 'A rainha-mãe ordenou o massacre sistemático de todos os descendentes reais depois da morte do filho.',
        narrative: 'Atalia governava com tirania, julgando ter exterminado a estirpe davídica.'
      },
      c2: {
        text: 'Uma tia corajosa (irmã do falecido rei) raptou o bebé recém-nascido do meio das crianças condenadas.',
        narrative: 'Josebá arriscou a vida tirando o pequeno Joás do palácio real.'
      },
      c3: {
        text: 'O herdeiro e a sua ama permaneceram escondidos durante seis anos inteiros num quarto secreto do Templo do Senhor.',
        narrative: 'A Ama Fiel cuidou do menino na câmara dos leitos sem sair para a luz.'
      },
      c4: {
        text: 'No sétimo ano, o sumo sacerdote fez um pacto secreto com os centuriões da guarda e introduziu-os no santuário.',
        narrative: 'Joiada reuniu os capitães cários sob juramento estrito.'
      },
      c5: {
        text: 'O sacerdote entregou aos capitães as lanças e os escudos sagrados que tinham pertencido ao rei David.',
        narrative: 'As armas do arsenal consagrado foram distribuídas pelos levitas leais.'
      },
      c6: {
        text: 'Colocaram o menino junto à coluna, cingiram-lhe o diadema real, entregaram-lhe a Lei e ungiram-no rei entre aclamações.',
        narrative: 'Joás foi ungido diante do altar, com os sacerdotes a guardar o perímetro sagrado.'
      },
      c7: {
        text: 'A usurpadora ouviu o estrondo, acorreu ao Templo gritando «Traição!» e foi capturada e executada fora do recinto sagrado.',
        narrative: 'O arauto fez ressoar as trombetas e os soldados prenderam Atalia junto à porta dos cavalos.'
      }
    }
  },

  // DESAFIO 004-NT: La Señal del Huerto -> O Sinal do Jardim
  '004-NT': {
    nombre: 'O Sinal do Jardim',
    categoria: 'Descoberta de ações ocultas',
    citasBiblicas: 'Mateus 26, 47-56',
    textoBiblicoClave: 'O traidor tinha-lhes dado este sinal: «Aquele a quem eu der um beijo, é esse; prendei-o.» Logo se aproximou de Jesus e lhe disse: «Salve, Mestre!», e beijou-o.',
    contextoTeologico: 'Mostra o profundo contraste entre a violência institucional, a traição interesseira e a resposta pacífica de Jesus. O Magistério destaca que a submissão voluntária de Cristo desfaz a lógica da força humana (a espada de Pedro) para instaurar um reino espiritual.',
    solucionExplicacion: 'Judas combinou com os sacerdotes entregar Jesus usando um beijo como sinal. Ao consumar a traição no jardim do Getsémani, Pedro tentou defender Jesus cortando a orelha a Malco, mas Jesus curou o servo e aceitou a prisão pacificamente.',
    storyIntro: 'Uma força armada entra sorrateiramente num olival em plena noite. Para não se enganarem de alvo na escuridão, usam um pacto secreto baseado no mais íntimo dos gestos de afeto.',
    epilogue: '«Mete a tua espada no seu lugar, pois quem com ferro mata com ferro morre»! Jesus curou a orelha de Malco e entregou-se livremente para que se cumprissem as Escrituras, enquanto os discípulos fugiam espavoridos entre os olivais.',
    subtitle: 'Descoberta de ações ocultas · Mateus 26 · 9x9',
    badge: 'O SINAL DO JARDIM · 9x9',
    rooms: {
      huerto_olivos: {
        name: 'Jardim do Getsémani e Lagar de Azeite',
        shortName: 'Jardim Getsémani',
        description: 'Olivais centenários ao pé da torrente do Cédron onde Jesus orou na sua agonia noturna.'
      },
      lugar_oracion: {
        name: 'Rocha da Agonia do Mestre',
        shortName: 'Rocha Agonia',
        description: 'Penedo solitário, à distância de um tiro de pedra, onde caiu com o rosto por terra, com suor como gotas de sangue.'
      },
      camino_antorchas: {
        name: 'Trilho das Tochas e dos Varapaus',
        shortName: 'Trilho Tochas',
        description: 'Rota noturna por onde avançou a tropa enviada pelos príncipes dos sacerdotes.'
      },
      palacio_caifas: {
        name: 'Tribunal e Palácio de Caifás',
        shortName: 'Palácio Caifás',
        description: 'Sede do sumo sacerdócio onde se entregaram as trinta moedas e se preparou o julgamento noturno.'
      },
      remanso_cedron: {
        name: 'Vau e Ponte da Torrente do Cédron',
        shortName: 'Vau Cédron',
        description: 'Passagem de água sombria entre as muralhas de Jerusalém e as encostas do monte das Oliveiras.'
      }
    },
    blockedObjects: {
      '0,2': {
        name: 'Trinta Moedas de Prata',
        description: 'Preço de um escravo combinado no Sinédrio para entregar Jesus de noite.'
      },
      '2,7': {
        name: 'Cálice Amargo da Agonia',
        description: 'Símbolo da vontade do Pai aceite por Cristo no Getsémani.'
      },
      '4,1': {
        name: 'Tochas e Lanternas do Assalto',
        description: 'Luzes com que a soldadesca penetrou na espessura dos olivais.'
      },
      '6,3': {
        name: 'Espada Desembainhada de Pedro',
        description: 'Arma curta com que o apóstolo cortou a orelha direita do servo Malco.'
      },
      '8,8': {
        name: 'Orelha Curada pelo Toque Divino',
        description: 'Último milagre de misericórdia realizado por Jesus antes de estender as mãos às cordas.'
      }
    },
    suspects: {
      J: {
        name: 'Jesus',
        role: 'O Mestre Preso',
        clueText: 'Disse ao traidor: «Amigo, a que vens? Com um beijo entregas o Filho do Homem?».'
      },
      JI: {
        name: 'Judas Iscariotes',
        role: 'O Apóstolo Traidor',
        clueText: 'Combinou o sinal: «Aquele que eu beijar, é esse; prendei-o com segurança».'
      },
      CF: {
        name: 'Caifás',
        role: 'Sumo Sacerdote',
        clueText: 'Aguardava no trilho das tochas que a coorte trouxesse o prisioneiro amarrado, sem alvoroço popular.'
      },
      P: {
        name: 'Pedro',
        role: 'Discípulo Defensor',
        clueText: 'Desembainhou a espada e feriu Malco antes de receber a repreensão de Jesus.'
      },
      M: {
        name: 'Malco',
        role: 'Servo do Sumo Sacerdote',
        clueText: 'Sofreu a mutilação da orelha direita e foi restaurado no mesmo instante pelo toque do Senhor.'
      },
      GT: {
        name: 'Guarda do Templo',
        role: 'Oficial Armado',
        clueText: 'Deitou a mão a Jesus e amarrou-o com cordas depois do sinal do beijo de Judas.'
      },
      JN: {
        name: 'João Apóstolo',
        role: 'Discípulo Amado',
        clueText: 'Acompanhou Jesus naquela noite e fugiu com os outros quando ele foi cercado.'
      },
      ST: {
        name: 'Tiago Apóstolo',
        role: 'Filho do Trovão',
        clueText: 'Acordado do sono por três vezes durante a dolorosa agonia do Getsémani.'
      },
      OF: {
        name: 'Oficial do Sinédrio',
        role: 'Escriba Delegado',
        clueText: 'Supervisionou que a prisão se fizesse a coberto das sombras da noite.'
      }
    },
    clues: {
      c1: {
        text: 'As autoridades religiosas procuravam prender o Mestre de noite para evitar um motim do povo.',
        narrative: 'Caifás e o oficial do Sinédrio planearam a captura na penumbra.'
      },
      c2: {
        text: 'Um dos doze íntimos do Mestre foi ter com os sumos sacerdotes, oferecendo-se para o entregar a troco de dinheiro.',
        narrative: 'Judas Iscariotes selou a traição recebendo as trinta moedas de prata.'
      },
      c3: {
        text: 'O traidor combinou um sinal: beijaria o Mestre para que os guardas soubessem quem prender na escuridão.',
        narrative: 'O sinal perverso foi comunicado à guarda do templo e a Malco.'
      },
      c4: {
        text: 'No jardim, o traidor aproximou-se do Mestre, saudou-o e deu-lhe o beijo combinado.',
        narrative: 'Judas adiantou-se à tropa dizendo «Salve, Rabi!» na presença de João e Tiago.'
      },
      c5: {
        text: 'Quando o Mestre foi preso, o discípulo mais impulsivo puxou de uma espada e tentou defendê-lo.',
        narrative: 'Pedro reagiu com violência ao ver os guardas deitarem as mãos a Jesus.'
      },
      c6: {
        text: 'A espada cortou a orelha direita do servo do sumo sacerdote no meio da confusão.',
        narrative: 'O golpe de Pedro atingiu em cheio o servo Malco junto às oliveiras.'
      },
      c7: {
        text: 'O Mestre travou a violência curando o servo e entregou-se voluntariamente aos guardas.',
        narrative: 'Jesus tocou a orelha de Malco, devolvendo-lha sã, e foi amarrado pela comitiva.'
      }
    }
  },

  // DESAFIO 007-NT: El Llanto de Ramá -> O Pranto de Ramá
  '007-NT': {
    nombre: 'O Pranto de Ramá',
    categoria: 'Assassínios ou crimes',
    citasBiblicas: 'Mateus 2, 13-18',
    textoBiblicoClave: 'Ao ver-se enganado pelos magos, Herodes enfureceu-se terrivelmente e mandou matar todos os meninos de Belém e de toda a sua região, de dois anos para baixo...',
    contextoTeologico: 'Este episódio sangrento enquadra a vida de Jesus na dura realidade política da época. O Vaticano ligou historicamente a fuga para o Egito ao drama contemporâneo dos refugiados, mostrando um Deus solidário com as vítimas do terrorismo de Estado.',
    solucionExplicacion: 'Herodes, o Grande, temendo perder o trono com o nascimento de Jesus, mandou matar todos os meninos com menos de dois anos em Belém. São José, avisado em sonhos, conseguiu salvar o menino Jesus e Maria fugindo como refugiados para o Egito.',
    storyIntro: 'O anúncio do nascimento de um rei não traz paz, mas o terror do Estado. A obsessão política de se agarrar ao poder desencadeia um massacre de inocentes, do qual só uma família escapa graças a um sussurro em sonhos.',
    epilogue: '«Ouviu-se uma voz em Ramá, pranto e grande lamento; Raquel chora os seus filhos»! O tirano pereceu consumido pelos seus crimes, enquanto a Sagrada Família encontrava amparo como refugiada nas terras do Nilo até ser seguro regressar.',
    subtitle: 'Assassínios ou crimes · Mateus 2 · 9x9',
    badge: 'O PRANTO DE RAMÁ · 9x9',
    rooms: {
      palacio_herodes: {
        name: 'Fortaleza e Palácio de Herodes em Jerusalém',
        shortName: 'Palácio Herodes',
        description: 'Sede régia onde o rei envelhecido interrogou com falsidade os sábios sobre a estrela nascente.'
      },
      portal_belen: {
        name: 'Casa e Presépio de Belém de Judá',
        shortName: 'Casa Belém',
        description: 'Lar onde os sábios do oriente encontraram o Menino com Maria, sua mãe, e lhe ofereceram ouro, incenso e mirra.'
      },
      ruta_egipto: {
        name: 'Deserto do Sinai e Rota da Fuga para o Egito',
        shortName: 'Rota Egito',
        description: 'Caminho noturno por onde José guiou o burro levando a mãe e o menino para o refúgio seguro.'
      },
      calles_belen: {
        name: 'Região e Ruas de Belém Devastadas',
        shortName: 'Ruas Belém',
        description: 'Aldeias da Judeia onde a soldadesca real executou a ordem implacável contra as crianças.'
      },
      oasis_oriente: {
        name: 'Rota de Regresso dos Sábios por Outro Caminho',
        shortName: 'Rota Sábios',
        description: 'Trilho afastado que os magos tomaram, guiados pelo aviso divino, para não voltarem a Jerusalém.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Decreto Sanguinário de Herodes',
        description: 'Ordem assinada que mandava degolar todos os meninos com menos de dois anos em Belém.'
      },
      '2,5': {
        name: 'Cofres de Ouro, Incenso e Mirra',
        description: 'Dons sagrados oferecidos ao Messias rei pelos sábios astrónomos do oriente.'
      },
      '4,1': {
        name: 'Espada da Guarda da Judeia',
        description: 'Aço mercenário usado para devastar as aldeias da região.'
      },
      '6,5': {
        name: 'Albarda do Burro de São José',
        description: 'Montada humilde com que a família atravessou a fronteira no silêncio da noite.'
      },
      '8,8': {
        name: 'Estrela-Guia do Oriente',
        description: 'Astro celeste que conduziu os magos até ao lugar exato do nascimento.'
      }
    },
    suspects: {
      HG: {
        name: 'Herodes, o Grande',
        role: 'Monarca Tirânico',
        clueText: 'Calculou com fúria a data da estrela e decretou o infanticídio para não perder a coroa.'
      },
      JN: {
        name: 'Jesus Menino',
        role: 'O Rei Recém-Nascido',
        clueText: 'Alvo da perseguição do império, salvo graças à revelação angélica.'
      },
      M: {
        name: 'Maria',
        role: 'Mãe Protetora',
        clueText: 'Apertou o filho ao colo durante a travessia apressada para o Egito.'
      },
      J: {
        name: 'José',
        role: 'Pai Guardião',
        clueText: 'Acordou de noite depois de ouvir o anjo em sonhos, tomou o menino e a mãe e fugiu de imediato.'
      },
      S1: {
        name: 'Primeiro Sábio',
        role: 'Mago Portador de Ouro',
        clueText: 'Ofereceu o ouro régio ao recém-nascido e foi avisado em sonhos para não voltar a Herodes.'
      },
      S2: {
        name: 'Segundo Sábio',
        role: 'Mago Portador de Incenso',
        clueText: 'Reconheceu a divindade do menino e regressou à sua pátria por uma rota secreta.'
      },
      S3: {
        name: 'Terceiro Sábio',
        role: 'Mago Portador de Mirra',
        clueText: 'Entregou a mirra profética e iludiu a vigilância dos espiões de Jerusalém.'
      },
      CP: {
        name: 'Capitão de Belém',
        role: 'Oficial Executor',
        clueText: 'Comandou a incursão armada nas casas de Belém, cumprindo a ordem do rei.'
      },
      MB: {
        name: 'Mãe de Belém',
        role: 'Raquel que Chora',
        clueText: 'Chorou inconsolável a perda do seu pequeno inocente, sem querer ser consolada.'
      }
    },
    clues: {
      c1: {
        text: 'Um monarca paranoico pediu a uns viajantes estrangeiros que o informassem sobre a localização exata de um novo rei menino.',
        narrative: 'Herodes convocou os sábios do oriente em segredo, com dissimulação pérfida.'
      },
      c2: {
        text: 'Os viajantes encontraram o menino, mas foram avisados em sonhos para não voltarem ao palácio.',
        narrative: 'Os três magos adoraram o menino e regressaram por outro caminho.'
      },
      c3: {
        text: 'O monarca, ao ver-se enganado pelos viajantes, enfureceu-se e calculou a idade do menino segundo os dados que tinha.',
        narrative: 'Herodes ordenou o massacre, furioso ao ver que os sábios não regressavam.'
      },
      c4: {
        text: 'O pai do menino recebeu um aviso angélico em sonhos e fugiu de noite com a família para um país vizinho.',
        narrative: 'José agiu de imediato, protegendo Maria e o menino na escuridão.'
      },
      c5: {
        text: 'O monarca mandou executar todos os meninos com menos de dois anos numa cidade e nos seus arredores.',
        narrative: 'O capitão da guarda e os seus soldados devastaram as casas de Belém.'
      },
      c6: {
        text: 'A família refugiada só regressou à sua terra quando recebeu a notícia da morte do monarca culpado.',
        narrative: 'José e Maria permaneceram no Egito até ao aviso do fim do tirano.'
      },
      c7: {
        text: 'O pranto das mães da cidade cumpriu uma antiga e dolorosa profecia de dor irreparável.',
        narrative: 'O clamor dilacerante das mães de Belém ressoou por toda a Judeia.'
      }
    }
  },

  // DESAFIO 006-HCH: El Motín de los Plateros -> O Motim dos Ourives
  '006-HCH': {
    nombre: 'O Motim dos Ourives',
    categoria: 'Conspiração ou traição',
    citasBiblicas: 'Atos 19, 23-41',
    textoBiblicoClave: 'Demétrio reuniu os oficiais e operários deste ramo e disse: «Companheiros, sabeis que é deste ofício que tiramos o nosso ganho...»',
    contextoTeologico: 'O choque entre o Evangelho e a idolatria lucrativa em Éfeso. A teologia dos Atos sublinha como os interesses económicos manipulam a religião para preservar privilégios. A intervenção do chanceler civil expõe a irracionalidade do tumulto.',
    solucionExplicacion: 'Demétrio, o ourives, ao ver que a pregação de Paulo reduzia a venda de estatuetas de prata da deusa Diana (Ártemis), instigou uma revolta maciça da corporação. A multidão sequestrou Gaio e Aristarco e encheu o grande teatro durante duas horas, gritando palavras de ordem.',
    storyIntro: 'Uma grande cidade comercial torna-se um barril de pólvora quando a corporação dos artesãos da prata convoca uma greve tumultuosa que enche o anfiteatro romano. Dois colaboradores estrangeiros são arrastados violentamente enquanto a turba grita palavras de ordem sem saber porque está ali.',
    epilogue: '«Grande é a Ártemis dos efésios»! Durante duas horas a multidão rugiu inflamada no anfiteatro, até que a prudente eloquência do chanceler apaziguou a assembleia, avisando-a do risco de ser acusada de sedição por Roma.',
    subtitle: 'Conspiração ou traição · Atos 19 · 9x9',
    badge: 'O MOTIM DOS OURIVES · 9x9',
    rooms: {
      taller_plateros: {
        name: 'Corporação e Fundição dos Ourives',
        shortName: 'Oficina Ourives',
        description: 'Fundição onde Demétrio arengou aos oficiais perante a quebra na venda de templos de prata.'
      },
      teatro_efeso: {
        name: 'Grande Anfiteatro Romano de Éfeso',
        shortName: 'Grande Anfiteatro',
        description: 'Coliseu apinhado com vinte e cinco mil pessoas a vociferar em confusão.'
      },
      templo_diana: {
        name: 'Santuário Monumental de Ártemis',
        shortName: 'Templo Ártemis',
        description: 'Uma das sete maravilhas do mundo antigo, sede do culto à imagem caída do céu.'
      },
      residencia_asiarcas: {
        name: 'Palacete dos Magistrados Asiarcas',
        shortName: 'Palácio Asiarcas',
        description: 'Aposento onde as autoridades provinciais amigas de Paulo lhe suplicaram que não se expusesse no teatro.'
      },
      estrado_canciller: {
        name: 'Tribuna Cívica do Escrivão-Mor',
        shortName: 'Tribuna Chanceler',
        description: 'Púlpito municipal de onde se leu o édito legal que dispersou o motim.'
      },
      calle_macedonios: {
        name: 'Via Comercial dos Macedónios',
        shortName: 'Via Comercial',
        description: 'Calçada empedrada onde Gaio e Aristarco foram apanhados pela turba desenfreada.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Nicho Votivo de Prata',
        description: 'Santuário em miniatura de Diana fabricado em massa para os devotos forasteiros.'
      },
      '2,7': {
        name: 'Estátua Caída de Júpiter',
        description: 'Relíquia sagrada da deusa de múltiplos seios venerada em Éfeso.'
      },
      '4,4': {
        name: 'Convocatória Tumultuosa',
        description: 'Gritos inflamados de uma multidão que desconhecia a origem real da concentração.'
      },
      '7,6': {
        name: 'Rolo do Proconsulado da Ásia',
        description: 'Norma romana contra assembleias ilegais brandida pelo chanceler para dissolver a turba.'
      }
    },
    suspects: {
      P: {
        name: 'Paulo',
        role: 'Apóstolo Provocador',
        clueText: 'Pregava com insistência que não são deuses os que são feitos por mãos humanas.'
      },
      DE: {
        name: 'Demétrio, o Ourives',
        role: 'Líder Corporativo Conspirador',
        clueText: 'Arengou aos artesãos, avisando-os de que a sua prosperidade económica corria perigo mortal.'
      },
      GA: {
        name: 'Gaio da Macedónia',
        role: 'Colaborador Sequestrado',
        clueText: 'Companheiro de viagem de Paulo, foi agarrado pela multidão e arrastado para as bancadas.'
      },
      AR: {
        name: 'Aristarco de Tessalónica',
        role: 'Prisioneiro do Motim',
        clueText: 'Levado à força com Gaio até à arena central do teatro.'
      },
      CA: {
        name: 'Chanceler da Cidade',
        role: 'Escrivão-Mor Legal',
        clueText: 'Conseguiu acalmar a multidão lembrando que os tribunais proconsulares estavam abertos.'
      },
      SD: {
        name: 'Sacerdotisa de Diana',
        role: 'Guardiã do Artemísio',
        clueText: 'Defendia o prestígio do templo universal ameaçado pela heresia cristã.'
      },
      AL: {
        name: 'Alexandre, o Judeu',
        role: 'Porta-voz Rejeitado',
        clueText: 'Tentou falar fazendo sinais com a mão, mas a multidão calou-o ao saber que era judeu.'
      },
      AS: {
        name: 'Asiarca Protetor',
        role: 'Magistrado Provincial',
        clueText: 'Amigo de Paulo que lhe enviou emissários urgentes a pedir-lhe que não pusesse os pés no anfiteatro.'
      },
      AE: {
        name: 'Artesão Enfurecido',
        role: 'Operário da Fundição',
        clueText: 'Repetia mecanicamente o grito «Grande é Ártemis!» sem sequer saber porque protestavam.'
      }
    },
    clues: {
      c1: {
        text: 'Um fabricante de imagens religiosas convocou uma reunião da corporação, alertando para perdas no seu negócio.',
        narrative: 'Demétrio encabeçou o protesto dos ourives perante a diminuição de compradores.'
      },
      c2: {
        text: 'O líder da corporação acusou um missionário de convencer as pessoas de que os ídolos de prata não são deuses.',
        narrative: 'As palavras de Paulo minavam o próspero mercado de amuletos religiosos.'
      },
      c3: {
        text: 'A multidão enfurecida agarrou dois companheiros estrangeiros do missionário e arrastou-os para o teatro.',
        narrative: 'Gaio e Aristarco sofreram a violência da turba em plena rua comercial.'
      },
      c4: {
        text: 'O missionário principal quis apresentar-se à multidão no teatro, mas os seus discípulos e magistrados amigos impediram-no.',
        narrative: 'O asiarca protetor enviou uma mensagem terminante a Paulo para salvaguardar a sua integridade.'
      },
      c5: {
        text: 'Durante mais de duas horas, milhares de pessoas gritaram sem parar a mesma frase religiosa nas bancadas.',
        narrative: 'A sacerdotisa e o artesão entoavam o lema ensurdecedor em honra da deusa.'
      },
      c6: {
        text: 'Um homem tentou defender a sua comunidade com sinais, mas a multidão calou-o violentamente ao perceber a sua origem.',
        narrative: 'Alexandre foi vaiado de imediato, sem conseguir articular a sua defesa.'
      },
      c7: {
        text: 'O magistrado da cidade interveio, avisando do perigo de serem acusados de sedição pelo império romano, e dissolveu a assembleia.',
        narrative: 'O chanceler restituiu o bom senso legal e desmobilizou o violento motim de Demétrio.'
      }
    }
  },

  // DESAFIO 010-HCH: El Voto Secreto de Muerte -> O Voto Secreto de Morte
  '010-HCH': {
    nombre: 'O Voto Secreto de Morte',
    categoria: 'Conspiração ou traição',
    citasBiblicas: 'Atos 23, 12-24',
    textoBiblicoClave: 'Mais de quarenta deles tramaram uma conspiração e comprometeram-se sob anátema a não comer nem beber enquanto não tivessem matado Paulo...',
    contextoTeologico: 'Mostra a providência de Deus protegendo o seu enviado através de meios comuns e insólitos: um rapaz e o exército romano. A Fé Adulta realça que o fanatismo religioso cego fica exposto perante a legalidade secular.',
    solucionExplicacion: 'Mais de quarenta fanáticos juraram não comer nem beber até assassinarem Paulo numa emboscada com a ajuda das autoridades. O sobrinho de Paulo descobriu o plano e avisou o tribuno Cláudio Lísias, que organizou uma escolta armada de quase 500 homens para o pôr a salvo em Cesareia.',
    storyIntro: 'Mais de quarenta extremistas juram um jejum mortal solene até executarem um prisioneiro sob custódia militar. Conspiram com as autoridades religiosas para montar uma armadilha no caminho, mas um rapaz ouve a conversa e muda tudo.',
    epilogue: '«Duas companhias de infantaria, setenta cavaleiros e duzentos lanceiros»! A coberto da terceira hora da noite, o tribuno Cláudio Lísias levou Paulo a galope para a corte do governador Félix em Cesareia, frustrando o juramento fanático.',
    subtitle: 'Conspiração ou traição · Atos 23 · 9x9',
    badge: 'O VOTO SECRETO DE MORTE · 9x9',
    rooms: {
      torre_antonia: {
        name: 'Fortaleza Antónia e Quartel do Tribuno',
        shortName: 'Torre Antónia',
        description: 'Quartel-general onde o prisioneiro Paulo permanecia sob guarda pretoriana.'
      },
      cripta_conjurados: {
        name: 'Cripta Secreta do Juramento Fanático',
        shortName: 'Cripta Conjurados',
        description: 'Gruta escondida onde os quarenta fanáticos pronunciaram o anátema de jejum até à morte.'
      },
      camara_sacerdotal: {
        name: 'Câmara de Audiências do Sinédrio',
        shortName: 'Câmara Sinédrio',
        description: 'Aposento onde os chefes religiosos combinaram com os sicários simular um pedido judicial.'
      },
      despacho_tribuno: {
        name: 'Gabinete de Comando de Cláudio Lísias',
        shortName: 'Gabinete Tribuno',
        description: 'Escritório reservado onde o tribuno tomou pela mão o jovem sobrinho para ouvir a denúncia.'
      },
      via_antipatride: {
        name: 'Estrada Militar para Antipátride e Cesareia',
        shortName: 'Estrada Cesareia',
        description: 'Rota noturna blindada por onde cavaleiros e lanceiros escoltaram o apóstolo até à costa.'
      },
      esquina_emboscada: {
        name: 'Esquina da Muralha para a Emboscada',
        shortName: 'Esquina Emboscada',
        description: 'Passagem estreita onde os conjurados planeavam degolar Paulo antes de chegar ao julgamento.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Corrente da Custódia Pretoriana',
        description: 'Segurança imperial com que Roma mantinha o apóstolo protegido da turba.'
      },
      '4,4': {
        name: 'Punhal Escondido para a Emboscada',
        description: 'Arma branca com que os sicários fanáticos pretendiam desferir o golpe mortal.'
      },
      '6,4': {
        name: 'Pacto Sacrílego sob Anátema',
        description: 'Juramento de não provar comida nem água enquanto não tivessem derramado o sangue de Paulo.'
      },
      '8,8': {
        name: 'Ferradura da Cavalaria de Escolta',
        description: 'Rasto da coluna armada de 470 soldados que transferiu o recluso à meia-noite.'
      }
    },
    suspects: {
      PA: {
        name: 'Paulo',
        role: 'Prisioneiro Ameaçado',
        clueText: 'Preso na fortaleza, o Senhor apareceu-lhe de noite dizendo: «Coragem; darás testemunho em Roma».'
      },
      CL: {
        name: 'Conjurado Líder',
        role: 'Sicário Juramentado',
        clueText: 'Encabeçou o grupo dos quarenta que se amaldiçoaram a si mesmos se comessem antes do homicídio.'
      },
      SO: {
        name: 'Sobrinho de Paulo',
        role: 'O Jovem Informador',
        clueText: 'Ouviu a emboscada junto à cripta e correu à fortaleza para alertar o tio e o comandante.'
      },
      TL: {
        name: 'Tribuno Cláudio Lísias',
        role: 'Comandante da Coorte',
        clueText: 'Tomou o rapaz pela mão, a sós, acreditou no seu relato e redigiu uma carta oficial ao governador Félix.'
      },
      AN: {
        name: 'Sumo Sacerdote Ananias',
        role: 'Conspirador Hierárquico',
        clueText: 'Aceitou a proposta de fingir uma audiência mais minuciosa para favorecer o ataque na rua.'
      },
      CR: {
        name: 'Centurião Romano',
        role: 'Oficial de Guarda',
        clueText: 'Levou o jovem sobrinho à presença do tribuno a pedido expresso do apóstolo.'
      },
      JE: {
        name: 'Cavaleiro da Escolta',
        role: 'Cavalaria de Resgate',
        clueText: 'Montou Paulo numa cavalgadura e cavalgou velozmente na noite, protegendo o cidadão romano.'
      },
      AC: {
        name: 'Ancião Conjurado',
        role: 'Fanático do Anátema',
        clueText: 'Esperava de punhal na mão na viela estreita em frente ao átrio.'
      },
      FT: {
        name: 'Falsa Testemunha',
        role: 'Emissário do Sinédrio',
        clueText: 'Levava o falso pedido de comparência ao comandante romano.'
      }
    },
    clues: {
      c1: {
        text: 'Mais de quarenta homens fizeram um juramento solene de não comer nem beber até matarem o acusado.',
        narrative: 'O conjurado líder e o ancião fanático ligaram as suas vidas a um anátema mortal.'
      },
      c2: {
        text: 'Os conjurados propuseram aos sacerdotes fingir que precisavam de interrogar de novo o prisioneiro.',
        narrative: 'Ananias e a falsa testemunha combinaram pedir formalmente a saída do réu.'
      },
      c3: {
        text: 'O plano consistia em emboscar e assassinar o prisioneiro durante o trajeto entre a prisão e o tribunal.',
        narrative: 'Os sicários colocar-se-iam com punhais escondidos na esquina da muralha.'
      },
      c4: {
        text: 'Um jovem familiar do prisioneiro soube da conspiração secreta e conseguiu entrar na fortaleza para o avisar.',
        narrative: 'O sobrinho de Paulo desfez o segredo da conspiração indo à cela.'
      },
      c5: {
        text: 'O prisioneiro pediu a um centurião que levasse o jovem ao comandante militar máximo da cidade.',
        narrative: 'O centurião romano acatou o pedido, apresentando o rapaz ao tribuno Lísias.'
      },
      c6: {
        text: 'O comandante acreditou no testemunho do rapaz e ordenou-lhe silêncio absoluto sobre a conversa.',
        narrative: 'Cláudio Lísias despediu o jovem, recomendando-lhe estrita reserva.'
      },
      c7: {
        text: 'Nessa mesma noite, um destacamento maciço de quase quinhentos soldados e cavaleiros levou o prisioneiro para outra cidade protegida.',
        narrative: 'O cavaleiro da escolta e os lanceiros cavalgaram para Cesareia, frustrando a conspiração fanática.'
      }
    }
  }
};
