import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  plan: z.enum(["premium", "ultra"]),
  interval: z.enum(["monthly", "yearly"]).default("monthly")
});

export async function POST(request: Request) {
  const body = schema.parse(await request.json());

  if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET) {
    return NextResponse.json({
      provider: "paypal",
      mode: "configuration_required",
      plan: body.plan,
      interval: body.interval
    });
  }

  return NextResponse.json({
    provider: "paypal",
    status: "ready",
    nextStep: "Create an order using @paypal/paypal-server-sdk with the selected plan price."
  });
}
