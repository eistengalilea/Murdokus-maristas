/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { CASES } from './cases';
import { PuzzleCase, CellState, CellCoord, MurdererEvaluation, DifficultyLevel } from './types';
import { sounds } from './audio';
import { evaluateMurdererRule } from './utils/deduction';
import { PantallaDificultad } from './components/PantallaDificultad';
import { PantallaSeleccionNivel } from './components/PantallaSeleccionNivel';
import { CaseHeader } from './components/CaseHeader';
import { GameBoard } from './components/GameBoard';
import { SuspectsToolbar } from './components/SuspectsToolbar';
import { CluesNotebook } from './components/CluesNotebook';
import { AccusationModal } from './components/AccusationModal';
import { RulesModal } from './components/RulesModal';
import { VictoryModal } from './components/VictoryModal';
import { DescargarPdfModal } from './components/DescargarPdfModal';
import { ThemeToggle } from './components/ThemeToggle';
import { prepararImpresion, actualizarVistaImpresion, imprimirReto } from './utils/impresion';
import { generarYDescargarPDF } from './utils/generadorPdfDescarga';
import { useLanguage } from './i18n/LanguageContext';
import { mensajesJuego } from './i18n/mensajesJuego';
import { pistaCompletaPersonaje } from './utils/pistasPosicion';
import { Language } from './i18n/types';
import { 
  CheckCheck, 
  Gavel, 
  Lightbulb, 
  AlertCircle, 
  HelpCircle, 
  FileCheck2,
  RotateCcw,
  ArrowLeft
} from 'lucide-react';
import {
  registerGameEngine,
  inicializarEventosNavegacion,
  generarBotonesNiveles
} from './navigation';

const createEmptyGrid = (size: number): CellState[][] => {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => ({
      occupant: null,
      isX: false,
      notes: []
    }))
  );
};

