# Tdarg

ADHD information hub for Argentina. Find real-time medication prices, healthcare specialists, and legal analysis all in one place.

## What it does

- **Real-time Medication Pricing**: Fetches current prices for ADHD medications (methylphenidate, atomoxetine) from Farmacity with intelligent caching
- **Healthcare Specialists Directory**: Curated database of ADHD specialists across Argentina organized by province
- **Legal Analysis**: In-depth analysis of Argentine laws affecting ADHD patients, including conflicts between electronic prescription laws and controlled substance regulations

## Key Features

- Live medication price updates with 15-minute caching
- Professional medical directory with specialist information
- Detailed legislative analysis with impact assessments
- Dark/light mode support
- Mobile-responsive design
- Server-side rendering for optimal performance

## Development

```bash
bun install
bun dev
```

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Bun

## Scripts

```bash
bun dev          # Development
bun build        # Production
bun lint         # Code check
```