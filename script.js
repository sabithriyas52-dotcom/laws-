/**
 * script.js — Constitution of India Website
 * Handles navigation, rendering, search, and UI interactions.
 * Requires: data.js to be loaded first.
 */

/* ─────────────────────────────────────────────
   STATE
───────────────────────────────────────────── */
let currentPageId = "preamble";

/* ─────────────────────────────────────────────
   DOM REFS (resolved after DOMContentLoaded)
───────────────────────────────────────────── */
let $navMenu, $contentInner, $searchInput, $searchClear,
    $searchOverlay, $searchResults, $sidebar, $menuToggle;

/* ─────────────────────────────────────────────
   INIT
───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  $navMenu       = document.getElementById("navMenu");
  $contentInner  = document.getElementById("contentInner");
  $searchInput   = document.getElementById("searchInput");
  $searchClear   = document.getElementById("searchClear");
  $searchOverlay = document.getElementById("searchOverlay");
  $searchResults = document.getElementById("searchResults");
  $sidebar       = document.getElementById("sidebar");
  $menuToggle    = document.getElementById("menuToggle");

  buildNav();
  renderPage("preamble");
  bindEvents();
});

/* ─────────────────────────────────────────────
   BUILD NAVIGATION SIDEBAR
───────────────────────────────────────────── */
function buildNav() {
  $navMenu.innerHTML = NAV_STRUCTURE.map(section => `
    <div class="nav-section">
      <div class="nav-section-title">${section.section}</div>
      ${section.items.map(item => `
        <div
          class="nav-item"
          id="nav-${item.id}"
          data-page="${item.id}"
          role="button"
          tabindex="0"
          aria-label="Go to ${item.label}"
        >
          <span class="nav-icon" aria-hidden="true">${item.icon}</span>
          ${item.label}
        </div>
      `).join("")}
    </div>
  `).join("");

  // Click handlers
  $navMenu.querySelectorAll(".nav-item").forEach(el => {
    el.addEventListener("click", () => {
      const pageId = el.dataset.page;
      renderPage(pageId);
      // Close sidebar on mobile
      if (window.innerWidth <= 768) {
        $sidebar.classList.remove("open");
      }
    });
    el.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        el.click();
      }
    });
  });
}

