export interface Product {
  id: number;
  name: string;
  price: string;
  address: string;
  rate: number;
  image: string;
  discount: number | null;
  freeShipping: boolean;
}

export interface RequestProduct {
  name: string;
  price: number;
  categoryId: number;
  storeId: number;
  image?: string;
  createAt: string;
  updateAt: string;
  rate?: number;
  discount?: number;
  freeShipping?: boolean;
}

export interface User {
  id: number;
  roleId: number;
  uuid: number;
  email: string;
  name: string;
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
