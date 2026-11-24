export type RoomId = string;

export interface RoomInfo {
  id: RoomId;
  name: string;
  shortName: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  tagColor: string;
  description: string;
}

export interface InanimateObject {
  emoji: string;
  name: string;
  evidenceCode: string;
  description: string;
}

export interface CellCoord {
  row: number;
  col: number;
}

/**
 * Pista de posición estructurada. El texto visible (castellano o gallego) se genera
 * con `describirPistaPosicion` (src/utils/pistasPosicion.ts) y el validador
 * (`npm run validar`) comprueba que el conjunto de pistas lleva a una única solución.
 * - objeto: clave "fila,columna" de un objeto bloqueado (blockedObjects)
 * - sospechoso: id de otro personaje del caso
 */
export type PistaPosicion =
  | { tipo: 'estancia'; estancia: RoomId }
  | { tipo: 'filaObjeto' | 'columnaObjeto' | 'junto_objeto'; objeto: string }
  | { tipo: 'norteDe' | 'surDe' | 'esteDe' | 'oesteDe'; sospechoso: string }
  | { tipo: 'borde'; lado: 'norte' | 'sur' | 'este' | 'oeste' };

export interface Suspect {
  id: string; // 'A', 'B', 'C', 'D', 'E', 'V'
  name: string;
  role: string;
  avatar: string;
  color: string;
  isVictim?: boolean;
  isMurderer?: boolean;
  notes?: string;
  clueText?: string; // Texto narrativo de la pista de este personaje
  pistasPosicion?: PistaPosicion[]; // Pistas de deducción verificables (estancia, fila, columna, vecindad...)
}

export interface Clue {
  id: string;
  text: string;
  narrative: string;
  relatedSuspects?: string[];
  relatedRoomId?: RoomId;
  relatedObjectEmoji?: string;
  highlightCells?: CellCoord[];
}

export interface CellState {
  occupant: string | null; // suspect id ('A', 'B', ...) or null
  isX: boolean; // marked as impossible
  notes: string[]; // pencil candidate notes, e.g. ['A', 'C']
}

export type DifficultyLevel = 'Fácil' | 'Medio' | 'Medio Difícil' | 'Difícil';
export type DifficultyKey = 'easy' | 'medium' | 'medium-hard' | 'hard';

/**
 * Función pericial que analiza y extrae dinámicamente el número de filas y columnas
 * a partir de la propiedad Tamano_Cuadricula (ej: '7x7', '9x9', '5x5') o valores numéricos.
 */
export function parseTamanoCuadricula(
  tamano?: string | number,
  fallback = 5
): { rows: number; cols: number; size: number; totalCells: number; label: string } {
  if (typeof tamano === 'number' && !isNaN(tamano) && tamano > 0) {
    return {
      rows: tamano,
      cols: tamano,
      size: tamano,
      totalCells: tamano * tamano,
      label: `${tamano}x${tamano}`
    };
  }

  if (typeof tamano === 'string') {
    const match = tamano.match(/(\d+)\s*[xX×]\s*(\d+)/);
    if (match) {
      const rows = parseInt(match[1], 10);
      const cols = parseInt(match[2], 10);
      const size = Math.max(rows, cols);
      return {
        rows,
        cols,
        size,
        totalCells: rows * cols,
        label: `${rows}x${cols}`
      };
    }
    const parsed = parseInt(tamano, 10);
    if (!isNaN(parsed) && parsed > 0) {
      return {
        rows: parsed,
        cols: parsed,
        size: parsed,
        totalCells: parsed * parsed,
        label: `${parsed}x${parsed}`
      };
    }
  }

  return {
    rows: fallback,
    cols: fallback,
    size: fallback,
    totalCells: fallback * fallback,
    label: `${fallback}x${fallback}`
  };
}

/**
 * Sub-objeto con la configuración técnica y de tablero de un nivel específico:
 * - Tamano_Cuadricula: '5x5', '7x7', '9x9'
 * - Habitaciones (configuración y mapeo de celdas)
 * - Objetos estáticos bloqueados
 * - Pistas de deducción
 * - Solución exacta de coordenadas
 */
export interface RetoDatosJuego {
  Tamano_Cuadricula?: string; // e.g. '5x5', '7x7', '9x9'
  gridSize: number;
  categoria?: string;
  /** Rasgos del estilo marista (ids de data/rasgos.ts). */
  rasgos?: string[];
  fuenteHistorica?: string;
  textoClave?: string;
  contextoHistorico?: string;
  solucionExplicacion?: string;
  rooms: Record<RoomId, RoomInfo>;
  cellRooms: RoomId[][];
  blockedObjects: Record<string, InanimateObject>;
  suspects: Suspect[];
  clues: Clue[];
  solution: Record<string, CellCoord>;
  victimId: string;
  murdererId: string;
  storyIntro: string;
  epilogue: string;
  subtitle?: string;
  badge?: string;
}

/**
 * Objeto 'Reto' que define un nivel de deducción dentro de una dificultad
 */
export interface Reto {
  id: string; // ej: 'easy-1', 'easy-2', 'medium-1', 'medium-2', 'hard-1'
  nombre: string; // ej: 'El Jardín Trasero', 'Asesinato en la Cocina'
  datos_juego: RetoDatosJuego;
}

/**
 * Base de datos estructurada agrupada por dificultad (easy, medium, hard, medium-hard)
 */
export interface DatabaseNiveles {
  easy: Reto[];
  medium: Reto[];
  'medium-hard'?: Reto[];
  hard: Reto[];
}

export interface PuzzleCase {
  id: string;
  retoId?: string; // id del reto, ej: 'easy-1'
  title: string;
  subtitle: string;
  badge: string;
  categoria?: string;
  /** Rasgos del estilo marista (ids de data/rasgos.ts). */
  rasgos?: string[];
  fuenteHistorica?: string;
  textoClave?: string;
  contextoHistorico?: string;
  solucionExplicacion?: string;
  difficulty: DifficultyLevel;
  Tamano_Cuadricula: string; // e.g. '5x5', '7x7', '9x9'
  gridSize: number; // e.g. 5, 7, 9
  rows: number;
  cols: number;
  totalCells: number;
  victimId: string;
  murdererId: string;
  rooms: Record<RoomId, RoomInfo>;
  // Cell mapping: grid[row][col]
  cellRooms: RoomId[][];
  blockedObjects: Record<string, InanimateObject>; // key "row,col"
  suspects: Suspect[];
  clues: Clue[];
  solution: Record<string, CellCoord>; // suspectId -> {row, col}
  storyIntro: string;
  epilogue: string;
}

export interface MoveHistory {
  grid: CellState[][];
  timestamp: number;
}

export interface MurdererEvaluation {
  isSolved: boolean;
  victim: Suspect | null;
  victimRoom: RoomInfo | null;
  murderer: Suspect | null;
  suspectsInVictimRoom: Suspect[];
  allRoomOccupants: Record<string, { room: RoomInfo; occupants: Suspect[]; count: number }>;
  explanation: string;
}
