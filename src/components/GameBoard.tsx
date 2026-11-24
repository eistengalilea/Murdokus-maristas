import React, { useState } from 'react';
import { PuzzleCase, CellState, CellCoord, RoomInfo } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { Ban, AlertTriangle } from 'lucide-react';
import { resolverColorHabitacion } from '../utils/roomColors';
import { porIdioma } from '../i18n/porIdioma';

interface GameBoardProps {
  currentCase: PuzzleCase;
  grid: CellState[][];
  onCellClick: (row: number, col: number) => void;
  onCellRightClick: (row: number, col: number, e: React.MouseEvent) => void;
  highlightedCells: CellCoord[];
  activeSuspectId: string | null;
  activeTool: 'place' | 'x' | 'erase' | 'notes';
  conflictFlash?: {
    rows: number[];
    cols: number[];
    targetCell?: { row: number; col: number };
  } | null;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  currentCase,
  grid,
  onCellClick,
  onCellRightClick,
  highlightedCells,
  activeSuspectId,
  activeTool,
  conflictFlash
}) => {
  const { t, language } = useLanguage();
  const [hoveredCell, setHoveredCell] = useState<CellCoord | null>(null);
  const [hoveredLegendRoomId, setHoveredLegendRoomId] = useState<string | null>(null);

  // Lectura dinámica de dimensiones del tablero (N x N)
  const gridSize = currentCase.gridSize || 5;
  const rows = currentCase.rows || gridSize;
  const cols = currentCase.cols || gridSize;
  const totalCells = currentCase.totalCells || rows * cols;
  const tamanoLabel = currentCase.Tamano_Cuadricula || `${gridSize}x${gridSize}`;

  // Detect row/col conflicts (Sudoku violations: 2+ suspects in same row or col)
  const conflicts = React.useMemo(() => {
    const rowOccupants: Record<number, { count: number; suspects: string[] }> = {};
    const colOccupants: Record<number, { count: number; suspects: string[] }> = {};

    for (let r = 0; r < gridSize; r++) {
      rowOccupants[r] = { count: 0, suspects: [] };
    }
    for (let c = 0; c < gridSize; c++) {
      colOccupants[c] = { count: 0, suspects: [] };
    }

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        const occ = grid[r]?.[c]?.occupant;
        if (occ) {
          rowOccupants[r].count++;
          rowOccupants[r].suspects.push(occ);
          colOccupants[c].count++;
          colOccupants[c].suspects.push(occ);
        }
      }
    }

    const conflictingCells: Record<string, boolean> = {};
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (grid[r]?.[c]?.occupant) {
          if (rowOccupants[r].count > 1 || colOccupants[c].count > 1) {
            conflictingCells[`${r},${c}`] = true;
          }
        }
      }
    }
    return conflictingCells;
  }, [grid, gridSize]);

  // Check if a cell is highlighted from external clue/room hover
  const isCellExternallyHighlighted = (r: number, c: number) => {
    return highlightedCells.some((hc) => hc.row === r && hc.col === c);
  };

  // Mapeo oficial de colores periciales de habitaciones con 50% de transparencia
  const getRoomColorConfig = (roomId: string) => {
    const room = currentCase.rooms[roomId];
    return resolverColorHabitacion(room, roomId);
  };

  // Get Room Wall borders (thicker border between different rooms)
  const getRoomWallBorders = (r: number, c: number) => {
    const currentRoom = currentCase.cellRooms[r]?.[c];
    const topDiff = r > 0 && currentCase.cellRooms[r - 1]?.[c] !== currentRoom;
    const bottomDiff = r < gridSize - 1 && currentCase.cellRooms[r + 1]?.[c] !== currentRoom;
    const leftDiff = c > 0 && currentCase.cellRooms[r]?.[c - 1] !== currentRoom;
    const rightDiff = c < gridSize - 1 && currentCase.cellRooms[r]?.[c + 1] !== currentRoom;

    const thickWidth = gridSize >= 9 ? '2px solid var(--border-thick)' : gridSize >= 7 ? '2.5px solid var(--border-thick)' : '3.5px solid var(--border-thick)';
    const subtleWidth = '1px solid var(--border-subtle)';

    return {
      borderTop: topDiff ? thickWidth : subtleWidth,
      borderBottom: bottomDiff ? thickWidth : subtleWidth,
      borderLeft: leftDiff ? thickWidth : subtleWidth,
      borderRight: rightDiff ? thickWidth : subtleWidth,
    };
  };

  // Ancho contenedor responsivo según tamaño de cuadrícula
  const containerMaxWidth = 
    gridSize >= 9 
      ? 'max-w-3xl' 
      : gridSize >= 7 
      ? 'max-w-2xl' 
      : 'max-w-xl';

  // Clases visuales de escala tipográfica y de elementos según tamaño de cuadrícula
  const scaleStyles = React.useMemo(() => {
    if (gridSize >= 9) {
      return {
        roomTag: 'text-[6px] sm:text-[7px]',
        blockedEmoji: 'text-sm sm:text-base',
        blockedCode: 'text-[6px] sm:text-[7px] px-0.5 py-0',
        suspectAvatar: 'text-xs sm:text-sm',
        suspectBadge: 'text-[9px] sm:text-[10px]',
        victimTag: 'text-[6px] px-0.5 py-0',
        xMark: 'text-base sm:text-lg',
        xDesc: 'hidden',
        notesText: 'text-[6px] sm:text-[7px]',
        notesCols: 'grid-cols-3',
        coordHeader: 'text-[10px] sm:text-[11px] py-0.5',
        coordSide: 'w-6 sm:w-8 text-[10px] sm:text-[11px]',
        cellPadding: 'p-0.5'
      };
    }
    if (gridSize >= 7) {
      return {
        roomTag: 'text-[7px] sm:text-[8px]',
        blockedEmoji: 'text-base sm:text-lg',
        blockedCode: 'text-[7px] sm:text-[8px] px-0.5 py-0',
        suspectAvatar: 'text-sm sm:text-base',
        suspectBadge: 'text-[10px] sm:text-xs',
        victimTag: 'text-[7px] px-1 py-0',
        xMark: 'text-lg sm:text-xl',
        xDesc: 'hidden sm:inline-block text-[6px]',
        notesText: 'text-[7px] sm:text-[8px]',
        notesCols: 'grid-cols-4',
        coordHeader: 'text-[10px] sm:text-xs py-1',
        coordSide: 'w-7 sm:w-8 text-[10px] sm:text-xs',
        cellPadding: 'p-0.5 sm:p-1'
      };
    }
    return {
      roomTag: 'text-[8px] sm:text-[9px]',
      blockedEmoji: 'text-xl sm:text-2xl',
      blockedCode: 'text-[8px] sm:text-[9px] px-1 py-0.2',
      suspectAvatar: 'text-base sm:text-xl',
      suspectBadge: 'text-xs sm:text-sm',
      victimTag: 'text-[8px] px-1.5 py-0.2',
      xMark: 'text-xl sm:text-2xl',
      xDesc: 'inline-block text-[7px] sm:text-[8px]',
      notesText: 'text-[9px] sm:text-[10px]',
      notesCols: 'grid-cols-3',
      coordHeader: 'text-[11px] sm:text-xs py-1',
      coordSide: 'w-8 text-[11px] sm:text-xs',
      cellPadding: 'p-1'
    };
  }, [gridSize]);

  return (
    <div className="flex flex-col items-center select-none w-full">
      {/* Blueprint Header Frame */}
      <div className={`w-full ${containerMaxWidth} bg-theme-panel text-theme-primary border-2 border-theme rounded-t-xl p-3 shadow-md flex items-center justify-between border-b-0 transition-colors`}>
        <div className="flex items-center gap-2">
          <span className="text-lg" role="img" aria-label="Evidence map">📐</span>
          <div>
            <h2 className="text-xs sm:text-sm font-bold font-murdoku-sans tracking-wider text-theme-title uppercase">
              PLANO DE LA ESCENA DEL CRIMEN
            </h2>
            <p className="text-[11px] font-mono text-theme-secondary">
              CUADRÍCULA {tamanoLabel} ({totalCells} CELDAS) · PROYECCIÓN FORENSE ZENITAL
            </p>
          </div>
        </div>

        {/* Evidence Tape Stamp */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-[#c6007e]/10 border border-[#c6007e]/40 rounded">
          <span className="w-2 h-2 rounded-full bg-[#c6007e] animate-pulse" />
          <span className="text-[10px] font-stamp text-[#c6007e] uppercase font-bold tracking-widest">
            {tamanoLabel} · ACORDONADO
          </span>
        </div>
      </div>

      {/* Main Grid Wrapper with dynamic CSS variables injected */}
      <div 
        id="contenedor-tablero"
        style={{ '--grid-size': gridSize } as React.CSSProperties}
        className={`relative w-full ${containerMaxWidth} murdoku-board-wrapper bg-theme-panel border-2 border-theme p-2 sm:p-4 rounded-b-xl shadow-2xl overflow-hidden transition-colors`}
      >
        {/* Crime tape watermark diagonal line */}
        <div className="absolute -top-12 -right-12 w-44 h-10 bg-police-tape rotate-45 pointer-events-none opacity-20" />
        <div className="absolute -bottom-12 -left-12 w-44 h-10 bg-police-tape rotate-45 pointer-events-none opacity-20" />

        {/* Temporary Floating Conflict Banner */}
        {conflictFlash && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-40 bg-red-900/95 text-amber-200 text-xs sm:text-sm font-typewriter font-bold px-3 py-1.5 rounded-lg shadow-2xl border-2 border-red-500 flex items-center gap-2 animate-bounce max-w-[95%] text-center">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>¡REGLA SUDOKU! Solo 1 personaje por cada fila y columna</span>
          </div>
        )}

        {/* Column Coordinates Header (C1 to CN) */}
        <div className="grid grid-cols-[28px_1fr] sm:grid-cols-[32px_1fr] gap-1 mb-1">
          <div className="text-[10px] sm:text-[11px] font-mono text-stone-500 font-bold flex items-center justify-center">
            F\C
          </div>
          <div 
            className="murdoku-header-cols gap-1 sm:gap-1.5 text-center"
            style={{ gridTemplateColumns: `repeat(var(--grid-size, ${gridSize}), minmax(0, 1fr))` }}
          >
            {Array.from({ length: gridSize }).map((_, c) => {
              const isColConflictFlashing = Boolean(conflictFlash?.cols.includes(c));
              return (
                <div 
                  key={`col-${c}`}
                  className={`${scaleStyles.coordHeader} font-mono font-bold rounded transition-all ${
                    isColConflictFlashing
                      ? 'bg-red-600 text-white font-extrabold animate-conflict-flash shadow-md scale-105 ring-2 ring-red-400'
                      : hoveredCell?.col === c 
                      ? 'bg-[#3d2e24] text-amber-300 font-extrabold' 
                      : 'text-theme-secondary font-semibold'
                  }`}
                >
                  C{c + 1}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contenedor Bidimensional: Coordenadas de Filas (F1 a FN) + Matriz Dinámica N x N */}
        <div className="grid grid-cols-[28px_1fr] sm:grid-cols-[32px_1fr] gap-1 items-stretch">
          
          {/* Fila Headers (F1 to FN) en columna izquierda sincronizada */}
          <div 
            className="murdoku-header-rows gap-1 sm:gap-1.5"
            style={{ gridTemplateRows: `repeat(var(--grid-size, ${gridSize}), minmax(0, 1fr))` }}
          >
            {Array.from({ length: gridSize }).map((_, r) => {
              const isRowConflictFlashing = Boolean(conflictFlash?.rows.includes(r));
              return (
                <div 
                  key={`row-header-${r}`}
                  className={`flex items-center justify-center font-mono font-bold rounded transition-all ${scaleStyles.coordHeader} ${
                    isRowConflictFlashing
                      ? 'bg-red-600 text-white font-extrabold animate-conflict-flash shadow-md scale-105 ring-2 ring-red-400'
                      : hoveredCell?.row === r 
                      ? 'bg-[#3d2e24] text-amber-300 font-extrabold' 
                      : 'text-theme-secondary font-semibold'
                  }`}
                >
                  F{r + 1}
                </div>
              );
            })}
          </div>

          {/* Tablero Dinámico CSS Grid: Renderizado mediante bucle de exactamente N x N celdas */}
          <div 
            id="tablero-cuadricula"
            className="murdoku-board-grid gap-1 sm:gap-1.5"
            style={{ 
              gridTemplateColumns: `repeat(var(--grid-size, ${gridSize}), minmax(0, 1fr))`,
              gridTemplateRows: `repeat(var(--grid-size, ${gridSize}), minmax(0, 1fr))`
            }}
          >
            {Array.from({ length: totalCells }).map((_, cellIndex) => {
              // Cálculo de coordenadas cartesianas a partir del índice plano (0 .. N*N - 1)
              const r = Math.floor(cellIndex / gridSize);
              const c = cellIndex % gridSize;

              const cell = grid[r]?.[c] || { occupant: null, isX: false, notes: [] };
              const roomId = currentCase.cellRooms[r]?.[c] || 'salon';
              const room = currentCase.rooms[roomId] || { id: roomId, name: roomId, shortName: roomId, tagColor: 'bg-stone-500 text-white' };
              const blockedObj = currentCase.blockedObjects[`${r},${c}`];
              const isBlocked = Boolean(blockedObj);
              const isConflict = conflicts[`${r},${c}`];
              const isHighlighted = isCellExternallyHighlighted(r, c);
              const isSameRowOrCol = hoveredCell && (hoveredCell.row === r || hoveredCell.col === c);
              const isExactHovered = hoveredCell && hoveredCell.row === r && hoveredCell.col === c;
              const occupantSuspect = cell.occupant 
                ? currentCase.suspects.find((s) => s.id === cell.occupant) 
                : null;

              // Sudoku Conflict Flash logic
              const isCellConflictFlashing = Boolean(
                (conflictFlash?.rows.includes(r)) || (conflictFlash?.cols.includes(c))
              );
              const isTargetCellConflict = Boolean(
                conflictFlash?.targetCell &&
                conflictFlash.targetCell.row === r &&
                conflictFlash.targetCell.col === c
              );

              // Check if placing active suspect here would conflict (for hover feedback)
              const rowHasOther = grid[r]?.some((cCell, cIdx) => cIdx !== c && cCell.occupant && cCell.occupant !== activeSuspectId);
              const colHasOther = grid.some((rCells, rIdx) => rIdx !== r && rCells[c]?.occupant && rCells[c].occupant !== activeSuspectId);
              const wouldConflictWithExisting = activeTool === 'place' && activeSuspectId && !isBlocked && !cell.occupant && (rowHasOther || colHasOther);

              const wallBorders = getRoomWallBorders(r, c);
              const roomColor = resolverColorHabitacion(room, roomId);
              const isLegendHovered = hoveredLegendRoomId === room.id;

              return (
                <div
                  key={`cell-${r}-${c}`}
                  id={`celda-${r}-${c}`}
                  onMouseEnter={() => setHoveredCell({ row: r, col: c })}
                  onMouseLeave={() => setHoveredCell(null)}
                  onClick={() => onCellClick(r, c)}
                  onContextMenu={(e) => onCellRightClick(r, c, e)}
                  style={{
                    ...wallBorders,
                    backgroundColor: isBlocked ? undefined : roomColor.transparent50
                  }}
                  className={`relative aspect-square rounded-md sm:rounded-lg flex flex-col items-center justify-center transition-all duration-150 group overflow-hidden ${
                    isBlocked
                      ? 'bg-stone-300/80 bg-blocked-hatch cursor-not-allowed border-dashed'
                      : 'cursor-pointer hover:shadow-md hover:scale-[1.02]'
                  } ${
                    isSameRowOrCol && !isBlocked
                      ? 'ring-1 sm:ring-2 ring-[#a37d45]/40'
                      : ''
                  } ${
                    isExactHovered && !isBlocked
                      ? 'ring-2 ring-[#c6007e] shadow-lg scale-[1.03] z-10'
                      : ''
                  } ${
                    isLegendHovered && !isBlocked
                      ? 'ring-2 sm:ring-3 ring-amber-400 scale-[1.03] z-10 brightness-110 shadow-md'
                      : ''
                  } ${
                    isHighlighted
                      ? 'ring-3 sm:ring-4 ring-amber-400 animate-pulse z-10'
                      : ''
                  } ${
                    isConflict
                      ? 'ring-3 sm:ring-4 ring-red-600 bg-red-100/90 z-10'
                      : ''
                  } ${
                    isCellConflictFlashing
                      ? 'animate-conflict-flash z-20'
                      : ''
                  }`}
                >
                  {/* Room tag watermark on top left */}
                  <span className={`absolute top-0.5 left-0.5 ${scaleStyles.roomTag} font-mono text-stone-700 dark:text-stone-300 opacity-70 font-bold leading-none pointer-events-none select-none`}>
                    {room.shortName.slice(0, 3).toUpperCase()}
                  </span>

                  {/* Target Conflict Indicator when rejected */}
                  {isTargetCellConflict && (
                    <div className="absolute inset-0 z-30 bg-red-700/95 rounded-lg flex flex-col items-center justify-center text-white p-0.5 text-center animate-bounce shadow-xl">
                      <Ban className="w-4 h-4 text-amber-300 stroke-[2.5]" />
                      <span className="text-[7px] font-mono font-extrabold leading-none mt-0.5 uppercase text-amber-200">
                        {porIdioma(language, { es: 'CONFLICTO', gl: 'CONFLITO', pt: 'CONFLITO' })}
                      </span>
                    </div>
                  )}

                  {/* BLOCKED INANIMATE OBJECT CELL */}
                  {isBlocked ? (
                    <div 
                      className="flex flex-col items-center justify-center w-full h-full p-0.5"
                      title={`${blockedObj.name} (${blockedObj.evidenceCode}): ${blockedObj.description} [${t.boardBlockedCell}]`}
                    >
                      <span className={`${scaleStyles.blockedEmoji} drop-shadow filter transform group-hover:scale-110 transition-transform`}>
                        {blockedObj.emoji}
                      </span>
                      <span className={`mt-0.5 ${scaleStyles.blockedCode} font-stamp bg-[#3d2e24] text-amber-200 rounded font-bold uppercase tracking-tight shadow`}>
                        {blockedObj.evidenceCode}
                      </span>
                      <div className="absolute inset-0 bg-stone-900/10 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Ban className="w-4 h-4 text-stone-700/60" />
                      </div>
                    </div>
                  ) : occupantSuspect ? (
                    /* PLACED SUSPECT BADGE */
                    <div 
                      className={`relative w-[90%] h-[90%] rounded-full bg-gradient-to-b ${occupantSuspect.color} border sm:border-2 shadow-md flex flex-col items-center justify-center transform transition-transform group-hover:scale-105 select-none ${
                        isCellConflictFlashing ? 'ring-3 sm:ring-4 ring-red-600 animate-pulse' : ''
                      }`}
                      title={`${occupantSuspect.name} [${occupantSuspect.id}] · ${occupantSuspect.role} — ${porIdioma(language, { es: 'Clic para devolver al panel', gl: 'Clic para devolver ao panel', pt: 'Clica para devolver ao painel' })}`}
                    >
                      {/* Suspect Avatar Icon */}
                      <span className={`${scaleStyles.suspectAvatar} leading-none`}>
                        {occupantSuspect.avatar}
                      </span>
                      
                      {/* Suspect Letter Badge */}
                      <span className={`font-typewriter font-bold ${scaleStyles.suspectBadge} text-white tracking-wider leading-none mt-0.5 drop-shadow`}>
                        {occupantSuspect.id}
                      </span>

                      {/* Victim Tag Banner if victim */}
                      {occupantSuspect.isVictim && (
                        <span className={`absolute -bottom-1 bg-red-800 ${scaleStyles.victimTag} text-white rounded font-stamp font-bold tracking-tight shadow`}>
                          {t.toolbarVictimBadge}
                        </span>
                      )}

                      {/* Conflict Warning icon during flashing */}
                      {(isConflict || isCellConflictFlashing) && (
                        <span 
                          className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full p-0.5 shadow-md animate-bounce z-20 border border-white"
                          title={t.boardConflictRowCol}
                        >
                          <AlertTriangle className="w-3 h-3 text-amber-300" />
                        </span>
                      )}

                      {/* Hover Overlay: Clic para devolver al panel */}
                      <div 
                        className="absolute inset-0 bg-stone-900/80 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-[7px] sm:text-[8px] font-mono font-bold shadow-md z-10"
                      >
                        <span className="leading-none">↩</span>
                        <span className="leading-none mt-0.5">{porIdioma(language, { es: 'Quitar', gl: 'Retirar', pt: 'Retirar' })}</span>
                      </div>
                    </div>
                  ) : cell.isX ? (
                    /* MARKED AS IMPOSSIBLE 'X' */
                    <div 
                      className="flex flex-col items-center justify-center w-full h-full relative group/x"
                      title={porIdioma(language, { es: 'Casilla descartada (✕). Clic para desmarcar.', gl: 'Cela descartada (✕). Clic para desmarcar.', pt: 'Casa descartada (✕). Clica para desmarcar.' })}
                    >
                      <span className={`text-red-700 font-extrabold ${scaleStyles.xMark} font-typewriter select-none leading-none`}>
                        ✕
                      </span>
                      <span className={`${scaleStyles.xDesc} font-mono text-red-900/60 uppercase font-semibold`}>
                        {porIdioma(language, { es: 'DESCARTADA', gl: 'DESCARTADA', pt: 'DESCARTADA' })}
                      </span>
                      <div className="absolute inset-0 bg-red-50/70 rounded-lg flex items-center justify-center opacity-0 group-hover/x:opacity-100 transition-opacity text-[7px] sm:text-[8px] font-mono text-red-900 font-bold">
                        {porIdioma(language, { es: 'Quitar ✕', gl: 'Retirar ✕', pt: 'Retirar ✕' })}
                      </div>
                    </div>
                  ) : cell.notes.length > 0 ? (
                    /* PENCIL CANDIDATE NOTES MINI-GRID */
                    <div className={`w-full h-full p-0.5 grid ${scaleStyles.notesCols} items-center justify-items-center ${scaleStyles.notesText} font-typewriter text-stone-700 leading-none`}>
                      {currentCase.suspects.map((s) => (
                        <span 
                          key={s.id} 
                          className={`transition-colors font-bold ${
                            cell.notes.includes(s.id) 
                              ? 'opacity-100 text-stone-900 bg-amber-200/80 rounded px-0.5' 
                              : 'opacity-0'
                          }`}
                        >
                          {s.id}
                        </span>
                      ))}
                    </div>
                  ) : (
                    /* EMPTY CLICKABLE CELL WITH PREVIEWS */
                    <div className="w-full h-full flex items-center justify-center">
                      {activeTool === 'place' && activeSuspectId ? (() => {
                        const activeSuspect = currentCase.suspects.find((s) => s.id === activeSuspectId);
                        if (wouldConflictWithExisting) {
                          return (
                            <div className="w-full h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-95 transition-opacity">
                              <div className="w-[85%] h-[85%] rounded-full border-2 border-dashed border-red-600 bg-red-100/90 flex flex-col items-center justify-center shadow-xs scale-95" title={t.boardConflictRowCol}>
                                <span className="text-xs sm:text-sm leading-none opacity-40 grayscale">
                                  {activeSuspect?.avatar}
                                </span>
                                <span className="text-[6px] sm:text-[7px] font-mono font-bold text-red-800 leading-none mt-0.5">
                                  {porIdioma(language, { es: '🚫 OCUPADO', gl: '🚫 OCUPADA', pt: '🚫 OCUPADA' })}
                                </span>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <div className="w-full h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity">
                            <div className="w-[82%] h-[82%] rounded-full border-2 border-dashed border-[#c6007e] bg-amber-100/70 flex flex-col items-center justify-center shadow-xs scale-95 animate-pulse">
                              <span className={`${scaleStyles.suspectAvatar} leading-none`}>
                                {activeSuspect?.avatar}
                              </span>
                              <span className="text-[8px] sm:text-[9px] font-mono font-bold text-amber-950 leading-none mt-0.5">
                                +{activeSuspectId}
                              </span>
                            </div>
                          </div>
                        );
                      })() : activeTool === 'x' ? (
                        <div className="w-full h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity">
                          <span className={`font-bold text-red-600 font-typewriter select-none animate-pulse leading-none ${scaleStyles.xMark}`}>
                            ✕
                          </span>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-40 transition-opacity">
                          <span className="text-xs font-mono text-stone-400">
                            +
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Legend of Zones / Habitaciones */}
        <div className="mt-4 pt-3 border-t-2 border-theme/20 flex flex-wrap items-center justify-between gap-2 text-xs font-typewriter">
          <div className="flex items-center gap-1.5 text-theme-title font-bold font-murdoku-sans">
            <span className="text-sm" role="img" aria-label="Leyenda de zonas">🗺️</span>
            <span>{t.boardRoomsLabel}</span>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            {(Object.values(currentCase.rooms) as RoomInfo[]).map((room) => {
              const isUsed = currentCase.cellRooms?.some((row) => row.includes(room.id));
              if (!isUsed) return null;
              const roomColor = resolverColorHabitacion(room, room.id);
              const isLegendHovered = hoveredLegendRoomId === room.id;
              return (
                <div 
                  key={room.id}
                  onMouseEnter={() => setHoveredLegendRoomId(room.id)}
                  onMouseLeave={() => setHoveredLegendRoomId(null)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border transition-all cursor-pointer select-none ${
                    isLegendHovered
                      ? 'border-amber-500 ring-2 ring-amber-400 bg-amber-50 dark:bg-stone-800 shadow-md scale-105'
                      : 'border-theme/30 bg-theme-card shadow-2xs hover:border-theme/60 hover:scale-[1.02]'
                  }`}
                  title={`${room.name}: ${room.description || ''} (${porIdioma(language, { es: 'Pasa el cursor para iluminar esta zona en el plano', gl: 'Pasa o cursor para iluminar esta zona no plano', pt: 'Passa o cursor para iluminar esta zona na planta' })})`}
                >
                  <span 
                    className="w-3.5 h-3.5 rounded-full border border-black/30 shadow-xs shrink-0" 
                    style={{ backgroundColor: roomColor.solidColor }}
                  />
                  <span className="text-[11px] font-medium text-theme-primary">
                    {room.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Instructions footer note */}
      <p className="text-[11px] font-typewriter text-theme-secondary mt-2 text-center max-w-lg">
        {t.boardControlsHelp}
      </p>
    </div>
  );
};
