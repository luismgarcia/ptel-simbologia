/**
 * Paleta de colores PTEL para tipologías de infraestructuras críticas
 * Optimizada para contraste en cartografía de emergencias
 */

export const PTEL_COLORS = {
  // Servicios de Emergencia
  bomberos: '#dc2626',      // Rojo - red-600
  proteccionCivil: '#ea580c', // Naranja oscuro - orange-600
  
  // Sanidad
  hospital: '#16a34a',      // Verde - green-600
  centroSalud: '#22c55e',   // Verde claro - green-500
  consultorio: '#4ade80',   // Verde suave - green-400
  
  // Educación
  colegio: '#2563eb',       // Azul - blue-600
  instituto: '#3b82f6',     // Azul claro - blue-500
  guarderia: '#60a5fa',     // Azul suave - blue-400
  
  // Seguridad
  policia: '#1e3a8a',       // Azul oscuro - blue-900
  guardiaCivil: '#1e40af',  // Azul marino - blue-800
  
  // Suministros
  agua: '#0891b2',          // Cian - cyan-600
  electricidad: '#eab308',  // Amarillo - yellow-500
  gas: '#f97316',           // Naranja - orange-500
  
  // Población Vulnerable
  residenciaMayores: '#8b5cf6', // Violeta - violet-500
  centroDia: '#a78bfa',     // Violeta claro - violet-400
  
  // Gobierno
  ayuntamiento: '#78716c',  // Gris cálido - stone-500
  juzgado: '#57534e',       // Gris oscuro - stone-600
  
  // Transporte
  estacion: '#6b7280',      // Gris - gray-500
  helipuerto: '#4b5563',    // Gris oscuro - gray-600
  
  // Comunicaciones
  antena: '#ec4899',        // Rosa - pink-500
  repetidor: '#db2777',     // Rosa oscuro - pink-600
} as const;

export type PTELColorKey = keyof typeof PTEL_COLORS;

/**
 * Colores por categoría principal
 */
export const PTEL_CATEGORY_COLORS = {
  emergencias: '#dc2626',
  sanidad: '#16a34a',
  educacion: '#2563eb',
  seguridad: '#1e3a8a',
  suministros: '#0891b2',
  vulnerable: '#8b5cf6',
  gobierno: '#78716c',
  transporte: '#6b7280',
  comunicaciones: '#ec4899',
} as const;
