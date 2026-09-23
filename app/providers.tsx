'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { LangProvider } from '@/components/Lang';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LangProvider>{children}</LangProvider>
    </ThemeProvider>
  );
}
