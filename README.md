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

- `index.html` contiene la portada en español; `en.html`, su versión en inglés. Ambas incluyen el texto completo y la estructura semántica, sin depender de JavaScript para traducirlas.
- `app.js` gestiona el menú y los diálogos. Los textos de las fichas están agrupados al principio del archivo.
- `styles.css` define la presentación. En los diseños 2, 3 y 4 importa primero los estilos base del diseño 1.
- `fonts.css` carga las tipografías locales.
- `assets/` contiene fotografías, sello, tipografías y sus licencias.

El HTML, el JavaScript y las imágenes son iguales en las cuatro propuestas. Para modificar contenido o comportamiento, aplique el mismo cambio a las cuatro carpetas. Para modificar una apariencia, edite únicamente su `styles.css`. Las copias de los recursos permiten que cada carpeta mantenga sus rutas locales.

## Idiomas

El índice y los cuatro diseños están disponibles en español e inglés. Cada idioma tiene su propia dirección: por ejemplo, `diseno-1/` y `diseno-1/en.html`. El índice inglés enlaza directamente a los diseños en inglés.

El selector utiliza enlaces normales con el nombre de cada idioma en su propia lengua, atributos `lang` y `hreflang`, y `aria-current` para identificar la página actual. El idioma del documento también se declara en `<html>`. No hay redirecciones automáticas ni preferencias guardadas en cookies.

`languages.css` define el selector compartido. En cada `app.js`, `SPANISH_DETAILS`, `ENGLISH_DETAILS` e `interfaceText` contienen los textos de los diálogos y sus controles. Al cambiar una portada, actualice también su traducción, sus textos alternativos y sus etiquetas accesibles. Los enlaces a la web original mantienen su destino en español y lo indican en inglés.

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

No hay PHP, base de datos, cuentas, formularios, cookies ni analítica. Los recursos se sirven desde el propio sitio y los textos de los diálogos se insertan mediante `textContent`. Los enlaces que abren otra pestaña utilizan `noopener noreferrer`.

La política de seguridad del contenido limita los recursos al propio sitio. Los metadatos solicitan que los buscadores no indexen la muestra; esto no limita el acceso público.

## Recursos

El contenido se ha adaptado de lo publicado en linteum.com. Las fotografías y el sello proceden de ese sitio y conservan los derechos de sus titulares. Cormorant Garamond y DM Sans se distribuyen con sus licencias OFL, incluidas en `assets/`.
