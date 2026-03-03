import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { cartKeys } from '@/api/carts/carts.keys';
import { cartsApi } from '@/api/carts/carts.api';
import type { 
  Cart, 
  CartProduct, 
  UpdateCartPayload, 
  CartsResponse,
  UpdateCartProduct 
} from '@/api/carts/carts.types';


type CartQueryData = Cart | undefined;

interface UpdateCartContext {
  previousCart: CartQueryData;
  updatedCart: Cart;
}

const calculateProductDiscountedTotal = (
  price: number,
  quantity: number,
  discountPercentage: number
): number => {
  const baseTotal = price * quantity;
  const discount = baseTotal * (discountPercentage / 100);
  return Math.round((baseTotal - discount) * 100) / 100;
};

const applyCartUpdates = (
  cart: Cart, 
  updates: UpdateCartProduct[]
): Cart => {
  const updatedProducts: CartProduct[] = cart.products
    .map((product: CartProduct): CartProduct => {
      const update = updates.find((u) => u.id === product.id);
      if (update) {
        const quantity = update.quantity;
        const discountedTotal = calculateProductDiscountedTotal(
          product.price,
          quantity,
          product.discountPercentage
        );
        
        return {
          ...product,
          quantity,
          total: product.price * quantity,
          discountedTotal,
        };
      }
      return product;
    })
    .filter((product: CartProduct): boolean => {
      const update = updates.find((u) => u.id === product.id);
      return !update || update.quantity > 0;
    });
  
  const total = updatedProducts.reduce(
    (sum: number, product: CartProduct): number => sum + product.total,
    0
  );
  
  const discountedTotal = updatedProducts.reduce(
    (sum: number, product: CartProduct): number => {

      if ('discountedTotal' in product && typeof product.discountedTotal === 'number') {
        return sum + product.discountedTotal;
      }

      const discount = product.total * (product.discountPercentage / 100);
      return sum + (product.total - discount);
    },
    0
  );
  
  return {
    ...cart,
    products: updatedProducts,
    total: Math.round(total * 100) / 100,
    discountedTotal: Math.round(discountedTotal * 100) / 100,
  };
};

export const useCartDetail = (id: number) => {
  return useQuery<Cart>({
    queryKey: cartKeys.detail(id),
    queryFn: () => cartsApi.getCartById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
};

export const useUpdateCart = (cartId: number) => {
  const queryClient = useQueryClient();

  return useMutation<Cart, Error, UpdateCartPayload, UpdateCartContext>({
    mutationFn: (payload: UpdateCartPayload) => 
      cartsApi.updateCart(cartId, payload),
    
    onMutate: async (newData: UpdateCartPayload): Promise<UpdateCartContext> => {
      await queryClient.cancelQueries({ queryKey: cartKeys.detail(cartId) });
      
      const previousCart = queryClient.getQueryData<Cart>(cartKeys.detail(cartId));
      
      if (!previousCart) {
        throw new Error('Cart not found');
      }
      
      const updatedCart = applyCartUpdates(previousCart, newData.products);
      
      queryClient.setQueryData<Cart>(
        cartKeys.detail(cartId),
        updatedCart
      );
      
      queryClient.setQueriesData<CartsResponse>(
        { queryKey: cartKeys.all },
        (oldData: CartsResponse | undefined): CartsResponse | undefined => {
          if (!oldData || !Array.isArray(oldData.carts)) {
            return oldData;
          }
          
          const updatedCarts = oldData.carts.map((cart: Cart) => 
            cart.id === cartId
              ? {
                  id: updatedCart.id,
                  userId: updatedCart.userId,
                  products: updatedCart.products,
                  total: updatedCart.total,
                  discountedTotal: updatedCart.discountedTotal,
                }
              : cart
          );
          
          return {
            ...oldData,
            carts: updatedCarts,
          };
        }
      );
      
      return { 
        previousCart, 
        updatedCart,
      };
    },
    
    onError: (
      _err: Error,
      _vars: UpdateCartPayload,
      context?: UpdateCartContext
    ): void => {
      if (context?.previousCart) {
        queryClient.setQueryData<Cart>(cartKeys.detail(cartId), context.previousCart);
      }
      
      queryClient.setQueriesData<CartsResponse>(
        { queryKey: cartKeys.all },
        (oldData: CartsResponse | undefined): CartsResponse | undefined => {
          if (!oldData || !Array.isArray(oldData.carts) || !context?.previousCart) {
            return oldData;
          }
          
          const previousCart = context.previousCart;
          const restoredCarts = oldData.carts.map((cart: Cart) => 
            cart.id === cartId
              ? {
                  id: previousCart.id,
                  userId: previousCart.userId,
                  products: previousCart.products,
                  total: previousCart.total,
                  discountedTotal: previousCart.discountedTotal,
                }
              : cart
          );
          
          return {
            ...oldData,
            carts: restoredCarts,
          };
        }
      );
    },
  });
};