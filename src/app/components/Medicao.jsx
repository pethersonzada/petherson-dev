"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Sinal local, sem SDK, persistência ou transporte para terceiros.
export function sinalizar(nome, propriedades = {}) {
  window.dispatchEvent(new CustomEvent("portfolio:evento", {
    detail: { nome, propriedades },
  }));
}

const acoes = new Set(["contact_click", "email_click", "linkedin_click", "github_click",
  "resume_download", "demo_click", "service_interest"]);

export default function Medicao({ slugs }) {
  const path = usePathname();
  const anterior = useRef(null);

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
  return null;
}
