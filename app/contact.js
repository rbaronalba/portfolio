// contact.js
(() => {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  const btn = document.getElementById('send-btn');

  const setStatus = (msg, ok = false) => {
    statusEl.textContent = msg;
    statusEl.style.color = ok ? 'var(--ok)' : 'var(--muted)';
  };

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot: si está relleno, abortar
    const honeypot = document.getElementById('company')?.value?.trim();
    if (honeypot) return;

    const name = document.getElementById('name')?.value?.trim();
    const email = document.getElementById('email')?.value?.trim();
    const message = document.getElementById('message')?.value?.trim();

    if (!name || !email || !message) {
      setStatus('Por favor, completa todos los campos.');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Enviando…';
    setStatus('Procesando tu mensaje…');

    try {
      const res = await fetch('https://TU-DOMINIO-VERCEL.vercel.app/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Si despliegas el front en GitHub Pages y la API en Vercel, usa URL absoluta.
        // Si el front y la API están bajo el mismo dominio en Vercel, puedes poner '/api/send-email'.
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || 'Error desconocido');

      setStatus('¡Mensaje enviado! Te responderé muy pronto.', true);
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus('No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.');
    } finally {
      btn.disabled = false;
      btn.textContent = 'Enviar mensaje';
    }
  });
})();
