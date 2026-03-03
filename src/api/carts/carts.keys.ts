export const cartKeys = {
    all: ['carts'] as const,
    lists: () => [...cartKeys.all, 'list'] as const,
    list: (filters: { limit: number; skip: number }) => 
      [...cartKeys.lists(), { filters }] as const,
    details: () => [...cartKeys.all, 'detail'] as const,
    detail: (id: number) => [...cartKeys.details(), id] as const,
};