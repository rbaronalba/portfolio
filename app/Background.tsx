'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function Background() {
  const { theme, systemTheme } = useTheme();
  const effective = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    const url =
      effective === 'light'
        ? `${prefix}/img/blanco.png`
        : `${prefix}/img/oscuro.png`;
    document.body.style.backgroundImage = `url(${url})`;
  }, [effective]);

  return null; 
}
