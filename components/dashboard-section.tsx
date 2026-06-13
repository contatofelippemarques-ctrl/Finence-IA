"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowDownRight, ArrowUpRight, BrainCircuit, Shield, Wallet } from "lucide-react";
import { Area, AreaChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { categorySeries, demoProfile, monthlySeries, notifications } from "@/lib/finance/mock-data";
import { useLanguage } from "@/lib/i18n/language-provider";
import { formatCurrency } from "@/lib/utils";

const colors = ["#2dd4bf", "#a78bfa", "#60a5fa", "#f59e0b", "#fb7185", "#34d399"];

export function DashboardSection() {
  const { dictionary, locale } = useLanguage();
  const expenses = monthlySeries.at(-1)?.expenses ?? 0;
  const income = monthlySeries.at(-1)?.income ?? 0;
  const balance = income - expenses + 14200;

  const stats = [
    { label: dictionary.dashboard.balance, value: formatCurrency(balance, locale), icon: Wallet, trend: "+8.2%", tone: "text-teal-300" },
    { label: dictionary.dashboard.income, value: formatCurrency(income, locale), icon: ArrowUpRight, trend: "+4.1%", tone: "text-emerald-300" },
    { label: dictionary.dashboard.expenses, value: formatCurrency(expenses, locale), icon: ArrowDownRight, trend: "-6.4%", tone: "text-rose-300" },
    { label: dictionary.dashboard.score, value: "78/100", icon: Shield, trend: "+5", tone: "text-violet-300" }
  ];

  return (
    <section id="dashboard" className="grid gap-5 py-8">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-teal-200/70">{dictionary.dashboard.subtitle}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{dictionary.dashboard.title}</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card rounded-3xl p-5"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
                <stat.icon className={`h-5 w-5 ${stat.tone}`} />
              </div>
              <span className={`text-sm ${stat.tone}`}>{stat.trend}</span>
            </div>
            <p className="mt-6 text-sm text-white/50">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="glass-card min-h-[360px] rounded-3xl p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-white/45">{dictionary.dashboard.predictions}</p>
              <h3 className="text-xl font-semibold">Income vs expenses</h3>
            </div>
            <BrainCircuit className="h-5 w-5 text-teal-300" />
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlySeries}>
                <defs>
                  <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="expenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16 }} />
                <Area type="monotone" dataKey="income" stroke="#2dd4bf" fill="url(#income)" strokeWidth={3} />
                <Area type="monotone" dataKey="expenses" stroke="#a78bfa" fill="url(#expenses)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-5">
          <p className="text-sm text-white/45">{dictionary.dashboard.categories}</p>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categorySeries} dataKey="value" innerRadius={62} outerRadius={92} paddingAngle={4}>
                  {categorySeries.map((entry, index) => (
                    <Cell key={entry.name} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid gap-2">
            {categorySeries.slice(0, 4).map((category, index) => (
              <div key={category.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-white/65">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: colors[index] }} />
                  {category.name}
                </span>
                <span>{formatCurrency(category.value, locale)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="glass-card rounded-3xl p-5">
          <p className="text-sm text-white/45">{dictionary.dashboard.debts}</p>
          <div className="mt-4 space-y-3">
            {demoProfile.debts.map((debt) => (
              <div key={debt.id} className="rounded-2xl bg-white/5 p-4">
                <div className="flex justify-between">
                  <span>{debt.creditor}</span>
                  <span>{formatCurrency(debt.balance, locale)}</span>
                </div>
                <p className="mt-1 text-sm text-white/45">{debt.apr}% APR - minimum {formatCurrency(debt.minimumPayment, locale)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-3xl p-5">
          <p className="text-sm text-white/45">{dictionary.dashboard.notifications}</p>
          <div className="mt-4 space-y-3">
            {notifications.map((notification) => (
              <div key={notification} className="flex gap-3 rounded-2xl border border-amber-300/10 bg-amber-300/5 p-4 text-sm text-white/70">
                <AlertTriangle className="mt-0.5 h-4 w-4 flex-none text-amber-300" />
                {notification}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
