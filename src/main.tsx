import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@emotion/react';

import { queryClient } from './queryClient';
import { AppRouter } from './routes/AppRouter';
import { theme } from '@/theme';

import './index.css';

const appRoot = document.getElementById('root')

if (!appRoot) {
  throw new Error("Failed to find the root element");
}

ReactDOM.createRoot(appRoot).render(
  <React.StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>
);