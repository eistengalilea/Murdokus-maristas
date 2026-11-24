import { PuzzleCase, RoomInfo } from '../types';
import { generarYDescargarPDF } from './generadorPdfDescarga';

export { generarYDescargarPDF };

/**
 * Función que retorna el color pastel exacto de las habitaciones en la app
 * asegurando fidelidad cromática plana en la impresión del navegador.
 */
export function getPrintRoomBg(room: RoomInfo | undefined, roomId: string): string {
  if (room?.bgColor && (room.bgColor.startsWith('#') || room.bgColor.startsWith('rgb'))) {
    return room.bgColor;
  }
  const id = (roomId || room?.id || '').toLowerCase();
  if (id.includes('jardin') || id.includes('rosaleda') || id.includes('invernadero')) return '#a9dfbf';
  if (id.includes('patio')) return '#76d7c4';
  if (id.includes('estanque') || id.includes('tribuna') || id.includes('heraldo') || id.includes('cielo')) return '#6bc2e8';
  if (id.includes('salon') || id.includes('galeria') || id.includes('banquete')) return '#fad7a0';
  if (id.includes('cocina') || id.includes('horno') || id.includes('fuego')) return '#f9e79f';
  if (id.includes('biblioteca') || id.includes('laboratorio') || id.includes('terraza') || id.includes('estrado') || id.includes('trono') || id.includes('palacio')) return '#d7bde2';
  if (id.includes('despacho') || id.includes('orquidario') || id.includes('rojo')) return '#fadbd8';
  if (id.includes('cobertizo') || id.includes('choza') || id.includes('archivo') || id.includes('caravana') || id.includes('oro') || id.includes('estatua')) return '#edbb99';
  if (id.includes('porche') || id.includes('sotano') || id.includes('tienda') || id.includes('valle') || id.includes('sepulcro')) return '#d4cee8';
  if (id.includes('lab') || id.includes('descontaminacion') || id.includes('almacen') || id.includes('guardia') || id.includes('acceso')) return '#e5e8e8';
  return '#f3f4f6';
}

/**
 * Función principal solicitada con bloque try...catch y clonación del DOM:
 * 1. Limpiar el contenedor previo (#vista-impresion).
 * 2. Comprobar que hay un nivel activo cargado.
 * 3. Inyectar el HTML básico (Cabecera).
 * 4. Clonar el tablero actual visible y las pistas.
 * 5. Lanzar window.print().
 */
