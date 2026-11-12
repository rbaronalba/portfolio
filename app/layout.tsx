// app/layout.tsx
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Unbounded } from 'next/font/google';
import Script from 'next/script';
import Providers from './providers';
import logo from './logo.png';

const GTM_ID = 'GTM-PT4HRMK4';

const inter = Inter({ subsets: ['latin'] });
const unbounded = Unbounded({ subsets: ['latin'], variable: '--font-display' });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: 'Portfolio | Rubén Barona Alba',
  description:
    'Portfolio de proyectos del Máster en Big Data aplicado al Scouting en Fútbol',
  ...(SITE_URL
    ? {
        metadataBase: new URL(SITE_URL),
        alternates: { canonical: SITE_URL },
        openGraph: {
          type: 'website',
          url: SITE_URL,
          title: 'Portfolio | Rubén Barona Alba',
          description:
            'Portfolio de proyectos: software, datos y machine learning aplicados al fútbol.',
          images: [{ url: logo.src, width: 1024, height: 1024 }],
        },
        twitter: { card: 'summary_large_image', images: [logo.src] },
      }
    : {
        // Sin SITE_URL: metas sin absolutas (válido en Vercel igualmente)
        openGraph: {
          type: 'website',
          title: 'Portfolio | Rubén Barona Alba',
          description:
            'Portfolio de proyectos: software, datos y machine learning aplicados al fútbol.',
          images: [{ url: logo.src, width: 1024, height: 1024 }],
        },
        twitter: { card: 'summary_large_image', images: [logo.src] },
      }),
  icons: { icon: logo.src },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f8fb' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0d10' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={unbounded.variable} suppressHydrationWarning>
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
