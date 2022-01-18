import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import GlobalStyles from "../react-ui/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <GlobalStyles />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
