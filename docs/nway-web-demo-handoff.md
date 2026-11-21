# nWay corporate website — demo en portfolio (handoff)

Documento para retomar el trabajo en otra ventana de contexto.

## Qué se buscaba

- **No** es la maqueta nWayPlay (`Desktop\nwayplay\maqueta-bkp`).
- **Sí** es el rediseño corporativo **nWay.com**: HTML sueltos enlazados desde un hub (`index.html`): home, games, careers, team, contact, news, etc.

## Fuente canónica (disco local)

| Ruta | Notas |
|------|--------|
| **`D:\nway-web`** | Maqueta completa (~12 HTML + SCSS/CSS + assets) |
| `D:\backup-nway-web\maqueta\nway-web` | Subconjunto viejo (solo `front-page` + `team-page`) |
| `D:\backup-nway-web\wordpress\nway` | WordPress legacy, **no** es esta maqueta |

## Qué hay en el repo

Copia publicada en:

```text
public/assets/live-projects/nway-web/
```

Archivos propios añadidos en la copia (no venían tal cual del disco):

| Archivo | Rol |
|---------|-----|
| `assets/js/nway-demo-chrome.js` | Topbar sticky (logo + menú hamburguesa); aviso desktop fuera del iframe; **sin banner** embebido (`window.self !== window.top`) |
| `assets/js/team-page-slider.js` | Lógica de tabs SF/Seoul + slider (reemplaza script inline de `team-page.html`) |
| `assets/css/nway-demo.css` | Topbar/menú demo; overflow/contain en tabs; `touch-action` en pestañas |
| `index.html` | Redirige a `home.html` (mapa antiguo retirado) |
| `home.html` | Home / ex `front-page.html` — **entrada por defecto** de la demo en el portfolio |

### Integración React / datos

| Archivo | Cambio |
|---------|--------|
| `src/data/liveDemosData.js` | Entrada `id: 'nway-web'`, `deviceFrame: 'desktop'`, `deviceViewportWidth: 1280`, hints y confidencialidad |
| `src/data/projectsData.js` | Proyecto nWay: `demoId: 'nway-web'` + `demoConfidentialityNotice` |
| `src/components/live-demo-card/LiveDemoCard.js` | Marco tipo monitor, **scale** del marco para caber en viewport, barra `demoVisitorHint` arriba del monitor, `postMessage` de idioma a iframe |
| `src/assets/sass/components/live-demo-card/_live-demo-card.scss` | Estilos monitor, scale host, notice bar, botón cerrar fijo en desktop demo |

## Comportamiento de la demo (desktop frame)

1. Iframe interno **1280×16:9** (layout desktop del prototipo).
2. El **marco monitor entero** se escala con `--live-demo-desktop-scale` (sin scroll horizontal en el overlay del portfolio).
3. Aviso **desktop-only** en el portfolio (`live-demo-desktop-notice-bar`), estilo similar al hint de Mimuju en la ficha.
4. Botón **×** en demo desktop: `position: fixed` en viewport (`live-demo-fullscreen-close--desktop-stage`), no dentro del ancho lógico 1280px (evita que quede fuera en mobile).

## Team page — estabilidad y mobile

Problema original: animaciones en tabs (SF/Seoul) inyectaban muchos `<style>`, `transform` enormes → overflow y cuelgues.

Solución en `team-page-slider.js`:

- Keyframes compartidos (`nwayTeamBlurDrift`, `nwayTeamGoAnimation`).
- Drift con `translate3d` ±12px (no viewport/2).
- Slider drag: un binding por tab; **solo layout del tab visible** + `requestAnimationFrame` si `clientWidth === 0`.
- Tabs: listeners JS (`bindTabHeader`), sin `onclick` en HTML; CSS `touch-action: manipulation`.

Ajustes mobile posteriores: cerrar visible; tabs que fallaban al maquetar tab oculto.

## Responsive de la maqueta

- Diseño **desktop-first**; mobile del HTML **incompleto** (comunicado en hints/banners).
- En iframe del portfolio, `nway-demo-chrome.js` fuerza `viewport width=1280` (evita que `device-width` rompa tabs Team en mobile).
- Tabs Team: `pointerup` en wrappers + `postMessage` `portfolio-viewport-update` al escalar el monitor en `LiveDemoCard`.

## Cómo probar

```bash
npm start
```

- Sección **live demos** o proyecto **nWay** → **View demo**.
- Entrada demo: `…/assets/live-projects/nway-web/home.html` (menú ☰ para el resto de pantallas)
- Pantalla crítica: **Team** → cambiar **san francisco** / **seoul**; probar en viewport estrecho y cerrar con ×.

Build: `npm run build` (última verificación OK con warnings ESLint preexistentes).

## Posibles siguientes pasos

- [ ] Commit / deploy gh-pages cuando el usuario lo pida.
- [ ] Pulir animación `showTeam()` al tap en el trigger del carrusel.
- [ ] Touch drag en el slider (hoy solo `mousedown`).
- [ ] Quitar duplicado de hint si se abre la maqueta **fuera** del portfolio (solo hub note local).
- [ ] Sincronizar textos ES/EN del hub en iframe con `postMessage` (hoy solo banner embebido se omite).
- [ ] Reducir peso del deploy (excluir SCSS fuente si solo se sirve `styles.css`).

## Cómo referir esto en un prompt nuevo

Copiá o adaptá una de estas líneas:

**Corta:**

> Continuá el trabajo del **handoff demo nWay** según `docs/nway-web-demo-handoff.md` (live demo `nway-web` en `public/assets/live-projects/nway-web`).

**Con foco en archivo:**

> Leé `docs/nway-web-demo-handoff.md` y [describe tu tarea: ej. arreglar X en team-page / ajustar marco desktop / copy del hint].

**Por IDs del código:**

> Demo `liveDemosData` id **`nway-web`**, `demoId` en proyecto nWay, carpeta **`public/assets/live-projects/nway-web`**.

---

*Última actualización de contexto: integración inicial + scale desktop + fixes mobile (cerrar + tabs). Fuente original: `D:\nway-web`.*