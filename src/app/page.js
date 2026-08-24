'use client';

import { useState } from 'react';
import styles from './page.module.css';

const projetosData = [
  {
    id: 'credit',
    titulo: 'Análise de Dados e Crédito',
    descricao: 'Script em Python para uma base de 800 mil registros, prevendo churn de clientes e calculando risco de crédito com Machine Learning.',
    categoria: 'dados',
    techs: ['Python', 'Pandas', 'IA'],
    link: 'https://github.com/pethersonzada/credit-score-predictor-IA'
  },
  {
    id: 'rede',
    titulo: 'Infraestrutura de Redes',
    descricao: 'Segmentação de rede corporativa com endereçamento VLSM, expansão wireless WPA2-AES e divisão por VLANs, simulada em Cisco Packet Tracer.',
    categoria: 'infra',
    techs: ['Cisco', 'VLAN', 'Redes'],
    link: 'https://github.com/pethersonzada/rede-corporativa-infraestrutura'
  },
  {
    id: 'rota',
    titulo: 'Sistema Rota Estudantil',
    descricao: 'Desenvolvimento ponta a ponta: API REST no back-end com Java e Spring Boot, conectada a um front-end tipado em TypeScript.',
    categoria: 'fullstack',
    techs: ['Java', 'Spring Boot', 'TS'],
    link: 'https://github.com/pethersonzada/rota-estudantil-backend'
  },
  {
    id: 'face',
    titulo: 'Reconhecimento Facial em Tempo Real',
    descricao: 'Sistema de captura de vídeo que identifica rostos pela webcam, combinando a biblioteca face_recognition com processamento de imagem via OpenCV.',
    categoria: 'dados',
    techs: ['Python', 'OpenCV', 'Visão Computacional'],
    link: 'https://github.com/pethersonzada/face-capture'
  },
  {
    id: 'dashboard',
    titulo: 'Dashboard Comercial de Vendas',
    descricao: 'Tratamento de dados de Excel levados ao Power BI, com o objetivo de extrair tendências reais de lucro e desempenho comercial.',
    categoria: 'dados',
    techs: ['Power BI', 'Excel', 'Data Analysis'],
    link: 'https://github.com/pethersonzada/dashboard-comercial'
  },
  {
    id: 'db',
    titulo: 'Arquitetura de Banco de Dados',
    descricao: 'Modelagem completa de um sistema de biblioteca virtual, do diagrama conceitual e lógico até a documentação das regras de negócio.',
    categoria: 'fullstack',
    techs: ['SQL', 'Modelagem', 'DBA'],
    link: 'https://github.com/pethersonzada/sistema-biblioteca-virtual'
  }
];

export default function Home() {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');

  const projetosFiltrados = filtroAtivo === 'todos' 
    ? projetosData 
    : projetosData.filter(p => p.categoria === filtroAtivo);

  return (
    <main className={styles.container}>
      <header className={styles.cabecalho}>
        <span className={styles.prompt}>~/petherson $ whoami</span>
        <h1>Miguel Petherson</h1>
        <p>Desenvolvedor Full-Stack, Dados e Infraestrutura</p>
        <span className={styles.status}>
          <span className={styles.statusPonto}></span>
          disponível para novos projetos
        </span>
        <div className={styles.contatoLinha}>
          <a href="mailto:pethersonzada@gmail.com" className={styles.botaoPrimario}>
            Enviar e-mail
          </a>
          <a href="https://www.linkedin.com/in/miguel-petherson-silva" target="_blank" className={styles.botaoSecundario}>
            LinkedIn
          </a>
          <a href="https://github.com/pethersonzada/petherson-dev" target="_blank" className={styles.botaoSecundario}>
            GitHub
          </a>
        </div>
      </header>

      <section>
        <h2 className={styles.secaoTitulo}>
          <span>~/petherson $ ls projetos</span>
          O Que Eu Construo
        </h2>

        <div className={styles.filtroLinha}>
          <button 
            onClick={() => setFiltroAtivo('todos')} 
            className={filtroAtivo === 'todos' ? styles.filtroAtivo : styles.filtroBtn}
          >
            Todos
          </button>
          <button 
            onClick={() => setFiltroAtivo('dados')} 
            className={filtroAtivo === 'dados' ? styles.filtroAtivo : styles.filtroBtn}
          >
            Dados & IA
          </button>
          <button 
            onClick={() => setFiltroAtivo('fullstack')} 
            className={filtroAtivo === 'fullstack' ? styles.filtroAtivo : styles.filtroBtn}
          >
            Full-Stack & DB
          </button>
          <button 
            onClick={() => setFiltroAtivo('infra')} 
            className={filtroAtivo === 'infra' ? styles.filtroAtivo : styles.filtroBtn}
          >
            Infraestrutura
          </button>
        </div>

        <div className={styles.projetosGrid}>
          {projetosFiltrados.map((projeto) => (
            <article key={projeto.id} className={styles.projetoCard}>
              <div>
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
              </div>
              <div className={styles.cartaoAcoes}>
                <div className={styles.techLista}>
                  {projeto.techs.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
                <a href={projeto.link} target="_blank" className={styles.linkProjeto}>Ver código</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className={styles.secaoTitulo}>
          <span>~/petherson $ cat sobre.txt</span>
          Sobre Mim
        </h2>
        <p className={styles.sobreTexto}>
          Gosto de entender como a máquina funciona por baixo dos panos, não só de escrever a camada visível. Minha base vai de montar e diagnosticar hardware até construir uma API em Java ou tratar dados em Python. Valorizo fundamentos sólidos: sistemas que funcionam de forma direta, eficiente e bem entendidos por quem os construiu.
        </p>
      </section>

      <section>
        <h2 className={styles.secaoTitulo}>
          <span>~/petherson $ ./contato.sh</span>
          Vamos Conversar
        </h2>
        <div className={styles.contatoCaixa}>
          <p>Aberto a oportunidades em desenvolvimento full-stack, engenharia de dados ou infraestrutura. Se meu trabalho combina com o que você procura, me chama.</p>
          <div className={styles.contatoLinha}>
            <a href="mailto:pethersonzada@gmail.com" className={styles.botaoPrimario}>
              Enviar e-mail
            </a>
            <a href="https://www.linkedin.com/in/miguel-petherson-silva" target="_blank" className={styles.botaoSecundario}>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.rodape}>
        <p>Feito do zero com Next.js.</p>
      </footer>
    </main>
  );
}