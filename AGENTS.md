# AGENTS.md

## Cursor Cloud specific instructions

Finance IA is a single Next.js 16 (App Router) + React 19 + TypeScript app. There is only one service to run; standard commands live in `README.md` and `package.json` scripts (`dev`, `build`, `start`, `lint`, `typecheck`).

Non-obvious notes for working in this codebase:

- The application code lives on branch `cursor/finance-ia-platform-c2a4`. The `main` branch only contains `README.md`, so base environment/dev work on the feature branch.
- The app runs fully on mock data (`lib/finance/mock-data.ts`) with a deterministic local AI engine (`lib/finance/ai-engine.ts`). No database, AI provider, or payment provider is required to run or test it end-to-end.
- Every variable in `.env.example` is optional for local development; integrations (Supabase, Stripe, Mercado Pago, PayPal, Google OAuth) degrade gracefully when their keys are blank. Copy `.env.example` to `.env.local` (gitignored). Set `NEXTAUTH_SECRET` only if you exercise NextAuth sign-in flows.
- Dev server runs on port 3000 via Turbopack. Core flow to verify: open `http://localhost:3000`, start the financial chat, send a natural-language expense (e.g. "Gastei 50 reais no mercado hoje"), and confirm the assistant records the expense; the dashboard route shows balance/income/expenses/score.
- Uses npm (`package-lock.json`). `npm install` emits an eslint peer-dependency warning and a moderate `npm audit` notice; both are harmless and do not block install, lint, typecheck, or build.
