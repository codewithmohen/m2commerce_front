"use client";
import { Inter } from "next/font/google";
import { store } from "./store";
import { Provider } from "react-redux";
import AppThemeProvider from "./theme/AppThemeProvider";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();
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
            <body>{children}</body>
          </html>
        </QueryClientProvider>
      </AppThemeProvider>
    </Provider>
  );
}
