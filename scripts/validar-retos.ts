/**
 * VALIDADOR DE RETOS — Murdoku Bíblico
 *
 * Uso:   npm run validar            (o: npx tsx scripts/validar-retos.ts)
 *        npm run validar -- 004-NT  (solo los retos indicados)
 *
 * Comprueba en todos los retos de src/data:
 *  1. Estructura: tamaño de cuadrícula, mapa de estancias, objetos, colores de la paleta oficial.
 *  2. Estancias contiguas (una estancia no puede estar partida en trozos).
 *  3. Solución: una persona por fila y columna, nadie sobre objetos bloqueados.
 *  4. Regla del asesino: en la estancia de la víctima solo están la víctima y el culpable.
 *  5. Pistas de posición: existen, son verdaderas y llevan a UNA ÚNICA solución.
 *  6. Coherencia narrativa: la pista narrativa no nombra una estancia distinta de la real.
 *  7. Traducciones al gallego y al portugués: las claves coinciden con las del reto en castellano.
 *
 * Termina con código 1 si hay errores (útil antes de publicar o en integración continua).
 */
import { NIVELES_DATABASE } from '../src/data/niveles';
import { RETOS_TRADUCCIONES } from '../src/i18n/retos';
import { contarSoluciones, cumplePista } from '../src/utils/pistasPosicion';
import type { Reto } from '../src/types';

const PALETA = new Set([
  'purple', 'blue', 'teal', 'amber', 'emerald', 'red', 'rose', 'yellow', 'orange',
  'sky', 'stone', 'indigo', 'green', 'zinc', 'cyan', 'lime', 'violet'
]);
const TAMANO_POR_DIFICULTAD: Record<string, number> = { easy: 5, medium: 7, hard: 9 };

const filtro = process.argv.slice(2);
let errores = 0;
let avisos = 0;

