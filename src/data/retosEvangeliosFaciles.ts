import { Reto } from '../types';

/**
 * NUEVOS RETOS BÍBLICOS - DIFICULTAD FÁCIL (5x5 - 25 CELDAS)
 * Ciclo de los Evangelios / Nuevo Testamento.
 */
export const RETOS_EVANGELIOS_FACILES: Reto[] = [
  // RETO 003-NT: El Prójimo Inesperado
  {
    id: '003-NT',
    nombre: 'El Prójimo Inesperado',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Desenlaces de historias y parábolas',
      citasBiblicas: 'Lucas 10, 25-37',
      textoBiblicoClave: 'Pero un samaritano que iba de viaje llegó adonde estaba él y, al verlo, se compadeció. Se acercó, le vendó las heridas echando en ellas aceite y vino...',
      contextoTeologico: 'La parábola redefine radicalmente el concepto de prójimo. Fe Adulta indica que Jesús critica la religión centrada en el culto y la pureza estéril, proponiendo que la verdadera voluntad de Dios se manifiesta en la misericordia activa e incondicional hacia quien sufre.',
      solucionExplicacion: 'En la parábola del buen samaritano, un hombre es ignorado por un sacerdote y un levita. Finalmente, es un samaritano (considerado hereje y enemigo por los judíos) quien se apiada de él, curándolo y pagando su estancia en una posada.',
      storyIntro: 'Un hombre moribundo yace en un camino peligroso. Dos representantes de la alta moralidad religiosa lo ignoran, dejando la salvación en manos del personaje más odiado socialmente en esa época.',
      epilogue: '¡Misericordia que trasciende fronteras! El samaritano vendó las llagas del viajero y pagó dos denarios al posadero para asegurar su sanación. Jesús sentenció: «Ve y haz tú lo mismo».',
      subtitle: 'Desenlaces de historias y parábolas · Lucas 10 · 5x5',
      badge: 'EL PRÓJIMO INESPERADO · 5x5',
      victimId: 'H',
      murdererId: 'S',
      rooms: {
        camino_jerico: {
          id: 'camino_jerico',
          name: 'Bajada Rocosa de Jerusalén a Jericó',
          shortName: 'Camino Jericó',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Desfiladero solitario y escarpado azotado por cuadrillas de bandoleros del desierto.'
        },
        senda_orilla: {
          id: 'senda_orilla',
          name: 'Acera de Evasión Ritual',
          shortName: 'Acera Evasión',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Orilla opuesta del sendero por donde los ministros del culto pasaron de largo sin detenerse.'
        },
        albergue_posada: {
          id: 'albergue_posada',
          name: 'Posada del Camino',
          shortName: 'Posada Albergue',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Hospedería rústica donde el herido recibió techo, cuidados y alimento nocturno.'
        },
        establo_cabalgadura: {
          id: 'establo_cabalgadura',
          name: 'Establo de la Cabalgadura',
          shortName: 'Establo Caballo',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Patio donde el animal de carga transportó al convaleciente a lomos con paso lento.'
        },
        mostrador_denarios: {
          id: 'mostrador_denarios',
          name: 'Mostrador del Posadero',
          shortName: 'Mostrador Pago',
          bgColor: 'bg-sky-100/70',
          borderColor: 'border-sky-700/60',
          textColor: 'text-sky-950',
          tagColor: 'bg-sky-800 text-sky-100',
          description: 'Mesa de madera donde el samaritano depositó las monedas prometiendo saldar todo gasto extra al volver.'
        }
      },
      cellRooms: [
        ['camino_jerico', 'camino_jerico', 'camino_jerico', 'senda_orilla', 'senda_orilla'],
        ['camino_jerico', 'camino_jerico', 'camino_jerico', 'senda_orilla', 'senda_orilla'],
        ['establo_cabalgadura', 'establo_cabalgadura', 'albergue_posada', 'albergue_posada', 'mostrador_denarios'],
        ['establo_cabalgadura', 'establo_cabalgadura', 'albergue_posada', 'albergue_posada', 'mostrador_denarios'],
        ['establo_cabalgadura', 'establo_cabalgadura', 'albergue_posada', 'mostrador_denarios', 'mostrador_denarios']
      ],
      blockedObjects: {
        '0,4': {
          emoji: '🏺',
          name: 'Frasco de Aceite y Vino',
          evidenceCode: 'EV-01',
          description: 'Bálsamo vertido en las llagas para desinfectar y aliviar el escozor.'
        },
        '2,1': {
          emoji: '🪙',
          name: 'Dos Denarios de Plata',
          evidenceCode: 'EV-02',
          description: 'Jornal completo de dos días entregado al posadero para cubrir la estancia.'
        },
        '4,0': {
          emoji: '🩹',
          name: 'Vendas de Lino Rasgadas',
          evidenceCode: 'EV-03',
          description: 'Tiras de tela con las que el samaritano contuvo la hemorragia del viajero.'
        }
      },
      suspects: [
        {
          id: 'H',
          name: 'Hombre Asaltado',
          role: 'Viajero Medio Muerto',
          avatar: '🤕',
          color: 'from-red-600 to-red-800',
          isVictim: true,
          clueText: 'Despojado de sus vestiduras y abandonado sangrando en el polvo del camino.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_jerico' },
            { tipo: 'filaObjeto', objeto: '0,4' }
          ]
        },
        {
          id: 'S',
          name: 'Sacerdote del Templo',
          role: 'Clérigo Indiferente',
          avatar: '🕍',
          color: 'from-amber-600 to-amber-800',
          isMurderer: true,
          clueText: 'Vio al herido desde lejos y dio un rodeo por miedo a la impureza cadavérica.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camino_jerico' },
            { tipo: 'esteDe', sospechoso: 'H' }
          ]
        },
        {
          id: 'L',
          name: 'Levita',
          role: 'Ministro del Culto',
          avatar: '📜',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Llegó al mismo sitio, miró al moribundo y pasó también de largo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'mostrador_denarios' },
            { tipo: 'filaObjeto', objeto: '2,1' }
          ]
        },
        {
          id: 'M',
          name: 'Buen Samaritano',
          role: 'Extranjero Compasivo',
          avatar: '🧴',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Sintió compasión entrañable, curó las heridas y cargó al forastero en su montura.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'albergue_posada' }
          ]
        },
        {
          id: 'P',
          name: 'Posadero',
          role: 'Dueño del Albergue',
          avatar: '🏠',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Aceptó el dinero y cuidó del huésped siguiendo las instrucciones del samaritano.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'establo_cabalgadura' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Un viajero fue asaltado, despojado y abandonado medio muerto en el peligroso camino a Jericó.',
          narrative: 'El hombre asaltado yacía sin fuerzas sobre las piedras del desfiladero.',
          relatedSuspects: ['H']
        },
        {
          id: 'c2',
          text: 'Dos religiosos del templo pasaron de largo para no contaminarse y perder su pureza ritual.',
          narrative: 'El sacerdote y el levita cruzaron hacia la acera de enfrente con paso apresurado.',
          relatedSuspects: ['S', 'L', 'H']
        },
        {
          id: 'c3',
          text: 'Un extranjero de un pueblo enemigo se acercó, sintió compasión y vendó sus heridas con aceite y vino.',
          narrative: 'El buen samaritano rompió el odio sectario para socorrer al caído.',
          relatedSuspects: ['M', 'H']
        },
        {
          id: 'c4',
          text: 'El extranjero lo llevó a un albergue en su propia cabalgadura para pasar la noche cuidándolo.',
          narrative: 'El samaritano veló toda la noche junto a la cama del albergue.',
          relatedSuspects: ['M', 'H', 'P']
        },
        {
          id: 'c5',
          text: 'Al partir, el salvador pagó dos denarios al dueño del albergue comprometiéndose a cubrir cualquier gasto extra.',
          narrative: 'El posadero recibió la fianza de plata antes del alba.',
          relatedSuspects: ['M', 'P']
        }
      ],
      solution: {
        H: { row: 0, col: 0 },
        S: { row: 1, col: 2 },
        L: { row: 2, col: 4 },
        M: { row: 3, col: 3 },
        P: { row: 4, col: 1 }
      }
    }
  },

  // RETO 005-NT: El Deudor Despiadado
  {
    id: '005-NT',
    nombre: 'El Deudor Despiadado',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Desenlaces de historias y parábolas',
      citasBiblicas: 'Mateo 18, 23-35',
      textoBiblicoClave: 'Su señor, indignado, lo entregó a los verdugos hasta que pagara toda la deuda. Así también os tratará mi Padre celestial si no perdonáis de corazón cada uno a su hermano.',
      contextoTeologico: 'La parábola aborda la exigencia cristiana del perdón comunitario. Fe Adulta insiste en que el perdón gratuito que Dios ofrece al ser humano se cancela a sí mismo si el ser humano no se convierte en cauce de ese perdón hacia los demás.',
      solucionExplicacion: 'En la parábola del siervo sin entrañas, un rey perdona una enorme deuda a su servidor. Este, a su vez, se niega a perdonar una deuda minúscula a un compañero. El rey, al enterarse, lo castiga severamente por su falta de misericordia.',
      storyIntro: 'Un hombre es salvado de la ruina total por la infinita generosidad de su señor. Inmediatamente después, arruina su propia salvación al ahorcar a un subordinado por un puñado de monedas.',
      epilogue: '¡Justicia divina inexorable! La falta de misericordia anuló el perdón recibido. El rey entregó al deudor despiadado a la cárcel de tormento hasta satisfacer el último cuadrante de su deuda infinita.',
      subtitle: 'Desenlaces de historias y parábolas · Mateo 18 · 5x5',
      badge: 'EL DEUDOR DESPIADADO · 5x5',
      victimId: 'D2',
      murdererId: 'D1',
      rooms: {
        trono_cuentas: {
          id: 'trono_cuentas',
          name: 'Sala del Trono y Ajuste de Cuentas',
          shortName: 'Trono Cuentas',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Audiencia real donde se perdonó la deuda astronómica de diez mil talentos.'
        },
        callejon_ahorcamiento: {
          id: 'callejon_ahorcamiento',
          name: 'Callejón del Agarre y Cuello',
          shortName: 'Callejón Agarre',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Lugar donde el funcionario agarró del cuello a su compañero exigiéndole los cien denarios.'
        },
        hogar_familia: {
          id: 'hogar_familia',
          name: 'Casa y Familia del Siervo',
          shortName: 'Casa Siervo',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Morada que estuvo a punto de ser vendida con mujer e hijos para satisfacer la deuda.'
        },
        prision_deudores: {
          id: 'prision_deudores',
          name: 'Cárcel Pública de Deudores',
          shortName: 'Cárcel Deudores',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Mazmorra donde fue arrojado el compañero sin escuchar sus idénticos ruegos de paciencia.'
        },
        camara_verdugos: {
          id: 'camara_verdugos',
          name: 'Aposento de los Verdugos',
          shortName: 'Cámara Verdugos',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Recinto de castigo donde el rey entregó al hombre ingrato tras revocar su clemencia.'
        }
      },
      cellRooms: [
        ['trono_cuentas', 'trono_cuentas', 'trono_cuentas', 'callejon_ahorcamiento', 'callejon_ahorcamiento'],
        ['trono_cuentas', 'trono_cuentas', 'hogar_familia', 'callejon_ahorcamiento', 'callejon_ahorcamiento'],
        ['hogar_familia', 'hogar_familia', 'hogar_familia', 'prision_deudores', 'prision_deudores'],
        ['camara_verdugos', 'hogar_familia', 'prision_deudores', 'prision_deudores', 'prision_deudores'],
        ['camara_verdugos', 'camara_verdugos', 'camara_verdugos', 'prision_deudores', 'prision_deudores']
      ],
      blockedObjects: {
        '0,3': {
          emoji: '📜',
          name: 'Papiro de Diez Mil Talentos',
          evidenceCode: 'EV-01',
          description: 'Cifra impagable perdonada generosamente por el soberano compasivo.'
        },
        '2,2': {
          emoji: '🪙',
          name: 'Bolsa de Cien Denarios',
          evidenceCode: 'EV-02',
          description: 'Monto insignificante por el que el primer siervo estranguló a su prójimo.'
        },
        '4,4': {
          emoji: '⛓️',
          name: 'Grilletes de los Verdugos',
          evidenceCode: 'EV-03',
          description: 'Cadenas con las que el siervo sin entrañas fue aprisionado definitivamente.'
        }
      },
      suspects: [
        {
          id: 'R',
          name: 'El Rey Magnánimo',
          role: 'Soberano y Acreedor',
          avatar: '👑',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Se conmovió ante el llanto de su funcionario y le perdonó toda la deuda.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'trono_cuentas' },
            { tipo: 'borde', lado: 'oeste' }
          ]
        },
        {
          id: 'D1',
          name: 'Primer Siervo',
          role: 'Deudor Despiadado',
          avatar: '😠',
          color: 'from-red-600 to-red-800',
          isMurderer: true,
          clueText: 'Recibió el perdón real pero agarró a su compañero del cuello diciendo: «Págame lo que debes».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'prision_deudores' },
            { tipo: 'filaObjeto', objeto: '2,2' }
          ]
        },
        {
          id: 'D2',
          name: 'Segundo Siervo',
          role: 'Compañero Encarcelado',
          avatar: '🥺',
          color: 'from-blue-600 to-blue-800',
          isVictim: true,
          clueText: 'Se arrodilló suplicando con las mismas palabras: «Ten paciencia conmigo y te lo pagaré todo».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'prision_deudores' },
            { tipo: 'columnaObjeto', objeto: '0,3' }
          ]
        },
        {
          id: 'E',
          name: 'Esposa del Primer Siervo',
          role: 'Familia Rescatada',
          avatar: '👩',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Iba a ser vendida como esclava junto a sus hijos según el primer mandato del rey.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'hogar_familia' }
          ]
        },
        {
          id: 'V',
          name: 'El Verdugo',
          role: 'Carcelero del Tormento',
          avatar: '🗡️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Recibió la orden de no liberar al deudor inicuo hasta saldar el último talento.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camara_verdugos' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Un monarca perdonó a uno de sus altos funcionarios una deuda impagable de diez mil talentos por pura compasión.',
          narrative: 'El Rey escuchó la súplica del Primer Siervo y rasgó el pagaré.',
          relatedSuspects: ['R', 'D1']
        },
        {
          id: 'c2',
          text: 'El funcionario perdonado salió y encontró a un compañero que le debía la ridícula suma de cien denarios.',
          narrative: 'El Primer Siervo interceptó al Segundo Siervo en el callejón.',
          relatedSuspects: ['D1', 'D2']
        },
        {
          id: 'c3',
          text: 'A pesar de las súplicas idénticas de su compañero, el funcionario se negó a perdonar y lo mandó a prisión.',
          narrative: 'El Segundo Siervo imploraba clemencia pero fue arrastrado al calabozo.',
          relatedSuspects: ['D2', 'D1']
        },
        {
          id: 'c4',
          text: 'Otros empleados vieron la injusticia y corrieron a informar al monarca de lo sucedido.',
          narrative: 'El palacio se indignó al enterarse de la crueldad del siervo perdonado.',
          relatedSuspects: ['R', 'E']
        },
        {
          id: 'c5',
          text: 'El monarca, enfurecido, anuló el perdón anterior y entregó al funcionario despiadado a los verdugos.',
          narrative: 'El Verdugo apresó al Primer Siervo por mandato irrefutable del soberano.',
          relatedSuspects: ['R', 'D1', 'V']
        }
      ],
      solution: {
        R: { row: 0, col: 0 },
        D1: { row: 2, col: 4 },
        D2: { row: 3, col: 3 },
        E: { row: 1, col: 2 },
        V: { row: 4, col: 1 }
      }
    }
  },

  // RETO 008-NT: El Sicómoro de Jericó
  {
    id: '008-NT',
    nombre: 'El Sicómoro de Jericó',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Descubrimiento de acciones ocultas',
      citasBiblicas: 'Lucas 19, 1-10',
      textoBiblicoClave: 'Al llegar a aquel lugar, Jesús levantó la vista y le dijo: «Zaqueo, baja en seguida, porque hoy tengo que alojarme en tu casa». Él bajó a toda prisa y lo recibió muy contento.',
      contextoTeologico: 'La historia ilustra la iniciativa salvífica de Dios ("el Hijo del Hombre ha venido a buscar y a salvar lo que estaba perdido"). Teológicamente, la auténtica conversión de Zaqueo no es solo espiritual, sino que implica una justicia restitutiva radical de los bienes económicos.',
      solucionExplicacion: 'Zaqueo, jefe de publicanos y de baja estatura, se subió a un sicómoro para ver a Jesús. Jesús le pidió bajar para hospedarse en su casa. Ante las críticas del pueblo, Zaqueo se convirtió y prometió devolver el cuádruple de lo robado y dar la mitad de sus bienes a los pobres.',
      storyIntro: 'Un alto cargo corrupto se sube a un árbol huyendo de la multitud para curiosear al profeta de moda. Para sorpresa de todos, el profeta se invita a su casa, provocando la indignación de la ciudad y la salvación del corrupto.',
      epilogue: '¡La salvación ha llegado a esta casa! Zaqueo bajó del sicómoro con alegría inmensa, repartió la mitad de su fortuna a los menesterosos y restituyó con creces todo lo defraudado.',
      subtitle: 'Descubrimiento de acciones ocultas · Lucas 19 · 5x5',
      badge: 'EL SICÓMORO DE JERICÓ · 5x5',
      victimId: 'P',
      murdererId: 'Z',
      rooms: {
        copa_sicomoro: {
          id: 'copa_sicomoro',
          name: 'Ramas Altas del Árbol Sicómoro',
          shortName: 'Árbol Sicómoro',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Follaje frondoso sobre el camino donde el hombre pequeño trepó para superar la barrera de la multitud.'
        },
        calzada_multitud: {
          id: 'calzada_multitud',
          name: 'Calzada Principal de Jericó',
          shortName: 'Calzada Jericó',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Avenida atestada de peregrinos y vecinos curiosos que apretujaban al Maestro.'
        },
        'mansión_zaqueo': {
          id: 'mansión_zaqueo',
          name: 'Mansión del Jefe de Recaudadores',
          shortName: 'Mansión Zaqueo',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Residencia opulenta donde se sirvió el banquete y se selló el pacto de restitución pecuniaria.'
        },
        mesa_tributos: {
          id: 'mesa_tributos',
          name: 'Oficina de Aranceles Romanos',
          shortName: 'Oficina Aranceles',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Puesto fiscal donde los publicanos cobraban las tasas de paso y aduana sobre el bálsamo de Jericó.'
        },
        barrio_menesterosos: {
          id: 'barrio_menesterosos',
          name: 'Callejón de los Desfavorecidos',
          shortName: 'Callejón Pobres',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Arrabal humilde que se beneficiaría de la donación del cincuenta por ciento de los caudales de Zaqueo.'
        }
      },
      cellRooms: [
        ['calzada_multitud', 'calzada_multitud', 'copa_sicomoro', 'copa_sicomoro', 'copa_sicomoro'],
        ['calzada_multitud', 'calzada_multitud', 'copa_sicomoro', 'copa_sicomoro', 'mansión_zaqueo'],
        ['mesa_tributos', 'calzada_multitud', 'calzada_multitud', 'mansión_zaqueo', 'mansión_zaqueo'],
        ['mesa_tributos', 'mesa_tributos', 'barrio_menesterosos', 'mansión_zaqueo', 'mansión_zaqueo'],
        ['barrio_menesterosos', 'barrio_menesterosos', 'barrio_menesterosos', 'mansión_zaqueo', 'mansión_zaqueo']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '🌳',
          name: 'Tronco Robusto del Sicómoro',
          evidenceCode: 'EV-01',
          description: 'Árbol providencial plantado al borde de la calzada de paso obligatorio.'
        },
        '2,0': {
          emoji: '⚖️',
          name: 'Balanza de Monedas Defraudadas',
          evidenceCode: 'EV-02',
          description: 'Instrumento con el que Zaqueo cobraba sobreprecios a los comerciantes.'
        },
        '4,4': {
          emoji: '🍞',
          name: 'Cofre de la Mitad de los Bienes',
          evidenceCode: 'EV-03',
          description: 'Tesoro abierto con generosidad para auxiliar a los menesterosos de la comarca.'
        }
      },
      suspects: [
        {
          id: 'J',
          name: 'Jesús',
          role: 'El Maestro de Galilea',
          avatar: '🕊️',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Levantó la vista hacia las ramas del árbol y llamó a Zaqueo por su propio nombre.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'calzada_multitud' }
          ]
        },
        {
          id: 'Z',
          name: 'Zaqueo',
          role: 'Jefe de Publicanos de Jericó',
          avatar: '💰',
          color: 'from-emerald-600 to-emerald-800',
          isMurderer: true,
          clueText: 'Bajó del sicómoro y fue a repartir la mitad de sus bienes entre los pobres del barrio.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'barrio_menesterosos' }
          ]
        },
        {
          id: 'M1',
          name: 'Primer Murmurador',
          role: 'Fariseo Escandalizado',
          avatar: '😒',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Criticó abiertamente diciendo: «Ha entrado a hospedarse en casa de un pecador público».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'mansión_zaqueo' },
            { tipo: 'filaObjeto', objeto: '2,0' }
          ]
        },
        {
          id: 'M2',
          name: 'Segundo Murmurador',
          role: 'Vecino Indignado',
          avatar: '😠',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Recordaba con rencor los impuestos abusivos cobrados por la administración de Zaqueo.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'mansión_zaqueo' }
          ]
        },
        {
          id: 'P',
          name: 'Pobre de Jericó',
          role: 'Beneficiario de la Restitución',
          avatar: '🤲',
          color: 'from-blue-600 to-blue-800',
          isVictim: true,
          clueText: 'Recibirá el cuádruple de lo defraudado y la mitad de la fortuna del publicano converso.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'barrio_menesterosos' },
            { tipo: 'columnaObjeto', objeto: '0,1' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Un hombre muy rico, jefe de los recaudadores de impuestos, deseaba ver quién era el Maestro que pasaba por Jericó.',
          narrative: 'Zaqueo buscaba entre el gentío el rostro del profeta nazareno.',
          relatedSuspects: ['Z', 'J']
        },
        {
          id: 'c2',
          text: 'Debido a su baja estatura y a la gran multitud, le resultaba imposible lograr su objetivo desde el suelo.',
          narrative: 'La masa de curiosos tapaba por completo el campo de visión del publicano.',
          relatedSuspects: ['Z', 'M1', 'M2']
        },
        {
          id: 'c3',
          text: 'El hombre se adelantó corriendo y se subió a un árbol sicómoro para poder verlo desde las alturas.',
          narrative: 'Zaqueo trepó a las ramas altas sin importarle el ridículo público.',
          relatedSuspects: ['Z']
        },
        {
          id: 'c4',
          text: 'Al llegar al lugar, el Maestro levantó la vista y le pidió que bajara rápido porque iba a hospedarse en su casa.',
          narrative: 'Jesús sorprendió a la muchedumbre dirigiéndose al árbol.',
          relatedSuspects: ['J', 'Z']
        },
        {
          id: 'c5',
          text: 'Los presentes murmuraron escandalizados porque el Maestro había entrado a alojarse en casa de un pecador público.',
          narrative: 'Los dos murmuradores y el pueblo criticaban la elección del Maestro.',
          relatedSuspects: ['M1', 'M2', 'J', 'Z', 'P']
        }
      ],
      solution: {
        J: { row: 0, col: 0 },
        Z: { row: 3, col: 2 },
        M1: { row: 2, col: 3 },
        M2: { row: 1, col: 4 },
        P: { row: 4, col: 1 }
      }
    }
  },

  // RETO 009-NT: El Banquete del Perdón
  {
    id: '009-NT',
    nombre: 'El Banquete del Perdón',
    datos_juego: {
      Tamano_Cuadricula: '5x5',
      gridSize: 5,
      categoria: 'Desenlaces de historias y parábolas',
      citasBiblicas: 'Lucas 15, 11-32',
      textoBiblicoClave: 'Su padre le dijo: «Hijo, tú siempre estás conmigo, y todo lo mío es tuyo; pero había que hacer fiesta y alegrarse, porque este hermano tuyo estaba muerto y ha revivido...»',
      contextoTeologico: 'Conocida en exégesis como "la parábola del Padre Misericordioso", retrata a un Dios cuyo amor rompe las lógicas jurídicas del mérito (representadas por el hermano mayor). Es una respuesta contundente de Jesús a los fariseos que criticaban que acogiera a los pecadores.',
      solucionExplicacion: 'Es la parábola del Hijo Pródigo. El hijo menor malgasta su herencia y vuelve arrepentido; el padre lo perdona incondicionalmente y hace una fiesta. El hijo mayor representa a los religiosos estrictos, negándose a aceptar la misericordia inmerecida de su padre.',
      storyIntro: 'Un hijo desprecia a su familia, huye con su parte del patrimonio y termina en la miseria más absoluta. Cuando regresa buscando sobrevivir como peón, encuentra una fiesta que enfurece al hijo leal que nunca se fue.',
      epilogue: '¡El anillo en el dedo y las sandalias en los pies! El padre salió a suplicar al hermano mayor que entrase a compartir el gozo: «Este hermano tuyo estaba perdido y lo hemos encontrado».',
      subtitle: 'Desenlaces de historias y parábolas · Lucas 15 · 5x5',
      badge: 'EL BANQUETE DEL PERDÓN · 5x5',
      victimId: 'HM',
      murdererId: 'P',
      rooms: {
        umbral_paterno: {
          id: 'umbral_paterno',
          name: 'Camino del Retorno y Abrazo del Padre',
          shortName: 'Camino Abrazo',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Linde de la heredad donde el progenitor vio venir al muchacho andrajoso y echó a correr hacia él.'
        },
        salon_banquete: {
          id: 'salon_banquete',
          name: 'Sala del Banquete del Ternero Cebado',
          shortName: 'Salón Banquete',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Gran comedor engalanado con música, danzas y el mejor vestido reservado para el hijo restituido.'
        },
        campo_labranza: {
          id: 'campo_labranza',
          name: 'Campos de Labor del Primogénito',
          shortName: 'Campos Labor',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Tierras de labor de donde regresaba extenuado el hijo mayor al atardecer.'
        },
        pocilga_algarrobas: {
          id: 'pocilga_algarrobas',
          name: 'País Lejano y Pocilga de Cerdos',
          shortName: 'Pocilga Cerdos',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Lugar de humillación extrema donde el joven deseó saciarse con las bellotas de los animales impuros.'
        },
        cocina_sirvientes: {
          id: 'cocina_sirvientes',
          name: 'Pabellón de los Siervos y Jornaleros',
          shortName: 'Pabellón Siervos',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Aposento donde los trabajadores disponían de pan abundante mientras el menor moría de hambre.'
        }
      },
      cellRooms: [
        ['pocilga_algarrobas', 'pocilga_algarrobas', 'umbral_paterno', 'umbral_paterno', 'umbral_paterno'],
        ['pocilga_algarrobas', 'salon_banquete', 'salon_banquete', 'salon_banquete', 'umbral_paterno'],
        ['cocina_sirvientes', 'salon_banquete', 'salon_banquete', 'salon_banquete', 'campo_labranza'],
        ['cocina_sirvientes', 'cocina_sirvientes', 'salon_banquete', 'campo_labranza', 'campo_labranza'],
        ['cocina_sirvientes', 'cocina_sirvientes', 'campo_labranza', 'campo_labranza', 'campo_labranza']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '🐷',
          name: 'Algarrobas de los Cerdos',
          evidenceCode: 'EV-01',
          description: 'Comida de los animales que nadie en el país lejano quería darle al hambriento.'
        },
        '2,2': {
          emoji: '💍',
          name: 'Anillo de Oro y Mejor Túnica',
          evidenceCode: 'EV-02',
          description: 'Prendas de honor impuestas al hijo descalzo restituyéndole su dignidad familiar.'
        },
        '4,4': {
          emoji: '🥩',
          name: 'Ternero Cebado del Banquete',
          evidenceCode: 'EV-03',
          description: 'Manjar de gala sacrificado para celebrar el regreso a la vida del hermano perdido.'
        }
      },
      suspects: [
        {
          id: 'P',
          name: 'El Padre',
          role: 'Progenitor Misericordioso',
          avatar: '🧔',
          color: 'from-amber-600 to-amber-800',
          isMurderer: true,
          clueText: 'Corrió conmovido a abrazar a su hijo menor y salió al campo a rogar al mayor que entrara.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'salon_banquete' },
            { tipo: 'surDe', sospechoso: 'MY' }
          ]
        },
        {
          id: 'HM',
          name: 'Hijo Menor',
          role: 'El Hijo Pródigo Arrepentido',
          avatar: '🙇',
          color: 'from-red-600 to-red-800',
          isVictim: true,
          clueText: 'Reconoció su error: «Padre, he pecado contra el cielo y contra ti; ya no merezco ser llamado hijo tuyo».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'salon_banquete' }
          ]
        },
        {
          id: 'MY',
          name: 'Hijo Mayor',
          role: 'Hermano Escrupuloso e Indignado',
          avatar: '😠',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Se negó a festejar alegando que nunca desobedeció una orden y jamás le dieron un cabrito.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'campo_labranza' }
          ]
        },
        {
          id: 'C',
          name: 'El Criado',
          role: 'Servidor de Confianza',
          avatar: '🧑',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Informó al hermano mayor que su hermano había vuelto sano y salvo y por eso se hizo fiesta.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'cocina_sirvientes' }
          ]
        },
        {
          id: 'A',
          name: 'Amigo del Hijo Mayor',
          role: 'Compañero de Labores',
          avatar: '👨‍🌾',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Testigo del trabajo fiel en los campos durante los años de ausencia del menor.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'umbral_paterno' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Un joven exigió su herencia por adelantado y la derrochó en un país lejano llevando una vida desordenada.',
          narrative: 'El hijo menor abandonó la casa paterna cargado de plata.',
          relatedSuspects: ['HM', 'P']
        },
        {
          id: 'c2',
          text: 'Al llegar una hambruna, el joven terminó envidiando las algarrobas de los cerdos que cuidaba.',
          narrative: 'El hijo menor cayó en la mayor de las indigencias entre los porcinos.',
          relatedSuspects: ['HM']
        },
        {
          id: 'c3',
          text: 'Arrepentido por el hambre, decidió volver a casa para pedir trabajo como jornalero a su progenitor.',
          narrative: 'Ensanchó el corazón y emprendió el camino de regreso descalzo.',
          relatedSuspects: ['HM', 'P']
        },
        {
          id: 'c4',
          text: 'Su progenitor lo vio de lejos, corrió a abrazarlo y organizó un gran banquete con un ternero cebado.',
          narrative: 'El Padre ordenó al Criado sacar el mejor traje y preparar el festín.',
          relatedSuspects: ['P', 'HM', 'C']
        },
        {
          id: 'c5',
          text: 'El hermano mayor, al volver del campo y escuchar la música del banquete, se negó a entrar por indignación y celos.',
          narrative: 'El hijo mayor y su amigo escucharon los cantos con perplejidad y enojo.',
          relatedSuspects: ['MY', 'A', 'P', 'C']
        }
      ],
      solution: {
        P: { row: 3, col: 2 },
        HM: { row: 1, col: 1 },
        MY: { row: 2, col: 4 },
        C: { row: 4, col: 0 },
        A: { row: 0, col: 3 }
      }
    }
  }
];
