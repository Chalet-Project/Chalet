---
applyTo: '**'
---
# Copilot Instructions for Chalet Project

## Architecture Overview
- **Monorepo** managed by Turborepo, with all code in `chalet/`
- **Frontend**: `chalet/apps/web` (Next.js, TailwindCSS, DaisyUI)
- **Backend**: `chalet/apps/server` (Hono, tRPC, Drizzle ORM, PostgreSQL)
- **Shared code**: Each app has its own `lib/` and `utils/` for local utilities and logic
- **Authentication**: Email/password via Better Auth, see `server/src/lib/auth.ts` and `web/src/components/sign-in-form.tsx`
- **Database**: PostgreSQL, schema in `server/src/db/schema/`, managed with Drizzle ORM

## Key Workflows
- **Install dependencies**: `bun install` (run in `chalet/`)
- **Start all apps (dev)**: `bun dev`
- **Start only web**: `bun dev:web`
- **Start only server**: `bun dev:server`
- **Build all apps**: `bun build`
- **Type checking**: `bun check-types`
- **Database migration**: `bun db:push`
- **Database studio**: `bun db:studio`
- **Generate PWA assets**: `cd apps/web && bun generate-pwa-assets`

## Project Conventions & Patterns
- **TypeScript everywhere**: All code is type-checked; use types from `schema/` and `lib/` for API and DB
- **tRPC for API**: End-to-end typesafe API between web and server, see `server/src/routers/` and `web/src/utils/trpc.ts`
- **Hono for server**: API routes and middleware in `server/src/`
- **UI**: Use DaisyUI components in `web/src/components/ui/`
- **PWA**: Manifest and icons in `web/public/favicon/` and `web/src/app/manifest.ts`
- **Environment config**: Secrets and DB config in `server/.env` (not committed)
- **Monorepo scripts**: All major scripts are in `chalet/package.json` and use Bun

## Integration Points
- **Frontend ↔ Backend**: tRPC client in `web/src/utils/trpc.ts` communicates with server routers in `server/src/routers/`
- **Database**: Drizzle ORM models in `server/src/db/schema/`, used in server logic
- **Auth**: Shared logic in `server/src/lib/auth.ts` and UI in `web/src/components/sign-in-form.tsx`

## Examples
- Add a new API route: create a router in `server/src/routers/`, expose via tRPC, consume in `web/src/utils/trpc.ts`
- Add a new DB model: update `server/src/db/schema/`, run `bun db:push`
- Add a new UI component: place in `web/src/components/` or `web/src/components/ui/`

## References
- [chalet/README.md](../README.md) — Monorepo and Docker info
- [chalet/README.md](../chalet/README.md) — Stack, scripts, and project structure

---
If any workflow or pattern is unclear, ask for clarification or check the referenced files for examples.
