"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi";

export interface Translations {
  // Top Banner
  topHub: string;
  topHours: string;
  topDirectSupply: string;
  topCallUs: string;

  // Navbar
  navHome: string;
  navCatalog: string;
  navAreas: string;
  navWhyUs: string;
  navContact: string;
  navSearchPlaceholder: string;
  navWhatsApp: string;
  navCallNow: string;
  navWholesaleBadge: string;
  navSubheading: string;
  navCategoriesHeading: string;

  // Hero Section
  heroPill: string;
  heroTitle1: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroWhatsAppBtn: string;
  heroCallBtn: string;
  heroBrowseBtn: string;
  badge1Title: string;
  badge1Sub: string;
  badge2Title: string;
  badge2Sub: string;
  badge3Title: string;
  badge3Sub: string;
  badge4Title: string;
  badge4Sub: string;

  // Categories
  catAll: string;
  catWater: string;
  catWaterSub: string;
  catJeera: string;
  catJeeraSub: string;
  catColdDrinks: string;
  catColdDrinksSub: string;
  catPads: string;
  catPadsSub: string;
  catFmcg: string;
  catFmcgSub: string;

  // Catalog
  catalogBadge: string;
  catalogTitle: string;
  catalogSubtitle: string;
  catalogPdfBtn: string;
  showingResults: string;
  itemsLabel: string;
  sortFeatured: string;
  sortName: string;
  sortMoq: string;
  noResultsTitle: string;
  noResultsSub: string;
  resetFilterBtn: string;

  // Product Card
  inStock: string;
  highMargin: string;
  unitPackaging: string;
  moqLabel: string;
  mrpLabel: string;
  loginForRate: string;
  btnWhatsAppQuote: string;
  btnWhatsAppEstimate: string;
  btnViewDetails: string;
  btnCallForRate: string;
  btnCalculateBulk: string;
  viewsCount: string;

  // Bulk Modal
  modalTitle: string;
  modalRequiredQuantity: string;
  modalMinRequired: string;
  modalShopName: string;
  modalShopPlaceholder: string;
  modalTown: string;
  modalTownPlaceholder: string;
  modalPhone: string;
  modalPhonePlaceholder: string;
  modalSubmitWhatsApp: string;
  modalCallOr: string;

  // Why Choose Us
  whyBadge: string;
  whyTitle: string;
  whySubtitle: string;

  // Delivery Areas
  areaBadge: string;
  areaTitle: string;
  areaSubtitle: string;
  coreTownsHeading: string;
  regionalExpansionHeading: string;
  interstateNote: string;
  customTownPrompt: string;
  customTownSub: string;
  callDispatchBtn: string;
  hubTitle: string;
  hubName: string;
  hubFeature1: string;
  hubFeature2: string;
  hubFeature3: string;
  warehouseAddressLabel: string;

  // Express Quote Form
  quoteBadge: string;
  quoteTitle: string;
  quoteSubtitle: string;
  quoteName: string;
  quoteNamePlaceholder: string;
  quoteShop: string;
  quoteShopPlaceholder: string;
  quoteTown: string;
  quoteTownPlaceholder: string;
  quoteProducts: string;
  quoteProductsPlaceholder: string;
  quoteSubmitBtn: string;
  quoteSuccessTitle: string;
  quoteSuccessSub: string;
  quoteSendAnother: string;

  // FAQ
  faqBadge: string;
  faqTitle: string;
  faqSubtitle: string;

  // Mobile Bar
  mobileCall: string;
  mobileWhatsApp: string;

  // Footer
  footerAboutText: string;
  footerCategories: string;
  footerViewAll: string;
  footerDeliveryTowns: string;
  footerVillageRoute: string;
  footerWholesaleTerms: string;
  footerTerm1Title: string;
  footerTerm1Sub: string;
  footerTerm2Title: string;
  footerTerm2Sub: string;
  footerTerm3Title: string;
  footerTerm3Sub: string;
  footerCopyright: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    topHub: "Hub: Dhampur, Bijnor (UP) — Serving All Western UP",
    topHours: "Mon - Sat: 8:00 AM - 8:30 PM",
    topDirectSupply: "Direct Company Supply | Min 5 Cartons",
    topCallUs: "Call:",

