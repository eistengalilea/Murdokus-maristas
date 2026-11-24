import { RetoF, sala, objeto, pers, pista } from './base';

/**
 * RETOS FÁCILES (5x5 · 5 personajes) — Marcelino Champagnat y los primeros hermanos.
 * Fuentes: André Lanfrey, Historia del Instituto de los Hermanos Maristas, T. 1 (FMS Studia 3, 2015)
 *          y «Tras las huellas de Marcelino Champagnat» (Misión Educativa Marista, 2023).
 * Orden de los textos: [castellano, gallego, portugués de Portugal].
 */
export const FACILES: RetoF[] = [
  // ───────────────────────── 001 ─────────────────────────
  {
    id: '001-HM',
    nivel: 'easy',
    nombre: ['El maestro de Marlhes', 'O mestre de Marlhes', 'O mestre de Marlhes'],
    categoria: ['Infancia y escuela', 'Infancia e escola', 'Infância e escola'],
    fuente: ['Marlhes · Lanfrey T. 1, cap. 1; Tras las huellas, §3-5', 'Marlhes · Lanfrey T. 1, cap. 1; Tras las huellas, §3-5', 'Marlhes · Lanfrey T. 1, cap. 1; Tras las huellas, §3-5'],
    textoClave: [
      'Marcelino nació en Marlhes el 20 de mayo de 1789 y fue tarde a la escuela, donde estuvo poco tiempo.',
      'Marcelino naceu en Marlhes o 20 de maio de 1789 e foi tarde á escola, onde estivo pouco tempo.',
      'Marcelino nasceu em Marlhes a 20 de maio de 1789 e foi tarde para a escola, onde esteve pouco tempo.'
    ],
    contexto: [
      'Marlhes era un pueblo rural donde la mayoría de adultos y jóvenes apenas sabían leer. Los maestros eran poco competentes y a veces maltrataban a los alumnos. Años después, Marcelino se esforzará por crear un clima de buen trato con los niños.',
      'Marlhes era unha vila rural onde a maioría de adultos e mozos apenas sabían ler. Os mestres eran pouco competentes e ás veces maltrataban o alumnado. Anos despois, Marcelino esforzarase por crear un clima de bo trato cos nenos.',
      'Marlhes era uma vila rural onde a maioria dos adultos e jovens mal sabia ler. Os mestres eram pouco competentes e por vezes maltratavam os alunos. Anos depois, Marcelino esforçar-se-á por criar um clima de bom trato com as crianças.'
    ],
    explicacion: [
      'El responsable de que Marcelino dejara la escuela fue el maestro Barthélemy Moine, que unía permisividad y brutalidad con el método individual. Marcelino aprendió lo bastante para conocer bien el catecismo antes de la primera comunión y después volvió al trabajo de la granja.',
      'O responsable de que Marcelino deixase a escola foi o mestre Barthélemy Moine, que xuntaba permisividade e brutalidade co método individual. Marcelino aprendeu o suficiente para coñecer ben o catecismo antes da primeira comuñón e despois volveu ao traballo da granxa.',
      'O responsável por Marcelino ter deixado a escola foi o mestre Barthélemy Moine, que juntava permissividade e brutalidade com o método individual. Marcelino aprendeu o suficiente para conhecer bem o catecismo antes da primeira comunhão e depois voltou ao trabalho da quinta.'
    ],
    intro: [
      'Marlhes, finales del siglo XVIII. Un niño despierto pero sensible deja de ir a la escuela y en casa nadie sabe bien por qué. Ayuda a reconstruir dónde estaba cada uno para descubrir quién le hizo la vida imposible en el aula.',
      'Marlhes, finais do século XVIII. Un neno esperto pero sensible deixa de ir á escola e na casa ninguén sabe ben por que. Axuda a reconstruír onde estaba cada quen para descubrir quen llo puxo difícil na aula.',
      'Marlhes, finais do século XVIII. Um menino esperto mas sensível deixa de ir à escola e em casa ninguém sabe bem porquê. Ajuda a reconstruir onde estava cada um para descobrir quem lhe tornou a vida difícil na sala de aula.'
    ],
    epilogo: [
      '¡Caso resuelto! Moine quedó señalado: la brutalidad del aula alejó a Marcelino de la escuela. Aquella experiencia dolorosa y su vuelta a la granja forjaron al futuro educador de niños.',
      'Caso resolto! Moine quedou sinalado: a brutalidade da aula afastou Marcelino da escola. Aquela experiencia dolorosa e a súa volta á granxa forxaron o futuro educador de nenos.',
      'Caso resolvido! Moine ficou apontado: a brutalidade da sala de aula afastou Marcelino da escola. Aquela experiência dolorosa e o regresso à quinta forjaram o futuro educador de crianças.'
    ],
    salas: [
      sala('escuela_moine', 'red', ['Escuela del maestro Moine', 'Escuela Moine', 'Aula donde el maestro enseñaba con el método individual.'], ['Escola do mestre Moine', 'Escola Moine', 'Aula onde o mestre ensinaba co método individual.'], ['Escola do mestre Moine', 'Escola Moine', 'Sala onde o mestre ensinava com o método individual.']),
      sala('casa_champagnat', 'amber', ['Casa de los Champagnat', 'Casa Champagnat', 'Hogar de una familia rural más instruida que la media.'], ['Casa dos Champagnat', 'Casa Champagnat', 'Fogar dunha familia rural máis instruída ca a media.'], ['Casa dos Champagnat', 'Casa Champagnat', 'Lar de uma família rural mais instruída do que a média.']),
      sala('iglesia_marlhes', 'purple', ['Iglesia de Marlhes', 'Iglesia Marlhes', 'Templo donde Marcelino se preparó para la primera comunión.'], ['Igrexa de Marlhes', 'Igrexa Marlhes', 'Templo onde Marcelino se preparou para a primeira comuñón.'], ['Igreja de Marlhes', 'Igreja Marlhes', 'Templo onde Marcelino se preparou para a primeira comunhão.']),
      sala('molino', 'sky', ['Molino hidráulico', 'Molino', 'Pequeño molino que explotaba el padre de Marcelino.'], ['Muíño hidráulico', 'Muíño', 'Pequeno muíño que explotaba o pai de Marcelino.'], ['Moinho hidráulico', 'Moinho', 'Pequeno moinho explorado pelo pai de Marcelino.']),
      sala('granja', 'emerald', ['Granja familiar', 'Granja', 'Tierras y establo donde Marcelino trabajó de joven.'], ['Granxa familiar', 'Granxa', 'Terras e establo onde Marcelino traballou de novo.'], ['Quinta familiar', 'Quinta', 'Terras e estábulo onde Marcelino trabalhou em jovem.'])
    ],
    objetos: [
      objeto('escuela_moine', '📖', ['Catecismo', 'Libro con el que aprendió la doctrina antes de la primera comunión.'], ['Catecismo', 'Libro co que aprendeu a doutrina antes da primeira comuñón.'], ['Catecismo', 'Livro com que aprendeu a doutrina antes da primeira comunhão.']),
      objeto('granja', '🐑', ['Corderos', 'Animales que Marcelino criaba y vendía de adolescente.'], ['Años', 'Animais que Marcelino criaba e vendía de adolescente.'], ['Cordeiros', 'Animais que Marcelino criava e vendia em adolescente.']),
      objeto('molino', '⚙️', ['Rueda del molino', 'Mecanismo del pequeño molino familiar.'], ['Roda do muíño', 'Mecanismo do pequeno muíño familiar.'], ['Roda do moinho', 'Mecanismo do pequeno moinho familiar.'])
    ],
    personajes: [
      pers('MC', 'escuela_moine', 'V', '👦', ['Marcelino Champagnat', 'Niño de Marlhes', 'Aprendió el catecismo y a leer, pero rechazó seguir en el aula tras la primera comunión.'], ['Marcelino Champagnat', 'Neno de Marlhes', 'Aprendeu o catecismo e a ler, pero rexeitou seguir na aula tras a primeira comuñón.'], ['Marcelino Champagnat', 'Menino de Marlhes', 'Aprendeu o catecismo e a ler, mas recusou continuar na sala depois da primeira comunhão.']),
      pers('BM', 'escuela_moine', 'M', '🧑‍🏫', ['Barthélemy Moine', 'Maestro del pueblo', 'Enseñaba cada alumno por separado y combinaba el desorden con los golpes.'], ['Barthélemy Moine', 'Mestre da vila', 'Ensinaba cada alumno por separado e combinaba a desorde cos golpes.'], ['Barthélemy Moine', 'Mestre da vila', 'Ensinava cada aluno em separado e combinava a desordem com as pancadas.']),
      pers('JB', 'molino', '', '👨', ['Jean-Baptiste Champagnat', 'Padre y propietario', 'Sabía escribir bien, fue secretario del municipio y mantenía en marcha su pequeño negocio.'], ['Jean-Baptiste Champagnat', 'Pai e propietario', 'Sabía escribir ben, foi secretario do concello e mantiña en marcha o seu pequeno negocio.'], ['Jean-Baptiste Champagnat', 'Pai e proprietário', 'Sabia escrever bem, foi secretário do município e mantinha em funcionamento o seu pequeno negócio.']),
      pers('MT', 'casa_champagnat', '', '👩', ['Marie-Thérèse Chirat', 'Madre de familia', 'Le enseñó a rezar y despertó en él la devoción a María.'], ['Marie-Thérèse Chirat', 'Nai de familia', 'Ensinoulle a rezar e espertou nel a devoción a María.'], ['Marie-Thérèse Chirat', 'Mãe de família', 'Ensinou-o a rezar e despertou nele a devoção a Maria.']),
      pers('LO', 'iglesia_marlhes', '', '🧕', ['Tía Louise', 'Antigua religiosa', 'Expulsada de su convento por la Revolución, la acogió su hermano y fue guía en la fe del niño.'], ['Tía Louise', 'Antiga relixiosa', 'Expulsada do seu convento pola Revolución, acolleuna o seu irmán e foi guía na fe do neno.'], ['Tia Louise', 'Antiga religiosa', 'Expulsa do seu convento pela Revolução, foi acolhida pelo irmão e foi guia na fé do menino.'])
    ],
    pistas: [
      pista('Marcelino nació en 1789, en plena Revolución Francesa, en una familia rural con más instrucción que la media.', 'Marcelino naceu en 1789, en plena Revolución Francesa, nunha familia rural con máis instrución ca a media.', 'Marcelino nasceu em 1789, em plena Revolução Francesa, numa família rural com mais instrução do que a média.', 'MC,JB'),
      pista('El maestro practicaba el método individual: cada alumno por separado y sin orden.', 'O mestre practicaba o método individual: cada alumno por separado e sen orde.', 'O mestre praticava o método individual: cada aluno em separado e sem ordem.', 'BM'),
      pista('Aun así, Marcelino aprendió el catecismo y a leer antes de su primera comunión.', 'Aínda así, Marcelino aprendeu o catecismo e a ler antes da súa primeira comuñón.', 'Ainda assim, Marcelino aprendeu o catecismo e a ler antes da sua primeira comunhão.', 'MC'),
      pista('Tras dejar la escuela, el adolescente volvió a ayudar en el trabajo familiar del campo.', 'Tras deixar a escola, o adolescente volveu axudar no traballo familiar do campo.', 'Depois de deixar a escola, o adolescente voltou a ajudar no trabalho familiar do campo.', 'MC')
    ]
  },
  // ───────────────────────── 002 ─────────────────────────
  {
    id: '002-HM',
    nivel: 'easy',
    nombre: ['La visita de Pascua', 'A visita de Pascua', 'A visita da Páscoa'],
    categoria: ['Vocación y estudios', 'Vocación e estudos', 'Vocação e estudos'],
    fuente: ['Marlhes · Lanfrey T. 1, cap. 1', 'Marlhes · Lanfrey T. 1, cap. 1', 'Marlhes · Lanfrey T. 1, cap. 1'],
    textoClave: [
      'Por la Pascua de 1804, un presbítero visitó a la familia Champagnat y animó a Marcelino a estudiar latín.',
      'Pola Pascua de 1804, un presbítero visitou a familia Champagnat e animou Marcelino a estudar latín.',
      'Pela Páscoa de 1804, um presbítero visitou a família Champagnat e animou Marcelino a estudar latim.'
    ],
    contexto: [
      'Tras el Concordato de 1801 se crearon seminarios menores en zonas rurales, y sus profesores recorrían los pueblos en vacaciones buscando alumnos. La visita llegó tras la muerte de dos hermanos de Marcelino; su padre murió en junio de 1804. El proyecto de estudiar siguió adelante.',
      'Tras o Concordato de 1801 creáronse seminarios menores en zonas rurais, e os seus profesores percorrían as vilas nas vacacións buscando alumnado. A visita chegou tras a morte de dous irmáns de Marcelino; o seu pai morreu en xuño de 1804. O proxecto de estudar seguiu adiante.',
      'Depois da Concordata de 1801 criaram-se seminários menores em zonas rurais, e os seus professores percorriam as aldeias nas férias à procura de alunos. A visita chegou depois da morte de dois irmãos de Marcelino; o pai morreu em junho de 1804. O projeto de estudar seguiu em frente.'
    ],
    explicacion: [
      'El responsable fue un presbítero reclutador de un seminario menor, cuya identidad no está clara en las fuentes. Marcelino, con 15 años, era el único hijo de la casa que aún podía desear largos estudios, y aceptó empezar por el latín.',
      'O responsable foi un presbítero reclutador dun seminario menor, cuxa identidade non está clara nas fontes. Marcelino, con 15 anos, era o único fillo da casa que aínda podía desexar longos estudos, e aceptou comezar polo latín.',
      'O responsável foi um presbítero recrutador de um seminário menor, cuja identidade não está clara nas fontes. Marcelino, com 15 anos, era o único filho da casa que ainda podia desejar estudos longos, e aceitou começar pelo latim.'
    ],
    intro: [
      'Marlhes, Pascua de 1804. Un desconocido con sotana entra en casa de los Champagnat y, cuando se marcha, la vida de un adolescente ha cambiado de rumbo. ¿Quién fue el visitante que lo decidió todo?',
      'Marlhes, Pascua de 1804. Un descoñecido con sotana entra na casa dos Champagnat e, cando marcha, a vida dun adolescente cambiou de rumbo. Quen foi o visitante que o decidiu todo?',
      'Marlhes, Páscoa de 1804. Um desconhecido de batina entra em casa dos Champagnat e, quando sai, a vida de um adolescente mudou de rumo. Quem foi o visitante que decidiu tudo?'
    ],
    epilogo: [
      '¡Caso resuelto! El presbítero reclutador dio a Marcelino la oportunidad de estudiar. Aquel primer paso, nacido de una familia golpeada por el luto, le llevaría a Verrières y, años después, a La Valla.',
      'Caso resolto! O presbítero reclutador deulle a Marcelino a oportunidade de estudar. Aquel primeiro paso, nacido dunha familia golpeada polo loito, levaríao a Verrières e, anos despois, a La Valla.',
      'Caso resolvido! O presbítero recrutador deu a Marcelino a oportunidade de estudar. Esse primeiro passo, nascido de uma família atingida pelo luto, levá-lo-ia a Verrières e, anos depois, a La Valla.'
    ],
    salas: [
      sala('casa_champagnat', 'amber', ['Casa de los Champagnat', 'Casa Champagnat', 'Hogar donde se decidió el futuro de Marcelino.'], ['Casa dos Champagnat', 'Casa Champagnat', 'Fogar onde se decidiu o futuro de Marcelino.'], ['Casa dos Champagnat', 'Casa Champagnat', 'Lar onde se decidiu o futuro de Marcelino.']),
      sala('casa_parroquial', 'purple', ['Casa parroquial de Marlhes', 'Parroquial', 'Residencia del párroco del pueblo.'], ['Casa reitoral de Marlhes', 'Reitoral', 'Residencia do párroco da vila.'], ['Casa paroquial de Marlhes', 'Paroquial', 'Residência do pároco da vila.']),
      sala('granja', 'emerald', ['Granja y campos', 'Granja', 'Tierras de labor de la familia.'], ['Granxa e campos', 'Granxa', 'Terras de labor da familia.'], ['Quinta e campos', 'Quinta', 'Terras de lavoura da família.']),
      sala('camino_verrieres', 'sky', ['Camino hacia Verrières', 'Camino Verrières', 'Ruta hacia el seminario menor.'], ['Camiño cara a Verrières', 'Camiño Verrières', 'Ruta cara ao seminario menor.'], ['Caminho para Verrières', 'Caminho Verrières', 'Rota para o seminário menor.']),
      sala('plaza_marlhes', 'stone', ['Plaza de Marlhes', 'Plaza', 'Centro del pueblo, junto a la iglesia.'], ['Praza de Marlhes', 'Praza', 'Centro da vila, xunto á igrexa.'], ['Praça de Marlhes', 'Praça', 'Centro da vila, junto à igreja.'])
    ],
    objetos: [
      objeto('camino_verrieres', '📚', ['Gramática latina', 'Libro con el que Marcelino empezaría a estudiar.'], ['Gramática latina', 'Libro co que Marcelino empezaría a estudar.'], ['Gramática latina', 'Livro com que Marcelino começaria a estudar.']),
      objeto('granja', '🐑', ['Redil de corderos', 'Su afición de adolescente: criar y vender corderos.'], ['Redil de años', 'A súa afección de adolescente: criar e vender años.'], ['Redil de cordeiros', 'O seu gosto de adolescente: criar e vender cordeiros.']),
      objeto('plaza_marlhes', '🔔', ['Campana del pueblo', 'Campana que tocaba por los difuntos de la familia.'], ['Campá da vila', 'Campá que tocaba polos defuntos da familia.'], ['Sino da vila', 'Sino que dobrava pelos defuntos da família.'])
    ],
    personajes: [
      pers('MC', 'casa_champagnat', 'V', '🧑', ['Marcelino Champagnat', 'Joven de 15 años', 'Era el único hijo de la casa que aún podía desear largos estudios.'], ['Marcelino Champagnat', 'Mozo de 15 anos', 'Era o único fillo da casa que aínda podía desexar longos estudos.'], ['Marcelino Champagnat', 'Jovem de 15 anos', 'Era o único filho da casa que ainda podia desejar estudos longos.']),
      pers('PR', 'casa_champagnat', 'M', '🧑‍🏫', ['Presbítero reclutador', 'Profesor de seminario menor', 'Recorría las zonas rurales en vacaciones buscando alumnos para el latín.'], ['Presbítero reclutador', 'Profesor de seminario menor', 'Percorría as zonas rurais nas vacacións buscando alumnado para o latín.'], ['Presbítero recrutador', 'Professor de seminário menor', 'Percorria as zonas rurais nas férias à procura de alunos para o latim.']),
      pers('AL', 'casa_parroquial', '', '👴', ['Párroco Allirot', 'Párroco de Marlhes', 'Permaneció en su puesto durante toda la Revolución y trataba bien a la familia.'], ['Párroco Allirot', 'Párroco de Marlhes', 'Permaneceu no seu posto durante toda a Revolución e trataba ben a familia.'], ['Pároco Allirot', 'Pároco de Marlhes', 'Permaneceu no seu posto durante toda a Revolução e dava-se bem com a família.']),
      pers('JA', 'granja', '', '👨‍🌾', ['Jean-Barthélemy', 'Hermano mayor', 'Con 26 años, la pregunta del visitante no iba con él.'], ['Jean-Barthélemy', 'Irmán maior', 'Con 26 anos, a pregunta do visitante non ía con el.'], ['Jean-Barthélemy', 'Irmão mais velho', 'Com 26 anos, a pergunta do visitante não era para ele.']),
      pers('JP', 'granja', '', '🧒', ['Jean-Pierre', 'Hermano de 16 años', 'Según el relato, el visitante también le preguntó a él.'], ['Jean-Pierre', 'Irmán de 16 anos', 'Segundo o relato, o visitante tamén lle preguntou a el.'], ['Jean-Pierre', 'Irmão de 16 anos', 'Segundo o relato, o visitante também lhe perguntou a ele.'])
    ],
    pistas: [
      pista('La visita ocurrió por la Pascua de 1804, poco antes de que muriera el padre de la familia.', 'A visita ocorreu pola Pascua de 1804, pouco antes de que morrese o pai da familia.', 'A visita ocorreu pela Páscoa de 1804, pouco antes de o pai da família morrer.', 'MC,PR'),
      pista('El visitante no buscaba solo sacerdotes: quería alumnos para estudiar latín.', 'O visitante non buscaba só sacerdotes: quería alumnado para estudar latín.', 'O visitante não procurava apenas padres: queria alunos para estudar latim.', 'PR'),
      pista('Para la visita hizo falta el acuerdo del párroco, que conocía bien a los Champagnat.', 'Para a visita fixo falta o acordo do párroco, que coñecía ben os Champagnat.', 'Para a visita foi necessário o acordo do pároco, que conhecia bem os Champagnat.', 'AL'),
      pista('Por costumbre, la finca se reservaba al hermano mayor; Marcelino era el pequeño de los tres chicos.', 'Por costume, a leira reservábase ao irmán maior; Marcelino era o máis novo dos tres rapaces.', 'Por costume, a propriedade reservava-se ao irmão mais velho; Marcelino era o mais novo dos três rapazes.', 'JA,MC')
    ]
  },
  // ───────────────────────── 003 ─────────────────────────
  {
    id: '003-HM',
    nivel: 'easy',
    nombre: ['La peregrinación a La Louvesc', 'A peregrinación a La Louvesc', 'A peregrinação a La Louvesc'],
    categoria: ['Vocación y estudios', 'Vocación e estudos', 'Vocação e estudos'],
    fuente: ['Marlhes · Lanfrey T. 1, cap. 1', 'Marlhes · Lanfrey T. 1, cap. 1', 'Marlhes · Lanfrey T. 1, cap. 1'],
    textoClave: [
      'Tras un año de estudios flojos, la madre de Marcelino propuso una peregrinación a La Louvesc.',
      'Tras un ano de estudos frouxos, a nai de Marcelino propuxo unha peregrinación a La Louvesc.',
      'Depois de um ano de estudos fracos, a mãe de Marcelino propôs uma peregrinação a La Louvesc.'
    ],
    contexto: [
      'Marcelino comenzó estudiando con su cuñado Benoît Arnaud, que dirigía un pequeño colegio con una docena de alumnos. Los resultados parecieron insuficientes. Este fracaso inicial marcó toda su vida: él mismo lo recordó varias veces.',
      'Marcelino comezou estudando co seu cuñado Benoît Arnaud, que dirixía un pequeno colexio cunha ducia de alumnos. Os resultados parecéronlle insuficientes. Este fracaso inicial marcou toda a súa vida: el mesmo o lembrou varias veces.',
      'Marcelino começou a estudar com o cunhado Benoît Arnaud, que dirigia um pequeno colégio com uma dúzia de alunos. Os resultados pareceram insuficientes. Este fracasso inicial marcou toda a sua vida: ele próprio o recordou várias vezes.'
    ],
    explicacion: [
      'Benoît Arnaud, antiguo seminarista y cuñado de Marcelino, consideró insuficientes sus resultados y trató de persuadirle de que renunciara. Su madre le animó a peregrinar a La Louvesc, donde se venera a san Juan Francisco Régis, y Marcelino siguió adelante.',
      'Benoît Arnaud, antigo seminarista e cuñado de Marcelino, considerou insuficientes os seus resultados e tratou de convencelo de que renunciase. A súa nai animouno a peregrinar a La Louvesc, onde se venera san Xoán Francisco Régis, e Marcelino seguiu adiante.',
      'Benoît Arnaud, antigo seminarista e cunhado de Marcelino, considerou insuficientes os seus resultados e tentou convencê-lo a desistir. A mãe animou-o a peregrinar a La Louvesc, onde se venera são João Francisco Régis, e Marcelino prosseguiu.'
    ],
    intro: [
      'Año 1804-1805. El joven Marcelino no avanza en el latín y alguien de la familia cree que lo mejor es que abandone. Su madre no está de acuerdo. ¿Quién quiso cortar su camino?',
      'Ano 1804-1805. O mozo Marcelino non avanza no latín e alguén da familia cre que o mellor é que o abandone. A súa nai non está de acordo. Quen quixo cortarlle o camiño?',
      'Ano 1804-1805. O jovem Marcelino não avança no latim e alguém da família acha que o melhor é desistir. A mãe não concorda. Quem quis cortar-lhe o caminho?'
    ],
    epilogo: [
      '¡Caso resuelto! Benoît Arnaud quiso que renunciara, pero la fe de una madre y una peregrinación cambiaron el rumbo. Marcelino entró en Verrières y llegó a sacerdote.',
      'Caso resolto! Benoît Arnaud quixo que renunciase, pero a fe dunha nai e unha peregrinación cambiaron o rumbo. Marcelino entrou en Verrières e chegou a sacerdote.',
      'Caso resolvido! Benoît Arnaud queria que desistisse, mas a fé de uma mãe e uma peregrinação mudaram o rumo. Marcelino entrou em Verrières e chegou a sacerdote.'
    ],
    salas: [
      sala('colegio_arnaud', 'red', ['Colegio de Benoît Arnaud (Saint-Sauveur-en-Rue)', 'Colegio Arnaud', 'Pequeño colegio con una docena de alumnos.'], ['Colexio de Benoît Arnaud (Saint-Sauveur-en-Rue)', 'Colexio Arnaud', 'Pequeno colexio cunha ducia de alumnos.'], ['Colégio de Benoît Arnaud (Saint-Sauveur-en-Rue)', 'Colégio Arnaud', 'Pequeno colégio com uma dúzia de alunos.']),
      sala('louvesc', 'purple', ['Santuario de La Louvesc', 'La Louvesc', 'Lugar de peregrinación a san Juan Francisco Régis.'], ['Santuario de La Louvesc', 'La Louvesc', 'Lugar de peregrinación a san Xoán Francisco Régis.'], ['Santuário de La Louvesc', 'La Louvesc', 'Lugar de peregrinação a são João Francisco Régis.']),
      sala('casa_champagnat', 'amber', ['Casa de los Champagnat', 'Casa Champagnat', 'Hogar de la familia en Marlhes.'], ['Casa dos Champagnat', 'Casa Champagnat', 'Fogar da familia en Marlhes.'], ['Casa dos Champagnat', 'Casa Champagnat', 'Lar da família em Marlhes.']),
      sala('seminario_verrieres', 'emerald', ['Seminario menor de Verrières', 'Verrières', 'Colegio-seminario donde Marcelino entró más tarde.'], ['Seminario menor de Verrières', 'Verrières', 'Colexio-seminario onde Marcelino entrou máis tarde.'], ['Seminário menor de Verrières', 'Verrières', 'Colégio-seminário onde Marcelino entrou mais tarde.']),
      sala('plaza_marlhes', 'stone', ['Plaza de Marlhes', 'Plaza Marlhes', 'Donde se contaban las historias del pueblo.'], ['Praza de Marlhes', 'Praza Marlhes', 'Onde se contaban as historias da vila.'], ['Praça de Marlhes', 'Praça Marlhes', 'Onde se contavam as histórias da vila.'])
    ],
    objetos: [
      objeto('colegio_arnaud', '📓', ['Cuaderno de aritmética', 'Ejercicios del colegio: lectura, aritmética, historia y latín.'], ['Caderno de aritmética', 'Exercicios do colexio: lectura, aritmética, historia e latín.'], ['Caderno de aritmética', 'Exercícios do colégio: leitura, aritmética, história e latim.']),
      objeto('louvesc', '🕊️', ['Tumba de san Juan Francisco Régis', 'Meta de la peregrinación.'], ['Tumba de san Xoán Francisco Régis', 'Meta da peregrinación.'], ['Túmulo de são João Francisco Régis', 'Meta da peregrinação.']),
      objeto('casa_champagnat', '🎒', ['Zurrón de camino', 'Equipaje sencillo para el viaje a pie.'], ['Zurrón de camiño', 'Equipaxe sinxela para a viaxe a pé.'], ['Alforje de caminho', 'Bagagem simples para a viagem a pé.'])
    ],
    personajes: [
      pers('MC', 'colegio_arnaud', 'V', '🧑', ['Marcelino Champagnat', 'Alumno de 15 años', 'Estudiaba con esfuerzo, pero sus primeros resultados fueron flojos.'], ['Marcelino Champagnat', 'Alumno de 15 anos', 'Estudaba con esforzo, pero os seus primeiros resultados foron frouxos.'], ['Marcelino Champagnat', 'Aluno de 15 anos', 'Estudava com esforço, mas os seus primeiros resultados foram fracos.']),
      pers('BA', 'colegio_arnaud', 'M', '👨‍🏫', ['Benoît Arnaud', 'Cuñado y maestro', 'Antiguo seminarista que, tras un año, trató de disuadirle de seguir.'], ['Benoît Arnaud', 'Cuñado e mestre', 'Antigo seminarista que, tras un ano, tratou de disuadilo de seguir.'], ['Benoît Arnaud', 'Cunhado e mestre', 'Antigo seminarista que, ao fim de um ano, tentou dissuadi-lo de continuar.']),
      pers('MT', 'louvesc', '', '👩', ['Marie-Thérèse Chirat', 'Madre de Marcelino', 'Le levantó el ánimo y le propuso peregrinar.'], ['Marie-Thérèse Chirat', 'Nai de Marcelino', 'Levantoulle o ánimo e propúxolle peregrinar.'], ['Marie-Thérèse Chirat', 'Mãe de Marcelino', 'Levantou-lhe o ânimo e propôs-lhe peregrinar.']),
      pers('SU', 'seminario_verrieres', '', '🧑‍🏫', ['Superior del seminario menor', 'Responsable de Verrières', 'Según una tradición, creyó que el chico no tenía talento y luego lo admitió.'], ['Superior do seminario menor', 'Responsable de Verrières', 'Segundo unha tradición, creu que o rapaz non tiña talento e despois admitiuno.'], ['Superior do seminário menor', 'Responsável de Verrières', 'Segundo uma tradição, achou que o rapaz não tinha talento e depois admitiu-o.']),
      pers('JE', 'plaza_marlhes', '', '👵', ['Jullienne Épalle', 'Testigo de Marlhes', 'Recordó la historia años después, en el proceso de beatificación.'], ['Jullienne Épalle', 'Testemuña de Marlhes', 'Lembrou a historia anos despois, no proceso de beatificación.'], ['Jullienne Épalle', 'Testemunha de Marlhes', 'Recordou a história anos depois, no processo de beatificação.'])
    ],
    pistas: [
      pista('Su cuñado dirigía un pequeño colegio donde enseñaba lectura, aritmética, geografía, historia y latín.', 'O seu cuñado dirixía un pequeno colexio onde ensinaba lectura, aritmética, xeografía, historia e latín.', 'O cunhado dirigia um pequeno colégio onde ensinava leitura, aritmética, geografia, história e latim.', 'BA'),
      pista('Al cabo de un año, los resultados parecieron pobres y se temió gastar dinero inútilmente en una familia endeudada.', 'Ao cabo dun ano, os resultados semellaron pobres e temeuse gastar cartos inutilmente nunha familia endebedada.', 'Ao fim de um ano, os resultados pareceram pobres e temeu-se gastar dinheiro inutilmente numa família endividada.', 'MC,BA'),
      pista('La madre propuso ir en peregrinación junto a la tumba de san Juan Francisco Régis.', 'A nai propuxo ir en peregrinación xunto á tumba de san Xoán Francisco Régis.', 'A mãe propôs ir em peregrinação junto ao túmulo de são João Francisco Régis.', 'MT'),
      pista('Después de la peregrinación, Marcelino fue admitido y aquel año superó dos clases.', 'Despois da peregrinación, Marcelino foi admitido e aquel ano superou dous cursos.', 'Depois da peregrinação, Marcelino foi admitido e nesse ano passou duas classes.', 'MC,SU')
    ]
  },
  // ───────────────────────── 004 ─────────────────────────
  {
    id: '004-HM',
    nivel: 'easy',
    nombre: ['El juramento de Fourvière', 'O xuramento de Fourvière', 'O juramento de Fourvière'],
    categoria: ['Orígenes de la Sociedad de María', 'Orixes da Sociedade de María', 'Origens da Sociedade de Maria'],
    fuente: ['Lyon · Lanfrey T. 1, cap. 1; Tras las huellas, §7', 'Lyon · Lanfrey T. 1, cap. 1; Tras las huellas, §7', 'Lyon · Lanfrey T. 1, cap. 1; Tras las huellas, §7'],
    textoClave: [
      'El 23 de julio de 1816, un día después de su ordenación, una docena de aspirantes subió a Fourvière para prometer fundar la Sociedad de María.',
      'O 23 de xullo de 1816, un día despois da súa ordenación, unha ducia de aspirantes subiu a Fourvière para prometer fundar a Sociedade de María.',
      'A 23 de julho de 1816, um dia depois da ordenação, uma dúzia de aspirantes subiu a Fourvière para prometer fundar a Sociedade de Maria.'
    ],
    contexto: [
      'Jean-Claude Courveille creyó recibir en 1812, en la catedral del Puy, la inspiración de fundar una Sociedad de María. Ya en Saint-Irénée reunió a unos doce compañeros, entre ellos Marcelino. La Sociedad se imaginó con sacerdotes, hermanas y laicos, y Marcelino insistió en una rama de Hermanos para educar.',
      'Jean-Claude Courveille creu recibir en 1812, na catedral do Puy, a inspiración de fundar unha Sociedade de María. Xa en Saint-Irénée reuniu uns doce compañeiros, entre eles Marcelino. A Sociedade imaxinouse con sacerdotes, irmás e laicos, e Marcelino insistiu nunha rama de Irmáns para educar.',
      'Jean-Claude Courveille acreditou receber em 1812, na catedral do Puy, a inspiração de fundar uma Sociedade de Maria. Já em Saint-Irénée reuniu cerca de doze companheiros, entre eles Marcelino. A Sociedade foi pensada com sacerdotes, irmãs e leigos, e Marcelino insistiu num ramo de Irmãos para educar.'
    ],
    explicacion: [
      'El instigador fue Jean-Claude Courveille, el seminarista que creyó recibir la inspiración de fundar la Sociedad de María y que reunió al grupo. Marcelino, atraído por el proyecto, subió con él a Fourvière en la mañana del juramento, antes de que el grupo se completara.',
      'O instigador foi Jean-Claude Courveille, o seminarista que creu recibir a inspiración de fundar a Sociedade de María e que reuniu o grupo. Marcelino, atraído polo proxecto, subiu con el a Fourvière na mañá do xuramento, antes de que o grupo se completase.',
      'O instigador foi Jean-Claude Courveille, o seminarista que acreditou receber a inspiração de fundar a Sociedade de Maria e que reuniu o grupo. Marcelino, atraído pelo projeto, subiu com ele a Fourvière na manhã do juramento, antes de o grupo se completar.'
    ],
    intro: [
      'Lyon, 23 de julio de 1816. Un grupo de recién ordenados prepara una promesa secreta en el santuario de Fourvière. Antes de que lleguen los demás, dos de ellos están a solas en la capilla. ¿Quién arrastró a Marcelino a esta aventura?',
      'Lyon, 23 de xullo de 1816. Un grupo de recén ordenados prepara unha promesa secreta no santuario de Fourvière. Antes de que cheguen os demais, dous deles están a soas na capela. Quen arrastrou Marcelino a esta aventura?',
      'Lyon, 23 de julho de 1816. Um grupo de recém-ordenados prepara uma promessa secreta no santuário de Fourvière. Antes de chegarem os restantes, dois deles estão a sós na capela. Quem arrastou Marcelino para esta aventura?'
    ],
    epilogo: [
      '¡Caso resuelto! Courveille había soñado la Sociedad de María y Marcelino la hizo suya. Del juramento de Fourvière nacería, con los años, la rama de los Hermanos Maristas.',
      'Caso resolto! Courveille soñara a Sociedade de María e Marcelino fíxoa súa. Do xuramento de Fourvière nacería, cos anos, a rama dos Irmáns Maristas.',
      'Caso resolvido! Courveille sonhara a Sociedade de Maria e Marcelino fê-la sua. Do juramento de Fourvière nasceria, com os anos, o ramo dos Irmãos Maristas.'
    ],
    salas: [
      sala('fourviere', 'sky', ['Santuario de Fourvière', 'Fourvière', 'Santuario mariano de Lyon, en lo alto de la colina.'], ['Santuario de Fourvière', 'Fourvière', 'Santuario mariano de Lyon, no alto do outeiro.'], ['Santuário de Fourvière', 'Fourvière', 'Santuário mariano de Lyon, no alto da colina.']),
      sala('seminario_irenee', 'purple', ['Seminario de Saint-Irénée', 'Saint-Irénée', 'Seminario mayor de Lyon, foco de fervor y resistencia.'], ['Seminario de Saint-Irénée', 'Saint-Irénée', 'Seminario maior de Lyon, foco de fervor e resistencia.'], ['Seminário de Saint-Irénée', 'Saint-Irénée', 'Seminário maior de Lyon, foco de fervor e resistência.']),
      sala('catedral_puy', 'amber', ['Catedral del Puy', 'Catedral Puy', 'Donde Courveille creyó recibir la inspiración en 1812.'], ['Catedral do Puy', 'Catedral Puy', 'Onde Courveille creu recibir a inspiración en 1812.'], ['Catedral do Puy', 'Catedral Puy', 'Onde Courveille acreditou receber a inspiração em 1812.']),
      sala('calles_lyon', 'stone', ['Calles de Lyon', 'Calles Lyon', 'Cuestas y plazas entre el seminario y la colina.'], ['Rúas de Lyon', 'Rúas Lyon', 'Costas e prazas entre o seminario e o outeiro.'], ['Ruas de Lyon', 'Ruas Lyon', 'Ladeiras e praças entre o seminário e a colina.']),
      sala('rio_saona', 'teal', ['Orillas del Saona', 'Saona', 'Paseo junto al río, al pie de la colina.'], ['Beiras do Saona', 'Saona', 'Paseo xunto ao río, ao pé do outeiro.'], ['Margens do Saona', 'Saona', 'Passeio junto ao rio, ao pé da colina.'])
    ],
    objetos: [
      objeto('fourviere', '🕯️', ['Vela del altar', 'Luz ante la imagen de María.'], ['Vela do altar', 'Luz ante a imaxe de María.'], ['Vela do altar', 'Luz diante da imagem de Maria.']),
      objeto('seminario_irenee', '📜', ['Texto de la promesa', 'Fórmula del juramento, a favor de la gloria de Dios y el honor de María.'], ['Texto da promesa', 'Fórmula do xuramento, para gloria de Deus e honra de María.'], ['Texto da promessa', 'Fórmula do juramento, para glória de Deus e honra de Maria.']),
      objeto('catedral_puy', '⛪', ['Altar del Puy', 'Lugar de la inspiración del 15 de agosto de 1812.'], ['Altar do Puy', 'Lugar da inspiración do 15 de agosto de 1812.'], ['Altar do Puy', 'Lugar da inspiração de 15 de agosto de 1812.'])
    ],
    personajes: [
      pers('MC', 'fourviere', 'V', '🧑', ['Marcelino Champagnat', 'Recién ordenado', 'Fue ordenado presbítero el 22 de julio y al día siguiente subió a Fourvière.'], ['Marcelino Champagnat', 'Recén ordenado', 'Foi ordenado presbítero o 22 de xullo e ao día seguinte subiu a Fourvière.'], ['Marcelino Champagnat', 'Recém-ordenado', 'Foi ordenado presbítero a 22 de julho e no dia seguinte subiu a Fourvière.']),
      pers('JC', 'fourviere', 'M', '🧔', ['Jean-Claude Courveille', 'Seminarista inspirador', 'Convencido de su inspiración de 1812, reunió a una docena de compañeros.'], ['Jean-Claude Courveille', 'Seminarista inspirador', 'Convencido da súa inspiración de 1812, reuniu unha ducia de compañeiros.'], ['Jean-Claude Courveille', 'Seminarista inspirador', 'Convencido da sua inspiração de 1812, reuniu uma dúzia de companheiros.']),
      pers('BO', 'seminario_irenee', '', '🧑‍⚖️', ['Vicario general Bochard', 'Autoridad diocesana', 'Se esforzaba por encauzar a los seminaristas, sin evitar su oposición al Imperio.'], ['Vicario xeral Bochard', 'Autoridade diocesana', 'Esforzábase por encauzar os seminaristas, sen evitar a súa oposición ao Imperio.'], ['Vigário-geral Bochard', 'Autoridade diocesana', 'Esforçava-se por encaminhar os seminaristas, sem evitar a sua oposição ao Império.']),
      pers('S1', 'calles_lyon', '', '🧑‍🎓', ['Seminarista compañero', 'Aspirante marista', 'Subió a la colina con el grupo tras la ordenación.'], ['Seminarista compañeiro', 'Aspirante marista', 'Subiu ao outeiro co grupo tras a ordenación.'], ['Seminarista companheiro', 'Aspirante marista', 'Subiu à colina com o grupo depois da ordenação.']),
      pers('S2', 'rio_saona', '', '🧑‍🎓', ['Otro seminarista', 'Aspirante marista', 'Se sumó al grupo tras haber compartido el curso con Courveille.'], ['Outro seminarista', 'Aspirante marista', 'Sumouse ao grupo tras compartir o curso con Courveille.'], ['Outro seminarista', 'Aspirante marista', 'Juntou-se ao grupo depois de partilhar o curso com Courveille.'])
    ],
    pistas: [
      pista('La promesa se hizo el 23 de julio de 1816, bajo los auspicios del papa, del obispo y del «muy cristiano rey».', 'A promesa fíxose o 23 de xullo de 1816, baixo os auspicios do papa, do bispo e do «moi cristián rei».', 'A promessa fez-se a 23 de julho de 1816, sob os auspícios do papa, do bispo e do «muito cristão rei».', 'MC,JC'),
      pista('Un seminarista creía haber recibido en 1812 la inspiración de fundar una Sociedad de María.', 'Un seminarista cría ter recibido en 1812 a inspiración de fundar unha Sociedade de María.', 'Um seminarista acreditava ter recebido em 1812 a inspiração de fundar uma Sociedade de Maria.', 'JC'),
      pista('El proyecto se gestó en el curso 1815-1816 dentro de una pequeña sociedad secreta de seminaristas.', 'O proxecto xestouse no curso 1815-1816 dentro dunha pequena sociedade secreta de seminaristas.', 'O projeto gerou-se no ano letivo de 1815-1816 dentro de uma pequena sociedade secreta de seminaristas.', 'JC,S1,S2'),
      pista('Marcelino insistió desde el principio en que debía existir una rama de Hermanos dedicados a enseñar.', 'Marcelino insistiu desde o principio en que debía existir unha rama de Irmáns dedicados a ensinar.', 'Marcelino insistiu desde o início em que devia existir um ramo de Irmãos dedicados ao ensino.', 'MC')
    ]
  },
  // ───────────────────────── 005 ─────────────────────────
  {
    id: '005-HM',
    nivel: 'easy',
    nombre: ['El granadero de La Rive', 'O granadeiro de La Rive', 'O granadeiro de La Rive'],
    categoria: ['Los primeros discípulos', 'Os primeiros discípulos', 'Os primeiros discípulos'],
    fuente: ['La Valla · Lanfrey T. 1, cap. 3', 'La Valla · Lanfrey T. 1, cap. 3', 'La Valla · Lanfrey T. 1, cap. 3'],
    textoClave: [
      'Marcelino llegó a La Valla el 12 de agosto de 1816 y el 26 de octubre conoció a Jean-Marie Granjon.',
      'Marcelino chegou a La Valla o 12 de agosto de 1816 e o 26 de outubro coñeceu Jean-Marie Granjon.',
      'Marcelino chegou a La Valla a 12 de agosto de 1816 e a 26 de outubro conheceu Jean-Marie Granjon.'
    ],
    contexto: [
      'Granjon, huérfano y antiguo soldado de la Guardia Imperial, trabajaba de criado en un molino de la aldea de La Rive. Marcelino lo vio como un signo del cielo. Al día siguiente le llevó un Manual del Cristiano y se ofreció a enseñarle a leer.',
      'Granjon, orfo e antigo soldado da Garda Imperial, traballaba de criado nun muíño da aldea de La Rive. Marcelino viuno como un signo do ceo. Ao día seguinte levoulle un Manual do Cristián e ofreceuse a ensinarlle a ler.',
      'Granjon, órfão e antigo soldado da Guarda Imperial, trabalhava como criado num moinho da aldeia de La Rive. Marcelino viu nele um sinal do céu. No dia seguinte levou-lhe um Manual do Cristão e ofereceu-se para lhe ensinar a ler.'
    ],
    explicacion: [
      'El responsable de poner en marcha la obra fue el propio Marcelino, que vio en Granjon una señal y le propuso aprender a leer con él. Granjon vino a buscarle para atender a un enfermo y, desde aquel encuentro, se convirtió en el primer discípulo.',
      'O responsable de poñer en marcha a obra foi o propio Marcelino, que viu en Granjon un sinal e propúxolle aprender a ler con el. Granjon veu buscalo para atender un enfermo e, desde aquel encontro, converteuse no primeiro discípulo.',
      'O responsável por pôr a obra em marcha foi o próprio Marcelino, que viu em Granjon um sinal e lhe propôs aprender a ler com ele. Granjon veio buscá-lo para atender um doente e, desde esse encontro, tornou-se o primeiro discípulo.'
    ],
    intro: [
      'La Valla, otoño de 1816. Un joven sale del molino a buscar al vicario para un enfermo y, sin saberlo, empieza una historia que durará siglos. ¿Quién lo puso en camino?',
      'La Valla, outono de 1816. Un mozo sae do muíño a buscar o vicario para un enfermo e, sen sabelo, comeza unha historia que durará séculos. Quen o puxo en camiño?',
      'La Valla, outono de 1816. Um jovem sai do moinho para ir buscar o vigário para um doente e, sem saber, começa uma história que durará séculos. Quem o pôs a caminho?'
    ],
    epilogo: [
      '¡Caso resuelto! Marcelino convirtió aquel encuentro en una invitación: aprender a leer y a rezar. Granjon se haría el hermano Juan María, el primero de los Hermanos Maristas.',
      'Caso resolto! Marcelino converteu aquel encontro nunha invitación: aprender a ler e a rezar. Granjon faríase o irmán Xoán María, o primeiro dos Irmáns Maristas.',
      'Caso resolvido! Marcelino transformou esse encontro num convite: aprender a ler e a rezar. Granjon seria o irmão João Maria, o primeiro dos Irmãos Maristas.'
    ],
    salas: [
      sala('molino_larive', 'sky', ['Molino de La Rive', 'Molino La Rive', 'Molino donde trabajaba Granjon como criado.'], ['Muíño de La Rive', 'Muíño La Rive', 'Muíño onde traballaba Granjon como criado.'], ['Moinho de La Rive', 'Moinho La Rive', 'Moinho onde Granjon trabalhava como criado.']),
      sala('casa_parroquial', 'purple', ['Casa parroquial de La Valla', 'Parroquial', 'Residencia del párroco Rebod.'], ['Casa reitoral de La Valla', 'Reitoral', 'Residencia do párroco Rebod.'], ['Casa paroquial de La Valla', 'Paroquial', 'Residência do pároco Rebod.']),
      sala('casa_enfermo', 'rose', ['Casa del enfermo', 'Casa enfermo', 'Hogar donde Marcelino acudió a administrar a un enfermo.'], ['Casa do enfermo', 'Casa enfermo', 'Fogar onde Marcelino acudiu a atender un enfermo.'], ['Casa do doente', 'Casa doente', 'Lar onde Marcelino acudiu a assistir um doente.']),
      sala('iglesia_lavalla', 'amber', ['Iglesia de La Valla', 'Iglesia', 'Donde Marcelino observó a Granjon un domingo de octubre.'], ['Igrexa de La Valla', 'Igrexa', 'Onde Marcelino observou Granjon un domingo de outubro.'], ['Igreja de La Valla', 'Igreja', 'Onde Marcelino observou Granjon num domingo de outubro.']),
      sala('la_terrasse', 'emerald', ['Aldea de La Terrasse', 'La Terrasse', 'Aldea natal de Granjon, en Doizieux.'], ['Aldea de La Terrasse', 'La Terrasse', 'Aldea natal de Granjon, en Doizieux.'], ['Aldeia de La Terrasse', 'La Terrasse', 'Aldeia natal de Granjon, em Doizieux.'])
    ],
    objetos: [
      objeto('molino_larive', '⚙️', ['Muela del molino', 'Rueda de piedra del molino de La Rive.'], ['Moa do muíño', 'Roda de pedra do muíño de La Rive.'], ['Mó do moinho', 'Roda de pedra do moinho de La Rive.']),
      objeto('iglesia_lavalla', '📘', ['Manual del Cristiano', 'Pequeño resumen de doctrina y devoción.'], ['Manual do Cristián', 'Pequeno resumo de doutrina e devoción.'], ['Manual do Cristão', 'Pequeno resumo de doutrina e devoção.']),
      objeto('casa_enfermo', '🕯️', ['Cirio del enfermo', 'Vela encendida junto a la cama.'], ['Cirio do enfermo', 'Vela acesa xunto á cama.'], ['Círio do doente', 'Vela acesa junto à cama.'])
    ],
    personajes: [
      pers('JM', 'molino_larive', 'V', '🧑‍🌾', ['Jean-Marie Granjon', 'Criado de molino', 'Antiguo granadero de la Guardia Imperial, no sabía leer.'], ['Jean-Marie Granjon', 'Criado de muíño', 'Antigo granadeiro da Garda Imperial, non sabía ler.'], ['Jean-Marie Granjon', 'Criado de moinho', 'Antigo granadeiro da Guarda Imperial, não sabia ler.']),
      pers('MC', 'molino_larive', 'M', '🧑‍🏫', ['Marcelino Champagnat', 'Vicario de La Valla', 'Le ofreció enseñarle a leer y le llevó un libro de doctrina.'], ['Marcelino Champagnat', 'Vicario de La Valla', 'Ofreceulle ensinarlle a ler e levoulle un libro de doutrina.'], ['Marcelino Champagnat', 'Vigário de La Valla', 'Ofereceu-se para lhe ensinar a ler e levou-lhe um livro de doutrina.']),
      pers('RE', 'casa_parroquial', '', '👴', ['Párroco Rebod', 'Párroco de La Valla', 'Era párroco desde 1812 y Marcelino quedó bajo su autoridad.'], ['Párroco Rebod', 'Párroco de La Valla', 'Era párroco desde 1812 e Marcelino quedou baixo a súa autoridade.'], ['Pároco Rebod', 'Pároco de La Valla', 'Era pároco desde 1812 e Marcelino ficou sob a sua autoridade.']),
      pers('EN', 'casa_enfermo', '', '🤒', ['Enfermo de la aldea', 'Parroquiano', 'Necesitaba ayuda espiritual, por eso se envió a buscar al vicario.'], ['Enfermo da aldea', 'Parroquiano', 'Necesitaba axuda espiritual, por iso se mandou buscar o vicario.'], ['Doente da aldeia', 'Paroquiano', 'Precisava de ajuda espiritual, por isso se mandou chamar o vigário.']),
      pers('JBA', 'iglesia_lavalla', '', '🧒', ['Jean-Baptiste Audras', 'Joven alfabetizado', 'Nacido en 1802, sería el segundo compañero de Granjon.'], ['Jean-Baptiste Audras', 'Mozo alfabetizado', 'Nacido en 1802, sería o segundo compañeiro de Granjon.'], ['Jean-Baptiste Audras', 'Jovem alfabetizado', 'Nascido em 1802, viria a ser o segundo companheiro de Granjon.'])
    ],
    pistas: [
      pista('Granjon vino a buscar al vicario el 26 de octubre de 1816 para atender a un enfermo.', 'Granjon veu buscar o vicario o 26 de outubro de 1816 para atender un enfermo.', 'Granjon veio buscar o vigário a 26 de outubro de 1816 para atender um doente.', 'JM,EN'),
      pista('Antes de eso, Marcelino lo había observado en la iglesia: se portaba muy bien.', 'Antes diso, Marcelino observárao na igrexa: portábase moi ben.', 'Antes disso, Marcelino observara-o na igreja: portava-se muito bem.', 'MC'),
      pista('Al día siguiente, el vicario le llevó un Manual del Cristiano y le prometió enseñarle a leer.', 'Ao día seguinte, o vicario levoulle un Manual do Cristián e prometeulle ensinarlle a ler.', 'No dia seguinte, o vigário levou-lhe um Manual do Cristão e prometeu ensinar-lhe a ler.', 'JM,MC'),
      pista('Pronto Marcelino le encontró un compañero: un joven de 14 años que ya sabía leer.', 'Axiña Marcelino atoulle un compañeiro: un mozo de 14 anos que xa sabía ler.', 'Depressa Marcelino lhe encontrou um companheiro: um jovem de 14 anos que já sabia ler.', 'JBA')
    ]
  },
  // ───────────────────────── 006 ─────────────────────────
  {
    id: '006-HM',
    nivel: 'easy',
    nombre: ['Clavos para vivir', 'Cravos para vivir', 'Pregos para viver'],
    categoria: ['Los primeros discípulos', 'Os primeiros discípulos', 'Os primeiros discípulos'],
    fuente: ['La Valla · Lanfrey T. 1, cap. 3; Tras las huellas, §10', 'La Valla · Lanfrey T. 1, cap. 3; Tras las huellas, §10', 'La Valla · Lanfrey T. 1, cap. 3; Tras las huellas, §10'],
    textoClave: [
      'El 2 de enero de 1817, Marcelino instaló a sus dos primeros discípulos en una casa alquilada de La Valla.',
      'O 2 de xaneiro de 1817, Marcelino instalou os seus dous primeiros discípulos nunha casa alugada de La Valla.',
      'A 2 de janeiro de 1817, Marcelino instalou os seus dois primeiros discípulos numa casa arrendada de La Valla.'
    ],
    contexto: [
      'Para vivir, los jóvenes hacían clavos con barritas de hierro («verges») que producía la metalurgia del valle del Gier. Un huerto y un terreno vecino les daban comida. El resto del tiempo era para la oración y el estudio. Era una vida sencilla, de laicos piadosos.',
      'Para vivir, os mozos facían cravos con barriñas de ferro («verges») que producía a metalurxia do val do Gier. Unha horta e unha leira veciña daban a comida. O resto do tempo era para a oración e o estudo. Era unha vida sinxela, de laicos piadosos.',
      'Para viver, os jovens faziam pregos com barras de ferro («verges») que a metalurgia do vale do Gier fornecia. Uma horta e um terreno vizinho davam a comida. O resto do tempo era para a oração e o estudo. Era uma vida simples, de leigos piedosos.'
    ],
    explicacion: [
      'El responsable de sostener la casa con trabajo fue Jean-Baptiste Audras, que junto a Granjon fabricaba clavos con el hierro del Gier. Estaban cerca de la casa parroquial y Marcelino acudía a darles lecciones de lectura y escritura.',
      'O responsable de sosteren a casa con traballo foi Jean-Baptiste Audras, que xunto a Granjon fabricaba cravos co ferro do Gier. Estaban preto da casa reitoral e Marcelino acudía a darlles leccións de lectura e escritura.',
      'O responsável por sustentar a casa com trabalho foi Jean-Baptiste Audras, que juntamente com Granjon fabricava pregos com o ferro do Gier. Estavam perto da casa paroquial e Marcelino acudia para lhes dar lições de leitura e escrita.'
    ],
    intro: [
      'La Valla, 2 de enero de 1817. Dos jóvenes viven por primera vez bajo el mismo techo, sin dinero y con muchas ganas. Alguien tiene que ganarse el pan: ¿quién fabricaba los clavos?',
      'La Valla, 2 de xaneiro de 1817. Dous mozos viven por primeira vez baixo o mesmo teito, sen cartos e con moitas ganas. Alguén ten que gañar o pan: quen fabricaba os cravos?',
      'La Valla, 2 de janeiro de 1817. Dois jovens vivem pela primeira vez sob o mesmo teto, sem dinheiro e com muita vontade. Alguém tem de ganhar o pão: quem fabricava os pregos?'
    ],
    epilogo: [
      '¡Caso resuelto! Entre martillazos y oración nació la primera comunidad. Era el comienzo humilde de los Hermanos Maristas, con la confianza puesta en Dios y en María.',
      'Caso resolto! Entre martelazos e oración naceu a primeira comunidade. Era o comezo humilde dos Irmáns Maristas, coa confianza posta en Deus e en María.',
      'Caso resolvido! Entre marteladas e oração nasceu a primeira comunidade. Era o início humilde dos Irmãos Maristas, com a confiança posta em Deus e em Maria.'
    ],
    salas: [
      sala('casita', 'amber', ['Casita alquilada', 'Casita', 'Primera casa de los discípulos, junto a la casa parroquial.'], ['Casiña alugada', 'Casiña', 'Primeira casa dos discípulos, xunto á casa reitoral.'], ['Casinha arrendada', 'Casinha', 'Primeira casa dos discípulos, junto à casa paroquial.']),
      sala('casa_parroquial', 'purple', ['Casa parroquial de La Valla', 'Parroquial', 'Desde aquí el vicario acudía a dar lecciones.'], ['Casa reitoral de La Valla', 'Reitoral', 'Desde aquí o vicario acudía a dar leccións.'], ['Casa paroquial de La Valla', 'Paroquial', 'Daqui o vigário acudia para dar lições.']),
      sala('huerto', 'emerald', ['Huerto y terreno vecino', 'Huerto', 'Daban verduras para la mesa.'], ['Horta e leira veciña', 'Horta', 'Daban verduras para a mesa.'], ['Horta e terreno vizinho', 'Horta', 'Davam legumes para a mesa.']),
      sala('valle_gier', 'zinc', ['Fraguas del valle del Gier', 'Fraguas Gier', 'Producían barras de hierro semiacabadas.'], ['Fraguas do val do Gier', 'Fraguas Gier', 'Producían barras de ferro semiacabadas.'], ['Forjas do vale do Gier', 'Forjas Gier', 'Produziam barras de ferro semiacabadas.']),
      sala('iglesia_lavalla', 'rose', ['Iglesia de La Valla', 'Iglesia', 'Templo parroquial del pueblo.'], ['Igrexa de La Valla', 'Igrexa', 'Templo parroquial da vila.'], ['Igreja de La Valla', 'Igreja', 'Templo paroquial da vila.'])
    ],
    objetos: [
      objeto('casita', '⚒️', ['Yunque y barras de hierro', 'Herramientas para hacer clavos.'], ['Xunque e barras de ferro', 'Ferramentas para facer cravos.'], ['Bigorna e barras de ferro', 'Ferramentas para fazer pregos.']),
      objeto('huerto', '🥬', ['Hortalizas', 'Productos del huerto de la casa.'], ['Hortalizas', 'Produtos da horta da casa.'], ['Hortaliças', 'Produtos da horta da casa.']),
      objeto('casa_parroquial', '📘', ['Libro de lectura', 'Texto para las lecciones del vicario.'], ['Libro de lectura', 'Texto para as leccións do vicario.'], ['Livro de leitura', 'Texto para as lições do vigário.'])
    ],
    personajes: [
      pers('JM', 'casita', 'V', '🧑‍🌾', ['Jean-Marie Granjon', 'Primer discípulo', 'Había aprendido a leer con Marcelino y compartía la casa.'], ['Jean-Marie Granjon', 'Primeiro discípulo', 'Aprendera a ler con Marcelino e compartía a casa.'], ['Jean-Marie Granjon', 'Primeiro discípulo', 'Aprendera a ler com Marcelino e partilhava a casa.']),
      pers('JBA', 'casita', 'M', '🧑', ['Jean-Baptiste Audras', 'Segundo discípulo', 'Con 14 años, golpeaba el hierro cada día para ganar el sustento.'], ['Jean-Baptiste Audras', 'Segundo discípulo', 'Con 14 anos, golpeaba o ferro cada día para gañar o sustento.'], ['Jean-Baptiste Audras', 'Segundo discípulo', 'Com 14 anos, malhava o ferro todos os dias para ganhar o sustento.']),
      pers('MC', 'casa_parroquial', '', '🧑‍🏫', ['Marcelino Champagnat', 'Vicario', 'Acudía entre sus tareas del culto a dar clases de lectura y escritura.'], ['Marcelino Champagnat', 'Vicario', 'Acudía entre as súas tarefas do culto a dar clases de lectura e escritura.'], ['Marcelino Champagnat', 'Vigário', 'Acudia entre as suas tarefas do culto para dar aulas de leitura e escrita.']),
      pers('RE', 'iglesia_lavalla', '', '👴', ['Párroco Rebod', 'Párroco de La Valla', 'Aceptaba la obra, aunque Marcelino no le explicaba todo.'], ['Párroco Rebod', 'Párroco de La Valla', 'Aceptaba a obra, aínda que Marcelino non llelo explicaba todo.'], ['Pároco Rebod', 'Pároco de La Valla', 'Aceitava a obra, embora Marcelino não lhe explicasse tudo.']),
      pers('VG', 'valle_gier', '', '👷', ['Proveedor de «verges»', 'Herrero del Gier', 'Suministraba el hierro medio acabado que se convertía en clavos.'], ['Provedor de «verges»', 'Ferreiro do Gier', 'Subministraba o ferro medio acabado que se convertía en cravos.'], ['Fornecedor de «verges»', 'Ferreiro do Gier', 'Fornecia o ferro meio acabado que se transformava em pregos.'])
    ],
    pistas: [
      pista('Los dos jóvenes vivían en una casa alquilada cerca de la casa parroquial.', 'Os dous mozos vivían nunha casa alugada preto da casa reitoral.', 'Os dois jovens viviam numa casa arrendada perto da casa paroquial.', 'JM,JBA'),
      pista('Para vivir hacían clavos, una industria muy extendida por los pueblos.', 'Para vivir facían cravos, unha industria moi estendida polas vilas.', 'Para viver faziam pregos, uma indústria muito difundida pelas aldeias.', 'JM,JBA'),
      pista('El hierro les llegaba ya medio trabajado desde la metalurgia del valle del Gier.', 'O ferro chegáballes xa medio traballado desde a metalurxia do val do Gier.', 'O ferro chegava-lhes já meio trabalhado da metalurgia do vale do Gier.', 'VG'),
      pista('El huerto y un terreno próximo ponían los alimentos; el resto del tiempo era para rezar y estudiar.', 'A horta e unha leira próxima poñían os alimentos; o resto do tempo era para rezar e estudar.', 'A horta e um terreno próximo davam os alimentos; o resto do tempo era para rezar e estudar.', 'JM,JBA')
    ]
  },
  // ───────────────────────── 007 ─────────────────────────
  {
    id: '007-HM',
    nivel: 'easy',
    nombre: ['Cuatro y un hábito', 'Catro e un hábito', 'Quatro e um hábito'],
    categoria: ['Los primeros discípulos', 'Os primeiros discípulos', 'Os primeiros discípulos'],
    fuente: ['La Valla · Lanfrey T. 1, cap. 3; Tras las huellas, §11', 'La Valla · Lanfrey T. 1, cap. 3; Tras las huellas, §11', 'La Valla · Lanfrey T. 1, cap. 3; Tras las huellas, §11'],
    textoClave: [
      'Por Navidad de 1817 se unió Jean-Claude Audras y el 1 de enero, Antoine Couturier, de La Valla.',
      'Polo Nadal de 1817 uniuse Jean-Claude Audras e o 1 de xaneiro, Antoine Couturier, de La Valla.',
      'Pelo Natal de 1817 juntou-se Jean-Claude Audras e a 1 de janeiro, Antoine Couturier, de La Valla.'
    ],
    contexto: [
      'El grupo creció pronto: a los dos primeros se sumaron un hermano de Jean-Baptiste y un joven de 17 años sin instrucción. Marcelino les dio un hábito que no era religioso: levita azul o negra, pantalón negro, pequeña capa y sombrero redondo. Eran laicos un poco aparte.',
      'O grupo medrou axiña: aos dous primeiros sumáronse un irmán de Jean-Baptiste e un mozo de 17 anos sen instrución. Marcelino deulles un hábito que non era relixioso: levita azul ou negra, pantalón negro, pequena capa e sombreiro redondo. Eran laicos un pouco aparte.',
      'O grupo cresceu depressa: aos dois primeiros juntaram-se um irmão de Jean-Baptiste e um jovem de 17 anos sem instrução. Marcelino deu-lhes um hábito que não era religioso: sobrecasaca azul ou preta, calças pretas, pequena capa e chapéu redondo. Eram leigos um pouco à parte.'
    ],
    explicacion: [
      'El responsable del hábito fue Marcelino, que lo dio a sus compañeros hacia finales de marzo. Hacía de ellos laicos un poco aparte, sin ser aún religiosos. A finales de 1817 el grupo ya tenía cuatro jóvenes, con edades y estudios muy distintos.',
      'O responsable do hábito foi Marcelino, que llo deu aos seus compañeiros cara a finais de marzo. Facía deles laicos un pouco aparte, sen seren aínda relixiosos. A finais de 1817 o grupo xa tiña catro mozos, con idades e estudos moi distintos.',
      'O responsável pelo hábito foi Marcelino, que o deu aos companheiros por finais de março. Fazia deles leigos um pouco à parte, sem serem ainda religiosos. No final de 1817 o grupo já tinha quatro jovens, com idades e estudos muito diferentes.'
    ],
    intro: [
      'La Valla, invierno de 1817-1818. La casita se llena de jóvenes que visten igual y rezan juntos. Alguien decidió cómo debían vestir. ¿Quién les dio el hábito?',
      'La Valla, inverno de 1817-1818. A casiña énchese de mozos que visten igual e rezan xuntos. Alguén decidiu como debían vestir. Quen lles deu o hábito?',
      'La Valla, inverno de 1817-1818. A casinha enche-se de jovens que vestem igual e rezam juntos. Alguém decidiu como deviam vestir. Quem lhes deu o hábito?'
    ],
    epilogo: [
      '¡Caso resuelto! Fue Marcelino quien dio forma a la comunidad. Aquellos primeros jóvenes, de familias rurales pobres, serían el germen de los Hermanos Maristas.',
      'Caso resolto! Foi Marcelino quen deu forma á comunidade. Aqueles primeiros mozos, de familias rurais pobres, serían o xerme dos Irmáns Maristas.',
      'Caso resolvido! Foi Marcelino quem deu forma à comunidade. Aqueles primeiros jovens, de famílias rurais pobres, seriam o germe dos Irmãos Maristas.'
    ],
    salas: [
      sala('casa_hermanos', 'amber', ['Casa de los hermanos', 'Casa hermanos', 'Hogar de la primera comunidad en La Valla.'], ['Casa dos irmáns', 'Casa irmáns', 'Fogar da primeira comunidade en La Valla.'], ['Casa dos irmãos', 'Casa irmãos', 'Lar da primeira comunidade em La Valla.']),
      sala('iglesia_lavalla', 'purple', ['Iglesia de La Valla', 'Iglesia', 'Los hermanos aprendían allí el canto gregoriano.'], ['Igrexa de La Valla', 'Igrexa', 'Os irmáns aprendían alí o canto gregoriano.'], ['Igreja de La Valla', 'Igreja', 'Os irmãos aprendiam ali o canto gregoriano.']),
      sala('huerto', 'emerald', ['Huerto de la casa', 'Huerto', 'Trabajo manual de la comunidad.'], ['Horta da casa', 'Horta', 'Traballo manual da comunidade.'], ['Horta da casa', 'Horta', 'Trabalho manual da comunidade.']),
      sala('taller_clavos', 'zinc', ['Taller de clavos', 'Taller', 'Donde se ganaban el sustento.'], ['Taller de cravos', 'Taller', 'Onde gañaban o sustento.'], ['Oficina de pregos', 'Oficina', 'Onde ganhavam o sustento.']),
      sala('aldeas', 'sky', ['Aldeas de la parroquia', 'Aldeas', 'Caseríos lejanos donde enseñaban el catecismo.'], ['Aldeas da parroquia', 'Aldeas', 'Caseríos afastados onde ensinaban o catecismo.'], ['Aldeias da paróquia', 'Aldeias', 'Casais distantes onde ensinavam o catecismo.'])
    ],
    objetos: [
      objeto('casa_hermanos', '🎩', ['Sombrero redondo', 'Parte del hábito: levita, pantalón negro, capa y sombrero.'], ['Sombreiro redondo', 'Parte do hábito: levita, pantalón negro, capa e sombreiro.'], ['Chapéu redondo', 'Parte do hábito: sobrecasaca, calças pretas, capa e chapéu.']),
      objeto('taller_clavos', '🔨', ['Martillo de herrero', 'Herramienta para hacer clavos.'], ['Martelo de ferreiro', 'Ferramenta para facer cravos.'], ['Martelo de ferreiro', 'Ferramenta para fazer pregos.']),
      objeto('iglesia_lavalla', '🎶', ['Libro de canto gregoriano', 'Los hermanos aprendían a cantar en el culto.'], ['Libro de canto gregoriano', 'Os irmáns aprendían a cantar no culto.'], ['Livro de canto gregoriano', 'Os irmãos aprendiam a cantar no culto.'])
    ],
    personajes: [
      pers('JM', 'casa_hermanos', 'V', '🧑‍🌾', ['Jean-Marie Granjon', 'Primer hermano', 'El más veterano del grupo; sería el hermano Juan María.'], ['Jean-Marie Granjon', 'Primeiro irmán', 'O máis veterano do grupo; sería o irmán Xoán María.'], ['Jean-Marie Granjon', 'Primeiro irmão', 'O mais veterano do grupo; viria a ser o irmão João Maria.']),
      pers('MC', 'casa_hermanos', 'M', '🧑‍🏫', ['Marcelino Champagnat', 'Vicario y fundador', 'Dio a sus compañeros un atuendo común hacia finales de marzo.'], ['Marcelino Champagnat', 'Vicario e fundador', 'Deu aos seus compañeiros un atuendo común cara a finais de marzo.'], ['Marcelino Champagnat', 'Vigário e fundador', 'Deu aos companheiros um traje comum por finais de março.']),
      pers('JBA', 'huerto', '', '🧒', ['Jean-Baptiste Audras', 'Futuro hermano Luis', 'Nacido en 1802, ya sabía leer.'], ['Jean-Baptiste Audras', 'Futuro irmán Luís', 'Nacido en 1802, xa sabía ler.'], ['Jean-Baptiste Audras', 'Futuro irmão Luís', 'Nascido em 1802, já sabia ler.']),
      pers('JCA', 'taller_clavos', '', '🧑', ['Jean-Claude Audras', 'Futuro hermano Lorenzo', 'Hermano de Jean-Baptiste, nacido en 1793, llegó por Navidad.'], ['Jean-Claude Audras', 'Futuro irmán Lourenzo', 'Irmán de Jean-Baptiste, nacido en 1793, chegou polo Nadal.'], ['Jean-Claude Audras', 'Futuro irmão Lourenço', 'Irmão de Jean-Baptiste, nascido em 1793, chegou pelo Natal.']),
      pers('CO', 'iglesia_lavalla', '', '👦', ['Antoine Couturier', 'Futuro hermano Antonio', 'Nativo de La Valla, de 17 años y sin ninguna instrucción.'], ['Antoine Couturier', 'Futuro irmán Antonio', 'Nativo de La Valla, de 17 anos e sen ningunha instrución.'], ['Antoine Couturier', 'Futuro irmão António', 'Natural de La Valla, com 17 anos e sem qualquer instrução.'])
    ],
    pistas: [
      pista('El hábito era una levita azul o negra, pantalón negro, una pequeña capa y un sombrero redondo.', 'O hábito era unha levita azul ou negra, pantalón negro, unha pequena capa e un sombreiro redondo.', 'O hábito era uma sobrecasaca azul ou preta, calças pretas, uma pequena capa e um chapéu redondo.', 'MC'),
      pista('Jean-Claude Audras, hermano de Jean-Baptiste, se unió por Navidad de 1817.', 'Jean-Claude Audras, irmán de Jean-Baptiste, uniuse polo Nadal de 1817.', 'Jean-Claude Audras, irmão de Jean-Baptiste, juntou-se pelo Natal de 1817.', 'JCA,JBA'),
      pista('Antoine Couturier, de La Valla, se sumó el 1 de enero siendo un joven sin instrucción.', 'Antoine Couturier, de La Valla, sumouse o 1 de xaneiro sendo un mozo sen instrución.', 'Antoine Couturier, de La Valla, juntou-se a 1 de janeiro sendo um jovem sem instrução.', 'CO'),
      pista('El grupo era diverso en edad y estudios, pero casi todos venían de familias rurales pobres.', 'O grupo era diverso en idade e estudos, pero case todos viñan de familias rurais pobres.', 'O grupo era diverso em idade e estudos, mas quase todos vinham de famílias rurais pobres.', 'JM,JBA,JCA,CO')
    ]
  },
  // ───────────────────────── 008 ─────────────────────────
  {
    id: '008-HM',
    nivel: 'easy',
    nombre: ['La campanilla del Bessat', 'A campaíña do Bessat', 'A campainha do Bessat'],
    categoria: ['Misión en las aldeas', 'Misión nas aldeas', 'Missão nas aldeias'],
    fuente: ['La Valla · Lanfrey T. 1, cap. 3', 'La Valla · Lanfrey T. 1, cap. 3', 'La Valla · Lanfrey T. 1, cap. 3'],
    textoClave: [
      'Desde Todos los Santos de 1819, el hermano Laurent catequizaba en El Bessat, un rincón alejado de la parroquia.',
      'Desde Todos os Santos de 1819, o irmán Laurent catequizaba no Bessat, un currunchiño afastado da parroquia.',
      'Desde o dia de Todos os Santos de 1819, o irmão Laurent catequizava em Le Bessat, um canto afastado da paróquia.'
    ],
    contexto: [
      'El Bessat era un lugar de paso y de ferias, pero con poca instrucción religiosa. Jean-Claude Audras (hermano Laurent) bajaba cada jueves a La Valla a por patatas, queso y pan. Con una campanilla, como las cofradías de la Doctrina Cristiana, reunía a los niños para enseñarles oraciones, catecismo y lectura.',
      'O Bessat era un lugar de paso e de feiras, pero con pouca instrución relixiosa. Jean-Claude Audras (irmán Laurent) baixaba cada xoves a La Valla por patacas, queixo e pan. Cunha campaíña, como as confrarías da Doutrina Cristiá, reunía os nenos para ensinarlles oracións, catecismo e lectura.',
      'Le Bessat era um lugar de passagem e de feiras, mas com pouca instrução religiosa. Jean-Claude Audras (irmão Laurent) descia todas as quintas-feiras a La Valla para buscar batatas, queijo e pão. Com uma campainha, como as confrarias da Doutrina Cristã, reunia as crianças para lhes ensinar orações, catecismo e leitura.'
    ],
    explicacion: [
      'Marcelino envió al hermano Laurent al Bessat, y los jueves lo recibía en La Valla para que se aprovisionara. Laurent encarna al hermano de la primera hora: entregado a la catequesis y a los pobres, aunque poco hecho a la vida de comunidad.',
      'Marcelino enviou o irmán Laurent ao Bessat, e os xoves recibíao en La Valla para que se aprovisionase. Laurent encarna o irmán da primeira hora: entregado á catequese e aos pobres, aínda que pouco afeito á vida de comunidade.',
      'Marcelino enviou o irmão Laurent a Le Bessat, e às quintas-feiras recebia-o em La Valla para se abastecer. Laurent encarna o irmão da primeira hora: dedicado à catequese e aos pobres, embora pouco habituado à vida de comunidade.'
    ],
    intro: [
      'Otoño de 1819. Un hermano camina solo entre aldeas con una campanilla en la mano para que los niños acudan. Los jueves baja a La Valla a reabastecerse. ¿Quién le enviaba a aquel rincón?',
      'Outono de 1819. Un irmán camiña só entre aldeas cunha campaíña na man para que os nenos acudan. Os xoves baixa a La Valla a reabastecerse. Quen o enviaba a aquel currunchiño?',
      'Outono de 1819. Um irmão caminha sozinho entre aldeias com uma campainha na mão para que as crianças acorram. Às quintas-feiras desce a La Valla para se reabastecer. Quem o enviava àquele canto?'
    ],
    epilogo: [
      '¡Caso resuelto! Marcelino confió a Laurent aquella misión en la periferia. Con su campanilla y su celo, abrió un modo de enseñar el catecismo que luego se haría escuela.',
      'Caso resolto! Marcelino confiou a Laurent aquela misión na periferia. Coa súa campaíña e o seu celo, abriu un modo de ensinar o catecismo que logo se faría escola.',
      'Caso resolvido! Marcelino confiou a Laurent aquela missão na periferia. Com a sua campainha e o seu zelo, abriu um modo de ensinar o catecismo que depois se tornaria escola.'
    ],
    salas: [
      sala('la_valla', 'amber', ['La Valla (jueves de provisiones)', 'La Valla', 'Pueblo desde donde se enviaba a los hermanos a las aldeas.'], ['La Valla (xoves de provisións)', 'La Valla', 'Vila desde onde se enviaba os irmáns ás aldeas.'], ['La Valla (quintas de provisões)', 'La Valla', 'Vila de onde se enviavam os irmãos às aldeias.']),
      sala('aldea_bessat', 'emerald', ['Aldea de El Bessat', 'El Bessat', 'Rincón alejado del territorio parroquial.'], ['Aldea do Bessat', 'O Bessat', 'Currunchiño afastado do territorio parroquial.'], ['Aldeia de Le Bessat', 'Le Bessat', 'Canto afastado do território paroquial.']),
      sala('capilla_bessat', 'purple', ['Capilla del Bessat', 'Capilla', 'Los domingos reunía allí a todos los habitantes.'], ['Capela do Bessat', 'Capela', 'Os domingos reunía alí a todos os habitantes.'], ['Capela de Le Bessat', 'Capela', 'Aos domingos reunia ali todos os habitantes.']),
      sala('casa_acogida', 'rose', ['Casa de acogida', 'Acogida', 'Familia que lo alojaba mientras él preparaba su comida.'], ['Casa de acollida', 'Acollida', 'Familia que o aloxaba mentres el preparaba a súa comida.'], ['Casa de acolhimento', 'Acolhimento', 'Família que o alojava enquanto ele preparava a sua comida.']),
      sala('camino_feria', 'sky', ['Camino de la feria', 'Camino feria', 'Paso entre Saint-Étienne y el valle del Ródano.'], ['Camiño da feira', 'Camiño feira', 'Paso entre Saint-Étienne e o val do Ródano.'], ['Caminho da feira', 'Caminho feira', 'Passagem entre Saint-Étienne e o vale do Ródano.'])
    ],
    objetos: [
      objeto('aldea_bessat', '🔔', ['Campanilla', 'Con ella reunía a los niños mañana y tarde.'], ['Campaíña', 'Con ela reunía os nenos mañá e tarde.'], ['Campainha', 'Com ela reunia as crianças de manhã e à tarde.']),
      objeto('la_valla', '🥔', ['Saco de patatas', 'Provisiones semanales: patatas, queso y pan.'], ['Saco de patacas', 'Provisións semanais: patacas, queixo e pan.'], ['Saco de batatas', 'Provisões semanais: batatas, queijo e pão.']),
      objeto('capilla_bessat', '📖', ['Catecismo', 'Libro para enseñar las oraciones.'], ['Catecismo', 'Libro para ensinar as oracións.'], ['Catecismo', 'Livro para ensinar as orações.'])
    ],
    personajes: [
      pers('LA', 'la_valla', 'V', '🧑', ['Hermano Laurent (Jean-Claude Audras)', 'Catequista del Bessat', 'Los jueves bajaba a por patatas, queso y pan.'], ['Irmán Laurent (Jean-Claude Audras)', 'Catequista do Bessat', 'Os xoves baixaba por patacas, queixo e pan.'], ['Irmão Laurent (Jean-Claude Audras)', 'Catequista de Le Bessat', 'Às quintas-feiras descia para buscar batatas, queijo e pão.']),
      pers('MC', 'la_valla', 'M', '🧑‍🏫', ['Marcelino Champagnat', 'Vicario y fundador', 'Le había confiado la misión de catequizar la aldea alejada.'], ['Marcelino Champagnat', 'Vicario e fundador', 'Confiáralle a misión de catequizar a aldea afastada.'], ['Marcelino Champagnat', 'Vigário e fundador', 'Confiara-lhe a missão de catequizar a aldeia afastada.']),
      pers('NI', 'aldea_bessat', '', '🧒', ['Niño del Bessat', 'Alumno de catequesis', 'Salía a escuchar la campanilla para aprender las oraciones.'], ['Neno do Bessat', 'Alumno de catequese', 'Saía a escoitar a campaíña para aprender as oracións.'], ['Menino de Le Bessat', 'Aluno de catequese', 'Saía para ouvir a campainha e aprender as orações.']),
      pers('FA', 'casa_acogida', '', '👨‍👩‍👧', ['Familia anfitriona', 'Vecinos del Bessat', 'Lo alojaba mientras él preparaba su propio sustento.'], ['Familia anfitrioa', 'Veciños do Bessat', 'Aloxábao mentres el preparaba o seu propio sustento.'], ['Família anfitriã', 'Vizinhos de Le Bessat', 'Alojava-o enquanto ele preparava o seu próprio sustento.']),
      pers('FE', 'camino_feria', '', '🧑‍🌾', ['Feriante', 'Viajero de paso', 'Pasaba por el Bessat camino de Saint-Étienne.'], ['Feirante', 'Viaxeiro de paso', 'Pasaba polo Bessat camiño de Saint-Étienne.'], ['Feirante', 'Viajante de passagem', 'Passava por Le Bessat a caminho de Saint-Étienne.'])
    ],
    pistas: [
      pista('El Bessat es un rincón muerto de la parroquia, pero un lugar de paso y de ferias.', 'O Bessat é un currunchiño morto da parroquia, pero un lugar de paso e de feiras.', 'Le Bessat é um canto morto da paróquia, mas um lugar de passagem e de feiras.', 'FE'),
      pista('Cada mañana y cada tarde recorría la aldea tocando una campanilla.', 'Cada mañá e cada tarde percorría a aldea tocando unha campaíña.', 'Todas as manhãs e todas as tardes percorria a aldeia a tocar uma campainha.', 'LA,NI'),
      pista('Cuando tenía a los niños reunidos les enseñaba oraciones, catecismo y lectura.', 'Cando tiña os nenos reunidos ensináballes oracións, catecismo e lectura.', 'Quando tinha as crianças reunidas ensinava-lhes orações, catecismo e leitura.', 'LA,NI'),
      pista('Los domingos reunía en la capilla a todos los habitantes de la aldea.', 'Os domingos reunía na capela todos os habitantes da aldea.', 'Aos domingos reunia na capela todos os habitantes da aldeia.', 'LA')
    ]
  },
  // ───────────────────────── 009 ─────────────────────────
  {
    id: '009-HM',
    nivel: 'easy',
    nombre: ['El tesoro del Gier', 'O tesouro do Gier', 'O tesouro do Gier'],
    categoria: ['L’Hermitage y la tradición oral', 'L’Hermitage e a tradición oral', 'L’Hermitage e a tradição oral'],
    fuente: ['L’Hermitage · Lanfrey T. 1, cap. 6', 'L’Hermitage · Lanfrey T. 1, cap. 6', 'L’Hermitage · Lanfrey T. 1, cap. 6'],
    textoClave: [
      'Una tradición oral cuenta que Marcelino halló una estatua de la Virgen entre las rocas del Gier.',
      'Unha tradición oral conta que Marcelino achou unha estatua da Virxe entre as rochas do Gier.',
      'Uma tradição oral conta que Marcelino encontrou uma estátua da Virgem entre as rochas do Gier.'
    ],
    contexto: [
      'La historia no aparece en las fuentes maristas antiguas. Se recogió en la «Monographie» de 1925 y se atribuye a un octogenario de Izieux. El papa Benedicto XV la evocó en 1920. Tiene su parte realista: pedir una escalera al carretero explica cómo se buscaba el lugar de L’Hermitage.',
      'A historia non aparece nas fontes maristas antigas. Recolleuse na «Monographie» de 1925 e atribúese a un octoxenario de Izieux. O papa Bieito XV evocouna en 1920. Ten a súa parte realista: pedirlle unha escada ao carreteiro explica como se buscaba o lugar de L’Hermitage.',
      'A história não aparece nas fontes maristas antigas. Foi recolhida na «Monographie» de 1925 e atribuída a um octogenário de Izieux. O papa Bento XV evocou-a em 1920. Tem a sua parte realista: pedir uma escada ao carreteiro explica como se procurava o lugar de L’Hermitage.'
    ],
    explicacion: [
      'El «culpable» de este misterio es el carretero, que quiso compartir el hallazgo, pero Marcelino le dijo que aquel tesoro no se podía repartir. Es una tradición oral: sirve para reflexionar sobre cómo distinguir una fuente histórica de una leyenda piadosa.',
      'O «culpable» deste misterio é o carreteiro, que quixo compartir o achado, pero Marcelino díxolle que aquel tesouro non se podía repartir. É unha tradición oral: serve para reflexionar sobre como distinguir unha fonte histórica dunha lenda piadosa.',
      'O «culpado» deste mistério é o carreteiro, que quis partilhar o achado, mas Marcelino disse-lhe que aquele tesouro não se podia repartir. É uma tradição oral: serve para refletir sobre como distinguir uma fonte histórica de uma lenda piedosa.'
    ],
    intro: [
      'Valle del Gier, 1824. Mientras busca terreno para construir su gran casa, Marcelino corre a pedir una escalera: ha encontrado «un tesoro». Un vecino, con los ojos muy abiertos, quiere su parte. ¿Quién es?',
      'Val do Gier, 1824. Mentres busca terreo para construír a súa gran casa, Marcelino corre a pedir unha escada: atopou «un tesouro». Un veciño, cos ollos moi abertos, quere a súa parte. Quen é?',
      'Vale do Gier, 1824. Enquanto procura terreno para construir a sua grande casa, Marcelino corre a pedir uma escada: encontrou «um tesouro». Um vizinho, de olhos muito abertos, quer a sua parte. Quem é?'
    ],
    epilogo: [
      '¡Caso resuelto! El carretero quería repartir el tesoro, pero Marcelino no. La tradición dice que la Virgen volvió al mismo sitio y confirmó el lugar de L’Hermitage; la historia, en cambio, recuerda las compras y la autorización de 1824.',
      'Caso resolto! O carreteiro quería repartir o tesouro, pero Marcelino non. A tradición di que a Virxe volveu ao mesmo sitio e confirmou o lugar de L’Hermitage; a historia, en cambio, lembra as compras e a autorización de 1824.',
      'Caso resolvido! O carreteiro queria repartir o tesouro, mas Marcelino não. A tradição diz que a Virgem voltou ao mesmo sítio e confirmou o lugar de L’Hermitage; a história, em contrapartida, recorda as compras e a autorização de 1824.'
    ],
    salas: [
      sala('orillas_gier', 'teal', ['Orillas del Gier (Les Gauds)', 'Orillas Gier', 'Valle encajonado donde se alzaría L’Hermitage.'], ['Beiras do Gier (Les Gauds)', 'Beiras Gier', 'Val encaixado onde se erguería L’Hermitage.'], ['Margens do Gier (Les Gauds)', 'Margens Gier', 'Vale encaixado onde se ergueria L’Hermitage.']),
      sala('izieux', 'amber', ['Casa en Izieux', 'Izieux', 'Donde vivía el octogenario que contó la historia.'], ['Casa en Izieux', 'Izieux', 'Onde vivía o octoxenario que contou a historia.'], ['Casa em Izieux', 'Izieux', 'Onde vivia o octogenário que contou a história.']),
      sala('huerto_hermitage', 'emerald', ['Huerto de L’Hermitage', 'Huerto', 'Jardín del edificio ya construido.'], ['Horta de L’Hermitage', 'Horta', 'Xardín do edificio xa construído.'], ['Horta de L’Hermitage', 'Horta', 'Jardim do edifício já construído.']),
      sala('roma', 'purple', ['Roma (1920)', 'Roma', 'Donde habló el papa Benedicto XV.'], ['Roma (1920)', 'Roma', 'Onde falou o papa Bieito XV.'], ['Roma (1920)', 'Roma', 'Onde falou o papa Bento XV.']),
      sala('la_valla', 'rose', ['La Valla', 'La Valla', 'Adonde Marcelino llevó la estatua.'], ['La Valla', 'La Valla', 'Onde Marcelino levou a estatua.'], ['La Valla', 'La Valla', 'Para onde Marcelino levou a estátua.'])
    ],
    objetos: [
      objeto('orillas_gier', '🗿', ['Estatua de la Virgen', 'Imagen hallada, según la tradición, entre las rocas.'], ['Estatua da Virxe', 'Imaxe atopada, segundo a tradición, entre as rochas.'], ['Estátua da Virgem', 'Imagem encontrada, segundo a tradição, entre as rochas.']),
      objeto('orillas_gier', '🪜', ['Escalera del carretero', 'La que Marcelino pidió prestada para recoger el hallazgo.'], ['Escada do carreteiro', 'A que Marcelino pediu emprestada para recoller o achado.'], ['Escada do carreteiro', 'A que Marcelino pediu emprestada para recolher o achado.']),
      objeto('roma', '📜', ['Circulares, tomo 14', 'Recogen el discurso de Benedicto XV (1920).'], ['Circulares, tomo 14', 'Recollen o discurso de Bieito XV (1920).'], ['Circulares, tomo 14', 'Recolhem o discurso de Bento XV (1920).'])
    ],
    personajes: [
      pers('MC', 'orillas_gier', 'V', '🧑‍🏫', ['Marcelino Champagnat', 'Fundador buscando terreno', 'Examinaba el lugar para levantar el edificio principal.'], ['Marcelino Champagnat', 'Fundador buscando terreo', 'Examinaba o lugar para erguer o edificio principal.'], ['Marcelino Champagnat', 'Fundador à procura de terreno', 'Examinava o lugar para erguer o edifício principal.']),
      pers('CA', 'orillas_gier', 'M', '🧑‍🌾', ['El carretero', 'Vecino del Gier', 'Con los ojos muy abiertos, quiso compartir el «tesoro».'], ['O carreteiro', 'Veciño do Gier', 'Cos ollos moi abertos, quixo compartir o «tesouro».'], ['O carreteiro', 'Vizinho do Gier', 'De olhos muito abertos, quis partilhar o «tesouro».']),
      pers('OC', 'izieux', '', '👴', ['Octogenario de Izieux', 'Narrador de la tradición', 'Contó la historia a finales del siglo XIX.'], ['Octoxenario de Izieux', 'Narrador da tradición', 'Contou a historia a finais do século XIX.'], ['Octogenário de Izieux', 'Narrador da tradição', 'Contou a história a finais do século XIX.']),
      pers('HO', 'huerto_hermitage', '', '🧑‍🌾', ['Hermano hortelano', 'Cuidador del huerto', 'Recibió el relato y lo transmitió a la comunidad.'], ['Irmán hortelán', 'Coidador da horta', 'Recibiu o relato e transmitiuno á comunidade.'], ['Irmão hortelão', 'Cuidador da horta', 'Recebeu o relato e transmitiu-o à comunidade.']),
      pers('BE', 'roma', '', '👴', ['Benedicto XV', 'Papa en 1920', 'Evocó la historia al declarar las virtudes de Champagnat.'], ['Bieito XV', 'Papa en 1920', 'Evocou a historia ao declarar as virtudes de Champagnat.'], ['Bento XV', 'Papa em 1920', 'Evocou a história ao declarar as virtudes de Champagnat.'])
    ],
    pistas: [
      pista('Las fuentes antiguas nunca contaron esta historia; la recogió una monografía de 1925.', 'As fontes antigas nunca contaron esta historia; recolleuna unha monografía de 1925.', 'As fontes antigas nunca contaram esta história; recolheu-a uma monografia de 1925.', 'OC,HO'),
      pista('Marcelino pidió prestada una escalera para recoger el hallazgo.', 'Marcelino pediu emprestada unha escada para recoller o achado.', 'Marcelino pediu emprestada uma escada para recolher o achado.', 'MC,CA'),
      pista('El hallazgo, dijo Marcelino, no se podía compartir.', 'O achado, dixo Marcelino, non se podía compartir.', 'O achado, disse Marcelino, não se podia partilhar.', 'MC,CA'),
      pista('En 1920 un papa mencionó esta imagen al hablar de las primeras casas de los Hermanitos de María.', 'En 1920 un papa mencionou esta imaxe ao falar das primeiras casas dos Irmáns Pequenos de María.', 'Em 1920 um papa mencionou esta imagem ao falar das primeiras casas dos Pequenos Irmãos de Maria.', 'BE')
    ]
  }
];
