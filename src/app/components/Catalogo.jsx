"use client";
import { useState } from "react";
export default function Catalogo({ projetos }) {
  const [filtro, selecionar] = useState("Todos");
  const filtrados = projetos.filter(
    (p) => filtro === "Todos" || p.grupo === filtro,
  );
  return (
    <>
      <div
        className="actions"
        role="group"
        aria-label="Filtrar outros projetos"
      >
        {["Todos", "Dados", "Aplicações", "Automação"].map((f) => (
          <button
            type="button"
            key={f}
            aria-pressed={f === filtro}
            onClick={() => selecionar(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p role="status">
        {filtrados.length} {filtrados.length === 1 ? "projeto" : "projetos"}
      </p>
      <div className="rows">
        {filtrados.map((p) => (
          <div key={p.nome}>
            <h3>
              <a data-evento="github_click" href={p.url}>{p.nome} ↗</a>
            </h3>
            <p>{p.resumo}</p>
          </div>
        ))}
      </div>
    </>
  );
}
