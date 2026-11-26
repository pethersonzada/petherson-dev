import Link from "next/link";
export default function Evidence(){
 return <section className="evidence" aria-labelledby="evidence-title"><p className="kicker">Evidências técnicas</p><h2 id="evidence-title">O que você pode verificar</h2><div className="evidence-grid">
 <article><h3>Arquitetura e integração</h3><p>App Expo, webapp Next.js, Firebase, API Spring Boot e PostgreSQL. O case explica autenticação e separação dos fluxos.</p><Link href="/projetos/bevans">Ver arquitetura e decisões →</Link></article>
 <article><h3>Homologação Android</h3><p>O registro documenta a persistência da turma e a troca de dados entre duas contas em emuladores. Teste de campo com GPS ainda é necessário.</p><a data-evento="github_click" href="https://github.com/pethersonzada/bevans-frontend/blob/3fabc1a/docs/validacao-turma-guiada.md">Consultar registro ↗</a></article>
 <article><h3>Resiliência de serviços</h3><p>No HelpDesk TI, testes cobrem autorização, integração e comportamento quando o serviço de inventário fica indisponível.</p><a data-evento="github_click" href="https://github.com/pethersonzada/helpdesk-ti/blob/005c74c/tests-integracao/test_falha.py">Ver teste de falha ↗</a></article>
 </div></section>;
}
