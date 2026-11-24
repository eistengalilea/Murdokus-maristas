import React from 'react';
import { sounds } from '../audio';
import { X, BookOpen, Lightbulb } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-theme-panel text-theme-primary border-4 border-theme rounded-xl shadow-2xl p-5 sm:p-7 overflow-y-auto max-h-[90vh] transition-colors">
        
        {/* Crime Tape */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-police-tape" />

        {/* Close button */}
        <button
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-1.5 rounded-full text-theme-secondary hover:text-theme-primary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 border-b-2 border-theme/20 pb-3 mb-4 mt-2">
          <div className="w-10 h-10 rounded-lg bg-[#3d2e24] text-[#d6b785] flex items-center justify-center text-xl shadow shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold font-murdoku-sans text-theme-title uppercase tracking-wide">
              {t.rulesTitle}
            </h3>
            <p className="text-xs font-sans text-theme-secondary">
              {t.rulesSubtitle}
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4 text-xs font-sans text-theme-primary">
          
          {/* Rule 1: Sudoku rows & columns */}
          <div className="p-3 bg-theme-card border border-theme/30 rounded-lg shadow-2xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-bold font-mono flex items-center justify-center text-xs shrink-0">
                1
              </span>
              <h4 className="font-bold font-murdoku-sans text-theme-title text-sm">
                {t.rulesSudokuTitle}
              </h4>
            </div>
            <p className="text-theme-secondary pl-8 leading-relaxed">
              {t.rulesSudokuDesc}
            </p>
          </div>

          {/* Rule 2: Inanimate Objects */}
          <div className="p-3 bg-theme-card border border-theme/30 rounded-lg shadow-2xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold font-mono flex items-center justify-center text-xs shrink-0">
                2
              </span>
              <h4 className="font-bold font-murdoku-sans text-theme-title text-sm">
                {t.rulesObjectsTitle}
              </h4>
            </div>
            <p className="text-theme-secondary pl-8 leading-relaxed">
              {t.rulesObjectsDesc}
            </p>
          </div>

          {/* Rule 3: The Murderer Rule */}
          <div className="p-3 bg-theme-card border border-red-500/40 rounded-lg shadow-2xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-full bg-red-800 text-white font-bold font-mono flex items-center justify-center text-xs shrink-0">
                3
              </span>
              <h4 className="font-bold font-murdoku-sans text-red-700 dark:text-red-400 text-sm">
                {t.rulesMurdererTitle}
              </h4>
            </div>
            <p className="text-theme-secondary pl-8 leading-relaxed font-medium">
              {t.rulesMurdererDesc}
            </p>
          </div>

          {/* Tips / Cuaderno de pistas & Modo Lápiz */}
          <div className="p-3 bg-theme-tools border border-amber-400/40 rounded-lg space-y-2">
            <div className="flex items-center gap-1.5 font-bold font-murdoku-sans text-theme-title-accent text-xs">
              <Lightbulb className="w-4 h-4 text-theme-title-accent shrink-0" />
              <span>{t.rulesNotebookTitle}</span>
            </div>
            <p className="text-theme-secondary pl-5 leading-relaxed">
              {t.rulesNotebookDesc}
            </p>
            <div className="pt-1 pl-5 border-t border-theme/10">
              <span className="font-semibold text-theme-title text-xs">{t.rulesPencilTitle}: </span>
              <span className="text-theme-secondary text-xs">{t.rulesPencilDesc}</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-5 text-right">
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-5 py-2 bg-theme-tools hover:bg-theme-card border border-theme text-theme-primary text-xs font-typewriter font-bold rounded-lg shadow transition-colors"
          >
            {t.rulesCloseBtn}
          </button>
        </div>

      </div>
    </div>
  );
};
