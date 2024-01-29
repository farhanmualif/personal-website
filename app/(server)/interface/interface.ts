export interface Store {
  id: number;
  uuid: string;
  name: string;
  image: string;
  address: string;
  ownerId: string;
  owner: User;
  updateAt: Date;
  createdAt: Date;
  Product: Product[];
  ReviewStore: ReviewStore[];
}

export interface ReviewStore {
  id: number;
  uuid: string;
  comment: string;
  rate: number;
  updateAt: Date;
  createdAt: Date;
  storeId: number;
}

export interface Product {
  id: number;
  uuid: string;
  name: string;
  price: string;
  rate: number;
  image: string;
  storeId: number;
  discount: number | null;
  freeShipping: boolean;
}

export interface ProductImage {
  id: number;
  uuid: string;
  name: string;
}

export interface ProductResponse {
  id: number;
  uuid: string;
  name: string;
  price: string;
  address: string;
  review: ProductReview[];
  image: ProductImage[];
  storeId: number;
  description: string | null;
  discount: number | null;
  freeShipping: boolean;
}

export interface RequestProduct {
  name: string;
  price: number;
  categoryId: number;
  storeId: number;
  image?: string;
  rate?: number;
  discount?: number;
  freeShipping?: boolean;
  createAt: string;
  updateAt: string;
}

export interface ProductReview {
  id: number;
  uuid: string;
  userId: string;
  productId: number;
  comment: string;
  rate: number;
  updateAt: Date;
  createdAt: Date;
}

export interface User {
  id: number;
  roleId: number;
  uuid: string;
  email: string;
  name: string | null;
  image: string;
  updatedeAt: Date;
  createdAt: Date;
}

export interface UserRequest {
  id: number;
  uuid: number;
  email: string;
  name: string;
  image: string;
  updatedeAt: Date;
  createdAt: Date;
}

export interface Cart {
  id: number;
  uuid: string;
  product: Product;
  cartOwner: User;
}
