import { error } from "@material-tailwind/react/types/components/input";
import database from "../database/database";
import getTimeNow from "../lib/get-time";
import {
  ProductImage,
  ProductResponse,
  ProductReview,
  RequestProduct,
} from "../interface/interface";
import escapeHTML from "escape-html";
import errorHandler from "../error/error-handler";

export default class ProductServices {
  static async getAll(): Promise<ProductResponse[] | undefined> {
    try {
      const products = await database.product.findMany({
        include: {
          storeName: true,
          ReviewProduct: true,
          ProductImage: true,
        },
      });

      const data: ProductResponse[] = products.map((product) => {
        return {
          id: product.id,
          uuid: product.uuid,
          name: product.name,
          price: product.price,
          image: product.ProductImage,
          address: product.storeName.address,
          storeId: product.storeId,
          description: product.description,
          review: product.ReviewProduct,
          discount: product.discount,
          freeShipping: product.freeShipping,
        };
      });
      return data;
    } catch (error) {
      errorHandler(error);
    }
  }

  static async getById(uuid: string): Promise<ProductResponse | unknown> {
    try {
      const product = await database.product.findUnique({
        where: {
          uuid,
        },
        include: {
          _count: true,
          storeName: true,
          category: true,
          ReviewProduct: true,
          ProductImage: true,
        },
      });
      if (!product) {
        return null;
      }

      const imageProduct: ProductImage[] = product.ProductImage.map((prod) => {
        return {
          id: prod.id,
          uuid: prod.uuid,
          name: prod.name,
        };
      });
      const reviewProduct: ProductReview[] = product.ReviewProduct.map(
        (prod) => {
          return {
            id: prod.id,
            uuid: prod.uuid,
            rate: prod.rate,
            comment: prod.comment,
            productId: prod.productId,
            userId: prod.userId,
            createdAt: prod.createdAt,
            updateAt: prod.updateAt,
          };
        }
      );
      const data: ProductResponse = {
        id: product.id,
        uuid: product.uuid,
        name: product.name,
        storeId: product.storeId,
        price: product.price,
        image: imageProduct,
        address: product.storeName.address,
        review: reviewProduct,
        description: product.description,
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
