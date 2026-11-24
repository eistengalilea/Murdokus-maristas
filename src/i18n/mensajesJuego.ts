import { Language } from './types';

/**
 * Mensajes dinámicos del tablero (avisos de verificación, pistas del inspector, acusación),
 * en castellano, gallego y portugués de Portugal. Antes estaban escritos a mano en App.tsx solo en castellano.
 */
export interface MensajesJuego {
  algoNoCuadra: string;
  casoResuelto: string;
  casillaBloqueada: string;
  conflictoFilaColumna: (fila: number, quienFila: string, col: number, quienCol: string) => string;
  conflictoFila: (fila: number, quien: string) => string;
  conflictoColumna: (col: number, quien: string) => string;
  reglaSudokuConflicto: (detalle: string) => string;
  infraccionSudoku: string;
  faltanPersonajes: (colocados: number, total: number) => string;
  posicionesCorrectas: string;
  noCoincide: string;
  acusacionBloqueada: string;
  pistaInspector: (texto: string) => string;
  pistaRevisa: (texto: string) => string;
  consejosGenerales: string[];
  botonComprobar: string;
  informePolicial: string;
}

const ES: MensajesJuego = {
  algoNoCuadra: 'Algo no cuadra...',
  casoResuelto: '¡Posiciones correctas!',
  casillaBloqueada: '¡Casilla bloqueada! Los objetos estáticos no pueden ser ocupados por ninguna persona.',
  conflictoFilaColumna: (f, a, c, b) => `Fila ${f} (${a}) y Columna ${c} (${b})`,
  conflictoFila: (f, a) => `Fila ${f} (ya ocupada por ${a})`,
  conflictoColumna: (c, a) => `Columna ${c} (ya ocupada por ${a})`,
  reglaSudokuConflicto: (d) => `¡Regla Sudoku! Solo puede haber una persona por fila y columna. Conflicto en ${d}.`,
  infraccionSudoku: '¡Infracción de la regla Sudoku! Hay más de una persona colocada en la misma fila o columna.',
  faltanPersonajes: (n, t) =>
    `Faltan personajes por colocar en el tablero (${n}/${t} colocados). Revisa las pistas de deducción de cada personaje en el panel.`,
  posicionesCorrectas:
    'Todas las posiciones son correctas. Aplica ahora la regla del culpable (la única persona a solas con la víctima en su estancia) y pulsa «Acusar al Culpable».',
  noCoincide:
    'La disposición de los personajes no coincide con la solución del caso. Revisa las estancias y las pistas de deducción.',
  acusacionBloqueada:
    'Antes de acusar, coloca a todos los personajes y pulsa «Resolver / Comprobar Caso». La acusación se desbloquea cuando las posiciones son correctas.',
  pistaInspector: (t) => `Pista del Inspector: ${t}`,
  pistaRevisa: (t) => `Revisa la pista: "${t}"`,
  consejosGenerales: [
    'Recuerda la Regla Sudoku: solo puede haber una persona por cada fila y por cada columna.',
    'Examina las casillas con objetos o evidencias fijas: ningún personaje puede ocupar una casilla bloqueada.',
    'Utiliza la herramienta Equis (❌) en las casillas descartadas para reducir las posibilidades lógicas.'
  ],
  botonComprobar: 'Resolver / Comprobar Caso',
  informePolicial: 'INFORME POLICIAL:'
};

