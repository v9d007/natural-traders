"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Package,
  Layers,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { trackProductImpression } from "@/lib/analytics";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasLoggedImpression, setHasLoggedImpression] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const { t, language } = useLanguage();
  const isHindi = language === "hi";

  const imagesList =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];
  const hasMultipleImages = imagesList.length > 1;

  // Track product view impression
  useEffect(() => {
    if (hasLoggedImpression) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoggedImpression) {
            setHasLoggedImpression(true);
            trackProductImpression(product.id, product.name, product.categoryLabel);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [product, hasLoggedImpression]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % imagesList.length);
  };

  const displayName = isHindi && product.hindiName ? product.hindiName : product.name;
  const displayPack = isHindi && product.hindiUnitPackaging ? product.hindiUnitPackaging : product.unitPackaging;
  const displayMoq = isHindi && product.hindiMoq ? product.hindiMoq : product.moq;

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {/* 1. Header Image Carousel */}
      <div className="relative w-full h-36 sm:h-52 bg-slate-50/90 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 overflow-hidden">
        {/* Clickable Image Link to Details */}
        <Link
          href={`/products/${product.slug}`}
          className="relative w-full h-full block"
        >
          <Image
            src={imagesList[currentImgIndex]}
            alt={`${product.name} wholesale Dhampur Bijnor - photo ${currentImgIndex + 1}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-contain p-2 sm:p-3.5 group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Carousel Next & Previous Arrows */}
        {hasMultipleImages && (
          <>
            <button
              onClick={handlePrevImage}
              aria-label="Previous Image"
              className="absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/90 dark:bg-slate-900/90 hover:bg-white text-slate-700 dark:text-slate-200 shadow-md flex items-center justify-center backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 hover:scale-110 border border-slate-200/60 dark:border-slate-700"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              onClick={handleNextImage}
              aria-label="Next Image"
              className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/90 dark:bg-slate-900/90 hover:bg-white text-slate-700 dark:text-slate-200 shadow-md flex items-center justify-center backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 hover:scale-110 border border-slate-200/60 dark:border-slate-700"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Subtle Carousel Dots Indicator */}
            <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {imagesList.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1 sm:h-1.5 rounded-full transition-all duration-200 ${
                    currentImgIndex === idx
                      ? "w-3 sm:w-3.5 bg-emerald-600 shadow-xs"
                      : "w-1 sm:w-1.5 bg-slate-300/80 dark:bg-slate-600/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 2. Product Info Body */}
      <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
        <div className="space-y-2 sm:space-y-2.5">
          {/* Product Title */}
          <Link href={`/products/${product.slug}`} className="block group/title">
            <h3 className="text-xs sm:text-base font-bold text-slate-900 dark:text-white leading-snug group-hover/title:text-emerald-600 dark:group-hover/title:text-emerald-400 transition-colors line-clamp-2 min-h-[2.25rem] sm:min-h-[2.75rem]">
              {displayName}
            </h3>
          </Link>

          {/* Clean Specs List - Proportional spacing for 2-col mobile */}
          <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs bg-slate-50 dark:bg-slate-800/50 p-2 sm:p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/80">
            <div className="flex items-start justify-between gap-1 sm:gap-2">
              <span className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-[11px] font-medium flex items-center gap-1 sm:gap-1.5 shrink-0 pt-0.5">
                <Package className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                <span>{t.unitPackaging}:</span>
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 text-right text-[10px] sm:text-[11px] leading-tight truncate">
                {displayPack}
              </span>
            </div>

            <div className="flex items-center justify-between gap-1 sm:gap-2 pt-1 sm:pt-1.5 border-t border-slate-200/60 dark:border-slate-700/60">
              <span className="text-emerald-700 dark:text-emerald-400 text-[10px] sm:text-[11px] font-medium flex items-center gap-1 sm:gap-1.5 shrink-0">
                <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500" />
                <span>{t.moqLabel}:</span>
              </span>
              <span className="font-bold text-emerald-700 dark:text-emerald-400 text-right text-[10px] sm:text-[11px] truncate">
                {displayMoq}
              </span>
            </div>
          </div>

          {/* MRP Row */}
          <div className="flex items-center gap-1 text-[11px] sm:text-xs pt-0.5 sm:pt-1">
            <span className="text-slate-400 dark:text-slate-500 text-[10px] sm:text-[11px]">MRP:</span>
            <strong className="text-slate-900 dark:text-white font-bold text-xs sm:text-sm whitespace-nowrap">
              {product.mrpRef}
            </strong>
          </div>
        </div>

        {/* 3. Action Buttons */}
        <div className="pt-2 sm:pt-2.5 border-t border-slate-100 dark:border-slate-800">
          <Link
            href={`/products/${product.slug}`}
            className="w-full flex items-center justify-center gap-1 sm:gap-2 h-8 sm:h-10 px-2 sm:px-4 rounded-lg sm:rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 active:scale-[0.98] text-white text-[11px] sm:text-sm font-bold transition-all shadow-xs"
          >
            <span>{t.btnViewDetails}</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
