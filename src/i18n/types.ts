export type Language = 'es' | 'gl' | 'pt';

export interface TranslationDictionary {
  // General / Brand
  appTitle: string;
  appSubtitle: string;
  confidential: string;
  loading: string;
  back: string;
  close: string;
  cancel: string;
  confirm: string;
  error: string;
  success: string;
  warning: string;

  // Language Selector
  languageLabel: string;
  spanish: string;
  galician: string;
  portuguese: string;
  spanishShort: string;
  galicianShort: string;
  portugueseShort: string;

  // Difficulty Screen
  diffScreenBadge: string;
  diffScreenTitle: string;
  diffScreenDesc: string;
  diffScreenHowToPlay: string;
  diffScreenHowToPlayDesc: string;
  easyTitle: string;
  easySubtitle: string;
  easyDesc: string;
  easyBadge: string;
  easyGrid: string;
  mediumTitle: string;
  mediumSubtitle: string;
  mediumDesc: string;
  mediumBadge: string;
  mediumGrid: string;
  hardTitle: string;
  hardSubtitle: string;
  hardDesc: string;
  hardBadge: string;
  hardGrid: string;
  footerDept: string;

  // Level Selection Screen
  levelSelectBack: string;
  levelSelectActive: string;
  levelSelectBadge: string;
  levelSelectTitle: string;
  levelSelectDesc: string;
  levelSelectEmptyTitle: string;
  levelSelectEmptyDesc: string;
  levelSelectTotalRetos: string;
  levelSelectRetosFiltrados: string;

  // Search & Filter
  searchPlaceholder: string;
  searchAllBooks: string;
  searchFilterBook: string;
  searchFilterDiff: string;
  searchAllDiffs: string;
  searchClearFilters: string;
  searchCasesFound: string;
  searchNoCasesFound: string;
  searchGlobalTitle: string;
  searchGlobalSubtitle: string;
  searchPlayCase: string;

  // Case Header
  headerBackToLevels: string;
  headerCluesCount: string;
  headerResetBoard: string;
  headerUndo: string;
  headerRedo: string;
  headerSoundMute: string;
  headerSoundUnmute: string;
  headerDownloadPdf: string;
  headerDownloadPdfTooltip: string;
  headerRules: string;
  headerAccuse: string;
  headerInspectorHint: string;
  headerTimerPause: string;
  headerTimerStart: string;
  headerDifficultyLabel: string;

  // Suspects Toolbar
  toolbarTitle: string;
  toolbarSuspectsCount: string;
  toolbarInstruction: string;
  toolbarToolPlace: string;
  toolbarToolX: string;
  toolbarToolErase: string;
  toolbarToolNotes: string;
  toolbarVictimBadge: string;
  toolbarMurdererBadge: string;
  toolbarInnocentBadge: string;
  toolbarConfirmedOnBoard: string;
  toolbarSelectToPlace: string;
  toolbarDeleteSquare: string;

  // Clues Notebook
  cluesTabClues: string;
  cluesTabSuspects: string;
  cluesTabBible: string;
  cluesTabRules: string;
  cluesInspectorNote: string;
  cluesChecked: string;
  cluesUnchecked: string;
  cluesFilterSuspect: string;
  cluesFilterAll: string;
  cluesEmptySuspect: string;
  cluesStoryPrologue: string;
  cluesBiblePassage: string;
  cluesTheologicalContext: string;
  cluesSolutionSummary: string;

  // Game Board
  boardRow: string;
  boardCol: string;
  boardRoomsLabel: string;
  boardControlsHelp: string;
  boardConflictRowCol: string;
  boardBlockedCell: string;

  // Rules Modal
  rulesTitle: string;
  rulesSubtitle: string;
  rulesSudokuTitle: string;
  rulesSudokuDesc: string;
  rulesObjectsTitle: string;
  rulesObjectsDesc: string;
  rulesMurdererTitle: string;
  rulesMurdererDesc: string;
  rulesNotebookTitle: string;
  rulesNotebookDesc: string;
  rulesPencilTitle: string;
  rulesPencilDesc: string;
  rulesCloseBtn: string;

