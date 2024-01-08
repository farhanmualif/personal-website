import { error } from "@material-tailwind/react/types/components/input";
import database from "../database/database";
import getTimeNow from "../helper/get-time";
import { Product, RequestProduct } from "../interface/interface";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";

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
      return error;
    }
  }

  static async getById(id: number): Promise<Product | unknown> {
    try {
      const product = await database.product.findUniqueOrThrow({
        where: {
          id,
        },
        include: {
          storeName: true,
        },
      });

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
      return error;
    }
  }

  static async create(request: RequestProduct): Promise<unknown | error> {
    try {
      console.log("request", request);
      const insert = await database.product.create({
        data: {
          name: request.name,
          price: String(request.price),
          categoryId: request.categoryId,
          storeId: request.storeId,
          createdAt: request.createAt,
          updateAt: getTimeNow(new Date()),
        },
      });
      console.log("insert: ", insert);
      return insert;
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        console.log(error.message);
      }
      return error;
    }
  }
}
