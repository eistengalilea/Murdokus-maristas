import React from 'react';
import { sounds } from '../audio';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/types';
import { porIdioma } from '../i18n/porIdioma';
import { X, FileText, Download, CheckCircle, Printer, Sparkles } from 'lucide-react';

interface DescargarPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: (idioma: Language) => void;
  caseTitle: string;
}

export const DescargarPdfModal: React.FC<DescargarPdfModalProps> = ({
  isOpen,
  onClose,
  onDownload,
  caseTitle
}) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const opciones: {
    idioma: Language;
    bandera: string;
    titulo: string;
    descripcion: string;
    boton: string;
    claseActiva: string;
    claseEtiqueta: string;
    claseBoton: string;
  }[] = [
    {
      idioma: 'es',
      bandera: '🇪🇸',
      titulo: t.pdfOptionEsTitle,
      descripcion: t.pdfOptionEsDesc,
      boton: t.pdfOptionEsBtn,
      claseActiva: 'border-[#8c2a2a] bg-[#8c2a2a]/10 dark:bg-[#8c2a2a]/20 shadow-md ring-2 ring-[#8c2a2a]/30',
      claseEtiqueta: 'bg-[#8c2a2a]',
      claseBoton: 'bg-[#8c2a2a] hover:bg-[#a63434]'
    },
    {
      idioma: 'gl',
      bandera: '🟦',
      titulo: t.pdfOptionGlTitle,
      descripcion: t.pdfOptionGlDesc,
      boton: t.pdfOptionGlBtn,
      claseActiva: 'border-[#0070b8] bg-[#0070b8]/10 dark:bg-[#0070b8]/20 shadow-md ring-2 ring-[#0070b8]/30',
      claseEtiqueta: 'bg-[#0070b8]',
      claseBoton: 'bg-[#0070b8] hover:bg-[#008ae6]'
    },
    {
      idioma: 'pt',
      bandera: '🇵🇹',
      titulo: t.pdfOptionPtTitle,
      descripcion: t.pdfOptionPtDesc,
      boton: t.pdfOptionPtBtn,
      claseActiva: 'border-[#046a38] bg-[#046a38]/10 dark:bg-[#046a38]/20 shadow-md ring-2 ring-[#046a38]/30',
      claseEtiqueta: 'bg-[#046a38]',
      claseBoton: 'bg-[#046a38] hover:bg-[#05844a]'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-theme-panel text-theme-primary border-4 border-theme rounded-2xl shadow-2xl p-5 sm:p-7 overflow-hidden transition-colors">
        
        {/* Crime Police Tape Accent */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-police-tape" />

        {/* Close Button */}
        <button
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-1.5 rounded-full text-theme-secondary hover:text-theme-primary transition-colors cursor-pointer"
          title={t.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b-2 border-theme/20 pb-4 mb-4 mt-2">
          <div className="w-11 h-11 rounded-xl bg-stone-900 text-amber-400 border border-stone-700 flex items-center justify-center text-xl shadow-inner shrink-0">
            <Printer className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-500 dark:text-amber-400 border border-amber-500/30 uppercase">
                {t.pdfClassroomReadyBadge}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-murdoku-sans text-theme-title mt-0.5">
              {t.pdfModalTitle}
            </h3>
            <p className="text-xs text-theme-secondary font-sans">
              {caseTitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-theme-secondary font-sans leading-relaxed mb-4">
          {t.pdfModalSubtitle}
        </p>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
          {opciones.map((op) => {
            const activo = language === op.idioma;
            return (
              <div
                key={op.idioma}
                onClick={() => {
                  sounds.playStamp();
                  onDownload(op.idioma);
                  onClose();
                }}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between hover:scale-[1.02] active:scale-[0.98] ${
                  activo ? op.claseActiva : 'border-theme/40 bg-theme-card hover:bg-theme-tools'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{op.bandera}</span>
                    {activo && (
                      <span className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded text-white ${op.claseEtiqueta}`}>
                        {porIdioma(language, { es: 'ACTIVO', gl: 'ACTIVO', pt: 'ATIVO' })}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold font-murdoku-sans text-theme-title">{op.titulo}</h4>
                  <p className="text-[11px] text-theme-secondary mt-1 leading-relaxed">{op.descripcion}</p>
                </div>
                <button
                  type="button"
                  className={`mt-4 w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-white text-xs font-typewriter font-bold shadow-xs transition-colors ${op.claseBoton}`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{op.boton}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-theme-secondary border-t border-theme/20">
          <span>
            {porIdioma(language, {
              es: 'Pág 1: Hoja del Alumno · Pág 2: Solución Oficial',
              gl: 'Páx 1: Folla do Alumnado · Páx 2: Solución Oficial',
              pt: 'Pág 1: Folha do Aluno · Pág 2: Solução Oficial'
            })}
          </span>
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="text-xs font-typewriter hover:underline cursor-pointer"
          >
            {t.cancel}
          </button>
        </div>

      </div>
    </div>
  );
};
