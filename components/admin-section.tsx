"use client";

import { DatabaseZap, LockKeyhole, Save, ShieldCheck } from "lucide-react";
import { rolePermissions, trainingEntries } from "@/lib/finance/mock-data";
import { useLanguage } from "@/lib/i18n/language-provider";
import type { Role } from "@/lib/types";

const roles: Role[] = ["ceo", "manager", "employee"];

export function AdminSection() {
  const { dictionary, locale } = useLanguage();

  return (
    <section id="admin" className="grid gap-5 py-8 xl:grid-cols-[0.95fr_1.2fr]">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-teal-200/70">Internal console</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{dictionary.admin.title}</h2>
        <p className="mt-4 max-w-2xl text-white/55">{dictionary.admin.subtitle}</p>
        <div className="mt-6 grid gap-3">
          {roles.map((role) => (
            <div key={role} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
              <div className="mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-teal-300" />
                <span className="font-semibold uppercase">{role}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {rolePermissions[role].map((permission) => (
                  <span key={permission} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                    {permission}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-3xl p-6">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-300/15 text-violet-200">
            <DatabaseZap className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{dictionary.admin.training}</h3>
            <p className="text-sm text-white/45">FAQ, response templates and multilingual knowledge.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
          <label className="text-sm text-white/55">{dictionary.admin.category}</label>
          <input defaultValue="Debt strategy" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none" />
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="text-sm text-white/55">
              {dictionary.admin.question}
              <textarea defaultValue={trainingEntries[0].question[locale]} className="mt-2 h-32 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none" />
            </label>
            <label className="text-sm text-white/55">
              {dictionary.admin.answer}
              <textarea defaultValue={trainingEntries[0].answer[locale]} className="mt-2 h-32 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none" />
            </label>
          </div>
          <button className="mt-4 flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950">
            <Save className="h-4 w-4" />
            {dictionary.admin.save}
          </button>
        </div>

        <div className="mt-5 rounded-3xl border border-amber-300/15 bg-amber-300/[0.08] p-4 text-sm text-white/65">
          <div className="mb-2 flex items-center gap-2 font-semibold text-amber-100">
            <LockKeyhole className="h-4 w-4" />
            Governance
          </div>
          CEO approves billing and system-wide changes; managers curate training and analytics; employees support users without billing access.
        </div>
      </div>
    </section>
  );
}
