import { IBM_Plex_Mono } from 'next/font/google';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import 'styles/globals.css';

const primaryFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100', '300', '700'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${primaryFont.style.fontFamily};
        }
      `}</style>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}
