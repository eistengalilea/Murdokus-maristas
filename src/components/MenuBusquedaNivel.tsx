import React from 'react';
import { Search, X, BookOpen, RotateCcw, Filter } from 'lucide-react';
import { sounds } from '../audio';
import { useLanguage } from '../i18n/LanguageContext';
import { porIdioma } from '../i18n/porIdioma';

interface MenuBusquedaNivelProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  selectedBook: string;
  onSelectBook: (book: string) => void;
  availableBooks: { libro: string; cantidad: number }[];
  totalRetos: number;
  retosFiltrados: number;
  onResetFilters: () => void;
}

export const MenuBusquedaNivel: React.FC<MenuBusquedaNivelProps> = ({
  searchTerm,
  onSearchTermChange,
  selectedBook,
  onSelectBook,
  availableBooks,
  totalRetos,
  retosFiltrados,
  onResetFilters
}) => {
  const { t, translateBook, language } = useLanguage();
  const hasActiveFilters = searchTerm.trim() !== '' || selectedBook !== 'todos';

  return (
    <div className="w-full bg-theme-panel rounded-2xl border border-theme/50 p-4 sm:p-5 space-y-4 shadow-sm">
      {/* Barra superior de búsqueda por texto */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
        {/* Input de búsqueda por palabras */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-theme-title-accent">
            <Search className="w-4 h-4" />
          </div>
          <input
            id="input-busqueda-nivel"
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            placeholder={
              porIdioma(language, { es: 'Buscar por palabras, personajes (ej: Pedro, Saulo, Lázaro), temas o citas...', gl: 'Buscar por palabras, persoas (ex: Pedro, Saulo, Lázaro), temas ou citas...', pt: 'Pesquisar por palavras, personagens (ex.: Pedro, Saulo, Lázaro), temas ou citações...' })
            }
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-theme-card border border-theme/50 focus:border-theme-title-accent focus:ring-2 focus:ring-theme-title-accent/20 text-xs sm:text-sm text-theme-primary placeholder:text-theme-secondary/60 transition-all font-sans outline-none"
          />
          {searchTerm && (
            <button
              id="btn-limpiar-busqueda-nivel"
              onClick={() => {
                sounds.playClick();
                onSearchTermChange('');
              }}
              title={porIdioma(language, { es: 'Borrar texto de búsqueda', gl: 'Borrar texto de busca', pt: 'Apagar texto de pesquisa' })}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-theme-secondary hover:text-theme-primary transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Selector de libro bíblico (Dropdown para móviles / compacto) */}
        <div className="flex items-center gap-2 min-w-[220px]">
          <div className="flex items-center gap-1.5 text-xs font-mono text-theme-title-accent shrink-0">
            <BookOpen className="w-4 h-4" />
            <span className="font-bold hidden sm:inline">
              {porIdioma(language, { es: 'Libro:', gl: 'Libro:', pt: 'Livro:' })}
            </span>
          </div>
          <select
            id="select-libro-biblico-nivel"
            value={selectedBook}
            onChange={(e) => {
              sounds.playClick();
              onSelectBook(e.target.value);
            }}
            aria-label={porIdioma(language, { es: 'Filtrar por libro bíblico', gl: 'Filtrar por libro bíblico', pt: 'Filtrar por livro bíblico' })}
            className="w-full py-2.5 px-3 rounded-xl bg-theme-card border border-theme/50 focus:border-theme-title-accent text-xs sm:text-sm text-theme-primary font-sans cursor-pointer outline-none"
          >
            <option value="todos">
              {porIdioma(language, { es: `Todos los libros (${totalRetos})`, gl: `Todos os libros (${totalRetos})`, pt: `Todos os livros (${totalRetos})` })}
            </option>
            {availableBooks.map((b) => (
              <option key={b.libro} value={b.libro}>
                {translateBook(b.libro)} ({b.cantidad})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Chips horizontales de libros bíblicos para acceso rápido en escritorio */}
      <div className="space-y-2 pt-1 border-t border-theme/20">
        <div className="flex items-center justify-between gap-2 flex-wrap text-[11px] font-mono">
          <span className="text-theme-secondary font-semibold flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-theme-title-accent" />
            <span>
              {porIdioma(language, { es: 'Filtrar por libro bíblico:', gl: 'Filtrar por libro bíblico:', pt: 'Filtrar por livro bíblico:' })}
            </span>
          </span>

          {/* Contador de resultados y botón reset */}
          <div className="flex items-center gap-3">
            <span className="text-theme-secondary">
              {porIdioma(language, { es: (
                <>
                  Mostrando <strong className="text-theme-title-accent font-bold">{retosFiltrados}</strong> de {totalRetos} retos
                </>
              ), gl: (
                <>
                  Amosando <strong className="text-theme-title-accent font-bold">{retosFiltrados}</strong> de {totalRetos} retos
                </>
              ), pt: (
                <>
                  A mostrar <strong className="text-theme-title-accent font-bold">{retosFiltrados}</strong> de {totalRetos} desafios
                </>
              ) })}
            </span>
            {hasActiveFilters && (
              <button
                id="btn-reset-filtros-nivel"
                onClick={() => {
                  sounds.playClick();
                  onResetFilters();
                }}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-theme-card hover:bg-theme-tools border border-theme/40 text-theme-title-accent hover:text-theme-title font-sans text-xs font-semibold transition-all cursor-pointer"
                title={porIdioma(language, { es: 'Restablecer todos los filtros de búsqueda', gl: 'Restablecer todos os filtros de busca', pt: 'Repor todos os filtros de pesquisa' })}
              >
                <RotateCcw className="w-3 h-3" />
                <span>{porIdioma(language, { es: 'Restablecer', gl: 'Restablecer', pt: 'Repor' })}</span>
              </button>
            )}
          </div>
        </div>

        {/* Lista de botones pills de libros */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => {
              sounds.playClick();
              onSelectBook('todos');
            }}
            className={`px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
              selectedBook === 'todos'
                ? 'bg-theme-title-accent text-white shadow-sm ring-2 ring-theme-title-accent/30'
                : 'bg-theme-card hover:bg-theme-tools border border-theme/40 text-theme-secondary hover:text-theme-primary'
            }`}
          >
            {porIdioma(language, { es: `Todos (${totalRetos})`, gl: `Todos (${totalRetos})`, pt: `Todos (${totalRetos})` })}
          </button>

          {availableBooks.map((b) => {
            const isSelected = selectedBook === b.libro;
            return (
              <button
                key={b.libro}
                onClick={() => {
                  sounds.playClick();
                  onSelectBook(isSelected ? 'todos' : b.libro);
                }}
                className={`px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                  isSelected
                    ? 'bg-theme-title-accent text-white shadow-sm ring-2 ring-theme-title-accent/30'
                    : 'bg-theme-card hover:bg-theme-tools border border-theme/40 text-theme-secondary hover:text-theme-primary'
                }`}
              >
                <span>{translateBook(b.libro)}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-black/10 dark:bg-white/10 text-theme-secondary'
                  }`}
                >
                  {b.cantidad}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
