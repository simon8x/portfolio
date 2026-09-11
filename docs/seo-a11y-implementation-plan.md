# Plan de implementación — SEO y accesibilidad del portfolio

Alcance: las prácticas del feedback Mindata que **sí mejoran este sitio**. No incluye contraste de overlays ni `eager`/`fetchpriority` del hero (el home es texto, no una imagen LCP).

Restricción importante: el router es `HashRouter`. WhatsApp, Slack y LinkedIn leen el HTML estático de `public/index.html` y **ignoran el hash**. Los meta por ruta sirven para pestaña, historial y lectores de pantalla, no para previews al compartir `#/projects`.

---

## 1. Skip link

**Por qué:** hay `<main>` en Home, Projects, Track Record y Testimonials, pero no hay forma de saltar el nav sticky con teclado.

**Cuidado HashRouter:** un `<a href="#main-content">` pisa la ruta (`#/projects` → `#main-content`). El skip link tiene que hacer `preventDefault` y enfocar `#main-content`, no cambiar el hash.

**Plan:**

- Crear `src/components/skip-link/SkipLink.js`. Primer nodo dentro de `#root` (en `App.js`, antes de `Routes`). Texto EN/ES según `siteLang`.
- En cada página, `id="main-content"` y `tabIndex={-1}` en el `<main>` existente:
  - `src/containers/home/Home.js`
  - `src/containers/projects-v2/ProjectsV2.js`
  - `src/containers/track-record/TrackRecord.js`
  - `src/containers/testimonials/Testimonials.js`
- Estilos en `src/assets/sass/globals/_layout.scss` (junto a `.header` / `.main-section`). Off-screen hasta `:focus`. Colores de `_colors.scss`: fondo `$theme-dark-primary-text`, texto `$theme-dark-primary-background`.

**Commit:** `fix(a11y): add skip link that focuses main without breaking HashRouter`

---

## 2. Alt descriptivo en imágenes de contenido

**Por qué:** las capturas, avatares y logos de empresa tienen `alt=""`. Eso las saca del árbol accesible y del SEO de imágenes. Los íconos decorativos (tech stack, CTA del home, download del CV) pueden seguir vacíos: el texto al lado ya los nombra.

**Qué sí (contenido):**

| Superficie | Archivo | Alt propuesto |
|---|---|---|
| Avatar del nav | `MainNavBar.js` | `Simón Yamil Ibalo` |
| Foto de colega | `TestimonialAuthor.js` | `recomendacion.name` |
| Logo de empresa | `TrAccordion.js` | `resumeItem.company` |
| Captura featured | `FeaturedProject.js` | `{projectName} — {projectSubtitle[siteLang]}` |
| Captura other | `OtherProject.js` | `{projectName}` (el subtitle de other no está i18n) |
| Thumb de demo | `LiveDemoCard.js` | `name` (ya localizado) |

**Qué no:** `TechStack.js`, ícono de `CtaSection.js`, ícono de `CtaCvDownload.js`, banderas (`CountryFlag` ya tiene alt). `Testimonial.js` del carrusel archivado no está en rutas activas; no tocarlo.

**Plan:**

- No agregar campos `imageAlt` al data si se puede componer desde nombre + subtítulo ya existentes.
- Pasar el string al `<img>` del slide y al del modal (featured y other tienen dos imágenes cada uno).
- Live demo: el `<img>` va dentro de un `<button>` con `aria-label`. Ahí el alt puede ser `""` **o** el nombre, no ambos. Preferir `alt=""` y dejar el `aria-label` del botón (evita anuncio doble).

**Commit:** `fix(a11y): add descriptive alt text to content images`

---

## 3. CTAs de navegación como enlace

**Ya está bien:** las tarjetas del home (`CtaSection`) y el menú (`HamburguerMenu`, logo) ya son `<Link>`. Abrir un modal o el iframe fullscreen es una acción: esos botones se quedan.

**Qué falta:** “Ver demo” / “View demo” en los modales de proyecto navega a `/projects?demo=…` con `navigate()`, pero está renderizado como `<button>`.

**Plan:**

- En `FeaturedProject.js` y `OtherProject.js`, reemplazar el botón `modal-view-demo-link` por `<Link to={'/projects?demo=' + demoId}>`.
- Mantener el delay de `LIVE_DEMO_HANDOFF_MS` si hace falta para que el overlay cierre antes de abrir la ficha; si el `Link` + `requestNavigate`/`onClick` complica el handoff, dejar el `navigate()` pero cambiar el elemento a `<a href>`/`Link` y `preventDefault` + el timeout actual.
- No tocar el botón “View demo” de `LiveDemoCard.js`: abre el iframe, no cambia de ruta.

**Commit:** `fix(a11y): use links for view-demo navigation CTAs`

---

## 4. Title, meta description y Open Graph

**Estado actual (`public/index.html`):**

- Title y description genéricos: `UX/UI Engineer and beyond...`
- `og:image` apunta a `/images/me/simon8x-avatar1.png` — el archivo real está en `assets/images/me/simon8x-avatar1.png`
- `twitter:card` tiene la URL del favicon; debería ser `summary_large_image` o `summary`
- `public/404.html` sigue siendo el boilerplate de CRA (`React App` / `Web site created using create-react-app`)

**Plan — capa estática (lo que ven crawlers y shares):**

- Reescribir title, description y OG en `public/index.html` con copy real, en inglés (idioma por defecto del HTML estático).
- `og:image` y `og:url` absolutos: `https://simon8x.github.io/portfolio/...`
- Agregar `og:type="website"` y corregir `twitter:card`.
- Alinear `public/404.html` con los mismos title/description (no dejar “React App”).

Copy sugerido (ajustable):

- Title: `Simón Ibalo — UX/UI Engineer`
- Description: `UX/UI Engineer with 9+ years building web interfaces and 5 years with React. Projects, track record, and recommendations.`

**Plan — capa SPA (pestaña y a11y):**

- `src/data/pageMeta.js` con title + description por ruta (`/`, `/projects`, `/track-record`, `/testimonial`) y por `EN`/`ES`.
- `src/components/document-meta/DocumentMeta.js` montado una vez en `App.js` (dentro de `HashRouter`). Con `useLocation` + `siteLang` actualiza `document.title` y `meta[name="description"]`. Sin `react-helmet`.
- Fallback a los textos de home si la ruta no está en el mapa.

**Commit 1:** `fix(seo): replace generic and broken Open Graph defaults`  
**Commit 2:** `fix(seo): update document title and description per route and language`

---

## 5. `lang` (cierre, no trabajo nuevo)

**Ya funciona:** `LanguageProvider` setea `document.documentElement.lang` a `en`/`es` cuando cambia el idioma.

**Qué falta:**

- `public/index.html` puede quedar en `lang="en"` como default para crawlers. Opcional: script corto en `<head>` que lea `localStorage.siteLang` / `navigator.language` y setee `lang` antes de React (evita un primer paint en inglés si la preferencia es ES).
- `public/404.html` también tiene `lang="en"`; dejarlo consistente con `index.html`.

**Commit (si se hace el script):** `fix(a11y): set html lang from stored preference before paint`

---

## Orden sugerido

1. Skip link — aislado, alto impacto de teclado.
2. Alts de contenido — data ya existe, solo wiring.
3. “Ver demo” como enlace — un patrón, dos componentes.
4. Meta estáticos + 404 — el SEO real al compartir el sitio.
5. Meta por ruta en la SPA — title de pestaña.
6. Script de `lang` — opcional, solo si se nota el flash.

No hace falta cambiar de router ni agregar dependencias.