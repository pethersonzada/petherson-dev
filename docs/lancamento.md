# Lançamento profissional

## Versão e backlog

Em 26/11/2026, main e produção apontavam para `9e2e008411a671eb114ca9701428ada25a746d5e`, merge do PR #24. O alias de produção está no deployment Vercel `dpl_6M5vzxJVnABdNqF29jm4LiZEmSgz`, estado READY. Logs de build identificaram Next.js 16.4.6 e conclusão do deployment. Consulta de runtime error/fatal nos últimos 30 minutos retornou zero grupos. GitHub Actions do #24 aprovado. npm audit repetido sobre o lockfile: zero vulnerabilidades detectadas.

As issues #1 a #18 estão encerradas; #20 a #23 dependem de validação externa. A nota editorial anterior de 8,8/10 continua adequada: as melhorias preparam operação, mas faltam entrevistas, resultados de coleta e validação física observáveis.

- **#20, currículo.** Minuta particular em português, uma página com texto selecionável, contatos e três projetos. O PDF e o botão aguardam aprovação. Após autorização, testar bytes, tipo MIME, download em desktop e mobile e disparo único de resume_download. Registrar a URL pública verificada antes de fechar.
- **#21, analytics.** Adaptador optativo para Umami Cloud pronto para revisão. Por padrão, sem configuração e sem chamadas. Faltam autorização, Website ID e confirmação de recebimento no painel.
- **#22, acessibilidade física.** No Android, abra a home com TalkBack. Percorra a marca e os títulos, abra Projetos, selecione Automação e ouça “1 projeto”. Abra o BeVans, percorra as imagens e volte. Em Contato, copie o e-mail e confira o anúncio. Repita com fonte ampliada e em paisagem. Quando o PDF for publicado, abra-o pelo botão. Envie modelo do aparelho, versão Android, leitor utilizado e qualquer falha com o passo em que ocorreu.
- **#23, Search Console.** Propriedade sem verificação confirmada. Abra https://search.google.com/search-console/, selecione o menu de propriedades, Adicionar propriedade, Prefixo do URL e informe exatamente https://petherson-dev.vercel.app/. Em Outros métodos, selecione Tag HTML e copie somente o valor de content. O projeto aceita o código público em GOOGLE_SITE_VERIFICATION no build. Após aplicação em produção, clique em Verificar, abra Sitemaps e envie sitemap.xml. Em Inspeção de URL, cole cada uma das cinco URLs do sitemap, teste a URL publicada, registre o estado e solicite indexação se pertinente. A confirmação de propriedade, o envio e a indexação têm estados distintos.

## Escolha de analytics

| Solução | Custo e retenção | Adequação ao portfólio |
| --- | --- | --- |
| Umami Cloud Hobby | Gratuito; um site, 100 mil eventos/mês e seis meses | Eventos personalizados, páginas e painel hospedado. O adaptador usa HTTP e dispensa SDK. Opção recomendada. |
| Vercel Web Analytics Hobby | 50 mil eventos/mês; janela de um mês | Integração direta com Next.js; eventos personalizados exigem outro plano. |
| Cloudflare Web Analytics | Gratuito; consulta de seis meses | Bom para tráfego e desempenho; sem eventos personalizados. |
| GA4 Standard | Gratuito; retenção de eventos configurável, normalmente 2 ou 14 meses | Suporta eventos e relatórios detalhados. Exige mais governança de tags, identificadores e parâmetros. |
| Umami auto-hospedado | Software aberto, infraestrutura e tempo de operação próprios | Controle de retenção; adiciona banco, atualização e backup para uma operação pequena. |

Fontes: [Umami](https://umami.is/pricing), [protocolo HTTP](https://docs.umami.is/docs/api/sending-stats), [Vercel](https://vercel.com/docs/analytics/limits-and-pricing), [Cloudflare](https://developers.cloudflare.com/web-analytics/faq/), [GA4](https://support.google.com/analytics/answer/7667196).

## Ativação após autorização

1. No Umami Hobby, cadastrar o único domínio do portfólio e copiar o **Website ID público**. Nenhuma chave administrativa pertence ao bundle.
2. Configurar NEXT_PUBLIC_UMAMI_WEBSITE_ID no build de produção somente com aprovação. O checkbox aparece apenas no domínio oficial configurado. A decisão do visitante é opcional e reversível no rodapé. Dados são enviados ao gateway do Umami; o navegador e o provedor ainda processam dados de conexão. A preferência é guardada localmente. Rever o aviso, finalidade, retenção e contato do titular antes de ativar. [Guia da ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/anonimizado___guia_de_cookies.pdf)
3. Verificar que recusa e retirada impedem novos envios. Após aceite, abrir um case, usar contato e copiar o e-mail uma vez. Conferir um evento correspondente por ação no painel em tempo real, além da visualização de página. Não enviar e-mail, título livre, referrer, identificador pessoal, URL com query ou fragmento. O teste usa um destino simulado; ele não confirma entrega ao provedor.
4. No painel, comparar páginas e eventos por período. Separar pageviews de eventos personalizados. Com a política de não enviar referrer nem UTM, a origem externa do tráfego fica sem atribuição; acompanhar canais pelo controle privado de prospecção. Sem contagem de sessões adequada, informar interações por visita. Cliques não confirmam contato comercial.
5. Para interromper o transporte, remover o ID e publicar novo build autorizado. A branch não altera variáveis na Vercel. Para desfazer o restante, reverter o merge por PR; sem migração de dados.

[Mensagens e metas de 30 dias](divulgacao.md)

## Evidências da rodada

Instalação limpa, lint, build e 15 testes passaram, preservando os 13 anteriores. As seis rotas cobriram as sete larguras solicitadas. Teste local com valor fictício confirmou a meta Google no HTML; em CI sem variável o teste espera sua ausência. Os dez nomes do contrato passaram pelo transporte simulado, com filtragem de propriedades e domínio, sem transmissão externa. O evento de currículo tem cobertura de contrato; download público aguarda o PDF aprovado.

Lighthouse 13.6, Chromium local, build de produção, mediana de três execuções por perfil.

- mobile: performance, acessibilidade, boas práticas e SEO [100, 100, 100, 100]; LCP 0.755 s; CLS 0.000.
- desktop: performance, acessibilidade, boas práticas e SEO [100, 100, 100, 100]; LCP 0.205 s; CLS 0.000.

Valores anteriores: LCP 0,755 s móvel e 0,205 s desktop; CLS zero. São medições de laboratório. No domínio publicado, sitemap e cinco páginas responderam 200, canonicals corresponderam às URLs, robots permite rastreamento, rota inexistente retornou 404, demos e imagens responderam 200. LinkedIn retornou 999 ao verificador. Chromium percorreu as páginas verificando console e árvore de acessibilidade, incluindo filtro por teclado, orientação horizontal e zoom de 200%. O teste físico continua pendente.
