'use client';
import { Inter } from 'next/font/google';
import { store } from './store/rootReducer';
import { Provider } from 'react-redux';
import AppThemeProvider from './theme/AppThemeProvider';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <html lang="en">
            <body>
              {children}
            </body>
          </html>
        </QueryClientProvider>
      </AppThemeProvider>
    </Provider>
  );
}
