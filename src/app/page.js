import Image from "next/image";
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
          <p className="kicker">Miguel Petherson Silva</p>
          <h1>
            Desenvolvedor <em>fullstack.</em>
          </h1>
          <p className="lead">
            Crio aplicações web e mobile para organizar operações do dia a dia,
            da confirmação de passageiros ao atendimento de chamados de TI.
          </p>
          <div className="actions">
            <a className="button primary" href="#projetos">
              Ver projetos ↓
            </a>
            <a className="button" data-evento="contact_click" href="#contato">
              Entrar em contato
            </a>
            <a className="button" href="/Miguel-Petherson-Curriculo.pdf" download data-evento="resume_download">
              Baixar currículo (PDF)
            </a>
          </div>
        </div>
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
      <section id="servicos">
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
      </section>
    </>
  );
}
