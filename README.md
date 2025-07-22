# TDARG - Portal de Información sobre TDAH en Argentina

Portal web especializado que proporciona información actualizada sobre TDAH (Trastorno por Déficit de Atención e Hiperactividad) en Argentina, incluyendo precios de medicamentos, directorio de especialistas y análisis legislativo.

## Características Principales

### 🏥 **Información Médica**
- Directorio de especialistas en TDAH por provincia
- Información sobre diagnóstico y tratamiento
- Consenso médico argentino sobre TDAH en adultos

### 💊 **Precios de Medicamentos**
- Consulta de precios en tiempo real desde Farmacity
- Medicamentos específicos: metilfenidato y atomoxetina
- Comparación de precios y disponibilidad

### ⚖️ **Análisis Legislativo**
- Seguimiento de la Resolución 2214/2025 (recetas electrónicas)
- Análisis de leyes relevantes (19.303, 26.657, 27.553)
- Propuestas de mejora normativa
- Documentos legales completos con análisis técnico

## Tecnologías

- **Framework**: Next.js 15 con App Router
- **Styling**: Tailwind CSS + shadcn/ui
- **Package Manager**: Bun
- **TypeScript**: Implementación completa
- **Tema**: Dark/light mode con next-themes

## Instalación y Desarrollo

```bash
# Instalar dependencias
bun install

# Servidor de desarrollo
bun dev

# Build de producción
bun run build

# Servidor de producción
bun start

# Linting
bun lint
```

## APIs Integradas

### Precios de Medicamentos
- **Endpoint**: `/api/medicamentos-precios`
- **Fuente**: API de Farmacity
- **Caché**: 15 minutos TTL
- **Métodos**: GET (consulta), DELETE (limpia caché)

### Tracker de Legislación
- **Endpoint**: `/api/legislacion-tracker`
- **Funcionalidad**: Análisis de proyectos legislativos
- **Caché**: 1 hora TTL

## Estructura del Proyecto

```
app/
├── api/
│   ├── legislacion-tracker/     # API de seguimiento legislativo
│   └── medicamentos-precios/    # API de precios en tiempo real
├── legislacion/                 # Análisis y tracking legislativo
├── especialistas/              # Directorio de profesionales
└── precios/                    # Interface de consulta de precios

components/
├── ui/                        # Componentes shadcn/ui
└── header.tsx                 # Navegación principal

hooks/
├── use-legislacion-tracker.ts  # Gestión de análisis legislativo
├── use-medicamentos-reales.ts  # Precios con caché
└── use-mobile.tsx             # Utilidades responsive
```

## Características Técnicas

- **SSR**: Server-side rendering con hidratación
- **Caché**: Sistema de caché automático con TTL
- **Error Handling**: Manejo robusto con fallbacks
- **Responsive**: Design mobile-first
- **SEO**: Metadatos optimizados en español
- **Performance**: Deduplicación de requests y timeouts

## Contribuir

Este es un proyecto independiente de análisis e información sobre TDAH en Argentina. 

### Desarrollo Local

1. Clonar el repositorio
2. Instalar dependencias con `bun install`
3. Ejecutar `bun dev` para desarrollo
4. Los cambios se reflejan automáticamente

### Scripts Disponibles

```bash
bun dev          # Desarrollo
bun build        # Build de producción  
bun start        # Servidor de producción
bun lint         # Verificación de código
```

## Licencia

Proyecto independiente de información pública. No representa comunicación oficial de entidades gubernamentales.

---

**Nota**: La información médica y legal es de carácter informativo. Consulte siempre con profesionales especializados para decisiones sobre tratamiento.