import { NextResponse } from "next/server";
import { z } from "zod";
import { getRemainingMessages, nextResetAt } from "@/lib/subscriptions";

const schema = z.object({
  plan: z.enum(["free", "premium", "ultra"]).default("free"),
  usedToday: z.number().int().nonnegative().default(0)
});

export async function POST(request: Request) {
  const body = schema.parse(await request.json());

  return NextResponse.json({
    plan: body.plan,
    usedToday: body.usedToday,
    remaining: getRemainingMessages(body.plan, body.usedToday),
    resetAt: nextResetAt()
  });
}
