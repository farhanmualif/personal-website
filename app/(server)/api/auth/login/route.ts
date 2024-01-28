import { signIn } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const params = await request.json();
    console.log(params);
    params.redirect = false;
    const login = await signIn("credentials", params);
    if (login?.ok) {
      
    }
    return NextResponse.json(login);
  } catch (error) {
    console.error(error);
  }
}