const GL: MensajesJuego = {
  algoNoCuadra: 'Algo non cadra...',
  casoResuelto: 'Posicións correctas!',
  casillaBloqueada: 'Casa bloqueada! Os obxectos estáticos non poden ser ocupados por ningunha persoa.',
  conflictoFilaColumna: (f, a, c, b) => `Fila ${f} (${a}) e Columna ${c} (${b})`,
  conflictoFila: (f, a) => `Fila ${f} (xa ocupada por ${a})`,
  conflictoColumna: (c, a) => `Columna ${c} (xa ocupada por ${a})`,
  reglaSudokuConflicto: (d) => `Regra Sudoku! Só pode haber unha persoa por fila e columna. Conflito en ${d}.`,
  infraccionSudoku: 'Infracción da regra Sudoku! Hai máis dunha persoa colocada na mesma fila ou columna.',
  faltanPersonajes: (n, t) =>
    `Faltan personaxes por colocar no taboleiro (${n}/${t} colocados). Revisa as pistas de dedución de cada personaxe no panel.`,
  posicionesCorrectas:
    'Todas as posicións son correctas. Aplica agora a regra do culpable (a única persoa a soas coa vítima na súa estancia) e preme «Acusar ao Culpable».',
  noCoincide:
    'A disposición dos personaxes non coincide coa solución do caso. Revisa as estancias e as pistas de dedución.',
  acusacionBloqueada:
    'Antes de acusar, coloca todos os personaxes e preme «Resolver / Comprobar Caso». A acusación desbloquéase cando as posicións son correctas.',
  pistaInspector: (t) => `Pista do Inspector: ${t}`,
  pistaRevisa: (t) => `Revisa a pista: "${t}"`,
  consejosGenerales: [
    'Lembra a Regra Sudoku: só pode haber unha persoa en cada fila e en cada columna.',
    'Examina as casas con obxectos ou evidencias fixas: ningún personaxe pode ocupar unha casa bloqueada.',
    'Usa a ferramenta Equis (❌) nas casas descartadas para reducir as posibilidades lóxicas.'
  ],
  botonComprobar: 'Resolver / Comprobar Caso',
  informePolicial: 'INFORME POLICIAL:'
};

const PT: MensajesJuego = {
  algoNoCuadra: 'Algo não bate certo...',
  casoResuelto: 'Posições corretas!',
  casillaBloqueada: 'Casa bloqueada! Os objetos estáticos não podem ser ocupados por nenhuma pessoa.',
  conflictoFilaColumna: (f, a, c, b) => `Linha ${f} (${a}) e Coluna ${c} (${b})`,
  conflictoFila: (f, a) => `Linha ${f} (já ocupada por ${a})`,
  conflictoColumna: (c, a) => `Coluna ${c} (já ocupada por ${a})`,
  reglaSudokuConflicto: (d) => `Regra Sudoku! Só pode haver uma pessoa por linha e por coluna. Conflito em ${d}.`,
  infraccionSudoku: 'Infração da regra Sudoku! Há mais de uma pessoa na mesma linha ou coluna.',
  faltanPersonajes: (n, t) =>
    `Faltam personagens por colocar no tabuleiro (${n}/${t} colocadas). Revê as pistas de dedução de cada personagem no painel.`,
  posicionesCorrectas:
    'Todas as posições estão corretas. Aplica agora a regra do culpado (a única pessoa a sós com a vítima na sua divisão) e carrega em «Acusar o Culpado».',
  noCoincide:
    'A disposição das personagens não corresponde à solução do caso. Revê as divisões e as pistas de dedução.',
  acusacionBloqueada:
    'Antes de acusar, coloca todas as personagens e carrega em «Resolver / Verificar Caso». A acusação fica disponível quando as posições estiverem corretas.',
  pistaInspector: (t) => `Pista do Inspetor: ${t}`,
  pistaRevisa: (t) => `Revê a pista: "${t}"`,
  consejosGenerales: [
    'Lembra-te da Regra Sudoku: só pode haver uma pessoa em cada linha e em cada coluna.',
    'Examina as casas com objetos ou evidências fixas: nenhuma personagem pode ocupar uma casa bloqueada.',
    'Usa a ferramenta Xis (❌) nas casas descartadas para reduzir as possibilidades lógicas.'
  ],
  botonComprobar: 'Resolver / Verificar Caso',
  informePolicial: 'RELATÓRIO POLICIAL:'
};

export function mensajesJuego(lang: Language): MensajesJuego {
  return lang === 'gl' ? GL : lang === 'pt' ? PT : ES;
}
