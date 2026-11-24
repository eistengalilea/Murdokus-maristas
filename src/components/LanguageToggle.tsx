import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/types';
import { sounds } from '../audio';

interface LanguageToggleProps {
  variant?: 'compact' | 'full';
  className?: string;
}

/** Idiomas del juego: castellano, gallego y portugués de Portugal. */
const OPCIONES: { idioma: Language; bandera: string; nombre: string; corto: string; titulo: string; color: string }[] = [
  { idioma: 'es', bandera: '🇪🇸', nombre: 'Castellano', corto: 'ES', titulo: 'Cambiar idioma a Castellano', color: 'bg-[#c6007e]' },
  { idioma: 'gl', bandera: '🟦', nombre: 'Galego', corto: 'GL', titulo: 'Cambiar idioma a Galego', color: 'bg-[#0070b8]' },
  { idioma: 'pt', bandera: '🇵🇹', nombre: 'Português', corto: 'PT', titulo: 'Mudar o idioma para Português', color: 'bg-[#046a38]' }
];

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  variant = 'compact',
  className = ''
}) => {
  const { language, setLanguage } = useLanguage();

  const elegir = (idioma: Language) => {
    if (language !== idioma) {
      sounds.playClick();
      setLanguage(idioma);
    }
  };

  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center p-1 rounded-lg bg-theme-tools border border-theme/40 shadow-xs ${className}`}>
        {OPCIONES.map((op) => (
          <button
            key={op.idioma}
            type="button"
            onClick={() => elegir(op.idioma)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-typewriter font-bold transition-all cursor-pointer ${
              language === op.idioma ? `${op.color} text-white shadow-xs` : 'text-theme-secondary hover:text-theme-primary'
            }`}
            title={op.titulo}
            aria-pressed={language === op.idioma}
          >
            <span>{op.bandera}</span>
            <span>{op.nombre}</span>
          </button>
        ))}
      </div>
    );
  }

  // Variante compacta para barras de herramientas y cabeceras
  return (
    <div
      className={`inline-flex items-center rounded bg-theme-tools border border-theme/40 p-0.5 text-xs font-typewriter font-bold shadow-xs ${className}`}
      title="Castellano / Galego / Português"
    >
      {OPCIONES.map((op) => (
        <button
          key={op.idioma}
          type="button"
          id={`btn-lang-${op.idioma}`}
          onClick={() => elegir(op.idioma)}
          title={op.titulo}
          aria-pressed={language === op.idioma}
          className={`flex items-center gap-1 px-2 py-1 rounded transition-colors cursor-pointer text-[11px] ${
            language === op.idioma
              ? `${op.color} text-white shadow-2xs font-bold`
              : 'text-theme-secondary hover:text-theme-primary opacity-70 hover:opacity-100'
          }`}
        >
          <span>{op.bandera}</span>
          <span>{op.corto}</span>
        </button>
      ))}
    </div>
  );
};