  // Accusation Modal
  accusationTitle: string;
  accusationSubtitle: string;
  accusationInstruction: string;
  accusationWarningAlone: string;
  accusationConfirmBtn: string;
  accusationCancelBtn: string;
  accusationIncorrectTitle: string;
  accusationIncorrectMsg: string;

  // Victory Modal
  victoryTitle: string;
  victorySubtitle: string;
  victoryTime: string;
  victoryMoves: string;
  victoryExplanation: string;
  victoryEpilogue: string;
  victoryExamineBtn: string;
  victoryRestartBtn: string;
  victoryNextBtn: string;
  victoryBackToLevelsBtn: string;

  // PDF Download Modal & Dialog
  pdfModalTitle: string;
  pdfModalSubtitle: string;
  pdfOptionEsTitle: string;
  pdfOptionEsDesc: string;
  pdfOptionEsBtn: string;
  pdfOptionGlTitle: string;
  pdfOptionGlDesc: string;
  pdfOptionGlBtn: string;
  pdfOptionPtTitle: string;
  pdfOptionPtDesc: string;
  pdfOptionPtBtn: string;
  pdfGenerating: string;
  pdfSuccessMsg: string;
  pdfErrorMsg: string;
  pdfClassroomReadyBadge: string;

  // PDF Internal texts
  pdfEvalSheet: string;
  pdfTeacherGuide: string;
  pdfStudentName: string;
  pdfDate: string;
  pdfCourseGroup: string;
  pdfGrade: string;
  pdfObjectiveTitle: string;
  pdfObjectiveText: string;
  pdfSec1Title: string;
  pdfSec2Title: string;
  pdfSec2Subtitle: string;
  pdfSec3Title: string;
  pdfSec4Title: string;
  pdfSec4RoomsTitle: string;
  pdfSec4EvidenceTitle: string;
  pdfSec4BlockedDesc: string;
  pdfSec5Title: string;
  pdfSec5InvestigatorVerdict: string;
  pdfSec5MurdererVerdict: string;
  pdfSec5WhoIsMurderer: string;
  pdfSec5Cell: string;
  pdfSec5Room: string;
  pdfSec5KeyClue: string;
  pdfSec5VictimVerdict: string;
  pdfSec5WhoIsVictim: string;
  pdfSec5ForensicCondition: string;
  pdfSec5DetectiveSignature: string;
  pdfSec5TeacherEvaluation: string;
  pdfSec5TeacherApproval: string;
  pdfPage1FooterLeft: string;
  pdfPage1FooterRight: string;
  pdfPage2HeaderSubtitle: string;
  pdfPage2Sec1Title: string;
  pdfPage2ColId: string;
  pdfPage2ColSuspect: string;
  pdfPage2ColRole: string;
  pdfPage2ColCell: string;
  pdfPage2ColRoom: string;
  pdfPage2ColVerdict: string;
  pdfPage2VerdictGuilty: string;
  pdfPage2VerdictVictim: string;
  pdfPage2VerdictInnocent: string;
  pdfPage2MurdererAlone: string;
  pdfPage2VictimFound: string;
  pdfPage2Sec2Title: string;
  pdfPage2Sec3Title: string;
  pdfPage2Sec3ResolutionTitle: string;
  pdfPage2Sec3MethodSteps: string;
  pdfPage2Step1: string;
  pdfPage2Step2: string;
  pdfPage2Step3: string;
  pdfPage2Sec4Title: string;
  pdfPage2Sec4Relato: string;
  pdfPage2Sec4Passage: string;
  pdfPage2Sec4Theology: string;
  pdfPage2Sec5Title: string;
  pdfPage2Sec5Rubric: string;
  pdfPage2Sec5DebateQ1: string;
  pdfPage2Sec5DebateQ2: string;
  pdfPage2Sec5DebateQ3: string;
  pdfPage2FooterLeft: string;
  pdfPage2FooterRight: string;
}
