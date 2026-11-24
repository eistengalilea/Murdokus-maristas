# Instrucciones Permanentes del Proyecto: Murdoku Marista

## Regla Pericial de Colores de Estancias y Planos de la Escena del Crimen

### Directiva del Usuario:
> "Revisa los planos de las escenas del crimen. Usa el código de colores de las leyendas y aplícalos en el plano de la escena del crimen. Que cada zona esté coloreada de acuerdo con la leyenda. En el plano de la escena aplica en los colores una transparencia de 50%.
> Revisa y aplica las instrucciones a todos los retos. Guarda y aplica estas instrucciones para los retos que se añadan posteriormente."

---

### Especificaciones Obligatorias de Diseño y Renderizado:

1. **Fuente de Verdad Única de Colores (`/src/utils/roomColors.ts`)**:
   - Cada zona o estancia (`RoomInfo`) posee un código en su leyenda (`tagColor`, ej. `bg-purple-800`, `bg-blue-800`, etc.).
   - La función `resolverColorHabitacion(room, roomId)` resuelve los valores RGB exactos, la muestra sólida para la leyenda y el valor con transparencia al 50%.

2. **Plano de la Escena del Crimen (Tablero Interactivo `GameBoard.tsx`)**:
   - Cada casilla que pertenezca a una estancia debe colorearse con el color de su leyenda aplicando una **transparencia exacta del 50%** (`rgba(r, g, b, 0.50)`).
   - Las casillas con obstáculos o evidencias inanimadas bloqueadas mantienen su textura/trama rayada (`bg-blocked-hatch`).
   - Al pasar el cursor sobre las estancias de la leyenda inferior, las casillas correspondientes del plano deben resaltarse interactivamente.

3. **Generador de Documentos y PDF (`/src/utils/generadorPdfDescarga.ts`)**:
   - **Leyenda de Estancias (Sección 4)**: Se dibuja con la muestra de color **sólida al 100%** para una identificación clara de la clave de color.
   - **Plano de la Escena (Sección 3 y Hoja de Soluciones)**: Las casillas se rellenan con el color de la leyenda **al 50% de transparencia** mezclado sobre el fondo blanco del papel (`printRgb50`: `255 - (255 - C) * 0.5`).

4. **Incorporación de Nuevos Retos**:
   - Para todos los retos que se agreguen en el futuro (fáciles, medios, difíciles o temáticos), las estancias en `rooms` deben incluir su `tagColor` correspondiente a la paleta oficial (`purple`, `blue`, `teal`, `amber`, `emerald`, `red`, `rose`, `yellow`, `orange`, `sky`, `stone`, `indigo`, `green`, `zinc`, `cyan`, `lime`, `violet`).
   - Toda nueva pantalla, informe pericial o componente que dibuje el plano de la escena debe importar y usar `resolverColorHabitacion` para mantener el 100% de coherencia visual con la leyenda y el 50% de transparencia reglamentario.

---

## Regla de Validez Lógica de los Retos (obligatoria)

Todo reto nuevo o modificado debe superar el validador antes de publicarse:

```bash
npm run validar            # todos los retos
npm run validar -- 004-NT  # solo los retos indicados
```

El validador (`scripts/validar-retos.ts`) exige:

1. **Regla Sudoku en la solución**: una sola persona por fila y por columna, y nadie sobre un objeto de `blockedObjects`.
2. **Regla del culpable**: en la estancia de la víctima (`victimId`) solo pueden estar la víctima y el culpable (`murdererId`). Los indicadores `isVictim` / `isMurderer` deben coincidir con esos ids.
3. **Estancias contiguas**: cada estancia de `cellRooms` debe ser una sola zona, sin trozos separados.
4. **Pistas de posición (`pistasPosicion`)** en cada personaje: deben ser verdaderas con la solución y, entre todas, llevar a **una única solución**. Tipos disponibles (ver `PistaPosicion` en `src/types.ts`):
   - `{ tipo: 'estancia', estancia }` — siempre se incluye una por personaje.
   - `{ tipo: 'filaObjeto' | 'columnaObjeto' | 'junto_objeto', objeto: 'fila,col' }`
   - `{ tipo: 'norteDe' | 'surDe' | 'esteDe' | 'oesteDe', sospechoso }`
   - `{ tipo: 'borde', lado: 'norte' | 'sur' | 'este' | 'oeste' }`
   El texto que ve el alumno (castellano, gallego y portugués) se genera automáticamente en `src/utils/pistasPosicion.ts`; no hay que traducirlo.
5. **Coherencia narrativa**: el `clueText` de un personaje no debe nombrar una estancia distinta de la que ocupa en la solución.
6. **Traducciones (gallego y portugués de Portugal)**: cada reto nuevo necesita su entrada en `src/i18n/retos/*Gl.ts` y en `src/i18n/retos/pt/*Pt.ts`. Las claves de `rooms`, `suspects`, `clues` y `blockedObjects` deben coincidir exactamente con las del reto en castellano. El portugués usa la norma europea (casa, linha/coluna, divisão, planta, culpado) y los nombres bíblicos de la tradición católica portuguesa (João, Mateus, Atos…).

### Flujo de juego
El alumno coloca a todos los personajes y pulsa «Resolver / Comprobar Caso». Si las posiciones son correctas, se desbloquea «Acusar al Culpable»; la victoria llega al acusar a la persona correcta. Cualquier cambio posterior en el tablero vuelve a bloquear la acusación.


---

## Proyecto Murdoku Marista (historia de Marcelino Champagnat)

- **Temática**: retos de deducción sobre la vida de Marcelino Champagnat, los primeros hermanos y L'Hermitage (Lanfrey, *Historia del Instituto*, T. 1; *Tras las huellas de Marcelino Champagnat*). Las menciones bíblicas de las reglas anteriores se leen como «históricas»: los campos son `fuenteHistorica`, `textoClave` y `contextoHistorico`.
- **Fuente de verdad de los retos**: `scripts/retos-fuente/{faciles,medios,dificiles}.ts`, escritos una sola vez en `[castellano, gallego, portugués]`. **No editar a mano** `src/data/retosMarista*.ts` ni `src/i18n/retos/retosMaristaGl.ts` / `pt/retosMaristaPt.ts`: se regeneran con `npm run generar` (el plano y las pistas de posición salen con solución única, semilla = id del reto). Después, `npm run validar`.
- **Rasgos del estilo marista**: cada reto lleva al menos uno en `rasgos` (ids de `src/data/rasgos.ts`: `espiritu_familia`, `presencia`, `sencillez`, `amor_trabajo`, `estilo_maria`). Se muestran como chips y son buscables.
- **Etapa**: la parte de `fuente` anterior a « · » (Marlhes, Lyon, La Valla, L’Hermitage…) alimenta el filtro del buscador; usa siempre la misma grafía.
- **Identidad visual** (marchacompostela.org, sin logotipo): Montserrat para títulos y Roboto para el texto; índigo `#312A4E`, magenta `#C6007E`, dorado `#D5A53C`, azul `#4E639E`.