export function ejecutarImpresionConTryCatch(nivelActualParam?: PuzzleCase | null): void {
  try {
    const vistaImpresion = document.getElementById('vista-impresion');
    if (!vistaImpresion) {
      throw new Error("El contenedor con ID 'vista-impresion' no se encontró en el DOM.");
    }

    // 1. Limpiar el contenedor previo
    vistaImpresion.innerHTML = '';

    // 2. Comprobar que hay un nivel activo cargado
    const nivelActual = nivelActualParam || (typeof window !== 'undefined' ? (window as unknown as { nivelActual?: PuzzleCase }).nivelActual : null);
    if (!nivelActual) {
      throw new Error("No hay ningún nivel cargado para imprimir.");
    }

    // DESCARGA DIRECTA DEL ARCHIVO PDF (Garantiza que el alumno/profesor reciba el PDF inmediatamente)
    let nombreArchivoDescargado = '';
    try {
      nombreArchivoDescargado = generarYDescargarPDF(nivelActual);
      console.log(`[PDF] Archivo PDF generado y descargado con éxito: ${nombreArchivoDescargado}`);
    } catch (pdfErr) {
      console.error("[PDF] Error al generar archivo con jsPDF, continuando con vista de impresión nativa:", pdfErr);
    }

    const biblia = nivelActual.fuenteHistorica ? ` (${nivelActual.fuenteHistorica})` : '';
    const tituloNivel = (nivelActual as unknown as { Titulo?: string }).Titulo || nivelActual.title || 'Reto sin título';
    const dificultad = (nivelActual.difficulty || 'Normal').toUpperCase();
    const badgeCaso = nivelActual.badge || '#N-01';

    // 3. Inyectar el HTML básico con identidad visual policial (cinta de advertencia, sello confidencial y formulario de aula)
    const htmlImpresion = `
      <div style="height: 3mm; width: 100%; background: repeating-linear-gradient(45deg, #eab308, #eab308 10px, #1c1917 10px, #1c1917 20px); margin-bottom: 2mm; border-radius: 2px;"></div>
      <div class="cabecera-impresion impresion-cabecera">
        <div class="impresion-cabecera-top">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 3px; flex-wrap: wrap;">
            <span style="background: #c6007e; color: white; font-family: monospace; font-size: 8px; font-weight: bold; padding: 1px 5px; border-radius: 2px; text-transform: uppercase;">CONFIDENCIAL</span>
            <span style="background: #f5f5f4; color: #1c1917; border: 1px solid #d6d3d1; font-family: monospace; font-size: 8px; font-weight: bold; padding: 1px 4px; border-radius: 2px;">${badgeCaso}</span>
            <span style="background: #fef3c7; color: #92400e; border: 1px solid #f59e0b; font-size: 8px; font-weight: bold; padding: 1px 5px; border-radius: 2px;">DIF: ${dificultad}</span>
            ${nivelActual.fuenteHistorica ? `<span style="background: #e0f2fe; color: #0369a1; border: 1px solid #38bdf8; font-size: 8px; font-weight: bold; padding: 1px 5px; border-radius: 2px;">📖 ${nivelActual.fuenteHistorica}</span>` : ''}
          </div>
          <h2 style="font-size: 15px; font-weight: 800; color: #1c1917; margin: 0;">Murdoku: ${tituloNivel}</h2>
          <p style="font-size: 9px; margin-top: 1px; color: #57534e; font-style: italic;">${nivelActual.subtitle || 'Dossier oficial de deducción criminológica y lógica didáctica'}</p>
        </div>
        <div class="impresion-datos-alumno" style="background: #fafaf9; border: 1px solid #d6d3d1; border-radius: 4px; padding: 4px 8px; font-size: 9px; line-height: 1.3;">
          <div style="font-weight: bold; font-family: monospace; color: #44403c; border-bottom: 1px solid #e7e5e4; margin-bottom: 2px; font-size: 8px;">DILIGENCIAS POLICIALES DE AULA</div>
          <div><strong>Alumno/Agente:</strong> _____________________________</div>
          <div style="margin-top: 2px;"><strong>Grupo:</strong> _______ | <strong>Fecha:</strong> _______ | <strong>Nota:</strong> [   /10]</div>
        </div>
      </div>
      <div class="contenido-impresion">
        <div class="columna-info"></div>
        <div class="columna-tablero"></div>
      </div>
    `;

    vistaImpresion.innerHTML = htmlImpresion;

    // 4. Clonar el tablero actual visible y las pistas/personajes dentro de los contenedores del Grid
    const tableroOriginal = document.getElementById('contenedor-tablero');
    const pistasOriginales = document.getElementById('contenedor-pistas');
    const personajesOriginales = document.getElementById('character-panel');

    const columnaInfo = vistaImpresion.querySelector('.columna-info');
    const columnaTablero = vistaImpresion.querySelector('.columna-tablero');

    if (columnaInfo && columnaTablero) {
      // 4a. Clonar personajes dentro de columna-info
      if (personajesOriginales) {
        const personajesClon = personajesOriginales.cloneNode(true) as HTMLElement;
        columnaInfo.appendChild(personajesClon);
      } else if (nivelActual.suspects && nivelActual.suspects.length > 0) {
        const bloquePersonajes = document.createElement('div');
        bloquePersonajes.className = 'impresion-bloque';
        bloquePersonajes.innerHTML = `
          <div class="impresion-bloque-titulo">SOSPECHOSOS Y PERSONAJES</div>
          <div class="impresion-personajes-grid">
            ${nivelActual.suspects.map(s => `
              <div class="impresion-personaje-card">
                <span class="impresion-personaje-id">${s.id}</span>
                <div>
                  <div class="impresion-personaje-nombre">${s.avatar || '👤'} ${s.name}</div>
                  <div class="impresion-personaje-rol">${s.role || 'Sospechoso'}</div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
        columnaInfo.appendChild(bloquePersonajes);
      }

      // 4b. Clonar pistas dentro de columna-info
      if (pistasOriginales) {
        const pistasClon = pistasOriginales.cloneNode(true) as HTMLElement;
        columnaInfo.appendChild(pistasClon);
      }

      // 4c. Clonar tablero dentro de columna-tablero
      if (tableroOriginal) {
        const tableroClon = tableroOriginal.cloneNode(true) as HTMLElement;
        columnaTablero.appendChild(tableroClon);
      }
    } else {
      throw new Error("No se encontraron los contenedores columna-info o columna-tablero en vista-impresion.");
    }

    // 5. Lanzar la ventana de impresión nativa protegida contra restricciones de sandbox iframe
    try {
      window.print();
    } catch (printError) {
      console.warn("[Impresión] window.print() fue omitido o bloqueado por el entorno de seguridad del navegador/iframe:", printError);
    }

  } catch (error) {
    console.error("Error al preparar la impresión:", error);
  }
}

/**
 * Función exportada prepararImpresion compatible con llamadas directas
 */
export function prepararImpresion(caso?: PuzzleCase | null): void {
  ejecutarImpresionConTryCatch(caso);
}

/**
 * Alias para compatibilidad hacia atrás
 */
export const imprimirReto = prepararImpresion;
export const actualizarVistaImpresion = (caso: PuzzleCase) => {
  if (typeof window !== 'undefined') {
    (window as unknown as { nivelActual?: PuzzleCase }).nivelActual = caso;
  }
};
