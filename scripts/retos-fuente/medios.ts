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
    // Reto escrito según la tradición, a petición del usuario. Lanfrey (T. 1, cap. 3) duda del nombre
    // de Montagne, de Les Palais y de la fecha: el encuentro sería hacia 1819.
    id: '010-HM',
    nivel: 'medium',
    rasgos: ['presencia', 'sencillez'],
    nombre: ['El joven de Les Palais', 'O mozo de Les Palais', 'O jovem de Les Palais'],
    categoria: ['Fundación', 'Fundación', 'Fundação'],
    fuente: ['La Valla · Lanfrey T. 1, cap. 3; Tras las huellas, 1.5', 'La Valla · Lanfrey T. 1, cap. 3; Tras las huellas, 1.5', 'La Valla · Lanfrey T. 1, cap. 3; Tras las huellas, 1.5'],
    textoClave: [
      'A finales de octubre de 1816, Marcelino asistió en Les Palais a un joven moribundo, Jean-Baptiste Montagne, que no sabía nada de Dios.',
      'A finais de outubro de 1816, Marcelino asistiu en Les Palais a un mozo moribundo, Jean-Baptiste Montagne, que non sabía nada de Deus.',
      'No final de outubro de 1816, Marcelino assistiu em Les Palais um jovem moribundo, Jean-Baptiste Montagne, que não sabia nada de Deus.'
    ],
    contexto: [
      'Les Palais era una aldea de la parroquia de La Valla, en las laderas del Pilat. Según la biografía del hermano Jean-Baptiste (1856), aquel encuentro convenció a Marcelino de que no podía esperar más para fundar hermanos que educaran a los niños del campo. La fecha tradicional es el 28 de octubre de 1816.',
      'Les Palais era unha aldea da parroquia de La Valla, nas ladeiras do Pilat. Segundo a biografía do irmán Jean-Baptiste (1856), aquel encontro convenceu a Marcelino de que non podía agardar máis para fundar irmáns que educasen os nenos do rural. A data tradicional é o 28 de outubro de 1816.',
      'Les Palais era uma aldeia da paróquia de La Valla, nas encostas do Pilat. Segundo a biografia do irmão Jean-Baptiste (1856), esse encontro convenceu Marcelino de que não podia esperar mais para fundar irmãos que educassem as crianças do campo. A data tradicional é 28 de outubro de 1816.'
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
      // SUPOSICIÓN HISTÓRICA: la Vida solo menciona a «sus padres»; el papel del padre y el vecino guía son inventados.
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
    fuente: ['L’Hermitage · Lanfrey T. 1, cap. 6', 'L’Hermitage · Lanfrey T. 1, cap. 6', 'L’Hermitage · Lanfrey T. 1, cap. 6'],
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
      // SUPOSICIÓN HISTÓRICA: el lugar donde estaban François, Stanislas y Louis es inventado (Lanfrey T. 1, cap. 6, cuenta que Stanislas plantó cara a Courveille y que Louis pensó en el sacerdocio).
      pers('FR', 'sala_estudio', '', '🧑‍🎓', ['Hermano François (Gabriel Rivat)', 'Hermano joven', 'Había entrado de niño en La Valla y sería el sucesor de Marcelino.'], ['Irmán François (Gabriel Rivat)', 'Irmán novo', 'Entrara de neno en La Valla e sería o sucesor de Marcelino.'], ['Irmão François (Gabriel Rivat)', 'Irmão jovem', 'Tinha entrado em criança em La Valla e seria o sucessor de Marcelino.']),
      pers('ST', 'cocina', '', '🧑‍🍳', ['Hermano Stanislas', 'Hermano de la casa', 'Muy unido al fundador, le reprochó a Courveille su dureza y avisó a Marcelino.'], ['Irmán Stanislas', 'Irmán da casa', 'Moi unido ao fundador, reprochoulle a Courveille a súa dureza e avisou a Marcelino.'], ['Irmão Stanislas', 'Irmão da casa', 'Muito ligado ao fundador, censurou a Courveille a sua dureza e avisou Marcelino.']),
      pers('LU', 'obras', '', '🧑‍🔧', ['Hermano Louis (Jean-Baptiste Audras)', 'Uno de los primeros hermanos', 'Seguía con el trabajo de la casa, aunque dudaba si hacerse sacerdote.'], ['Irmán Louis (Jean-Baptiste Audras)', 'Un dos primeiros irmáns', 'Seguía co traballo da casa, aínda que dubidaba se facerse sacerdote.'], ['Irmão Louis (Jean-Baptiste Audras)', 'Um dos primeiros irmãos', 'Continuava o trabalho da casa, embora hesitasse em fazer-se padre.']),
      // Lanfrey T. 1, cap. 6: Marcelino convaleció en casa de Dervieux, que «habría aceptado pagar las deudas más perentorias».
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
    fuente: ['L’Hermitage · Lanfrey T. 1, cap. 7; Tras las huellas, 1.8', 'L’Hermitage · Lanfrey T. 1, cap. 7; Tras las huellas, 1.8', 'L’Hermitage · Lanfrey T. 1, cap. 7; Tras las huellas, 1.8'],
    textoClave: [
      'En 1836, Roma aprobó la Sociedad de María y le confió Oceanía occidental; tres hermanos de Marcelino partieron con los primeros padres maristas.',
      'En 1836, Roma aprobou a Sociedade de María e confioulle Oceanía occidental; tres irmáns de Marcelino partiron cos primeiros padres maristas.',
      'Em 1836, Roma aprovou a Sociedade de Maria e confiou-lhe a Oceânia ocidental; três irmãos de Marcelino partiram com os primeiros padres maristas.'
    ],
    contexto: [
      'El papa Gregorio XVI aprobó la Sociedad de María el 29 de abril de 1836. El 24 de septiembre, una veintena de aspirantes maristas, Marcelino entre ellos, eligió a Jean-Claude Colin superior general. La primera expedición, guiada por el obispo Pompallier, partió el 24 de diciembre de 1836 con los padres Servant, Bataillon, Bret y Chanel.',
      'O papa Gregorio XVI aprobou a Sociedade de María o 29 de abril de 1836. O 24 de setembro, unha vintena de aspirantes maristas, Marcelino entre eles, elixiu a Jean-Claude Colin superior xeral. A primeira expedición, guiada polo bispo Pompallier, partiu o 24 de decembro de 1836 cos padres Servant, Bataillon, Bret e Chanel.',
      'O papa Gregório XVI aprovou a Sociedade de Maria a 29 de abril de 1836. A 24 de setembro, uma vintena de aspirantes maristas, Marcelino entre eles, elegeu Jean-Claude Colin superior-geral. A primeira expedição, guiada pelo bispo Pompallier, partiu a 24 de dezembro de 1836 com os padres Servant, Bataillon, Bret e Chanel.'
    ],
    explicacion: [
      'El responsable de que los hermanos llegaran a Oceanía fue Marcelino: pidió a Colin ir él mismo, pero Colin le respondió que su misión era «prepararles apóstoles», y Marcelino preparó a tres de sus hermanos. El hermano Marie-Nizier aceptó con alegría y partió con los hermanos Michel y Joseph-Xavier.',
      'O responsable de que os irmáns chegasen a Oceanía foi Marcelino: pediulle a Colin ir el mesmo, pero Colin respondeulle que a súa misión era «prepararlles apóstolos», e Marcelino preparou a tres dos seus irmáns. O irmán Marie-Nizier aceptou con alegría e partiu cos irmáns Michel e Joseph-Xavier.',
      'O responsável por os irmãos chegarem à Oceânia foi Marcelino: pediu a Colin para ir ele próprio, mas Colin respondeu-lhe que a sua missão era «preparar-lhes apóstolos», e Marcelino preparou três dos seus irmãos. O irmão Marie-Nizier aceitou com alegria e partiu com os irmãos Michel e Joseph-Xavier.'
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
      // SUPOSICIÓN HISTÓRICA: las fuentes no nombran el puerto de salida.
      sala('puerto', 'sky', ['Puerto de embarque', 'Puerto', 'Muelle desde el que zarpó la expedición.'], ['Porto de embarque', 'Porto', 'Peirao desde o que zarpou a expedición.'], ['Porto de embarque', 'Porto', 'Cais de onde partiu a expedição.']),
      sala('navio', 'teal', ['Navío de la expedición', 'Navío', 'Velero que llevaría a los misioneros al Pacífico.'], ['Navío da expedición', 'Navío', 'Veleiro que levaría os misioneiros ao Pacífico.'], ['Navio da expedição', 'Navio', 'Veleiro que levaria os missionários ao Pacífico.'])
    ],
    objetos: [
      objeto('despacho', '🗺️', ['Mapa de Oceanía', 'Islas lejanas que nadie de la casa conocía.'], ['Mapa de Oceanía', 'Illas afastadas que ninguén da casa coñecía.'], ['Mapa da Oceânia', 'Ilhas longínquas que ninguém da casa conhecia.']),
      objeto('capilla_hermitage', '📿', ['Rosario', 'Oración a María por los misioneros.'], ['Rosario', 'Oración a María polos misioneiros.'], ['Terço', 'Oração a Maria pelos missionários.']),
      objeto('huerto', '🌱', ['Semillero', 'Plantas que los hermanos cuidaban cada día.'], ['Sementeira', 'Plantas que os irmáns coidaban cada día.'], ['Viveiro', 'Plantas de que os irmãos cuidavam todos os dias.']),
      objeto('puerto', '⚓', ['Ancla', 'Hierro del muelle.'], ['Áncora', 'Ferro do peirao.'], ['Âncora', 'Ferro do cais.']),
      objeto('navio', '🧭', ['Brújula', 'Instrumento para cruzar dos océanos.'], ['Compás', 'Instrumento para cruzar dous océanos.'], ['Bússola', 'Instrumento para atravessar dois oceanos.'])
    ],
    personajes: [
      pers('MN', 'despacho', 'V', '🧑', ['Hermano Marie-Nizier (Jean-Marie Delorme)', 'Hermano misionero', 'Aceptó con alegría partir hacia tierras desconocidas.'], ['Irmán Marie-Nizier (Jean-Marie Delorme)', 'Irmán misioneiro', 'Aceptou con alegría partir cara a terras descoñecidas.'], ['Irmão Marie-Nizier (Jean-Marie Delorme)', 'Irmão missionário', 'Aceitou com alegria partir para terras desconhecidas.']),
      pers('MC', 'despacho', 'M', '🧑‍🏫', ['Marcelino Champagnat', 'Superior de los hermanos', 'Pidió ir él mismo a Oceanía, pero obedeció cuando le dijeron que no.'], ['Marcelino Champagnat', 'Superior dos irmáns', 'Pediu ir el mesmo a Oceanía, pero obedeceu cando lle dixeron que non.'], ['Marcelino Champagnat', 'Superior dos irmãos', 'Pediu para ir ele próprio à Oceânia, mas obedeceu quando lhe disseram que não.']),
      pers('MI', 'capilla_hermitage', '', '🙏', ['Hermano Michel (Antoine Colombon)', 'Hermano misionero', 'Se preparaba en oración antes del largo viaje.'], ['Irmán Michel (Antoine Colombon)', 'Irmán misioneiro', 'Preparábase en oración antes da longa viaxe.'], ['Irmão Michel (Antoine Colombon)', 'Irmão missionário', 'Preparava-se em oração antes da longa viagem.']),
      // Lanfrey T. 1: los hermanos iban a Oceanía «en función de sus competencias técnicas»; el oficio concreto es una suposición.
      pers('JX', 'huerto', '', '🧑‍🌾', ['Hermano Joseph-Xavier (Jean-Xavier Luzy)', 'Hermano misionero', 'Hombre práctico: sus manos serían útiles en la misión.'], ['Irmán Joseph-Xavier (Jean-Xavier Luzy)', 'Irmán misioneiro', 'Home práctico: as súas mans serían útiles na misión.'], ['Irmão Joseph-Xavier (Jean-Xavier Luzy)', 'Irmão missionário', 'Homem prático: as suas mãos seriam úteis na missão.']),
      pers('CO', 'belley', '', '🧔', ['Jean-Claude Colin', 'Superior general marista', 'Elegido en septiembre de 1836, organizaba la expedición desde Belley.'], ['Jean-Claude Colin', 'Superior xeral marista', 'Elixido en setembro de 1836, organizaba a expedición desde Belley.'], ['Jean-Claude Colin', 'Superior-geral marista', 'Eleito em setembro de 1836, organizava a expedição a partir de Belley.']),
      pers('PO', 'puerto', '', '🧑‍⚖️', ['Obispo Pompallier', 'Vicario apostólico', 'Encabezaba la expedición que zarpó en Nochebuena.'], ['Bispo Pompallier', 'Vigario apostólico', 'Encabezaba a expedición que zarpou en Noiteboa.'], ['Bispo Pompallier', 'Vigário apostólico', 'Chefiava a expedição que partiu na Consoada.']),
      pers('CH', 'navio', '', '🧑‍🦱', ['Padre Pierre Chanel', 'Sacerdote marista', 'Era uno de los cuatro padres que acompañaban al obispo.'], ['Padre Pierre Chanel', 'Sacerdote marista', 'Era un dos catro padres que acompañaban o bispo.'], ['Padre Pierre Chanel', 'Sacerdote marista', 'Era um dos quatro padres que acompanhavam o bispo.'])
    ],
    pistas: [
      pista('Gregorio XVI aprobó la Sociedad de María el 29 de abril de 1836.', 'Gregorio XVI aprobou a Sociedade de María o 29 de abril de 1836.', 'Gregório XVI aprovou a Sociedade de Maria a 29 de abril de 1836.', 'CO'),
      pista('El 24 de septiembre de 1836, Marcelino estuvo entre los que eligieron a Colin superior general.', 'O 24 de setembro de 1836, Marcelino estivo entre os que elixiron a Colin superior xeral.', 'A 24 de setembro de 1836, Marcelino esteve entre os que elegeram Colin superior-geral.', 'MC,CO'),
      pista('Tres hermanos fueron elegidos para acompañar a los primeros padres misioneros.', 'Tres irmáns foron elixidos para acompañar os primeiros padres misioneiros.', 'Três irmãos foram escolhidos para acompanhar os primeiros padres missionários.', 'MN,MI,JX'),
      pista('La expedición zarpó la víspera de Navidad de 1836 rumbo al Pacífico.', 'A expedición zarpou a véspera de Nadal de 1836 rumbo ao Pacífico.', 'A expedição partiu na véspera de Natal de 1836 rumo ao Pacífico.', 'PO,CH')
    ]
  },
  // ───────────────────────── 013 ─────────────────────────
  {
    id: '013-HM',
    nivel: 'medium',
    rasgos: ['estilo_maria', 'presencia'],
    nombre: ['El Acordaos en la nieve', 'O Acordádevos na neve', 'O Lembrai-vos na neve'],
    categoria: ['Confianza en María', 'Confianza en María', 'Confiança em Maria'],
    fuente: ['La Valla · Tras las huellas, 5.16 (Vida, VII); Lanfrey T. 1, cap. 11', 'La Valla · Tras las huellas, 5.16 (Vida, VII); Lanfrey T. 1, cap. 11', 'La Valla · Tras las huellas, 5.16 (Vida, VII); Lanfrey T. 1, cap. 11'],
    textoClave: [
      'En febrero de 1823, al volver de Bourg-Argental, Marcelino y el hermano Stanislas se perdieron en la nieve de los montes del Pilat.',
      'En febreiro de 1823, ao volver de Bourg-Argental, Marcelino e o irmán Stanislas perdéronse na neve dos montes do Pilat.',
      'Em fevereiro de 1823, ao regressar de Bourg-Argental, Marcelino e o irmão Stanislas perderam-se na neve dos montes do Pilat.'
    ],
    contexto: [
      'Uno de los hermanos de Bourg-Argental estaba gravemente enfermo; según Lanfrey, era el joven hermano Jean-Baptiste Furet. Marcelino fue a pie a bendecirlo y quiso regresar a La Valla aquel mismo día, aunque los hermanos y sus amigos le rogaron que no lo hiciera por la nieve y el temporal.',
      'Un dos irmáns de Bourg-Argental estaba gravemente enfermo; segundo Lanfrey, era o novo irmán Jean-Baptiste Furet. Marcelino foi a pé bendicilo e quixo volver a La Valla aquel mesmo día, aínda que os irmáns e os seus amigos lle rogaron que non o fixese pola neve e o temporal.',
      'Um dos irmãos de Bourg-Argental estava gravemente doente; segundo Lanfrey, era o jovem irmão Jean-Baptiste Furet. Marcelino foi a pé abençoá-lo e quis regressar a La Valla nesse mesmo dia, embora os irmãos e os amigos lhe pedissem que não o fizesse por causa da neve e do temporal.'
    ],
    explicacion: [
      'El responsable de la salvación fue el propio Marcelino: cuando el hermano Stanislas se desplomó de cansancio, se arrodilló a su lado y rezó el Acordaos. A los pocos pasos vieron una luz y pasaron la noche en una casa. Desde entonces repetía que María los había librado de una muerte segura.',
      'O responsable da salvación foi o propio Marcelino: cando o irmán Stanislas caeu de cansazo, axeonllouse ao seu carón e rezou o Acordádevos. Aos poucos pasos viron unha luz e pasaron a noite nunha casa. Desde entón repetía que María os librara dunha morte segura.',
      'O responsável pela salvação foi o próprio Marcelino: quando o irmão Stanislas caiu de cansaço, ajoelhou-se ao seu lado e rezou o Lembrai-vos. Poucos passos depois viram uma luz e passaram a noite numa casa. Desde então repetia que Maria os tinha livrado de uma morte certa.'
    ],
    intro: [
      'Montes del Pilat, febrero de 1823. Cae la noche, la ventisca no deja ver el camino y dos viajeros llevan horas perdidos entre los bosques. Descubre dónde estaba cada uno y quién sostuvo al hermano agotado hasta encontrar ayuda.',
      'Montes do Pilat, febreiro de 1823. Cae a noite, a xistra non deixa ver o camiño e dous viaxeiros levan horas perdidos entre os bosques. Descobre onde estaba cada quen e quen sostivo o irmán esgotado ata atopar axuda.',
      'Montes do Pilat, fevereiro de 1823. Cai a noite, a nevasca não deixa ver o caminho e dois viajantes andam há horas perdidos entre os bosques. Descobre onde estava cada um e quem amparou o irmão exausto até encontrar ajuda.'
    ],
    epilogo: [
      '¡Caso resuelto! La oración de Marcelino y una luz en la noche salvaron a los dos caminantes. María era, como él decía, su «Recurso ordinario».',
      'Caso resolto! A oración de Marcelino e unha luz na noite salvaron os dous camiñantes. María era, como el dicía, o seu «Recurso ordinario».',
      'Caso resolvido! A oração de Marcelino e uma luz na noite salvaram os dois caminhantes. Maria era, como ele dizia, o seu «Recurso ordinário».'
    ],
    salas: [
      sala('bosque_pilat', 'red', ['Bosque del Pilat', 'Bosque', 'Ladera nevada donde los caminantes se extraviaron.'], ['Bosque do Pilat', 'Bosque', 'Ladeira nevada onde os camiñantes se perderon.'], ['Bosque do Pilat', 'Bosque', 'Encosta nevada onde os caminhantes se perderam.']),
      sala('cuarto_enfermo', 'sky', ['Cuarto del hermano enfermo', 'Cuarto', 'Habitación de la comunidad de Bourg-Argental.'], ['Cuarto do irmán enfermo', 'Cuarto', 'Habitación da comunidade de Bourg-Argental.'], ['Quarto do irmão doente', 'Quarto', 'Divisão da comunidade de Bourg-Argental.']),
      sala('escuela_bourg', 'blue', ['Escuela de Bourg-Argental', 'Escuela', 'Escuela fundada por los hermanos el 2 de enero de 1822.'], ['Escola de Bourg-Argental', 'Escola', 'Escola fundada polos irmáns o 2 de xaneiro de 1822.'], ['Escola de Bourg-Argental', 'Escola', 'Escola fundada pelos irmãos a 2 de janeiro de 1822.']),
      // SUPOSICIÓN HISTÓRICA: la alcaldía, la casa de la luz y la casa de La Valla como lugares de los personajes son inventados.
      sala('alcaldia', 'stone', ['Alcaldía de Bourg-Argental', 'Alcaldía', 'Casa del alcalde que presidió la llegada de los hermanos.'], ['Alcaldía de Bourg-Argental', 'Alcaldía', 'Casa do alcalde que presidiu a chegada dos irmáns.'], ['Câmara de Bourg-Argental', 'Câmara', 'Casa do presidente da câmara que presidiu à chegada dos irmãos.']),
      sala('casa_luz', 'amber', ['Casa de la luz', 'Casa iluminada', 'Vivienda aislada cuya luz vieron en la noche.'], ['Casa da luz', 'Casa iluminada', 'Vivenda illada cuxa luz viron na noite.'], ['Casa da luz', 'Casa iluminada', 'Casa isolada cuja luz viram na noite.']),
      sala('casa_lavalla', 'emerald', ['Casa de los hermanos de La Valla', 'Casa La Valla', 'Comunidad que esperaba el regreso del Padre.'], ['Casa dos irmáns de La Valla', 'Casa La Valla', 'Comunidade que agardaba o regreso do Padre.'], ['Casa dos irmãos de La Valla', 'Casa La Valla', 'Comunidade que esperava o regresso do Padre.'])
    ],
    objetos: [
      objeto('bosque_pilat', '🌲', ['Abeto nevado', 'Árbol de los bosques del Pilat.'], ['Abeto nevado', 'Árbore dos bosques do Pilat.'], ['Abeto nevado', 'Árvore dos bosques do Pilat.']),
      objeto('cuarto_enfermo', '🛏️', ['Cama', 'Lecho del hermano enfermo.'], ['Cama', 'Leito do irmán enfermo.'], ['Cama', 'Leito do irmão doente.']),
      objeto('casa_luz', '🏮', ['Farol', 'La luz que brillaba no lejos de allí.'], ['Farol', 'A luz que brillaba non lonxe de alí.'], ['Lanterna', 'A luz que brilhava não longe dali.']),
      objeto('casa_lavalla', '🔨', ['Yunque de clavos', 'Herramienta con la que la comunidad se ganaba el pan.'], ['Engra de cravos', 'Ferramenta coa que a comunidade gañaba o pan.'], ['Bigorna de pregos', 'Ferramenta com que a comunidade ganhava o pão.'])
    ],
    personajes: [
      pers('ST', 'bosque_pilat', 'V', '🥶', ['Hermano Stanislas (Claude Fayol)', 'Compañero de viaje', 'Agotado y helado, se desplomó sobre la nieve.'], ['Irmán Stanislas (Claude Fayol)', 'Compañeiro de viaxe', 'Esgotado e xeado, caeu sobre a neve.'], ['Irmão Stanislas (Claude Fayol)', 'Companheiro de viagem', 'Exausto e gelado, caiu sobre a neve.']),
      pers('MC', 'bosque_pilat', 'M', '🧑‍🏫', ['Marcelino Champagnat', 'Fundador', 'Lo tomó del brazo para guiarlo y luego se arrodilló a rezar.'], ['Marcelino Champagnat', 'Fundador', 'Colleuno do brazo para guialo e logo axeonllouse a rezar.'], ['Marcelino Champagnat', 'Fundador', 'Pegou-lhe no braço para o guiar e depois ajoelhou-se a rezar.']),
      pers('JB', 'cuarto_enfermo', '', '🤒', ['Hermano Jean-Baptiste Furet', 'Hermano enfermo', 'Joven asmático llegado de la Haute-Loire, había recibido la bendición del Padre.'], ['Irmán Jean-Baptiste Furet', 'Irmán enfermo', 'Mozo asmático chegado da Haute-Loire, recibira a bendición do Padre.'], ['Irmão Jean-Baptiste Furet', 'Irmão doente', 'Jovem asmático vindo do Alto Loire, tinha recebido a bênção do Padre.']),
      pers('JM', 'escuela_bourg', '', '🧑‍🌾', ['Hermano Jean-Marie Granjon', 'Director de la comunidad', 'Antiguo granadero, toda la parroquia admiraba su caridad.'], ['Irmán Jean-Marie Granjon', 'Director da comunidade', 'Antigo granadeiro, toda a parroquia admiraba a súa caridade.'], ['Irmão Jean-Marie Granjon', 'Diretor da comunidade', 'Antigo granadeiro, toda a paróquia admirava a sua caridade.']),
      pers('PL', 'alcaldia', '', '🎩', ['Señor de Pleyné', 'Alcalde de Bourg-Argental', 'Como otros amigos, aconsejó al Padre no ponerse en camino.'], ['Señor de Pleyné', 'Alcalde de Bourg-Argental', 'Coma outros amigos, aconselloulle ao Padre non poñerse en camiño.'], ['Senhor de Pleyné', 'Presidente da câmara de Bourg-Argental', 'Como outros amigos, aconselhou o Padre a não se pôr a caminho.']),
      // SUPOSICIÓN HISTÓRICA: las fuentes no dan el nombre del dueño de la casa.
      pers('HC', 'casa_luz', '', '🧑‍🌾', ['Habitante de la casa', 'Campesino del Pilat', 'Su luz brillaba en la oscuridad cuando nadie la esperaba.'], ['Habitante da casa', 'Labrego do Pilat', 'A súa luz brillaba na escuridade cando ninguén a agardaba.'], ['Habitante da casa', 'Camponês do Pilat', 'A sua luz brilhava na escuridão quando ninguém a esperava.']),
      pers('LU', 'casa_lavalla', '', '🧑', ['Hermano Louis (Jean-Baptiste Audras)', 'Hermano de La Valla', 'Esperaba con inquietud que el Padre volviera aquella noche.'], ['Irmán Louis (Jean-Baptiste Audras)', 'Irmán de La Valla', 'Agardaba con inquietude que o Padre volvese aquela noite.'], ['Irmão Louis (Jean-Baptiste Audras)', 'Irmão de La Valla', 'Esperava com inquietação que o Padre voltasse naquela noite.'])
    ],
    pistas: [
      pista('En febrero de 1823, el Padre fue a pie a Bourg-Argental para bendecir a un hermano gravemente enfermo.', 'En febreiro de 1823, o Padre foi a pé a Bourg-Argental para bendicir un irmán gravemente enfermo.', 'Em fevereiro de 1823, o Padre foi a pé a Bourg-Argental para abençoar um irmão gravemente doente.', 'MC,JB'),
      pista('Los hermanos y sus amigos le rogaron que no regresara con aquel temporal, pero no les hizo caso.', 'Os irmáns e os seus amigos rogáronlle que non regresase con aquel temporal, pero non lles fixo caso.', 'Os irmãos e os amigos pediram-lhe que não regressasse com aquele temporal, mas não lhes deu ouvidos.', 'JM,PL'),
      pista('A las dos horas de marcha se extraviaron y el hermano ya no podía tenerse en pie.', 'Ás dúas horas de marcha perdéronse e o irmán xa non podía terse en pé.', 'Ao fim de duas horas de marcha perderam-se e o irmão já não se aguentava de pé.', 'ST'),
      pista('Tras rezar el Acordaos, a los diez pasos vieron una luz y llegaron a una casa donde pasaron la noche.', 'Tras rezar o Acordádevos, aos dez pasos viron unha luz e chegaron a unha casa onde pasaron a noite.', 'Depois de rezar o Lembrai-vos, dez passos adiante viram uma luz e chegaram a uma casa onde passaram a noite.', 'MC,HC')
    ]
  },
  // ───────────────────────── 014 ─────────────────────────
  {
    id: '014-HM',
    nivel: 'medium',
    rasgos: ['estilo_maria', 'espiritu_familia'],
    nombre: ['Los ocho de la Haute-Loire', 'Os oito da Haute-Loire', 'Os oito do Alto Loire'],
    categoria: ['Vocaciones', 'Vocacións', 'Vocações'],
    fuente: ['La Valla · Lanfrey T. 1, cap. 4', 'La Valla · Lanfrey T. 1, cap. 4', 'La Valla · Lanfrey T. 1, cap. 4'],
    textoClave: [
      'En la primavera de 1822, con el noviciado vacío, llegaron a La Valla ocho jóvenes de la Haute-Loire que pedían ser hermanos.',
      'Na primavera de 1822, co noviciado baleiro, chegaron a La Valla oito mozos da Haute-Loire que pedían ser irmáns.',
      'Na primavera de 1822, com o noviciado vazio, chegaram a La Valla oito jovens do Alto Loire que pediam para ser irmãos.'
    ],
    contexto: [
      'Entre 1819 y 1821 solo cuatro postulantes habían tomado el hábito. Hacia mitad de la Cuaresma de 1822, un joven que decía haber pasado seis años con los Hermanos de las Escuelas Cristianas pidió entrar y se hizo dar una carta de recomendación. En su comarca de Saint-Pal-en-Chalencon reunió a ocho muchachos de 15 a 25 años. El 26 de abril, el inspector Guillard encontró en La Valla de 12 a 15 jóvenes campesinos en formación.',
      'Entre 1819 e 1821 só catro postulantes tomaran o hábito. Cara a metade da Coresma de 1822, un mozo que dicía pasar seis anos cos Irmáns das Escolas Cristiás pediu entrar e fíxose dar unha carta de recomendación. Na súa comarca de Saint-Pal-en-Chalencon xuntou oito rapaces de 15 a 25 anos. O 26 de abril, o inspector Guillard atopou en La Valla de 12 a 15 mozos labregos en formación.',
      'Entre 1819 e 1821 só quatro postulantes tinham tomado o hábito. Por meados da Quaresma de 1822, um jovem que dizia ter passado seis anos com os Irmãos das Escolas Cristãs pediu para entrar e fez-se dar uma carta de recomendação. Na sua região de Saint-Pal-en-Chalencon reuniu oito rapazes dos 15 aos 25 anos. A 26 de abril, o inspetor Guillard encontrou em La Valla 12 a 15 jovens camponeses em formação.'
    ],
    explicacion: [
      'El responsable de la sorpresa fue el antiguo Hermano de las Escuelas Cristianas: prometió traer media docena de postulantes y volvió con ocho. Marcelino convenció a los hermanos de admitirlos, pese a la opinión contraria de sus amigos sacerdotes. Uno de ellos, Jean-Baptiste Furet, sería el biógrafo del fundador. «Es Nuestra Señora del Puy quien los había preparado», diría el hermano Jean-Baptiste.',
      'O responsable da sorpresa foi o antigo Irmán das Escolas Cristiás: prometeu traer media ducia de postulantes e volveu con oito. Marcelino convenceu os irmáns de admitilos, malia a opinión contraria dos seus amigos sacerdotes. Un deles, Jean-Baptiste Furet, sería o biógrafo do fundador. «É Nosa Señora do Puy quen os preparara», diría o irmán Jean-Baptiste.',
      'O responsável pela surpresa foi o antigo Irmão das Escolas Cristãs: prometeu trazer meia dúzia de postulantes e voltou com oito. Marcelino convenceu os irmãos a admiti-los, apesar da opinião contrária dos seus amigos padres. Um deles, Jean-Baptiste Furet, seria o biógrafo do fundador. «Foi Nossa Senhora do Puy quem os preparou», diria o irmão Jean-Baptiste.'
    ],
    intro: [
      'La Valla, Pascua de 1822. La casa está casi vacía de novicios y, de pronto, aparece en la puerta un grupo de muchachos del Velay pidiendo quedarse. ¿Quién los ha traído? Ordena el plano para descubrirlo.',
      'La Valla, Pascua de 1822. A casa está case baleira de novicios e, de súpeto, aparece na porta un grupo de rapaces do Velay pedindo quedar. Quen os trouxo? Ordena o plano para descubrilo.',
      'La Valla, Páscoa de 1822. A casa está quase vazia de noviços e, de repente, aparece à porta um grupo de rapazes do Velay a pedir para ficar. Quem os trouxe? Ordena a planta para o descobrir.'
    ],
    epilogo: [
      '¡Caso resuelto! El ex hermano cumplió su promesa con creces. Desde entonces Marcelino no se atrevió a rechazar a quien se presentaba: «los considero como traídos por María misma».',
      'Caso resolto! O ex-irmán cumpriu a súa promesa con creces. Desde entón Marcelino non se atreveu a rexeitar quen se presentaba: «considéroos como traídos pola mesma María».',
      'Caso resolvido! O ex-irmão cumpriu a promessa com juros. Desde então Marcelino não se atreveu a recusar quem se apresentava: «considero-os trazidos pela própria Maria».'
    ],
    salas: [
      sala('casa_hermanos', 'red', ['Casa de los hermanos', 'Casa', 'Vivienda comprada en La Valla para la comunidad.'], ['Casa dos irmáns', 'Casa', 'Vivenda comprada en La Valla para a comunidade.'], ['Casa dos irmãos', 'Casa', 'Casa comprada em La Valla para a comunidade.']),
      // SUPOSICIÓN HISTÓRICA: el reparto de los personajes por las estancias es inventado.
      sala('sala_capitulo', 'purple', ['Sala de reunión', 'Reunión', 'Donde los hermanos votaron la admisión de los recién llegados.'], ['Sala de reunión', 'Reunión', 'Onde os irmáns votaron a admisión dos recén chegados.'], ['Sala de reunião', 'Reunião', 'Onde os irmãos votaram a admissão dos recém-chegados.']),
      sala('huerto', 'emerald', ['Huerto', 'Huerto', 'Tierra que daba de comer a la comunidad.'], ['Horta', 'Horta', 'Terra que daba de comer á comunidade.'], ['Horta', 'Horta', 'Terra que dava de comer à comunidade.']),
      sala('aula', 'blue', ['Aula de La Valla', 'Aula', 'Clase donde los jóvenes aprendían el método de los hermanos.'], ['Aula de La Valla', 'Aula', 'Clase onde os mozos aprendían o método dos irmáns.'], ['Sala de aula de La Valla', 'Sala de aula', 'Turma onde os jovens aprendiam o método dos irmãos.']),
      sala('casa_parroquial', 'indigo', ['Casa parroquial', 'Parroquial', 'Allí opinaban los sacerdotes amigos del vicario.'], ['Casa reitoral', 'Reitoral', 'Alí opinaban os sacerdotes amigos do vigario.'], ['Casa paroquial', 'Paroquial', 'Ali opinavam os padres amigos do vigário.']),
      sala('camino_velay', 'stone', ['Camino del Velay', 'Camino', 'Ruta de unos 60 km desde Saint-Pal-en-Chalencon.'], ['Camiño do Velay', 'Camiño', 'Ruta duns 60 km desde Saint-Pal-en-Chalencon.'], ['Caminho do Velay', 'Caminho', 'Rota de uns 60 km desde Saint-Pal-en-Chalencon.'])
    ],
    objetos: [
      objeto('casa_hermanos', '✉️', ['Carta de recomendación', 'La que el joven se hizo entregar antes de partir.'], ['Carta de recomendación', 'A que o mozo se fixo entregar antes de partir.'], ['Carta de recomendação', 'A que o jovem se fez entregar antes de partir.']),
      objeto('sala_capitulo', '🗳️', ['Urna', 'Para votar la admisión de los postulantes.'], ['Urna', 'Para votar a admisión dos postulantes.'], ['Urna', 'Para votar a admissão dos postulantes.']),
      objeto('huerto', '🥬', ['Coles', 'Comida sencilla para una casa cada vez más llena.'], ['Verzas', 'Comida sinxela para unha casa cada vez máis chea.'], ['Couves', 'Comida simples para uma casa cada vez mais cheia.']),
      objeto('aula', '🧮', ['Pizarra', 'Instrumento del método simultáneo.'], ['Lousa', 'Instrumento do método simultáneo.'], ['Ardósia', 'Instrumento do método simultâneo.']),
      objeto('camino_velay', '🎒', ['Hatillos', 'Equipaje de los ocho muchachos.'], ['Fatelos', 'Equipaxe dos oito rapaces.'], ['Trouxas', 'Bagagem dos oito rapazes.'])
    ],
    personajes: [
      pers('MC', 'casa_hermanos', 'V', '🧑‍🏫', ['Marcelino Champagnat', 'Vicario de La Valla', 'Le había ofrecido hospitalidad sin imaginar lo que vendría después.'], ['Marcelino Champagnat', 'Vigario de La Valla', 'Ofreceralle hospitalidade sen imaxinar o que viría despois.'], ['Marcelino Champagnat', 'Vigário de La Valla', 'Tinha-lhe oferecido hospitalidade sem imaginar o que viria depois.']),
      pers('EX', 'casa_hermanos', 'M', '🧑‍💼', ['Antiguo Hermano de las Escuelas Cristianas', 'Reclutador', 'Decía haber pasado seis años con los Hermanos de La Salle.'], ['Antigo Irmán das Escolas Cristiás', 'Reclutador', 'Dicía pasar seis anos cos Irmáns da Salle.'], ['Antigo Irmão das Escolas Cristãs', 'Recrutador', 'Dizia ter passado seis anos com os Irmãos de La Salle.']),
      pers('JB', 'camino_velay', '', '🧒', ['Jean-Baptiste Furet', 'Postulante de 15 años', 'Nacido en Saint-Pal-en-Chalencon, el asma le impedía el trabajo del campo.'], ['Jean-Baptiste Furet', 'Postulante de 15 anos', 'Nado en Saint-Pal-en-Chalencon, a asma impedíalle o traballo do campo.'], ['Jean-Baptiste Furet', 'Postulante de 15 anos', 'Nascido em Saint-Pal-en-Chalencon, a asma impedia-o de trabalhar no campo.']),
      pers('PV', 'camino_velay', '', '🧑', ['Otro postulante del Velay', 'Joven de la Haute-Loire', 'Uno de los ocho, de entre 15 y 25 años.'], ['Outro postulante do Velay', 'Mozo da Haute-Loire', 'Un dos oito, de entre 15 e 25 anos.'], ['Outro postulante do Velay', 'Jovem do Alto Loire', 'Um dos oito, com idade entre 15 e 25 anos.']),
      pers('AN', 'sala_capitulo', '', '👦', ['Hermano Antoine (Antoine Couturier)', 'Hermano antiguo', 'Convocado con los demás por Pascua para decidir.'], ['Irmán Antoine (Antoine Couturier)', 'Irmán antigo', 'Convocado cos demais por Pascua para decidir.'], ['Irmão Antoine (Antoine Couturier)', 'Irmão antigo', 'Convocado com os outros pela Páscoa para decidir.']),
      pers('SA', 'casa_parroquial', '', '👴', ['Sacerdote amigo', 'Consejero del vicario', 'Opinaba que no había ni sitio ni dinero para tantos.'], ['Sacerdote amigo', 'Conselleiro do vigario', 'Opinaba que non había nin sitio nin cartos para tantos.'], ['Padre amigo', 'Conselheiro do vigário', 'Achava que não havia nem lugar nem dinheiro para tantos.']),
      pers('GU', 'aula', '', '🕵️', ['Inspector Guillard', 'Inspector de la Academia de Lyon', 'Visitó La Valla el 26 de abril y tomó nota de lo que vio.'], ['Inspector Guillard', 'Inspector da Academia de Lyon', 'Visitou La Valla o 26 de abril e tomou nota do que viu.'], ['Inspetor Guillard', 'Inspetor da Academia de Lyon', 'Visitou La Valla a 26 de abril e tomou nota do que viu.'])
    ],
    pistas: [
      pista('Hacia mitad de la Cuaresma, un joven pidió entrar y logró que le prometieran admitirlo si traía media docena de postulantes.', 'Cara a metade da Coresma, un mozo pediu entrar e logrou que lle prometesen admitilo se traía media ducia de postulantes.', 'Por meados da Quaresma, um jovem pediu para entrar e conseguiu que lhe prometessem admiti-lo se trouxesse meia dúzia de postulantes.', 'EX,MC'),
      pista('Regresó de su comarca con una tropa de ocho muchachos.', 'Volveu da súa comarca cunha tropa de oito rapaces.', 'Voltou da sua região com uma tropa de oito rapazes.', 'EX,JB,PV'),
      pista('Por Pascua, los hermanos se reunieron y Marcelino los persuadió de admitirlos.', 'Por Pascua, os irmáns reuníronse e Marcelino persuadiunos de admitilos.', 'Pela Páscoa, os irmãos reuniram-se e Marcelino persuadiu-os a admiti-los.', 'AN,MC'),
      pista('Sus amigos sacerdotes no estaban de acuerdo: faltaban sitio y dinero.', 'Os seus amigos sacerdotes non estaban de acordo: faltaban sitio e cartos.', 'Os seus amigos padres não concordavam: faltava lugar e dinheiro.', 'SA')
    ]
  },
  // ───────────────────────── 015 ─────────────────────────
  {
    id: '015-HM',
    nivel: 'medium',
    rasgos: ['espiritu_familia', 'sencillez'],
    nombre: ['La obra en entredicho', 'A obra en entredito', 'A obra posta em causa'],
    categoria: ['Crisis y crecimiento', 'Crise e crecemento', 'Crise e crescimento'],
    fuente: ['La Valla · Lanfrey T. 1, cap. 4', 'La Valla · Lanfrey T. 1, cap. 4', 'La Valla · Lanfrey T. 1, cap. 4'],
    textoClave: [
      'A finales de 1819 y principios de 1820, el comité cantonal de escuelas denunció la obra de Champagnat al arzobispado.',
      'A finais de 1819 e comezos de 1820, o comité cantonal de escolas denunciou a obra de Champagnat ao arcebispado.',
      'No final de 1819 e início de 1820, o comité cantonal de escolas denunciou a obra de Champagnat ao arcebispado.'
    ],
    contexto: [
      'Como Marcelino enseñaba latín a algunos alumnos, el director del colegio de Saint-Chamond sospechó que La Valla escondía un colegio clandestino. El comité cantonal, presidido por el párroco Dervieux, amenazó con cerrar la casa con los gendarmes y alejar al vicario. Marcelino pensó en vender la casa y marcharse; los hermanos decidieron seguirlo en cualquier circunstancia.',
      'Como Marcelino ensinaba latín a algúns alumnos, o director do colexio de Saint-Chamond sospeitou que La Valla agochaba un colexio clandestino. O comité cantonal, presidido polo párroco Dervieux, ameazou con pechar a casa cos xendarmes e afastar o vigario. Marcelino pensou en vender a casa e marchar; os irmáns decidiron seguilo en calquera circunstancia.',
      'Como Marcelino ensinava latim a alguns alunos, o diretor do colégio de Saint-Chamond suspeitou que La Valla escondia um colégio clandestino. O comité cantonal, presidido pelo pároco Dervieux, ameaçou fechar a casa com os gendarmes e afastar o vigário. Marcelino pensou em vender a casa e partir; os irmãos decidiram segui-lo em quaisquer circunstâncias.'
    ],
    explicacion: [
      'El responsable de la amenaza fue el párroco Dervieux, que se encarnizó contra la obra. La salvaron los vicarios generales: Courbon se negó a exiliar a Marcelino y lo animó a perseverar, y Bochard, que pensaba en sus propios «hermanos de la Cruz de Jesús», tampoco siguió a Dervieux. Años después, el mismo Dervieux acogería a Marcelino enfermo en su casa.',
      'O responsable da ameaza foi o párroco Dervieux, que se encarnizou contra a obra. Salvárona os vigarios xerais: Courbon negouse a exiliar a Marcelino e animouno a perseverar, e Bochard, que pensaba nos seus propios «irmáns da Cruz de Xesús», tampouco seguiu a Dervieux. Anos despois, o mesmo Dervieux acollería a Marcelino enfermo na súa casa.',
      'O responsável pela ameaça foi o pároco Dervieux, que se encarniçou contra a obra. Salvaram-na os vigários-gerais: Courbon recusou exilar Marcelino e animou-o a perseverar, e Bochard, que pensava nos seus próprios «irmãos da Cruz de Jesus», também não seguiu Dervieux. Anos depois, o próprio Dervieux acolheria Marcelino doente em sua casa.'
    ],
    intro: [
      'La Valla, invierno de 1819. Corren rumores: dicen que el vicario dirige un colegio ilegal y que pronto vendrán los gendarmes. Reconstruye dónde estaba cada uno para descubrir quién quería cerrar la casa de los hermanos.',
      'La Valla, inverno de 1819. Corren rumores: din que o vigario dirixe un colexio ilegal e que pronto virán os xendarmes. Reconstrúe onde estaba cada quen para descubrir quen quería pechar a casa dos irmáns.',
      'La Valla, inverno de 1819. Correm boatos: dizem que o vigário dirige um colégio ilegal e que em breve virão os gendarmes. Reconstrói onde estava cada um para descobrir quem queria fechar a casa dos irmãos.'
    ],
    epilogo: [
      '¡Caso resuelto! Dervieux tuvo que ceder ante los vicarios generales. Marcelino no tuvo que exiliarse y sus hermanos, que habían decidido seguirlo a donde fuera, siguieron enseñando en La Valla.',
      'Caso resolto! Dervieux tivo que ceder ante os vigarios xerais. Marcelino non tivo que exiliarse e os seus irmáns, que decidiran seguilo onde fose, seguiron ensinando en La Valla.',
      'Caso resolvido! Dervieux teve de ceder perante os vigários-gerais. Marcelino não teve de se exilar e os seus irmãos, que tinham decidido segui-lo para onde fosse, continuaram a ensinar em La Valla.'
    ],
    salas: [
      // SUPOSICIÓN HISTÓRICA: el encuentro de Dervieux y Marcelino en la casa de La Valla es inventado; las fuentes hablan de amenazas, no de una visita.
      sala('casa_lavalla', 'red', ['Casa comprada de La Valla', 'Casa comprada', 'Casa de los hermanos y de los alumnos internos.'], ['Casa mercada de La Valla', 'Casa mercada', 'Casa dos irmáns e dos alumnos internos.'], ['Casa comprada de La Valla', 'Casa comprada', 'Casa dos irmãos e dos alunos internos.']),
      sala('aula_latin', 'amber', ['Aula de latín', 'Latín', 'Donde algunos alumnos estudiaban para el seminario.'], ['Aula de latín', 'Latín', 'Onde algúns alumnos estudaban para o seminario.'], ['Sala de latim', 'Latim', 'Onde alguns alunos estudavam para o seminário.']),
      sala('colegio_stchamond', 'blue', ['Colegio de Saint-Chamond', 'Colegio', 'Centro de enseñanza que temía la competencia.'], ['Colexio de Saint-Chamond', 'Colexio', 'Centro de ensino que temía a competencia.'], ['Colégio de Saint-Chamond', 'Colégio', 'Estabelecimento de ensino que temia a concorrência.']),
      sala('vicaria_lyon', 'purple', ['Vicaría general de Lyon', 'Vicaría', 'Oficinas desde donde se gobernaba la diócesis.'], ['Vigairía xeral de Lyon', 'Vigairía', 'Oficinas desde onde se gobernaba a diocese.'], ['Vigararia-geral de Lyon', 'Vigararia', 'Gabinetes de onde se governava a diocese.']),
      sala('despacho_bochard', 'indigo', ['Despacho de Bochard', 'Despacho', 'Allí se proyectaba una congregación diocesana.'], ['Despacho de Bochard', 'Despacho', 'Alí proxectábase unha congregación diocesana.'], ['Gabinete de Bochard', 'Gabinete', 'Ali se projetava uma congregação diocesana.']),
      sala('posada', 'stone', ['Posada de Saint-Chamond', 'Posada', 'Alojamiento de los viajeros de paso por la ciudad.'], ['Pousada de Saint-Chamond', 'Pousada', 'Aloxamento dos viaxeiros de paso pola cidade.'], ['Estalagem de Saint-Chamond', 'Estalagem', 'Alojamento dos viajantes de passagem pela cidade.'])
    ],
    objetos: [
      objeto('casa_lavalla', '🔑', ['Llaves de la casa', 'Marcelino llegó a pensar en venderla.'], ['Chaves da casa', 'Marcelino chegou a pensar en vendela.'], ['Chaves da casa', 'Marcelino chegou a pensar em vendê-la.']),
      objeto('aula_latin', '📕', ['Gramática latina', 'El libro que despertó las sospechas.'], ['Gramática latina', 'O libro que espertou as sospeitas.'], ['Gramática latina', 'O livro que despertou as suspeitas.']),
      objeto('vicaria_lyon', '✒️', ['Pluma y tintero', 'Para firmar los nombramientos de los sacerdotes.'], ['Pluma e tinteiro', 'Para asinar os nomeamentos dos sacerdotes.'], ['Pena e tinteiro', 'Para assinar as nomeações dos padres.']),
      objeto('posada', '🧳', ['Maleta', 'Equipaje del inspector de viaje.'], ['Maleta', 'Equipaxe do inspector de viaxe.'], ['Mala', 'Bagagem do inspetor em viagem.'])
    ],
    personajes: [
      pers('MC', 'casa_lavalla', 'V', '🧑‍🏫', ['Marcelino Champagnat', 'Vicario de La Valla', 'Ante la amenaza, se preparaba para vender la casa y partir al exilio.'], ['Marcelino Champagnat', 'Vigario de La Valla', 'Ante a ameaza, preparábase para vender a casa e partir ao exilio.'], ['Marcelino Champagnat', 'Vigário de La Valla', 'Perante a ameaça, preparava-se para vender a casa e partir para o exílio.']),
      pers('DE', 'casa_lavalla', 'M', '👴', ['Párroco Dervieux', 'Presidente del comité cantonal', 'Amenazaba con hacer cerrar el centro por los gendarmes.'], ['Párroco Dervieux', 'Presidente do comité cantonal', 'Ameazaba con facer pechar o centro polos xendarmes.'], ['Pároco Dervieux', 'Presidente do comité cantonal', 'Ameaçava mandar fechar o centro pelos gendarmes.']),
      pers('JM', 'aula_latin', '', '🧑‍🌾', ['Hermano Jean-Marie Granjon', 'Director de los hermanos', 'Elegido por sus compañeros en votación secreta en 1819.'], ['Irmán Jean-Marie Granjon', 'Director dos irmáns', 'Elixido polos seus compañeiros en votación secreta en 1819.'], ['Irmão Jean-Marie Granjon', 'Diretor dos irmãos', 'Eleito pelos companheiros em votação secreta em 1819.']),
      pers('CA', 'colegio_stchamond', '', '🧑‍🎓', ['Señor Cathelin', 'Director del colegio', 'Creía que el vicario le hacía la competencia con un colegio clandestino.'], ['Señor Cathelin', 'Director do colexio', 'Cría que o vigario lle facía a competencia cun colexio clandestino.'], ['Senhor Cathelin', 'Diretor do colégio', 'Julgava que o vigário lhe fazia concorrência com um colégio clandestino.']),
      pers('CO', 'vicaria_lyon', '', '⛪', ['Vicario general Courbon', 'Encargado de los sacerdotes', 'Se negó a exiliar a Marcelino y lo animó a perseverar.'], ['Vigario xeral Courbon', 'Encargado dos sacerdotes', 'Negouse a exiliar a Marcelino e animouno a perseverar.'], ['Vigário-geral Courbon', 'Responsável pelos padres', 'Recusou exilar Marcelino e animou-o a perseverar.']),
      pers('BO', 'despacho_bochard', '', '🧔', ['Vicario general Bochard', 'Encargado de la educación', 'Soñaba con unos «hermanos de la Cruz de Jesús» para toda la diócesis.'], ['Vigario xeral Bochard', 'Encargado da educación', 'Soñaba cuns «irmáns da Cruz de Xesús» para toda a diocese.'], ['Vigário-geral Bochard', 'Responsável pela educação', 'Sonhava com uns «irmãos da Cruz de Jesus» para toda a diocese.']),
      pers('GU', 'posada', '', '🕵️', ['Inspector Guillard', 'Inspector de la Academia', 'De paso por la ciudad en mayo de 1820, oyó hablar de la casa del vicario y sus maestros.'], ['Inspector Guillard', 'Inspector da Academia', 'De paso pola cidade en maio de 1820, oíu falar da casa do vigario e dos seus mestres.'], ['Inspetor Guillard', 'Inspetor da Academia', 'De passagem pela cidade em maio de 1820, ouviu falar da casa do vigário e dos seus mestres.'])
    ],
    pistas: [
      pista('Como el vicario enseñaba latín a algunos alumnos, alguien supuso que dirigía un colegio rival.', 'Como o vigario ensinaba latín a algúns alumnos, alguén supuxo que dirixía un colexio rival.', 'Como o vigário ensinava latim a alguns alunos, alguém supôs que dirigia um colégio rival.', 'CA,MC'),
      pista('El comité cantonal de escuelas decidió denunciar la casa al arzobispado.', 'O comité cantonal de escolas decidiu denunciar a casa ao arcebispado.', 'O comité cantonal de escolas decidiu denunciar a casa ao arcebispado.', 'DE'),
      pista('Interrogados sobre sus intenciones, los hermanos decidieron seguir a Marcelino en cualquier circunstancia.', 'Preguntados polas súas intencións, os irmáns decidiron seguir a Marcelino en calquera circunstancia.', 'Interrogados sobre as suas intenções, os irmãos decidiram seguir Marcelino em quaisquer circunstâncias.', 'JM'),
      pista('Uno de los vicarios generales se negó a exiliarlo; otro prefería anexionar la obra a su propio proyecto.', 'Un dos vigarios xerais negouse a exilialo; outro prefería anexionar a obra ao seu propio proxecto.', 'Um dos vigários-gerais recusou exilá-lo; outro preferia anexar a obra ao seu próprio projeto.', 'CO,BO')
    ]
  },
  // ───────────────────────── 016 ─────────────────────────
  {
    id: '016-HM',
    nivel: 'medium',
    rasgos: ['presencia', 'espiritu_familia'],
    nombre: ['El alumno de latín', 'O alumno de latín', 'O aluno de latim'],
    categoria: ['Vocaciones', 'Vocacións', 'Vocações'],
    fuente: ['La Valla · Lanfrey T. 1, caps. 3-4', 'La Valla · Lanfrey T. 1, caps. 3-4', 'La Valla · Lanfrey T. 1, caps. 3-4'],
    textoClave: [
      'En mayo de 1818, Marcelino recibió a Gabriel Rivat, de 10 años, para darle clases de latín. El 8 de septiembre de 1819 el niño tomó el hábito.',
      'En maio de 1818, Marcelino recibiu a Gabriel Rivat, de 10 anos, para darlle clases de latín. O 8 de setembro de 1819 o neno tomou o hábito.',
      'Em maio de 1818, Marcelino recebeu Gabriel Rivat, de 10 anos, para lhe dar aulas de latim. A 8 de setembro de 1819 o menino tomou o hábito.'
    ],
    contexto: [
      'Gabriel venía de la aldea de Maisonnettes, de una familia de labradores muy activa en la resistencia a la Revolución; su hermano mayor, Jean-Antoine, se preparaba para el sacerdocio. Entró en el grupo de La Valla al mismo tiempo que Barthélemy Badard, hijo del sacristán. El día de su toma de hábito se celebró el primer retiro de la asociación y los hermanos eligieron director a Jean-Marie Granjon en votación secreta.',
      'Gabriel viña da aldea de Maisonnettes, dunha familia de labregos moi activa na resistencia á Revolución; o seu irmán maior, Jean-Antoine, preparábase para o sacerdocio. Entrou no grupo de La Valla ao mesmo tempo que Barthélemy Badard, fillo do sancristán. O día da súa toma de hábito celebrouse o primeiro retiro da asociación e os irmáns elixiron director a Jean-Marie Granjon en votación secreta.',
      'Gabriel vinha da aldeia de Maisonnettes, de uma família de lavradores muito ativa na resistência à Revolução; o irmão mais velho, Jean-Antoine, preparava-se para o sacerdócio. Entrou no grupo de La Valla ao mesmo tempo que Barthélemy Badard, filho do sacristão. No dia da sua tomada de hábito realizou-se o primeiro retiro da associação e os irmãos elegeram diretor Jean-Marie Granjon em votação secreta.'
    ],
    explicacion: [
      'El responsable de que Gabriel se hiciera hermano fue el propio Gabriel. Marcelino lo había recibido para instruirlo en latín, no para hacerlo hermano; según Lanfrey, la toma de hábito fue «menos por voluntad de Champagnat que por decisión del adolescente». Aquel niño sería el hermano François, primer sucesor del fundador.',
      'O responsable de que Gabriel se fixese irmán foi o propio Gabriel. Marcelino recibírao para instruílo en latín, non para facelo irmán; segundo Lanfrey, a toma de hábito foi «menos por vontade de Champagnat que por decisión do adolescente». Aquel neno sería o irmán François, primeiro sucesor do fundador.',
      'O responsável por Gabriel se ter tornado irmão foi o próprio Gabriel. Marcelino tinha-o recebido para o instruir em latim, não para fazer dele um irmão; segundo Lanfrey, a tomada de hábito foi «menos por vontade de Champagnat do que por decisão do adolescente». Aquele menino seria o irmão François, primeiro sucessor do fundador.'
    ],
    intro: [
      'La Valla, 1818-1819. Un niño de diez años llega para aprender latín y, un año después, pide vestir el hábito de los hermanos. ¿Quién tomó esa decisión? Ordena el plano para averiguarlo.',
      'La Valla, 1818-1819. Un neno de dez anos chega para aprender latín e, un ano despois, pide vestir o hábito dos irmáns. Quen tomou esa decisión? Ordena o plano para descubrilo.',
      'La Valla, 1818-1819. Um menino de dez anos chega para aprender latim e, um ano depois, pede para vestir o hábito dos irmãos. Quem tomou essa decisão? Ordena a planta para o descobrir.'
    ],
    epilogo: [
      '¡Caso resuelto! Gabriel eligió su camino. El hermano François acompañaría a Marcelino hasta el final y gobernaría a los hermanos durante veinte años.',
      'Caso resolto! Gabriel escolleu o seu camiño. O irmán François acompañaría a Marcelino ata o final e gobernaría os irmáns durante vinte anos.',
      'Caso resolvido! Gabriel escolheu o seu caminho. O irmão François acompanharia Marcelino até ao fim e governaria os irmãos durante vinte anos.'
    ],
    salas: [
      // SUPOSICIÓN HISTÓRICA: los lugares concretos de cada personaje son inventados.
      sala('sala_latin', 'red', ['Sala de latín', 'Sala latín', 'Rincón de la casa del vicario donde se estudiaba latín.'], ['Sala de latín', 'Sala latín', 'Recuncho da casa do vigario onde se estudaba latín.'], ['Sala de latim', 'Sala latim', 'Canto da casa do vigário onde se estudava latim.']),
      sala('casa_rivat', 'amber', ['Casa de los Rivat', 'Casa Rivat', 'Hogar de labradores en la aldea de Maisonnettes.'], ['Casa dos Rivat', 'Casa Rivat', 'Fogar de labregos na aldea de Maisonnettes.'], ['Casa dos Rivat', 'Casa Rivat', 'Lar de lavradores na aldeia de Maisonnettes.']),
      sala('iglesia_lavalla', 'indigo', ['Iglesia de La Valla', 'Iglesia', 'Templo parroquial con su sacristía.'], ['Igrexa de La Valla', 'Igrexa', 'Templo parroquial coa súa sancristía.'], ['Igreja de La Valla', 'Igreja', 'Templo paroquial com a sua sacristia.']),
      sala('sala_retiro', 'purple', ['Sala del retiro', 'Retiro', 'Donde los hermanos votaron en secreto a su director.'], ['Sala do retiro', 'Retiro', 'Onde os irmáns votaron en segredo o seu director.'], ['Sala do retiro', 'Retiro', 'Onde os irmãos votaram em segredo o seu diretor.']),
      sala('taller_clavos', 'stone', ['Taller de clavos', 'Taller', 'Donde los hermanos forjaban clavos para vivir.'], ['Obradoiro de cravos', 'Obradoiro', 'Onde os irmáns forxaban cravos para vivir.'], ['Oficina de pregos', 'Oficina', 'Onde os irmãos forjavam pregos para viver.'])
    ],
    objetos: [
      objeto('sala_latin', '📕', ['Gramática latina', 'Libro de las primeras lecciones de Gabriel.'], ['Gramática latina', 'Libro das primeiras leccións de Gabriel.'], ['Gramática latina', 'Livro das primeiras lições de Gabriel.']),
      objeto('casa_rivat', '🌾', ['Gavillas', 'Cosecha de la familia de labradores.'], ['Monllos', 'Colleita da familia de labregos.'], ['Molhos de trigo', 'Colheita da família de lavradores.']),
      objeto('iglesia_lavalla', '🔔', ['Campana', 'La tocaba el sacristán del pueblo.'], ['Campá', 'Tocábaa o sancristán da vila.'], ['Sino', 'Tocava-o o sacristão da vila.']),
      objeto('taller_clavos', '🔨', ['Yunque', 'Donde se golpeaban las barritas de hierro.'], ['Engra', 'Onde se golpeaban as barriñas de ferro.'], ['Bigorna', 'Onde se batiam as barrinhas de ferro.'])
    ],
    personajes: [
      pers('MC', 'sala_latin', 'V', '🧑‍🏫', ['Marcelino Champagnat', 'Vicario y profesor', 'Lo había recibido para instruirlo, sobre todo en latín.'], ['Marcelino Champagnat', 'Vigario e profesor', 'Recibírao para instruílo, sobre todo en latín.'], ['Marcelino Champagnat', 'Vigário e professor', 'Tinha-o recebido para o instruir, sobretudo em latim.']),
      pers('GR', 'sala_latin', 'M', '🧒', ['Gabriel Rivat', 'Alumno de 10 años', 'El más pequeño del grupo, tenía ideas propias sobre su futuro.'], ['Gabriel Rivat', 'Alumno de 10 anos', 'O máis pequeno do grupo, tiña ideas propias sobre o seu futuro.'], ['Gabriel Rivat', 'Aluno de 10 anos', 'O mais pequeno do grupo, tinha ideias próprias sobre o seu futuro.']),
      pers('JR', 'casa_rivat', '', '👨‍🌾', ['Jean-Baptiste Rivat', 'Padre labrador', 'Padre de cuatro chicos y tres chicas en Maisonnettes.'], ['Jean-Baptiste Rivat', 'Pai labrego', 'Pai de catro rapaces e tres rapazas en Maisonnettes.'], ['Jean-Baptiste Rivat', 'Pai lavrador', 'Pai de quatro rapazes e três raparigas em Maisonnettes.']),
      pers('JA', 'casa_rivat', '', '🧑‍🎓', ['Jean-Antoine Rivat', 'Hermano mayor', 'El primogénito se preparaba para ser sacerdote.'], ['Jean-Antoine Rivat', 'Irmán maior', 'O primoxénito preparábase para ser sacerdote.'], ['Jean-Antoine Rivat', 'Irmão mais velho', 'O primogénito preparava-se para ser padre.']),
      pers('BB', 'iglesia_lavalla', '', '👦', ['Barthélemy Badard', 'Hijo del sacristán', 'Entró en el grupo el mismo mes que Gabriel.'], ['Barthélemy Badard', 'Fillo do sancristán', 'Entrou no grupo o mesmo mes ca Gabriel.'], ['Barthélemy Badard', 'Filho do sacristão', 'Entrou no grupo no mesmo mês que Gabriel.']),
      pers('JM', 'sala_retiro', '', '🧑‍🌾', ['Jean-Marie Granjon', 'Primer hermano', 'Sus compañeros lo eligieron director por escrutinio secreto.'], ['Jean-Marie Granjon', 'Primeiro irmán', 'Os seus compañeiros elixírono director por escrutinio secreto.'], ['Jean-Marie Granjon', 'Primeiro irmão', 'Os companheiros elegeram-no diretor por escrutínio secreto.']),
      pers('AC', 'taller_clavos', '', '👷', ['Antoine Couturier', 'Hermano Antoine', 'Nativo de La Valla, entró el 1 de enero de 1818 sin ninguna instrucción.'], ['Antoine Couturier', 'Irmán Antoine', 'Nativo de La Valla, entrou o 1 de xaneiro de 1818 sen ningunha instrución.'], ['Antoine Couturier', 'Irmão Antoine', 'Natural de La Valla, entrou a 1 de janeiro de 1818 sem qualquer instrução.'])
    ],
    pistas: [
      pista('En mayo de 1818, dos muchachos de La Valla se unieron al grupo de hermanos.', 'En maio de 1818, dous rapaces de La Valla uníronse ao grupo de irmáns.', 'Em maio de 1818, dois rapazes de La Valla juntaram-se ao grupo de irmãos.', 'GR,BB'),
      pista('En casa de los Rivat, el hijo mayor estudiaba para el sacerdocio.', 'Na casa dos Rivat, o fillo maior estudaba para o sacerdocio.', 'Em casa dos Rivat, o filho mais velho estudava para o sacerdócio.', 'JA,JR'),
      pista('Marcelino no lo había recibido para hacer de él un hermano.', 'Marcelino non o recibira para facer del un irmán.', 'Marcelino não o tinha recebido para fazer dele um irmão.', 'MC,GR'),
      pista('El 8 de septiembre de 1819, con dos tomas de hábito, los hermanos eran seis y eligieron director.', 'O 8 de setembro de 1819, con dúas tomas de hábito, os irmáns eran seis e elixiron director.', 'A 8 de setembro de 1819, com duas tomadas de hábito, os irmãos eram seis e elegeram diretor.', 'JM,BB')
    ]
  },
  // ───────────────────────── 017 ─────────────────────────
  {
    id: '017-HM',
    nivel: 'medium',
    rasgos: ['espiritu_familia', 'sencillez'],
    nombre: ['El sucesor', 'O sucesor', 'O sucessor'],
    categoria: ['Gobierno y herencia', 'Goberno e herdanza', 'Governo e herança'],
    fuente: ['L’Hermitage · Lanfrey T. 1, caps. 7, 8 y 10', 'L’Hermitage · Lanfrey T. 1, caps. 7, 8 y 10', 'L’Hermitage · Lanfrey T. 1, caps. 7, 8 y 10'],
    textoClave: [
      'El 12 de octubre de 1839, ante la rápida pérdida de salud del fundador, 92 hermanos profesos eligieron al hermano François como director general.',
      'O 12 de outubro de 1839, ante a rápida perda de saúde do fundador, 92 irmáns profesos elixiron o irmán François como director xeral.',
      'A 12 de outubro de 1839, perante a rápida perda de saúde do fundador, 92 irmãos professos elegeram o irmão François como diretor-geral.'
    ],
    contexto: [
      'Aquel año, el padre Colin, superior de los padres maristas, había escrito a Champagnat que un hermano al servicio de los padres hacía «veinte veces más el bien» que en una escuela municipal. La asamblea de L’Hermitage eligió también dos asistentes, los hermanos Jean-Baptiste y Louis-Marie, sin definir sus poderes. Lanfrey advierte que, en teoría, fue un nombramiento tras consultar a los hermanos.',
      'Aquel ano, o padre Colin, superior dos padres maristas, escribíralle a Champagnat que un irmán ao servizo dos padres facía «vinte veces máis o ben» ca nunha escola municipal. A asemblea de L’Hermitage elixiu tamén dous asistentes, os irmáns Jean-Baptiste e Louis-Marie, sen definir os seus poderes. Lanfrey advirte que, en teoría, foi un nomeamento tras consultar os irmáns.',
      'Nesse ano, o padre Colin, superior dos padres maristas, tinha escrito a Champagnat que um irmão ao serviço dos padres fazia «vinte vezes mais o bem» do que numa escola municipal. A assembleia de L’Hermitage elegeu também dois assistentes, os irmãos Jean-Baptiste e Louis-Marie, sem definir os seus poderes. Lanfrey adverte que, em teoria, foi uma nomeação depois de consultar os irmãos.'
    ],
    explicacion: [
      'El elegido fue el hermano François, Gabriel Rivat, que desde hacía años era el «brazo derecho» del fundador. Con él, los hermanos aseguraban que la obra de Marcelino seguiría en manos de un hermano formado a su lado.',
      'O elixido foi o irmán François, Gabriel Rivat, que desde había anos era o «brazo dereito» do fundador. Con el, os irmáns aseguraban que a obra de Marcelino seguiría en mans dun irmán formado ao seu carón.',
      'O eleito foi o irmão François, Gabriel Rivat, que havia anos era o «braço direito» do fundador. Com ele, os irmãos garantiam que a obra de Marcelino continuaria nas mãos de um irmão formado a seu lado.'
    ],
    intro: [
      'L’Hermitage, otoño de 1839. El fundador está cada vez más débil y la comunidad se reúne para votar. Descubre dónde estaba cada uno y quién fue elegido para tomar el relevo.',
      'L’Hermitage, outono de 1839. O fundador está cada vez máis débil e a comunidade reúnese para votar. Descobre onde estaba cada quen e quen foi elixido para tomar o relevo.',
      'L’Hermitage, outono de 1839. O fundador está cada vez mais fraco e a comunidade reúne-se para votar. Descobre onde estava cada um e quem foi eleito para tomar o testemunho.'
    ],
    epilogo: [
      '¡Caso resuelto! El hermano François fue el primer superior salido de entre los hermanos. Marcelino pudo ver, antes de morir, que su obra quedaba en buenas manos.',
      'Caso resolto! O irmán François foi o primeiro superior saído de entre os irmáns. Marcelino puido ver, antes de morrer, que a súa obra quedaba en boas mans.',
      'Caso resolvido! O irmão François foi o primeiro superior saído do meio dos irmãos. Marcelino pôde ver, antes de morrer, que a sua obra ficava em boas mãos.'
    ],
    salas: [
      // SUPOSICIÓN HISTÓRICA: dónde estaba cada personaje durante la elección es inventado.
      sala('sala_capitulo', 'red', ['Sala capitular', 'Capitular', 'Donde se reunió la asamblea de hermanos profesos.'], ['Sala capitular', 'Capitular', 'Onde se reuniu a asemblea de irmáns profesos.'], ['Sala capitular', 'Capitular', 'Onde se reuniu a assembleia de irmãos professos.']),
      sala('capilla', 'purple', ['Capilla de L’Hermitage', 'Capilla', 'Lugar de oración antes de votar.'], ['Capela de L’Hermitage', 'Capela', 'Lugar de oración antes de votar.'], ['Capela de L’Hermitage', 'Capela', 'Lugar de oração antes de votar.']),
      sala('secretaria', 'blue', ['Secretaría', 'Secretaría', 'Donde se llevaba la correspondencia de la casa.'], ['Secretaría', 'Secretaría', 'Onde se levaba a correspondencia da casa.'], ['Secretaria', 'Secretaria', 'Onde se tratava a correspondência da casa.']),
      sala('noviciado', 'emerald', ['Noviciado', 'Noviciado', 'Donde se formaban los jóvenes candidatos.'], ['Noviciado', 'Noviciado', 'Onde se formaban os mozos candidatos.'], ['Noviciado', 'Noviciado', 'Onde se formavam os jovens candidatos.']),
      sala('casa_belley', 'indigo', ['Casa de los padres en Belley', 'Belley', 'Residencia del superior de los padres maristas.'], ['Casa dos padres en Belley', 'Belley', 'Residencia do superior dos padres maristas.'], ['Casa dos padres em Belley', 'Belley', 'Residência do superior dos padres maristas.']),
      sala('caminos', 'stone', ['Caminos de las escuelas', 'Caminos', 'Rutas por las que los visitadores recorrían las escuelas.'], ['Camiños das escolas', 'Camiños', 'Rutas polas que os visitadores percorrían as escolas.'], ['Caminhos das escolas', 'Caminhos', 'Rotas pelas quais os visitadores percorriam as escolas.'])
    ],
    objetos: [
      objeto('sala_capitulo', '🗳️', ['Urna de votos', 'Recogió las papeletas de los 92 hermanos.'], ['Urna de votos', 'Recolleu as papeletas dos 92 irmáns.'], ['Urna de votos', 'Recolheu os boletins dos 92 irmãos.']),
      objeto('capilla', '🕯️', ['Cirio', 'Luz ante el sagrario.'], ['Cirio', 'Luz diante do sagrario.'], ['Círio', 'Luz diante do sacrário.']),
      objeto('secretaria', '📜', ['Registro de cartas', 'Copias de la correspondencia del fundador.'], ['Rexistro de cartas', 'Copias da correspondencia do fundador.'], ['Registo de cartas', 'Cópias da correspondência do fundador.']),
      objeto('caminos', '🥾', ['Botas de viaje', 'Calzado gastado de tanto caminar.'], ['Botas de viaxe', 'Calzado gastado de tanto camiñar.'], ['Botas de viagem', 'Calçado gasto de tanto caminhar.'])
    ],
    personajes: [
      pers('MC', 'sala_capitulo', 'V', '🧑‍🏫', ['Marcelino Champagnat', 'Fundador enfermo', 'Apoyaba que un hermano fuera elegido para sucederle.'], ['Marcelino Champagnat', 'Fundador enfermo', 'Apoiaba que un irmán fose elixido para sucederlle.'], ['Marcelino Champagnat', 'Fundador doente', 'Apoiava que um irmão fosse eleito para lhe suceder.']),
      pers('FR', 'sala_capitulo', 'M', '🧑‍💼', ['Hermano François (Gabriel Rivat)', 'Brazo derecho del fundador', 'Llevaba años ayudando a Marcelino en el gobierno de la casa.'], ['Irmán François (Gabriel Rivat)', 'Brazo dereito do fundador', 'Levaba anos axudando a Marcelino no goberno da casa.'], ['Irmão François (Gabriel Rivat)', 'Braço direito do fundador', 'Havia anos que ajudava Marcelino no governo da casa.']),
      pers('LM', 'capilla', '', '🧑', ['Hermano Louis-Marie', 'Elegido asistente', 'Sería, años después, superior general.'], ['Irmán Louis-Marie', 'Elixido asistente', 'Sería, anos despois, superior xeral.'], ['Irmão Louis-Marie', 'Eleito assistente', 'Seria, anos depois, superior-geral.']),
      pers('JB', 'secretaria', '', '🧑‍🦱', ['Hermano Jean-Baptiste Furet', 'Elegido asistente', 'Su nombramiento mostraba el prestigio que tenía entre los hermanos.'], ['Irmán Jean-Baptiste Furet', 'Elixido asistente', 'O seu nomeamento mostraba o prestixio que tiña entre os irmáns.'], ['Irmão Jean-Baptiste Furet', 'Eleito assistente', 'A sua nomeação mostrava o prestígio que tinha entre os irmãos.']),
      pers('MA', 'noviciado', '', '🙏', ['Padre Matricon', 'Capellán de L’Hermitage', 'Padre marista nacido en El Bessat, antiguo alumno de latín.'], ['Padre Matricon', 'Capelán de L’Hermitage', 'Padre marista nado no Bessat, antigo alumno de latín.'], ['Padre Matricon', 'Capelão de L’Hermitage', 'Padre marista nascido no Bessat, antigo aluno de latim.']),
      pers('CO', 'casa_belley', '', '🧔', ['Padre Jean-Claude Colin', 'Superior de los padres maristas', 'Quería hermanos al servicio de los padres más que en las escuelas.'], ['Padre Jean-Claude Colin', 'Superior dos padres maristas', 'Quería irmáns ao servizo dos padres máis ca nas escolas.'], ['Padre Jean-Claude Colin', 'Superior dos padres maristas', 'Queria irmãos ao serviço dos padres mais do que nas escolas.']),
      pers('CS', 'caminos', '', '🚶', ['Hermano Cassien (Louis Chomat)', 'Hermano visitador', 'Antiguo maestro laico, recorría las escuelas desde 1838.'], ['Irmán Cassien (Louis Chomat)', 'Irmán visitador', 'Antigo mestre laico, percorría as escolas desde 1838.'], ['Irmão Cassien (Louis Chomat)', 'Irmão visitador', 'Antigo mestre leigo, percorria as escolas desde 1838.'])
    ],
    pistas: [
      pista('La rápida degradación de la salud del fundador obligó a pensar en su sucesión.', 'A rápida degradación da saúde do fundador obrigou a pensar na súa sucesión.', 'A rápida degradação da saúde do fundador obrigou a pensar na sua sucessão.', 'MC'),
      pista('El 12 de octubre de 1839, una asamblea de 92 hermanos profesos eligió un director general.', 'O 12 de outubro de 1839, unha asemblea de 92 irmáns profesos elixiu un director xeral.', 'A 12 de outubro de 1839, uma assembleia de 92 irmãos professos elegeu um diretor-geral.', 'FR'),
      pista('Con él fueron elegidos dos asistentes, sin que nadie definiera bien sus poderes.', 'Con el foron elixidos dous asistentes, sen que ninguén definise ben os seus poderes.', 'Com ele foram eleitos dois assistentes, sem que ninguém definisse bem os seus poderes.', 'LM,JB'),
      pista('Meses antes, el superior de los padres había escrito que un hermano al servicio de los padres hacía «veinte veces más el bien».', 'Meses antes, o superior dos padres escribira que un irmán ao servizo dos padres facía «vinte veces máis o ben».', 'Meses antes, o superior dos padres tinha escrito que um irmão ao serviço dos padres fazia «vinte vezes mais o bem».', 'CO')
    ]
  },
  // ───────────────────────── 018 ─────────────────────────
  {
    id: '018-HM',
    nivel: 'medium',
    rasgos: ['espiritu_familia', 'estilo_maria'],
    nombre: ['El testamento espiritual', 'O testamento espiritual', 'O testamento espiritual'],
    categoria: ['Gobierno y herencia', 'Goberno e herdanza', 'Governo e herança'],
    fuente: ['L’Hermitage · Lanfrey T. 1, cap. 7', 'L’Hermitage · Lanfrey T. 1, cap. 7', 'L’Hermitage · Lanfrey T. 1, cap. 7'],
    textoClave: [
      'El 18 de mayo de 1840 se leyó públicamente, en presencia de Marcelino, el testamento espiritual redactado según sus instrucciones.',
      'O 18 de maio de 1840 leuse publicamente, en presenza de Marcelino, o testamento espiritual redactado segundo as súas instrucións.',
      'A 18 de maio de 1840 foi lido publicamente, na presença de Marcelino, o testamento espiritual redigido segundo as suas instruções.'
    ],
    contexto: [
      'Las relaciones entre padres y hermanos maristas habían sido laboriosas entre 1836 y 1840. El 22 de marzo de 1840, Marcelino constituyó ante el notario Mioche, en Saint-Chamond, una sociedad civil con seis de los principales hermanos, heredera de todos sus bienes; ningún padre formaba parte de ella. El testamento quería responder a las dudas de Colin: «El superior de los padres […] debe ser el lazo de unión entre unos y otros». El 24 de mayo, Colin y Marcelino se vieron por última vez; Marcelino murió el 6 de junio de 1840.',
      'As relacións entre padres e irmáns maristas foran laboriosas entre 1836 e 1840. O 22 de marzo de 1840, Marcelino constituíu ante o notario Mioche, en Saint-Chamond, unha sociedade civil con seis dos principais irmáns, herdeira de todos os seus bens; ningún padre formaba parte dela. O testamento quería responder ás dúbidas de Colin: «O superior dos padres […] debe ser o lazo de unión entre uns e outros». O 24 de maio, Colin e Marcelino víronse por última vez; Marcelino morreu o 6 de xuño de 1840.',
      'As relações entre padres e irmãos maristas tinham sido laboriosas entre 1836 e 1840. A 22 de março de 1840, Marcelino constituiu perante o notário Mioche, em Saint-Chamond, uma sociedade civil com seis dos principais irmãos, herdeira de todos os seus bens; nenhum padre fazia parte dela. O testamento queria responder às dúvidas de Colin: «O superior dos padres […] deve ser o laço de união entre uns e outros». A 24 de maio, Colin e Marcelino viram-se pela última vez; Marcelino morreu a 6 de junho de 1840.'
    ],
    explicacion: [
      'El responsable de poner por escrito el testamento fue el hermano François, que lo redactó con el hermano Louis-Marie siguiendo las instrucciones del fundador. Marcelino pedía a sus hermanos unión con los padres y entre ellos; así dejó sellada, antes de morir, la unidad de la familia marista.',
      'O responsable de poñer por escrito o testamento foi o irmán François, que o redactou co irmán Louis-Marie seguindo as instrucións do fundador. Marcelino pedíalles aos seus irmáns unión cos padres e entre eles; así deixou selada, antes de morrer, a unidade da familia marista.',
      'O responsável por pôr o testamento por escrito foi o irmão François, que o redigiu com o irmão Louis-Marie seguindo as instruções do fundador. Marcelino pedia aos irmãos união com os padres e entre si; assim deixou selada, antes de morrer, a unidade da família marista.'
    ],
    intro: [
      'L’Hermitage, primavera de 1840. El fundador ya no puede levantarse y quiere dejar a sus hermanos unas últimas palabras. Averigua dónde estaba cada uno y quién escribió el testamento junto a su lecho.',
      'L’Hermitage, primavera de 1840. O fundador xa non pode erguerse e quere deixarlles aos seus irmáns unhas últimas palabras. Descobre onde estaba cada quen e quen escribiu o testamento xunto ao seu leito.',
      'L’Hermitage, primavera de 1840. O fundador já não se consegue levantar e quer deixar aos seus irmãos umas últimas palavras. Descobre onde estava cada um e quem escreveu o testamento junto ao seu leito.'
    ],
    epilogo: [
      '¡Caso resuelto! El testamento espiritual se leyó ante la comunidad. Tres semanas después, el 6 de junio de 1840, Marcelino murió en L’Hermitage.',
      'Caso resolto! O testamento espiritual leuse ante a comunidade. Tres semanas despois, o 6 de xuño de 1840, Marcelino morreu en L’Hermitage.',
      'Caso resolvido! O testamento espiritual foi lido perante a comunidade. Três semanas depois, a 6 de junho de 1840, Marcelino morreu em L’Hermitage.'
    ],
    salas: [
      // SUPOSICIÓN HISTÓRICA: dónde estaba cada personaje es inventado; las fuentes dicen que François y Louis-Marie redactaron juntos el texto.
      sala('cuarto_fundador', 'red', ['Cuarto del fundador', 'Cuarto', 'Habitación donde Marcelino pasó sus últimas semanas.'], ['Cuarto do fundador', 'Cuarto', 'Habitación onde Marcelino pasou as súas últimas semanas.'], ['Quarto do fundador', 'Quarto', 'Divisão onde Marcelino passou as suas últimas semanas.']),
      sala('secretaria', 'blue', ['Secretaría', 'Secretaría', 'Donde se pasaban a limpio los escritos de la casa.'], ['Secretaría', 'Secretaría', 'Onde se pasaban a limpo os escritos da casa.'], ['Secretaria', 'Secretaria', 'Onde se passavam a limpo os escritos da casa.']),
      sala('capilla', 'purple', ['Capilla de L’Hermitage', 'Capilla', 'Allí la comunidad rezaba por el enfermo.'], ['Capela de L’Hermitage', 'Capela', 'Alí a comunidade rezaba polo enfermo.'], ['Capela de L’Hermitage', 'Capela', 'Ali a comunidade rezava pelo doente.']),
      sala('notaria', 'stone', ['Notaría de Saint-Chamond', 'Notaría', 'Despacho donde se firmó la sociedad civil.'], ['Notaría de Saint-Chamond', 'Notaría', 'Despacho onde se asinou a sociedade civil.'], ['Cartório de Saint-Chamond', 'Cartório', 'Escritório onde se assinou a sociedade civil.']),
      sala('locutorio', 'amber', ['Locutorio', 'Locutorio', 'Sala de visitas de L’Hermitage.'], ['Locutorio', 'Locutorio', 'Sala de visitas de L’Hermitage.'], ['Locutório', 'Locutório', 'Sala de visitas de L’Hermitage.']),
      sala('huerto', 'emerald', ['Huerto de L’Hermitage', 'Huerto', 'Tierra junto al Gier que cuidaban los hermanos.'], ['Horta de L’Hermitage', 'Horta', 'Terra xunto ao Gier que coidaban os irmáns.'], ['Horta de L’Hermitage', 'Horta', 'Terra junto ao Gier de que os irmãos cuidavam.'])
    ],
    objetos: [
      objeto('cuarto_fundador', '🛏️', ['Lecho del enfermo', 'Cama de la que Marcelino ya no se levantaba.'], ['Leito do enfermo', 'Cama da que Marcelino xa non se erguía.'], ['Leito do doente', 'Cama de onde Marcelino já não se levantava.']),
      objeto('secretaria', '✒️', ['Pluma y tintero', 'Para la copia limpia del testamento.'], ['Pluma e tinteiro', 'Para a copia limpa do testamento.'], ['Pena e tinteiro', 'Para a cópia limpa do testamento.']),
      objeto('capilla', '✝️', ['Crucifijo', 'Cruz ante la que oraba la comunidad.'], ['Crucifixo', 'Cruz diante da que oraba a comunidade.'], ['Crucifixo', 'Cruz diante da qual orava a comunidade.']),
      objeto('notaria', '📜', ['Acta notarial', 'Escritura de la sociedad civil del 22 de marzo.'], ['Acta notarial', 'Escritura da sociedade civil do 22 de marzo.'], ['Escritura notarial', 'Escritura da sociedade civil de 22 de março.'])
    ],
    personajes: [
      pers('MC', 'cuarto_fundador', 'V', '🧑‍🏫', ['Marcelino Champagnat', 'Fundador moribundo', 'Daba sus instrucciones para dejar a sus hermanos unidos.'], ['Marcelino Champagnat', 'Fundador moribundo', 'Daba as súas instrucións para deixar os seus irmáns unidos.'], ['Marcelino Champagnat', 'Fundador moribundo', 'Dava as suas instruções para deixar os irmãos unidos.']),
      pers('FR', 'cuarto_fundador', 'M', '✍️', ['Hermano François (Gabriel Rivat)', 'Director general', 'Escribía al dictado lo que el fundador quería decir.'], ['Irmán François (Gabriel Rivat)', 'Director xeral', 'Escribía ao ditado o que o fundador quería dicir.'], ['Irmão François (Gabriel Rivat)', 'Diretor-geral', 'Escrevia ao ditado o que o fundador queria dizer.']),
      pers('LM', 'secretaria', '', '🧑', ['Hermano Louis-Marie', 'Asistente', 'Ayudaba a dar forma al texto que se leería a la comunidad.'], ['Irmán Louis-Marie', 'Asistente', 'Axudaba a dar forma ao texto que se lería á comunidade.'], ['Irmão Louis-Marie', 'Assistente', 'Ajudava a dar forma ao texto que seria lido à comunidade.']),
      pers('MA', 'capilla', '', '🙏', ['Padre Matricon', 'Capellán de L’Hermitage', 'Aunque era padre marista, no formaba parte de la sociedad civil.'], ['Padre Matricon', 'Capelán de L’Hermitage', 'Aínda que era padre marista, non formaba parte da sociedade civil.'], ['Padre Matricon', 'Capelão de L’Hermitage', 'Embora fosse padre marista, não fazia parte da sociedade civil.']),
      pers('MI', 'notaria', '', '🧑‍⚖️', ['Notario Mioche', 'Notario de Saint-Chamond', 'Registró la sociedad civil, para disgusto del padre Colin.'], ['Notario Mioche', 'Notario de Saint-Chamond', 'Rexistrou a sociedade civil, para desgusto do padre Colin.'], ['Notário Mioche', 'Notário de Saint-Chamond', 'Registou a sociedade civil, para desagrado do padre Colin.']),
      pers('CO', 'locutorio', '', '🧔', ['Padre Jean-Claude Colin', 'Superior de los padres maristas', 'El 24 de mayo se entrevistó largamente con el fundador.'], ['Padre Jean-Claude Colin', 'Superior dos padres maristas', 'O 24 de maio entrevistouse longamente co fundador.'], ['Padre Jean-Claude Colin', 'Superior dos padres maristas', 'A 24 de maio teve uma longa conversa com o fundador.']),
      pers('JB', 'huerto', '', '🧑‍🦱', ['Hermano Jean-Baptiste Furet', 'Asistente', 'Más tarde escribiría la Vida del fundador con los recuerdos de los hermanos.'], ['Irmán Jean-Baptiste Furet', 'Asistente', 'Máis tarde escribiría a Vida do fundador cos recordos dos irmáns.'], ['Irmão Jean-Baptiste Furet', 'Assistente', 'Mais tarde escreveria a Vida do fundador com as recordações dos irmãos.'])
    ],
    pistas: [
      pista('El testamento se redactó según las instrucciones del fundador, por dos hermanos.', 'O testamento redactouse segundo as instrucións do fundador, por dous irmáns.', 'O testamento foi redigido segundo as instruções do fundador, por dois irmãos.', 'FR,LM'),
      pista('El 22 de marzo, una sociedad civil con seis hermanos quedó como heredera de todos sus bienes.', 'O 22 de marzo, unha sociedade civil con seis irmáns quedou como herdeira de todos os seus bens.', 'A 22 de março, uma sociedade civil com seis irmãos ficou herdeira de todos os seus bens.', 'MI'),
      pista('Ningún padre formaba parte de esa sociedad, ni siquiera el capellán de la casa.', 'Ningún padre formaba parte desa sociedade, nin sequera o capelán da casa.', 'Nenhum padre fazia parte dessa sociedade, nem sequer o capelão da casa.', 'MA'),
      pista('En su última entrevista, el fundador encomendó sus hermanos al superior de los padres.', 'Na súa última entrevista, o fundador encomendoulle os seus irmáns ao superior dos padres.', 'Na sua última conversa, o fundador confiou os seus irmãos ao superior dos padres.', 'CO,MC')
    ]
  }
];
