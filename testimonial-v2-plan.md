# Plan de implementación — `/testimonial-v2`

Fecha: 2026-08-04
Estado: propuesta lista para implementar
Alcance: ruta temporal `/testimonial-v2`, sin tocar `/testimonial`

---

## 1. Objetivo

Crear una versión alternativa de la página de testimonios que reemplace el carrusel
(`react-slideshow-image` / `Zoom`) por una grilla de cards clickeables. Cada card abre un
modal con el testimonio completo.

La ruta `/testimonial-v2` es temporal: convive con `/testimonial` hasta que se valide la
nueva versión y se haga el cambio definitivo (ver sección 12).

---

## 2. Decisiones acordadas

| # | Decisión | Resolución |
|---|---|---|
| 1 | Link de LinkedIn del autor dentro de la card | **Se saca de la card.** Solo aparece dentro del modal. Evita el conflicto de un `<a>` anidado dentro de una zona clickeable. |
| 2 | Contenido del modal | **Testimonio completo (párrafos) + bloque del autor debajo**, es decir el mismo contenido que hoy tiene un slide de `/testimonial`. |
| 3 | Alineación del título | **Izquierda**, manteniendo `@include font-display-1` y la animación `flotate`. |
| 4 | Navegación | **Sí se agrega** un item temporal al menú (hamburguesa), en EN y ES. |

---

## 3. Estado actual relevante (lo que se reutiliza)

- **Datos**: `src/data/recomendationsContent.js` exporta `recomendationsData` (12 entradas).
  Campos por entrada: `text{EN,ES}` (array de párrafos), `avatarUrl`, `name`, `position`,
  `authorGender`, `authorLinkedinUrl`, `country`. Solo la entrada `[0]` tiene `headLine{EN,ES}`,
  que es el título de la sección.
- **i18n**: `LanguageContext` expone `{ siteLang, handleLang }` con valores `'EN' | 'ES'`.
  Los componentes hacen `useContext(LanguageContext)` e indexan la data por `siteLang`.
- **Componentes reutilizables tal cual**: `CountryFlag`, `AuthorLinkedinLink`,
  `BackgroundShapes`, `MainNavBar`.
- **Modal**: el proyecto ya usa `react-responsive-modal@^6.4.2` en `FeaturedProject` y
  `OtherProject`. Se reutiliza la misma librería para mantener consistencia y no sumar dependencias.
- **Estilo de card de home**: `.cta-container` en
  `src/assets/sass/components/cta-section/_cta-section.scss` (padding `2rem`, `border-radius: 1rem`,
  `background-color: $theme-dark-overlay`, `border: solid 2px $theme-light-overlay`) más la
  utilidad global `.hover-enlarge` (`transform: scale(1.025)`).
- **Precedente de página larga con scroll**: `TrackRecord` usa la misma estructura
  (`main.main-section > div.container > section`) y crece verticalmente sin problemas, pese al
  `overflow: hidden` de `.main-section`. La grilla sigue el mismo patrón.

---

## 4. Archivos

### Nuevos

| Archivo | Rol |
|---|---|
| `src/containers/testimonials-v2/TestimonialsV2.js` | Container de la página: 2 rows (título / grilla). |
| `src/components/testimonial-card/TestimonialCard.js` | Card clickeable + modal con el testimonio. |
| `src/components/testimonial-author/TestimonialAuthor.js` | Bloque de autor reutilizable (card sin link, modal con link). |
| `src/assets/sass/containers/testimonials-v2/_testimonials-v2.scss` | Layout de los 2 rows y la grilla. |
| `src/assets/sass/components/testimonial-card/_testimonial-card.scss` | Card + modal de testimonio. |
| `src/assets/sass/components/testimonial/_testimonial-shared.scss` | Mixins compartidos (cita y bloque de autor). |

### Modificados

| Archivo | Cambio |
|---|---|
| `src/App.js` | Import de `TestimonialsV2` + `<Route path='/testimonial-v2' ... />` **antes** del catch-all `/*`. |
| `src/data/menuContent.js` | Item temporal `id: 4` apuntando a `/testimonial-v2`, en EN y ES. |
| `src/assets/sass/styles.scss` | 3 `@import` nuevos, respetando el orden (ver 7.1). |
| `src/assets/sass/globals/_colors.scss` | Agregar el token faltante `$theme-modal-dark-overlay: rgba(0,0,0,.75);` (ver 7.3). |

