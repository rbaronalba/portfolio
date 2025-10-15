// app/layout.tsx
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.DEPLOY_TARGET === 'gh-pages'
    ? 'https://rbaronaalba.github.io/portfolio'
    : 'https://portfolio-one-xi-38.vercel.app');

export const metadata: Metadata = {
  title: 'Portfolio | Rubén Barona Alba',
  description: 'Portfolio de proyectos del Máster en Big Data aplicado al Scouting en Fútbol',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: { type: 'website', url: SITE_URL, title: 'Portfolio | Rubén Barona Alba' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
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
