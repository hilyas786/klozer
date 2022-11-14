import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