### No se tocan

`Testimonials.js`, `Testimonial.js`, `_testimonials.scss`, `_testimonial.scss`. La página
actual queda intacta durante toda la fase 1.

---

## 5. Estructura DOM propuesta

```
main.main-section
└── div.container
    └── section.testimonial-v2-section
        ├── div.testimonial-v2-header-row          ← ROW 1 (ancho completo)
        │   └── h2.section-title.flotate
        └── div.testimonial-v2-grid-row            ← ROW 2 (ancho completo)
            └── div.testimonial-card-grid          ← grid 3 columnas
                └── button.testimonial-card.hover-enlarge   (×12)
                    └── div.testimonial-author-wrapper
                        ├── div.testimonial-author-avatar-wrapper
                        │   └── img.testimonial-author-avatar-img
                        └── div.testimonial-author-data-wrapper
                            ├── h4.testimonial-author-name  (+ CountryFlag)
                            └── span.testimonial-author-position

Modal (portal, fuera del flujo)
└── article.testimonial-modal-wrapper
    ├── div.quote-wrapper
    │   └── p.testimonial-paragraph (×n)
    └── div.testimonial-author-wrapper   (idéntico al de la card + AuthorLinkedinLink)
```

Se reusan a propósito los mismos nombres de clase internos del bloque de autor
(`testimonial-author-wrapper`, `-avatar-wrapper`, `-data-wrapper`, `-name`, `-position`) para
que el mixin compartido aplique en los tres contextos sin duplicar reglas.

---

## 6. Detalle de componentes

### 6.1 `TestimonialAuthor.js`

Componente presentacional que encapsula el bloque de autor. La prop `showLinkedinLink`
decide si se renderiza el link (card: `false`, modal: `true`).

```jsx
import { CountryFlag } from '../country-flag/CountryFlag';
import { AuthorLinkedinLink } from '../author-linkedin-link/AuthorLinkedinLink';

export const TestimonialAuthor = ({ recomendacion, showLinkedinLink }) => {

    return (
        <div className='testimonial-author-wrapper'>
            <div className='testimonial-author-avatar-wrapper'>
                <img
                    className='testimonial-author-avatar-img'
                    src={recomendacion.avatarUrl}
                    alt=''
                />
            </div>
            <div className='testimonial-author-data-wrapper'>
                <h4 className='testimonial-author-name'>
                    {recomendacion.name}
                    <CountryFlag countryCode={recomendacion.country} />
                </h4>
                <span className='testimonial-author-position'>{recomendacion.position}</span>
                {
                    showLinkedinLink === true
                        ? <AuthorLinkedinLink
                            url={recomendacion.authorLinkedinUrl}
                            gender={recomendacion.authorGender}
                          />
                        : null
                }
            </div>
        </div>
    )
}
```

### 6.2 `TestimonialCard.js`

Card clickeable con su propio estado de modal (mismo patrón que `FeaturedProject`).

```jsx
import { useContext, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import { LanguageContext } from '../../context/LanguageContext';
import { TestimonialAuthor } from '../testimonial-author/TestimonialAuthor';

export const TestimonialCard = ({ recomendacion }) => {

    const { siteLang } = useContext(LanguageContext);
    const [open, setOpen] = useState(false);

    // Fallback a EN por si se suma un idioma sin traducir todas las entradas.
    const paragraphs = recomendacion.text[siteLang] == null
        ? recomendacion.text.EN
        : recomendacion.text[siteLang];

    const openLabel = siteLang === 'ES'
        ? `Leer el testimonio de ${recomendacion.name}`
        : `Read ${recomendacion.name}'s testimonial`;

    return (
        <>
            <button
                type='button'
                className='testimonial-card hover-enlarge'
                onClick={() => setOpen(true)}
                aria-label={openLabel}
            >
                <TestimonialAuthor recomendacion={recomendacion} showLinkedinLink={false} />
            </button>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                classNames={{
                    overlay: 'testimonial-modal-overlay',
                    modal: 'testimonial-modal'
                }}
            >
                <article className='testimonial-modal-wrapper'>
                    <div className='quote-wrapper'>
                        {paragraphs.map((item, index) =>
                            <p className='testimonial-paragraph' key={index}>
                                {item}
                            </p>
                        )}
                    </div>
                    <TestimonialAuthor recomendacion={recomendacion} showLinkedinLink={true} />
                </article>
            </Modal>
        </>
    )
}
```

Notas:
- Se usa `<button>` en vez de `<div onClick>`: da foco, `Enter`/`Espacio` y semántica de
  accesibilidad gratis. El reset visual del botón se hace en SASS.
- `key` en los párrafos (el componente actual lo omite y genera warning de React).
- Sin `?.` ni `??`, comparaciones con `== null` y caso positivo primero, según las reglas del proyecto.

### 6.3 `TestimonialsV2.js`

```jsx
import { useContext } from 'react';

