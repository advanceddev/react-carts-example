import { apiClient } from '@/api/client';
import type { Cart, CartsResponse, UpdateCartPayload } from '@/api/carts/carts.types';

export const cartsApi = {
  getCarts: async (limit: number, skip: number): Promise<CartsResponse> => {
    const { data } = await apiClient.get<CartsResponse>('/carts', {
      params: { limit, skip },
    });
    return data;
  },

  getCartById: async (id: number): Promise<Cart> => {
    const { data } = await apiClient.get<Cart>(`/carts/${String(id)}`);
    return data;
  },

  updateCart: async (id: number, payload: UpdateCartPayload): Promise<Cart> => {
    const { data } = await apiClient.put<Cart>(`/carts/${String(id)}`, payload);
    return data;
  },
};