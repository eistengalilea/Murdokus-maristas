import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Filter, ArrowRight, RotateCcw } from 'lucide-react';
import { PuzzleCase, DifficultyLevel } from '../types';
import { sounds } from '../audio';
import { RasgosChips } from './RasgosChips';
import {
  obtenerCatalogoCompleto,
  coincideFiltrosReto,
  obtenerLibrosDisponibles,
  EntradaCatalogoReto
} from '../utils/searchEngine';

interface MenuBusquedaGlobalProps {
  onSelectCase: (puzzleCase: PuzzleCase) => void;
}

export const MenuBusquedaGlobal: React.FC<MenuBusquedaGlobalProps> = ({ onSelectCase }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState('todos');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('todos');

  // Catálogo completo de retos de todas las dificultades
  const catalogo = useMemo(() => obtenerCatalogoCompleto(), []);

  // Etapas disponibles con sus cantidades totales
  const librosDisponibles = useMemo(() => {
    return obtenerLibrosDisponibles(catalogo);
  }, [catalogo]);

  // Filtrado de retos según términos de búsqueda, etapa y dificultad
  const retosFiltrados = useMemo(() => {
    return catalogo.filter((entry) => {
      // Filtro de dificultad
      if (selectedDifficulty !== 'todos' && entry.dificultad !== selectedDifficulty) {
        return false;
      }
      // Filtro de texto y etapa
      return coincideFiltrosReto(entry.reto, searchTerm, selectedBook);
    });
  }, [catalogo, searchTerm, selectedBook, selectedDifficulty]);

  const hasActiveFilters = searchTerm.trim() !== '' || selectedBook !== 'todos' || selectedDifficulty !== 'todos';

  const handleResetFilters = () => {
    sounds.playClick();
    setSearchTerm('');
    setSelectedBook('todos');
    setSelectedDifficulty('todos');
  };

  const getDifficultyBadge = (diff: DifficultyLevel) => {
    switch (diff) {
      case 'Fácil':
        return {
          stars: '★☆☆',
          label: 'Fácil · 5x5',
          border: 'border-emerald-700/60 hover:border-emerald-500',
          badge: 'bg-emerald-950/60 text-emerald-300 border-emerald-700/60'
        };
      case 'Medio':
        return {
          stars: '★★☆',
          label: 'Medio · 7x7',
          border: 'border-amber-700/60 hover:border-amber-500',
          badge: 'bg-amber-950/60 text-amber-300 border-amber-700/60'
        };
      case 'Difícil':
        return {
          stars: '★★★',
          label: 'Difícil · 9x9',
          border: 'border-rose-700/60 hover:border-rose-500',
          badge: 'bg-rose-950/60 text-rose-300 border-rose-700/60'
        };
    }
  };

  return (
    <div className="w-full space-y-5 my-6">
      {/* Panel del Buscador */}
      <div className="bg-theme-panel rounded-2xl border-2 border-theme/60 p-5 sm:p-6 shadow-md space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-theme-card border border-theme/50 text-theme-title-accent">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-murdoku-sans font-bold text-base sm:text-lg text-theme-title">
                Buscador de Retos Maristas
              </h3>
              <p className="text-xs text-theme-secondary font-sans">
                Filtra por palabras clave, personajes o explora etapas de la historia marista en todas las dificultades.
              </p>
            </div>
          </div>

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-theme-card hover:bg-theme-tools border border-theme/40 text-theme-title-accent font-sans text-xs font-semibold cursor-pointer transition-all active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpiar búsqueda</span>
            </button>
          )}
        </div>

        {/* Formulario de Búsqueda */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
          {/* Input de búsqueda por palabras */}
          <div className="relative md:col-span-6">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-theme-title-accent">
              <Search className="w-4 h-4" />
            </div>
            <input
              id="input-busqueda-global"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar palabras (ej: Esteban, Saulo, Nabucodonosor, Salomón, visión, prisión, horno)..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-theme-card border border-theme/50 focus:border-theme-title-accent focus:ring-2 focus:ring-theme-title-accent/20 text-xs sm:text-sm text-theme-primary placeholder:text-theme-secondary/60 transition-all font-sans outline-none"
            />
            {searchTerm && (
              <button
                id="btn-limpiar-busqueda-global"
                onClick={() => {
                  sounds.playClick();
                  setSearchTerm('');
                }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-theme-secondary hover:text-theme-primary transition-colors cursor-pointer"
                title="Borrar término de búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Selector de etapa */}
          <div className="relative md:col-span-3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-theme-title-accent">
              <BookOpen className="w-4 h-4" />
            </div>
            <select
              id="select-etapa-global"
              value={selectedBook}
              onChange={(e) => {
                sounds.playClick();
                setSelectedBook(e.target.value);
              }}
              aria-label="Seleccionar etapa"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-theme-card border border-theme/50 focus:border-theme-title-accent text-xs sm:text-sm text-theme-primary font-sans cursor-pointer outline-none"
            >
              <option value="todos">Todas las etapas ({catalogo.length})</option>
              {librosDisponibles.map((b) => (
                <option key={b.libro} value={b.libro}>
                  {b.libro} ({b.cantidad})
                </option>
              ))}
            </select>
          </div>

          {/* Selector de dificultad */}
          <div className="relative md:col-span-3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-theme-title-accent">
              <Filter className="w-4 h-4" />
            </div>
            <select
              id="select-dificultad-global"
              value={selectedDifficulty}
              onChange={(e) => {
                sounds.playClick();
                setSelectedDifficulty(e.target.value);
              }}
              aria-label="Seleccionar dificultad"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-theme-card border border-theme/50 focus:border-theme-title-accent text-xs sm:text-sm text-theme-primary font-sans cursor-pointer outline-none"
            >
              <option value="todos">Todas las dificultades ({catalogo.length})</option>
              <option value="Fácil">Nivel Fácil (5x5)</option>
              <option value="Medio">Nivel Medio (7x7)</option>
              <option value="Difícil">Nivel Difícil (9x9)</option>
            </select>
          </div>
        </div>

        {/* Chips de acceso rápido por etapa */}
        <div className="pt-2 border-t border-theme/20">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-mono text-theme-secondary font-semibold mr-1">
              Etapas:
            </span>
            <button
              onClick={() => {
                sounds.playClick();
                setSelectedBook('todos');
              }}
              className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                selectedBook === 'todos'
                  ? 'bg-theme-title-accent text-white shadow-xs'
                  : 'bg-theme-card hover:bg-theme-tools border border-theme/30 text-theme-secondary hover:text-theme-primary'
              }`}
            >
              Todos ({catalogo.length})
            </button>
            {librosDisponibles.map((b) => {
              const isSelected = selectedBook === b.libro;
              return (
                <button
                  key={b.libro}
                  onClick={() => {
                    sounds.playClick();
                    setSelectedBook(isSelected ? 'todos' : b.libro);
                  }}
                  className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                    isSelected
                      ? 'bg-theme-title-accent text-white shadow-xs'
                      : 'bg-theme-card hover:bg-theme-tools border border-theme/30 text-theme-secondary hover:text-theme-primary'
                  }`}
                >
                  <span>{b.libro}</span>
                  <span className={`text-[10px] px-1 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-black/10 dark:bg-white/10 text-theme-secondary'}`}>
                    {b.cantidad}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Resultados de búsqueda cuando los filtros están activos */}
      {hasActiveFilters && (
        <div id="resultados-busqueda-global" className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-theme-secondary font-semibold">
                Resultados de la búsqueda:
              </span>
              <span className="text-xs font-mono font-bold text-theme-title-accent px-2 py-0.5 rounded-full bg-theme-panel border border-theme/40">
                {retosFiltrados.length} retos encontrados
              </span>
            </div>

            <button
              onClick={handleResetFilters}
              className="text-xs font-sans font-semibold text-theme-secondary hover:text-theme-title-accent cursor-pointer transition-colors underline"
            >
              Volver a vista de dificultades
            </button>
          </div>

          {retosFiltrados.length === 0 ? (
            <div className="text-center py-12 px-6 rounded-2xl border-2 border-dashed border-theme/40 bg-theme-panel/60 space-y-3">
              <div className="text-4xl">🔍</div>
              <h4 className="text-base font-bold font-murdoku-sans text-theme-title">
                No se encontraron retos coincidentes
              </h4>
              <p className="text-xs text-theme-secondary max-w-md mx-auto font-sans leading-relaxed">
                No hay ningún caso que coincida con los criterios de búsqueda actuales. Intenta con otras palabras o selecciona &quot;Todas las etapas&quot;.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-theme-title-accent text-white text-xs font-typewriter font-bold shadow-md cursor-pointer hover:opacity-90"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restablecer búsqueda</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {retosFiltrados.map((entry: EntradaCatalogoReto) => {
                const badgeInfo = getDifficultyBadge(entry.dificultad);
                const dj = entry.reto.datos_juego;
                const victim = dj.suspects.find((s) => s.id === dj.victimId || s.isVictim);
                const roomList = Object.values(dj.rooms || {}).map((r) => r.name || r.shortName).filter(Boolean);
                const roomPreview = roomList.slice(0, 3).join(', ') + (roomList.length > 3 ? ` (+${roomList.length - 3})` : '');
                const blockedCount = Object.keys(dj.blockedObjects || {}).length;
                const roomsCount = Object.keys(dj.rooms || {}).length;

                return (
                  <div
                    key={`${entry.dificultad}-${entry.reto.id}`}
                    onClick={() => {
                      sounds.playStamp();
                      onSelectCase(entry.puzzleCase);
                    }}
                    className={`group relative flex flex-col justify-between h-full bg-theme-panel rounded-2xl border-2 ${badgeInfo.border} shadow-md hover:shadow-xl transition-all duration-200 p-5 sm:p-6 cursor-pointer hover:-translate-y-0.5`}
                  >
                    <div className="flex flex-col gap-4 flex-1">
                      {/* 1. Cabecera con Dificultad, Caso y Etapa */}
                      <div className="flex items-center justify-between gap-2 flex-wrap pb-3 border-b border-theme/20">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-bold tracking-wider ${badgeInfo.badge}`}>
                            {badgeInfo.stars} {badgeInfo.label}
                          </span>
                          <span className="font-mono text-theme-title-accent font-bold px-2 py-0.5 rounded bg-black/10 dark:bg-black/40 border border-theme/30 text-[11px]">
                            Caso {entry.reto.id}
                          </span>
                          <span className="inline-block text-[10.5px] font-mono px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-200 border border-blue-300 dark:border-blue-700/50 font-bold">
                            📜 {entry.etapa}
                          </span>
                          {dj.categoria && (
                            <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-600/40 font-bold uppercase">
                              {dj.categoria}
                            </span>
                          )}
                        </div>

                        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-theme-tools text-theme-title border border-theme/40 shadow-2xs">
                          <span>📐</span>
                          <span>{dj.Tamano_Cuadricula || `${dj.gridSize}x${dj.gridSize}`}</span>
                        </span>
                      </div>

                      {/* 2. Título y Cita */}
                      <div className="space-y-1">
                        <h4 className="text-xl font-bold font-murdoku-sans text-theme-title group-hover:text-theme-title-accent transition-colors leading-snug">
                          {entry.reto.nombre}
                        </h4>
                        <RasgosChips rasgos={dj.rasgos} />
                        {dj.fuenteHistorica && (
                          <div className="flex items-center gap-1.5 text-xs text-sky-700 dark:text-sky-300 font-mono font-semibold">
                            <span className="text-xs">📖</span>
                            <span>{dj.fuenteHistorica}</span>
                          </div>
                        )}
                      </div>

                      {/* 3. Sinopsis Pericial y Texto Histórico */}
                      <div className="bg-theme-card/85 dark:bg-stone-900/60 p-3.5 sm:p-4 rounded-xl border border-theme/30 shadow-2xs space-y-2.5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5 text-theme-title-accent">
                            <span className="text-xs">🔍</span>
                            <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider">
                              Informe Pericial
                            </span>
                          </div>
                          <p className="text-xs sm:text-[13px] text-theme-primary font-sans leading-relaxed break-words">
                            {dj.storyIntro}
                          </p>
                        </div>
                        {dj.textoClave && (
                          <div className="pt-2 border-t border-theme/20 flex items-start gap-2 text-xs italic text-theme-secondary font-serif leading-relaxed">
                            <span className="text-amber-500 dark:text-amber-400 font-serif font-bold text-sm leading-none shrink-0 mt-0.5">❝</span>
                            <p className="line-clamp-2">{dj.textoClave}</p>
                          </div>
                        )}
                      </div>

                      {/* 4. Personajes Involucrados */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-theme-secondary">
                          <span className="uppercase tracking-wider flex items-center gap-1">
                            <span>👥</span>
                            <span>Personajes ({dj.suspects.length}):</span>
                          </span>
                          {victim && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-700 font-bold">
                              <span>✝️ Víctima:</span>
                              <span>{victim.name}</span>
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {dj.suspects.map((s) => {
                            const isVictim = s.id === dj.victimId || s.isVictim;
                            return (
                              <div
                                key={s.id}
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${
                                  isVictim
                                    ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800/60 text-rose-900 dark:text-rose-200 font-bold'
                                    : 'bg-theme-card border-theme/30 text-theme-primary'
                                } border text-xs shadow-2xs hover:border-theme-title-accent transition-colors`}
                                title={`${s.name} (${s.role})`}
                              >
                                <span className="text-sm leading-none">{s.avatar}</span>
                                <span className="font-typewriter text-[11px] font-semibold">{s.name}</span>
                                <span className="text-[9.5px] text-theme-secondary font-sans hidden sm:inline">· {s.role}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* 5. Estancias y Entorno */}
                      <div className="grid grid-cols-2 gap-2 text-xs pt-0.5">
                        <div className="flex items-center gap-2 bg-theme-card px-3 py-2 rounded-lg border border-theme/25 shadow-2xs" title={roomList.join(', ')}>
                          <span className="text-amber-500 font-bold text-base shrink-0">🏛️</span>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[10px] font-mono text-theme-secondary uppercase tracking-wider">Estancias ({roomsCount})</span>
                            <span className="text-theme-title font-mono font-bold text-[11px] truncate">{roomPreview || `${roomsCount} Habitaciones`}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 bg-theme-card px-3 py-2 rounded-lg border border-theme/25 shadow-2xs">
                          <span className="text-emerald-500 font-bold text-base shrink-0">📍</span>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[10px] font-mono text-theme-secondary uppercase tracking-wider">Entorno Escena</span>
                            <span className="text-theme-title font-mono font-bold text-[11px] truncate">
                              {blockedCount > 0 ? `${blockedCount} Obstáculos fijos` : 'Sin obstáculos'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 6. Pie con botón de investigar */}
                    <div className="mt-4 pt-3.5 border-t border-theme/20 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-theme-secondary font-typewriter">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">⚖️</span>
                        <span className="text-[11px]">1 persona por fila y col.</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          sounds.playStamp();
                          onSelectCase(entry.puzzleCase);
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-typewriter text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer ring-2 ring-emerald-500/30 shrink-0"
                      >
                        <span>Investigar Caso</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
