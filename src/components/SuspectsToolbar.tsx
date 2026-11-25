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
      <div className="flex items-start justify-between gap-3 pb-2.5 mb-3 border-b-2 border-theme/20">
        <div className="flex items-start gap-2 min-w-0">
          <span className="text-lg leading-none mt-0.5" role="img" aria-label="Police badge">📁</span>
          <div className="min-w-0">
            <h3 className="text-sm font-bold font-murdoku-sans tracking-wide text-theme-title uppercase flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>{t.toolbarTitle}</span>
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-theme-tools text-theme-secondary font-normal normal-case border border-theme/20">
                {currentCase.suspects.length - 1} {t.toolbarSuspectsCount}
              </span>
            </h3>
            <p className="text-xs text-theme-secondary font-sans italic mt-1 leading-snug">
              {t.toolbarInstruction}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono shrink-0">
          <span className="text-theme-secondary hidden sm:inline">
            {porIdioma(language, { es: 'COLOCADOS:', gl: 'COLOCADOS:', pt: 'COLOCADOS:' })}
          </span>
          <span
            className="px-2 py-0.5 rounded bg-[#3d2e24] text-amber-300 font-bold tracking-wider whitespace-nowrap"
            title={porIdioma(language, { es: 'Personajes colocados', gl: 'Personaxes situados', pt: 'Personagens colocadas' })}
          >
            {placedSuspectLocations.size} / {currentCase.suspects.length}
          </span>
        </div>
      </div>

      {/* Tarjetas de personajes: columnas de al menos ~210 px para que nombres y pistas
          respiren (1 columna en móvil, 2-3 en tableta y escritorio). */}
      <div
        className="grid gap-3 mb-3 rejilla-personajes"
        style={{ ['--n' as string]: Math.min(currentCase.suspects.length, 6) } as React.CSSProperties}
        data-n={currentCase.suspects.length}
      >
        {currentCase.suspects.map((suspect: Suspect) => {
          const isSelected = activeTool === 'place' && activeSuspectId === suspect.id;
          const location = placedSuspectLocations.get(suspect.id);
          const isPlaced = Boolean(location);
          const seleccionar = () => {
            sounds.playClick();
            onChangeTool('place');
            onSelectSuspect(suspect.id);
          };

          return (
            <div
              key={suspect.id}
              className={`relative flex flex-col gap-2 p-2.5 sm:p-3 rounded-lg border-2 min-w-0 transition-all duration-150 ${
                isSelected
                  ? 'bg-panel-seleccion border-[#c6007e] shadow-md ring-2 ring-[#c6007e]/40'
                  : isPlaced
                  ? 'bg-theme-tools border-theme/40 shadow-inner'
                  : 'bg-theme-card hover:bg-theme-panel border-theme/40 hover:border-theme shadow-xs'
              }`}
            >
              {/* Cabecera: avatar + nombre + papel */}
              <button
                id={`btn-select-character-${suspect.id}`}
                onClick={seleccionar}
                className="w-full flex items-start gap-2.5 text-left cursor-pointer group"
                title={
                  isPlaced
                    ? `${suspect.name} ${porIdioma(language, { es: 'está en el tablero. Haz clic para seleccionarlo y moverlo.', gl: 'está no taboleiro. Fai clic para seleccionalo e movelo.', pt: 'está no tabuleiro. Clica para a selecionar e mover.' })}`
                    : `${porIdioma(language, { es: 'Seleccionar a', gl: 'Seleccionar a', pt: 'Selecionar' })} ${suspect.name} ${t.toolbarSelectToPlace}`
                }
              >
                <div
                  className={`w-11 h-11 shrink-0 rounded-full bg-gradient-to-b ${suspect.color} border-2 flex items-center justify-center text-xl shadow-sm transition-transform group-hover:scale-110 ${
                    isSelected ? 'ring-2 ring-amber-500 scale-105' : ''
                  } ${isPlaced && !isSelected ? 'opacity-70' : ''}`}
                >
                  <span>{suspect.avatar}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block font-murdoku-sans font-bold text-sm text-theme-title leading-snug break-words">
                    {suspect.name}
                  </span>
                  <span className="block text-xs text-theme-secondary leading-snug mt-0.5 break-words">
                    {suspect.isVictim ? (porIdioma(language, { es: '💀 Víctima', gl: '💀 Vítima', pt: '💀 Vítima' })) : suspect.role}
                  </span>
                </div>
              </button>

              {/* Estado + acción en una sola línea */}
              <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5 pt-2 border-t border-theme/20">
                <span className="flex items-center gap-1.5 min-w-0">
                  <span className="text-[10px] font-mono font-bold px-1 bg-theme-tools text-theme-primary rounded border border-theme/20">
                    {suspect.id}
                  </span>
                  {isPlaced ? (
                    <span
                      className="inline-flex items-center gap-0.5 whitespace-nowrap text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-1 py-0.5 rounded border border-emerald-300"
                      title={porIdioma(language, { es: 'Ubicado en el tablero', gl: 'Situado no taboleiro', pt: 'Colocado no tabuleiro' })}
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{porIdioma(language, { es: 'En tablero', gl: 'No taboleiro', pt: 'No tabuleiro' })}</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-theme-secondary italic whitespace-nowrap">
                      {porIdioma(language, { es: 'En panel', gl: 'No panel', pt: 'No painel' })}
                    </span>
                  )}
                </span>

                {isSelected ? (
                  <span className="text-[10px] font-typewriter font-bold text-theme-title-accent animate-pulse whitespace-nowrap">
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
                    className="shrink-0 py-1 px-2 bg-theme-card hover:bg-red-100 hover:text-red-800 text-theme-primary rounded text-[11px] font-mono font-semibold flex items-center gap-1 transition-colors border border-theme/30"
                    title={porIdioma(language, { es: 'Devolver este personaje al panel', gl: 'Devolver esta personaxe ao panel', pt: 'Devolver esta personagem ao painel' })}
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{porIdioma(language, { es: 'Devolver', gl: 'Devolver', pt: 'Devolver' })}</span>
                  </button>
                ) : (
                  <button
                    onClick={seleccionar}
                    className="shrink-0 py-1 px-2.5 bg-amber-200 hover:bg-amber-300 text-amber-950 rounded text-[11px] font-typewriter font-bold transition-colors"
                  >
                    {porIdioma(language, { es: 'Seleccionar', gl: 'Seleccionar', pt: 'Selecionar' })}
                  </button>
                )}
              </div>

              {/* Pista de deducción del personaje */}
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
                  className="flex-1 w-full min-w-0 px-2.5 py-2 rounded-md bg-theme-clue border border-theme/25 hover:border-theme text-left transition-colors cursor-pointer"
                  title={`${porIdioma(language, { es: 'Pista de deducción para', gl: 'Pista de dedución para', pt: 'Pista de dedução para' })} ${suspect.name}: ${pistaCompletaPersonaje({ ...suspect, clueText: removeCoordinateHints(suspect.clueText) }, currentCase, language)}`}
                >
                  <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-theme-title-accent uppercase tracking-wider mb-1">
                    <span aria-hidden="true">📜</span>
                    <span>{porIdioma(language, { es: 'Pista', gl: 'Pista', pt: 'Pista' })}</span>
                  </div>
                  {suspect.clueText && (
                    <p className="text-[13px] font-sans font-medium text-theme-title leading-snug break-words">
                      {removeCoordinateHints(suspect.clueText)}
                    </p>
                  )}
                  {/* Pistas de posición verificables (estancia, fila/columna de objetos, orientación...) */}
                  {suspect.pistasPosicion && suspect.pistasPosicion.length > 0 && (
                    <ul className="mt-2 pt-2 border-t border-theme/15 space-y-1">
                      {suspect.pistasPosicion.map((p, i) => (
                        <li
                          key={i}
                          className="text-xs font-sans text-theme-primary leading-snug flex gap-1.5 break-words"
                        >
                          <span aria-hidden="true" className="shrink-0">🔎</span>
                          <span className="min-w-0">{describirPistaPosicion(p, currentCase, language)}</span>
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
                : 'bg-theme-card hover:bg-theme-panel border-theme/40 hover:border-red-500 text-red-500'
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

