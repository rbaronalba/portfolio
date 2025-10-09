// app/layout.tsx
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Rubén Barona Alba',
  description:
    'Portfolio de proyectos del Máster en Big Data aplicado al Scouting en Fútbol',
  metadataBase: new URL('https://rbaronaalba.github.io/portfolio'),
  alternates: { canonical: 'https://rbaronaalba.github.io/portfolio' },
  openGraph: {
    type: 'website',
    url: 'https://rbaronaalba.github.io/portfolio',
    title: 'Portfolio | Rubén Barona Alba',
    description:
      'Portfolio de proyectos: software, datos y machine learning aplicados al fútbol.',
    images: ['https://rbaronaalba.github.io/portfolio/assets/cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://rbaronaalba.github.io/portfolio/assets/cover.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
  },
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
