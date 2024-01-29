import { NextRequest } from "next/server";
import errorHandler from "../../error/error-handler";



export async function POST(request: NextRequest) {
  try {
    const { productId, userId } = await request.json();
    
  } catch (error) {
    errorHandler(error);
  }
}
