import '../styles/global.css';

import type { AppProps } from 'next/app';

import { Header } from '@/header'; // or wherever your Header component lives

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
  </>
);

export default MyApp;
