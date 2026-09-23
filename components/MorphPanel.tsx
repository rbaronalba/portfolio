"use client";
import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";
import type { HexRect } from "./Comb";

const DUR = 700; // igual que la transición de .panel en globals.css

// Nace encima de la celda pulsada y crece hasta tarjeta; al cerrar vuelve a encogerse en ella
export default function MorphPanel({
  rect, closeLabel, onClosing, onClosed, children,
}: {
  rect: HexRect;
  closeLabel: string;
  onClosing: () => void;
  onClosed: () => void;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const closing = useRef(false);

  const close = () => {
    if (closing.current) return;
    closing.current = true;
    setOpen(false);
    onClosing();
    setTimeout(onClosed, DUR);
  };

  useEffect(() => {
    // Doble rAF: que el navegador pinte primero el hexágono para que haya transición
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
    closeBtn.current?.focus({ preventScroll: true });
    const esc = (e: KeyboardEvent) => e.key === "Escape" && close();
    addEventListener("keydown", esc);
    return () => { cancelAnimationFrame(id); removeEventListener("keydown", esc); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = { "--x": `${rect.x}px`, "--y": `${rect.y}px`, "--w": `${rect.w}px`, "--h": `${rect.h}px` } as CSSProperties;

  return (
    <div className={`panel${open ? " open" : ""}`} style={style} role="dialog" aria-modal="true" aria-labelledby="panel-title">
      <button ref={closeBtn} className="panel-close" type="button" onClick={close} aria-label={closeLabel}>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
      <div className="panel-inner">{children}</div>
    </div>
  );
}
