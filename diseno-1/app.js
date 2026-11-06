"use strict";

// Los mismos datos y controles se utilizan en las cuatro propuestas.
const DETAIL_CONTENT = {
  turin: {
    title: "La Síndone de Turín",
    text: "La Síndone es un lienzo de lino conservado en Turín. El CES presenta su descripción, los caracteres de su imagen y los estudios realizados sobre ella.",
    url: "https://linteum.com/la-sindone-de-turin.php",
  },
  oviedo: {
    title: "El Sudario de Oviedo",
    text: "El Santo Sudario se conserva en la Catedral de Oviedo. El EDICES, equipo de investigación del CES, ha realizado estudios sobre este lienzo.",
    url: "https://linteum.com/el-santo-sudario-de-oviedo.php",
  },
  caliz: {
    title: "El Santo Cáliz de Valencia",
    text: "La Catedral de Valencia conserva la copa que la tradición vincula con la Última Cena. La web del CES incluye una presentación y material audiovisual sobre el Santo Cáliz.",
    url: "https://linteum.com/el-santo-caliz-de-valencia.php",
  },
  socios: {
    title: "Un espacio para los socios",
    text: "En esta propuesta solo se ha creado la portada. El acceso privado no está conectado y aquí no se solicitan ni se guardan contraseñas. Puede consultar la información para socios en la web actual.",
    url: "https://linteum.com/ces-socios.php",
  },
  revista: {
    title: "Línteum, la revista del CES",
    text: "Línteum es la revista del CES. Publica trabajos originales y recoge textos de prensa sobre la Síndone y otras reliquias relacionadas.",
    url: "https://linteum.com/solicitud-suscriptor-linteum.php",
  },
  fotografia: {
    title: "La Síndone de Turín",
    text: "Detalle del rostro en el lienzo de la Síndone de Turín.",
    image: "assets/sindone-ces.jpg",
    url: "https://linteum.com/ces-quienes-somos.php",
  },
  acerca: {
    title: "Información del sitio",
    text: "Demostración local de una nueva portada del Centro Español de Sindonología. Las fotografías y el sello proceden de los recursos publicados en linteum.com. Solo se ha desarrollado el inicio.",
    extra:
      "El sitio no utiliza cookies, analítica ni formularios de recogida de datos. Puede recorrerlo con el teclado y ampliar el texto desde su navegador.",
    url: "https://linteum.com/",
  },
};

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
  image.alt = "Rostro de la Síndone de Turín, imagen completa.";
  image.className = "full-photo";
  detailContainer.append(image);
}

function createDetailLink(detailKey, detail) {
  const link = document.createElement("a");
  link.className = "button outline";
  link.href = detail.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent =
    detailKey === "fotografia"
      ? "Conocer la Síndone en el CES ↗"
      : "Consultar la web actual ↗";
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
      createTextElement(
        "p",
        "Vista previa: las páginas interiores todavía no se han rediseñado. El siguiente enlace abre la web actual en otra pestaña.",
        "dialog-note",
      ),
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
