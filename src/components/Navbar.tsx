"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Package,
  Layers,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { NaturalTradersLogo } from "./NaturalTradersLogo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { buildDirectCallUrl, buildWhatsAppQuoteUrl } from "@/lib/utils";
import { trackDirectCall } from "@/lib/analytics";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, language } = useLanguage();

  const handleCallClick = () => {
    trackDirectCall("Navbar Header");
  };

  const navLinks = [
    { label: t.navHome, href: "/" },
    { label: t.navCatalog, href: "/products" },
    { label: t.navAreas, href: "/#delivery-network" },
    { label: t.navWhyUs, href: "/#why-us" },
    { label: t.navContact, href: "/#contact" },
  ];

  const isHindi = language === "hi";

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Left: Prominent Bold Logo */}
          <Link href="/" className="flex items-center group shrink-0 min-w-0">
            <NaturalTradersLogo size="md" />
          </Link>

          {/* Center: Clean Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 shadow-xs"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Unified Action Controls Cluster */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <LanguageToggle />
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            {/* Call Now Button */}
            <a
              href={buildDirectCallUrl()}
              onClick={handleCallClick}
              className="inline-flex items-center justify-center gap-1.5 h-9 sm:h-10 px-2 sm:px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs sm:text-sm font-bold transition-colors shadow-sm"
              title={t.navCallNow}
              aria-label={t.navCallNow}
            >
              <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="hidden sm:inline">{t.navCallNow}</span>
            </a>

            {/* WhatsApp Direct Button */}
            <a
              href={buildWhatsAppQuoteUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 h-9 sm:h-10 px-2.5 sm:px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-emerald-600/25 hover:shadow-emerald-600/35"
              title={t.navWhatsApp}
              aria-label={t.navWhatsApp}
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span className="hidden md:inline">{t.navWhatsApp}</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-600"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>

          {/* Category Quick Links for Mobile */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
              {t.navCategoriesHeading}
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/products?category=packaged-water"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2"
              >
                <Package className="w-4 h-4 text-blue-500" />
                <span>{t.catWater}</span>
              </Link>
              <Link
                href="/products?category=jeera-water"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>{t.catJeera}</span>
              </Link>
              <Link
                href="/products?category=cold-drinks"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-red-500" />
                <span>{t.catColdDrinks}</span>
              </Link>
              <Link
                href="/products?category=sanitary-pads"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-pink-500" />
                <span>{t.catPads}</span>
              </Link>
            </div>
          </div>

          {/* Theme & Display Options in Mobile Drawer */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between px-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {isHindi ? "थीम मोड (लाइट / डार्क)" : "Appearance"}
            </span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
