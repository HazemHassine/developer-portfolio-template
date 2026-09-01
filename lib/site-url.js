function resolveSiteUrl() {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    "https://example.com";

  let trimmed = String(rawUrl).trim();
  if (!trimmed) {
    return "https://example.com";
  }

  // Prepend protocol if missing
  if (!/^https?:\/\//i.test(trimmed)) {
    if (!trimmed.includes(".") && !trimmed.startsWith("localhost")) {
      trimmed = `https://${trimmed}.vercel.app`;
    } else {
      const isLocalhost = trimmed.startsWith("localhost") || trimmed.startsWith("127.0.0.1");
      trimmed = `${isLocalhost ? "http://" : "https://"}${trimmed}`;
    }
  }

  try {
    const parsed = new URL(trimmed);
    const pathname = parsed.pathname === "/" ? "" : parsed.pathname.replace(/\/+$/, "");
    return `${parsed.origin}${pathname}`;
  } catch {
    return "https://example.com";
  }
}

export const siteUrl = resolveSiteUrl();
