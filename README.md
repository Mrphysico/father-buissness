# Ambica Ladies Tailor – Official Website

A production-ready, fully responsive, accessible website built for **Ambica Ladies Tailor**, an Indian bespoke tailoring family business.

> **"Colours stitched to fit you."**  
> Custom-stitched unique blouses, festive dresses, kurtis, and bridal gowns made by one experienced master tailor.

---

## 🌟 Key Highlights & Features

- **Zero Frameworks & Zero Build Step**: 100% pure vanilla HTML5, CSS3, and JavaScript. Lightning fast load times (under 500 KB total).
- **Bright Indian Textile Aesthetic**: Crafted with rich Indian textile tones:
  - Magenta (`#D81B60`)
  - Royal Violet (`#5B2A86`)
  - Peacock Teal (`#00897B`)
  - Marigold Saffron (`#FFB300`)
  - Warm Coral (`#FF6F61`)
  - Soft Pink Canvas (`#FFF6FB`)
  - Rainbow embroidery stitch thread borders.
- **Dark Mode**: High-contrast, glowing night theme with instant toggle and persistent user preference.
- **100% Bilingual (English & Gujarati)**:
  - Instant site-wide language switching with natural, respectful Gujarati translations (`ગુજરાતી`).
  - Covers everything: navigation, hero, design names, descriptions, price lists, measurement terms, step-by-step process, form placeholders, FAQs, and testimonials.
- **Interactive Designs Gallery & Lightbox**:
  - Filter by category (*All, Blouses, Dresses, Kurtis, Gowns*).
  - Full-screen lightbox with previous/next buttons, touch swipe on mobile, and keyboard navigation (`←`, `→`, `Esc`).
  - One-click **"Order This Design"** button that pre-populates the order form with the design name.
- **Visual Measurement Guide**:
  - Tabbed guide for **Blouse** and **Dress/Kurti/Gown**.
  - Custom illustrated SVG diagrams highlighting exact measurement points (bust, waist, hip, shoulder, sleeve, armhole, neck depth).
  - Quick input fields with a **"Send My Measurements on WhatsApp"** button that generates a clean formatted WhatsApp message.
- **WhatsApp Order & Fitting Booking Forms**:
  - Client-side validation (10-digit Indian phone, date validation preventing past dates or Sunday shop visits).
  - Automatically formats structured WhatsApp messages ready to send to `+91 98209 21522`.
- **Customer Reviews Carousel**:
  - Auto-rotating carousel with manual arrows, dot indicators, and pause-on-hover/touch.
- **Interactive FAQ Accordion**:
  - Answers common questions regarding turnaround time, bringing Pinterest/Instagram photos, measurements, alteration guarantees, and festival rush.
- **Contact & Map**:
  - Click-to-call, responsive Google Maps embed, business hours, and social link.
- **Floating WhatsApp Button**:
  - Persistent, pulsating bottom-right button for immediate mobile engagement.
- **Admin Management Portal (`admin.html`)**:
  - Password protected (default: `ambica123`).
  - Add, edit, and delete designs.
  - In-browser canvas image compression: automatically shrinks heavy camera photos from mobile phones to web-optimized sizes before storing.
  - Edit starting prices directly.
  - Instant live sync with the customer website via `localStorage`.
  - Export and import JSON backups to easily move data between devices.
- **SEO & Social Sharing Ready**:
  - Open Graph & Twitter Cards with custom 1200x630 banner (`images/og-banner.svg`).
  - `LocalBusiness` Schema (JSON-LD) with geo coordinates, opening hours, and phone number.
  - Clean `sitemap.xml` and `robots.txt`.

---

## 📁 File Structure

```
father buisness/
│
├── index.html              # Main customer-facing website
├── admin.html              # Tailor administration portal (designs & prices)
├── sitemap.xml             # Search engine XML sitemap
├── robots.txt              # Web crawler instructions
├── README.md               # Complete documentation & deployment guide
│
├── css/
│   └── style.css           # Clean, mobile-first CSS with dark mode tokens
│
├── js/
│   ├── data.js             # Initial designs, prices, translations & storage helpers
│   └── main.js             # Interactive logic: gallery, lightbox, forms, i18n
│
└── images/
    ├── favicon.svg         # Needle, scissors & thread brand icon
    ├── og-banner.svg       # Social & WhatsApp share preview banner
    └── placeholders/       # Bespoke SVG garment illustrations & measurement guides
        ├── blouse-paithani.svg
        ├── dress-anarkali.svg
        ├── kurti-organza.svg
        ├── gown-velvet.svg
        ├── blouse-bridal.svg
        ├── dress-brocade.svg
        ├── kurti-chikankari.svg
        ├── gown-drape.svg
        ├── blouse-designer.svg
        ├── kurti-angrakha.svg
        ├── guide-blouse.svg
        └── guide-dress.svg
```

---

## 🛠️ How-To Guides

### 1. How to Change Phone Number and Shop Details
All business details are centralized in `js/data.js` under the `CONFIG` object:

