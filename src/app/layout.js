import Link from "next/link";
import "./globals.css";
import Contato from "./components/Contato";
import { origin } from "./data/site";
export const metadata = {
  metadataBase: new URL(origin),
  title: { default: "Miguel Petherson", template: "%s | Miguel Petherson" },
};
export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip" href="#conteudo">
          Pular para o conteúdo
        </a>
        <header className="bar wrap">
          <Link
            className="brand"
            href="/"
            aria-label="Miguel Petherson, início"
          >
            mp<span>.</span>
          </Link>
          <nav aria-label="Principal">
            <Link href="/projetos">Projetos</Link>
            <Link href="/#servicos">Serviços</Link>
            <Link href="/#sobre">Sobre</Link>
            <a href="#contato">Contato</a>
          </nav>
        </header>
        <main className="wrap" id="conteudo" tabIndex={-1}>
          {children}
          <Contato />
        </main>
        <footer className="wrap bar">
          <span>Miguel Petherson</span>
          <a href="https://github.com/pethersonzada">GitHub ↗</a>
        </footer>
      </body>
    </html>
  );
}
