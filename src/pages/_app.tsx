import '../../styles/globals.css';
import React, { useRef } from 'react';
import type { AppProps } from 'next/app';
import { NextWebVitalsMetric } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { DehydratedState } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

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
    <RecoilRoot>
      <QueryClientProvider client={queryClientRef.current}>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <title>ICC Order</title>
        </Head>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default MyApp;
