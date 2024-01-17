import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "../(server)/lib/jwt";

/** middleware untuk handdle request api */
export default async function apiMiddleware(request: NextRequest) {
  // return await apiMiddleware(request);
  const token = request.cookies.get("token");
  if (!token) {
    return NextResponse.json(
      {
        message: "unauthorization",
      },
      {
        status: 401,
      }
    );
  }

  const verify = await verifyToken(token.value);
  const { email } = verify;
  if (!verify || !email) {
    return NextResponse.json(
      {
        message: "unauthorization",
      },
      {
        status: 401,
      }
    );
  }
}
