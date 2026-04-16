import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const siteUrl = (
    rawSiteUrl
      ? rawSiteUrl.startsWith("http")
        ? rawSiteUrl
        : `https://${rawSiteUrl}`
      : "https://xingyu.com.br"
  ).replace(/\/+$/, "");

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

