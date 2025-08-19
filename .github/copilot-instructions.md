# GitHub Copilot Coding Instructions

Always follow these instructions first and fallback to additional search and context gathering only if the information here is incomplete or found to be in error.

## Project Overview

Tdarg is a Next.js 15 application providing comprehensive ADHD (TDAH) information for Argentina. It includes real-time medication pricing, medical professional directories, legislation analysis, and educational guides.

## Setup and Dependencies

Install Bun package manager (required):
```bash
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
```

Install all dependencies:
```bash
bun install
```

## Build, Development, and Validation Commands

### Essential Commands (All Tested and Working)

Lint the codebase:
```bash
bun lint
# Takes: ~4 seconds
# NEVER CANCEL: Always wait for completion
```

Build for production:
```bash
bun run build
# Takes: ~30 seconds - NEVER CANCEL
# Timeout: Set 60+ minutes for build commands
# Note: Build may fail due to Google Fonts network restrictions in sandboxed environments
```

Start development server:
```bash
bun dev
# Takes: ~1 second to start
# Runs on: http://localhost:3000
# NEVER CANCEL: Server runs until manually stopped
```

Start production server:
```bash
# Use npx instead of bun for production
npx next start
# Takes: ~1 second to start
# Note: bun start has compatibility issues - always use npx
```

Download legal documents (network dependent):
```bash
bun run download-laws
# Takes: ~30 seconds when network available
# Note: Fails in restricted networks - this is expected behavior
```

### Network Limitations in Sandboxed Environments

The build environment has network restrictions that affect:
- Google Fonts loading (causes build failures)
- External API calls (pharmacies, government sites)
- Legal document downloads

Workarounds documented below.

## Validation Scenarios

Always test these scenarios after making changes:

### Core Page Functionality
Test all main pages load correctly:
```bash
# Start dev server first
bun dev

# Test all pages return HTTP 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000        # Home
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/precios    # Pricing
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/especialistas  # Doctors
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/legislacion    # Legislation
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/diagnostico    # Diagnosis guide
```

### Navigation and UI Testing
Manually verify:
- Header navigation links work correctly
- Mobile menu functions properly  
- Theme toggle (dark/light mode) operates
- All educational guide pages are accessible
- Footer links are functional

### API Endpoint Testing
```bash
# Note: API will return 500 in restricted environments - this is expected
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/api/medicamentos-precios
```

## Critical Build Issues and Solutions

### Google Fonts Network Failure
If build fails with "Failed to fetch Inter from Google Fonts":

1. Temporarily modify `app/layout.tsx`:
```typescript
// Replace:
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// With:
// Fallback for restricted environments
```

2. Update body className:
```typescript
// Replace:
className={inter.className}
// With:
className="font-sans"
```

3. Build will succeed with system fonts
4. Revert changes after testing in unrestricted environment

### Production Server Issues
- Always use `npx next start` instead of `bun start`
- `bun start` has compatibility issues with Next.js 15

## Repository Structure

### Key Directories
- `app/`: Next.js App Router pages and layouts
- `components/`: Reusable UI components (shadcn/ui)
- `lib/`: Utilities and shared logic
- `hooks/`: Custom React hooks
- `scripts/`: Maintenance scripts (TypeScript)
- `data/`: Static data and cached legal documents
- `public/`: Static assets

### Important Files
- `package.json`: Bun-based dependency management
- `next.config.mjs`: Next.js configuration (React Strict Mode enabled)
- `tailwind.config.ts`: CSS framework configuration
- `tsconfig.json`: TypeScript strict mode configuration
- `app/layout.tsx`: Root layout with theme provider

### Script Compilation
The `download-laws` script requires compilation:
```bash
# Compile TypeScript to JavaScript
npx tsc scripts/download-laws.ts --outDir scripts --target es2018 --module commonjs --esModuleInterop

# Then run
bun run download-laws
```

## Development Workflow

1. **Start Development**:
```bash
bun install
bun dev
```

2. **Make Changes**: Edit files as needed

3. **Validate Continuously**:
```bash
bun lint  # Check code quality
```

4. **Before Committing**:
```bash
bun lint           # Must pass - 4 seconds
bun run build      # Must pass - 30 seconds, NEVER CANCEL
```

5. **Test Functionality**: Run validation scenarios above

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Runtime**: React 19  
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Package Manager**: Bun (required)
- **Theme**: Dark/light mode with next-themes

## Educational Content Areas

The application covers:
- Medication pricing (real-time from Farmacity)
- Medical professional directory
- Legal analysis (Argentine ADHD-related laws)
- Diagnostic guides (DSM-5 criteria)
- Treatment options (pharmacological and non-pharmacological)
- Adult ADHD manifestations
- Comorbidities (autism, anxiety, depression)
- Myth-busting and evidence-based information

## Performance Considerations

- API caching: 15-minute TTL for medication prices
- Static generation: Most pages pre-rendered
- Loading states: Skeleton components during data fetching
- Error boundaries: Graceful fallbacks throughout

## Testing Notes

- No formal test framework configured
- Manual functional testing required
- Lint with `bun lint` before all commits
- Visual validation of UI changes mandatory
- Test both development and production builds

## Common Commands Reference

```bash
# Quick start
bun install && bun dev

# Full validation
bun lint && bun run build && npx next start

# Clean rebuild
rm -rf .next && bun run build

# Compile scripts
npx tsc scripts/download-laws.ts --outDir scripts --target es2018 --module commonjs --esModuleInterop
```

## Troubleshooting

### Build Fails
- Check Google Fonts network access
- Verify all imports are correct
- Ensure TypeScript errors are resolved

### Dev Server Won't Start
- Check port 3000 availability
- Verify Node.js and Bun installations
- Clear Next.js cache: `rm -rf .next`

### API Errors
- Expected in sandboxed environments
- External APIs (Farmacity, government sites) blocked
- Test functionality in unrestricted environments

Always run `bun lint` and `bun run build` before submitting changes. Both commands must complete successfully.