# Sistema de partículas 100% CSS (starfield)

Técnica documentada para posible uso futuro como fondo animado (alternativa o complemento
a `BackgroundShapes`).

- **Fuente:** ["CSS only particle system"](https://codepen.io/robinselmer/pen/mRjoXr) de Robin Selmer.
- **Tecnología:** SCSS puro. **Sin JavaScript, sin canvas, sin imágenes.**

---

## La idea central

Un `div` de 1×1 px puede dibujar **cientos de puntos** si le aplicás una lista larga de
`box-shadow` separados por coma. Cada sombra es un punto independiente, ubicado en una
posición aleatoria dentro de un área grande.

Una función Sass genera esa lista en tiempo de compilación:

```scss
$color-particle: #fff;
$spacing: 2560px;

@function particles($max) {
   $val: 0px 0px $color-particle;
   @for $i from 1 through $max {
      $val: #{$val},
      random($spacing)+px random($spacing)+px $color-particle;
   }
   @return $val;
}

@mixin particles($max) {
   box-shadow: particles($max);
}
```

Punto clave: `random()` es de **Sass**, no de CSS. Las posiciones se calculan al compilar y
quedan **hardcodeadas** en el CSS final. En runtime no hay ningún cálculo: el navegador solo
pinta una lista estática de sombras.

---

## Profundidad por capas (parallax)

Cuatro capas con distinta densidad, tamaño y velocidad. La diferencia de duración es lo que
produce la sensación de profundidad: las partículas chicas y lentas se leen como "lejanas".

| Capa | Cantidad | Tamaño | Duración |
|---|---|---|---|
| `.particle-1` | 600 | 1px | 60s |
| `.particle-2` | 200 | 2px | 120s |
| `.particle-3` | 100 | 3px | 180s |
| `.particle-4` | 400 | 1px | 600s |

```scss
.particle-1 {
  animation: animParticle $time-1 linear infinite;
  @include particles(600);
  height: 1px;
  width: 1px;
}
```

---

## El loop infinito sin cortes

Es la parte más ingeniosa. Cada `.particle` tiene un `:after` con **el mismo campo de
sombras**, posicionado exactamente `$spacing` más abajo:

```scss
.particle:after {
  position: absolute;
  content: "";
  top: $spacing;
}

.particle-1:after {
  @include particles(600);  // mismo campo que el padre
  height: 1px;
  width: 1px;
}
```

Y la animación desplaza el conjunto exactamente esa misma distancia hacia arriba:

```scss
@keyframes animParticle {
  from { transform: translateY(0px); }
  to   { transform: translateY($spacing * -1); }
}
```

Cuando el original terminó de salir por arriba, la copia del `:after` quedó **justo** donde
estaba el original al inicio. El ciclo reinicia y visualmente no se percibe ningún salto.

---

## Estructura HTML

```html
<div class="page-bg"></div>

<div class="animation-wrapper">
  <div class="particle particle-1"></div>
  <div class="particle particle-2"></div>
  <div class="particle particle-3"></div>
  <div class="particle particle-4"></div>
</div>

<div class="page-wrapper">
  <h1>CSS Particles</h1>
</div>
```

`.page-bg` y `.animation-wrapper` van `position: fixed` a pantalla completa, con `z-index: -1`
en el fondo.

---

## Performance: lo bueno y lo malo

**A favor:** la animación solo toca `transform`, que se resuelve en el **compositor**, sin
repaints ni recálculo de layout por frame. Es el mismo criterio que aplicamos al refactorizar
`_backdrown-shapes.scss` (sacar el `blur` animado y dejarlo estático).

**En contra:** son unas **2600 sombras** en total (600+200+100+400, duplicadas por los
`:after`). Eso genera:

- Un CSS final pesado (la lista de sombras se escribe entera en el archivo).
- Una **rasterización inicial costosa**: el primer pintado de cada capa es caro, aunque
  después se cachea como capa de composición.

**Si lo adaptamos, considerar:**

- Bajar la cantidad de partículas y medir. 2600 es generoso para un portfolio.
- Verificar el peso agregado al `main.css` del build.
- Respetar `prefers-reduced-motion` para pausar la animación.
- Las partículas son blancas (`#fff`): sobre el tema claro habría que usar el token de color
  correspondiente en lugar de hardcodear.
