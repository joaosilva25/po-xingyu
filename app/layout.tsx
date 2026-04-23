import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: "variable",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: "variable",
});

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl = (
  rawSiteUrl
    ? rawSiteUrl.startsWith("http")
      ? rawSiteUrl
      : `https://${rawSiteUrl}`
    : "https://xingyu.com.br"
).replace(/\/+$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Xingyu | Maior Especialista de Semijoias do Brasil",
    template: "%s | Xingyu",
  },
  description:
    "Aumente sua margem de lucro em até 75%. Compre suas semijoias para revenda diretamente da fábrica.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "semijoias",
    "semijoias para revenda",
    "atacado semijoias",
    "fábrica de semijoias",
    "semijoias no atacado",
    "semijoias direto da fábrica",
    "revenda semijoias",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Xingyu",
    title: "Xingyu | Maior Especialista de Semijoias do Brasil",
    description:
      "Aumente sua margem de lucro em até 75%. Compre suas semijoias para revenda diretamente da fábrica.",
    images: [
      {
        url: "/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Xingyu — semijoias direto da fábrica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xingyu | Maior Especialista de Semijoias do Brasil",
    description:
      "Aumente sua margem de lucro em até 75%. Compre suas semijoias para revenda diretamente da fábrica.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/logoMenu.png", type: "image/png" }],
    apple: [{ url: "/logoMenu.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d0e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
