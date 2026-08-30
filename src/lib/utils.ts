import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { COMPANY } from "@/data/company";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Builds a clean pre-filled WhatsApp click-to-chat URL for bulk orders.
 */
export function buildWhatsAppQuoteUrl(options?: {
  productName?: string;
  sku?: string;
  packSize?: string;
  moq?: string;
  customQuantity?: string | number;
  buyerName?: string;
  shopName?: string;
  town?: string;
}): string {
  const number = COMPANY.whatsappRaw;
  
  if (!options?.productName) {
    const defaultMsg = `Hello ${COMPANY.name},\nI am interested in wholesale supply for my shop/business. Please share your complete product price list and delivery terms for Dhampur / Bijnor region.`;
    return `https://wa.me/${number}?text=${encodeURIComponent(defaultMsg)}`;
  }

  const { productName, packSize, moq, customQuantity, shopName, town } = options;

  let msg = `Hello ${COMPANY.name},\n\nI want to inquire about a *Bulk Wholesale Order* for:\n📦 *Product:* ${productName}`;
  if (packSize) msg += `\n📏 *Pack Size:* ${packSize}`;
  if (moq) msg += `\n📦 *Minimum Order:* ${moq}`;
  if (customQuantity) msg += `\n🔢 *Required Quantity:* ${customQuantity} cartons/crates`;
  if (shopName) msg += `\n🏪 *Shop/Firm:* ${shopName}`;
  if (town) msg += `\n📍 *Location:* ${town}`;
  msg += `\n\nPlease share the best wholesale distributor rate and delivery schedule. Thank you!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

/**
 * Builds a direct dial tel: link.
 */
export function buildDirectCallUrl(): string {
  return `tel:${COMPANY.phoneRaw}`;
}
