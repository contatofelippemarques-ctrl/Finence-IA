import { NextResponse } from "next/server";
import { z } from "zod";
import { trainingEntries } from "@/lib/finance/mock-data";

const trainingSchema = z.object({
  category: z.string().min(2),
  question: z.record(z.string(), z.string()),
  answer: z.record(z.string(), z.string()),
  status: z.enum(["draft", "active"]).default("draft")
});

export async function GET() {
  return NextResponse.json({ entries: trainingEntries });
}

export async function POST(request: Request) {
  const body = trainingSchema.parse(await request.json());
  return NextResponse.json({
    entry: {
      id: crypto.randomUUID(),
      ...body
    }
  });
}
