import type { PlanId } from "@/lib/types";
import { planLimits } from "@/lib/finance/mock-data";

export type Plan = {
  id: PlanId;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "free",
    priceMonthly: 0,
    priceYearly: 0,
    features: ["20 AI messages/day", "Basic tracking", "Basic summaries", "Limited history"]
  },
  {
    id: "premium",
    priceMonthly: 19,
    priceYearly: 190,
    features: ["200 AI messages/day", "Predictions", "PDF exports", "Unlimited history", "Advanced notifications"]
  },
  {
    id: "ultra",
    priceMonthly: 49,
    priceYearly: 490,
    features: ["Near unlimited AI", "OCR receipts", "Bank import", "Family mode", "Investment AI", "Priority support"]
  }
];

export function getRemainingMessages(plan: PlanId, usedToday: number) {
  return Math.max(planLimits[plan] - usedToday, 0);
}

export function canSendMessage(plan: PlanId, usedToday: number) {
  return getRemainingMessages(plan, usedToday) > 0;
}

export function nextResetAt() {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 0, 0, 0)).toISOString();
}
