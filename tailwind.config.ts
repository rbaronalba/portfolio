import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Evita que purgue clases clave de imágenes/layout
    "object-cover",
    "object-contain",
    "object-center",
    "w-full",
    "h-full",
    "aspect-[16/9]",
    "rounded-2xl",
    "overflow-hidden",
  ],
  theme: { extend: {} },
  plugins: [],
} as Config;
