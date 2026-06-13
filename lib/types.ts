export type Locale =
  | "pt"
  | "en"
  | "es"
  | "de"
  | "fr"
  | "it"
  | "ja"
  | "zh"
  | "ko"
  | "ar"
  | "ru";

export type Role = "ceo" | "manager" | "employee" | "user";
export type PlanId = "free" | "premium" | "ultra";

export type TransactionType = "income" | "expense" | "debt_payment" | "savings";

export interface Transaction {
  id: string;
  type: TransactionType;
  category: string;
  merchant: string;
  amount: number;
  currency: string;
  date: string;
  note: string;
}

export interface Goal {
  id: string;
  title: string;
  target: number;
  current: number;
  dueDate: string;
}

export interface Debt {
  id: string;
  creditor: string;
  balance: number;
  apr: number;
  minimumPayment: number;
}

export interface FinancialProfile {
  monthlyIncome: number;
  fixedExpenses: number;
  savings: number;
  emergencyReserve: number;
  workType: string;
  spendingHabits: string[];
  financialDifficulties: string[];
  goals: Goal[];
  debts: Debt[];
  country: string;
  currency: string;
}

export interface ChatMessage {
  id: string;
  role: "assistant" | "user" | "system";
  content: string;
  createdAt: string;
  metadata?: {
    detectedAmount?: number;
    category?: string;
    transactionType?: TransactionType;
    language?: Locale;
  };
}

export interface Conversation {
  id: string;
  title: string;
  messages: ChatMessage[];
  updatedAt: string;
}

export interface AiTrainingEntry {
  id: string;
  category: string;
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
  status: "draft" | "active";
}
