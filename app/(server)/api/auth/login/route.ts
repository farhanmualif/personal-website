import { NextResponse } from "next/server";
import { jwtAccessToken } from "@/app/(server)/lib/jwt";
import database from "@/app/(server)/database/database";
import { cookies } from "next/headers";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: NextResponse) {
  const cookiesStore = cookies();
  const payload: RequestBody = await request.json();
  const userFind = await database.user.findUnique({
    where: {
      email: payload.email,
      password: payload.password,
    },
  });
  if (!userFind) {
    return NextResponse.json(
      {
        message: "username or password is wrong",
      },
      {
        status: 401,
      }
    );
  }
  const token = await jwtAccessToken(payload);
  cookiesStore.set("token", String(token));
  return NextResponse.json({
    ...payload,
    token,
  });
}
