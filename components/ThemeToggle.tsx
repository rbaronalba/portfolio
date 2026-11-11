// components/ThemeToggle.tsx
"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const KEY = "theme";
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = (localStorage.getItem(KEY) as "dark" | "light") || null;
    const initial = stored || "dark";
    // ponytail: leído tras montar a propósito, el servidor no tiene localStorage (evita mismatch de hidratación)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(KEY, next);
  };

  return (
    <button
      onClick={toggle}
      id="theme-toggle"
      className="icon-btn theme-toggle"
      type="button"
      title="Cambiar tema"
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      <span className="spin" aria-hidden="true">{theme === "dark" ? "🌙" : "☀️"}</span>
    </button>
  );
}
