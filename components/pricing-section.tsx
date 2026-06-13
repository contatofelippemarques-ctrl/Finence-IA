"use client";

import { Check, Crown } from "lucide-react";
import { plans } from "@/lib/subscriptions";
import { useLanguage } from "@/lib/i18n/language-provider";

export function PricingSection() {
  const { dictionary } = useLanguage();
  const labels = {
    free: dictionary.pricing.free,
    premium: dictionary.pricing.premium,
    ultra: dictionary.pricing.ultra
  };

  return (
    <section id="pricing" className="py-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-violet-200/70">SaaS billing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{dictionary.pricing.title}</h2>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 p-1 text-sm">
          <span className="inline-block rounded-full bg-white px-4 py-2 text-slate-950">{dictionary.pricing.monthly}</span>
          <span className="inline-block px-4 py-2 text-white/55">{dictionary.pricing.yearly}</span>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.id} className={`glass-card rounded-3xl p-6 ${plan.id === "premium" ? "ring-2 ring-teal-300/40" : ""}`}>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">{labels[plan.id]}</h3>
              {plan.id !== "free" && <Crown className="h-5 w-5 text-amber-300" />}
            </div>
            <p className="mt-4 text-5xl font-semibold">
              ${plan.priceMonthly}
              <span className="text-base text-white/45">/mo</span>
            </p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-white/65">
                  <Check className="h-4 w-4 flex-none text-teal-300" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-7 w-full rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-100">{dictionary.pricing.upgrade}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
