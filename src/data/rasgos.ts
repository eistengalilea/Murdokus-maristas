import { Language } from '../i18n/types';

/**
 * Rasgos del estilo educativo marista: espíritu de familia, presencia, sencillez,
 * amor al trabajo y estilo de María. Cada reto se etiqueta con al menos uno.
 */
export type RasgoId = 'espiritu_familia' | 'presencia' | 'sencillez' | 'amor_trabajo' | 'estilo_maria';

export interface RasgoMarista {
  id: RasgoId;
  emoji: string;
  /** Clases Tailwind del chip (fondo, texto y borde). */
  color: string;
  nombre: Record<Language, string>;
  descripcion: Record<Language, string>;
}

export const RASGOS_MARISTAS: RasgoMarista[] = [
  {
    id: 'espiritu_familia',
    emoji: '🏡',
    color: 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800',
    nombre: { es: 'Espíritu de familia', gl: 'Espírito de familia', pt: 'Espírito de família' },
    descripcion: {
      es: 'Relaciones cercanas, cariño y confianza entre educadores y alumnos, como en una familia.',
      gl: 'Relacións próximas, cariño e confianza entre educadores e alumnado, como nunha familia.',
      pt: 'Relações próximas, carinho e confiança entre educadores e alunos, como numa família.'
    }
  },
  {
    id: 'presencia',
    emoji: '🤝',
    color: 'bg-sky-100 text-sky-800 border-sky-300 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800',
    nombre: { es: 'Presencia', gl: 'Presenza', pt: 'Presença' },
    descripcion: {
      es: 'Estar cerca, acompañar y conocer a cada niño y joven para amarlo y educarlo.',
      gl: 'Estar preto, acompañar e coñecer cada neno e mozo para amalo e educalo.',
      pt: 'Estar perto, acompanhar e conhecer cada criança e jovem para o amar e educar.'
    }
  },
  {
    id: 'sencillez',
    emoji: '🌾',
    color: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800',
    nombre: { es: 'Sencillez', gl: 'Sinxeleza', pt: 'Simplicidade' },
    descripcion: {
      es: 'Trato directo, sin artificios ni apariencias, abierto a todos y a las cosas pequeñas.',
      gl: 'Trato directo, sen artificios nin aparencias, aberto a todos e ás cousas pequenas.',
      pt: 'Trato direto, sem artifícios nem aparências, aberto a todos e às coisas pequenas.'
    }
  },
  {
    id: 'amor_trabajo',
    emoji: '⚒️',
    color: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800',
    nombre: { es: 'Amor al trabajo', gl: 'Amor ao traballo', pt: 'Amor ao trabalho' },
    descripcion: {
      es: 'Constancia y entrega en la tarea diaria, que se vive como servicio y como modo de crecer.',
      gl: 'Constancia e entrega na tarefa diaria, que se vive como servizo e como modo de medrar.',
      pt: 'Constância e entrega na tarefa diária, vivida como serviço e como forma de crescer.'
    }
  },
  {
    id: 'estilo_maria',
    emoji: '🌹',
    color: 'bg-violet-100 text-violet-800 border-violet-300 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800',
    nombre: { es: 'Al estilo de María', gl: 'Ao estilo de María', pt: 'Ao estilo de Maria' },
    descripcion: {
      es: 'Educar con la actitud de María: humildad, escucha, confianza en Dios y cuidado de cada persona.',
      gl: 'Educar coa actitude de María: humildade, escoita, confianza en Deus e coidado de cada persoa.',
      pt: 'Educar com a atitude de Maria: humildade, escuta, confiança em Deus e cuidado de cada pessoa.'
    }
  }
];

export const RASGO_IDS: string[] = RASGOS_MARISTAS.map((r) => r.id);

export function obtenerRasgo(id: string): RasgoMarista | undefined {
  return RASGOS_MARISTAS.find((r) => r.id === id);
}

/** Texto de todos los rasgos en los tres idiomas (para el buscador). */
export function textoRasgos(ids: string[] | undefined): string {
  return (ids || [])
    .map((id) => obtenerRasgo(id))
    .filter(Boolean)
    .map((r) => `${r!.nombre.es} ${r!.nombre.gl} ${r!.nombre.pt}`)
    .join(' ');
}

/** HTML de los chips de rasgos (para las tarjetas generadas como cadena en navigation.ts). */
export function rasgosHtml(ids: string[] | undefined, lang: Language): string {
  const chips = (ids || [])
    .map((id) => obtenerRasgo(id))
    .filter(Boolean)
    .map(
      (r) =>
        `<span title="${r!.descripcion[lang]}" class="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${r!.color}"><span>${r!.emoji}</span><span>${r!.nombre[lang]}</span></span>`
    )
    .join('');
  return chips ? `<div class="flex flex-wrap gap-1.5">${chips}</div>` : '';
}
