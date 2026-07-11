import type { MetadataRoute } from "next";

const siteUrl = "https://www.somaeducationgroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/achievements",
    "/charity",
    "/competitions",
    "/competitions/cmpo",
    "/competitions/e-solver-cambodia",
    "/consulting",
    "/contact",
    "/newton-learning-center",
    "/opportunities",
    "/soma-tech",
    "/student-success-center",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}