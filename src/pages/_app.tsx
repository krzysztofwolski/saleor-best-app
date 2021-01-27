import 'reflect-metadata';  // needed by typeorm
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Saleor app</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
