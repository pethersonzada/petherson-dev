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
      <span className="kicker">{project.type}</span>
      <h3>
        <Link href={`/projetos/${project.slug}`}>{project.name}</Link>
      </h3>
      <p>{project.summary}</p>
      <p className="stack">{project.stack.slice(0, 3).join(" · ")}</p>
      <Link className="textlink" href={`/projetos/${project.slug}`}>
        Ver case {project.name} →
      </Link>
    </article>
  );
}
