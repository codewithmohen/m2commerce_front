import { createTheme } from '@mui/material/styles';

export const materialTheme = createTheme({
	spacing: 8,
	palette: {
		primary: {
			main: '#58cae6',
			light: '#58cae6',
			dark: '#ff8900',
			contrastText: 'snow',
		},
		secondary: {
			main: '#262733',
			light: '#262733',
			dark: '#262733',
			contrastText: 'snow',
		},
	},
});
