import '@/styles/globals.css';
import { createTheme, NextUIProvider } from '@nextui-org/react';

const theme = createTheme({
	type: '#fff',
	theme: {
		colors: {
			primary: '#FFFF',
			secondary: '#0000',
			terciary: '#F3403A',
			fourty: '#F9F9F9',
			five: '#CFCFCF',
		},
		shadows: {
			xs: '0 2px 8px 1px rgb(104 112 118 / 0.07), 0 1px 1px -1px rgb(104 112 118 / 0.04)',
			sm: '0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)',
			md: '0 12px 20px 6px rgb(104 112 118 / 0.08)',
			lg: '0 12px 34px 6px rgb(104 112 118 / 0.18)',
			xl: '0 25px 65px 0px rgb(104 112 118 / 0.35)',
		},
		breakpoints: {
			xs: '650px',
			sm: '960px',
			md: '1280px',
			lg: '1400px',
			xl: '1920px',
		},
	},
});
function MyApp({ Component, pageProps }) {
	return (
		<NextUIProvider theme={theme}>
			<Component {...pageProps} />
		</NextUIProvider>
	);
}

export default MyApp;
