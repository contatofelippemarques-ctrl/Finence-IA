import { NextResponse } from "next/server";
import { z } from "zod";
import { buildAiResponse, createMessage } from "@/lib/finance/ai-engine";
import { canSendMessage, getRemainingMessages } from "@/lib/subscriptions";
import type { Locale, PlanId } from "@/lib/types";

const schema = z.object({
  message: z.string().min(1),
  locale: z.string().default("en"),
  plan: z.enum(["free", "premium", "ultra"]).default("free"),
  usedToday: z.number().int().nonnegative().default(0)
});

export async function POST(request: Request) {
  const body = schema.parse(await request.json());

  if (!canSendMessage(body.plan, body.usedToday)) {
    return NextResponse.json(
      {
        error: "daily_limit_reached",
        remaining: 0
      },
      { status: 402 }
    );
  }

  const { parsed, message } = buildAiResponse(body.message, body.locale as Locale);
  const assistantMessage = createMessage("assistant", message, {
    detectedAmount: parsed.amount,
    category: parsed.category,
    transactionType: parsed.transactionType,
    language: body.locale as Locale
  });

  return NextResponse.json({
    message: assistantMessage,
    parsed,
    remaining: getRemainingMessages(body.plan as PlanId, body.usedToday + 1)
  });
}
