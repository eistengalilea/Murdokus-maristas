import { PuzzleCase, Suspect, RoomInfo, Clue, InanimateObject } from '../types';
import { Language } from './types';
import { aplicarTraduccionPuzzleCase, RETOS_TRADUCCIONES_GL, RETOS_TRADUCCIONES_PT, aplicarTraduccionReto, traduccionReto } from './retos';

export { aplicarTraduccionReto, aplicarTraduccionPuzzleCase, RETOS_TRADUCCIONES_GL, RETOS_TRADUCCIONES_PT, traduccionReto };

// Biblical books translations (Spanish -> Galician)
const LIBROS_BIBLE_GL: Record<string, string> = {
  'Génesis': 'Xénese',
  'Éxodo': 'Éxodo',
  'Levítico': 'Levítico',
  'Números': 'Números',
  'Deuteronomio': 'Deuteronomio',
  'Josué': 'Xosué',
  'Jueces': 'Xuíces',
  'Rut': 'Rut',
  '1 Samuel': '1 Samuel',
  '2 Samuel': '2 Samuel',
  '1 Reyes': '1 Reis',
  '2 Reyes': '2 Reis',
  '1 Crónicas': '1 Crónicas',
  '2 Crónicas': '2 Crónicas',
  'Esdras': 'Esdras',
  'Nehemías': 'Nehemías',
  'Tobías': 'Tobías',
  'Judit': 'Xudit',
  'Ester': 'Ester',
  'Job': 'Xob',
  'Salmos': 'Salmos',
  'Proverbios': 'Proverbios',
  'Eclesiastés': 'Eclesiastés',
  'Cantar': 'Cantar dos Cantares',
  'Isaías': 'Isaías',
  'Jeremías': 'Xeremías',
  'Lamentaciones': 'Lamentacións',
  'Ezequiel': 'Ezequiel',
  'Daniel': 'Daniel',
  'Oseas': 'Oseas',
  'Joel': 'Xoel',
  'Amós': 'Amós',
  'Jonás': 'Xonás',
  'Miqueas': 'Miqueas',
  'Habacuc': 'Habacuc',
  'Zacarías': 'Zacarías',
  'Malaquías': 'Malaquías',
  'Mateo': 'Mateo',
  'Marcos': 'Marcos',
  'Lucas': 'Lucas',
  'Juan': 'Xoán',
  'Hechos': 'Feitos dos Apóstolos',
  'Hechos de los Apóstoles': 'Feitos dos Apóstolos',
  'Otros Escritos Bíblicos': 'Outros Escritos Bíblicos',
  'Romanos': 'Romanos',
  '1 Corintios': '1 Corintios',
  '2 Corintios': '2 Corintios',
  'Gálatas': 'Gálatas',
  'Efesios': 'Efesios',
  'Filipenses': 'Filipenses',
  'Colosenses': 'Colosenses',
  '1 Tesalonicenses': '1 Tesalonicenses',
  '2 Tesalonicenses': '2 Tesalonicenses',
  '1 Timoteo': '1 Timoteo',
  '2 Timoteo': '2 Timoteo',
  'Hebreos': 'Hebreos',
  'Santiago': 'Santiago',
  '1 Pedro': '1 Pedro',
  '2 Pedro': '2 Pedro',
  '1 Juan': '1 Xoán',
  'Apocalipsis': 'Apocalipse'
};

