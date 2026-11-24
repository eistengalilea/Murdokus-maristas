import React, { useState } from 'react';
import { PuzzleCase, Suspect } from '../types';
import { sounds } from '../audio';
import { useLanguage } from '../i18n/LanguageContext';
import { Gavel, X, AlertOctagon, CheckCircle } from 'lucide-react';

interface AccusationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCase: PuzzleCase;
  onConfirmAccusation: (suspectId: string) => boolean;
}

export const AccusationModal: React.FC<AccusationModalProps> = ({
  isOpen,
  onClose,
  currentCase,
  onConfirmAccusation
}) => {
  const { t } = useLanguage();
  const [selectedSuspectId, setSelectedSuspectId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAccuse = () => {
    if (!selectedSuspectId) return;

    sounds.playStamp();
    const isCorrect = onConfirmAccusation(selectedSuspectId);
    if (!isCorrect) {
      sounds.playWarning();
      setErrorMessage(t.accusationIncorrectMsg);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-theme-panel text-theme-primary border-4 border-[#8c2a2a] rounded-xl shadow-2xl p-4 sm:p-6 overflow-hidden transition-colors">
        
        {/* Crime Tape Header */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-police-tape" />

        {/* Close Button */}
        <button
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-1 rounded-full text-theme-secondary hover:text-theme-primary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="mt-2 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/80 text-red-800 dark:text-red-300 border-2 border-red-700 shadow-inner mb-2">
            <Gavel className="w-6 h-6" />
          </div>
          
          <h3 className="text-lg sm:text-xl font-bold font-murdoku-sans text-theme-title uppercase tracking-tight">
            {t.accusationTitle}
          </h3>
          <p className="text-xs text-theme-secondary font-sans mt-1">
            {t.accusationInstruction}
          </p>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="my-3 p-3 bg-red-100 dark:bg-red-950/80 border border-red-400 dark:border-red-700 rounded-lg text-xs font-sans text-red-900 dark:text-red-200 flex items-start gap-2">
            <AlertOctagon className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
            <p>{errorMessage}</p>
          </div>
        )}

        {/* Suspects Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4 max-h-60 overflow-y-auto p-1">
          {currentCase.suspects
            .filter((s) => !s.isVictim)
            .map((suspect: Suspect) => {
              const isSelected = selectedSuspectId === suspect.id;

              return (
                <button
                  key={suspect.id}
                  onClick={() => {
                    sounds.playClick();
                    setSelectedSuspectId(suspect.id);
                    setErrorMessage(null);
                  }}
                  className={`flex items-center gap-3 p-3 rounded-lg border-2 text-left transition-all ${
                    isSelected
                      ? 'bg-red-100 dark:bg-red-950/60 border-red-700 ring-2 ring-red-400 shadow-md'
                      : 'bg-theme-card hover:bg-theme-tools border-theme/30 shadow-xs'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-b ${suspect.color} border flex items-center justify-center text-lg shrink-0`}>
                    <span>{suspect.avatar}</span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-murdoku-sans font-bold text-xs text-theme-title">
                        {suspect.name}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-theme-secondary">
                        [{suspect.id}]
                      </span>
                    </div>
                    <p className="text-[10px] text-theme-secondary truncate">
                      {suspect.role}
                    </p>
                  </div>
                </button>
              );
            })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-2 pt-3 border-t border-theme/20">
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded-lg text-xs font-typewriter font-bold text-theme-secondary hover:bg-theme-tools transition-colors"
          >
            {t.accusationCancelBtn}
          </button>
          
          <button
            disabled={!selectedSuspectId}
            onClick={handleAccuse}
            className="px-5 py-2 rounded-lg text-xs font-typewriter font-bold text-white bg-red-800 hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition-colors flex items-center gap-2"
          >
            <Gavel className="w-4 h-4" />
            <span>{t.accusationConfirmBtn}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
