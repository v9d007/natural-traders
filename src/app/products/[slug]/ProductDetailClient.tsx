"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Building,
  CheckCircle2,
  Images,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { ProductCard } from "@/components/ProductCard";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const { t, language } = useLanguage();
  const isHindi = language === "hi";

  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const activeImage = galleryImages[selectedImgIndex] || product.image;

  const nextImage = () => {
    setSelectedImgIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImgIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-emerald-600">{t.navHome}</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-emerald-600">{t.navCatalog}</Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-white font-medium truncate max-w-xs">
          {isHindi && product.hindiName ? product.hindiName : product.name}
        </span>
      </nav>

      {/* Main Product Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Interactive Multi-Image Gallery */}
        <div className="lg:col-span-6 space-y-3">
          {/* Main Active Image Box - object-contain ensures 100% full view with ZERO clipping */}
          <div className="relative w-full h-80 sm:h-[500px] rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg group p-4">
            <Image
              src={activeImage}
              alt={`${product.name} wholesale distributor Dhampur Bijnor`}
              fill
              priority
              className="object-contain p-3 transition-all duration-300"
            />
            
            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex gap-2 pointer-events-none">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md">
                {t.inStock}
              </span>
              {galleryImages.length > 1 && (
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-950/75 text-white backdrop-blur-md flex items-center gap-1 border border-white/15">
                  <Images className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{selectedImgIndex + 1} / {galleryImages.length}</span>
                </span>
              )}
            </div>

            {/* Gallery Navigation Arrows (if multiple images) */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-950/90 text-white flex items-center justify-center backdrop-blur-md opacity-80 group-hover:opacity-100 transition-opacity shadow-md"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-950/90 text-white flex items-center justify-center backdrop-blur-md opacity-80 group-hover:opacity-100 transition-opacity shadow-md"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Selector Strip (Multi-Image Support) */}
          {galleryImages.length > 1 && (
            <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar">
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  className={`relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden shrink-0 border-2 bg-slate-50 dark:bg-slate-900 transition-all ${
                    selectedImgIndex === idx
                      ? "border-emerald-500 shadow-md scale-95 ring-2 ring-emerald-500/30"
                      : "border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & CTAs */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
              <span>{isHindi ? product.hindiCategoryLabel : product.categoryLabel}</span>
              <span>•</span>
              <span className="font-mono text-slate-400">{product.sku}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {isHindi && product.hindiName ? product.hindiName : product.name}
            </h1>

            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-2">
              Brand / Manufacturer: <strong className="text-slate-800 dark:text-slate-200">{product.brand}</strong>
            </p>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {isHindi && product.hindiDescription ? product.hindiDescription : product.description}
          </p>

          {/* Wholesale Specs Grid */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-500 block">{t.unitPackaging}:</span>
              <strong className="text-sm text-slate-900 dark:text-white mt-0.5 block">
                {isHindi && product.hindiUnitPackaging ? product.hindiUnitPackaging : product.unitPackaging}
              </strong>
            </div>

            <div>
              <span className="text-slate-500 block">{t.moqLabel}:</span>
              <strong className="text-sm text-emerald-600 dark:text-emerald-400 mt-0.5 block">
                {isHindi && product.hindiMoq ? product.hindiMoq : product.moq}
              </strong>
            </div>

            <div>
              <span className="text-slate-500 block">{isHindi ? "थोक मूल्य / रेट:" : "Wholesale Price:"}</span>
              <strong className="text-sm text-emerald-600 dark:text-emerald-400 mt-0.5 block">
                {isHindi ? "कॉल / व्हाट्सएप पर पूछताछ करें" : "Available on Enquiry (Call / WhatsApp)"}
              </strong>
            </div>

            <div>
              <span className="text-slate-500 block">Wholesale Rate Benefit:</span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5 block">
                {isHindi && product.hindiWholesaleNote ? product.hindiWholesaleNote : product.wholesaleNote}
              </span>
            </div>
          </div>

          {/* Delivery & Assurance Tags */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-3 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-500" />
              <span>{isHindi ? "धामपुर से उसी दिन रवानगी" : "Same-day Dhampur dispatch"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-blue-500" />
              <span>{isHindi ? "सीधे कंपनी से ताज़ा माल" : "Direct factory fresh stock"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications & Ideal Applications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
        {/* Specifications Table */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {isHindi ? "पैकेजिंग एवं तकनीकी विवरण" : "Packaging & Technical Specifications"}
          </h3>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-xs">
            <table className="w-full text-left divide-y divide-slate-200 dark:divide-slate-800">
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                {product.specifications.map((spec, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 px-4 font-semibold text-slate-500 dark:text-slate-400 w-1/3">
                      {spec.label}
                    </td>
                    <td className="py-3 px-4 text-slate-800 dark:text-slate-200 font-medium">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ideal Customer Segments */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {isHindi ? "उपयुक्त व्यापारिक प्रतिष्ठान" : "Recommended Commercial Buyers"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.idealFor.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-300">
            <strong>{isHindi ? "कस्टम थोक आर्डर:" : "Custom Wholesale Orders:"}</strong>{" "}
            {isHindi
              ? "टेंट हाउस, विवाह समारोह अथवा नजदीकी जिलों में बड़े पैमाने पर सप्लाई हेतु हमारे व्हाट्सएप पर संपर्क करें।"
              : "Need full mini-truck shipments for tent houses, weddings, or wholesale redistribution in nearby districts? Message our dispatch team directly on WhatsApp."}
          </div>
        </div>
      </div>

      {/* Related Products in Same Category */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-12 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {isHindi ? "इसी श्रेणी के अन्य थोक उत्पाद" : `More Wholesale Products in ${product.categoryLabel}`}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
