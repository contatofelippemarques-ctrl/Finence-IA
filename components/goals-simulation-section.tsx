"use client";

import { Calculator, Flag, HeartPulse, PiggyBank } from "lucide-react";
import { demoProfile } from "@/lib/finance/mock-data";
import { useLanguage } from "@/lib/i18n/language-provider";
import { formatCurrency } from "@/lib/utils";

export function GoalsSimulationSection() {
  const { dictionary, locale } = useLanguage();

  const simulations = [
    { icon: Calculator, title: "Loan simulation", value: "$18,000 / 36 months", note: "Monthly payment stress test with debt-to-income guardrails." },
    { icon: PiggyBank, title: "Savings projection", value: "$420/mo", note: "Emergency reserve reaches 3 months in roughly 9 contribution cycles." },
    { icon: HeartPulse, title: "Emergency mode", value: "Protect essentials", note: "Pause non-essential spending and prioritize rent, food, transport and minimum debt payments." }
  ];

  return (
    <section id="goals" className="py-8">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.35em] text-teal-200/70">Planning engine</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{dictionary.nav.goals}</h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card rounded-3xl p-6">
          <div className="mb-4 flex items-center gap-3">
            <Flag className="h-5 w-5 text-teal-300" />
            <h3 className="text-xl font-semibold">Goal system</h3>
          </div>
          <div className="space-y-4">
            {demoProfile.goals.map((goal) => {
              const progress = Math.round((goal.current / goal.target) * 100);
              return (
                <div key={goal.id} className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
                  <div className="flex justify-between gap-3">
                    <span className="font-medium">{goal.title}</span>
                    <span className="text-white/60">{progress}%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-gradient-to-r from-teal-300 to-violet-400" style={{ width: `${progress}%` }} />
                  </div>
                  <p className="mt-2 text-sm text-white/45">
                    {formatCurrency(goal.current, locale)} / {formatCurrency(goal.target, locale)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {simulations.map((simulation) => (
            <div key={simulation.title} className="glass-card rounded-3xl p-5">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
                <simulation.icon className="h-5 w-5 text-violet-200" />
              </div>
              <h3 className="mt-5 font-semibold">{simulation.title}</h3>
              <p className="mt-2 text-2xl font-semibold">{simulation.value}</p>
              <p className="mt-3 text-sm leading-6 text-white/50">{simulation.note}</p>
              <button className="mt-5 rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/75">{dictionary.common.simulate}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
