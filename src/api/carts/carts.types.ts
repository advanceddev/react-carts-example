export interface CartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal?: number;
  thumbnail: string;
}

export interface Cart {
  id: number;
  userId: number;
  products: CartProduct[];
  total: number;
  discountedTotal: number;
}

export interface CartsResponse {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}

export interface UpdateCartProduct {
  id: number;
  quantity: number;
}

export interface UpdateCartPayload {
  merge: boolean;
  products: UpdateCartProduct[];
}