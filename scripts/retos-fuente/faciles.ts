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
  }
];
