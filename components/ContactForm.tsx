"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useT } from "@/components/Lang";

const TOAST_MS = 3000; // igual que la animación de .toast-bar en globals.css

type Toast = { ok: boolean; msg: string; id: number };

export default function ContactForm() {
  const [toast, setToast] = useState<Toast | null>(null);
  const [loading, setLoading] = useState(false);
  const t = useT();

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), TOAST_MS);
    return () => clearTimeout(id);
  }, [toast]);

  const notify = (ok: boolean) =>
    setToast({
      ok,
      msg: ok ? t("Mensaje enviado. Te responderé pronto.", "Message sent. I'll get back to you soon.") : t("No se pudo enviar. Inténtalo de nuevo.", "Could not send. Please try again."),
      id: Date.now(),
    });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    // honeypot
    if (fd.get("company")) return notify(true);

    setLoading(true);
    let ok = false;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          message: fd.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      ok = res.ok;
    } catch {}
    setLoading(false);
    notify(ok);
    if (ok) form.reset(); // si falla, no perder lo escrito
  }

  return (
    <div id="contacto">
      <form className="contact-form" onSubmit={onSubmit} autoComplete="off">
        <input
          type="text"
          name="company"
          tabIndex={-1}
          style={{ position: "absolute", left: -9999, opacity: 0 }}
          aria-hidden="true"
        />
        <label htmlFor="name">{t("Nombre", "Name")}</label>
        <input id="name" name="name" required placeholder={t("Escribe tu nombre", "Your name")} />

        <label htmlFor="email">{t("Correo electrónico", "Email")}</label>
        <input id="email" name="email" type="email" required placeholder={t("tucorreo@ejemplo.com", "you@example.com")} />

        <label htmlFor="message">{t("Mensaje", "Message")}</label>
        <textarea id="message" name="message" rows={6} required placeholder={t("¿En qué puedo ayudarte?", "How can I help you?")} />

        <button className="btn btn-lg submit-btn" type="submit" disabled={loading}>
          {loading ? t("Enviando…", "Sending…") : t("Enviar mensaje", "Send message")}
        </button>
      </form>

      {/* Portal: el panel tiene clip-path y recortaría un elemento fixed */}
      {toast &&
        createPortal(
          <div key={toast.id} className={`toast ${toast.ok ? "ok" : "err"}`} role={toast.ok ? "status" : "alert"}>
            <span className="toast-icon" aria-hidden="true">{toast.ok ? "✓" : "!"}</span>
            <span>{toast.msg}</span>
            <i className="toast-bar" aria-hidden="true" />
          </div>,
          document.body
        )}
    </div>
  );
}
