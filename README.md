# Finance IA

Finance IA is a premium AI-powered financial assistant SaaS scaffold built with Next.js, React, TypeScript, TailwindCSS, Framer Motion, Supabase/PostgreSQL, NextAuth, and payment-provider integration points.

## Core product surfaces

- ChatGPT-style financial assistant with fixed-height internal scroll, saved conversations, search, delete, thinking state, and streaming text effect.
- Multilingual architecture for Portuguese, English, Spanish, German, French, Italian, Japanese, Chinese, Korean, Arabic, and Russian.
- Automatic browser-language detection, manual language switching, RTL support for Arabic, and localized AI response tone.
- First-user conversational onboarding to collect income, debts, expenses, goals, savings, work type, habits, emergency reserve, and difficulties.
- Financial dashboard with balance, income, expenses, financial score, category chart, predictions, debts, notifications, and alerts.
- Natural-language finance parser for expenses, income, debts, goals, loan requests, and extra-income intent.
- Extra Income AI section with practical side-income ideas based on country, time, skills, and user context.
- Goals, savings, loan simulation, emergency-mode, debt overview, and spending analysis UI.
- Admin panel with CEO, Manager, and Employee permissions plus multilingual AI training entries.
- SaaS plans for Free, Premium, and Ultra with daily message-limit logic.
- Stripe, Mercado Pago, and PayPal API route foundations.
- Supabase/PostgreSQL schema with RLS policies for profiles, chat history, messages, transactions, debts, goals, subscriptions, notifications, message usage, and AI training.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Environment

Copy `.env.example` to `.env.local` and fill the provider keys you plan to use.

## Database

Run `supabase/schema.sql` in Supabase SQL editor or through your migration pipeline. The schema is designed for Supabase Auth users and enables row-level security for user-owned financial data.

## Production AI integration

The current AI layer is a deterministic architecture-ready engine in `lib/finance/ai-engine.ts`. Replace or augment it with your preferred model provider by keeping:

1. user locale in the prompt;
2. financial profile context;
3. tool outputs for detected transactions, debts, goals, and alerts;
4. subscription usage limits before model calls;
5. structured JSON metadata for dashboard updates.
