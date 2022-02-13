import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Container } from "@mui/material";
import { ThemeContextProvider } from "@/react-ui/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
      </Head>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#E5E5E5",
        }}
      >
        <Container
          maxWidth="lg"
          disableGutters
          css={{
            maxHeight: "100vh",
            height: 1400,
            backgroundColor: "white",
          }}
        >
          <ThemeContextProvider>
            <Component {...pageProps} />
          </ThemeContextProvider>
        </Container>
      </div>
    </>
  );
}

export default MyApp;
