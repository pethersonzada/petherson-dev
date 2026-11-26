import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "../../data/cases";
import { pageMeta } from "../../data/site";
import { GalleryImage } from "../../components/Projects";
export const dynamicParams = false;
export function generateStaticParams() {
  return cases.map(({ slug }) => ({ slug }));
}
async function getCase(params) {
  const { slug } = await params;
  const p = cases.find((c) => c.slug === slug);
  if (!p) notFound();
  return p;
}
export async function generateMetadata({ params }) {
  const p = await getCase(params);
  return pageMeta(p.name, p.summary, `/projetos/${p.slug}`);
}
export default async function Case({ params }) {
  const p = await getCase(params);
  const mobile = p.slug === "bevans";
  return (
    <>
      <Link href="/projetos">← Todos os projetos</Link>
      <article className="case">
        <header>
          <p className="kicker">{p.type}</p>
          <h1>{p.name}</h1>
          <p className="lead">{p.summary}</p>
          <p className="stack">{p.stack.join(" · ")}</p>
          <div className="actions">
            {p.links.slice(0, 2).map(([label, url]) => (
              <a className="button" key={url} href={url}>
                {label} ↗
              </a>
            ))}
          </div>
        </header>
        <section>
          <h2>Telas do projeto</h2>
          <div className={mobile ? "gallery mobile" : "gallery"}>
            {p.images.map((item) => (
              <GalleryImage key={item[0]} item={item} mobile={mobile} />
            ))}
          </div>
        </section>
        <div className="casebody">
          {p.sections.map(([title, body]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{body}</p>
            </section>
          ))}
        </div>
        {mobile && (
          <section>
            <h2>Arquitetura do BeVans</h2>
            <figure className="architecture">
              <Image
                unoptimized
                src="/arquitetura.svg"
                width="680"
                height="350"
                alt="O app Expo e o webapp Next.js autenticam usuários no Firebase e enviam tokens à API Spring Boot. A API valida a identidade e persiste turmas, presenças e viagens no PostgreSQL."
              />
            </figure>
          </section>
        )}
        <section>
          <h2>Código e demonstração</h2>
          <div className="actions">
            {p.links.map(([label, url]) => (
              <a className="textlink" key={url} href={url}>
                {label} ↗
              </a>
            ))}
          </div>
        </section>
      </article>
      <nav className="actions" aria-label="Outros estudos de caso">
        {cases
          .filter((c) => c.slug !== p.slug)
          .map((c) => (
            <Link key={c.slug} href={`/projetos/${c.slug}`}>
              {c.name} →
            </Link>
          ))}
      </nav>
    </>
  );
}
