# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router routes and layout. Route folders are lowercase with segment files like `page.tsx` and `layout.tsx`.
- `components/`: Reusable UI components (PascalCase files). Uses Tailwind and shadcn/ui.
- `lib/`: Utilities, helpers, and shared logic.
- `public/`: Static assets (images, icons, `robots.txt`).
- `styles/`: Global styles and Tailwind entry.
- `data/` and `hooks/`: Local data sources and React hooks.
- `scripts/`: Maintenance scripts (e.g., `download-laws.ts`).

## Build, Test, and Development Commands
```bash
bun dev        # Run the local dev server (Turbopack)
bun build      # Create a production build
bun start      # Start the production server
bun lint       # Lint the codebase with Next/ESLint
bun run download-laws  # Update legal documents dataset
```
Notes:
- The `download-laws` script references a TypeScript source (`scripts/download-laws.ts`). If invoking via Node, ensure it’s compiled to JS or use a TS runner (e.g., `tsx scripts/download-laws.ts`).
- pnpm is also supported: `pnpm dev|build|start|lint`.

## Coding Style & Naming Conventions
- TypeScript: `strict` mode is enabled (`tsconfig.json`). Prefer explicit types on public APIs.
- Components: PascalCase; route segments in `app/` are lowercase-kebab.
- Imports: use the `@/` alias for project-root imports.
- Styling: Tailwind CSS; keep class lists readable (group by purpose). 
- Linting: `bun lint` (Next.js ESLint). Fix warnings before submitting.

## Testing Guidelines
- No formal test suite is configured yet. If adding tests, prefer Vitest + Testing Library.
- Naming: co-locate as `*.test.ts(x)` near the source or under `tests/`.
- Aim for coverage of utilities in `lib/` and critical UI interactions.

## Commit & Pull Request Guidelines
- Commit messages: follow Conventional Commits (e.g., `feat:`, `fix:`, `refactor:`). Keep subjects imperative and concise.
- Pull requests should include: clear description, linked issues, scope of change, and screenshots for UI changes.
- CI expectations: run `bun lint` and `bun build` locally before opening or updating a PR.

## Security & Configuration Tips
- Use `.env.local` for secrets; expose client vars with `NEXT_PUBLIC_`.
- Never commit secrets or `.env*` files. Store large assets in `public/`.
