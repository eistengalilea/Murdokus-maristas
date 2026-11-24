/**
 * Acceso seguro a localStorage: en modo privado de algunos navegadores, en iframes
 * con cookies bloqueadas o con el almacenamiento lleno, getItem/setItem lanzan excepciones.
 */
export function leerPreferencia(clave: string): string | null {
  try {
    return typeof localStorage !== 'undefined' ? localStorage.getItem(clave) : null;
  } catch {
    return null;
  }
}

export function guardarPreferencia(clave: string, valor: string): void {
  try {
    if (typeof localStorage !== 'undefined') localStorage.setItem(clave, valor);
  } catch {
    /* sin almacenamiento disponible: se ignora */
  }
}
