import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@/styles/globalComponentsStyles.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
