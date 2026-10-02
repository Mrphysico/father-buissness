/**
 * Ambica Ladies Tailor - Data & Translations
 * Plain JS module with zero dependencies.
 */

const CONFIG = {
  BUSINESS_NAME: "Ambica Ladies Tailor",
  GUJARATI_NAME: "અંબિકા લેડીઝ ટેલર",
  PHONE_DISPLAY: "+91 98209 21522",
  PHONE_NUMBER: "919820921522", // wa.me target
  ADDRESS_DISPLAY: "Shop No. 4, Ambica Creation, Near Station Road, Central Market",
  ADDRESS_GUJARATI: "દુકાન નં. ૪, અંબિકા ક્રિએશન, સ્ટેશન રોડ પાસે, સેન્ટ્રલ માર્કેટ",
  HOURS_DISPLAY: "Mon - Sat: 10:00 AM – 8:00 PM (Sunday Closed)",
  HOURS_GUJARATI: "સોમવાર થી શનિવાર: સવારે ૧૦ થી રાત્રે ૮ (રવિવારે રજા)",
  ADMIN_PASSWORD: "ambica123", // Basic password for admin demo
  STORAGE_KEY_DESIGNS: "ambica_designs_v1",
  STORAGE_KEY_PRICES: "ambica_prices_v1",
  STORAGE_KEY_LANG: "ambica_lang_pref",
  STORAGE_KEY_THEME: "ambica_theme_pref"
};

// Initial design catalog
const INITIAL_DESIGNS = [
  {
    id: "des-01",
    title: "Royal Paithani Silk Blouse",
    titleGu: "રોયલ પૈઠણી સિલ્ક બ્લાઉઝ",
    category: "blouses",
    priceEstimate: "₹1,200+",
    image: "images/placeholders/blouse-paithani.svg",
    description: "Traditional pure silk blouse with intricate gold zari border on sleeves, handcrafted back potli buttons, and deep sweetheart neck.",
    descriptionGu: "હાથે બનાવેલા પોટલી બટન, ગોલ્ડન જરી બોર્ડર અને ડીપ સ્વીટહાર્ટ ગળા સાથે પરંપરાગત પ્યોર સિલ્ક બ્લાઉઝ."
  },
  {
    id: "des-02",
    title: "Crimson Mirror-Work Anarkali",
    titleGu: "મિરર-વર્ક કાલિદાર અનારકલી ડ્રેસ",
    category: "dresses",
    priceEstimate: "₹2,400+",
    image: "images/placeholders/dress-anarkali.svg",
    description: "32-kali flared festive anarkali featuring hand-pressed original mirror work on bodice, latkan tie-up back, and flowing hem.",
    descriptionGu: "૩૨ કળીઓનો ભવ્ય ઘેર, ચણિયાચોળી સ્ટાઇલ અસલી મિરર વર્ક અને સુંદર લટકણ સાથે આકર્ષક અનારકલી ડ્રેસ."
  },
  {
    id: "des-03",
    title: "Pastel Floral Organza Kurti",
    titleGu: "ઓર્ગેન્ઝા ફ્લોરલ કુર્તી વિથ લેસ",
    category: "kurtis",
    priceEstimate: "₹750+",
    image: "images/placeholders/kurti-organza.svg",
    description: "Breathable organza kurti lined with soft mulmul, scalloped border embroidery, and 3/4 bell sleeves for everyday elegance.",
    descriptionGu: "સોફ્ટ મલમલ અસ્તર, સ્કેલોપ બોર્ડર વર્ક અને બેલ સ્લીવ્સ સાથે રોજીંદા અને પ્રસંગ માટે ઉત્તમ કુર્તી."
  },
  {
    id: "des-04",
    title: "Velvet Zardozi Bridal Gown",
    titleGu: "વેલ્વેટ જરદોસી બ્રાઇડલ ગાઉન",
    category: "gowns",
    priceEstimate: "₹4,500+",
    image: "images/placeholders/gown-velvet.svg",
    description: "Royal wine velvet evening gown adorned with dabka, french wire zardozi work, built-in can-can, and sculpted corset waist.",
    descriptionGu: "શાહી વાઇન કલર વેલ્વેટ પર હાથની જરદોસી કારીગરી, અંદર કેન-કેન અને કમર પર પરફેક્ટ શેપ આપતો બ્રાઇડલ ગાઉન."
  },
  {
    id: "des-05",
    title: "Princess Cut Bridal Blouse",
    titleGu: "પ્રિન્સેસ કટ બ્રાઇડલ બ્લાઉઝ",
    category: "blouses",
    priceEstimate: "₹1,800+",
    image: "images/placeholders/blouse-bridal.svg",
    description: "Magenta pure silk padded blouse with hand embroidered maggam work, doli motif back, and heavy bead edging.",
    descriptionGu: "મેજેન્ટા સિલ્ક પર મગ્ગમ વર્ક, ડોલી મોટિફ બેક ડિઝાઇન અને હેવી મોતી બોર્ડર સાથે પેડેડ બ્રાઇડલ બ્લાઉઝ."
  },
  {
    id: "des-06",
    title: "Banarasi Brocade Festive Dress",
    titleGu: "બનારસી બ્રોકેડ ફેસ્ટિવ ડ્રેસ",
    category: "dresses",
    priceEstimate: "₹1,950+",
    image: "images/placeholders/dress-brocade.svg",
    description: "Vibrant jewel-tone brocade dress with boat neck, elbow sleeves, inverted box pleats, and side pockets for modern ease.",
    descriptionGu: "બોટ નેક, ઇનવર્ટેડ પ્લીટ્સ અને સાઇડ પોકેટ સાથે તહેવારો માટે સ્પેશિયલ બનારસી બ્રોકેડ ડ્રેસ."
  },
  {
    id: "des-07",
    title: "Chikankari Straight Cotton Kurti",
    titleGu: "લખનૌવી ચિકનકારી કોટન કુર્તી",
    category: "kurtis",
    priceEstimate: "₹650+",
    image: "images/placeholders/kurti-chikankari.svg",
    description: "Pure cotton daily-comfort kurti with delicate thread jaal work, side slits, and comfortable tailored armhole fitting.",
    descriptionGu: "શુદ્ધ કોટન પર સુંદર દોરાનું કામ, સાઇડ કટ અને આખો દિવસ પહેરવા માટે એકદમ આરામદાયક ફિટિંગ."
  },
  {
    id: "des-08",
    title: "Emerald Indo-Western Drape Gown",
    titleGu: "ઈન્ડો-વેસ્ટર્ન ડ્રેપ ગાઉન",
    category: "gowns",
    priceEstimate: "₹3,500+",
    image: "images/placeholders/gown-drape.svg",
    description: "Modern pre-draped georgette gown with asymmetrical shoulder pallu, pearl belt cincher, and feather-light fall.",
    descriptionGu: "ખભા પર સુંદર ડ્રેપ દુપટ્ટો, મોતી બેલ્ટ અને ફ્લોઇંગ જ્યોર્જેટ ફેબ્રિક સાથે મોર્ડન ઈન્ડો-વેસ્ટર્ન ગાઉન."
  },
  {
    id: "des-09",
    title: "Boat Neck Backless Sabyasachi Style Blouse",
    titleGu: "સબ્યસાચી સ્ટાઇલ બેકલેસ બ્લાઉઝ",
    category: "blouses",
    priceEstimate: "₹1,400+",
    image: "images/placeholders/blouse-designer.svg",
    description: "High front boat neck paired with a statement deep-cut back, criss-cross golden dori, and custom latkans.",
    descriptionGu: "આગળ હાઇ બોટ નેક અને પાછળ સુંદર ડીપ કટ, ગોલ્ડન દોરી અને હાથથી બનાવેલા લટકણ સાથે લેટેસ્ટ સ્ટાઇલ."
  },
  {
    id: "des-10",
    title: "Angrakha Style Flared Kurti",
    titleGu: "અંગરખા સ્ટાઇલ કાલિદાર કુર્તી",
    category: "kurtis",
    priceEstimate: "₹850+",
    image: "images/placeholders/kurti-angrakha.svg",
    description: "Traditional royal crossover Angrakha kurti with contrasting piping, side tie tassels, and hand-block printed cotton flare.",
    descriptionGu: "પરંપરાગત અંગરખા ક્રોસઓવર સ્ટાઇલ, સાઇડ ટાઈ ટસેલ્સ અને બ્લોક પ્રિન્ટેડ ઘેર સાથે આકર્ષક કુર્તી."
  }
];

