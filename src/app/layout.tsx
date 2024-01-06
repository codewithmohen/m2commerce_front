'use client';
import { Inter } from 'next/font/google';
import { store } from './store';
import { Provider } from 'react-redux';
import AppThemeProvider from './_assets/AppThemeProvider';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { materialTheme } from './_assets/materialTheme';
const queryClient = new QueryClient();


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider theme={materialTheme}>
          <html>
            <body>
              {children}
            </body>
          </html>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}
