import { origin } from "./data/site";
import { cases } from "./data/cases";
export default function sitemap() {
  return ["/", "/projetos", ...cases.map((p) => "/projetos/" + p.slug)].map(
    (path) => ({ url: origin + path }),
  );
}
