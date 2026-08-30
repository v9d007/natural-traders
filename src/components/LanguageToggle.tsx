"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "hi" : "en")}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-xs font-bold shadow-sm ${className}`}
      title={`Switch to ${language === "en" ? "Hindi (हिन्दी)" : "English"}`}
      aria-label="Toggle Language"
    >
      <Languages className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
      <span>{language === "en" ? "हिन्दी" : "EN"}</span>
    </button>
  );
}
