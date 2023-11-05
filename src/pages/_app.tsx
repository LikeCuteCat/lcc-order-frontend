import '../../styles/globals.css'
import React, {useRef} from 'react'
import type { AppProps } from 'next/app'
import { NextWebVitalsMetric } from "next/app";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { DehydratedState } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from 'next/head'

interface MyAppProps extends AppProps {
  pageProps: {
    dehydratedState?: DehydratedState;
  };
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <title>ICC Order</title>
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  ); 
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}


export default MyApp
