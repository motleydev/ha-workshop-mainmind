import type { AppProps } from "next/app";

import "../styles/globals.css";
import withUrqlClient from "../utils/client";

import { store } from "../components/store/store";
import { StoreProvider } from "easy-peasy";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withUrqlClient(MyApp);
