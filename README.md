# Línteum · Propuestas de diseño

Muestra independiente de una nueva portada para el Centro Español de Sindonología. No es el sitio oficial del CES.

- `/`: índice de propuestas.
- `/diseno-1/`: «Archivo y serenidad».
- `/diseno-2/`: «Herencia cálida».
- `/diseno-3/`: «Ciencia y evidencia».
- `/diseno-4/`: «Umbral de luz».

Sitio estático sin dependencias, servicios externos, formularios ni base de datos. Todas las rutas son relativas, compatibles con GitHub Pages bajo un subdirectorio.

Para añadir otra propuesta, cree `diseno-2/` con su propio `index.html` y sus recursos, y añada un enlace en el índice.

## Publicación

GitHub Pages publica la rama `main`, carpeta raíz. `.nojekyll` permite servir directamente los archivos estáticos. Cada cambio enviado a esa rama actualiza el sitio.

## Recursos y derechos

Los textos se han adaptado del contenido publicado por el CES. Las fotografías y el sello proceden de linteum.com y conservan los derechos de sus titulares. No se declara una licencia libre sobre esos recursos ni se atribuye su autoría al autor de esta demo. Cormorant Garamond y DM Sans se distribuyen bajo las licencias OFL incluidas en `diseno-1/assets/`.

Los metadatos piden a buscadores que no indexen la demostración; el sitio y el repositorio son públicos.


## Comparación de los diseños

Las cuatro propuestas tienen el mismo HTML, las mismas imágenes y el mismo JavaScript. Las nuevas variantes importan los estilos base y añaden únicamente reglas de presentación. El diseño 1 conserva su composición; la revisión común de accesibilidad convierte la franja superior en una región identificable y elimina números romanos decorativos de los botones de imagen.

Las nuevas propuestas mantienen foco visible, controles nativos, texto ampliable, reducción de movimiento y un menú adaptable. No utilizan animaciones automáticas, recursos remotos, formularios ni nuevas dependencias de ejecución. Las herramientas de revisión solo se ejecutan localmente y no forman parte del sitio publicado.
