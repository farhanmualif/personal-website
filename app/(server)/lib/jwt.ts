import { SignJWT, jwtVerify } from "jose";
import { getJwtSecretKey } from "./get-jwt-secret";

export async function jwtAccessToken(payload: {
  email: string;
  password: string;
}) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .sign(getJwtSecretKey());
  return token;
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    return payload;
  } catch (error) {
    return {
      error: error,
    };
  }
}
