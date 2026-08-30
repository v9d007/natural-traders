"use client";

import { COMPANY } from "@/data/company";

// Type definitions for custom wholesale B2B telemetry events
export type AnalyticsEventType =
  | "page_view"
  | "product_impression"
  | "product_click"
  | "whatsapp_inquiry"
  | "direct_call"
  | "category_filter"
  | "product_search"
  | "quote_modal_opened";

export interface AnalyticsEvent {
  id: string;
  type: AnalyticsEventType;
  timestamp: string;
  label: string;
  metadata?: Record<string, any>;
}

// Global subscribers for live activity feed
type Listener = (events: AnalyticsEvent[]) => void;
const listeners: Set<Listener> = new Set();
let inMemoryEvents: AnalyticsEvent[] = [];

// Initialize saved events from sessionStorage if available
if (typeof window !== "undefined") {
  try {
    const saved = sessionStorage.getItem("nt_analytics_events");
    if (saved) inMemoryEvents = JSON.parse(saved);
  } catch (e) {
    // Ignore storage errors
  }
}

function notifyListeners() {
  if (typeof window !== "undefined") {
    try {
      sessionStorage.setItem("nt_analytics_events", JSON.stringify(inMemoryEvents.slice(-50)));
    } catch (e) {}
  }
  listeners.forEach((fn) => fn([...inMemoryEvents]));
}

export function subscribeToAnalytics(listener: Listener) {
  listeners.add(listener);
  listener([...inMemoryEvents]);
  return () => {
    listeners.delete(listener);
  };
}

export function getRecentEvents(): AnalyticsEvent[] {
  return [...inMemoryEvents];
}

export function clearAnalyticsLogs() {
  inMemoryEvents = [];
  notifyListeners();
}

/**
 * Dispatches event to Google Analytics 4 (window.gtag) if available,
 * and logs into the live activity monitor.
 */
export function trackEvent(type: AnalyticsEventType, label: string, metadata: Record<string, any> = {}) {
  const newEvent: AnalyticsEvent = {
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    type,
    timestamp: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
    label,
    metadata,
  };

  // Add to internal activity logger (max 50 items)
  inMemoryEvents = [newEvent, ...inMemoryEvents].slice(0, 50);
  notifyListeners();

  // Send to GA4 if configured
  if (typeof window !== "undefined" && (window as any).gtag) {
    try {
      (window as any).gtag("event", type, {
        event_category: "B2B Wholesale Activity",
        event_label: label,
        ...metadata,
      });
    } catch (err) {
      console.warn("GA4 event dispatch error:", err);
    }
  }

  // Developer console logger for debugging & learning
  if (process.env.NODE_ENV !== "production") {
    console.log(`📊 [Analytics Event: ${type}]`, label, metadata);
  }
}

// Convenient helper functions
export function trackProductImpression(productId: string, productName: string, category: string) {
  trackEvent("product_impression", `Viewed Product: ${productName}`, {
    productId,
    productName,
    category,
  });
}

export function trackWhatsAppQuote(productName: string, moq: string, category: string) {
  trackEvent("whatsapp_inquiry", `WhatsApp Quote Requested: ${productName}`, {
    productName,
    moq,
    category,
    leadType: "WhatsApp High Intent",
  });
}

export function trackDirectCall(source: string, productName?: string) {
  trackEvent("direct_call", `Direct Phone Call from ${source}`, {
    source,
    productName: productName || "General Wholesale Inquiry",
    phone: COMPANY.phone,
  });
}

export function trackCategoryFilter(category: string) {
  trackEvent("category_filter", `Filtered by category: ${category}`, { category });
}

export function trackSearchQuery(query: string, resultsCount: number) {
  if (!query.trim()) return;
  trackEvent("product_search", `Searched for "${query}" (${resultsCount} results)`, {
    query,
    resultsCount,
  });
}
