import { NIVELES_DATABASE, DIFFICULTY_TO_KEY, retoToPuzzleCase, removeCoordinateHints } from './data/niveles';
import { Reto, RetoDatosJuego, PuzzleCase, DifficultyKey, DifficultyLevel, parseTamanoCuadricula } from './types';
import { sounds } from './audio';
import { coincideFiltrosReto, obtenerEtapa } from './utils/searchEngine';
import { aplicarTraduccionReto, traducirEtapa } from './i18n/translateContent';
import { Language } from './i18n/types';
import { leerPreferencia } from './utils/almacenamiento';
import { porIdioma } from './i18n/porIdioma';
import { rasgosHtml } from './data/rasgos';

export interface GameEngineCallbacks {
  onCargarNivel: (caseData: PuzzleCase) => void;
  onLimpiarTablero: () => void;
  onCambiarPantalla?: (pantalla: 'dificultad' | 'seleccion-nivel' | 'juego') => void;
  onCambiarDificultad?: (dificultad: DifficultyLevel) => void;
}

let engineCallbacks: GameEngineCallbacks | null = null;
let currentSelectedDifficulty: DifficultyLevel = 'Fácil';

/**
 * Registra los callbacks del motor del juego (React state) para sincronizar
 * las operaciones de JavaScript puro con el renderizado visual.
 */
export function registerGameEngine(callbacks: GameEngineCallbacks) {
  engineCallbacks = callbacks;
}

/**
 * Oculta o muestra contenedores principales en el DOM (Single Page Application).
 */
export function mostrarPantalla(pantallaId: 'pantalla-dificultad' | 'pantalla-seleccion-nivel' | 'pantalla-juego') {
  if (typeof document !== 'undefined') {
    const pDificultad = document.getElementById('pantalla-dificultad');
    const pSeleccion = document.getElementById('pantalla-seleccion-nivel');
    const pJuego = document.getElementById('pantalla-juego');

    if (pDificultad) {
      pDificultad.style.display = pantallaId === 'pantalla-dificultad' ? 'block' : 'none';
    }
    if (pSeleccion) {
      pSeleccion.style.display = pantallaId === 'pantalla-seleccion-nivel' ? 'block' : 'none';
      if (pantallaId === 'pantalla-seleccion-nivel') {
        const lang =
          (leerPreferencia('murdoku_language') as Language) || 'es';
        generarBotonesNiveles(currentSelectedDifficulty, '', 'todos', lang);
      }
    }
    if (pJuego) {
      pJuego.style.display = pantallaId === 'pantalla-juego' ? 'block' : 'none';
    }
  }

  if (engineCallbacks?.onCambiarPantalla) {
    if (pantallaId === 'pantalla-dificultad') engineCallbacks.onCambiarPantalla('dificultad');
    else if (pantallaId === 'pantalla-seleccion-nivel') engineCallbacks.onCambiarPantalla('seleccion-nivel');
    else if (pantallaId === 'pantalla-juego') engineCallbacks.onCambiarPantalla('juego');
  }
}

/**
 * Limpia el tablero de juego (retira fichas de sospechosos, notas 'X' y apuntes de lápiz).
 * Se invoca al pulsar 'Reiniciar tablero' o al salir del nivel con 'Volver'.
 */
export function limpiarTablero() {
  sounds.playErase();
  if (engineCallbacks?.onLimpiarTablero) {
    engineCallbacks.onLimpiarTablero();
  }
}

/**
 * Carga un nivel en el motor de juego a partir de su sub-objeto datos_juego,
 * de un objeto Reto completo, de un PuzzleCase o de un ID en texto.
 * 1. Pinta el tablero con sus dimensiones, habitaciones y objetos estáticos.
 * 2. Carga los sospechosos y sus pistas textuales asignadas en el panel.
 * 3. Establece la solución pericial para la comprobación del caso.
 * 4. Muestra la pantalla-juego y oculta la selección de nivel.
 */
