import "./globals.css";

export const metadata = {
  title: { default: "Miguel Petherson | Desenvolvedor de Software", template: "%s | Miguel Petherson" },
  description: "Portfólio de Miguel Petherson. Projetos de desenvolvimento web e mobile, React Native, Next.js, Java, Python e análise de dados. Conheça o BeVans.",
  applicationName: "Portfólio Miguel Petherson",
  keywords: ["Miguel Petherson", "desenvolvedor de software", "portfólio", "BeVans", "React Native", "Next.js", "Python", "Java", "dados"],
  authors: [{ name: "Miguel Petherson", url: "https://github.com/pethersonzada" }],
  creator: "Miguel Petherson",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Miguel Petherson | Desenvolvimento de Software",
    description: "Aplicações web e mobile, projetos de dados e o case BeVans.",
    type: "website",
    locale: "pt_BR",
    siteName: "Miguel Petherson — Portfólio",
  },
  twitter: { card: "summary_large_image", title: "Miguel Petherson | Desenvolvedor de Software", description: "Conheça meus projetos, incluindo o BeVans." },
};
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0a0c0f" };
export default function RootLayout({ children }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}