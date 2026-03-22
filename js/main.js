/**
 * main.js — Maud Fasel, maudsvoice.com
 * Shared JavaScript: mobile nav, language switcher, YouTube facade,
 * demo filtering, and scroll-triggered fade-ins.
 */

// ── Mobile navigation ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  // Apply saved language preference on every page load
  var savedLang = 'en';
  try { savedLang = localStorage.getItem('maud_lang') || 'en'; } catch (e) {}
  if (savedLang !== 'en') applyLang(savedLang);

  var btn  = document.getElementById('mobile-menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var hidden = menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!hidden));
    });
  }

  // ── Fade-in on scroll ──────────────────────────────────────────────────────
  var fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    fadeEls.forEach(function (el) { obs.observe(el); });
  } else {
    // Fallback for older browsers
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ── Demo language filter (demos.html only) ─────────────────────────────────
  var filterBtns = document.querySelectorAll('.lang-tab');
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        // Update active button style
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        // Show/hide demo cards
        var cards = document.querySelectorAll('.demo-card');
        cards.forEach(function (card) {
          var cardLang = card.getAttribute('data-lang');
          if (lang === 'all' || cardLang === lang) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});

// ── i18n: apply translations ──────────────────────────────────────────────────
// Reads window.I18N (from i18n.js) and swaps all data-i18n / data-i18n-html /
// data-i18n-placeholder elements to the requested language.
function applyLang(lang) {
  var t = (window.I18N && (window.I18N[lang] || window.I18N['en'])) || {};
  // textContent replacements
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // innerHTML replacements (for elements containing <em>, <br>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // placeholder attribute replacements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });
  // keep the html[lang] attribute in sync for accessibility / SEO
  document.documentElement.lang = lang;
}

// ── Language switcher ─────────────────────────────────────────────────────────
// Called by onclick on language switcher links; saves the preference and
// immediately applies translations to the current page.
function setLang(lang) {
  try { localStorage.setItem('maud_lang', lang); } catch (e) {}
  applyLang(lang);
}

// ── YouTube facade ────────────────────────────────────────────────────────────
// Replaces a thumbnail container with a live YouTube iframe on click.
// Usage: onclick="loadYouTube(this, 'VIDEO_ID')"
function loadYouTube(container, videoId) {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none;';
  // Container must have position:relative and padding-top:56.25% (handled by .yt-container)
  container.innerHTML = '';
  container.appendChild(iframe);
}
