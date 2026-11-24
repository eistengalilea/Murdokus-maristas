import { PuzzleCase } from './types';
import { NIVELES_DATABASE, getAllCasesFromDatabase, retoToPuzzleCase, DIFFICULTY_TO_KEY, KEY_TO_DIFFICULTY } from './data/niveles';

export { NIVELES_DATABASE, getAllCasesFromDatabase, retoToPuzzleCase, DIFFICULTY_TO_KEY, KEY_TO_DIFFICULTY };

/**
 * Colección de casos activos derivados directamente de la base de datos estructurada de niveles (NIVELES_DATABASE).
 * Mantiene compatibilidad total con toda la interfaz y componentes de la aplicación.
 */
export const CASES: PuzzleCase[] = getAllCasesFromDatabase();
