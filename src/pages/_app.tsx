import { ThemeContextProvider } from "@/react-ui/theme/themeContext";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import GlobalStyles from "../react-ui/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
