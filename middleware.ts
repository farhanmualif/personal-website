import { NextRequest } from "next/server";
import apiMiddleware from "./app/middleware/api-middleware";
import clientMiddleware from "./app/middleware/client-middleware";

export async function middleware(request: NextRequest) {
  if (request.headers.get("Content-Type") == "application/json") {
    return await apiMiddleware(request);
  } else {
    return await clientMiddleware(request);
  }
}

export const config = {
  matcher: ["/login", "/product/:path*"],
};
