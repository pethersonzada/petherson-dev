import Link from "next/link";
import { pageMeta } from "../data/site";
import PrintResume from "../components/PrintResume";
import ResumeDownload from "../components/ResumeDownload";
export const metadata=pageMeta("Currículo","Formação, experiência, competências e projetos de Miguel Petherson Silva.","/curriculo");
export default function Resume(){
 return <article className="resume-page">
  <div className="resume-tools actions"><Link href="/">← Portfólio</Link><PrintResume/><ResumeDownload/></div>
  <div className="resume-paper">
   <header><h1>Miguel Petherson Silva</h1><p className="lead">Desenvolvimento full stack | Web, mobile e APIs</p><p>Bezerros, PE · <a href="mailto:pethersonzada@gmail.com">pethersonzada@gmail.com</a></p><p><a href="https://petherson-dev.vercel.app">petherson-dev.vercel.app</a> · <a href="https://github.com/pethersonzada">github.com/pethersonzada</a> · <a href="https://www.linkedin.com/in/pethersonzada/">LinkedIn</a></p></header>
   <section><h2>Perfil</h2><p>Estudante de Análise e Desenvolvimento de Sistemas com projetos de aplicações web e mobile. Integro interfaces, APIs e bancos de dados e testo fluxos de autenticação, autorização e falha de serviços.</p></section>
   <section><h2>Projetos</h2><h3>BeVans | Transporte universitário</h3><p>Desenvolvi fluxos de presença e viagem para passageiros e motoristas. Integrei o app em React Native e Expo à API Spring Boot com autenticação Firebase e persistência em PostgreSQL.</p><h3>HelpDesk TI | Arquitetura de software</h3><p>Configurei o gateway e os bancos SQLite por serviço. Adaptei chamadas HTTP entre serviços FastAPI e escrevi testes de integração e autorização, incluindo indisponibilidade do inventário.</p><h3>Marketplace de Serviços | Protótipo acadêmico</h3><p>Implementei páginas de serviços em Next.js e React. Adaptei navegação e cupons para telas menores e acrescentei confirmações aos formulários. O checkout simula a conclusão de um pedido.</p></section>
   <section><h2>Competências</h2><p>JavaScript, TypeScript, React, Next.js, React Native, Expo, Java, Spring Boot, Python, FastAPI, SQL, PostgreSQL, SQLite, Git e Docker Compose.</p></section>
   <section><h2>Formação</h2><h3>Análise e Desenvolvimento de Sistemas | UNINASSAU Caruaru</h3><p>Graduação em andamento, iniciada em 2025.</p><h3>Técnico em Redes de Computadores | ETE Maria José Vasconcelos</h3><p>Ensino médio técnico, 2022 a 2024.</p></section>
   <section><h2>Experiência</h2><h3>Jovem Aprendiz, setor RM | Novo Atacarejo</h3><p>Desde 2026. Conferência de notas fiscais, acompanhamento de chamados e organização de documentos de recebimento de mercadorias.</p></section>
  </div>
 </article>;
}
