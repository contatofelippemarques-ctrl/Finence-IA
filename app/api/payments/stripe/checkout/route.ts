import { NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";

const schema = z.object({
  plan: z.enum(["premium", "ultra"]),
  interval: z.enum(["monthly", "yearly"]).default("monthly")
});

export async function POST(request: Request) {
  const body = schema.parse(await request.json());
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json({
      provider: "stripe",
      mode: "configuration_required",
      plan: body.plan,
      interval: body.interval
    });
  }

  const stripe = new Stripe(secretKey);
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/?checkout=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/?checkout=cancelled`,
    line_items: [
      {
        price: process.env[`STRIPE_${body.plan.toUpperCase()}_${body.interval.toUpperCase()}_PRICE_ID`],
        quantity: 1
      }
    ]
  });

  return NextResponse.json({ url: session.url });
}
