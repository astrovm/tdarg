import type { MetadataRoute } from "next";

const BASE_URL = "https://tdarg.com.ar";

const routes = [
  { path: "", changeFrequency: "daily", priority: 1 },
  { path: "/precios", changeFrequency: "hourly", priority: 0.9 },
  { path: "/especialistas", changeFrequency: "monthly", priority: 0.8 },
  { path: "/legislacion", changeFrequency: "monthly", priority: 0.8 },
  { path: "/diagnostico", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tratamientos", changeFrequency: "monthly", priority: 0.7 },
  { path: "/comorbilidades", changeFrequency: "monthly", priority: 0.7 },
] satisfies Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
