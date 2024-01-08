export interface Product {
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
  createAt: string
  updateAt: string
  rate?: number;
  discount?: number;
  freeShipping?: boolean;
}
