import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const getBasePath = () => {
  if (process.env.NODE_ENV === 'production') {
    return '/react-carts-example';
  }
  return '/';
};

// https://vite.dev/config/
export default defineConfig({
  base: getBasePath(),
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'query': ['@tanstack/react-query'],
          'emotion': ['@emotion/react', '@emotion/styled'],
        }
      }
    }
  }
})
