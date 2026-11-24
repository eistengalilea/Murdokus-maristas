import React from 'react';
import { obtenerRasgo } from '../data/rasgos';
import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  rasgos?: string[];
  className?: string;
}

/** Chips con los rasgos del estilo marista asociados a un reto. */
export function RasgosChips({ rasgos, className = '' }: Props) {
  const { language } = useLanguage();
  const items = (rasgos || []).map((id) => obtenerRasgo(id)).filter((r): r is NonNullable<typeof r> => !!r);
  if (items.length === 0) return null;
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`} aria-label="Rasgos del estilo marista">
      {items.map((r) => (
        <span
          key={r.id}
          title={r.descripcion[language]}
          className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${r.color}`}
        >
          <span aria-hidden>{r.emoji}</span>
          <span>{r.nombre[language]}</span>
        </span>
      ))}
    </div>
  );
}

export default RasgosChips;
