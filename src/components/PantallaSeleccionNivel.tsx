import React, { useState, useEffect, useMemo } from 'react';
import { ArrowLeft, FolderOpen } from 'lucide-react';
import { DifficultyLevel } from '../types';
import { sounds } from '../audio';
import { generarBotonesNiveles } from '../navigation';
import { NIVELES_DATABASE } from '../data/niveles';
import { coincideFiltrosReto, obtenerLibrosDisponibles, obtenerLibroBiblico } from '../utils/searchEngine';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { MenuBusquedaNivel } from './MenuBusquedaNivel';
import { useLanguage } from '../i18n/LanguageContext';

interface PantallaSeleccionNivelProps {
  selectedDifficulty: DifficultyLevel;
  onBackToDifficulty: () => void;
  onSelectCase?: (caseIndex: number) => void;
}

export const PantallaSeleccionNivel: React.FC<PantallaSeleccionNivelProps> = ({
  selectedDifficulty,
  onBackToDifficulty
}) => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState('todos');

  // Normalizar categoría de la dificultad activa
  const catKey =
    selectedDifficulty === 'Fácil'
      ? 'easy'
      : selectedDifficulty === 'Medio'
      ? 'medium'
      : 'hard';

  const retosNivel = useMemo(() => NIVELES_DATABASE[catKey] || [], [catKey]);

  // Libros bíblicos presentes en este nivel con sus cantidades
  const availableBooks = useMemo(() => {
    return obtenerLibrosDisponibles(
      retosNivel.map((r) => ({
        libroBiblico: obtenerLibroBiblico(r.datos_juego.citasBiblicas, r.id, r.nombre)
      }))
    );
  }, [retosNivel]);

  // Cantidad de retos que coinciden con los filtros actuales
  const retosFiltradosCount = useMemo(() => {
    return retosNivel.filter((r) => coincideFiltrosReto(r, searchTerm, selectedBook)).length;
  }, [retosNivel, searchTerm, selectedBook]);

  // Reiniciar filtros al cambiar de dificultad
  useEffect(() => {
    setSearchTerm('');
    setSelectedBook('todos');
  }, [selectedDifficulty]);

  // Actualizar la lista de botones al cambiar filtros o dificultad
  useEffect(() => {
    generarBotonesNiveles(selectedDifficulty, searchTerm, selectedBook, language);
  }, [selectedDifficulty, searchTerm, selectedBook, language]);

  const handleResetFilters = () => {
    sounds.playClick();
    setSearchTerm('');
    setSelectedBook('todos');
  };

  const getDifficultyBadgeColor = (diff: DifficultyLevel) => {
    switch (diff) {
      case 'Fácil':
        return 'bg-emerald-900/60 text-emerald-300 border-emerald-600/60';
      case 'Medio':
        return 'bg-amber-900/60 text-amber-300 border-amber-600/60';
      case 'Difícil':
        return 'bg-rose-900/60 text-rose-300 border-rose-600/60';
    }
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-6 sm:py-10 flex flex-col justify-between">
      
      {/* Top Navigation & Breadcrumbs */}
      <div className="space-y-6">
        
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-theme-panel p-3.5 rounded-xl border border-theme shadow-xs">
          {/* Volver a Dificultades Button */}
          <button
            id="btn-volver-dificultad"
            onClick={() => {
              sounds.playClick();
              onBackToDifficulty();
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-theme-card hover:bg-theme-tools border border-theme/40 text-theme-title-accent font-typewriter text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer active:scale-95"
            title={t.levelSelectBack}
          >
            <ArrowLeft className="w-4 h-4 text-theme-title-accent" />
            <span>{t.levelSelectBack}</span>
          </button>

          {/* Difficulty Badge, Language Toggle & Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 font-typewriter text-xs">
            <span className="text-theme-secondary hidden sm:inline font-medium">{t.levelSelectActive}:</span>
            <span className={`px-2.5 py-1 rounded border font-bold uppercase tracking-wider ${getDifficultyBadgeColor(selectedDifficulty)}`}>
              {selectedDifficulty}
            </span>
            <LanguageToggle variant="compact" />
            <ThemeToggle variant="compact" />
          </div>
        </div>

        {/* Header Section */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-theme-panel border border-theme text-xs text-theme-title-accent font-stamp font-bold">
            <FolderOpen className="w-3.5 h-3.5" />
            <span>{t.levelSelectBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-murdoku-sans text-theme-title tracking-tight">
            {t.levelSelectTitle} {selectedDifficulty}
          </h2>

          <p className="text-xs sm:text-sm text-theme-secondary font-sans max-w-2xl leading-relaxed">
            {t.levelSelectDesc}
          </p>
        </div>

        {/* Menú de Búsqueda de Retos por Palabras e Libros Bíblicos */}
        <MenuBusquedaNivel
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          selectedBook={selectedBook}
          onSelectBook={setSelectedBook}
          availableBooks={availableBooks}
          totalRetos={retosNivel.length}
          retosFiltrados={retosFiltradosCount}
          onResetFilters={handleResetFilters}
        />

        {/* Cases Grid - Dynamic Container Injected by JavaScript */}
        <div id="contenedor-niveles" className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 min-h-[300px]">
          {/* Los elementos y botones son inyectados dinámicamente por generarBotonesNiveles() */}
        </div>
      </div>

      {/* Footer info note */}
      <div className="text-center pt-8 text-xs text-stone-500 font-mono">
        DEPARTAMENTO DE HOMICIDIOS · ANÁLISIS DE CUADRÍCULA CRIME SCENE
      </div>

    </div>
  );
};
