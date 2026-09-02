import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/data/company";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050e1d" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thenaturaltraders.in"),
  verification: {
    google: "py0gdyWXY488FDaCG7LKZYqeqgf-ejPy85ZF7-x1HbM",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  title: `${COMPANY.name} | Wholesale Distributor for Packaged Water, Cold Drinks, Eco Bags & Sanitary Pads in Dhampur & Bijnor`,
  description: `Authorized B2B wholesale distributor in Dhampur (Bijnor, UP). Direct manufacturer rates for packaged drinking water (200ml/500ml/1L/20L), cold drinks, traditional goli soda, jeera masala soda, CPCB compostable carry bags, and 7Soft sanitary pads in bulk cartons. Doorstep delivery across Western UP.`,
  keywords: [
    "natural traders",
    "natural traders dhampur",
    "natural traders bijnor",
    "thenaturaltraders.in",
    "wholesale distributor dhampur",
    "cold drinks wholesale distributor bijnor",
    "packaged drinking water bulk supplier UP",
    "200ml water bottles wholesale crate price",
    "500ml 1 litre mineral water supplier bijnor",
    "traditional goli soda glass bottles wholesale",
    "jeera water masala soda wholesale price",
    "wedding catering water bottles bulk supplier",
    "party cold drinks wholesale rates UP",
    "CPCB certified compostable bags manufacturer wholesale",
    "bio-degradable carry bags wholesale dhampur",
    "compostable garbage bag rolls bulk price",
    "eco friendly shipping courier bags supplier",
    "sanitary pads wholesale rate carton bijnor",
    "7Soft maxi care sanitary pads distributor",
    "baby pants diapers wholesale dealer UP",
    "shreeyash namkeen wholesale distributor",
    "fmcg beverage distributor dhampur",
    "kirana store wholesale supplier dhampur",
    "wholesale drinks dealer near me",
    "wholesale distributor seohara",
    "wholesale dealer najibabad",
    "wholesale supplier sherkot",
    "fmcg distributor nagina",
    "wholesale dealer chandpur UP",
    "नेचुरल ट्रेडर्स",
    "थोक वितरक धामपुर",
    "कोल्ड ड्रिंक्स होलसेल बिजनौर",
    "मिनरल वाटर बोतल थोक रेट",
    "बायोडीग्रेडेबल बैग्स होलसेल",
    "सैनिटरी पैड्स थोक विक्रेता",
  ],
  authors: [{ name: COMPANY.legalName }],
  creator: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.thenaturaltraders.in",
    siteName: COMPANY.name,
    title: `${COMPANY.name} - Direct Manufacturer Supply at Wholesale Rates`,
    description: `Wholesale distributor of packaged water, cold drinks, goli soda, compostable bags, and sanitary pads across Dhampur, Bijnor, and Western UP. Contact for bulk dealer rates.`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} Wholesale Distribution Warehouse`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
  // Schema.org Structured Data (JSON-LD) for Local Wholesale Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: COMPANY.legalName,
    alternateName: COMPANY.hindiName,
    description: COMPANY.description,
    url: "https://www.thenaturaltraders.in",
    logo: "https://www.thenaturaltraders.in/icon-512.png",
    image: "https://www.thenaturaltraders.in/icon-512.png",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    vatID: COMPANY.gstin,
    taxID: COMPANY.gstin,
    priceRange: "₹₹ (Wholesale Commercial Rates)",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressLocality: COMPANY.primaryCity,
      addressRegion: COMPANY.state,
      postalCode: COMPANY.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.3117, // Dhampur Latitude
      longitude: 78.5085, // Dhampur Longitude
    },
    areaServed: COMPANY.deliveryCoverage.primaryTowns.map((town) => ({
      "@type": "AdministrativeArea",
      name: `${town}, Uttar Pradesh`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 7,
      returnMethod: "https://schema.org/ReturnInStore",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Google Analytics 4 Tag */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${COMPANY.googleAnalyticsId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${COMPANY.googleAnalyticsId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased min-h-screen flex flex-col selection:bg-emerald-500 selection:text-white transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
