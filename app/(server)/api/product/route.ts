import { NextRequest, NextResponse } from "next/server";
import ProductServices from "../../services/product-services";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    if (searchParams.get("id")) {
      const id = searchParams.get("id");
      const product = await ProductServices.getById(Number(id));
      return NextResponse.json(product);
    }

    const product = await ProductServices.getAll();
    return NextResponse.json(product);
  } catch (error) {
    NextResponse.json({
      message: error,
    });
  }
}
