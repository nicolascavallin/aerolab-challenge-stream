import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import Wrapper from "@/components/Layout/Wrapper";
import theme from "@/utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aerolab Challenge</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
