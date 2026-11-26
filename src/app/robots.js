import { origin } from "./data/site";
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: origin + "/sitemap.xml",
  };
}
