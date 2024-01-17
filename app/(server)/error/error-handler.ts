import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { ErrorException } from "./error-exception";

export default function errorHandler<T>(error: T) {
  console.log("error handler: ", error);
  if (error instanceof Prisma.PrismaClientValidationError) {
    return NextResponse.json(
      {
        error_name: error.message,
        message: error.message,
        cause: error.cause,
        stack: error.stack,
      },
      {
        status: 404,
        statusText: "failed",
      }
    );
  } else if (error instanceof ErrorException) {
    console.log("error exception");
    return NextResponse.json(
      {
        message: error.message,
        name: error.name,
      },
      {
        status: 404,
        statusText: "failed",
      }
    );
  }
}
