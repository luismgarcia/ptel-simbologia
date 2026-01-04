/**
 * Tipos para el sistema de simbología PTEL
 */

export type IconLibrary = 'phosphor' | 'tabler';

export type IconWeight = 'fill' | 'bold' | 'regular' | 'light' | 'thin' | 'duotone';

export interface PTELIcon {
  /** Identificador único */
  id: string;
  /** Nombre descriptivo */
  name: string;
  /** Categoría principal */
  category: PTELCategory;
  /** Tipología específica */
  tipologia: string;
  /** Librería de origen */
  library: IconLibrary;
  /** Nombre del componente en la librería */
  componentName: string;
  /** Color por defecto (hex) */
  color: string;
  /** Tamaños recomendados en px */
  sizes: number[];
}

export type PTELCategory =
  | 'emergencias'
  | 'sanidad'
  | 'educacion'
  | 'seguridad'
  | 'suministros'
  | 'vulnerable'
  | 'gobierno'
  | 'transporte'
  | 'comunicaciones';

export interface MarkerConfig {
  /** Icono a usar */
  icon: PTELIcon;
  /** Tamaño del marcador en px */
  size: number;
  /** Color de fondo del marcador circular */
  backgroundColor: string;
  /** Color del icono (normalmente blanco) */
  iconColor: string;
  /** Borde opcional */
  borderColor?: string;
  borderWidth?: number;
}

/**
 * Configuración de exportación para QGIS
 */
export interface QGISExportConfig {
  /** Tamaños a generar en px */
  sizes: number[];
  /** Formato de salida */
  format: 'svg' | 'png';
  /** Incluir fondo circular */
  includeBackground: boolean;
  /** Padding interno en % */
  paddingPercent: number;
}