import { MainNavBar } from '../../components/main-nav-bar/MainNavBar';
import { BackgroundShapes } from '../../components/background-shapes/BackgroundShapes';
import { TestimonialCard } from '../../components/testimonial-card/TestimonialCard';

import { recomendationsData } from '../../data/recomendationsContent';
import { LanguageContext } from '../../context/LanguageContext';

export const TestimonialsV2 = () => {

    const { siteLang } = useContext(LanguageContext);

    // El titular vive en la primera entrada de la data, igual que en /testimonial.
    const headLine = recomendationsData[0].headLine[siteLang];

    return (
        <>
            <BackgroundShapes />
            <header className='header'>
                <MainNavBar />
            </header>
            <main className='main-section'>
                <div className='container'>
                    <section className='testimonial-v2-section'>

                        <div className='testimonial-v2-header-row'>
                            <h2 className='section-title flotate'>{headLine}</h2>
                        </div>

                        <div className='testimonial-v2-grid-row'>
                            <div className='testimonial-card-grid'>
                                {recomendationsData.map(recomendacion => (
                                    <TestimonialCard
                                        key={recomendacion.name}
                                        recomendacion={recomendacion}
                                    />
                                ))}
                            </div>
                        </div>

                    </section>
                </div>
            </main>
        </>
    )
}
```

---

## 7. Estrategia de estilos

Los estilos actuales del testimonio están anidados bajo
`.section-testimonial-content > div > div > div > div .single-testimonial-slide`, un selector
atado al DOM que genera `react-slideshow-image`. **Ese scope no aplica ni en la card ni en el
modal**, así que hay que reescribirlos en el scope nuevo.

Para no duplicar valores, se extraen a mixins en un partial compartido y se consumen desde el
scope nuevo. `_testimonial.scss` (la página vieja) no se toca en esta fase; la consolidación
queda para la fase 2.

### 7.1 `_testimonial-shared.scss` (nuevo)

```scss
// Reglas visuales del testimonio, desacopladas del DOM del carrusel para poder
// aplicarlas también en la card y en el modal de /testimonial-v2.

@mixin testimonial-quote-block {
    .testimonial-paragraph {
        @include paragraph-testimonial;
        font-style: italic;
    }
}

