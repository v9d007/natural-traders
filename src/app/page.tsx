"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Percent,
  Truck,
  Boxes,
  ArrowRight,
  Search,
  Sparkles,
  Droplets,
  CupSoda,
  ShieldCheck,
  CheckCircle2,
  Send,
  Building,
  User,
  MapPin,
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

  const { t, language } = useLanguage();
  const isHindi = language === "hi";

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
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
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

      {/* 2. CATEGORY QUICK JUMP BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <button
            onClick={() => {
              setSelectedCategory("packaged-water");
              const el = document.getElementById("catalog");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 hover:shadow-md text-left transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{t.catWater}</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.catWaterSub}</p>
          </button>

          <button
            onClick={() => {
              setSelectedCategory("jeera-water");
              const el = document.getElementById("catalog");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-500 hover:shadow-md text-left transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{t.catJeera}</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.catJeeraSub}</p>
          </button>

          <button
            onClick={() => {
              setSelectedCategory("cold-drinks");
              const el = document.getElementById("catalog");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-red-500 hover:shadow-md text-left transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <CupSoda className="w-5 h-5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{t.catColdDrinks}</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.catColdDrinksSub}</p>
          </button>

          <button
            onClick={() => {
              setSelectedCategory("sanitary-pads");
              const el = document.getElementById("catalog");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-pink-500 hover:shadow-md text-left transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{t.catPads}</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.catPadsSub}</p>
          </button>
        </div>
      </section>

      {/* 2.5 POPULAR WHOLESALE SEARCH TAGS (SEO & Quick Navigation) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{isHindi ? "लोकप्रिय खोज:" : "Popular Searches:"}</span>
            </span>
            {[
              { label: isHindi ? "200ml व 500ml पानी की बोतलें" : "200ml & 500ml Packaged Water", query: "water", cat: "packaged-water" },
              { label: isHindi ? "जीरा मसाला सोडा क्रेट" : "Jeera Masala Soda Crates", query: "jeera", cat: "jeera-water" },
              { label: isHindi ? "पारंपरिक गोली सोडा कांच की बोतल" : "Traditional Goli Soda", query: "goli", cat: "cold-drinks" },
              { label: isHindi ? "बायोडीग्रेडेबल कैरी बैग्स (CPCB मान्य)" : "CPCB Compostable Carry Bags", query: "compostable", cat: "eco-compostable" },
              { label: isHindi ? "7Soft सैनिटरी पैड्स कार्टन" : "7Soft Sanitary Pads Bulk", query: "pads", cat: "sanitary-pads" },
              { label: isHindi ? "बेबी डायपर पैंट्स" : "Baby Pants Diapers", query: "diaper", cat: "baby-diapers" },
              { label: isHindi ? "श्रीयश नमकीन व चिप्स" : "Shreeyash Namkeen & Chips", query: "namkeen", cat: "namkeen-snacks" },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedCategory(item.cat as ProductCategory);
                  setSearchQuery(item.query);
                  const el = document.getElementById("catalog");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-700 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-700 transition-all hover:scale-[1.02]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG GRID */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </section>

      {/* 4. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 5. DELIVERY AREA NETWORK & MAP */}
      <ServiceAreaMap />

      {/* 6. BULK INQUIRY LEAD CAPTURE FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 p-6 sm:p-10 text-white border border-emerald-800/60 shadow-2xl space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-700">
              {t.quoteBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t.quoteTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {t.quoteSubtitle}
            </p>
          </div>

          {leadSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-600 text-center space-y-2 animate-in fade-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold text-white">{t.quoteSuccessTitle}</h3>
              <p className="text-xs text-slate-300">
                {t.quoteSuccessSub}
              </p>
              <button
                onClick={() => setLeadSubmitted(false)}
                className="mt-2 text-xs font-bold text-emerald-400 underline"
              >
                {t.quoteSendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.quoteName}</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder={t.quoteNamePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-xs placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.quoteShop}</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={leadShop}
                    onChange={(e) => setLeadShop(e.target.value)}
                    placeholder={t.quoteShopPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-xs placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-400 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.quoteTown}</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={leadTown}
                    onChange={(e) => setLeadTown(e.target.value)}
                    placeholder={t.quoteTownPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-xs placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    <span>{t.quoteProducts}</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={leadItems}
                    onChange={(e) => setLeadItems(e.target.value)}
                    placeholder={t.quoteProductsPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-xs placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-400 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.99] text-slate-950 font-black text-sm transition-all shadow-lg shadow-emerald-500/25 mt-2"
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
