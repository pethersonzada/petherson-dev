"use client";
import Image from "next/image";
import { useState } from "react";

const steps = [
  {image:"revisao", title:"Planejar a turma", detail:"O motorista confere turno, capacidade e trajeto antes de criar uma turma."},
  {image:"turma", title:"Confirmar a criação", detail:"O aplicativo confirma a turma de teste criada e registra sua operação."},
  {image:"rotas", title:"Consultar rotas públicas", detail:"O passageiro pode consultar o catálogo e filtrar rotas disponíveis."},
];
export default function DemoBevans() {
  const [index,setIndex]=useState(0);
  const step=steps[index];
  return <section className="demo-section" aria-labelledby="demo-title" id="demonstracao">
    <div className="demo-intro"><p className="kicker">Demonstração guiada</p><h2 id="demo-title">BeVans por dentro</h2><p>Explore três telas reais do aplicativo Android. Esta sequência usa capturas da homologação; não é uma execução ao vivo.</p></div>
    <div className="demo-stage">
      <div className="demo-device"><Image key={step.image} src={"/cases/"+step.image+".webp"} width={355} height={770} sizes="220px" alt={step.title}/></div>
      <div className="demo-copy">
        <p className="kicker">Etapa {index+1} de {steps.length}</p>
        <div aria-live="polite" aria-atomic="true"><h3>{step.title}</h3><p>{step.detail}</p></div>
        <div className="demo-tabs" role="group" aria-label="Etapas da demonstração">{steps.map((s,i)=><button key={s.image} aria-pressed={i===index} onClick={()=>setIndex(i)} type="button">{String(i+1).padStart(2,"0")} {s.title}</button>)}</div>
        <div className="actions"><button type="button" disabled={index===0} onClick={()=>setIndex(i=>i-1)}>← Anterior</button><button type="button" disabled={index===steps.length-1} onClick={()=>setIndex(i=>i+1)}>Próxima →</button></div>
        <a className="textlink" data-evento="demo_click" href="https://bevans-webapp.vercel.app/">Conhecer a plataforma web ↗</a>
      </div>
    </div>
  </section>;
}
