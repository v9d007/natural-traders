# Natural Traders — Wholesale FMCG & Beverage Distribution Platform

[![Live Website](https://img.shields.io/badge/Website-thenaturaltraders.in-emerald?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.thenaturaltraders.in)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, high-performance B2B wholesale distribution platform built for **Natural Traders** (Dhampur, District Bijnor, Uttar Pradesh). The platform connects retail shop owners, caterers, banquet halls, and commercial buyers directly with manufacturer-rate FMCG, beverage, and hygiene products across Western Uttar Pradesh.

---

## 🌟 Key Features

* **📦 Comprehensive Wholesale Catalog:**
  - **Packaged Drinking Water:** 200ml, 500ml, 1L bottles & 20L commercial jars.
  - **Cold Drinks & Sodas:** Cola, Lemon, Orange, and traditional Goli Soda glass bottles.
  - **Jeera Masala Soda:** Ready-to-drink carbonated beverage crates.
  - **Feminine Hygiene & Diapers:** 7Soft Maxi Care, Ultra Care, Femi Fresh sanitary pads, and Baby Pants diapers.
  - **Eco-Friendly Bio-Degradable Bags:** 100% CPCB-approved compostable carry bags, garbage rolls, and courier envelopes.
  - **Namkeens & Snacks:** Assorted Shreeyash namkeen pouches and potato wafers.
* **⚡ One-Click WhatsApp & Phone Inquiries:**
  - Direct top-header action cluster with pre-formatted WhatsApp quotation messages containing product names, MOQ, and pack size details.
* **🌐 Bilingual Support (English & हिन्दी):**
  - Instant one-click toggle across the entire application, catalog specifications, and localized route delivery information.
* **🖼️ Curated Multi-Image Product Gallery:**
  - Interactive carousel on product cards with previous/next arrows.
  - Zero image clipping with responsive `object-contain` framing.
* **📱 Ultra-Clean & Mobile-First:**
  - Zero horizontal overflow scrolling.
  - Responsive header with geometric **NT Monogram** brand identity.
* **🔍 Search Engine Optimization & Structured Data:**
  - Full Google `WholesaleStore` JSON-LD schema with verified GSTIN (`09CPDPS1852L1ZE`).
  - Automated `sitemap.xml` and `robots.txt` generator pointing to `https://www.thenaturaltraders.in`.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static Site Generation)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) (Light & Dark Mode)
* **Hosting:** [Vercel](https://vercel.com/) with Global Edge CDN

---

## 📁 Project Structure

```text
natural-traders/
├── public/
│   └── images/
│       └── catalog/            # 100% Local curated high-resolution product photos
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata & JSON-LD schema
│   │   ├── page.tsx            # Homepage with Hero, Catalog Grid, Delivery Map, FAQ
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   ├── sitemap.ts          # Dynamic sitemap.xml
│   │   └── products/
│   │       ├── page.tsx        # Searchable & filterable products catalog
│   │       └── [slug]/         # Individual product detail pages
│   ├── components/             # Reusable UI components (Navbar, ProductCard, Logo, etc.)
│   ├── context/                # LanguageContext (English & Hindi translations)
│   ├── data/
│   │   ├── company.ts          # Central company profile, address, phone, GSTIN
│   │   └── products.ts         # Centralized product catalog data
│   ├── lib/                    # Analytics & WhatsApp/Call utility helpers
│   └── styles/
│       └── globals.css         # Global styles & Tailwind configuration
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
* Node.js 18.17 or higher
* npm or yarn

### Installation & Local Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/v9d007/natural-traders.git
   cd natural-traders
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🏢 Business & Contact Details

* **Company Name:** Natural Traders Wholesale & FMCG Distribution
* **Warehouse Address:** Natural Traders, Seohara Rd, near St. Mary's School, Dhampur, District Bijnor, UP - 246747
* **GSTIN:** `09CPDPS1852L1ZE`
* **Phone / WhatsApp:** [+91 70541 17364](tel:+917054117364)
* **Email:** [naturaltraders2026@gmail.com](mailto:naturaltraders2026@gmail.com)
* **Website:** [https://www.thenaturaltraders.in](https://www.thenaturaltraders.in)
* **Delivery Route:** Dhampur, Bijnor, Sherkot, Seohara, Najibabad, Nagina, Chandpur, Afzalgarh & Western UP

---

## 📄 License

This project is proprietary and maintained for **Natural Traders**. All rights reserved.
