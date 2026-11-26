import Link from "next/link";
export default function Trajectory() {
 const milestones=[
  {date:"2022–2024",title:"Técnico em Redes de Computadores",place:"ETE Maria José Vasconcelos",text:"Formação técnica integrada ao ensino médio, com base em redes e infraestrutura."},
  {date:"2025–atual",title:"Análise e Desenvolvimento de Sistemas",place:"UNINASSAU Caruaru",text:"Graduação em andamento, com projetos acadêmicos de desenvolvimento e arquitetura de software."},
  {date:"2026–atual",title:"Jovem Aprendiz · setor RM",place:"Novo Atacarejo",text:"Conferência de notas fiscais, acompanhamento de chamados e organização de documentos de recebimento."},
  {date:"Novembro de 2026",title:"BeVans",place:"Projeto acadêmico",text:"Desenvolvimento técnico do aplicativo, API, plataforma web e assistente; apresentação realizada pela equipe na faculdade.",link:"/projetos/bevans"},
 ];
 return <section id="trajetoria" className="trajectory" aria-labelledby="trajectory-title">
   <p className="kicker section-index">Formação e experiência</p><h2 id="trajectory-title">Minha trajetória</h2>
   <ol className="timeline">{milestones.map(m=><li key={m.title}><span className="timeline-date">{m.date}</span><div><h3>{m.title}</h3><p className="timeline-place">{m.place}</p><p>{m.text}</p>{m.link&&<Link className="textlink" href={m.link}>Ver estudo de caso →</Link>}</div></li>)}</ol>
 </section>;
}
