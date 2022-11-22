import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { useRouter } from 'next/router';
import { ScrollToTop } from '../components/ScrollBackToTop';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showCTA = router.pathname === '/contact' ? false : true;
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
      {showCTA && <CTA />}
      <Footer />
    </>
  );
}

export default MyApp;
