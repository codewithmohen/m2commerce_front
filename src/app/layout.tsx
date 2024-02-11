'use client';
import { Inter } from 'next/font/google';
// import { store } from './store';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import AppThemeProvider from './_assets/AppThemeProvider';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { materialTheme } from './_assets/materialTheme';
import { PersistGate } from 'redux-persist/integration/react';
import useSecure from './_hooks/useSecure';
const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          {/* <PersistGate loading={null} persistor={persistor}> */}
          <CssBaseline />
          <ThemeProvider theme={materialTheme}>
            <html>
              <body>
                {children}
              </body>
            </html>
          </ThemeProvider>
          {/* </PersistGate> */}
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
