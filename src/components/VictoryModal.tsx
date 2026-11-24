import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { PuzzleCase, MurdererEvaluation } from '../types';
import { sounds } from '../audio';
import { useLanguage } from '../i18n/LanguageContext';
import { Clock, CheckCircle2, RotateCcw, ArrowRight, ShieldCheck } from 'lucide-react';
import { porIdioma } from '../i18n/porIdioma';
import { RasgosChips } from './RasgosChips';

interface VictoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCase: PuzzleCase;
  timerSeconds: number;
  movesCount: number;
  onRestart: () => void;
  evaluation?: MurdererEvaluation | null;
  onNextCase?: () => void;
  hasNextCase?: boolean;
  onBackToLevelSelect?: () => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({
  isOpen,
  onClose,
  currentCase,
  timerSeconds,
  movesCount,
  onRestart,
  evaluation,
  onNextCase,
  hasNextCase,
  onBackToLevelSelect
}) => {
  const { t, language } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      sounds.playSuccess();
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Use dynamically evaluated murderer or fallback to currentCase.murdererId
  const murderer =
    evaluation?.murderer || currentCase.suspects.find((s) => s.id === currentCase.murdererId);
  const victim =
    evaluation?.victim || currentCase.suspects.find((s) => s.isVictim || s.id === currentCase.victimId);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}m ${s}s`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#fcf8ef] border-4 border-[#1e5128] rounded-xl shadow-2xl p-6 sm:p-7 overflow-hidden text-stone-900 max-h-[90vh] overflow-y-auto">
        
        {/* Top Victory Bar */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-emerald-700" />

        {/* Case Solved Stamp */}
        <div className="absolute -top-2 -right-2 transform rotate-12 pointer-events-none opacity-90">
          <div className="border-3 border-emerald-700 text-emerald-900 font-stamp text-xs px-3 py-1 font-extrabold uppercase tracking-widest bg-emerald-50 rounded shadow-md">
            {porIdioma(language, { es: '¡CASO RESUELTO!', gl: '¡CASO RESOLTO!', pt: 'CASO RESOLVIDO!' })}
          </div>
        </div>

        {/* Icon & Title */}
        <div className="text-center mt-1">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 border-2 border-emerald-700 text-2xl shadow-inner mb-2">
            🏆
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-typewriter uppercase tracking-tight text-stone-900">
            {t.victoryTitle}
          </h2>
          <p className="text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider mt-0.5">
            {porIdioma(language, { es: 'DEDUCCIÓN POLICIAL FORENSE', gl: 'DEDUCIÓN POLICIAL FORENSE', pt: 'DEDUÇÃO POLICIAL FORENSE' })} · {currentCase.title}
          </p>
        </div>

        {/* GEOMETRIC DEDUCTION RULE EVALUATION CARD */}
        <div className="my-4 p-4 rounded-xl bg-amber-50/90 border-2 border-amber-600/50 shadow-sm text-left">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-950">
              {porIdioma(language, { es: 'REGLA FINAL DE DEDUCCIÓN DEL CULPABLE', gl: 'REGRA FINAL DE DEDUCIÓN DO CULPABLE', pt: 'REGRA FINAL DE DEDUÇÃO DO CULPADO' })}
            </span>
          </div>

          <div className="p-2.5 bg-white/90 rounded-lg border border-amber-200/80 mb-3 shadow-2xs">
            <p className="text-xs font-serif italic text-stone-800 leading-relaxed">
              «{porIdioma(language, { es: 'El culpable es el único sospechoso que se encuentra en la misma zona (color/habitación) que la víctima (💀) y no hay nadie más en esa zona con ellos.', gl: 'O culpable é o único sospeitoso que se atopa na mesma zona (cor/habitación) ca vítima (💀) e non hai ninguén máis nesa zona con eles.', pt: 'O culpado é o único suspeito que se encontra na mesma zona (cor/divisão) que a vítima (💀) e não há mais ninguém nessa zona com eles.' })}»
            </p>
          </div>

          {evaluation && (
            <div className="space-y-1.5 text-xs font-typewriter bg-[#f6eee0] p-2.5 rounded-lg border border-[#d6c7b0]">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-stone-600 font-sans font-medium">{porIdioma(language, { es: 'Zona del crimen:', gl: 'Zona do crime:', pt: 'Zona do crime:' })}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${evaluation.victimRoom?.tagColor || 'bg-stone-200'}`}>
                  {evaluation.victimRoom?.name || (porIdioma(language, { es: 'Habitación', gl: 'Habitación', pt: 'Divisão' }))}
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-stone-600 font-sans font-medium">{porIdioma(language, { es: 'Personas en esa zona:', gl: 'Persoas nesa zona:', pt: 'Pessoas nessa zona:' })}</span>
                <span className="font-bold text-stone-900">
                  {victim?.avatar} {victim?.name} + {murderer?.avatar} {murderer?.name} {porIdioma(language, { es: '(a solas)', gl: '(a soas)', pt: '(a sós)' })}
                </span>
              </div>
              <p className="text-[11px] text-emerald-950 font-sans font-semibold pt-1.5 border-t border-[#dfd2be] leading-normal">
                ✓ {evaluation.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Culprit Card */}
        {murderer && (
          <div className="my-3.5 p-3.5 rounded-xl bg-white border-2 border-red-800/40 shadow-sm flex items-center gap-3.5">
            <div className={`w-13 h-13 rounded-full bg-gradient-to-b ${murderer.color} border-2 flex items-center justify-center text-2xl shadow-md shrink-0`}>
              <span>{murderer.avatar}</span>
            </div>

            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-stamp px-2 py-0.5 bg-red-800 text-white rounded font-bold uppercase tracking-wider">
                {porIdioma(language, { es: 'CULPABLE IDENTIFICADO', gl: 'CULPABLE IDENTIFICADO', pt: 'CULPADO IDENTIFICADO' })}
              </span>
              <h3 className="font-typewriter font-bold text-base text-stone-900 mt-1">
                {murderer.name} [{murderer.id}]
              </h3>
              <p className="text-xs text-stone-600 truncate">
                {murderer.role}
              </p>
            </div>
          </div>
        )}

        {/* Narrative Epilogue */}
        {currentCase.epilogue && (
          <div className="p-3 bg-[#f3ede0] border border-[#d6cdbe] rounded-lg text-xs font-sans text-stone-700 leading-relaxed italic mb-3.5 text-left">
            "{currentCase.epilogue}"
          </div>
        )}

        {/* Historical solution explanation */}
        {(currentCase.solucionExplicacion || currentCase.textoClave) && (
          <div className="p-3.5 bg-amber-50/90 border border-amber-300 rounded-xl text-left mb-3.5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <span>📖</span>
                <span>{porIdioma(language, { es: 'Resolución Histórica', gl: 'Resolución Histórica', pt: 'Resolução Histórica' })}</span>
              </span>
              {currentCase.fuenteHistorica && (
                <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-200/80 text-amber-950 font-bold rounded">
                  {currentCase.fuenteHistorica}
                </span>
              )}
            </div>

            <RasgosChips rasgos={currentCase.rasgos} />

            {currentCase.solucionExplicacion && (
              <p className="text-xs font-sans text-stone-800 leading-relaxed">
                {currentCase.solucionExplicacion}
              </p>
            )}

            {currentCase.textoClave && (
              <blockquote className="font-serif italic text-xs text-amber-950 bg-white/80 p-2.5 rounded border border-amber-200">
                «{currentCase.textoClave}»
              </blockquote>
            )}

            {currentCase.contextoHistorico && (
              <div className="pt-1.5 border-t border-amber-200/80">
                <span className="block text-[10px] font-mono text-amber-800 uppercase font-bold mb-0.5">
                  {porIdioma(language, { es: 'Contexto Histórico:', gl: 'Contexto Histórico:', pt: 'Contexto Histórico:' })}
                </span>
                <p className="text-[11px] font-sans text-stone-600 leading-relaxed">
                  {currentCase.contextoHistorico}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          <div className="p-2.5 rounded-lg bg-white border border-stone-300 text-center">
            <span className="block text-[10px] font-mono text-stone-500 uppercase font-bold">
              {t.victoryTime}
            </span>
            <span className="text-sm sm:text-base font-typewriter font-bold text-stone-900 flex items-center justify-center gap-1 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-emerald-700" />
              {formatTime(timerSeconds)}
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-white border border-stone-300 text-center">
            <span className="block text-[10px] font-mono text-stone-500 uppercase font-bold">
              {t.victoryMoves}
            </span>
            <span className="text-sm sm:text-base font-typewriter font-bold text-stone-900 flex items-center justify-center gap-1 mt-0.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              {movesCount}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 border-t border-stone-200">
          <button
            id="btn-examinar-escena"
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-3.5 py-2 rounded-lg text-xs font-typewriter font-bold bg-stone-200 hover:bg-stone-300 text-stone-800 transition-colors cursor-pointer"
          >
            {t.victoryExamineBtn}
          </button>

          <button
            id="btn-reiniciar-victoria"
            onClick={() => {
              sounds.playStamp();
              onRestart();
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-typewriter font-bold bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-600 shadow-sm transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.victoryRestartBtn}</span>
          </button>

          {hasNextCase && onNextCase && (
            <button
              id="btn-siguiente-caso"
              onClick={() => {
                sounds.playSuccess();
                onNextCase();
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-typewriter font-bold bg-emerald-800 hover:bg-emerald-900 text-white shadow-md transition-colors cursor-pointer"
            >
              <span>{t.victoryNextBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {onBackToLevelSelect && (
            <button
              id="btn-victoria-volver-niveles"
              onClick={() => {
                sounds.playClick();
                onBackToLevelSelect();
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-typewriter font-bold bg-[#382a20] hover:bg-[#4a392c] text-amber-200 border border-[#a37d45]/50 shadow-sm transition-colors cursor-pointer"
            >
              <span>{t.victoryBackToLevelsBtn}</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