```javascript
// Open js/data.js and update lines 6-17:
const CONFIG = {
  BUSINESS_NAME: "Ambica Ladies Tailor",
  GUJARATI_NAME: "અંબિકા લેડીઝ ટેલર",
  PHONE_DISPLAY: "+91 98209 21522",
  PHONE_NUMBER: "919820921522", // WhatsApp international format (without + or spaces)
  ADDRESS_DISPLAY: "Shop No. 4, Ambica Creation, Near Station Road, Central Market",
  ADDRESS_GUJARATI: "દુકાન નં. ૪, અંબિકા ક્રિએશન, સ્ટેશન રોડ પાસે, સેન્ટ્રલ માર્કેટ",
  HOURS_DISPLAY: "Mon - Sat: 10:00 AM – 8:00 PM (Sunday Closed)",
  HOURS_GUJARATI: "સોમવાર થી શનિવાર: સવારે ૧૦ થી રાત્રે ૮ (રવિવારે રજા)",
  ADMIN_PASSWORD: "ambica123" // Change this to your preferred admin password
};
```
Also update the `tel:+919820921522` and schema tags in `index.html` if you change the phone number.

---

### 2. How to Use the Admin Portal (`admin.html`)
The Admin page lets your father or any family member easily maintain the website without touching code:

1. Open `admin.html` in your browser (or click the **"Tailor Admin Portal 🔒"** link in the website footer).
2. Enter the password: `ambica123` (or your updated password from `CONFIG.ADMIN_PASSWORD`).
3. **Add or Edit Designs**:
   - Click **"+ Add New Design"**.
   - Enter title in English and Gujarati.
   - Choose category (*Blouses, Dresses, Kurtis, Gowns*).
   - Enter a price estimate badge (e.g. `₹1,200+`).
   - Select a photo from your phone/computer. The browser will automatically compress and resize it.
   - Click **Save Design**. The design appears immediately on the main website!
4. **Edit Prices**:
   - Click the **"💰 Price List Settings"** tab.
   - Change the price numbers or details in the table.
   - Click **"💾 Save All Prices"**.
5. **Moving Data Between Devices (Export / Import)**:
   - Click the **"💾 Backup & Sync"** tab.
   - Click **"Export to JSON File"** to download a backup file.
   - Send this JSON file to your father's phone via WhatsApp or email.
   - On his phone, open `admin.html`, click **"Choose JSON File to Import"**, and select the file. All designs and prices are restored instantly!

> **Note on Upgrading to Cloud Database (Firebase/Supabase)**:  
> Currently, the admin panel uses browser `localStorage`, which requires zero backend fees and works offline. If you'd like changes made on your laptop to automatically appear on someone else's phone without importing a file, you can connect **Firebase Firestore** by swapping the two functions `getStoredDesigns()` and `saveStoredDesigns()` in `js/data.js` with Firebase SDK calls (`getDocs` and `setDoc`).

---

### 3. How to Add Your Own Real Photos
You can add photos in two ways:

#### Option A: Via Admin Portal (Recommended for non-technical users)
1. Open `admin.html`.
2. Click **Edit** on any existing design, or **+ Add New Design**.
3. Use the file picker under **Photo Upload**. The built-in HTML5 Canvas engine will automatically resize the image to max 720px width and compress it to JPEG format to keep the site blazing fast.

#### Option B: Via File System (For web developers)
1. Place your JPEG/PNG/WebP photos inside the `images/` directory (e.g. `images/my-blouse.jpg`).
2. Open `js/data.js` and update the `image:` property of the item in `INITIAL_DESIGNS`:
   ```javascript
   image: "images/my-blouse.jpg"
   ```

---

## 🚀 Free Deployment Guide on Netlify

Netlify is the fastest, completely free host for static websites with HTTPS and automatic CDN caching:

### Method 1: Drag & Drop (Takes 60 seconds)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop) (log in or create a free account).
2. Drag and drop the whole `father buisness` folder onto the webpage.
3. Netlify will deploy your site in seconds and give you a live link (e.g. `https://ambica-tailor.netlify.app`).

### Method 2: Via GitHub (Recommended for automatic updates)
1. Create a GitHub repository and push your project files.
2. In Netlify, click **"Add new site"** → **"Import an existing project"** → select **GitHub**.
3. Choose your repository.
4. Leave build command blank (since this is pure static HTML/CSS/JS) and publish directory as `/` or `.`.
5. Click **"Deploy site"**.

### Connecting a Custom Domain (e.g. `www.ambicatailor.com`)
1. Purchase a domain from any registrar (GoDaddy, Namecheap, Hostinger, Google Domains/Squarespace).
2. In Netlify, go to **Site configuration** → **Domain management** → **Add a custom domain**.
3. Type your domain (e.g., `ambicatailor.com`).
4. Update the DNS records in your domain registrar:
   - **A Record**: Point `@` to Netlify's IP `75.2.60.5`
   - **CNAME Record**: Point `www` to `your-site-name.netlify.app`
5. Netlify will automatically provision a free SSL certificate (HTTPS) within a few minutes.

---

## 📱 Browser & Device Compatibility
- Tested and verified for mobile phones (360px – 480px)
- Tablets & iPads (768px – 1024px)
- Desktops and Laptops (1280px+)
- High contrast WCAG AA compliant colors
- Native touch swipe support for lightbox and carousels
- Respects `prefers-reduced-motion`

---

## 📄 License & Credits
Handcrafted for **Ambica Ladies Tailor**. All rights reserved.
