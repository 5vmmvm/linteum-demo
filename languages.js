"use strict";

// Sólo se permite navegar a las versiones locales incluidas en el sitio.
const LANGUAGE_PAGES = new Map([
  ["es", "index.html"],
  ["en", "en.html"],
  ["fr", "fr.html"],
  ["de", "de.html"],
  ["it", "it.html"],
]);

const languageForm = document.querySelector(".language-switch");
const languageSelect = document.querySelector("#site-language");

if (languageForm && languageSelect) {
  // Volver desde otra página restaura siempre el idioma de este documento.
  function restoreCurrentLanguage() {
    languageSelect.value = document.documentElement.lang;
  }

  restoreCurrentLanguage();
  window.addEventListener("pageshow", restoreCurrentLanguage);
  languageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const destination = LANGUAGE_PAGES.get(languageSelect.value);
    if (destination && languageSelect.value !== document.documentElement.lang) {
      window.location.assign(destination);
    }
  });
  languageForm.hidden = false;
}
