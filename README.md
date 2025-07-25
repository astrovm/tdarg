# Tdarg

ADHD information hub for Argentina. Find real-time medication prices, healthcare specialists, legal analysis, and comprehensive educational guides all in one place.

## What it does

- **Real-time Medication Pricing**: Fetches current prices for ADHD medications (methylphenidate, atomoxetine) from Farmacity with intelligent caching
- **Healthcare Specialists Directory**: Curated database of ADHD specialists across Argentina organized by province
- **Legal Analysis**: In-depth analysis of Argentine laws affecting ADHD patients, including conflicts between electronic prescription laws and controlled substance regulations
- **Educational Guides**: Comprehensive information on diagnosis, treatment, adult ADHD, comorbidities, myths, and practical resources

## Key Features

- Live medication price updates with 15-minute caching
- Professional medical directory with specialist information
- Detailed legislative analysis with impact assessments
- Comprehensive ADHD educational content based on medical consensus
- Dark/light mode support
- Mobile-responsive design
- Server-side rendering for optimal performance

## Development

```bash
bun install
bun dev
```

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Bun

## Scripts

```bash
bun dev          # Development server
bun build        # Production build
bun start        # Production server
bun lint         # Code linting
bun run download-laws  # Download legal documents
```