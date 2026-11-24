export interface RoomTranslation {
  name: string;
  shortName?: string;
  description: string;
}

export interface BlockedObjectTranslation {
  name: string;
  description: string;
}

export interface SuspectTranslation {
  name?: string;
  role: string;
  clueText?: string;
}

export interface ClueTranslation {
  text: string;
  narrative?: string;
}

export interface RetoTraduccion {
  nombre: string;
  categoria?: string;
  citasBiblicas?: string;
  textoBiblicoClave?: string;
  contextoTeologico?: string;
  solucionExplicacion?: string;
  storyIntro?: string;
  epilogue?: string;
  subtitle?: string;
  badge?: string;
  rooms?: Record<string, RoomTranslation>;
  blockedObjects?: Record<string, BlockedObjectTranslation>;
  suspects?: Record<string, SuspectTranslation>;
  clues?: Record<string, ClueTranslation>;
}
