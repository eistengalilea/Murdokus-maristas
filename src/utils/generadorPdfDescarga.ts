import { jsPDF } from 'jspdf';
import { PuzzleCase, RoomInfo, Suspect } from '../types';
import { Language } from '../i18n/types';
import { TRANSLATIONS } from '../i18n/translations';
import { obtenerCasoTraducido } from '../i18n/translateContent';
import { textoPistasPosicion } from './pistasPosicion';
import { resolverColorHabitacion } from './roomColors';
import { porIdioma } from '../i18n/porIdioma';

/**
 * Convierte un color hexadecimal a RGB [r, g, b]
 */
const PT_MM = 25.4 / 72;

function hexToRgb(hex: string, fallback: [number, number, number] = [245, 245, 244]): [number, number, number] {
  if (!hex) return fallback;
  const clean = hex.replace('#', '').trim();
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16);
    const g = parseInt(clean[1] + clean[1], 16);
    const b = parseInt(clean[2] + clean[2], 16);
    return isNaN(r) || isNaN(g) || isNaN(b) ? fallback : [r, g, b];
  }
  if (clean.length === 6) {
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    return isNaN(r) || isNaN(g) || isNaN(b) ? fallback : [r, g, b];
  }
  return fallback;
}

/**
 * Mapeo de nombres temáticos y Tailwind a paleta pastel pericial
 */
const TAILWIND_COLOR_MAP: Record<string, [number, number, number]> = {
  amber: [254, 243, 199],
  red: [254, 226, 226],
  emerald: [209, 250, 229],
  green: [220, 252, 231],
  sky: [224, 242, 254],
  blue: [219, 234, 254],
  purple: [243, 232, 255],
  violet: [237, 233, 254],
  rose: [255, 228, 230],
  pink: [252, 231, 243],
  orange: [255, 237, 213],
  yellow: [254, 249, 195],
  teal: [204, 251, 241],
  cyan: [207, 250, 254],
  indigo: [224, 231, 255],
  stone: [245, 245, 244],
  zinc: [244, 244, 245],
  slate: [241, 245, 249],
  gray: [243, 244, 246],
};

const ROOM_NAME_PALETTE: Record<string, [number, number, number]> = {
  jardin: [209, 250, 229],
  huerto: [209, 250, 229],
  rosaleda: [209, 250, 229],
  invernadero: [209, 250, 229],
  patio: [204, 251, 241],
  estanque: [224, 242, 254],
  rio: [224, 242, 254],
  mar: [224, 242, 254],
  cielo: [224, 242, 254],
  tribuna: [219, 234, 254],
  salon: [254, 243, 199],
  galeria: [254, 243, 199],
  banquete: [254, 243, 199],
  pedestal: [254, 243, 199],
  oro: [254, 243, 199],
  cocina: [254, 249, 195],
  horno: [254, 226, 226],
  fuego: [254, 226, 226],
  biblioteca: [243, 232, 255],
  laboratorio: [243, 232, 255],
  palacio: [243, 232, 255],
  estrado: [243, 232, 255],
  trono: [243, 232, 255],
  despacho: [255, 228, 230],
  orquidario: [255, 228, 230],
  rojo: [255, 228, 230],
  cobertizo: [255, 237, 213],
  caravana: [255, 237, 213],
  archivo: [255, 237, 213],
  sotano: [237, 233, 254],
  tienda: [237, 233, 254],
  valle: [237, 233, 254],
  sepulcro: [237, 233, 254],
  almacen: [243, 244, 246],
  guardia: [243, 244, 246],
  acceso: [243, 244, 246],
};

/**
 * Resuelve el color pericial de una estancia a partir de su código de leyenda.
 * @param paraPlanoTransparente Si es true, retorna el color mezclado con 50% de transparencia sobre blanco
 *                              para las casillas del plano del crimen. Si es false, retorna el color sólido (100%)
 *                              para la muestra de la leyenda.
 */
function resolverColorEstancia(
  room?: RoomInfo,
  roomId?: string,
  paraPlanoTransparente: boolean = false
): [number, number, number] {
  const resolved = resolverColorHabitacion(room, roomId);
  return paraPlanoTransparente ? resolved.printRgb50 : resolved.rgb;
}

// Cache en memoria para DataURLs de emojis renderizados en canvas 2D
const emojiCache = new Map<string, string>();

/**
 * Convierte un emoji en una imagen PNG DataURL nítida mediante un canvas offscreen.
 * Esto permite incrustar emojis reales en jsPDF de forma idéntica a la interfaz web.
 */
