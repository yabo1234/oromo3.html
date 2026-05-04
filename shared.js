/* shared.js — Language toggle + dark-mode logic shared across all pages */

(function () {
  /* ── helpers ─────────────────────────────────────────────── */
  function qs(id) { return document.getElementById(id); }

  /* ── Language ────────────────────────────────────────────── */
  window.setLang = function (lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('onv-lang', lang);

    var btnEn = qs('btn-en');
    var btnOm = qs('btn-om');
    if (btnEn) {
      btnEn.classList.toggle('active', lang === 'en');
      btnEn.setAttribute('aria-pressed', String(lang === 'en'));
    }
    if (btnOm) {
      btnOm.classList.toggle('active', lang === 'om');
      btnOm.setAttribute('aria-pressed', String(lang === 'om'));
    }
  };

  /* ── Dark mode ───────────────────────────────────────────── */
  window.setTheme = function (theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('onv-theme', theme);

    var btn = qs('btn-theme');
    if (btn) {
      btn.setAttribute('aria-pressed', String(theme === 'dark'));
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  };

  window.toggleTheme = function () {
    var current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  };

  /* ── Hamburger nav ───────────────────────────────────────── */
  window.toggleNav = function () {
    var nav = document.querySelector('.site-nav');
    if (!nav) return;
    var open = nav.classList.toggle('open');
    var btn = qs('btn-nav');
    if (btn) {
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? '✕' : '☰';
    }
  };

  /* ── Initialise on DOMContentLoaded ─────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    /* Year placeholder */
    var yearEl = qs('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* Restore saved language (default: en) */
    var savedLang = localStorage.getItem('onv-lang') || 'en';
    setLang(savedLang);

    /* Respect OS dark-mode preference, but let explicit choice override */
    var savedTheme = localStorage.getItem('onv-theme');
    if (!savedTheme) {
      savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    setTheme(savedTheme);

    /* ── Search ──────────────────────────────────────────── */
    var searchInput = qs('search-input');
    if (searchInput) {
      /* Cache lowercased text at load time for fast filtering */
      var cardEntries = Array.prototype.map.call(
        document.querySelectorAll('.card'),
        function (card) { return { el: card, text: card.textContent.toLowerCase() }; }
      );

      searchInput.addEventListener('input', function () {
        var q = this.value.trim().toLowerCase();
        cardEntries.forEach(function (entry) {
          entry.el.style.display = (!q || entry.text.includes(q)) ? '' : 'none';
        });
      });
    }

    /* ── Newsletter form ─────────────────────────────────── */
    var nlForm = qs('newsletter-form');
    if (nlForm) {
      nlForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var emailInput = nlForm.querySelector('input[type="email"]');
        var msg = qs('newsletter-msg');
        if (emailInput && emailInput.value && msg) {
          var lang = document.documentElement.lang;
          msg.textContent = lang === 'om'
            ? 'Galatoomi! Imeeliin keessan galmeeffameera.'
            : 'Thank you! Your email has been registered.';
          msg.hidden = false;
          emailInput.value = '';
        }
      });
    }
  });
}());
