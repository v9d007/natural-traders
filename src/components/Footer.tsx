"use client";

import Link from "next/link";
import { MapPin, Truck } from "lucide-react";
import { COMPANY } from "@/data/company";
import { CATEGORIES } from "@/data/products";
import { NaturalTradersLogo } from "./NaturalTradersLogo";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t, language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 pt-12 pb-24 md:pb-12 border-t border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer: 3 Spacious & Clean Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-800/60">
          {/* Column 1: Brand & Direct Contact (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block group">
              <NaturalTradersLogo size="md" />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {isHindi
                ? "धामपुर एवं पश्चिमी उत्तर प्रदेश में मिनरल वाटर, कोल्ड ड्रिंक्स, जीरा सोडा एवं सैनिटरी पैड्स के अधिकृत थोक वितरक।"
                : "Authorized wholesale distributor of packaged water, cold drinks, jeera masala soda, and sanitary hygiene products in Dhampur & Western UP."}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{isHindi ? "स्योहारा रोड, धामपुर, जिला बिजनौर (उ.प्र.) - 246747" : "Seohara Rd, Dhampur, District Bijnor (UP) - 246747"}</span>
            </div>
          </div>

          {/* Column 2: Quick Wholesale Categories (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {isHindi ? "थोक श्रेणियां" : "Categories"}
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.filter((c) => c.id !== "all").slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {isHindi ? cat.hindiLabel : cat.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/products"
                  className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  {isHindi ? "सभी उत्पाद देखें →" : "View All Products →"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Logistics & Coverage (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isHindi ? "सप्लाई क्षेत्र" : "Delivery Coverage"}</span>
            </h4>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              {isHindi
                ? "दैनिक रूट सप्लाई: धामपुर, बिजनौर, शेरकोट, स्योहारा, नजीबाबाद, नगीना, चांदपुर, अफजलगढ़।"
                : "Regular supply to Dhampur, Bijnor, Sherkot, Seohara, Najibabad, Nagina, Chandpur, Afzalgarh, and nearby towns."}
            </p>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">
                {isHindi ? "📦 न्यूनतम आर्डर: मात्र 5 कार्टन से शुरू" : "📦 Minimum Order: From 5 Cartons"}
              </p>
              <p className="text-[10px] text-slate-500">
                {isHindi ? "सीधे कंपनी से ताज़ा स्टॉक • विवाह एवं कैटरर्स हेतु विशेष सप्लाई" : "Direct factory fresh stock • Priority delivery for events & caterers"}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Natural Traders. {isHindi ? "सर्वाधिकार सुरक्षित।" : "All Rights Reserved."}
          </p>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Dhampur Wholesale Hub</span>
            <span>•</span>
            <span>Western UP Logistics</span>
            <span>•</span>
            <span>B2B Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
