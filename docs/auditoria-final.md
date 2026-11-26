# Auditoria final do portfólio

Revisão de 26/11/2026. Produção e main no merge `73c4fb9` do [PR #19](https://github.com/pethersonzada/petherson-dev/pull/19). O deploy de produção `dpl_8JYjESnh7oGhEN1KrDWeZTHSEFyC` foi identificado pelo domínio, branch e SHA na Vercel. Estado READY, build concluído e cache enviado. A execução 45748184879 do GitHub Actions passou. O workflow executa lint, build e testes em PR; obrigatoriedade por regra de proteção da branch não foi verificada.

## Evidência independente

- Reinstalação com npm ci. Lint, build e nove testes existentes passaram antes de qualquer edição. As seis rotas do teste cobriram 320, 375, 390, 768, 1024, 1440 e 1920 px.
- No site publicado, a home, catálogo, três cases, imagem social, favicon, robots e sitemap responderam 200. Uma URL inexistente retornou 404. HTTP redirecionou para HTTPS com 308. A requisição HTTPS com verificação TLS do ambiente passou; HSTS presente. Home com revalidação e x-vercel-cache HIT. Imagens das galerias e URLs de otimização responderam 200.
- Chromium carregou as cinco páginas publicadas sem erro de console ou exceção de página. Para a inspeção visual remota foi necessário confiar no proxy do ambiente; a verificação HTTPS independente usou curl com validação habilitada. Logs da Vercel, filtro error/fatal nos últimos 30 minutos, sem registros devolvidos. Essa janela não cobre incidentes anteriores.
- Links de código, dois registros técnicos, duas demos e sete projetos secundários retornaram 200. LinkedIn devolveu 999 ao verificador automático. O endereço consta também do currículo do titular; o acesso humano ao perfil merece confirmação.
- BeVans: verificados o filtro Firebase no backend, o ordenador OR-Tools com extremos fixos e o relatório de homologação Android. O caso documenta teste em emuladores e limites do GPS em campo. Marketplace: componente Payment navega para a confirmação; nenhuma liquidação financeira no fluxo demonstrado. HelpDesk: gateway, três bancos SQLite e teste de indisponibilidade no repositório. Atribuições individuais sustentadas pelo histórico. Sete capturas WebP existentes; origens na [auditoria anterior](auditoria.md).
- Jornada de recrutamento: identificação, casos, código, formação e contato no fluxo da home. Jornada comercial: serviços, descrição do problema e e-mail direto. Revisão conservou a apresentação e as [capturas desktop](evidencias/depois.webp) e [mobile](evidencias/depois-mobile.webp) como referência do PR #19. Sem teste moderado com compradores ou recrutadores.

## Correções na branch

O audit inicial retornou 13 entradas, incluindo Next.js crítico e pacotes transitivos. Atualizados Next.js e eslint-config-next de 16.3.2 para 16.4.6 e resoluções afetadas do lockfile. npm audit final retornou zero. É uma verificação de advisories conhecidos, não uma garantia de ausência de vulnerabilidades. O projeto não recebe formulários nem possui autenticação própria. Nenhum segredo nos padrões de chave pesquisados nos arquivos rastreados. Headers para frame-ancestors, base-uri, object-src, form-action, MIME, referrer e permissões desnecessárias. A política não restringe todo script executável.

A suíte anterior omitia tags WCAG 2.1 A e 2.2 A. A revisão ampliada encontrou label-content-name-mismatch no cabeçalho e na chamada do BeVans. A marca agora inclui o texto visível no nome acessível, e o destaque usa a própria legenda como nome. O título HTML da home em produção era apenas “Desenvolvedor Fullstack”. A branch acrescenta o nome profissional, inclusive ao compartilhar. A meta de propriedade Google é opcional e depende de valor emitido pela conta do proprietário.

Medição preparada com eventos DOM de vocabulário fechado, slugs permitidos e sem transporte, cookies ou SDK. Rotas com query de teste não vazaram o parâmetro. O plano da Vercel é Hobby; os eventos personalizados exigem plano compatível. Escolha de provedor e eventual custo ficam pendentes. Não existem dados históricos no portfólio para calcular conversão. O README contém eventos, denominadores e instruções de ativação futura.

## Acessibilidade e validação assistiva

Além do axe, inspecionados landmarks, níveis de título e nomes na árvore de acessibilidade do Chromium. No catálogo, Tab percorreu skip link, marca, navegação e retorno à home; Espaço no filtro de automação retornou “1 projeto”. Com viewport de 768 px e zoom CSS de 200%, largura do documento de 768 px. Emulação de movimento reduzido ativa. O botão de copiar anuncia sucesso ou orientação para selecionar o endereço. As ações principais têm alvo de 44 px. O currículo aguarda aprovação; não há download público para testar.

**Roteiro físico (#22).** Com TalkBack no Android ou VoiceOver no iOS, abra a home e percorra os títulos. Confirme nome da marca e do destaque, entre no catálogo, ative dois filtros e ouça seleção e contagem. Abra uma imagem de case, volte e confira foco. Ative copiar e-mail, ouça a confirmação e confira o conteúdo colado. Repita com fonte ampliada, orientação horizontal e movimento reduzido. Registre modelo, sistema, leitor, versão, resultado e elemento afetado. Chromium/axe e árvore acessível não substituem a leitura falada; conformidade integral permanece sem certificação.

## Situação das 18 issues originais

| Issue | Situação do escopo original | Arquivo ou evidência principal |
| --- | --- | --- |
| #1 | Concluída | page.js, hero e CTAs públicos |
| #2 | Concluída | data/cases.js, arquitetura.svg e fontes BeVans |
| #3 | Concluída | public/cases, galerias, sete telas e demos |
| #4 | Concluída | Contato.jsx e testes de interação |
| #5 | Concluída | três cases e sete projetos secundários |
| #6 | Concluída | catálogo, slugs, retorno e 404 |
| #7 | Concluída | globals.css, sete larguras |
| #8 | Concluída | serviços e canais reais na home |
| #9 | Concluída pelo critério original | currículo ou pendência explícita. Minuta privada de uma página, formação e experiência conferidas. Aprovação e download em #20 |
| #10 | Concluída | textos de produto, serviços e limitações |
| #11 | Concluída | componentes, remoções, lint e build |
| #12 | Concluída | sitemap, canonical, cards e schema. Propriedade Google em #23 |
| #13 | Parcial na main; correção submetida para integração | divergência do nome acessível reproduzida com a suíte ampliada. Teste físico opcional separado em #22 |
| #14 | Concluída | comparação original e medianas desta revisão |
| #15 | Concluída | testes da main e execução verde no PR #19 |
| #16 | Concluída pelo critério original | plano de mensuração documentado. Transporte e autorização em #21 |
| #17 | Concluída | README reproduzido com instalação limpa |
| #18 | Concluída | PR #19, evidências, merge aprovado e SHA publicado |

17 de 18 encerradas (94,4%). Quatro continuações: #20 aprovação de currículo, #21 decisão de analytics, #22 aparelho/leitor e #23 conta Google. A integração da correção de #13 depende de aprovação do novo PR. Nenhuma mudança desta branch foi promovida manualmente a produção.

## Notas da versão em revisão

| Dimensão | Nota / 10 | Motivo |
| --- | ---: | --- |
| Posicionamento | 9 | Nome e atuação na primeira dobra; falta teste de lembrança |
| Proposta de valor | 9 | Duas operações concretas explicam o trabalho |
| Copywriting | 9 | Atribuições e limitações explícitas, sem resultados hipotéticos |
| UX/UI | 8,5 | Caminhos claros; faltam sessões observadas com os dois públicos |
| Responsividade | 9 | Sete larguras, sem overflow; falta dispositivo físico nesta rodada |
| Estudos de caso | 9 | Telas, código, decisões e limite do checkout demonstrados |
| Credibilidade | 8,5 | Autoria e formação sustentadas; PDF aguarda aceite |
| Conversão | 8 | CTAs funcionais; ainda sem contagem de contatos reais |
| Acessibilidade | 8,5 | Verificação semântica ampliada, teclado e zoom; leitor físico pendente |
| Performance | 9 | Medianas laboratoriais e CLS zero; sem INP de campo |
| SEO | 9 | Cinco URLs e dados de compartilhamento; indexação não confirmada |
| Segurança | 8,5 | Dependências corrigidas na branch e headers testados; risco persiste na versão anterior até integração |
| Qualidade de código | 9 | Componentes pequenos, dados separados e entrada de medição restrita |
| Documentação | 9 | Procedimentos reproduzíveis e pendências rastreadas |
| Testes | 9 | Fluxos, falhas, metadados, acessibilidade e CI; sem E2E de coleta externa |

Média editorial de 8,8/10 arredondada a uma casa. Para manutenção e rollback, consulte o [README](../README.md). Para divulgação e acompanhamento, use o [plano de 30 dias](divulgacao.md).

## Medições reproduzidas

Lighthouse 13.6.0 em localhost, build de produção, mesmo Chromium, perfil mobile padrão e preset desktop, três navegações por perfil e por versão. Valores abaixo são medianas. Na revisão anterior havia uma rodada móvel com LCP de 0,76 s.

| Build e perfil | Performance / acessibilidade / boas práticas / SEO | LCP | CLS | Bytes transferidos |
| --- | --- | ---: | ---: | ---: |
| main, mobile | 100 / 100 / 100 / 100 | 0.757 s | 0.000 | 188055 |
| main, desktop | 100 / 100 / 100 / 100 | 0.205 s | 0.000 | 195842 |
| entregue, mobile | 100 / 100 / 100 / 100 | 0.755 s | 0.000 | 194261 |
| entregue, desktop | 100 / 100 / 100 / 100 | 0.205 s | 0.000 | 203271 |

O volume transferido aumentou após a atualização do framework e a instrumentação local. As quatro metas de pontuação e os limites de LCP e CLS foram atendidos nas medianas. INP exige dados de campo. O CI testa o comportamento; não estabelece orçamento automatizado de Lighthouse. O build final passou em lint e nos 13 testes Playwright, incluindo o nome acessível que falhava na main.