@mixin testimonial-author-block {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .testimonial-author-avatar-wrapper {
        width: 10rem;
        height: 10rem;
        min-width: 10rem;
        min-height: 10rem;
        max-width: 10rem;
        max-height: 10rem;
        flex-shrink: 0;
        border-radius: 5px;
        overflow: hidden;
        margin: .5rem 1rem .5rem 0;

        .testimonial-author-avatar-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .testimonial-author-data-wrapper {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        .testimonial-author-name {
            @include name-2;
            display: flex;
            align-items: center;
            gap: .8rem;
        }

        .testimonial-author-position {
            @include paragraph-md;
        }

        .author-linkedin-link {
            display: inline-flex;
            align-items: center;
            gap: .6rem;
            width: fit-content;
            margin-top: .8rem;
            padding: .3rem .9rem;
            border: solid 1px $theme-light-overlay;
            border-radius: 1rem;
            color: inherit;
            text-decoration: none;
            opacity: .8;
            transition: opacity .2s ease, background-color .2s ease;

            .author-linkedin-link-text { @include paragraph-md; }
            .external-link-icon { width: 1.4rem; height: 1.4rem; flex-shrink: 0; }

            &:hover,
            &:focus-visible {
                opacity: 1;
                background-color: $theme-dark-overlay;
            }
        }
    }
}
```

**Orden de import**: en SASS un mixin debe estar definido antes del partial que lo usa, así que
este archivo se importa junto al bloque de globals, antes de los partials de componentes.

`styles.scss` queda así (líneas nuevas marcadas):

```scss
@import "./globals/backdrown-shapes";
@import "./components/testimonial/testimonial-shared";   // ← nuevo (antes de los consumidores)

...
@import "./containers/testimonials/testimonials";
@import "./components/testimonial/testimonial";
@import "./components/country-flag/country-flag";
@import "./containers/testimonials-v2/testimonials-v2";  // ← nuevo
@import "./components/testimonial-card/testimonial-card"; // ← nuevo
```

> Nota: la última línea del archivo (`@import "./components/tr-accordion/tr-accordion"`) no tiene
> punto y coma. Conviene agregarlo al sumar imports para evitar un error de compilación.

### 7.2 `_testimonials-v2.scss` (nuevo)

```scss
.night {
    .testimonial-v2-section {
        background-color: $theme-dark-primary-background;
        color: $theme-dark-primary-text;
    }
}

.day {
    .testimonial-v2-section {
        background-color: $theme-light-primary-background;
        color: $theme-light-primary-text;
    }
}

.testimonial-v2-section {
    min-height: inherit;
    color: $theme-dark-primary-text;
    transition: all .75s;
    display: flex;
    flex-direction: column;

    // ROW 1 — título a ancho completo, alineado a la izquierda.
    .testimonial-v2-header-row {
        width: 100%;
        margin-block: 4rem 3rem;

        .section-title {
            @include font-display-1;
            text-align: left;
            margin: 0;
        }
    }

    // ROW 2 — grilla de cards.
    .testimonial-v2-grid-row {
        width: 100%;
        margin-bottom: 6rem;

        .testimonial-card-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
            align-items: stretch;
        }
    }
}

@media screen and (max-width: 992px) {
    .testimonial-v2-section {
        .testimonial-v2-header-row { margin-block: 2.5rem 2rem; }
        .testimonial-v2-grid-row .testimonial-card-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }
    }
}

@media screen and (max-width: 768px) {
    .testimonial-v2-section {
        .testimonial-v2-grid-row .testimonial-card-grid {
            grid-template-columns: 1fr;
        }
    }
}
```

Se usa CSS Grid en vez del flex + `width: 30%` de la home porque con 12 items (y con cualquier
cantidad futura que no sea múltiplo de 3) `justify-content: space-between` deja la última fila
desalineada. La apariencia de la card sí replica la de home.

### 7.3 `_testimonial-card.scss` (nuevo)

```scss
.testimonial-card {
    // Reset del botón: se usa <button> por accesibilidad, pero se ve como la card de home.
    display: block;
    width: 100%;
    text-align: left;
    font: inherit;
    color: inherit;
    cursor: pointer;

    // Mismo lenguaje visual que .cta-container en home.
    padding: 2rem;
    border-radius: 1rem;
    background-color: $theme-dark-overlay;
    border: solid 2px $theme-light-overlay;

    .testimonial-author-wrapper {
        @include testimonial-author-block;
    }

    &:focus-visible {
        outline: solid 2px $theme-dark-primary-text;
        outline-offset: 2px;
    }
}

// --- Modal ---

.testimonial-modal-overlay {
    background: $theme-dark-overlay;
    backdrop-filter: blur(.75rem);
}

.testimonial-modal {
    border-radius: 1rem;
    background-color: $theme-dark-panel-bg;
    border: solid 2px $theme-light-overlay;
    backdrop-filter: blur(5rem);
    color: $theme-dark-primary-text;
    max-width: 76rem;

    .react-responsive-modal-closeButton {
        background-color: $theme-modal-dark-overlay;
        border-radius: .75rem;
        padding: .3rem;

        svg { fill: $theme-dark-primary-text; }
    }

    @media screen and (max-width: 820px) {
        max-width: 95vw;
    }
}

.testimonial-modal-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;

    .quote-wrapper {
        @include testimonial-quote-block;
    }

    .testimonial-author-wrapper {
        @include testimonial-author-block;
    }
}

