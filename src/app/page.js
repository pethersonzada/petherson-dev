'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './page.module.css';
import { projetosData } from './data/projetos';
import Terminal from './components/Terminal';
import FadeIn from './components/FadeIn';

export default function Home() {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');

  const projetosFiltrados = filtroAtivo === 'todos' 
    ? projetosData 
    : projetosData.filter(p => p.categoria === filtroAtivo);

  return (
    <main className={styles.container}>
      <FadeIn>
        <header className={styles.cabecalho}>
          <Terminal comandos={[
            'whoami', 
            'python3 train_model.py', 
            'ssh admin@192.168.1.10', 
            'docker-compose up -d', 
            'SELECT * FROM projetos;'
          ]} />
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
            <a href="https://www.linkedin.com/in/pethersonzada" target="_blank" className={styles.botaoSecundario}>
              LinkedIn
            </a>
            <a href="https://github.com/pethersonzada/petherson-dev" target="_blank" className={styles.botaoSecundario}>
              GitHub
            </a>
          </div>
        </header>
      </FadeIn>

      <FadeIn>
        <section>
          <h2 className={styles.secaoTitulo}>
            <span>~/petherson $ cat habilidades.json</span>
            Stack e Ferramentas
          </h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <h3>Desenvolvimento de Aplicações</h3>
              <div className={styles.techLista}>
                <span className={styles.techBadge}>HTML5</span>
                <span className={styles.techBadge}>CSS3</span>
                <span className={styles.techBadge}>JavaScript</span>
                <span className={styles.techBadge}>TypeScript</span>
                <span className={styles.techBadge}>Python</span>
                <span className={styles.techBadge}>Java</span>
                <span className={styles.techBadge}>React</span>
                <span className={styles.techBadge}>Next.js</span>
                <span className={styles.techBadge}>Spring Boot</span>
                <span className={styles.techBadge}>SQL</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3>IA, Dados e Visão Computacional</h3>
              <div className={styles.techLista}>
                <span className={styles.techBadge}>Pandas</span>
                <span className={styles.techBadge}>NumPy</span>
                <span className={styles.techBadge}>OpenCV</span>
                <span className={styles.techBadge}>Keras</span>
                <span className={styles.techBadge}>TensorFlow</span>
                <span className={styles.techBadge}>Scikit-Learn</span>
                <span className={styles.techBadge}>Machine Learning</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3>Ferramentas, Plataformas e Redes</h3>
              <div className={styles.techLista}>
                <span className={styles.techBadge}>Power BI</span>
                <span className={styles.techBadge}>PostgreSQL</span>
                <span className={styles.techBadge}>Git</span>
                <span className={styles.techBadge}>GitHub</span>
                <span className={styles.techBadge}>Docker</span>
                <span className={styles.techBadge}>Linux / Ubuntu</span>
                <span className={styles.techBadge}>Cisco Packet Tracer</span>
                <span className={styles.techBadge}>VLANs & VLSM</span>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section>
          <h2 className={styles.secaoTitulo}>
            <span>~/petherson $ ls projetos</span>
            O Que Eu Construo
          </h2>

          <div className={styles.filtroLinha}>
            <button onClick={() => setFiltroAtivo('todos')} className={filtroAtivo === 'todos' ? styles.filtroAtivo : styles.filtroBtn}>
              Todos
            </button>
            <button onClick={() => setFiltroAtivo('dados')} className={filtroAtivo === 'dados' ? styles.filtroAtivo : styles.filtroBtn}>
              Dados & IA
            </button>
            <button onClick={() => setFiltroAtivo('fullstack')} className={filtroAtivo === 'fullstack' ? styles.filtroAtivo : styles.filtroBtn}>
              Full-Stack & DB
            </button>
            <button onClick={() => setFiltroAtivo('infra')} className={filtroAtivo === 'infra' ? styles.filtroAtivo : styles.filtroBtn}>
              Infraestrutura
            </button>
          </div>

          <motion.div 
            key={filtroAtivo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.50, ease: "easeInOut" }}
            className={styles.projetosGrid}
          >
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
          </motion.div>
        </section>
      </FadeIn>

      <FadeIn>
        <section>
          <h2 className={styles.secaoTitulo}>
            <span>~/petherson $ cat sobre.txt</span>
            Sobre Mim
          </h2>
          <p className={styles.sobreTexto}>
            Gosto de entender como a máquina funciona por baixo dos panos, não só de escrever a camada visível. Minha base vai de montar e diagnosticar hardware até construir uma API em Java ou tratar dados em Python. Valorizo fundamentos sólidos: sistemas que funcionam de forma direta, eficiente e bem entendidos por quem os construiu.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
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
              <a href="https://www.linkedin.com/in/pethersonzada" target="_blank" className={styles.botaoSecundario}>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      <footer className={styles.rodape}>
        <p>Copyright© 2026 Miguel Petherson. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}