import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PageWithLayout } from "../types/PageLayout";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as PageWithLayout).getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
