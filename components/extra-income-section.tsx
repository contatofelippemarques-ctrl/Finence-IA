"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Clock, Globe2, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";

const ideaBank = [
  { title: "Weekend delivery sprint", effort: "6-10h/week", fit: "Fast cash", detail: "iFood, Uber Eats, DoorDash or local delivery windows around demand peaks." },
  { title: "Canva micro-designs", effort: "3-5h/week", fit: "Beginner friendly", detail: "Menus, flyers, Instagram posts and simple landing graphics for local businesses." },
  { title: "Freelance admin service", effort: "4-8h/week", fit: "Remote", detail: "Inbox cleanup, spreadsheet organization, appointment booking and simple CRM updates." },
  { title: "Social media operations", effort: "5-7h/week", fit: "Skill builder", detail: "Content scheduling, caption drafts, analytics screenshots and community replies." },
  { title: "Affiliate content testing", effort: "2-4h/week", fit: "Low capital", detail: "Short product guides with clear disclosure and one measurable traffic channel." }
];

export function ExtraIncomeSection() {
  const { dictionary } = useLanguage();
  const [country, setCountry] = useState("Brazil");
  const [time, setTime] = useState("6 hours/week");
  const [skills, setSkills] = useState("Canva, driving, customer support");

  const ideas = useMemo(
    () =>
      ideaBank.map((idea, index) => ({
        ...idea,
        score: 92 - index * 7,
        context: `${country} - ${time} - ${skills}`
      })),
    [country, skills, time]
  );

  return (
    <section id="income" className="grid gap-5 py-8 lg:grid-cols-[0.9fr_1.2fr]">
      <div className="glass-card rounded-3xl p-6">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-teal-300 to-violet-400 text-slate-950">
          <Sparkles className="h-6 w-6" />
        </div>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight">{dictionary.incomeAi.title}</h2>
        <p className="mt-3 text-white/55">{dictionary.incomeAi.subtitle}</p>
        <div className="mt-6 space-y-4">
          <Field icon={Globe2} label={dictionary.incomeAi.country} value={country} onChange={setCountry} />
          <Field icon={Clock} label={dictionary.incomeAi.time} value={time} onChange={setTime} />
          <Field icon={BriefcaseBusiness} label={dictionary.incomeAi.skills} value={skills} onChange={setSkills} />
        </div>
        <button className="mt-6 w-full rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950">{dictionary.incomeAi.generate}</button>
      </div>

      <div className="grid gap-3">
        {ideas.map((idea, index) => (
          <motion.div
            key={idea.title}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-lg font-semibold">{idea.title}</p>
                <p className="text-sm text-white/45">{idea.detail}</p>
              </div>
              <div className="rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-sm text-teal-200">{idea.score}% fit</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/55">
              <span className="rounded-full bg-white/10 px-3 py-1">{idea.effort}</span>
              <span className="rounded-full bg-white/10 px-3 py-1">{idea.fit}</span>
              <span className="rounded-full bg-white/10 px-3 py-1">{idea.context}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Field({ icon: Icon, label, value, onChange }: { icon: typeof Globe2; label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm text-white/55">
        <Icon className="h-4 w-4 text-teal-300" />
        {label}
      </span>
      <input value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-teal-300/40" />
    </label>
  );
}
