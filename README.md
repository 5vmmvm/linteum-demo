# Línteum · Propuestas de diseño

Cuatro presentaciones de una misma portada para el Centro Español de Sindonología. El índice permite compararlas. Este sitio es una muestra independiente y no sustituye a la web oficial del CES.

## Estructura

| Carpeta o archivo           | Función                                                     |
| --------------------------- | ----------------------------------------------------------- |
| `index.html` y `styles.css` | Índice de propuestas.                                       |
| `diseno-1/`                 | Archivo y serenidad. Contiene los estilos base.             |
| `diseno-2/`                 | Herencia cálida.                                            |
| `diseno-3/`                 | Ciencia y evidencia.                                        |
| `diseno-4/`                 | Umbral de luz.                                              |
| `preview/`                  | Capturas utilizadas en el índice.                           |
| `.nojekyll`                 | Permite publicar los archivos directamente en GitHub Pages. |

Dentro de cada diseño:

- `index.html` contiene la portada en español. `en.html`, `fr.html`, `de.html` e `it.html` contienen las versiones en inglés, francés, alemán e italiano. Todas incluyen el texto completo y la estructura semántica, sin depender de JavaScript para traducirlas.
- `app.js` gestiona el menú y los diálogos. Los textos de las fichas están en el archivo compartido `translations.js` de la raíz.
- `styles.css` define la presentación. En los diseños 2, 3 y 4 importa primero los estilos base del diseño 1.
- `fonts.css` carga las tipografías locales.
- `assets/` contiene fotografías, sello, tipografías y sus licencias.

El HTML, el JavaScript y las imágenes son iguales en las cuatro propuestas. Para modificar contenido o comportamiento, aplique el mismo cambio a las cuatro carpetas. Para modificar una apariencia, edite únicamente su `styles.css`. Las copias de los recursos permiten que cada carpeta mantenga sus rutas locales.

## Idiomas

El índice y los cuatro diseños están disponibles en español, inglés, francés, alemán e italiano, en ese orden. El español aparece primero por ser el idioma de origen. Cada idioma tiene su propia dirección: por ejemplo, `diseno-1/`, `diseno-1/en.html`, `diseno-1/fr.html`, `diseno-1/de.html` y `diseno-1/it.html`. Cada índice enlaza a los diseños en su mismo idioma.

El selector es un control nativo con etiqueta visible y un botón para confirmar. Seleccionar una opción no cambia la página automáticamente. Los nombres de los idiomas se muestran en su propia lengua y el idioma actual está seleccionado. El idioma del documento se declara en `<html>`. Si JavaScript está desactivado, se ofrecen enlaces dentro de un desplegable nativo. No hay redirecciones automáticas ni preferencias guardadas en cookies.

`languages.css` define la presentación del selector y `languages.js` gestiona su confirmación. La navegación se limita a una lista cerrada de archivos locales. `translations.js` contiene los textos de todos los diálogos y sus controles, agrupados por idioma; las imágenes y los destinos se definen una sola vez. Al cambiar una portada, actualice también sus traducciones, textos alternativos y etiquetas accesibles. Los enlaces a la web original mantienen su destino en español y lo indican en los otros idiomas.

## Ver el sitio en el equipo

Desde esta carpeta, con Python instalado:

```sh
python -m http.server 4174 --bind 127.0.0.1
```

Abra http://127.0.0.1:4174/ y detenga el servidor con Ctrl+C al terminar.

## Publicar cambios

GitHub Pages publica la rama `main`, carpeta raíz. Los cambios enviados a esa rama actualizan el sitio. No hay instalación de paquetes ni compilación: se sirven HTML, CSS, JavaScript y archivos estáticos.

Para añadir una propuesta, cree una carpeta nueva, por ejemplo `diseno-5/`, y añada su enlace y captura al índice.

## Accesibilidad y seguridad

Se utilizan regiones semánticas, un enlace para saltar al contenido, foco visible, controles nativos y texto ampliable. El menú comunica si está desplegado y los diálogos devuelven el foco al control de origen. Los estilos respetan la preferencia de reducir movimiento.

No hay PHP, base de datos, cuentas, recogida de datos personales, cookies ni analítica. El formulario del idioma sólo cambia de página y no envía datos a un servidor. Los recursos se sirven desde el propio sitio y los textos de los diálogos se insertan mediante `textContent`. Los enlaces que abren otra pestaña utilizan `noopener noreferrer`.

La política de seguridad del contenido limita los recursos al propio sitio. Los metadatos solicitan que los buscadores no indexen la muestra; esto no limita el acceso público.

## Recursos

El contenido se ha adaptado de lo publicado en linteum.com. Las fotografías y el sello proceden de ese sitio y conservan los derechos de sus titulares. Cormorant Garamond y DM Sans se distribuyen con sus licencias OFL, incluidas en `assets/`.
