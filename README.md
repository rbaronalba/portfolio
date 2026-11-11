# Portfolio — Rubén Barona Alba

Portfolio personal construido con Next.js (App Router), React y TypeScript. Panel de navegación hexagonal con proyectos de fútbol/datos y proyectos web, CV descargable, formulario de contacto (Nodemailer vía SMTP) y soporte ES/EN y modo claro/oscuro.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Formulario de contacto (`app/api/contact/route.ts`):

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
MAIL_TO=
MAIL_FROM=
```

SEO (opcional, usada en metadata/sitemap/robots):

```
NEXT_PUBLIC_SITE_URL=https://rubenbarona.es
```

En producción (Vercel) estas variables se configuran en **Project Settings → Environments → Production**, no en `.env` (que no se sube al repo).

## Estructura

- `app/page.tsx` — contenido del portfolio (proyectos, CV, sobre mí) y datos de cada proyecto.
- `app/api/contact/route.ts` — endpoint del formulario de contacto.
- `components/` — UI (panel hexagonal, formulario, toggles de tema/idioma).
- `public/img/projects/`, `public/pdf/` — capturas y PDFs de los proyectos.

## Deploy

Desplegado en Vercel, con build automático en cada push a `main`.