export function cargarNivel(
  datos_juego: RetoDatosJuego | Reto | PuzzleCase | string,
  meta?: { id?: string; nombre?: string; dificultad?: DifficultyLevel }
) {
  sounds.playStamp();

  let puzzleCase: PuzzleCase;

  // Catálogo completo de retos enlazados con su dificultad canónica
  const allRetoEntries: { reto: Reto; diff: DifficultyLevel }[] = [
    ...NIVELES_DATABASE.easy.map((r) => ({ reto: r, diff: 'Fácil' as DifficultyLevel })),
    ...NIVELES_DATABASE.medium.map((r) => ({ reto: r, diff: 'Medio' as DifficultyLevel })),
    ...NIVELES_DATABASE.hard.map((r) => ({ reto: r, diff: 'Difícil' as DifficultyLevel }))
  ];

  // Caso 1: Se pasa un ID en texto (ej: '001', '004', 'easy-1', 'medium-1')
  if (typeof datos_juego === 'string') {
    const term = datos_juego.trim();
    const foundEntry = allRetoEntries.find(
      (e) =>
        e.reto.id === term ||
        e.reto.id === term.padStart(3, '0') ||
        term.includes(e.reto.id) ||
        e.reto.nombre.toLowerCase().includes(term.toLowerCase())
    );

    if (!foundEntry) {
      console.error(`[Murdoku] No se encontró el reto con ID o nombre: ${datos_juego}`);
      return;
    }

    const diff = meta?.dificultad || foundEntry.diff;
    puzzleCase = retoToPuzzleCase(foundEntry.reto, diff);
  }
  // Caso 2: Si ya es un PuzzleCase con todas sus propiedades
  else if (
    'title' in (datos_juego as any) &&
    'cellRooms' in (datos_juego as any) &&
    'suspects' in (datos_juego as any)
  ) {
    puzzleCase = datos_juego as PuzzleCase;
  }
  // Caso 3: Si se pasa un objeto Reto completo
  else if ('datos_juego' in (datos_juego as any)) {
    const reto = datos_juego as Reto;
    const foundEntry = allRetoEntries.find((e) => e.reto.id === reto.id);
    const size = reto.datos_juego.gridSize || 5;
    const diff: DifficultyLevel =
      meta?.dificultad || foundEntry?.diff || (size === 5 ? 'Fácil' : size === 7 ? 'Medio' : 'Difícil');
    puzzleCase = retoToPuzzleCase(reto, diff);
  }
  // Caso 4: Se pasa directamente el sub-objeto RetoDatosJuego (como pide la especificación pericial)
  else {
    const dj = datos_juego as RetoDatosJuego;
    // Buscar en la base de datos si coincide con algún reto conocido para heredar todos los metadatos históricos y forenses
    const foundEntry = allRetoEntries.find(
      (entry) =>
        entry.reto.datos_juego === dj ||
        entry.reto.id === meta?.id ||
        entry.reto.id === (dj as any).id ||
        entry.reto.id === (dj as any).retoId ||
        (entry.reto.datos_juego.victimId === dj.victimId &&
          entry.reto.datos_juego.murdererId === dj.murdererId &&
          entry.reto.datos_juego.gridSize === dj.gridSize)
    );

    if (foundEntry) {
      const diff = meta?.dificultad || foundEntry.diff;
      puzzleCase = retoToPuzzleCase(foundEntry.reto, diff);
    } else {
      const retoId = meta?.id || (dj as any).id || 'custom-reto';
      const retoNombre = meta?.nombre || (dj as any).nombre || 'Caso Forense';
      const size = dj.gridSize || 5;
      const { rows, cols, totalCells, label } = parseTamanoCuadricula(
        dj.Tamano_Cuadricula || dj.gridSize,
        size
      );
      const diff: DifficultyLevel =
        meta?.dificultad || (size === 5 ? 'Fácil' : size === 7 ? 'Medio' : 'Difícil');

      puzzleCase = {
        id: retoId,
        retoId,
        title: `Caso ${retoId}: ${retoNombre}`,
        subtitle: dj.subtitle || `Misterio de deducción · Nivel ${diff}`,
        badge: dj.badge || `${retoNombre.toUpperCase()} · ${label}`,
        categoria: dj.categoria,
        rasgos: dj.rasgos || [],
        fuenteHistorica: dj.fuenteHistorica,
        textoClave: dj.textoClave,
        contextoHistorico: dj.contextoHistorico,
        solucionExplicacion: dj.solucionExplicacion,
        difficulty: diff,
        gridSize: size,
        rows,
        cols,
        totalCells,
        Tamano_Cuadricula: label,
        victimId: dj.victimId,
        murdererId: dj.murdererId,
        rooms: dj.rooms,
        cellRooms: dj.cellRooms,
        blockedObjects: dj.blockedObjects || {},
        suspects: dj.suspects.map((s) => ({
          ...s,
          clueText: removeCoordinateHints(s.clueText)
        })),
        clues: dj.clues.map((c) => ({
          ...c,
          text: removeCoordinateHints(c.text),
          narrative: removeCoordinateHints(c.narrative)
        })),
        solution: dj.solution,
        storyIntro: dj.storyIntro,
        epilogue: dj.epilogue
      };
    }
  }

  currentSelectedDifficulty = puzzleCase.difficulty;

  if (typeof document !== 'undefined') {
    // Inyectar la variable CSS --grid-size en el contenedor del tablero en el DOM
    const boardWrapper = document.getElementById('contenedor-tablero-wrapper');
    if (boardWrapper) {
      boardWrapper.style.setProperty('--grid-size', String(puzzleCase.gridSize));
    }
    const boardGrid = document.getElementById('tablero-cuadricula');
    if (boardGrid) {
      boardGrid.style.setProperty('--grid-size', String(puzzleCase.gridSize));
    }

    // 1. Ocultar pantalla-seleccion-nivel
    const pantallaSeleccion = document.getElementById('pantalla-seleccion-nivel');
    if (pantallaSeleccion) {
      pantallaSeleccion.style.display = 'none';
    }

    // 3. Mostrar la pantalla-juego
    const pantallaJuego = document.getElementById('pantalla-juego');
    if (pantallaJuego) {
      pantallaJuego.style.display = 'block';
    }
  }

  // 2. Pasar los datos del nivel seleccionado a nuestro motor de juego
  if (engineCallbacks?.onCargarNivel) {
    engineCallbacks.onCargarNivel(puzzleCase);
  }

  if (engineCallbacks?.onCambiarPantalla) {
    engineCallbacks.onCambiarPantalla('juego');
  }

  if (engineCallbacks?.onCambiarDificultad) {
    engineCallbacks.onCambiarDificultad(puzzleCase.difficulty);
  }
}

