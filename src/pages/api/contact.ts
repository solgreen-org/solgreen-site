import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Validação básica
    if (!data.nome || !data.email || !data.telefone || !data.mensagem) {
      return new Response(
        JSON.stringify({ success: false, message: "Preencha todos os campos obrigatórios." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const smtpHost = import.meta.env.SMTP_HOST || process.env.SMTP_HOST;
    const smtpPort = Number(import.meta.env.SMTP_PORT || process.env.SMTP_PORT || "587");
    const smtpUser = import.meta.env.SMTP_USER || process.env.SMTP_USER;
    const smtpPass = import.meta.env.SMTP_PASS || process.env.SMTP_PASS;
    const smtpFrom = import.meta.env.SMTP_FROM || process.env.SMTP_FROM || "noreply@solgreen.com.br";
    const smtpTo = import.meta.env.SMTP_TO || process.env.SMTP_TO || "contato@solgreen.com.br";

    if (!smtpHost || !smtpUser || !smtpPass) {
      return new Response(
        JSON.stringify({ success: false, message: "Serviço de e-mail não configurado." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      family: 4,
    });

    const htmlBody = `
      <h2>Novo contato pelo site SolGreen</h2>
      <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
        <tr><td style="border:1px solid #ddd;padding:8px"><strong>Nome</strong></td><td style="border:1px solid #ddd;padding:8px">${String(data.nome || "")}</td></tr>
        <tr><td style="border:1px solid #ddd;padding:8px"><strong>E-mail</strong></td><td style="border:1px solid #ddd;padding:8px">${String(data.email || "")}</td></tr>
        <tr><td style="border:1px solid #ddd;padding:8px"><strong>Telefone</strong></td><td style="border:1px solid #ddd;padding:8px">${String(data.telefone || "")}</td></tr>
        <tr><td style="border:1px solid #ddd;padding:8px"><strong>Empresa</strong></td><td style="border:1px solid #ddd;padding:8px">${String(data.empresa || "—")}</td></tr>
        <tr><td style="border:1px solid #ddd;padding:8px"><strong>Estado</strong></td><td style="border:1px solid #ddd;padding:8px">${String(data.estado || "—")}</td></tr>
        <tr><td style="border:1px solid #ddd;padding:8px"><strong>Cidade</strong></td><td style="border:1px solid #ddd;padding:8px">${String(data.cidade || "—")}</td></tr>
        <tr><td style="border:1px solid #ddd;padding:8px"><strong>Mensagem</strong></td><td style="border:1px solid #ddd;padding:8px">${String(data.mensagem || "").replace(/\n/g, "<br>")}</td></tr>
        ${data.consumo ? `<tr><td style="border:1px solid #ddd;padding:8px"><strong>Consumo mensal</strong></td><td style="border:1px solid #ddd;padding:8px">${String(data.consumo)}</td></tr>` : ""}
        ${data.orientacao ? `<tr><td style="border:1px solid #ddd;padding:8px"><strong>Orientação solar</strong></td><td style="border:1px solid #ddd;padding:8px">${String(data.orientacao)}</td></tr>` : ""}
      </table>
    `;

    await transporter.sendMail({
      from: `"Site SolGreen" <${smtpFrom}>`,
      to: smtpTo,
      replyTo: String(data.email),
      subject: "Novo contato pelo site SolGreen",
      text: `Nome: ${data.nome}\nE-mail: ${data.email}\nTelefone: ${data.telefone}\nEmpresa: ${data.empresa || "—"}\nEstado: ${data.estado || "—"}\nCidade: ${data.cidade || "—"}\nMensagem: ${data.mensagem}`,
      html: htmlBody,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Mensagem enviada com sucesso!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Erro interno ao enviar mensagem." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
