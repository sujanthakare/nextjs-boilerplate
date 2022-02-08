import React from "react";
import { AuthContextProvider } from "@/flex-ui/contexts/auth-context";
import { ThemeContextProvider } from "@/react-ui/theme";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeContextProvider>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
