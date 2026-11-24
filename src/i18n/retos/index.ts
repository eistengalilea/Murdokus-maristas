import { Reto, RetoDatosJuego, PuzzleCase, Suspect, RoomInfo, Clue, InanimateObject } from '../../types';
import { Language } from '../types';
import { RetoTraduccion } from './types';
import { RETOS_FACILES_GENESIS_GL } from './retosFacilesGenesisGl';
import { RETOS_FACILES_NUEVOS_GL } from './retosFacilesNuevosGl';
import { RETOS_FACILES_MONARQUIA_GL } from './retosFacilesMonarquiaGl';
import { RETOS_FACILES_EVANGELIOS_GL } from './retosFacilesEvangeliosGl';
import { RETOS_FACILES_HECHOS_GL } from './retosFacilesHechosGl';
import { RETOS_MEDIOS_GENESIS_GL } from './retosMediosGenesisGl';
import { RETOS_MEDIOS_PROFETAS_GL } from './retosMediosProfetasGl';
import { RETOS_MEDIOS_MONARQUIA_GL } from './retosMediosMonarquiaGl';
import { RETOS_MEDIOS_EVANGELIOS_GL } from './retosMediosEvangeliosGl';
import { RETOS_MEDIOS_HECHOS_GL } from './retosMediosHechosGl';
import { RETOS_DIFICILES_GL } from './retosDificilesGl';
import { RETOS_TRADUCCIONES_PT } from './pt';

export * from './types';

export const RETOS_TRADUCCIONES_GL: Record<string, RetoTraduccion> = {
  ...RETOS_FACILES_GENESIS_GL,
  ...RETOS_FACILES_NUEVOS_GL,
  ...RETOS_FACILES_MONARQUIA_GL,
  ...RETOS_FACILES_EVANGELIOS_GL,
  ...RETOS_FACILES_HECHOS_GL,
  ...RETOS_MEDIOS_GENESIS_GL,
  ...RETOS_MEDIOS_PROFETAS_GL,
  ...RETOS_MEDIOS_MONARQUIA_GL,
  ...RETOS_MEDIOS_EVANGELIOS_GL,
  ...RETOS_MEDIOS_HECHOS_GL,
  ...RETOS_DIFICILES_GL,
};

export { RETOS_TRADUCCIONES_PT };

/** Traducciones de los retos por idioma (el castellano es el texto original de src/data). */
export const RETOS_TRADUCCIONES: Record<Exclude<Language, 'es'>, Record<string, RetoTraduccion>> = {
  gl: RETOS_TRADUCCIONES_GL,
  pt: RETOS_TRADUCCIONES_PT,
};

/** Devuelve la traducción de un reto en el idioma pedido (undefined en castellano o si no existe). */
export function traduccionReto(retoId: string, lang: Language): RetoTraduccion | undefined {
  if (lang === 'es') return undefined;
  return RETOS_TRADUCCIONES[lang]?.[retoId];
}

/**
 * Traduce los datos_juego de un reto al idioma pedido si existe traducción registrada
 */
export function aplicarTraduccionDatosJuego(
  dj: RetoDatosJuego,
  retoId: string,
  lang: Language
): RetoDatosJuego {
  const tr = traduccionReto(retoId, lang);
  if (!tr) return dj;

  // Traducir sospechosos
  const suspects: Suspect[] = dj.suspects.map((s) => {
    const sTr = tr.suspects?.[s.id];
    return {
      ...s,
      name: sTr?.name || s.name,
      role: sTr?.role || s.role,
      clueText: sTr?.clueText || s.clueText,
    };
  });

  // Traducir habitaciones
  const rooms: Record<string, RoomInfo> = {};
  for (const [id, room] of Object.entries(dj.rooms)) {
    const rTr = tr.rooms?.[id];
    rooms[id] = {
      ...room,
      name: rTr?.name || room.name,
      shortName: rTr?.shortName || room.shortName,
      description: rTr?.description || room.description,
    };
  }

  // Traducir pistas
  const clues: Clue[] = dj.clues.map((c) => {
    const cTr = tr.clues?.[c.id];
    return {
      ...c,
      text: cTr?.text || c.text,
      narrative: cTr?.narrative || c.narrative,
    };
  });

  // Traducir objetos bloqueados
  const blockedObjects: Record<string, InanimateObject> = {};
  if (dj.blockedObjects) {
    for (const [coord, obj] of Object.entries(dj.blockedObjects)) {
      const bTr = tr.blockedObjects?.[coord];
      blockedObjects[coord] = {
        ...obj,
        name: bTr?.name || obj.name,
        description: bTr?.description || obj.description,
      };
    }
  }

  return {
    ...dj,
    categoria: tr.categoria || dj.categoria,
    citasBiblicas: tr.citasBiblicas || dj.citasBiblicas,
    textoBiblicoClave: tr.textoBiblicoClave || dj.textoBiblicoClave,
    contextoTeologico: tr.contextoTeologico || dj.contextoTeologico,
    solucionExplicacion: tr.solucionExplicacion || dj.solucionExplicacion,
    storyIntro: tr.storyIntro || dj.storyIntro,
    epilogue: tr.epilogue || dj.epilogue,
    subtitle: tr.subtitle || dj.subtitle,
    badge: tr.badge || dj.badge,
    suspects,
    rooms,
    clues,
    blockedObjects,
  };
}

