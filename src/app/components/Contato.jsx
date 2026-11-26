"use client";
import { sinalizar } from "./Medicao";
import { useState } from "react";
const email = "pethersonzada@gmail.com";
export default function Contato() {
  const [status, setStatus] = useState("");
  async function copiar() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("E-mail copiado.");
      sinalizar("email_copy");
    } catch {
      setStatus("Selecione o endereço acima para copiar manualmente.");
    }
  }
  return (
    <section id="contato" className="contact">
      <h2>Fale comigo</h2>
      <p>
        Para conversar sobre uma vaga, envie a descrição da função. Para um
        projeto, conte qual tarefa você quer facilitar e quem vai usar o
        sistema.
      </p>
      <div className="actions">
        <a data-evento="email_click" href={`mailto:${email}`}>{email}</a>
        <button type="button" onClick={copiar}>
          Copiar e-mail
        </button>
        <a data-evento="linkedin_click" href="https://www.linkedin.com/in/pethersonzada">LinkedIn ↗</a>
      </div>
      <small role="status">{status}</small>
    </section>
  );
}
