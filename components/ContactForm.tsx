"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const fd = new FormData(e.currentTarget);
    // honeypot
    if (fd.get("company")) {
      setStatus("Enviado.");
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

    if (res.ok) setStatus("Mensaje enviado.");
    else setStatus("No se pudo enviar. Intentélo de nuevo.");
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div id="contacto" className="card contact-form">
      <form className="contact-form" onSubmit={onSubmit} autoComplete="off" noValidate>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          style={{ position: "absolute", left: -9999, opacity: 0 }}
          aria-hidden="true"
        />
        <label htmlFor="name">Nombre</label>
        <input id="name" name="name" required placeholder="Escribe tu nombre" />

        <label htmlFor="email">Correo electrónico</label>
        <input id="email" name="email" type="email" required placeholder="tucorreo@ejemplo.com" />

        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" rows={6} required placeholder="¿En qué puedo ayudarte?" />

        <div id="form-status" className="muted" role="status" aria-live="polite">
          {status}
        </div>

        <button className="btn btn-lg submit-btn" type="submit" disabled={loading}>
          {loading ? "Enviando…" : "Enviar mensaje"}
        </button>
      </form>
    </div>
  );
}
