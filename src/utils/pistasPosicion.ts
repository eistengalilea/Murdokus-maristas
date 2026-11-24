import type { CellCoord, InanimateObject, PistaPosicion, RoomId, RoomInfo, Suspect } from '../types';

/**
 * PISTAS DE POSICIÓN
 *
 * Cada personaje puede llevar `pistasPosicion`: restricciones estructuradas que
 * describen dónde está (estancia, fila/columna de un objeto, vecindad, orientación
 * respecto a otro personaje o borde del plano). De aquí salen:
 *  - el texto que ve el alumno en castellano y en gallego (describirPistaPosicion),
 *  - la comprobación automática de que el reto tiene solución única (contarSoluciones),
 *    usada por el validador `npm run validar`.
 */

export type IdiomaPista = 'es' | 'gl' | 'pt';

/** Datos mínimos del caso que necesitan las pistas (sirve para Reto.datos_juego y para PuzzleCase). */
export interface CasoPistas {
  rooms: Record<RoomId, RoomInfo>;
  cellRooms: RoomId[][];
  blockedObjects: Record<string, InanimateObject>;
  suspects: Suspect[];
}

const LADOS: Record<'norte' | 'sur' | 'este' | 'oeste', Record<IdiomaPista, string>> = {
  norte: { es: 'en la fila superior del plano (borde norte)', gl: 'na fila superior do plano (bordo norte)', pt: 'na linha de cima da planta (limite norte)' },
  sur: { es: 'en la fila inferior del plano (borde sur)', gl: 'na fila inferior do plano (bordo sur)', pt: 'na linha de baixo da planta (limite sul)' },
  oeste: { es: 'en la columna de la izquierda del todo (borde oeste)', gl: 'na columna da esquerda de todo (bordo oeste)', pt: 'na coluna mais à esquerda (limite oeste)' },
  este: { es: 'en la columna de la derecha del todo (borde este)', gl: 'na columna da dereita de todo (bordo leste)', pt: 'na coluna mais à direita (limite este)' }
};

const RUMBOS: Record<'norteDe' | 'surDe' | 'esteDe' | 'oesteDe', Record<IdiomaPista, string>> = {
  norteDe: { es: 'más al norte (más arriba en el plano) que', gl: 'máis ao norte (máis arriba no plano) que', pt: 'mais a norte (mais acima na planta) do que' },
  surDe: { es: 'más al sur (más abajo en el plano) que', gl: 'máis ao sur (máis abaixo no plano) que', pt: 'mais a sul (mais abaixo na planta) do que' },
  esteDe: { es: 'más al este (más a la derecha en el plano) que', gl: 'máis ao leste (máis á dereita no plano) que', pt: 'mais a este (mais à direita na planta) do que' },
  oesteDe: { es: 'más al oeste (más a la izquierda en el plano) que', gl: 'máis ao oeste (máis á esquerda no plano) que', pt: 'mais a oeste (mais à esquerda na planta) do que' }
};

function nombreObjeto(caso: CasoPistas, clave: string, conEmoji = true): string {
  const obj = caso.blockedObjects?.[clave];
  if (!obj) return `«${clave}»`;
  return conEmoji ? `«${obj.emoji} ${obj.name}»` : `«${obj.name}»`;
}

/**
 * Texto de una pista concreta en el idioma pedido.
 * `conEmoji = false` omite los emojis de los objetos (necesario en el PDF, cuya fuente no los admite).
 */
export function describirPistaPosicion(
  p: PistaPosicion,
  caso: CasoPistas,
  lang: IdiomaPista,
  conEmoji = true
): string {
  const gl = lang === 'gl';
  const pt = lang === 'pt';
  const obj = (clave: string) => nombreObjeto(caso, clave, conEmoji);
  switch (p.tipo) {
    case 'estancia': {
      const room = caso.rooms[p.estancia];
      return pt ? `Está em «${room?.name ?? p.estancia}».` : `Está en «${room?.name ?? p.estancia}».`;
    }
    case 'filaObjeto':
      return gl
        ? `Está na mesma fila que o obxecto ${obj(p.objeto)}.`
        : pt
        ? `Está na mesma linha que o objeto ${obj(p.objeto)}.`
        : `Está en la misma fila que el objeto ${obj(p.objeto)}.`;
    case 'columnaObjeto':
      return gl
        ? `Está na mesma columna que o obxecto ${obj(p.objeto)}.`
        : pt
        ? `Está na mesma coluna que o objeto ${obj(p.objeto)}.`
        : `Está en la misma columna que el objeto ${obj(p.objeto)}.`;
    case 'junto_objeto':
      return gl
        ? `Está xusto ao carón (arriba, abaixo, á esquerda ou á dereita) do obxecto ${obj(p.objeto)}.`
        : pt
        ? `Está mesmo ao lado (em cima, em baixo, à esquerda ou à direita) do objeto ${obj(p.objeto)}.`
        : `Está justo al lado (arriba, abajo, a la izquierda o a la derecha) del objeto ${obj(p.objeto)}.`;
    case 'borde':
      return `Está ${LADOS[p.lado][lang]}.`;
    default: {
      const otro = caso.suspects.find((s) => s.id === p.sospechoso);
      return `Está ${RUMBOS[p.tipo][lang]} ${otro?.name ?? p.sospechoso}.`;
    }
  }
}

