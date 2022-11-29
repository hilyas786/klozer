/* eslint-disable no-unneeded-ternary */
import { React, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

function usePrevious(value) {
  // eslint-disable-next-line prefer-const
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showCTA = router.pathname === '/contact' ? false : true;
  const showLogin = router.pathname === '/login-example' ? false : true;
  // eslint-disable-next-line prefer-const
  let previousPathname = usePrevious(router.pathname);

  return (
    <>
      <NextNProgress
        color="#3949ab"
        height={8}
        showOnShallow={true}
        options={{ showSpinner: true }}
        startPosition={0.3}
      />
      {showLogin && <Navbar />}
      <Component previousPathname={previousPathname} {...pageProps} />
      {showCTA && <CTA />}
      <Footer />
    </>
  );
}

export default MyApp;
