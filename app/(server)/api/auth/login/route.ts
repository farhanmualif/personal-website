import { NextResponse } from "next/server";
import { jwtAccessToken, verifyToken } from "@/app/(server)/lib/jwt";
import database from "@/app/(server)/database/database";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";

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
    },
  });
  if (!userFind) {
    return NextResponse.json(
      {
        message: "user not found",
      },
      {
        status: 404,
      }
    );
  }
  const passwordValid = await bcrypt.compare(
    payload.password,
    userFind.password
  );
  if (!passwordValid) {
    return NextResponse.json(
      {
        error: true,
        message: "password is wrong",
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
