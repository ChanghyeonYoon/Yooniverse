import type { MetadataRoute } from "next";

import { products } from "@/src/constants/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = products.map((project) => ({
    url: `https://changhyeon.net/projects/${project.slug}`,
    lastModified: new Date(project.modified_at),
    changeFrequency: "monthly",
    priority: 0.8,
  })) as MetadataRoute.Sitemap;

  return [
    {
      url: "https://changhyeon.net/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://changhyeon.net/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://changhyeon.net/resueme",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://changhyeon.net/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projects,
    {
      url: "https://changhyeon.net/presentations",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://changhyeon.net/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
