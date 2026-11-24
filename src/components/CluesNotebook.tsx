import React, { useState } from 'react';
import { PuzzleCase, Clue, CellCoord } from '../types';
import { removeCoordinateHints } from '../data/niveles';
import { sounds } from '../audio';
import { useLanguage } from '../i18n/LanguageContext';
import { porIdioma } from '../i18n/porIdioma';
import { 
  ClipboardCheck, 
  CheckSquare, 
  Square, 
  Eye, 
  Info, 
  Users, 
  ShieldAlert, 
  Search, 
  BookOpen 
} from 'lucide-react';

interface CluesNotebookProps {
  currentCase: PuzzleCase;
  onHighlightCells: (cells: CellCoord[]) => void;
  onClearHighlight: () => void;
  checkedClueIds: Set<string>;
  onToggleCheckClue: (clueId: string) => void;
}

export const CluesNotebook: React.FC<CluesNotebookProps> = ({
  currentCase,
  onHighlightCells,
  onClearHighlight,
  checkedClueIds,
  onToggleCheckClue
}) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'clues' | 'suspects' | 'bible' | 'rules'>('clues');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle clue hover to highlight corresponding cells
  const handleClueHover = (clue: Clue) => {
    if (clue.highlightCells && clue.highlightCells.length > 0) {
      onHighlightCells(clue.highlightCells);
      return;
    }

    if (clue.relatedRoomId) {
      const roomCells: CellCoord[] = [];
      for (let r = 0; r < currentCase.gridSize; r++) {
        for (let c = 0; c < currentCase.gridSize; c++) {
          if (currentCase.cellRooms[r][c] === clue.relatedRoomId) {
            roomCells.push({ row: r, col: c });
          }
        }
      }
      onHighlightCells(roomCells);
    }
  };

  return (
    <div id="contenedor-pistas" className="relative w-full bg-theme-panel text-theme-primary border-2 border-theme rounded-xl shadow-xl overflow-hidden flex flex-col h-full min-h-[440px] transition-colors">
      
      {/* Top Spiral Wire Effect */}
      <div className="h-4 w-full bg-[#3d2e24] flex items-center justify-around px-4 border-b border-[#291f19]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-2.5 h-2 rounded-full bg-stone-400 border border-stone-600 shadow-inner" />
        ))}
      </div>

      {/* Notebook Folder Tabs */}
      <div className="flex border-b-2 border-theme/30 bg-theme-tools px-2 pt-2 gap-1 text-xs font-typewriter overflow-x-auto">
        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('clues');
          }}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-t-lg font-bold transition-colors whitespace-nowrap ${
            activeTab === 'clues'
              ? 'bg-theme-panel text-theme-title-accent border-t-2 border-x-2 border-theme -mb-[2px] shadow-xs'
              : 'text-theme-secondary hover:bg-theme-card'
          }`}
        >
          <ClipboardCheck className="w-4 h-4 text-theme-title-accent" />
          <span>{t.cluesTabClues} ({currentCase.clues.length})</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('suspects');
          }}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-t-lg font-bold transition-colors whitespace-nowrap ${
            activeTab === 'suspects'
              ? 'bg-theme-panel text-theme-title-accent border-t-2 border-x-2 border-theme -mb-[2px] shadow-xs'
              : 'text-theme-secondary hover:bg-theme-card'
          }`}
        >
          <Users className="w-4 h-4 text-theme-title-accent" />
          <span>{t.cluesTabSuspects} ({currentCase.suspects.length})</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('bible');
          }}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-t-lg font-bold transition-colors whitespace-nowrap ${
            activeTab === 'bible'
              ? 'bg-theme-panel text-theme-title-accent border-t-2 border-x-2 border-theme -mb-[2px] shadow-xs'
              : 'text-theme-secondary hover:bg-theme-card'
          }`}
        >
          <BookOpen className="w-4 h-4 text-theme-title-accent" />
          <span>{t.cluesTabBible}</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('rules');
          }}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-t-lg font-bold transition-colors whitespace-nowrap ${
            activeTab === 'rules'
              ? 'bg-theme-panel text-theme-title-accent border-t-2 border-x-2 border-theme -mb-[2px] shadow-xs'
              : 'text-theme-secondary hover:bg-theme-card'
          }`}
        >
          <Info className="w-4 h-4 text-theme-title-accent" />
          <span>{t.cluesTabRules}</span>
        </button>
      </div>

      {/* Tab Content Container */}
      <div className="p-3 sm:p-4 overflow-y-auto flex-1 bg-theme-panel">
        
        {/* TAB 1: CLUES */}
        {activeTab === 'clues' && (
          <div className="space-y-3">
            <div className="bg-theme-card border border-amber-400/40 p-2.5 rounded-lg text-xs font-sans text-theme-primary flex items-start gap-2 shadow-2xs">
              <span className="text-base leading-none">🔍</span>
              <p>
                <strong>{porIdioma(language, { es: 'Nota del Investigador:', gl: 'Nota do Investigador:', pt: 'Nota do Investigador:' })}</strong> {t.cluesInspectorNote}
              </p>
            </div>

            <div className="space-y-2">
              {currentCase.clues.map((clue, index) => {
                const isChecked = checkedClueIds.has(clue.id);

                return (
                  <div
                    key={clue.id}
                    onMouseEnter={() => handleClueHover(clue)}
                    onMouseLeave={() => onClearHighlight()}
                    className={`group relative p-3 rounded-lg border transition-all duration-150 ${
                      isChecked
                        ? 'bg-theme-tools/80 border-theme/30 opacity-60'
                        : 'bg-theme-card hover:bg-theme-tools border-theme/30 hover:border-theme hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      {/* Checkbox to mark clue as resolved */}
                      <button
                        onClick={() => {
                          sounds.playStamp();
                          onToggleCheckClue(clue.id);
                        }}
                        className="mt-0.5 text-stone-500 hover:text-stone-300 transition-colors"
                        title={isChecked ? (porIdioma(language, { es: 'Desmarcar pista', gl: 'Desmarcar pista', pt: 'Desmarcar pista' })) : (porIdioma(language, { es: 'Marcar pista como verificada', gl: 'Marcar pista como verificada', pt: 'Marcar pista como verificada' }))}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <Square className="w-4 h-4 text-theme-secondary" />
                        )}
                      </button>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                          <span className="font-stamp text-[10px] font-bold px-1.5 py-0.2 bg-[#3d2e24] text-[#d6b785] rounded">
                            {porIdioma(language, { es: 'PISTA', gl: 'PISTA', pt: 'PISTA' })} #{index + 1}
                          </span>
                          
                          {clue.relatedRoomId && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 bg-theme-tools text-theme-primary rounded font-semibold border border-theme/20">
                              {porIdioma(language, { es: 'ZONA:', gl: 'ZONA:', pt: 'ZONA:' })} {currentCase.rooms[clue.relatedRoomId]?.name}
                            </span>
                          )}

                          {clue.relatedObjectEmoji && (
                            <span className="text-xs">
                              {clue.relatedObjectEmoji}
                            </span>
                          )}
                        </div>

                        <p className={`text-xs sm:text-sm font-murdoku-sans font-bold text-theme-title leading-snug ${
                          isChecked ? 'line-through opacity-50' : ''
                        }`}>
                          {removeCoordinateHints(clue.text)}
                        </p>

                        <p className="text-[11px] font-sans text-theme-secondary mt-1 italic leading-relaxed">
                          "{removeCoordinateHints(clue.narrative)}"
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: SUSPECT DOSSIERS */}
        {activeTab === 'suspects' && (
          <div className="space-y-3">
            <div className="text-xs font-murdoku-sans font-bold text-theme-title border-b border-theme/20 pb-1">
              {porIdioma(language, { es: 'EXPEDIENTES INDIVIDUALES DE LA DIVISIÓN DE HOMICIDIOS', gl: 'EXPEDIENTES INDIVIDUAIS DA DIVISIÓN DE HOMICIDIOS', pt: 'PROCESSOS INDIVIDUAIS DA DIVISÃO DE HOMICÍDIOS' })}
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {currentCase.suspects.map((suspect) => (
                <div
                  key={suspect.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-theme-card border border-theme/30 hover:border-theme transition-all shadow-xs"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-b ${suspect.color} border-2 flex items-center justify-center text-xl shadow-sm shrink-0`}>
                    <span>{suspect.avatar}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="font-murdoku-sans font-bold text-sm text-theme-title">
                          {suspect.name}
                        </span>
                        <span className="text-xs font-mono font-bold px-1.5 py-0.2 bg-theme-tools text-theme-primary rounded border border-theme/20">
                          [{suspect.id}]
                        </span>
                      </div>

                      {suspect.isVictim ? (
                        <span className="text-[9px] font-stamp bg-red-800 text-white px-2 py-0.5 rounded font-bold uppercase">
                          {t.toolbarVictimBadge}
                        </span>
                      ) : (
                        <span className="text-[9px] font-stamp bg-[#3d2e24] text-[#d6b785] px-2 py-0.5 rounded font-bold uppercase">
                          {porIdioma(language, { es: 'SOSPECHOSO', gl: 'SOSPEITOSO', pt: 'SUSPEITO' })}
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-medium text-theme-secondary mt-0.5">
                      {suspect.role}
                    </p>

                    {suspect.notes && (
                      <p className="text-[11px] font-sans text-theme-secondary mt-1 italic">
                        {suspect.notes}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: BIBLE & THEOLOGY DOSSIER */}
        {activeTab === 'bible' && (
          <div className="space-y-4 text-xs text-theme-primary">
            {/* Historical sources and category */}
            <div className="p-3.5 bg-theme-card rounded-lg border border-theme/30 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-bold font-murdoku-sans text-theme-title uppercase tracking-wide text-xs flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-theme-title-accent" />
                  <span>{porIdioma(language, { es: 'Fuentes Históricas Consultadas', gl: 'Fontes Históricas Consultadas', pt: 'Fontes Históricas Consultadas' })}</span>
                </span>
                {currentCase.categoria && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-600/40 font-bold uppercase">
                    {currentCase.categoria}
                  </span>
                )}
              </div>
              <p className="font-mono text-xs font-semibold text-sky-800 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/40 px-2.5 py-1.5 rounded border border-sky-300 dark:border-sky-800/40">
                📖 {currentCase.fuenteHistorica || (porIdioma(language, { es: 'Historia marista', gl: 'Historia marista', pt: 'História marista' }))}
              </p>
            </div>

            {/* Key historical text */}
            {currentCase.textoClave && (
              <div className="p-4 bg-amber-50/80 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded-r-lg shadow-inner">
                <h5 className="font-typewriter text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-1.5">
                  📜 {t.cluesBiblePassage || (porIdioma(language, { es: 'Texto Clave:', gl: 'Texto Clave:', pt: 'Texto-Chave:' }))}
                </h5>
                <blockquote className="font-serif italic text-sm text-theme-title leading-relaxed">
                  «{currentCase.textoClave}»
                </blockquote>
              </div>
            )}

            {/* Theological & Historical Context */}
            {currentCase.contextoHistorico && (
              <div className="p-3.5 bg-theme-card rounded-lg border border-theme/30 space-y-1.5">
                <h5 className="font-bold font-murdoku-sans text-theme-title uppercase tracking-wide text-xs flex items-center gap-1">
                  <span>🕊️ {t.cluesTheologicalContext || (porIdioma(language, { es: 'Contexto Histórico:', gl: 'Contexto Histórico:', pt: 'Contexto Histórico:' }))}</span>
                </h5>
                <p className="text-xs font-sans text-theme-secondary leading-relaxed">
                  {currentCase.contextoHistorico}
                </p>
              </div>
            )}

            {/* Case Background / Story Intro */}
            {currentCase.storyIntro && (
              <div className="p-3 bg-theme-card/60 rounded-lg border border-theme/20">
                <h5 className="font-typewriter text-[11px] font-bold text-theme-title uppercase tracking-wider mb-1">
                  {t.cluesStoryPrologue || (porIdioma(language, { es: 'Antecedentes del Caso', gl: 'Prólogo do Caso e Escenario:', pt: 'Antecedentes do Caso' }))}
                </h5>
                <p className="text-xs font-sans text-theme-secondary leading-relaxed">
                  {currentCase.storyIntro}
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: RULES SUMMARY */}
        {activeTab === 'rules' && (
          <div className="space-y-3 text-xs text-theme-primary">
            <div className="p-3 bg-theme-card rounded-lg border border-theme/30">
              <h4 className="font-bold font-murdoku-sans text-theme-title uppercase tracking-wide text-xs mb-1 flex items-center gap-1">
                <span>1. {t.rulesSudokuTitle}</span>
              </h4>
              <p className="text-[11px] font-sans text-theme-secondary leading-relaxed">
                {t.rulesSudokuDesc}
              </p>
            </div>

            <div className="p-3 bg-theme-card rounded-lg border border-theme/30">
              <h4 className="font-bold font-murdoku-sans text-theme-title uppercase tracking-wide text-xs mb-1 flex items-center gap-1">
                <span>2. {t.rulesObjectsTitle}</span>
              </h4>
              <p className="text-[11px] font-sans text-theme-secondary leading-relaxed">
                {t.rulesObjectsDesc}
              </p>
            </div>

            <div className="p-3 bg-theme-card rounded-lg border border-red-500/40">
              <h4 className="font-bold font-murdoku-sans text-red-600 dark:text-red-400 uppercase tracking-wide text-xs mb-1 flex items-center gap-1">
                <span>3. {t.rulesMurdererTitle}</span>
              </h4>
              <p className="text-[11px] font-sans text-theme-secondary leading-relaxed">
                {t.rulesMurdererDesc}
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
