// === VITRIEN — app.js ===
(function () {
  console.log("app.js geladen");

  // ---------- Drawer / hamburger ----------
  window.toggleDrawer = function () {
    const d = document.getElementById('drawer');
    if (d) d.classList.toggle('open');
  };

  // ---------- Taal wissel ----------
  function applyLang(lang) {
    // 1) Vervang alle teksten met data-lang-nl / data-lang-en
    document.querySelectorAll('[data-lang-nl],[data-lang-en]').forEach(el => {
      const key = `data-lang-${lang}`;
      const val = el.getAttribute(key);
      if (val !== null) {
        // Gebruik textContent om veilig te vervangen (data-attributen zijn plain text)
        el.textContent = val;
      }
    });

    // 2) Active-state op ALLE taalknoppen (desktop + mobile)
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      const btnLang = (btn.dataset.lang || btn.textContent).trim().toLowerCase();
      btn.classList.toggle('active', btnLang === lang);
    });

    // 3) Onthoud keuze
    try { localStorage.setItem('vitrien_lang', lang); } catch {}
  }

  // Globale functie voor inline onclick="setLang('nl')"
  window.setLang = function (lang) {
    lang = (lang || 'nl').toLowerCase();
    if (lang !== 'nl' && lang !== 'en') lang = 'nl';
    applyLang(lang);
  };

  // Init bij paginalaad (bewaarde taal of NL)
  document.addEventListener('DOMContentLoaded', () => {
    let lang = 'nl';
    try { lang = (localStorage.getItem('vitrien_lang') || 'nl').toLowerCase(); } catch {}
    applyLang(lang);

    // (Extra) werk ook zonder inline onclick: voeg listeners toe
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', () => {
        const btnLang = (btn.dataset.lang || btn.textContent).trim().toLowerCase();
        setLang(btnLang);
        // Sluit drawer op mobiel na keuze
        const d = document.getElementById('drawer');
        if (d && d.classList.contains('open')) d.classList.remove('open');
      });
    });
  });
})();