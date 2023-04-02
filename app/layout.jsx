import { IBM_Plex_Mono } from 'next/font/google';
import 'styles/globals.css';
import { Header } from 'ui/header';

const primaryFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100', '300', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