// Initial starting prices
const INITIAL_PRICES = [
  { id: "pr-1", name: "Simple Blouse", nameGu: "સાદું બ્લાઉઝ (Simple Blouse)", price: 400, unit: "starting", details: "Basic round/square neck, hook-eye or zipper, plain lining", detailsGu: "ગોળ કે ચોરસ ગળું, હૂક અથવા ઝિપ, સાદું અસ્તર" },
  { id: "pr-2", name: "Designer Blouse", nameGu: "ડિઝાઇનર બ્લાઉઝ (Designer Blouse)", price: 700, unit: "starting", details: "Princess cut, boat neck, back knot, designer sleeves, potli work", detailsGu: "પ્રિન્સેસ કટ, બોટ નેક, બેક નોટ, ડિઝાઇનર બાંય, પોટલી વર્ક" },
  { id: "pr-3", name: "Bridal / Heavy Blouse", nameGu: "બ્રાઇડલ / હેવી બ્લાઉઝ (Bridal Blouse)", price: 1500, unit: "starting", details: "Heavy zardozi, hand maggam work, doli back, padded cups, latkans", detailsGu: "હેવી જરદોસી, મગ્ગમ વર્ક, પેડેડ કપ્સ, હેન્ડમેડ લટકણ" },
  { id: "pr-4", name: "Kurti", nameGu: "કુર્તી (Kurti)", price: 600, unit: "starting", details: "Straight cut, A-line, side slits, designer neck, sleeve borders", detailsGu: "સ્ટ્રેટ કટ, A-લાઇન, સાઇડ કટ, નેક ડિઝાઇન, સ્લીવ બોર્ડર" },
  { id: "pr-5", name: "Dress / Anarkali", nameGu: "ડ્રેસ / અનારકલી (Dress / Anarkali)", price: 1800, unit: "starting", details: "Flared kalidar, full lining, churidar or pant, matching dupatta borders", detailsGu: "ઘેરવાળી કળીઓ, ફૂલ અસ્તર, ચૂડીદાર કે પેન્ટ, દુપટ્ટા બોર્ડર ફિનિશિંગ" },
  { id: "pr-6", name: "Gown", nameGu: "ગાઉન (Party / Bridal Gown)", price: 3000, unit: "starting", details: "Floor length, built-in can-can, corset/padded fitting, drape style", detailsGu: "ફ્લોર લેન્થ, અંદર કેન-કેન, કોર્સેટ/પેડેડ શેપિંગ, ડ્રેપ સ્ટાઇલ" }
];