// Biblical books translations (Spanish -> Portuguese of Portugal)
const LIBROS_BIBLE_PT: Record<string, string> = {
  'Génesis': 'Génesis',
  'Éxodo': 'Êxodo',
  'Levítico': 'Levítico',
  'Números': 'Números',
  'Deuteronomio': 'Deuteronómio',
  'Josué': 'Josué',
  'Jueces': 'Juízes',
  'Rut': 'Rute',
  '1 Samuel': '1 Samuel',
  '2 Samuel': '2 Samuel',
  '1 Reyes': '1 Reis',
  '2 Reyes': '2 Reis',
  '1 Crónicas': '1 Crónicas',
  '2 Crónicas': '2 Crónicas',
  'Esdras': 'Esdras',
  'Nehemías': 'Neemias',
  'Tobías': 'Tobias',
  'Judit': 'Judite',
  'Ester': 'Ester',
  'Job': 'Job',
  'Salmos': 'Salmos',
  'Proverbios': 'Provérbios',
  'Eclesiastés': 'Eclesiastes',
  'Cantar': 'Cântico dos Cânticos',
  'Isaías': 'Isaías',
  'Jeremías': 'Jeremias',
  'Lamentaciones': 'Lamentações',
  'Ezequiel': 'Ezequiel',
  'Daniel': 'Daniel',
  'Oseas': 'Oseias',
  'Joel': 'Joel',
  'Amós': 'Amós',
  'Jonás': 'Jonas',
  'Miqueas': 'Miqueias',
  'Habacuc': 'Habacuc',
  'Zacarías': 'Zacarias',
  'Malaquías': 'Malaquias',
  'Mateo': 'Mateus',
  'Marcos': 'Marcos',
  'Lucas': 'Lucas',
  'Juan': 'João',
  'Hechos': 'Atos dos Apóstolos',
  'Hechos de los Apóstoles': 'Atos dos Apóstolos',
  'Otros Escritos Bíblicos': 'Outros Escritos Bíblicos',
  'Romanos': 'Romanos',
  '1 Corintios': '1 Coríntios',
  '2 Corintios': '2 Coríntios',
  'Gálatas': 'Gálatas',
  'Efesios': 'Efésios',
  'Filipenses': 'Filipenses',
  'Colosenses': 'Colossenses',
  '1 Tesalonicenses': '1 Tessalonicenses',
  '2 Tesalonicenses': '2 Tessalonicenses',
  '1 Timoteo': '1 Timóteo',
  '2 Timoteo': '2 Timóteo',
  'Hebreos': 'Hebreus',
  'Santiago': 'Tiago',
  '1 Pedro': '1 Pedro',
  '2 Pedro': '2 Pedro',
  '1 Juan': '1 João',
  'Apocalipsis': 'Apocalipse'
};

// Common suspect roles translations (Spanish -> Galician)
const ROLES_GL: Record<string, string> = {
  'Rey': 'Rei',
  'Rey de Judá': 'Rei de Xudá',
  'Rey de Israel': 'Rei de Israel',
  'Reina': 'Raíña',
  'Príncipe': 'Príncipe',
  'Profeta': 'Profeta',
  'Profetisa': 'Profetisa',
  'Sacerdote': 'Sacerdote',
  'Sumo Sacerdote': 'Sumo Sacerdote',
  'Levita': 'Levita',
  'Apóstol': 'Apóstolo',
  'Discípulo': 'Discípulo',
  'Soldado': 'Soldado',
  'Capitán': 'Capitán',
  'Centurión': 'Centurión',
  'Gobernador': 'Gobernador',
  'Escriba': 'Escriba',
  'Fariseo': 'Fariseo',
  'Saduceo': 'Saduceo',
  'Sirviente': 'Servinte',
  'Sirvienta': 'Serventa',
  'Criado': 'Criado',
  'Criada': 'Criada',
  'Comerciante': 'Comerciante',
  'Mercader': 'Mercador',
  'Pescador': 'Pescador',
  'Pastor': 'Pastor',
  'Pastora': 'Pastora',
  'Carpintero': 'Carpinteiro',
  'Médico': 'Médico',
  'Esposa': 'Esposa',
  'Hijo': 'Fillo',
  'Hija': 'Filla',
  'Hermano': 'Irmán',
  'Hermana': 'Irmá',
  'Padre': 'Pai',
  'Madre': 'Nai',
  'Amigo': 'Amigo',
  'General': 'Xeneral',
  'Copero': 'Copas',
  'Panadero': 'Panadeiro',
  'Hechicero': 'Meigo',
  'Mago': 'Mago',
  'Sabio': 'Sabio',
  'Concejal': 'Conselleiro',
  'Guardia': 'Garda',
  'Juez': 'Xuíz',
  'Sospechoso': 'Sospeitoso',
  'Víctima': 'Vítima'
};

