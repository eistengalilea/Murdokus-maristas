import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { leerPreferencia, guardarPreferencia } from '../utils/almacenamiento';

interface ThemeToggleProps {
  className?: string;
  variant?: 'button' | 'compact' | 'pill';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  variant = 'button'
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const saved = leerPreferencia('murdoku-theme');
    if (saved) {
      return saved === 'dark';
    }
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (isDarkMode) {
      root.classList.add('dark-mode');
      body.classList.add('dark-mode');
      guardarPreferencia('murdoku-theme', 'dark');
    } else {
      root.classList.remove('dark-mode');
      body.classList.remove('dark-mode');
      guardarPreferencia('murdoku-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  if (variant === 'compact') {
    return (
      <button
        id="btn-toggle-theme"
        onClick={toggleTheme}
        className={`p-2 rounded-lg border-2 transition-all cursor-pointer flex items-center justify-center ${
          isDarkMode
            ? 'bg-[#2a2a2a] text-amber-300 border-[#555555] hover:bg-[#383838]'
            : 'bg-white text-stone-800 border-black hover:bg-stone-100 shadow-xs'
        } ${className}`}
        title={isDarkMode ? 'Cambiar a Modo Claro (☀️)' : 'Cambiar a Modo Oscuro (🌙)'}
        aria-label="Cambiar tema de color"
      >
        {isDarkMode ? (
          <span className="text-base leading-none">☀️</span>
        ) : (
          <span className="text-base leading-none">🌙</span>
        )}
      </button>
    );
  }

  if (variant === 'pill') {
    return (
      <button
        id="btn-toggle-theme"
        onClick={toggleTheme}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 text-xs font-bold transition-all cursor-pointer select-none ${
          isDarkMode
            ? 'bg-[#2a2a2a] text-[#e0e0e0] border-[#555555] hover:bg-[#383838]'
            : 'bg-white text-[#1a181b] border-black hover:bg-stone-100 shadow-xs'
        } ${className}`}
        title="Alternar entre Modo Claro y Modo Oscuro"
      >
        <span>{isDarkMode ? '☀️' : '🌙'}</span>
        <span>{isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}</span>
      </button>
    );
  }

  return (
    <button
      id="btn-toggle-theme"
      onClick={toggleTheme}
      className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg border-2 text-xs font-bold transition-all cursor-pointer select-none ${
        isDarkMode
          ? 'bg-[#2a2a2a] text-[#e0e0e0] border-[#555555] hover:bg-[#383838]'
          : 'bg-white text-[#1a181b] border-black hover:bg-stone-100 shadow-xs'
      } ${className}`}
      title={isDarkMode ? 'Cambiar a Modo Claro (☀️)' : 'Cambiar a Modo Oscuro (🌙)'}
    >
      <div className="flex items-center gap-1.5">
        <span className="text-sm">{isDarkMode ? '☀️' : '🌙'}</span>
        <span>{isDarkMode ? 'Oscuro' : 'Claro'}</span>
      </div>
      <div
        className={`w-8 h-4 rounded-full p-0.5 flex items-center transition-colors ${
          isDarkMode ? 'bg-amber-500 justify-end' : 'bg-stone-300 justify-start'
        }`}
      >
        <div className="w-3 h-3 rounded-full bg-white shadow-xs" />
      </div>
    </button>
  );
};
