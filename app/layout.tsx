import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import Script from "next/script";
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
    <body className="min-h-full flex flex-col font-body">
      
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '253928609695585');
  fbq('track', 'PageView');
  `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=253928609695585&ev=PageView&noscript=1"
        />
      </noscript>

      {children}
    </body>
  </html> 
  );
}
