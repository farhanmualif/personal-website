import { NextRequest, NextResponse } from "next/server";
/** middleware untuk handdle request untuk sisi website */
export default async function clientMiddleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("next-auth.session-token");

  if (token && path == "/login") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  const pathSplited = path.split("/")[1];
  if (!token && pathSplited == "product") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
