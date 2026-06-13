import { NextResponse } from "next/server";
import { z } from "zod";
import { parseMoneyEvent } from "@/lib/finance/ai-engine";
import { transactions } from "@/lib/finance/mock-data";

const transactionSchema = z.object({
  text: z.string().min(1),
  currency: z.string().default("USD")
});

export async function GET() {
  return NextResponse.json({ transactions });
}

export async function POST(request: Request) {
  const body = transactionSchema.parse(await request.json());
  const parsed = parseMoneyEvent(body.text);

  return NextResponse.json({
    transaction: {
      id: crypto.randomUUID(),
      type: parsed.transactionType ?? "expense",
      category: parsed.category ?? "General",
      amount: parsed.amount ?? 0,
      currency: body.currency,
      merchant: parsed.category ?? "Natural language entry",
      date: new Date().toISOString(),
      note: body.text
    },
    parsed
  });
}
