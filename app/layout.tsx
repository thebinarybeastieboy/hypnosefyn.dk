import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import site from "@/content/site.json";
import { generateHomePageSchema } from "@/lib/seo";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.seo.title,
    template: `%s | Hypnose Fyn`,
  },
  description: site.seo.description,
  keywords: site.seo.keywords,
  authors: [{ name: site.owner.name }],
  creator: site.owner.name,
  publisher: site.owner.company,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hypnosefyn.dk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: "https://hypnosefyn.dk",
    siteName: "Hypnose Fyn",
    locale: "da_DK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateHomePageSchema()),
          }}
        />
      </head>
      <body
        className={`${roboto.variable} ${robotoSlab.variable} antialiased min-h-screen flex flex-col`}
        style={{
          fontFamily: 'var(--font-roboto), system-ui, sans-serif',
        }}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
