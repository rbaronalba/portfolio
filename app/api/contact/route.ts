// app/api/contact/route.ts
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    // Comprobación de envs
    const {
      SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM
    } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_TO || !MAIL_FROM) {
      return Response.json({ error: "Missing SMTP env vars" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true si usas 465
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const html = `
      <h2>Nuevo contacto</h2>
      <p><b>Nombre:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Mensaje:</b><br/>${String(message).replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `Contacto de ${name}`,
      replyTo: email,
      html,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return Response.json({ error: "Send failed" }, { status: 500 });
  }
}
