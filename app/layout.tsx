// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Rubén Barona Alba",
  description:
    "Portfolio de proyectos del Máster en Big Data aplicado al Scouting en Fútbol",
  metadataBase: new URL("https://rubenbarona.github.io/portfolio"),
  openGraph: {
    type: "website",
    title: "Portfolio | Rubén Barona Alba",
    description:
      "Portfolio de proyectos: software, datos y machine learning aplicados al fútbol.",
    url: "https://rubenbarona.github.io/portfolio",
    images: ["/assets/cover.png"], 
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://rubenbarona.github.io/portfolio" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d10" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
