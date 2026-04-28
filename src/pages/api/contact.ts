import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    if (!data.nome || !data.email || !data.telefone || !data.mensagem) {
      return new Response(
        JSON.stringify({ success: false, message: "Preencha todos os campos obrigatórios." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
    const mailFrom = import.meta.env.MAIL_FROM || process.env.MAIL_FROM || "SolGreen Site <onboarding@resend.dev>";
    const mailTo = import.meta.env.MAIL_TO || process.env.MAIL_TO || "andre@aex.partners";

    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, message: "Serviço de e-mail não configurado." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

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

    const textBody = `Nome: ${data.nome}\nE-mail: ${data.email}\nTelefone: ${data.telefone}\nEmpresa: ${data.empresa || "—"}\nEstado: ${data.estado || "—"}\nCidade: ${data.cidade || "—"}\nMensagem: ${data.mensagem}`;

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: mailFrom,
        to: [mailTo],
        reply_to: String(data.email),
        subject: "Novo contato pelo site SolGreen",
        html: htmlBody,
        text: textBody,
      }),
    });

    if (!resp.ok) {
      const errBody = await resp.text();
      console.error("Resend API error:", resp.status, errBody);
      return new Response(
        JSON.stringify({ success: false, message: "Erro interno ao enviar mensagem." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

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
