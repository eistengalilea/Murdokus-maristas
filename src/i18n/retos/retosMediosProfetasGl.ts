import { RetoTraduccion } from './types';

export const RETOS_MEDIOS_PROFETAS_GL: Record<string, RetoTraduccion> = {
  // RETO 003-B: El Decreto de los Treinta Días -> O Decreto dos Trinta Días
  '003-B': {
    nombre: 'O Decreto dos Trinta Días',
    categoria: 'Asesinatos ou crimes',
    citasBiblicas: 'Daniel 6, 1-25',
    textoBiblicoClave: 'O meu Deus enviou o seu anxo a pechar as fauces dos leóns, e non me fixeron ningún dano, porque me atopou inocente.',
    contextoTeologico: 'Este relato amosa o conflito ético entre o poder civil absoluto e a fidelidade relixiosa. O maxisterio salienta aquí a primacía da conciencia e a protección providencial sobre o xusto que sofre persecución legal.',
    solucionExplicacion: 'Uns funcionarios enganaron a Darío para que prohibise rezar, procurando matar a Daniel por envexa política. Daniel continuou orando, foi botado á fosa dos leóns, pero un anxo protexeuno pechando a boca das feras.',
    storyIntro: 'Un ancián de intachable conduta política é sentenciado a unha morte brutal. O propio monarca que dita a sentenza pasa a noite en vela e en xaxún, agardando contra toda lóxica que o condenado sobreviva ao amencer.',
    epilogue: '¡Caso resolto! Daniel mantívose fiel orando tres veces ao día na súa cámara alta. Deus enviou o seu anxo para selar as fauces dos leóns, ceibando ao xusto da trampa envexosa dos sátrapas.',
    subtitle: 'Asesinatos ou crimes · Daniel 6 · 7x7',
    badge: 'O DECRETO DOS TRINTA DÍAS · 7x7',
    rooms: {
      foso_leones: {
        name: 'Fosa Subterránea dos Leóns',
        shortName: 'Fosa Leóns',
        description: 'Cova pechada cunha gran laxe selada co anel real e dos nobres.'
      },
      camara_oracion: {
        name: 'Cámara Alta de Oración de Daniel',
        shortName: 'Cámara Daniel',
        description: 'Aposento con ventás abertas cara a Xerusalén onde Daniel rezaba de xeonllos.'
      },
      palacio_dario: {
        name: 'Pazo Real de Darío',
        shortName: 'Pazo Darío',
        description: 'Cámara rexia onde o monarca pasou a noite en xaxún e desvelo polo seu amigo.'
      },
      sala_satrapas: {
        name: 'Sala de Audiencias dos Sátrapas',
        shortName: 'Sala Sátrapas',
        description: 'Lugar de conspiración onde os gobernadores redactaron a trampa legal.'
      },
      puesto_guardia_foso: {
        name: 'Pórtico e Custodia da Fosa',
        shortName: 'Pórtico Fosa',
        description: 'Acceso superior onde os centinelas montaron garda nocturna xunto á rocha selada.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Ventanal cara a Xerusalén',
        description: 'Abertura por onde Daniel elevaba as súas pregarias tres veces cada xornada.'
      },
      '2,3': {
        name: 'Edicto Real Selado',
        description: 'Decreto irrevogable dos medos e persas con prohibición de rezar.'
      },
      '4,1': {
        name: 'Manda de Leóns Famolentos',
        description: 'Feras que permaneceron mansas sen tocar ao profeta inocente.'
      },
      '6,5': {
        name: 'Laxe Selada con Anel',
        description: 'Pedra circular selada para garantir que nada se alterase no castigo.'
      }
    },
    suspects: {
      R: {
        name: 'Darío',
        role: 'Rei enganado dos medos',
        clueText: 'No Pazo Real angustiado pasando a noite en xaxún estrito.'
      },
      D: {
        name: 'Daniel',
        role: 'Primeiro ministro intachable',
        clueText: 'Na Fosa dos Leóns acompañado polo enviado divino.'
      },
      S: {
        name: 'Sátrapa Conspirador',
        role: 'Promotor da envexa legal',
        clueText: 'Xunto á fosa dos leóns, celebrando a aparente caída do seu rival.'
      },
      G: {
        name: 'Gobernador Cómplice',
        role: 'Testemuña acusadora perante o rei',
        clueText: 'Na Sala de Sátrapas esixindo o cumprimento estrito da lei persa.'
      },
      A: {
        name: 'Un Anxo',
        role: 'Mensaxeiro protector celestial',
        clueText: 'Velando na cámara de oración, enviado para selar as fauces das feras.'
      },
      C: {
        name: 'Centinela da Fosa',
        role: 'Garda da laxe selada',
        clueText: 'No Pórtico da Fosa vixiando que ninguén mova a pedra selada.'
      },
      E: {
        name: 'Escriba da Corte',
        role: 'Notario da lei medopersa',
        clueText: 'Na Cámara de Oración levantando acta testemuñal das pregarias de Daniel.'
      }
    },
    clues: {
      c1: {
        text: 'O rei planeaba poñer a un dos seus altos funcionarios á fronte de todo o reino polo seu espírito extraordinario e honestidade.'
      },
      c2: {
        text: 'Outros altos cargos políticos, movidos pola envexa, buscaron unha escusa legal para eliminar ao seu rival, sabendo que era intachable.'
      },
      c3: {
        text: 'Os conspiradores enganaron ao monarca para asinar un edicto irrevogable que prohibía rezar a calquera deus ou home que non fose o rei.'
      },
      c4: {
        text: 'A vítima designada ignorou a prohibición temporal e continuou rezando tres veces ao día coas ventás abertas cara a Xerusalén.'
      },
      c5: {
        text: 'O rei, atado pola súa propia lei, viuse obrigado con grande dor a condenar ao seu funcionario favorito á fosa das feras.'
      },
      c6: {
        text: 'Durante toda a noite, o rei negouse a comer, e ao amencer correu á fosa temendo o peor.'
      },
      c7: {
        text: 'Un mensaxeiro divino pechou as fauces das bestas porque a vítima era inocente perante Deus e non fixera dano ao monarca.'
      }
    }
  },

  // RETO 004-B: Los Árboles de la Mentira -> As Árbores da Mentira
  '004-B': {
    nombre: 'As Árbores da Mentira',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Daniel 13, 1-64',
    textoBiblicoClave: 'Daniel dixo: «Ben mentiches contra a túa propia cabeza». Preguntoulle ao outro: «Baixo que árbore os viches?». El respondeu: «Baixo unha aciñeira».',
    contextoTeologico: 'O relato de Susana salienta a protección divina dos inocentes fronte ao abuso de poder xudicial e moral. A intervención de Daniel amosa o discernimento forense e a busca da verdade mediante o contraste independente de testemuños.',
    solucionExplicacion: 'Dous xuíces devanceiros chantaxearon a Susana e, ao seren rexeitados, acusárona falsamente de adulterio. O mozo Daniel separounos e preguntoulles baixo que árbore ocorrera o feito: un dixo unha acacia e o outro unha aciñeira, probando a falsidade da súa acusación.',
    storyIntro: 'Unha muller virtuosa é acusada falsamente de adulterio por dous anciáns influentes cuxas proposicións rexeitou. Condenada a morte polo tribunal, un mozo detén a sentenza e realiza un interrogatorio forense por separado.',
    epilogue: '¡Xustiza pericial triunfante! O interrogatorio illado de Daniel deixou en evidencia a contradición dos dous corruptos acusadores. Susana foi proclamada inocente e o pobo glorificou a sabedoría dada por Deus ao mozo.',
    subtitle: 'Descubrimento de accións ocultas · Daniel 13 · 7x7',
    badge: 'AS ÁRBORES DA MENTIRA · 7x7',
    rooms: {
      bosquete_encinas: {
        name: 'Fraga das Aciñeiras',
        shortName: 'Fraga Aciñeiras',
        description: 'Sector oposto do parque sinalado en flagrante discordancia polo segundo ancián.'
      },
      tribunal_asamblea: {
        name: 'Tribunal da Asemblea Popular',
        shortName: 'Tribunal Pobo',
        description: 'Estancia xudicial onde o pobo creu inicialmente aos dous anciáns de prestixio.'
      },
      patibulo_lapidacion: {
        name: 'Patíbulo de Lapidación Exterior',
        shortName: 'Patíbulo Exterior',
        description: 'Camiño cara aos arredores onde Daniel interveu detendo a execución inxusta.'
      },
      huerto_banos: {
        name: 'Horta Privada de Xoaquín (A Fonte)',
        shortName: 'Horta Fonte',
        description: 'Xardín pechado onde Susana adoitaba pasear e bañarse nas horas de calor.'
      },
      arboleda_acacia: {
        name: 'Recuncho das Acacias e Carballos',
        shortName: 'Recuncho Acacias',
        description: 'Lugar citado polo primeiro xuíz afirmando ter visto o falso encontro.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Acacia Frondosa',
        description: 'Árbore alegada con soberbia polo primeiro ancián durante o interrogatorio illado.'
      },
      '1,6': {
        name: 'Aciñeira Centenaria',
        description: 'Árbore totalmente distinta nomeada polo segundo ancián acusador.'
      },
      '2,1': {
        name: 'Fonte e Aceites Aromáticos',
        description: 'Estanque privado de aseo da horta onde Susana foi axexada.'
      },
      '5,2': {
        name: 'Balanza do Xuízo Corrompido',
        description: 'Estrado xudicial revogado polo discernimento do mozo Daniel.'
      }
    },
    suspects: {
      S: {
        name: 'Susana',
        role: 'Muller xusta / Falsamente incriminada',
        clueText: 'Na Horta das Acacias acurralada pola trampa dos anciáns.'
      },
      D: {
        name: 'Daniel',
        role: 'Xuíz xuvenil providencial',
        clueText: 'No Patíbulo Exterior detendo a execución e esixindo careo illado.'
      },
      J: {
        name: 'Xoaquín',
        role: 'Esposo nobre de Susana',
        clueText: 'Xunto ao patíbulo, consternado ante a acusación contra a súa esposa.'
      },
      A1: {
        name: 'Primeiro Ancián',
        role: 'Xuíz perverso acusador',
        clueText: 'Na horta dos baños, mantendo a súa mentira contra Susana.'
      },
      A2: {
        name: 'Segundo Ancián',
        role: 'Xuíz cómplice perxuro',
        clueText: 'No Bosquete de Aciñeiras, illado do primeiro xuíz antes do interrogatorio.'
      },
      M: {
        name: 'Doncela da Horta',
        role: 'Serventa que pechou as portas',
        clueText: 'No tribunal da asemblea, tras saír da horta a buscar os xabóns que pediu a súa ama.'
      },
      G: {
        name: 'Alguacil do Tribunal',
        role: 'Executor da orde xudicial',
        clueText: 'No Patíbulo de Lapidación conducindo os presos á espera do veredicto.'
      }
    },
    clues: {
      c1: {
        text: 'Dous xuíces anciáns que frecuentaban a casa dun home rico encapricháronse da esposa deste.'
      },
      c2: {
        text: 'Os líderes ocultáronse na horta privada mentres a muller se dispoñía a bañarse sen as súas doncelas.'
      },
      c3: {
        text: 'Ao seren rexeitados nas súas proposicións, os líderes berrou e acusárona publicamente de adulterio cun mozo ficticio.'
      },
      c4: {
        text: 'O tribunal creu a versión dos anciáns polo seu prestixio social, condenando á muller a morrer lapidada.'
      },
      c5: {
        text: 'Un mozo impulsado polo Espírito detivo a execución e esixiu interrogar aos dous acusadores por separado.'
      },
      c6: {
        text: 'Ao preguntar ao primeiro acusador baixo que árbore ocorrera o suposto adulterio, este respondeu que baixo unha acacia.'
      },
      c7: {
        text: 'O segundo acusador, illado do primeiro, afirmou que todo ocorrera baixo unha aciñeira, demostrando o perxurio de ambos.'
      }
    }
  },

  // RETO 005-B: El Banquete de la Reina -> O Banquete da Raíña
  '005-B': {
    nombre: 'O Banquete da Raíña',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Ester 7, 1-10',
    textoBiblicoClave: 'Ester respondeu: «¡O inimigo e adversario é este malvado Amán!» Amán quedou aterrorizado perante o rei e a raíña.',
    contextoTeologico: 'O libro de Ester amosa a supervivencia no desterro. Aínda que non menciona a Deus directamente, a exéxese interprétao como a providencia oculta: a valentía cívica e a resistencia desbaratan o antisemitismo e as inxustizas de estado.',
    solucionExplicacion: 'Amán planeou o exterminio xudeu porque Mardoqueo non se prostraba diante del. Ester, ocultando a súa orixe, convidou ao rei e a Amán a un banquete, onde revelou a conspiración. Amán foi aforcado na mesma forca que el mesmo construíra.',
    storyIntro: 'Un poderoso ministro subornou ao soberano para exterminar a todo un pobo. Cando xa tiña preparada unha gran forca no seu patio, foi convidado a un banquete privado exclusivo, sen saber que alí se asinaría a súa propia sentenza de morte.',
    epilogue: '¡Caso resolto! Ester intercedeu polo seu pobo no banquete privado. O rei Asuero descubriu a vileza de Amán e ordenou colgalo na forca de cincuenta cóbados que alzara para Mardoqueo.',
    subtitle: 'Descubrimento de accións ocultas · Ester 7 · 7x7',
    badge: 'O BANQUETE DA RAÍÑA · 7x7',
    rooms: {
      banquete_vino: {
        name: 'Salón do Banquete Íntimo de Viño',
        shortName: 'Banquete Raíña',
        description: 'Mesa privada reservada unicamente para o rei Asuero, a raíña Ester e Amán.'
      },
      patio_horca: {
        name: 'Patio da Mansión de Amán (A Forca)',
        shortName: 'Patio Forca',
        description: 'Lugar onde o ministro levantou un madeiro de cincuenta cóbados de alto.'
      },
      puerta_palacio: {
        name: 'Porta Real do Pazo en Susa',
        shortName: 'Porta Real',
        description: 'Entrada onde Mardoqueo rexeitaba inclinarse perante a soberbia de Amán.'
      },
      jardin_interior: {
        name: 'Xardín Interior do Pazo',
        shortName: 'Xardín Real',
        description: 'Parque onde o rei saíu enfurecido a respirar tras escoitar a denuncia de Ester.'
      },
      camara_consejeros: {
        name: 'Cámara de Escribas e Dignatarios',
        shortName: 'Cám. Conselleiros',
        description: 'Estancia onde os cortesáns presenciaron o xiro providencial dos acontecementos.'
      }
    },
    blockedObjects: {
      '0,5': {
        name: 'Madeiro de Cincuenta Cóbados',
        description: 'Estrutura alzada por Amán para axustizar a Mardoqueo.'
      },
      '1,1': {
        name: 'Copa de Viño do Banquete',
        description: 'Cáliz onde Asuero preguntou a Ester cal era a súa verdadeira petición.'
      },
      '3,0': {
        name: 'Limiar de Mardoqueo',
        description: 'Banco da garda onde o tío da raíña vestía saial de loito.'
      },
      '5,4': {
        name: 'Decreto de Exterminio Selado',
        description: 'Documento comprado por dez mil talentos de prata para destruír aos xudeus.'
      }
    },
    suspects: {
      R: {
        name: 'Asuero',
        role: 'Rei persa conmovido',
        clueText: 'No Xardín Interior paseando enfurecido tras escoitar o clamor de Ester.'
      },
      E: {
        name: 'Ester',
        role: 'Raíña valente intercesora',
        clueText: 'No Banquete de Viño sinalando con valentía ao ministro perverso.'
      },
      M: {
        name: 'Mardoqueo',
        role: 'Tío leal que non se axeonlla',
        clueText: 'Na Porta Real do Pazo confiando en que a axuda viría de Deus.'
      },
      A: {
        name: 'Amán',
        role: 'Ministro xenocida arrogante',
        clueText: 'No Banquete de Viño guindándose ao leito aterrorizado implorando perdón.'
      },
      H: {
        name: 'Harboná',
        role: 'Eunuco cortesán que delatou a forca',
        clueText: 'Na cámara dos dignatarios, disposto a sinalarlle ao rei o madeiro preparado por Amán.'
      },
      C: {
        name: 'Moiordomo do Banquete',
        role: 'Servidor da copa real',
        clueText: 'Na cámara dos escribas, tras servir as viandas aos tres comensais.'
      },
      T: {
        name: 'Escriba do Tesouro',
        role: 'Contable imperial de Susa',
        clueText: 'Na Cámara de Conselleiros rexistrando os talentos de prata prometidos por Amán.'
      }
    },
    clues: {
      c1: {
        text: 'Un alto dignatario do imperio esixía que todos se axeonllasen diante del á porta do pazo, pero un xudeu negouse.'
      },
      c2: {
        text: 'Enfurecido, o dignatario convenceu ao rei de asinar un decreto de xenocidio, ofrecendo miles de talentos de prata ao tesouro.'
      },
      c3: {
        text: 'A raíña consorte, que mantiña a súa orixe en segredo, foi instada polo seu tío a interceder, arriscando a súa vida ao ir ao rei sen permiso.'
      },
      c4: {
        text: 'Para gañar o favor do rei, a raíña organizou dous banquetes íntimos, convidando unicamente ao monarca e ao ministro xenocida.'
      },
      c5: {
        text: 'O ministro estaba tan eufórico polo convite que mandou construír unha forca de cincuenta cóbados para colgar ao xudeu rebelde.'
      },
      c6: {
        text: 'No segundo banquete, a raíña revelou a súa orixe e sinalou ao ministro como o inimigo que planeaba asasinala a ela e á súa xente.'
      },
      c7: {
        text: 'O rei, furioso, ordenou que o ministro fose executado inmediatamente na mesma forca que preparara para o tío da raíña.'
      }
    }
  },

  // RETO 008-B: Las Pisadas en la Ceniza -> As Pegadas na Cinza
  '008-B': {
    nombre: 'As Pegadas na Cinza',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Daniel 14, 1-22',
    textoBiblicoClave: 'O rei mirou o chan e berrou: «Gran es, oh Bel, e non hai en ti engano ningún!». Pero Daniel botouse a rir e dixo: «Mira o chan e recoñece de quen son estas pegadas».',
    contextoTeologico: 'Denuncia a idolatría e a manipulación relixiosa mediante un enxeñoso método de proba física. Fe Adulta destaca como o discernimento e a razón desenmascaran as falsas crenzas que se manteñen para o proveito económico duns poucos.',
    solucionExplicacion: 'Daniel demostrou a falsidade do ídolo Bel espallando cinza no chan do templo antes de selar as portas. Á mañá seguinte, os selos reais estaban intactos pero a cinza amosaba as pegadas dos sacerdotes e as súas familias que entraran pola trampola oculta para comer a ofrenda.',
    storyIntro: 'Un rei pagán cría cegamente que unha estatua de bronce devoraba cestas de fariña, carne e xerras de viño cada noite. Un sabio escéptico propón un método criminalístico infalible para comprobar se quen come é o deus ou mortais con moita fame.',
    epilogue: '¡Proba forense irrefutable! As pegadas de homes, mulleres e nenos na cinza fina revelaron a trampa da porta secreta. O rei recoñeceu a verdade e mandou destruír o templo e o falso deus.',
    subtitle: 'Descubrimento de accións ocultas · Daniel 14 · 7x7',
    badge: 'AS PEGADAS NA CINZA · 7x7',
    rooms: {
      altar_bel: {
        name: 'Mesa do Banquete Diante do Ídolo Bel',
        shortName: 'Altar Bel',
        description: 'Lugar onde se deixaban doce medidas de flor de fariña, corenta ovellas e seis cántaras de viño.'
      },
      pasadizo_secreto: {
        name: 'Trampa e Pasadizo Oculto',
        shortName: 'Pasadizo Oculto',
        description: 'Conduto subterráneo por onde os clérigos e as súas familias entraban ás escuras.'
      },
      portico_sellos: {
        name: 'Porta Principal do Templo Selada',
        shortName: 'Pórtico Selos',
        description: 'Portón de bronce pechado e asegurado co anel de selo do rei Ciro.'
      },
      patio_sacerdotal: {
        name: 'Residencia das Familias Sacerdotais',
        shortName: 'Patio Clérigos',
        description: 'Vivendas anexas onde setenta sacerdotes vivían coas súas mulleres e fillos.'
      },
      suelo_ceniza: {
        name: 'Nave do Templo Espallada de Cinza',
        shortName: 'Chan Cinza',
        description: 'Pavimento de lousas cuberto subtilmente con cinza peneirada para imprimir pegadas.'
      }
    },
    blockedObjects: {
      '0,5': {
        name: 'Ídolo de Bronce de Bel',
        description: 'Efixie idolátrica que por dentro non era máis que barro inerte.'
      },
      '1,0': {
        name: 'Selo de Cera Real Intacto',
        description: 'Lacre estampado co anel de Ciro que acreditaba a inviolabilidade da porta.'
      },
      '2,3': {
        name: 'Trampola Oculta no Chan',
        description: 'Acceso baixo a mesa dos banquetes polo que ceaban as familias.'
      },
      '4,1': {
        name: 'Peneira con Cinza Fina',
        description: 'Criba empregada polos servintes de Daniel para sementar a evidencia.'
      }
    },
    suspects: {
      D: {
        name: 'Daniel',
        role: 'Sabio forense / Ideou a trampa da cinza',
        clueText: 'Fronte á residencia dos sacerdotes, sorrindo ao sinalarlle ao rei a variedade de pegadas.'
      },
      C: {
        name: 'Ciro',
        role: 'Rei de Persia / Enganado polos sacerdotes',
        clueText: 'No Pórtico Selos comprobando con entusiasmo os selos intactos.'
      },
      S: {
        name: 'Sumo Sacerdote de Bel',
        role: 'Líder da fraude do templo',
        clueText: 'Ante a porta selada do templo, tras dirixir a incursión nocturna polo pasadizo.'
      },
      E: {
        name: 'Esposa do Sacerdote',
        role: 'Cómplice / Pegadas miúdas descubertas',
        clueText: 'Na Residencia Sacerdotal cargando cestas coas viandas do ídolo.'
      },
      G: {
        name: 'Garda Real de Ciro',
        role: 'Custodio dos selos reais',
        clueText: 'Xunto ao altar de Bel, confirmando que ninguén abriu o ferrollo principal.'
      },
      H: {
        name: 'Fillo do Sacerdote',
        role: 'Neno cuxas pegadas delataron a farsa',
        clueText: 'Na residencia das familias sacerdotais, tras deixar pegadas pequenas na cinza xunto aos manxares.'
      },
      V: {
        name: 'Servente de Daniel',
        role: 'Axudante que espallou a cinza',
        clueText: 'No Chan de Cinza peneirando o po gris en presenza exclusiva do rei.'
      }
    },
    clues: {
      c1: {
        text: 'Un monarca esixía adorar a un ídolo babilónico porque este "devoraba" grandes cantidades de fariña, ovellas e viño cada noite.'
      },
      c2: {
        text: 'Un sabio xudeu negouse a adoralo, afirmando que o ídolo era só barro por dentro e bronce por fóra, e nunca comía.'
      },
      c3: {
        text: 'Os clérigos propuxeron deixar a comida, pechar o templo e selalo co anel real para probar que a deidade existía.'
      },
      c4: {
        text: 'Antes de que o templo fose selado, o sabio ordenou aos seus servos espallar cinza por todo o chan sen que os clérigos se decatasen.'
      },
      c5: {
        text: 'Á mañá seguinte, os selos permanecían intactos e a comida desaparecera, alegrando enormemente ao monarca.'
      },
      c6: {
        text: 'O sabio detivo ao monarca antes de que entrase e pediulle que observase atentamente o chan gris.'
      },
      c7: {
        text: 'Na cinza descubriron marcas evidentes que revelaron un pasadizo secreto baixo a mesa das ofrendas.'
      }
    }
  },

  // RETO 010-B: El Yugo Roto -> O Xugo Roto
  '010-B': {
    nombre: 'O Xugo Roto',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: 'Xeremías 28, 1-17',
    textoBiblicoClave: 'No canto do xugo de madeira, fixeches un xugo de ferro. (...) a Hananías: «O Señor non te enviou, e ti fixeches que este pobo confíe nunha mentira».',
    contextoTeologico: 'Critica duramente a teoloxía do falso optimismo. Fe Adulta subliña que o verdadeiro profeta a miúdo anuncia realidades dolorosas que esixen conversión, fronte aos nacionalismos relixiosos e discursos compracentes.',
    solucionExplicacion: 'Xeremías profetizou o sometemento a Babilonia usando un xugo de madeira. O falso profeta Hananías rompeuno predicindo unha falsa vitoria en dous anos. Deus respondeu impoñendo un xugo de ferro (exilio inevitable) e Hananías morreu por mentir ao pobo.',
    storyIntro: 'Nos tensos anos previos ao desterro, dous homes enfróntanse no templo. Un porta unha mensaxe de submisión cargando madeira ao pescozo; o outro ofrece unha mensaxe populista de vitoria e creba a madeira. A realidade daralles a ambos un veredicto de ferro.',
    epilogue: '¡Caso resolto! Hananías crebou o madeiro de Xeremías alimentando falsas ilusións populares. A palabra de Deus foi taxante: o xugo de madeira converteuse en xugo de ferro e o falso profeta pagou coa súa vida o seu engano.',
    subtitle: 'Descubrimento de accións ocultas · Xeremías 28 · 7x7',
    badge: 'O XUGO ROTO · 7x7',
    rooms: {
      atrio_templo: {
        name: 'Atrio Principal da Casa do Señor',
        shortName: 'Atrio Templo',
        description: 'Lugar público de asemblea onde os sacerdotes e o pobo escoitaban os oráculos.'
      },
      estrado_sacerdotes: {
        name: 'Estrado dos Sacerdotes e Anciáns',
        shortName: 'Estrado Clérigos',
        description: 'Plataforma onde os líderes relixiosos aplaudían os discursos triunfalistas.'
      },
      palacio_sedecias: {
        name: 'Pazo Real do Rei Sedecías',
        shortName: 'Pazo Sedecías',
        description: 'Cámara do último monarca de Xudá, dividido entre a submisión e a rebelión.'
      },
      puerta_muralla: {
        name: 'Porta da Muralla de Xerusalén',
        shortName: 'Porta Muralla',
        description: 'Acceso por onde se albiscan os estandartes ameazantes do exército caldeo.'
      },
      taller_herreria: {
        name: 'Fragua e Ferrería do Xugo de Ferro',
        shortName: 'Fragua Ferro',
        description: 'Lugar onde se forxou o xugo indestructible anunciado na nova profecía.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Xugo de Madeira Roto',
        description: 'Varales de madeira arrincados do pescozo de Xeremías e esnaquizados por Hananías.'
      },
      '1,4': {
        name: 'Xugo de Ferro Inquebrantable',
        description: 'Novo instrumento profético que simbolizaba o sometemento forzoso a Babilonia.'
      },
      '2,6': {
        name: 'Coroa Vacilante de Sedecías',
        description: 'Insignia real do monarca que se negou a escoitar a voz de Xeremías.'
      },
      '4,1': {
        name: 'Lanza e Escudo da Garda',
        description: 'Armas apostadas nas ameas ante a inminencia do asedio de Nabucodonosor.'
      }
    },
    suspects: {
      J: {
        name: 'Xeremías',
        role: 'Profeta da verdade e o loito',
        clueText: 'No Atrio do Templo cargando con humildade as correas de madeira ao pescozo.'
      },
      H: {
        name: 'Hananías',
        role: 'Falso profeta populista',
        clueText: 'No Atrio do Templo crebando o madeiro perante o clamor da multitude.'
      },
      S: {
        name: 'Sedecías',
        role: 'Rei indeciso de Xudá',
        clueText: 'Na porta da muralla, temendo a reacción dos oficiais ante o asedio.'
      },
      T: {
        name: 'Sacerdote do Templo',
        role: 'Clérigo compracente coa multitude',
        clueText: 'No Estrado de Sacerdotes aplaudindo o vaticinio optimista de dous anos.'
      },
      G: {
        name: 'Garda do Rei',
        role: 'Centinela do pazo',
        clueText: 'Na Porta da Muralla vixiando con temor o avance das tropas invasoras.'
      },
      B: {
        name: 'Baruc o Escriba',
        role: 'Secretario fiel de Xeremías',
        clueText: 'Na Fragua do Ferro consignando por escrito o novo oráculo do Señor.'
      },
      A: {
        name: 'Ancián de Xudá',
        role: 'Líder civil da cidade',
        clueText: 'No pazo real, dubidando en segredo das promesas de Hananías.'
      }
    },
    clues: {
      c1: {
        text: 'Un profeta camiñaba pola cidade levando un xugo de madeira ao pescozo como aviso visual de parte de Deus.'
      },
      c2: {
        text: 'O xugo simbolizaba a orde ineludible de someterse ao Imperio Babilónico para evitar a destrución total da cidade.'
      },
      c3: {
        text: 'Un profeta rival contradixo a mensaxe diante dos sacerdotes, prometendo que Deus destruiría o poder babilónico en só dous anos.'
      },
      c4: {
        text: 'Para ilustrar a súa mensaxe populista, o rival arrincou o xugo de madeira do pescozo do profeta verdadeiro e rompeuno.'
      },
      c5: {
        text: 'O profeta verdadeiro retirouse pacificamente, pero pouco despois regresou cunha nova sentenza divina.'
      },
      c6: {
        text: 'Deus reveloulle que a madeira sería substituída por un xugo de ferro, asegurando o dominio do imperio invasor.'
      },
      c7: {
        text: 'O profeta que rompeu a madeira morreu poucos meses despois, condenado por incitar á rebelión mediante falsas esperanzas.'
      }
    }
  }
};
