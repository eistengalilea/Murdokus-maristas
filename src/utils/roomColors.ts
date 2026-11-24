import { RoomInfo } from '../types';

export interface ResolvedRoomColor {
  key: string;
  rgb: [number, number, number];
  hex: string;
  /**
   * Color sólido (100%) para la muestra de la leyenda
   */
  solidColor: string;
  /**
   * Color con transparencia del 50% para las casillas del plano de la escena
   */
  transparent50: string;
  /**
   * Color RGB mezclado al 50% sobre blanco (para impresión y PDF)
   */
  printRgb50: [number, number, number];
  /**
   * Borde sugerido para la celda
   */
  borderColor: string;
  /**
   * Clase CSS de Tailwind para etiquetas
   */
  tagClass: string;
}

/**
 * Paleta pericial oficial para habitaciones y zonas del juego (Murdoku Bíblico).
 * Mapea directamente los códigos de color de las leyendas a valores RGB precisos.
 */
export const PALETA_ESTANCIAS_OFICIAL: Record<string, { rgb: [number, number, number]; hex: string; tagClass: string }> = {
  purple:  { rgb: [147, 51, 234],  hex: '#9333ea', tagClass: 'bg-purple-800 text-purple-100' },
  blue:    { rgb: [37, 99, 235],   hex: '#2563eb', tagClass: 'bg-blue-800 text-blue-100' },
  teal:    { rgb: [13, 148, 136],  hex: '#0d9488', tagClass: 'bg-teal-800 text-teal-100' },
  amber:   { rgb: [217, 119, 6],   hex: '#d97706', tagClass: 'bg-amber-800 text-amber-100' },
  emerald: { rgb: [5, 150, 105],   hex: '#059669', tagClass: 'bg-emerald-800 text-emerald-100' },
  red:     { rgb: [220, 38, 38],   hex: '#dc2626', tagClass: 'bg-red-800 text-red-100' },
  rose:    { rgb: [225, 29, 72],   hex: '#e11d48', tagClass: 'bg-rose-800 text-rose-100' },
  yellow:  { rgb: [202, 138, 4],   hex: '#ca8a04', tagClass: 'bg-yellow-800 text-yellow-100' },
  orange:  { rgb: [234, 88, 12],   hex: '#ea580c', tagClass: 'bg-orange-800 text-orange-100' },
  sky:     { rgb: [2, 132, 199],   hex: '#0284c7', tagClass: 'bg-sky-800 text-sky-100' },
  stone:   { rgb: [120, 113, 108], hex: '#78716c', tagClass: 'bg-stone-800 text-stone-100' },
  indigo:  { rgb: [79, 70, 229],   hex: '#4f46e5', tagClass: 'bg-indigo-800 text-indigo-100' },
  green:   { rgb: [22, 163, 74],   hex: '#16a34a', tagClass: 'bg-green-800 text-green-100' },
  zinc:    { rgb: [113, 113, 122], hex: '#71717a', tagClass: 'bg-zinc-800 text-zinc-100' },
  cyan:    { rgb: [8, 145, 178],   hex: '#0891b2', tagClass: 'bg-cyan-800 text-cyan-100' },
  lime:    { rgb: [101, 163, 13],  hex: '#65a30d', tagClass: 'bg-lime-800 text-lime-100' },
  violet:  { rgb: [124, 58, 237],  hex: '#7c3aed', tagClass: 'bg-violet-800 text-violet-100' },
  fuchsia: { rgb: [192, 38, 211],  hex: '#c026d3', tagClass: 'bg-fuchsia-800 text-fuchsia-100' },
  pink:    { rgb: [219, 39, 119],  hex: '#db2777', tagClass: 'bg-pink-800 text-pink-100' },
};

/**
 * Convierte un código hexadecimal (#RRGGBB o #RGB) a tupla RGB
 */
export function hexToRgbTuple(hex: string): [number, number, number] | null {
  const clean = hex.replace('#', '').trim();
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16);
    const g = parseInt(clean[1] + clean[1], 16);
    const b = parseInt(clean[2] + clean[2], 16);
    return [r, g, b];
  }
  if (clean.length === 6) {
    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);
    return [r, g, b];
  }
  return null;
}

/**
 * Resuelve el color de una estancia a partir de su definición en el reto.
 * Lee prioritariamente `tagColor` (el código oficial de la leyenda),
 * luego `bgColor`, identificadores y nombres.
 * 
 * Cumple la directiva obligatoria:
 * "Usa el código de colores de las leyendas y aplícalos en el plano de la escena del crimen.
 *  Que cada zona esté coloreada de acuerdo con la leyenda.
 *  En el plano de la escena aplica en los colores una transparencia de 50%."
 */
