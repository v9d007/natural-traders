import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { COMPANY } from "@/data/company";
import { ProductDetailClient } from "./ProductDetailClient";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return {};

  const title = `${product.name} Wholesale Distributor in Dhampur & Bijnor | ${COMPANY.name}`;
  const description = `Buy ${product.name} (${product.hindiName}) at wholesale dealer price in Dhampur, Bijnor (UP). Unit packaging: ${product.unitPackaging}, MOQ: ${product.moq}. Direct company supply. Call for bulk order.`;

  return {
    title,
    description,
    keywords: [
      ...product.seoKeywords,
      `${product.name} wholesale rate`,
      `bulk ${product.name} supplier UP`,
      `distributor in dhampur`,
    ],
    openGraph: {
      title,
      description,
      images: [{ url: product.image, width: 800, height: 600, alt: product.name }],
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) notFound();

  // JSON-LD Product Schema for Google Search Rich Snippets
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "10",
      highPrice: "500",
      offerCount: "100",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "WholesaleStore",
        name: COMPANY.legalName,
        telephone: COMPANY.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: COMPANY.primaryCity,
          addressRegion: COMPANY.state,
          postalCode: COMPANY.pincode,
          addressCountry: "IN",
        },
      },
    },
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </>
  );
}
