"use client";

import { MessageCircle, Phone } from "lucide-react";
import { buildDirectCallUrl, buildWhatsAppQuoteUrl } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { trackDirectCall, trackEvent } from "@/lib/analytics";

export function FloatingMobileBar() {
  const { t } = useLanguage();

  const handleCall = () => {
    trackDirectCall("Floating Mobile Bar");
  };

  const handleWhatsApp = () => {
    trackEvent("whatsapp_inquiry", "WhatsApp clicked from Floating Mobile Bar", {
      leadType: "Mobile Sticky CTA",
    });
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 p-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-2">
        {/* Call Now Button */}
        <a
          href={buildDirectCallUrl()}
          onClick={handleCall}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs active:scale-[0.98] transition-all shadow-sm"
        >
          <Phone className="w-4 h-4 text-blue-500" />
          <span>{t.mobileCall}</span>
        </a>

        {/* WhatsApp Quote Button */}
        <a
          href={buildWhatsAppQuoteUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          className="flex-[1.4] flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs active:scale-[0.98] transition-all shadow-md shadow-emerald-600/30"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{t.mobileWhatsApp}</span>
        </a>
      </div>
    </div>
  );
}
