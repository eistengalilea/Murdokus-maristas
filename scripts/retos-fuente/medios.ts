import { RetoF, sala, objeto, pers, pista } from './base';

/**
 * RETOS MEDIOS (7x7 · 7 personajes) — Marcelino Champagnat y los primeros hermanos.
 * Fuentes: André Lanfrey, Historia del Instituto de los Hermanos Maristas, T. 1 (FMS Studia 3, 2015)
 *          y «Tras las huellas de Marcelino Champagnat» (Misión Educativa Marista, 2023).
 * Orden de los textos: [castellano, gallego, portugués de Portugal].
 *
 * SUPOSICIÓN HISTÓRICA: los comentarios que empiezan así señalan personajes, lugares o detalles
 * inventados o no comprobados en las fuentes, puestos para completar el tablero de 7 personas.
 * Conviene revisarlos con Lanfrey antes de publicar.
 */
export const MEDIOS: RetoF[] = [
  // ───────────────────────── 010 ─────────────────────────
  {
    id: '010-HM',
    nivel: 'medium',
    rasgos: ['presencia', 'sencillez'],
    nombre: ['El joven de Les Palais', 'O mozo de Les Palais', 'O jovem de Les Palais'],
    categoria: ['Fundación', 'Fundación', 'Fundação'],
    fuente: ['La Valla · Lanfrey T. 1, cap. 3', 'La Valla · Lanfrey T. 1, cap. 3', 'La Valla · Lanfrey T. 1, cap. 3'],
    textoClave: [
      'A finales de octubre de 1816, Marcelino asistió en Les Palais a un joven moribundo, Jean-Baptiste Montagne, que no sabía nada de Dios.',
      'A finais de outubro de 1816, Marcelino asistiu en Les Palais a un mozo moribundo, Jean-Baptiste Montagne, que non sabía nada de Deus.',
      'No final de outubro de 1816, Marcelino assistiu em Les Palais um jovem moribundo, Jean-Baptiste Montagne, que não sabia nada de Deus.'
    ],
    contexto: [
      'Les Palais era una aldea de la parroquia de La Valla, en las laderas del Pilat. Según la biografía del hermano Jean-Baptiste (1856), aquel encuentro convenció a Marcelino de que no podía esperar más para fundar hermanos que educaran a los niños del campo. La fecha tradicional es el 28 de octubre de 1816, aunque el relato se escribió décadas después.',
      'Les Palais era unha aldea da parroquia de La Valla, nas ladeiras do Pilat. Segundo a biografía do irmán Jean-Baptiste (1856), aquel encontro convenceu a Marcelino de que non podía agardar máis para fundar irmáns que educasen os nenos do rural. A data tradicional é o 28 de outubro de 1816, aínda que o relato se escribiu décadas despois.',
      'Les Palais era uma aldeia da paróquia de La Valla, nas encostas do Pilat. Segundo a biografia do irmão Jean-Baptiste (1856), esse encontro convenceu Marcelino de que não podia esperar mais para fundar irmãos que educassem as crianças do campo. A data tradicional é 28 de outubro de 1816, embora o relato tenha sido escrito décadas depois.'
    ],
    explicacion: [
      'El responsable de aquella última lección fue el propio Marcelino: pasó cerca de dos horas enseñando al joven las verdades de la fe y lo confesó. Luego fue a ver a otro enfermo y, al volver, Montagne había muerto. De ahí nació su convicción: «¡Necesitamos hermanos!».',
      'O responsable daquela última lección foi o propio Marcelino: pasou preto de dúas horas ensinándolle ao mozo as verdades da fe e confesouno. Logo foi ver outro enfermo e, ao volver, Montagne morrera. De aí naceu a súa convicción: «Precisamos irmáns!».',
      'O responsável por essa última lição foi o próprio Marcelino: passou cerca de duas horas a ensinar ao jovem as verdades da fé e confessou-o. Depois foi ver outro doente e, ao regressar, Montagne tinha morrido. Daí nasceu a sua convicção: «Precisamos de irmãos!».'
    ],
    intro: [
      'La Valla, otoño de 1816. Llaman con urgencia al joven vicario: en un caserío de la montaña, un muchacho se muere sin saber quién es Dios. Reconstruye dónde estaba cada uno aquella tarde para descubrir quién le dio su primera y última lección.',
      'La Valla, outono de 1816. Chaman con urxencia o novo vigario: nun caserío da montaña, un rapaz morre sen saber quen é Deus. Reconstrúe onde estaba cada quen aquela tarde para descubrir quen lle deu a súa primeira e última lección.',
      'La Valla, outono de 1816. Chamam com urgência o jovem vigário: num lugarejo da montanha, um rapaz está a morrer sem saber quem é Deus. Reconstrói onde estava cada um naquela tarde para descobrir quem lhe deu a sua primeira e última lição.'
    ],
    epilogo: [
      '¡Caso resuelto! Marcelino no llegó a tiempo de salvar la vida de Montagne, pero sí de acompañarlo. Dos meses después, el 2 de enero de 1817, instalaba a sus primeros discípulos en La Valla.',
      'Caso resolto! Marcelino non chegou a tempo de salvar a vida de Montagne, pero si de acompañalo. Dous meses despois, o 2 de xaneiro de 1817, instalaba os seus primeiros discípulos en La Valla.',
      'Caso resolvido! Marcelino não chegou a tempo de salvar a vida de Montagne, mas chegou a tempo de o acompanhar. Dois meses depois, a 2 de janeiro de 1817, instalava os seus primeiros discípulos em La Valla.'
    ],
    salas: [
      sala('casa_montagne', 'red', ['Casa de los Montagne', 'Casa Montagne', 'Hogar campesino donde agonizaba el joven.'], ['Casa dos Montagne', 'Casa Montagne', 'Fogar labrego onde agonizaba o mozo.'], ['Casa dos Montagne', 'Casa Montagne', 'Lar camponês onde agonizava o jovem.']),
      // SUPOSICIÓN HISTÓRICA: la cuadra y la senda son lugares verosímiles, no citados en las fuentes.
      sala('cuadra', 'amber', ['Cuadra del caserío', 'Cuadra', 'Establo donde se guardaban los animales de la familia.'], ['Corte do caserío', 'Corte', 'Establo onde se gardaban os animais da familia.'], ['Estábulo do lugarejo', 'Estábulo', 'Estábulo onde se guardavam os animais da família.']),
      sala('senda_palais', 'stone', ['Senda de Les Palais', 'Senda', 'Camino de montaña entre La Valla y la aldea.'], ['Carreiro de Les Palais', 'Carreiro', 'Camiño de montaña entre La Valla e a aldea.'], ['Trilho de Les Palais', 'Trilho', 'Caminho de montanha entre La Valla e a aldeia.']),
      sala('casa_vecina', 'sky', ['Casa del otro enfermo', 'Casa vecina', 'Vivienda cercana adonde fue el vicario después.'], ['Casa do outro enfermo', 'Casa veciña', 'Vivenda próxima onde foi o vigario despois.'], ['Casa do outro doente', 'Casa vizinha', 'Casa próxima onde o vigário foi depois.']),
      sala('casa_parroquial', 'purple', ['Casa parroquial de La Valla', 'Parroquial', 'Residencia del párroco y de su vicario.'], ['Casa reitoral de La Valla', 'Reitoral', 'Residencia do párroco e do seu vigario.'], ['Casa paroquial de La Valla', 'Paroquial', 'Residência do pároco e do seu vigário.']),
      sala('iglesia_lavalla', 'indigo', ['Iglesia de La Valla', 'Iglesia', 'Templo parroquial en el valle del Gier.'], ['Igrexa de La Valla', 'Igrexa', 'Templo parroquial no val do Gier.'], ['Igreja de La Valla', 'Igreja', 'Templo paroquial no vale do Gier.'])
    ],
    objetos: [
      objeto('casa_montagne', '🕯️', ['Vela encendida', 'Luz junto al lecho del enfermo.'], ['Vela acesa', 'Luz xunto ao leito do enfermo.'], ['Vela acesa', 'Luz junto ao leito do doente.']),
      objeto('cuadra', '🐄', ['Vaca', 'Animal de la pequeña explotación familiar.'], ['Vaca', 'Animal da pequena explotación familiar.'], ['Vaca', 'Animal da pequena exploração familiar.']),
      objeto('senda_palais', '🪨', ['Mojón de piedra', 'Marca del camino de montaña.'], ['Marco de pedra', 'Sinal do camiño de montaña.'], ['Marco de pedra', 'Marca do caminho de montanha.']),
      objeto('iglesia_lavalla', '📿', ['Rosario', 'Oración que Marcelino rezaba en sus caminatas.'], ['Rosario', 'Oración que Marcelino rezaba nas súas camiñadas.'], ['Terço', 'Oração que Marcelino rezava nas suas caminhadas.'])
    ],
    personajes: [
      pers('MO', 'casa_montagne', 'V', '🤒', ['Jean-Baptiste Montagne', 'Joven de 17 años', 'Gravemente enfermo, ignoraba hasta lo más básico de la fe.'], ['Jean-Baptiste Montagne', 'Mozo de 17 anos', 'Gravemente enfermo, ignoraba ata o máis básico da fe.'], ['Jean-Baptiste Montagne', 'Jovem de 17 anos', 'Gravemente doente, ignorava até o mais básico da fé.']),
      pers('MC', 'casa_montagne', 'M', '🧑‍🏫', ['Marcelino Champagnat', 'Vicario de La Valla', 'Se sentó junto al lecho y le explicó la fe con palabras sencillas.'], ['Marcelino Champagnat', 'Vigario de La Valla', 'Sentou xunto ao leito e explicoulle a fe con palabras sinxelas.'], ['Marcelino Champagnat', 'Vigário de La Valla', 'Sentou-se junto ao leito e explicou-lhe a fé com palavras simples.']),
      // SUPOSICIÓN HISTÓRICA: el padre, el vecino guía y su papel no aparecen en las fuentes.
      pers('PM', 'cuadra', '', '👨‍🌾', ['Padre de Montagne', 'Campesino de Les Palais', 'Atendía a los animales para no oír la agonía de su hijo.'], ['Pai de Montagne', 'Labrego de Les Palais', 'Atendía os animais para non oír a agonía do seu fillo.'], ['Pai de Montagne', 'Camponês de Les Palais', 'Tratava dos animais para não ouvir a agonia do filho.']),
      pers('VG', 'senda_palais', '', '🧑', ['Vecino guía', 'Mensajero de la aldea', 'Había bajado a buscar al vicario y le indicaba el camino.'], ['Veciño guía', 'Mensaxeiro da aldea', 'Baixara buscar o vigario e indicáballe o camiño.'], ['Vizinho guia', 'Mensageiro da aldeia', 'Tinha descido à procura do vigário e indicava-lhe o caminho.']),
      pers('EN', 'casa_vecina', '', '🛌', ['Otro enfermo', 'Vecino del caserío', 'Marcelino fue a verlo justo después de confesar al joven.'], ['Outro enfermo', 'Veciño do caserío', 'Marcelino foi velo xusto despois de confesar o mozo.'], ['Outro doente', 'Vizinho do lugarejo', 'Marcelino foi vê-lo logo depois de confessar o jovem.']),
      pers('RE', 'casa_parroquial', '', '👴', ['Párroco Rebod', 'Párroco de La Valla', 'Había enviado a su vicario a atender a los enfermos de las aldeas.'], ['Párroco Rebod', 'Párroco de La Valla', 'Enviara o seu vigario a atender os enfermos das aldeas.'], ['Pároco Rebod', 'Pároco de La Valla', 'Tinha enviado o seu vigário a atender os doentes das aldeias.']),
      pers('JM', 'iglesia_lavalla', '', '🧑‍🌾', ['Jean-Marie Granjon', 'Futuro primer hermano', 'Marcelino lo había conocido días antes y le estaba enseñando a leer.'], ['Jean-Marie Granjon', 'Futuro primeiro irmán', 'Marcelino coñecérao días antes e estáballe ensinando a ler.'], ['Jean-Marie Granjon', 'Futuro primeiro irmão', 'Marcelino tinha-o conhecido dias antes e estava a ensiná-lo a ler.'])
    ],
    pistas: [
      pista('El muchacho tenía unos diecisiete años y nadie le había hablado nunca de Dios.', 'O rapaz tiña uns dezasete anos e ninguén lle falara nunca de Deus.', 'O rapaz tinha uns dezassete anos e ninguém lhe tinha falado de Deus.', 'MO'),
      pista('El vicario pasó cerca de dos horas instruyéndolo y después lo confesó.', 'O vigario pasou preto de dúas horas instruíndoo e despois confesouno.', 'O vigário passou cerca de duas horas a instruí-lo e depois confessou-o.', 'MC,MO'),
      pista('Al salir, Marcelino fue a visitar a otro enfermo del vecindario.', 'Ao saír, Marcelino foi visitar outro enfermo da veciñanza.', 'Ao sair, Marcelino foi visitar outro doente da vizinhança.', 'MC,EN'),
      pista('Pocos días antes, el 26 de octubre, Marcelino había conocido a Granjon al visitar a otro enfermo.', 'Poucos días antes, o 26 de outubro, Marcelino coñecera a Granjon ao visitar outro enfermo.', 'Poucos dias antes, a 26 de outubro, Marcelino tinha conhecido Granjon ao visitar outro doente.', 'MC,JM')
    ]
  },
  // ───────────────────────── 011 ─────────────────────────
  {
    id: '011-HM',
    nivel: 'medium',
    rasgos: ['espiritu_familia', 'presencia'],
    nombre: ['La fiebre de L’Hermitage', 'A febre de L’Hermitage', 'A febre de L’Hermitage'],
    categoria: ['Crisis y crecimiento', 'Crise e crecemento', 'Crise e crescimento'],
    // SUPOSICIÓN HISTÓRICA: número de capítulo por comprobar en Lanfrey.
    fuente: ['L’Hermitage · Lanfrey T. 1, cap. 7', 'L’Hermitage · Lanfrey T. 1, cap. 7', 'L’Hermitage · Lanfrey T. 1, cap. 7'],
    textoClave: [
      'A finales de 1825, Marcelino cayó gravemente enfermo en L’Hermitage, una casa recién construida y cargada de deudas.',
      'A finais de 1825, Marcelino caeu gravemente enfermo en L’Hermitage, unha casa recén construída e cargada de débedas.',
      'No final de 1825, Marcelino adoeceu gravemente em L’Hermitage, uma casa acabada de construir e carregada de dívidas.'
    ],
    contexto: [
      'Jean-Claude Courveille, que había propuesto el proyecto marista en Fourvière, vivía en L’Hermitage y se consideraba superior de la obra. Durante la enfermedad del fundador intentó dirigir a los hermanos con severidad, mientras los acreedores temían perder su dinero. Los hermanos permanecieron fieles a Marcelino, y en 1826 Courveille se retiró a la trapa de Aiguebelle. El padre Terraillon también dejó la casa.',
      'Jean-Claude Courveille, que propuxera o proxecto marista en Fourvière, vivía en L’Hermitage e considerábase superior da obra. Durante a enfermidade do fundador intentou dirixir os irmáns con severidade, mentres os acredores temían perder os seus cartos. Os irmáns permaneceron fieis a Marcelino, e en 1826 Courveille retirouse á trapa de Aiguebelle. O padre Terraillon tamén deixou a casa.',
      'Jean-Claude Courveille, que tinha proposto o projeto marista em Fourvière, vivia em L’Hermitage e considerava-se superior da obra. Durante a doença do fundador tentou dirigir os irmãos com severidade, enquanto os credores temiam perder o seu dinheiro. Os irmãos permaneceram fiéis a Marcelino e, em 1826, Courveille retirou-se para a Trapa de Aiguebelle. O padre Terraillon também deixou a casa.'
    ],
    explicacion: [
      'El responsable de la crisis fue Jean-Claude Courveille: aprovechó la enfermedad de Marcelino para imponerse a los hermanos con dureza. Ellos no lo aceptaron como guía, Marcelino se recuperó en 1826 y la comunidad salió de la prueba más unida en torno a su fundador.',
      'O responsable da crise foi Jean-Claude Courveille: aproveitou a enfermidade de Marcelino para impoñerse aos irmáns con dureza. Eles non o aceptaron como guía, Marcelino recuperouse en 1826 e a comunidade saíu da proba máis unida arredor do seu fundador.',
      'O responsável pela crise foi Jean-Claude Courveille: aproveitou a doença de Marcelino para se impor aos irmãos com dureza. Eles não o aceitaram como guia, Marcelino recuperou em 1826 e a comunidade saiu da prova mais unida em torno do seu fundador.'
    ],
    intro: [
      'L’Hermitage, invierno de 1825. El fundador arde de fiebre, la casa nueva aún no está pagada y alguien quiere aprovechar el momento para mandar sobre los hermanos. Descubre dónde estaba cada uno y quién puso en peligro el espíritu de familia.',
      'L’Hermitage, inverno de 1825. O fundador arde en febre, a casa nova aínda non está pagada e alguén quere aproveitar o momento para mandar sobre os irmáns. Descobre onde estaba cada quen e quen puxo en perigo o espírito de familia.',
      'L’Hermitage, inverno de 1825. O fundador arde em febre, a casa nova ainda não está paga e alguém quer aproveitar o momento para mandar nos irmãos. Descobre onde estava cada um e quem pôs em perigo o espírito de família.'
    ],
    epilogo: [
      '¡Caso resuelto! Courveille quedó al descubierto y dejó la obra en 1826. Marcelino, ya recuperado, volvió a guiar a sus hermanos con la bondad de un padre.',
      'Caso resolto! Courveille quedou ao descuberto e deixou a obra en 1826. Marcelino, xa recuperado, volveu guiar os seus irmáns coa bondade dun pai.',
      'Caso resolvido! Courveille ficou a descoberto e deixou a obra em 1826. Marcelino, já recuperado, voltou a guiar os seus irmãos com a bondade de um pai.'
    ],
    salas: [
      sala('cuarto_fundador', 'red', ['Cuarto del fundador', 'Cuarto', 'Habitación donde Marcelino guardaba cama.'], ['Cuarto do fundador', 'Cuarto', 'Habitación onde Marcelino gardaba cama.'], ['Quarto do fundador', 'Quarto', 'Divisão onde Marcelino estava de cama.']),
      sala('capilla_hermitage', 'purple', ['Capilla de L’Hermitage', 'Capilla', 'Lugar de oración de la comunidad.'], ['Capela de L’Hermitage', 'Capela', 'Lugar de oración da comunidade.'], ['Capela de L’Hermitage', 'Capela', 'Lugar de oração da comunidade.']),
      sala('cocina', 'amber', ['Cocina de la comunidad', 'Cocina', 'Donde se preparaban las comidas de la casa.'], ['Cociña da comunidade', 'Cociña', 'Onde se preparaban as comidas da casa.'], ['Cozinha da comunidade', 'Cozinha', 'Onde se preparavam as refeições da casa.']),
      sala('sala_estudio', 'blue', ['Sala de estudio', 'Estudio', 'Aula donde los jóvenes hermanos se formaban.'], ['Sala de estudo', 'Estudo', 'Aula onde os irmáns novos se formaban.'], ['Sala de estudo', 'Estudo', 'Sala onde os irmãos jovens se formavam.']),
      sala('obras', 'stone', ['Obras de la casa', 'Obras', 'Muros y dependencias aún por terminar.'], ['Obras da casa', 'Obras', 'Muros e dependencias aínda por rematar.'], ['Obras da casa', 'Obras', 'Muros e dependências ainda por acabar.']),
      sala('rectoria_stchamond', 'indigo', ['Rectoría de Saint-Chamond', 'Saint-Chamond', 'Casa del párroco de la ciudad vecina.'], ['Reitoral de Saint-Chamond', 'Saint-Chamond', 'Casa do párroco da cidade veciña.'], ['Residência paroquial de Saint-Chamond', 'Saint-Chamond', 'Casa do pároco da cidade vizinha.'])
    ],
    objetos: [
      objeto('cuarto_fundador', '🛏️', ['Cama del enfermo', 'Lecho donde Marcelino pasó semanas con fiebre.'], ['Cama do enfermo', 'Leito onde Marcelino pasou semanas con febre.'], ['Cama do doente', 'Leito onde Marcelino passou semanas com febre.']),
      objeto('capilla_hermitage', '✝️', ['Crucifijo', 'Cruz ante la que rezaba la comunidad.'], ['Crucifixo', 'Cruz diante da que rezaba a comunidade.'], ['Crucifixo', 'Cruz diante da qual rezava a comunidade.']),
      objeto('cocina', '🍲', ['Olla de caldo', 'Comida caliente para el enfermo.'], ['Pota de caldo', 'Comida quente para o enfermo.'], ['Panela de caldo', 'Comida quente para o doente.']),
      objeto('obras', '🧱', ['Pila de piedras', 'Material que los propios hermanos acarreaban.'], ['Morea de pedras', 'Material que os propios irmáns acarrexaban.'], ['Monte de pedras', 'Material que os próprios irmãos carregavam.']),
      objeto('rectoria_stchamond', '📜', ['Pagarés', 'Papeles de las deudas de la construcción.'], ['Pagarés', 'Papeis das débedas da construción.'], ['Promissórias', 'Papéis das dívidas da construção.'])
    ],
    personajes: [
      pers('MC', 'cuarto_fundador', 'V', '🤒', ['Marcelino Champagnat', 'Fundador enfermo', 'Agotado por el trabajo, temía dejar a los hermanos sin rumbo.'], ['Marcelino Champagnat', 'Fundador enfermo', 'Esgotado polo traballo, temía deixar os irmáns sen rumbo.'], ['Marcelino Champagnat', 'Fundador doente', 'Esgotado pelo trabalho, temia deixar os irmãos sem rumo.']),
      pers('CV', 'cuarto_fundador', 'M', '🧔', ['Jean-Claude Courveille', 'Sacerdote de la casa', 'Se creía el verdadero superior y quería mandar con mano dura.'], ['Jean-Claude Courveille', 'Sacerdote da casa', 'Críase o verdadeiro superior e quería mandar con man dura.'], ['Jean-Claude Courveille', 'Sacerdote da casa', 'Julgava-se o verdadeiro superior e queria mandar com mão dura.']),
      pers('TE', 'capilla_hermitage', '', '🧑‍🦳', ['Étienne Terraillon', 'Sacerdote auxiliar', 'Había venido a ayudar, pero apoyó poco a Marcelino en la crisis.'], ['Étienne Terraillon', 'Sacerdote auxiliar', 'Viñera axudar, pero apoiou pouco a Marcelino na crise.'], ['Étienne Terraillon', 'Sacerdote auxiliar', 'Tinha vindo ajudar, mas apoiou pouco Marcelino na crise.']),
      // SUPOSICIÓN HISTÓRICA: el lugar y la tarea de los hermanos François, Stanislas y Louis son inventados.
      pers('FR', 'sala_estudio', '', '🧑‍🎓', ['Hermano François (Gabriel Rivat)', 'Hermano joven', 'Había entrado de niño en La Valla y sería el sucesor de Marcelino.'], ['Irmán François (Gabriel Rivat)', 'Irmán novo', 'Entrara de neno en La Valla e sería o sucesor de Marcelino.'], ['Irmão François (Gabriel Rivat)', 'Irmão jovem', 'Tinha entrado em criança em La Valla e seria o sucessor de Marcelino.']),
      pers('ST', 'cocina', '', '🧑‍🍳', ['Hermano Stanislas', 'Hermano de la casa', 'Muy unido al fundador, le preparaba algo caliente y rezaba por él.'], ['Irmán Stanislas', 'Irmán da casa', 'Moi unido ao fundador, preparáballe algo quente e rezaba por el.'], ['Irmão Stanislas', 'Irmão da casa', 'Muito ligado ao fundador, preparava-lhe algo quente e rezava por ele.']),
      pers('LU', 'obras', '', '🧑‍🔧', ['Hermano Louis (Jean-Baptiste Audras)', 'Uno de los primeros hermanos', 'Seguía con el trabajo de la casa y defendía la fidelidad al fundador.'], ['Irmán Louis (Jean-Baptiste Audras)', 'Un dos primeiros irmáns', 'Seguía co traballo da casa e defendía a fidelidade ao fundador.'], ['Irmão Louis (Jean-Baptiste Audras)', 'Um dos primeiros irmãos', 'Continuava o trabalho da casa e defendia a fidelidade ao fundador.']),
      // SUPOSICIÓN HISTÓRICA: el papel concreto de Dervieux ante los acreedores está por comprobar.
      pers('DE', 'rectoria_stchamond', '', '👴', ['Párroco Dervieux', 'Párroco de Saint-Chamond', 'Tranquilizaba a los acreedores, preocupados por las deudas de la obra.'], ['Párroco Dervieux', 'Párroco de Saint-Chamond', 'Tranquilizaba os acredores, preocupados polas débedas da obra.'], ['Pároco Dervieux', 'Pároco de Saint-Chamond', 'Tranquilizava os credores, preocupados com as dívidas da obra.'])
    ],
    pistas: [
      pista('Marcelino cayó enfermo hacia la Navidad de 1825 y muchos temieron por su vida.', 'Marcelino caeu enfermo cara ao Nadal de 1825 e moitos temeron pola súa vida.', 'Marcelino adoeceu por volta do Natal de 1825 e muitos temeram pela sua vida.', 'MC'),
      pista('Los acreedores se inquietaron: la casa nueva todavía no estaba pagada.', 'Os acredores inquietáronse: a casa nova aínda non estaba pagada.', 'Os credores inquietaram-se: a casa nova ainda não estava paga.', 'DE'),
      pista('Uno de los sacerdotes de la casa quiso imponer a los hermanos una disciplina severa.', 'Un dos sacerdotes da casa quixo impoñer aos irmáns unha disciplina severa.', 'Um dos sacerdotes da casa quis impor aos irmãos uma disciplina severa.', 'CV'),
      pista('Los hermanos siguieron unidos a Marcelino; en 1826, Courveille y Terraillon dejaron la casa.', 'Os irmáns seguiron unidos a Marcelino; en 1826, Courveille e Terraillon deixaron a casa.', 'Os irmãos continuaram unidos a Marcelino; em 1826, Courveille e Terraillon deixaram a casa.', 'CV,TE')
    ]
  },
  // ───────────────────────── 012 ─────────────────────────
  {
    id: '012-HM',
    nivel: 'medium',
    rasgos: ['estilo_maria', 'presencia'],
    nombre: ['Rumbo a Oceanía', 'Rumbo a Oceanía', 'Rumo à Oceânia'],
    categoria: ['Misión', 'Misión', 'Missão'],
    fuente: ['L’Hermitage · Lanfrey T. 1', 'L’Hermitage · Lanfrey T. 1', 'L’Hermitage · Lanfrey T. 1'],
    textoClave: [
      'En 1836, Roma aprobó la Sociedad de María y le confió Oceanía occidental; tres hermanos de Marcelino partieron con los primeros padres maristas.',
      'En 1836, Roma aprobou a Sociedade de María e confioulle Oceanía occidental; tres irmáns de Marcelino partiron cos primeiros padres maristas.',
      'Em 1836, Roma aprovou a Sociedade de Maria e confiou-lhe a Oceânia ocidental; três irmãos de Marcelino partiram com os primeiros padres maristas.'
    ],
    contexto: [
      'El papa Gregorio XVI aprobó la Sociedad de María el 29 de abril de 1836. En septiembre, Jean-Claude Colin fue elegido superior general y Marcelino hizo su profesión como padre marista. La primera expedición, guiada por el obispo Pompallier, salió de Le Havre la víspera de Navidad de 1836; en ella viajaba Pierre Chanel, que moriría mártir en Futuna en 1841.',
      'O papa Gregorio XVI aprobou a Sociedade de María o 29 de abril de 1836. En setembro, Jean-Claude Colin foi elixido superior xeral e Marcelino fixo a súa profesión como padre marista. A primeira expedición, guiada polo bispo Pompallier, saíu de Le Havre a véspera de Nadal de 1836; nela viaxaba Pierre Chanel, que morrería mártir en Futuna en 1841.',
      'O papa Gregório XVI aprovou a Sociedade de Maria a 29 de abril de 1836. Em setembro, Jean-Claude Colin foi eleito superior-geral e Marcelino fez a sua profissão como padre marista. A primeira expedição, guiada pelo bispo Pompallier, saiu de Le Havre na véspera de Natal de 1836; nela viajava Pierre Chanel, que morreria mártir em Futuna em 1841.'
    ],
    explicacion: [
      'El responsable de que los hermanos llegaran a Oceanía fue Marcelino: él mismo había soñado con ir a las misiones, pero su lugar estaba con sus hermanos, así que propuso a tres de ellos. El hermano Marie-Nizier aceptó con alegría y partió con los hermanos Michel y Joseph-Xavier.',
      'O responsable de que os irmáns chegasen a Oceanía foi Marcelino: el mesmo soñara con ir ás misións, pero o seu lugar estaba cos seus irmáns, así que propuxo a tres deles. O irmán Marie-Nizier aceptou con alegría e partiu cos irmáns Michel e Joseph-Xavier.',
      'O responsável por os irmãos chegarem à Oceânia foi Marcelino: ele próprio tinha sonhado ir para as missões, mas o seu lugar era junto dos irmãos, por isso propôs três deles. O irmão Marie-Nizier aceitou com alegria e partiu com os irmãos Michel e Joseph-Xavier.'
    ],
    intro: [
      'L’Hermitage, otoño de 1836. Roma acaba de confiar a los maristas unas islas lejanas y desconocidas. Alguien tiene que decidir qué hermanos irán. Averigua dónde estaba cada uno y quién eligió a los primeros misioneros.',
      'L’Hermitage, outono de 1836. Roma acaba de confiarlles aos maristas unhas illas afastadas e descoñecidas. Alguén ten que decidir que irmáns irán. Descobre onde estaba cada quen e quen escolleu os primeiros misioneiros.',
      'L’Hermitage, outono de 1836. Roma acaba de confiar aos maristas umas ilhas longínquas e desconhecidas. Alguém tem de decidir que irmãos irão. Descobre onde estava cada um e quem escolheu os primeiros missionários.'
    ],
    epilogo: [
      '¡Caso resuelto! Marcelino envió a sus hermanos al otro lado del mundo. Desde entonces, los hermanos maristas están presentes en Oceanía.',
      'Caso resolto! Marcelino enviou os seus irmáns ao outro lado do mundo. Desde entón, os irmáns maristas están presentes en Oceanía.',
      'Caso resolvido! Marcelino enviou os seus irmãos para o outro lado do mundo. Desde então, os irmãos maristas estão presentes na Oceânia.'
    ],
    salas: [
      // SUPOSICIÓN HISTÓRICA: el despacho, el huerto y la capilla como escenario de la elección son inventados.
      sala('despacho', 'red', ['Despacho del superior', 'Despacho', 'Pequeña habitación de Marcelino en L’Hermitage.'], ['Despacho do superior', 'Despacho', 'Pequena habitación de Marcelino en L’Hermitage.'], ['Gabinete do superior', 'Gabinete', 'Pequena divisão de Marcelino em L’Hermitage.']),
      sala('capilla_hermitage', 'purple', ['Capilla de L’Hermitage', 'Capilla', 'Allí la comunidad encomendaba a María la misión.'], ['Capela de L’Hermitage', 'Capela', 'Alí a comunidade encomendáballe a María a misión.'], ['Capela de L’Hermitage', 'Capela', 'Ali a comunidade confiava a Maria a missão.']),
      sala('huerto', 'emerald', ['Huerto de la casa', 'Huerto', 'Tierra cultivada por los hermanos junto al Gier.'], ['Horta da casa', 'Horta', 'Terra cultivada polos irmáns xunto ao Gier.'], ['Horta da casa', 'Horta', 'Terra cultivada pelos irmãos junto ao Gier.']),
      sala('belley', 'blue', ['Colegio de Belley', 'Belley', 'Casa donde residía el padre Colin.'], ['Colexio de Belley', 'Belley', 'Casa onde residía o padre Colin.'], ['Colégio de Belley', 'Belley', 'Casa onde residia o padre Colin.']),
      sala('puerto_havre', 'sky', ['Puerto de Le Havre', 'Le Havre', 'Puerto atlántico desde el que zarpó la expedición.'], ['Porto de Le Havre', 'Le Havre', 'Porto atlántico desde o que zarpou a expedición.'], ['Porto de Le Havre', 'Le Havre', 'Porto atlântico de onde partiu a expedição.']),
      sala('navio', 'teal', ['Navío de la expedición', 'Navío', 'Velero que llevaría a los misioneros al Pacífico.'], ['Navío da expedición', 'Navío', 'Veleiro que levaría os misioneiros ao Pacífico.'], ['Navio da expedição', 'Navio', 'Veleiro que levaria os missionários ao Pacífico.'])
    ],
    objetos: [
      objeto('despacho', '🗺️', ['Mapa de Oceanía', 'Islas lejanas que nadie de la casa conocía.'], ['Mapa de Oceanía', 'Illas afastadas que ninguén da casa coñecía.'], ['Mapa da Oceânia', 'Ilhas longínquas que ninguém da casa conhecia.']),
      objeto('capilla_hermitage', '📿', ['Rosario', 'Oración a María por los misioneros.'], ['Rosario', 'Oración a María polos misioneiros.'], ['Terço', 'Oração a Maria pelos missionários.']),
      objeto('huerto', '🌱', ['Semillero', 'Plantas que los hermanos cuidaban cada día.'], ['Sementeira', 'Plantas que os irmáns coidaban cada día.'], ['Viveiro', 'Plantas de que os irmãos cuidavam todos os dias.']),
      objeto('puerto_havre', '⚓', ['Ancla', 'Hierro del muelle atlántico.'], ['Áncora', 'Ferro do peirao atlántico.'], ['Âncora', 'Ferro do cais atlântico.']),
      objeto('navio', '🧭', ['Brújula', 'Instrumento para cruzar dos océanos.'], ['Compás', 'Instrumento para cruzar dous océanos.'], ['Bússola', 'Instrumento para atravessar dois oceanos.'])
    ],
    personajes: [
      pers('MN', 'despacho', 'V', '🧑', ['Hermano Marie-Nizier (Jean-Marie Delorme)', 'Hermano misionero', 'Aceptó con alegría partir hacia tierras desconocidas.'], ['Irmán Marie-Nizier (Jean-Marie Delorme)', 'Irmán misioneiro', 'Aceptou con alegría partir cara a terras descoñecidas.'], ['Irmão Marie-Nizier (Jean-Marie Delorme)', 'Irmão missionário', 'Aceitou com alegria partir para terras desconhecidas.']),
      pers('MC', 'despacho', 'M', '🧑‍🏫', ['Marcelino Champagnat', 'Superior de los hermanos', 'Habría querido ir él mismo, pero su lugar estaba con los hermanos.'], ['Marcelino Champagnat', 'Superior dos irmáns', 'Quixera ir el mesmo, pero o seu lugar estaba cos irmáns.'], ['Marcelino Champagnat', 'Superior dos irmãos', 'Teria querido ir ele próprio, mas o seu lugar era junto dos irmãos.']),
      pers('MI', 'capilla_hermitage', '', '🙏', ['Hermano Michel (Antoine Colombon)', 'Hermano misionero', 'Se preparaba en oración antes del largo viaje.'], ['Irmán Michel (Antoine Colombon)', 'Irmán misioneiro', 'Preparábase en oración antes da longa viaxe.'], ['Irmão Michel (Antoine Colombon)', 'Irmão missionário', 'Preparava-se em oração antes da longa viagem.']),
      // SUPOSICIÓN HISTÓRICA: el oficio manual de Joseph-Xavier no está comprobado.
      pers('JX', 'huerto', '', '🧑‍🌾', ['Hermano Joseph-Xavier (Jean-Xavier Luzy)', 'Hermano misionero', 'Hombre práctico: sus manos serían útiles en la misión.'], ['Irmán Joseph-Xavier (Jean-Xavier Luzy)', 'Irmán misioneiro', 'Home práctico: as súas mans serían útiles na misión.'], ['Irmão Joseph-Xavier (Jean-Xavier Luzy)', 'Irmão missionário', 'Homem prático: as suas mãos seriam úteis na missão.']),
      pers('CO', 'belley', '', '🧔', ['Jean-Claude Colin', 'Superior general marista', 'Elegido en septiembre de 1836, organizaba la expedición desde Belley.'], ['Jean-Claude Colin', 'Superior xeral marista', 'Elixido en setembro de 1836, organizaba a expedición desde Belley.'], ['Jean-Claude Colin', 'Superior-geral marista', 'Eleito em setembro de 1836, organizava a expedição a partir de Belley.']),
      pers('PO', 'puerto_havre', '', '🧑‍⚖️', ['Obispo Pompallier', 'Vicario apostólico', 'Encabezaba la expedición que zarpó de Le Havre.'], ['Bispo Pompallier', 'Vigario apostólico', 'Encabezaba a expedición que zarpou de Le Havre.'], ['Bispo Pompallier', 'Vigário apostólico', 'Chefiava a expedição que partiu de Le Havre.']),
      pers('CH', 'navio', '', '🧑‍🦱', ['Padre Pierre Chanel', 'Sacerdote marista', 'Moriría mártir en la isla de Futuna en 1841.'], ['Padre Pierre Chanel', 'Sacerdote marista', 'Morrería mártir na illa de Futuna en 1841.'], ['Padre Pierre Chanel', 'Sacerdote marista', 'Morreria mártir na ilha de Futuna em 1841.'])
    ],
    pistas: [
      pista('Gregorio XVI aprobó la Sociedad de María el 29 de abril de 1836.', 'Gregorio XVI aprobou a Sociedade de María o 29 de abril de 1836.', 'Gregório XVI aprovou a Sociedade de Maria a 29 de abril de 1836.', 'CO'),
      pista('En septiembre de 1836, Marcelino hizo su profesión como padre marista.', 'En setembro de 1836, Marcelino fixo a súa profesión como padre marista.', 'Em setembro de 1836, Marcelino fez a sua profissão como padre marista.', 'MC'),
      pista('Tres hermanos fueron elegidos para acompañar a los primeros padres misioneros.', 'Tres irmáns foron elixidos para acompañar os primeiros padres misioneiros.', 'Três irmãos foram escolhidos para acompanhar os primeiros padres missionários.', 'MN,MI,JX'),
      pista('La expedición zarpó la víspera de Navidad de 1836 rumbo al Pacífico.', 'A expedición zarpou a véspera de Nadal de 1836 rumbo ao Pacífico.', 'A expedição partiu na véspera de Natal de 1836 rumo ao Pacífico.', 'PO,CH')
    ]
  }
];
