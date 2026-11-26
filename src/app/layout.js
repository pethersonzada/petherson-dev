import { Inter, Manrope } from "next/font/google";
import Medicao from "./components/Medicao";
import { cases } from "./data/cases";
import Link from "next/link";
import "./globals.css";
import "./typography.css";
import "./polish.css";
import ThemeSwitch from "./components/ThemeSwitch";
import Contato from "./components/Contato";
import { origin } from "./data/site";
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata = {
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  metadataBase: new URL(origin),
  title: { default: "Miguel Petherson", template: "%s | Miguel Petherson" },
};
export default function Layout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{__html:`try{var t=localStorage.getItem("portfolio:theme");document.documentElement.dataset.theme=t==="light"||t==="dark"?t:(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch{}`}}/>
        <a className="skip" href="#conteudo">
          Pular para o conteúdo
        </a>
        <header className="bar wrap">
          <Link
            className="brand"
            href="/"
            aria-label="mp. Miguel Petherson, início"
          >
            <svg className="brand-mark" aria-hidden="true" width="39" height="39" viewBox="0 0 64 64"><rect x="1" y="1" width="62" height="62" rx="15" fill="currentColor"/><path d="M12 45V19h7l10 14 10-14h7v26h-7V30L29 43 19 30v15Z" fill="var(--bg)"/><circle cx="53" cy="45" r="5" fill="var(--amber)"/></svg><span className="brand-name">petherson<span>.</span></span>
          </Link>
          <nav aria-label="Principal">
            <Link href="/projetos">Projetos</Link>
            <Link href="/#servicos">Serviços</Link>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/curriculo">Currículo</Link>
            <a data-evento="contact_click" href="#contato">Contato</a>
          </nav>
          <ThemeSwitch/>
        </header>
        <main className="wrap" id="conteudo" tabIndex={-1}>
          {children}
          <Contato />
        </main>
        <footer className="wrap bar">
          <span>© {new Date().getFullYear()} Miguel Petherson</span>
          <a data-evento="github_click" href="https://github.com/pethersonzada">GitHub ↗</a>
        </footer>
        <Medicao slugs={cases.map(p => p.slug)} />
      </body>
    </html>
  );
}
