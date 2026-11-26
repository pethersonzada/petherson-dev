const github = "https://github.com/pethersonzada/";
export const cases = [
  {
    slug: "bevans",
    name: "BeVans",
    type: "Projeto acadêmico em desenvolvimento",
    summary:
      "O estudante confirma a ida e a volta. O motorista vê quem espera a van e quais pontos fazem parte da viagem.",
    stack: [
      "React Native",
      "Expo",
      "Spring Boot",
      "PostgreSQL",
      "Firebase",
      "Mapbox",
    ],
    sections: [
      [
        "Presença que muda o roteiro",
        "Uma lista fixa de alunos diz pouco sobre quem vai hoje. No BeVans, a presença pertence a uma data e a um sentido. O motorista organiza a turma, aprova passageiros e abre uma execução da viagem com as paradas previstas.",
      ],
      [
        "Minha contribuição",
        "Trabalhei no app Android, nas regras da API e no painel web. Um exemplo no backend é o cálculo da próxima parada do passageiro. No webapp, ajustei e testei o seletor de tema do painel em telas pequenas.",
      ],
      [
        "Do cadastro ao embarque",
        "O motorista define capacidade, origem e destino e revisa a turma antes de salvar. O passageiro solicita vínculo e informa se vai, volta ou faz os dois trechos. Separar turma, presença e execução permite iniciar outra viagem no mesmo dia.",
      ],
      [
        "Como as paradas são ordenadas",
        "Na API de rotas públicas, o OR-Tools mantém o primeiro e o último ponto e busca uma sequência para os intermediários. O custo usa distância geográfica. Trânsito e duração real do percurso ficam fora desse cálculo.",
      ],
      [
        "Identidade e localização",
        "O cliente envia o token do Firebase à API. O backend valida a identidade e aplica as regras de acesso. Durante a execução, os clientes consultam posições da viagem. A interface distingue posição atualizada de registro antigo.",
      ],
      [
        "O que foi validado",
        "Na homologação documentada com dois emuladores Android, a turma sobreviveu ao reinício do app. As duas contas reconheceram a mesma viagem de ida. A equipe preparou vínculo e presença via HTTP nessa rodada.",
      ],
      [
        "Limite atual",
        "A evidência de emulador cobre a troca de dados. Avaliar atualização de GPS, desvio de rota e chegada ao ponto durante um percurso físico exige um teste de campo.",
      ],
    ],
    images: [
      [
        "revisao",
        "Motorista revisa turno, capacidade e trajeto antes de criar a turma.",
      ],
      ["turma", "Confirmação de criação da turma de teste no Android."],
      ["rotas", "Filtros do catálogo de rotas públicas no tema escuro."],
    ],
    links: [
      ["Abrir o BeVans na web", "https://bevans-webapp.vercel.app"],
      ["Código do app", github + "bevans-frontend"],
      ["Código da API", github + "bevans-backend"],
      ["Código do webapp", github + "bevans-webapp"],
      ["Agente de suporte", github + "bevans-agente"],
      [
        "Registro da homologação",
        github + "bevans-frontend/blob/3fabc1a/docs/validacao-turma-guiada.md",
      ],
    ],
  },
  {
    slug: "marketplace-de-servicos",
    name: "Marketplace de Serviços",
    type: "Protótipo acadêmico de interface",
    summary:
      "Um catálogo de prestadores com navegação por categoria, perfil e simulação de pagamento.",
    stack: ["Next.js", "React", "CSS", "Figma"],
    sections: [
      [
        "Da busca ao pedido",
        "Na disciplina de Front-End Frameworks, o desafio foi mostrar como alguém encontra um serviço doméstico e chega ao resumo do pedido. O repositório reúne o arquivo de design e as telas implementadas.",
      ],
      [
        "Minha contribuição",
        "Implementei páginas de serviços, adaptei a navegação e os cupons para telas menores e acrescentei confirmações aos formulários. Categorias, perfis, cupons e checkout têm componentes próprios, organizados por etapa da jornada.",
      ],
      [
        "Decisão de implementação",
        "A escolha do meio de pagamento vive no estado do componente React. Ao confirmar cartão, o componente verifica o preenchimento dos campos e mostra uma mensagem se faltar informação. A conclusão navega para uma tela de confirmação.",
      ],
      [
        "O que a demo permite avaliar",
        "Dá para percorrer as categorias e avaliar textos, hierarquia e transições do pedido. O checkout é simulado. Cobrança, conciliação e persistência de transações ficam fora do escopo. Use apenas dados fictícios ao explorar a demo.",
      ],
    ],
    images: [
      ["marketplace", "Página inicial do protótipo com categorias e serviços."],
      [
        "marketplace-categoria",
        "Tela de categorias do marketplace em execução local.",
      ],
    ],
    links: [
      [
        "Explorar o protótipo",
        "https://marketplace-services-zeta.vercel.app/home",
      ],
      ["Código e arquivo Figma", github + "marketplace-services"],
    ],
  },
  {
    slug: "helpdesk-ti",
    name: "HelpDesk TI",
    type: "Projeto acadêmico de arquitetura de software",
    summary:
      "Chamados, usuários e equipamentos em três serviços. Uma falha no inventário afeta só as operações que dependem dele.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "Docker Compose"],
    sections: [
      [
        "De um sistema a três serviços",
        "O desafio foi dividir um help desk monolítico sem obrigar o usuário a trocar de interface. O gateway preserva os caminhos usados pela tela e encaminha as requisições para Usuários, Inventário ou Chamados.",
      ],
      [
        "Minha contribuição",
        "Configurei o gateway e os bancos por serviço, adaptei as chamadas HTTP e escrevi testes de integração e autorização. O repositório conserva o monólito para comparação com a versão executada pelo Docker Compose.",
      ],
      [
        "Dados e autorização",
        "Cada serviço grava no próprio SQLite. O chamado guarda referências lógicas ao solicitante e ao equipamento. Quando precisa consultar outro serviço, encaminha o JWT da pessoa autenticada e limita o tempo de espera.",
      ],
      [
        "Quando o inventário cai",
        "Abrir um chamado vinculado a equipamento exige consultar Inventário. Se ele parar, a operação retorna HTTP 503. Listar chamados e abrir um chamado sem equipamento continuam disponíveis. A suíte inclui um teste específico para essa falha.",
      ],
      [
        "Limitação conhecida",
        "Uma mudança de perfil pode levar até a expiração do token para surtir efeito nos serviços consumidores. As notificações ficam no serviço de chamados. O projeto documenta a fila assíncrona como evolução futura.",
      ],
    ],
    images: [
      [
        "painel",
        "Painel de chamados e formulário de abertura no ambiente de demonstração.",
      ],
      ["resolvido", "Chamado resolvido no painel do HelpDesk TI."],
    ],
    links: [
      ["Código e instruções de execução", github + "helpdesk-ti"],
      [
        "Ver teste de indisponibilidade",
        github + "helpdesk-ti/blob/005c74c/tests-integracao/test_falha.py",
      ],
    ],
  },
];