// Common room words translations (Spanish -> Galician)
const ROOMS_GL: Record<string, string> = {
  'Jardín': 'Xardín',
  'Jardín Real': 'Xardín Real',
  'Cocina': 'Cociña',
  'Cocinero': 'Cociñeiro',
  'Patio': 'Patio',
  'Patio Interior': 'Patio Interior',
  'Patio Exterior': 'Patio Exterior',
  'Salón': 'Salón',
  'Salón del Trono': 'Salón do Trono',
  'Sala del Trono': 'Sala do Trono',
  'Biblioteca': 'Biblioteca',
  'Terraza': 'Terraza',
  'Almacén': 'Almacén',
  'Bodega': 'Adega',
  'Dormitorio': 'Dormitorio',
  'Cámara Real': 'Cámara Real',
  'Templo': 'Templo',
  'Atrio': 'Atrio',
  'Puerta': 'Porta',
  'Puerta de la Ciudad': 'Porta da Cidade',
  'Despacho': 'Despacho',
  'Comedor': 'Comedor',
  'Establos': 'Estábulos',
  'Muralla': 'Muralla',
  'Torre': 'Torre',
  'Cárcel': 'Cárcere',
  'Prisión': 'Prisión',
  'Huerto': 'Horta',
  'Río': 'Río',
  'Palacio': 'Pazo'
};

/**
 * Traduce el nombre de un libro bíblico si está en gallego
 */
export function traducirLibroBiblico(libro: string, lang: Language): string {
  if (lang === 'es') return libro;
  if (lang === 'pt') return LIBROS_BIBLE_PT[libro] || libro;
  return LIBROS_BIBLE_GL[libro] || libro;
}

/**
 * Traduce el rol de un personaje a gallego
 */
export function traducirRol(rol: string | undefined, lang: Language): string {
  if (!rol || lang !== 'gl') return rol || '';
  if (ROLES_GL[rol]) return ROLES_GL[rol];

  let res = rol;
  for (const [es, gl] of Object.entries(ROLES_GL)) {
    const reg = new RegExp(`\\b${es}\\b`, 'gi');
    res = res.replace(reg, gl);
  }
  return res;
}

/**
 * Traduce el nombre de una estancia o habitación a gallego
 */
export function traducirHabitacion(nombre: string | undefined, lang: Language): string {
  if (!nombre || lang !== 'gl') return nombre || '';
  if (ROOMS_GL[nombre]) return ROOMS_GL[nombre];

  let res = nombre;
  for (const [es, gl] of Object.entries(ROOMS_GL)) {
    const reg = new RegExp(`\\b${es}\\b`, 'gi');
    res = res.replace(reg, gl);
  }
  return res;
}

/**
 * Traduce fórmulas lógicas recurrentes de pistas a gallego
 */
export function traducirTextoPista(texto: string, lang: Language): string {
  // Reglas aproximadas solo para gallego; el portugués usa siempre traducciones completas
  if (!texto || lang !== 'gl') return texto;

  return texto
    .replace(/estaba en la misma fila que/gi, 'estaba na mesma fila ca')
    .replace(/estaba en la misma columna que/gi, 'estaba na mesma columna ca')
    .replace(/no estaba en la misma fila que/gi, 'non estaba na mesma fila ca')
    .replace(/no estaba en la misma columna que/gi, 'non estaba na mesma columna ca')
    .replace(/no estaba en la misma fila/gi, 'non estaba na mesma fila')
    .replace(/no estaba en la misma columna/gi, 'non estaba na mesma columna')
    .replace(/estaba en la habitación/gi, 'estaba na habitación')
    .replace(/estaba en el/gi, 'estaba no')
    .replace(/estaba en la/gi, 'estaba na')
    .replace(/no estaba en el/gi, 'non estaba no')
    .replace(/no estaba en la/gi, 'non estaba na')
    .replace(/no estaba en/gi, 'non estaba en')
    .replace(/estaba a solas con/gi, 'estaba a soas con')
    .replace(/a solas con/gi, 'a soas con')
    .replace(/a solas/gi, 'a soas')
    .replace(/estaba junto a/gi, 'estaba xunto a')
    .replace(/al norte de/gi, 'ao norte de')
    .replace(/al sur de/gi, 'ao sur de')
    .replace(/al este de/gi, 'ao leste de')
    .replace(/al oeste de/gi, 'ao oeste de')
    .replace(/a la izquierda de/gi, 'á esquerda de')
    .replace(/a la derecha de/gi, 'á dereita de')
    .replace(/arriba de/gi, 'enriba de')
    .replace(/debajo de/gi, 'debaixo de')
    .replace(/en diagonal con/gi, 'en diagonal con')
    .replace(/fue visto en/gi, 'foi visto en')
    .replace(/fue vista en/gi, 'foi vista en')
    .replace(/afirma que/gi, 'afirma que')
    .replace(/asegura que/gi, 'asegura que')
    .replace(/declaró que/gi, 'declarou que')
    .replace(/el sospechoso/gi, 'o sospeitoso')
    .replace(/la sospechosa/gi, 'a sospeitosa')
    .replace(/la víctima/gi, 'a vítima')
    .replace(/el asesino/gi, 'o culpable')
    .replace(/al asesino/gi, 'ao culpable')
    .replace(/del asesino/gi, 'do culpable')
    .replace(/los asesinos/gi, 'os culpables')
    .replace(/o asasino/gi, 'o culpable')
    .replace(/ao asasino/gi, 'ao culpable')
    .replace(/do asasino/gi, 'do culpable')
    .replace(/os asasinos/gi, 'os culpables')
    .replace(/el culpable/gi, 'o culpable')
    .replace(/en la misma estancia/gi, 'na mesma estancia')
    .replace(/en la estancia/gi, 'na estancia')
    .replace(/en su habitación/gi, 'na súa habitación')
    .replace(/en su estancia/gi, 'na súa estancia')
    .replace(/Jardín/g, 'Xardín')
    .replace(/Cocina/g, 'Cociña')
    .replace(/Palacio/g, 'Pazo')
    .replace(/Cárcel/g, 'Cárcere')
    .replace(/Huerto/g, 'Horta')
    .replace(/Establos/g, 'Estábulos');
}

