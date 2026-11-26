import Link from "next/link";
export default function NotFound() {
  return (
    <section>
      <p className="kicker">Erro 404</p>
      <h1>Página não encontrada</h1>
      <Link className="button primary" href="/projetos">
        Voltar aos projetos
      </Link>
    </section>
  );
}
