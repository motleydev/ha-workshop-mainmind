import type { AppProps } from "next/app";

// import { Provider, createStore } from "../store/store";

import "../styles/globals.css";
import withUrqlClient from "../utils/client";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withUrqlClient(MyApp);
