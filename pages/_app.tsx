import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

import { projectTheme } from "../theme";
import { ContentItem } from "../graphql/generated/graphql";
import { GlobalStyle } from "../styles/globalStyle";
import { useMarketData } from "../hooks/useMarketData";
import Head from "next/head";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const activeChainId = ChainId.Mumbai;

type TApp = {
  isPreviewActive?: boolean;
  story: ContentItem;
};
// type TMarketData = {
//   data: {
//     ContentNode: {
//       content: MarketdataComponent;
//     };
//   };
// };
function App({ Component, pageProps }: AppProps<TApp & Session>) {
  const router = useRouter();
  const marketData = useMarketData<any>(
    `/api/marketData?locale=${router?.locale}&isPreview=${pageProps.isPreviewActive}`,
    router?.locale ?? ""
  );
  useEffect(() => {}, [router]);
  // @ts-ignore
  return (
    <>
      <Head key={"app"}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Urbanist:wght@100;300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"
          integrity="sha512-f8mwTB+Bs8a5c46DEm7HQLcJuHMBaH/UFlcgyetMqqkvTcYg4g5VXsYR71b3qC82lZytjNYvBj2pf0VekA9/FQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
      </Head>
      {/* @ts-ignore */}
      <SessionProvider session={pageProps?.session}>
        <ThemeProvider theme={{ ...projectTheme }}>
          <ThirdwebProvider desiredChainId={activeChainId}>
            <GlobalStyle />
            <Component marketData={marketData} {...pageProps} />
          </ThirdwebProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

export default App;
