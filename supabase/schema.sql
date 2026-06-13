-- Finance IA Supabase/PostgreSQL schema
-- Enable pgcrypto for UUID generation.
create extension if not exists pgcrypto;

create type public.user_role as enum ('ceo', 'manager', 'employee', 'user');
create type public.plan_id as enum ('free', 'premium', 'ultra');
create type public.transaction_type as enum ('income', 'expense', 'debt_payment', 'savings');
create type public.training_status as enum ('draft', 'active');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  avatar_url text,
  locale text not null default 'en',
  country text,
  currency text not null default 'USD',
  role public.user_role not null default 'user',
  plan public.plan_id not null default 'free',
  monthly_income numeric(14,2) default 0,
  fixed_expenses numeric(14,2) default 0,
  savings numeric(14,2) default 0,
  emergency_reserve numeric(14,2) default 0,
  work_type text,
  spending_habits text[] default '{}',
  financial_difficulties text[] default '{}',
  onboarding_completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  locale text not null default 'en',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  role text not null check (role in ('assistant', 'user', 'system')),
  content text not null,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create table public.transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  conversation_id uuid references public.conversations(id) on delete set null,
  type public.transaction_type not null,
  category text not null,
  merchant text,
  amount numeric(14,2) not null,
  currency text not null default 'USD',
  occurred_at timestamptz not null default now(),
  note text,
  ai_detected boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.debts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  creditor text not null,
  balance numeric(14,2) not null,
  apr numeric(5,2) not null default 0,
  minimum_payment numeric(14,2) not null default 0,
  due_day integer check (due_day between 1 and 31),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  target numeric(14,2) not null,
  current numeric(14,2) not null default 0,
  due_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  body text not null,
  severity text not null default 'info',
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.message_usage (
  user_id uuid not null references public.profiles(id) on delete cascade,
  usage_date date not null default current_date,
  messages_used integer not null default 0,
  primary key (user_id, usage_date)
);

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  plan public.plan_id not null,
  provider text not null check (provider in ('stripe', 'mercado_pago', 'paypal')),
  provider_customer_id text,
  provider_subscription_id text,
  status text not null default 'inactive',
  interval text not null default 'monthly',
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.ai_training_entries (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  question jsonb not null,
  answer jsonb not null,
  status public.training_status not null default 'draft',
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.conversations enable row level security;
alter table public.messages enable row level security;
alter table public.transactions enable row level security;
alter table public.debts enable row level security;
alter table public.goals enable row level security;
alter table public.notifications enable row level security;
alter table public.message_usage enable row level security;
alter table public.subscriptions enable row level security;
alter table public.ai_training_entries enable row level security;

create policy "Users manage own profile" on public.profiles for all using (auth.uid() = id);
create policy "Users manage own conversations" on public.conversations for all using (auth.uid() = user_id);
create policy "Users manage own messages" on public.messages for all using (auth.uid() = user_id);
create policy "Users manage own transactions" on public.transactions for all using (auth.uid() = user_id);
create policy "Users manage own debts" on public.debts for all using (auth.uid() = user_id);
create policy "Users manage own goals" on public.goals for all using (auth.uid() = user_id);
create policy "Users manage own notifications" on public.notifications for all using (auth.uid() = user_id);
create policy "Users manage own usage" on public.message_usage for all using (auth.uid() = user_id);
create policy "Users read own subscriptions" on public.subscriptions for select using (auth.uid() = user_id);
create policy "Admins read training" on public.ai_training_entries for select using (true);
