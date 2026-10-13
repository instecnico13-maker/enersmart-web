# Página web de ENERSMART

## Cómo abrirla en Visual Studio Code
1. Descomprime la carpeta y ábrela en VS Code (Archivo > Abrir carpeta).
2. Instala la extensión **Live Server** (de Ritwick Dey).
3. Clic derecho sobre `index.html` > **Open with Live Server**. Se abre en tu navegador y se actualiza al guardar.

## Lo que debes cambiar (solo 1 archivo)
Abre `js/config.js` y escribe tu enlace de Streamlit, tu correo y, si quieres, tu WhatsApp.

## Fotos (licencia libre)
La página funciona sin fotos: usa una ilustración propia. Para ponerle fotos reales, descárgalas de
Unsplash, Pexels o Pixabay (licencias que permiten uso comercial sin pedir permiso) y guárdalas en la
carpeta `images/` con estos nombres exactos:

| Archivo | Qué buscar | Medida sugerida |
|---|---|---|
| `hero-cafeteria.jpg` | "small coffee shop interior", "cafe counter warm light" | 1600 x 1500 px |
| `nosotros.jpg` | "energy saving", "led light bulb", "small business owner coffee" | 1400 x 1100 px |

Comprime cada foto en tinypng.com (que pese menos de 300 KB) y revisa en la página de la foto que la
licencia permita uso comercial. Si una foto muestra personas reconocibles o marcas, mejor elige otra.

## Logo
`images/logo.svg` (fondo claro) y `images/logo-blanco.svg` (fondo oscuro) son provisionales.
Reemplázalos por tu logo final con el mismo nombre de archivo.

## Colores y letras
Están al inicio de `css/styles.css`, en el bloque `:root`.

## Publicarla gratis
Sube la carpeta a un repositorio de GitHub y activa **Settings > Pages**, o arrástrala a Netlify.
