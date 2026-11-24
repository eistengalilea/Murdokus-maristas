import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Language, TranslationDictionary } from './types';
import { TRANSLATIONS } from './translations';
import { obtenerCasoTraducido, traducirEtapa, traducirHabitacion, traducirRol } from './translateContent';
import { PuzzleCase } from '../types';
import { leerPreferencia, guardarPreferencia } from '../utils/almacenamiento';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDictionary;
  translateCase: (caso: PuzzleCase) => PuzzleCase;
  translateStage: (book: string) => string;
  translateRoom: (room: string) => string;
  translateRole: (role: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'murdoku_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = leerPreferencia(STORAGE_KEY);
      if (saved === 'gl' || saved === 'es' || saved === 'pt') {
        return saved;
      }
    }
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    guardarPreferencia(STORAGE_KEY, lang);
  };

  const toggleLanguage = () => {
    // Recorre los idiomas en orden: es → gl → pt → es
    setLanguage(language === 'es' ? 'gl' : language === 'gl' ? 'pt' : 'es');
  };

  const t = useMemo(() => TRANSLATIONS[language], [language]);

  // Atributo lang del documento (lectores de pantalla, corrector ortográfico, separación silábica)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'pt' ? 'pt-PT' : language;
    }
  }, [language]);

  const translateCase = (caso: PuzzleCase) => {
    return obtenerCasoTraducido(caso, language);
  };

  const translateStage = (book: string) => {
    return traducirEtapa(book, language);
  };

  const translateRoom = (room: string) => {
    return traducirHabitacion(room, language);
  };

  const translateRole = (role: string) => {
    return traducirRol(role, language);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        translateCase,
        translateStage,
        translateRoom,
        translateRole
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
