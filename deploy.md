# Deploy — portfolio-24

Guía para desplegar el portfolio y mantener alineadas las ramas del repositorio.

## URLs

| Entorno | URL |
|---------|-----|
| Producción | https://simon8x.github.io/portfolio |
| Repositorio | https://github.com/simon8x/portfolio |

## Ramas del proyecto

| Rama | Propósito | Contenido |
|------|-----------|-----------|
| `master` | **Rama principal de desarrollo** | Código fuente (React, SASS, assets, data) |
| `gh-pages` | **Producción** | Build estático generado por `npm run deploy` |
| `main` | Legacy | Rama antigua; no se usa para deploy actual |
| `feat/*` | Features | Ramas de trabajo (ej. `feat/add-spanish`, `feat/translate`) |

### Relación entre ramas

```
master (código fuente)
   │
   │  npm run deploy
   ▼
gh-pages (build estático) ──► GitHub Pages ──► simon8x.github.io/portfolio
```

- **`master`** es la fuente de verdad del código.
- **`gh-pages`** solo contiene el output de `build/`; no se edita a mano.
- Producción **no** se actualiza con un push a `master`; requiere ejecutar `npm run deploy`.

## Requisitos previos

- Node.js y npm instalados
- Dependencias instaladas: `npm install`
- Acceso de escritura al repositorio en GitHub (para push a `master` y `gh-pages`)

## Flujo de deploy a producción

### 1. Verificar cambios locales

```bash
git status
git diff
```

### 2. Commitear en `master` (si hay cambios pendientes)

```bash
git checkout master
git add .
git commit -m "feat: descripción del cambio"
git push origin master
```

> **Importante:** commitear en `master` no despliega automáticamente. Solo guarda el código fuente en el remoto.

### 3. Build y deploy

```bash
npm run deploy
```

Este comando ejecuta en secuencia:

1. `predeploy` → `npm run build` — genera la carpeta `build/` optimizada para producción
2. `deploy` → `gh-pages -d build` — publica el contenido de `build/` en la rama `gh-pages`

### 4. Verificar en producción

- Esperar 1–2 minutos para que GitHub Pages propague los cambios
- Abrir https://simon8x.github.io/portfolio
- Hard refresh si no se ven cambios: `Ctrl + Shift + R`

## Mantener versiones alineadas

### Escenario A: deploy hecho sin commitear en `master`

Si ejecutaste `npm run deploy` con cambios locales sin commitear:

1. Prod (`gh-pages`) ya tiene la versión nueva
2. `master` local/remoto queda desactualizado

**Solución:**

```bash
git checkout master
git add .
git commit -m "feat: descripción de lo desplegado"
git push origin master
```

### Escenario B: commit en `master` sin deploy

Si pusheaste a `master` pero no corriste deploy:

1. `master` tiene la versión nueva
2. Prod sigue con la versión anterior

**Solución:**

```bash
git checkout master
npm run deploy
```

### Escenario C: estado ideal (recomendado)

Siempre seguir este orden:

```
1. Desarrollar en master (o feat/* → merge a master)
2. git commit + git push origin master
3. npm run deploy
4. Verificar en producción
```

Así `master` y `gh-pages` representan la misma versión funcional.

## Trabajo con ramas de feature

```bash
# Crear rama desde master
git checkout master
git pull origin master
git checkout -b feat/mi-feature

# ... desarrollar ...

# Integrar a master
git checkout master
git merge feat/mi-feature
git push origin master
npm run deploy
```

Las ramas `feat/*` son opcionales; el deploy siempre se hace desde `master` (o la rama que tenga el código listo para producción).

## Scripts relevantes (`package.json`)

| Script | Comando | Descripción |
|--------|---------|-------------|
| `start` | `npm start` | Servidor de desarrollo local (http://localhost:3000) |
| `build` | `npm run build` | Genera `build/` sin publicar |
| `predeploy` | (automático) | Corre `build` antes de deploy |
| `deploy` | `npm run deploy` | Build + publicación a `gh-pages` |

## Configuración de GitHub Pages

- **Source branch:** `gh-pages` / root
- **Homepage** (`package.json`): `https://simon8x.github.io/portfolio`
- El build asume hosting en `/portfolio/` (subpath del repo)

## Archivos que no van al deploy

Estos archivos son notas locales y **no** deben commitearse en `master` salvo que se decida explícitamente:

- `CV_temp.md`
- `css-particle-system.md`
- `demo-projects.md`
- `prompt-cv-monetate.md`
- `testimonial-v2-plan.md`

La carpeta `build/` se genera localmente y se publica en `gh-pages`; no se commitea en `master`.

## Troubleshooting

### El sitio no muestra los cambios

- Confirmar que `npm run deploy` terminó con `Published`
- Verificar en GitHub → Settings → Pages que la ruta sea `gh-pages`
- Hard refresh o ventana de incógnito

### Error de permisos al deploy

- Verificar autenticación con GitHub (`git push` debe funcionar)
- `gh-pages` necesita push a la rama `gh-pages` del remoto

### Build falla

```bash
npm install
npm run build
```

Revisar errores de compilación antes de intentar deploy.

### `master` y prod desincronizados

Comparar fechas de último commit:

```bash
git log master -1 --oneline
git log origin/gh-pages -1 --oneline
```

Si `gh-pages` es más reciente que `master`, commitear los cambios faltantes en `master`. Si `master` es más reciente, correr `npm run deploy`.