    navHome: "Home",
    navCatalog: "Products",
    navAreas: "Delivery Areas",
    navWhyUs: "Why Partner",
    navContact: "Contact & Warehouse",
    navSearchPlaceholder: "Search products, SKUs, brands...",
    navWhatsApp: "WhatsApp Direct",
    navCallNow: "Call Now",
    navWholesaleBadge: "Wholesale",
    navSubheading: "Dhampur & Bijnor FMCG & Beverage Distributor",
    navCategoriesHeading: "Categories",

    heroPill: "Authorized FMCG & Beverage Wholesale Distribution Hub • Dhampur (UP)",
    heroTitle1: "Direct Manufacturer Supply at",
    heroTitleHighlight: "Wholesale Rates",
    heroSubtitle: "Supplying packaged drinking water bottles, cold drinks, jeera masala soda, and medical-grade sanitary pads directly to retail stores, caterers, and commercial buyers across Dhampur, Bijnor & Western UP.",
    heroWhatsAppBtn: "Get WhatsApp Price List",
    heroCallBtn: "Call For Bulk Rates",
    heroBrowseBtn: "Browse Products",
    badge1Title: "Direct Company Sourcing",
    badge1Sub: "Fresh stock, zero middleman",
    badge2Title: "High Retail Margins",
    badge2Sub: "Maximized dealer profits",
    badge3Title: "Western UP Logistics",
    badge3Sub: "Daily & scheduled trips",
    badge4Title: "MOQ From 5 Cartons",
    badge4Sub: "Mix & match flexibility",

    catAll: "All Products",
    catWater: "Packaged Water",
    catWaterSub: "200ml, 500ml, 1L & 20L Jars",
    catJeera: "Jeera Masala Soda",
    catJeeraSub: "Bottles & Cans (Top Seller)",
    catColdDrinks: "Cold Drinks & Sodas",
    catColdDrinksSub: "Cola, Lemon, Orange Crates",
    catPads: "Sanitary Pads",
    catPadsSub: "XL, XXL Bulk Cartons",
    catFmcg: "Juices & FMCG Drinks",
    catFmcgSub: "Mango Nectar, Energy Cans",

    catalogBadge: "Product Catalog",
    catalogTitle: "Products & Packaging Details",
    catalogSubtitle: "Select any item to check specifications, packaging units, and MOQ.",
    catalogPdfBtn: "Price List PDF",
    showingResults: "Showing",
    itemsLabel: "items",
    sortFeatured: "Featured / Best Sellers",
    sortName: "Product Name (A-Z)",
    sortMoq: "Lowest MOQ First",
    noResultsTitle: "No wholesale products matched your search",
    noResultsSub: "Try searching for Water, Jeera, Pads, or Cola, or reset your filters.",
    resetFilterBtn: "Reset Filters",

    inStock: "In Stock",
    highMargin: "High Margin",
    unitPackaging: "Unit Packaging",
    moqLabel: "Min. Order (MOQ)",
    mrpLabel: "MRP",
    loginForRate: "Call / WhatsApp for Rate",
    btnWhatsAppQuote: "WhatsApp Rate",
    btnWhatsAppEstimate: "WhatsApp Estimate",
    btnViewDetails: "View Details",
    btnCallForRate: "Call For Rate",
    btnCalculateBulk: "Calculate Bulk Quantity & Estimate →",
    viewsCount: "Views",

    modalTitle: "Wholesale Bulk Rate Calculator",
    modalRequiredQuantity: "Required Cartons / Crates:",
    modalMinRequired: "Min required",
    modalShopName: "Shop / Business Name (Optional):",
    modalShopPlaceholder: "e.g. Sharma Kirana Store / Gupta Caterers",
    modalTown: "Delivery Town / District:",
    modalTownPlaceholder: "e.g. Dhampur, Sherkot, Bijnor, Seohara, Najibabad",
    modalPhone: "Contact Number (for direct callback):",
    modalPhonePlaceholder: "+91 98765 XXXXX",
    modalSubmitWhatsApp: "Request Quote on WhatsApp",
    modalCallOr: "Or Call Natural Traders:",

