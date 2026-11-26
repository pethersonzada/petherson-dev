const host = "petherson-dev.vercel.app";
const nomes = new Set(["project_view", "case_study_view", "contact_click", "email_click",
  "email_copy", "linkedin_click", "github_click", "resume_download", "demo_click", "service_interest"]);

export function siteConfigurado(id) {
  return /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(id ?? "");
}

// O caminho enviado é reconstruído a partir das rotas públicas permitidas.
export function enviar({ id, aceito, hostname, caminho, slugs, sinal, fetcher }) {
  if (!aceito || hostname !== host || !siteConfigurado(id)) return;
  const projeto = slugs.find(slug => caminho === "/projetos/" + slug);
  if (!projeto && caminho !== "/" && caminho !== "/projetos") return;
  const payload = { website: id, hostname: host, url: projeto ? "/projetos/" + projeto : caminho };
  if (sinal !== undefined) {
    if (!nomes.has(sinal?.nome)) return;
    payload.name = sinal.nome;
    if (projeto) payload.data = { projeto };
  }
  return fetcher("https://gateway.umami.is/api/send", {
    method: "POST", headers: { "Content-Type": "application/json" },
    credentials: "omit", referrerPolicy: "no-referrer", keepalive: true,
    body: JSON.stringify({ type: "event", payload }),
  }).catch(() => {}); // Uma falha de medição não interrompe a navegação.
}
