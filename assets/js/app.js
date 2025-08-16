// ==============================
// VITRIEN – APP.JS
// ==============================
// Dit bestand bevat de JavaScript logica voor de website
// - Burger menu toggle
// - Mobiele drawer menu open/dicht
// - Taal switch functionaliteit
// ==============================

// BURGER MENU + DRAWER
const burger = document.querySelector('.burger');
const drawer = document.querySelector('.drawer');

if (burger && drawer) {
  burger.addEventListener('click', () => {
    drawer.classList.toggle('open');
    burger.classList.toggle('active');
  });
}

// TAAL SWITCH
const langButtons = document.querySelectorAll('.lang-switch button');

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Active state wisselen
    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Hier kan je logica toevoegen om content te vervangen met NL/EN
    const selectedLang = btn.dataset.lang;
    console.log('Selected language:', selectedLang);
    // TODO: dynamisch content wisselen (optioneel met JSON of HTML attributen)
  });
});

// SCROLL EFFECTS (optioneel)
// bv. fade in sections on scroll
// Je kan hier later IntersectionObserver toevoegen
