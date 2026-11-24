import { PuzzleCase } from '../types';
import { Language } from './types';
import { aplicarTraduccionPuzzleCase, RETOS_TRADUCCIONES_GL, RETOS_TRADUCCIONES_PT, aplicarTraduccionReto, traduccionReto } from './retos';

export { aplicarTraduccionReto, aplicarTraduccionPuzzleCase, RETOS_TRADUCCIONES_GL, RETOS_TRADUCCIONES_PT, traduccionReto };

/**
 * Los retos maristas se escriben a la vez en castellano, gallego y portugués (pt-PT),
 * así que las etapas, las estancias y los roles no necesitan diccionarios de apoyo.
 * Estas funciones se mantienen como puntos de extensión para los componentes.
 */
export function traducirEtapa(etapa: string, _lang: Language): string {
  return etapa;
}

export function traducirRol(rol: string | undefined, _lang: Language): string {
  return rol || '';
}

export function traducirHabitacion(nombre: string | undefined, _lang: Language): string {
  return nombre || '';
}

/** Devuelve el caso en el idioma seleccionado (castellano = texto original). */
export function obtenerCasoTraducido(caso: PuzzleCase, lang: Language): PuzzleCase {
  if (lang === 'es') return caso;
  const key = caso.retoId || caso.id;
  return traduccionReto(key, lang) ? aplicarTraduccionPuzzleCase(caso, lang) : caso;
}
