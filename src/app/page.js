import Image from "next/image";
import Trajectory from "./components/Trajectory";
import Evidence from "./components/Evidence";
import ResumeDownload from "./components/ResumeDownload";
import Link from "next/link";
import { cases } from "./data/cases";
import { pageMeta, origin } from "./data/site";
import { ProjectCard } from "./components/Projects";
export const metadata = pageMeta(
  "Miguel Petherson | Desenvolvedor Fullstack",
  "Conheça Miguel Petherson e seus projetos de aplicações web, mobile e APIs, com código, telas reais e decisões técnicas.",
  "/",
);
const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Miguel Petherson Silva",
  url: origin,
  sameAs: [
    "https://github.com/pethersonzada",
    "https://www.linkedin.com/in/pethersonzada",
  ],
};
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="hero">
        <div>
          <p className="kicker hero-eyebrow"><span aria-hidden="true"/> Miguel Petherson Silva</p>
          <h1>
            Desenvolvedor <em>full stack.</em>
          </h1>
          <p className="lead">
            Desenvolvo aplicações web, mobile e APIs que transformam problemas reais em sistemas funcionais. Do planejamento à publicação.
          </p>
          <div className="actions">
            <a className="button primary" href="#projetos">
              Ver projetos ↓
            </a>
            <a className="button" data-evento="contact_click" href="#contato">
              Entrar em contato
            </a>
            <Link className="button resume-cta" href="/curriculo">Currículo →</Link>
            <ResumeDownload/>
          </div>
          <div className="hero-stack" aria-label="Principais tecnologias"><span>Java</span><span>Spring Boot</span><span>React Native</span><span>Next.js</span><span>Python</span></div>
        </div>
        <aside className="profile-card" aria-label="Perfil de Miguel Petherson">
          <div className="profile-photo" role="img" aria-label="Foto de perfil de Miguel Petherson"><span aria-hidden="true">MP</span></div>
          <div><p className="kicker">Desenvolvimento de software</p><h2>Miguel Petherson</h2><p>Estudante de Análise e Desenvolvimento de Sistemas · UNINASSAU</p></div>
          <div className="profile-links"><a data-evento="github_click" href="https://github.com/pethersonzada">GitHub ↗</a><a data-evento="linkedin_click" href="https://www.linkedin.com/in/pethersonzada/">LinkedIn ↗</a></div>
        </aside>
      </section>
      <section className="flagship" aria-labelledby="flagship-title">
        <div className="flagship-copy"><p className="kicker">Projeto em destaque / 01</p><h2 id="flagship-title">BeVans</h2><p className="lead">Um ecossistema para organizar o transporte por vans.</p><p>Aplicativo Android, plataforma web, API Java e assistente de suporte. Desenvolvimento técnico de ponta a ponta, apresentado na faculdade em novembro de 2026.</p><div className="actions"><Link className="button primary" href="/projetos/bevans">Explorar o projeto →</Link><Link className="button" href="/projetos/bevans#demonstracao">Ver demonstração</Link><a className="button" data-evento="demo_click" href="https://bevans-webapp.vercel.app/">Visitar plataforma ↗</a></div></div>
        <Link
          className="feature"
          href="/projetos/bevans"
          aria-labelledby="destaque-bevans"
        >
          <div className="devices">
            <Image
              src="/cases/revisao.webp"
              width={355}
              height={770}
              sizes="(max-width: 600px) 34vw, 180px"
              alt="Revisão dos dados de uma turma no Android"
            />
            <Image
              src="/cases/rotas.webp"
              width={355}
              height={770}
              sizes="(max-width: 600px) 34vw, 180px"
              alt="Busca de rotas públicas no Android"
            />
          </div>
          <div className="featureCaption" id="destaque-bevans">
            <strong>BeVans</strong>
            <span>Explorar case ↗</span>
          </div>
        </Link>
      </section>
      <section id="projetos">
        <p className="kicker section-index">02 / Projetos</p>
        <div className="heading">
          <h2>Projetos selecionados</h2>
          <Link href="/projetos">Catálogo completo →</Link>
        </div>
        <div className="grid">
          {cases.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <Evidence/>
      <section id="servicos">
        <p className="kicker section-index">03 / Serviços</p>
        <h2>Como posso ajudar</h2>
        <div className="rows">
          {[
            [
              "Aplicações web e mobile",
              "Transformo etapas de trabalho em telas de cadastro, consulta e acompanhamento para sua equipe ou seus clientes.",
            ],
            [
              "Integrações de sistemas",
              "Conecto interfaces, APIs e bancos de dados para que uma informação registrada em uma etapa chegue à próxima.",
            ],
            [
              "Sites institucionais",
              "Organizo serviços, projetos e canais de contato em páginas que funcionam no celular e no computador.",
            ],
          ].map(([title, body]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
        <p>
          O primeiro passo é entender quem usa o processo e onde ele trava. Com
          isso, definimos o escopo e uma proposta de entrega.
        </p>
        <a className="textlink" data-evento="service_interest" href="#contato">
          Conversar sobre um projeto →
        </a>
      </section>
      <section id="sobre">
        <p className="kicker section-index">04 / Sobre</p>
        <h2>Sobre mim</h2>
        <p className="lead">
          Sou Miguel Petherson, estudante de Análise e Desenvolvimento de
          Sistemas na UNINASSAU Caruaru. Trabalho da interface às regras que
          decidem o que cada pessoa pode consultar ou alterar.
        </p>
        <p>
          No <Link href="/projetos/bevans">BeVans</Link>, integro mobile, mapas
          e API Java. No <Link href="/projetos/helpdesk-ti">HelpDesk TI</Link>,
          uso Python para separar serviços e testar falhas. Meu{" "}
          <Link href="/projetos">catálogo</Link> também reúne experimentos de
          análise de dados e automação.
        </p>
        <div className="skill-grid">{[["Backend","Java · Spring Boot · Python · FastAPI"],["Frontend e mobile","React · Next.js · React Native · Expo"],["Dados e infraestrutura","PostgreSQL · SQL · Firebase · Docker · Oracle Cloud"]].map(([title,body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>
      <Trajectory/>
    </>
  );
}
