import { RetoTraduccion } from '../types';
import { RETOS_FACILES_PT } from './retosFacilesPt';
import { RETOS_MEDIOS_PT } from './retosMediosPt';
import { RETOS_DIFICILES_PT } from './retosDificilesPt';

/** Traducciones de los retos al portugués de Portugal (pt-PT). */
export const RETOS_TRADUCCIONES_PT: Record<string, RetoTraduccion> = {
  ...RETOS_FACILES_PT,
  ...RETOS_MEDIOS_PT,
  ...RETOS_DIFICILES_PT,
};