/**
 * Lee la base de datos JSON (NIVELES_DATABASE) para la categoría especificada
 * y genera dinámicamente una lista de botones interactivos para cada reto,
 * inyectándolos en el contenedor de pantalla-seleccion-nivel, con soporte para
 * filtrado por palabras clave y etapa.
 */
export function generarBotonesNiveles(
  categoria: DifficultyKey | DifficultyLevel | string,
  filtroTexto: string = '',
  filtroLibro: string = 'todos',
  idioma?: Language
) {
  const lang: Language =
    idioma ||
    ((leerPreferencia('murdoku_language') as Language) || 'es');

  // Normalizar categoría ('Fácil' -> 'easy', 'Medio' -> 'medium', 'Difícil' -> 'hard')
  const catKey: 'easy' | 'medium' | 'hard' =
    categoria === 'Fácil' || categoria === 'easy'
      ? 'easy'
      : categoria === 'Medio' || categoria === 'medium'
      ? 'medium'
      : 'hard';

  currentSelectedDifficulty =
    catKey === 'easy' ? 'Fácil' : catKey === 'medium' ? 'Medio' : 'Difícil';

  if (typeof document === 'undefined') {
    return;
  }

  const retosBase: Reto[] = NIVELES_DATABASE[catKey] || [];
  const retos: Reto[] = retosBase.filter((r) =>
    coincideFiltrosReto(r, filtroTexto, filtroLibro)
  );
  const contenedor = document.getElementById('contenedor-niveles');

  if (!contenedor) {
    console.warn('[Murdoku] Contenedor #contenedor-niveles no encontrado en el DOM.');
    return;
  }

  // Vaciar el contenedor para inyectar la nueva lista dinámica
  contenedor.innerHTML = '';

  if (retos.length === 0) {
    const emptyMsg = document.createElement('div');
    emptyMsg.className =
      'col-span-1 md:col-span-2 text-center py-12 px-6 rounded-2xl border-2 border-dashed border-theme/40 bg-theme-panel/60 space-y-3';
    emptyMsg.innerHTML = `
      <div class="text-4xl">🔍</div>
      <h4 class="text-base font-bold font-murdoku-sans text-theme-title">
        ${porIdioma(lang, { es: 'No se encontraron retos coincidentes', gl: 'Non se atoparon retos coincidentes', pt: 'Não foram encontrados desafios correspondentes' })}
      </h4>
      <p class="text-xs text-theme-secondary max-w-md mx-auto font-sans leading-relaxed">
        ${
          porIdioma(lang, { es: `No hay expedientes en el nivel <strong>${currentSelectedDifficulty}</strong> que coincidan con los criterios de búsqueda actuales. Prueba con otra palabra clave o restablece los filtros.`, gl: `Non hai expedientes no nivel <strong>${currentSelectedDifficulty}</strong> que coincidan cos criterios de busca actuais. Proba con outra palabra clave ou restablece os filtros.`, pt: `Não há processos no nível <strong>${currentSelectedDifficulty}</strong> que correspondam aos critérios de pesquisa atuais. Experimenta outra palavra-chave ou repõe os filtros.` })
        }
      </p>
    `;
    contenedor.appendChild(emptyMsg);
    return;
  }

  // Generar dinámicamente un botón/tarjeta interactiva para cada reto
  retos.forEach((retoOrig) => {
    const reto = aplicarTraduccionReto(retoOrig, lang);
    const dj = reto.datos_juego;
    const victim = dj.suspects.find((s) => s.id === dj.victimId || s.isVictim);
    const roomList = Object.values(dj.rooms || {}).map((r) => r.name || r.shortName).filter(Boolean);
    const roomPreview = roomList.slice(0, 3).join(', ') + (roomList.length > 3 ? ` (+${roomList.length - 3})` : '');
    const blockedCount = Object.keys(dj.blockedObjects || {}).length;
    const roomsCount = Object.keys(dj.rooms || {}).length;
    const diffLabel: DifficultyLevel = currentSelectedDifficulty;
    const rawLibro = obtenerEtapa(dj.fuenteHistorica);
    const libro = traducirEtapa(rawLibro, lang);

    // Crear elemento tarjeta
    const tarjeta = document.createElement('div');
    tarjeta.id = `tarjeta-caso-${reto.id}`;
    tarjeta.className =
      'group relative flex flex-col justify-between h-full bg-theme-panel rounded-2xl border-2 border-theme hover:border-theme-title-accent shadow-md hover:shadow-xl transition-all duration-200 p-5 sm:p-6 cursor-pointer hover:-translate-y-0.5';

    // Construcción del HTML interno de la tarjeta con distribución balanceada
    tarjeta.innerHTML = `
      <div class="flex flex-col gap-4 flex-1">
        <!-- 1. Cabecera integrada (en flujo normal, sin colisiones absolutas) -->
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 border-b border-theme/20">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-black/10 dark:bg-black/40 text-theme-title-accent border border-theme/30 shadow-2xs">
              <span class="text-amber-500">📁</span>
              <span>CASO ${reto.id}</span>
            </span>
            <span class="inline-flex items-center text-[10.5px] font-mono px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-200 border border-blue-300 dark:border-blue-700/50 font-bold tracking-wide">
              📜 ${libro}
            </span>
            ${dj.categoria ? `
              <span class="inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-600/40 font-bold uppercase tracking-wide">
                ${dj.categoria}
              </span>
            ` : ''}
          </div>

          <div class="flex items-center gap-1.5 shrink-0">
            <span class="inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-theme-tools text-theme-title border border-theme/40 shadow-2xs">
              <span>📐</span>
              <span>${dj.Tamano_Cuadricula || `${dj.gridSize}x${dj.gridSize}`}</span>
            </span>
          </div>
        </div>

        <!-- 2. Título del caso y Fuente histórica -->
        <div class="space-y-1">
          <h3 class="text-xl font-bold font-murdoku-sans text-theme-title group-hover:text-theme-title-accent transition-colors leading-snug">
            ${reto.nombre}
          </h3>
          ${rasgosHtml(dj.rasgos, lang)}
          ${dj.fuenteHistorica ? `
            <div class="flex items-center gap-1.5 text-xs text-sky-700 dark:text-sky-300 font-mono font-semibold">
              <span class="text-xs">📖</span>
              <span>${dj.fuenteHistorica}</span>
            </div>
          ` : ''}
        </div>

        <!-- 3. Contenedor de Sinopsis Pericial y Texto Clave -->
        <div class="bg-theme-card/85 dark:bg-stone-900/60 p-3.5 sm:p-4 rounded-xl border border-theme/30 shadow-2xs space-y-2.5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-1.5 mb-1.5 text-theme-title-accent">
              <span class="text-xs">🔍</span>
              <span class="font-mono text-[10.5px] font-bold uppercase tracking-wider">
                ${porIdioma(lang, { es: 'Informe Pericial del Caso', gl: 'Informe Pericial do Caso', pt: 'Relatório Pericial do Caso' })}
              </span>
            </div>
            <p class="text-xs sm:text-[13px] text-theme-primary font-sans leading-relaxed break-words">
              ${dj.storyIntro}
            </p>
          </div>
          ${dj.textoClave ? `
            <div class="pt-2 border-t border-theme/20 flex items-start gap-2 text-xs italic text-theme-secondary font-serif leading-relaxed">
              <span class="text-amber-500 dark:text-amber-400 font-serif font-bold text-sm leading-none shrink-0 mt-0.5">❝</span>
              <p class="line-clamp-2">${dj.textoClave}</p>
            </div>
          ` : ''}
        </div>

        <!-- 4. Personajes Involucrados con Distinción de Víctima y Roles -->
        <div class="space-y-1.5">
          <div class="flex items-center justify-between text-[11px] font-mono font-semibold text-theme-secondary">
            <span class="uppercase tracking-wider flex items-center gap-1">
              <span>👥</span>
              <span>${porIdioma(lang, { es: 'Personajes', gl: 'Persoas', pt: 'Personagens' })} (${dj.suspects.length}):</span>
            </span>
            ${victim ? `
              <span class="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-700 font-bold">
                <span>✝️ ${porIdioma(lang, { es: 'Víctima', gl: 'Vítima', pt: 'Vítima' })}:</span>
                <span>${victim.name}</span>
              </span>
            ` : ''}
          </div>

          <div class="flex flex-wrap gap-1.5">
            ${dj.suspects
              .map((s) => {
                const isVictim = s.id === dj.victimId || s.isVictim;
                return `
                  <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${
                    isVictim
                      ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800/60 text-rose-900 dark:text-rose-200 font-bold'
                      : 'bg-theme-card border-theme/30 text-theme-primary'
                  } border text-xs shadow-2xs hover:border-theme-title-accent transition-colors" title="${s.name} (${s.role})">
                    <span class="text-sm leading-none">${s.avatar}</span>
                    <span class="font-typewriter text-[11px] font-semibold">${s.name}</span>
                    <span class="text-[9.5px] text-theme-secondary font-sans hidden sm:inline">· ${s.role}</span>
                  </div>
                `;
              })
              .join('')}
          </div>
        </div>

        <!-- 5. Metadatos de la Escena (Estancias y Obstáculos) -->
        <div class="grid grid-cols-2 gap-2 text-xs pt-0.5">
          <div class="flex items-center gap-2 bg-theme-card px-3 py-2 rounded-lg border border-theme/25 shadow-2xs" title="${roomList.join(', ')}">
            <span class="text-amber-500 font-bold text-base shrink-0">🏛️</span>
            <div class="flex flex-col min-w-0">
              <span class="text-[10px] font-mono text-theme-secondary uppercase tracking-wider">
                ${porIdioma(lang, { es: 'Estancias', gl: 'Estancias', pt: 'Divisões' })} (${roomsCount})
              </span>
              <span class="text-theme-title font-mono font-bold text-[11px] truncate">
                ${roomPreview || (porIdioma(lang, { es: `${roomsCount} Habitaciones`, gl: `${roomsCount} Habitacións`, pt: `${roomsCount} Divisões` }))}
              </span>
            </div>
          </div>
          <div class="flex items-center gap-2 bg-theme-card px-3 py-2 rounded-lg border border-theme/25 shadow-2xs">
            <span class="text-emerald-500 font-bold text-base shrink-0">📍</span>
            <div class="flex flex-col min-w-0">
              <span class="text-[10px] font-mono text-theme-secondary uppercase tracking-wider">
                ${porIdioma(lang, { es: 'Entorno Escena', gl: 'Contorna Escena', pt: 'Envolvente da Cena' })}
              </span>
              <span class="text-theme-title font-mono font-bold text-[11px] truncate">
                ${
                  blockedCount > 0
                    ? `${blockedCount} ${porIdioma(lang, { es: 'Obstáculos fijos', gl: 'Obstáculos fixos', pt: 'Obstáculos fixos' })}`
                    : porIdioma(lang, { es: 'Sin obstáculos', gl: 'Sen obstáculos', pt: 'Sem obstáculos' })
                }
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 6. Pie con regla fundamental y botón de investigar -->
      <div class="mt-4 pt-3.5 border-t border-theme/20 flex items-center justify-between gap-2">
        <div class="flex items-center gap-1.5 text-xs text-theme-secondary font-typewriter">
          <span class="text-emerald-600 dark:text-emerald-400 font-bold">⚖️</span>
          <span class="text-[11px]">
            ${porIdioma(lang, { es: '1 persona por fila y col.', gl: '1 persoa por fila e col.', pt: '1 pessoa por linha e col.' })}
          </span>
        </div>
        <button
          id="btn-nivel-${reto.id}"
          class="btn-jugar-reto flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-typewriter text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer ring-2 ring-emerald-500/30 active:scale-95 shrink-0"
        >
          <span>▶</span>
          <span>${porIdioma(lang, { es: 'Investigar Caso', gl: 'Investigar Caso', pt: 'Investigar Caso' })}</span>
        </button>
      </div>
    `;

    // Vincular el evento click del botón del nivel a cargarNivel(datos_juego)
    // "Cada botón de nivel generado en el contenedor llamará a la función cargarNivel() pasando como argumento los datos_juego de ese nivel."
    const botonJugar = tarjeta.querySelector(`#btn-nivel-${reto.id}`);
    if (botonJugar) {
      botonJugar.addEventListener('click', (e) => {
        e.stopPropagation();
        cargarNivel(reto.datos_juego, { id: reto.id, nombre: reto.nombre, dificultad: diffLabel });
      });
    }

    // Permitir también hacer click en toda la tarjeta para abrir el caso
    tarjeta.addEventListener('click', () => {
      cargarNivel(reto.datos_juego, { id: reto.id, nombre: reto.nombre, dificultad: diffLabel });
    });

    contenedor.appendChild(tarjeta);
  });
}

