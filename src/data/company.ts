export interface CompanyConfig {
  name: string;
  hindiName: string;
  legalName: string;
  tagline: string;
  hindiTagline: string;
  description: string;
  hindiDescription: string;
  logo: string;
  promoBanner: {
    en: string;
    hi: string;
  };
  gstin?: string;
  primaryCity: string;
  primaryDistrict: string;
  state: string;
  pincode: string;
  address: string;
  hindiAddress: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  operatingHours: string;
  hindiOperatingHours: string;
  minOrderCartons: number;
  deliveryCoverage: {
    primaryTowns: string[];
    districts: string[];
    expansionStates: string[];
  };
  googleAnalyticsId: string;
}

export const COMPANY: CompanyConfig = {
  name: "Natural Traders",
  hindiName: "नेचुरल ट्रेडर्स",
  legalName: "Natural Traders Wholesale & FMCG Distribution",
  gstin: "09CPDPS1852L1ZE",
  tagline: "Direct Manufacturer Supply at Wholesale Rates",
  hindiTagline: "सीधे कंपनी से थोक दरों पर माल आपूर्ति",
  description: "Authorized wholesale distributor of packaged drinking water, cold drinks, jeera masala soda, sanitary pads, and FMCG beverages in Dhampur, Bijnor district, and Western Uttar Pradesh.",
  hindiDescription: "धामपुर, बिजनौर (उ.प्र.) में पैकेज्ड मिनरल वाटर, कोल्ड ड्रिंक्स, जीरा मसाला सोडा एवं सैनिटरी पैड्स के अधिकृत थोक वितरक।",
  logo: "https://lh3.googleusercontent.com/aida/AEtjO1V33XQENpUytoIdXykeWfWjgzXbCvtpIF8iYkQNpOQOw05da8gQ-YUgpDa_Ak387kY-ZNtUQIEdYzgINECGr64eWxbGUpjYTMZiyZXVKA1IJwG-kkQMc4Sc7mVLKVqZW56pU4DlG-7aUN349CPqnlKwyBNMXy5EFrq7eR6Ufz8dMkC32ccZGurt8sA32NXGZmTVYgrCUMCZHJbwotzFSRBquVp266wxrXpvqd6BXarKE8OZeYNn3Utf_ZY",
  promoBanner: {
    en: "Bulk Order Discount: Save an extra 5% on orders over 50 crates/cartons!",
    hi: "थोक आदेश छूट: 50 क्रेट से अधिक के आदेश पर अतिरिक्त 5% की बचत करें!",
  },
  primaryCity: "Dhampur",
  primaryDistrict: "Bijnor",
  state: "Uttar Pradesh",
  pincode: "246747",
  address: "Natural Traders, Seohara Rd, near St. Mary's School, Dhampur, District Bijnor, UP - 246747",
  hindiAddress: "नेचुरल ट्रेडर्स, स्योहारा रोड, सेंट मैरीज़ स्कूल के पास, धामपुर, जिला बिजनौर (उ.प्र.) - 246747",
  phone: "+91 70541 17364",
  phoneRaw: "+917054117364",
  whatsapp: "+91 70541 17364",
  whatsappRaw: "917054117364",
  email: "naturaltraders2026@gmail.com",
  operatingHours: "Mon - Sat: 8:00 AM - 8:30 PM | Sunday: 9:00 AM - 2:00 PM",
  hindiOperatingHours: "सोम - शनि: सुबह 8:00 - रात 8:30 | रविवार: सुबह 9:00 - दोपहर 2:00",
  minOrderCartons: 5,
  deliveryCoverage: {
    primaryTowns: [
      "Dhampur",
      "Bijnor",
      "Sherkot",
      "Seohara",
      "Najibabad",
      "Nagina",
      "Chandpur",
      "Kiratpur",
      "Noorpur",
      "Nehtaur",
      "Afzalgarh",
      "Haldaur",
    ],
    districts: [
      "Bijnor",
      "Moradabad",
      "Amroha",
      "Sambhal",
      "Meerut",
      "Muzaffarnagar",
      "Haridwar (Uttarakhand)",
    ],
    expansionStates: [
      "Uttar Pradesh",
      "Uttarakhand",
      "Delhi NCR",
      "Haryana",
    ],
  },
  googleAnalyticsId: "G-17SJSPXJ1X",
};
