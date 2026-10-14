const SITE = "https://linkinbio-mellow.pintuweb.id";

export default function sitemap() {
  const now = new Date();
  return ["", "/toko", "/komisi"].map((r, i) => ({ url: SITE + r, lastModified: now, changeFrequency: "monthly", priority: i ? 0.7 : 1 }));
}
