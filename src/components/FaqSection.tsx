"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { COMPANY } from "@/data/company";
import { useLanguage } from "@/context/LanguageContext";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, language } = useLanguage();
  const isHindi = language === "hi";

  const faqs = isHindi
    ? [
        {
          question: "धामपुर एवं बिजनौर में थोक डिलीवरी के लिए न्यूनतम आर्डर (MOQ) क्या है?",
          answer: `हमारा मानक न्यूनतम आर्डर मात्र ${COMPANY.minOrderCartons} कार्टन या क्रेट से शुरू होता है। आप अलग-अलग सामान (जैसे 2 क्रेट पानी, 2 क्रेट जीरा मसाला सोडा और 1 कार्टन सैनिटरी पैड्स) मिलाकर भी 5 कार्टन का आर्डर पूरा कर सकते हैं।`,
        },
        {
          question: "ताज़ा थोक डिस्ट्रीब्यूटर रेट लिस्ट कैसे प्राप्त करें?",
          answer: "चूंकि कंपनियों के ऑफर और वॉल्यूम डिस्काउंट नियमित रूप से अपडेट होते रहते हैं, इसलिए बस 'व्हाट्सएप रेट' बटन दबाएं अथवा हमारे फोन पर कॉल करें। हम तुरंत आपको पीडीएफ रेट लिस्ट व्हाट्सएप कर देंगे।",
        },
        {
          question: "मेरी दुकान अथवा विवाह स्थल तक माल कितनी देर में पहुंचेगा?",
          answer: "धामपुर शहर के लिए डिलीवरी उसी दिन 4-6 घंटे के भीतर हो जाती है। बिजनौर जिले के अन्य कस्बों (शेरकोट, स्योहारा, नजीबाबाद, नगीना, चांदपुर) में हमारे नियमित दैनिक रूट वाहन द्वारा अगले दिन सुबह तक माल सुरक्षित पहुंच जाता है।",
        },
        {
          question: "क्या आप शादी, कैटरिंग एवं बड़े आयोजनों के लिए थोक सप्लाई देते हैं?",
          answer: "जी हां! हम विवाह समारोहों, टेंट हाउस संचालकों, धार्मिक आयोजनों और बैंक्वेट हॉलों के लिए सीधे आयोजन स्थल पर अनलोडिंग के साथ पेय पदार्थ और पानी की थोक आपूर्ति करते हैं।",
        },
        {
          question: "क्या बिजनौर जिले से बाहर अथवा अन्य राज्यों में भी माल भेजा जा सकता है?",
          answer: "जी हां। पूर्ण मिनी-ट्रक या बड़े ट्रकलोड आर्डर के लिए हम मुरादाबाद, अमरोहा, संभल, मेरठ, हरिद्वार (उत्तराखंड), दिल्ली एनसीआर और हरियाणा तक सप्लाई उपलब्ध कराते हैं।",
        },
        {
          question: "भुगतान (Payment) के कौन-कौन से तरीके उपलब्ध हैं?",
          answer: "हम यूपीआई (Google Pay, PhonePe, Paytm), डायरेक्ट बैंक ट्रांसफर (NEFT/IMPS) तथा नियमित प्रमाणित दुकानदारों के लिए कैश ऑन डिलीवरी (COD) स्वीकार करते हैं।",
        },
      ]
    : [
        {
          question: "What is the Minimum Order Quantity (MOQ) for wholesale delivery in Dhampur / Bijnor?",
          answer: `Our standard MOQ starts from just ${COMPANY.minOrderCartons} cartons or crates. You can also mix and match different items (e.g. 2 crates of water bottles, 2 crates of jeera masala soda, and 1 carton of sanitary pads) to meet the minimum threshold.`,
        },
        {
          question: "How do I get the latest wholesale distributor price list?",
          answer: "Since wholesale margins and company offers change dynamically with volume tiers, simply click the 'WhatsApp Quote' button or call our dispatch desk. We immediately share our complete item-wise rate sheet PDF on WhatsApp.",
        },
        {
          question: "How quickly will my bulk order be delivered to my shop or venue?",
          answer: "For Dhampur city, delivery is typically same-day or within 4-6 hours. For other towns across Bijnor district (Sherkot, Seohara, Najibabad, Nagina, Chandpur, Kiratpur), orders are delivered on our scheduled daily route or next morning.",
        },
        {
          question: "Do you supply bulk orders for weddings, catering, and corporate events?",
          answer: "Yes! We specialize in bulk beverage and water supply for marriage banquets, tent house operators, religious gatherings, and community events with direct venue unloading.",
        },
        {
          question: "Can you supply bulk orders outside Bijnor district or to other states?",
          answer: "Yes. For full mini-truck or truckload bulk orders, we deliver across Moradabad, Amroha, Sambhal, Meerut, Haridwar (Uttarakhand), Delhi NCR, and Haryana. Contact us on WhatsApp with your exact requirement for customized logistics.",
        },
        {
          question: "What payment methods are accepted?",
          answer: "We accept UPI (Google Pay, PhonePe, Paytm, BHIM), direct IMPS/NEFT Bank Transfer, and Cash on Delivery (COD) for verified regular retail accounts.",
        },
      ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
            {t.faqBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
            {t.faqTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            {t.faqSubtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-500" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-800/20 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
