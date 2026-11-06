"use strict";

const language = document.documentElement.lang;
const locale = SITE_TRANSLATIONS[language] ?? SITE_TRANSLATIONS.es;
const interfaceText = locale.interface;
// Los destinos y las fotografías son comunes a todos los idiomas.
const DETAIL_CONTENT = Object.fromEntries(
  Object.entries(SITE_TRANSLATIONS.es.details).map(([key, detail]) => [
    key,
    { ...detail, ...locale.details[key] },
  ]),
);

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navegacion");
const detailDialog = document.querySelector("#detail-dialog");
const detailContainer = document.querySelector("#dialog-content");
const closeDialogButton = document.querySelector(".close-dialog");
let lastDetailTrigger = null;

// Mantiene sincronizados el estado accesible y la presentación del menú.
function setMenuExpanded(expanded) {
  menuToggle.setAttribute("aria-expanded", String(expanded));
  navigation.classList.toggle("is-open", expanded);
}

function toggleMenu() {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuExpanded(!isExpanded);
}

function handleMenuEscape(event) {
  if (event.key !== "Escape") return;
  setMenuExpanded(false);
  menuToggle.focus();
}

function createTextElement(tagName, text, className) {
  const element = document.createElement(tagName);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}

function appendDetailImage(detail) {
  const image = document.createElement("img");
  image.src = detail.image;
  image.alt = interfaceText.fullImage;
  image.className = "full-photo";
  detailContainer.append(image);
}

function createDetailLink(detailKey, detail) {
  const link = document.createElement("a");
  link.className = "button outline";
  link.href = detail.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.hreflang = "es";
  link.textContent =
    detailKey === "fotografia"
      ? interfaceText.photoLink
      : interfaceText.websiteLink;
  return link;
}

// Los textos se insertan como texto, sin interpretar HTML.
function renderDetail(detailKey, detail) {
  detailContainer.replaceChildren();

  const title = createTextElement("h2", detail.title);
  title.id = "dialog-title";
  detailContainer.append(title);

  if (detail.image) appendDetailImage(detail);
  detailContainer.append(createTextElement("p", detail.text));
  if (detail.extra) {
    detailContainer.append(createTextElement("p", detail.extra));
  }

  const needsPreviewNote = !["fotografia", "acerca", "socios"].includes(
    detailKey,
  );
  if (needsPreviewNote) {
    detailContainer.append(
      createTextElement("p", interfaceText.previewNote, "dialog-note"),
    );
  }

  detailContainer.append(createDetailLink(detailKey, detail));
}

function openDetail(trigger) {
  const detailKey = trigger.dataset.detail;
  const detail = DETAIL_CONTENT[detailKey];
  if (!detail) return;

  lastDetailTrigger = trigger;
  renderDetail(detailKey, detail);
  detailDialog.showModal();
}

// Un clic fuera del recuadro cierra el diálogo; un clic dentro lo conserva.
function handleDialogBackdropClick(event) {
  if (event.target !== detailDialog) return;

  const bounds = detailDialog.getBoundingClientRect();
  const clickedOutside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (clickedOutside) detailDialog.close();
}

menuToggle.addEventListener("click", toggleMenu);
menuToggle.addEventListener("keydown", handleMenuEscape);
navigation.addEventListener("keydown", handleMenuEscape);

for (const link of navigation.querySelectorAll("a")) {
  link.addEventListener("click", () => setMenuExpanded(false));
}

for (const trigger of document.querySelectorAll("[data-detail]")) {
  trigger.addEventListener("click", () => openDetail(trigger));
}

closeDialogButton.addEventListener("click", () => detailDialog.close());
detailDialog.addEventListener("click", handleDialogBackdropClick);
detailDialog.addEventListener("close", () => lastDetailTrigger?.focus());