/**
 * Clona y adapta un caso (PuzzleCase) al idioma seleccionado
 */
export function obtenerCasoTraducido(caso: PuzzleCase, lang: Language): PuzzleCase {
  if (lang === 'es') return caso;

  const key = caso.retoId || caso.id;
  if (traduccionReto(key, lang)) {
    return aplicarTraduccionPuzzleCase(caso, lang);
  }
  if (lang !== 'gl') return caso;

  // Traducir sospechosos
  const suspects: Suspect[] = caso.suspects.map((s) => ({
    ...s,
    role: traducirRol(s.role, lang),
    clueText: s.clueText ? traducirTextoPista(s.clueText, lang) : undefined
  }));

  // Traducir habitaciones
  const rooms: Record<string, RoomInfo> = {};
  for (const [id, room] of Object.entries(caso.rooms)) {
    rooms[id] = {
      ...room,
      name: traducirHabitacion(room.name, lang),
      shortName: room.shortName ? traducirHabitacion(room.shortName, lang) : room.shortName,
      description: traducirTextoPista(room.description, lang)
    };
  }

  // Traducir pistas
  const clues: Clue[] = caso.clues.map((c) => ({
    ...c,
    text: traducirTextoPista(c.text, lang),
    narrative: c.narrative ? traducirTextoPista(c.narrative, lang) : c.narrative
  }));

  // Traducir objetos bloqueados
  const blockedObjects: Record<string, InanimateObject> = {};
  if (caso.blockedObjects) {
    for (const [coord, obj] of Object.entries(caso.blockedObjects)) {
      blockedObjects[coord] = {
        ...obj,
        name: traducirHabitacion(obj.name, lang),
        description: traducirTextoPista(obj.description, lang)
      };
    }
  }

  // Traducir títulos y metadatos
  const title = caso.title
    ? caso.title
        .replace(/Caso/g, 'Caso')
        .replace(/El /g, 'O ')
        .replace(/La /g, 'A ')
        .replace(/Los /g, 'Os ')
        .replace(/Las /g, 'As ')
        .replace(/Jardín/g, 'Xardín')
        .replace(/Cocina/g, 'Cociña')
        .replace(/Palacio/g, 'Pazo')
    : caso.title;

  return {
    ...caso,
    title,
    subtitle: caso.subtitle ? traducirTextoPista(caso.subtitle, lang) : caso.subtitle,
    storyIntro: caso.storyIntro ? traducirTextoPista(caso.storyIntro, lang) : caso.storyIntro,
    epilogue: caso.epilogue ? traducirTextoPista(caso.epilogue, lang) : caso.epilogue,
    contextoTeologico: caso.contextoTeologico ? traducirTextoPista(caso.contextoTeologico, lang) : caso.contextoTeologico,
    solucionExplicacion: caso.solucionExplicacion ? traducirTextoPista(caso.solucionExplicacion, lang) : caso.solucionExplicacion,
    suspects,
    rooms,
    clues,
    blockedObjects
  };
}
