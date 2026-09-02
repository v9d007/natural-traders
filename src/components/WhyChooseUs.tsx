"use client";

import {
  Factory,
  TrendingUp,
  Truck,
  Boxes,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function WhyChooseUs() {
  const { t, language } = useLanguage();
  const isHindi = language === "hi";

  const features = [
    {
      icon: <Factory className="w-6 h-6 text-emerald-500" />,
      title: isHindi ? "सीधे कंपनी से सप्लाई" : "Direct Company Sourcing",
      description: isHindi
        ? "बिना किसी बिचौलिए के सीधे राष्ट्रीय कंपनियों से ताज़ा बैच, शुद्धता और एफएसएसएआई मानकों के साथ माल की आपूर्ति।"
        : "Direct manufacturer supply with genuine batch codes, fresh production dates, and strict ISI/FSSAI hygiene standards.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: isHindi ? "दुकानदारों के लिए भारी मार्जिन" : "Guaranteed Wholesale Margins",
      description: isHindi
        ? "किराना, मेडिकल स्टोर और कैटरर्स के लिए विशेष डीलर मूल्य ताकि प्रत्येक पेटी पर आपका अधिकतम मुनाफा सुनिश्चित हो।"
        : "Competitive dealer pricing tailored for Kirana stores, medical shops, and caterers to maximize your profit on every case.",
    },
    {
      icon: <Truck className="w-6 h-6 text-amber-500" />,
      title: isHindi ? "स्वयं के वाहनों से सुरक्षित डिलीवरी" : "Reliable Distribution Fleet",
      description: isHindi
        ? "धामपुर, बिजनौर, शेरकोट, स्योहारा और नजीबाबाद में प्रतिदिन एवं साप्ताहिक तय रूट पर सीधे दुकान तक माल डिलीवरी।"
        : "Scheduled daily & weekly route delivery across Dhampur, Bijnor, Sherkot, Seohara, and surrounding districts.",
    },
    {
      icon: <Boxes className="w-6 h-6 text-purple-500" />,
      title: isHindi ? "न्यूनतम आर्डर मात्र 5 कार्टन" : "Low Minimum Orders (From 5 Cartons)",
      description: isHindi
        ? "कम पूंजी में व्यापार शुरू करें। पानी, जीरा सोडा, कोल्ड ड्रिंक्स और सैनिटरी पैड्स मिलाकर 5 कार्टन का आर्डर दे सकते हैं।"
        : "Start small with flexible MOQs. Mix & match crates of water, jeera soda, cold drinks, and sanitary pads in a single shipment.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-500" />,
      title: isHindi ? "हर समय पर्याप्त स्टॉक" : "Consistent Stock Availability",
      description: isHindi
        ? "धामपुर स्थित विशाल वेयरहाउस के कारण गर्मियों और शादी के सीजन में भी माल की कमी नहीं होती।"
        : "High-capacity warehouse in Dhampur ensures zero stock-outs even during peak summer and wedding season surges.",
    },
    {
      icon: <Headphones className="w-6 h-6 text-indigo-500" />,
      title: isHindi ? "व्हाट्सएप व फोन पर त्वरित सेवा" : "Dedicated WhatsApp & Call Support",
      description: isHindi
        ? "हमारे डिस्पैच डेस्क से सीधा संपर्क। व्हाट्सएप पर तुरंत आर्डर कन्फर्मेशन और गाड़ी की रवानगी की जानकारी।"
        : "Direct relationship with our distribution desk. Instant quote confirmations and express order dispatch.",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
            {t.whyBadge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
            {t.whyTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            {t.whySubtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-2.5 sm:mb-4 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  {item.icon}
                </div>
                <h3 className="text-xs sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2 leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-[11px] sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-4 sm:line-clamp-none">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
