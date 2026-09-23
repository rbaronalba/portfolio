"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "es" | "en";
const KEY = "lang";
const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "es", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    if (localStorage.getItem(KEY) === "en") setLang("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(KEY, lang);
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

// Uso: const t = useT(); t("Hola", "Hello")
export function useT() {
  const { lang } = useContext(LangContext);
  return (es: string, en: string) => (lang === "en" ? en : es);
}

export function useLang() {
  return useContext(LangContext).lang;
}

// ponytail: SVG en vez de emoji porque Windows no pinta banderas emoji
const FlagES = () => (
  <svg viewBox="0 0 30 20" width="22" height="15" aria-hidden="true">
    <rect width="30" height="20" fill="#AA151B" />
    <rect y="5" width="30" height="10" fill="#F1BF00" />
  </svg>
);

const FlagUK = () => (
  <svg viewBox="0 0 60 30" width="22" height="15" aria-hidden="true" preserveAspectRatio="none">
    <clipPath id="uk-clip"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-clip)" stroke="#C8102E" strokeWidth="4" />
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

export function LangToggle() {
  const { lang, setLang } = useContext(LangContext);
  const next = lang === "es" ? "en" : "es";
  return (
    <button
      onClick={() => setLang(next)}
      className="icon-btn"
      type="button"
      title={lang === "es" ? "Switch to English" : "Cambiar a español"}
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
    >
      <span className="spin">{lang === "es" ? <FlagUK /> : <FlagES />}</span>
    </button>
  );
}
