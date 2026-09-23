"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

export type HexRect = { x: number; y: number; w: number; h: number };
export type NavItem = { id: string; label: string; icon: ReactNode; href?: string; download?: boolean };

type Cell = { x: number; y: number };
type Layout = { w: number; h: number; cells: Cell[]; center: number; ring: number[] };

const GAP = 4, VGAP = 3, LIFT = 34, TILT = 14, RADIUS = 3.2, IDLE_MS = 4000;

const hexWidth = (vw: number) => (vw < 640 ? 64 : vw < 1100 ? 82 : vw < 1800 ? 100 : vw < 3000 ? 132 : 180);

// Rejilla odd-r: las filas impares se desplazan medio paso
function buildLayout(vw: number, vh: number): Layout {
  const w = hexWidth(vw), h = w * 1.1547;
  const sx = w + GAP, sy = h * 0.75 + VGAP;
  const cols = Math.ceil(vw / sx) + 2, rows = Math.ceil(vh / sy) + 2;
  const cells: Cell[] = [];
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) cells.push({ x: (c - 1) * sx + (r % 2 ? sx / 2 : 0), y: (r - 1) * sy });

  let center = 0, best = Infinity;
  cells.forEach((k, i) => {
    const d = (k.x + w / 2 - vw / 2) ** 2 + (k.y + h / 2 - vh / 2) ** 2;
    if (d < best) { best = d; center = i; }
  });
  const r = Math.floor(center / cols), c = center % cols, o = r % 2;
  // Vecinos en sentido horario desde arriba-derecha: NE, E, SE, SO, O, NO
  const ring = [[-1, o], [0, 1], [1, o], [1, o - 1], [0, -1], [-1, o - 1]].map(([dr, dc]) => (r + dr) * cols + c + dc);
  return { w, h, cells, center, ring };
}

export default function Comb({
  items, avatar, dim, hiddenId, onOpen,
}: {
  items: NavItem[]; // 6, en el orden del anillo
  avatar: string;
  dim: boolean;
  hiddenId?: string;
  onOpen: (id: string, rect: HexRect) => void;
}) {
  const [L, setL] = useState<Layout | null>(null);
  const els = useRef<(HTMLElement | null)[]>([]);
  const dimRef = useRef(dim);
  dimRef.current = dim;

  useEffect(() => {
    const on = () => setL(buildLayout(innerWidth, innerHeight));
    on();
    addEventListener("resize", on);
    return () => removeEventListener("resize", on);
  }, []);

  // Onda: cada celda reacciona a su distancia al cursor (o al cursor fantasma si está inactivo)
  useEffect(() => {
    if (!L) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const R = L.w * RADIUS;
    const prev = new Float32Array(L.cells.length);
    let px = -1e4, py = -1e4, dirty = false, last = performance.now(), raf = 0;

    const apply = (x: number, y: number) => {
      const light = document.documentElement.getAttribute("data-theme") === "light";
      L.cells.forEach((k, i) => {
        const el = els.current[i];
        if (!el) return;
        const dx = x - (k.x + L.w / 2), dy = y - (k.y + L.h / 2), d = Math.hypot(dx, dy);
        const t = Math.min(d / R, 1), f = 1 - t * t * (3 - 2 * t); // smoothstep
        if (f === 0 && prev[i] === 0) return;
        prev[i] = f;
        const nx = d ? dx / d : 0, ny = d ? dy / d : 0;
        el.style.transform = f
          ? `translateZ(${LIFT * f}px) rotateX(${-ny * TILT * f}deg) rotateY(${nx * TILT * f}deg) scale(${0.96 + 0.06 * f})`
          : "";
        // En claro, iluminar blanco sobre blanco no se ve: oscurecemos y saturamos hacia el azul
        el.style.filter = f
          ? light
            ? `brightness(${1 - 0.1 * f}) saturate(${1 + 1.2 * f})`
            : `brightness(${1 + 0.55 * f}) saturate(${1 + 0.3 * f})`
          : "";
      });
    };

    const move = (e: PointerEvent) => { px = e.clientX; py = e.clientY; dirty = true; last = performance.now(); };
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (dimRef.current) return;
      if (!reduce && now - last > IDLE_MS) {
        // Cursor fantasma en curva de Lissajous 3:2
        const s = now * 0.00012;
        apply(innerWidth / 2 + innerWidth * 0.38 * Math.sin(3 * s + Math.PI / 2), innerHeight / 2 + innerHeight * 0.36 * Math.sin(2 * s));
      } else if (dirty) {
        dirty = false;
        apply(px, py);
      }
    };
    addEventListener("pointermove", move);
    raf = requestAnimationFrame(tick);
    return () => { removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, [L]);

  if (!L) return <div className="comb" />;

  return (
    <div className={`comb${dim ? " dim" : ""}`}>
      {L.cells.map((k, i) => {
        const style = { left: k.x, top: k.y, width: L.w, height: L.h };
        const ref = (el: HTMLElement | null) => { els.current[i] = el; };
        if (i === L.center)
          return (
            <div key={i} ref={ref} className="hex hex-center" style={style} aria-hidden="true">
              <img src={avatar} alt="" />
            </div>
          );
        const n = L.ring.indexOf(i);
        if (n < 0) return <div key={i} ref={ref} className="hex" style={style} aria-hidden="true" />;

        const it = items[n];
        const cls = `hex hex-nav${hiddenId === it.id ? " gone" : ""}`;
        const face = (
          <span className="face">
            {it.icon}
            <span className="lbl" style={{ fontSize: Math.max(9, L.w * 0.09) }}>{it.label}</span>
          </span>
        );
        return it.href ? (
          <a key={i} ref={ref} className={cls} style={style} href={it.href} aria-label={it.label}
            {...(it.download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}>
            {face}
          </a>
        ) : (
          <button key={i} ref={ref} className={cls} style={style} type="button" data-id={it.id} aria-label={it.label}
            onClick={() => onOpen(it.id, { x: k.x, y: k.y, w: L.w, h: L.h })}>
            {face}
          </button>
        );
      })}
    </div>
  );
}
