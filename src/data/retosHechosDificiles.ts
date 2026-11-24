import { Reto } from '../types';

/**
 * NUEVOS RETOS BÍBLICOS - DIFICULTAD DIFÍCIL (9x9 - 81 CELDAS, 9 SOSPECHOSOS)
 * Ciclo del libro de los Hechos de los Apóstoles (HCH)
 */
export const RETOS_HECHOS_DIFICILES: Reto[] = [
  // RETO 006-HCH: El Motín de los Plateros
  {
    id: '006-HCH',
    nombre: 'El Motín de los Plateros',
    datos_juego: {
      Tamano_Cuadricula: '9x9',
      gridSize: 9,
      categoria: 'Conspiración o traición',
      citasBiblicas: 'Hechos 19, 23-41',
      textoBiblicoClave: 'Demetrio reunió a los oficiales y obreros de este ramo y dijo: «Compañeros, sabéis que de este oficio obtenemos nuestra ganancia...»',
      contextoTeologico: 'El choque entre el Evangelio y la idolatría lucrativa en Éfeso. La teología de Hechos subraya cómo los intereses económicos manipulan la religión para preservar privilegios. La intervención del canciller civil expone la irracionalidad del tumulto.',
      solucionExplicacion: 'Demetrio el platero, al ver que la predicación de Pablo reducía la venta de estatuillas de plata de la diosa Diana (Artemisa), instigó una revuelta gremial masiva. La muchedumbre secuestró a Gayo y Aristarco y llenó el gran teatro durante dos horas gritando consignas.',
      storyIntro: 'Una gran ciudad comercial se convierte en un polvorín cuando el gremio de artesanos de la plata convoca una huelga tumultuosa que llena el anfiteatro romano. Dos colaboradores extranjeros son arrastrados violentamente mientras la turba grita consignas sin saber por qué están allí.',
      epilogue: '¡«Grande es Artemisa de los efesios»! Durante dos horas la multitud rugió enardecida en el anfiteatro, hasta que la prudente elocuencia del canciller apaciguó a la asamblea advirtiéndoles del riesgo de ser acusados de sedición por Roma.',
      subtitle: 'Conspiración o traición · Hechos 19 · 9x9',
      badge: 'EL MOTÍN DE LOS PLATEROS · 9x9',
      victimId: 'GA',
      murdererId: 'DE',
      rooms: {
        taller_plateros: {
          id: 'taller_plateros',
          name: 'Gremio y Fundición de los Plateros',
          shortName: 'Taller Plateros',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Fundición donde Demetrio arengó a los oficiales ante la merma en la venta de templos de plata.'
        },
        teatro_efeso: {
          id: 'teatro_efeso',
          name: 'Gran Anfiteatro Romano de Éfeso',
          shortName: 'Gran Anfiteatro',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Coliseo abarrotado por veinticinco mil personas vociferando en confusión.'
        },
        templo_diana: {
          id: 'templo_diana',
          name: 'Santuario Monumental de Artemisa',
          shortName: 'Templo Artemisa',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Una de las siete maravillas del mundo antiguo, sede del culto a la imagen caída del cielo.'
        },
        residencia_asiarcas: {
          id: 'residencia_asiarcas',
          name: 'Palacete de los Magistrados Asiarcas',
          shortName: 'Palacio Asiarcas',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Aposento donde las autoridades provinciales amigas de Pablo le suplicaron no exponerse al teatro.'
        },
        estrado_canciller: {
          id: 'estrado_canciller',
          name: 'Tribuna Cívica del Escribano Mayor',
          shortName: 'Tribuna Canciller',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Púlpito municipal desde el que se leyó el edicto legal que dispersó el motín.'
        },
        calle_macedonios: {
          id: 'calle_macedonios',
          name: 'Vía Comercial de los Macedonios',
          shortName: 'Vía Comercial',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Calzada empedrada donde Gayo y Aristarco fueron atrapados por la turba desbocada.'
        }
      },
      cellRooms: [
        ['taller_plateros', 'taller_plateros', 'taller_plateros', 'taller_plateros', 'taller_plateros', 'taller_plateros', 'templo_diana', 'templo_diana', 'templo_diana'],
        ['taller_plateros', 'taller_plateros', 'taller_plateros', 'taller_plateros', 'taller_plateros', 'taller_plateros', 'templo_diana', 'templo_diana', 'templo_diana'],
        ['taller_plateros', 'taller_plateros', 'taller_plateros', 'taller_plateros', 'taller_plateros', 'taller_plateros', 'templo_diana', 'templo_diana', 'templo_diana'],
        ['calle_macedonios', 'calle_macedonios', 'teatro_efeso', 'teatro_efeso', 'teatro_efeso', 'teatro_efeso', 'residencia_asiarcas', 'residencia_asiarcas', 'residencia_asiarcas'],
        ['calle_macedonios', 'calle_macedonios', 'teatro_efeso', 'teatro_efeso', 'teatro_efeso', 'teatro_efeso', 'residencia_asiarcas', 'residencia_asiarcas', 'residencia_asiarcas'],
        ['teatro_efeso', 'teatro_efeso', 'teatro_efeso', 'teatro_efeso', 'teatro_efeso', 'teatro_efeso', 'residencia_asiarcas', 'residencia_asiarcas', 'residencia_asiarcas'],
        ['teatro_efeso', 'teatro_efeso', 'teatro_efeso', 'teatro_efeso', 'estrado_canciller', 'estrado_canciller', 'estrado_canciller', 'estrado_canciller', 'estrado_canciller'],
        ['teatro_efeso', 'teatro_efeso', 'teatro_efeso', 'teatro_efeso', 'estrado_canciller', 'estrado_canciller', 'estrado_canciller', 'estrado_canciller', 'estrado_canciller'],
        ['teatro_efeso', 'teatro_efeso', 'teatro_efeso', 'teatro_efeso', 'estrado_canciller', 'estrado_canciller', 'estrado_canciller', 'estrado_canciller', 'estrado_canciller']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '🏛️',
          name: 'Nicho Votivo de Plata',
          evidenceCode: 'EV-01',
          description: 'Santuario en miniatura de Diana fabricado en masa para los devotos forasteros.'
        },
        '2,7': {
          emoji: '🗿',
          name: 'Estatua Caída de Júpiter',
          evidenceCode: 'EV-02',
          description: 'Reliquia sagrada de la diosa de múltiples pechos venerada en Éfeso.'
        },
        '4,4': {
          emoji: '📢',
          name: 'Convocatoria Tumultuaria',
          evidenceCode: 'EV-03',
          description: 'Gritos enardecidos de una multitud que desconocía el origen real de la concentración.'
        },
        '7,6': {
          emoji: '📜',
          name: 'Rollo del Proconsulado de Asia',
          evidenceCode: 'EV-04',
          description: 'Normativa romana contra asambleas ilegales esgrimida por el canciller para disolver la turba.'
        }
      },
      suspects: [
        {
          id: 'P',
          name: 'Pablo',
          role: 'Apóstol Provocador',
          avatar: '🧔',
          color: 'from-amber-600 to-amber-800',
          clueText: 'Predicaba con insistencia que no son dioses los que se hacen con las manos del hombre.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'calle_macedonios' },
            { tipo: 'columnaObjeto', objeto: '0,1' }
          ]
        },
        {
          id: 'DE',
          name: 'Demetrio el Platero',
          role: 'Líder Gremial Conspirador',
          avatar: '🔨',
          color: 'from-red-600 to-red-800',
          isMurderer: true,
          clueText: 'Arengó a los artesanos advirtiéndoles que su prosperidad económica corría peligro mortal.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'teatro_efeso' },
            { tipo: 'esteDe', sospechoso: 'GA' }
          ]
        },
        {
          id: 'GA',
          name: 'Gayo de Macedonia',
          role: 'Colaborador Secuestrado',
          avatar: '🧑',
          color: 'from-rose-600 to-rose-800',
          isVictim: true,
          clueText: 'Compañero de viaje de Pablo, fue apresado por la muchedumbre y arrastrado al graderío.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'teatro_efeso' },
            { tipo: 'borde', lado: 'sur' }
          ]
        },
        {
          id: 'AR',
          name: 'Aristarco de Tesalónica',
          role: 'Prisionero del Motín',
          avatar: '🛡️',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Conducido por la fuerza junto a Gayo hasta la arena central del teatro.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'taller_plateros' },
            { tipo: 'filaObjeto', objeto: '2,7' },
            { tipo: 'columnaObjeto', objeto: '4,4' }
          ]
        },
        {
          id: 'CA',
          name: 'Canciller de la Ciudad',
          role: 'Escribano Mayor Legal',
          avatar: '📜',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Logró calmar a la multitud recordando que los tribunales proconsulares estaban abiertos.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'estrado_canciller' },
            { tipo: 'filaObjeto', objeto: '7,6' }
          ]
        },
        {
          id: 'SD',
          name: 'Sacerdotisa de Diana',
          role: 'Custodia del Artemision',
          avatar: '🧕',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Defendía el prestigio del templo universal amenazado por la herejía cristiana.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'templo_diana' },
            { tipo: 'columnaObjeto', objeto: '2,7' }
          ]
        },
        {
          id: 'AL',
          name: 'Alejandro el Judío',
          role: 'Portavoz Rechazado',
          avatar: '🗣️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Intentó hablar haciendo señas con la mano, pero la multitud lo acalló al saber que era judío.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'taller_plateros' },
            { tipo: 'junto_objeto', objeto: '0,1' },
            { tipo: 'borde', lado: 'oeste' }
          ]
        },
        {
          id: 'AS',
          name: 'Asiarca Protector',
          role: 'Magistrado Provincial',
          avatar: '🏛️',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Amigo de Pablo que le envió emisarios urgentes rogándole que no pisara el anfiteatro.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'residencia_asiarcas' },
            { tipo: 'filaObjeto', objeto: '4,4' }
          ]
        },
        {
          id: 'AE',
          name: 'Artesano Enfurecido',
          role: 'Obrero de la Fundición',
          avatar: '🔥',
          color: 'from-yellow-600 to-yellow-800',
          clueText: 'Repetía mecánicamente el grito «¡Grande es Artemisa!» sin saber siquiera por qué protestaban.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'residencia_asiarcas' },
            { tipo: 'columnaObjeto', objeto: '7,6' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Un fabricante de imágenes religiosas convocó una reunión gremial alertando sobre pérdidas en su negocio.',
          narrative: 'Demetrio encabezó la protesta de los orfebres ante la disminución de compradores.',
          relatedSuspects: ['DE', 'AE']
        },
        {
          id: 'c2',
          text: 'El líder gremial acusó a un misionero de convencer a la gente de que los ídolos de plata no son dioses.',
          narrative: 'Las palabras de Pablo minaban el próspero mercado de amuletos religiosos.',
          relatedSuspects: ['DE', 'P']
        },
        {
          id: 'c3',
          text: 'La muchedumbre enfurecida apresó a dos compañeros extranjeros del misionero y los arrastró al teatro.',
          narrative: 'Gayo y Aristarco sufrieron la violencia de la turba en plena calle comercial.',
          relatedSuspects: ['GA', 'AR', 'DE', 'AE']
        },
        {
          id: 'c4',
          text: 'El misionero principal quiso presentarse ante la multitud en el teatro, pero sus discípulos y magistrados amigos se lo impidieron.',
          narrative: 'El asiarca protector envió un mensaje terminante a Pablo para salvaguardar su integridad.',
          relatedSuspects: ['P', 'AS']
        },
        {
          id: 'c5',
          text: 'Durante más de dos horas, miles de personas gritaron la misma frase religiosa sin cesar en las gradas.',
          narrative: 'La sacerdotisa y el artesano coreaban el lema ensordecedor en honor a la diosa.',
          relatedSuspects: ['SD', 'AE']
        },
        {
          id: 'c6',
          text: 'Un hombre intentó defender a su comunidad con señas, pero la multitud lo acalló violentamente al notar su origen.',
          narrative: 'Alejandro fue abucheado de inmediato sin poder articular su defensa.',
          relatedSuspects: ['AL', 'AE']
        },
        {
          id: 'c7',
          text: 'El magistrado de la ciudad intervino advirtiendo del peligro de ser acusados de sedición por el imperio romano y disolvió la asamblea.',
          narrative: 'El canciller restituyó la cordura legal y desmovilizó el violento motín de Demetrio.',
          relatedSuspects: ['CA', 'DE', 'GA', 'AR']
        }
      ],
      solution: {
        P: { row: 3, col: 1 },
        DE: { row: 6, col: 3 },
        GA: { row: 8, col: 2 },
        AR: { row: 2, col: 4 },
        CA: { row: 7, col: 5 },
        SD: { row: 1, col: 7 },
        AL: { row: 0, col: 0 },
        AS: { row: 4, col: 8 },
        AE: { row: 5, col: 6 }
      }
    }
  },

  // RETO 010-HCH: El Voto Secreto de Muerte
  {
    id: '010-HCH',
    nombre: 'El Voto Secreto de Muerte',
    datos_juego: {
      Tamano_Cuadricula: '9x9',
      gridSize: 9,
      categoria: 'Conspiración o traición',
      citasBiblicas: 'Hechos 23, 12-24',
      textoBiblicoClave: 'Más de cuarenta de ellos tramaron un complot y se comprometieron bajo anatema a no comer ni beber hasta haber matado a Pablo...',
      contextoTeologico: 'Muestra la providencia de Dios protegiendo a su enviado a través de medios ordinarios e insólitos: un niño y el ejército romano. Fe Adulta resalta que el fanatismo religioso ciego queda en evidencia frente a la legalidad secular.',
      solucionExplicacion: 'Más de cuarenta fanáticos juraron no comer ni beber hasta asesinar a Pablo en una emboscada con ayuda de las autoridades. El sobrino de Pablo descubrió el plan y avisó al tribuno Claudio Lisias, quien organizó una escolta armada de casi 500 hombres para ponerlo a salvo en Cesarea.',
      storyIntro: 'Más de cuarenta extremistas juran solemne ayuno mortal hasta ejecutar a un prisionero bajo custodia militar. Conspiran con las autoridades religiosas para tender una trampa en el camino, pero un niño escucha la conversación y lo cambia todo.',
      epilogue: '¡«Dos escuadrones de infantes, setenta jinetes y doscientos lanceros»! Al amparo de la tercera hora de la noche, el tribuno Claudio Lisias evacuó a Pablo al galope hacia la corte del gobernador Félix en Cesarea, frustrando el juramento fanático.',
      subtitle: 'Conspiración o traición · Hechos 23 · 9x9',
      badge: 'EL VOTO SECRETO DE MUERTE · 9x9',
      victimId: 'PA',
      murdererId: 'CL',
      rooms: {
        torre_antonia: {
          id: 'torre_antonia',
          name: 'Fortaleza Antonia y Cuartel del Tribuno',
          shortName: 'Torre Antonia',
          bgColor: 'bg-red-100/70',
          borderColor: 'border-red-700/60',
          textColor: 'text-red-950',
          tagColor: 'bg-red-800 text-red-100',
          description: 'Cuartel general donde el prisionero Pablo permanecía custodiado bajo guardia pretoriana.'
        },
        cripta_conjurados: {
          id: 'cripta_conjurados',
          name: 'Cripta Secreta del Juramento Fanático',
          shortName: 'Cripta Conjurados',
          bgColor: 'bg-stone-100/70',
          borderColor: 'border-stone-700/60',
          textColor: 'text-stone-950',
          tagColor: 'bg-stone-800 text-stone-100',
          description: 'Cueva oculta donde los cuarenta fanáticos pronunciaron el anatema de ayuno a muerte.'
        },
        camara_sacerdotal: {
          id: 'camara_sacerdotal',
          name: 'Cámara de Audiencia del Sanedrín',
          shortName: 'Cámara Sanedrín',
          bgColor: 'bg-amber-100/70',
          borderColor: 'border-amber-700/60',
          textColor: 'text-amber-950',
          tagColor: 'bg-amber-800 text-amber-100',
          description: 'Aposento donde los jefes religiosos pactaron con los sicarios simular una petición judicial.'
        },
        despacho_tribuno: {
          id: 'despacho_tribuno',
          name: 'Despacho de Mando de Claudio Lisias',
          shortName: 'Despacho Tribuno',
          bgColor: 'bg-blue-100/70',
          borderColor: 'border-blue-700/60',
          textColor: 'text-blue-950',
          tagColor: 'bg-blue-800 text-blue-100',
          description: 'Oficina reservada donde el tribuno tomó de la mano al joven sobrino para oír la delación.'
        },
        via_antipatride: {
          id: 'via_antipatride',
          name: 'Calzada Militar hacia Antipátride y Cesarea',
          shortName: 'Calzada Cesarea',
          bgColor: 'bg-emerald-100/70',
          borderColor: 'border-emerald-700/60',
          textColor: 'text-emerald-950',
          tagColor: 'bg-emerald-800 text-emerald-100',
          description: 'Ruta nocturna blindada por donde jinetes y lanceros escoltaron al apóstol hacia la costa.'
        },
        esquina_emboscada: {
          id: 'esquina_emboscada',
          name: 'Recodo del Muro para la Emboscada',
          shortName: 'Recodo Emboscada',
          bgColor: 'bg-purple-100/70',
          borderColor: 'border-purple-700/60',
          textColor: 'text-purple-950',
          tagColor: 'bg-purple-800 text-purple-100',
          description: 'Paso estrecho donde los conjurados planeaban degollar a Pablo antes de llegar al juicio.'
        }
      },
      cellRooms: [
        ['torre_antonia', 'torre_antonia', 'torre_antonia', 'despacho_tribuno', 'despacho_tribuno', 'despacho_tribuno', 'via_antipatride', 'via_antipatride', 'via_antipatride'],
        ['torre_antonia', 'torre_antonia', 'torre_antonia', 'despacho_tribuno', 'despacho_tribuno', 'despacho_tribuno', 'via_antipatride', 'via_antipatride', 'via_antipatride'],
        ['torre_antonia', 'torre_antonia', 'torre_antonia', 'despacho_tribuno', 'despacho_tribuno', 'despacho_tribuno', 'via_antipatride', 'via_antipatride', 'via_antipatride'],
        ['camara_sacerdotal', 'camara_sacerdotal', 'camara_sacerdotal', 'esquina_emboscada', 'esquina_emboscada', 'esquina_emboscada', 'via_antipatride', 'via_antipatride', 'via_antipatride'],
        ['camara_sacerdotal', 'camara_sacerdotal', 'camara_sacerdotal', 'esquina_emboscada', 'esquina_emboscada', 'esquina_emboscada', 'via_antipatride', 'via_antipatride', 'via_antipatride'],
        ['camara_sacerdotal', 'camara_sacerdotal', 'camara_sacerdotal', 'esquina_emboscada', 'esquina_emboscada', 'esquina_emboscada', 'via_antipatride', 'via_antipatride', 'via_antipatride'],
        ['cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados'],
        ['cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados'],
        ['cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados', 'cripta_conjurados']
      ],
      blockedObjects: {
        '0,1': {
          emoji: '⛓️',
          name: 'Cadena de Custodia Pretoriana',
          evidenceCode: 'EV-01',
          description: 'Seguridad imperial con la que Roma mantenía al apóstol protegido de la turba.'
        },
        '4,4': {
          emoji: '🗡️',
          name: 'Daga Oculta para la Emboscada',
          evidenceCode: 'EV-02',
          description: 'Arma blanca con la que los sicarios fanáticos pretendían asestar el golpe mortal.'
        },
        '6,4': {
          emoji: '📜',
          name: 'Pacto Sacrílego Bajo Anatema',
          evidenceCode: 'EV-03',
          description: 'Juramento de no probar bocado ni agua hasta haber derramado la sangre de Pablo.'
        },
        '8,8': {
          emoji: '🐎',
          name: 'Herradura de la Caballería de Escolta',
          evidenceCode: 'EV-04',
          description: 'Rastro de la columna armada de 470 soldados que trasladó al recluso a medianoche.'
        }
      },
      suspects: [
        {
          id: 'PA',
          name: 'Pablo',
          role: 'Prisionero Amenazado',
          avatar: '🧔',
          color: 'from-amber-600 to-amber-800',
          isVictim: true,
          clueText: 'Encarcelado en la fortaleza, el Señor se le apareció de noche diciéndole: «Ten ánimo; testificarás en Roma».',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'torre_antonia' },
            { tipo: 'columnaObjeto', objeto: '0,1' }
          ]
        },
        {
          id: 'CL',
          name: 'Conjurado Líder',
          role: 'Sicario Juramentado',
          avatar: '🗡️',
          color: 'from-red-600 to-red-800',
          isMurderer: true,
          clueText: 'Encabezó el grupo de los cuarenta que se maldijeron a sí mismos si comían antes del homicidio.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'torre_antonia' },
            { tipo: 'surDe', sospechoso: 'PA' }
          ]
        },
        {
          id: 'SO',
          name: 'Sobrino de Pablo',
          role: 'El Joven Informante',
          avatar: '👦',
          color: 'from-cyan-600 to-cyan-800',
          clueText: 'Escuchó la emboscada junto a la cripta y corrió a la fortaleza para alertar a su tío y al comandante.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'cripta_conjurados' },
            { tipo: 'columnaObjeto', objeto: '4,4' }
          ]
        },
        {
          id: 'TL',
          name: 'Tribuno Claudio Lisias',
          role: 'Comandante de la Cohorte',
          avatar: '🏛️',
          color: 'from-blue-600 to-blue-800',
          clueText: 'Tomó al muchacho de la mano a solas, creyó su informe y redactó una carta oficial al gobernador Félix.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'despacho_tribuno' },
            { tipo: 'filaObjeto', objeto: '0,1' }
          ]
        },
        {
          id: 'AN',
          name: 'Sumo Sacerdote Ananías',
          role: 'Conspirador Jerárquico',
          avatar: '🕍',
          color: 'from-purple-600 to-purple-800',
          clueText: 'Aceptó la propuesta de fingir una audiencia más minuciosa para propiciar el ataque en la calle.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'camara_sacerdotal' },
            { tipo: 'filaObjeto', objeto: '4,4' },
            { tipo: 'borde', lado: 'oeste' }
          ]
        },
        {
          id: 'CR',
          name: 'Centurión Romano',
          role: 'Oficial de Guardia',
          avatar: '🛡️',
          color: 'from-stone-600 to-stone-800',
          clueText: 'Condujo al joven sobrino ante la presencia del tribuno por petición expresa del apóstol.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'via_antipatride' },
            { tipo: 'norteDe', sospechoso: 'AN' }
          ]
        },
        {
          id: 'JE',
          name: 'Jinete de Escolta',
          role: 'Caballería de Rescate',
          avatar: '🐎',
          color: 'from-emerald-600 to-emerald-800',
          clueText: 'Montó a Pablo en una cabalgadura y cabalgó velozmente en la noche protegiendo al ciudadano romano.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'via_antipatride' },
            { tipo: 'columnaObjeto', objeto: '8,8' }
          ]
        },
        {
          id: 'AC',
          name: 'Anciano Conjurado',
          role: 'Fanático del Anatema',
          avatar: '😠',
          color: 'from-rose-600 to-rose-800',
          clueText: 'Esperaba apostado con puñal en mano en el estrecho callejón frente al atrio.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'cripta_conjurados' },
            { tipo: 'junto_objeto', objeto: '8,8' }
          ]
        },
        {
          id: 'FT',
          name: 'Falso Testigo',
          role: 'Emisario del Sanedrín',
          avatar: '📜',
          color: 'from-yellow-600 to-yellow-800',
          clueText: 'Llevaba la falsa solicitud de comparecencia al comandante romano.',
          pistasPosicion: [
            { tipo: 'estancia', estancia: 'cripta_conjurados' },
            { tipo: 'oesteDe', sospechoso: 'SO' }
          ]
        }
      ],
      clues: [
        {
          id: 'c1',
          text: 'Más de cuarenta hombres hicieron un juramento solemne de no comer ni beber hasta matar al acusado.',
          narrative: 'El conjurado líder y el anciano fanático ataron sus vidas a un anatema mortal.',
          relatedSuspects: ['CL', 'AC']
        },
        {
          id: 'c2',
          text: 'Los conjurados propusieron a los sacerdotes fingir que necesitaban interrogar de nuevo al prisionero.',
          narrative: 'Ananías y el falso testigo acordaron pedir formalmente la salida del reo.',
          relatedSuspects: ['AN', 'CL', 'FT']
        },
        {
          id: 'c3',
          text: 'El plan consistía en emboscar y asesinar al prisionero durante el trayecto entre la prisión y el tribunal.',
          narrative: 'Los sicarios se apostarían con dagas ocultas en el recodo del muro.',
          relatedSuspects: ['CL', 'AC', 'PA']
        },
        {
          id: 'c4',
          text: 'Un joven familiar del prisionero se enteró de la conspiración secreta y logró entrar en la fortaleza para avisarlo.',
          narrative: 'El sobrino de Pablo desbarató el secreto del complot acudiendo a la celda.',
          relatedSuspects: ['SO', 'PA']
        },
        {
          id: 'c5',
          text: 'El prisionero pidió a un centurión que llevara al joven ante el máximo comandante militar de la ciudad.',
          narrative: 'El centurión romano acató la orden presentando al chico ante el tribuno Lisias.',
          relatedSuspects: ['PA', 'CR', 'SO', 'TL']
        },
        {
          id: 'c6',
          text: 'El comandante creyó el testimonio del muchacho y le ordenó mantener silencio absoluto sobre su entrevista.',
          narrative: 'Claudio Lisias despidió al joven recomendándole estricta reserva.',
          relatedSuspects: ['TL', 'SO']
        },
        {
          id: 'c7',
          text: 'Esa misma noche, un destacamento masivo de casi quinientos soldados y jinetes trasladó al prisionero a otra ciudad protegida.',
          narrative: 'El jinete de escolta y los lanceros cabalgaron hacia Cesarea burlando el complot fanático.',
          relatedSuspects: ['TL', 'JE', 'PA', 'CL']
        }
      ],
      solution: {
        PA: { row: 1, col: 1 },
        CL: { row: 2, col: 2 },
        SO: { row: 7, col: 4 },
        TL: { row: 0, col: 5 },
        AN: { row: 4, col: 0 },
        CR: { row: 3, col: 6 },
        JE: { row: 5, col: 8 },
        AC: { row: 8, col: 7 },
        FT: { row: 6, col: 3 }
      }
    }
  }
];
