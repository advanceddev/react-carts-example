import { useQuery, keepPreviousData, useQueryClient } from '@tanstack/react-query';
import { cartKeys } from '@/api/carts/carts.keys';
import { cartsApi } from '@/api/carts/carts.api';
import type { CartsResponse } from '@/api/carts/carts.types';

interface UseCartsParams {
  limit: number;
  skip: number;
  enabled?: boolean;
}

export const useCarts = ({ limit, skip, enabled = true }: UseCartsParams) => {
  return useQuery<CartsResponse>({
    queryKey: cartKeys.list({ limit, skip }),
    queryFn: () => cartsApi.getCarts(limit, skip),
    enabled,
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
};

export const useInvalidateCartsList = () => {
  const queryClient = useQueryClient();
  return () => {
    void queryClient.invalidateQueries({ queryKey: cartKeys.lists() });
  };
};