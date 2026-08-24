import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.cabecalho}>
        <span className={styles.prompt}>~/miguel-petherson $ whoami</span>
        <h1>Miguel Petherson</h1>
        <p>Desenvolvedor Full-Stack, Dados e Infraestrutura</p>
        <span className={styles.status}>
          <span className={styles.statusPonto}></span>
          disponível para novos projetos
        </span>
        <div className={styles.contatoLinha}>
          {/* Substitua pelos seus dados reais */}
          <a href="mailto:seuemail@exemplo.com" className={styles.botaoPrimario}>
            Enviar e-mail
          </a>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" className={styles.botaoSecundario}>
            LinkedIn
          </a>
          <a href="https://github.com/pethersonzada" target="_blank" className={styles.botaoSecundario}>
            GitHub
          </a>
        </div>
      </header>

      <section>
        <h2 className={styles.secaoTitulo}>
          <span>~/miguel-petherson $ ls projetos</span>
          O Que Eu Construo
        </h2>

        <div className={styles.projetosGrid}>

          <article className={styles.projetoCard}>
            <div>
              <h3>Análise de Dados e Crédito</h3>
              <p>Script em Python para uma base de 800 mil registros, prevendo churn de clientes e calculando risco de crédito com Machine Learning.</p>
            </div>
            <div className={styles.cartaoAcoes}>
              <div className={styles.techLista}>
                <span className={styles.techBadge}>Python</span>
                <span className={styles.techBadge}>Pandas</span>
                <span className={styles.techBadge}>IA</span>
              </div>
              <a href="https://github.com/pethersonzada/credit-score-predictor-IA" target="_blank" className={styles.linkProjeto}>Ver código</a>
            </div>
          </article>

          <article className={styles.projetoCard}>
            <div>
              <h3>Infraestrutura de Redes</h3>
              <p>Segmentação de rede corporativa com endereçamento VLSM, expansão wireless WPA2-AES e divisão por VLANs, simulada em Cisco Packet Tracer.</p>
            </div>
            <div className={styles.cartaoAcoes}>
              <div className={styles.techLista}>
                <span className={styles.techBadge}>Cisco</span>
                <span className={styles.techBadge}>VLAN</span>
                <span className={styles.techBadge}>Redes</span>
              </div>
              <a href="https://github.com/pethersonzada/rede-corporativa-infraestrutura" target="_blank" className={styles.linkProjeto}>Ver código</a>
            </div>
          </article>

          <article className={styles.projetoCard}>
            <div>
              <h3>Sistema Rota Estudantil</h3>
              <p>Desenvolvimento ponta a ponta: API REST no back-end com Java e Spring Boot, conectada a um front-end tipado em TypeScript.</p>
            </div>
            <div className={styles.cartaoAcoes}>
              <div className={styles.techLista}>
                <span className={styles.techBadge}>Java</span>
                <span className={styles.techBadge}>Spring Boot</span>
                <span className={styles.techBadge}>TS</span>
              </div>
              <a href="https://github.com/pethersonzada/rota-estudantil-backend" target="_blank" className={styles.linkProjeto}>Ver código</a>
            </div>
          </article>

          <article className={styles.projetoCard}>
            <div>
              <h3>Reconhecimento Facial em Tempo Real</h3>
              <p>Sistema de captura de vídeo que identifica rostos pela webcam, combinando a biblioteca face_recognition com processamento de imagem via OpenCV.</p>
            </div>
            <div className={styles.cartaoAcoes}>
              <div className={styles.techLista}>
                <span className={styles.techBadge}>Python</span>
                <span className={styles.techBadge}>OpenCV</span>
                <span className={styles.techBadge}>Visão Computacional</span>
              </div>
              <a href="https://github.com/pethersonzada/face-capture" target="_blank" className={styles.linkProjeto}>Ver código</a>
            </div>
          </article>

          <article className={styles.projetoCard}>
            <div>
              <h3>Dashboard Comercial de Vendas</h3>
              <p>Tratamento de dados de Excel levados ao Power BI, com o objetivo de extrair tendências reais de lucro e desempenho comercial.</p>
            </div>
            <div className={styles.cartaoAcoes}>
              <div className={styles.techLista}>
                <span className={styles.techBadge}>Power BI</span>
                <span className={styles.techBadge}>Excel</span>
                <span className={styles.techBadge}>Data Analysis</span>
              </div>
              <a href="https://github.com/pethersonzada/dashboard-comercial" target="_blank" className={styles.linkProjeto}>Ver código</a>
            </div>
          </article>

          <article className={styles.projetoCard}>
            <div>
              <h3>Arquitetura de Banco de Dados</h3>
              <p>Modelagem completa de um sistema de biblioteca virtual, do diagrama conceitual e lógico até a documentação das regras de negócio.</p>
            </div>
            <div className={styles.cartaoAcoes}>
              <div className={styles.techLista}>
                <span className={styles.techBadge}>SQL</span>
                <span className={styles.techBadge}>Modelagem</span>
                <span className={styles.techBadge}>DBA</span>
              </div>
              <a href="https://github.com/pethersonzada/sistema-biblioteca-virtual" target="_blank" className={styles.linkProjeto}>Ver código</a>
            </div>
          </article>

        </div>
      </section>

      <section>
        <h2 className={styles.secaoTitulo}>
          <span>~/miguel-petherson $ cat sobre.txt</span>
          Sobre Mim
        </h2>
        <p className={styles.sobreTexto}>
          Gosto de entender como a máquina funciona por baixo dos panos, não só de escrever a camada visível. Minha base vai de montar e diagnosticar hardware até construir uma API em Java ou tratar dados em Python. Valorizo fundamentos sólidos: sistemas que funcionam de forma direta, eficiente e bem entendidos por quem os construiu.
        </p>
      </section>

      <section>
        <h2 className={styles.secaoTitulo}>
          <span>~/miguel-petherson $ ./contato.sh</span>
          Vamos Conversar
        </h2>
        <div className={styles.contatoCaixa}>
          <p>Aberto a oportunidades em desenvolvimento full-stack, engenharia de dados ou infraestrutura. Se meu trabalho combina com o que você procura, me chama.</p>
          <div className={styles.contatoLinha}>
            <a href="mailto:pethersonzada@gmail.com" className={styles.botaoPrimario}>
              Enviar e-mail
            </a>
            <a href="https://linkedin.com/in/pethersonzada" target="_blank" className={styles.botaoSecundario}>
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