'use client';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './page.module.css';
import { projetosData } from './data/projetos';

const filtros = [{id:'todos',nome:'Todos'},{id:'fullstack',nome:'Aplicações'},{id:'dados',nome:'Dados & IA'},{id:'infra',nome:'Automação'}];
const grupos = [
  {titulo:'Desenvolvimento', itens:['JavaScript','TypeScript','React','Next.js','React Native','Expo','Java','Spring Boot','Python','SQL']},
  {titulo:'Dados & inteligência artificial', itens:['Pandas','NumPy','Scikit-learn','Power BI','OpenCV','Machine Learning']},
  {titulo:'Ferramentas & infraestrutura', itens:['Git','GitHub','PostgreSQL','Docker','Linux','Firebase','Mapbox','Redes']}
];
export default function Home() {
  const [filtro, setFiltro] = useState('todos');
  const [copiado, setCopiado] = useState(false);
  const reduzirMovimento = useReducedMotion();
  const projetos = projetosData.filter(p => filtro === 'todos' || p.categoria === filtro);
  return <><a className={styles.skip} href="#projetos">Pular para projetos</a><main className={styles.container}>
    <nav className={styles.nav} aria-label="Navegação principal"><a className={styles.marca} href="#inicio">MP<span>.</span></a><div><a href="#projetos">Projetos</a><a href="#case-bevans">Case BeVans</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></div></nav>
    <header id="inicio" className={styles.hero}>
      <div className={styles.heroConteudo}><p className={styles.eyebrow}>DESENVOLVIMENTO DE SOFTWARE / DADOS</p><h1>Ideias viram <em>software.</em><br/>Problemas viram <em>soluções.</em></h1><p className={styles.lead}>Sou Miguel Petherson. Desenvolvo aplicações, exploro dados e construo projetos que conectam tecnologia a necessidades reais.</p><div className={styles.acoes}><a className={styles.primario} href="#projetos">Explorar projetos <span aria-hidden="true">↗</span></a><a className={styles.secundario} href="https://github.com/pethersonzada" target="_blank" rel="noopener noreferrer">Meu GitHub ↗</a></div></div>
      <div className={styles.heroLateral} aria-hidden="true"><div className={styles.codigo}><span>01 / SOBRE MIM</span><strong>const developer = &#123;</strong><p>name: 'Miguel Petherson',<br/>focus: ['Full-stack', 'Dados'],<br/>mindset: 'build & learn'</p><strong>&#125;;</strong></div><div className={styles.orbita}>MP<span>+</span></div></div>
    </header>
    <section id="projetos" className={styles.secao}><div className={styles.secaoTopo}><div><p className={styles.eyebrow}>01 / PORTFÓLIO</p><h2>Projetos selecionados<span>.</span></h2></div><p>Do desenvolvimento mobile à análise de dados. Cada projeto representa uma etapa prática de aprendizado e construção.</p></div>
      <div className={styles.filtros} role="group" aria-label="Filtrar projetos">{filtros.map(f=><button key={f.id} type="button" aria-pressed={filtro===f.id} className={filtro===f.id?styles.filtroAtivo:styles.filtro} onClick={()=>setFiltro(f.id)}>{f.nome} <span className={styles.contagem}>{f.id === 'todos' ? projetosData.length : projetosData.filter(p => p.categoria === f.id).length}</span></button>)}</div>
      <p className={styles.resultado} role="status">{projetos.length} {projetos.length === 1 ? "projeto encontrado" : "projetos encontrados"}</p><motion.div key={filtro} initial={reduzirMovimento ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:reduzirMovimento ? 0 : .25}} className={styles.grid}>{projetos.map((p,i)=><article key={p.id} className={p.destaque?styles.destaque:styles.card}><div className={styles.cardTopo}><span>{String(i+1).padStart(2,'0')} / {p.categoria==='dados'?'DADOS & IA':p.categoria==='infra'?'AUTOMAÇÃO':'DESENVOLVIMENTO'}</span>{p.destaque&&<span className={styles.selo}>PROJETO EM DESTAQUE</span>}</div><div><h3>{p.titulo}</h3><p>{p.descricao}</p></div><div><div className={styles.tags}>{p.techs.map(t=><span key={t}>{t}</span>)}</div><a className={styles.link} href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Ver repositório de ${p.titulo}`}>Explorar repositório <span aria-hidden="true">↗</span></a></div></article>)}</motion.div>
      <section id="case-bevans" className={styles.case} aria-labelledby="case-titulo">
        <div className={styles.caseCabecalho}><p className={styles.eyebrow}>CASE EM DESTAQUE / MOBILE</p><h3 id="case-titulo">BeVans: transporte estudantil conectado<span>.</span></h3><p>Um projeto que integra experiência mobile, autenticação, mapas e comunicação com uma API própria.</p></div>
        <div className={styles.caseGrid}>
          <div><span className={styles.caseIndice}>01 / DESAFIO</span><h4>Organizar a rotina de transporte</h4><p>Motoristas precisam gerenciar passageiros e trajetos. Estudantes precisam informar quando vão utilizar a van e acompanhar seu deslocamento.</p></div>
          <div><span className={styles.caseIndice}>02 / SOLUÇÃO</span><h4>Fluxos para dois perfis</h4><p>O aplicativo oferece confirmação de ida e volta, gerenciamento de turmas, solicitação de entrada e visualização da localização da van.</p></div>
          <div><span className={styles.caseIndice}>03 / ENGENHARIA</span><h4>Mapas, rotas e autenticação</h4><p>React Native com Expo e TypeScript, Firebase Authentication, integração com API REST e mapas usando Mapbox.</p></div>
        </div>
        <div className={styles.caseRodape}><span>React Native / Expo / TypeScript / Firebase / Mapbox</span><a href="https://github.com/pethersonzada/bevans-frontend" target="_blank" rel="noopener noreferrer">Documentação técnica ↗</a></div>
      </section>
      <a className={styles.mais} href="https://github.com/pethersonzada?tab=repositories" target="_blank" rel="noopener noreferrer">Ver todos os repositórios no GitHub ↗</a>
    </section>
    <section id="sobre" className={styles.secao}><div className={styles.secaoTopo}><div><p className={styles.eyebrow}>02 / HABILIDADES</p><h2>O que uso para construir<span>.</span></h2></div><p>Ferramentas e tecnologias presentes na minha trajetória de estudos e projetos.</p></div><div className={styles.skills}>{grupos.map((g,i)=><div key={g.titulo} className={styles.skill}><span className={styles.skillNumero}>0{i+1}</span><h3>{g.titulo}</h3><div className={styles.tags}>{g.itens.map(t=><span key={t}>{t}</span>)}</div></div>)}</div><div className={styles.sobre}><p className={styles.eyebrow}>03 / TRAJETÓRIA</p><h2>Curiosidade técnica.<br/><span>Execução prática.</span></h2><p>Estudo Análise e Desenvolvimento de Sistemas e gosto de compreender o caminho completo de uma solução: interface, lógica, dados e infraestrutura. Meu GitHub reúne projetos de aplicações web e mobile, automação e análise de dados.</p></div></section>
    <section id="contato" className={styles.contato}><p className={styles.eyebrow}>04 / CONTATO</p><h2>Tem um projeto em mente?<br/><span>Vamos conversar.</span></h2><p>Aberto a conversas sobre desenvolvimento de software, dados e oportunidades de colaboração.</p><div className={styles.acoes}><a className={styles.primario} href="mailto:pethersonzada@gmail.com">Enviar e-mail ↗</a><a className={styles.secundario} href="https://www.linkedin.com/in/pethersonzada" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><button type="button" className={styles.copiar} onClick={async () => { try { await navigator.clipboard.writeText("pethersonzada@gmail.com"); setCopiado(true); window.setTimeout(() => setCopiado(false), 2200); } catch { window.location.href = "mailto:pethersonzada@gmail.com"; } }}>{copiado ? "E-mail copiado ✓" : "Copiar e-mail"}</button></div></section>
    <footer className={styles.footer}><span>© {new Date().getFullYear()} Miguel Petherson</span><a href="#inicio">Voltar ao topo ↑</a></footer>
  </main></>;
}