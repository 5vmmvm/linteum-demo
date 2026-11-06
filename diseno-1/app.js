'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacion');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}));
navigation.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    menuButton.focus();
  }
});
const content = {
  turin: {title:'La Síndone de Turín', text:'La Síndone es un lienzo de lino conservado en Turín. El CES presenta su descripción, los caracteres de su imagen y los estudios realizados sobre ella.', url:'https://linteum.com/la-sindone-de-turin.php'},
  oviedo: {title:'El Sudario de Oviedo', text:'El Santo Sudario se conserva en la Catedral de Oviedo. El EDICES, equipo de investigación del CES, ha realizado estudios sobre este lienzo.', url:'https://linteum.com/el-santo-sudario-de-oviedo.php'},
  caliz: {title:'El Santo Cáliz de Valencia', text:'La Catedral de Valencia conserva la copa que la tradición vincula con la Última Cena. La web del CES incluye una presentación y material audiovisual sobre el Santo Cáliz.', url:'https://linteum.com/el-santo-caliz-de-valencia.php'},
  socios: {title:'Un espacio para los socios', text:'En esta propuesta solo se ha creado la portada. El acceso privado no está conectado y aquí no se solicitan ni se guardan contraseñas. Puede consultar la información para socios en la web actual.', url:'https://linteum.com/ces-socios.php'},
  revista: {title:'Línteum, la revista del CES', text:'Línteum es la revista del CES. Publica trabajos originales y recoge textos de prensa sobre la Síndone y otras reliquias relacionadas.', url:'https://linteum.com/solicitud-suscriptor-linteum.php'},
  fotografia: {title:'La Síndone de Turín', text:'Detalle del rostro en el lienzo de la Síndone de Turín.', image:'assets/sindone-ces.jpg', url:'https://linteum.com/ces-quienes-somos.php'},
  acerca: {title:'Información del sitio', text:'Demostración local de una nueva portada del Centro Español de Sindonología. Las fotografías y el sello proceden de los recursos publicados en linteum.com. Solo se ha desarrollado el inicio.', extra:'El sitio no utiliza cookies, analítica ni formularios de recogida de datos. Puede recorrerlo con el teclado y ampliar el texto desde su navegador.', url:'https://linteum.com/'}
};
const dialog = document.querySelector('#detail-dialog');
const dialogContent = document.querySelector('#dialog-content');
let lastTrigger;
document.querySelectorAll('[data-detail]').forEach(trigger => trigger.addEventListener('click', () => {
  const key = trigger.dataset.detail;
  const item = content[key];
  if (!item) return;
  lastTrigger = trigger;
  dialogContent.replaceChildren();
  const title = document.createElement('h2'); title.id = 'dialog-title'; title.textContent = item.title;
  dialogContent.append(title);
  if (item.image) {const img = document.createElement('img'); img.src = item.image; img.alt = 'Rostro de la Síndone de Turín, imagen completa.'; img.className = 'full-photo'; dialogContent.append(img);}
  const paragraph = document.createElement('p'); paragraph.textContent = item.text; dialogContent.append(paragraph);
  if (item.extra) {const extra = document.createElement('p'); extra.textContent = item.extra; dialogContent.append(extra);}
  if (!['fotografia','acerca','socios'].includes(key)) {const note = document.createElement('p'); note.className = 'dialog-note'; note.textContent = 'Vista previa: las páginas interiores todavía no se han rediseñado. El siguiente enlace abre la web actual en otra pestaña.'; dialogContent.append(note);}
  const link = document.createElement('a'); link.className = 'button outline'; link.href = item.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = key === 'fotografia' ? 'Conocer la Síndone en el CES ↗' : 'Consultar la web actual ↗'; dialogContent.append(link);
  dialog.showModal();
}));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); }});
dialog.addEventListener('close', () => lastTrigger?.focus());
