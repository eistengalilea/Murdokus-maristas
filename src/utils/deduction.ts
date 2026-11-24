import { PuzzleCase, CellCoord, Suspect, RoomInfo, MurdererEvaluation } from '../types';

/**
 * Evalúa la regla de deducción geométrica final del juego:
 * 
 * REGLA:
 * "El culpable es el único sospechoso que se encuentra en la misma zona
 * (color/habitación) que la víctima (💀) y no hay nadie más en esa zona con ellos."
 * 
 * Esta función es completamente agnóstica al nivel: funciona para cualquier objeto
 * JSON de nivel que se añada al array de niveles.
 */
export function evaluateMurdererRule(
  puzzleCase: PuzzleCase,
  placedPositions: Record<string, CellCoord>,
  lang: 'es' | 'gl' | 'pt' = 'es'
): MurdererEvaluation {
  const gl = lang === 'gl';
  const pt = lang === 'pt';
  // 1. Identificar a la víctima
  const victim =
    puzzleCase.suspects.find((s) => s.isVictim || s.id === puzzleCase.victimId) || null;

  if (!victim) {
    return {
      isSolved: false,
      victim: null,
      victimRoom: null,
      murderer: null,
      suspectsInVictimRoom: [],
      allRoomOccupants: {},
      explanation: gl ? 'Non se configurou a vítima (💀) neste caso.' : pt ? 'A vítima (💀) não foi configurada neste caso.' : 'No se ha configurado la víctima (💀) en este caso.'
    };
  }

  const victimPos = placedPositions[victim.id];
  if (!victimPos) {
    return {
      isSolved: false,
      victim,
      victimRoom: null,
      murderer: null,
      suspectsInVictimRoom: [],
      allRoomOccupants: {},
      explanation: gl ? 'A vítima (💀) aínda non foi colocada no taboleiro.' : pt ? 'A vítima (💀) ainda não foi colocada no tabuleiro.' : 'La víctima (💀) aún no ha sido colocada en el tablero.'
    };
  }

  // 2. Determinar la habitación/zona de la víctima
  const victimRoomId = puzzleCase.cellRooms[victimPos.row]?.[victimPos.col];
  const victimRoom = victimRoomId ? puzzleCase.rooms[victimRoomId] : null;

  // 3. Mapear ocupantes por habitación
  const allRoomOccupants: Record<
    string,
    { room: RoomInfo; occupants: Suspect[]; count: number }
  > = {};

  // Inicializar todas las habitaciones del caso
  for (const [roomId, roomInfo] of Object.entries(puzzleCase.rooms)) {
    allRoomOccupants[roomId] = {
      room: roomInfo,
      occupants: [],
      count: 0
    };
  }

  // Asignar cada sospechoso colocado a su habitación
  for (const suspect of puzzleCase.suspects) {
    const pos = placedPositions[suspect.id];
    if (pos) {
      const roomId = puzzleCase.cellRooms[pos.row]?.[pos.col];
      if (roomId && allRoomOccupants[roomId]) {
        allRoomOccupants[roomId].occupants.push(suspect);
        allRoomOccupants[roomId].count++;
      }
    }
  }

  // 4. Analizar la habitación de la víctima
  const occupantsInVictimRoom = victimRoomId ? allRoomOccupants[victimRoomId]?.occupants || [] : [];
  const suspectsInVictimRoom = occupantsInVictimRoom.filter((s) => s.id !== victim.id);

  // 5. Aplicar la regla de deducción geométrica
  let murderer: Suspect | null = null;
  let explanation = '';

  const zona = victimRoom ? victimRoom.name : gl || pt ? 'a mesma zona' : 'la misma zona';
  if (suspectsInVictimRoom.length === 1 && occupantsInVictimRoom.length === 2) {
    // Exactamente 1 sospechoso a solas con la víctima
    murderer = suspectsInVictimRoom[0];
    explanation = gl
      ? `${murderer.name} (${murderer.avatar}) é a única persoa que estaba en «${zona}» xunto á vítima ${victim.name} (${victim.avatar}), sen ningunha outra testemuña nesa zona. Pola regra xeométrica de dedución, é o culpable!`
      : pt
      ? `${murderer.name} (${murderer.avatar}) é a única pessoa que estava em «${zona}» junto da vítima ${victim.name} (${victim.avatar}), sem nenhuma outra testemunha nessa zona. Pela regra geométrica de dedução, é o culpado!`
      : `${murderer.name} (${murderer.avatar}) es el único sospechoso que se encontraba en «${zona}» junto a la víctima ${victim.name} (${victim.avatar}), sin ningún otro testigo ni persona presente en esa zona. Por la regla geométrica de deducción, ¡es el culpable!`;
  } else if (suspectsInVictimRoom.length === 0) {
    explanation = gl
      ? `A vítima ${victim.name} (${victim.avatar}) atópase en «${zona}», pero non hai ningún sospeitoso nesa mesma zona.`
      : pt
      ? `A vítima ${victim.name} (${victim.avatar}) encontra-se em «${zona}», mas não há nenhum suspeito nessa mesma zona.`
      : `La víctima ${victim.name} (${victim.avatar}) se encuentra en «${zona}», pero no hay ningún sospechoso en esa misma zona para haber cometido los hechos.`;
  } else {
    explanation = gl
      ? `Hai ${suspectsInVictimRoom.length} sospeitosos en «${zona}» coa vítima. A regra esixe que o culpable sexa a única persoa a soas con ela.`
      : pt
      ? `Há ${suspectsInVictimRoom.length} suspeitos em «${zona}» com a vítima. A regra exige que o culpado seja a única pessoa a sós com ela.`
      : `Hay ${suspectsInVictimRoom.length} sospechosos en «${zona}» con la víctima. La regla requiere que el culpable sea el único sospechoso presente en esa zona a solas con la víctima.`;
  }

  // 6. Verificar si coincide con la solución definida
  let isMatchesSolution = true;
  for (const [suspectId, expectedCoord] of Object.entries(puzzleCase.solution)) {
    const actualCoord = placedPositions[suspectId];
    if (
      !actualCoord ||
      actualCoord.row !== expectedCoord.row ||
      actualCoord.col !== expectedCoord.col
    ) {
      isMatchesSolution = false;
      break;
    }
  }

  return {
    isSolved: isMatchesSolution && murderer !== null,
    victim,
    victimRoom,
    murderer,
    suspectsInVictimRoom,
    allRoomOccupants,
    explanation
  };
}
