export const origin = "https://petherson-dev.vercel.app";
export function pageMeta(title, description, path) {
  const url = new URL(path, origin).href;
  const image = origin + "/social.png";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "pt_BR",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Miguel Petherson, desenvolvimento fullstack",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
