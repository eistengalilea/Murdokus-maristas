import type { Language } from './types';

/** Idiomas disponibles en el juego y en los PDF. */
export const IDIOMAS: Language[] = ['es', 'gl', 'pt'];

/**
 * Devuelve el texto (o valor) que corresponde al idioma activo.
 * Sustituye a los antiguos `lang === 'gl' ? A : B`, que solo admitían dos idiomas.
 */
export function porIdioma<T>(lang: Language | string | undefined, textos: { es: T; gl: T; pt: T }): T {
  if (lang === 'gl') return textos.gl;
  if (lang === 'pt') return textos.pt;
  return textos.es;
}