@media screen and (max-width: 768px) {
    .testimonial-card,
    .testimonial-modal-wrapper {
        .testimonial-author-wrapper {
            .testimonial-author-avatar-wrapper {
                width: 6rem;
                height: 6rem;
                min-width: 6rem;
                min-height: 6rem;
                max-width: 6rem;
                max-height: 6rem;
            }
            .testimonial-author-data-wrapper {
                .testimonial-author-name { font-size: 1.8rem; }
                .testimonial-author-position { font-size: 1.2rem; }
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .testimonial-modal-wrapper .quote-wrapper .testimonial-paragraph {
        font-size: 1.6rem;
    }
}
```

**Sobre las clases del modal**: se usan `testimonial-modal-overlay` / `testimonial-modal` en vez
de `customOverlay` / `customModal` para no colisionar con los estilos que ya cargan
`FeaturedProject` y `OtherProject` vía `_custom-modal.css`. Además así los valores salen de los
tokens SASS (`$theme-dark-overlay`, `$theme-light-overlay`, `$theme-dark-panel-bg`,
`$theme-modal-dark-overlay`) en lugar de los hex hardcodeados que hoy repiten esos `.css`.

> **Token faltante (verificado)**: `globals/_colors.scss` define
> `$theme-light-primary-background`, `$theme-dark-primary-background`, `$theme-light-primary-text`,
> `$theme-dark-primary-text`, `$theme-light-overlay`, `$theme-dark-overlay`,
> `$theme-light-panel-bg` y `$theme-dark-panel-bg`, pero **no** `$theme-modal-dark-overlay`
> (ese valor hoy solo vive como CSS var en `_custom-modal.css`). Hay que agregarlo a
> `globals/_colors.scss` con el valor actual `rgba(0,0,0,.75)`:
>
> ```scss
> $theme-modal-dark-overlay: rgba(0,0,0,.75);
> ```
>
> Los mixins `font-display-1`, `paragraph-testimonial`, `paragraph-md` y `name-2` ya existen en
> `globals/_typography.scss`, así que no requieren cambios.

---

## 8. Ruta y navegación

### `src/App.js`

```jsx
import { TestimonialsV2 } from './containers/testimonials-v2/TestimonialsV2';
...
<Route path='/testimonial' element={ <Testimonials />}/>
<Route path='/testimonial-v2' element={ <TestimonialsV2 />}/>
<Route path='/*' element={ <Navigate to='/'/> }/>
```

El orden importa: la ruta nueva tiene que quedar antes del catch-all `/*`.
Como el router es `HashRouter`, la URL real es `/#/testimonial-v2`.

### `src/data/menuContent.js`

```js
export const menuContent = {
  EN: [
    { id: 1, title: "Projects", target: "/projects" },
    { id: 2, title: "Track Record", target: "/track-record" },
    { id: 3, title: "Testimonial", target: "/testimonial" },
    // Temporal: se elimina cuando v2 reemplace a /testimonial.
    { id: 4, title: "Testimonial v2", target: "/testimonial-v2" }
  ],
  ES: [
    { id: 1, title: "Proyectos", target: "/proyectos" },
    ...
    { id: 4, title: "Testimonios v2", target: "/testimonial-v2" }
  ]
}
```

`MainNavBar` no tiene links visibles (están comentados), así que el único punto de entrada es el
menú hamburguesa, que ya mapea `menuContent`. No hace falta tocar componentes de navegación.

---

## 9. Accesibilidad

- La card es un `<button type='button'>`: foco con `Tab`, activación con `Enter` y `Espacio`.
- `aria-label` descriptivo por card, localizado ("Leer el testimonio de X" / "Read X's testimonial"),
  porque el contenido visible es solo nombre + cargo y no comunica que abre un testimonio.
- `react-responsive-modal` ya gestiona cierre con `Esc`, click en el overlay, bloqueo del scroll
  del body y `role="dialog"`.
- Estilo de `:focus-visible` explícito en la card, ya que se resetea la apariencia nativa del botón.
- El link de LinkedIn queda fuera del área clickeable de la card (decisión 1), así que no hay
  controles interactivos anidados.

---

## 10. Riesgos y puntos de atención

| Riesgo | Mitigación |
|---|---|
| Los estilos actuales del testimonio dependen del DOM del carrusel y no son reutilizables tal cual | Mixins en `_testimonial-shared.scss`, aplicados en el scope nuevo |
| Orden de `@import` en `styles.scss`: los mixins deben definirse antes de usarse | Importar `testimonial-shared` junto al bloque de globals |
| Falta el `;` en el último `@import` de `styles.scss` | Agregarlo al sumar los nuevos imports |
| Colisión de estilos de modal con `customModal` / `customOverlay` de los proyectos | Clases propias `testimonial-modal*` |
| Cards de distinta altura si algún `position` es muy largo | `align-items: stretch` en el grid (por defecto) + la card ocupa el 100% de la celda |
| `.main-section` tiene `overflow: hidden` y la grilla es alta | Mismo patrón que `TrackRecord`, que ya crece verticalmente sin recortarse. Validar en QA con las 12 cards |
| `hover-enlarge` usa `transform: scale`, que en grid puede solapar celdas vecinas | El factor es `1.025`, con `gap: 3rem` no llega a solaparse. Verificar en el breakpoint de 2 columnas |
| Testimonios largos (hasta 4 párrafos) dentro del modal | `react-responsive-modal` scrollea internamente; validar en mobile |

---

## 11. Plan de validación (QA)

1. `npm start` y navegar a `/#/testimonial-v2`.
2. Se renderizan 12 cards, 3 por fila en desktop.
3. `/#/testimonial` sigue funcionando exactamente igual (carrusel, swipe, flechas, indicadores).
4. Toggle EN/ES: cambian el título y los párrafos del modal; nombre y cargo no son traducibles (esperado).
5. Click en una card abre el modal con los párrafos correctos y el bloque de autor con el link de LinkedIn.
6. El link de LinkedIn del modal abre en pestaña nueva y no cierra el modal de forma inesperada.
7. La card **no** muestra link de LinkedIn.
8. Cierre del modal: botón X, `Esc`, click en overlay.
9. Teclado: `Tab` recorre las cards con foco visible; `Enter` y `Espacio` abren el modal.
10. Responsive: 3 columnas ≥992px, 2 columnas 768–992px, 1 columna <768px.
11. Modal con el testimonio más largo (Fermín Lira, 4 párrafos) en viewport de 375px: scrollea sin cortar contenido.
12. Bandera de país y su tooltip funcionan en card y modal; el fallback de iniciales aparece si falta la imagen.
13. Consola sin warnings de React (keys, props).
14. `npm run build` compila sin errores de SASS.

---

## 12. Fase 2 — cambio definitivo (fuera de este alcance)

Cuando se apruebe la v2:

1. `/testimonial` pasa a renderizar `TestimonialsV2`; se elimina la ruta `/testimonial-v2`.
2. Se quita el item `id: 4` de `menuContent.js`.
3. Se borran `Testimonials.js` (carrusel), `Testimonial.js`, `_testimonials.scss` y `_testimonial.scss`.
4. `Testimonial.js` se reemplaza por `TestimonialAuthor` donde haga falta; los mixins de
   `_testimonial-shared.scss` quedan como única fuente de verdad.
5. Evaluar si `react-slideshow-image` sigue siendo necesaria (la usan también `Projects`).
6. Renombrar `testimonials-v2` → `testimonials` en containers, componentes y partials.
7. Opcional: hoistear el shell del modal (`_custom-modal.css` duplicado en `featured-project` y
   `other-project`) a un único partial SCSS con tokens, y que los tres modales lo consuman.

---

## 13. Fuera de alcance

- Filtros, buscador, orden o paginación de testimonios.
- Cambios en el contenido o en la estructura de `recomendationsContent.js`.
- Traducción del campo `position` (hoy es un string único, no localizado).
- Deep-link a un testimonio puntual (por ejemplo `/testimonial-v2/hernan-buzzi`).
- Animaciones de entrada de las cards.

---

## 14. Orden de implementación sugerido

1. Token `$theme-modal-dark-overlay` en `globals/_colors.scss`.
2. `_testimonial-shared.scss` + registro en `styles.scss` (y arreglo del `;` faltante).
3. `TestimonialAuthor.js`.
4. `TestimonialCard.js` + `_testimonial-card.scss`.
5. `TestimonialsV2.js` + `_testimonials-v2.scss`.
6. Ruta en `App.js`.
7. Item temporal en `menuContent.js`.
8. Recorrer el checklist de la sección 11.
