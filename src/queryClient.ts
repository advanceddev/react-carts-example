import { QueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
      
      retry: (failureCount: number, error: Error): boolean => {
        if (isAxiosError(error)) {
          if (error.response?.status && error.response.status >= 400 && error.response.status < 500) {
            return false;
          }
        }
        return failureCount < 3;
      },
    },
    mutations: {
      retry: false,
      onError: (error: Error) => {
        console.error('Mutation error:', error);
      },
    },
  },
});