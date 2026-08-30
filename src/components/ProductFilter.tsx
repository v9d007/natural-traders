"use client";

import {
  Search,
  X,
  Droplets,
  CupSoda,
  Sparkles,
  ShieldCheck,
  LayoutGrid,
  SlidersHorizontal,
  Smile,
  Utensils,
  Leaf,
} from "lucide-react";
import { CATEGORIES, ProductCategory } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { trackCategoryFilter, trackSearchQuery } from "@/lib/analytics";

interface ProductFilterProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalResults: number;
}

export function ProductFilter({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalResults,
}: ProductFilterProps) {
  const { t, language } = useLanguage();

  const getIcon = (id: ProductCategory) => {
    switch (id) {
      case "all":
        return <LayoutGrid className="w-4 h-4" />;
      case "sanitary-pads":
        return <ShieldCheck className="w-4 h-4" />;
      case "baby-diapers":
        return <Smile className="w-4 h-4" />;
      case "namkeen-snacks":
        return <Utensils className="w-4 h-4" />;
      case "cold-drinks":
        return <CupSoda className="w-4 h-4" />;
      case "packaged-water":
        return <Droplets className="w-4 h-4" />;
      case "jeera-water":
        return <Sparkles className="w-4 h-4" />;
      case "eco-compostable":
        return <Leaf className="w-4 h-4" />;
      default:
        return <LayoutGrid className="w-4 h-4" />;
    }
  };

  const handleCategoryClick = (cat: ProductCategory) => {
    onSelectCategory(cat);
    trackCategoryFilter(cat);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackSearchQuery(searchQuery, totalResults);
  };

  const isHindi = language === "hi";

  return (
    <div className="space-y-4">
      {/* Search Bar & Sort Dropdown */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.navSearchPlaceholder}
            className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </form>

        {/* Sort & Count */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {t.showingResults} <strong className="text-emerald-600 dark:text-emerald-400">{totalResults}</strong> {t.itemsLabel}
          </span>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
            >
              <option value="featured">{t.sortFeatured}</option>
              <option value="name-asc">{t.sortName}</option>
              <option value="moq-low">{t.sortMoq}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const label = isHindi ? cat.hindiLabel : cat.label;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                isSelected
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-[1.02]"
                  : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-50/50 dark:hover:bg-slate-800"
              }`}
            >
              <span className={isSelected ? "text-white" : "text-emerald-600 dark:text-emerald-400"}>
                {getIcon(cat.id)}
              </span>
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