/**
 * Traduce un objeto Reto completo (id, nombre, datos_juego)
 */
export function aplicarTraduccionReto(reto: Reto, lang: Language): Reto {
  const tr = traduccionReto(reto.id, lang);
  if (!tr) return reto;

  return {
    ...reto,
    nombre: tr.nombre || reto.nombre,
    datos_juego: aplicarTraduccionDatosJuego(reto.datos_juego, reto.id, lang),
  };
}

/**
 * Traduce un objeto PuzzleCase usando el id o retoId correspondiente
 */
export function aplicarTraduccionPuzzleCase(caso: PuzzleCase, lang: Language): PuzzleCase {
  const id = caso.retoId || caso.id;
  const tr = traduccionReto(id, lang);
  if (!tr) return caso;

  // Traducir sospechosos
  const suspects: Suspect[] = caso.suspects.map((s) => {
    const sTr = tr.suspects?.[s.id];
    return {
      ...s,
      name: sTr?.name || s.name,
      role: sTr?.role || s.role,
      clueText: sTr?.clueText || s.clueText,
    };
  });

  // Traducir habitaciones
  const rooms: Record<string, RoomInfo> = {};
  for (const [roomId, room] of Object.entries(caso.rooms)) {
    const rTr = tr.rooms?.[roomId];
    rooms[roomId] = {
      ...room,
      name: rTr?.name || room.name,
      shortName: rTr?.shortName || room.shortName,
      description: rTr?.description || room.description,
    };
  }

  // Traducir pistas
  const clues: Clue[] = caso.clues.map((c) => {
    const cTr = tr.clues?.[c.id];
    return {
      ...c,
      text: cTr?.text || c.text,
      narrative: cTr?.narrative || c.narrative,
    };
  });

  // Traducir objetos bloqueados
  const blockedObjects: Record<string, InanimateObject> = {};
  if (caso.blockedObjects) {
    for (const [coord, obj] of Object.entries(caso.blockedObjects)) {
      const bTr = tr.blockedObjects?.[coord];
      blockedObjects[coord] = {
        ...obj,
        name: bTr?.name || obj.name,
        description: bTr?.description || obj.description,
      };
    }
  }

  return {
    ...caso,
    title: tr.nombre
      ? tr.nombre.startsWith('Caso ')
        ? tr.nombre
        : `Caso ${id}: ${tr.nombre}`
      : caso.title,
    categoria: tr.categoria || caso.categoria,
    citasBiblicas: tr.citasBiblicas || caso.citasBiblicas,
    textoBiblicoClave: tr.textoBiblicoClave || caso.textoBiblicoClave,
    contextoTeologico: tr.contextoTeologico || caso.contextoTeologico,
    solucionExplicacion: tr.solucionExplicacion || caso.solucionExplicacion,
    storyIntro: tr.storyIntro || caso.storyIntro,
    epilogue: tr.epilogue || caso.epilogue,
    subtitle: tr.subtitle || caso.subtitle,
    badge: tr.badge || caso.badge,
    suspects,
    rooms,
    clues,
    blockedObjects,
  };
}
