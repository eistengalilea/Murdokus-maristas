import { DatabaseNiveles, Reto, PuzzleCase, DifficultyLevel, DifficultyKey, parseTamanoCuadricula } from '../types';
import { CASOS_FACILES } from './casosFaciles';
import { CASOS_MEDIOS } from './casosMedios';
import { CASOS_DIFICILES } from './casosDificiles';
import { RETOS_NUEVOS_FACILES } from './retosNuevosFaciles';
import { RETOS_NUEVOS_MEDIOS } from './retosNuevosMedios';
import { RETOS_MONARQUIA_FACILES } from './retosMonarquiaFaciles';
import { RETOS_MONARQUIA_MEDIOS } from './retosMonarquiaMedios';
import { RETOS_MONARQUIA_DIFICILES } from './retosMonarquiaDificiles';
import { RETOS_EVANGELIOS_FACILES } from './retosEvangeliosFaciles';
import { RETOS_EVANGELIOS_MEDIOS } from './retosEvangeliosMedios';
import { RETOS_EVANGELIOS_DIFICILES } from './retosEvangeliosDificiles';
import { RETOS_HECHOS_FACILES } from './retosHechosFaciles';
import { RETOS_HECHOS_MEDIOS } from './retosHechosMedios';
import { RETOS_HECHOS_DIFICILES } from './retosHechosDificiles';

/**
 * BASE DE DATOS ESTRUCTURADA DE RETOS DE DEDUCCIÓN BÍBLICA (MURDOKU)
 * 
 * Compendio de casos de investigación basados en el libro de Génesis, Daniel, Ester, Ezequiel, Tobías, Jeremías, Samuel, Reyes, Evangelios y Hechos de los Apóstoles:
 * - easy: Cuadrícula 5x5 (25 celdas)
 * - medium: Cuadrícula 7x7 (49 celdas)
 * - hard: Cuadrícula 9x9 (81 celdas)
 *   (la antigua clave 'medium-hard' era una copia exacta de 'hard' y se ha eliminado)
 */
export const NIVELES_DATABASE: DatabaseNiveles = {
  easy: [...CASOS_FACILES, ...RETOS_NUEVOS_FACILES, ...RETOS_MONARQUIA_FACILES, ...RETOS_EVANGELIOS_FACILES, ...RETOS_HECHOS_FACILES],
  medium: [...CASOS_MEDIOS, ...RETOS_NUEVOS_MEDIOS, ...RETOS_MONARQUIA_MEDIOS, ...RETOS_EVANGELIOS_MEDIOS, ...RETOS_HECHOS_MEDIOS],
  hard: [...CASOS_DIFICILES, ...RETOS_MONARQUIA_DIFICILES, ...RETOS_EVANGELIOS_DIFICILES, ...RETOS_HECHOS_DIFICILES]
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
    subtitle: d.subtitle || `${d.categoria || 'Misterio de deducción'} · ${d.citasBiblicas || 'Génesis'}`,
    badge: d.badge || `${reto.nombre.toUpperCase()} · ${label}`,
    categoria: d.categoria,
    citasBiblicas: d.citasBiblicas,
    textoBiblicoClave: d.textoBiblicoClave,
    contextoTeologico: d.contextoTeologico,
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