// Initial reviews
const INITIAL_REVIEWS = [
  {
    name: "Kinjal Shah",
    nameGu: "કિંજલ શાહ",
    outfit: "Bridal Lehenga Blouses (Wedding)",
    outfitGu: "લગ્ન માટે બ્રાઇડલ બ્લાઉઝ",
    rating: 5,
    comment: "My bridal blouse fitting was 100% spotless on the very first try! Kaka has over 25 years of experience and it shows in every stitch. He patiently adjusted the neckline exactly how I envisioned.",
    commentGu: "મારા લગ્નના બ્લાઉઝનું ફિટિંગ પહેલી જ ટ્રાયલમાં એકદમ પરફેક્ટ આવ્યું! કાકા પાસે ૨૫+ વર્ષનો અનુભવ છે અને તેમની કારીગરીમાં તે સ્પષ્ટ દેખાય છે. ગળાની ડિઝાઇન બિલકુલ મેં કહી હતી તેવી જ બનાવી આપી."
  },
  {
    name: "Pooja Patel",
    nameGu: "પૂજા પટેલ",
    outfit: "Designer Kurtis & Anarkali",
    outfitGu: "ડિઝાઇનર કુર્તી અને અનારકલી",
    rating: 5,
    comment: "I showed him a Pinterest dress picture on my phone and he tailored it even better than the photo! The armhole cut and fall of the flare are unmatched. Never going anywhere else.",
    commentGu: "મેં ફોનમાંથી પિન્ટરેસ્ટનો ફોટો બતાવ્યો હતો અને કાકાએ ફોટા કરતાં પણ વધુ સુંદર ડ્રેસ સીવી આપ્યો! ઘેરનો ફોલ અને બગલનું ફિટિંગ લાજવાબ છે. હવે બીજે ક્યાંય નથી જવું."
  },
  {
    name: "Meena Trivedi",
    nameGu: "મીના ત્રિવેદી",
    outfit: "Paithani & Silk Blouses",
    outfitGu: "પૈઠણી અને સિલ્ક સાડી બ્લાઉઝ",
    rating: 5,
    comment: "He treats every single piece of fabric like royal silk. My Paithani border was placed with millimeter precision. Very polite, always delivers on promised dates before festivals.",
    commentGu: "તેઓ દરેક કાપડની ખૂબ કાળજી રાખીને સિલાઈ કરે છે. મારી પૈઠણી સાડીની જરી બોર્ડર એકદમ સચોટ ગોઠવી. સમયસર અને વચન મુજબ તહેવાર પહેલાં કપડાં મળી જાય છે."
  }
];

// Initial FAQs
const INITIAL_FAQS = [
  {
    question: "How much time do you take to stitch an outfit?",
    questionGu: "કપડાં સીવવામાં કેટલો સમય લાગે છે?",
    answer: "Regular blouses and kurtis typically take 3 to 5 days. For bridal blouses, heavy anarkalis, or festival orders, we recommend 7 to 10 days. If you have an urgent function, let us know on WhatsApp—we do accommodate rush orders whenever possible.",
    answerGu: "સામાન્ય બ્લાઉઝ અને કુર્તી ૩ થી ૫ દિવસમાં તૈયાર થઈ જાય છે. બ્રાઇડલ બ્લાઉઝ, હેવી અનારકલી કે લગ્નસરાના ઓર્ડર માટે ૭ થી ૧૦ દિવસ લાગે છે. જો તાત્કાલિક જરૂર હોય તો વોટ્સએપ પર જણાવો, અમે શક્ય તેટલો ઝડપી ઓર્ડર પણ સ્વીકારીએ છીએ."
  },
  {
    question: "Can you copy a design from an Instagram or Pinterest photo?",
    questionGu: "શું હું ઇન્સ્ટાગ્રામ કે પિન્ટરેસ્ટનો ફોટો બતાવીને ડિઝાઇન કરાવી શકું?",
    answer: "Yes, absolutely! Over 70% of our customers bring screenshots from Instagram, Pinterest, or celebrity bridal looks. You can simply upload or WhatsApp us the photo, and Masterji will discuss the exact neck cut, back pattern, and sleeve style suited for your fabric.",
    answerGu: "હા, ચોક્કસ! અમારા ૭૦% થી વધુ ગ્રાહકો ઇન્સ્ટાગ્રામ કે પિન્ટરેસ્ટના ફોટા લાવે છે. તમે વોટ્સએપ પર ફોટો મોકલી શકો છો, અને અમારા માસ્ટરજી તમારા કાપડ મુજબ ગળાની કટિંગ, પીઠની ડિઝાઇન અને સ્લીવ્સ અંગે ચર્ચા કરીને બનાવી આપશે."
  },
  {
    question: "How do I give my measurements if I cannot visit the shop?",
    questionGu: "જો હું દુકાને રૂબરૂ ન આવી શકું તો માપ કેવી રીતે આપવું?",
    answer: "You have two easy choices: 1) Follow our visual Measurement Guide below and send your numbers on WhatsApp, or 2) Send an existing best-fitting sample blouse/dress via courier, auto, or someone visiting the market.",
    answerGu: "તમારી પાસે બે સરળ રસ્તા છે: ૧) નીચે આપેલ અમારી માપ માર્ગદર્શિકા જોઈને તમારું માપ વોટ્સએપ કરી શકો છો, અથવા ૨) તમારું એકદમ પરફેક્ટ ફિટિંગ વાળું જૂનું બ્લાઉઝ કે ડ્રેસ કુરિયર કે કોઈના હાથે મોકલી શકો છો."
  },
  {
    question: "What is your alterations and fitting guarantee policy?",
    questionGu: "ફિટિંગમાં ફેરફાર (ઓલ્ટરેશન) માટેનો શું નિયમ છે?",
    answer: "We guarantee your satisfaction! We offer free minor fitting touch-ups and adjustments within 15 days of collection. We always leave sufficient margin inside every outfit so it can be loosened or tightened in the future.",
    answerGu: "અમે ૧૦૦% પરફેક્ટ ફિટિંગની ખાતરી આપીએ છીએ! કપડાં લીધા પછી ૧૫ દિવસ સુધી કોઈપણ નાનો ફેરફાર સંપૂર્ણપણે મફત કરી આપવામાં આવે છે. અમે અંદર પૂરતું માર્જિન પણ રાખીએ છીએ જેથી ભવિષ્યમાં છૂટું કે ફીટ કરી શકાય."
  },
  {
    question: "Do you take advance payment?",
    questionGu: "શું એડવાન્સ પેમેન્ટ આપવું પડે છે?",
    answer: "For standard orders, a small nominal token advance (or 30-50%) is appreciated when giving fabric. The remaining amount is paid at the time of trial/pickup. We accept Google Pay, PhonePe, Paytm, UPI, and Cash.",
    answerGu: "સામાન્ય ઓર્ડર માટે કાપડ આપતી વખતે સામાન્ય ટોકન અથવા ૩૦% થી ૫૦% એડવાન્સ લેવામાં આવે છે. બાકીની રકમ ટ્રાયલ અથવા ડિલિવરી વખતે આપવાની રહે છે. અમે Google Pay, PhonePe, UPI અને રોકડ સ્વીકારીએ છીએ."
  },
  {
    question: "How early should I book for wedding & festival seasons?",
    questionGu: "દિવાળી, નવરાત્રિ અને લગ્નસરા માટે કેટલું વહેલું બુકિંગ કરવું જોઈએ?",
    answer: "Festival seasons (Navratri, Diwali) and wedding months get booked very fast. We advise booking and giving fabric at least 2 to 3 weeks in advance to ensure our master craftsman can dedicate the utmost care to your attire.",
    answerGu: "નવરાત્રિ, દિવાળી અને લગ્નની સીઝનમાં ઓર્ડર ખૂબ ઝડપથી ભરાઈ જાય છે. દરેક કપડામાં ઝીણવટભરી કારીગરી મળી રહે તે માટે તહેવાર કે પ્રસંગના ઓછામાં ઓછા ૨ થી ૩ અઠવાડિયા પહેલાં કાપડ આપવાની વિનંતી છે."
  }
];