export default function App() {
  const { t, language, translateCase } = useLanguage();
  const M = mensajesJuego(language);

  // SPA Navigation state: 'dificultad' | 'seleccion-nivel' | 'juego' (Default: 'dificultad')
  const [currentScreen, setCurrentScreen] = useState<'dificultad' | 'seleccion-nivel' | 'juego'>('dificultad');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>('Fácil');

  const [activeCase, setActiveCase] = useState<PuzzleCase>(CASES[0]);
  const currentCase = activeCase;

  // Memoized localized case for display in the UI
  const displayCase = useMemo(() => translateCase(currentCase), [currentCase, translateCase, language]);

  // PDF modal state for language choice (Castellano vs Gallego)
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Grid state
  const [grid, setGrid] = useState<CellState[][]>(() => createEmptyGrid(currentCase.gridSize));
  
  // History for Undo / Redo
  const [history, setHistory] = useState<CellState[][][]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  // Active interaction tools
  const [activeTool, setActiveTool] = useState<'place' | 'x' | 'erase' | 'notes'>('place');
  const [activeSuspectId, setActiveSuspectId] = useState<string | null>(currentCase.suspects[0]?.id || 'A');
  const [isNotesMode, setIsNotesMode] = useState(false);

  // Hover highlighting from clues
  const [highlightedCells, setHighlightedCells] = useState<CellCoord[]>([]);

  // Strikethrough clues
  const [checkedClueIds, setCheckedClueIds] = useState<Set<string>>(new Set());

  // Timer
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [movesCount, setMovesCount] = useState(0);

  // Modals
  const [isAccusationOpen, setIsAccusationOpen] = useState(false);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [isVictoryOpen, setIsVictoryOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [murdererEvaluation, setMurdererEvaluation] = useState<MurdererEvaluation | null>(null);
  // La acusación solo se desbloquea cuando las posiciones del tablero se han comprobado como correctas
  const [posicionesVerificadas, setPosicionesVerificadas] = useState(false);

  // Verification toast / status feedback
  const [verificationFeedback, setVerificationFeedback] = useState<{
    type: 'success' | 'warning' | 'info';
    title?: string;
    message: string;
  } | null>(null);

  // Sudoku conflict flash state (flashing red rows/cols on rule violation)
  const [conflictFlash, setConflictFlash] = useState<{
    rows: number[];
    cols: number[];
    targetCell?: { row: number; col: number };
  } | null>(null);
  const conflictTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Initialize or change case
  const resetCase = useCallback((target: number | PuzzleCase) => {
    const targetCase = typeof target === 'number' ? CASES[target] : target;
    setActiveCase(targetCase);
    const initialGrid = createEmptyGrid(targetCase.gridSize);
    setGrid(initialGrid);
    setHistory([initialGrid]);
    setHistoryIndex(0);
    setActiveSuspectId(targetCase.suspects[0]?.id || 'A');
    setActiveTool('place');
    setIsNotesMode(false);
    setCheckedClueIds(new Set());
    setTimerSeconds(0);
    setIsTimerRunning(true);
    setMovesCount(0);
    setHighlightedCells([]);
    setVerificationFeedback(null);
    setConflictFlash(null);
    setMurdererEvaluation(null);
    if (conflictTimeoutRef.current) {
      clearTimeout(conflictTimeoutRef.current);
    }
    setIsVictoryOpen(false);
    setIsAccusationOpen(false);
    setSelectedDifficulty(targetCase.difficulty);
  }, []);

  // Update history on grid change
  const pushHistory = (newGrid: CellState[][]) => {
    const updatedHistory = history.slice(0, historyIndex + 1);
    updatedHistory.push(newGrid);
    setHistory(updatedHistory);
    setHistoryIndex(updatedHistory.length - 1);
    setMovesCount((prev) => prev + 1);
  };

  // Switch case handler
  const handleSelectCase = (caseId: string) => {
    const found = CASES.find((c) => c.id === caseId);
    if (found) {
      resetCase(found);
    }
  };

  // Reiniciar tablero: limpia las fichas y marcas del caso actual
  const handleResetBoard = useCallback(() => {
    sounds.playErase();
    resetCase(activeCase);
  }, [activeCase, resetCase]);

  // Sincronización con eventos y funciones JavaScript de navegación
  useEffect(() => {
    registerGameEngine({
      onCargarNivel: (caseData) => {
        resetCase(caseData);
        setCurrentScreen('juego');
      },
      onLimpiarTablero: () => {
        handleResetBoard();
      },
      onCambiarPantalla: (pantalla) => {
        setCurrentScreen(pantalla);
      },
      onCambiarDificultad: (diff) => {
        setSelectedDifficulty(diff);
      }
    });

    inicializarEventosNavegacion();
  }, [resetCase, handleResetBoard]);

  // Cualquier cambio en el tablero obliga a volver a comprobar antes de acusar
  useEffect(() => {
    setPosicionesVerificadas(false);
  }, [grid]);

  // Timer tick
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  // Initial load
  useEffect(() => {
    resetCase(0);
  }, [resetCase]);

  // Cell click handler
  const handleCellClick = (row: number, col: number) => {
    // 1. Cannot place in blocked inanimate objects!
    if (currentCase.blockedObjects[`${row},${col}`]) {
      sounds.playWarning();
      setVerificationFeedback({
        type: 'warning',
        message: M.casillaBloqueada
      });
      return;
    }

    const currentCell = grid[row][col];
    const newGrid = grid.map((r) => r.map((c) => ({ ...c, notes: [...c.notes] })));

    // Click on a cell with an occupant:
    // "Si hace clic de nuevo en el personaje colocado en el tablero, debe volver al panel (quitarlo del tablero)."
    if (currentCell.occupant) {
      if (isNotesMode || activeTool === 'notes') {
        if (!activeSuspectId) return;
        sounds.playClick();
        const existingNotes = currentCell.notes;
        if (existingNotes.includes(activeSuspectId)) {
          newGrid[row][col].notes = existingNotes.filter((n) => n !== activeSuspectId);
        } else {
          newGrid[row][col].notes = [...existingNotes, activeSuspectId];
        }
        setGrid(newGrid);
        pushHistory(newGrid);
        return;
      }

      // Clicking on the placed character returns them to the character panel
      sounds.playErase();
      newGrid[row][col] = { occupant: null, isX: false, notes: [] };
      setGrid(newGrid);
      pushHistory(newGrid);
      return;
    }

    // Mode: Notes (Lápiz) on empty cell
    if (isNotesMode || activeTool === 'notes') {
      if (!activeSuspectId) return;
      sounds.playClick();
      const existingNotes = currentCell.notes;
      if (existingNotes.includes(activeSuspectId)) {
        newGrid[row][col].notes = existingNotes.filter((n) => n !== activeSuspectId);
      } else {
        newGrid[row][col].notes = [...existingNotes, activeSuspectId];
      }
      setGrid(newGrid);
      pushHistory(newGrid);
      return;
    }

    // Tool: Erase
    if (activeTool === 'erase') {
      if (currentCell.isX || currentCell.notes.length > 0) {
        sounds.playErase();
        newGrid[row][col] = { occupant: null, isX: false, notes: [] };
        setGrid(newGrid);
        pushHistory(newGrid);
      }
      return;
    }

    // Tool: Mark 'X'
    if (activeTool === 'x') {
      sounds.playClick();
      if (currentCell.isX) {
        newGrid[row][col].isX = false;
      } else {
        newGrid[row][col] = { occupant: null, isX: true, notes: [] };
      }
      setGrid(newGrid);
      pushHistory(newGrid);
      return;
    }

    // Tool: Place Suspect in empty cell
    if (activeTool === 'place' && activeSuspectId) {
      // REGLA BASE SUDOKU: Solo puede haber una persona por cada fila y por cada columna.
      // Los objetos estáticos (árbol, silla) y las marcas 'X' no cuentan para esta regla.
      // Solo restringe a los personajes (sospechosos y víctima).
      let conflictingRowColIdx: number | null = null;
      let conflictingRowSuspectId: string | null = null;
      for (let c = 0; c < currentCase.gridSize; c++) {
        if (c !== col) {
          const occ = grid[row][c]?.occupant;
          if (occ && occ !== activeSuspectId) {
            conflictingRowColIdx = c;
            conflictingRowSuspectId = occ;
            break;
          }
        }
      }

      let conflictingColRowIdx: number | null = null;
      let conflictingColSuspectId: string | null = null;
      for (let r = 0; r < currentCase.gridSize; r++) {
        if (r !== row) {
          const occ = grid[r][col]?.occupant;
          if (occ && occ !== activeSuspectId) {
            conflictingColRowIdx = r;
            conflictingColSuspectId = occ;
            break;
          }
        }
      }

      // If there is any character already present in this row or column:
      if (conflictingRowSuspectId !== null || conflictingColSuspectId !== null) {
        sounds.playWarning();

        const conflictRows = conflictingRowSuspectId !== null ? [row] : [];
        const conflictCols = conflictingColSuspectId !== null ? [col] : [];

        const rowSuspect = conflictingRowSuspectId
          ? currentCase.suspects.find((s) => s.id === conflictingRowSuspectId)?.name || conflictingRowSuspectId
          : null;
        const colSuspect = conflictingColSuspectId
          ? currentCase.suspects.find((s) => s.id === conflictingColSuspectId)?.name || conflictingColSuspectId
          : null;

        let detailMsg = '';
        if (rowSuspect && colSuspect) {
          detailMsg = M.conflictoFilaColumna(row + 1, rowSuspect, col + 1, colSuspect);
        } else if (rowSuspect) {
          detailMsg = M.conflictoFila(row + 1, rowSuspect);
        } else {
          detailMsg = M.conflictoColumna(col + 1, colSuspect as string);
        }

        setVerificationFeedback({
          type: 'warning',
          message: M.reglaSudokuConflicto(detailMsg)
        });

        setConflictFlash({
          rows: conflictRows,
          cols: conflictCols,
          targetCell: { row, col }
        });

        if (conflictTimeoutRef.current) {
          clearTimeout(conflictTimeoutRef.current);
        }
        conflictTimeoutRef.current = setTimeout(() => {
          setConflictFlash(null);
        }, 1200);

        // Disallow placement: do not modify grid
        return;
      }

      sounds.playPlace();
      
      // If this suspect is already placed elsewhere, remove from old cell
      for (let r = 0; r < currentCase.gridSize; r++) {
        for (let c = 0; c < currentCase.gridSize; c++) {
          if (newGrid[r][c].occupant === activeSuspectId) {
            newGrid[r][c].occupant = null;
          }
        }
      }
      newGrid[row][col] = { occupant: activeSuspectId, isX: false, notes: [] };

      setGrid(newGrid);
      pushHistory(newGrid);
    }
  };

  // Direct helper to unplace suspect from character panel
  const handleUnplaceSuspect = (suspectId: string) => {
    sounds.playErase();
    const newGrid = grid.map((r) => r.map((c) => ({ ...c, notes: [...c.notes] })));
    for (let r = 0; r < currentCase.gridSize; r++) {
      for (let c = 0; c < currentCase.gridSize; c++) {
        if (newGrid[r][c].occupant === suspectId) {
          newGrid[r][c] = { occupant: null, isX: false, notes: [] };
        }
      }
    }
    setGrid(newGrid);
    pushHistory(newGrid);
  };

  // Right-click quick toggle 'X'
  const handleCellRightClick = (row: number, col: number, e: React.MouseEvent) => {
    e.preventDefault();
    if (currentCase.blockedObjects[`${row},${col}`]) return;

    sounds.playClick();
    const currentCell = grid[row][col];
    const newGrid = grid.map((r) => r.map((c) => ({ ...c, notes: [...c.notes] })));

    if (currentCell.isX) {
      newGrid[row][col].isX = false;
    } else {
      newGrid[row][col] = { occupant: null, isX: true, notes: [] };
    }

    setGrid(newGrid);
    pushHistory(newGrid);
  };

  // Undo / Redo
  const handleUndo = () => {
    if (historyIndex > 0) {
      const prevGrid = history[historyIndex - 1];
      setHistoryIndex(historyIndex - 1);
      setGrid(prevGrid);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const nextGrid = history[historyIndex + 1];
      setHistoryIndex(historyIndex + 1);
      setGrid(nextGrid);
    }
  };

  // Check Solution / Forensic Diagnostics
  const handleVerifyGrid = () => {
    sounds.playStamp();
    const size = currentCase.gridSize;
    let placedCount = 0;
    const placedPositions: Record<string, CellCoord> = {};

    // Check row / col duplicates
    const rowCounts: Record<number, number> = {};
    const colCounts: Record<number, number> = {};

    for (let r = 0; r < size; r++) {
      rowCounts[r] = 0;
      colCounts[r] = 0;
    }

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        const occ = grid[r][c].occupant;
        if (occ) {
          placedCount++;
          placedPositions[occ] = { row: r, col: c };
          rowCounts[r] = (rowCounts[r] || 0) + 1;
          colCounts[c] = (colCounts[c] || 0) + 1;
        }
      }
    }

    // 1. Check for duplicates in rows or columns
    const hasRowConflict = Object.values(rowCounts).some((count) => count > 1);
    const hasColConflict = Object.values(colCounts).some((count) => count > 1);

    if (hasRowConflict || hasColConflict) {
      sounds.playWarning();
      setVerificationFeedback({
        type: 'warning',
        title: M.algoNoCuadra,
        message: M.infraccionSudoku
      });
      return;
    }

    // 2. Check how many are placed
    if (placedCount < currentCase.suspects.length) {
      sounds.playWarning();
      setVerificationFeedback({
        type: 'warning',
        title: M.algoNoCuadra,
        message: M.faltanPersonajes(placedCount, currentCase.suspects.length)
      });
      return;
    }

    // 3. Check if matches canonical solution
    let isMatchesSolution = true;
    const solutionEntries = Object.entries(currentCase.solution) as [string, CellCoord][];
    for (const [suspectId, expectedCoord] of solutionEntries) {
      const actualCoord = placedPositions[suspectId];
      if (!actualCoord || actualCoord.row !== expectedCoord.row || actualCoord.col !== expectedCoord.col) {
        isMatchesSolution = false;
        break;
      }
    }

    if (isMatchesSolution) {
      sounds.playSuccess();
      // Evaluar la regla geométrica de deducción:
      // "El culpable es el único sospechoso que se encuentra en la misma zona (color/habitación)
      // que la víctima (💀) y no hay nadie más en esa zona con ellos."
      // No se revela aún al culpable: el alumno debe aplicar la regla y acusar.
      const evaluation = evaluateMurdererRule(displayCase, placedPositions, language);
      setMurdererEvaluation(evaluation);
      setPosicionesVerificadas(true);

      setVerificationFeedback({
        type: 'success',
        title: M.casoResuelto,
        message: M.posicionesCorrectas
      });
    } else {
      sounds.playWarning();
      setVerificationFeedback({
        type: 'warning',
        title: M.algoNoCuadra,
        message: M.noCoincide
      });
    }
  };

  const currentCaseIndex = CASES.findIndex((c) => c.id === activeCase.id);
  const hasNextCase = currentCaseIndex !== -1 && currentCaseIndex < CASES.length - 1;
  const handleNextCase = () => {
    if (hasNextCase) {
      const nextIdx = currentCaseIndex + 1;
      resetCase(CASES[nextIdx]);
    }
  };

  // Confirm Accusation
  const handleConfirmAccusation = (accusedId: string) => {
    if (!posicionesVerificadas) return false;
    if (accusedId === currentCase.murdererId) {
      // Recalcular la explicación en el idioma activo en el momento de la acusación
      const placed: Record<string, CellCoord> = {};
      grid.forEach((fila, r) => fila.forEach((celda, c) => {
        if (celda.occupant) placed[celda.occupant] = { row: r, col: c };
      }));
      setMurdererEvaluation(evaluateMurdererRule(displayCase, placed, language));
      setIsAccusationOpen(false);
      setIsVictoryOpen(true);
      setIsTimerRunning(false);
      return true;
    }
    return false;
  };

  // Provide progressive contextual hint without coordinates
  const handleGiveHint = () => {
    const placedSuspectIds = new Set<string>();
    grid.forEach((row) => {
      row.forEach((cell) => {
        if (cell.occupant) placedSuspectIds.add(cell.occupant);
      });
    });

    const unplacedSuspects = currentCase.suspects.filter((s) => !placedSuspectIds.has(s.id));
    const dynamicHints: string[] = [];

    if (unplacedSuspects.length > 0) {
      const target = unplacedSuspects[Math.floor(Math.random() * unplacedSuspects.length)];
      // Usar el caso traducido para que la pista salga en el idioma activo
      const targetDisplay = displayCase.suspects.find((s) => s.id === target.id) || target;
      const texto = pistaCompletaPersonaje(targetDisplay, displayCase, language);
      if (texto) {
        dynamicHints.push(`${targetDisplay.name} [${targetDisplay.id}]: "${texto}"`);
      }
    }

    dynamicHints.push(...M.consejosGenerales);

    if (displayCase.clues && displayCase.clues.length > 0) {
      const randomClue = displayCase.clues[Math.floor(Math.random() * displayCase.clues.length)];
      dynamicHints.push(M.pistaRevisa(randomClue.text));
    }

    const selectedHint = dynamicHints[Math.floor(Math.random() * dynamicHints.length)];
    setVerificationFeedback({
      type: 'info',
      message: M.pistaInspector(selectedHint)
    });
  };

  // Descarga del PDF con selección explícita de idioma (Castellano o Gallego)
  const handleDownloadPDF = (idioma: Language) => {
    try {
      const fileName = generarYDescargarPDF(currentCase, idioma);
      setVerificationFeedback({
        type: 'success',
        message: `${t.pdfSuccessMsg}: ${fileName}`
      });
    } catch (err) {
      console.error("Error al procesar descarga de PDF:", err);
      setVerificationFeedback({
        type: 'warning',
        message: t.pdfErrorMsg
      });
    }
  };

  // Función para abrir el modal de descarga de PDF bilingüe (Castellano / Gallego)
  const prepararImpresionReto = () => {
    sounds.playStamp();
    setIsPdfModalOpen(true);
  };

  if (typeof window !== 'undefined') {
    (window as unknown as { nivelActual?: PuzzleCase }).nivelActual = currentCase;
    (window as unknown as { generarPDFReto?: () => void; prepararImpresion?: () => void }).generarPDFReto = prepararImpresionReto;
    (window as unknown as { generarPDFReto?: () => void; prepararImpresion?: () => void }).prepararImpresion = prepararImpresionReto;
  }

  // Manejo del evento click en #btn-imprimir según la estructura requerida con try...catch
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as unknown as { nivelActual?: PuzzleCase }).nivelActual = currentCase;
      (window as unknown as { generarPDFReto?: () => void; prepararImpresion?: () => void }).generarPDFReto = prepararImpresionReto;
      (window as unknown as { generarPDFReto?: () => void; prepararImpresion?: () => void }).prepararImpresion = prepararImpresionReto;
    }

    const ejecutarAccionImpresion = () => {
      try {
        prepararImpresionReto();
      } catch (error) {
        console.error("Error al preparar la impresión/descarga:", error);
      }
    };

    // Vincular directamente con el botón si ya está montado
    const btnImprimir = document.getElementById('btn-imprimir');
    if (btnImprimir) {
      btnImprimir.onclick = (e) => {
        e.preventDefault();
        sounds.playClick();
        ejecutarAccionImpresion();
      };
    }

    // Delegación global para asegurar captura en cualquier momento
    const handleImprimirClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('#btn-imprimir')) {
        e.preventDefault();
        e.stopPropagation();
        sounds.playClick();
        ejecutarAccionImpresion();
      }
    };

    document.addEventListener('click', handleImprimirClick);
    return () => {
      document.removeEventListener('click', handleImprimirClick);
      if (btnImprimir) {
        btnImprimir.onclick = null;
      }
    };
  }, [currentCase, sounds, currentScreen]);

  return (
    <div className="no-imprimir min-h-screen bg-theme-app text-theme-primary flex flex-col font-sans transition-colors selection:bg-[#8c2a2a] selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. PANTALLA DIFICULTAD (Visible por defecto)                              */}
      {/* ========================================================================= */}
      <div
        id="pantalla-dificultad"
        style={{ display: currentScreen === 'dificultad' ? 'block' : 'none' }}
        className="w-full"
      >
        <PantallaDificultad
          onSelectDifficulty={(diff) => {
            setSelectedDifficulty(diff);
            setCurrentScreen('seleccion-nivel');
            generarBotonesNiveles(diff);
          }}
          onOpenRules={() => setIsRulesOpen(true)}
          onSelectCase={(caseData) => {
            resetCase(caseData);
            setCurrentScreen('juego');
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. PANTALLA SELECCIÓN NIVEL (Oculta por defecto en CSS con display: none) */}
      {/* ========================================================================= */}
      <div
        id="pantalla-seleccion-nivel"
        style={{ display: currentScreen === 'seleccion-nivel' ? 'block' : 'none' }}
        className="w-full"
      >
        <PantallaSeleccionNivel
          selectedDifficulty={selectedDifficulty}
          onBackToDifficulty={() => {
            setCurrentScreen('dificultad');
          }}
          onSelectCase={(caseIndex) => {
            resetCase(caseIndex);
            setCurrentScreen('juego');
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* 3. PANTALLA JUEGO (Oculta por defecto en CSS con display: none)           */}
      {/* ========================================================================= */}
      <div
        id="pantalla-juego"
        style={{ display: currentScreen === 'juego' ? 'block' : 'none' }}
        className="w-full min-h-screen flex flex-col"
      >
        {/* Navigation Bar in Pantalla Juego: Botón Volver a la selección de nivel (limpia tablero) */}
        <div className="w-full bg-theme-panel border-b border-theme px-4 py-2.5 flex items-center justify-between gap-3 shadow-xs">
          <button
            id="btn-volver-seleccion-nivel"
            onClick={() => {
              sounds.playClick();
              handleResetBoard();
              setCurrentScreen('seleccion-nivel');
            }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-theme-card hover:bg-theme-tools border border-theme/40 text-theme-title-accent font-typewriter text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer active:scale-95"
            title={t.headerBackToLevels}
          >
            <ArrowLeft className="w-4 h-4 text-theme-title-accent" />
            <span>{t.headerBackToLevels}</span>
          </button>

          <div className="flex items-center gap-3 font-typewriter text-xs text-theme-secondary">
            <span>{t.headerDifficultyLabel}: <strong className="text-theme-title-accent">{selectedDifficulty}</strong></span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-theme-title font-semibold">{displayCase.title}</span>
            <ThemeToggle variant="compact" />
          </div>
        </div>

        {/* 1. Header with Case Info & Controls */}
        <CaseHeader
          currentCase={displayCase}
          allCases={CASES}
          onSelectCase={handleSelectCase}
          onBackToLevelSelect={() => {
            sounds.playClick();
            handleResetBoard();
            setCurrentScreen('seleccion-nivel');
          }}
          timerSeconds={timerSeconds}
          isTimerRunning={isTimerRunning}
          onToggleTimer={() => setIsTimerRunning((prev) => !prev)}
          canUndo={historyIndex > 0}
          canRedo={historyIndex < history.length - 1}
          onUndo={handleUndo}
          onRedo={handleRedo}
          onReset={handleResetBoard}
          onOpenRules={() => setIsRulesOpen(true)}
          onGiveHint={handleGiveHint}
          soundEnabled={soundEnabled}
          onToggleSound={() => {
            sounds.enabled = !soundEnabled;
            setSoundEnabled(!soundEnabled);
          }}
          onDownloadPDF={prepararImpresionReto}
        />

        {/* 2. Main Investigation Workspace */}
        <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-5 flex flex-col gap-4">
          
          {/* Verification Alert Banner (if any) */}
          {verificationFeedback && (
            <div 
              id="verification-feedback-banner"
              className={`p-3.5 sm:p-4 rounded-xl border-2 flex items-start justify-between gap-3 text-xs sm:text-sm font-sans shadow-lg animate-fade-in ${
                verificationFeedback.type === 'success'
                  ? 'bg-emerald-950/95 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500/30'
                  : verificationFeedback.type === 'warning'
                  ? 'bg-red-950/95 border-red-500 text-red-100 ring-2 ring-red-500/30'
                  : 'bg-stone-900/95 border-stone-600 text-stone-200'
              }`}
            >
              <div className="flex items-start gap-3">
                {verificationFeedback.type === 'success' ? (
                  <FileCheck2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                ) : verificationFeedback.type === 'warning' ? (
                  <AlertCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                ) : (
                  <Lightbulb className="w-6 h-6 text-amber-300 shrink-0 mt-0.5" />
                )}
                <div>
                  {verificationFeedback.title && (
                    <h4 className="font-typewriter font-bold text-sm sm:text-base tracking-wide mb-0.5 text-white">
                      {verificationFeedback.title}
                    </h4>
                  )}
                  <p className="leading-relaxed opacity-95">{verificationFeedback.message}</p>
                </div>
              </div>
              
              <button
                onClick={() => setVerificationFeedback(null)}
                className="text-stone-400 hover:text-white font-mono text-sm font-bold px-2 py-0.5 rounded hover:bg-stone-800 transition-colors"
              >
                ✕
              </button>
            </div>
          )}

          {/* Story Intro Tag */}
          <div className="bg-theme-card border border-theme/30 border-l-4 border-l-[#8c2a2a] p-3 rounded-r-lg text-xs font-sans text-theme-primary flex items-start gap-2 shadow-xs transition-colors">
            <span className="text-base leading-none">📂</span>
            <p className="leading-relaxed">
              <strong className="text-[#8c2a2a] dark:text-amber-300 font-typewriter">{M.informePolicial}</strong> {displayCase.storyIntro}
            </p>
          </div>

          {/* Central Split Layout: Crime Scene Map + Detective Notebook */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            
            {/* LEFT COLUMN: Map & Suspects Toolbar (7 Cols on desktop) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              
              {/* The Crime Scene Board */}
              <GameBoard
                currentCase={displayCase}
                grid={grid}
                onCellClick={handleCellClick}
                onCellRightClick={handleCellRightClick}
                highlightedCells={highlightedCells}
                activeSuspectId={activeSuspectId}
                activeTool={activeTool}
                conflictFlash={conflictFlash}
              />

              {/* Suspects & Evidence Selection Tray */}
              <SuspectsToolbar
                currentCase={displayCase}
                grid={grid}
                activeSuspectId={activeSuspectId}
                onSelectSuspect={(id) => setActiveSuspectId(id)}
                onUnplaceSuspect={handleUnplaceSuspect}
                activeTool={activeTool}
                onChangeTool={(tool) => setActiveTool(tool)}
                isNotesMode={isNotesMode}
                onToggleNotesMode={() => setIsNotesMode((prev) => !prev)}
                onHighlightCells={(cells) => setHighlightedCells(cells)}
              />

              {/* Action Resolution Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 bg-theme-panel p-3 rounded-xl border-2 border-theme transition-colors shadow-md">
                <button
                  id="btn-resolver-comprobar-caso"
                  onClick={handleVerifyGrid}
                  className="flex-1 min-w-[190px] flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white border border-emerald-600/70 font-typewriter text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer ring-2 ring-emerald-500/20 active:scale-[0.99]"
                >
                  <CheckCheck className="w-5 h-5 text-emerald-300" />
                  <span>{M.botonComprobar}</span>
                </button>

                <button
                  id="btn-reiniciar-tablero"
                  onClick={handleResetBoard}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-600 font-typewriter text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer active:scale-[0.99]"
                  title={t.headerResetBoard}
                >
                  <RotateCcw className="w-4 h-4 text-amber-400" />
                  <span>{t.headerResetBoard}</span>
                </button>

                <button
                  id="btn-acusar-culpable"
                  onClick={() => {
                    if (!posicionesVerificadas) {
                      sounds.playWarning();
                      setVerificationFeedback({ type: 'info', message: M.acusacionBloqueada });
                      return;
                    }
                    sounds.playStamp();
                    setIsAccusationOpen(true);
                  }}
                  aria-disabled={!posicionesVerificadas}
                  className={`flex items-center justify-center gap-2 px-3.5 py-3 rounded-lg bg-[#8c2a2a] hover:bg-[#a83232] text-white font-typewriter text-xs sm:text-sm font-bold shadow-lg transition-all ring-2 cursor-pointer ${
                    posicionesVerificadas ? 'ring-amber-400/80 animate-pulse' : 'ring-red-500/30 opacity-60'
                  }`}
                  title={posicionesVerificadas ? t.headerAccuse : M.acusacionBloqueada}
                >
                  <Gavel className="w-4 h-4" />
                  <span className="hidden sm:inline">{t.headerAccuse}</span>
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: Clues Notebook & Case Details (5 Cols on desktop) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <CluesNotebook
                currentCase={displayCase}
                onHighlightCells={(cells) => setHighlightedCells(cells)}
                onClearHighlight={() => setHighlightedCells([])}
                checkedClueIds={checkedClueIds}
                onToggleCheckClue={(clueId) => {
                  setCheckedClueIds((prev) => {
                    const updated = new Set(prev);
                    if (updated.has(clueId)) updated.delete(clueId);
                    else updated.add(clueId);
                    return updated;
                  });
                }}
              />
            </div>

          </div>

        </main>

        {/* 3. Footer */}
        <footer className="w-full bg-[#181412] border-t border-[#3a2f28] py-3 px-4 text-center text-xs text-stone-500 font-mono">
          MURDOKU · EXPEDIENTE FORENSE DE DEDUCCIÓN LÓGICA · CRIME SCENE DEDUCTION GAME
        </footer>
      </div>

      {/* 4. Modals (Global overlay) */}
      <AccusationModal
        isOpen={isAccusationOpen}
        onClose={() => setIsAccusationOpen(false)}
        currentCase={displayCase}
        onConfirmAccusation={handleConfirmAccusation}
      />

      <RulesModal
        isOpen={isRulesOpen}
        onClose={() => setIsRulesOpen(false)}
      />

      <VictoryModal
        isOpen={isVictoryOpen}
        onClose={() => setIsVictoryOpen(false)}
        currentCase={displayCase}
        timerSeconds={timerSeconds}
        movesCount={movesCount}
        onRestart={handleResetBoard}
        evaluation={murdererEvaluation}
        onNextCase={handleNextCase}
        hasNextCase={hasNextCase}
        onBackToLevelSelect={() => {
          setIsVictoryOpen(false);
          handleResetBoard();
          setCurrentScreen('seleccion-nivel');
        }}
      />

      {/* 5. Modal de Descarga de PDF con Selección de Idioma (Castellano o Gallego) */}
      <DescargarPdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        onDownload={handleDownloadPDF}
        caseTitle={displayCase.title}
      />

    </div>
  );
}