function getEmojiDataUrl(emoji: string, size = 96): string | null {
  if (!emoji || typeof document === 'undefined') return null;
  const cacheKey = `${emoji}_${size}`;
  if (emojiCache.has(cacheKey)) return emojiCache.get(cacheKey)!;
  try {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.clearRect(0, 0, size, size);
    ctx.font = `${Math.floor(size * 0.72)}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Twemoji Mozilla", "Segoe UI Symbol", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(emoji, size / 2, size / 2 + size * 0.05);
    const dataUrl = canvas.toDataURL('image/png');
    emojiCache.set(cacheKey, dataUrl);
    return dataUrl;
  } catch (err) {
    console.warn('Error generando canvas para emoji:', emoji, err);
    return null;
  }
}

/**
 * Dibuja un emoji en el documento jsPDF en la posición (x, y) con dimensiones (w, h).
 * Retorna true si se pudo dibujar como imagen, o false en caso de degradación elegante.
 */
function renderizarEmoji(doc: jsPDF, emoji: string | undefined, x: number, y: number, w: number, h: number): boolean {
  if (!emoji) return false;
  try {
    const dataUrl = getEmojiDataUrl(emoji);
    if (dataUrl) {
      doc.addImage(dataUrl, 'PNG', x, y, w, h);
      return true;
    }
  } catch {
    // Si falla addImage, retornamos false para degradar elegantemente
  }
  return false;
}

/** Víctima y culpable: solo por id/indicador (el rol puede contener la palabra «víctima» en otros personajes). */
function esVictima(caso: PuzzleCase, s: Suspect): boolean {
  return s.id === caso.victimId || !!s.isVictim;
}
function esCulpable(caso: PuzzleCase, s: Suspect): boolean {
  return s.id === caso.murdererId || !!s.isMurderer;
}

/** Nombre del reto sin el prefijo «Caso 002: », que ya aparece en la etiqueta CASO #. */
function nombreReto(caso: PuzzleCase): string {
  return (caso.title || '').replace(/^Caso\s+[^:]+:\s*/i, '').trim() || caso.title || 'Murdoku';
}

/** Recorta un texto con «…» para que quepa en maxW (con la fuente activa). */
function ajustarTexto(doc: jsPDF, texto: string, maxW: number): string {
  if (doc.getTextWidth(texto) <= maxW) return texto;
  let t = texto;
  while (t.length > 1 && doc.getTextWidth(t + '…') > maxW) t = t.slice(0, -1);
  return t.trimEnd() + '…';
}

/** Divide en líneas y, si exceden maxLineas, recorta la última con «…». */
function lineasAjustadas(doc: jsPDF, texto: string, maxW: number, maxLineas: number): string[] {
  const lineas: string[] = doc.splitTextToSize(texto, maxW);
  if (lineas.length <= maxLineas) return lineas;
  const res = lineas.slice(0, maxLineas);
  res[maxLineas - 1] = ajustarTexto(doc, res[maxLineas - 1] + ' ' + lineas[maxLineas], maxW);
  if (!res[maxLineas - 1].endsWith('…')) res[maxLineas - 1] = ajustarTexto(doc, res[maxLineas - 1] + ' …', maxW);
  return res;
}

/** Tamaño de cuadrícula real (5x5, 7x7, 9x9) para los títulos. */
function etiquetaTamano(caso: PuzzleCase): string {
  const n = caso.gridSize || 5;
  return caso.Tamano_Cuadricula || `${n}x${n}`;
}

/**
 * Celdas donde se escribe el nombre de cada estancia: la primera celda libre (orden de lectura)
 * de cada estancia, con el ancho disponible de las celdas contiguas de la misma estancia en esa fila.
 */
function celdasEtiquetaEstancia(caso: PuzzleCase): Map<string, number> {
  const res = new Map<string, number>();
  const vistas = new Set<string>();
  const n = caso.gridSize || 5;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const id = caso.cellRooms?.[r]?.[c];
      if (!id || vistas.has(id) || caso.blockedObjects?.[`${r},${c}`]) continue;
      vistas.add(id);
      let tramo = 1;
      while (c + tramo < n && caso.cellRooms[r][c + tramo] === id && !caso.blockedObjects?.[`${r},${c + tramo}`]) tramo++;
      res.set(`${r},${c}`, tramo);
    }
  }
  return res;
}

/** Escribe la etiqueta corta de la estancia en la esquina superior izquierda de la celda. */
function dibujarEtiquetaEstancia(doc: jsPDF, room: RoomInfo | undefined, roomId: string, x: number, y: number, anchoDisponible: number, gridSize: number) {
  const etiqueta = (room?.shortName || room?.name || roomId).toUpperCase();
  doc.setFont('courier', 'bold');
  doc.setFontSize(gridSize >= 9 ? 3.6 : gridSize >= 7 ? 4.0 : 4.6);
  doc.setTextColor(71, 85, 105);
  doc.text(ajustarTexto(doc, etiqueta, anchoDisponible - 1.4), x + 0.8, y + (gridSize >= 9 ? 2.0 : 2.5));
}

/** Dibuja una evidencia (objeto bloqueado) ajustada siempre dentro de la celda. */
function dibujarEvidenciaEnCelda(doc: jsPDF, obj: { emoji: string; evidenceCode?: string }, cellX: number, cellY: number, cellSize: number) {
  const pad = 0.45;
  doc.setFillColor(254, 252, 232);
  doc.setDrawColor(217, 119, 6);
  doc.setLineWidth(0.3);
  doc.roundedRect(cellX + pad, cellY + pad, cellSize - pad * 2, cellSize - pad * 2, 0.5, 0.5, 'FD');

  const interior = cellSize - pad * 2;
  const codeH = Math.max(1.7, interior * 0.24);
  const emojiSize = Math.min(interior * 0.5, 6.0);
  const gap = interior * 0.05;
  const bloqueH = emojiSize + gap + codeH;
  const top = cellY + pad + (interior - bloqueH) / 2;
  renderizarEmoji(doc, obj.emoji, cellX + (cellSize - emojiSize) / 2, top, emojiSize, emojiSize);

  const codeText = obj.evidenceCode || 'BLOQ';
  doc.setFont('courier', 'bold');
  let fs = cellSize >= 12 ? 4.8 : cellSize >= 9 ? 4.2 : 3.6;
  doc.setFontSize(fs);
  const codeW = Math.min(interior - 0.6, doc.getTextWidth(codeText) + 1.4);
  while (doc.getTextWidth(codeText) > codeW - 0.6 && fs > 2.6) { fs -= 0.2; doc.setFontSize(fs); }
  const codeX = cellX + (cellSize - codeW) / 2;
  const codeY = top + emojiSize + gap;
  doc.setFillColor(61, 46, 36);
  doc.setDrawColor(202, 138, 4);
  doc.setLineWidth(0.2);
  doc.roundedRect(codeX, codeY, codeW, codeH, 0.3, 0.3, 'FD');
  doc.setTextColor(254, 240, 138);
  doc.text(codeText, codeX + codeW / 2, codeY + codeH / 2 + 0.1, { align: 'center', baseline: 'middle' });
}

/**
 * Obtiene el sospechoso que ocupa una casilla específica según la solución
 */
function getOccupantAtCell(caso: PuzzleCase, r: number, c: number): Suspect | null {
  if (!caso.solution) return null;
  for (const [key, coord] of Object.entries(caso.solution)) {
    if (coord.row === r && coord.col === c) {
      const found = caso.suspects.find(s => s.id === key || s.name === key);
      if (found) return found;
      return { id: key, name: key, role: 'Personaje', avatar: '👤', color: '#1c1917' };
    }
  }
  return null;
}

/**
 * Obtiene la coordenada {row, col} de un sospechoso en la solución
 */
function getCoordForSuspect(caso: PuzzleCase, s: Suspect): { row: number; col: number } | null {
  if (!caso.solution) return null;
  if (caso.solution[s.id]) return caso.solution[s.id];
  if (caso.solution[s.name]) return caso.solution[s.name];
  return null;
}

/**
 * Dibuja la cinta pericial superior (rayas diagonales/bloques alternados)
 */
function dibujarCintaPericial(doc: jsPDF, x: number, y: number, width: number, height: number, colorFondo: [number, number, number]) {
  doc.setFillColor(colorFondo[0], colorFondo[1], colorFondo[2]);
  doc.rect(x, y, width, height, 'F');

  const stripeWidth = 5.0;
  const numStripes = Math.ceil(width / stripeWidth);
  doc.setFillColor(28, 25, 23); // negro carbón #1c1917
  for (let i = 0; i < numStripes; i += 2) {
    const sx = x + i * stripeWidth;
    const curW = Math.min(stripeWidth, x + width - sx);
    if (curW > 0) {
      doc.rect(sx, y, curW, height, 'F');
    }
  }
}

/**
 * Dibuja el marco exterior doble pericial
 */
function dibujarMarcoPagina(doc: jsPDF, margin: number, contentW: number, contentH: number) {
  // Fondo blanco puro
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, 297, 210, 'F');

  // Marco exterior
  doc.setDrawColor(28, 25, 23);
  doc.setLineWidth(0.6);
  doc.rect(margin, margin, contentW, contentH);

  // Marco interior fino
  doc.setLineWidth(0.2);
  doc.setDrawColor(180, 180, 180);
  doc.rect(margin + 1, margin + 1, contentW - 2, contentH - 2);
}

/** Pie de página común: línea y textos dentro del marco interior. */
function dibujarPie(doc: jsPDF, margin: number, contentWidth: number, izquierda: string, derecha: string) {
  doc.setDrawColor(28, 25, 23);
  doc.setLineWidth(0.35);
  doc.line(margin + 2, 197.4, margin + contentWidth - 2, 197.4);
  doc.setFont('courier', 'normal');
  doc.setFontSize(6.0);
  doc.setTextColor(120, 113, 108);
  doc.text(izquierda, margin + 3, 199.9);
  doc.text(derecha, margin + contentWidth - 3, 199.9, { align: 'right' });
}

/**
 * RENDERIZADO DE LA PÁGINA 1: CUADERNO DE INVESTIGACIÓN Y RETO
 */
function renderizarPaginaReto(doc: jsPDF, casoOrig: PuzzleCase, idioma: Language = 'es') {
  const caso = obtenerCasoTraducido(casoOrig, idioma);
  const t = TRANSLATIONS[idioma];

  const margin = 8;
  const contentWidth = 297 - margin * 2; // 281mm
  const contentHeight = 210 - margin * 2; // 194mm

  dibujarMarcoPagina(doc, margin, contentWidth, contentHeight);

  // 1. Cinta pericial superior (amarillo policial)
  const tapeY = margin + 1;
  const tapeH = 2.8;
  const tapeW = contentWidth - 2;
  dibujarCintaPericial(doc, margin + 1, tapeY, tapeW, tapeH, [234, 179, 8]);

  // 2. Cabecera pericial (y = 12.5 a 29.5)
  const headerTop = margin + 4.5;
  const badgeX = margin + 3;
  const badgeY = headerTop;
  const badgeW = 10;
  const badgeH = 13.5;

  // Escudo policial
  doc.setFillColor(41, 37, 36);
  doc.roundedRect(badgeX, badgeY, badgeW, badgeH, 1.2, 1.2, 'F');
  doc.setDrawColor(234, 179, 8);
  doc.setLineWidth(0.4);
  doc.roundedRect(badgeX + 0.7, badgeY + 0.7, badgeW - 1.4, badgeH - 1.4, 0.8, 0.8, 'S');
  doc.setTextColor(254, 240, 138);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.text('POL', badgeX + 1.8, badgeY + 5.2);
  doc.setFontSize(5.8);
  doc.text('CRIM', badgeX + 1.5, badgeY + 9.2);

  // Ficha de expediente a la derecha (x = 170, w = 117, h = 15.5)
  const alumnoBoxX = 170;
  const alumnoBoxY = headerTop;
  const alumnoBoxW = margin + contentWidth - 2 - alumnoBoxX;
  const alumnoBoxH = 15.5;

  doc.setFillColor(250, 250, 249);
  doc.setDrawColor(214, 211, 209);
  doc.setLineWidth(0.35);
  doc.roundedRect(alumnoBoxX, alumnoBoxY, alumnoBoxW, alumnoBoxH, 1, 1, 'FD');

  // Barra de cabecera de la ficha
  doc.setFillColor(41, 37, 36);
  doc.rect(alumnoBoxX, alumnoBoxY, alumnoBoxW, 3.8, 'F');
  doc.setTextColor(254, 240, 138);
  doc.setFont('courier', 'bold');
  doc.setFontSize(6.2);
  doc.text(t.pdfEvalSheet, alumnoBoxX + 2.5, alumnoBoxY + 2.7);

  // Campos de la ficha: etiqueta + línea de escritura que empieza donde acaba la etiqueta
  const campoFicha = (etiqueta: string, x: number, y: number, xFin: number) => {
    doc.setTextColor(28, 25, 23);
    doc.setFont('courier', 'bold');
    doc.setFontSize(6.8);
    doc.text(etiqueta, x, y);
    const xLinea = x + doc.getTextWidth(etiqueta) + 1.5;
    doc.setDrawColor(120, 113, 108);
    doc.setLineWidth(0.25);
    doc.line(xLinea, y + 0.4, xFin, y + 0.4);
  };
  const colFichaB = alumnoBoxX + alumnoBoxW * 0.66;
  campoFicha(t.pdfStudentName, alumnoBoxX + 2.5, alumnoBoxY + 8.0, colFichaB - 3);
  campoFicha(t.pdfDate, colFichaB, alumnoBoxY + 8.0, alumnoBoxX + alumnoBoxW - 2.5);
  campoFicha(t.pdfCourseGroup, alumnoBoxX + 2.5, alumnoBoxY + 13.0, colFichaB - 3);
  doc.setFont('courier', 'bold');
  doc.setFontSize(6.8);
  doc.setTextColor(28, 25, 23);
  doc.text(t.pdfGrade, colFichaB, alumnoBoxY + 13.0);
  doc.setTextColor(198, 0, 126);
  doc.text('____ / 10', alumnoBoxX + alumnoBoxW - 2.5, alumnoBoxY + 13.0, { align: 'right' });

  // Etiquetas informativas en la cabecera (x = badgeX + 13)
  let tagX = badgeX + 13;
  const tagY = headerTop;

  // Sello CONFIDENCIAL
  doc.setFillColor(198, 0, 126);
  doc.roundedRect(tagX, tagY, 21, 3.8, 0.6, 0.6, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('courier', 'bold');
  doc.setFontSize(6.2);
  doc.text(t.confidential, tagX + 1.6, tagY + 2.7);
  tagX += 23;

  // Badge de caso conciso (e.g. CASO #010-C · 9x9)
  const caseBadgeText = `CASO #${caso.id} · ${etiquetaTamano(caso)}`;
  doc.setFont('courier', 'bold');
  doc.setFontSize(6.0);
  const bw = doc.getTextWidth(caseBadgeText) + 4;
  if (tagX + bw < alumnoBoxX - 4) {
    doc.setFillColor(245, 245, 244);
    doc.setDrawColor(28, 25, 23);
    doc.setLineWidth(0.25);
    doc.roundedRect(tagX, tagY, bw, 3.8, 0.6, 0.6, 'FD');
    doc.setTextColor(28, 25, 23);
    doc.text(caseBadgeText, tagX + 2.0, tagY + 2.7);
    tagX += bw + 2;
  }

  // Dificultad
  const diffLabel = `NIVEL: ${(caso.difficulty || 'Normal').toUpperCase()}`;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.0);
  const diffW = doc.getTextWidth(diffLabel) + 4;
  if (tagX + diffW < alumnoBoxX - 4) {
    doc.setFillColor(254, 243, 199);
    doc.setDrawColor(217, 119, 6);
    doc.setLineWidth(0.25);
    doc.roundedRect(tagX, tagY, diffW, 3.8, 0.6, 0.6, 'FD');
    doc.setTextColor(146, 64, 14);
    doc.text(diffLabel, tagX + 2.0, tagY + 2.7);
    tagX += diffW + 2;
  }

  // Fuente histórica
  if (caso.fuenteHistorica && tagX < alumnoBoxX - 15) {
    const maxBibW = alumnoBoxX - tagX - 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    let bibLabel = `Fuente: ${caso.fuenteHistorica}`;
    if (doc.getTextWidth(bibLabel) + 4 > maxBibW) {
      while (bibLabel.length > 6 && doc.getTextWidth(bibLabel + '…') + 4 > maxBibW) {
        bibLabel = bibLabel.slice(0, -1);
      }
      bibLabel += '…';
    }
    const bibW = doc.getTextWidth(bibLabel) + 4;
    doc.setFillColor(224, 242, 254);
    doc.setDrawColor(2, 132, 199);
    doc.setLineWidth(0.25);
    doc.roundedRect(tagX, tagY, bibW, 3.8, 0.6, 0.6, 'FD');
    doc.setTextColor(3, 105, 161);
    doc.text(bibLabel, tagX + 2.0, tagY + 2.7);
  }

  // Título del Caso
  doc.setTextColor(28, 25, 23);
  doc.setFont('helvetica', 'bold');
  let titleFSize = 11.5;
  doc.setFontSize(titleFSize);
  const maxTitleW = alumnoBoxX - (badgeX + 13) - 3;
  let tituloCompleto = `Murdoku: ${nombreReto(caso)}`;
  while (doc.getTextWidth(tituloCompleto) > maxTitleW && titleFSize > 8.5) {
    titleFSize -= 0.5;
    doc.setFontSize(titleFSize);
  }
  if (doc.getTextWidth(tituloCompleto) > maxTitleW) {
    while (tituloCompleto.length > 5 && doc.getTextWidth(tituloCompleto + '…') > maxTitleW) {
      tituloCompleto = tituloCompleto.slice(0, -1);
    }
    tituloCompleto += '…';
  }
  doc.text(tituloCompleto, badgeX + 13, headerTop + 8.8);

  // Subtítulo del Caso
  doc.setFont('helvetica', 'italic');
  let subFSize = 7.0;
  doc.setFontSize(subFSize);
  doc.setTextColor(110, 105, 100);
  let subTexto = (caso.subtitle || '').replace(/\d+\s*x\s*\d+/i, etiquetaTamano(caso)) || etiquetaTamano(caso);
  while (doc.getTextWidth(subTexto) > maxTitleW && subFSize > 5.5) {
    subFSize -= 0.3;
    doc.setFontSize(subFSize);
  }
  if (doc.getTextWidth(subTexto) > maxTitleW) {
    while (subTexto.length > 5 && doc.getTextWidth(subTexto + '…') > maxTitleW) {
      subTexto = subTexto.slice(0, -1);
    }
    subTexto += '…';
  }
  doc.text(subTexto, badgeX + 13, headerTop + 13.0);

  // Línea divisoria principal
  const divisorY = headerTop + 17.0;
  doc.setDrawColor(28, 25, 23);
  doc.setLineWidth(0.5);
  doc.line(margin + 2, divisorY, margin + contentWidth - 2, divisorY);

  // =========================================================================
  // 3. COLUMNA IZQUIERDA: PERSONAJES Y CUADERNO DE PISTAS (ESPIRAL)
  // =========================================================================
  const colLeftX = margin + 2; // 10mm
  const colLeftWidth = 134;
  let currentY = divisorY + 3.0;

  // 3.1 Panel de Personajes
  const suspects = caso.suspects || [];
  const numSuspects = suspects.length;

  doc.setFillColor(41, 37, 36);
  doc.roundedRect(colLeftX, currentY - 2.0, colLeftWidth, 4.4, 0.6, 0.6, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.2);
  doc.text(t.pdfSec1Title, colLeftX + 2.5, currentY + 1.1);

  const victimsCount = suspects.filter((s) => esVictima(caso, s)).length;
  doc.setFont('courier', 'bold');
  doc.setTextColor(254, 240, 138);
  doc.setFontSize(6.2);
  const suspectsCountLabel = `${numSuspects - victimsCount} ${porIdioma(idioma, { es: 'sospechosos', gl: 'sospeitosos', pt: 'suspeitos' })} · ${victimsCount} ${porIdioma(idioma, { es: (victimsCount === 1 ? 'víctima' : 'víctimas'), gl: (victimsCount === 1 ? 'vítima' : 'vítimas'), pt: (victimsCount === 1 ? 'vítima' : 'vítimas') })}`;
  doc.text(suspectsCountLabel, colLeftX + colLeftWidth - 2.5, currentY + 1.1, { align: 'right' });

  currentY += 4.0;

  // Tarjetas calculadas en cuadrícula de 2 columnas con espacio amplio para texto completo
  const cardsPerRow = 2;
  const cardGap = 2.0;
  const cardWidth = (colLeftWidth - cardGap) / cardsPerRow; // 66.0 mm por tarjeta
  const numRows = Math.ceil(numSuspects / 2);
  const cardHeight = numSuspects <= 4 ? 13.5 : numSuspects <= 6 ? 11.6 : 10.2;
  const cardRowGap = numSuspects <= 4 ? 1.6 : 1.2;

  suspects.forEach((s, idx) => {
    const row = Math.floor(idx / cardsPerRow);
    const col = idx % cardsPerRow;
    const cardX = colLeftX + col * (cardWidth + cardGap);
    const cardY = currentY + row * (cardHeight + cardRowGap);

    const isVictima = esVictima(caso, s);

    // Fondo y borde del sospechoso (rojo suave para víctima, blanco pericial para otros)
    doc.setFillColor(isVictima ? 255 : 255, isVictima ? 245 : 255, isVictima ? 245 : 255);
    doc.setDrawColor(isVictima ? 220 : 203, isVictima ? 38 : 213, isVictima ? 38 : 225);
    doc.setLineWidth(isVictima ? 0.45 : 0.28);
    doc.roundedRect(cardX, cardY, cardWidth, cardHeight, 0.8, 0.8, 'FD');

    // 1. ZONA IZQUIERDA: EMOJI AVATAR + BADGE CIRCULAR CON LETRA
    const avatarSize = Math.min(cardHeight - 4.2, 5.0);
    const avatarX = cardX + 1.6;
    const avatarY = cardY + (cardHeight - avatarSize) / 2;
    const hasEmoji = renderizarEmoji(doc, s.avatar, avatarX, avatarY, avatarSize, avatarSize);

    // Badge circular con la letra del sospechoso (A, B, C...)
    const circleRadius = 2.3;
    const circleCenterX = hasEmoji ? cardX + avatarSize + 3.4 : cardX + 4.0;
    const circleCenterY = cardY + cardHeight / 2;

    doc.setFillColor(isVictima ? 185 : 30, isVictima ? 28 : 41, isVictima ? 28 : 59);
    doc.circle(circleCenterX, circleCenterY, circleRadius, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.6);
    doc.text(s.id, circleCenterX, circleCenterY + 0.1, { align: 'center', baseline: 'middle' });

    // 2. ZONA DERECHA: CASILLA DE DEDUCCIÓN DE COORDENADAS PARA EL ALUMNO
    const coordBoxW = 14.0;
    const coordBoxH = cardHeight - 2.0;
    const coordBoxX = cardX + cardWidth - coordBoxW - 1.2;
    const coordBoxY = cardY + 1.0;

    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.2);
    doc.roundedRect(coordBoxX, coordBoxY, coordBoxW, coordBoxH, 0.6, 0.6, 'FD');

    doc.setFont('courier', 'bold');
    doc.setFontSize(4.4);
    doc.setTextColor(100, 116, 139);
    doc.text(porIdioma(idioma, { es: 'CASILLA', gl: 'CASA', pt: 'CASA' }), coordBoxX + coordBoxW / 2, coordBoxY + 2.0, { align: 'center' });

    doc.setFont('courier', 'bold');
    doc.setFontSize(cardHeight <= 11.0 ? 5.2 : 5.8);
    doc.setTextColor(41, 37, 36);
    doc.text('F[_] C[_]', coordBoxX + coordBoxW / 2, coordBoxY + coordBoxH / 2 + 1.2, { align: 'center', baseline: 'middle' });

    // 3. ZONA CENTRAL: NOMBRE COMPLETO, ESTADO (VÍCTIMA) Y ROL FORENSE COMPLETO
    const textStartX = circleCenterX + circleRadius + 1.8;
    const vBadgeW = 10.5;
    const vBadgeH = 2.6;
    const vBadgeX = coordBoxX - vBadgeW - 1.2;
    const maxNameW = isVictima ? vBadgeX - textStartX - 1.2 : coordBoxX - textStartX - 1.2;

    // Fila 1: Nombre y distintivo si es víctima
    doc.setTextColor(28, 25, 23);
    doc.setFont('helvetica', 'bold');
    let nameFSize = cardHeight <= 11.0 ? 5.8 : 6.2;
    doc.setFontSize(nameFSize);

    let dispName = s.name;
    if (doc.getTextWidth(dispName) > maxNameW) {
      nameFSize = 5.0;
      doc.setFontSize(nameFSize);
      if (doc.getTextWidth(dispName) > maxNameW) {
        while (dispName.length > 2 && doc.getTextWidth(dispName + '…') > maxNameW) {
          dispName = dispName.slice(0, -1);
        }
        dispName += '…';
      }
    }
    doc.text(dispName, textStartX, cardY + (cardHeight <= 11.0 ? 2.9 : 3.4));

    if (isVictima) {
      doc.setFillColor(220, 38, 38);
      doc.roundedRect(vBadgeX, cardY + 1.0, vBadgeW, vBadgeH, 0.4, 0.4, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(4.2);
      doc.text(porIdioma(idioma, { es: 'VÍCTIMA', gl: 'VÍTIMA', pt: 'VÍTIMA' }), vBadgeX + vBadgeW / 2, cardY + 1.0 + vBadgeH / 2 + 0.1, { align: 'center', baseline: 'middle' });
    }

    // Fila 2+: Rol forense completo (ajustado con splitTextToSize, sin invadir casilla de coordenadas)
    const rawRole = s.role || (isVictima ? (porIdioma(idioma, { es: 'Víctima del caso', gl: 'Vítima do caso', pt: 'Vítima do caso' })) : (porIdioma(idioma, { es: 'Sospechoso de la investigación', gl: 'Sospeitoso da investigación', pt: 'Suspeito da investigação' })));
    doc.setFont('helvetica', 'normal');
    let roleFontSize = cardHeight <= 11.0 ? 4.6 : 5.0;
    if (rawRole.length > 34) roleFontSize = 4.4;
    doc.setFontSize(roleFontSize);
    doc.setTextColor(71, 85, 105);

    const maxRoleW = coordBoxX - textStartX - 1.2;
    const roleLines = doc.splitTextToSize(rawRole, maxRoleW);
    let roleY = cardY + (cardHeight <= 11.0 ? 5.5 : 6.3);
    const roleLineHeight = 2.4;
    for (let rIdx = 0; rIdx < Math.min(roleLines.length, 2); rIdx++) {
      let lText = roleLines[rIdx];
      if (rIdx === 1 && roleLines.length > 2) {
        while (lText.length > 3 && doc.getTextWidth(lText + '…') > maxRoleW) {
          lText = lText.slice(0, -1);
        }
        lText += '…';
      }
      doc.text(lText, textStartX, roleY);
      roleY += roleLineHeight;
    }
  });

  // Si hay un número impar de personajes (ej: 5 sospechosos), se añade una tarjeta auxiliar de regla forense
  if (numSuspects % 2 !== 0) {
    const emptyRow = Math.floor(numSuspects / cardsPerRow);
    const emptyCol = 1;
    const tipX = colLeftX + emptyCol * (cardWidth + cardGap);
    const tipY = currentY + emptyRow * (cardHeight + cardRowGap);

    doc.setFillColor(254, 252, 232);
    doc.setDrawColor(234, 179, 8);
    doc.setLineWidth(0.3);
    doc.roundedRect(tipX, tipY, cardWidth, cardHeight, 0.8, 0.8, 'FD');

    // Emoji de consigna
    renderizarEmoji(doc, '💡', tipX + 2.0, tipY + (cardHeight - 5.0) / 2, 5.0, 5.0);

    const tipTextX = tipX + 8.5;
    const maxTipW = cardWidth - 10.5;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.5);
    doc.setTextColor(146, 64, 14);
    doc.text(porIdioma(idioma, { es: 'REGLAS DEL CASO', gl: 'REGRAS DO CASO', pt: 'REGRAS DO CASO' }), tipTextX, tipY + 3.0);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(120, 53, 15);
    const tipMsg = porIdioma(idioma, { es: 'Una persona por fila y por columna; nadie en las casillas con objeto. El culpable es la única persona a solas con la víctima en su estancia.', gl: 'Unha persoa por fila e por columna; ninguén nas casas con obxecto. O culpable é a única persoa a soas coa vítima na súa estancia.', pt: 'Uma pessoa por linha e por coluna; ninguém nas casas com objeto. O culpado é a única pessoa a sós com a vítima na sua divisão.' });
    let tipFs = 4.8;
    doc.setFontSize(tipFs);
    const maxTipLines = Math.max(1, Math.floor((cardHeight - 4.4) / 2.1));
    let tipLines: string[] = doc.splitTextToSize(tipMsg, maxTipW);
    while (tipLines.length > maxTipLines && tipFs > 3.8) {
      tipFs -= 0.2;
      doc.setFontSize(tipFs);
      tipLines = doc.splitTextToSize(tipMsg, maxTipW);
    }
    tipLines = lineasAjustadas(doc, tipMsg, maxTipW, maxTipLines);
    let curTipY = tipY + 5.4;
    for (const linea of tipLines) {
      doc.text(linea, tipTextX, curTipY);
      curTipY += tipFs * PT_MM * 1.15;
    }
  }

  currentY += numRows * (cardHeight + cardRowGap) + 2.0;

  // 3.2 Cuaderno de Pistas Forenses (Estilo Libreta de Espiral)
  const cluesBoxY = currentY + 1.0;
  const cluesBoxHeight = 196 - cluesBoxY;

  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(41, 37, 36);
  doc.setLineWidth(0.45);
  doc.roundedRect(colLeftX, cluesBoxY, colLeftWidth, cluesBoxHeight, 1.2, 1.2, 'FD');

  // Espiral de libreta
  const spiralBarH = 3.6;
  doc.setFillColor(55, 48, 42);
  doc.rect(colLeftX, cluesBoxY, colLeftWidth, spiralBarH, 'F');

  const numRings = 18;
  const ringStep = colLeftWidth / numRings;
  for (let r = 0; r < numRings; r++) {
    const rx = colLeftX + r * ringStep + ringStep / 2;
    doc.setFillColor(180, 180, 180);
    doc.ellipse(rx, cluesBoxY + 1.8, 1.1, 1.4, 'F');
    doc.setFillColor(240, 240, 240);
    doc.ellipse(rx, cluesBoxY + 1.8, 0.5, 0.8, 'F');
    doc.setFillColor(41, 37, 36);
    doc.ellipse(rx, cluesBoxY + 1.8, 0.25, 0.4, 'F');
  }

  // Título del Cuaderno
  const notebookHeaderY = cluesBoxY + spiralBarH + 3.5;
  doc.setTextColor(28, 25, 23);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.2);
  doc.text(t.pdfSec2Title, colLeftX + 3, notebookHeaderY);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(5.2);
  doc.setTextColor(120, 113, 108);
  doc.text(`(${t.pdfSec2Subtitle})`, colLeftX + colLeftWidth - 3, notebookHeaderY, { align: 'right' });

  doc.setDrawColor(214, 211, 209);
  doc.setLineWidth(0.25);
  doc.line(colLeftX + 2, notebookHeaderY + 2.0, colLeftX + colLeftWidth - 2, notebookHeaderY + 2.0);

  // Contenido del cuaderno: objetivo + pistas de posición (imprescindibles para resolver en papel)
  // + testimonios narrativos. Se busca el mayor tamaño de letra con el que cabe todo.
  const cuadernoTop = notebookHeaderY + 3.2;
  const cuadernoBottom = cluesBoxY + cluesBoxHeight - 2.0;
  const textoX = colLeftX + 12.0;
  const maxTextoW = colLeftX + colLeftWidth - 3.0 - textoX;

  const pistasDeduccion = suspects
    .filter((s) => s.pistasPosicion && s.pistasPosicion.length > 0)
    .map((s) => ({ nombre: `${s.name}:`, texto: textoPistasPosicion(s, caso, idioma, false) }));
  let testimonios = (caso.clues || []).map((c) => ({ nombre: '', texto: c.text }));

  // Divide un texto con un prefijo en negrita en la primera línea
  const envolver = (nombre: string, texto: string, fs: number): string[] => {
    doc.setFontSize(fs);
    doc.setFont('helvetica', 'bold');
    const sangria = nombre ? doc.getTextWidth(nombre + ' ') : 0;
    doc.setFont('helvetica', 'normal');
    const palabras = texto.split(' ');
    const lineas: string[] = [];
    let actual = '';
    for (const p of palabras) {
      const ancho = lineas.length === 0 ? maxTextoW - sangria : maxTextoW;
      const cand = actual ? `${actual} ${p}` : p;
      if (doc.getTextWidth(cand) <= ancho || !actual) actual = cand;
      else { lineas.push(actual); actual = p; }
    }
    lineas.push(actual);
    return lineas;
  };

  const objetivoLineas = (fs: number) => {
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(fs * 0.85);
    return doc.splitTextToSize(`${t.pdfObjectiveTitle} ${t.pdfObjectiveText}`, colLeftWidth - 8.0) as string[];
  };

  const medir = (fs: number, items: { nombre: string; texto: string }[][]) => {
    const lh = fs * PT_MM * 1.2;
    let h = objetivoLineas(fs).length * fs * 0.85 * PT_MM * 1.2 + 2.6;
    for (const grupo of items) {
      if (!grupo.length) continue;
      h += 3.4; // etiqueta del grupo
      for (const it of grupo) h += envolver(it.nombre, it.texto, fs).length * lh + fs * 0.16;
    }
    return h;
  };

  let fsCuaderno = 7.0;
  while (fsCuaderno > 5.0 && cuadernoTop + medir(fsCuaderno, [pistasDeduccion, testimonios]) > cuadernoBottom) fsCuaderno -= 0.2;
  let testimoniosOmitidos = 0;
  while (testimonios.length && cuadernoTop + medir(fsCuaderno, [pistasDeduccion, testimonios]) + 3 > cuadernoBottom) {
    testimonios = testimonios.slice(0, -1);
    testimoniosOmitidos++;
  }

  // Objetivo del caso
  let y = cuadernoTop;
  const objLineas = objetivoLineas(fsCuaderno);
  const objLh = fsCuaderno * 0.85 * PT_MM * 1.2;
  doc.setFillColor(254, 252, 232);
  doc.setDrawColor(234, 179, 8);
  doc.setLineWidth(0.2);
  doc.roundedRect(colLeftX + 3.0, y, colLeftWidth - 6.0, objLineas.length * objLh + 1.6, 0.6, 0.6, 'FD');
  doc.setTextColor(120, 53, 15);
  objLineas.forEach((l, i) => doc.text(l, colLeftX + 4.0, y + 0.8 + objLh * (i + 0.8)));
  y += objLineas.length * objLh + 2.6;

  let numero = 1;
  const pintarGrupo = (titulo: string, items: { nombre: string; texto: string }[]) => {
    if (!items.length) return;
    const lh = fsCuaderno * PT_MM * 1.2;
    doc.setFont('courier', 'bold');
    doc.setFontSize(5.4);
    doc.setTextColor(198, 0, 126);
    doc.text(titulo, colLeftX + 3.0, y + 2.2);
    y += 3.4;
    for (const it of items) {
      const lineas = envolver(it.nombre, it.texto, fsCuaderno);
      const yBase = y + fsCuaderno * PT_MM * 0.95;
      // Casilla de verificación y número
      doc.setDrawColor(60, 60, 60);
      doc.setLineWidth(0.25);
      doc.setFillColor(255, 255, 255);
      const caja = Math.min(2.8, fsCuaderno * PT_MM * 1.05);
      doc.roundedRect(colLeftX + 3.0, yBase - caja + 0.3, caja, caja, 0.3, 0.3, 'FD');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(fsCuaderno);
      doc.setTextColor(28, 25, 23);
      doc.text(`${numero}.`, colLeftX + 6.6, yBase);
      // Texto (nombre en negrita en la primera línea)
      let xTexto = textoX;
      if (it.nombre) {
        doc.text(it.nombre, textoX, yBase);
        xTexto = textoX + doc.getTextWidth(it.nombre + ' ');
      }
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(35, 30, 25);
      lineas.forEach((l, i) => doc.text(l, i === 0 ? xTexto : textoX, yBase + i * lh));
      y += lineas.length * lh + fsCuaderno * 0.16;
      numero++;
    }
  };
  pintarGrupo(porIdioma(idioma, { es: 'PISTAS DE POSICIÓN (DEDUCCIÓN)', gl: 'PISTAS DE POSICIÓN (DEDUCIÓN)', pt: 'PISTAS DE POSIÇÃO (DEDUÇÃO)' }), pistasDeduccion);
  pintarGrupo(porIdioma(idioma, { es: 'TESTIMONIOS DEL RELATO', gl: 'TESTEMUÑOS DO RELATO', pt: 'TESTEMUNHOS DO RELATO' }), testimonios);
  if (testimoniosOmitidos > 0) {
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(5.0);
    doc.setTextColor(120, 113, 108);
    doc.text(
      porIdioma(idioma, { es: `(+${testimoniosOmitidos} testimonios más en el juego digital)`, gl: `(+${testimoniosOmitidos} testemuños máis no xogo dixital)`, pt: `(+${testimoniosOmitidos} testemunhos no jogo digital)` }),
      textoX,
      y + 2.0
    );
    y += 3.0;
  }

  // Espacio para notas manuscritas con el hueco que quede
  if (cuadernoBottom - y >= 9) {
    const notasY = y + 3.0;
    doc.setFont('courier', 'bold');
    doc.setFontSize(5.8);
    doc.setTextColor(140, 130, 120);
    doc.text(porIdioma(idioma, { es: 'NOTAS Y BORRADOR DEL INVESTIGADOR:', gl: 'NOTAS E BORRADOR DO INVESTIGADOR:', pt: 'NOTAS E RASCUNHO DO INVESTIGADOR:' }), colLeftX + 3.0, notasY);
    doc.setDrawColor(225, 225, 225);
    doc.setLineWidth(0.2);
    for (let ly = notasY + 4.5; ly <= cuadernoBottom - 0.5; ly += 4.5) {
      doc.line(colLeftX + 3.0, ly, colLeftX + colLeftWidth - 3.0, ly);
    }
  }

  // =========================================================================
  // 4. COLUMNA DERECHA: PLANO DE LA ESCENA, LEYENDAS Y DICTAMEN FINAL
  // =========================================================================
  const colRightX = margin + colLeftWidth + 5; // 147mm
  const colRightWidth = margin + contentWidth - 2 - colRightX; // ~138mm
  let boardHeaderY = divisorY + 3.0;

  // Barra de título del Plano
  doc.setFillColor(41, 37, 36);
  doc.roundedRect(colRightX, boardHeaderY - 2.0, colRightWidth, 4.4, 0.6, 0.6, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.2);
  doc.text(t.pdfSec3Title.replace(/N\s*[×x]\s*N/, etiquetaTamano(caso).replace('x', '×')), colRightX + 2.5, boardHeaderY + 1.1);

  const reglaTxt = porIdioma(idioma, { es: 'REGLA: 1 POR FILA Y COLUMNA', gl: 'REGRA: 1 POR FILA E COLUMNA', pt: 'REGRA: 1 POR LINHA E COLUNA' });
  doc.setFont('courier', 'bold');
  doc.setFontSize(5.6);
  const reglaW = doc.getTextWidth(reglaTxt) + 3.0;
  doc.setFillColor(198, 0, 126);
  doc.roundedRect(colRightX + colRightWidth - reglaW - 2, boardHeaderY - 1.4, reglaW, 3.2, 0.5, 0.5, 'F');
  doc.setTextColor(255, 255, 255);
  doc.text(reglaTxt, colRightX + colRightWidth - 2 - reglaW / 2, boardHeaderY + 0.2, { align: 'center', baseline: 'middle' });

  boardHeaderY += 4.0;
  const gridSize = caso.gridSize || 5;

  // Tamaño óptimo de celda estandarizado para equilibrar tablero y secciones inferiores
  let cellSize = 13.5; // Para 5x5: 67.5mm
  if (gridSize >= 9) {
    cellSize = 7.6; // Para 9x9: 68.4mm
  } else if (gridSize >= 8) {
    cellSize = 8.5; // Para 8x8: 68.0mm
  } else if (gridSize >= 7) {
    cellSize = 9.8; // Para 7x7: 68.6mm
  } else if (gridSize >= 6) {
    cellSize = 11.4; // Para 6x6: 68.4mm
  }

  const coordHeaderSize = 4.5;
  const boardGridW = gridSize * cellSize;
  const totalBoardW = boardGridW + coordHeaderSize;
  const boardStartX = colRightX + Math.max(0, (colRightWidth - totalBoardW) / 2);
  const boardStartY = boardHeaderY;

  // Coordenadas superiores (C1..Cn) y laterales (F1..Fn)
  doc.setFillColor(245, 245, 244);
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.2);
  doc.rect(boardStartX, boardStartY, coordHeaderSize, coordHeaderSize, 'FD');
  doc.setTextColor(120, 113, 108);
  doc.setFont('courier', 'bold');
  doc.setFontSize(5.0);
  doc.text('F\\C', boardStartX + coordHeaderSize / 2, boardStartY + coordHeaderSize / 2 + 0.2, { align: 'center', baseline: 'middle' });

  for (let c = 0; c < gridSize; c++) {
    const colX = boardStartX + coordHeaderSize + c * cellSize;
    doc.setFillColor(245, 245, 244);
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.rect(colX, boardStartY, cellSize, coordHeaderSize, 'FD');
    doc.setTextColor(41, 37, 36);
    doc.setFont('courier', 'bold');
    doc.setFontSize(5.8);
    doc.text(`C${c + 1}`, colX + cellSize / 2, boardStartY + coordHeaderSize / 2 + 0.2, { align: 'center', baseline: 'middle' });
  }

  for (let r = 0; r < gridSize; r++) {
    const rowY = boardStartY + coordHeaderSize + r * cellSize;
    doc.setFillColor(245, 245, 244);
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.rect(boardStartX, rowY, coordHeaderSize, cellSize, 'FD');
    doc.setTextColor(41, 37, 36);
    doc.setFont('courier', 'bold');
    doc.setFontSize(5.8);
    doc.text(`F${r + 1}`, boardStartX + coordHeaderSize / 2, rowY + cellSize / 2 + 0.2, { align: 'center', baseline: 'middle' });
  }

  // Cuadrícula del Reto
  const etiquetasEstancia = celdasEtiquetaEstancia(caso);
  const gridOriginX = boardStartX + coordHeaderSize;
  const gridOriginY = boardStartY + coordHeaderSize;

  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      const cellX = gridOriginX + c * cellSize;
      const cellY = gridOriginY + r * cellSize;
      const roomId = caso.cellRooms?.[r]?.[c] || 'desconocido';
      const room = caso.rooms?.[roomId];
      const [red, green, blue] = resolverColorEstancia(room, roomId, true);

      doc.setFillColor(red, green, blue);
      doc.rect(cellX, cellY, cellSize, cellSize, 'F');

      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.18);
      doc.rect(cellX, cellY, cellSize, cellSize, 'S');

      // Bordes gruesos entre estancias distintas
      const currentRoom = caso.cellRooms?.[r]?.[c];
      const topDiff = r === 0 || caso.cellRooms?.[r - 1]?.[c] !== currentRoom;
      const bottomDiff = r === gridSize - 1 || caso.cellRooms?.[r + 1]?.[c] !== currentRoom;
      const leftDiff = c === 0 || caso.cellRooms?.[r]?.[c - 1] !== currentRoom;
      const rightDiff = c === gridSize - 1 || caso.cellRooms?.[r]?.[c + 1] !== currentRoom;

      doc.setDrawColor(28, 25, 23);
      doc.setLineWidth(0.75);
      if (topDiff) doc.line(cellX, cellY, cellX + cellSize, cellY);
      if (bottomDiff) doc.line(cellX, cellY + cellSize, cellX + cellSize, cellY + cellSize);
      if (leftDiff) doc.line(cellX, cellY, cellX, cellY + cellSize);
      if (rightDiff) doc.line(cellX + cellSize, cellY, cellX + cellSize, cellY + cellSize);

      // Nombre de la estancia solo en su primera celda (evita repetirlo en todas las casillas)
      const blockedKey = `${r},${c}`;
      const blockedObj = caso.blockedObjects?.[blockedKey];
      const tramoEtiqueta = etiquetasEstancia.get(blockedKey);
      if (tramoEtiqueta) dibujarEtiquetaEstancia(doc, room, roomId, cellX, cellY, tramoEtiqueta * cellSize, gridSize);

      if (blockedObj) {
        dibujarEvidenciaEnCelda(doc, blockedObj, cellX, cellY, cellSize);
      } else {
        const answerBoxSize = Math.min(cellSize * 0.46, 7.6);
        const boxX = cellX + (cellSize - answerBoxSize) / 2;
        const boxY = cellY + (cellSize - answerBoxSize) / 2 + 0.8;

        doc.setDrawColor(180, 180, 180);
        doc.setLineWidth(0.24);
        doc.setFillColor(255, 255, 255);
        doc.roundedRect(boxX, boxY, answerBoxSize, answerBoxSize, 0.6, 0.6, 'FD');

        // Marca pericial guía tenue
        doc.setFillColor(220, 220, 220);
        doc.circle(cellX + cellSize / 2, cellY + cellSize / 2 + 0.8, 0.45, 'F');
      }
    }
  }

  // 4.3 Leyenda Oficial de Estancias y Evidencias Forenses
  const postBoardY = gridOriginY + boardGridW + 2.5;

  // 4.3.A Cálculo dinámico y proporcionado de dimensiones para la Sección 4
  const roomsList = Object.values(caso.rooms || {}) as RoomInfo[];
  const roomCols = roomsList.length <= 6 ? 3 : 4;
  const numRoomRows = Math.ceil(roomsList.length / roomCols);
  const sec4HeaderH = 4.4;
  const roomStartY = postBoardY + sec4HeaderH + 2.0;
  // Nombres completos de las estancias en hasta 2 líneas (antes se cortaban con «…»)
  const roomColGap = 2.0;
  const roomColW = (colRightWidth - 6.0 - (roomCols - 1) * roomColGap) / roomCols;
  const sampleW = 3.6;
  const sampleH = 3.2;
  const roomFs = roomCols >= 4 ? 5.2 : 5.8;
  const roomLh = roomFs * PT_MM * 1.15;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(roomFs);
  const roomLines = roomsList.map((rm) => lineasAjustadas(doc, rm.name || rm.shortName, roomColW - sampleW - 2.0, 2));
  const roomRowHeights: number[] = [];
  for (let rr = 0; rr < numRoomRows; rr++) {
    const maxL = Math.max(...roomLines.slice(rr * roomCols, rr * roomCols + roomCols).map((l) => l.length));
    roomRowHeights.push(Math.max(4.0, maxL * roomLh + 1.2));
  }
  const roomsBlockH = roomRowHeights.reduce((a, b) => a + b, 0);

  const blockedEntries = Object.values(caso.blockedObjects || {});
  const uniqueEvidences = Array.from(
    new Map(blockedEntries.map(e => [e.evidenceCode || e.name, e])).values()
  );

  const evCols = uniqueEvidences.length === 4 ? 2 : (uniqueEvidences.length >= 3 ? 3 : Math.max(1, uniqueEvidences.length));
  const numEvRows = evCols > 0 ? Math.ceil(uniqueEvidences.length / evCols) : 0;
  const evCardH = 5.8;
  const evBlockH = uniqueEvidences.length > 0 ? (1.5 + 4.4 + numEvRows * (evCardH + 1.2)) : 0;

  // Altura exacta y dinámica que garantiza cabida para todas las estancias y evidencias
  const legendBoxH = sec4HeaderH + 2.0 + roomsBlockH + (uniqueEvidences.length > 0 ? (1.5 + evBlockH) : 0) + 1.8;

  // Contenedor principal de la Sección 4
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(41, 37, 36);
  doc.setLineWidth(0.35);
  doc.roundedRect(colRightX, postBoardY, colRightWidth, legendBoxH, 1.0, 1.0, 'FD');

  // Cabecera de sección estandarizada
  doc.setFillColor(41, 37, 36);
  doc.roundedRect(colRightX, postBoardY, colRightWidth, sec4HeaderH, 1.0, 1.0, 'F');
  doc.rect(colRightX, postBoardY + 2.0, colRightWidth, 2.4, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.2);
  doc.text(t.pdfSec4Title, colRightX + 2.5, postBoardY + 3.1);

  // Muestrario de Estancias Oficiales del Recinto

  roomsList.forEach((rm, idx) => {
    const colIdx = idx % roomCols;
    const rowIdx = Math.floor(idx / roomCols);
    const itemX = colRightX + 3.0 + colIdx * (roomColW + roomColGap);
    const rowTopY = roomStartY + roomRowHeights.slice(0, rowIdx).reduce((a, b) => a + b, 0);
    const rowH = roomRowHeights[rowIdx];
    const sampleY = rowTopY + (rowH - sampleH) / 2;

    const [r, g, b] = resolverColorEstancia(rm, rm.id);

    // Muestra de color con borde nítido
    doc.setFillColor(r, g, b);
    doc.setDrawColor(40, 40, 40);
    doc.setLineWidth(0.25);
    doc.rect(itemX, sampleY, sampleW, sampleH, 'FD');

    // Nombre completo de la estancia alineado verticalmente con la muestra
    doc.setTextColor(28, 25, 23);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(roomFs);
    const lines = roomLines[idx];
    const firstY = rowTopY + rowH / 2 - ((lines.length - 1) * roomLh) / 2;
    lines.forEach((l, li) => doc.text(l, itemX + sampleW + 1.5, firstY + li * roomLh + 0.2, { baseline: 'middle' }));
  });

  let curSectionY = roomStartY + roomsBlockH + 1.2;

  // 4.3.B Evidencias Forenses Acordonadas (Bloqueos de Casilla)
  if (uniqueEvidences.length > 0) {
    // Línea separadora tenue
    doc.setDrawColor(220, 215, 210);
    doc.setLineWidth(0.22);
    doc.line(colRightX + 3.0, curSectionY, colRightX + colRightWidth - 3.0, curSectionY);
    curSectionY += 1.5;

    // Etiqueta pericial de evidencias
    doc.setFont('courier', 'bold');
    doc.setFontSize(4.8);
    doc.setTextColor(120, 113, 108);
    doc.text(porIdioma(idioma, { es: 'EVIDENCIAS FORENSES ACORDONADAS (CASILLAS BLOQUEADAS):', gl: 'EVIDENCIAS FORENSES ACORDONADAS (CELAS BLOQUEADAS):', pt: 'EVIDÊNCIAS FORENSES ISOLADAS (CASAS BLOQUEADAS):' }), colRightX + 3.0, curSectionY + 2.2);
    curSectionY += 3.6;

    // Tarjetas de evidencias periciales
    const evGap = 2.0;
    const evCardW = (colRightWidth - 6.0 - (evCols - 1) * evGap) / evCols;

    uniqueEvidences.forEach((ev, idx) => {
      const evRow = Math.floor(idx / evCols);
      const evCol = idx % evCols;
      const evCardX = colRightX + 3.0 + evCol * (evCardW + evGap);
      const evCardY = curSectionY + evRow * (evCardH + 1.2);

      // Tarjeta contenedor pericial de la evidencia
      doc.setFillColor(254, 252, 232); // pergamino ámbar tenue
      doc.setDrawColor(217, 119, 6);
      doc.setLineWidth(0.25);
      doc.roundedRect(evCardX, evCardY, evCardW, evCardH, 0.6, 0.6, 'FD');

      // Emoji pericial nítido
      const emSize = 3.8;
      renderizarEmoji(doc, ev.emoji, evCardX + 1.2, evCardY + (evCardH - emSize) / 2, emSize, emSize);

      // Placa técnica con el código de evidencia
      const codeW = 8.5;
      const codeH = 3.2;
      const codeX = evCardX + emSize + 2.0;
      doc.setFillColor(61, 46, 36);
      doc.roundedRect(codeX, evCardY + 1.3, codeW, codeH, 0.4, 0.4, 'F');
      doc.setTextColor(254, 240, 138);
      doc.setFont('courier', 'bold');
      doc.setFontSize(4.8);
      doc.text(ev.evidenceCode || 'BLOQ', codeX + codeW / 2, evCardY + 1.3 + codeH / 2 + 0.1, { align: 'center', baseline: 'middle' });

      // Nombre completo de la evidencia
      const nameX = codeX + codeW + 1.5;
      const maxNameW = (evCardX + evCardW - 1.2) - nameX;
      doc.setTextColor(28, 25, 23);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(5.2);
      const evName = ajustarTexto(doc, ev.name || 'Evidencia', maxNameW);
      doc.text(evName, nameX, evCardY + 3.0);

      // Regla de juego: casilla bloqueada
      doc.setFont('courier', 'bold');
      doc.setFontSize(4.0);
      doc.setTextColor(180, 83, 9);
      doc.text(ajustarTexto(doc, t.pdfSec4BlockedDesc, maxNameW), nameX, evCardY + evCardH - 1.2);
    });
  }

  // =========================================================================
  // 4.4 Panel de Dictamen Final del Alumno (Sección 5: Todo contenido estrictamente dentro)
  // =========================================================================
  const dictamenY = postBoardY + legendBoxH + 2.0;
  const dictamenBoxH = 196.0 - dictamenY; // Aprovecha exactamente todo el espacio vertical disponible hasta 196.0mm

  if (dictamenBoxH > 10) {
    doc.setFillColor(250, 250, 249);
    doc.setDrawColor(41, 37, 36);
    doc.setLineWidth(0.35);
    doc.roundedRect(colRightX, dictamenY, colRightWidth, dictamenBoxH, 1.0, 1.0, 'FD');

    // Cabecera de la Sección 5
    doc.setFillColor(41, 37, 36);
    doc.roundedRect(colRightX, dictamenY, colRightWidth, 4.4, 1.0, 1.0, 'F');
    doc.rect(colRightX, dictamenY + 2.0, colRightWidth, 2.4, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.2);
    doc.text(t.pdfSec5Title, colRightX + 2.5, dictamenY + 3.1);

    const badgeTxt = t.pdfSec5InvestigatorVerdict;
    doc.setFont('courier', 'bold');
    doc.setFontSize(5.2);
    const badgeTxtW = doc.getTextWidth(badgeTxt);
    const badgeBoxW = Math.max(38, badgeTxtW + 4.0);
    const badgeBoxX = colRightX + colRightWidth - badgeBoxW - 2.0;

    doc.setFillColor(198, 0, 126);
    doc.roundedRect(badgeBoxX, dictamenY + 0.6, badgeBoxW, 3.2, 0.5, 0.5, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text(badgeTxt, badgeBoxX + badgeBoxW / 2, dictamenY + 2.2 + 0.5, { align: 'center', baseline: 'middle' });

    let curSec5Y = dictamenY + 4.4 + 1.6;

    // A) Franja de Comprobación de Coordenadas de Personajes
    const chipsPerRow = numSuspects <= 5 ? numSuspects : Math.ceil(numSuspects / 2);
    const chipGap = 1.6;
    const chipW = (colRightWidth - 6.0 - (chipsPerRow - 1) * chipGap) / chipsPerRow;
    const chipH = 4.8;
    const chipNumRows = Math.ceil(numSuspects / chipsPerRow);

    suspects.forEach((s, idx) => {
      const cRow = Math.floor(idx / chipsPerRow);
      const cCol = idx % chipsPerRow;
      const cX = colRightX + 3.0 + cCol * (chipW + chipGap);
      const cY = curSec5Y + cRow * (chipH + 1.0);

      const isVictima = esVictima(caso, s);

      doc.setFillColor(isVictima ? 254 : 255, isVictima ? 242 : 255, isVictima ? 242 : 255);
      doc.setDrawColor(isVictima ? 220 : 203, isVictima ? 38 : 213, isVictima ? 38 : 225);
      doc.setLineWidth(0.2);
      doc.roundedRect(cX, cY, chipW, chipH, 0.5, 0.5, 'FD');

      // Círculo ID
      const rCircle = 1.7;
      const circX = cX + 2.3;
      const circY = cY + chipH / 2;
      doc.setFillColor(isVictima ? 185 : 41, isVictima ? 28 : 37, isVictima ? 28 : 36);
      doc.circle(circX, circY, rCircle, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(5.2);
      doc.text(s.id, circX, circY + 0.1, { align: 'center', baseline: 'middle' });

      // Nombre corto si cabe
      const textX = circX + rCircle + 1.2;
      doc.setFont('courier', 'bold');
      doc.setFontSize(5.0);
      const coordChipW = doc.getTextWidth('F[_] C[_]');
      const maxNW = chipW - (textX - cX) - coordChipW - 2.0;
      if (maxNW > 4) {
        doc.setTextColor(28, 25, 23);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(4.6);
        doc.text(ajustarTexto(doc, s.name, maxNW), textX, cY + chipH / 2 + 0.2, { baseline: 'middle' });
      }

      // Casilla F[_] C[_]
      doc.setFont('courier', 'bold');
      doc.setFontSize(5.0);
      doc.setTextColor(41, 37, 36);
      doc.text('F[_] C[_]', cX + chipW - 1.2, cY + chipH / 2 + 0.2, { align: 'right', baseline: 'middle' });
    });

    curSec5Y += chipNumRows * (chipH + 1.0) + 1.4;

    // B) Tarjetas de Veredicto Oficial (Dictamen del Culpable y Dictamen de la Víctima)
    const footerH = 4.8;
    const verdictBottomTarget = dictamenY + dictamenBoxH - footerH - 2.0;
    const verdictCardH = Math.max(14.0, verdictBottomTarget - curSec5Y);
    const verdictCardW = (colRightWidth - 6.0 - 2.5) / 2;

    // Tarjeta 1: Dictamen del Culpable
    const leftCardX = colRightX + 3.0;
    doc.setFillColor(254, 242, 242);
    doc.setDrawColor(220, 38, 38);
    doc.setLineWidth(0.35);
    doc.roundedRect(leftCardX, curSec5Y, verdictCardW, verdictCardH, 0.8, 0.8, 'FD');

    // Header tarjeta Culpable
    doc.setFillColor(220, 38, 38);
    doc.roundedRect(leftCardX, curSec5Y, verdictCardW, 3.4, 0.8, 0.8, 'F');
    doc.rect(leftCardX, curSec5Y + 1.8, verdictCardW, 1.6, 'F');
    
    // Renderizado seguro de icono pericial (sin caracteres emoji directos en doc.text)
    const emAsesinoOk = renderizarEmoji(doc, '⚖️', leftCardX + 1.8, curSec5Y + 0.4, 2.6, 2.6);
    const titleAsesinoX = emAsesinoOk ? leftCardX + 5.0 : leftCardX + 2.2;
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    doc.text(t.pdfSec5MurdererVerdict, titleAsesinoX, curSec5Y + 2.4);

    let lLineY = curSec5Y + 5.8;
    const lSpacing = (verdictCardH - 4.4) / 3;

    doc.setTextColor(28, 25, 23);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.2);
    doc.text(t.pdfSec5WhoIsMurderer, leftCardX + 2.0, lLineY);
    const whoMW = doc.getTextWidth(t.pdfSec5WhoIsMurderer);
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.25);
    doc.line(leftCardX + 2.0 + whoMW + 1.5, lLineY, leftCardX + verdictCardW - 2.0, lLineY);

    lLineY += lSpacing;
    doc.setFont('helvetica', 'bold');
    doc.text(t.pdfSec5Cell, leftCardX + 2.0, lLineY);
    const cellLblW = doc.getTextWidth(t.pdfSec5Cell);
    doc.setFont('courier', 'bold');
    doc.text('F[_] C[_]', leftCardX + 2.0 + cellLblW + 1.2, lLineY);
    const coordW = doc.getTextWidth('F[_] C[_]');
    const roomLblX = leftCardX + 2.0 + cellLblW + 1.2 + coordW + 2.0;
    doc.setFont('helvetica', 'bold');
    doc.text(t.pdfSec5Room, roomLblX, lLineY);
    const roomLblW = doc.getTextWidth(t.pdfSec5Room);
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.25);
    doc.line(roomLblX + roomLblW + 1.5, lLineY, leftCardX + verdictCardW - 2.0, lLineY);

    lLineY += lSpacing;
    doc.setFont('helvetica', 'bold');
    doc.text(t.pdfSec5KeyClue, leftCardX + 2.0, lLineY);
    const keyClueW = doc.getTextWidth(t.pdfSec5KeyClue);
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.25);
    doc.line(leftCardX + 2.0 + keyClueW + 1.5, lLineY, leftCardX + verdictCardW - 2.0, lLineY);

    // Tarjeta 2: Dictamen de la Víctima
    const rightCardX = leftCardX + verdictCardW + 2.5;
    doc.setFillColor(254, 252, 232);
    doc.setDrawColor(217, 119, 6);
    doc.setLineWidth(0.35);
    doc.roundedRect(rightCardX, curSec5Y, verdictCardW, verdictCardH, 0.8, 0.8, 'FD');

    // Header tarjeta Víctima
    doc.setFillColor(217, 119, 6);
    doc.roundedRect(rightCardX, curSec5Y, verdictCardW, 3.4, 0.8, 0.8, 'F');
    doc.rect(rightCardX, curSec5Y + 1.8, verdictCardW, 1.6, 'F');
    
    // Renderizado seguro de icono pericial (sin caracteres emoji directos en doc.text)
    const emVictimaOk = renderizarEmoji(doc, '🛡️', rightCardX + 1.8, curSec5Y + 0.4, 2.6, 2.6);
    const titleVictimaX = emVictimaOk ? rightCardX + 5.0 : rightCardX + 2.2;
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    doc.text(t.pdfSec5VictimVerdict, titleVictimaX, curSec5Y + 2.4);

    let rLineY = curSec5Y + 5.8;
    const rSpacing = (verdictCardH - 4.4) / 3;

    doc.setTextColor(28, 25, 23);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.2);
    doc.text(t.pdfSec5WhoIsVictim, rightCardX + 2.0, rLineY);
    const whoVW = doc.getTextWidth(t.pdfSec5WhoIsVictim);
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.25);
    doc.line(rightCardX + 2.0 + whoVW + 1.5, rLineY, rightCardX + verdictCardW - 2.0, rLineY);

    rLineY += rSpacing;
    doc.setFont('helvetica', 'bold');
    doc.text(t.pdfSec5Cell, rightCardX + 2.0, rLineY);
    const vCellLblW = doc.getTextWidth(t.pdfSec5Cell);
    doc.setFont('courier', 'bold');
    doc.text('F[_] C[_]', rightCardX + 2.0 + vCellLblW + 1.2, rLineY);
    const vCoordW = doc.getTextWidth('F[_] C[_]');
    const vRoomLblX = rightCardX + 2.0 + vCellLblW + 1.2 + vCoordW + 2.0;
    doc.setFont('helvetica', 'bold');
    doc.text(t.pdfSec5Room, vRoomLblX, rLineY);
    const vRoomLblW = doc.getTextWidth(t.pdfSec5Room);
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.25);
    doc.line(vRoomLblX + vRoomLblW + 1.5, rLineY, rightCardX + verdictCardW - 2.0, rLineY);

    rLineY += rSpacing;
    doc.setFont('helvetica', 'bold');
    const condLbl = porIdioma(idioma, { es: 'CONDICIÓN FORENSE:', gl: 'CONDICIÓN FORENSE:', pt: 'CONDIÇÃO FORENSE:' });
    doc.text(condLbl, rightCardX + 2.0, rLineY);
    const condLblW = doc.getTextWidth(condLbl);
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.25);
    doc.line(rightCardX + 2.0 + condLblW + 1.5, rLineY, rightCardX + verdictCardW - 2.0, rLineY);

    // C) Franja Inferior de Evaluación Docente
    const rubricY = dictamenY + dictamenBoxH - footerH - 1.2;
    doc.setFillColor(241, 245, 249);
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.25);
    doc.roundedRect(colRightX + 3.0, rubricY, colRightWidth - 6.0, footerH, 0.5, 0.5, 'FD');

    let rubricFSize = 4.8;
    doc.setFont('courier', 'bold');
    doc.setFontSize(rubricFSize);
    doc.setTextColor(28, 25, 23);
    const rubricFullTxt = `${t.pdfSec5DetectiveSignature}: __________________   ${t.pdfSec5TeacherEvaluation}: [ _____ / 10 pts ]   ${t.pdfSec5TeacherApproval}: __________________`;
    while (doc.getTextWidth(rubricFullTxt) > colRightWidth - 8.0 && rubricFSize > 3.6) {
      rubricFSize -= 0.2;
      doc.setFontSize(rubricFSize);
    }
    doc.text(rubricFullTxt, colRightX + colRightWidth / 2, rubricY + footerH / 2 + 0.1, { align: 'center', baseline: 'middle' });
  }

  // 5. Pie de página de la Hoja de Trabajo (dentro del marco interior, que termina en y = 201)
  dibujarPie(doc, margin, contentWidth, t.pdfPage1FooterLeft, t.pdfPage1FooterRight);
}

