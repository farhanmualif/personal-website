import database from "../database/database";

interface Product {
  name: string;
  price: string;
  address: string;
  rate: number;
  image: string;
  discount: number | null;
  freeShipping: boolean;
}

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
}
