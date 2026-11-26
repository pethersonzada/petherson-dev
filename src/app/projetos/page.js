import Link from "next/link";
import { cases } from "../data/cases";
import { projetos } from "../data/projetos";
import { pageMeta } from "../data/site";
import Catalogo from "../components/Catalogo";
import { ProjectCard } from "../components/Projects";
export const metadata = pageMeta(
  "Projetos",
  "Cases de desenvolvimento fullstack e catálogo de projetos de dados, interfaces e automação.",
  "/projetos",
);
export default function Projetos() {
  return (
    <>
      <Link href="/">← Início</Link>
      <h1>Projetos</h1>
      <section>
        <h2>Estudos de caso</h2>
        <div className="grid">
          {cases.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <section>
        <h2>Outros projetos</h2>
        <Catalogo projetos={projetos} />
      </section>
    </>
  );
}