/** Todas las pistas de posición de un personaje, unidas en un texto. */
export function textoPistasPosicion(s: Suspect, caso: CasoPistas, lang: IdiomaPista, conEmoji = true): string {
  return (s.pistasPosicion || []).map((p) => describirPistaPosicion(p, caso, lang, conEmoji)).join(' ');
}

/**
 * Pista completa que se muestra al alumno: narración (si la hay) + pistas de posición.
 */
export function pistaCompletaPersonaje(s: Suspect, caso: CasoPistas, lang: IdiomaPista): string {
  const narr = (s.clueText || '').trim();
  const pos = textoPistasPosicion(s, caso, lang);
  if (!narr) return pos;
  if (!pos) return narr;
  return `${/[.!?»”"]$/.test(narr) ? narr : narr + '.'} ${pos}`;
}

// ---------------------------------------------------------------------------
// Comprobación lógica
// ---------------------------------------------------------------------------

type Pos = Record<string, [number, number]>;

const ES_RELACION = (p: PistaPosicion) =>
  p.tipo === 'norteDe' || p.tipo === 'surDe' || p.tipo === 'esteDe' || p.tipo === 'oesteDe';

/** ¿Cumple el personaje `id` la pista `p` con las posiciones dadas? (true si falta el otro personaje). */
export function cumplePista(
  p: PistaPosicion,
  id: string,
  pos: Pos,
  caso: CasoPistas,
  filas: number,
  cols: number
): boolean {
  const aqui = pos[id];
  if (!aqui) return true;
  const [r, c] = aqui;
  switch (p.tipo) {
    case 'estancia':
      return caso.cellRooms[r]?.[c] === p.estancia;
    case 'filaObjeto':
      return Number(p.objeto.split(',')[0]) === r;
    case 'columnaObjeto':
      return Number(p.objeto.split(',')[1]) === c;
    case 'junto_objeto': {
      const [a, b] = p.objeto.split(',').map(Number);
      return Math.abs(a - r) + Math.abs(b - c) === 1;
    }
    case 'borde':
      return p.lado === 'norte' ? r === 0 : p.lado === 'sur' ? r === filas - 1 : p.lado === 'oeste' ? c === 0 : c === cols - 1;
    default: {
      const otro = pos[p.sospechoso];
      if (!otro) return true;
      if (p.tipo === 'norteDe') return r < otro[0];
      if (p.tipo === 'surDe') return r > otro[0];
      if (p.tipo === 'oesteDe') return c < otro[1];
      return c > otro[1];
    }
  }
}

/**
 * Cuenta cuántas colocaciones cumplen a la vez: una persona por fila y columna,
 * ninguna sobre objetos bloqueados y todas las pistas de posición.
 * Se detiene al llegar a `limite`.
 */
export function contarSoluciones(caso: CasoPistas, filas: number, cols: number, limite = 2): {
  total: number;
  primera: Record<string, CellCoord> | null;
} {
  const ids = caso.suspects.map((s) => s.id);
  const pistas: Record<string, PistaPosicion[]> = {};
  for (const s of caso.suspects) pistas[s.id] = s.pistasPosicion || [];

  const dominio: Record<string, [number, number][]> = {};
  for (const id of ids) {
    dominio[id] = [];
    for (let r = 0; r < filas; r++) {
      for (let c = 0; c < cols; c++) {
        if (caso.blockedObjects?.[`${r},${c}`]) continue;
        const pos: Pos = { [id]: [r, c] };
        if (pistas[id].filter((p) => !ES_RELACION(p)).every((p) => cumplePista(p, id, pos, caso, filas, cols))) {
          dominio[id].push([r, c]);
        }
      }
    }
  }

  const orden = [...ids].sort((a, b) => dominio[a].length - dominio[b].length);
  const pos: Pos = {};
  const filasUsadas = new Set<number>();
  const colsUsadas = new Set<number>();
  let total = 0;
  let primera: Record<string, CellCoord> | null = null;

  const relacionesOk = (): boolean => {
    for (const id of Object.keys(pos)) {
      for (const p of pistas[id]) {
        if (ES_RELACION(p) && !cumplePista(p, id, pos, caso, filas, cols)) return false;
      }
    }
    return true;
  };

  const buscar = (i: number) => {
    if (total >= limite) return;
    if (i === orden.length) {
      total++;
      if (!primera) {
        primera = {};
        for (const id of ids) primera[id] = { row: pos[id][0], col: pos[id][1] };
      }
      return;
    }
    const id = orden[i];
    for (const [r, c] of dominio[id]) {
      if (filasUsadas.has(r) || colsUsadas.has(c)) continue;
      pos[id] = [r, c];
      filasUsadas.add(r);
      colsUsadas.add(c);
      if (relacionesOk()) buscar(i + 1);
      delete pos[id];
      filasUsadas.delete(r);
      colsUsadas.delete(c);
    }
  };

  buscar(0);
  return { total, primera };
}
