import React from 'react';
import { PuzzleCase, Suspect, CellState } from '../types';
import { removeCoordinateHints } from '../data/niveles';
import { describirPistaPosicion, pistaCompletaPersonaje } from '../utils/pistasPosicion';
import { sounds } from '../audio';
import { useLanguage } from '../i18n/LanguageContext';
import { Pencil, Eraser, X, CheckCircle2, RotateCcw, User, Skull } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { porIdioma } from '../i18n/porIdioma';

interface SuspectsToolbarProps {
  currentCase: PuzzleCase;
  grid: CellState[][];
  activeSuspectId: string | null;
  onSelectSuspect: (suspectId: string | null) => void;
  onUnplaceSuspect?: (suspectId: string) => void;
  activeTool: 'place' | 'x' | 'erase' | 'notes';
  onChangeTool: (tool: 'place' | 'x' | 'erase' | 'notes') => void;
  isNotesMode: boolean;
  onToggleNotesMode: () => void;
  onHighlightCells?: (cells: { row: number; col: number }[]) => void;
}

export const SuspectsToolbar: React.FC<SuspectsToolbarProps> = ({
  currentCase,
  grid,
  activeSuspectId,
  onSelectSuspect,
  onUnplaceSuspect,
  activeTool,
  onChangeTool,
  isNotesMode,
  onToggleNotesMode,
  onHighlightCells
}) => {
  const { t, language } = useLanguage();

  // Map suspect IDs to their board coordinates (if placed)
  const placedSuspectLocations = React.useMemo(() => {
    const map = new Map<string, { row: number; col: number }>();
    for (let r = 0; r < currentCase.gridSize; r++) {
      for (let c = 0; c < currentCase.gridSize; c++) {
        const occ = grid[r]?.[c]?.occupant;
        if (occ) {
          map.set(occ, { row: r, col: c });
        }
      }
    }
    return map;
  }, [grid, currentCase.gridSize]);

  return (
    <div id="character-panel" className="w-full bg-theme-panel text-theme-primary border-2 border-theme rounded-xl p-3 sm:p-4 shadow-lg transition-colors">
      {/* Panel Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b-2 border-theme/20">
        <div className="flex items-center gap-2">
          <span className="text-lg" role="img" aria-label="Police badge">📁</span>
          <div>
            <h3 className="text-xs sm:text-sm font-bold font-murdoku-sans tracking-wide text-theme-title uppercase flex items-center gap-1.5">
              <span>{t.toolbarTitle}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-theme-tools text-theme-secondary font-normal normal-case border border-theme/20">
                {currentCase.suspects.length - 1} {t.toolbarSuspectsCount}
              </span>
            </h3>
            <p className="text-[11px] text-theme-secondary font-sans italic">
              {t.toolbarInstruction}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-theme-secondary hidden sm:inline">
            {porIdioma(language, { es: 'COLOCADOS:', gl: 'COLOCADOS:', pt: 'COLOCADOS:' })}
          </span>
          <span className="px-2 py-0.5 rounded bg-[#3d2e24] text-amber-300 font-bold tracking-wider">
            {placedSuspectLocations.size} / {currentCase.suspects.length}
          </span>
        </div>
      </div>

      {/* Suspects & Victim Cards Grid (scales dynamically based on suspects count) */}
      <div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2.5 mb-3"
        style={currentCase.suspects.length > 7 ? { gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))' } : undefined}
      >
        {currentCase.suspects.map((suspect: Suspect) => {
          const isSelected = activeTool === 'place' && activeSuspectId === suspect.id;
          const location = placedSuspectLocations.get(suspect.id);
          const isPlaced = Boolean(location);

          return (
            <div
              key={suspect.id}
              className={`relative flex flex-col items-center text-center p-2 rounded-lg border-2 transition-all duration-150 ${
                isSelected
                  ? 'bg-amber-100 dark:bg-amber-950/60 border-[#8c2a2a] shadow-md scale-[1.02] ring-2 ring-[#8c2a2a]/50 text-stone-900 dark:text-amber-100'
                  : isPlaced
                  ? 'bg-theme-tools border-theme/50 shadow-inner text-theme-secondary'
                  : 'bg-theme-card hover:bg-theme-panel border-theme/40 hover:border-theme shadow-xs text-theme-primary'
              }`}
            >
              {/* Top Status Tag */}
              <div className="w-full flex items-center justify-between gap-1 mb-1">
                <span className="text-[9px] font-mono font-bold px-1 bg-theme-tools text-theme-primary rounded border border-theme/20">
                  [{suspect.id}]
                </span>

                {isPlaced ? (
                  <span 
                    className="inline-flex items-center gap-0.5 text-[8px] font-mono font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-1 py-0.5 rounded border border-emerald-300 dark:border-emerald-700"
                    title={porIdioma(language, { es: 'Ubicado en el tablero', gl: 'Situado no taboleiro', pt: 'Colocado no tabuleiro' })}
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{porIdioma(language, { es: 'En tablero', gl: 'No taboleiro', pt: 'No tabuleiro' })}</span>
                  </span>
                ) : (
                  <span className="text-[8px] font-mono text-theme-secondary italic">
                    {porIdioma(language, { es: 'En panel', gl: 'No panel', pt: 'No painel' })}
                  </span>
                )}
              </div>

              {/* Character Avatar Icon & Select Button */}
              <button
                id={`btn-select-character-${suspect.id}`}
                onClick={() => {
                  sounds.playClick();
                  onChangeTool('place');
                  onSelectSuspect(suspect.id);
                }}
                className="w-full flex flex-col items-center cursor-pointer group"
                title={
                  isPlaced
                    ? `${suspect.name} ${porIdioma(language, { es: 'está en el tablero. Haz clic para seleccionarlo y moverlo.', gl: 'está no taboleiro. Fai clic para seleccionalo e movelo.', pt: 'está no tabuleiro. Clica para a selecionar e mover.' })}`
                    : `${porIdioma(language, { es: 'Seleccionar a', gl: 'Seleccionar a', pt: 'Selecionar' })} ${suspect.name} ${t.toolbarSelectToPlace}`
                }
              >
                <div 
                  className={`w-11 h-11 rounded-full bg-gradient-to-b ${suspect.color} border-2 flex items-center justify-center text-xl shadow-sm mb-1.5 transition-transform group-hover:scale-110 ${
                    isSelected ? 'ring-2 ring-amber-500 scale-105' : ''
                  }`}
                >
                  <span>{suspect.avatar}</span>
                </div>

                <span className="font-murdoku-sans font-bold text-xs text-theme-title leading-tight">
                  {suspect.name}
                </span>
                
                <span className="text-[10px] text-theme-secondary truncate max-w-[95%]">
                  {suspect.isVictim ? (porIdioma(language, { es: '💀 Víctima', gl: '💀 Vítima', pt: '💀 Vítima' })) : suspect.role}
                </span>
              </button>

              {/* Action Buttons: Selected state or Unplace button */}
              <div className="w-full mt-2 pt-1.5 border-t border-theme/20 flex items-center justify-center">
                {isSelected ? (
                  <span className="text-[9px] font-typewriter font-bold text-[#8c2a2a] dark:text-amber-300 animate-pulse">
                    ● {porIdioma(language, { es: 'LISTO P/ COLOCAR', gl: 'LISTO P/ SITUAR', pt: 'PRONTO A COLOCAR' })}
                  </span>
                ) : isPlaced ? (
                  <button
                    onClick={() => {
                      sounds.playErase();
                      if (onUnplaceSuspect) {
                        onUnplaceSuspect(suspect.id);
                      }
                    }}
                    className="w-full py-0.5 px-1 bg-theme-tools hover:bg-red-100 hover:text-red-800 text-theme-primary rounded text-[9px] font-mono font-semibold flex items-center justify-center gap-1 transition-colors border border-theme/20"
                    title={porIdioma(language, { es: 'Devolver este personaje al panel', gl: 'Devolver esta personaxe ao panel', pt: 'Devolver esta personagem ao painel' })}
                  >
                    <RotateCcw className="w-2.5 h-2.5" />
                    <span>{porIdioma(language, { es: 'Devolver', gl: 'Devolver', pt: 'Devolver' })}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      sounds.playClick();
                      onChangeTool('place');
                      onSelectSuspect(suspect.id);
                    }}
                    className="w-full py-0.5 px-1 bg-amber-200/80 hover:bg-amber-300 dark:bg-amber-900/60 dark:hover:bg-amber-800 dark:text-amber-100 text-amber-950 rounded text-[9px] font-typewriter font-bold transition-colors"
                  >
                    {porIdioma(language, { es: 'Seleccionar', gl: 'Seleccionar', pt: 'Selecionar' })}
                  </button>
                )}
              </div>

              {/* Deduction Clue assigned under this character */}
              {(suspect.clueText || suspect.pistasPosicion?.length) && (
                <div
                  id={`clue-box-${suspect.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    sounds.playClick();
                    const matchingClue = currentCase.clues.find(
                      (c) =>
                        c.relatedSuspects?.includes(suspect.id) &&
                        c.highlightCells &&
                        c.highlightCells.length > 0
                    );
                    if (matchingClue?.highlightCells && onHighlightCells) {
                      onHighlightCells(matchingClue.highlightCells);
                    }
                  }}
                  className="w-full mt-2 p-1.5 rounded-md bg-theme-clue hover:bg-theme-panel border border-theme/30 hover:border-theme text-left shadow-2xs transition-all cursor-pointer group/clue"
                  title={`${porIdioma(language, { es: 'Pista de deducción para', gl: 'Pista de dedución para', pt: 'Pista de dedução para' })} ${suspect.name}: ${pistaCompletaPersonaje({ ...suspect, clueText: removeCoordinateHints(suspect.clueText) }, currentCase, language)}`}
                >
                  <div className="flex items-center justify-between text-[8px] font-mono font-bold text-theme-title-accent uppercase tracking-wider mb-0.5">
                    <span className="flex items-center gap-0.5">
                      <span>📜</span>
                      <span>{porIdioma(language, { es: 'PISTA:', gl: 'PISTA:', pt: 'PISTA:' })}</span>
                    </span>
                    <span className="text-[8px] text-theme-secondary font-sans font-normal opacity-70 group-hover/clue:opacity-100">
                      {porIdioma(language, { es: 'ver', gl: 'ver', pt: 'ver' })}
                    </span>
                  </div>
                  {suspect.clueText && (
                    <p className="text-[10px] sm:text-[11px] font-murdoku-sans font-semibold text-theme-title leading-tight">
                      {removeCoordinateHints(suspect.clueText)}
                    </p>
                  )}
                  {/* Pistas de posición verificables (estancia, fila/columna de objetos, orientación...) */}
                  {suspect.pistasPosicion && suspect.pistasPosicion.length > 0 && (
                    <ul className="mt-1 space-y-0.5">
                      {suspect.pistasPosicion.map((p, i) => (
                        <li
                          key={i}
                          className="text-[9.5px] sm:text-[10.5px] font-sans text-theme-title leading-tight flex gap-1"
                        >
                          <span aria-hidden="true">🔎</span>
                          <span>{describirPistaPosicion(p, currentCase, language)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Forensic Tools Bar (Herramienta Equis ❌, Borrador, Modo Notas) */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t-2 border-theme/20">
        
        <div className="flex items-center gap-2 flex-wrap">
          {/* Herramienta Equis (❌) */}
          <button
            id="tool-btn-x"
            onClick={() => {
              sounds.playClick();
              onChangeTool('x');
              onSelectSuspect(null);
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border-2 text-xs font-typewriter font-bold transition-all shadow-xs cursor-pointer ${
              activeTool === 'x'
                ? 'bg-red-800 text-white border-red-950 shadow-md ring-2 ring-red-500/50 scale-[1.03]'
                : 'bg-theme-card hover:bg-theme-panel border-theme/40 hover:border-red-500 text-red-600 dark:text-red-400'
            }`}
            title={t.toolbarToolX}
          >
            <span className="text-sm font-extrabold leading-none text-red-500 bg-red-100 dark:bg-red-950 px-1 py-0.2 rounded border border-red-300 dark:border-red-800">
              ❌
            </span>
            <span>{t.toolbarToolX}</span>
            {activeTool === 'x' && (
              <span className="text-[9px] bg-red-950 text-red-200 px-1 rounded font-mono font-semibold">
                {porIdioma(language, { es: 'ACTIVA', gl: 'ACTIVA', pt: 'ATIVA' })}
              </span>
            )}
          </button>

          {/* Erase Tool */}
          <button
            id="tool-btn-erase"
            onClick={() => {
              sounds.playClick();
              onChangeTool('erase');
              onSelectSuspect(null);
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border-2 text-xs font-typewriter font-bold transition-all shadow-xs cursor-pointer ${
              activeTool === 'erase'
                ? 'bg-stone-800 text-white border-stone-950 shadow-md ring-2 ring-stone-500/50 scale-[1.03]'
                : 'bg-theme-card hover:bg-theme-panel border-theme/40 text-theme-primary'
            }`}
            title={t.toolbarToolErase}
          >
            <Eraser className="w-3.5 h-3.5 text-stone-500" />
            <span>{t.toolbarToolErase}</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Notes / Pencil Mode Toggle */}
          <button
            id="tool-btn-notes"
            onClick={() => {
              sounds.playClick();
              onToggleNotesMode();
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border-2 text-xs font-typewriter font-bold transition-all shadow-xs cursor-pointer ${
              isNotesMode
                ? 'bg-amber-600 text-white border-amber-800 shadow-md ring-2 ring-amber-400/50'
                : 'bg-theme-card hover:bg-theme-panel border-theme/40 text-theme-primary'
            }`}
            title={t.toolbarToolNotes}
          >
            <Pencil className="w-3.5 h-3.5" />
            <span>{t.toolbarToolNotes}</span>
            <span className={`text-[10px] px-1 py-0.2 rounded font-mono ${
              isNotesMode ? 'bg-amber-800 text-amber-100' : 'bg-theme-tools text-theme-secondary'
            }`}>
              {isNotesMode ? 'ON' : 'OFF'}
            </span>
          </button>

          {/* Theme Toggle in Tools Column */}
          <ThemeToggle variant="compact" />
        </div>

      </div>
    </div>
  );
};

