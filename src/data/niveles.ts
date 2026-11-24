import { DatabaseNiveles, Reto, PuzzleCase, DifficultyLevel, DifficultyKey, parseTamanoCuadricula } from '../types';
import { RETOS_MARISTA_FACILES } from './retosMaristaFaciles';
import { RETOS_MARISTA_MEDIOS } from './retosMaristaMedios';
import { RETOS_MARISTA_DIFICILES } from './retosMaristaDificiles';

/**
 * BASE DE DATOS ESTRUCTURADA DE RETOS DE DEDUCCIÓN (MURDOKU) DE HISTORIA MARISTA
 *
 * Retos sobre la vida de Marcelino Champagnat, los primeros hermanos y la construcción de L'Hermitage,
 * generados por scripts/generar-retos.ts:
 * - easy: Cuadrícula 5x5 (25 celdas)
 * - medium: Cuadrícula 7x7 (49 celdas)
 * - hard: Cuadrícula 9x9 (81 celdas)
 */
export const NIVELES_DATABASE: DatabaseNiveles = {
  easy: [...RETOS_MARISTA_FACILES],
  medium: [...RETOS_MARISTA_MEDIOS],
  hard: [...RETOS_MARISTA_DIFICILES]
};

/**
 * Sanitiza cualquier texto de pista o narrativa para eliminar menciones explícitas
 * de fila y columna (ej. "(Fila 1, Columna 1)"), preservando el desafío de deducción.
 */
export function removeCoordinateHints(text: string | undefined | null): string {
  if (!text) return '';
  return text
    .replace(/\s*\(\s*Fila\s*\d+[^)]*\)\.?/gi, '.')
    .replace(/\s*\(\s*Columna\s*\d+[^)]*\)\.?/gi, '.')
    .replace(/\s*\(\s*F\d+[^)]*\)\.?/gi, '.')
    .replace(/\s*\(?\s*F\d+\s*[·,]\s*C\d+\s*\)?\.?/gi, '.')
    .replace(/\s+en\s+Fila\s+\d+,\s*Columna\s+\d+\.?/gi, '.')
    .replace(/\s+en\s+Fila\s+\d+\.?/gi, '.')
    .replace(/\s+Fila\s+\d+,\s*Columna\s+\d+\.?/gi, '.')
    .replace(/\s+fila\s+F\d+\.?/gi, '.')
    .replace(/\s*\.\s*\./g, '.')
    .replace(/\s+,/g, ',')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Adaptador de compatibilidad: convierte un Reto al formato de interfaz PuzzleCase
 * leyendo dinámicamente Tamano_Cuadricula y extrayendo número de filas, columnas,
 * categorías, citas bíblicas y contexto teológico.
 */
export function retoToPuzzleCase(reto: Reto, difficulty: DifficultyLevel): PuzzleCase {
  const d = reto.datos_juego;
  const { rows, cols, size, totalCells, label } = parseTamanoCuadricula(
    d.Tamano_Cuadricula || d.gridSize,
    d.gridSize || 5
  );

  return {
    id: reto.id,
    retoId: reto.id,
    title: `Caso ${reto.id}: ${reto.nombre}`,
    subtitle: d.subtitle || `${d.categoria || 'Misterio de deducción'} · ${d.fuenteHistorica || 'Historia marista'}`,
    badge: d.badge || `${reto.nombre.toUpperCase()} · ${label}`,
    categoria: d.categoria,
    rasgos: d.rasgos || [],
    fuenteHistorica: d.fuenteHistorica,
    textoClave: d.textoClave,
    contextoHistorico: d.contextoHistorico,
    solucionExplicacion: d.solucionExplicacion,
    difficulty,
    Tamano_Cuadricula: label,
    gridSize: size,
    rows,
    cols,
    totalCells,
    victimId: d.victimId,
    murdererId: d.murdererId,
    rooms: d.rooms,
    cellRooms: d.cellRooms,
    blockedObjects: d.blockedObjects || {},
    suspects: d.suspects.map((s) => ({
      ...s,
      clueText: removeCoordinateHints(s.clueText)
    })),
    clues: d.clues.map((c) => ({
      ...c,
      text: removeCoordinateHints(c.text),
      narrative: removeCoordinateHints(c.narrative)
    })),
    solution: d.solution,
    storyIntro: d.storyIntro,
    epilogue: d.epilogue
  };
}

/**
 * Genera el array plano de todos los casos para la aplicación
 */
export function getAllCasesFromDatabase(): PuzzleCase[] {
  const list: PuzzleCase[] = [];

  NIVELES_DATABASE.easy.forEach((r) => {
    list.push(retoToPuzzleCase(r, 'Fácil'));
  });

  NIVELES_DATABASE.medium.forEach((r) => {
    list.push(retoToPuzzleCase(r, 'Medio'));
  });

  NIVELES_DATABASE.hard.forEach((r) => {
    list.push(retoToPuzzleCase(r, 'Difícil'));
  });

  return list;
}

/**
 * Mapeo rápido de Dificultad en Español a Clave en Inglés
 */
export const DIFFICULTY_TO_KEY: Record<DifficultyLevel, DifficultyKey> = {
  'Fácil': 'easy',
  'Medio': 'medium',
  'Medio Difícil': 'hard',
  'Difícil': 'hard'
};

export const KEY_TO_DIFFICULTY: Record<DifficultyKey, DifficultyLevel> = {
  easy: 'Fácil',
  medium: 'Medio',
  'medium-hard': 'Difícil',
  hard: 'Difícil'
};
