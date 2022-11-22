import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showCTA = router.pathname === '/contact' ? false : true;
  return (
    <>
      <NextNProgress
        color='#3949ab'
        height={8}
        showOnShallow={true}
        options={{ showSpinner: true }}
        startPosition={0.3}
      />
      <Navbar />
      <Component {...pageProps} />
      {showCTA && <CTA />}
      <Footer />
    </>
  );
}

export default MyApp;
