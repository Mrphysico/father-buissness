/**
 * Ambica Ladies Tailor - Main Interactive Logic
 * Mobile-First • Accessible • Zero-Framework Vanilla JS
 */

document.addEventListener("DOMContentLoaded", () => {
  // State
  const state = {
    lang: getSavedLanguage(),
    theme: getSavedTheme(),
    designs: getStoredDesigns(),
    prices: getStoredPrices(),
    activeCategory: "all",
    lightboxIndex: 0,
    filteredDesigns: [],
    reviewsIndex: 0,
    reviewTimer: null,
    isReviewPaused: false
  };

  // DOM Elements Cache
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const langToggleBtn = document.getElementById("langToggleBtn");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  const galleryGrid = document.getElementById("galleryGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  const lightbox = document.getElementById("lightboxModal");
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
  const lightboxPrevBtn = document.getElementById("lightboxPrevBtn");
  const lightboxNextBtn = document.getElementById("lightboxNextBtn");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxCategory = document.getElementById("lightboxCategory");
  const lightboxPrice = document.getElementById("lightboxPrice");
  const lightboxDesc = document.getElementById("lightboxDesc");
  const lightboxOrderBtn = document.getElementById("lightboxOrderBtn");
  const lightboxEnquireBtn = document.getElementById("lightboxEnquireBtn");

  const pricesTableBody = document.getElementById("pricesTableBody");

  const guideTabs = document.querySelectorAll(".guide-tab-btn");
  const guideTabContents = document.querySelectorAll(".guide-tab-content");
  const sendBlouseMeasureBtn = document.getElementById("sendBlouseMeasureBtn");
  const sendDressMeasureBtn = document.getElementById("sendDressMeasureBtn");

  const orderForm = document.getElementById("orderForm");
  const bookingForm = document.getElementById("bookingForm");
  const bookingDateInput = document.getElementById("bookDate");

  const reviewsTrack = document.getElementById("reviewsTrack");
  const reviewsDotsContainer = document.getElementById("reviewsDots");
  const reviewPrevBtn = document.getElementById("reviewPrevBtn");
  const reviewNextBtn = document.getElementById("reviewNextBtn");

  const faqContainer = document.getElementById("faqContainer");
  const toastEl = document.getElementById("toastMsg");

  // ------------------------------------------------------------------------
  // Helper: Toast Notifications
  // ------------------------------------------------------------------------
  function showToast(text, duration = 3000) {
    if (!toastEl) return;
    toastEl.textContent = text;
    toastEl.classList.add("show");
    setTimeout(() => {
      toastEl.classList.remove("show");
    }, duration);
  }

  // ------------------------------------------------------------------------
  // 1. Theme Management (Light / Dark)
  // ------------------------------------------------------------------------
  function applyTheme(theme) {
    state.theme = theme;
    htmlEl.setAttribute("data-theme", theme);
    saveTheme(theme);
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === "dark" 
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      themeToggleBtn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const nextTheme = state.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }

  // ------------------------------------------------------------------------
  // 2. Language & Translation Management (English / Gujarati)
  // ------------------------------------------------------------------------
  function setLanguage(lang) {
    state.lang = lang;
    htmlEl.setAttribute("lang", lang);
    saveLanguage(lang);

    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

    // Update text content of all data-i18n elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key]) {
        el.setAttribute("placeholder", t[key]);
      }
    });

    // Update aria labels
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const key = el.getAttribute("data-i18n-aria");
      if (t[key]) {
        el.setAttribute("aria-label", t[key]);
      }
    });

    // Update language toggle button label
    if (langToggleBtn) {
      if (lang === "en") {
        langToggleBtn.innerHTML = '<span class="lang-flag">🇮🇳</span> <span>ગુજરાતી</span>';
        langToggleBtn.setAttribute("aria-label", "Switch language to Gujarati");
      } else {
        langToggleBtn.innerHTML = '<span class="lang-flag">🌐</span> <span>English</span>';
        langToggleBtn.setAttribute("aria-label", "Switch language to English");
      }
    }

    // Refresh dynamic sections
    renderDesigns();
    renderPrices();
    renderReviews();
    renderFaqs();

    // If lightbox is currently open, refresh its text
    if (lightbox && lightbox.classList.contains("active")) {
      updateLightboxContent();
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const nextLang = state.lang === "en" ? "gu" : "en";
      setLanguage(nextLang);
    });
  }

  // ------------------------------------------------------------------------
  // 3. Mobile Navigation Drawer
  // ------------------------------------------------------------------------
  function toggleMobileMenu(forceClose = false) {
    if (!hamburgerBtn || !mobileNavDrawer) return;
    const isOpen = forceClose ? false : !mobileNavDrawer.classList.contains("open");
    hamburgerBtn.classList.toggle("active", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", isOpen);
    mobileNavDrawer.classList.toggle("open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => toggleMobileMenu());
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => toggleMobileMenu(true));
  });

  // Close mobile drawer on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNavDrawer && mobileNavDrawer.classList.contains("open")) {
      toggleMobileMenu(true);
    }
  });

  // ------------------------------------------------------------------------
  // 4. Designs Gallery & Filtering
  // ------------------------------------------------------------------------
  function getCategoryName(categoryKey) {
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;
    switch (categoryKey) {
      case "blouses": return t.filterBlouses;
      case "dresses": return t.filterDresses;
      case "kurtis": return t.filterKurtis;
      case "gowns": return t.filterGowns;
      default: return categoryKey;
    }
  }

  function renderDesigns() {
    if (!galleryGrid) return;

    // Filter designs based on active category
    state.filteredDesigns = state.activeCategory === "all"
      ? state.designs
      : state.designs.filter(d => d.category === state.activeCategory);

    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;

    if (state.filteredDesigns.length === 0) {
      galleryGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
          <p style="color: var(--text-secondary); font-size: 1.1rem;">${t.noDesignsFound}</p>
        </div>
      `;
      return;
    }

    galleryGrid.innerHTML = state.filteredDesigns.map((item, index) => {
      const title = (state.lang === "gu" && item.titleGu) ? item.titleGu : item.title;
      const desc = (state.lang === "gu" && item.descriptionGu) ? item.descriptionGu : item.description;
      const categoryLabel = getCategoryName(item.category);

      return `
        <article class="design-card" data-index="${index}" tabindex="0" aria-label="${title}">
          <div class="design-image-wrap">
            <img src="${item.image}" alt="${title}" class="design-img" loading="lazy">
            <span class="design-category-tag">${categoryLabel}</span>
            <span class="design-price-tag">${item.priceEstimate || "Bespoke"}</span>
          </div>
          <div class="design-info">
            <h3 class="design-title">${title}</h3>
            <p class="design-desc">${desc}</p>
            <div class="design-actions">
              <button type="button" class="btn-card-order" data-order-title="${title}" data-category="${item.category}">
                ${t.btnOrderThis}
              </button>
              <button type="button" class="btn-card-view" data-view-index="${index}" aria-label="View ${title}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    // Attach click events for cards & buttons
    galleryGrid.querySelectorAll(".design-card").forEach(card => {
      const idx = parseInt(card.getAttribute("data-index"), 10);
      
      // Clicking the card opens lightbox (unless clicking order button)
      card.addEventListener("click", (e) => {
        if (e.target.closest(".btn-card-order")) return;
        openLightbox(idx);
      });

      // Keyboard accessibility (Enter or Space opens lightbox)
      card.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && !e.target.closest(".btn-card-order")) {
          e.preventDefault();
          openLightbox(idx);
        }
      });
    });

    // "Order This" buttons
    galleryGrid.querySelectorAll(".btn-card-order").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const designTitle = btn.getAttribute("data-order-title");
        const designCat = btn.getAttribute("data-category");
        initiateOrderForDesign(designTitle, designCat);
      });
    });
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeCategory = btn.getAttribute("data-category");
      renderDesigns();
    });
  });

  // ------------------------------------------------------------------------
  // 5. Fullscreen Lightbox & Touch Gestures
  // ------------------------------------------------------------------------
  function openLightbox(index) {
    if (!lightbox || state.filteredDesigns.length === 0) return;
    state.lightboxIndex = index;
    updateLightboxContent();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
    if (lightboxCloseBtn) lightboxCloseBtn.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function updateLightboxContent() {
    const item = state.filteredDesigns[state.lightboxIndex];
    if (!item) return;

    const title = (state.lang === "gu" && item.titleGu) ? item.titleGu : item.title;
    const desc = (state.lang === "gu" && item.descriptionGu) ? item.descriptionGu : item.description;
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;

    lightboxImg.src = item.image;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxCategory.textContent = getCategoryName(item.category);
    lightboxPrice.textContent = item.priceEstimate || "Bespoke";
    lightboxDesc.textContent = desc;

    if (lightboxOrderBtn) {
      lightboxOrderBtn.textContent = t.btnOrderThis;
      lightboxOrderBtn.onclick = () => {
        closeLightbox();
        initiateOrderForDesign(title, item.category);
      };
    }

    if (lightboxEnquireBtn) {
      lightboxEnquireBtn.textContent = t.btnEnquire;
      lightboxEnquireBtn.onclick = () => {
        const msg = `Hello Ambica Tailor! I am interested in this design: *${title}* (${item.priceEstimate || ""}). Could you please share more details?`;
        window.open(`https://wa.me/${CONFIG.PHONE_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
      };
    }
  }

  function navigateLightbox(dir) {
    const total = state.filteredDesigns.length;
    if (total <= 1) return;
    state.lightboxIndex = (state.lightboxIndex + dir + total) % total;
    updateLightboxContent();
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener("click", () => navigateLightbox(-1));
  if (lightboxNextBtn) lightboxNextBtn.addEventListener("click", () => navigateLightbox(1));

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard navigation for Lightbox
  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });

  // Touch Swipe on Lightbox for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  if (lightbox) {
    lightbox.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleLightboxSwipe();
    }, { passive: true });
  }

  function handleLightboxSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        navigateLightbox(-1); // Swipe Right -> Prev
      } else {
        navigateLightbox(1);  // Swipe Left -> Next
      }
    }
  }

  // Hook: Order a specific design from card/lightbox
  function initiateOrderForDesign(designTitle, category) {
    const orderSection = document.getElementById("order");
    const itemSelect = document.getElementById("orderItemType");
    const notesInput = document.getElementById("orderNotes");
    const nameInput = document.getElementById("orderName");

    if (itemSelect) {
      // Map category to select value
      if (category === "blouses") itemSelect.value = "Blouse (Simple / Designer / Bridal)";
      else if (category === "dresses") itemSelect.value = "Dress / Anarkali / Suit";
      else if (category === "kurtis") itemSelect.value = "Kurti / Tunics";
      else if (category === "gowns") itemSelect.value = "Gown / Indo-Western";
      else itemSelect.value = "Other / Multiple items";
    }

    if (notesInput) {
      const existing = notesInput.value.trim();
      const refText = `Reference Design: "${designTitle}"`;
      if (!existing.includes(designTitle)) {
        notesInput.value = existing ? `${existing} | ${refText}` : refText;
      }
    }

    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        if (nameInput) nameInput.focus();
      }, 600);
    }
  }

  // ------------------------------------------------------------------------
  // 6. Prices Table Rendering
  // ------------------------------------------------------------------------
  function renderPrices() {
    if (!pricesTableBody) return;
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;

    pricesTableBody.innerHTML = state.prices.map(item => {
      const name = (state.lang === "gu" && item.nameGu) ? item.nameGu : item.name;
      const details = (state.lang === "gu" && item.detailsGu) ? item.detailsGu : item.details;
      return `
        <tr>
          <td>
            <div class="price-item-name">${name}</div>
          </td>
          <td>
            <div class="price-item-tag">₹${item.price}</div>
            <div class="price-item-unit">${item.unit || "starting"}</div>
          </td>
          <td>
            <div class="price-item-details">${details}</div>
          </td>
          <td>
            <button type="button" class="btn btn-magenta" style="padding: 0.45rem 1rem; font-size: 0.85rem;" data-book-price="${name}">
              ${t.btnBookThisPrice}
            </button>
          </td>
        </tr>
      `;
    }).join("");

    pricesTableBody.querySelectorAll("[data-book-price]").forEach(btn => {
      btn.addEventListener("click", () => {
        const itemType = btn.getAttribute("data-book-price");
        const orderSection = document.getElementById("order");
        const notesInput = document.getElementById("orderNotes");
        const nameInput = document.getElementById("orderName");

        if (notesInput) {
          notesInput.value = `Selected Price Category: ${itemType}`;
        }
        if (orderSection) {
          orderSection.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            if (nameInput) nameInput.focus();
          }, 600);
        }
      });
    });
  }

  // ------------------------------------------------------------------------
  // 7. Measurement Guide Tabs & WhatsApp Formatter
  // ------------------------------------------------------------------------
  guideTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");
      guideTabs.forEach(t => t.classList.remove("active"));
      guideTabContents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      const targetContent = document.getElementById(target);
      if (targetContent) targetContent.classList.add("active");
    });
  });

  // Format & send blouse measurements to WhatsApp
  if (sendBlouseMeasureBtn) {
    sendBlouseMeasureBtn.addEventListener("click", () => {
      const name = document.getElementById("mb_name")?.value.trim() || "Customer";
      const bust = document.getElementById("mb_bust")?.value.trim() || "-";
      const waist = document.getElementById("mb_waist")?.value.trim() || "-";
      const length = document.getElementById("mb_length")?.value.trim() || "-";
      const shoulder = document.getElementById("mb_shoulder")?.value.trim() || "-";
      const sleeve = document.getElementById("mb_sleeve")?.value.trim() || "-";
      const armhole = document.getElementById("mb_armhole")?.value.trim() || "-";
      const frontNeck = document.getElementById("mb_front_neck")?.value.trim() || "-";
      const backNeck = document.getElementById("mb_back_neck")?.value.trim() || "-";
      const unit = document.getElementById("mb_unit")?.value || "inches";

      const message = 
`*Ambica Ladies Tailor - Blouse Measurement Submission*
----------------------------------------
👤 *Customer Name:* ${name}
📏 *Measurement Unit:* ${unit}

• *Bust / Chest:* ${bust} ${unit}
• *Natural Waist (Underbust):* ${waist} ${unit}
• *Full Length:* ${length} ${unit}
• *Shoulder Width:* ${shoulder} ${unit}
• *Sleeve Length:* ${sleeve} ${unit}
• *Armhole:* ${armhole} ${unit}
• *Front Neck Depth:* ${frontNeck} ${unit}
• *Back Neck Depth:* ${backNeck} ${unit}
----------------------------------------
_Sent from Ambica Tailor Measurement Guide_`;

      const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;
      showToast(t.measureSuccessAlert);
      window.open(`https://wa.me/${CONFIG.PHONE_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    });
  }

  // Format & send dress/kurti measurements to WhatsApp
  if (sendDressMeasureBtn) {
    sendDressMeasureBtn.addEventListener("click", () => {
      const name = document.getElementById("md_name")?.value.trim() || "Customer";
      const garment = document.getElementById("md_garment")?.value || "Dress / Kurti";
      const bust = document.getElementById("md_bust")?.value.trim() || "-";
      const waist = document.getElementById("md_waist")?.value.trim() || "-";
      const hip = document.getElementById("md_hip")?.value.trim() || "-";
      const length = document.getElementById("md_length")?.value.trim() || "-";
      const shoulder = document.getElementById("md_shoulder")?.value.trim() || "-";
      const sleeve = document.getElementById("md_sleeve")?.value.trim() || "-";
      const armhole = document.getElementById("md_armhole")?.value.trim() || "-";
      const unit = document.getElementById("md_unit")?.value || "inches";

      const message = 
`*Ambica Ladies Tailor - Dress / Kurti Measurement Submission*
----------------------------------------
👤 *Customer Name:* ${name}
👗 *Garment Type:* ${garment}
📏 *Measurement Unit:* ${unit}

• *Bust / Chest:* ${bust} ${unit}
• *Natural Waist:* ${waist} ${unit}
• *Hip / Seat:* ${hip} ${unit}
• *Full Length:* ${length} ${unit}
• *Shoulder Width:* ${shoulder} ${unit}
• *Sleeve Length:* ${sleeve} ${unit}
• *Armhole:* ${armhole} ${unit}
----------------------------------------
_Sent from Ambica Tailor Measurement Guide_`;

      const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;
      showToast(t.measureSuccessAlert);
      window.open(`https://wa.me/${CONFIG.PHONE_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    });
  }

  // ------------------------------------------------------------------------
  // 8. Order Form Validation & WhatsApp Submission
  // ------------------------------------------------------------------------
  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;
      const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;

      // Inputs
      const nameInput = document.getElementById("orderName");
      const phoneInput = document.getElementById("orderPhone");
      const itemSelect = document.getElementById("orderItemType");
      const dateInput = document.getElementById("orderDate");
      const notesInput = document.getElementById("orderNotes");
      const photoRefCheckbox = document.getElementById("orderPhotoRef");

      // Clear errors
      document.querySelectorAll("#orderForm .form-control").forEach(inp => inp.classList.remove("error"));
      document.querySelectorAll("#orderForm .form-error-msg").forEach(msg => {
        msg.classList.remove("visible");
        msg.textContent = "";
      });

      // Validate Name
      const nameVal = nameInput.value.trim();
      if (!nameVal) {
        showFieldError(nameInput, "errOrderName", t.errNameRequired);
        isValid = false;
      }

      // Validate Phone (10 digits)
      const phoneVal = phoneInput.value.replace(/\D/g, "");
      if (phoneVal.length < 10) {
        showFieldError(phoneInput, "errOrderPhone", t.errPhoneInvalid);
        isValid = false;
      }

      // Validate Garment selection
      const itemVal = itemSelect.value;
      if (!itemVal) {
        showFieldError(itemSelect, "errOrderItem", t.errItemRequired);
        isValid = false;
      }

      // Validate Date (must not be in past)
      const dateVal = dateInput.value;
      if (!dateVal) {
        showFieldError(dateInput, "errOrderDate", "Please pick a required date.");
        isValid = false;
      } else {
        const pickedDate = new Date(dateVal);
        pickedDate.setHours(0, 0, 0, 0);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (pickedDate < today) {
          showFieldError(dateInput, "errOrderDate", t.errDatePast);
          isValid = false;
        }
      }

      if (!isValid) return;

      // Format WhatsApp Message
      const hasPhoto = photoRefCheckbox && photoRefCheckbox.checked
        ? "Yes (I will attach the image in our WhatsApp chat)"
        : "No photo reference";

      const formattedMessage = 
`*New Custom Stitching Order - Ambica Ladies Tailor*
━━━━━━━━━━━━━━━━━━━━
👤 *Customer Name:* ${nameVal}
📱 *Phone Number:* ${phoneVal}
👗 *Garment Required:* ${itemVal}
📅 *Needed By Date:* ${dateVal}
✂️ *Design / Fabric Notes:* ${notesInput.value.trim() || "Will discuss on call / chat"}
📸 *Reference Photo:* ${hasPhoto}
━━━━━━━━━━━━━━━━━━━━
_Submitted via Ambica Ladies Tailor Website_`;

      showToast("Preparing WhatsApp message...");
      window.open(`https://wa.me/${CONFIG.PHONE_NUMBER}?text=${encodeURIComponent(formattedMessage)}`, "_blank");
    });
  }

  // ------------------------------------------------------------------------
  // 9. Book a Fitting (Shop Visit) with Sunday Validation
  // ------------------------------------------------------------------------
  // Enforce minimum date of today on date inputs
  const todayStr = new Date().toISOString().split("T")[0];
  if (bookingDateInput) {
    bookingDateInput.setAttribute("min", todayStr);
    bookingDateInput.addEventListener("change", () => {
      checkSundayBooking(bookingDateInput.value);
    });
  }

  const orderDateInput = document.getElementById("orderDate");
  if (orderDateInput) {
    orderDateInput.setAttribute("min", todayStr);
  }

  function checkSundayBooking(dateVal) {
    if (!dateVal) return true;
    const parts = dateVal.split("-");
    const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;
    if (dateObj.getDay() === 0) { // Sunday = 0
      showFieldError(bookingDateInput, "errBookDate", t.errDateSunday);
      return false;
    } else {
      clearFieldError(bookingDateInput, "errBookDate");
      return true;
    }
  }

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;
      const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;

      const dateVal = bookingDateInput.value;
      const timeSelect = document.getElementById("bookTime");
      const nameInput = document.getElementById("bookName");
      const phoneInput = document.getElementById("bookPhone");
      const purposeSelect = document.getElementById("bookPurpose");

      // Validate Sunday & Date
      if (!dateVal) {
        showFieldError(bookingDateInput, "errBookDate", "Please select a date.");
        isValid = false;
      } else if (!checkSundayBooking(dateVal)) {
        isValid = false;
      }

      // Validate Time
      if (!timeSelect.value) {
        showFieldError(timeSelect, "errBookTime", t.errSlotRequired);
        isValid = false;
      }

      // Validate Name
      const nameVal = nameInput.value.trim();
      if (!nameVal) {
        showFieldError(nameInput, "errBookName", t.errNameRequired);
        isValid = false;
      }

      // Validate Phone
      const phoneVal = phoneInput.value.replace(/\D/g, "");
      if (phoneVal.length < 10) {
        showFieldError(phoneInput, "errBookPhone", t.errPhoneInvalid);
        isValid = false;
      }

      if (!isValid) return;

      const message = 
`*Fitting & Shop Visit Appointment - Ambica Ladies Tailor*
━━━━━━━━━━━━━━━━━━━━
👤 *Customer Name:* ${nameVal}
📱 *Phone Number:* ${phoneVal}
📅 *Preferred Date:* ${dateVal}
⏰ *Time Slot:* ${timeSelect.value}
🎯 *Purpose of Visit:* ${purposeSelect.value}
━━━━━━━━━━━━━━━━━━━━
_Please confirm my fitting reservation. Thank you!_`;

      showToast("Reserving your fitting slot...");
      window.open(`https://wa.me/${CONFIG.PHONE_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    });
  }

  function showFieldError(inputEl, errorId, text) {
    if (inputEl) inputEl.classList.add("error");
    const errEl = document.getElementById(errorId);
    if (errEl) {
      errEl.textContent = text;
      errEl.classList.add("visible");
    }
  }

  function clearFieldError(inputEl, errorId) {
    if (inputEl) inputEl.classList.remove("error");
    const errEl = document.getElementById(errorId);
    if (errEl) {
      errEl.textContent = "";
      errEl.classList.remove("visible");
    }
  }

  // ------------------------------------------------------------------------
  // 10. Customer Reviews Slider
  // ------------------------------------------------------------------------
  function renderReviews() {
    if (!reviewsTrack) return;

    reviewsTrack.innerHTML = INITIAL_REVIEWS.map((rev) => {
      const author = (state.lang === "gu" && rev.nameGu) ? rev.nameGu : rev.name;
      const outfit = (state.lang === "gu" && rev.outfitGu) ? rev.outfitGu : rev.outfit;
      const comment = (state.lang === "gu" && rev.commentGu) ? rev.commentGu : rev.comment;

      return `
        <div class="review-slide">
          <div class="review-card">
            <div class="review-quote-mark">“</div>
            <div class="review-stars">★★★★★</div>
            <p class="review-text">"${comment}"</p>
            <h4 class="review-author">${author}</h4>
            <p class="review-outfit">${outfit}</p>
          </div>
        </div>
      `;
    }).join("");

    // Render dot indicators
    if (reviewsDotsContainer) {
      reviewsDotsContainer.innerHTML = INITIAL_REVIEWS.map((_, i) => `
        <button type="button" class="review-dot ${i === state.reviewsIndex ? 'active' : ''}" data-review-dot="${i}" aria-label="Go to review ${i + 1}"></button>
      `).join("");

      reviewsDotsContainer.querySelectorAll(".review-dot").forEach(dot => {
        dot.addEventListener("click", () => {
          const idx = parseInt(dot.getAttribute("data-review-dot"), 10);
          goToReview(idx);
        });
      });
    }

    updateReviewsPosition();
  }

  function updateReviewsPosition() {
    if (!reviewsTrack) return;
    reviewsTrack.style.transform = `translateX(-${state.reviewsIndex * 100}%)`;
    if (reviewsDotsContainer) {
      const dots = reviewsDotsContainer.querySelectorAll(".review-dot");
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === state.reviewsIndex);
      });
    }
  }

  function goToReview(index) {
    const total = INITIAL_REVIEWS.length;
    state.reviewsIndex = (index + total) % total;
    updateReviewsPosition();
  }

  function startReviewAutoplay() {
    stopReviewAutoplay();
    state.reviewTimer = setInterval(() => {
      if (!state.isReviewPaused) {
        goToReview(state.reviewsIndex + 1);
      }
    }, 5500);
  }

  function stopReviewAutoplay() {
    if (state.reviewTimer) {
      clearInterval(state.reviewTimer);
      state.reviewTimer = null;
    }
  }

  if (reviewPrevBtn) {
    reviewPrevBtn.addEventListener("click", () => goToReview(state.reviewsIndex - 1));
  }

  if (reviewNextBtn) {
    reviewNextBtn.addEventListener("click", () => goToReview(state.reviewsIndex + 1));
  }

  const reviewsSection = document.getElementById("reviews");
  if (reviewsSection) {
    reviewsSection.addEventListener("mouseenter", () => { state.isReviewPaused = true; });
    reviewsSection.addEventListener("mouseleave", () => { state.isReviewPaused = false; });
    reviewsSection.addEventListener("focusin", () => { state.isReviewPaused = true; });
    reviewsSection.addEventListener("focusout", () => { state.isReviewPaused = false; });
  }

  // ------------------------------------------------------------------------
  // 11. FAQ Accordion Rendering
  // ------------------------------------------------------------------------
  function renderFaqs() {
    if (!faqContainer) return;

    faqContainer.innerHTML = INITIAL_FAQS.map((faq, index) => {
      const question = (state.lang === "gu" && faq.questionGu) ? faq.questionGu : faq.question;
      const answer = (state.lang === "gu" && faq.answerGu) ? faq.answerGu : faq.answer;

      return `
        <div class="faq-item" data-faq-index="${index}">
          <button type="button" class="faq-question-btn" aria-expanded="false" id="faq-btn-${index}" aria-controls="faq-ans-${index}">
            <span>${question}</span>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="faq-answer" id="faq-ans-${index}" role="region" aria-labelledby="faq-btn-${index}">
            <div class="faq-answer-inner">${answer}</div>
          </div>
        </div>
      `;
    }).join("");

    faqContainer.querySelectorAll(".faq-question-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const isOpen = item.classList.contains("open");

        // Close other items for a clean accordion experience
        faqContainer.querySelectorAll(".faq-item").forEach(other => {
          if (other !== item) {
            other.classList.remove("open");
            const otherBtn = other.querySelector(".faq-question-btn");
            if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          }
        });

        item.classList.toggle("open", !isOpen);
        btn.setAttribute("aria-expanded", !isOpen);
      });
    });
  }

  // ------------------------------------------------------------------------
  // 12. Storage Sync (Sync with Admin changes across tabs)
  // ------------------------------------------------------------------------
  window.addEventListener("storage", (e) => {
    if (e.key === CONFIG.STORAGE_KEY_DESIGNS) {
      state.designs = getStoredDesigns();
      renderDesigns();
    }
    if (e.key === CONFIG.STORAGE_KEY_PRICES) {
      state.prices = getStoredPrices();
      renderPrices();
    }
  });

  // ------------------------------------------------------------------------
  // 13. Initialization
  // ------------------------------------------------------------------------
  applyTheme(state.theme);
  setLanguage(state.lang);
  startReviewAutoplay();
});
