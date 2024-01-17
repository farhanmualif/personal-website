import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import database from "@/app/(server)/database/database";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";

export async function POST(request: NextRequest) {
  try {
    let payload = await request.json();
    const passwordHash = await bcrypt.hash(payload.password, 10);
    payload.password = passwordHash;
    const insertUser = await database.user.create({
      data: payload,
    });
    return NextResponse.json({
      insertUser,
    });
  } catch (error) {
    if (error instanceof PrismaClientValidationError) {
      return NextResponse.json({
        name: error.name,
        message: error.message,
        cause: error.cause,
      });
    } else {
      return NextResponse.json({
        error,
      });
    }
  }
}
