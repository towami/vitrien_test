// === VITRIEN — app.js ===
(function () {
  // ---------- Drawer / hamburger ----------
  window.toggleDrawer = function () {
    const d = document.getElementById('drawer');
    if (d) d.classList.toggle('open');
  };

  // ---------- Taal wissel ----------
  function applyLang(lang) {
    // Vervang alle teksten op basis van data-lang-nl / data-lang-en
    document.querySelectorAll('[data-lang-nl],[data-lang-en]').forEach(el => {
      const txt = el.getAttribute(`data-lang-${lang}`);
      if (txt !== null) el.textContent = txt;
    });

    // Active state op alle NL/EN knoppen (desktop + mobile)
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      const isActive = btn.textContent.trim().toLowerCase() === lang;
      btn.classList.toggle('active', isActive);
    });

    // Onthoud keuze
    try { localStorage.setItem('vitrien_lang', lang); } catch {}
  }

  // Maak setLang globaal voor inline onclick="setLang('nl')"
  window.setLang = function (lang) {
    lang = (lang || 'nl').toLowerCase();
    if (lang !== 'nl' && lang !== 'en') lang = 'nl';
    applyLang(lang);
  };

  // Init bij paginalaad (gebruik bewaarde taal of NL)
  document.addEventListener('DOMContentLoaded', () => {
    let lang = 'nl';
    try { lang = (localStorage.getItem('vitrien_lang') || 'nl').toLowerCase(); } catch {}
    window.setLang(lang);
  });
})();