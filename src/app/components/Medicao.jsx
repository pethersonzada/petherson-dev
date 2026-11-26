"use client";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { enviar, siteConfigurado } from "./umami.mjs";
import { usePathname } from "next/navigation";

// Sinal local, sem SDK, persistência ou transporte para terceiros.
export function sinalizar(nome, propriedades = {}) {
  window.dispatchEvent(new CustomEvent("portfolio:evento", {
    detail: { nome, propriedades },
  }));
}

const acoes = new Set(["contact_click", "email_click", "linkedin_click", "github_click",
  "resume_download", "demo_click", "service_interest"]);

function observar(atualizar) {
  window.addEventListener("storage", atualizar);
  window.addEventListener("portfolio:preferencia", atualizar);
  return () => {
    window.removeEventListener("storage", atualizar);
    window.removeEventListener("portfolio:preferencia", atualizar);
  };
}

function lerPreferencia() {
  if (!siteConfigurado(process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID) || location.hostname !== "petherson-dev.vercel.app") return "indisponivel";
  try { return localStorage.getItem("portfolio:medicao") === "sim" ? "sim" : "nao"; }
  catch { return "indisponivel"; }
}

export default function Medicao({ slugs }) {
  const path = usePathname();
  const anterior = useRef(null);
  const ultimaMedida = useRef(null);
  const id = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const preferencia = useSyncExternalStore(observar, lerPreferencia, () => "indisponivel");
  const disponivel = siteConfigurado(id) && preferencia !== "indisponivel";
  const aceito = disponivel && preferencia === "sim";

  useEffect(() => {
    if (!aceito) { ultimaMedida.current = null; return; }
    const contexto = { id, aceito, hostname: location.hostname, caminho: path, slugs, fetcher: window.fetch.bind(window) };
    if (ultimaMedida.current !== path) {
      ultimaMedida.current = path;
      enviar(contexto);
      // Também conta a entrada atual quando a pessoa consente no meio da visita.
      if (path === "/projetos") enviar({ ...contexto, sinal: { nome: "project_view" } });
      if (slugs.some(s => path === "/projetos/" + s)) enviar({ ...contexto, sinal: { nome: "case_study_view" } });
    }
    function medir(event) {
      const nome = event.detail?.nome;
      if (nome !== "project_view" && nome !== "case_study_view") enviar({ ...contexto, sinal: event.detail ?? null });
    }
    window.addEventListener("portfolio:evento", medir);
    return () => window.removeEventListener("portfolio:evento", medir);
  }, [id, aceito, path, slugs]);

  useEffect(() => {
    if (anterior.current === path) return;
    anterior.current = path;
    if (path === "/projetos") sinalizar("project_view");
    const projeto = slugs.find(slug => path === "/projetos/" + slug);
    if (projeto) sinalizar("case_study_view", { projeto });
  }, [path, slugs]);

  useEffect(() => {
    function aoClicar(event) {
      const link = event.target.closest?.("a[data-evento]");
      if (!link || !acoes.has(link.dataset.evento)) return;
      const projeto = slugs.find(slug => path === "/projetos/" + slug);
      sinalizar(link.dataset.evento, projeto ? { projeto } : {});
    }
    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, [path, slugs]);
  if (!disponivel) return null;
  return <label className="wrap medicao"><input type="checkbox" checked={aceito} onChange={e => {
    const valor = e.target.checked;

    try { localStorage.setItem("portfolio:medicao", valor ? "sim" : "nao"); } catch {}
    window.dispatchEvent(new Event("portfolio:preferencia"));
  }} /> Permitir que Miguel meça páginas e cliques com Umami. Opcional. Retenção de até seis meses no painel. Desmarque para parar.</label>;
}
