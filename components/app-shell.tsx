"use client";

import { motion } from "framer-motion";
import { BarChart3, Bot, Crown, LayoutDashboard, ShieldCheck, Sparkles, Target, WalletCards } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/lib/i18n/language-provider";
import { cn } from "@/lib/utils";

const navIcons = {
  chat: Bot,
  dashboard: LayoutDashboard,
  income: Sparkles,
  goals: Target,
  pricing: Crown,
  admin: ShieldCheck
};

export function AppShell({ children }: { children: React.ReactNode }) {
  const { dictionary } = useLanguage();
  const nav = [
    ["chat", dictionary.nav.chat],
    ["dashboard", dictionary.nav.dashboard],
    ["income", dictionary.nav.income],
    ["goals", dictionary.nav.goals],
    ["pricing", dictionary.nav.pricing],
    ["admin", dictionary.nav.admin]
  ] as const;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="subtle-grid pointer-events-none absolute inset-x-0 top-0 h-[36rem] opacity-40" />
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-white/10 bg-slate-950/65 p-5 backdrop-blur-2xl lg:block">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-teal-300 to-violet-400 text-slate-950 shadow-lg shadow-teal-500/20">
            <WalletCards className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold tracking-tight">{dictionary.brand}</p>
            <p className="text-xs text-white/45">{dictionary.tagline}</p>
          </div>
        </div>

        <nav className="mt-9 space-y-2">
          {nav.map(([id, label], index) => {
            const Icon = navIcons[id];
            return (
              <motion.a
                key={id}
                href={`#${id}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm text-white/65 transition hover:bg-white/10 hover:text-white",
                  id === "chat" && "bg-white/10 text-white"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </motion.a>
            );
          })}
        </nav>

        <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/10 bg-white/[0.08] p-4">
          <div className="mb-3 flex items-center gap-2 text-sm text-white">
            <BarChart3 className="h-4 w-4 text-teal-300" />
            Financial score
          </div>
          <div className="h-2 rounded-full bg-white/10">
            <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-teal-300 to-violet-400" />
          </div>
          <p className="mt-3 text-xs text-white/45">78/100 - habit momentum rising</p>
        </div>
      </aside>

      <main className="relative z-10 px-4 py-4 lg:pl-[19rem]">
        <header className="sticky top-3 z-20 mx-auto mb-5 flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-slate-950/55 px-4 py-3 backdrop-blur-2xl">
          <div className="flex items-center gap-3 lg:hidden">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-teal-300 to-violet-400 text-slate-950">
              <WalletCards className="h-5 w-5" />
            </div>
            <span className="font-semibold">{dictionary.brand}</span>
          </div>
          <div className="hidden text-sm text-white/55 lg:block">{dictionary.hero.eyebrow}</div>
          <LanguageSwitcher compact />
        </header>
        <div className="mx-auto max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
