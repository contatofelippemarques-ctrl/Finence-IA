import { dictionaries } from "@/lib/i18n/dictionaries";
import type { ChatMessage, Locale, TransactionType } from "@/lib/types";

type ParsedMoneyEvent = {
  amount?: number;
  category?: string;
  transactionType?: TransactionType;
  intent: "expense" | "income" | "debt" | "goal" | "loan" | "income_idea" | "guidance";
};

const expenseWords = [
  "spent",
  "paid",
  "bought",
  "gastei",
  "paguei",
  "comprei",
  "gasté",
  "pagué",
  "ausgegeben",
  "dépensé",
  "speso",
  "使った",
  "花了",
  "썼",
  "أنفقت",
  "потрат"
];

const incomeWords = ["received", "salary", "income", "recebi", "salário", "ingreso", "gehalt", "revenu", "stipendio", "収入", "工资", "월급", "دخل", "зарплат"];
const debtWords = ["debt", "loan", "card", "dívida", "empréstimo", "deuda", "schuld", "dette", "debito", "借金", "债务", "부채", "دين", "долг"];
const goalWords = ["goal", "save", "meta", "objetivo", "ziel", "objectif", "obiettivo", "目標", "目标", "목표", "هدف", "цель"];
const extraIncomeWords = ["extra income", "side hustle", "renda extra", "freelance", "uber", "ifood", "ingreso extra", "副収入", "额外收入", "부수입", "دخل إضافي", "дополнительный"];

export function parseMoneyEvent(input: string): ParsedMoneyEvent {
  const normalized = input.toLowerCase();
  const amount = normalized.match(/(?:[$€£¥]|r\$)?\s?(\d+(?:[.,]\d{1,2})?)/);
  const parsedAmount = amount ? Number(amount[1].replace(",", ".")) : undefined;

  const includesAny = (words: string[]) => words.some((word) => normalized.includes(word));

  let intent: ParsedMoneyEvent["intent"] = "guidance";
  let transactionType: TransactionType | undefined;

  if (includesAny(extraIncomeWords)) intent = "income_idea";
  else if (includesAny(goalWords)) intent = "goal";
  else if (includesAny(debtWords)) intent = "debt";
  else if (includesAny(incomeWords)) intent = "income";
  else if (includesAny(expenseWords)) intent = "expense";

  if (intent === "expense") transactionType = "expense";
  if (intent === "income") transactionType = "income";
  if (intent === "debt") transactionType = "debt_payment";

  const category = detectCategory(normalized, intent);

  return {
    amount: parsedAmount,
    category,
    transactionType,
    intent
  };
}

function detectCategory(text: string, intent: ParsedMoneyEvent["intent"]) {
  if (text.match(/food|comida|mercado|restaurant|restaurante|grocer|aliment|cibo|食|餐|음식|طعام|еда/)) return "Food";
  if (text.match(/rent|housing|aluguel|renta|miete|loyer|affitto|家賃|房租|월세|إيجار|аренд/)) return "Housing";
  if (text.match(/uber|fuel|gas|transport|car|ônibus|metro|transporte|車|交通|교통|نقل|транспорт/)) return "Transport";
  if (text.match(/electric|energy|internet|bill|conta|luz|utility|énergie|電気|电费|전기|كهرباء|свет/)) return "Bills";
  if (text.match(/salary|salário|sueldo|gehalt|revenu|stipendio|工资|월급|راتب|зарплат/)) return "Salary";
  if (intent === "debt") return "Debt";
  if (intent === "goal") return "Goal";
  if (intent === "income") return "Income";
  return "General";
}

export function buildAiResponse(input: string, locale: Locale) {
  const parsed = parseMoneyEvent(input);
  const dictionary = dictionaries[locale];

  const amountText = parsed.amount ? ` ${new Intl.NumberFormat(locale, { style: "currency", currency: "USD" }).format(parsed.amount)}` : "";
  const categoryText = parsed.category ? ` (${parsed.category})` : "";

  const incomeIdeas = {
    en: "Based on your profile, start with one realistic path: weekend delivery shifts, a focused Canva design offer, or one freelance service you can sell this week. Choose the option with the fastest first payment.",
    pt: "Pelo seu perfil, comece por um caminho realista: entregas no fim de semana, design simples no Canva ou um serviço freelancer que você consiga vender esta semana. Escolha o que paga primeiro.",
    es: "Según tu perfil, empieza con entregas de fin de semana, diseño en Canva o un servicio freelance que puedas vender esta semana.",
    de: "Starte realistisch mit Wochenend-Lieferungen, Canva-Design oder einem Freelance-Service, der diese Woche zahlbar ist.",
    fr: "Commencez par une piste réaliste : livraisons le week-end, design Canva ou service freelance vendable cette semaine.",
    it: "Inizia con una strada realistica: consegne nel weekend, design Canva o un servizio freelance vendibile questa settimana.",
    ja: "現実的には週末配達、Canvaデザイン、今週売れる小さなフリーランスサービスから始めましょう。",
    zh: "现实做法：周末配送、Canva设计，或本周能出售的一项自由职业服务。",
    ko: "현실적으로 주말 배달, Canva 디자인, 이번 주 판매 가능한 프리랜스 서비스부터 시작하세요.",
    ar: "ابدأ بخيار واقعي: توصيل في نهاية الأسبوع، تصميم Canva، أو خدمة حرة يمكن بيعها هذا الأسبوع.",
    ru: "Начните реалистично: доставки по выходным, дизайн в Canva или фриланс-услуга, которую можно продать на этой неделе."
  } satisfies Record<Locale, string>;

  const responseByIntent: Record<typeof parsed.intent, string> = {
    expense: `${dictionary.finance.expenseDetected}${amountText}${categoryText}. ${dictionary.finance.guidance}`,
    income: `${dictionary.finance.incomeDetected}${amountText}${categoryText}. Keep a small part invisible by moving it to savings first.`,
    debt: `${dictionary.finance.debtDetected}${amountText}${categoryText}. Focus on APR, minimum payments and one extra payment strategy.`,
    goal: `${dictionary.finance.goalDetected}${amountText}${categoryText}. I will break it into monthly and weekly targets so it feels achievable.`,
    loan: "I can simulate the loan with amount, rate and months. Send those three numbers and I will compare the monthly payment with your cash flow.",
    income_idea: incomeIdeas[locale],
    guidance: dictionary.finance.guidance
  };

  return {
    parsed,
    message: responseByIntent[parsed.intent]
  };
}

export function createMessage(role: ChatMessage["role"], content: string, metadata?: ChatMessage["metadata"]): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role,
    content,
    createdAt: new Date().toISOString(),
    metadata
  };
}
