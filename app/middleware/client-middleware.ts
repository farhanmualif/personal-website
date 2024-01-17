import { NextRequest, NextResponse } from "next/server";

/** middleware untuk handdle request untuk sisi website */
export default async function clientMiddleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token");
  if (!token && path != "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (token && path == "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }
}
