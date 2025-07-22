# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application called "Tdarg" (TDAH Argentina) - a comprehensive information portal about ADHD (Attention Deficit Hyperactivity Disorder) in Argentina. The site provides real-time medication pricing, medical professional directories, diagnostic information, and intelligent legislation analysis.

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

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Package Manager**: Bun
- **TypeScript**: Full TypeScript implementation
- **Theme**: Dark/light mode with next-themes

### Key Features

1. **Real-time Medication Pricing**: Fetches ADHD medication prices from Farmacity API
2. **AI-powered Legislation Analysis**: Analyzes approved laws and congressional bills related to ADHD
3. **Professional Directory**: Database of ADHD specialists
4. **Diagnostic Information**: Clinical guidelines and diagnostic tools

### Application Structure

\`\`\`
app/
├── api/
│ ├── legislacion-tracker/ # AI legislation tracking endpoint
│ └── medicamentos-precios/ # Medication pricing API
├── legislacion/ # Legislation analysis and tracking
├── especialistas/ # Medical professionals directory
└── precios/ # Medication pricing interface
\`\`\`

### Key Components

- **Header (`components/header.tsx`)**: Main navigation with responsive mobile menu
- **Theme Provider**: Global dark/light theme management
- **UI Components**: Complete shadcn/ui component library in `components/ui/`

### Custom Hooks

- **`use-legislacion-tracker.ts`**: Manages AI-powered legislation analysis of congressional projects
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
2. **Legislation Analysis**: Static data with AI analysis → React Hook → UI
3. **Theme Management**: next-themes → Theme Provider → Components

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
- **Current focus**: Only 3 main sections - Prices, Doctors, and Legislation
- **Removed sections**: Guides and Research (files completely removed from codebase)

### Testing and Quality

- No specific test framework is configured yet
- ESLint is configured via `bun run lint`
- TypeScript strict mode is enabled
- The app includes proper error boundaries and loading states

### Key Files and Services

#### Core APIs

- **`/app/api/medicamentos-precios/route.ts`**: Medication pricing from Farmacity with caching and error handling

#### Main Pages

- **`/app/legislacion/page.tsx`**: Legislation analysis interface displaying laws, problems, and proposed solutions
- **`/app/precios/page.tsx`**: Medication pricing interface with real-time Farmacity integration
- **`/app/especialistas/page.tsx`**: Medical professionals directory

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

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
