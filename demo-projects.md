# Proyectos demo — recuperar sitios borrados

Exploración de alternativas para mostrar parcialmente sitios propios que ya no existen, usando capturas de [Wayback Machine](https://web.archive.org).

## Contexto

Algunos proyectos del portfolio ya no están online. Se evaluaron formas de mostrar cómo se veían, por ejemplo un snapshot como:

`https://web.archive.org/web/20220205233447/https://olympicgamesjam.nwayplay.com/`

Para embeber sin la toolbar de Wayback, usar el modificador `if_`:

`https://web.archive.org/web/20220205233447if_/https://olympicgamesjam.nwayplay.com/`

## Alternativas evaluadas

### 1. Iframe a web.archive.org

**Viabilidad:** técnicamente posible (Wayback no bloquea iframe con `X-Frame-Options` ni `frame-ancestors` restrictivo).

**Pros:**
- Implementación trivial
- Sin almacenar assets en el repo

**Contras:**
- Carga lenta (~4–5 s por request)
- Rate limiting frecuente (429)
- Dependencia externa; el snapshot puede dejar de estar disponible
- Sitios JS-heavy suelen renderizar mal: el HTML archivado puede ser solo un shell y los assets del juego/app no haberse guardado

**Conclusión:** viable como bonus puntual, no como estrategia principal.

### 2. Descargar copia y montarla en el proyecto

**Viabilidad:** posible, pero costosa y frágil.

**Pros:**
- Control total del contenido servido
- Sin dependencia de archive.org en runtime

**Contras:**
- Hay que reescribir rutas y assets
- En sitios dinámicos, muchos recursos no están en el archivo
- Resultado a menudo incompleto o poco fiel
- Aumenta peso del repo y hay zona gris de licencias

**Conclusión:** solo tiene sentido para sitios HTML/CSS estáticos simples.

### 3. Enfoque recomendado (screenshots + enlace)

**Viabilidad:** alta; el más simple y confiable.

1. Abrir cada snapshot en el navegador
2. Capturar **screenshots** o un **screen recording corto** de lo que sí se ve bien
3. Mostrar ese media en el modal del proyecto (p. ej. `project-modal`)
4. Botón secundario: **"Ver en Wayback Machine"** → abre el snapshot en pestaña nueva

**Pros:**
- Contenido estático, carga rápida, UX consistente con el portfolio
- Sin depender de que archive.org responda en cada visita
- El enlace externo da prueba de autenticidad

**Contras:**
- Requiere trabajo manual de captura por proyecto

## Estrategia práctica

| Prioridad | Acción |
|-----------|--------|
| Principal | Screenshots / video en modal + link a Wayback |
| Opcional | Iframe con lazy load y fallback a imagen si falla (solo si un snapshot renderiza bien) |
| Evitar | Descargar y hostear copia completa salvo sitios muy simples |

## Notas técnicas (iframe, si se usa)

- URL con sufijo `if_` para contenido embebido sin chrome de Wayback
- Lazy load del iframe
- Fallback a imagen estática si timeout o error de carga
- Probar snapshot por snapshot: no asumir que todos los assets están archivados
