import database from "../database/database";
import { Cart } from "../interface/interface";

export class CartServices {
  static async create(cart: any): Promise<Cart | null> {
    const res = await database.cart.create({
      data: cart,
      select: {
        id: true,
        uuid: true,
        Product: true,
        User: true,
      },
    });
    if (!res) {
      return null;
    }
    const cartRes: Cart = {
      uuid: res.uuid,
      id: res.id,
      cartOwner: {
        id: Number(res.User.id),
        uuid: res.User.uuid,
        roleId: res.User.roleId,
        email: res.User.email,
        name: res.User.name || null,
        image: res.User.Image,
        createdAt: res.User.createdAt,
        updatedeAt: res.User.updateAt,
      },
      
      product: {
        id: res.Product.id,
        uuid: res.Product.uuid,
        name: res.Product.name,
        discount: res.Product.discount,
        freeShipping: res.Product.freeShipping,
        image: res.Product.Image,
        price: res.Product.price,
        rate: res.Product.rate,
      },
    };
    return cartRes;
  }

  static async findById(uuid: string): Promise<Cart | null> {
    const cart = await database.cart.findUnique({
      where: {
        uuid,
      },
      include: {
        Product: true,
        User: true,
      },
    });

    if (!cart) {
      return null;
    }
    const cartRes: Cart = {
      id: cart.id,
      uuid: cart.uuid,
      cartOwner: {
        id: Number(cart.User.id),
        uuid: cart.User.uuid,
        email: cart.User.email,
        name: cart.User.name,
        image: cart.User.Image,
        roleId: cart.User.roleId,
        createdAt: cart.User.createdAt,
        updatedeAt: cart.User.updateAt,
      },
      product: {
        id: cart.Product.id,
        uuid: cart.Product.uuid,
        name: cart.Product.name,
        discount: cart.Product.discount,
        image: cart.Product.Image,
        freeShipping: cart.Product.freeShipping,
        price: cart.Product.price,
        rate: cart.Product.rate,
      },
    };

    return cartRes;
  }
}
