"use server";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./app/(server)/lib/jwt";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  if (!token?.value) {
    return NextResponse.json(
      {
        message: "not outorization",
      },
      {
        status: 401,
      }
    );
  }
  const verify = await verifyToken(token.value);
  const { email } = verify;
  if (!email) {
    return NextResponse.json(
      {
        message: "not outorization",
      },
      {
        status: 401,
      }
    );
  }
}

export const config = {
  matcher: ["/api/product", "/api/user"],
};