/* ─────────────────────────────────────────────
   RENDER A PAGE
───────────────────────────────────────────── */
function renderPage(pageId) {
  const page = PAGES[pageId];
  if (!page) return;

  currentPageId = pageId;

  // Update active nav state
  document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
  const activeNav = document.getElementById("nav-" + pageId);
  if (activeNav) {
    activeNav.classList.add("active");
    // Scroll nav item into view
    activeNav.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  // Build breadcrumb
  const breadcrumb = buildBreadcrumb(pageId);

  // Build prev/next buttons
  const prevNext = buildPrevNext(pageId);

  // Render content
  $contentInner.innerHTML = `
    ${breadcrumb}
    <div class="article-header">
      <div class="article-tag">${escapeHtml(page.tag)}</div>
      <h1>${escapeHtml(page.title)}</h1>
      <p class="article-meta">${escapeHtml(page.meta)}</p>
    </div>
    ${page.html}
    ${prevNext}
  `;

  // Scroll main content to top
  document.getElementById("mainContent").scrollTo({ top: 0, behavior: "smooth" });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ─────────────────────────────────────────────
   BREADCRUMB
───────────────────────────────────────────── */
function buildBreadcrumb(pageId) {
  const page = PAGES[pageId];
  const isHome = pageId === "preamble";

  if (isHome) {
    return `<nav class="breadcrumb" aria-label="Breadcrumb">
      <span>🏛 Home</span>
    </nav>`;
  }

  return `<nav class="breadcrumb" aria-label="Breadcrumb">
    <span class="breadcrumb-item" onclick="renderPage('preamble')" tabindex="0" role="button" aria-label="Go to home">🏛 Home</span>
    <span class="breadcrumb-sep">›</span>
    <span>${escapeHtml(page.tag)}</span>
  </nav>`;
}

/* ─────────────────────────────────────────────
   PREV / NEXT NAVIGATION
───────────────────────────────────────────── */
function buildPrevNext(pageId) {
  const idx = PAGE_ORDER.indexOf(pageId);
  if (idx === -1) return "";

  const prevId = idx > 0 ? PAGE_ORDER[idx - 1] : null;
  const nextId = idx < PAGE_ORDER.length - 1 ? PAGE_ORDER[idx + 1] : null;

  const prevBtn = prevId
    ? `<button class="btn-prev" onclick="renderPage('${prevId}')" aria-label="Previous page: ${PAGES[prevId].title}">
        ← ${escapeHtml(PAGES[prevId].title)}
       </button>`
    : `<span></span>`;

  const nextBtn = nextId
    ? `<button class="btn-next" onclick="renderPage('${nextId}')" aria-label="Next page: ${PAGES[nextId].title}">
        ${escapeHtml(PAGES[nextId].title)} →
       </button>`
    : `<span></span>`;

  return `<div class="page-footer-nav" role="navigation" aria-label="Page navigation">${prevBtn}${nextBtn}</div>`;
}

/* ─────────────────────────────────────────────
   SEARCH
───────────────────────────────────────────── */
function handleSearch(query) {
  const q = query.trim().toLowerCase();

  $searchClear.classList.toggle("visible", q.length > 0);

  if (!q) {
    closeSearch();
    return;
  }

  openSearch();

  const results = SEARCH_INDEX.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.keywords.toLowerCase().includes(q) ||
    item.tag.toLowerCase().includes(q)
  );

  if (results.length === 0) {
    $searchResults.innerHTML = `
      <div class="search-no-results">
        <p>No results found for "<strong>${escapeHtml(query)}</strong>".</p>
        <p style="margin-top:6px; font-size:12px;">Try searching for: equality, freedom, writ, amendment, parliament…</p>
      </div>`;
    return;
  }

  $searchResults.innerHTML = results.map(item => `
    <div
      class="search-result-item"
      onclick="selectSearchResult('${item.id}')"
      role="button"
      tabindex="0"
      aria-label="Go to ${item.title}"
    >
      <div class="search-result-tag">${escapeHtml(item.tag)}</div>
      <div class="search-result-title">${highlightMatch(item.title, q)}</div>
      <div class="search-result-desc">${highlightMatch(truncate(item.keywords, 100), q)}</div>
    </div>
  `).join("");

  $searchResults.querySelectorAll(".search-result-item").forEach(el => {
    el.addEventListener("keydown", e => {
      if (e.key === "Enter") el.click();
    });
  });
}

function selectSearchResult(pageId) {
  closeSearch();
  $searchInput.value = "";
  $searchClear.classList.remove("visible");
  renderPage(pageId);
}

function openSearch() {
  $searchOverlay.classList.add("active");
}

function closeSearch() {
  $searchOverlay.classList.remove("active");
}

/* ─────────────────────────────────────────────
   HIGHLIGHT MATCH IN TEXT
───────────────────────────────────────────── */
function highlightMatch(text, query) {
  const escaped = escapeHtml(text);
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return escaped.replace(new RegExp(`(${escapedQuery})`, "gi"), "<mark style='background:#fff3cd;'>$1</mark>");
}

/* ─────────────────────────────────────────────
   BIND EVENTS
───────────────────────────────────────────── */
function bindEvents() {
  // Search input
  $searchInput.addEventListener("input", e => handleSearch(e.target.value));
  $searchInput.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeSearch();
      $searchInput.value = "";
      $searchClear.classList.remove("visible");
      $searchInput.blur();
    }
  });

  // Clear search
  $searchClear.addEventListener("click", () => {
    $searchInput.value = "";
    $searchClear.classList.remove("visible");
    closeSearch();
    $searchInput.focus();
  });

  // Click outside search overlay
  $searchOverlay.addEventListener("click", e => {
    if (e.target === $searchOverlay) {
      closeSearch();
    }
  });

  // Mobile menu toggle
  $menuToggle.addEventListener("click", () => {
    $sidebar.classList.toggle("open");
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", e => {
    if (window.innerWidth <= 768 &&
        $sidebar.classList.contains("open") &&
        !$sidebar.contains(e.target) &&
        !$menuToggle.contains(e.target)) {
      $sidebar.classList.remove("open");
    }
  });

  // Keyboard shortcut: Ctrl/Cmd + K to focus search
  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      $searchInput.focus();
      $searchInput.select();
    }
  });
}

/* ─────────────────────────────────────────────
   UTILITIES
───────────────────────────────────────────── */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function truncate(str, maxLen) {
  if (!str) return "";
  return str.length > maxLen ? str.slice(0, maxLen) + "…" : str;
}
