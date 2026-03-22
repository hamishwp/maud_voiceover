/**
 * lang-detect.js
 * Runs in <head> before page renders.
 * 1. If the user has saved a language preference, redirect to it.
 * 2. Otherwise auto-detect from browser language (on root page only).
 * 3. Fall back to English.
 *
 * Supported languages: en (root /), fr (/fr/), de (/de/), it (/it/)
 */
(function () {
  var SUPPORTED = ['fr', 'de', 'it']; // English is root — no redirect needed
  var path = window.location.pathname;

  function onLangPage(lang) {
    if (lang === 'en') {
      return !path.includes('/fr/') && !path.includes('/de/') && !path.includes('/it/');
    }
    return path.includes('/' + lang + '/');
  }

  function redirectTo(lang) {
    if (window.location.protocol === 'file:') {
      // file:// — build an absolute file URL relative to the site root
      var href = window.location.href.split('?')[0].split('#')[0];
      var dir = href.substring(0, href.lastIndexOf('/') + 1);
      // If currently inside a language subdir, go up one level to reach site root
      if (/\/(fr|de|it)\/$/.test(dir)) {
        dir = dir.substring(0, dir.lastIndexOf('/', dir.length - 2) + 1);
      }
      window.location.replace(lang === 'en' ? dir + 'index.html' : dir + lang + '/index.html');
      return;
    }
    // Web server — use root-relative paths
    if (lang === 'en') { window.location.replace('/'); return; }
    window.location.replace('/' + lang + '/');
  }

  // Only redirect from index pages — demos/about/services/clients/contact
  // have no language variants, so redirecting there traps the user in a loop.
  var isIndexPage = path === '/' || path.endsWith('/index.html');
  if (!isIndexPage) return;

  // 1. Saved preference
  try {
    var saved = localStorage.getItem('maud_lang');
    if (saved) {
      if (!onLangPage(saved)) redirectTo(saved);
      return;
    }
  } catch (e) { /* localStorage blocked */ }

  // 2. Auto-detect — only on the root index to avoid redirect loops
  var isRoot = path === '/' || path === '/index.html' ||
    (window.location.protocol === 'file:' && !path.match(/\/(fr|de|it)\/index\.html$/));
  if (!isRoot) return;

  var langs = [];
  if (navigator.languages && navigator.languages.length) {
    langs = Array.prototype.slice.call(navigator.languages);
  } else if (navigator.language) {
    langs = [navigator.language];
  }

  for (var i = 0; i < langs.length; i++) {
    var code = langs[i].toLowerCase().split('-')[0];
    if (SUPPORTED.indexOf(code) !== -1) {
      redirectTo(code);
      return;
    }
  }
  // 3. Default: stay on English (do nothing)
})();