// Complete Bilingual Dictionary (English & Gujarati)
const TRANSLATIONS = {
  en: {
    // Header & Navigation
    shopName: "Ambica Ladies Tailor",
    tagline: "Colours stitched to fit you",
    navDesigns: "Designs",
    navPrices: "Prices",
    navGuide: "Measurement Guide",
    navHowItWorks: "How It Works",
    navOrder: "Order Now",
    navFitting: "Book a Fitting",
    navReviews: "Reviews",
    navFaq: "FAQ",
    navContact: "Contact",
    themeToggleAria: "Toggle light or dark theme",
    langToggleAria: "Switch language",
    menuOpenAria: "Open navigation menu",
    menuCloseAria: "Close navigation menu",

    // Hero
    heroBadge: "One Master Craftsman • 25+ Years Experience • Perfect Fit Guarantee",
    heroTitle: "Colours stitched to fit you.",
    heroSubtitle: "Handcrafted, bespoke blouses, festive anarkalis, daily kurtis and bridal gowns. Cut and stitched with love by one dedicated master tailor — where no two creations are ever the same.",
    heroBtnOrder: "Order on WhatsApp",
    heroBtnDesigns: "Explore Designs",
    heroFeature1: "Single Master Tailor",
    heroFeature1Sub: "Personal care for every stitch",
    heroFeature2: "Custom To Your Size",
    heroFeature2Sub: "Flattering cuts with inside margins",
    heroFeature3: "Photo To Reality",
    heroFeature3Sub: "Bring any Instagram/Pinterest photo",

    // Designs Section
    galleryTitle: "Our Bespoke Creations",
    gallerySubtitle: "Every garment tells a unique story of fabric, fit, and timeless Indian craftsmanship.",
    filterAll: "All Designs",
    filterBlouses: "Blouses",
    filterDresses: "Dresses & Anarkalis",
    filterKurtis: "Kurtis",
    filterGowns: "Gowns",
    btnOrderThis: "Order This Design",
    btnEnquire: "Enquire on WhatsApp",
    lightboxPrev: "Previous design",
    lightboxNext: "Next design",
    lightboxClose: "Close lightbox",
    noDesignsFound: "No designs found matching this category.",

    // Prices Section
    pricesTitle: "Transparent Starting Prices",
    pricesSubtitle: "Honest craftsmanship at reasonable rates. Final prices depend on fabric intricacy, neck patterns, and hand embroidery work.",
    priceNoteHeading: "Please Note:",
    priceNoteText: "The prices listed above are starting rates for plain stitching with standard lining. Heavy hand embroidery, maggam work, original mirror work, can-can insertion, and specialized designer latkans will be estimated transparently after checking your fabric.",
    tableHeadItem: "Garment Type",
    tableHeadPrice: "Starting From",
    tableHeadDetails: "Includes / Highlights",
    tableHeadAction: "Action",
    btnBookThisPrice: "Book Now",

    // Measurement Guide
    guideTitle: "Measurement Guide",
    guideSubtitle: "Need it stitched from home? Follow our simple illustrated guide below and send your exact measurements directly to our WhatsApp.",
    tabBlouse: "Blouse Measurements",
    tabDress: "Dress / Kurti / Gown Measurements",
    guideNote: "Tip: Use a flexible measuring tape. Keep the tape comfortably snug without pulling too tight.",
    btnSendMeasurements: "Send My Measurements on WhatsApp",
    measureSuccessAlert: "Your measurements have been formatted! Opening WhatsApp...",

    // Measurement Fields
    mBust: "Bust / Chest",
    mBustHint: "Measure around the fullest part of the bust",
    mWaist: "Natural Waist",
    mWaistHint: "Measure around the narrowest part above naval",
    mHip: "Hip / Seat",
    mHipHint: "Measure around the widest part of your hips",
    mShoulder: "Shoulder Width",
    mShoulderHint: "From one shoulder tip edge to the other across back",
    mLength: "Full Garment Length",
    mLengthHint: "From highest shoulder point down to desired hem",
    mSleeve: "Sleeve Length",
    mSleeveHint: "From shoulder bone to desired length (short/elbow/full)",
    mArmhole: "Armhole Circumference",
    mArmholeHint: "Wrap comfortably around the arm socket",
    mFrontNeck: "Front Neck Depth",
    mFrontNeckHint: "Diagonal from shoulder inner to desired front dip",
    mBackNeck: "Back Neck Depth",
    mBackNeckHint: "From back neck bone down to desired back opening",
    customerNamePlaceholder: "Your Name (Optional)",

    // How an Order Works
    stepsTitle: "How an Order Works",
    stepsSubtitle: "4 simple, hassle-free steps from your idea to your finished, perfectly fitted outfit.",
    step1Num: "01",
    step1Title: "Share Your Idea",
    step1Desc: "Send us a photo from Instagram or Pinterest, pick from our gallery, or describe what you have in mind.",
    step2Num: "02",
    step2Title: "Give Measurements",
    step2Desc: "Visit our shop for exact tailoring measurements, send a well-fitted sample piece, or follow our easy guide.",
    step3Num: "03",
    step3Title: "Stitch & Shape",
    step3Desc: "Our master craftsman meticulously cuts, shapes, and stitches your garment with generous inside margins.",
    step4Num: "04",
    step4Title: "Trial & Pick Up",
    step4Desc: "Try your outfit in our shop. We do any minor touch-ups on the spot so you leave with 100% confidence.",

    // Order Form
    orderTitle: "Place an Order Online",
    orderSubtitle: "Fill in your details below and we will instantly prepare a ready-to-send WhatsApp message for you!",
    formName: "Full Name *",
    formNamePlaceholder: "Enter your name (e.g. Anjali Shah)",
    formPhone: "WhatsApp Phone Number *",
    formPhonePlaceholder: "10-digit mobile number (e.g. 9820921522)",
    formItemType: "What would you like stitched? *",
    formItemOptionSelect: "-- Select Garment --",
    formItemBlouse: "Blouse (Simple / Designer / Bridal)",
    formItemDress: "Dress / Anarkali / Suit",
    formItemKurti: "Kurti / Tunics",
    formItemGown: "Gown / Indo-Western",
    formItemOther: "Other / Multiple items",
    formDate: "When do you need it by? *",
    formNotes: "Design Idea, Fabric Details & Neck Style",
    formNotesPlaceholder: "Describe your fabric type, neck pattern (boat neck, sweetheart, deep back), sleeve length, or reference design...",
    formPhotoRef: "Do you have a photo reference?",
    formPhotoRefYes: "Yes, I will attach it in our WhatsApp chat after clicking submit",
    formPhotoRefNo: "No, I will describe or visit the shop",
    btnSubmitOrder: "Send Order on WhatsApp",
    orderHelpNotice: "Clicking opens WhatsApp with all your details pre-formatted. You can review and attach photos before hitting send.",

    // Book a Fitting
    bookingTitle: "Book a Fitting or Shop Visit",
    bookingSubtitle: "Schedule a relaxed 1-on-1 consultation with our master tailor. We will keep your slot reserved.",
    bookDate: "Select Date *",
    bookDateHint: "Mon to Sat only (Shop closed on Sundays)",
    bookTime: "Select Preferred Time Slot *",
    bookTimeOptionSelect: "-- Choose Hourly Slot (10 AM to 7 PM) --",
    bookName: "Your Name *",
    bookNamePlaceholder: "Enter your name",
    bookPhone: "Phone / WhatsApp *",
    bookPhonePlaceholder: "10-digit number",
    bookPurpose: "Purpose of Visit",
    bookPurposeMeasurements: "New order & measurement",
    bookPurposeTrial: "Fitting / Trial of stitched outfit",
    bookPurposeDiscussion: "Discuss bridal / heavy order & fabric",
    btnSubmitBooking: "Book Slot on WhatsApp",

    // Reviews Section
    reviewsTitle: "Loved by Women Across Generations",
    reviewsSubtitle: "From mothers to brides, our customers trust Ambica Ladies Tailor for lifetime memories.",

    // FAQ Section
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know about our stitching process, timing, alterations and pricing.",

    // Contact Section
    contactTitle: "Visit or Contact Us",
    contactSubtitle: "Located conveniently in the heart of the market. Drop by or give us a quick call!",
    contactAddressLabel: "Shop Address",
    contactHoursLabel: "Business Hours",
    contactPhoneLabel: "Phone & WhatsApp",
    btnCallNow: "Call +91 98209 21522",
    btnWhatsAppDirect: "Chat on WhatsApp",
    btnGetDirections: "Open in Google Maps",
    socialFollow: "Follow our new creations on Instagram:",
    socialInstagramLink: "@ambica_ladies_tailor",

    // Footer
    footerDesc: "Handcrafted women's tailoring by a dedicated master craftsman. Creating one-of-a-kind blouses, dresses, kurtis and bridal wear stitched with passion and perfection.",
    footerQuickLinks: "Quick Navigation",
    footerHoursTitle: "Visiting Hours",
    footerCopyright: "© 2026 Ambica Ladies Tailor. All rights reserved. Handcrafted with care.",
    footerAdminLink: "Tailor Admin Portal",

    // Floating Button
    floatingWhatsAppText: "Chat on WhatsApp",

    // Validation & Alerts
    errNameRequired: "Please enter your name.",
    errPhoneInvalid: "Please enter a valid 10-digit Indian phone number.",
    errDatePast: "The needed-by date cannot be in the past.",
    errDateSunday: "Our shop is closed on Sundays. Please select Monday to Saturday.",
    errItemRequired: "Please select an item type.",
    errSlotRequired: "Please pick an hourly time slot.",
    copiedToast: "Copied to clipboard!",
    savedToast: "Saved successfully!"
  },

  gu: {
    // Header & Navigation
    shopName: "અંબિકા લેડીઝ ટેલર",
    tagline: "તમારા માપ અને મનપસંદ રંગોની સિલાઈ",
    navDesigns: "ડિઝાઇન્સ",
    navPrices: "કિંમત દર",
    navGuide: "માપ માર્ગદર્શિકા",
    navHowItWorks: "કેવી રીતે કામ થાય છે",
    navOrder: "ઓર્ડર કરો",
    navFitting: "ફિટિંગ બુક કરો",
    navReviews: "ગ્રાહકોના અભિપ્રાય",
    navFaq: "પ્રશ્નોતરી (FAQ)",
    navContact: "સંપર્ક",
    themeToggleAria: "લાઇટ કે ડાર્ક મોડ બદલો",
    langToggleAria: "ભાષા બદલો",
    menuOpenAria: "મેનુ ખોલો",
    menuCloseAria: "મેનુ બંધ કરો",

    // Hero
    heroBadge: "એક અનુભવી માસ્ટર કારીગર • ૨૫+ વર્ષનો અનુભવ • ૧૦૦% પરફેક્ટ ફિટિંગ ગેરંટી",
    heroTitle: "તમારા માપ અને મનપસંદ રંગોની સિલાઈ.",
    heroSubtitle: "બ્લાઉઝ, કાલિદાર અનારકલી, રોજીંદી કુર્તી અને બ્રાઇડલ ગાઉન. અમારા અનુભવી માસ્ટર કારીગર (પિતાજી) દ્વારા પ્રેમપૂર્વક તૈયાર કરેલા વસ્ત્રો — જ્યાં દરેક પીસ પોતાનામાં અનોખો અને અદ્વિતીય છે.",
    heroBtnOrder: "વોટ્સએપ પર ઓર્ડર કરો",
    heroBtnDesigns: "ડિઝાઇન્સ જુઓ",
    heroFeature1: "એક જ અનુભવી કારીગર",
    heroFeature1Sub: "દરેક ટાંકામાં અંગત કાળજી",
    heroFeature2: "પરફેક્ટ બોડી ફિટિંગ",
    heroFeature2Sub: "અંદર પૂરતા માર્જિન સાથે સિલાઈ",
    heroFeature3: "ફોટો જોઈને સેમ ડિઝાઇન",
    heroFeature3Sub: "ઇન્સ્ટા કે પિન્ટરેસ્ટનો ફોટો લાવો",

    // Designs Section
    galleryTitle: "અમારી અનોખી ડિઝાઇન્સ",
    gallerySubtitle: "દરેક વસ્ત્ર કાપડ, ફિટિંગ અને ઉત્કૃષ્ટ કારીગરીની એક સુંદર વાર્તા કહે છે.",
    filterAll: "બધી ડિઝાઇન્સ",
    filterBlouses: "બ્લાઉઝ",
    filterDresses: "ડ્રેસ અને અનારકલી",
    filterKurtis: "કુર્તી",
    filterGowns: "ગાઉન",
    btnOrderThis: "આ ડિઝાઇન સીવડાવો",
    btnEnquire: "વોટ્સએપ પર પૂછપરછ કરો",
    lightboxPrev: "પાછલી ડિઝાઇન",
    lightboxNext: "આગલી ડિઝાઇન",
    lightboxClose: "લાઈટબોક્સ બંધ કરો",
    noDesignsFound: "આ કેટેગરીમાં કોઈ ડિઝાઇન મળી નથી.",

    // Prices Section
    pricesTitle: "સ્પષ્ટ અને વ્યાજબી કિંમતો",
    pricesSubtitle: "કોઈ છૂપો ચાર્જ નહીં, ચોખ્ખી અને ટકાઉ સિલાઈ. આખરી કિંમત કાપડ અને વર્કના આધારે નક્કી થશે.",
    priceNoteHeading: "ખાસ નોંધ:",
    priceNoteText: "ઉપર જણાવેલ કિંમતો સાદા અસ્તર સાથેની સિલાઈના શરૂઆતી દર છે. હેવી જરદોસી, મગ્ગમ વર્ક, અસલી મિરર વર્ક, કેન-કેન અથવા સ્પેશિયલ હેન્ડમેડ લટકણનો ચાર્જ કાપડ જોયા પછી પારદર્શક રીતે જણાવવામાં આવશે.",
    tableHeadItem: "કપડાંનો પ્રકાર",
    tableHeadPrice: "શરૂઆતી કિંમત",
    tableHeadDetails: "વિગત / ખાસિયત",
    tableHeadAction: "પસંદગી",
    btnBookThisPrice: "ઓર્ડર કરો",

    // Measurement Guide
    guideTitle: "માપ લેવાની માર્ગદર્શિકા",
    guideSubtitle: "દુકાને આવ્યા વગર ઘરેથી માપ આપવું છે? નીચે આપેલી સચિત્ર માર્ગદર્શિકા મુજબ માપ લઈ સીધા વોટ્સએપ પર મોકલો.",
    tabBlouse: "બ્લાઉઝનું માપ",
    tabDress: "ડ્રેસ / કુર્તી / ગાઉનનું માપ",
    guideNote: "ટીપ: માપ લેવા માટે નરમ મેઝરિંગ ટેપ વાપરો. ટેપને બહુ ઢીલી કે વધુ પડતી ખેંચીને ન પકડો.",
    btnSendMeasurements: "મારું માપ વોટ્સએપ પર મોકલો",
    measureSuccessAlert: "માપ ફોર્મેટ થઈ ગયું છે! વોટ્સએપ ખુલી રહ્યું છે...",

    // Measurement Fields
    mBust: "છાતીનું માપ (Bust)",
    mBustHint: "છાતીના સૌથી ઊંચા ભાગ ફરતે ટેપ ફેરવો",
    mWaist: "કમરનું માપ (Waist)",
    mWaistHint: "દૂંટીની બરાબર ઉપર પાતળી કમરનું માપ",
    mHip: "સીટ / હિપનું માપ (Hip)",
    mHipHint: "હિપ્સના સૌથી પહોળા ભાગ પરથી માપ લો",
    mShoulder: "ખભાનું માપ (Shoulder)",
    mShoulderHint: "પાછળથી એક ખભાના છેડાથી બીજા ખભા સુધી",
    mLength: "કુલ લંબાઈ (Length)",
    mLengthHint: "ખભાની ટોચ પરથી ઇચ્છિત લંબાઈ સુધી",
    mSleeve: "સ્લીવ / બાંયની લંબાઈ (Sleeve)",
    mSleeveHint: "ખભાના હાડકાથી ઇચ્છિત લંબાઈ (ટૂંકી/કોણી/આખી)",
    mArmhole: "બગલનું માપ (Armhole)",
    mArmholeHint: "હાથના મૂળ ફરતે આરામદાયક રીતે ટેપ ફેરવો",
    mFrontNeck: "આગળના ગળાની ઊંડાઈ (Front Neck)",
    mFrontNeckHint: "ખભાથી આગળ ઇચ્છિત ગળાના કટ સુધી",
    mBackNeck: "પાછળના ગળાની ઊંડાઈ (Back Neck)",
    mBackNeckHint: "પાછળ ગરદનથી નીચે ઇચ્છિત ડીપ કટ સુધી",
    customerNamePlaceholder: "તમારું નામ (મરજિયાત)",

    // How an Order Works
    stepsTitle: "ઓર્ડર કેવી રીતે થાય છે?",
    stepsSubtitle: "તમારા મનના વિચારથી લઈને તૈયાર પોશાક સુધીના ૪ સરળ અને ભરોસાપાત્ર તબક્કા.",
    step1Num: "૦૧",
    step1Title: "તમારો વિચાર જણાવો",
    step1Desc: "ઇન્સ્ટા કે પિન્ટરેસ્ટનો ફોટો મોકલો, અમારી ગેલેરીમાંથી પસંદ કરો અથવા તમારી જરૂરિયાત સમજાવો.",
    step2Num: "૦૨",
    step2Title: "માપ આપો",
    step2Desc: "દુકાને રૂબરૂ આવો, તમારું જૂનું ઉત્તમ ફિટિંગ વાળું કપડું મોકલો અથવા અમારી માર્ગદર્શિકા મુજબ માપ આપો.",
    step3Num: "૦૩",
    step3Title: "કટિંગ અને સિલાઈ",
    step3Desc: "અમારા માસ્ટર કારીગર ચોકસાઈથી કટિંગ કરી અંદર પૂરતા માર્જિન સાથે મજબૂત સિલાઈ કરશે.",
    step4Num: "૦૪",
    step4Title: "ટ્રાયલ અને ડિલિવરી",
    step4Desc: "દુકાને આવીને ટ્રાયલ કરો. કોઈપણ નાનો ફેરફાર હોય તો તરત કરી આપવામાં આવશે જેથી તમને પૂરો સંતોષ મળે.",

    // Order Form
    orderTitle: "ઓનલાઇન ઓર્ડર શરૂ કરો",
    orderSubtitle: "નીચે તમારી વિગત ભરો અને અમે તમારા માટે વોટ્સએપ પર મોકલવા માટે તૈયાર મેસેજ બનાવી આપીશું!",
    formName: "પૂરું નામ *",
    formNamePlaceholder: "તમારું નામ લખો (દા.ત. અંજલિ શાહ)",
    formPhone: "વોટ્સએપ મોબાઇલ નંબર *",
    formPhonePlaceholder: "૧૦ અંકનો મોબાઇલ નંબર (દા.ત. 9820921522)",
    formItemType: "શું સીવડાવવું છે? *",
    formItemOptionSelect: "-- કપડું પસંદ કરો --",
    formItemBlouse: "બ્લાઉઝ (સાદું / ડિઝાઇનર / બ્રાઇડલ)",
    formItemDress: "ડ્રેસ / અનારકલી / સ્યુટ",
    formItemKurti: "કુર્તી / ટ્યુનિક",
    formItemGown: "ગાઉન / ઈન્ડો-વેસ્ટર્ન",
    formItemOther: "અન્ય / એક કરતાં વધુ",
    formDate: "કઈ તારીખ સુધીમાં જોઈએ છે? *",
    formNotes: "ડિઝાઇનનો આઈડિયા, કાપડની વિગત અને ગળાની સ્ટાઇલ",
    formNotesPlaceholder: "કાપડનો પ્રકાર, ગળાની ડિઝાઇન (બોટ નેક, સ્વીટહાર્ટ, ડીપ બેક), સ્લીવની લંબાઈ અથવા કોઈ ખાસ વિગત લખો...",
    formPhotoRef: "શું તમારી પાસે ડિઝાઇનનો ફોટો છે?",
    formPhotoRefYes: "હા, સબમિટ કર્યા પછી વોટ્સએપમાં ફોટો જોડી દઈશ",
    formPhotoRefNo: "ના, હું દુકાને આવીશ અથવા વિગત સમજાવીશ",
    btnSubmitOrder: "વોટ્સએપ પર ઓર્ડર મોકલો",
    orderHelpNotice: "સબમિટ કરવાથી તમારા વિગતવાર મેસેજ સાથે સીધું વોટ્સએપ ખુલશે. તમે ફોટો પણ સાથે મોકલી શકશો.",

    // Book a Fitting
    bookingTitle: "રૂબરૂ મુલાકાત / ફિટિંગ બુક કરો",
    bookingSubtitle: "માસ્ટરજી સાથે રૂબરૂ વાતચીત અને માપ માટે તમારો અનુકૂળ સમય બુક કરો.",
    bookDate: "તારીખ પસંદ કરો *",
    bookDateHint: "સોમવાર થી શનિવાર (રવિવારે રજા હોય છે)",
    bookTime: "અનુકૂળ સમય પસંદ કરો *",
    bookTimeOptionSelect: "-- કલાકનો સ્લોટ પસંદ કરો (સવારે ૧૦ થી સાંજે ૭) --",
    bookName: "તમારું નામ *",
    bookNamePlaceholder: "તમારું નામ લખો",
    bookPhone: "મોબાઇલ નંબર *",
    bookPhonePlaceholder: "૧૦ અંકનો નંબર",
    bookPurpose: "મુલાકાતનો હેતુ",
    bookPurposeMeasurements: "નવો ઓર્ડર અને માપ આપવા",
    bookPurposeTrial: "સીવેલા કપડાંની ટ્રાયલ / ફિટિંગ માટે",
    bookPurposeDiscussion: "લગ્નસરાના હેવી ઓર્ડર અંગે ચર્ચા કરવા",
    btnSubmitBooking: "વોટ્સએપ પર સ્લોટ બુક કરો",

    // Reviews Section
    reviewsTitle: "ગ્રાહકોનો અતૂટ વિશ્વાસ",
    reviewsSubtitle: "માતાથી માંડીને નવી દુલ્હન સુધી, દરેક પેઢીના સંતોષકારક પ્રતિભાવો.",

    // FAQ Section
    faqTitle: "વારંવાર પૂછાતા પ્રશ્નો (FAQ)",
    faqSubtitle: "સિલાઈનો સમય, ડિઝાઇન, માપ, ફિટિંગ અને પેમેન્ટ સંબંધિત મહત્વપૂર્ણ માહિતી.",

    // Contact Section
    contactTitle: "અમારી મુલાકાત લો અથવા સંપર્ક કરો",
    contactSubtitle: "સેન્ટ્રલ માર્કેટમાં સ્ટેશન રોડ પાસે. રૂબરૂ પધારો અથવા ફોન કરો!",
    contactAddressLabel: "દુકાનનું સરનામું",
    contactHoursLabel: "સમયપત્રક",
    contactPhoneLabel: "ફોન અને વોટ્સએપ",
    btnCallNow: "કોલ કરો: +91 98209 21522",
    btnWhatsAppDirect: "વોટ્સએપ પર વાત કરો",
    btnGetDirections: "ગૂગલ મેપ્સમાં જુઓ",
    socialFollow: "અમારી નવી ડિઝાઇન્સ ઇન્સ્ટાગ્રામ પર જુઓ:",
    socialInstagramLink: "@ambica_ladies_tailor",

    // Footer
    footerDesc: "અનુભવી માસ્ટર કારીગર દ્વારા હાથે સીવેલા ઉત્કૃષ્ટ સ્ત્રી પોશાક. બ્લાઉઝ, ડ્રેસ, કુર્તી અને બ્રાઇડલ વસ્ત્રો જે માત્ર તમારા માટે જ બનાવવામાં આવે છે.",
    footerQuickLinks: "ઝડપી નેવિગેશન",
    footerHoursTitle: "દુકાનનો સમય",
    footerCopyright: "© ૨૦૨૬ અંબિકા લેડીઝ ટેલર. સર્વાધિકાર સુરક્ષિત. પ્રેમ અને ચોકસાઈથી સિલાઈ.",
    footerAdminLink: "ટેલર એડમિન પોર્ટલ",

    // Floating Button
    floatingWhatsAppText: "વોટ્સએપ ચેટ",

    // Validation & Alerts
    errNameRequired: "કૃપા કરીને તમારું નામ દાખલ કરો.",
    errPhoneInvalid: "કૃપા કરીને સાચો ૧૦ અંકનો મોબાઇલ નંબર દાખલ કરો.",
    errDatePast: "પસંદ કરેલી તારીખ વીતી ગયેલી ન હોવી જોઈએ.",
    errDateSunday: "રવિવારે અમારી દુકાન બંધ હોય છે. કૃપા કરીને સોમવાર થી શનિવારની તારીખ પસંદ કરો.",
    errItemRequired: "કૃપા કરીને કપડાંનો પ્રકાર પસંદ કરો.",
    errSlotRequired: "કૃપા કરીને સમયનો સ્લોટ પસંદ કરો.",
    copiedToast: "ક્લિપબોર્ડ પર કોપી થઈ ગયું!",
    savedToast: "સફળતાપૂર્વક સેવ થઈ ગયું!"
  }
};

