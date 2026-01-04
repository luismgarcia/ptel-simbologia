# 🗺️ PTEL Simbología

Sistema de simbología e iconografía para **Planes Territoriales de Emergencias Locales (PTEL)** de Andalucía.

Iconos optimizados para visualización en QGIS y cartografía de emergencias a escalas pequeñas (10-32px).

## 🎯 Objetivo

Proporcionar un conjunto coherente de iconos para representar infraestructuras críticas en mapas de emergencias municipales:

- **Servicios de Emergencia**: Bomberos, Protección Civil
- **Sanidad**: Hospitales, Centros de Salud, Consultorios
- **Educación**: Colegios, Institutos, Guarderías
- **Seguridad**: Policía Local, Guardia Civil
- **Suministros**: Agua (ETAP, EDAR), Electricidad, Gas
- **Población Vulnerable**: Residencias mayores, Centros día
- **Gobierno**: Ayuntamientos, Sedes administrativas
- **Transporte**: Estaciones, Helipuertos
- **Comunicaciones**: Antenas, Repetidores

## 📦 Librerías Base

| Librería | Uso | Iconos |
|----------|-----|--------|
| [Phosphor Icons](https://phosphoricons.com/) | Principal | 9,072 |
| [Tabler Icons](https://tabler.io/icons) | Secundaria | 4,985 |

Ambas librerías ofrecen variantes **filled/solid** optimizadas para legibilidad a escalas pequeñas.

## 🎨 Paleta de Colores PTEL

| Tipología | Color | Hex |
|-----------|-------|-----|
| Bomberos/Incendios | 🔴 Rojo | `#dc2626` |
| Sanidad | 🟢 Verde | `#16a34a` |
| Educación | 🔵 Azul | `#2563eb` |
| Seguridad | 🔵 Azul Oscuro | `#1e3a8a` |
| Agua | 🔵 Cian | `#0891b2` |
| Electricidad | 🟡 Amarillo | `#eab308` |
| Gas | 🟠 Naranja | `#f97316` |
| Residencias | 🟣 Violeta | `#8b5cf6` |
| Gobierno | ⚫ Gris | `#78716c` |
| Transporte | ⚫ Gris Oscuro | `#6b7280` |
| Comunicaciones | 🔴 Rosa | `#ec4899` |

## 📁 Estructura

```
ptel-simbologia/
├── src/
│   ├── icons/           # Componentes React de iconos
│   ├── markers/         # Marcadores para mapas (SVG/PNG)
│   └── styles/          # Estilos y colores
├── exports/
│   ├── svg/             # SVGs optimizados para QGIS
│   ├── png/             # PNGs en múltiples tamaños
│   └── qgis/            # Estilos .qml para QGIS
├── docs/
│   └── catalogo.html    # Catálogo visual interactivo
└── package.json
```

## 🚀 Uso

### En React (norm-coord-ptel)

```tsx
import { Fire } from '@phosphor-icons/react';
import { IconFlameFilled } from '@tabler/icons-react';

// Phosphor (principal)
<Fire weight="fill" size={24} color="#dc2626" />

// Tabler (alternativa)
<IconFlameFilled size={24} color="#dc2626" />
```

### En QGIS

1. Copiar SVGs de `exports/svg/` a carpeta de símbolos QGIS
2. Importar estilos `.qml` de `exports/qgis/`
3. Aplicar simbología por tipología de infraestructura

## 📋 Roadmap

- [ ] Mapeo completo de tipologías PTEL → iconos
- [ ] Exportación SVG optimizada para QGIS
- [ ] Generación PNG en múltiples tamaños (14px, 18px, 24px, 32px)
- [ ] Catálogo visual interactivo
- [ ] Estilos .qml para QGIS
- [ ] Integración con norm-coord-ptel

## 📄 Licencia

MIT - Los iconos base provienen de Phosphor Icons y Tabler Icons (ambas MIT).

## 🔗 Relacionado

- [norm-coord-ptel](https://github.com/luismgarcia/norm-coord-ptel) - Sistema de normalización de coordenadas PTEL
