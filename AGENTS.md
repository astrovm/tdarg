# AGENTS.md — Repository Guide

Single source of truth for contributors and coding agents working in this repo.

## 1) Project Overview

**Tdarg** is a Next.js application focused on TDAH (ADHD) information in Argentina.
Primary product areas:
- Medication prices (`/precios`) with real-time data integration.
- Specialist directory (`/especialistas`).
- Legislation analysis (`/legislacion`).
- Educational guides (diagnosis, treatments, adultos, comorbilidades, autismo, impacto, mitos, recursos).

## 2) Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript (`strict` mode)
- **Styling**: Tailwind CSS + shadcn/ui + Radix
- **Package manager**: Bun (pnpm also works)
- **Theme**: `next-themes` (light/dark/system)

## 3) Repository Structure

- `app/`: App Router pages, layouts, and API routes.
- `components/`: Reusable UI components (PascalCase files).
- `components/ui/`: shadcn/ui primitives.
- `hooks/`: Client hooks (data orchestration/UI behavior).
- `lib/`: Shared utilities and domain logic.
- `data/leyes/`: Raw legal documents (HTML/PDF).
- `data/resumenes/`: Markdown summaries of legal docs/research.
- `scripts/`: Maintenance scripts (e.g. legal download/update).
- `public/`: Static assets.
- `styles/`: Global styles/Tailwind entry.

## 4) Commands

```bash
bun install
bun dev
bun build
bun start
bun lint
bun run download-laws
```

Alternative package manager:

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

Notes:
- `download-laws` points to `scripts/download-laws.ts`.
- If using Node directly, use TS runner (`tsx`) or compile first.

## 5) Conventions

### Naming and Files
- Route folders in `app/`: lowercase or lowercase-kebab.
- Component files: PascalCase.
- Prefer editing existing files over creating new ones.

### Imports and Types
- Use `@/` path alias from project root.
- Keep strict typing; add explicit types for public APIs.

### Styling
- Use Tailwind utilities.
- Keep class lists readable/grouped by purpose.

### Lint & Quality
- Run `bun lint` before submitting changes.
- Fix lint warnings/errors before handoff.

## 6) Testing Guidance

- There is no formal test suite currently configured.
- If adding tests, prefer **Vitest + Testing Library**.
- Co-locate tests as `*.test.ts` / `*.test.tsx` or place under `tests/`.
- Prioritize tests for utilities in `lib/` and critical UI interactions.

## 7) PR and Commit Rules

- Use Conventional Commits (`feat:`, `fix:`, `refactor:`, `chore:`, etc.).
- PRs should include:
  - Scope and rationale.
  - Linked issues (if applicable).
  - Screenshots for visible UI changes.
  - Validation steps run locally.
- Expected local checks for meaningful code changes:
  - `bun lint`
  - `bun build`

## 8) Architecture Notes

### Pricing system
- API route: `app/api/medicamentos-precios/route.ts`.
- Client consumption hook: `hooks/use-medicamentos-reales.ts`.
- Includes caching, deduplication, timeout handling, and fallback logic.

### Legislation system
- Structured analysis source: `lib/legislacion-data.ts`.
- UI page: `app/legislacion/page.tsx`.
- Source documents in `data/leyes/`; summaries in `data/resumenes/`.
- Scripted updates via `scripts/download-laws.ts`.

### UI architecture
- Main navigation in `components/header.tsx`.
- Shared design system under `components/ui/`.
- Mobile/theme utilities in hooks/providers.

## 9) Security and Configuration

- Keep secrets in `.env.local` only.
- Expose browser-safe vars with `NEXT_PUBLIC_` prefix.
- Never commit `.env*` files or secrets.

## 10) Agent Operating Reminders

- Do what was requested — no extra speculative changes.
- Do not create docs/files unless requested or required.
- Prefer updating current files over introducing new ones.
- Keep changes minimal, reviewable, and scoped.
