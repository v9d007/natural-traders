"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Percent,
  Truck,
  Boxes,
  ArrowRight,
  Search,
  CheckCircle2,
  Send,
  Building,
  User,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { PRODUCTS, Product, ProductCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilter } from "@/components/ProductFilter";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { FaqSection } from "@/components/FaqSection";
import { useLanguage } from "@/context/LanguageContext";
import { buildDirectCallUrl, buildWhatsAppQuoteUrl } from "@/lib/utils";
import { trackDirectCall, trackEvent } from "@/lib/analytics";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [visibleCount, setVisibleCount] = useState(8);

  const { t, language } = useLanguage();
  const isHindi = language === "hi";

  // Reset pagination to 8 when category or search changes
  useEffect(() => {
    setVisibleCount(8);
  }, [selectedCategory, searchQuery]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      const matchesCat =
        selectedCategory === "all" || product.category === selectedCategory;

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        (product.hindiName && product.hindiName.toLowerCase().includes(q)) ||
        product.brand.toLowerCase().includes(q) ||
        product.sku.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.seoKeywords.some((k) => k.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "moq-low") return a.moqUnits - b.moqUnits;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  // Lead form state
  const [leadName, setLeadName] = useState("");
  const [leadShop, setLeadShop] = useState("");
  const [leadTown, setLeadTown] = useState("");
  const [leadItems, setLeadItems] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("whatsapp_inquiry", `Homepage Bulk Quote Form: ${leadShop || leadName}`, {
      leadName,
      leadShop,
      leadTown,
      leadItems,
    });

    const url = buildWhatsAppQuoteUrl({
      productName: leadItems || "Mixed Wholesale Order (Water, Cold Drinks, Pads)",
      buyerName: leadName,
      shopName: leadShop,
      town: leadTown,
    });

    window.open(url, "_blank");
    setLeadSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 dark:bg-slate-950 text-white pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-slate-800">
        {/* Background Glow & Pattern */}
        <div className="absolute top-0 right-1/4 -mt-12 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 -mb-12 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-emerald-400 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.heroPill}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
            {t.heroTitle1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              {t.heroTitleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* Primary Action Button */}
          <div className="flex items-center justify-center pt-2">
            <Link
              href="#catalog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40"
            >
              <span>{t.heroBrowseBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Wholesale Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 max-w-5xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col items-center text-center">
              <Factory className="w-6 h-6 text-emerald-400 mb-2" />
              <strong className="text-xs sm:text-sm text-white font-bold">{t.badge1Title}</strong>
              <span className="text-[11px] text-slate-400 mt-0.5">{t.badge1Sub}</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col items-center text-center">
              <Percent className="w-6 h-6 text-blue-400 mb-2" />
              <strong className="text-xs sm:text-sm text-white font-bold">{t.badge2Title}</strong>
              <span className="text-[11px] text-slate-400 mt-0.5">{t.badge2Sub}</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col items-center text-center">
              <Truck className="w-6 h-6 text-amber-400 mb-2" />
              <strong className="text-xs sm:text-sm text-white font-bold">{t.badge3Title}</strong>
              <span className="text-[11px] text-slate-400 mt-0.5">{t.badge3Sub}</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col items-center text-center">
              <Boxes className="w-6 h-6 text-purple-400 mb-2" />
              <strong className="text-xs sm:text-sm text-white font-bold">{t.badge4Title}</strong>
              <span className="text-[11px] text-slate-400 mt-0.5">{t.badge4Sub}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATALOG GRID */}
      <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
            {t.catalogBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            {t.catalogTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            {t.catalogSubtitle}
          </p>
        </div>

        {/* Filter Bar */}
        <ProductFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalResults={filteredProducts.length}
        />

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 space-y-3">
            <Search className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              {t.noResultsTitle}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {t.noResultsSub}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:bg-slate-200 transition-colors"
            >
              {t.resetFilterBtn}
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
              {filteredProducts.slice(0, visibleCount).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

            {/* Simple See More Action */}
            {filteredProducts.length > visibleCount && (
              <div className="text-center pt-4">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 8)}
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all shadow-xs hover:border-emerald-500 hover:text-emerald-600 dark:hover:border-emerald-500 dark:hover:text-emerald-400 cursor-pointer"
                >
                  <span>{isHindi ? "और देखें" : "See More"}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* 4. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 5. DELIVERY AREA NETWORK & MAP */}
      <ServiceAreaMap />

      {/* 6. BULK INQUIRY LEAD CAPTURE FORM (Clean Light Styling) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-10 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              {t.quoteBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {t.quoteTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {t.quoteSubtitle}
            </p>
          </div>

          {leadSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-2 animate-in fade-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{t.quoteSuccessTitle}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {t.quoteSuccessSub}
              </p>
              <button
                onClick={() => setLeadSubmitted(false)}
                className="mt-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 underline cursor-pointer"
              >
                {t.quoteSendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{t.quoteName}</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder={t.quoteNamePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{t.quoteShop}</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={leadShop}
                    onChange={(e) => setLeadShop(e.target.value)}
                    placeholder={t.quoteShopPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{t.quoteTown}</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={leadTown}
                    onChange={(e) => setLeadTown(e.target.value)}
                    placeholder={t.quoteTownPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    <span>{t.quoteProducts}</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={leadItems}
                    onChange={(e) => setLeadItems(e.target.value)}
                    placeholder={t.quoteProductsPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none shadow-xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-bold text-sm transition-all shadow-md shadow-emerald-600/25 mt-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t.quoteSubmitBtn}</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <FaqSection />
    </div>
  );
}
