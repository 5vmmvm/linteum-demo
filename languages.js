"use strict";

const languagePicker = document.querySelector(".language-picker");

if (languagePicker) {
  const languageToggle = languagePicker.querySelector("summary");
  const languageLinks = [...languagePicker.querySelectorAll("a")];

  function closeLanguagePicker(returnFocus = false) {
    languagePicker.open = false;
    if (returnFocus) languageToggle.focus();
  }

  // Los enlaces funcionan con Tab y Enter incluso sin este script.
  languagePicker.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && languagePicker.open) {
      event.preventDefault();
      closeLanguagePicker(true);
    }
    if (!["ArrowDown", "ArrowUp"].includes(event.key)) return;
    event.preventDefault();
    languagePicker.open = true;
    const currentIndex = languageLinks.indexOf(document.activeElement);
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex =
      currentIndex === -1
        ? direction === 1
          ? 0
          : languageLinks.length - 1
        : (currentIndex + direction + languageLinks.length) %
          languageLinks.length;
    languageLinks[nextIndex].focus();
  });

  document.addEventListener("click", (event) => {
    if (!languagePicker.contains(event.target)) closeLanguagePicker();
  });
  languagePicker.addEventListener("focusout", (event) => {
    if (!languagePicker.contains(event.relatedTarget)) closeLanguagePicker();
  });
  window.addEventListener("pageshow", () => closeLanguagePicker());
}
