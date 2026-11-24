import React from 'react';
import { 
  FileText, 
  RotateCcw, 
  Undo2, 
  Redo2, 
  Lightbulb, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause,
  FolderOpen,
  ArrowLeft,
  Printer
} from 'lucide-react';
import { PuzzleCase } from '../types';
import { sounds } from '../audio';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../i18n/LanguageContext';
import { RasgosChips } from './RasgosChips';

interface CaseHeaderProps {
  currentCase: PuzzleCase;
  allCases: PuzzleCase[];
  onSelectCase: (caseId: string) => void;
  onBackToLevelSelect?: () => void;
  timerSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onReset: () => void;
  onOpenRules: () => void;
  onGiveHint: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onDownloadPDF?: () => void;
}

export const CaseHeader: React.FC<CaseHeaderProps> = ({
  currentCase,
  allCases,
  onSelectCase,
  onBackToLevelSelect,
  timerSeconds,
  isTimerRunning,
  onToggleTimer,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onReset,
  onOpenRules,
  onGiveHint,
  soundEnabled,
  onToggleSound,
  onDownloadPDF
}) => {
  const { t } = useLanguage();

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <header className="relative w-full bg-theme-panel text-theme-primary border-b-4 border-[#c6007e] shadow-md transition-colors">
      {/* Top Police Warning Tape Line */}
      <div className="h-2 w-full bg-police-tape opacity-90" />

      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Case Identity & Badge */}
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-theme-card border-2 border-theme flex items-center justify-center shrink-0 shadow-inner">
              <span className="text-2xl" role="img" aria-label="Police Badge">🛡️</span>
            </div>
            
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-stamp tracking-wider text-xs px-2 py-0.5 bg-[#c6007e] text-white rounded font-bold uppercase shadow-xs">
                  {t.confidential}
                </span>
                <span className="font-typewriter text-xs font-semibold px-2 py-0.5 bg-theme-card text-theme-title border border-theme/40 rounded">
                  {currentCase.badge}
                </span>
                <span className="text-xs text-theme-secondary font-typewriter">
                  {t.headerDifficultyLabel} <strong className="text-theme-title-accent">{currentCase.difficulty.toUpperCase()}</strong>
                </span>
                {currentCase.categoria && (
                  <span className="font-mono text-xs px-2 py-0.5 bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-600/40 rounded font-bold uppercase">
                    {currentCase.categoria}
                  </span>
                )}
                {currentCase.fuenteHistorica && (
                  <span className="font-mono text-xs px-2 py-0.5 bg-sky-100 dark:bg-sky-950/50 text-sky-800 dark:text-sky-200 border border-sky-300 dark:border-sky-600/40 rounded font-semibold flex items-center gap-1">
                    <span>📖</span>
                    <span>{currentCase.fuenteHistorica}</span>
                  </span>
                )}
              </div>

              <RasgosChips rasgos={currentCase.rasgos} className="mt-1" />

              <h1 className="text-xl sm:text-2xl font-bold font-murdoku-sans tracking-tight text-theme-title mt-1">
                {currentCase.title}
              </h1>
              <p className="text-xs sm:text-sm text-theme-secondary font-sans italic">
                {currentCase.subtitle}
              </p>
            </div>
          </div>

          {/* Dossier Controls Toolbar */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3 bg-theme-card/80 p-2 rounded-lg border border-theme/30">
            
            {/* Back to Level Selection Button */}
            {onBackToLevelSelect && (
              <button
                id="btn-header-volver-niveles"
                onClick={() => {
                  sounds.playClick();
                  onBackToLevelSelect();
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-theme-tools hover:bg-theme-panel border border-theme/40 text-theme-title-accent text-xs font-typewriter font-semibold transition-all cursor-pointer shadow-xs active:scale-95"
                title={t.headerBackToLevels}
              >
                <ArrowLeft className="w-3.5 h-3.5 text-theme-title-accent" />
                <span className="hidden sm:inline font-bold">{t.headerBackToLevels.replace(/^Volver a /, '')}</span>
              </button>
            )}

            {/* Case Selector Dropdown */}
            {allCases.length > 1 && (
              <div className="flex items-center gap-1 bg-theme-tools px-2 py-1.5 rounded border border-theme/40">
                <FolderOpen className="w-4 h-4 text-theme-title-accent" />
                <select
                  aria-label="Seleccionar caso de investigación"
                  className="bg-transparent text-xs font-typewriter text-theme-title focus:outline-none cursor-pointer"
                  value={currentCase.id}
                  onChange={(e) => {
                    sounds.playStamp();
                    onSelectCase(e.target.value);
                  }}
                >
                  {allCases.map((c) => (
                    <option key={c.id} value={c.id} className="bg-theme-panel text-theme-title">
                      {c.title.split(':')[0]} ({c.gridSize}x{c.gridSize})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Investigation Stopwatch */}
            <button
              onClick={() => {
                sounds.playClick();
                onToggleTimer();
              }}
              title={isTimerRunning ? t.headerTimerPause : t.headerTimerStart}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-theme-tools hover:bg-theme-panel border border-theme/40 text-xs font-typewriter transition-colors cursor-pointer"
            >
              {isTimerRunning ? (
                <Pause className="w-3.5 h-3.5 text-amber-500" />
              ) : (
                <Play className="w-3.5 h-3.5 text-emerald-500" />
              )}
              <span className="font-mono font-bold text-theme-title">
                {formatTime(timerSeconds)}
              </span>
            </button>

            {/* Undo / Redo */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  sounds.playClick();
                  onUndo();
                }}
                disabled={!canUndo}
                title={t.headerUndo}
                className="p-1.5 rounded bg-theme-tools hover:bg-theme-panel disabled:opacity-40 disabled:cursor-not-allowed border border-theme/40 text-xs text-theme-primary transition-colors cursor-pointer"
              >
                <Undo2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  sounds.playClick();
                  onRedo();
                }}
                disabled={!canRedo}
                title={t.headerRedo}
                className="p-1.5 rounded bg-theme-tools hover:bg-theme-panel disabled:opacity-40 disabled:cursor-not-allowed border border-theme/40 text-xs text-theme-primary transition-colors cursor-pointer"
              >
                <Redo2 className="w-4 h-4" />
              </button>
            </div>

            {/* Hint Button */}
            <button
              onClick={() => {
                sounds.playClick();
                onGiveHint();
              }}
              title={t.headerInspectorHint}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-amber-100 dark:bg-[#3d321d] hover:bg-amber-200 dark:hover:bg-[#524326] border border-amber-400 dark:border-[#b88c3a]/50 text-amber-900 dark:text-amber-200 text-xs font-typewriter font-bold transition-colors cursor-pointer"
            >
              <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="hidden sm:inline">Pista</span>
            </button>

            {/* Reset Board */}
            <button
              onClick={() => {
                sounds.playStamp();
                onReset();
              }}
              title={t.headerResetBoard}
              className="p-1.5 rounded bg-theme-tools hover:bg-theme-panel border border-theme/40 text-theme-primary text-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                onToggleSound();
              }}
              title={soundEnabled ? t.headerSoundMute : t.headerSoundUnmute}
              className="p-1.5 rounded bg-theme-tools hover:bg-theme-panel border border-theme/40 text-theme-primary text-xs transition-colors cursor-pointer"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-emerald-500" />
              ) : (
                <VolumeX className="w-4 h-4 text-theme-secondary" />
              )}
            </button>

            {/* Language Toggle (Castellano / Galego) */}
            <LanguageToggle variant="compact" />

            {/* Theme Toggle (Light / Dark Mode) */}
            <ThemeToggle variant="compact" />

            {/* Descargar PDF (Aula) */}
            <button
              id="btn-imprimir"
              type="button"
              onClick={() => {
                sounds.playClick();
                if (onDownloadPDF) {
                  onDownloadPDF();
                } else if (typeof (window as unknown as { prepararImpresion?: () => void }).prepararImpresion === 'function') {
                  (window as unknown as { prepararImpresion?: () => void }).prepararImpresion?.();
                }
              }}
              title={t.headerDownloadPdfTooltip}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-800 hover:bg-stone-700 text-amber-300 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-amber-300 border border-stone-600/80 text-xs font-typewriter font-bold shadow-xs transition-all cursor-pointer active:scale-95"
            >
              <Printer className="w-4 h-4 text-amber-400 pointer-events-none" />
              <span className="pointer-events-none">{t.headerDownloadPdf}</span>
            </button>

            {/* Rules / Guide */}
            <button
              onClick={() => {
                sounds.playClick();
                onOpenRules();
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded bg-[#c6007e] hover:bg-[#a63434] text-white text-xs font-typewriter font-bold shadow transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.headerRules}</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
