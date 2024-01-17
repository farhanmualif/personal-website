import { NextRequest, NextResponse } from "next/server";

import ProductServices from "../../services/product-services";
import { RequestProduct } from "../../interface/interface";
import getTimeNow from "../../lib/get-time";
import {
  productSchema,
  validation,
} from "@/app/(server)/validation/validation";
import errorHandler from "../../error/error-handler";

interface ProductPayload {
  name: string;
  price: number;
  image: string;
  categoryId: number;
  storeId: number;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    if (searchParams.get("id")) {
      const id = searchParams.get("id");
      const product = await ProductServices.getById(Number(id));
      console.log("cek product: ", product);
      if (!product) {
        return NextResponse.json(
          {
            status: "fail",
            message: "product not found",
            links: {
              self: request.url,
            },
            data: product,
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json({
        status: "success",
        message: "product found",
        links: {
          self: request.url,
        },
        data: product,
      });
    }

    const product = await ProductServices.getAll();
    return NextResponse.json({
      status: "success",
      message: "product found",
      links: {
        self: request.url,
      },
      data: product,
    });
  } catch (error) {
    errorHandler<unknown>(error);
  }
}

export async function POST(request: NextResponse) {
  try {
    const { name, price, image, categoryId, storeId } = await request.json();

    const payload: ProductPayload = {
      name: String(name),
      price: Number(price),
      image: String(image),
      categoryId: Number(categoryId),
      storeId: Number(storeId),
    };

    const value = validation<ProductPayload>(productSchema, payload);

    const req: RequestProduct = {
      ...value.value,
      createAt: getTimeNow(new Date()),
      updateAt: getTimeNow(new Date()),
    };
    const insert = await ProductServices.create(req);
    return NextResponse.json({
      status: 200,
      response: insert,
    });
  } catch (error) {
    errorHandler<unknown>(error);
  }
}
