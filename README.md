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
- `src/app/components/` reúne cards, galeria, filtro e cópia de e-mail. Filtro e contato usam estado no navegador. Medicao observa navegação e ativações para emitir sinais locais.
- `public/cases/` contém capturas WebP. A galeria abre o arquivo em resolução maior. As origens estão na [auditoria](docs/auditoria.md).
- `tests/` e `.github/workflows/portfolio.yml` verificam navegação, acessibilidade, contato, responsividade e indexação.

## Atualizar conteúdo

Inclua nome, slug exclusivo, contexto, status, stack, contribuição, fontes, limitações e capturas no registro do case. Use imagens autorizadas e revise as telas para excluir dados pessoais. Adicione dimensões e descrição quando adotar um novo formato de imagem. A rota e o sitemap são gerados a partir do registro. Revise a seleção de destaque na home ao ampliar a coleção. Para um projeto secundário, acrescente uma entrada em `data/projetos.js`.

O projeto mantém JavaScript e o App Router do Next.js. A organização por registros evita duplicação de páginas. Uma migração de linguagem acrescentaria custo sem resolver o problema de navegação. CSS local e uma pilha de fontes do sistema evitam a requisição a um provedor de fontes.

## Revisão e deploy

Abra PR para a main e confira o job de validação. Inspecione a prévia da Vercel quando a integração disponibilizá-la. A publicação em produção depende de aprovação do responsável. Para desfazer uma integração aprovada, reverta o commit de merge por PR e valide o novo build. A mudança é estática e dispensa migração de dados.

[Produção](https://petherson-dev.vercel.app) · [Backlog](https://github.com/pethersonzada/petherson-dev/issues) · [Auditoria e evidências](docs/auditoria.md)

## Medição e privacidade

Sem configuração, o evento DOM `portfolio:evento` existe apenas na aba. O adaptador opcional do Umami exige Website ID configurado, domínio oficial e aceite do visitante. O campo `nome` descreve uma ação. `propriedades.projeto` é opcional e só aceita slugs conhecidos. O sinal de cópia ocorre após sucesso da API de clipboard. A navegação entre páginas conta uma visualização por entrada, inclusive ao voltar a um case.

| Sinal | Disparo |
| --- | --- |
| project_view / case_study_view | Entrada no catálogo / entrada no case |
| contact_click / service_interest | Acesso à seção de contato pela navegação ou hero / pela seção de serviços |
| email_click / email_copy | Abertura do cliente de e-mail / cópia concluída |
| linkedin_click / github_click / demo_click | Abertura do canal ou destino correspondente |
| resume_download | Reservado para o link do PDF após aprovação do titular |

Para conferir na prévia, registre um listener para `portfolio:evento` no console e navegue por links internos. O teste Playwright instala o listener antes de carregar a página. Os sinais desaparecem ao encerrar a aba. Ativar um destino exige a decisão da issue #21. No plano Hobby, o Vercel Web Analytics oferece visualizações; eventos personalizados dependem de plano compatível. [Limites oficiais](https://vercel.com/docs/analytics/limits-and-pricing)

Após aprovação de um provedor, acompanhe visitantes e origem no painel agregado. Compare entradas por slug. Para taxas por visita, use sessões com abertura de case, interação em CTA, download ou ação de contato divididas pelas sessões elegíveis no mesmo intervalo. Se houver apenas totais de eventos, reporte **interações por visita**, que pode exceder 100%. Deduplicar pessoas ou somar vários cliques como leads distorce o resultado. Registre conversas, entrevistas e propostas à parte.

## Currículo, SEO e manutenção

Após aprovação da versão final (#20), coloque apenas o PDF aprovado em `public/`, acrescente um link de download com nome acessível e `data-evento="resume_download"`. Teste a resposta HTTP, o tipo PDF, a extração de texto, o download em desktop e a abertura no celular antes de integrar. Não versione rascunhos com dados pessoais.

No [Search Console](https://search.google.com/search-console/), adicione a propriedade por **prefixo de URL** `https://petherson-dev.vercel.app/`. Escolha a verificação por tag HTML. Configure **somente o valor content** como `GOOGLE_SITE_VERIFICATION` no projeto Vercel, ambiente Production, e faça um novo build após aprovação. Confira a meta tag no HTML e clique em Verificar. Em Sitemaps, envie `sitemap.xml`; em Inspeção de URL, verifique as cinco URLs do sitemap, teste a URL publicada e solicite indexação se apropriado. A confirmação de propriedade e a indexação são independentes. [Guia de verificação](https://support.google.com/webmasters/answer/9008080)

Em cada revisão de dependências rode `npm audit`, confira cadeias afetadas e repita o CI. A política em `next.config.mjs` bloqueia enquadramento, objetos embutidos e base externa. Não estabelece uma allowlist de scripts. Reavalie se incluir scripts externos ou formulários. A aplicação não requer segredos de runtime.

[Auditoria final, roteiro assistivo e limitações](docs/auditoria-final.md) · [Textos e plano de divulgação](docs/divulgacao.md)

[Estado de lançamento, escolha do provedor e passos de ativação](docs/lancamento.md)