/**
 * RENDERIZADO DE LA PÁGINA 2: EXPEDIENTE DE SOLUCIÓN Y GUÍA DEL DOCENTE
 */
function renderizarPaginaSolucion(doc: jsPDF, casoOrig: PuzzleCase, idioma: Language = 'es') {
  const caso = obtenerCasoTraducido(casoOrig, idioma);
  const t = TRANSLATIONS[idioma];

  doc.addPage('a4', 'landscape');

  const margin = 8;
  const contentWidth = 297 - margin * 2; // 281mm
  const contentHeight = 210 - margin * 2; // 194mm

  dibujarMarcoPagina(doc, margin, contentWidth, contentHeight);

  // 1. Cinta pericial roja de SOLUCIÓN OFICIAL
  const tapeY = margin + 1;
  const tapeH = 2.8;
  const tapeW = contentWidth - 2;
  dibujarCintaPericial(doc, margin + 1, tapeY, tapeW, tapeH, [185, 28, 28]); // rojo pericial confidencial

  // 2. Cabecera pericial de Solución
  const headerTop = margin + 4.5;
  const badgeX = margin + 3;
  const badgeY = headerTop;
  const badgeW = 10;
  const badgeH = 13.5;

  // Escudo dorado de Solución
  doc.setFillColor(198, 0, 126);
  doc.roundedRect(badgeX, badgeY, badgeW, badgeH, 1.2, 1.2, 'F');
  doc.setDrawColor(254, 240, 138);
  doc.setLineWidth(0.4);
  doc.roundedRect(badgeX + 0.7, badgeY + 0.7, badgeW - 1.4, badgeH - 1.4, 0.8, 0.8, 'S');
  doc.setTextColor(254, 240, 138);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.2);
  doc.text('SOL', badgeX + 2.0, badgeY + 5.2);
  doc.setFontSize(5.8);
  doc.text('DOC', badgeX + 2.0, badgeY + 9.2);

  // Ficha de control docente a la derecha
  const docenteBoxX = 166;
  const docenteBoxY = headerTop;
  const docenteBoxW = margin + contentWidth - 2 - docenteBoxX;
  const docenteBoxH = 15.5;

  doc.setFillColor(254, 252, 232);
  doc.setDrawColor(202, 138, 4);
  doc.setLineWidth(0.35);
  doc.roundedRect(docenteBoxX, docenteBoxY, docenteBoxW, docenteBoxH, 1, 1, 'FD');

  doc.setFillColor(41, 37, 36);
  doc.rect(docenteBoxX, docenteBoxY, docenteBoxW, 3.8, 'F');
  doc.setTextColor(254, 240, 138);
  doc.setFont('courier', 'bold');
  doc.setFontSize(6.2);
  doc.text(t.pdfTeacherGuide, docenteBoxX + 2.5, docenteBoxY + 2.7);

  doc.setTextColor(28, 25, 23);
  doc.setFont('courier', 'bold');
  doc.setFontSize(7.0);
  doc.text(porIdioma(idioma, { es: 'Estado:', gl: 'Estado:', pt: 'Estado:' }), docenteBoxX + 2.5, docenteBoxY + 7.8);
  doc.setTextColor(185, 28, 28);
  doc.text(porIdioma(idioma, { es: 'VERIFICADO 100% LÓGICAMENTE', gl: 'VERIFICADO 100% LÓXICAMENTE', pt: 'VERIFICADO 100% LOGICAMENTE' }), docenteBoxX + 16, docenteBoxY + 7.8);

  doc.setTextColor(28, 25, 23);
  const firmaLbl = porIdioma(idioma, { es: 'Firma docente:', gl: 'Sinatura docente:', pt: 'Assinatura do docente:' });
  doc.text(firmaLbl, docenteBoxX + 2.5, docenteBoxY + 12.8);
  doc.setDrawColor(120, 113, 108);
  doc.setLineWidth(0.25);
  doc.line(docenteBoxX + 2.5 + doc.getTextWidth(firmaLbl) + 1.5, docenteBoxY + 13.2, docenteBoxX + docenteBoxW - 3, docenteBoxY + 13.2);

  // Badges informativos de cabecera de solución
  let tagX = badgeX + 13;
  const tagY = headerTop;

  doc.setFillColor(185, 28, 28);
  doc.roundedRect(tagX, tagY, 28, 3.8, 0.6, 0.6, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('courier', 'bold');
  doc.setFontSize(6.2);
  doc.text(porIdioma(idioma, { es: 'SOLUCIÓN OFICIAL', gl: 'SOLUCIÓN OFICIAL', pt: 'SOLUÇÃO OFICIAL' }), tagX + 1.8, tagY + 2.7);
  tagX += 30;

  {
    const casoTxt = `CASO #${caso.id} · ${etiquetaTamano(caso)}`;
    doc.setFont('courier', 'bold');
    doc.setFontSize(6.0);
    const bw = doc.getTextWidth(casoTxt) + 4;
    doc.setFillColor(245, 245, 244);
    doc.setDrawColor(28, 25, 23);
    doc.setLineWidth(0.25);
    doc.roundedRect(tagX, tagY, bw, 3.8, 0.6, 0.6, 'FD');
    doc.setTextColor(28, 25, 23);
    doc.text(casoTxt, tagX + 2.0, tagY + 2.7);
    tagX += bw + 2;
  }

  const diffLabel = `NIVEL: ${(caso.difficulty || 'Normal').toUpperCase()}`;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.0);
  const diffW = doc.getTextWidth(diffLabel) + 4;
  doc.setFillColor(254, 243, 199);
  doc.setDrawColor(217, 119, 6);
  doc.setLineWidth(0.25);
  doc.roundedRect(tagX, tagY, diffW, 3.8, 0.6, 0.6, 'FD');
  doc.setTextColor(146, 64, 14);
  doc.text(diffLabel, tagX + 2.0, tagY + 2.7);
  tagX += diffW + 2;

  if (caso.fuenteHistorica && tagX < docenteBoxX - 25) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.0);
    const rawBib = ajustarTexto(doc, `Fuente: ${caso.fuenteHistorica}`, docenteBoxX - tagX - 8);
    const bibW = doc.getTextWidth(rawBib) + 4;
    doc.setFillColor(224, 242, 254);
    doc.setDrawColor(2, 132, 199);
    doc.setLineWidth(0.25);
    doc.roundedRect(tagX, tagY, bibW, 3.8, 0.6, 0.6, 'FD');
    doc.setTextColor(3, 105, 161);
    doc.text(rawBib, tagX + 2.0, tagY + 2.7);
  }

  // Título de la solución
  doc.setTextColor(28, 25, 23);
  doc.setFont('helvetica', 'bold');
  let titleSolFSize = 12.0;
  doc.setFontSize(titleSolFSize);
  const maxTitleW = docenteBoxX - (badgeX + 13) - 3;
  const tituloSol = `${porIdioma(idioma, { es: 'Resolución del caso', gl: 'Resolución do caso', pt: 'Resolução do caso' })}: ${nombreReto(caso)}`;
  while (doc.getTextWidth(tituloSol) > maxTitleW && titleSolFSize > 8.5) {
    titleSolFSize -= 0.5;
    doc.setFontSize(titleSolFSize);
  }
  let dispTituloSol = tituloSol;
  if (doc.getTextWidth(dispTituloSol) > maxTitleW) {
    while (dispTituloSol.length > 5 && doc.getTextWidth(dispTituloSol + '…') > maxTitleW) {
      dispTituloSol = dispTituloSol.slice(0, -1);
    }
    dispTituloSol += '…';
  }
  doc.text(dispTituloSol, badgeX + 13, headerTop + 8.8);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.2);
  doc.setTextColor(110, 105, 100);
  doc.text(porIdioma(idioma, { es: 'Guía pericial didáctica de comprobación y deducción paso a paso', gl: 'Guía pericial didáctica de comprobación e dedución paso a paso', pt: 'Guia pericial didático de verificação e dedução passo a passo' }), badgeX + 13, headerTop + 13.0);

  // Línea divisoria
  const divisorY = headerTop + 17.0;
  doc.setDrawColor(28, 25, 23);
  doc.setLineWidth(0.5);
  doc.line(margin + 2, divisorY, margin + contentWidth - 2, divisorY);

  // =========================================================================
  // 3. COLUMNA IZQUIERDA: TABLERO RESUELTO Y TABLA DE ASIGNACIONES
  // =========================================================================
  const colLeftX = margin + 2; // 10mm
  const colLeftWidth = 134;
  let boardSolY = divisorY + 3.0;

  // Título del Tablero Resuelto
  doc.setFillColor(41, 37, 36);
  doc.roundedRect(colLeftX, boardSolY - 2.0, colLeftWidth, 4.4, 0.6, 0.6, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.2);
  doc.text(porIdioma(idioma, { es: '1. PLANO FORENSE RESUELTO: POSICIONES EXACTAS', gl: '1. PLANO FORENSE RESOLTO: POSICIÓNS EXACTAS', pt: '1. PLANTA FORENSE RESOLVIDA: POSIÇÕES EXATAS' }), colLeftX + 2.5, boardSolY + 1.1);

  doc.setFillColor(234, 179, 8);
  doc.roundedRect(colLeftX + colLeftWidth - 36, boardSolY - 1.4, 34, 3.2, 0.5, 0.5, 'F');
  doc.setTextColor(28, 25, 23);
  doc.setFont('courier', 'bold');
  doc.setFontSize(5.6);
  doc.text(porIdioma(idioma, { es: 'SOLUCIÓN ÚNICA', gl: 'SOLUCIÓN ÚNICA', pt: 'SOLUÇÃO ÚNICA' }), colLeftX + colLeftWidth - 31, boardSolY + 0.9);

  boardSolY += 4.0;
  const gridSize = caso.gridSize || 5;

  // Tamaño óptimo de celda estandarizado
  let cellSize = 13.5; // Para 5x5: 67.5mm
  if (gridSize >= 9) {
    cellSize = 7.6; // Para 9x9: 68.4mm
  } else if (gridSize >= 8) {
    cellSize = 8.5; // Para 8x8: 68.0mm
  } else if (gridSize >= 7) {
    cellSize = 9.8; // Para 7x7: 68.6mm
  } else if (gridSize >= 6) {
    cellSize = 11.4; // Para 6x6: 68.4mm
  }

  const coordHeaderSize = 4.5;
  const boardGridW = gridSize * cellSize;
  const totalBoardW = boardGridW + coordHeaderSize;
  const boardStartX = colLeftX + Math.max(0, (colLeftWidth - totalBoardW) / 2);
  const boardStartY = boardSolY;

  // Cabeceras de coordenadas superiores y laterales
  doc.setFillColor(245, 245, 244);
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.2);
  doc.rect(boardStartX, boardStartY, coordHeaderSize, coordHeaderSize, 'FD');
  doc.setTextColor(120, 113, 108);
  doc.setFont('courier', 'bold');
  doc.setFontSize(5.0);
  doc.text('F\\C', boardStartX + coordHeaderSize / 2, boardStartY + coordHeaderSize / 2 + 0.2, { align: 'center', baseline: 'middle' });

  for (let c = 0; c < gridSize; c++) {
    const colX = boardStartX + coordHeaderSize + c * cellSize;
    doc.setFillColor(245, 245, 244);
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.rect(colX, boardStartY, cellSize, coordHeaderSize, 'FD');
    doc.setTextColor(41, 37, 36);
    doc.setFont('courier', 'bold');
    doc.setFontSize(5.8);
    doc.text(`C${c + 1}`, colX + cellSize / 2, boardStartY + coordHeaderSize / 2 + 0.2, { align: 'center', baseline: 'middle' });
  }

  for (let r = 0; r < gridSize; r++) {
    const rowY = boardStartY + coordHeaderSize + r * cellSize;
    doc.setFillColor(245, 245, 244);
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.rect(boardStartX, rowY, coordHeaderSize, cellSize, 'FD');
    doc.setTextColor(41, 37, 36);
    doc.setFont('courier', 'bold');
    doc.setFontSize(5.8);
    doc.text(`F${r + 1}`, boardStartX + coordHeaderSize / 2, rowY + cellSize / 2 + 0.2, { align: 'center', baseline: 'middle' });
  }

  // Cuadrícula con sospechosos ubicados
  const etiquetasSol = celdasEtiquetaEstancia(caso);
  const gridOriginX = boardStartX + coordHeaderSize;
  const gridOriginY = boardStartY + coordHeaderSize;

  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      const cellX = gridOriginX + c * cellSize;
      const cellY = gridOriginY + r * cellSize;
      const roomId = caso.cellRooms?.[r]?.[c] || 'desconocido';
      const room = caso.rooms?.[roomId];
      const [red, green, blue] = resolverColorEstancia(room, roomId, true);

      doc.setFillColor(red, green, blue);
      doc.rect(cellX, cellY, cellSize, cellSize, 'F');

      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.18);
      doc.rect(cellX, cellY, cellSize, cellSize, 'S');

      // Bordes gruesos entre estancias distintas
      const currentRoom = caso.cellRooms?.[r]?.[c];
      const topDiff = r === 0 || caso.cellRooms?.[r - 1]?.[c] !== currentRoom;
      const bottomDiff = r === gridSize - 1 || caso.cellRooms?.[r + 1]?.[c] !== currentRoom;
      const leftDiff = c === 0 || caso.cellRooms?.[r]?.[c - 1] !== currentRoom;
      const rightDiff = c === gridSize - 1 || caso.cellRooms?.[r]?.[c + 1] !== currentRoom;

      doc.setDrawColor(28, 25, 23);
      doc.setLineWidth(0.75);
      if (topDiff) doc.line(cellX, cellY, cellX + cellSize, cellY);
      if (bottomDiff) doc.line(cellX, cellY + cellSize, cellX + cellSize, cellY + cellSize);
      if (leftDiff) doc.line(cellX, cellY, cellX, cellY + cellSize);
      if (rightDiff) doc.line(cellX + cellSize, cellY, cellX + cellSize, cellY + cellSize);

      // Comprobar si hay ocupante en la solución
      const occupant = getOccupantAtCell(caso, r, c);
      const blockedKey = `${r},${c}`;
      const blockedObj = caso.blockedObjects?.[blockedKey];

      if (occupant) {
        const isVictim = esVictima(caso, occupant);
        const isMurderer = !isVictim && esCulpable(caso, occupant);
        const colorFuerte: [number, number, number] = isVictim ? [185, 28, 28] : isMurderer ? [180, 83, 9] : [30, 41, 59];

        // Tarjeta del personaje ocupante
        const cardMargin = cellSize >= 9 ? 0.7 : 0.45;
        const cardW = cellSize - cardMargin * 2;
        const cardH = cardW;
        const cardX = cellX + cardMargin;
        const cardY = cellY + cardMargin;
        const centerX = cardX + cardW / 2;
        if (isVictim) doc.setFillColor(254, 242, 242);
        else if (isMurderer) doc.setFillColor(254, 243, 199);
        else doc.setFillColor(255, 255, 255);
        doc.setDrawColor(...colorFuerte);
        doc.setLineWidth(isVictim || isMurderer ? 0.45 : 0.3);
        doc.roundedRect(cardX, cardY, cardW, cardH, 0.6, 0.6, 'FD');

        if (cellSize >= 9) {
          // 5x5 y 7x7: insignia de estado + círculo con la letra + nombre
          const badgeText = isVictim ? (porIdioma(idioma, { es: 'VÍCTIMA', gl: 'VÍTIMA', pt: 'VÍTIMA' })) : isMurderer ? 'CULPABLE' : 'INOCENTE';
          doc.setFont('helvetica', 'bold');
          const badgeFSize = cellSize >= 12 ? 3.6 : 3.0;
          doc.setFontSize(badgeFSize);
          const badgeW = Math.min(cardW - 1.0, doc.getTextWidth(badgeText) + 1.4);
          const badgeH = cellSize >= 12 ? 2.2 : 1.9;
          const badgeX = centerX - badgeW / 2;
          const badgeY = cardY + 0.6;
          if (isVictim || isMurderer) {
            doc.setFillColor(...colorFuerte);
            doc.roundedRect(badgeX, badgeY, badgeW, badgeH, 0.3, 0.3, 'F');
            doc.setTextColor(255, 255, 255);
          } else {
            doc.setFillColor(241, 245, 249);
            doc.setDrawColor(203, 213, 225);
            doc.setLineWidth(0.2);
            doc.roundedRect(badgeX, badgeY, badgeW, badgeH, 0.3, 0.3, 'FD');
            doc.setTextColor(71, 85, 105);
          }
          doc.text(badgeText, centerX, badgeY + badgeH / 2 + 0.1, { align: 'center', baseline: 'middle' });

          const nameFSize = cellSize >= 12 ? 4.6 : 3.4;
          const nameY = cardY + cardH - 1.0;
          const circleTop = badgeY + badgeH + 0.5;
          const circleBottom = nameY - nameFSize * PT_MM - 0.3;
          const badgeR = Math.min(2.5, (circleBottom - circleTop) / 2);
          const circleY = (circleTop + circleBottom) / 2;
          doc.setFillColor(...colorFuerte);
          doc.circle(centerX, circleY, badgeR, 'F');
          doc.setTextColor(255, 255, 255);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(occupant.id.length > 1 ? badgeR * 2.0 : badgeR * 2.6);
          doc.text(occupant.id, centerX, circleY + 0.1, { align: 'center', baseline: 'middle' });

          doc.setTextColor(28, 25, 23);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(nameFSize);
          doc.text(ajustarTexto(doc, occupant.name, cardW - 1.0), centerX, nameY, { align: 'center' });
        } else {
          // 9x9: solo el círculo con la letra (el color indica víctima / culpable; detalles en la tabla)
          const badgeR = cardW * 0.36;
          const circleY = cardY + cardH / 2;
          doc.setFillColor(...colorFuerte);
          doc.circle(centerX, circleY, badgeR, 'F');
          doc.setTextColor(255, 255, 255);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(occupant.id.length > 1 ? 5.0 : 6.4);
          doc.text(occupant.id, centerX, circleY + 0.1, { align: 'center', baseline: 'middle' });
        }
      } else if (blockedObj) {
        dibujarEvidenciaEnCelda(doc, blockedObj, cellX, cellY, cellSize);
      } else {
        const tramo = etiquetasSol.get(blockedKey);
        if (tramo) dibujarEtiquetaEstancia(doc, room, roomId, cellX, cellY, tramo * cellSize, gridSize);
        doc.setFillColor(200, 195, 190);
        doc.circle(cellX + cellSize / 2, cellY + cellSize / 2, 0.5, 'F');
      }
    }
  }

  // Leyenda de colores del tablero resuelto (a la izquierda del plano)
  {
    const items: [string, [number, number, number]][] = [
      [porIdioma(idioma, { es: 'Víctima', gl: 'Vítima', pt: 'Vítima' }), [185, 28, 28]],
      [porIdioma(idioma, { es: 'Culpable', gl: 'Culpable', pt: 'Culpado' }), [180, 83, 9]],
      ['Inocente', [30, 41, 59]]
    ];
    let ly = boardStartY + 8.0;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.4);
    items.forEach(([txt, col]) => {
      doc.setFillColor(...col);
      doc.circle(colLeftX + 5.0, ly - 0.7, 1.3, 'F');
      doc.setTextColor(41, 37, 36);
      doc.text(txt, colLeftX + 7.5, ly);
      ly += 4.2;
    });
  }

  // 3.2 Tabla de Asignaciones Exactas (Coordenadas y Estancias)
  const postBoardSolY = gridOriginY + boardGridW + 2.5;
  const tableH = 196 - postBoardSolY;

  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(41, 37, 36);
  doc.setLineWidth(0.35);
  doc.roundedRect(colLeftX, postBoardSolY, colLeftWidth, tableH, 1.0, 1.0, 'FD');

  // Barra de cabecera de la tabla
  doc.setFillColor(41, 37, 36);
  doc.roundedRect(colLeftX, postBoardSolY, colLeftWidth, 4.4, 1.0, 1.0, 'F');
  doc.rect(colLeftX, postBoardSolY + 2.0, colLeftWidth, 2.4, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.2);
  doc.text(porIdioma(idioma, { es: '2. TABLA OFICIAL DE ASIGNACIONES (COORDENADAS Y ESTANCIAS)', gl: '2. TÁBOA OFICIAL DE ASIGNACIÓNS (COORDENADAS E ESTANCIAS)', pt: '2. TABELA OFICIAL DE ATRIBUIÇÕES (COORDENADAS E DIVISÕES)' }), colLeftX + 2.5, postBoardSolY + 3.1);

  // Fila de encabezados de columnas
  const tableHeaderY = postBoardSolY + 4.4;
  const tableHeaderH = 4.0;
  doc.setFillColor(241, 245, 249);
  doc.rect(colLeftX + 0.5, tableHeaderY, colLeftWidth - 1, tableHeaderH, 'F');
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.2);
  doc.line(colLeftX, tableHeaderY + tableHeaderH, colLeftX + colLeftWidth, tableHeaderY + tableHeaderH);

  doc.setFont('courier', 'bold');
  doc.setFontSize(5.2);
  doc.setTextColor(71, 85, 105);
  doc.text('ID', colLeftX + 5.5, tableHeaderY + 2.7, { align: 'center' });
  doc.text(porIdioma(idioma, { es: 'PERSONAJE Y ROL FORENSE', gl: 'PERSONAXE E ROL FORENSE', pt: 'PERSONAGEM E PAPEL FORENSE' }), colLeftX + 14.5, tableHeaderY + 2.7);
  doc.text('COORD.', colLeftX + 67.5, tableHeaderY + 2.7, { align: 'center' });
  doc.text(porIdioma(idioma, { es: 'ESTANCIA ASIGNADA', gl: 'ESTANCIA ASIGNADA', pt: 'DIVISÃO ATRIBUÍDA' }), colLeftX + 80.0, tableHeaderY + 2.7);
  doc.text(porIdioma(idioma, { es: 'VEREDICTO', gl: 'VEREDICTO', pt: 'VEREDICTO' }), colLeftX + 123.0, tableHeaderY + 2.7, { align: 'center' });

  // Filas de la tabla
  const suspects = caso.suspects || [];
  const numSuspects = suspects.length;
  const availableRowsH = tableH - 4.4 - tableHeaderH - 8.5; // reserva espacio para el pie pericial
  const rowHeight = Math.min(8.6, Math.max(5.8, availableRowsH / Math.max(numSuspects, 1)));
  let curRowY = tableHeaderY + tableHeaderH;

  suspects.forEach((s, idx) => {
    if (curRowY + rowHeight > postBoardSolY + tableH - 7) return;

    const coord = getCoordForSuspect(caso, s);
    const roomId = coord ? caso.cellRooms?.[coord.row]?.[coord.col] : null;
    const room = roomId ? caso.rooms?.[roomId] : null;
    const isVictim = esVictima(caso, s);
    const isMurderer = !isVictim && esCulpable(caso, s);

    // Fondo alternado
    if (idx % 2 === 0) {
      doc.setFillColor(248, 250, 252);
      doc.rect(colLeftX + 0.5, curRowY, colLeftWidth - 1, rowHeight, 'F');
    }

    const rowMidY = curRowY + rowHeight / 2;

    // Badge con letra
    doc.setFillColor(isVictim ? 185 : isMurderer ? 180 : 30, isVictim ? 28 : isMurderer ? 83 : 41, isVictim ? 28 : isMurderer ? 9 : 59);
    doc.roundedRect(colLeftX + 3.0, rowMidY - 2.1, 5.0, 4.2, 0.6, 0.6, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.text(s.id, colLeftX + 5.5, rowMidY + 0.1, { align: 'center', baseline: 'middle' });

    // Avatar emoji
    const hasAvatar = renderizarEmoji(doc, s.avatar, colLeftX + 9.0, rowMidY - 2.0, 4.0, 4.0);
    const nameX = hasAvatar ? colLeftX + 14.5 : colLeftX + 10.0;
    const maxNameW = colLeftX + 58.0 - nameX; // sin invadir la columna de coordenadas

    // Nombre y Rol (con splitTextToSize para proteger espacios)
    doc.setTextColor(28, 25, 23);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.0);
    doc.text(ajustarTexto(doc, s.name, maxNameW), nameX, rowMidY - 0.7);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.0);
    doc.setTextColor(100, 116, 139);
    const roleTexto = s.role || (isVictim ? (porIdioma(idioma, { es: 'Víctima', gl: 'Vítima', pt: 'Vítima' })) : (porIdioma(idioma, { es: 'Sospechoso', gl: 'Sospeitoso', pt: 'Suspeito' })));
    doc.text(ajustarTexto(doc, roleTexto, maxNameW), nameX, rowMidY + 2.2);

    // Coordenada
    doc.setFillColor(241, 245, 249);
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.2);
    doc.roundedRect(colLeftX + 59.5, rowMidY - 2.0, 16.0, 4.0, 0.5, 0.5, 'FD');
    doc.setFont('courier', 'bold');
    doc.setFontSize(6.0);
    doc.setTextColor(28, 25, 23);
    const coordStr = coord ? `F${coord.row + 1}, C${coord.col + 1}` : 'N/D';
    doc.text(coordStr, colLeftX + 67.5, rowMidY + 0.1, { align: 'center', baseline: 'middle' });

    // Estancia (con muestra de color y ajuste fino para no invadir veredicto)
    const [red, green, blue] = resolverColorEstancia(room, roomId || undefined);
    doc.setFillColor(red, green, blue);
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.2);
    doc.rect(colLeftX + 78.5, rowMidY - 1.8, 3.6, 3.6, 'FD');

    const roomName = room?.name || room?.shortName || roomId || (porIdioma(idioma, { es: 'Sin estancia', gl: 'Sen estancia', pt: 'Sem divisão' }));
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    let wrappedRoom: string[] = doc.splitTextToSize(roomName, 30.0);
    if (wrappedRoom.length > 1) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(4.8);
      wrappedRoom = lineasAjustadas(doc, roomName, 30.0, 2);
      doc.setTextColor(41, 37, 36);
      if (wrappedRoom.length > 1) {
        doc.text(wrappedRoom[0], colLeftX + 83.5, rowMidY - 0.6);
        doc.text(wrappedRoom[1], colLeftX + 83.5, rowMidY + 2.2);
      } else {
        doc.text(wrappedRoom[0], colLeftX + 83.5, rowMidY + 0.8);
      }
    } else {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(5.8);
      doc.setTextColor(41, 37, 36);
      doc.text(wrappedRoom[0] || roomName, colLeftX + 83.5, rowMidY + 0.8);
    }

    // Veredicto (Pill destacado)
    const verdText = isVictim ? (porIdioma(idioma, { es: 'VÍCTIMA', gl: 'VÍTIMA', pt: 'VÍTIMA' })) : isMurderer ? (porIdioma(idioma, { es: 'CULPABLE', gl: 'CULPABLE', pt: 'CULPADO' })) : (porIdioma(idioma, { es: 'INOCENTE', gl: 'INOCENTE', pt: 'INOCENTE' }));
    const verdW = 18.0;
    const verdH = 4.2;
    const verdX = colLeftX + 114.0;
    const verdY = rowMidY - 2.1;

    if (isVictim) {
      doc.setFillColor(254, 226, 226);
      doc.setDrawColor(220, 38, 38);
      doc.setLineWidth(0.3);
      doc.roundedRect(verdX, verdY, verdW, verdH, 0.6, 0.6, 'FD');
      doc.setTextColor(185, 28, 28);
    } else if (isMurderer) {
      doc.setFillColor(254, 243, 199);
      doc.setDrawColor(217, 119, 6);
      doc.setLineWidth(0.3);
      doc.roundedRect(verdX, verdY, verdW, verdH, 0.6, 0.6, 'FD');
      doc.setTextColor(180, 83, 9);
    } else {
      doc.setFillColor(241, 245, 249);
      doc.setDrawColor(148, 163, 184);
      doc.setLineWidth(0.2);
      doc.roundedRect(verdX, verdY, verdW, verdH, 0.6, 0.6, 'FD');
      doc.setTextColor(71, 85, 105);
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.4);
    doc.text(verdText, verdX + verdW / 2, rowMidY + 0.1, { align: 'center', baseline: 'middle' });

    curRowY += rowHeight;
  });

  // Pie de la tabla con Dictamen Conclusivo Oficial
  const footBoxY = postBoardSolY + tableH - 6.8;
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.2);
  doc.line(colLeftX, footBoxY - 0.5, colLeftX + colLeftWidth, footBoxY - 0.5);

  const culpableObj = caso.suspects.find((s) => s.id === caso.murdererId) || caso.suspects.find((s) => s.isMurderer);
  const victimaObj = caso.suspects.find((s) => esVictima(caso, s));
  let dictFSize = 5.4;
  doc.setFont('courier', 'bold');
  doc.setFontSize(dictFSize);
  doc.setTextColor(28, 25, 23);
  const dictamenResumen = porIdioma(idioma, { es: `DICTAMEN: Culpable = [${culpableObj ? culpableObj.name : caso.murdererId}] | Víctima = [${victimaObj ? victimaObj.name : caso.victimId}]`, gl: `DICTAME: Culpable = [${culpableObj ? culpableObj.name : caso.murdererId}] | Vítima = [${victimaObj ? victimaObj.name : caso.victimId}]`, pt: `PARECER: Culpado = [${culpableObj ? culpableObj.name : caso.murdererId}] | Vítima = [${victimaObj ? victimaObj.name : caso.victimId}]` });
  const maxFootW = colLeftWidth - 6.0;
  while (doc.getTextWidth(dictamenResumen) > maxFootW && dictFSize > 4.0) {
    dictFSize -= 0.2;
    doc.setFontSize(dictFSize);
  }
  const splitDictamen = doc.splitTextToSize(dictamenResumen, maxFootW);
  doc.text(splitDictamen[0] || dictamenResumen, colLeftX + 3.0, footBoxY + 3.4);

  // =========================================================================
  // 4. COLUMNA DERECHA: EXPLICACIÓN LÓGICA, EPÍLOGO Y GUÍA PEDAGÓGICA
  // =========================================================================
  const colRightX = margin + colLeftWidth + 5; // 147mm
  const colRightWidth = margin + contentWidth - 2 - colRightX; // ~138mm

  // Las tres cajas de la derecha se dimensionan según su contenido real (antes tenían alturas
  // fijas y cortaban los textos a 3 líneas sin avisar, dejando huecos vacíos).
  const anchoTexto = colRightWidth - 6;
  const topDerecha = divisorY + 1.0;
  const finDerecha = 196.0;
  const gapCajas = 2.0;
  const cabeceraH = 4.4;

  // Datos específicos del caso para la clave del culpable
  const posVictima = caso.solution?.[caso.victimId];
  const salaVictimaId = posVictima ? caso.cellRooms?.[posVictima.row]?.[posVictima.col] : undefined;
  const salaVictima = salaVictimaId ? caso.rooms?.[salaVictimaId]?.name || salaVictimaId : '';
  const nombreVictima = caso.suspects.find((s) => esVictima(caso, s))?.name || caso.victimId;
  const nombreCulpable = (caso.suspects.find((s) => s.id === caso.murdererId) || caso.suspects.find((s) => s.isMurderer))?.name || caso.murdererId;
  const claveCulpable = porIdioma(idioma, { es: `En «${salaVictima}» solo coinciden ${nombreVictima} (víctima) y ${nombreCulpable}. Por la regla del caso, ${nombreCulpable} es el culpable.`, gl: `En «${salaVictima}» só coinciden ${nombreVictima} (vítima) e ${nombreCulpable}. Pola regra do caso, ${nombreCulpable} é o culpable.`, pt: `Em «${salaVictima}» só coincidem ${nombreVictima} (vítima) e ${nombreCulpable}. Pela regra do caso, ${nombreCulpable} é o culpado.` });
  const pasos = porIdioma(idioma, { es: [
    '1. Situar a cada personaje en su estancia con la pista «Está en…».',
    '2. Aplicar las pistas de fila, columna, vecindad y orientación para fijar la casilla exacta.',
    '3. Regla Sudoku: una persona por fila y por columna; descartar las casillas con objeto.',
    '4. Regla del culpable: buscar a la única persona que está a solas con la víctima en su estancia.'
  ], gl: [
    '1. Situar cada personaxe na súa estancia coa pista «Está en…».',
    '2. Aplicar as pistas de fila, columna, veciñanza e orientación para fixar a casa exacta.',
    '3. Regra Sudoku: unha persoa por fila e por columna; descartar as casas con obxecto.',
    '4. Regra do culpable: buscar a única persoa que está a soas coa vítima na súa estancia.'
  ], pt: [
    '1. Situar cada personagem na sua divisão com a pista «Está em…».',
    '2. Aplicar as pistas de linha, coluna, vizinhança e orientação para fixar a casa exata.',
    '3. Regra Sudoku: uma pessoa por linha e por coluna; descartar as casas com objeto.',
    '4. Regra do culpado: procurar a única pessoa que está a sós com a vítima na sua divisão.'
  ] });
  const preguntasDebate = porIdioma(idioma, { es: [
    { cat: '• Lógica y deducción:', txt: '¿Cuál fue la pista decisiva que permitió descartar a la mayoría de los sospechosos?' },
    { cat: '• Historia y contexto:', txt: '¿Qué motivó la conducta de los personajes según las fuentes históricas?' },
    { cat: '• Valores y fe:', txt: '¿Qué lección de valentía, lealtad o integridad nos deja este relato?' }
  ], gl: [
    { cat: '• Lóxica e dedución:', txt: 'Cal foi a pista decisiva que permitiu descartar á maioría dos sospeitosos?' },
    { cat: '• Historia e contexto:', txt: 'Que motivou a conduta dos personaxes segundo as fontes históricas?' },
    { cat: '• Valores e fe:', txt: 'Que lección de valentía, lealdade ou integridade nos deixa este relato?' }
  ], pt: [
    { cat: '• Lógica e dedução:', txt: 'Qual foi a pista decisiva que permitiu excluir a maioria dos suspeitos?' },
    { cat: '• História e contexto:', txt: 'O que motivou a conduta das personagens segundo as fontes históricas?' },
    { cat: '• Valores e fé:', txt: 'Que lição de coragem, lealdade ou integridade nos deixa este relato?' }
  ] });

  type Parrafo = { titulo?: string; texto: string; estilo: 'normal' | 'italic' | 'cita' | 'paso' | 'clave'; color: [number, number, number] };
  const caja3: Parrafo[] = [];
  if (caso.solucionExplicacion) caja3.push({ titulo: t.pdfPage2Sec3ResolutionTitle, texto: caso.solucionExplicacion, estilo: 'normal', color: [28, 25, 23] });
  if (salaVictima) caja3.push({ titulo: porIdioma(idioma, { es: 'Clave del culpable:', gl: 'Clave do culpable:', pt: 'Chave do culpado:' }), texto: claveCulpable, estilo: 'clave', color: [153, 27, 27] });
  pasos.forEach((p, i) => caja3.push({ titulo: i === 0 ? t.pdfPage2Sec3MethodSteps : undefined, texto: p, estilo: 'paso', color: [55, 65, 81] }));
  const caja4: Parrafo[] = [];
  if (caso.epilogue) caja4.push({ titulo: t.pdfPage2Sec4Relato, texto: `"${caso.epilogue}"`, estilo: 'italic', color: [68, 64, 60] });
  if (caso.textoClave) caja4.push({ titulo: t.pdfPage2Sec4Passage, texto: `«${caso.textoClave}» (${caso.fuenteHistorica || 'Historia marista'})`, estilo: 'cita', color: [120, 53, 15] });
  if (caso.contextoHistorico) caja4.push({ titulo: t.pdfPage2Sec4Theology, texto: caso.contextoHistorico, estilo: 'normal', color: [41, 37, 36] });

  const fuentePara = (p: Parrafo, fs: number) => {
    if (p.estilo === 'cita') doc.setFont('times', 'bolditalic');
    else if (p.estilo === 'italic') doc.setFont('helvetica', 'italic');
    else if (p.estilo === 'clave') doc.setFont('helvetica', 'bold');
    else doc.setFont('helvetica', 'normal');
    doc.setFontSize(p.estilo === 'cita' ? fs + 0.4 : fs);
  };
  const altoCaja = (pars: Parrafo[], fs: number) => {
    let h = cabeceraH + 2.0;
    for (const p of pars) {
      if (p.titulo) h += fs * PT_MM * 1.25 + 0.4;
      fuentePara(p, fs);
      h += (doc.splitTextToSize(p.texto, anchoTexto - (p.estilo === 'paso' ? 2 : 0)) as string[]).length * fs * PT_MM * 1.2 + 1.0;
    }
    return h + 1.0;
  };
  const altoDebateMin = cabeceraH + 2.0 + preguntasDebate.length * 6.2 + 8.0;
  const disponible = finDerecha - topDerecha - 2 * gapCajas;
  let fsDer = 6.0;
  while (fsDer > 4.6 && altoCaja(caja3, fsDer) + altoCaja(caja4, fsDer) + altoDebateMin > disponible) fsDer -= 0.2;
  let h3 = altoCaja(caja3, fsDer);
  let h4 = altoCaja(caja4, fsDer);
  // Si aun así no cabe, se limita el contexto histórico (último párrafo) con «…»
  const exceso = h3 + h4 + altoDebateMin - disponible;
  let maxLineasUltimo = Infinity;
  if (exceso > 0 && caja4.length) {
    const ult = caja4[caja4.length - 1];
    fuentePara(ult, fsDer);
    const lin = (doc.splitTextToSize(ult.texto, anchoTexto) as string[]).length;
    const quitar = Math.ceil(exceso / (fsDer * PT_MM * 1.2));
    maxLineasUltimo = Math.max(2, lin - quitar);
    h4 -= (lin - maxLineasUltimo) * fsDer * PT_MM * 1.2;
  }

  const dibujarCaja = (yCaja: number, hCaja: number, titulo: string, fondo: [number, number, number], borde: [number, number, number]) => {
    doc.setFillColor(...fondo);
    doc.setDrawColor(...borde);
    doc.setLineWidth(0.35);
    doc.roundedRect(colRightX, yCaja, colRightWidth, hCaja, 1.0, 1.0, 'FD');
    doc.setFillColor(41, 37, 36);
    doc.roundedRect(colRightX, yCaja, colRightWidth, cabeceraH, 1.0, 1.0, 'F');
    doc.rect(colRightX, yCaja + 2.0, colRightWidth, 2.4, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.2);
    doc.text(titulo, colRightX + 2.5, yCaja + 3.1);
  };
  const escribirParrafos = (pars: Parrafo[], yIni: number) => {
    let yy = yIni;
    pars.forEach((p, idx) => {
      if (p.titulo) {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(fsDer);
        doc.setTextColor(120, 53, 15);
        doc.text(p.titulo, colRightX + 3.0, yy + fsDer * PT_MM);
        yy += fsDer * PT_MM * 1.25 + 0.4;
      }
      fuentePara(p, fsDer);
      doc.setTextColor(...p.color);
      const sangria = p.estilo === 'paso' ? 2 : 0;
      const esUltimo = pars === caja4 && idx === pars.length - 1;
      const lineas = esUltimo && maxLineasUltimo !== Infinity
        ? lineasAjustadas(doc, p.texto, anchoTexto, maxLineasUltimo)
        : (doc.splitTextToSize(p.texto, anchoTexto - sangria) as string[]);
      const lh = fsDer * PT_MM * 1.2;
      lineas.forEach((l, i) => doc.text(l, colRightX + 3.0 + sangria, yy + fsDer * PT_MM + i * lh));
      yy += lineas.length * lh + 1.0;
    });
    return yy;
  };

  // Caja 3: cadena de deducción
  const logicaBoxY = topDerecha;
  dibujarCaja(logicaBoxY, h3, t.pdfPage2Sec3Title, [255, 255, 255], [41, 37, 36]);
  escribirParrafos(caja3, logicaBoxY + cabeceraH + 2.0);

  // Caja 4: epílogo y contexto
  const epilogoBoxY = logicaBoxY + h3 + gapCajas;
  dibujarCaja(epilogoBoxY, h4, t.pdfPage2Sec4Title, [254, 252, 232], [202, 138, 4]);
  escribirParrafos(caja4, epilogoBoxY + cabeceraH + 2.0);

  // Caja 5: preguntas de debate (ocupa el resto) con líneas para responder
  const debateBoxY = epilogoBoxY + h4 + gapCajas;
  const debateBoxH = finDerecha - debateBoxY;
  dibujarCaja(debateBoxY, debateBoxH, t.pdfPage2Sec5Title, [250, 250, 249], [41, 37, 36]);

  const rubricH = 5.2;
  const rubricY = debateBoxY + debateBoxH - rubricH - 1.6;
  doc.setFillColor(241, 245, 249);
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.25);
  doc.roundedRect(colRightX + 2.5, rubricY, colRightWidth - 5.0, rubricH, 0.6, 0.6, 'FD');
  doc.setFont('courier', 'bold');
  let fsRub = 4.9;
  doc.setFontSize(fsRub);
  while (doc.getTextWidth(t.pdfPage2Sec5Rubric) > colRightWidth - 8 && fsRub > 3.8) { fsRub -= 0.1; doc.setFontSize(fsRub); }
  doc.setTextColor(153, 27, 27);
  doc.text(t.pdfPage2Sec5Rubric, colRightX + colRightWidth / 2, rubricY + rubricH / 2 + 0.1, { align: 'center', baseline: 'middle' });

  const zonaPreguntas = rubricY - 1.5 - (debateBoxY + cabeceraH + 1.5);
  const altoPregunta = zonaPreguntas / preguntasDebate.length;
  preguntasDebate.forEach((pr, i) => {
    let yy = debateBoxY + cabeceraH + 1.5 + i * altoPregunta + 2.6;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.6);
    doc.setTextColor(28, 25, 23);
    doc.text(pr.cat, colRightX + 3.0, yy);
    const catW = doc.getTextWidth(pr.cat) + 1.5; // medido con la fuente en negrita
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.4);
    doc.setTextColor(55, 65, 81);
    const txtLines = lineasAjustadas(doc, pr.txt, colRightWidth - 6.0 - catW, 2);
    txtLines.forEach((l, li) => doc.text(l, colRightX + 3.0 + catW, yy + li * 2.4));
    yy += txtLines.length * 2.4 + 1.6;
    // Líneas para la respuesta en el hueco que quede
    doc.setDrawColor(215, 215, 215);
    doc.setLineWidth(0.2);
    const finPregunta = debateBoxY + cabeceraH + 1.5 + (i + 1) * altoPregunta - 0.8;
    for (let ly = yy + 1.6; ly <= finPregunta; ly += 4.0) {
      doc.line(colRightX + 3.0, ly, colRightX + colRightWidth - 3.0, ly);
    }
  });

  // 5. Pie de página de la Solución
  dibujarPie(doc, margin, contentWidth, t.pdfPage2FooterLeft, t.pdfPage2FooterRight);
}

