import { test, expect } from "@playwright/test";
import { enviar } from "../src/app/components/umami.mjs";

test("Transporte exige consentimento, domínio oficial, rota conhecida e ID", async () => {
  const envios = [];
  const contexto = {
    id: "00000000-0000-4000-8000-000000000001", aceito: true,
    hostname: "petherson-dev.vercel.app", caminho: "/projetos/bevans",
    slugs: ["bevans"], fetcher: async (url, options) => envios.push({url,options}),
  };
  for (const mudanca of [{aceito:false},{id:""},{hostname:"preview.vercel.app"},
    {caminho:"/privado"},{caminho:"/projetos/bevans?token=teste"},{sinal:{nome:"invalido"}}]) {
    await enviar({...contexto,...mudanca});
  }
  expect(envios).toEqual([]);
  for (const nome of ["project_view","case_study_view","contact_click","email_click","email_copy",
    "linkedin_click","github_click","resume_download","demo_click","service_interest"]) {
    await enviar({...contexto,sinal:{nome,propriedades:{email:"privado", token:"secreto"}}});
    const {url,options}=envios.at(-1);
    expect(url).toBe("https://gateway.umami.is/api/send");
    expect(options.referrerPolicy).toBe("no-referrer");
    expect(options.credentials).toBe("omit");
    expect(JSON.parse(options.body).payload).toEqual({website:contexto.id,hostname:contexto.hostname,
      url:contexto.caminho,name:nome,data:{projeto:"bevans"}});
  }
  expect(envios).toHaveLength(10);
});
test("Verificação Google respeita o valor configurado no build", async ({page}) => {
  await page.goto("/");
  const tag=page.locator('meta[name="google-site-verification"]');
  if (process.env.GOOGLE_SITE_VERIFICATION) await expect(tag).toHaveAttribute("content",process.env.GOOGLE_SITE_VERIFICATION);
  else await expect(tag).toHaveCount(0);
});
