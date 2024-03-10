'use client';
import { Inter } from 'next/font/google';
// import { store } from './store';
import { store, persistor } from './store';
import { Provider, useSelector } from 'react-redux';
import AppThemeProvider from './_assets/AppThemeProvider';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { materialTheme } from './_assets/materialTheme';
import { PersistGate } from 'redux-persist/integration/react';
import useSecure from './_hooks/useSecure';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const auth = useSelector((state: any) => state.auth) as IAuthState;
  // useEffect(() => {
  //   enqueueSnackbar(auth.error?.message);
  //   console.log('hey');

  // }, [auth.error]);
  return (

    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AppRouterCacheProvider>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <CssBaseline />
            <ThemeProvider theme={materialTheme}>
              {/* <SnackbarProvider maxSnack={3}> */}
              <html>
                <body>
                  {children}
                </body>
              </html>
              {/* </SnackbarProvider> */}
            </ThemeProvider>
            {/* </PersistGate> */}
          </AppRouterCacheProvider>
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
function useEffect(arg0: () => void, arg1: any[]) {
  throw new Error('Function not implemented.');
}

