import { error } from "@material-tailwind/react/types/components/input";
import database from "../database/database";
import getTimeNow from "../lib/get-time";
import { Product, RequestProduct } from "../interface/interface";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import escapeHTML from "escape-html";
import errorHandler from "../error/error-handler";

export default class ProductServices {
  static async getAll(): Promise<Product[] | unknown> {
    try {
      const products = await database.product.findMany({
        include: {
          storeName: true,
        },
      });

      const data: Product[] = products.map((product) => {
        return {
          name: product.name,
          price: product.price,
          image: product.Image,
          address: product.storeName.address,
          rate: product.rate,
          discount: product.discount,
          freeShipping: product.freeShipping,
        };
      });
      return data;
    } catch (error) {
      errorHandler(error);
    }
  }

  static async getById(id: number): Promise<Product | unknown> {
    try {
      const product = await database.product.findUnique({
        where: {
          id,
        },
        include: {
          storeName: true,
        },
      });
      if (!product) {
        return null;
      }
      const data: Product = {
        name: product.name,
        price: product.price,
        address: product.storeName.address,
        image: product.Image,
        rate: product.rate,
        discount: product.discount,
        freeShipping: product.freeShipping,
      };
      return data;
    } catch (error) {
      errorHandler(error);
    }
  }

  static async create(request: RequestProduct): Promise<unknown | error> {
    try {
      const insert = await database.product.create({
        data: {
          name: escapeHTML(request.name),
          price: escapeHTML(String(request.price)),
          categoryId: Number(escapeHTML(String(request.categoryId))),
          storeId: Number(escapeHTML(String(request.storeId))),
          createdAt: escapeHTML(request.createAt),
          updateAt: escapeHTML(getTimeNow(new Date())),
        },
      });
      return insert;
    } catch (error) {
      errorHandler(error);
    }
  }
}
