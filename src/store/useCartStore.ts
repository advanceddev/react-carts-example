import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface CartState {
  pagination: {
    page: number;
    limit: number;
  };
  setPagination: (page: number, limit: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      pagination: {
        page: 1,
        limit: 10,
      },
      setPagination: (page, limit) => 
        set((state) => ({
          pagination: { 
            page: Math.max(1, page), 
            limit: [10, 20, 50].includes(limit) ? limit : state.pagination.limit 
          }
        })),
    }),
    {
      name: 'cart-manager-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        pagination: state.pagination,
      }),
    }
  )
);