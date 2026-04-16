import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const siteUrl = (
    rawSiteUrl
      ? rawSiteUrl.startsWith("http")
        ? rawSiteUrl
        : `https://${rawSiteUrl}`
      : "https://xingyu.com.br"
  ).replace(/\/+$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

