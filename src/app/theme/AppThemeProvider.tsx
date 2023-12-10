'use client'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, pink } from "@mui/material/colors";
import React, { ReactNode } from 'react';

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }

const theme = createTheme({
    palette: {
        primary: {
            main: grey[700]
        },
        secondary: {
            main: pink[500]
        }
    }
})

interface AppThemeProviderProps {
    children: ReactNode;
  }
  
  const AppThemeProvider: React.FC<AppThemeProviderProps> = (props) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default AppThemeProvider