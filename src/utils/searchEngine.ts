import { Reto, PuzzleCase, DifficultyLevel } from '../types';
import { NIVELES_DATABASE, retoToPuzzleCase } from '../data/niveles';
import { RETOS_TRADUCCIONES } from '../i18n/retos';

/** Texto de las traducciones (gallego y portugués) de un reto, para poder buscar en cualquier idioma. */
function textoTraducciones(retoId: string): string {
  const partes: string[] = [];
  const recoger = (v: unknown) => {
    if (typeof v === 'string') partes.push(v);
    else if (v && typeof v === 'object') Object.values(v as Record<string, unknown>).forEach(recoger);
  };
  for (const tr of Object.values(RETOS_TRADUCCIONES)) recoger(tr[retoId]);
  return partes.join(' ');
}

/**
 * Normaliza una cadena de texto para búsqueda:
 * Convierte a minúsculas, elimina tildes y diacríticos, y limpia espacios sobrantes.
 */
export function normalizarTexto(texto: string): string {
  if (!texto) return '';
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.,;:()¿?¡!«»"'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Lista canónica ordenada de libros bíblicos conocidos en la base de datos de Murdoku.
 */
export const LIBROS_BIBLICOS_CONOCIDOS = [
  'Génesis',
  '1 Samuel',
  '2 Samuel',
  '1 Reyes',
  '2 Reyes',
  'Tobías',
  'Ester',
  'Daniel',
  'Jeremías',
  'Ezequiel',
  'Mateo',
  'Marcos',
  'Lucas',
  'Juan',
  'Hechos de los Apóstoles'
] as const;

/**
 * Extrae o detecta el libro bíblico al que pertenece un reto o cita.
 */
export function obtenerLibroBiblico(cita?: string, id?: string, nombre?: string): string {
  const normalizada = normalizarTexto(`${cita || ''} ${id || ''} ${nombre || ''}`);

  if (normalizada.includes('hechos') || normalizada.includes('hch')) {
    return 'Hechos de los Apóstoles';
  }
  if (normalizada.includes('genesis') || normalizada.includes('gn')) {
    return 'Génesis';
  }
  if (normalizada.includes('1 samuel') || normalizada.includes('1 sam') || normalizada.includes('1sam')) {
    return '1 Samuel';
  }
  if (normalizada.includes('2 samuel') || normalizada.includes('2 sam') || normalizada.includes('2sam')) {
    return '2 Samuel';
  }
  if (normalizada.includes('samuel') || normalizada.includes('sam')) {
    return '1 Samuel';
  }
  if (normalizada.includes('1 reyes') || normalizada.includes('1 re') || normalizada.includes('1re')) {
    return '1 Reyes';
  }
  if (normalizada.includes('2 reyes') || normalizada.includes('2 re') || normalizada.includes('2re')) {
    return '2 Reyes';
  }
  if (normalizada.includes('reyes') || normalizada.includes('re')) {
    return '1 Reyes';
  }
  if (normalizada.includes('daniel') || normalizada.includes('dn')) {
    return 'Daniel';
  }
  if (normalizada.includes('ester') || normalizada.includes('est')) {
    return 'Ester';
  }
  if (normalizada.includes('tobias') || normalizada.includes('tb')) {
    return 'Tobías';
  }
  if (normalizada.includes('jeremias') || normalizada.includes('jr')) {
    return 'Jeremías';
  }
  if (normalizada.includes('ezequiel') || normalizada.includes('ez')) {
    return 'Ezequiel';
  }
  if (normalizada.includes('mateo') || normalizada.includes('mt')) {
    return 'Mateo';
  }
  if (normalizada.includes('marcos') || normalizada.includes('mc')) {
    return 'Marcos';
  }
  if (normalizada.includes('lucas') || normalizada.includes('lc')) {
    return 'Lucas';
  }
  if (normalizada.includes('juan') || normalizada.includes('jn')) {
    return 'Juan';
  }

  // Fallback si la cita empieza por el nombre del libro antes de los números
  if (cita) {
    const primerSegmento = cita.split(/\d+/)[0].trim();
    if (primerSegmento.length > 2) {
      return primerSegmento;
    }
  }

  return 'Otros Escritos Bíblicos';
}

/**
 * Obtiene el corpus de texto completo indexable para un Reto.
 */
export function obtenerTextoIndexableReto(reto: Reto): string {
  const dj = reto.datos_juego;
  const libro = obtenerLibroBiblico(dj.citasBiblicas, reto.id, reto.nombre);

  const personajes = (dj.suspects || []).map((s) => `${s.name} ${s.role || ''} ${s.clueText || ''}`).join(' ');
  const estancias = dj.rooms ? Object.values(dj.rooms).map((r) => `${r.name} ${r.description || ''}`).join(' ') : '';
  const objetos = dj.blockedObjects ? Object.values(dj.blockedObjects).map((o) => `${o.name} ${o.description || ''}`).join(' ') : '';

  return normalizarTexto(
    [
      reto.id,
      reto.nombre,
      libro,
      dj.citasBiblicas || '',
      dj.categoria || '',
      dj.storyIntro || '',
      dj.textoBiblicoClave || '',
      dj.contextoTeologico || '',
      dj.solucionExplicacion || '',
      dj.epilogue || '',
      personajes,
      estancias,
      objetos,
      textoTraducciones(reto.id)
    ].join(' ')
  );
}

/**
 * Obtiene el corpus de texto completo indexable para un PuzzleCase.
 */
export function obtenerTextoIndexableCase(pCase: PuzzleCase): string {
  const libro = obtenerLibroBiblico(pCase.citasBiblicas, pCase.id, pCase.title);

  const personajes = (pCase.suspects || []).map((s) => `${s.name} ${s.role || ''} ${s.clueText || ''}`).join(' ');
  const estancias = pCase.rooms ? Object.values(pCase.rooms).map((r) => `${r.name} ${r.description || ''}`).join(' ') : '';
  const pistas = (pCase.clues || []).map((c) => `${c.text} ${c.narrative || ''}`).join(' ');
  const objetos = pCase.blockedObjects ? Object.values(pCase.blockedObjects).map((o) => `${o.name} ${o.description || ''}`).join(' ') : '';

  return normalizarTexto(
    [
      pCase.id,
      pCase.title,
      pCase.subtitle || '',
      pCase.badge || '',
      libro,
      pCase.citasBiblicas || '',
      pCase.categoria || '',
      pCase.storyIntro || '',
      pCase.textoBiblicoClave || '',
      pCase.contextoTeologico || '',
      pCase.solucionExplicacion || '',
      pCase.epilogue || '',
      personajes,
      estancias,
      pistas,
      objetos,
      textoTraducciones(pCase.retoId || pCase.id)
    ].join(' ')
  );
}

/**
 * Comprueba si un reto coincide con los términos de búsqueda y el filtro de libro bíblico.
 */
export function coincideFiltrosReto(reto: Reto, queryTexto: string, filtroLibro: string): boolean {
  const libroReto = obtenerLibroBiblico(reto.datos_juego.citasBiblicas, reto.id, reto.nombre);

  // 1. Filtro por libro bíblico
  if (filtroLibro && filtroLibro !== 'todos' && filtroLibro !== 'Todos') {
    const libroFiltroNorm = normalizarTexto(filtroLibro);
    const libroRetoNorm = normalizarTexto(libroReto);
    const citaNorm = normalizarTexto(reto.datos_juego.citasBiblicas || '');

    const coincideLibro =
      libroRetoNorm === libroFiltroNorm ||
      libroRetoNorm.includes(libroFiltroNorm) ||
      citaNorm.includes(libroFiltroNorm);

    if (!coincideLibro) {
      return false;
    }
  }

  // 2. Filtro por palabras clave
  const queryNorm = normalizarTexto(queryTexto);
  if (!queryNorm) {
    return true;
  }

  const palabras = queryNorm.split(' ').filter(Boolean);
  const textoIndexable = obtenerTextoIndexableReto(reto);

  // Todas las palabras de la consulta deben aparecer en el reto (lógica AND)
  return palabras.every((palabra) => textoIndexable.includes(palabra));
}

/**
 * Comprueba si un PuzzleCase coincide con los filtros.
 */
export function coincideFiltrosCase(pCase: PuzzleCase, queryTexto: string, filtroLibro: string): boolean {
  const libroCase = obtenerLibroBiblico(pCase.citasBiblicas, pCase.id, pCase.title);

  if (filtroLibro && filtroLibro !== 'todos' && filtroLibro !== 'Todos') {
    const libroFiltroNorm = normalizarTexto(filtroLibro);
    const libroCaseNorm = normalizarTexto(libroCase);
    const citaNorm = normalizarTexto(pCase.citasBiblicas || '');

    const coincideLibro =
      libroCaseNorm === libroFiltroNorm ||
      libroCaseNorm.includes(libroFiltroNorm) ||
      citaNorm.includes(libroFiltroNorm);

    if (!coincideLibro) {
      return false;
    }
  }

  const queryNorm = normalizarTexto(queryTexto);
  if (!queryNorm) {
    return true;
  }

  const palabras = queryNorm.split(' ').filter(Boolean);
  const textoIndexable = obtenerTextoIndexableCase(pCase);

  return palabras.every((palabra) => textoIndexable.includes(palabra));
}

export interface EntradaCatalogoReto {
  reto: Reto;
  puzzleCase: PuzzleCase;
  dificultad: DifficultyLevel;
  libroBiblico: string;
}

/**
 * Retorna el catálogo consolidado completo de todos los retos con sus metadatos y libro bíblico.
 */
export function obtenerCatalogoCompleto(): EntradaCatalogoReto[] {
  const catalogo: EntradaCatalogoReto[] = [];

  NIVELES_DATABASE.easy.forEach((r) => {
    const pc = retoToPuzzleCase(r, 'Fácil');
    catalogo.push({
      reto: r,
      puzzleCase: pc,
      dificultad: 'Fácil',
      libroBiblico: obtenerLibroBiblico(r.datos_juego.citasBiblicas, r.id, r.nombre)
    });
  });

  NIVELES_DATABASE.medium.forEach((r) => {
    const pc = retoToPuzzleCase(r, 'Medio');
    catalogo.push({
      reto: r,
      puzzleCase: pc,
      dificultad: 'Medio',
      libroBiblico: obtenerLibroBiblico(r.datos_juego.citasBiblicas, r.id, r.nombre)
    });
  });

  NIVELES_DATABASE.hard.forEach((r) => {
    const pc = retoToPuzzleCase(r, 'Difícil');
    catalogo.push({
      reto: r,
      puzzleCase: pc,
      dificultad: 'Difícil',
      libroBiblico: obtenerLibroBiblico(r.datos_juego.citasBiblicas, r.id, r.nombre)
    });
  });

  return catalogo;
}

/**
 * Obtiene la lista ordenada de libros bíblicos disponibles para un conjunto dado de retos,
 * calculando la cantidad de retos por libro.
 */
export function obtenerLibrosDisponibles(
  entradas: { libroBiblico: string }[]
): { libro: string; cantidad: number }[] {
  const contador = new Map<string, number>();

  entradas.forEach((e) => {
    contador.set(e.libroBiblico, (contador.get(e.libroBiblico) || 0) + 1);
  });

  // Ordenar respetando el orden canónico en LIBROS_BIBLICOS_CONOCIDOS, y luego los restantes alfabéticamente
  const resultado: { libro: string; cantidad: number }[] = [];

  LIBROS_BIBLICOS_CONOCIDOS.forEach((libroConocido) => {
    if (contador.has(libroConocido)) {
      resultado.push({
        libro: libroConocido,
        cantidad: contador.get(libroConocido)!
      });
      contador.delete(libroConocido);
    }
  });

  // Agregar los restantes si hubiera alguno
  Array.from(contador.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([libro, cantidad]) => {
      resultado.push({ libro, cantidad });
    });

  return resultado;
}