    whyBadge: "Why Partner With Natural Traders",
    whyTitle: "Empowering Retailers with Direct Factory Pricing & Dependable Supply",
    whySubtitle: "We bridge the gap between national FMCG manufacturers and local retail store owners across Dhampur, Bijnor, and Western Uttar Pradesh.",

    areaBadge: "Logistics & Delivery Coverage",
    areaTitle: "Daily & Scheduled Wholesale Route Delivery Across Bijnor & Nearby Districts",
    areaSubtitle: "Operating directly from our centralized distribution warehouse in Dhampur. We manage our dedicated fleet of commercial vehicles ensuring safe and timely door-step delivery.",
    coreTownsHeading: "Core Delivery Towns (Bijnor District)",
    regionalExpansionHeading: "Inter-District & Interstate Bulk Logistics",
    interstateNote: "* Interstate bulk truckloads supplied to Uttarakhand, Delhi NCR, and Haryana based on order volume.",
    customTownPrompt: "Need bulk shipment to your specific town or village?",
    customTownSub: "Call our dispatch manager to confirm delivery schedule & route.",
    callDispatchBtn: "Call Dispatch",
    hubTitle: "Central Distribution Hub",
    hubName: "Dhampur Warehouse Facility",
    hubFeature1: "Same-Day / Next-Day Dispatch covering Dhampur, Sherkot, Seohara, Najibabad, and Nagina.",
    hubFeature2: "Zero Transit Leakage Guarantee: Shrink-wrapped crates and sealed corrugated boxes.",
    hubFeature3: "Wedding & Event Priority: Direct delivery to banquet halls, farmhouses, and tent house locations.",
    warehouseAddressLabel: "Warehouse Address:",

    quoteBadge: "Express Quote Desk",
    quoteTitle: "Request a Customized Bulk Order Quote",
    quoteSubtitle: "Fill out your shop and requirement details. We will immediately dispatch our distributor rate sheet on WhatsApp.",
    quoteName: "Your Name:",
    quoteNamePlaceholder: "e.g. Ramesh Kumar",
    quoteShop: "Shop / Firm Name:",
    quoteShopPlaceholder: "e.g. Kumar General Store",
    quoteTown: "Delivery Town / City:",
    quoteTownPlaceholder: "e.g. Dhampur, Sherkot, Bijnor",
    quoteProducts: "Products Interested In:",
    quoteProductsPlaceholder: "e.g. 10 Crates Water + 10 Crates Jeera Soda",
    quoteSubmitBtn: "Submit & Receive Rates on WhatsApp",
    quoteSuccessTitle: "Quote Request Redirected to WhatsApp!",
    quoteSuccessSub: "Our sales representative will assist you with volume discounts and delivery schedule.",
    quoteSendAnother: "Send Another Request",

    faqBadge: "Frequently Asked Questions",
    faqTitle: "Wholesale Ordering & Delivery FAQs",
    faqSubtitle: "Everything you need to know about purchasing at wholesale prices from Natural Traders.",

    mobileCall: "Call Now",
    mobileWhatsApp: "WhatsApp Quote",

