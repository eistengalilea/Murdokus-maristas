/**
 * TIPOS Y AYUDAS PARA ESCRIBIR RETOS (fuente de autoría)
 *
 * Cada reto se escribe una sola vez, con sus textos en castellano, gallego y portugués de Portugal
 * en el orden [es, gl, pt]. El generador (`npm run generar`) construye a partir de aquí:
 *   - el plano (estancias contiguas, objetos, posiciones de los personajes),
 *   - las pistas de posición, escogidas para que la solución sea ÚNICA,
 *   - src/data/retosMarista*.ts (castellano) y src/i18n/retos/**\/retosMarista*.ts (gl y pt).
 */

export type Nivel = 'easy' | 'medium' | 'hard';
export type T3 = [string, string, string];

export interface SalaF {
  id: string;
  color: string;
  /** [nombre, nombre corto, descripción] en es, gl, pt */
  l: [[string, string, string], [string, string, string], [string, string, string]];
}
export interface ObjetoF {
  sala: string;
  emoji: string;
  /** [nombre, descripción] en es, gl, pt */
  l: [[string, string], [string, string], [string, string]];
}
export interface PersonajeF {
  id: string;
  sala: string;
  rol: 'V' | 'M' | '';
  avatar: string;
  /** [nombre, rol, pista narrativa] en es, gl, pt */
  l: [[string, string, string], [string, string, string], [string, string, string]];
}
export interface PistaF {
  t: T3;
  quien?: string; // ids separados por comas
}
export interface RetoF {
  id: string;
  nivel: Nivel;
  nombre: T3;
  categoria: T3;
  /** «Etapa · fuente». La etapa (antes de « · ») alimenta el filtro del buscador. */
  fuente: T3;
  textoClave: T3;
  contexto: T3;
  explicacion: T3;
  intro: T3;
  epilogo: T3;
  salas: SalaF[];
  objetos: ObjetoF[];
  personajes: PersonajeF[];
  pistas: PistaF[];
}

export const sala = (
  id: string,
  color: string,
  es: [string, string, string],
  gl: [string, string, string],
  pt: [string, string, string]
): SalaF => ({ id, color, l: [es, gl, pt] });

export const objeto = (
  salaId: string,
  emoji: string,
  es: [string, string],
  gl: [string, string],
  pt: [string, string]
): ObjetoF => ({ sala: salaId, emoji, l: [es, gl, pt] });

export const pers = (
  id: string,
  salaId: string,
  rol: 'V' | 'M' | '',
  avatar: string,
  es: [string, string, string],
  gl: [string, string, string],
  pt: [string, string, string]
): PersonajeF => ({ id, sala: salaId, rol, avatar, l: [es, gl, pt] });

export const pista = (es: string, gl: string, pt: string, quien?: string): PistaF => ({ t: [es, gl, pt], quien });
