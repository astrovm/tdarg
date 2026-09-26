# Tdarg

ADHD information hub for Argentina. Find real-time medication prices, healthcare specialists, legal analysis, and comprehensive educational guides all in one place.

## What it does

- **Real-time Medication Pricing**: Current Farmacity prices for ADHD medications (methylphenidate, lisdexamfetamine, atomoxetine and off-label options), rendered on the server and refreshed every 15 minutes
- **Healthcare Specialists Directory**: Curated database of ADHD specialists across Argentina organized by province
- **Legal Analysis**: In-depth analysis of Argentine laws affecting ADHD patients, including conflicts between electronic prescription laws and controlled substance regulations
- **Educational Guides**: Comprehensive information on diagnosis, treatment, adult ADHD, comorbidities, myths, and practical resources

## Key Features

- Medication prices cached for 15 minutes in Next's data cache, with the last known prices shown if Farmacity is down
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

- Next.js 16 with App Router
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
bun lint         # ESLint
bun typecheck    # TypeScript
bun test         # Unit tests
bun run download-laws  # Download legal documents
```