/**
 * Inicializa los controladores de eventos en los botones del DOM:
 * - Botones de dificultad (Fácil, Medio, Difícil).
 * - Botón de volver a dificultades (en pantalla-seleccion-nivel).
 * - Botón de volver a selección de niveles (en pantalla-juego), limpiando el tablero.
 */
export function inicializarEventosNavegacion() {
  // 1. Botón Fácil
  const btnFacil = document.getElementById('btn-dificultad-facil');
  if (btnFacil && !(btnFacil as any)._hasNavListener) {
    (btnFacil as any)._hasNavListener = true;
    btnFacil.addEventListener('click', () => {
      sounds.playStamp();
      currentSelectedDifficulty = 'Fácil';
      mostrarPantalla('pantalla-seleccion-nivel');
      generarBotonesNiveles('easy');
      if (engineCallbacks?.onCambiarDificultad) {
        engineCallbacks.onCambiarDificultad('Fácil');
      }
    });
  }

  // 2. Botón Medio
  const btnMedio = document.getElementById('btn-dificultad-medio');
  if (btnMedio && !(btnMedio as any)._hasNavListener) {
    (btnMedio as any)._hasNavListener = true;
    btnMedio.addEventListener('click', () => {
      sounds.playStamp();
      currentSelectedDifficulty = 'Medio';
      mostrarPantalla('pantalla-seleccion-nivel');
      generarBotonesNiveles('medium');
      if (engineCallbacks?.onCambiarDificultad) {
        engineCallbacks.onCambiarDificultad('Medio');
      }
    });
  }

  // 3. Botón Difícil
  const btnDificil = document.getElementById('btn-dificultad-dificil');
  if (btnDificil && !(btnDificil as any)._hasNavListener) {
    (btnDificil as any)._hasNavListener = true;
    btnDificil.addEventListener('click', () => {
      sounds.playStamp();
      currentSelectedDifficulty = 'Difícil';
      mostrarPantalla('pantalla-seleccion-nivel');
      generarBotonesNiveles('hard');
      if (engineCallbacks?.onCambiarDificultad) {
        engineCallbacks.onCambiarDificultad('Difícil');
      }
    });
  }

  // 4. Botón Volver a Dificultades (en pantalla-seleccion-nivel)
  const btnVolverDificultad = document.getElementById('btn-volver-dificultad');
  if (btnVolverDificultad && !(btnVolverDificultad as any)._hasNavListener) {
    (btnVolverDificultad as any)._hasNavListener = true;
    btnVolverDificultad.addEventListener('click', () => {
      sounds.playClick();
      mostrarPantalla('pantalla-dificultad');
    });
  }

  // 5. Botón Volver a Selección de Nivel (en pantalla-juego)
  const btnVolverJuego = document.getElementById('btn-volver-seleccion-nivel');
  if (btnVolverJuego && !(btnVolverJuego as any)._hasNavListener) {
    (btnVolverJuego as any)._hasNavListener = true;
    btnVolverJuego.addEventListener('click', () => {
      sounds.playClick();
      // "limpiando el tablero del juego cuando se salga de un nivel"
      limpiarTablero();
      mostrarPantalla('pantalla-seleccion-nivel');
      generarBotonesNiveles(currentSelectedDifficulty);
    });
  }
}

// Exponer funciones en el objeto global window para depuración pericial y pruebas en consola
if (typeof window !== 'undefined') {
  (window as any).NIVELES_DATABASE = NIVELES_DATABASE;
  (window as any).cargarNivel = cargarNivel;
  (window as any).limpiarTablero = limpiarTablero;
  (window as any).generarBotonesNiveles = generarBotonesNiveles;
  (window as any).mostrarPantalla = mostrarPantalla;
}
