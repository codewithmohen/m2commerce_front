"use client";
import { Inter } from "next/font/google";
import { store } from "./store";
import { Provider } from "react-redux";
import AppThemeProvider from "./theme/AppThemeProvider";
import { CssBaseline } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <CssBaseline />
        <html lang="en">
          <body>{children}</body>
        </html>
      </AppThemeProvider>
    </Provider>
  );
}
