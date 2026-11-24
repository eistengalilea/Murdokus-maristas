import { RetoTraduccion } from './types';

export const RETOS_FACILES_MONARQUIA_GL: Record<string, RetoTraduccion> = {
  // RETO 002-C: La Espada de la Verdad -> A Espada da Verdade
  '002-C': {
    nombre: 'A Espada da Verdade',
    categoria: 'Desenlaces de historias e parábolas',
    citasBiblicas: '1 Reis 3, 16-28',
    textoBiblicoClave: 'O rei dixo: «Traédeme unha espada. (...) Partide en dous ao neno vivo e dádelle a metade a unha e a metade á outra». Entón a muller do fillo vivo falou ao rei, porque as súas entrañas se conmoveran...',
    contextoTeologico: 'Amosa o don divino da sabedoría que penetra o corazón humano máis alá das aparencias legais. O verdadeiro amor maniféstase na renuncia salvadora antes ca na posesión egoísta.',
    solucionExplicacion: 'Dúas mulleres reclamaban ser a nai do mesmo bebé. O rei Salomón ordenou partir o neno en dous cunha espada; a verdadeira nai preferiu entregar o fillo antes ca velo morrer, revelando así a súa auténtica maternidade.',
    storyIntro: 'Dúas nais chegan perante o trono real cun só bebé vivo e o cadáver doutro. Non hai testemuñas nin probas materiais da noite escura no aposento. Un rei mozo pide unha espada afiada para resolver o dilema.',
    epilogue: '¡O amor de nai resplandeceu ante a morte! Salomón ordenou: «Entregádelle o neno vivo á primeira; non o matedes, ela é a súa verdadeira nai». Todo Israel admirou a sabedoría de Deus que habitaba nel.',
    subtitle: 'Desenlaces de historias e parábolas · 1 Reis 3 · 5x5',
    badge: 'A ESPADA DA VERDADE · 5x5',
    rooms: {
      trono_salomon: {
        name: 'Trono do Xuízo de Salomón',
        shortName: 'Trono Salomón',
        description: 'Estrado rexio de marfil e ouro onde o mozo monarca ditou a súa célebre sentenza.'
      },
      estrado_litigio: {
        name: 'Estrado dos Litigantes',
        shortName: 'Estrado Litixio',
        description: 'Lugar onde compareceron as dúas mulleres co bebé vivo e o pranto da reclamación.'
      },
      camara_guardia: {
        name: 'Cámara do Verdugo Real',
        shortName: 'Cámara Garda',
        description: 'Posto militar onde o soldado empuñou a espada brillante de dous fíos.'
      },
      posada_mujeres: {
        name: 'Aposento Común das Nais',
        shortName: 'Aposento Nais',
        description: 'Casa compartida onde naceron os dous nenos e ocorreu o tráxico troco nocturno.'
      },
      galeria_escribas: {
        name: 'Galería de Notarios e Sabios',
        shortName: 'Galería Sabios',
        description: 'Corredor onde os cronistas reais rexistraron a sona de sabedoría do rei.'
      }
    },
    blockedObjects: {
      '0,4': {
        name: 'Rolo de Leis de Israel',
        description: 'Decretos sobre custodia e herdanza que non contemplaban este caso sen testemuñas.'
      },
      '2,1': {
        name: 'Lámpada de Aceite da Pousada',
        description: 'Testemuña muda da noite en que un dos nenos morreu afogado na cama.'
      },
      '4,0': {
        name: 'Espada Afiada do Xuízo',
        description: 'Aceiro desenvainado co que o rei ordenou dividir ao neno en dúas partes.'
      }
    },
    suspects: {
      S: {
        name: 'Salomón',
        role: 'Rei e Xuíz Supremo',
        clueText: 'Preside no Trono Real e escoita o clamor de ambas as partes.'
      },
      M: {
        name: 'Nai Verdadeira',
        role: 'Primeira Prostituta (Nai Lexítima)',
        clueText: 'Preferiu ceder ao neno con tal de conservarlle a vida.'
      },
      F: {
        name: 'Segunda Prostituta',
        role: 'Falsa Nai Acusadora',
        clueText: 'Aceptou que o neno fose cortado coa espada dicindo: "Nin para min nin para ti".'
      },
      N: {
        name: 'Neno Vivo',
        role: 'Lactante Disputado',
        clueText: 'O pequeno inocente ameazado polo fío do xuízo.'
      },
      G: {
        name: 'Garda Real',
        role: 'Verdugo da Corte',
        clueText: 'Apostado na Cámara da Garda agardando a orde final do monarca.'
      }
    },
    clues: {
      c1: {
        text: 'Dúas mulleres que vivían soas na mesma casa deron a luz con só tres días de diferenza.',
        narrative: 'A Nai Verdadeira e a Falsa Nai compartían aposento antes da traxedia.'
      },
      c2: {
        text: 'Unha das mulleres afogou accidentalmente ao seu bebé mentres durmía e trocouno en segredo polo fillo vivo da súa compañeira.',
        narrative: 'A Segunda Prostituta levou a cabo o engano na escuridade da noite.'
      },
      c3: {
        text: 'Ao amencer, a nai verdadeira descubriu o engano ao observar con atención o rostro do neno morto.',
        narrative: 'A Nai Verdadeira soubo ao momento que aquel corpiño sen vida non era o seu fillo.'
      },
      c4: {
        text: 'O monarca, ante a falta de probas, ordenou a un garda traer unha espada para partir ao neno vivo en dúas metades iguais.',
        narrative: 'Salomón dispuxo a proba da espada ao soldado da súa corte.'
      },
      c5: {
        text: 'A falsa nai aceptou a solución, pero a verdadeira suplicou que lle entregasen o neno á súa rival con tal de salvarlle a vida.',
        narrative: 'O amor maternal xenuíno preferiu a renuncia antes que a morte do neno.'
      }
    }
  },

  // RETO 005-C: La Sesión Espiritista -> A Sesión Espiritista
  '005-C': {
    nombre: 'A Sesión Espiritista',
    categoria: 'Descubrimento de accións ocultas',
    citasBiblicas: '1 Samuel 28, 3-25',
    textoBiblicoClave: 'Samuel dixo a Saúl: «Por que me molestas facéndome subir? (...) Mañá ti e os teus fillos estaredes comigo».',
    contextoTeologico: 'Amosa a un líder desesperado crebando as súas propias leis relixiosas. O maxisterio advirte aquí contra o espiritismo. Reflicte a traxedia psicolóxica de quen perdeu o favor divino e a súa propia coherencia moral.',
    solucionExplicacion: 'Ante o silencio divino, o rei Saúl consultou en segredo á nigromante de Endor para invocar ao defunto profeta Samuel. Este anuncioulle a súa inminente derrota e morte a mans dos filisteos.',
    storyIntro: 'Na véspera dunha batalla desesperada, un gobernante acode disfrazado a unha muller proscrita. Procura contactar co seu antigo conselleiro no máis alá, pero a mensaxe que recibe sela a súa condena.',
    epilogue: '¡Evocación nefasta na penumbra de Endor! Saúl caeu longo como era sobre a terra ao oír a voz de Samuel. Ao amencer, nos outeiros de Xelboé, a sentenza do máis alá consumouse inexorabelmente.',
    subtitle: 'Descubrimento de accións ocultas · 1 Samuel 28 · 5x5',
    badge: 'A SESIÓN ESPIRITISTA · 5x5',
    rooms: {
      choza_nigromante: {
        name: 'Cova da Nigromante de Endor',
        shortName: 'Cova Endor',
        description: 'Refuxio clandestino iluminado por brasas onde se realizaban conxuros prohibidos.'
      },
      circulo_evocacion: {
        name: 'Círculo de Aparición de Samuel',
        shortName: 'Círculo Aparición',
        description: 'Fenda no chan de onde ascendeu o ancián envolto no seu venerábel manto.'
      },
      senda_nocturna: {
        name: 'Senda Nocturna de Xelboé',
        shortName: 'Senda Nocturna',
        description: 'Camiño furtivo polo que o rei e as súas escoltas cruzaron as liñas inimigas.'
      },
      establo_ternero: {
        name: 'Estábulo do Xato Cebado',
        shortName: 'Estábulo Xato',
        description: 'Lugar onde a muller sacrificou un xato para que o rei recobrase forzas antes da alba.'
      },
      puesto_vigilancia: {
        name: 'Posto de Garda Exterior',
        shortName: 'Posto Garda',
        description: 'Entrada onde os escoltas apostaron vixilancia temendo unha emboscada filistea.'
      }
    },
    blockedObjects: {
      '0,3': {
        name: 'Disfrace Plebeo de Saúl',
        description: 'Roupas vulgares que o rei usou para ocultar a súa coroa e estatura rexia.'
      },
      '2,2': {
        name: 'Braseiro de Cinzas Místicas',
        description: 'Recipiente fumeante sobre o chan rochoso onde se invocaban espíritos subterráneos.'
      },
      '4,4': {
        name: 'Mesa do Xato e Pan Ázimo',
        description: 'Última cea ofrecida con temor pola adiviña ao rei abatido.'
      }
    },
    suspects: {
      S: {
        name: 'Saúl',
        role: 'Rei Desesperado de Incógnito',
        clueText: 'Aflixido polo silencio divino e o terror ao campamento filisteo.'
      },
      N: {
        name: 'Nigromante de Endor',
        role: 'Médium Proscrita',
        clueText: 'Evocou a figura que fixo tremer ao propio monarca tras esixir xuramento de impunidade.'
      },
      P: {
        name: 'Profeta Samuel',
        role: 'Espírito Invocado do Máis Alá',
        clueText: 'Apareceu cuberto co seu manto profético para ratificar a fin da dinastía de Saúl.'
      },
      C1: {
        name: 'Primeiro Escolta',
        role: 'Criado Confidente Real',
        clueText: 'Guiou a Saúl na escuridade da noite cara á aldea de Endor.'
      },
      C2: {
        name: 'Segundo Escolta',
        role: 'Criado Sentinela',
        clueText: 'Apostado no acceso do estábulo atento aos rumores dos montes.'
      }
    },
    clues: {
      c1: {
        text: 'O primeiro rei de Israel estaba aterrorizado ante o exército filisteo e Deus non lle respondía por ningún medio.',
        narrative: 'Saúl buscou oráculos divinos sen recibir resposta por soños nin por profetas.'
      },
      c2: {
        text: 'A pesar de ter prohibido a adiviñación no país, o rei disfrazouse de noite para consultar a unha médium en Endor.',
        narrative: 'O monarca quebrou o seu propio mandato real por desesperación.'
      },
      c3: {
        text: 'O rei fíxose acompañar de dúas escoltas e xurou por Deus á muller que non sufriría represalias.',
        narrative: 'Os dous gardas custodiaron o umbral asegurando o segredo.'
      },
      c4: {
        text: 'A médium invocou a un ancián envolto nun manto, a quen o rei recoñeceu de inmediato como o seu mentor falecido.',
        narrative: 'O espírito de Samuel subiu da terra co seu manto característico.'
      },
      c5: {
        text: 'En lugar de consolo, o espírito profetizoulle que ao día seguinte Yahvé entregaría o campamento e el morrería.',
        narrative: 'O oráculo lapidario anunciou a derrota inevitábel nos montes de Xelboé.'
      }
    }
  },

  // RETO 007-C: El Gigante Decapitado -> O Xigante Decapitado
  '007-C': {
    nombre: 'O Xigante Decapitado',
    categoria: 'Desenlaces de historias e parábolas',
    citasBiblicas: '1 Samuel 17, 1-54',
    textoBiblicoClave: 'David meteu a man no zurrón, tirou unha pedra, lanzouna coa fonda e feriu ao filisteo na testa.',
    contextoTeologico: 'É o paradigma bíblico da fraqueza fronte ao poder arrogante. O Vaticano usa esta pasaxe para ilustrar que as verdadeiras vitorias se acadan confiando na graza providencial de Deus, e non na tecnoloxía militar humana.',
    solucionExplicacion: 'David rexeitou a armadura de Saúl, enfrontándose ao xigante filisteo Goliat só coa súa fonda e cinco pedras. Tras atordalo cunha pedrada na testa, usou a espada do propio Goliat para cortarlle a cabeza.',
    storyIntro: 'Un exército enteiro treme ante un só guerreiro descomunal. Un mozo pastor rexeita a protección do rei e avanza cara á batalla armado unicamente con apeiros de campo e unha confianza inquebrantábel.',
    epilogue: '¡Triunfo da fe sobre a forza bruta! A pedra do regueiro fendeu a testa do xigante de seis cóbados. David tomou o aceiro de Goliat e cortoulle a cabeza ante a desbandada xeral das tropas filisteas.',
    subtitle: 'Desenlaces de historias e parábolas · 1 Samuel 17 · 5x5',
    badge: 'O XIGANTE DECAPITADO · 5x5',
    rooms: {
      valle_elah: {
        name: 'Val de Elah (Campo de Desafío)',
        shortName: 'Val Elah',
        description: 'Fondalada entre dous outeiros onde Goliat desafiou a Israel durante corenta días.'
      },
      torrente_guijarros: {
        name: 'Leito do Regato e Cantos Rodados',
        shortName: 'Regato Pedras',
        description: 'Regueiro seco onde o pastor colleu cinco pedras lisas para o seu zurrón.'
      },
      tienda_saul: {
        name: 'Tenda de Campaña de Saúl',
        shortName: 'Tenda Saúl',
        description: 'Posto de mando real onde David probou a pesada cota de malla de bronce e a rexeitou.'
      },
      campamento_israel: {
        name: 'Liña de Batalla de Israel',
        shortName: 'Liña Israel',
        description: 'Trincheira onde os soldados tremían ante os insultos do guerreiro de Gat.'
      },
      posicion_filisteos: {
        name: 'Outeiro dos Filisteos',
        shortName: 'Outeiro Filisteos',
        description: 'Outeiro inimigo onde agardaba o exército de Socó con carros de combate.'
      }
    },
    blockedObjects: {
      '0,1': {
        name: 'Armadura de Bronce Desbotada',
        description: 'Cota de malla de Saúl que David quitou por resultarlle inútil e pesada.'
      },
      '2,3': {
        name: 'Lanza Xigante coma Enxullo de Tear',
        description: 'Arma descomunal de Goliat con punta de ferro de seiscentos siclos.'
      },
      '4,0': {
        name: 'Zurrón Pastoril con Catro Cantos',
        description: 'Bolsa de coiro onde ficaron as pedras sobrantes tras o disparo certeiro.'
      }
    },
    suspects: {
      D: {
        name: 'David',
        role: 'Xove Pastor con Fonda',
        clueText: 'Avanzou cara ao combate no nome do Señor dos exércitos de Israel.'
      },
      G: {
        name: 'Goliat',
        role: 'Campión Filisteo de Gat',
        clueText: 'Desprezou ao rapaz louro e maldixo a Israel polos seus deuses pagáns.'
      },
      S: {
        name: 'Rei Saúl',
        role: 'Monarca de Israel',
        clueText: 'Ofreceu a man da súa filla e exención de tributos a quen derrotase ao xigante.'
      },
      E: {
        name: 'Eliab',
        role: 'Irmán Maior de David',
        clueText: 'Increpou a David acusándoo de abandonar as ovellas no deserto por vaidade.'
      },
      A: {
        name: 'Abner',
        role: 'Xeneral do Exército Hebreo',
        clueText: 'Presentou ao pastor ante o rei levando na man a cabeza ensanguentada do filisteo.'
      }
    },
    clues: {
      c1: {
        text: 'Durante corenta días, o campión filisteo desafiou aos exércitos de Israel sen que ninguén ousase loitar.',
        narrative: 'Goliat atemorizaba ás tropas cada mañá e cada serán.'
      },
      c2: {
        text: 'O irmán maior do mozo voluntario menosprezouno acusándoo de ir ao campamento só por curiosidade mórbida.',
        narrative: 'Eliab reprendeu con amargura a ousadía de David nas ringleiras.'
      },
      c3: {
        text: 'O rei ofreceu a súa propia armadura ao mozo, pero este quitouna porque non podía nin camiñar con ela.',
        narrative: 'Saúl vestiu a David cos seus arneses de bronce pero foron desbotados.'
      },
      c4: {
        text: 'O mozo avanzou co seu caxato pastoral, cinco cantos rodados do regato e unha fonda.',
        narrative: 'David baixou ao leito do regato coa confianza posta en Yahvé.'
      },
      c5: {
        text: 'Tras tombar ao xigante cunha pedra certeira, o mozo empregou a pesada espada do inimigo para decaptalo.',
        narrative: 'O xeneral Abner guiou ás tropas na persecución trala caída do campión.'
      }
    }
  }
};
