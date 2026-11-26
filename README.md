# Portfólio de Miguel Petherson

Portfólio em português para quem avalia uma contratação fullstack ou quer discutir um projeto. A página inicial apresenta as entregas, o catálogo reúne os repositórios e cada case documenta decisões, telas reais e limitações.

## Executar

Use Node.js 24 e npm. Na raiz do repositório:

```sh
npm ci
npm run dev
```

Abra http://localhost:3000. Para testar a versão de produção:

```sh
npm run lint
npm run build
npx playwright install --with-deps chromium
npm test
npm start
```

Os testes sobem o build em 127.0.0.1:3190. A porta precisa estar livre. Para usar um Chromium já instalado, defina a variável opcional `CHROMIUM_PATH` com o caminho do executável. A aplicação dispensa variáveis de ambiente, banco e credenciais.

## Estrutura

- `src/app/page.js` apresenta projetos, serviços e formação.
- `src/app/projetos/page.js` reúne cases e catálogo secundário com filtro.
- `src/app/projetos/[slug]/page.js` gera páginas estáticas e metadados a partir de `data/cases.js`.
- `src/app/data/projetos.js` contém o catálogo secundário. `data/site.js` centraliza o domínio canônico e os metadados sociais.
- `src/app/components/` reúne cards, galeria, filtro e cópia de e-mail. Só o filtro e o contato exigem estado no navegador.
- `public/cases/` contém capturas WebP. A galeria abre o arquivo em resolução maior. As origens estão na [auditoria](docs/auditoria.md).
- `tests/` e `.github/workflows/portfolio.yml` verificam navegação, acessibilidade, contato, responsividade e indexação.

## Atualizar conteúdo

Inclua nome, slug exclusivo, contexto, status, stack, contribuição, fontes, limitações e capturas no registro do case. Use imagens autorizadas e revise as telas para excluir dados pessoais. Adicione dimensões e descrição quando adotar um novo formato de imagem. A rota e o sitemap são gerados a partir do registro. Revise a seleção de destaque na home ao ampliar a coleção. Para um projeto secundário, acrescente uma entrada em `data/projetos.js`.

O projeto mantém JavaScript e o App Router do Next.js. A organização por registros evita duplicação de páginas. Uma migração de linguagem acrescentaria custo sem resolver o problema de navegação. CSS local e uma pilha de fontes do sistema evitam a requisição a um provedor de fontes.

## Revisão e deploy

Abra PR para a main e confira o job de validação. Inspecione a prévia da Vercel quando a integração disponibilizá-la. A publicação em produção depende de aprovação do responsável. Para desfazer uma integração aprovada, reverta o commit de merge por PR e valide o novo build. A mudança é estática e dispensa migração de dados.

[Produção](https://petherson-dev.vercel.app) · [Backlog](https://github.com/pethersonzada/petherson-dev/issues) · [Auditoria e evidências](docs/auditoria.md)

## Mensuração futura

O site usa canais diretos. A cópia de e-mail roda no navegador. Para uma medição futura, o responsável deve aprovar fornecedor, finalidade, base de tratamento, prazo de retenção e custo antes de ativar coleta.

| Evento proposto | Disparo | Campos permitidos |
| --- | --- | --- |
| catalogo_aberto | Entrada em /projetos | rota |
| case_aberto | Entrada em um case | slug |
| contato_clicado | Abertura de e-mail, cópia concluída ou LinkedIn | canal, rota |
| fonte_clicada | Abertura do GitHub ou de uma demo | tipo, slug |
| curriculo_baixado | Download de arquivo aprovado, quando existir | rota |

Compare cliques de contato após a visita a um case com visitas ao mesmo case, declarando janela e denominador. Cliques não medem propostas, entrevistas ou contratações. Evite e-mail, URL completa, parâmetros, conteúdo de mensagem e identificadores persistentes nos eventos.
