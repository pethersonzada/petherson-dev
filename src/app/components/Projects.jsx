import Image from "next/image";
import Link from "next/link";
export function GalleryImage({ item, mobile = false }) {
  const [file, caption] = item;
  return (
    <figure>
      <a href={`/cases/${file}.webp`} aria-label={`Ampliar imagem: ${caption}`}>
        <Image
          src={`/cases/${file}.webp`}
          width={mobile ? 440 : 1280}
          height={mobile ? 960 : 850}
          sizes={
            mobile
              ? "(max-width: 600px) 85vw, 290px"
              : "(max-width: 700px) 90vw, 540px"
          }
          alt={caption}
        />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
export function ProjectCard({ project }) {
  return (
    <article className="project">
      <div className={"project-visual"+(project.slug==="bevans"?" mobile-visual":"")} aria-hidden="true">
        <Image src={"/cases/"+project.images[0][0]+".webp"} alt="" width={project.slug==="bevans"?355:1280} height={project.slug==="bevans"?770:850} sizes="(max-width: 760px) 90vw, 360px"/>
        {project.slug==="bevans" && <Image src="/cases/rotas.webp" alt="" width={355} height={770} sizes="(max-width: 760px) 35vw, 140px"/>}
      </div>
      <div className="project-content">
      <span className="kicker">{project.type}</span>
      <h3>
        <Link href={`/projetos/${project.slug}`}>{project.name}</Link>
      </h3>
      <p>{project.summary}</p>
      <p className="stack">{project.stack.slice(0, 3).join(" · ")}</p>
      <Link className="textlink" href={`/projetos/${project.slug}`}>
        Ver case {project.name} →
      </Link>
      </div>
    </article>
  );
}
