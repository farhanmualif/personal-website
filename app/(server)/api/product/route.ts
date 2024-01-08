import { NextRequest, NextResponse } from "next/server";
import ProductServices from "../../services/product-services";
import { RequestProduct } from "../../interface/interface";
import getTimeNow from "../../helper/get-time";

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

export async function POST(request: NextResponse) {
  try {
    const formData = await request.formData();

    const req: RequestProduct = {
      name: String(formData.get("name")),
      price: Number(formData.get("price")),
      image: String(formData.get("image")),
      categoryId: Number(formData.get("categoryId")),
      storeId: Number(formData.get("storeId")),
      createAt: getTimeNow(new Date()),
      updateAt: getTimeNow(new Date()),
    };
    const insert = await ProductServices.create(req);
    return NextResponse.json({
      status: 200,
      response: insert,
    });
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}
