import { NextResponse, type NextRequest } from "next/server";
import { locales } from "@/lib/i18n/dictionaries";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const existing = request.cookies.get("finance-ia-locale")?.value;
  const browserLocale = request.headers.get("accept-language")?.split(",")[0]?.split("-")[0];
  const detected = locales.includes(browserLocale as (typeof locales)[number]) ? browserLocale ?? "en" : "en";

  if (!existing) {
    response.cookies.set("finance-ia-locale", detected, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
