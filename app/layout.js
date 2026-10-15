import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand", weight: ["500", "600", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Mella","jobTitle":"Ilustrator & Sticker Artist","url":"https://linkinbio-mellow.pintuweb.id","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://linkinbio-mellow.pintuweb.id"),
  title: { default: "Mella — Ilustrator & Sticker Artist", template: "%s — Mella" },
  description: "Tautan Mella, ilustrator dan sticker artist di Malang: toko lima pack sticker vinyl, jadwal bazar, komisi ilustrasi dengan estimasi harga, dan kerja sama brand.",
  applicationName: "Mella",
  keywords: ["sticker artist", "komisi ilustrasi", "sticker vinyl", "ilustrator malang", "link in bio ilustrator"],
  authors: [{ name: "Mella" }],
  creator: "Mella",
  publisher: "Mella",
  alternates: { canonical: "https://linkinbio-mellow.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-mellow.pintuweb.id",
    siteName: "Mella",
    title: "Mella — Ilustrator & Sticker Artist",
    description: "Tautan Mella, ilustrator dan sticker artist di Malang: toko lima pack sticker vinyl, jadwal bazar, komisi ilustrasi dengan estimasi harga, dan kerja sama brand.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Mella — Ilustrator & Sticker Artist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mella — Ilustrator & Sticker Artist",
    description: "Tautan Mella, ilustrator dan sticker artist di Malang: toko lima pack sticker vinyl, jadwal bazar, komisi ilustrasi dengan estimasi harga, dan kerja sama brand.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${quicksand.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=mellow" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
