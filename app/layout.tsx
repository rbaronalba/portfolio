// app/layout.tsx
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

// Si quieres URLs absolutas en meta, pon NEXT_PUBLIC_SITE_URL en Vercel.
// Si no, Next generará relativas y no pasa nada.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: 'Portfolio | Rubén Barona Alba',
  icons: {
    icon: [
      { url: '/tab.png', type: 'image/png' }
    ]
  },
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
        },
        twitter: { card: 'summary_large_image' },
      }
    : {
        // Sin SITE_URL: metas sin absolutas (válido en Vercel igualmente)
        openGraph: {
          type: 'website',
          title: 'Portfolio | Rubén Barona Alba',
          description:
            'Portfolio de proyectos: software, datos y machine learning aplicados al fútbol.',
        },
        twitter: { card: 'summary_large_image' },
      }),
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
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