/**
 * Construye y devuelve el documento jsPDF A4 horizontal de 2 páginas
 */
export function construirDocumentoPDF(caso: PuzzleCase, idioma: Language = 'es'): jsPDF {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  });

  // Página 1: Reto
  renderizarPaginaReto(doc, caso, idioma);

  // Página 2: Solución Oficial y Guía del Profesor
  renderizarPaginaSolucion(doc, caso, idioma);

  return doc;
}

/**
 * Genera y descarga directamente un archivo PDF A4 horizontal de 2 páginas:
 * - Página 1: Cuaderno de Investigación y Reto (para el alumno / aula)
 * - Página 2: Expediente de Solución Oficial y Guía Didáctica (para el profesor / corrección)
 */
export function generarYDescargarPDF(caso: PuzzleCase, idioma: Language = 'es'): string {
  const doc = construirDocumentoPDF(caso, idioma);

  // Nombre de archivo limpio
  const safeTitle = nombreReto(obtenerCasoTraducido(caso, idioma))
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
  const langSuffix = porIdioma(idioma, { es: '_ES', gl: '_GL', pt: '_PT' });
  const fileName = porIdioma(idioma, { es: `Murdoku_${caso.id || 'Reto'}_${safeTitle}_Reto_y_Solucion${langSuffix}.pdf`, gl: `Murdoku_${caso.id || 'Reto'}_${safeTitle}_Reto_e_Solucion${langSuffix}.pdf`, pt: `Murdoku_${caso.id || 'Reto'}_${safeTitle}_Desafio_e_Solucao${langSuffix}.pdf` });

  // Guardar y descargar inmediatamente
  doc.save(fileName);

  return fileName;
}
