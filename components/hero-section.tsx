"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/lib/i18n/language-provider";

export function HeroSection() {
  const { dictionary } = useLanguage();

  return (
    <section className="grid gap-8 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-2 text-sm text-teal-100">
          <Sparkles className="h-4 w-4" />
          {dictionary.hero.eyebrow}
        </div>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">{dictionary.hero.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">{dictionary.hero.subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#chat" className="group inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-100">
            {dictionary.hero.cta}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#dashboard" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-white/75 transition hover:bg-white/10">
            {dictionary.hero.secondary}
          </a>
          <LanguageSwitcher />
        </div>
        <div className="mt-8 grid gap-3 text-sm text-white/55 sm:grid-cols-3">
          {["Natural AI finance chat", "Real SaaS architecture", "Global multilingual UX"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-teal-300" />
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="glass-card rounded-[2rem] p-4"
      >
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-teal-300" />
          </div>
          <div className="space-y-3">
            <Bubble role="assistant" text="I noticed food spending is rising gently. Want me to find a painless adjustment?" />
            <Bubble role="user" text="Yes, and I spent $50 on dinner today." />
            <Bubble role="assistant" text="Recorded. Your weekly food budget still has $84 left. A calm next move: cook twice and keep one guilt-free dinner out." />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Bubble({ role, text }: { role: "assistant" | "user"; text: string }) {
  return (
    <div className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-6 ${role === "user" ? "ml-auto bg-white text-slate-950" : "bg-white/[0.08] text-white/70"}`}>
      {text}
    </div>
  );
}
