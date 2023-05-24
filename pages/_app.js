import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  <Analytics />
  return <Component {...pageProps} />;
}

export default MyApp;