    footerAboutText: "Authorized regional B2B distributor of packaged drinking water bottles (200ml/500ml/1L/20L), carbonated soft drinks, jeera masala soda, and medical-grade sanitary pads. Directly sourced from manufacturers with guaranteed wholesale margins.",
    footerCategories: "Bulk Categories",
    footerViewAll: "View Full Price Catalog →",
    footerDeliveryTowns: "Delivery Towns (Bijnor)",
    footerVillageRoute: "+ Scheduled village & rural route logistics",
    footerWholesaleTerms: "Wholesale Terms",
    footerTerm1Title: "Minimum Order Quantity",
    footerTerm1Sub: "From 5 Cartons (Mix & Match Available)",
    footerTerm2Title: "Direct Factory Sourcing",
    footerTerm2Sub: "Zero Middleman Markups",
    footerTerm3Title: "Urgent Event Delivery",
    footerTerm3Sub: "Wedding & Catering Priority Dispatch",
    footerCopyright: "Natural Traders Wholesale & FMCG Distribution. Dhampur, District Bijnor (UP). All Rights Reserved.",
  },
  hi: {
    topHub: "वितरण केंद्र: धामपुर, बिजनौर (उ.प्र.) — संपूर्ण पश्चिमी उत्तर प्रदेश",
    topHours: "सोम - शनि: सुबह 8:00 - रात 8:30",
    topDirectSupply: "सीधे कंपनी से आपूर्ति | न्यूनतम 5 कार्टन",
    topCallUs: "कॉल करें:",

    navHome: "होम",
    navCatalog: "उत्पाद",
    navAreas: "डिलीवरी क्षेत्र",
    navWhyUs: "हमारे फायदे",
    navContact: "संपर्क एवं गोदाम",
    navSearchPlaceholder: "उत्पाद, ब्रांड, पानी, जीरा, पैड्स खोजें...",
    navWhatsApp: "व्हाट्सएप चैट",
    navCallNow: "कॉल करें",
    navWholesaleBadge: "होलसेल",
    navSubheading: "धामपुर एवं बिजनौर एफएमसीजी एवं बेवरेज डिस्ट्रीब्यूटर",
    navCategoriesHeading: "श्रेणियां",

    heroPill: "अधिकृत एफएमसीजी एवं बेवरेज थोक वितरण केंद्र • धामपुर (बिजनौर)",
    heroTitle1: "सीधे कंपनी से",
    heroTitleHighlight: "थोक भाव पर माल",
    heroSubtitle: "मिनरल वाटर बोतल, कोल्ड ड्रिंक्स, जीरा मसाला सोडा, एवं सैनिटरी पैड्स सीधे कंपनी से रिटेल दुकानों, टेंट हाउस, कैटरर्स एवं विवाह हॉलों के लिए उपलब्ध। धामपुर एवं पश्चिमी यूपी में त्वरित डिलीवरी।",
    heroWhatsAppBtn: "व्हाट्सएप पर रेट लिस्ट पाएं",
    heroCallBtn: "थोक रेट के लिए कॉल करें",
    heroBrowseBtn: "उत्पाद देखें",
    badge1Title: "सीधे कंपनी से सप्लाई",
    badge1Sub: "ताज़ा स्टॉक, बिना किसी बिचौलिए के",
    badge2Title: "दुकानदारों के लिए अधिकतम मुनाफा",
    badge2Sub: "बेहतर मार्जिन और कम दरें",
    badge3Title: "पश्चिमी यूपी में सुरक्षित डिलीवरी",
    badge3Sub: "दैनिक एवं साप्ताहिक रूट सप्लाई",
    badge4Title: "न्यूनतम आर्डर मात्र 5 कार्टन",
    badge4Sub: "अलग-अलग सामान मिलाकर मंगाएं",

    catAll: "सभी उत्पाद",
    catWater: "मिनरल वाटर बोतल",
    catWaterSub: "200ml, 500ml, 1L एवं 20L जार",
    catJeera: "जीरा मसाला सोडा",
    catJeeraSub: "बोतल एवं कैन (सर्वाधिक बिकने वाला)",
    catColdDrinks: "कोल्ड ड्रिंक्स एवं सोडा",
    catColdDrinksSub: "कोला, लेमन, ऑरेंज क्रेट",
    catPads: "सैनिटरी पैड्स",
    catPadsSub: "XL, XXL मास्टर कार्टन",
    catFmcg: "जूस एवं पेय पदार्थ",
    catFmcgSub: "मैंगो जूस, एनर्जी कैन",

    catalogBadge: "उत्पाद कैटलॉग",
    catalogTitle: "उत्पाद एवं पैकेजिंग विवरण",
    catalogSubtitle: "पैकिंग एवं न्यूनतम आर्डर (MOQ) देखने के लिए उत्पाद चुनें।",
    catalogPdfBtn: "रेट लिस्ट PDF",
    showingResults: "कुल",
    itemsLabel: "उत्पाद उपलब्ध",
    sortFeatured: "लोकप्रिय / बेस्ट सेलर",
    sortName: "नाम अनुसार (A-Z)",
    sortMoq: "कम न्यूनतम आर्डर पहले",
    noResultsTitle: "आपकी खोज के अनुसार कोई उत्पाद नहीं मिला",
    noResultsSub: "पानी, जीरा, पैड्स या कोला खोजकर देखें अथवा फ़िल्टर रीसेट करें।",
    resetFilterBtn: "फ़िल्टर रीसेट करें",

    inStock: "स्टॉक में उपलब्ध",
    highMargin: "अधिक मार्जिन",
    unitPackaging: "यूनिट पैकिंग",
    moqLabel: "न्यूनतम आर्डर (MOQ)",
    mrpLabel: "एमआरपी",
    loginForRate: "थोक रेट के लिए कॉल / व्हाट्सएप करें",
    btnWhatsAppQuote: "व्हाट्सएप रेट",
    btnWhatsAppEstimate: "व्हाट्सएप कोटेशन",
    btnViewDetails: "विवरण देखें",
    btnCallForRate: "कॉल करें",
    btnCalculateBulk: "थोक मात्रा एवं अनुमान लगाएं →",
    viewsCount: "बार देखा गया",

    modalTitle: "थोक आर्डर कैलकुलेटर",
    modalRequiredQuantity: "आवश्यक कार्टन / क्रेट संख्या:",
    modalMinRequired: "न्यूनतम आवश्यक",
    modalShopName: "दुकान / फर्म का नाम (वैकल्पिक):",
    modalShopPlaceholder: "उदा. शर्मा किराना स्टोर / गुप्ता कैटरर्स",
    modalTown: "डिलीवरी का कस्बा / शहर:",
    modalTownPlaceholder: "उदा. धामपुर, शेरकोट, बिजनौर, स्योहारा, नजीबाबाद",
    modalPhone: "मोबाइल नंबर (कॉल बैक के लिए):",
    modalPhonePlaceholder: "+91 98765 XXXXX",
    modalSubmitWhatsApp: "व्हाट्सएप पर कोटेशन मंगाएं",
    modalCallOr: "अथवा सीधे नेचुरल ट्रेडर्स को कॉल करें:",

    whyBadge: "नेचुरल ट्रेडर्स को क्यों चुनें",
    whyTitle: "फैक्ट्री रेट और भरोसेमंद सप्लाई से बढ़ाएं अपनी दुकान का मुनाफा",
    whySubtitle: "हम राष्ट्रीय कंपनियों और धामपुर, बिजनौर के स्थानीय दुकानदारों के बीच सीधे थोक व्यापार की कड़ी हैं।",

    areaBadge: "डिलीवरी एवं लॉजिस्टिक्स नेटवर्क",
    areaTitle: "बिजनौर जिले एवं नजदीकी क्षेत्रों में नियमित रूट डिलीवरी",
    areaSubtitle: "धामपुर स्थित केंद्रीय गोदाम से संचालित। हमारे स्वयं के वाहनों द्वारा दुकानों एवं विवाह हॉलों तक सुरक्षित माल पहुंचाया जाता है।",
    coreTownsHeading: "प्रमुख डिलीवरी क्षेत्र (बिजनौर जिला)",
    regionalExpansionHeading: "अन्य जिले एवं अंतर्राज्यीय थोक आपूर्ति",
    interstateNote: "* उत्तराखंड, दिल्ली एनसीआर और हरियाणा के लिए पूर्ण गाड़ी / ट्रकलोड की आपूर्ति उपलब्ध है।",
    customTownPrompt: "क्या आपके गांव या कस्बे में माल मंगवाना है?",
    customTownSub: "रूट और डिलीवरी समय जानने के लिए हमारे डिस्पैच मैनेजर से बात करें।",
    callDispatchBtn: "डिस्पैच को कॉल करें",
    hubTitle: "केंद्रीय थोक गोदाम",
    hubName: "धामपुर वेयरहाउस",
    hubFeature1: "धामपुर, शेरकोट, स्योहारा, नजीबाबाद एवं नगीना में उसी दिन / अगले दिन डिलीवरी।",
    hubFeature2: "सुरक्षित पैकिंग गारंटी: श्रिंक-रैप्ड क्रेट और मजबूत कार्टन पैकिंग।",
    hubFeature3: "विवाह एवं टेंट हाउस प्राथमिकता: सीधे बैंक्वेट हॉल एवं कार्यक्रम स्थल पर सप्लाई।",
    warehouseAddressLabel: "गोदाम का पता:",

    quoteBadge: "त्वरित थोक कोटेशन",
    quoteTitle: "अपनी आवश्यकता के अनुसार रेट कोटेशन प्राप्त करें",
    quoteSubtitle: "अपनी दुकान और आवश्यक माल का विवरण भरें। हम तुरंत व्हाट्सएप पर डिस्ट्रीब्यूटर रेट लिस्ट भेजेंगे।",
    quoteName: "आपका नाम:",
    quoteNamePlaceholder: "उदा. रमेश कुमार",
    quoteShop: "दुकान / फर्म का नाम:",
    quoteShopPlaceholder: "उदा. कुमार जनरल स्टोर",
    quoteTown: "कस्बा / शहर:",
    quoteTownPlaceholder: "उदा. धामपुर, शेरकोट, बिजनौर",
    quoteProducts: "आवश्यक उत्पाद:",
    quoteProductsPlaceholder: "उदा. 10 क्रेट पानी + 10 क्रेट जीरा सोडा + 5 कार्टन पैड्स",
    quoteSubmitBtn: "सबमिट करें और व्हाट्सएप पर रेट पाएं",
    quoteSuccessTitle: "कोटेशन अनुरोध व्हाट्सएप पर भेज दिया गया!",
    quoteSuccessSub: "हमारे प्रतिनिधि आपसे संपर्क करके थोक छूट और डिलीवरी की जानकारी देंगे।",
    quoteSendAnother: "दूसरा अनुरोध भेजें",

    faqBadge: "अक्सर पूछे जाने वाले प्रश्न",
    faqTitle: "थोक आर्डर एवं डिलीवरी से जुड़े सवाल",
    faqSubtitle: "नेचुरल ट्रेडर्स से थोक दरों पर माल खरीदने से संबंधित सभी आवश्यक जानकारियां।",

    mobileCall: "कॉल करें",
    mobileWhatsApp: "व्हाट्सएप कोट",

    footerAboutText: "पैकेज्ड मिनरल वाटर (200ml/500ml/1L/20L), कोल्ड ड्रिंक्स, जीरा मसाला सोडा, एवं मेडिकल-ग्रेड सैनिटरी पैड्स के अधिकृत क्षेत्रीय थोक वितरक। सीधे फैक्ट्री से अधिकतम मार्जिन पर आपूर्ति।",
    footerCategories: "थोक श्रेणियां",
    footerViewAll: "पूरी रेट लिस्ट देखें →",
    footerDeliveryTowns: "डिलीवरी कस्बे (बिजनौर)",
    footerVillageRoute: "+ ग्रामीण एवं कस्बाई रूट पर नियमित सप्लाई",
    footerWholesaleTerms: "थोक व्यापार नियम",
    footerTerm1Title: "न्यूनतम आर्डर",
    footerTerm1Sub: "मात्र 5 कार्टन से शुरू (मिक्स आर्डर उपलब्ध)",
    footerTerm2Title: "सीधे फैक्ट्री से खरीद",
    footerTerm2Sub: "बिना किसी बिचौलिए की अतिरिक्त लागत",
    footerTerm3Title: "इवेंट एवं विवाह सप्लाई",
    footerTerm3Sub: "टेंट हाउस एवं कैटरर्स हेतु प्राथमिकता डिलीवरी",
    footerCopyright: "नेचुरल ट्रेडर्स थोक एवं एफएमसीजी डिस्ट्रीब्यूशन। धामपुर, जिला बिजनौर (उ.प्र.)। सर्वाधिकार सुरक्षित।",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("nt_language") as Language | null;
      if (saved === "en" || saved === "hi") {
        setLanguageState(saved);
      }
    } catch (e) {}
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("nt_language", lang);
    } catch (e) {}
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
