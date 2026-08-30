"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  Eye,
  MessageCircle,
  Phone,
  Search,
  SlidersHorizontal,
  ChevronUp,
  ChevronDown,
  Trash2,
  Sparkles,
  Info,
} from "lucide-react";
import {
  subscribeToAnalytics,
  AnalyticsEvent,
  clearAnalyticsLogs,
  getRecentEvents,
} from "@/lib/analytics";

export function LiveActivityLogger() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToAnalytics((newEvents) => {
      setEvents(newEvents);
    });
    return () => unsubscribe();
  }, []);

  const getEventIcon = (type: AnalyticsEvent["type"]) => {
    switch (type) {
      case "product_impression":
        return <Eye className="w-3.5 h-3.5 text-blue-500" />;
      case "whatsapp_inquiry":
        return <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />;
      case "direct_call":
        return <Phone className="w-3.5 h-3.5 text-indigo-500" />;
      case "product_search":
        return <Search className="w-3.5 h-3.5 text-amber-500" />;
      case "category_filter":
        return <SlidersHorizontal className="w-3.5 h-3.5 text-purple-500" />;
      default:
        return <Activity className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  const totalImpressions = events.filter((e) => e.type === "product_impression").length;
  const totalInquiries = events.filter((e) => e.type === "whatsapp_inquiry" || e.type === "direct_call").length;

  return (
    <div className="fixed bottom-16 md:bottom-5 right-4 z-40 max-w-sm w-full sm:w-80">
      {/* Collapsed Pill Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="ml-auto flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 dark:bg-slate-800/90 text-white text-xs font-semibold shadow-xl border border-slate-700/60 hover:bg-slate-800 transition-all backdrop-blur-md group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span>Live Visitor Tracker</span>
          <span className="bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold">
            {events.length}
          </span>
          <ChevronUp className="w-3.5 h-3.5 text-slate-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Expanded Live Event Drawer */}
      {isOpen && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[420px] animate-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <h4 className="text-xs font-bold">Visitor & Impression Telemetry</h4>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={clearAnalyticsLogs}
                title="Clear Logs"
                className="p-1 text-slate-400 hover:text-red-400 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-white transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 bg-slate-100 dark:bg-slate-800/80 p-2.5 text-center border-b border-slate-200 dark:border-slate-800 text-[11px]">
            <div>
              <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold">
                Product Views
              </span>
              <strong className="text-slate-900 dark:text-white font-mono text-sm">
                {totalImpressions}
              </strong>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold">
                Inquiry Leads
              </span>
              <strong className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">
                {totalInquiries}
              </strong>
            </div>
          </div>

          {/* Live Activity Stream */}
          <div className="p-2.5 overflow-y-auto flex-1 space-y-2 text-xs divide-y divide-slate-100 dark:divide-slate-800">
            {events.length === 0 ? (
              <div className="py-8 text-center text-slate-400 text-xs flex flex-col items-center gap-1">
                <Info className="w-5 h-5 text-slate-400" />
                <span>Scroll and interact with products to see real-time impression events!</span>
              </div>
            ) : (
              events.map((ev) => (
                <div key={ev.id} className="pt-2 first:pt-0 flex items-start gap-2">
                  <span className="p-1 rounded bg-slate-100 dark:bg-slate-800 mt-0.5 shrink-0">
                    {getEventIcon(ev.type)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-800 dark:text-slate-200 truncate leading-tight">
                      {ev.label}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mt-0.5">
                      <span className="capitalize">{ev.type.replace("_", " ")}</span>
                      <span className="font-mono">{ev.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer note */}
          <div className="p-2 bg-slate-50 dark:bg-slate-950 text-[10px] text-slate-400 text-center border-t border-slate-100 dark:border-slate-800">
            Syncs with Google Analytics 4 (GA4) in Production
          </div>
        </div>
      )}
    </div>
  );
}
