import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PageWithLayout } from '../types/PageLayout';
import { AuthProvider } from '../hooks/useAuth';
export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as PageWithLayout).getLayout || ((page) => page);

  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
}
