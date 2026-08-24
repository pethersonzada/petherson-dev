import "./globals.css";

export const metadata = {
  title: "Miguel Petherson | Dev",
  description:
    "Portfólio de Miguel Petherson: desenvolvimento full-stack, análise de dados com Machine Learning e infraestrutura de redes. Projetos em Python, Java, SQL e Cisco.",
  keywords: [
    "Miguel Petherson",
    "desenvolvedor full-stack",
    "análise de dados",
    "infraestrutura de redes",
    "Python",
    "Java",
    "Spring Boot",
  ],
  openGraph: {
    title: "Miguel Petherson | Full-Stack, Dados e Infraestrutura",
    description:
      "Projetos em desenvolvimento full-stack, ciência de dados e infraestrutura de redes.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d10",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}