# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application called "Tdarg" (TDAH Argentina) - a comprehensive information portal about ADHD (Attention Deficit Hyperactivity Disorder) in Argentina. The site provides real-time medication pricing, medical professional directories, intelligent legislation analysis, and extensive educational guides covering diagnosis, treatment, adult ADHD, comorbidities, and other related topics.

## Development Commands

\`\`\`bash
# Install dependencies
bun install

# Development server
bun dev

# Production build
bun run build

# Start production server
bun start

# Lint code
bun lint

# Download legal documents (laws and decrees)
bun run download-laws
\`\`\`

## Architecture Overview

### Core Technology Stack

- **Framework**: Next.js 15.2.4 with App Router and React 19
- **Styling**: Tailwind CSS with complete shadcn/ui design system (32+ components)
- **Package Manager**: Bun for superior performance and dependency management
- **TypeScript**: Full TypeScript 5 implementation with strict mode
- **Theme**: Dark/light mode with next-themes and CSS variable theming
- **UI Library**: Comprehensive Radix UI primitives with custom styling

### Key Features

1. **Real-time Medication Pricing**: Fetches ADHD medication prices from Farmacity API
2. **Legislation Analysis**: Comprehensive analysis of ADHD-related laws in Argentina
3. **Professional Directory**: Database of ADHD specialists
4. **Educational Guides**: Extensive content on diagnosis, treatment, adult ADHD, comorbidities, myths, and resources

### Application Structure

\`\`\`
app/
├── api/
│   └── medicamentos-precios/    # Medication pricing API
├── legislacion/                 # Legislation analysis interface
├── especialistas/               # Medical professionals directory
├── precios/                     # Medication pricing interface
├── adultos/                     # Adult ADHD guide
├── autismo/                     # ADHD and Autism guide
├── comorbilidades/              # Comorbidities guide
├── diagnostico/                 # Diagnosis guide
├── impacto/                     # Impact guide
├── mitos/                       # Myths guide
├── recursos/                    # Resources guide
└── tratamientos/                # Treatments guide
\`\`\`

### Key Components

- **Header (`components/header.tsx`)**: Main navigation with responsive mobile menu and dropdown for guides
  - Direct links: Precios, Especialistas, Legislación, Recursos
  - Dropdown "Guías": Diagnóstico, Tratamientos, TDAH Adulto, Comorbilidades, TDAH y Autismo, Impacto, Mitos
- **Theme Provider**: Global dark/light theme management
- **UI Components**: Complete shadcn/ui component library in `components/ui/`

### Custom Hooks and Architecture Patterns

- **`use-medicamentos-reales.ts`**: Real-time medication pricing with sophisticated caching (15-min TTL), request deduplication, and abort controller management
- **`use-mobile.tsx`**: Responsive design utilities with breakpoint detection
- **`use-toast.ts`**: Toast notification system integrated with sonner

**Key Patterns:**
- Custom hooks abstract business logic from UI components
- Comprehensive error handling with fallback to cached data
- Request throttling and timeout handling (25-second API timeout)
- Progressive loading states with skeleton components

### API Endpoints

#### `/api/medicamentos-precios`

- **GET**: Fetches medication prices from Farmacity API with intelligent scraping
- **DELETE**: Clears medication price cache
- **Implementation Details**:
  - 15-minute TTL caching with in-memory fallback
  - Data deduplication and normalization
  - Request throttling protection
  - AbortController for request cancellation
  - Search terms: "atomoxetina", "metilfenidato"
  - Graceful error handling with cached data fallback


### Data Flow Architecture

1. **Medication Pricing Flow**:
   - Farmacity API → Server-side caching (15min TTL) → Client hook → UI components
   - Auto-refresh every 20 minutes with loading states
   - Request deduplication prevents concurrent calls
   - Fallback to cached data on API failures

2. **Legislation Analysis Flow**:
   - Static TypeScript data in `lib/legislacion-data.ts` → Direct import → UI rendering
   - Document downloads via `scripts/download-laws.ts` → `data/leyes/` storage
   - Markdown summaries in `data/resumenes/` for detailed analysis

3. **Theme Management Flow**:
   - next-themes → CSS variables → Tailwind utilities → Component styling
   - System/light/dark detection with persistent storage

### Important Implementation Details

- **Error Handling**: Comprehensive error boundaries with fallback to cached data
- **Loading States**: Skeleton components and loading indicators throughout
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Performance**: Automatic caching, request deduplication, and timeout handling
- **SEO**: Proper metadata and Spanish language support
- **Legislation System**: Static analysis with manually curated data

### Development Notes

- The app uses server-side rendering with client-side hydration
- All API calls include proper error handling and timeout mechanisms
- The medication pricing system includes duplicate detection and data normalization
- The AI legislation analysis uses keyword-based scoring with privacy risk assessment
- Components follow consistent naming conventions and include proper TypeScript types
- **Current focus**: Three core sections (Prices, Doctors, Legislation) plus comprehensive educational guides
- **Educational content**: Extensive guides covering diagnosis, treatment, adult ADHD, comorbidities, autism, myths, impact, and resources
- **Navigation structure**: Main sections accessible directly, guides grouped under dropdown menu

### Testing and Quality

- No specific test framework is configured yet
- ESLint is configured via `bun lint`
- TypeScript strict mode is enabled with full type coverage
- The app includes comprehensive error boundaries and loading states
- Code quality enforced through TypeScript compiler and ESLint rules

### Key Files and Services

#### Core APIs

- **`/app/api/medicamentos-precios/route.ts`**: Medication pricing from Farmacity with caching and error handling

#### Main Pages

- **`/app/legislacion/page.tsx`**: Legislation analysis interface displaying laws, problems, and proposed solutions
- **`/app/precios/page.tsx`**: Medication pricing interface with real-time Farmacity integration
- **`/app/especialistas/page.tsx`**: Medical professionals directory

#### Educational Guide Pages

- **`/app/adultos/page.tsx`**: Comprehensive guide on adult ADHD manifestations, diagnosis, and impact
- **`/app/diagnostico/page.tsx`**: Diagnostic criteria, process, and evaluation guidelines
- **`/app/tratamientos/page.tsx`**: Treatment options including medications and non-pharmacological approaches
- **`/app/comorbilidades/page.tsx`**: Information on conditions commonly associated with ADHD
- **`/app/autismo/page.tsx`**: Relationship between ADHD and Autism Spectrum Disorder
- **`/app/mitos/page.tsx`**: Common myths and misconceptions about ADHD debunked
- **`/app/impacto/page.tsx`**: Social, economic, and personal impact of ADHD
- **`/app/recursos/page.tsx`**: Additional resources, support groups, and helpful materials

#### Core Hooks

- **`/hooks/use-medicamentos-reales.ts`**: Handles real-time medication pricing with caching
- **`/hooks/use-mobile.tsx`**: Responsive design utilities (also available as UI component)

#### Legal Document Management

- **`/scripts/download-laws.ts`**: Downloads and caches legal documents from InfoLeg government site
- **`/data/leyes/`**: Cached legal documents with metadata (HTML/PDF format)
- **`/data/resumenes/`**: Markdown summaries of key legal documents and research papers
- **`/lib/legislacion-data.ts`**: Structured TypeScript data for laws, problems, and solutions

### Legal Document System

The legislation section provides comprehensive analysis of TDAH-related laws in Argentina:

1. **Document Analysis**: Detailed analysis of laws identifying problematic articles and their impact
2. **Impact Assessment**: Scoring system evaluating real-world effects on TDAH patients
3. **Solution Proposals**: Structured proposals for legislative improvements
4. **Document Management**: Organized storage of official documents, summaries, and analysis
5. **Download System**: Automated downloading of legal documents from official government sources

Key focus: Resolving conflicts between Ley 27.553 (electronic prescriptions) and Ley 19.303 (controlled substances) that complicate TDAH medication access. Recent addition of Resolución 2214/2025 analysis shows potential resolution of these conflicts.

### Legal Document Updates

When updating legal documents in the legislation section:
- The main law analysis is stored in `/lib/legislacion-data.ts` in the `leyes` array (not in page.tsx)
- Each law entry includes detailed `analisisIA` and `analisisDetallado` sections
- The legislation page at `/app/legislacion/page.tsx` imports and displays this data
- Complete legal documents and summaries are stored in `/data/resumenes/` as markdown files
- The download script `/scripts/download-laws.ts` downloads official documents to `/data/leyes/`
- Always include comprehensive legal analysis with specific article problems and solutions

### Data Architecture

The application uses a structured approach for legal data:
- **Source Documents**: `/data/leyes/` contains official HTML/PDF documents
- **Analysis Data**: `/lib/legislacion-data.ts` contains structured analysis with TypeScript types
- **Summaries**: `/data/resumenes/` contains markdown summaries of key documents
- **UI Components**: React components in `/app/legislacion/page.tsx` render the structured data

### Content Management

When updating legislation content:
- Modify the data structures in `/lib/legislacion-data.ts` for law analysis
- Update markdown files in `/data/resumenes/` for document summaries
- The UI automatically reflects changes through the import system
- Use professional, technical language avoiding sensationalist terms or excessive emojis

## Configuration and Build Details

### Key Configuration Files

- **`next.config.mjs`**: React Strict Mode disabled, error tolerance for rapid development (ignores ESLint and TypeScript build errors for rapid prototyping), optimized image handling with remote patterns
- **`tailwind.config.ts`**: CSS variable-based theming with dark mode support, extended design tokens
- **`tsconfig.json`**: Strict TypeScript configuration with path mapping (`@/*` imports)
- **`package.json`**: Uses Bun as package manager, comprehensive Radix UI component dependencies

### Development Workflow

1. **Code Architecture**: Next.js App Router with TypeScript-first development
2. **Component Development**: shadcn/ui design system with Radix UI primitives
3. **State Management**: Custom React hooks for business logic abstraction
4. **Error Handling**: Comprehensive error boundaries with graceful fallbacks
5. **Performance**: Multi-layer caching, request deduplication, timeout handling

### Performance Optimizations

- **API Caching**: In-memory caching with TTL and fallback mechanisms
- **Request Management**: AbortController, throttling, and deduplication
- **Loading States**: Skeleton components and progressive loading
- **Data Normalization**: Automated cleaning and duplicate detection
- **Theme System**: CSS variables for efficient theme switching

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
