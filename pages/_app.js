import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NextNProgress />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