export function resolverColorHabitacion(room?: Partial<RoomInfo> | null, roomIdFallback?: string): ResolvedRoomColor {
  const fallbackColor = PALETA_ESTANCIAS_OFICIAL.stone;

  // 1. Si se provee un color hexadecimal directo
  if (room?.bgColor && room.bgColor.startsWith('#')) {
    const rgb = hexToRgbTuple(room.bgColor) || fallbackColor.rgb;
    return construirColorResuelto('custom', rgb, room.bgColor, room.tagColor || 'bg-stone-800 text-white');
  }

  // 2. Extracción a partir de la leyenda (tagColor es la fuente de verdad de la leyenda)
  const tagColorStr = (room?.tagColor || '').toLowerCase();
  for (const [key, val] of Object.entries(PALETA_ESTANCIAS_OFICIAL)) {
    if (tagColorStr.includes(key)) {
      return construirColorResuelto(key, val.rgb, val.hex, val.tagClass);
    }
  }

  // 3. Extracción secundaria a partir de bgColor
  const bgColorStr = (room?.bgColor || '').toLowerCase();
  for (const [key, val] of Object.entries(PALETA_ESTANCIAS_OFICIAL)) {
    if (bgColorStr.includes(key)) {
      return construirColorResuelto(key, val.rgb, val.hex, val.tagClass);
    }
  }

  // 4. Búsqueda semántica por identificador o nombre de sala
  const idStr = `${room?.id || ''} ${roomIdFallback || ''} ${room?.name || ''}`.toLowerCase();
  for (const [key, val] of Object.entries(PALETA_ESTANCIAS_OFICIAL)) {
    if (idStr.includes(key)) {
      return construirColorResuelto(key, val.rgb, val.hex, val.tagClass);
    }
  }

  // Fallbacks semánticos temáticos comunes en caso de salas sin etiqueta de color explícita
  if (idStr.includes('jardin') || idStr.includes('huerto') || idStr.includes('campo') || idStr.includes('olivos') || idStr.includes('vina')) {
    return construirColorResuelto('emerald', PALETA_ESTANCIAS_OFICIAL.emerald.rgb, PALETA_ESTANCIAS_OFICIAL.emerald.hex, PALETA_ESTANCIAS_OFICIAL.emerald.tagClass);
  }
  if (idStr.includes('mar') || idStr.includes('rio') || idStr.includes('estanque') || idStr.includes('pozo') || idStr.includes('agua') || idStr.includes('fuente')) {
    return construirColorResuelto('sky', PALETA_ESTANCIAS_OFICIAL.sky.rgb, PALETA_ESTANCIAS_OFICIAL.sky.hex, PALETA_ESTANCIAS_OFICIAL.sky.tagClass);
  }
  if (idStr.includes('palacio') || idStr.includes('templo') || idStr.includes('trono') || idStr.includes('oro') || idStr.includes('altar')) {
    return construirColorResuelto('amber', PALETA_ESTANCIAS_OFICIAL.amber.rgb, PALETA_ESTANCIAS_OFICIAL.amber.hex, PALETA_ESTANCIAS_OFICIAL.amber.tagClass);
  }
  if (idStr.includes('fuego') || idStr.includes('horno') || idStr.includes('guardia') || idStr.includes('verdugo') || idStr.includes('sangre')) {
    return construirColorResuelto('red', PALETA_ESTANCIAS_OFICIAL.red.rgb, PALETA_ESTANCIAS_OFICIAL.red.hex, PALETA_ESTANCIAS_OFICIAL.red.tagClass);
  }
  if (idStr.includes('tienda') || idStr.includes('aposento') || idStr.includes('camara') || idStr.includes('reina')) {
    return construirColorResuelto('purple', PALETA_ESTANCIAS_OFICIAL.purple.rgb, PALETA_ESTANCIAS_OFICIAL.purple.hex, PALETA_ESTANCIAS_OFICIAL.purple.tagClass);
  }

  return construirColorResuelto('stone', fallbackColor.rgb, fallbackColor.hex, fallbackColor.tagClass);
}

function construirColorResuelto(
  key: string,
  rgb: [number, number, number],
  hex: string,
  tagClass: string
): ResolvedRoomColor {
  const [r, g, b] = rgb;
  // 50% de transparencia (alpha = 0.50)
  const transparent50 = `rgba(${r}, ${g}, ${b}, 0.50)`;
  // Mezcla con fondo blanco para PDF/impresión: color + (255 - color) * 0.50
  const printRgb50: [number, number, number] = [
    Math.round(255 - (255 - r) * 0.5),
    Math.round(255 - (255 - g) * 0.5),
    Math.round(255 - (255 - b) * 0.5)
  ];
  return {
    key,
    rgb,
    hex,
    solidColor: `rgb(${r}, ${g}, ${b})`,
    transparent50,
    printRgb50,
    borderColor: `rgba(${r}, ${g}, ${b}, 0.70)`,
    tagClass
  };
}
