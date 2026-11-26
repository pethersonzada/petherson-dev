# Auditoria de revisão

Base da main: `da7a965`. A home publicada trazia “Ideias viram software. Problemas viram soluções.” A segunda ação do hero levava ao GitHub. Havia um resumo do BeVans, filtros e contato por e-mail. A home inteira dependia de um componente cliente e importava Framer Motion. O build gerava apenas a home como página de conteúdo. As ferramentas automáticas já pontuavam bem na versão anterior.

[Antes, desktop](evidencias/antes.webp) · [Depois, desktop](evidencias/depois.webp) · [Depois, celular](evidencias/depois-mobile.webp)

## Verificação das fontes

| Case | Evidências revisadas | Origem das imagens |
| --- | --- | --- |
| BeVans | App 3fabc1a, backend fab9f11, webapp 89cd95d e agente fd0d8c5. Presença, posição, autenticação, ordenação de paradas e registro de homologação da turma. | App, docs/evidencias/frontend-2026-11-22, imagens 01, 02 e 06. |
| Marketplace | f6c9228. Rotas do App Router, componentes de categoria e pagamento, histórico de contribuições. O checkout encaminha para /finished. | Build local do projeto, rotas /home e /category. |
| HelpDesk TI | 005c74c. Gateway, Compose, bancos por serviço e testes de integração. Escolhido pela autorização distribuída e falha controlada de dependência. | docs/02-painel.png e docs/03-chamado-resolvido.png do repositório. |

Os sete repositórios secundários do catálogo foram localizados e suas árvores inspecionadas. As páginas públicas do BeVans e do Marketplace responderam HTTP 200. As capturas do BeVans e HelpDesk são evidências existentes. Esta revisão não executou viagens físicas, processamento financeiro ou nova homologação do HelpDesk.

## Desempenho em laboratório

Lighthouse 13.6.0, mobile simulado, mesmo Chromium, home local servida por next start, uma execução por versão. Os resultados podem variar entre rodadas e máquinas.

| Indicador | Antes | Depois |
| --- | ---: | ---: |
| Performance | 100 | 100 |
| Acessibilidade | 100 | 100 |
| Boas práticas | 96 | 100 |
| SEO | 100 | 100 |
| LCP | 1,54 s | 0,76 s |
| CLS | 0 | 0 |
| Bytes transferidos | 188.567 | 188.059 |

Sem amostra de campo para INP ou conversão. Código de terceiros, cache, rede e equipamento alteram os números em produção.

## QA

Lint e build de produção aprovados. Nove testes Playwright cobrem cinco páginas, uma rota inválida, links internos, filtros, cópia real para a área de transferência, skip link, foco, sitemap, imagem social e canonicals. Nas seis rotas, a largura do documento coube em 320, 375, 390, 768, 1024, 1440 e 1920 px. Imagens carregaram e o axe não encontrou violações nas regras WCAG A/AA selecionadas. Houve inspeção visual das capturas desktop e mobile. Leitor de tela com usuário e dispositivo físico continuam pendentes.

## Avaliação editorial

Escala de 0 a 10. A nota anterior de 5,5 foi fornecida no briefing. As notas abaixo expressam julgamento de revisão.

| Dimensão | Nota | Evidência ou lacuna |
| --- | ---: | --- |
| Posicionamento e contato | 9 | A primeira dobra identifica o autor e o cargo, exemplifica dois problemas e oferece dois caminhos diretos. Falta medir compreensão com visitantes. |
| Cases e autoridade | 9 | Três cases com código, contribuição e capturas reais. Faltam resultados de uso em campo e currículo público aprovado. |
| Navegação e responsividade | 9 | Catálogo, filtros, links contextuais e verificação de largura em seis rotas. Falta observação com usuários. |
| Acessibilidade | 8 | Foco e skip link testados, imagens descritas, feedback anunciado. Falta avaliação assistiva humana. |
| SEO e desempenho | 9 | Cinco URLs canônicas, sitemap, imagem social e métricas de laboratório. Indexação e experiência real pedem dados posteriores. |

Média simples: **8,8/10**. Mensuração de conversão fica documentada para eventual aprovação. O portfólio preserva os canais existentes e aguarda um currículo atualizado antes de oferecer download.
