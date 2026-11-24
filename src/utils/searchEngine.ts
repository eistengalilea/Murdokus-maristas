import { Reto, PuzzleCase, DifficultyLevel } from '../types';
import { NIVELES_DATABASE, retoToPuzzleCase } from '../data/niveles';
import { RETOS_TRADUCCIONES } from '../i18n/retos';
import { textoRasgos } from '../data/rasgos';

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
 * Lista canónica ordenada de etapas de la historia marista (orden cronológico).
 * Las etapas que no figuren aquí se añaden después, por orden alfabético.
 */
export const ETAPAS_CONOCIDAS = [
  'Marlhes',
  'Lyon',
  'La Valla',
  'L’Hermitage'
] as const;

/**
 * Extrae la etapa de la fuente histórica de un reto: es el texto anterior a « · »
 * (p. ej. «La Valla · Lanfrey T. 1, cap. 3» → «La Valla»).
 */
export function obtenerEtapa(fuente?: string): string {
  const etapa = (fuente || '').split(' · ')[0].trim();
  return etapa || 'Otras etapas';
}

/**
 * Obtiene el corpus de texto completo indexable para un Reto.
 */
export function obtenerTextoIndexableReto(reto: Reto): string {
  const dj = reto.datos_juego;
  const libro = obtenerEtapa(dj.fuenteHistorica);

  const personajes = (dj.suspects || []).map((s) => `${s.name} ${s.role || ''} ${s.clueText || ''}`).join(' ');
  const estancias = dj.rooms ? Object.values(dj.rooms).map((r) => `${r.name} ${r.description || ''}`).join(' ') : '';
  const objetos = dj.blockedObjects ? Object.values(dj.blockedObjects).map((o) => `${o.name} ${o.description || ''}`).join(' ') : '';

  return normalizarTexto(
    [
      reto.id,
      reto.nombre,
      libro,
      textoRasgos(dj.rasgos),
      dj.fuenteHistorica || '',
      dj.categoria || '',
      dj.storyIntro || '',
      dj.textoClave || '',
      dj.contextoHistorico || '',
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
  const libro = obtenerEtapa(pCase.fuenteHistorica);

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
      textoRasgos(pCase.rasgos),
      pCase.fuenteHistorica || '',
      pCase.categoria || '',
      pCase.storyIntro || '',
      pCase.textoClave || '',
      pCase.contextoHistorico || '',
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
 * Comprueba si un reto coincide con los términos de búsqueda y el filtro de etapa.
 */
export function coincideFiltrosReto(reto: Reto, queryTexto: string, filtroLibro: string): boolean {
  const libroReto = obtenerEtapa(reto.datos_juego.fuenteHistorica);

  // 1. Filtro por etapa
  if (filtroLibro && filtroLibro !== 'todos' && filtroLibro !== 'Todos') {
    const libroFiltroNorm = normalizarTexto(filtroLibro);
    const libroRetoNorm = normalizarTexto(libroReto);
    const citaNorm = normalizarTexto(reto.datos_juego.fuenteHistorica || '');

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
  const libroCase = obtenerEtapa(pCase.fuenteHistorica);

  if (filtroLibro && filtroLibro !== 'todos' && filtroLibro !== 'Todos') {
    const libroFiltroNorm = normalizarTexto(filtroLibro);
    const libroCaseNorm = normalizarTexto(libroCase);
    const citaNorm = normalizarTexto(pCase.fuenteHistorica || '');

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
  etapa: string;
}

/**
 * Retorna el catálogo consolidado completo de todos los retos con sus metadatos y etapa.
 */
export function obtenerCatalogoCompleto(): EntradaCatalogoReto[] {
  const catalogo: EntradaCatalogoReto[] = [];

  NIVELES_DATABASE.easy.forEach((r) => {
    const pc = retoToPuzzleCase(r, 'Fácil');
    catalogo.push({
      reto: r,
      puzzleCase: pc,
      dificultad: 'Fácil',
      etapa: obtenerEtapa(r.datos_juego.fuenteHistorica)
    });
  });

  NIVELES_DATABASE.medium.forEach((r) => {
    const pc = retoToPuzzleCase(r, 'Medio');
    catalogo.push({
      reto: r,
      puzzleCase: pc,
      dificultad: 'Medio',
      etapa: obtenerEtapa(r.datos_juego.fuenteHistorica)
    });
  });

  NIVELES_DATABASE.hard.forEach((r) => {
    const pc = retoToPuzzleCase(r, 'Difícil');
    catalogo.push({
      reto: r,
      puzzleCase: pc,
      dificultad: 'Difícil',
      etapa: obtenerEtapa(r.datos_juego.fuenteHistorica)
    });
  });

  return catalogo;
}

/**
 * Obtiene la lista ordenada de etapas disponibles para un conjunto dado de retos,
 * calculando la cantidad de retos por libro.
 */
export function obtenerLibrosDisponibles(
  entradas: { etapa: string }[]
): { libro: string; cantidad: number }[] {
  const contador = new Map<string, number>();

  entradas.forEach((e) => {
    contador.set(e.etapa, (contador.get(e.etapa) || 0) + 1);
  });

  // Ordenar respetando el orden canónico en ETAPAS_CONOCIDAS, y luego los restantes alfabéticamente
  const resultado: { libro: string; cantidad: number }[] = [];

  ETAPAS_CONOCIDAS.forEach((libroConocido) => {
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
