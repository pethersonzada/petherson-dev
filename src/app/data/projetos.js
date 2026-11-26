const base = "https://github.com/pethersonzada/";
export const projetos = [
  [
    "Modelo de score de crédito",
    "Dados",
    "Experimento em Python para estimar a categoria de score a partir de registros de clientes.",
    "credit-score-predictor-IA",
  ],
  [
    "Cancelamento de clientes",
    "Dados",
    "Notebook e script Python para explorar registros de cancelamento.",
    "client-data-analysis",
  ],
  [
    "Dashboard comercial",
    "Dados",
    "Painel Power BI acompanhado da planilha de origem e da exportação em PDF.",
    "dashboard-comercial",
  ],
  [
    "Biblioteca virtual",
    "Aplicações",
    "Modelagem de dados com diagramas no brModelo e no draw.io.",
    "sistema-biblioteca-virtual",
  ],
  [
    "Vought Connect",
    "Aplicações",
    "Projeto de interface web disponível no diretório projeto-vought.",
    "vought-connect",
  ],
  [
    "Captura facial",
    "Dados",
    "Experimentos de reconhecimento facial com LBPH e face_recognition.",
    "face-capture",
  ],
  [
    "Cadastro automatizado",
    "Automação",
    "Script Python e arquivo de produtos para automatizar a entrada de dados.",
    "py-auto-entry",
  ],
].map(([nome, grupo, resumo, repo]) => ({
  nome,
  grupo,
  resumo,
  url: base + repo,
}));
