import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <CTA />
      <Footer />
    </>
  );
}

export default MyApp;
