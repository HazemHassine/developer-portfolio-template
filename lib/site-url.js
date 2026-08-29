const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");
