"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export function NaturalTradersLogo({
  className = "",
  size = "md",
  showTagline = true,
}: LogoProps) {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const iconSizes = {
    sm: "w-9 h-9 min-w-[36px]",
    md: "w-11 h-11 min-w-[44px]",
    lg: "w-14 h-14 min-w-[56px]",
  };

  const titleSizes = {
    sm: "text-base tracking-tight",
    md: "text-lg sm:text-xl tracking-tight",
    lg: "text-2xl sm:text-3xl tracking-tight",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Option 2: Geometric 'NT' Monogram + Golden Spark */}
      <div
        className={`${iconSizes[size]} relative rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-slate-900 p-0.5 shadow-md shadow-emerald-950/20 group-hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-105 shrink-0`}
      >
        <div className="relative w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center overflow-hidden border border-emerald-500/30">
          {/* Subtle Ambient Back-Glow */}
          <div className="absolute -top-2 -right-2 w-7 h-7 bg-emerald-400/30 rounded-full blur-sm" />
          <div className="absolute -bottom-2 -left-2 w-7 h-7 bg-teal-500/20 rounded-full blur-sm" />

          {/* Geometric Interlocking N + T Vector Monogram */}
          <svg
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full p-1 drop-shadow-sm"
          >
            <defs>
              <linearGradient id="ntTGradient" x1="18" y1="10" x2="30" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34D399" />
                <stop offset="1" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="ntGoldDot" x1="26" y1="5" x2="32" y2="11" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDE047" />
                <stop offset="1" stopColor="#EAB308" />
              </linearGradient>
            </defs>

            {/* Geometric Letter 'N' */}
            <path
              d="M10 27V11L21 24.5V11"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Interlocking Geometric Letter 'T' */}
            <path
              d="M19 11H29"
              stroke="url(#ntTGradient)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <path
              d="M24 11V27"
              stroke="url(#ntTGradient)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />

            {/* Golden Spark / Sunrise Accent */}
            <circle cx="30" cy="7.5" r="2.8" fill="url(#ntGoldDot)" />
            <circle cx="30" cy="7.5" r="1.2" fill="#FFFFFF" />
          </svg>
        </div>
      </div>

      {/* Brand Typography & Tagline */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2 flex-wrap">
          {isHindi ? (
            <span className={`${titleSizes[size]} font-black text-slate-900 dark:text-white leading-tight`}>
              नेचुरल <span className="text-teal-600 dark:text-teal-400">ट्रेडर्स</span>
            </span>
          ) : (
            <span className={`${titleSizes[size]} font-black leading-tight tracking-tight`}>
              <span className="text-slate-950 dark:text-white font-black">Natural</span>{" "}
              <span className="text-teal-600 dark:text-teal-400 font-extrabold">
                Traders
              </span>
            </span>
          )}

          <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
            Wholesale
          </span>
        </div>

        {showTagline && (
          <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-semibold tracking-normal mt-0.5 leading-tight flex items-center gap-1.5">
            <span>{isHindi ? "अधिकृत थोक वितरक" : "Authorized Wholesale Distributor"}</span>
            <span className="text-emerald-500 font-bold">•</span>
            <span className="text-slate-600 dark:text-slate-300">{isHindi ? "धामपुर (बिजनौर)" : "Dhampur (Bijnor)"}</span>
          </p>
        )}
      </div>
    </div>
  );
}
