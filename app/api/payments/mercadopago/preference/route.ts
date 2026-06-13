import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { z } from "zod";

const schema = z.object({
  plan: z.enum(["premium", "ultra"]),
  interval: z.enum(["monthly", "yearly"]).default("monthly")
});

const priceByPlan = {
  premium: { monthly: 19, yearly: 190 },
  ultra: { monthly: 49, yearly: 490 }
};

export async function POST(request: Request) {
  const body = schema.parse(await request.json());
  const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;

  if (!accessToken) {
    return NextResponse.json({
      provider: "mercado_pago",
      mode: "configuration_required",
      plan: body.plan,
      interval: body.interval
    });
  }

  const client = new MercadoPagoConfig({ accessToken });
  const preference = new Preference(client);
  const result = await preference.create({
    body: {
      items: [
        {
          id: `${body.plan}-${body.interval}`,
          title: `Finance IA ${body.plan}`,
          quantity: 1,
          unit_price: priceByPlan[body.plan][body.interval],
          currency_id: "USD"
        }
      ],
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/?checkout=success`,
        failure: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/?checkout=failed`
      }
    }
  });

  return NextResponse.json({ initPoint: result.init_point });
}