const quitarTildes = (s: string) =>
  (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function revisar(reto: Reto, dificultad: string): { e: string[]; w: string[] } {
  const e: string[] = [];
  const w: string[] = [];
  const g = reto.datos_juego;

  // 1. Tamaño
  const m = /(\d+)\s*[xX×]\s*(\d+)/.exec(g.Tamano_Cuadricula || '');
  const filas = m ? +m[1] : g.gridSize;
  const cols = m ? +m[2] : g.gridSize;
  if (g.gridSize !== Math.max(filas, cols)) e.push(`gridSize ${g.gridSize} no coincide con Tamano_Cuadricula ${filas}x${cols}`);
  if (TAMANO_POR_DIFICULTAD[dificultad] && filas !== TAMANO_POR_DIFICULTAD[dificultad])
    w.push(`tablero ${filas}x${cols} poco habitual para la dificultad ${dificultad}`);
  if (g.cellRooms.length !== filas || g.cellRooms.some((f) => f.length !== cols))
    e.push(`cellRooms no mide ${filas}x${cols}`);

  // Estancias
  const usadas = new Set(g.cellRooms.flat());
  for (const id of usadas) if (!g.rooms[id]) e.push(`cellRooms usa la estancia inexistente «${id}»`);
  for (const [id, room] of Object.entries(g.rooms)) {
    if (!usadas.has(id)) w.push(`la estancia «${id}» no tiene casillas`);
    if (room.id !== id) e.push(`la estancia con clave «${id}» declara id «${room.id}»`);
    const color = /bg-(\w+)-/.exec(room.tagColor || '')?.[1];
    if (!color || !PALETA.has(color)) e.push(`tagColor de «${id}» fuera de la paleta oficial: ${room.tagColor}`);
  }

  // 2. Contigüidad
  for (const id of usadas) {
    const celdas: [number, number][] = [];
    g.cellRooms.forEach((f, r) => f.forEach((x, c) => x === id && celdas.push([r, c])));
    const clave = (r: number, c: number) => `${r},${c}`;
    const todas = new Set(celdas.map(([r, c]) => clave(r, c)));
    const vistas = new Set([clave(...celdas[0])]);
    const pila = [celdas[0]];
    while (pila.length) {
      const [r, c] = pila.pop()!;
      for (const [a, b] of [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]]) {
        if (todas.has(clave(a, b)) && !vistas.has(clave(a, b))) {
          vistas.add(clave(a, b));
          pila.push([a, b]);
        }
      }
    }
    if (vistas.size !== todas.size) e.push(`la estancia «${id}» está partida en trozos separados`);
  }

  // Objetos bloqueados
  for (const k of Object.keys(g.blockedObjects || {})) {
    const [r, c] = k.split(',').map(Number);
    if (!(r >= 0 && r < filas && c >= 0 && c < cols)) e.push(`objeto bloqueado fuera del tablero: ${k}`);
  }

  // 3. Personajes y solución
  const ids = g.suspects.map((s) => s.id);
  if (new Set(ids).size !== ids.length) e.push('hay ids de personaje repetidos');
  if (ids.length > Math.min(filas, cols)) e.push(`${ids.length} personajes no caben con una persona por fila y columna`);
  for (const id of ids) if (!g.solution[id]) e.push(`falta ${id} en la solución`);
  for (const id of Object.keys(g.solution)) if (!ids.includes(id)) e.push(`la solución incluye a ${id}, que no es un personaje`);
  const filasSol = new Map<number, string>();
  const colsSol = new Map<number, string>();
  for (const [id, p] of Object.entries(g.solution)) {
    if (!(p.row >= 0 && p.row < filas && p.col >= 0 && p.col < cols)) { e.push(`${id} está fuera del tablero en la solución`); continue; }
    if (g.blockedObjects?.[`${p.row},${p.col}`]) e.push(`la solución coloca a ${id} sobre un objeto bloqueado (${p.row},${p.col})`);
    if (filasSol.has(p.row)) e.push(`regla sudoku: ${id} y ${filasSol.get(p.row)} comparten fila`);
    if (colsSol.has(p.col)) e.push(`regla sudoku: ${id} y ${colsSol.get(p.col)} comparten columna`);
    filasSol.set(p.row, id);
    colsSol.set(p.col, id);
  }

  // 4. Víctima y culpable
  const V = g.victimId;
  const M = g.murdererId;
  if (!ids.includes(V)) e.push(`victimId «${V}» no es un personaje`);
  if (!ids.includes(M)) e.push(`murdererId «${M}» no es un personaje`);
  const marcadasV = g.suspects.filter((s) => s.isVictim).map((s) => s.id);
  const marcadosM = g.suspects.filter((s) => s.isMurderer).map((s) => s.id);
  if (marcadasV.some((x) => x !== V)) e.push(`isVictim (${marcadasV}) no coincide con victimId ${V}`);
  if (marcadosM.some((x) => x !== M)) e.push(`isMurderer (${marcadosM}) no coincide con murdererId ${M}`);
  if (g.solution[V] && g.solution[M]) {
    const estancia = (id: string) => g.cellRooms[g.solution[id].row]?.[g.solution[id].col];
    const sala = estancia(V);
    const ocupantes = ids.filter((id) => g.solution[id] && estancia(id) === sala);
    if (!(ocupantes.length === 2 && ocupantes.includes(M)))
      e.push(`regla del asesino: en «${sala}» están [${ocupantes.join(', ')}]; deberían estar solo ${V} (víctima) y ${M} (culpable)`);
  }

  // Pistas del cuaderno
  for (const c of g.clues) {
    for (const s of c.relatedSuspects || []) if (!ids.includes(s)) e.push(`la pista ${c.id} cita al personaje inexistente ${s}`);
    if (c.relatedRoomId && !g.rooms[c.relatedRoomId]) e.push(`la pista ${c.id} cita la estancia inexistente ${c.relatedRoomId}`);
  }

  // 5. Pistas de posición
  const pos: Record<string, [number, number]> = {};
  for (const [id, p] of Object.entries(g.solution)) pos[id] = [p.row, p.col];
  for (const s of g.suspects) {
    if (!s.pistasPosicion?.length) { e.push(`${s.id} no tiene pistasPosicion`); continue; }
    for (const p of s.pistasPosicion) {
      if (p.tipo === 'estancia' && !g.rooms[p.estancia]) e.push(`${s.id}: pista con estancia inexistente ${p.estancia}`);
      if ('objeto' in p && !g.blockedObjects?.[p.objeto]) e.push(`${s.id}: pista con objeto inexistente ${p.objeto}`);
      if ('sospechoso' in p && !ids.includes(p.sospechoso)) e.push(`${s.id}: pista con personaje inexistente ${p.sospechoso}`);
      if (!cumplePista(p, s.id, pos, g, filas, cols)) e.push(`${s.id}: la pista ${JSON.stringify(p)} es FALSA con la solución`);
    }
  }
  const { total, primera } = contarSoluciones(g, filas, cols, 2);
  if (total === 0) e.push('las pistas de posición no admiten ninguna solución');
  else if (total > 1) e.push('las pistas de posición admiten más de una solución (faltan pistas)');
  else if (primera && Object.entries(g.solution).some(([id, p]) => primera![id]?.row !== p.row || primera![id]?.col !== p.col))
    e.push('la única solución que dan las pistas no es la solución guardada');

  // 6. Coherencia narrativa (aviso)
  for (const s of g.suspects) {
    const p = g.solution[s.id];
    if (!p || !s.clueText) continue;
    const real = g.cellRooms[p.row][p.col];
    const texto = quitarTildes(s.clueText);
    const nombradas = Object.entries(g.rooms)
      .filter(([, r]) => texto.includes(quitarTildes(r.name)) || texto.includes(quitarTildes(r.shortName)))
      .map(([id]) => id);
    if (nombradas.length && !nombradas.includes(real))
      w.push(`la narración de ${s.id} nombra [${nombradas.join(', ')}] pero está en «${real}»`);
  }

  // 7. Traducciones (gallego y portugués)
  for (const [lang, nombreIdioma] of [['gl', 'gallego'], ['pt', 'portugués']] as const) {
    const tr = RETOS_TRADUCCIONES[lang][reto.id];
    if (!tr) {
      w.push(`sin traducción al ${nombreIdioma}`);
      continue;
    }
    const comparar = (nombre: string, trad: Record<string, unknown> | undefined, es: string[]) => {
      const kt = Object.keys(trad || {});
      const sobran = kt.filter((k) => !es.includes(k));
      const faltan = es.filter((k) => !kt.includes(k));
      if (sobran.length) e.push(`${nombreIdioma}/${nombre}: claves que no existen en el reto: ${sobran.join(', ')}`);
      if (faltan.length) w.push(`${nombreIdioma}/${nombre}: sin traducir: ${faltan.join(', ')}`);
    };
    comparar('rooms', tr.rooms, Object.keys(g.rooms));
    comparar('suspects', tr.suspects, ids);
    comparar('clues', tr.clues, g.clues.map((c) => c.id));
    comparar('blockedObjects', tr.blockedObjects, Object.keys(g.blockedObjects || {}));

    // Coherencia narrativa en la traducción (aviso)
    for (const s of g.suspects) {
      const p = g.solution[s.id];
      const texto = quitarTildes(tr.suspects?.[s.id]?.clueText || '');
      if (!p || !texto) continue;
      const real = g.cellRooms[p.row][p.col];
      const nombradas = Object.entries(tr.rooms || {})
        .filter(([, r]) => texto.includes(quitarTildes(r.name)) || (r.shortName && texto.includes(quitarTildes(r.shortName))))
        .map(([id]) => id);
      if (nombradas.length && !nombradas.includes(real))
        w.push(`${nombreIdioma}: la narración de ${s.id} nombra [${nombradas.join(', ')}] pero está en «${real}»`);
    }
  }

  return { e, w };
}

const vistos = new Map<string, string>();
for (const dificultad of ['easy', 'medium', 'hard'] as const) {
  for (const reto of NIVELES_DATABASE[dificultad]) {
    if (vistos.has(reto.id)) {
      console.log(`✖ ${reto.id}: id repetido (también en ${vistos.get(reto.id)})`);
      errores++;
      continue;
    }
    vistos.set(reto.id, dificultad);
    if (filtro.length && !filtro.includes(reto.id)) continue;
    const { e, w } = revisar(reto, dificultad);
    errores += e.length;
    avisos += w.length;
    if (!e.length && !w.length) continue;
    console.log(`\n${e.length ? '✖' : '⚠'} [${dificultad}] ${reto.id} «${reto.nombre}»`);
    e.forEach((x) => console.log(`   ✖ ${x}`));
    w.forEach((x) => console.log(`   ⚠ ${x}`));
  }
}

console.log(`\n${vistos.size} retos revisados · ${errores} errores · ${avisos} avisos`);
process.exit(errores ? 1 : 0);
