# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application called "TDAH Argentina" - a comprehensive information portal about ADHD (Attention Deficit Hyperactivity Disorder) in Argentina. The site provides real-time medication pricing, medical guides, legislation tracking, and professional directories.

## Development Commands

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Architecture Overview

### Core Technology Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Package Manager**: pnpm
- **TypeScript**: Full TypeScript implementation
- **Theme**: Dark/light mode with next-themes

### Key Features
1. **Real-time Medication Pricing**: Fetches ADHD medication prices from Farmacity API
2. **AI-powered Legislation Tracking**: Analyzes congressional bills related to ADHD
3. **Professional Directory**: Database of ADHD specialists
4. **Medical Guides**: Clinical guidelines and diagnostic information
5. **Research Portal**: Scientific papers and studies

### Application Structure

```
app/
├── api/
│   ├── legislacion-tracker/    # AI legislation analysis endpoint
│   └── medicamentos-precios/   # Medication pricing API
├── diagnosticos/               # Diagnostic information pages
├── guias/                     # Medical guides
├── investigacion/             # Research papers
├── legislacion/               # Legislation tracking
├── medicos/                   # Medical professionals directory
└── precios/                   # Medication pricing interface
```

### Key Components

- **Header (`components/header.tsx`)**: Main navigation with responsive mobile menu
- **Theme Provider**: Global dark/light theme management
- **UI Components**: Complete shadcn/ui component library in `components/ui/`

### Custom Hooks

- **`use-legislacion-tracker.ts`**: Manages AI-powered legislation analysis
- **`use-medicamentos-reales.ts`**: Handles real-time medication pricing with caching
- **`use-mobile.tsx`**: Responsive design utilities

### API Endpoints

#### `/api/medicamentos-precios`
- **GET**: Fetches current medication prices from Farmacity
- **DELETE**: Clears medication price cache
- **Caching**: 15-minute TTL with fallback mechanisms
- **Search Terms**: atomoxetina, metilfenidato

#### `/api/legislacion-tracker`
- **GET**: Returns AI-analyzed congressional bills
- **POST**: Reports problematic legislation
- **AI Analysis**: Scores bills on privacy risks, real benefits, and impact level
- **Caching**: 1-hour TTL

### Data Flow

1. **Medication Pricing**: Farmacity API → Cache → React Hook → UI
2. **Legislation Analysis**: Congress scraping → AI analysis → Cache → React Hook → UI
3. **Theme Management**: next-themes → Theme Provider → Components

### Important Implementation Details

- **Error Handling**: Comprehensive error boundaries with fallback to cached data
- **Loading States**: Skeleton components and loading indicators throughout
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Performance**: Automatic caching, request deduplication, and timeout handling
- **SEO**: Proper metadata and Spanish language support

### Development Notes

- The app uses server-side rendering with client-side hydration
- All API calls include proper error handling and timeout mechanisms
- The medication pricing system includes duplicate detection and data normalization
- The AI legislation analysis uses keyword-based scoring with privacy risk assessment
- Components follow consistent naming conventions and include proper TypeScript types

### Testing and Quality

- No specific test framework is configured yet
- ESLint is configured via `pnpm lint`
- TypeScript strict mode is enabled
- The app includes proper error boundaries and loading states