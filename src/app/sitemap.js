export default function sitemap() {
  return [
    {
      url: "https://www.zorabridge.com",
      lastModified: new Date(),
      changeFrequency: "montly",
      priority: 1,
    },
    {
      url: "https://www.zorabridge.com/transactions",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.zorabridge.com/distribute",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.zorabridge.com/relay",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://www.zorabridge.com/relay/bridge",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.zorabridge.com/relay/transactions",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: "https://www.zorabridge.com/superbridge",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
  ];
}
