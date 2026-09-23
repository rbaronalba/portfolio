"use client";
import { useState } from "react";
import { useT } from "@/components/Lang";

export default function ContactForm() {
  const [status, setStatus] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const t = useT();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const fd = new FormData(e.currentTarget);
    // honeypot
    if (fd.get("company")) {
      setStatus(t("Enviado.", "Sent."));
      setLoading(false);
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: fd.get("name"),
        email: fd.get("email"),
        message: fd.get("message"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) setStatus(t("Mensaje enviado.", "Message sent."));
    else setStatus(t("No se pudo enviar. Inténtalo de nuevo.", "Could not send. Please try again."));
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div id="contacto">
      <form className="contact-form" onSubmit={onSubmit} autoComplete="off" noValidate>
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

        <div id="form-status" className="muted" role="status" aria-live="polite">
          {status}
        </div>

        <button className="btn btn-lg submit-btn" type="submit" disabled={loading}>
          {loading ? t("Enviando…", "Sending…") : t("Enviar mensaje", "Send message")}
        </button>
      </form>
    </div>
  );
}
