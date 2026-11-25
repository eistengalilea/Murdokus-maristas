import { RetoF, sala, objeto, pers, pista } from './base';

/**
 * RETOS DIFÍCILES (9x9 · 9 personajes) — Marcelino Champagnat y los primeros hermanos.
 * Fuentes: André Lanfrey, Historia del Instituto de los Hermanos Maristas, T. 1 (FMS Studia 3, 2015)
 *          y «Tras las huellas de Marcelino Champagnat» (Misión Educativa Marista, 2023).
 * Orden de los textos: [castellano, gallego, portugués de Portugal].
 *
 * SUPOSICIÓN HISTÓRICA: los comentarios que empiezan así señalan personajes, lugares o detalles
 * inventados o no comprobados en las fuentes, puestos para completar el tablero de 9 personas.
 * Conviene revisarlos con Lanfrey antes de publicar.
 */
export const DIFICILES: RetoF[] = [
  // ───────────────────────── 019 ─────────────────────────
  {
    // Lanfrey T. 1, cap. 7 («Un suceso decisivo: la revolución de los días 27 a 29 de julio de 1830»)
    // y cap. 6 («El Sr. Séon, el Sr. Champagnat y la diócesis»).
    id: '019-HM',
    nivel: 'hard',
    rasgos: ['estilo_maria', 'espiritu_familia'],
    nombre: ['El superior de 1830', 'O superior de 1830', 'O superior de 1830'],
    categoria: ['Orígenes de la Sociedad de María', 'Orixes da Sociedade de María', 'Origens da Sociedade de Maria'],
    fuente: ['L’Hermitage · Lanfrey T. 1, caps. 6 y 7', 'L’Hermitage · Lanfrey T. 1, caps. 6 e 7', 'L’Hermitage · Lanfrey T. 1, caps. 6 e 7'],
    textoClave: [
      'El 18 de diciembre de 1830, en nombre de Mons. de Pins, el vicario general Cattet nombró a Marcelino «superior titular de la Sociedad de María» en la diócesis de Lyon.',
      'O 18 de decembro de 1830, en nome de Mons. de Pins, o vigario xeral Cattet nomeou a Marcelino «superior titular da Sociedade de María» na diocese de Lyon.',
      'A 18 de dezembro de 1830, em nome de D. de Pins, o vigário-geral Cattet nomeou Marcelino «superior titular da Sociedade de Maria» na diocese de Lyon.'
    ],
    contexto: [
      'La revolución parisina del 27 al 29 de julio de 1830 derribó a los Borbones, desató un violento anticlericalismo y dejó sin firmar la autorización legal de los hermanos, que ya estaba preparada para el rey. Fue una catástrofe para Mons. de Pins, legitimista convencido. Los maristas aprovecharon el desconcierto: el 22 de octubre, una carta de Jean-Claude Colin anunció que Belley era el «centro de unidad» e invitó a los presbíteros de L’Hermitage a elegirse un superior. Entre el 3 y el 8 de diciembre eligieron a Champagnat.',
      'A revolución parisiense do 27 ao 29 de xullo de 1830 derrubou os Borbóns, desatou un violento anticlericalismo e deixou sen asinar a autorización legal dos irmáns, que xa estaba preparada para o rei. Foi unha catástrofe para Mons. de Pins, lexitimista convencido. Os maristas aproveitaron o desconcerto: o 22 de outubro, unha carta de Jean-Claude Colin anunciou que Belley era o «centro de unidade» e invitou os presbíteros de L’Hermitage a elixir un superior. Entre o 3 e o 8 de decembro elixiron a Champagnat.',
      'A revolução de Paris de 27 a 29 de julho de 1830 derrubou os Bourbons, desencadeou um violento anticlericalismo e deixou por assinar a autorização legal dos irmãos, que já estava preparada para o rei. Foi uma catástrofe para D. de Pins, legitimista convicto. Os maristas aproveitaram a confusão: a 22 de outubro, uma carta de Jean-Claude Colin anunciou que Belley era o «centro de unidade» e convidou os presbíteros de L’Hermitage a escolherem um superior. Entre 3 e 8 de dezembro escolheram Champagnat.'
    ],
    explicacion: [
      'El responsable del nombramiento fue el vicario general Cattet. El arzobispado aceptó el hecho consumado de la elección y, el 18 de diciembre de 1830, Cattet nombró a Champagnat superior titular en nombre de Mons. de Pins, precisando que, como director de L’Hermitage, ya era superior de hecho. Los hermanos quedaron al margen de aquellas gestiones.',
      'O responsable do nomeamento foi o vigario xeral Cattet. O arcebispado aceptou o feito consumado da elección e, o 18 de decembro de 1830, Cattet nomeou a Champagnat superior titular en nome de Mons. de Pins, precisando que, como director de L’Hermitage, xa era superior de feito. Os irmáns quedaron á marxe daquelas xestións.',
      'O responsável pela nomeação foi o vigário-geral Cattet. O arcebispado aceitou o facto consumado da eleição e, a 18 de dezembro de 1830, Cattet nomeou Champagnat superior titular em nome de D. de Pins, precisando que, como diretor de L’Hermitage, já era superior de facto. Os irmãos ficaram à margem dessas diligências.'
    ],
    intro: [
      'Otoño de 1830. París ha derribado al rey, la autorización de los hermanos se ha quedado sin firma y en Lyon el arzobispo está abatido. Mientras tanto, en L’Hermitage, los presbíteros maristas eligen a un superior. Reconstruye dónde estaba cada uno y descubre quién firmó el nombramiento.',
      'Outono de 1830. París derrubou o rei, a autorización dos irmáns quedou sen sinatura e en Lyon o arcebispo está abatido. Mentres tanto, en L’Hermitage, os presbíteros maristas elixen un superior. Reconstrúe onde estaba cada quen e descobre quen asinou o nomeamento.',
      'Outono de 1830. Paris derrubou o rei, a autorização dos irmãos ficou por assinar e em Lyon o arcebispo está abatido. Entretanto, em L’Hermitage, os presbíteros maristas escolhem um superior. Reconstrói onde estava cada um e descobre quem assinou a nomeação.'
    ],
    epilogo: [
      '¡Caso resuelto! El nombramiento compensó mal la victoria del modelo de Colin: el centro de la Sociedad de María estaría en Belley. Aun así, el 8 de septiembre de 1831 los aspirantes maristas renovaron su consagración a María, como en Fourvière.',
      'Caso resolto! O nomeamento compensou mal a vitoria do modelo de Colin: o centro da Sociedade de María estaría en Belley. Aínda así, o 8 de setembro de 1831 os aspirantes maristas renovaron a súa consagración a María, coma en Fourvière.',
      'Caso resolvido! A nomeação compensou mal a vitória do modelo de Colin: o centro da Sociedade de Maria ficaria em Belley. Mesmo assim, a 8 de setembro de 1831 os aspirantes maristas renovaram a sua consagração a Maria, como em Fourvière.'
    ],
    salas: [
      // SUPOSICIÓN HISTÓRICA: las fuentes no dicen dónde recibió Marcelino el nombramiento; se sitúa en el arzobispado.
      sala('arzobispado', 'red', ['Arzobispado de Lyon', 'Arzobispado', 'Despacho de los vicarios generales.'], ['Arcebispado de Lyon', 'Arcebispado', 'Despacho dos vigarios xerais.'], ['Arcebispado de Lyon', 'Arcebispado', 'Gabinete dos vigários-gerais.']),
      sala('oratorio_pins', 'purple', ['Oratorio del arzobispo', 'Oratorio', 'Capilla privada de Mons. de Pins.'], ['Oratorio do arcebispo', 'Oratorio', 'Capela privada de Mons. de Pins.'], ['Oratório do arcebispo', 'Oratório', 'Capela privada de D. de Pins.']),
      sala('colegio_belley', 'blue', ['Colegio de Belley', 'Belley', 'Colegio que dirigía Jean-Claude Colin desde 1829.'], ['Colexio de Belley', 'Belley', 'Colexio que dirixía Jean-Claude Colin desde 1829.'], ['Colégio de Belley', 'Belley', 'Colégio que Jean-Claude Colin dirigia desde 1829.']),
      sala('fabrica_cintas', 'rose', ['Fábrica de cintas', 'Fábrica', 'Taller de L’Hermitage que vigilaba el Sr. Séon.'], ['Fábrica de cintas', 'Fábrica', 'Obradoiro de L’Hermitage que vixiaba o Sr. Séon.'], ['Fábrica de fitas', 'Fábrica', 'Oficina de L’Hermitage que o Sr. Séon vigiava.']),
      sala('clase_novicios', 'teal', ['Clase de los novicios', 'Clase', 'Aula de escritura, cálculo, canto y catecismo.'], ['Clase dos novicios', 'Clase', 'Aula de escritura, cálculo, canto e catecismo.'], ['Aula dos noviços', 'Aula', 'Sala de escrita, cálculo, canto e catecismo.']),
      sala('escritorio', 'stone', ['Escritorio de los capellanes', 'Escritorio', 'Mesa donde se redactaban reglas y estatutos.'], ['Escritorio dos capeláns', 'Escritorio', 'Mesa onde se redactaban regras e estatutos.'], ['Escritório dos capelães', 'Escritório', 'Mesa onde se redigiam regras e estatutos.']),
      sala('capilla_hermitage', 'indigo', ['Capilla de L’Hermitage', 'Capilla', 'Lugar de oración de hermanos y presbíteros.'], ['Capela de L’Hermitage', 'Capela', 'Lugar de oración de irmáns e presbíteros.'], ['Capela de L’Hermitage', 'Capela', 'Lugar de oração de irmãos e presbíteros.'])
    ],
    objetos: [
      objeto('arzobispado', '📜', ['Nombramiento', 'Documento del 18 de diciembre de 1830.'], ['Nomeamento', 'Documento do 18 de decembro de 1830.'], ['Nomeação', 'Documento de 18 de dezembro de 1830.']),
      objeto('colegio_belley', '✉️', ['Carta del 22 de octubre', 'Anuncia que Belley es el centro de unidad.'], ['Carta do 22 de outubro', 'Anuncia que Belley é o centro de unidade.'], ['Carta de 22 de outubro', 'Anuncia que Belley é o centro de unidade.']),
      objeto('fabrica_cintas', '🧵', ['Telar de cintas', 'Trabajo que ayudaba a sostener la casa.'], ['Tear de cintas', 'Traballo que axudaba a soster a casa.'], ['Tear de fitas', 'Trabalho que ajudava a sustentar a casa.']),
      objeto('escritorio', '📖', ['Estatutos de la Sociedad de María', 'Dieciséis artículos de letra de Pompallier.'], ['Estatutos da Sociedade de María', 'Dezaseis artigos con letra de Pompallier.'], ['Estatutos da Sociedade de Maria', 'Dezasseis artigos com letra de Pompallier.']),
      objeto('capilla_hermitage', '🕯️', ['Cirio', 'Luz ante la imagen de María.'], ['Cirio', 'Luz diante da imaxe de María.'], ['Círio', 'Luz diante da imagem de Maria.'])
    ],
    personajes: [
      pers('MC', 'arzobispado', 'V', '🧑‍🏫', ['Marcelino Champagnat', 'Director de L’Hermitage', 'Elegido por sus cohermanos, esperaba la respuesta de la diócesis.'], ['Marcelino Champagnat', 'Director de L’Hermitage', 'Elixido polos seus compañeiros, agardaba a resposta da diocese.'], ['Marcelino Champagnat', 'Diretor de L’Hermitage', 'Escolhido pelos seus confrades, aguardava a resposta da diocese.']),
      pers('CA', 'arzobispado', 'M', '✍️', ['Sr. Cattet', 'Vicario general de Lyon', 'Firmaba en nombre del arzobispo los asuntos de la Sociedad de María.'], ['Sr. Cattet', 'Vigario xeral de Lyon', 'Asinaba en nome do arcebispo os asuntos da Sociedade de María.'], ['Sr. Cattet', 'Vigário-geral de Lyon', 'Assinava em nome do arcebispo os assuntos da Sociedade de Maria.']),
      // SUPOSICIÓN HISTÓRICA: que Mons. de Pins rezara en su oratorio es un recurso del tablero.
      pers('PI', 'oratorio_pins', '', '👴', ['Mons. de Pins', 'Administrador apostólico de Lyon', 'Fiel a los Borbones, vivía la caída del rey como una catástrofe.'], ['Mons. de Pins', 'Administrador apostólico de Lyon', 'Fiel aos Borbóns, vivía a caída do rei como unha catástrofe.'], ['D. de Pins', 'Administrador apostólico de Lyon', 'Fiel aos Bourbons, vivia a queda do rei como uma catástrofe.']),
      pers('CO', 'colegio_belley', '', '🧔', ['Jean-Claude Colin', 'Superior del colegio', 'Quería que todos los maristas tuvieran su centro en su diócesis.'], ['Jean-Claude Colin', 'Superior do colexio', 'Quería que todos os maristas tivesen o seu centro na súa diocese.'], ['Jean-Claude Colin', 'Superior do colégio', 'Queria que todos os maristas tivessem o seu centro na sua diocese.']),
      pers('SE', 'fabrica_cintas', '', '🧑‍🦳', ['Étienne Séon', 'Presbítero de L’Hermitage', 'Se ocupaba de lo espiritual y de los telares, y soñaba con misionar.'], ['Étienne Séon', 'Presbítero de L’Hermitage', 'Ocupábase do espiritual e dos teares, e soñaba con misionar.'], ['Étienne Séon', 'Presbítero de L’Hermitage', 'Ocupava-se do espiritual e dos teares, e sonhava com missionar.']),
      pers('BO', 'clase_novicios', '', '👨‍🏫', ['Sr. Bourdin', 'Presbítero de L’Hermitage', 'Enseñaba a los novicios escritura, cálculo, canto y catecismo.'], ['Sr. Bourdin', 'Presbítero de L’Hermitage', 'Ensinaba aos novicios escritura, cálculo, canto e catecismo.'], ['Sr. Bourdin', 'Presbítero de L’Hermitage', 'Ensinava aos noviços escrita, cálculo, canto e catecismo.']),
      pers('PO', 'escritorio', '', '🧑‍💼', ['Jean-Baptiste Pompallier', 'Director espiritual', 'Hacía muchas reglas y puso por escrito unos estatutos de la Sociedad.'], ['Jean-Baptiste Pompallier', 'Director espiritual', 'Facía moitas regras e puxo por escrito uns estatutos da Sociedade.'], ['Jean-Baptiste Pompallier', 'Diretor espiritual', 'Fazia muitas regras e pôs por escrito uns estatutos da Sociedade.']),
      // SUPOSICIÓN HISTÓRICA: Lanfrey dice que los hermanos quedaron al margen; su lugar aquella semana es inventado.
      pers('FR', 'capilla_hermitage', '', '🧑‍🎓', ['Hermano François (Gabriel Rivat)', 'Hermano de L’Hermitage', 'Rezaba por la casa sin saber lo que se decidía entre los presbíteros.'], ['Irmán François (Gabriel Rivat)', 'Irmán de L’Hermitage', 'Rezaba pola casa sen saber o que se decidía entre os presbíteros.'], ['Irmão François (Gabriel Rivat)', 'Irmão de L’Hermitage', 'Rezava pela casa sem saber o que se decidia entre os presbíteros.']),
      pers('ST', 'capilla_hermitage', '', '🧑‍🍳', ['Hermano Stanislas', 'Hermano de la casa', 'Muy unido al fundador, llevaba un año con la sotana nueva de 1829.'], ['Irmán Stanislas', 'Irmán da casa', 'Moi unido ao fundador, levaba un ano coa sotana nova de 1829.'], ['Irmão Stanislas', 'Irmão da casa', 'Muito ligado ao fundador, usava havia um ano a sotaina nova de 1829.'])
    ],
    pistas: [
      pista('La revolución de julio impidió que el rey firmara la autorización legal de los hermanos.', 'A revolución de xullo impediu que o rei asinase a autorización legal dos irmáns.', 'A revolução de julho impediu que o rei assinasse a autorização legal dos irmãos.', 'PI'),
      pista('El 22 de octubre llegó una carta: Belley sería el centro de unidad y L’Hermitage debía elegir superior.', 'O 22 de outubro chegou unha carta: Belley sería o centro de unidade e L’Hermitage debía elixir superior.', 'A 22 de outubro chegou uma carta: Belley seria o centro de unidade e L’Hermitage devia escolher superior.', 'CO'),
      pista('Entre el 3 y el 8 de diciembre, los presbíteros de L’Hermitage eligieron a uno de ellos como rector provincial.', 'Entre o 3 e o 8 de decembro, os presbíteros de L’Hermitage elixiron un deles como reitor provincial.', 'Entre 3 e 8 de dezembro, os presbíteros de L’Hermitage escolheram um deles como reitor provincial.', 'MC,SE,BO,PO'),
      pista('Los hermanos fueron tenidos al margen de la elección del superior.', 'Os irmáns foron deixados á marxe da elección do superior.', 'Os irmãos foram deixados à margem da eleição do superior.', 'FR,ST'),
      pista('El arzobispado aceptó el hecho consumado: uno de sus vicarios generales firmó el nombramiento.', 'O arcebispado aceptou o feito consumado: un dos seus vigarios xerais asinou o nomeamento.', 'O arcebispado aceitou o facto consumado: um dos seus vigários-gerais assinou a nomeação.', 'CA,MC')
    ]
  },
  // ───────────────────────── 020 ─────────────────────────
  {
    // Lanfrey T. 1, cap. 8 (política y pedagogía; nota 390) y Tras las huellas, 5.11 (carta al hermano Hilarion, 18-3-1838).
    id: '020-HM',
    nivel: 'hard',
    rasgos: ['presencia', 'sencillez'],
    nombre: ['Marcelino en París', 'Marcelino en París', 'Marcelino em Paris'],
    categoria: ['La autorización legal', 'A autorización legal', 'A autorização legal'],
    fuente: ['L’Hermitage · Lanfrey T. 1, cap. 8; Tras las huellas, 5.11', 'L’Hermitage · Lanfrey T. 1, cap. 8; Tras las huellas, 5.11', 'L’Hermitage · Lanfrey T. 1, cap. 8; Tras las huellas, 5.11'],
    textoClave: [
      'En 1838 Marcelino pasó meses en París buscando la autorización legal de los Hermanos Maristas, pero el ministro solo quería autorizarlos para los municipios pequeños.',
      'En 1838 Marcelino pasou meses en París procurando a autorización legal dos Irmáns Maristas, pero o ministro só os quería autorizar para os concellos pequenos.',
      'Em 1838 Marcelino passou meses em Paris a procurar a autorização legal dos Irmãos Maristas, mas o ministro só os queria autorizar para os municípios pequenos.'
    ],
    contexto: [
      'El Estado protegía a los Hermanos de las Escuelas Cristianas y no quería reconocer nuevas sociedades de hermanos. El 2 de agosto de 1838, el hermano Anaclet escribió una carta de aprobación prudente: deseaba que el gobierno autorizara a los maristas «en las pequeñas localidades». Marcelino rechazó una autorización limitada a los municipios de menos de 1.000 habitantes, porque allí no podía vivir una comunidad de tres hermanos. Casi todas sus escuelas estaban en pueblos de 1.200 a 4.000 habitantes.',
      'O Estado protexía os Irmáns das Escolas Cristiás e non quería recoñecer novas sociedades de irmáns. O 2 de agosto de 1838, o irmán Anaclet escribiu unha carta de aprobación prudente: desexaba que o goberno autorizase os maristas «nas pequenas localidades». Marcelino rexeitou unha autorización limitada aos concellos de menos de 1.000 habitantes, porque alí non podía vivir unha comunidade de tres irmáns. Case todas as súas escolas estaban en vilas de 1.200 a 4.000 habitantes.',
      'O Estado protegia os Irmãos das Escolas Cristãs e não queria reconhecer novas sociedades de irmãos. A 2 de agosto de 1838, o irmão Anaclet escreveu uma carta de aprovação prudente: desejava que o governo autorizasse os maristas «nas pequenas localidades». Marcelino recusou uma autorização limitada aos municípios com menos de 1.000 habitantes, porque ali não podia viver uma comunidade de três irmãos. Quase todas as suas escolas ficavam em povoações de 1.200 a 4.000 habitantes.'
    ],
    explicacion: [
      'El responsable del fracaso fue el ministro de Instrucción Pública: quería imponer la autorización solo para los pequeños municipios, mientras un alto funcionario le pedía a Marcelino fundar en una población mayor. Al aceptar esto último, Marcelino dejó al ministro en contradicción consigo mismo, pero no obtuvo la autorización: su obra solo fue tolerada.',
      'O responsable do fracaso foi o ministro de Instrución Pública: quería impoñer a autorización só para os pequenos concellos, mentres un alto funcionario lle pedía a Marcelino fundar nunha poboación maior. Ao aceptar isto último, Marcelino deixou o ministro en contradición consigo mesmo, pero non obtivo a autorización: a súa obra só foi tolerada.',
      'O responsável pelo fracasso foi o ministro da Instrução Pública: queria impor a autorização apenas para os pequenos municípios, enquanto um alto funcionário pedia a Marcelino que fundasse numa povoação maior. Ao aceitar isto, Marcelino deixou o ministro em contradição consigo mesmo, mas não obteve a autorização: a sua obra foi apenas tolerada.'
    ],
    intro: [
      'París, 1838. Un sacerdote de campo, con sotana y sin contactos, recorre ministerios y despachos. En L’Hermitage, los hermanos esperan noticias. Alguien, desde su despacho, está cerrando la puerta a los Hermanos Maristas. Descubre dónde estaba cada uno y quién bloqueó la autorización.',
      'París, 1838. Un sacerdote do rural, con sotana e sen contactos, percorre ministerios e despachos. En L’Hermitage, os irmáns agardan novas. Alguén, desde o seu despacho, está pechando a porta aos Irmáns Maristas. Descobre onde estaba cada quen e quen bloqueou a autorización.',
      'Paris, 1838. Um padre do campo, de sotaina e sem conhecimentos, percorre ministérios e gabinetes. Em L’Hermitage, os irmãos aguardam notícias. Alguém, no seu gabinete, está a fechar a porta aos Irmãos Maristas. Descobre onde estava cada um e quem bloqueou a autorização.'
    ],
    epilogo: [
      '¡Caso resuelto! Marcelino volvió sin la autorización, pero no sin esperanza: «en la capital hay mucha más religión de lo que piensan las personas». La autorización llegaría en 1851, once años después de su muerte.',
      'Caso resolto! Marcelino volveu sen a autorización, pero non sen esperanza: «na capital hai moita máis relixión do que pensa a xente». A autorización chegaría en 1851, once anos despois da súa morte.',
      'Caso resolvido! Marcelino regressou sem a autorização, mas não sem esperança: «na capital há muito mais religião do que as pessoas pensam». A autorização chegaria em 1851, onze anos depois da sua morte.'
    ],
    salas: [
      // SUPOSICIÓN HISTÓRICA: Lanfrey no describe una entrevista en el ministerio; el lugar es un recurso del tablero.
      sala('ministerio', 'red', ['Ministerio de Instrucción Pública', 'Ministerio', 'Despacho del ministro en París.'], ['Ministerio de Instrución Pública', 'Ministerio', 'Despacho do ministro en París.'], ['Ministério da Instrução Pública', 'Ministério', 'Gabinete do ministro em Paris.']),
      sala('oficinas', 'stone', ['Oficinas del ministerio', 'Oficinas', 'Mesas de los altos funcionarios.'], ['Oficinas do ministerio', 'Oficinas', 'Mesas dos altos funcionarios.'], ['Repartições do ministério', 'Repartições', 'Secretárias dos altos funcionários.']),
      sala('casa_hec', 'blue', ['Casa de los Hermanos de las Escuelas Cristianas', 'Casa HEC', 'Sede de los hermanos de La Salle.'], ['Casa dos Irmáns das Escolas Cristiás', 'Casa HEC', 'Sede dos irmáns de La Salle.'], ['Casa dos Irmãos das Escolas Cristãs', 'Casa FEC', 'Sede dos irmãos de La Salle.']),
      sala('diligencia', 'amber', ['Parada de la diligencia', 'Parada', 'Alto en el camino hacia París.'], ['Parada da dilixencia', 'Parada', 'Alto no camiño cara a París.'], ['Paragem da diligência', 'Paragem', 'Paragem no caminho para Paris.']),
      sala('consejo', 'purple', ['Sala del consejo de L’Hermitage', 'Consejo', 'Donde se reunía el consejo cada domingo.'], ['Sala do consello de L’Hermitage', 'Consello', 'Onde se reunía o consello cada domingo.'], ['Sala do conselho de L’Hermitage', 'Conselho', 'Onde se reunia o conselho todos os domingos.']),
      sala('capilla_hermitage', 'indigo', ['Capilla de L’Hermitage', 'Capilla', 'Lugar de oración de la comunidad.'], ['Capela de L’Hermitage', 'Capela', 'Lugar de oración da comunidade.'], ['Capela de L’Hermitage', 'Capela', 'Lugar de oração da comunidade.']),
      sala('bosque', 'emerald', ['Bosques de L’Hermitage', 'Bosques', 'Arboledas a orillas del Gier.'], ['Bosques de L’Hermitage', 'Bosques', 'Arboredas á beira do Gier.'], ['Bosques de L’Hermitage', 'Bosques', 'Arvoredo nas margens do Gier.'])
    ],
    objetos: [
      objeto('ministerio', '🗂️', ['Expediente de autorización', 'Papeles de la petición de los Hermanos Maristas.'], ['Expediente de autorización', 'Papeis da petición dos Irmáns Maristas.'], ['Processo de autorização', 'Papéis do pedido dos Irmãos Maristas.']),
      objeto('casa_hec', '📚', ['Libros escolares', 'No se los vendieron al precio de sus propias escuelas.'], ['Libros escolares', 'Non llos venderon ao prezo das súas propias escolas.'], ['Livros escolares', 'Não lhos venderam ao preço das suas próprias escolas.']),
      objeto('diligencia', '🪙', ['Céntimo', 'Moneda prometida a cambio de aprender el catecismo.'], ['Céntimo', 'Moeda prometida a cambio de aprender o catecismo.'], ['Cêntimo', 'Moeda prometida em troca de aprender o catecismo.']),
      objeto('bosque', '🌳', ['Castaño', 'Árbol de los bosques junto al río.'], ['Castiñeiro', 'Árbore dos bosques xunto ao río.'], ['Castanheiro', 'Árvore dos bosques junto ao rio.'])
    ],
    personajes: [
      pers('MC', 'ministerio', 'V', '🧑‍🏫', ['Marcelino Champagnat', 'Fundador de los Hermanos Maristas', 'Iba de visita en visita con sotana, y nadie lo insultó.'], ['Marcelino Champagnat', 'Fundador dos Irmáns Maristas', 'Ía de visita en visita con sotana, e ninguén o insultou.'], ['Marcelino Champagnat', 'Fundador dos Irmãos Maristas', 'Ia de visita em visita de sotaina, e ninguém o insultou.']),
      // SUPOSICIÓN HISTÓRICA: Lanfrey no nombra al ministro de 1838; se supone Salvandy, a quien Marcelino escribió el 27-11-1837.
      pers('SA', 'ministerio', 'M', '🎩', ['Sr. de Salvandy', 'Ministro de Instrucción Pública', 'Solo admitía a los nuevos hermanos en los pueblos más pequeños.'], ['Sr. de Salvandy', 'Ministro de Instrución Pública', 'Só admitía os novos irmáns nas aldeas máis pequenas.'], ['Sr. de Salvandy', 'Ministro da Instrução Pública', 'Só admitia os novos irmãos nas terras mais pequenas.']),
      pers('AF', 'oficinas', '', '🧑‍💼', ['Alto funcionario', 'Empleado del ministerio', 'Pedía a Marcelino que fundara en una población más importante.'], ['Alto funcionario', 'Empregado do ministerio', 'Pedíalle a Marcelino que fundase nunha poboación máis importante.'], ['Alto funcionário', 'Funcionário do ministério', 'Pedia a Marcelino que fundasse numa povoação mais importante.']),
      pers('AN', 'casa_hec', '', '🧑‍⚖️', ['Hermano Anaclet', 'Hermano de las Escuelas Cristianas', 'Escribió una aprobación prudente para las pequeñas localidades.'], ['Irmán Anaclet', 'Irmán das Escolas Cristiás', 'Escribiu unha aprobación prudente para as pequenas localidades.'], ['Irmão Anaclet', 'Irmão das Escolas Cristãs', 'Escreveu uma aprovação prudente para as pequenas localidades.']),
      pers('NI', 'diligencia', '', '👦', ['Niño pobre', 'Chiquillo del camino', 'Marcelino le prometió un céntimo si aprendía el catecismo.'], ['Neno pobre', 'Rapaciño do camiño', 'Marcelino prometeulle un céntimo se aprendía o catecismo.'], ['Menino pobre', 'Miúdo do caminho', 'Marcelino prometeu-lhe um cêntimo se aprendesse o catecismo.']),
      pers('FR', 'consejo', '', '🧑‍🎓', ['Hermano François (Gabriel Rivat)', 'Brazo derecho del fundador', 'Llevaba la casa durante la ausencia de Marcelino.'], ['Irmán François (Gabriel Rivat)', 'Brazo dereito do fundador', 'Levaba a casa durante a ausencia de Marcelino.'], ['Irmão François (Gabriel Rivat)', 'Braço direito do fundador', 'Dirigia a casa durante a ausência de Marcelino.']),
      pers('MT', 'capilla_hermitage', '', '🧑‍🦳', ['Padre Matricon', 'Capellán de L’Hermitage', 'Nacido en el Bessat, vivía como un hermano más.'], ['Padre Matricon', 'Capelán de L’Hermitage', 'Nado no Bessat, vivía coma un irmán máis.'], ['Padre Matricon', 'Capelão de L’Hermitage', 'Nascido no Bessat, vivia como mais um irmão.']),
      pers('BE', 'capilla_hermitage', '', '🙏', ['Padre Besson', 'Padre marista', 'Ayudaba al capellán en la atención de los hermanos.'], ['Padre Besson', 'Padre marista', 'Axudaba o capelán na atención dos irmáns.'], ['Padre Besson', 'Padre marista', 'Ajudava o capelão no acompanhamento dos irmãos.']),
      // SUPOSICIÓN HISTÓRICA: Tras las huellas cita la carta al hermano Hilarion, pero no dónde estaba él.
      pers('HI', 'bosque', '', '🧑‍🌾', ['Hermano Hilarion', 'Hermano marista', 'Recibió una carta en la que Marcelino le hablaba de la presencia de Dios.'], ['Irmán Hilarion', 'Irmán marista', 'Recibiu unha carta na que Marcelino lle falaba da presenza de Deus.'], ['Irmão Hilarion', 'Irmão marista', 'Recebeu uma carta em que Marcelino lhe falava da presença de Deus.'])
    ],
    pistas: [
      pista('«He realizado mis visitas con sotana sin recibir ningún insulto; ni siquiera me han llamado jesuita» (carta del 27 de mayo de 1838).', '«Fixen as miñas visitas con sotana sen recibir ningún insulto; nin sequera me chamaron xesuíta» (carta do 27 de maio de 1838).', '«Fiz as minhas visitas de sotaina sem receber nenhum insulto; nem sequer me chamaram jesuíta» (carta de 27 de maio de 1838).', 'MC'),
      pista('Uno quería limitar la autorización a los pequeños municipios; otro le pedía fundar en una población mayor.', 'Un quería limitar a autorización aos pequenos concellos; outro pedíalle fundar nunha poboación maior.', 'Um queria limitar a autorização aos pequenos municípios; outro pedia-lhe que fundasse numa povoação maior.', 'SA,AF'),
      pista('El 2 de agosto de 1838 llegó una carta de los Hermanos de las Escuelas Cristianas.', 'O 2 de agosto de 1838 chegou unha carta dos Irmáns das Escolas Cristiás.', 'A 2 de agosto de 1838 chegou uma carta dos Irmãos das Escolas Cristãs.', 'AN'),
      pista('En las calles de París, Marcelino se sentía como en los bosques de L’Hermitage, escribió el 18 de marzo de 1838.', 'Nas rúas de París, Marcelino sentíase coma nos bosques de L’Hermitage, escribiu o 18 de marzo de 1838.', 'Nas ruas de Paris, Marcelino sentia-se como nos bosques de L’Hermitage, escreveu a 18 de março de 1838.', 'MC,HI'),
      pista('Un consejo reunía cada domingo al fundador, al capellán y al hermano François.', 'Un consello reunía cada domingo o fundador, o capelán e o irmán François.', 'Um conselho reunia todos os domingos o fundador, o capelão e o irmão François.', 'FR,MT')
    ]
  },
  // ───────────────────────── 021 ─────────────────────────
  {
    // Lanfrey T. 1, cap. 10 («Fusiones-absorciones de otras congregaciones (1842-1844)»).
    id: '021-HM',
    nivel: 'hard',
    rasgos: ['espiritu_familia', 'estilo_maria'],
    nombre: ['Los hermanos de Viviers', 'Os irmáns de Viviers', 'Os irmãos de Viviers'],
    categoria: ['Asumir la herencia', 'Asumir a herdanza', 'Assumir a herança'],
    fuente: ['L’Hermitage · Lanfrey T. 1, cap. 10', 'L’Hermitage · Lanfrey T. 1, cap. 10', 'L’Hermitage · Lanfrey T. 1, cap. 10'],
    textoClave: [
      'El 23 de junio de 1842, Mons. Guibert, obispo de Viviers, propuso al hermano François unir sus hermanos a los Hermanos Maristas.',
      'O 23 de xuño de 1842, Mons. Guibert, bispo de Viviers, propúxolle ao irmán François unir os seus irmáns aos Irmáns Maristas.',
      'A 23 de junho de 1842, D. Guibert, bispo de Viviers, propôs ao irmão François unir os seus irmãos aos Irmãos Maristas.'
    ],
    contexto: [
      'Tras la muerte de Champagnat, los Hermanos Maristas seguían sin autorización legal, pero tenían una identidad fuerte, mientras otras congregaciones autorizadas vegetaban. Desde marzo de 1842 se habían unido con los Hermanos de la Instrucción Cristiana de Saint-Paul-Trois-Châteaux, del Sr. Mazelier: cuatro maristas fueron enviados allí para transmitir el espíritu de L’Hermitage a unos cuarenta hermanos. El 15 de abril de 1844, Mons. Guibert firmó el contrato de unión, aprobado por el padre Colin, y se abrió un noviciado en La Bégude.',
      'Tras a morte de Champagnat, os Irmáns Maristas seguían sen autorización legal, pero tiñan unha identidade forte, mentres outras congregacións autorizadas vexetaban. Desde marzo de 1842 uníranse cos Irmáns da Instrución Cristiá de Saint-Paul-Trois-Châteaux, do Sr. Mazelier: catro maristas foron enviados alí para transmitir o espírito de L’Hermitage a uns corenta irmáns. O 15 de abril de 1844, Mons. Guibert asinou o contrato de unión, aprobado polo padre Colin, e abriuse un noviciado en La Bégude.',
      'Depois da morte de Champagnat, os Irmãos Maristas continuavam sem autorização legal, mas tinham uma identidade forte, enquanto outras congregações autorizadas definhavam. Desde março de 1842 tinham-se unido aos Irmãos da Instrução Cristã de Saint-Paul-Trois-Châteaux, do Sr. Mazelier: quatro maristas foram enviados para lá para transmitir o espírito de L’Hermitage a uns quarenta irmãos. A 15 de abril de 1844, D. Guibert assinou o contrato de união, aprovado pelo padre Colin, e abriu-se um noviciado em La Bégude.'
    ],
    explicacion: [
      'El responsable de la unión fue Mons. Guibert: apenas firmado el acuerdo con Valence, propuso al hermano François unir los hermanos de Viviers al Instituto. Los acuerdos fueron rápidos y, el 2 de octubre de 1844, 22 antiguos hermanos de Viviers hicieron voto de obediencia y 9 los votos perpetuos. El Instituto pasó a tener cuatro provincias y cinco noviciados.',
      'O responsable da unión foi Mons. Guibert: apenas asinado o acordo con Valence, propúxolle ao irmán François unir os irmáns de Viviers ao Instituto. Os acordos foron rápidos e, o 2 de outubro de 1844, 22 antigos irmáns de Viviers fixeron voto de obediencia e 9 os votos perpetuos. O Instituto pasou a ter catro provincias e cinco noviciados.',
      'O responsável pela união foi D. Guibert: mal assinado o acordo com Valence, propôs ao irmão François unir os irmãos de Viviers ao Instituto. Os acordos foram rápidos e, a 2 de outubro de 1844, 22 antigos irmãos de Viviers fizeram voto de obediência e 9 os votos perpétuos. O Instituto passou a ter quatro províncias e cinco noviciados.'
    ],
    intro: [
      'Verano de 1842. Hace dos años que murió el fundador y su obra, sin autorización legal, crece a toda velocidad. Acaba de firmarse la unión con Saint-Paul-Trois-Châteaux cuando llega otra propuesta desde el Ardèche. Descubre dónde estaba cada uno y quién quiso confiar sus hermanos a los maristas.',
      'Verán de 1842. Hai dous anos que morreu o fundador e a súa obra, sen autorización legal, medra a toda velocidade. Acaba de asinarse a unión con Saint-Paul-Trois-Châteaux cando chega outra proposta desde o Ardèche. Descobre onde estaba cada quen e quen quixo confiar os seus irmáns aos maristas.',
      'Verão de 1842. Há dois anos que o fundador morreu e a sua obra, sem autorização legal, cresce a toda a velocidade. Acaba de se assinar a união com Saint-Paul-Trois-Châteaux quando chega outra proposta do Ardèche. Descobre onde estava cada um e quem quis confiar os seus irmãos aos maristas.'
    ],
    epilogo: [
      '¡Caso resuelto! En 1844 el Instituto contaba 610 miembros: L’Hermitage, el Nord, Vauban, Saint-Paul y La Bégude. En solo cuatro años, los efectivos casi se habían doblado.',
      'Caso resolto! En 1844 o Instituto contaba 610 membros: L’Hermitage, o Nord, Vauban, Saint-Paul e La Bégude. En só catro anos, os efectivos case se dobraran.',
      'Caso resolvido! Em 1844 o Instituto contava 610 membros: L’Hermitage, o Nord, Vauban, Saint-Paul e La Bégude. Em apenas quatro anos, os efetivos quase tinham duplicado.'
    ],
    salas: [
      // SUPOSICIÓN HISTÓRICA: Lanfrey no dice cómo ni dónde se hizo la propuesta; se sitúa en el despacho del director general.
      sala('despacho', 'red', ['Despacho del director general', 'Despacho', 'Habitación de trabajo del hermano François en L’Hermitage.'], ['Despacho do director xeral', 'Despacho', 'Cuarto de traballo do irmán François en L’Hermitage.'], ['Gabinete do diretor-geral', 'Gabinete', 'Divisão de trabalho do irmão François em L’Hermitage.']),
      sala('procura', 'stone', ['Procura de L’Hermitage', 'Procura', 'Oficina de las cuentas de la casa.'], ['Procura de L’Hermitage', 'Procura', 'Oficina das contas da casa.'], ['Procuradoria de L’Hermitage', 'Procuradoria', 'Escritório das contas da casa.']),
      sala('casa_colin', 'blue', ['Residencia del padre Colin', 'Residencia', 'Casa del superior general de la Sociedad de María.'], ['Residencia do padre Colin', 'Residencia', 'Casa do superior xeral da Sociedade de María.'], ['Residência do padre Colin', 'Residência', 'Casa do superior-geral da Sociedade de Maria.']),
      sala('saint_paul', 'amber', ['Casa de Saint-Paul-Trois-Châteaux', 'Saint-Paul', 'Casa madre de los Hermanos de la Instrucción Cristiana.'], ['Casa de Saint-Paul-Trois-Châteaux', 'Saint-Paul', 'Casa nai dos Irmáns da Instrución Cristiá.'], ['Casa de Saint-Paul-Trois-Châteaux', 'Saint-Paul', 'Casa-mãe dos Irmãos da Instrução Cristã.']),
      sala('caminos_midi', 'orange', ['Caminos del Midi', 'Caminos', 'Rutas hacia las nuevas casas del sur.'], ['Camiños do Midi', 'Camiños', 'Rutas cara ás novas casas do sur.'], ['Caminhos do Midi', 'Caminhos', 'Estradas para as novas casas do sul.']),
      sala('noviciado_begude', 'teal', ['Noviciado de La Bégude', 'Noviciado', 'Casa de formación abierta tras la unión.'], ['Noviciado de La Bégude', 'Noviciado', 'Casa de formación aberta tras a unión.'], ['Noviciado de La Bégude', 'Noviciado', 'Casa de formação aberta depois da união.']),
      sala('capilla_begude', 'purple', ['Capilla de La Bégude', 'Capilla', 'Donde los hermanos de Viviers hicieron sus votos.'], ['Capela de La Bégude', 'Capela', 'Onde os irmáns de Viviers fixeron os seus votos.'], ['Capela de La Bégude', 'Capela', 'Onde os irmãos de Viviers fizeram os seus votos.'])
    ],
    objetos: [
      objeto('despacho', '✉️', ['Carta de Viviers', 'Propuesta de unión del 23 de junio de 1842.'], ['Carta de Viviers', 'Proposta de unión do 23 de xuño de 1842.'], ['Carta de Viviers', 'Proposta de união de 23 de junho de 1842.']),
      objeto('procura', '🧮', ['Libro de cuentas', 'Deudas de 60.000 francos tras la muerte del fundador.'], ['Libro de contas', 'Débedas de 60.000 francos tras a morte do fundador.'], ['Livro de contas', 'Dívidas de 60.000 francos depois da morte do fundador.']),
      objeto('casa_colin', '🖋️', ['Firma «Colin Sup»', 'Aprobación del contrato de unión.'], ['Sinatura «Colin Sup»', 'Aprobación do contrato de unión.'], ['Assinatura «Colin Sup»', 'Aprovação do contrato de união.']),
      objeto('saint_paul', '📜', ['Autorización de 1823', 'Permiso oficial de los hermanos de Valence.'], ['Autorización de 1823', 'Permiso oficial dos irmáns de Valence.'], ['Autorização de 1823', 'Licença oficial dos irmãos de Valence.']),
      objeto('capilla_begude', '🪢', ['Cordón', 'Signo entregado en el voto de obediencia.'], ['Cordón', 'Signo entregado no voto de obediencia.'], ['Cordão', 'Sinal entregue no voto de obediência.'])
    ],
    personajes: [
      pers('FR', 'despacho', 'V', '🧑‍🎓', ['Hermano François (Gabriel Rivat)', 'Director general', 'Sucesor del fundador, a menudo enfermo, prefería la prudencia.'], ['Irmán François (Gabriel Rivat)', 'Director xeral', 'Sucesor do fundador, a miúdo enfermo, prefería a prudencia.'], ['Irmão François (Gabriel Rivat)', 'Diretor-geral', 'Sucessor do fundador, muitas vezes doente, preferia a prudência.']),
      // SUPOSICIÓN HISTÓRICA: la presencia de Mons. Guibert en L’Hermitage es un recurso del tablero.
      pers('GU', 'despacho', 'M', '🧑‍⚖️', ['Mons. Guibert', 'Obispo de Viviers', 'Sus hermanos diocesanos no prosperaban y buscaba quién los acogiera.'], ['Mons. Guibert', 'Bispo de Viviers', 'Os seus irmáns diocesanos non prosperaban e buscaba quen os acollese.'], ['D. Guibert', 'Bispo de Viviers', 'Os seus irmãos diocesanos não prosperavam e procurava quem os acolhesse.']),
      pers('LM', 'procura', '', '🧾', ['Hermano Louis-Marie', 'Asistente, encargado de las finanzas', 'Desde 1842 llevaba las cuentas de una casa endeudada.'], ['Irmán Louis-Marie', 'Asistente, encargado das finanzas', 'Desde 1842 levaba as contas dunha casa endebedada.'], ['Irmão Louis-Marie', 'Assistente, encarregado das finanças', 'Desde 1842 tratava das contas de uma casa endividada.']),
      pers('CO', 'casa_colin', '', '🧔', ['Padre Jean-Claude Colin', 'Superior general de la Sociedad de María', 'Superior de los hermanos hasta 1845, nada importante se hacía sin él.'], ['Padre Jean-Claude Colin', 'Superior xeral da Sociedade de María', 'Superior dos irmáns ata 1845, nada importante se facía sen el.'], ['Padre Jean-Claude Colin', 'Superior-geral da Sociedade de Maria', 'Superior dos irmãos até 1845, nada de importante se fazia sem ele.']),
      pers('MZ', 'saint_paul', '', '👴', ['Sr. Mazelier', 'Superior de los hermanos de Saint-Paul', 'Su congregación estaba autorizada, pero le faltaban vocaciones.'], ['Sr. Mazelier', 'Superior dos irmáns de Saint-Paul', 'A súa congregación estaba autorizada, pero faltábanlle vocacións.'], ['Sr. Mazelier', 'Superior dos irmãos de Saint-Paul', 'A sua congregação estava autorizada, mas faltavam-lhe vocações.']),
      pers('JB', 'caminos_midi', '', '🚶', ['Hermano Jean-Baptiste', 'Asistente para el Midi', 'Se encargaba de las provincias del sur y viajaba sin descanso.'], ['Irmán Jean-Baptiste', 'Asistente para o Midi', 'Encargábase das provincias do sur e viaxaba sen descanso.'], ['Irmão Jean-Baptiste', 'Assistente para o Midi', 'Encarregava-se das províncias do sul e viajava sem descanso.']),
      // SUPOSICIÓN HISTÓRICA: Lanfrey dice que Louis-Bernardin llegó «a L’Hermitage» como provincial; aquí se le sitúa en La Bégude.
      pers('LB', 'noviciado_begude', '', '🧑‍🏫', ['Hermano Louis-Bernardin', 'Provincial', 'Llegó como provincial para formar a los nuevos novicios.'], ['Irmán Louis-Bernardin', 'Provincial', 'Chegou como provincial para formar os novos novicios.'], ['Irmão Louis-Bernardin', 'Provincial', 'Chegou como provincial para formar os novos noviços.']),
      pers('BE', 'capilla_begude', '', '🙏', ['Padre Besson', 'Capellán', 'Acompañó a los hermanos como capellán durante treinta años.'], ['Padre Besson', 'Capelán', 'Acompañou os irmáns como capelán durante trinta anos.'], ['Padre Besson', 'Capelão', 'Acompanhou os irmãos como capelão durante trinta anos.']),
      // SUPOSICIÓN HISTÓRICA: personaje anónimo que representa a los 22 antiguos hermanos de Viviers.
      pers('EV', 'capilla_begude', '', '🧑', ['Antiguo hermano de Viviers', 'Hermano diocesano', 'El 2 de octubre de 1844 prometió obediencia al nuevo Instituto.'], ['Antigo irmán de Viviers', 'Irmán diocesano', 'O 2 de outubro de 1844 prometeu obediencia ao novo Instituto.'], ['Antigo irmão de Viviers', 'Irmão diocesano', 'A 2 de outubro de 1844 prometeu obediência ao novo Instituto.'])
    ],
    pistas: [
      pista('Desde marzo de 1842, cuatro Hermanos Maristas fueron enviados a Saint-Paul para desarrollar el noviciado.', 'Desde marzo de 1842, catro Irmáns Maristas foron enviados a Saint-Paul para desenvolver o noviciado.', 'Desde março de 1842, quatro Irmãos Maristas foram enviados para Saint-Paul para desenvolver o noviciado.', 'MZ'),
      pista('El contrato de unión del 15 de abril de 1844 fue aprobado por el superior de la Sociedad de María.', 'O contrato de unión do 15 de abril de 1844 foi aprobado polo superior da Sociedade de María.', 'O contrato de união de 15 de abril de 1844 foi aprovado pelo superior da Sociedade de Maria.', 'CO'),
      pista('Un provincial y un capellán llegaron para la nueva provincia.', 'Un provincial e un capelán chegaron para a nova provincia.', 'Um provincial e um capelão chegaram para a nova província.', 'LB,BE'),
      pista('El 2 de octubre de 1844, 22 antiguos hermanos de Viviers hicieron voto de obediencia.', 'O 2 de outubro de 1844, 22 antigos irmáns de Viviers fixeron voto de obediencia.', 'A 2 de outubro de 1844, 22 antigos irmãos de Viviers fizeram voto de obediência.', 'EV'),
      pista('La propuesta llegó al Rdo. hermano François cuando apenas se había firmado el acuerdo con Valence.', 'A proposta chegoulle ao Rvdo. irmán François cando apenas se asinara o acordo con Valence.', 'A proposta chegou ao Rev.do irmão François quando mal se tinha assinado o acordo com Valence.', 'FR,GU')
    ]
  },
  // ───────────────────────── 022 ─────────────────────────
  {
    // Lanfrey T. 1, cap. 10 («Reconocimiento legal y capítulo general (1851-1854)»).
    id: '022-HM',
    nivel: 'hard',
    rasgos: ['amor_trabajo', 'espiritu_familia'],
    nombre: ['El segundo nacimiento', 'O segundo nacemento', 'O segundo nascimento'],
    categoria: ['La autorización legal', 'A autorización legal', 'A autorização legal'],
    fuente: ['L’Hermitage · Lanfrey T. 1, cap. 10', 'L’Hermitage · Lanfrey T. 1, cap. 10', 'L’Hermitage · Lanfrey T. 1, cap. 10'],
    textoClave: [
      'El 20 de junio de 1851, el príncipe-presidente Louis-Napoléon firmó el decreto que reconocía a los Hermanitos de María como establecimiento de utilidad pública.',
      'O 20 de xuño de 1851, o príncipe-presidente Louis-Napoléon asinou o decreto que recoñecía os Irmanciños de María como establecemento de utilidade pública.',
      'A 20 de junho de 1851, o príncipe-presidente Louis-Napoléon assinou o decreto que reconhecia os Irmãozinhos de Maria como estabelecimento de utilidade pública.'
    ],
    contexto: [
      'Champagnat había fracasado una y otra vez en obtener la autorización legal. Tras su muerte hubo nuevos intentos en 1841-1842 y en 1846, también fallidos. Caída la Monarquía de Julio en 1848, el hermano François reanudó las gestiones el 28 de febrero de 1849 ante el conde de Montalembert, defensor de la libertad de enseñanza, y el Sr. Falloux, promotor de la ley que pronto suprimiría el monopolio universitario. En enero de 1851, Mons. Parisis, obispo de Langres y diputado, hizo suya la causa marista.',
      'Champagnat fracasara unha e outra vez en obter a autorización legal. Tras a súa morte houbo novos intentos en 1841-1842 e en 1846, tamén fallidos. Caída a Monarquía de Xullo en 1848, o irmán François retomou as xestións o 28 de febreiro de 1849 ante o conde de Montalembert, defensor da liberdade de ensino, e o Sr. Falloux, promotor da lei que pronto suprimiría o monopolio universitario. En xaneiro de 1851, Mons. Parisis, bispo de Langres e deputado, fixo súa a causa marista.',
      'Champagnat tinha fracassado uma e outra vez na obtenção da autorização legal. Depois da sua morte houve novas tentativas em 1841-1842 e em 1846, também falhadas. Caída a Monarquia de Julho em 1848, o irmão François retomou as diligências a 28 de fevereiro de 1849 junto do conde de Montalembert, defensor da liberdade de ensino, e do Sr. Falloux, promotor da lei que em breve suprimiria o monopólio universitário. Em janeiro de 1851, D. Parisis, bispo de Langres e deputado, abraçou a causa marista.'
    ],
    explicacion: [
      'El responsable de la firma fue el príncipe-presidente Louis-Napoléon. En marzo de 1851, los hermanos François y Louis-Marie fueron a París para mover el asunto y, el 20 de junio, el decreto quedó firmado. Para el Instituto fue «como un segundo nacimiento»: llegó justo a tiempo para dar bases sólidas a una congregación que había casi triplicado su personal.',
      'O responsable da sinatura foi o príncipe-presidente Louis-Napoléon. En marzo de 1851, os irmáns François e Louis-Marie foron a París para mover o asunto e, o 20 de xuño, o decreto quedou asinado. Para o Instituto foi «coma un segundo nacemento»: chegou xusto a tempo para dar bases sólidas a unha congregación que case triplicara o seu persoal.',
      'O responsável pela assinatura foi o príncipe-presidente Louis-Napoléon. Em março de 1851, os irmãos François e Louis-Marie foram a Paris para fazer avançar o assunto e, a 20 de junho, o decreto ficou assinado. Para o Instituto foi «como um segundo nascimento»: chegou mesmo a tempo de dar bases sólidas a uma congregação que tinha quase triplicado o seu pessoal.'
    ],
    intro: [
      'Primavera de 1851. Lo que Marcelino no consiguió en vida está a punto de lograrse: dos hermanos han viajado a París, un obispo diputado defiende su causa y una firma puede cambiarlo todo. Descubre dónde estaba cada uno y quién firmó, por fin, la autorización.',
      'Primavera de 1851. O que Marcelino non conseguiu en vida está a piques de lograrse: dous irmáns viaxaron a París, un bispo deputado defende a súa causa e unha sinatura pode cambialo todo. Descobre onde estaba cada quen e quen asinou, por fin, a autorización.',
      'Primavera de 1851. O que Marcelino não conseguiu em vida está prestes a acontecer: dois irmãos viajaram até Paris, um bispo deputado defende a sua causa e uma assinatura pode mudar tudo. Descobre onde estava cada um e quem assinou, finalmente, a autorização.'
    ],
    epilogo: [
      '¡Caso resuelto! Con la autorización en la mano, el Instituto celebró su primer capítulo general (1852-1854) y se dio unas Reglas de gobierno. El 11 de junio de 1852, la carta del capítulo a todos los hermanos llevaba como primera firma la del «hermano François, superior general».',
      'Caso resolto! Coa autorización na man, o Instituto celebrou o seu primeiro capítulo xeral (1852-1854) e deuse unhas Regras de goberno. O 11 de xuño de 1852, a carta do capítulo a todos os irmáns levaba como primeira sinatura a do «irmán François, superior xeral».',
      'Caso resolvido! Com a autorização na mão, o Instituto celebrou o seu primeiro capítulo geral (1852-1854) e deu-se umas Regras de governo. A 11 de junho de 1852, a carta do capítulo a todos os irmãos levava como primeira assinatura a do «irmão François, superior-geral».'
    ],
    salas: [
      // SUPOSICIÓN HISTÓRICA: las fuentes no dicen que el hermano François estuviera presente en la firma.
      sala('eliseo', 'red', ['Despacho del príncipe-presidente', 'Presidencia', 'Donde se firmaban los decretos del gobierno.'], ['Despacho do príncipe-presidente', 'Presidencia', 'Onde se asinaban os decretos do goberno.'], ['Gabinete do príncipe-presidente', 'Presidência', 'Onde se assinavam os decretos do governo.']),
      // SUPOSICIÓN HISTÓRICA: el alojamiento de los hermanos en París no consta en las fuentes.
      sala('posada', 'stone', ['Alojamiento en París', 'Alojamiento', 'Cuarto modesto de los hermanos durante su viaje.'], ['Aloxamento en París', 'Aloxamento', 'Cuarto modesto dos irmáns durante a súa viaxe.'], ['Alojamento em Paris', 'Alojamento', 'Quarto modesto dos irmãos durante a viagem.']),
      sala('asamblea', 'blue', ['Asamblea Nacional', 'Asamblea', 'Cámara de los diputados de la Segunda República.'], ['Asemblea Nacional', 'Asemblea', 'Cámara dos deputados da Segunda República.'], ['Assembleia Nacional', 'Assembleia', 'Câmara dos deputados da Segunda República.']),
      sala('salon_falloux', 'amber', ['Salón del Sr. Falloux', 'Salón', 'Donde se preparaba la ley de libertad de enseñanza.'], ['Salón do Sr. Falloux', 'Salón', 'Onde se preparaba a lei de liberdade de ensino.'], ['Salão do Sr. Falloux', 'Salão', 'Onde se preparava a lei da liberdade de ensino.']),
      sala('hermitage', 'purple', ['Casa de L’Hermitage', 'L’Hermitage', 'Casa madre, ya demasiado pequeña para tantos hermanos.'], ['Casa de L’Hermitage', 'L’Hermitage', 'Casa nai, xa demasiado pequena para tantos irmáns.'], ['Casa de L’Hermitage', 'L’Hermitage', 'Casa-mãe, já pequena demais para tantos irmãos.']),
      sala('casa_colin', 'indigo', ['Residencia del padre Colin', 'Residencia', 'Casa del superior general de los Padres Maristas.'], ['Residencia do padre Colin', 'Residencia', 'Casa do superior xeral dos Padres Maristas.'], ['Residência do padre Colin', 'Residência', 'Casa do superior-geral dos Padres Maristas.']),
      sala('caminos', 'orange', ['Caminos de las visitas', 'Caminos', 'Rutas entre las casas del Centro y del Midi.'], ['Camiños das visitas', 'Camiños', 'Rutas entre as casas do Centro e do Midi.'], ['Caminhos das visitas', 'Caminhos', 'Estradas entre as casas do Centro e do Midi.'])
    ],
    objetos: [
      objeto('posada', '🧳', ['Maleta de viaje', 'Equipaje de los dos hermanos llegados en marzo.'], ['Maleta de viaxe', 'Equipaxe dos dous irmáns chegados en marzo.'], ['Mala de viagem', 'Bagagem dos dois irmãos chegados em março.']),
      objeto('hermitage', '📘', ['Borrador de la Regla', 'Los superiores trabajaban en ella desde hacía años.'], ['Borrador da Regra', 'Os superiores traballaban nela desde había anos.'], ['Rascunho da Regra', 'Os superiores trabalhavam nela havia anos.']),
      objeto('caminos', '🐴', ['Caballo', 'Montura del visitador.'], ['Cabalo', 'Montura do visitador.'], ['Cavalo', 'Montada do visitador.'])
    ],
    personajes: [
      pers('FR', 'eliseo', 'V', '🧑‍🎓', ['Hermano François (Gabriel Rivat)', 'Superior de los hermanos', 'Llevaba desde 1849 tocando puertas por la causa del Instituto.'], ['Irmán François (Gabriel Rivat)', 'Superior dos irmáns', 'Levaba desde 1849 petando en portas pola causa do Instituto.'], ['Irmão François (Gabriel Rivat)', 'Superior dos irmãos', 'Desde 1849 que batia a todas as portas pela causa do Instituto.']),
      pers('LN', 'eliseo', 'M', '🎖️', ['Louis-Napoléon Bonaparte', 'Príncipe-presidente', 'Tenía en su mano la firma que los maristas esperaban desde hacía décadas.'], ['Louis-Napoléon Bonaparte', 'Príncipe-presidente', 'Tiña na súa man a sinatura que os maristas agardaban había décadas.'], ['Louis-Napoléon Bonaparte', 'Príncipe-presidente', 'Tinha na mão a assinatura que os maristas esperavam havia décadas.']),
      pers('LM', 'posada', '', '🧾', ['Hermano Louis-Marie', 'Asistente', 'Viajó a París en marzo de 1851 para mover el asunto.'], ['Irmán Louis-Marie', 'Asistente', 'Viaxou a París en marzo de 1851 para mover o asunto.'], ['Irmão Louis-Marie', 'Assistente', 'Viajou para Paris em março de 1851 para fazer avançar o assunto.']),
      pers('PA', 'asamblea', '', '🧑‍⚖️', ['Mons. Parisis', 'Obispo de Langres y diputado', 'Desde enero de 1851 había hecho suya la causa marista.'], ['Mons. Parisis', 'Bispo de Langres e deputado', 'Desde xaneiro de 1851 fixera súa a causa marista.'], ['D. Parisis', 'Bispo de Langres e deputado', 'Desde janeiro de 1851 tinha abraçado a causa marista.']),
      pers('MO', 'asamblea', '', '🎩', ['Conde de Montalembert', 'Defensor de la libertad de enseñanza', 'Había recibido al hermano François en 1849.'], ['Conde de Montalembert', 'Defensor da liberdade de ensino', 'Recibira o irmán François en 1849.'], ['Conde de Montalembert', 'Defensor da liberdade de ensino', 'Tinha recebido o irmão François em 1849.']),
      pers('FA', 'salon_falloux', '', '🧑‍💼', ['Sr. Falloux', 'Promotor de la ley de 1850', 'Su ley iba a suprimir el monopolio de la Universidad.'], ['Sr. Falloux', 'Promotor da lei de 1850', 'A súa lei ía suprimir o monopolio da Universidade.'], ['Sr. Falloux', 'Promotor da lei de 1850', 'A sua lei ia suprimir o monopólio da Universidade.']),
      // SUPOSICIÓN HISTÓRICA: se supone que el hermano Jean-Baptiste se quedó en L’Hermitage durante el viaje a París.
      pers('JB', 'hermitage', '', '✒️', ['Hermano Jean-Baptiste', 'Asistente', 'Trabajaba con los demás superiores en la futura regla.'], ['Irmán Jean-Baptiste', 'Asistente', 'Traballaba cos demais superiores na futura regra.'], ['Irmão Jean-Baptiste', 'Assistente', 'Trabalhava com os outros superiores na futura regra.']),
      pers('CO', 'casa_colin', '', '🧔', ['Padre Jean-Claude Colin', 'Superior general de los Padres Maristas', 'Había dejado a los hermanos gobernarse con su propio superior.'], ['Padre Jean-Claude Colin', 'Superior xeral dos Padres Maristas', 'Deixara os irmáns gobernarse co seu propio superior.'], ['Padre Jean-Claude Colin', 'Superior-geral dos Padres Maristas', 'Tinha deixado os irmãos governarem-se com o seu próprio superior.']),
      pers('AV', 'caminos', '', '🚶', ['Hermano Avit', 'Visitador del Centro y del Midi', 'Desde 1848 recorría casi todas las casas del Instituto.'], ['Irmán Avit', 'Visitador do Centro e do Midi', 'Desde 1848 percorría case todas as casas do Instituto.'], ['Irmão Avit', 'Visitador do Centro e do Midi', 'Desde 1848 percorria quase todas as casas do Instituto.'])
    ],
    pistas: [
      pista('El 28 de febrero de 1849, el hermano François reanudó las gestiones ante un conde y un futuro legislador.', 'O 28 de febreiro de 1849, o irmán François retomou as xestións ante un conde e un futuro lexislador.', 'A 28 de fevereiro de 1849, o irmão François retomou as diligências junto de um conde e de um futuro legislador.', 'FR,MO,FA'),
      pista('En enero de 1851, un obispo diputado se tomó a pecho la causa marista.', 'En xaneiro de 1851, un bispo deputado tomou a peito a causa marista.', 'Em janeiro de 1851, um bispo deputado tomou a peito a causa marista.', 'PA'),
      pista('En marzo, dos hermanos se dirigieron a París para mover el asunto.', 'En marzo, dous irmáns dirixíronse a París para mover o asunto.', 'Em março, dois irmãos dirigiram-se a Paris para fazer avançar o assunto.', 'FR,LM'),
      pista('Desde 1845 el superior de los Padres Maristas había liberado a los hermanos de su dependencia.', 'Desde 1845 o superior dos Padres Maristas liberara os irmáns da súa dependencia.', 'Desde 1845 o superior dos Padres Maristas tinha libertado os irmãos da sua dependência.', 'CO'),
      pista('En septiembre de 1848, un hermano fue nombrado visitador único del Centro y del Midi.', 'En setembro de 1848, un irmán foi nomeado visitador único do Centro e do Midi.', 'Em setembro de 1848, um irmão foi nomeado visitador único do Centro e do Midi.', 'AV')
    ]
  }
];