// Storage helper functions
function getStoredDesigns() {
  try {
    const raw = localStorage.getItem(CONFIG.STORAGE_KEY_DESIGNS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Could not read stored designs:", e);
  }
  return INITIAL_DESIGNS;
}

function saveStoredDesigns(designs) {
  try {
    localStorage.setItem(CONFIG.STORAGE_KEY_DESIGNS, JSON.stringify(designs));
    return true;
  } catch (e) {
    console.error("Could not save designs to localStorage:", e);
    return false;
  }
}

function getStoredPrices() {
  try {
    const raw = localStorage.getItem(CONFIG.STORAGE_KEY_PRICES);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Could not read stored prices:", e);
  }
  return INITIAL_PRICES;
}

function saveStoredPrices(prices) {
  try {
    localStorage.setItem(CONFIG.STORAGE_KEY_PRICES, JSON.stringify(prices));
    return true;
  } catch (e) {
    console.error("Could not save prices to localStorage:", e);
    return false;
  }
}

function getSavedLanguage() {
  return localStorage.getItem(CONFIG.STORAGE_KEY_LANG) || "en";
}

function saveLanguage(lang) {
  localStorage.setItem(CONFIG.STORAGE_KEY_LANG, lang);
}

function getSavedTheme() {
  return localStorage.getItem(CONFIG.STORAGE_KEY_THEME) || "light";
}

function saveTheme(theme) {
  localStorage.setItem(CONFIG.STORAGE_KEY_THEME, theme);
}
