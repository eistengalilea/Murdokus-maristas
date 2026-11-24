import React from 'react';
import { Shield, Search, Compass, Skull, HelpCircle, Award, BookOpen } from 'lucide-react';
import { DifficultyLevel, PuzzleCase } from '../types';
import { CASES } from '../cases';
import { sounds } from '../audio';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { MenuBusquedaGlobal } from './MenuBusquedaGlobal';
import { useLanguage } from '../i18n/LanguageContext';

interface PantallaDificultadProps {
  onSelectDifficulty: (difficulty: DifficultyLevel) => void;
  onOpenRules: () => void;
  onSelectCase?: (puzzleCase: PuzzleCase) => void;
}

export const PantallaDificultad: React.FC<PantallaDificultadProps> = ({
  onSelectDifficulty,
  onOpenRules,
  onSelectCase
}) => {
  const { t } = useLanguage();

  const getCasesCount = (diff: DifficultyLevel) => {
    return CASES.filter((c) => c.difficulty === diff).length;
  };

  const handleCaseSelection = (puzzleCase: PuzzleCase) => {
    if (onSelectCase) {
      onSelectCase(puzzleCase);
    } else {
      onSelectDifficulty(puzzleCase.difficulty);
    }
  };

  const difficultyOptions: {
    level: DifficultyLevel;
    id: string;
    stars: string;
    title: string;
    subtitle: string;
    description: string;
    badgeText: string;
    accentBorder: string;
    accentBg: string;
    accentText: string;
    icon: React.ReactNode;
    gridLabel: string;
  }[] = [
    {
      level: 'Fácil',
      id: 'btn-dificultad-facil',
      stars: '★☆☆',
      title: t.easyTitle,
      subtitle: t.easySubtitle,
      description: t.easyDesc,
      badgeText: `${getCasesCount('Fácil')} ${t.easyBadge}`,
      accentBorder: 'border-emerald-700/60 hover:border-emerald-500',
      accentBg: 'bg-emerald-950/40 hover:bg-emerald-900/40',
      accentText: 'text-emerald-400',
      icon: <Search className="w-8 h-8 text-emerald-400" />,
      gridLabel: t.easyGrid
    },
    {
      level: 'Medio',
      id: 'btn-dificultad-medio',
      stars: '★★☆',
      title: t.mediumTitle,
      subtitle: t.mediumSubtitle,
      description: t.mediumDesc,
      badgeText: `${getCasesCount('Medio')} ${t.mediumBadge}`,
      accentBorder: 'border-amber-700/60 hover:border-amber-500',
      accentBg: 'bg-amber-950/40 hover:bg-amber-900/40',
      accentText: 'text-amber-400',
      icon: <Compass className="w-8 h-8 text-amber-400" />,
      gridLabel: t.mediumGrid
    },
    {
      level: 'Difícil',
      id: 'btn-dificultad-dificil',
      stars: '★★★',
      title: t.hardTitle,
      subtitle: t.hardSubtitle,
      description: t.hardDesc,
      badgeText: `${getCasesCount('Difícil')} ${t.hardBadge}`,
      accentBorder: 'border-rose-700/60 hover:border-rose-500',
      accentBg: 'bg-rose-950/40 hover:bg-rose-900/40',
      accentText: 'text-rose-400',
      icon: <Skull className="w-8 h-8 text-rose-400" />,
      gridLabel: t.hardGrid
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between max-w-5xl mx-auto px-4 py-8 sm:py-12 relative">
      {/* Top Bar Utilities: Language & Theme Toggles */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <LanguageToggle variant="compact" />
        <ThemeToggle variant="pill" />
      </div>
      
      {/* Header / Title Section */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-panel border border-theme shadow-xs">
          <Shield className="w-4 h-4 text-theme-title-accent" />
          <span className="font-stamp tracking-widest text-xs uppercase text-theme-title-accent font-bold">
            {t.diffScreenBadge}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold font-murdoku-sans text-theme-title tracking-tight drop-shadow-xs">
          {t.appTitle}
        </h1>
        <p className="text-base sm:text-lg font-murdoku-sans font-bold text-theme-title-accent max-w-2xl mx-auto">
          {t.diffScreenTitle}
        </p>

        <p className="text-xs sm:text-sm text-theme-secondary max-w-xl mx-auto font-sans leading-relaxed">
          {t.diffScreenDesc}
        </p>
      </div>

      {/* Menú de Búsqueda por Palabras y Libros Bíblicos */}
      <MenuBusquedaGlobal onSelectCase={handleCaseSelection} />

      {/* Difficulty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-4">
        {difficultyOptions.map((opt) => (
          <button
            key={opt.level}
            id={opt.id}
            onClick={() => {
              sounds.playStamp();
              onSelectDifficulty(opt.level);
            }}
            className={`group relative flex flex-col justify-between text-left p-6 rounded-2xl bg-theme-panel border-2 border-theme hover:border-theme-title-accent shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer overflow-hidden`}
          >
            {/* Ambient Corner Glow */}
            <div className={`absolute -top-12 -right-12 w-28 h-28 rounded-full ${opt.accentBg} blur-2xl group-hover:scale-125 transition-transform opacity-30 dark:opacity-100`} />

            <div className="space-y-4">
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-xl bg-theme-card border border-theme/40 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  {opt.icon}
                </div>
                <div className="text-right">
                  <span className={`text-sm font-mono tracking-widest ${opt.accentText}`}>
                    {opt.stars}
                  </span>
                  <div className="text-[10px] font-mono text-theme-secondary uppercase tracking-wider font-semibold">
                    {opt.subtitle}
                  </div>
                </div>
              </div>

              {/* Title & Badge */}
              <div>
                <h2 className="text-2xl font-bold font-murdoku-sans text-theme-title group-hover:text-theme-title-accent transition-colors">
                  {opt.title}
                </h2>
                <span className="inline-block mt-1 font-typewriter text-[11px] font-semibold text-theme-secondary">
                  {opt.badgeText}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-theme-secondary font-sans leading-relaxed">
                {opt.description}
              </p>
            </div>

            {/* Action Footer */}
            <div className="mt-6 pt-4 border-t border-theme/20 flex items-center justify-between">
              <span className="text-xs font-typewriter font-bold text-theme-title-accent group-hover:underline">
                Seleccionar nivel →
              </span>
              <span className="text-xs text-theme-secondary font-mono">
                {opt.gridLabel}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Rules & Help Footer Briefing */}
      <div className="bg-theme-panel border border-theme/30 rounded-xl p-4 sm:p-5 text-theme-primary space-y-3 shadow-xs">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-theme-title-accent" />
            <h3 className="font-murdoku-sans font-bold text-sm text-theme-title uppercase tracking-wide">
              {t.diffScreenHowToPlay}
            </h3>
          </div>

          <button
            id="btn-dificultad-ver-reglas"
            onClick={() => {
              sounds.playClick();
              onOpenRules();
            }}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-theme-card hover:bg-theme-tools border border-theme/40 text-xs font-typewriter text-theme-title-accent font-bold transition-colors cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.rulesSubtitle}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-theme-secondary font-sans">
          <div className="flex items-start gap-2 bg-theme-card p-2.5 rounded border border-theme/20">
            <span className="text-theme-title-accent font-mono font-bold">1.</span>
            <span><strong className="text-theme-title">{t.rulesSudokuTitle}:</strong> {t.rulesSudokuDesc}</span>
          </div>
          <div className="flex items-start gap-2 bg-theme-card p-2.5 rounded border border-theme/20">
            <span className="text-theme-title-accent font-mono font-bold">2.</span>
            <span><strong className="text-theme-title">{t.rulesMurdererTitle}:</strong> {t.rulesMurdererDesc}</span>
          </div>
        </div>
      </div>

    </div>
  );
};
