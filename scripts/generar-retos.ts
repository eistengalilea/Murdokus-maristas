/**
 * GENERADOR DE RETOS — Murdoku Marista
 *
 * Uso:   npm run generar              (todos los retos de scripts/retos-fuente)
 *
 * A partir de la fuente de autoría (scripts/retos-fuente/*.ts) construye, para cada reto:
 *   1. el plano: cada estancia es una sola zona contigua, con los personajes en la estancia
 *      indicada y los objetos bloqueados dentro de la suya;
 *   2. las pistas de posición (`pistasPosicion`) mínimas para que la solución sea ÚNICA;
 *   3. los archivos de datos en castellano y las traducciones al gallego y al portugués.
 * El resultado es determinista (semilla = id del reto). Después hay que pasar `npm run validar`.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { contarSoluciones } from '../src/utils/pistasPosicion';
import { RASGO_IDS } from '../src/data/rasgos';
import { RETOS_FUENTE } from './retos-fuente';
import type { RetoF, Nivel } from './retos-fuente/base';

type Pos = Record<string, [number, number]>;
const TAM: Record<Nivel, number> = { easy: 5, medium: 7, hard: 9 };
const NOMBRE_NIVEL: Record<Nivel, string> = { easy: 'FACILES', medium: 'MEDIOS', hard: 'DIFICILES' };
const CAMEL: Record<Nivel, string> = { easy: 'Faciles', medium: 'Medios', hard: 'Dificiles' };
const GRADIENTES = ['amber', 'red', 'blue', 'emerald', 'purple', 'stone', 'teal', 'rose', 'indigo', 'orange', 'sky', 'green'];
const LIMITE_CONTEO = 300;

// ---------- aleatorio determinista ----------
function semilla(texto: string): number {
  let h = 2166136261;
  for (const ch of texto) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return h >>> 0;
}
function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const barajar = <T,>(arr: T[], rand: () => number): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// ---------- comprobación de la fuente ----------
function revisarFuente(r: RetoF) {
  const N = TAM[r.nivel];
  const err = (m: string) => {
    throw new Error(`[${r.id}] ${m}`);
  };
  if (!r.rasgos || r.rasgos.length === 0) err('falta al menos un rasgo marista');
  for (const g of r.rasgos || []) if (!RASGO_IDS.includes(g)) err(`rasgo desconocido ${g}`);
  if (r.personajes.length !== N) err(`hay ${r.personajes.length} personajes y el nivel pide ${N}`);
  const salas = new Set(r.salas.map((s) => s.id));
  if (salas.size !== r.salas.length) err('ids de estancia repetidos');
  if (r.salas.length > N + 2) err('demasiadas estancias para el tablero');
  for (const p of r.personajes) if (!salas.has(p.sala)) err(`${p.id}: estancia inexistente ${p.sala}`);
  for (const o of r.objetos) if (!salas.has(o.sala)) err(`objeto en estancia inexistente ${o.sala}`);
  const V = r.personajes.filter((p) => p.rol === 'V');
  const M = r.personajes.filter((p) => p.rol === 'M');
  if (V.length !== 1 || M.length !== 1) err('debe haber exactamente un V y un M');
  if (V[0].sala !== M[0].sala) err('V y M deben estar en la misma estancia');
  const intrusos = r.personajes.filter((p) => p.sala === V[0].sala && p.rol === '');
  if (intrusos.length) err(`en la estancia de la víctima no puede haber más gente: ${intrusos.map((p) => p.id)}`);
  const ids = r.personajes.map((p) => p.id);
  if (new Set(ids).size !== ids.length) err('ids de personaje repetidos');
  for (const pi of r.pistas) for (const q of (pi.quien || '').split(',').filter(Boolean)) if (!ids.includes(q)) err(`pista cita a ${q}`);
}

// ---------- plano ----------
function contiguas(cellRooms: string[][], id: string): boolean {
  const N = cellRooms.length;
  const celdas: [number, number][] = [];
  cellRooms.forEach((f, r) => f.forEach((x, c) => x === id && celdas.push([r, c])));
  if (!celdas.length) return false;
  const k = (r: number, c: number) => `${r},${c}`;
  const todas = new Set(celdas.map(([r, c]) => k(r, c)));
  const vistas = new Set([k(...celdas[0])]);
  const pila = [celdas[0]];
  while (pila.length) {
    const [r, c] = pila.pop()!;
    for (const [a, b] of [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]]) {
      if (a >= 0 && b >= 0 && a < N && b < N && todas.has(k(a, b)) && !vistas.has(k(a, b))) {
        vistas.add(k(a, b));
        pila.push([a, b]);
      }
    }
  }
  return vistas.size === todas.size;
}

function intentarPlano(r: RetoF, N: number, rand: () => number) {
  const grid: (string | null)[][] = Array.from({ length: N }, () => Array(N).fill(null));
  const perm = barajar([...Array(N).keys()], rand);
  const pos: Pos = {};
  r.personajes.forEach((p, i) => {
    pos[p.id] = [i, perm[i]];
    grid[i][perm[i]] = p.sala;
  });
  const libres = () => {
    const l: [number, number][] = [];
    grid.forEach((f, a) => f.forEach((x, b) => x === null && l.push([a, b])));
    return l;
  };
  const objPos: [number, number][] = [];
  for (const o of r.objetos) {
    const l = libres();
    const [a, b] = l[Math.floor(rand() * l.length)];
    grid[a][b] = o.sala;
    objPos.push([a, b]);
  }
  const conCelda = new Set(grid.flat().filter(Boolean) as string[]);
  for (const s of r.salas) {
    if (conCelda.has(s.id)) continue;
    const l = libres();
    const [a, b] = l[Math.floor(rand() * l.length)];
    grid[a][b] = s.id;
  }
  // crecimiento equilibrado
  for (;;) {
    const frontera = new Map<string, [number, number][]>();
    grid.forEach((f, a) =>
      f.forEach((x, b) => {
        if (x === null) return;
        for (const [da, db] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const na = a + da;
          const nb = b + db;
          if (na >= 0 && nb >= 0 && na < N && nb < N && grid[na][nb] === null) {
            if (!frontera.has(x)) frontera.set(x, []);
            frontera.get(x)!.push([na, nb]);
          }
        }
      })
    );
    if (!frontera.size) break;
    const tam = new Map<string, number>();
    grid.flat().forEach((x) => x && tam.set(x, (tam.get(x) || 0) + 1));
    const claves = [...frontera.keys()];
    const pesos = claves.map((c) => 1 / Math.pow(tam.get(c) || 1, 1.5));
    let t = rand() * pesos.reduce((a, b) => a + b, 0);
    let elegida = claves[0];
    for (let i = 0; i < claves.length; i++) {
      t -= pesos[i];
      if (t <= 0) {
        elegida = claves[i];
        break;
      }
    }
    const cand = frontera.get(elegida)!;
    const [a, b] = cand[Math.floor(rand() * cand.length)];
    grid[a][b] = elegida;
  }
  const cellRooms = grid as string[][];
  const tam = new Map<string, number>();
  cellRooms.flat().forEach((x) => tam.set(x, (tam.get(x) || 0) + 1));
  const minimo = N >= 7 ? 3 : 2;
  const maximo = Math.round(N * N * (N >= 9 ? 0.27 : N >= 7 ? 0.32 : 0.4));
  for (const s of r.salas) {
    const n = tam.get(s.id) || 0;
    if (n < minimo || n > maximo) return null;
    if (!contiguas(cellRooms, s.id)) return null;
  }
  return { cellRooms, pos, objPos };
}

// ---------- pistas ----------
type PistaPos = any;
function candidatas(id: string, pos: Pos, N: number, claves: string[]): PistaPos[] {
  const [r, c] = pos[id];
  const res: PistaPos[] = [];
  for (const k of claves) {
    const [a, b] = k.split(',').map(Number);
    if (a === r) res.push({ tipo: 'filaObjeto', objeto: k });
    if (b === c) res.push({ tipo: 'columnaObjeto', objeto: k });
    if (Math.abs(a - r) + Math.abs(b - c) === 1) res.push({ tipo: 'junto_objeto', objeto: k });
  }
  if (r === 0) res.push({ tipo: 'borde', lado: 'norte' });
  if (r === N - 1) res.push({ tipo: 'borde', lado: 'sur' });
  if (c === 0) res.push({ tipo: 'borde', lado: 'oeste' });
  if (c === N - 1) res.push({ tipo: 'borde', lado: 'este' });
  for (const [o, [ro, co]] of Object.entries(pos)) {
    if (o === id) continue;
    if (r < ro) res.push({ tipo: 'norteDe', sospechoso: o });
    if (r > ro) res.push({ tipo: 'surDe', sospechoso: o });
    if (c < co) res.push({ tipo: 'oesteDe', sospechoso: o });
    if (c > co) res.push({ tipo: 'esteDe', sospechoso: o });
  }
  return res;
}

function elegirPistas(r: RetoF, N: number, plano: NonNullable<ReturnType<typeof intentarPlano>>, rand: () => number) {
  const { cellRooms, pos, objPos } = plano;
  const blocked: Record<string, any> = {};
  objPos.forEach(([a, b]) => (blocked[`${a},${b}`] = {}));
  const claves = Object.keys(blocked);
  const suspects = r.personajes.map((p) => ({
    id: p.id,
    pistasPosicion: [{ tipo: 'estancia', estancia: p.sala }] as PistaPos[]
  }));
  const caso: any = { rooms: {}, cellRooms, blockedObjects: blocked, suspects };
  const total = (lim = LIMITE_CONTEO) => contarSoluciones(caso, N, N, lim).total;
  const mismo = (x: PistaPos, y: PistaPos) => JSON.stringify(x) === JSON.stringify(y);

  let guardia = 0;
  while (total() !== 1) {
    if (++guardia > 70) return null;
    const pool: { s: any; p: PistaPos }[] = [];
    for (const s of suspects) {
      if (s.pistasPosicion.length >= 4) continue;
      for (const p of candidatas(s.id, pos, N, claves)) {
        if (!s.pistasPosicion.some((q: PistaPos) => mismo(q, p))) pool.push({ s, p });
      }
    }
    if (!pool.length) return null;
    const muestra = barajar(pool, rand).slice(0, 90);
    let mejor: { s: any; p: PistaPos } | null = null;
    let mejorN = Infinity;
    for (const cand of muestra) {
      cand.s.pistasPosicion.push(cand.p);
      const n = total();
      cand.s.pistasPosicion.pop();
      if (n >= 1 && n < mejorN) {
        mejorN = n;
        mejor = cand;
      }
    }
    if (!mejor) return null;
    mejor.s.pistasPosicion.push(mejor.p);
  }
  // poda: quitar pistas que sobran
  for (const s of barajar(suspects, rand)) {
    for (const p of barajar(s.pistasPosicion.filter((x: PistaPos) => x.tipo !== 'estancia'), rand)) {
      const i = s.pistasPosicion.findIndex((q: PistaPos) => mismo(q, p));
      s.pistasPosicion.splice(i, 1);
      if (total(2) !== 1) s.pistasPosicion.splice(i, 0, p);
    }
  }
  const fin = contarSoluciones(caso, N, N, 2);
  if (fin.total !== 1) return null;
  for (const [id, [a, b]] of Object.entries(pos)) {
    if (fin.primera![id].row !== a || fin.primera![id].col !== b) return null;
  }
  return suspects;
}

// ---------- construcción ----------
const estilo = (c: string) => ({
  bgColor: `bg-${c}-100/70`,
  borderColor: `border-${c}-700/60`,
  textColor: `text-${c}-950`,
  tagColor: `bg-${c}-800 text-${c}-100`
});

function construir(r: RetoF) {
  revisarFuente(r);
  const N = TAM[r.nivel];
  const rand = mulberry32(semilla(r.id));
  let plano: ReturnType<typeof intentarPlano> = null;
  let pistasPos: ReturnType<typeof elegirPistas> = null;
  let intentos = 0;
  while (!pistasPos) {
    if (++intentos > 600) throw new Error(`[${r.id}] no se ha podido generar un plano con solución única`);
    plano = intentarPlano(r, N, rand);
    if (!plano) continue;
    pistasPos = elegirPistas(r, N, plano, rand);
  }
  const { cellRooms, pos, objPos } = plano!;
  const V = r.personajes.find((p) => p.rol === 'V')!.id;
  const M = r.personajes.find((p) => p.rol === 'M')!.id;
  const etapa = (l: number) => r.fuente[l].split(' · ')[0];

  const out: any[] = [];
  const objKeys = objPos.map(([a, b]) => `${a},${b}`);
  for (let l = 0; l < 3; l++) {
    const rooms: any = {};
    for (const s of r.salas) rooms[s.id] = { id: s.id, name: s.l[l][0], shortName: s.l[l][1], ...estilo(s.color), description: s.l[l][2] };
    const blockedObjects: any = {};
    r.objetos.forEach((o, i) => {
      blockedObjects[objKeys[i]] = { emoji: o.emoji, name: o.l[l][0], evidenceCode: `EV-${String(i + 1).padStart(2, '0')}`, description: o.l[l][1] };
    });
    const suspects = r.personajes.map((p, i) => ({
      id: p.id,
      name: p.l[l][0],
      role: p.l[l][1],
      avatar: p.avatar,
      color: `from-${GRADIENTES[i % GRADIENTES.length]}-600 to-${GRADIENTES[i % GRADIENTES.length]}-800`,
      ...(p.rol === 'V' ? { isVictim: true } : {}),
      ...(p.rol === 'M' ? { isMurderer: true } : {}),
      clueText: p.l[l][2],
      pistasPosicion: pistasPos!.find((s) => s.id === p.id)!.pistasPosicion
    }));
    const clues = r.pistas.map((p, i) => ({
      id: `c${i + 1}`,
      text: p.t[l],
      narrative: '',
      ...(p.quien ? { relatedSuspects: p.quien.split(',') } : {})
    }));
    const solution: any = {};
    for (const [id, [a, b]] of Object.entries(pos)) solution[id] = { row: a, col: b };
    out.push({
      l, rooms, blockedObjects, suspects, clues, solution,
      textos: {
        nombre: r.nombre[l], categoria: r.categoria[l], fuenteHistorica: r.fuente[l], textoClave: r.textoClave[l],
        contextoHistorico: r.contexto[l], solucionExplicacion: r.explicacion[l], storyIntro: r.intro[l], epilogue: r.epilogo[l],
        subtitle: `${r.categoria[l]} · ${etapa(l)} · ${N}x${N}`, badge: `${r.nombre[l].toUpperCase()} · ${N}x${N}`
      }
    });
  }
  const es = out[0];
  const reto = {
    id: r.id,
    nombre: es.textos.nombre,
    datos_juego: {
      Tamano_Cuadricula: `${N}x${N}`,
      gridSize: N,
      categoria: es.textos.categoria,
      rasgos: r.rasgos,
      fuenteHistorica: es.textos.fuenteHistorica,
      textoClave: es.textos.textoClave,
      contextoHistorico: es.textos.contextoHistorico,
      solucionExplicacion: es.textos.solucionExplicacion,
      storyIntro: es.textos.storyIntro,
      epilogue: es.textos.epilogue,
      subtitle: es.textos.subtitle,
      badge: es.textos.badge,
      victimId: V,
      murdererId: M,
      rooms: es.rooms,
      cellRooms,
      blockedObjects: es.blockedObjects,
      suspects: es.suspects,
      clues: es.clues,
      solution: es.solution
    }
  };
  const traduccion = (o: any) => {
    const t: any = { ...o.textos, rooms: {}, blockedObjects: {}, suspects: {}, clues: {} };
    for (const [id, x] of Object.entries<any>(o.rooms)) t.rooms[id] = { name: x.name, shortName: x.shortName, description: x.description };
    for (const [k, x] of Object.entries<any>(o.blockedObjects)) t.blockedObjects[k] = { name: x.name, description: x.description };
    for (const s of o.suspects) t.suspects[s.id] = { name: s.name, role: s.role, clueText: s.clueText };
    for (const c of o.clues) t.clues[c.id] = { text: c.text };
    return t;
  };
  return { reto, gl: traduccion(out[1]), pt: traduccion(out[2]), pistas: pistasPos!.reduce((n, s) => n + s.pistasPosicion.length, 0), intentos };
}

// ---------- salida ----------
function escribir(ruta: string, contenido: string) {
  mkdirSync(dirname(ruta), { recursive: true });
  writeFileSync(ruta, contenido);
}
const previos: Record<string, any> = {};
for (const r of RETOS_FUENTE) {
  const g = construir(r);
  previos[r.id] = { nivel: r.nivel, reto: g.reto, gl: g.gl, pt: g.pt };
  console.log(`✔ ${r.id} «${r.nombre[0]}» · ${g.pistas} pistas de posición · intentos ${g.intentos}`);
}
const orden = RETOS_FUENTE.map((r) => r.id);
const lista = orden.filter((id) => previos[id]).map((id) => previos[id]);
for (const nivel of ['easy', 'medium', 'hard'] as Nivel[]) {
  const doc = lista.filter((x) => x.nivel === nivel);
  escribir(
    `src/data/retosMarista${CAMEL[nivel]}.ts`,
    `import { Reto } from '../types';\n\n/**\n * RETOS DE HISTORIA MARISTA — ${NOMBRE_NIVEL[nivel]} (${TAM[nivel]}x${TAM[nivel]})\n * Archivo GENERADO por scripts/generar-retos.ts a partir de scripts/retos-fuente. No editar a mano.\n */\nexport const RETOS_MARISTA_${NOMBRE_NIVEL[nivel]}: Reto[] = ${JSON.stringify(doc.map((x) => x.reto), null, 2)};\n`
  );
}
const trad = (lang: 'gl' | 'pt') => {
  const o: any = {};
  lista.forEach((x) => (o[x.reto.id] = x[lang]));
  return JSON.stringify(o, null, 2);
};
escribir(
  'src/i18n/retos/retosMaristaGl.ts',
  `import { RetoTraduccion } from './types';\n\n/** Traducciones al gallego de los retos de historia marista. GENERADO por scripts/generar-retos.ts. */\nexport const RETOS_MARISTA_GL: Record<string, RetoTraduccion> = ${trad('gl')};\n`
);
escribir(
  'src/i18n/retos/pt/retosMaristaPt.ts',
  `import { RetoTraduccion } from '../types';\n\n/** Traducciones al portugués de Portugal (pt-PT) de los retos de historia marista. GENERADO por scripts/generar-retos.ts. */\nexport const RETOS_MARISTA_PT: Record<string, RetoTraduccion> = ${trad('pt')};\n`
);
console.log(`\n${lista.length} retos escritos.`);
