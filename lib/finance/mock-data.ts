import type { AiTrainingEntry, FinancialProfile, Locale, PlanId, Role, Transaction } from "@/lib/types";

export const demoProfile: FinancialProfile = {
  monthlyIncome: 6200,
  fixedExpenses: 3180,
  savings: 14200,
  emergencyReserve: 7800,
  workType: "Product designer and freelance consultant",
  spendingHabits: ["delivery food", "late subscriptions", "impulse gadgets"],
  financialDifficulties: ["credit card interest", "irregular freelance income"],
  country: "United States",
  currency: "USD",
  goals: [
    { id: "goal-1", title: "Emergency reserve", target: 18000, current: 7800, dueDate: "2026-12-31" },
    { id: "goal-2", title: "Debt freedom", target: 9600, current: 4200, dueDate: "2026-10-01" }
  ],
  debts: [
    { id: "debt-1", creditor: "Credit card", balance: 5400, apr: 22.9, minimumPayment: 210 },
    { id: "debt-2", creditor: "Personal loan", balance: 4200, apr: 12.4, minimumPayment: 180 }
  ]
};

export const transactions: Transaction[] = [
  { id: "tx-1", type: "income", category: "Salary", merchant: "Design Studio", amount: 5200, currency: "USD", date: "2026-06-01", note: "Monthly salary" },
  { id: "tx-2", type: "income", category: "Freelance", merchant: "Client Nova", amount: 1000, currency: "USD", date: "2026-06-07", note: "Landing page project" },
  { id: "tx-3", type: "expense", category: "Housing", merchant: "Rent", amount: 2100, currency: "USD", date: "2026-06-02", note: "Apartment" },
  { id: "tx-4", type: "expense", category: "Food", merchant: "Market", amount: 650, currency: "USD", date: "2026-06-08", note: "Groceries" },
  { id: "tx-5", type: "expense", category: "Transport", merchant: "Transit", amount: 210, currency: "USD", date: "2026-06-10", note: "Monthly pass" },
  { id: "tx-6", type: "debt_payment", category: "Debt", merchant: "Credit card", amount: 460, currency: "USD", date: "2026-06-12", note: "Snowball payment" }
];

export const categorySeries = [
  { name: "Housing", value: 2100 },
  { name: "Food", value: 650 },
  { name: "Transport", value: 210 },
  { name: "Debt", value: 460 },
  { name: "Subscriptions", value: 180 },
  { name: "Learning", value: 120 }
];

export const monthlySeries = [
  { month: "Jan", income: 5800, expenses: 4300 },
  { month: "Feb", income: 6100, expenses: 4100 },
  { month: "Mar", income: 5900, expenses: 4550 },
  { month: "Apr", income: 6600, expenses: 4720 },
  { month: "May", income: 6200, expenses: 3980 },
  { month: "Jun", income: 6200, expenses: 3720 }
];

export const notifications = [
  "Credit card APR is high. Paying an extra $120/month may save meaningful interest.",
  "Food spending is trending 11% lower than last month. Keep the streak.",
  "Emergency reserve covers 2.1 months. Target 3 months before aggressive investing."
];

export const planLimits: Record<PlanId, number> = {
  free: 20,
  premium: 200,
  ultra: 2000
};

export const rolePermissions: Record<Role, string[]> = {
  ceo: ["users:read", "users:write", "billing:write", "training:write", "support:write", "analytics:read"],
  manager: ["users:read", "training:write", "support:write", "analytics:read"],
  employee: ["users:read", "support:write", "training:read"],
  user: ["profile:write", "chat:write", "finance:write"]
};

export const trainingEntries: AiTrainingEntry[] = [
  {
    id: "train-1",
    category: "Debt",
    status: "active",
    question: {
      en: "How should I pay credit card debt?",
      pt: "Como devo pagar dívida do cartão?",
      es: "¿Cómo pago deuda de tarjeta?",
      de: "Wie zahle ich Kreditkartenschulden?",
      fr: "Comment payer une dette de carte ?",
      it: "Come pago il debito della carta?",
      ja: "カードローンをどう返済する？",
      zh: "如何偿还信用卡债务？",
      ko: "카드 빚을 어떻게 갚나요?",
      ar: "كيف أسدد دين البطاقة؟",
      ru: "Как погасить долг по карте?"
    },
    answer: {
      en: "Pay the minimum on every debt, then attack the highest APR first unless a small balance creates quick motivation.",
      pt: "Pague o mínimo de todas as dívidas e ataque primeiro a maior taxa, salvo quando uma dívida pequena der motivação rápida.",
      es: "Paga el mínimo de todas y ataca primero la tasa más alta, salvo que una deuda pequeña motive.",
      de: "Zahle überall das Minimum und greife zuerst den höchsten Zinssatz an.",
      fr: "Payez le minimum partout puis ciblez le taux le plus élevé.",
      it: "Paga il minimo e colpisci prima il tasso più alto.",
      ja: "全て最低額を払い、高金利から優先しましょう。",
      zh: "先支付所有最低额，再优先偿还最高利率债务。",
      ko: "모든 최소금을 내고 가장 높은 이자부터 갚으세요.",
      ar: "ادفع الحد الأدنى ثم ركز على أعلى فائدة.",
      ru: "Платите минимум по всем долгам, затем гасите самый высокий процент."
    }
  }
];

export const localizedWelcome: Record<Locale, string> = {
  en: "I am here with you. Tell me one money detail from today and I will organize it calmly.",
  pt: "Estou aqui com você. Me conte um detalhe financeiro de hoje e eu organizo com calma.",
  es: "Estoy contigo. Cuéntame un detalle financiero de hoy y lo ordeno con calma.",
  de: "Ich bin bei dir. Nenne mir ein Gelddetail von heute und ich ordne es ruhig.",
  fr: "Je suis avec vous. Donnez-moi un détail financier du jour et je l'organise calmement.",
  it: "Sono qui con te. Dimmi un dettaglio finanziario di oggi e lo organizzo con calma.",
  ja: "そばにいます。今日のお金のことを一つ教えてください。落ち着いて整理します。",
  zh: "我在这里陪你。告诉我今天一个金钱细节，我会帮你整理。",
  ko: "함께할게요. 오늘의 돈 이야기를 하나 말해주면 차분히 정리할게요.",
  ar: "أنا هنا معك. أخبرني بتفصيل مالي من اليوم وسأنظمه بهدوء.",
  ru: "Я рядом. Расскажите одну финансовую деталь за сегодня, и я спокойно ее упорядочу."
};
