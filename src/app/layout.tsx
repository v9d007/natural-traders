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
  title: `${COMPANY.name} | Wholesale Distributor for Packaged Water, Cold Drinks, Jeera Soda & Sanitary Pads in Dhampur & Bijnor`,
  description: `Authorized B2B wholesale supplier in Dhampur (Bijnor, UP). Direct manufacturer rates for packaged drinking water (200ml/500ml/1L/20L), cold drinks, jeera masala soda, and sanitary pads in bulk cartons. Call now for dealer rates.`,
  keywords: [
    "wholesale distributor dhampur",
    "cold drinks wholesale distributor bijnor",
    "packaged drinking water bulk supplier UP",
    "jeera water masala soda wholesale price",
    "sanitary pads wholesale rate carton bijnor",
    "fmcg beverage distributor dhampur",
    "mineral water bottle 500ml 1 litre wholesale",
    "wholesale drinks dealer near me",
    "natural traders dhampur",
  ],
  authors: [{ name: COMPANY.legalName }],
  creator: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.thenaturaltraders.in",
    siteName: COMPANY.name,
    title: `${COMPANY.name} - Direct Manufacturer Supply at Wholesale Rates`,
    description: `Wholesale distributor of packaged water, cold drinks, jeera soda, and sanitary pads across Dhampur, Bijnor, and Western UP. Contact for bulk dealer rates.`,
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
