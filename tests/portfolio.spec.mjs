import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/projetos",
  "/projetos/bevans",
  "/projetos/marketplace-de-servicos",
  "/projetos/helpdesk-ti",
  "/projetos/inexistente",
];
for (const route of routes) {
  test(`Layout, conteúdo e acessibilidade em ${route}`, async ({ page }) => {
    const errors = [];
    page.on("pageerror", (err) => errors.push(err.message));
    const response = await page.goto(route);
    expect(response.status()).toBe(route.endsWith("inexistente") ? 404 : 200);
    await expect(page.locator("h1")).toHaveCount(1);
    for (const width of [320, 375, 390, 768, 1024, 1440, 1920]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth),
        `overflow em ${width}`,
      ).toBeLessThanOrEqual(width);
    }
    for (const img of await page.locator("main img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(() => img.evaluate((i) => i.complete && i.naturalWidth > 0))
        .toBe(true);
    }
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22a", "wcag22aa"])
      .analyze();
    expect(result.violations.map((v) => v.id)).toEqual([]);
    expect(errors).toEqual([]);
  });
}
test("Navegação por teclado, filtro e retorno ao case", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByText("Pular para o conteúdo")).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page.getByRole("link", { name: "Ver projetos ↓", exact: true }).click();
  await expect(page).toHaveURL(/#projetos$/);
  await page.getByRole("link", { name: "Catálogo completo" }).click();
  await page.getByRole("button", { name: "Automação" }).click();
  await expect(page.getByRole("status").first()).toHaveText("1 projeto");
  await page.getByRole("link", { name: "Ver case BeVans" }).click();
  await expect(page.locator("h1")).toHaveText("BeVans");
  await page.getByRole("link", { name: "Todos os projetos" }).click();
  await expect(page.locator("h1")).toHaveText("Projetos");
});
test("Contato por e-mail e feedback da cópia", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  await page.getByRole("link", { name: "Entrar em contato" }).click();
  const email = page.getByRole("link", { name: "pethersonzada@gmail.com" });
  await expect(email).toHaveAttribute("href", "mailto:pethersonzada@gmail.com");
  await page.getByRole("button", { name: "Copiar e-mail" }).click();
  await expect(page.getByRole("status")).toHaveText("E-mail copiado.");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "pethersonzada@gmail.com",
  );
});
test("Sitemap, canonical, imagem social e robots", async ({
  page,
  request,
}) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();
  for (const route of routes.slice(0, -1)) {
    await page.goto(route);
    const url = "https://petherson-dev.vercel.app" + route;
    expect(sitemap).toContain(url);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(new URL(canonical).href).toBe(url);
    expect(
      await page.locator('meta[property="og:image"]').getAttribute("content"),
    ).toContain("/social.png");
  }
  expect((await request.get("/social.png")).ok()).toBe(true);
  expect(await (await request.get("/robots.txt")).text()).toContain(
    "sitemap.xml",
  );
});

test("Sinais locais usam apenas o nome da ação e o slug conhecido", async ({ page }) => {
  await page.addInitScript(() => {
    window.sinais = [];
    window.addEventListener("portfolio:evento", event => window.sinais.push(event.detail));
  });
  await page.goto("/projetos?email=dado-privado");
  await page.getByRole("link", { name: "Ver case BeVans" }).click();
  await page.getByRole("link", { name: "Contato", exact: true }).click();
  expect(await page.evaluate(() => window.sinais)).toEqual([
    { nome: "project_view", propriedades: {} },
    { nome: "case_study_view", propriedades: { projeto: "bevans" } },
    { nome: "contact_click", propriedades: { projeto: "bevans" } },
  ]);
});

test("Falha ao copiar mantém o endereço disponível e anuncia a alternativa", async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, "clipboard", {
    value: { writeText: async () => { throw new Error("Permissão negada"); } },
  }));
  await page.goto("/");
  await page.getByRole("button", { name: "Copiar e-mail" }).click();
  await expect(page.getByRole("status")).toContainText("copiar manualmente");
  await expect(page.getByRole("link", { name: "pethersonzada@gmail.com" })).toBeVisible();
});

test("Cabeçalhos de defesa e 404 preservam a navegação", async ({page}) => {
  const result = await page.goto("/rota-que-nao-existe");
  expect(result.status()).toBe(404);
  expect(result.headers()["content-security-policy"]).toContain("frame-ancestors 'none'");
  expect(result.headers()["x-content-type-options"]).toBe("nosniff");
  await page.getByRole("link", {name:"Voltar aos projetos"}).click();
  await expect(page).toHaveURL(/\/projetos$/);
});

test("Ativações de canais emitem um sinal por ação", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.addInitScript(() => {
    window.sinais = [];
    window.addEventListener("portfolio:evento", e => window.sinais.push(e.detail.nome));
    // Mantém o teste nos documentos locais e preserva a propagação normal do clique.
    document.addEventListener("click", e => {
      if (e.target.closest?.('a[href^="https:"], a[href^="mailto:"]')) e.preventDefault();
    }, true);
  });
  await page.goto("/");
  for (const nome of ["service_interest", "email_click", "linkedin_click", "github_click"]) {
    await page.locator(`a[data-evento="${nome}"]`).first().click();
  }
  await page.getByRole("button", {name:"Copiar e-mail"}).click();
  await expect(page.getByRole("status")).toHaveText("E-mail copiado.");
  expect(await page.evaluate(() => window.sinais)).toEqual([
    "service_interest", "email_click", "linkedin_click", "github_click", "email_copy",
  ]);
  await page.getByRole("link", {name:"Ver case BeVans"}).click();
  await page.locator('a[data-evento="demo_click"]').first().click();
  expect(await page.evaluate(() => window.sinais.slice(-2))).toEqual(["case_study_view","demo_click"]);
});


test("Currículo aprovado: arquivo íntegro, download e sinal local em desktop e mobile", async ({page, request}) => {
  const { createHash } = await import("node:crypto");
  const url = "/Miguel-Petherson-Curriculo.pdf";
  const response = await request.get(url);
  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  const bytes = await response.body();
  expect(bytes.subarray(0, 5).toString()).toBe("%PDF-");
  expect(createHash("sha256").update(bytes).digest("hex")).toBe("4f32c5e5520b0e8dc17b19e50132cff4f5c8364db77798a664dbad50903ea6f9");
  await page.addInitScript(() => {
    window.sinais = [];
    window.addEventListener("portfolio:evento", e => window.sinais.push(e.detail.nome));
  });
  for (const width of [390, 1440]) {
    await page.setViewportSize({width, height: 900});
    await page.goto("/");
    const link = page.getByRole("link", {name:"Baixar currículo (PDF)", exact:true});
    await expect(link).toHaveAttribute("href", url);
    const downloadPromise = page.waitForEvent("download");
    await link.click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe("Miguel-Petherson-Curriculo.pdf");
    expect(await download.failure()).toBeNull();
    await expect.poll(() => page.evaluate(() => window.sinais.filter(n => n === "resume_download").length)).toBe(1);
  }
});
