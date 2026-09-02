"use client";

import { useState } from "react";
import Image from "next/image";
import {
  X,
  MessageCircle,
  Phone,
  Building,
  User,
  MapPin,
  Calculator,
} from "lucide-react";
import { Product } from "@/data/products";
import { COMPANY } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";
import { buildDirectCallUrl, buildWhatsAppQuoteUrl } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

interface BulkInquiryModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BulkInquiryModal({ product, isOpen, onClose }: BulkInquiryModalProps) {
  const { t, language } = useLanguage();

  const [quantity, setQuantity] = useState<number>(product?.moqUnits || 10);
  const [buyerName, setBuyerName] = useState("");
  const [shopName, setShopName] = useState("");
  const [town, setTown] = useState("Dhampur / Bijnor");
  const [phoneInput, setPhoneInput] = useState("");

  if (!isOpen || !product) return null;

  const handleQuickAdd = (amount: number) => {
    setQuantity((prev) => Math.max(product.moqUnits || 5, prev + amount));
  };

  const isHindi = language === "hi";

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    trackEvent("whatsapp_inquiry", `Modal Quote: ${product.name}`, {
      productName: product.name,
      sku: product.sku,
      quantity,
      buyerName,
      shopName,
      town,
      phone: phoneInput,
    });

    const url = buildWhatsAppQuoteUrl({
      productName: isHindi && product.hindiName ? product.hindiName : product.name,
      sku: product.sku,
      packSize: isHindi && product.hindiPackSize ? product.hindiPackSize : product.packSize,
      moq: isHindi && product.hindiMoq ? product.hindiMoq : product.moq,
      customQuantity: quantity,
      buyerName: buyerName || undefined,
      shopName: shopName || undefined,
      town: town || undefined,
    });

    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/60">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <Calculator className="w-5 h-5" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {t.modalTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <form onSubmit={handleWhatsAppSubmit} className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {/* Selected Product Summary Card */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1 text-xs">
              <h4 className="font-bold text-slate-900 dark:text-white truncate">
                {isHindi && product.hindiName ? product.hindiName : product.name}
              </h4>
              <p className="text-slate-500 dark:text-slate-400">
                {isHindi && product.hindiPackSize ? product.hindiPackSize : product.packSize} • {isHindi && product.hindiUnitPackaging ? product.hindiUnitPackaging : product.unitPackaging}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                  {t.moqLabel}: {isHindi && product.hindiMoq ? product.hindiMoq : product.moq}
                </span>
                <span className="text-slate-400">|</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-xs">
                  {isHindi ? "रेट: पूछताछ पर उपलब्ध" : "Rate: On Enquiry"}
                </span>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
              <span>{t.modalRequiredQuantity}</span>
              <span className="text-emerald-600 font-semibold">{t.modalMinRequired} {product.moqUnits || 5}</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={product.moqUnits || 5}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <div className="flex gap-1.5">
                {[5, 10, 25, 50].map((num) => (
                  <button
                    type="button"
                    key={num}
                    onClick={() => handleQuickAdd(num)}
                    className="px-2.5 py-2 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-emerald-100 dark:hover:bg-emerald-950 transition-colors"
                  >
                    +{num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Shop / Business Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.modalShopName}</span>
            </label>
            <input
              type="text"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              placeholder={t.modalShopPlaceholder}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Delivery Location / Town */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.modalTown}</span>
            </label>
            <input
              type="text"
              value={town}
              onChange={(e) => setTown(e.target.value)}
              placeholder={t.modalTownPlaceholder}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.modalPhone}</span>
            </label>
            <input
              type="tel"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
              placeholder={t.modalPhonePlaceholder}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 active:scale-[0.99] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.modalSubmitWhatsApp}</span>
            </button>

            <a
              href={buildDirectCallUrl()}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-500" />
              <span>{t.modalCallOr} {COMPANY.phone}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
