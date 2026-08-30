"use client";

import { MapPin, Truck, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";

export function ServiceAreaMap() {
  const { t, language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <section id="delivery-network" className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column - Coverage Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                {t.areaBadge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
                {t.areaTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                {t.areaSubtitle}
              </p>
            </div>

            {/* Primary Delivery Towns in Bijnor */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {t.coreTownsHeading}
              </h3>
              <div className="flex flex-wrap gap-2">
                {COMPANY.deliveryCoverage.primaryTowns.map((town) => (
                  <span
                    key={town}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80"
                  >
                    <MapPin className="w-3 h-3 text-emerald-500" />
                    {town}
                  </span>
                ))}
              </div>
            </div>

            {/* Regional Expansion & Interstate Bulk Orders */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {t.regionalExpansionHeading}
              </h3>
              <div className="flex flex-wrap gap-2">
                {COMPANY.deliveryCoverage.districts.map((dist) => (
                  <span
                    key={dist}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    <Truck className="w-3 h-3 text-blue-500" />
                    {dist}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 italic">
                {t.interstateNote}
              </p>
            </div>

            {/* Delivery Route Guarantee Box */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                {t.customTownPrompt}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {t.customTownSub}
              </p>
            </div>
          </div>

          {/* Right Column - Visual Logistics Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 p-6 sm:p-8 text-white border border-slate-700 shadow-2xl overflow-hidden">
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-6">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                      {t.hubTitle}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {t.hubName}
                    </h3>
                  </div>
                  <span className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Truck className="w-6 h-6" />
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{t.hubFeature1}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{t.hubFeature2}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{t.hubFeature3}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/80 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="text-slate-400">{t.warehouseAddressLabel}</p>
                    <p className="font-semibold text-white mt-0.5">
                      {isHindi ? COMPANY.hindiAddress : COMPANY.address}
                    </p>
                  </div>
                  {COMPANY.gstin && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono shrink-0">
                      <span className="font-bold">GSTIN:</span>
                      <span>{COMPANY.gstin}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
