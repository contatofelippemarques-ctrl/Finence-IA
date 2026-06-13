"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, KeyRound, Mail, UserCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";

export function OnboardingAuthSection() {
  const { dictionary } = useLanguage();
  const [step, setStep] = useState(0);
  const questions = dictionary.onboarding.questions;

  return (
    <section id="auth" className="grid gap-5 py-8 xl:grid-cols-[1fr_0.9fr]">
      <div className="glass-card rounded-3xl p-6">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-300/15 text-teal-200">
            <UserCircle2 className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{dictionary.onboarding.title}</h2>
            <p className="text-sm text-white/45">{dictionary.onboarding.intro}</p>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
          <p className="text-sm text-white/45">Finance IA</p>
          <motion.p key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-xl leading-8">
            {questions[step]}
          </motion.p>
          <input className="mt-5 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-teal-300/50" placeholder="Type your answer..." />
          <div className="mt-5 flex items-center justify-between">
            <div className="text-sm text-white/45">
              {step + 1}/{questions.length}
            </div>
            <button onClick={() => setStep((current) => (current + 1) % questions.length)} className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950">
              Continue
            </button>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-3xl p-6">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-300/15 text-violet-200">
            <KeyRound className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{dictionary.auth.title}</h2>
            <p className="text-sm text-white/45">{dictionary.auth.subtitle}</p>
          </div>
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950">
          <Camera className="h-4 w-4" />
          {dictionary.auth.google}
        </button>
        <div className="mt-4 space-y-3">
          <label className="block text-sm text-white/55">
            {dictionary.auth.email}
            <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <Mail className="h-4 w-4 text-white/35" />
              <input className="min-w-0 flex-1 bg-transparent outline-none" placeholder="you@financeia.app" />
            </div>
          </label>
          <label className="block text-sm text-white/55">
            {dictionary.auth.password}
            <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <KeyRound className="h-4 w-4 text-white/35" />
              <input type="password" className="min-w-0 flex-1 bg-transparent outline-none" placeholder="••••••••" />
            </div>
          </label>
        </div>
        <div className="mt-5 flex items-center justify-between gap-3 text-sm">
          <a className="text-white/45 hover:text-white" href="/api/auth/signin">
            {dictionary.auth.forgot}
          </a>
          <a href="/api/auth/signin" className="rounded-2xl border border-white/10 px-5 py-3 font-semibold text-white/80">
            {dictionary.auth.signIn}
          </a>
        </div>
      </div>
    </section>
  );
}
