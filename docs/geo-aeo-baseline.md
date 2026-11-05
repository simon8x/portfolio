# GEO / AEO — baseline de medición

Registro de visibilidad en motores generativos y answer engines **antes y después** de las fases GEO/AEO del portfolio.

**Sitio canónico:** https://simon8x.github.io/portfolio/  
**Fuentes propias a vigilar:** portfolio, [GitHub](https://github.com/simon8x), [LinkedIn](https://www.linkedin.com/in/simonibalo/), repo [portfolio](https://github.com/simon8x/portfolio)

---

## Cómo medir (Fase 0.2)

1. Usar **ventana de incógnito** o sesión sin historial personalizado cuando sea posible.
2. Ejecutar cada prompt **tal cual** (o la variante EN/ES según la fila).
3. En **Perplexity**, **ChatGPT** (con navegación/browse si está disponible) y **Gemini**, anotar:
   - ¿Menciona a Simón Ibalo / Simon Ibalo?
   - ¿Cita `simon8x.github.io/portfolio` u otra URL tuya?
   - ¿Qué fuentes aparecen en citas o enlaces? (LinkedIn, GitHub, terceros)
4. Copiar URLs citadas en la columna **Fuentes observadas** (separar por motor con `|` o subfilas).
5. Tras un deploy importante, duplicar una sección **Post-medición** abajo con nueva fecha.

**Criterio útil:** el portfolio o `llms.txt` aparece citado en ≥ 3 prompts de **marca/nombre** tras las mejoras.

---

## Baseline — pre-implementación / primera medición

**Fecha de medición:** _YYYY-MM-DD_  
**Deploy / commit de referencia:** _ej. post Fase 5 — `9b3a059`_  
**Quién midió:** _nombre_

| ID | Prompt (usar uno por fila) | Perplexity | ChatGPT | Gemini | ¿Portfolio / llms citado? | Notas |
|----|----------------------------|------------|---------|--------|---------------------------|-------|
| P01 | Who is Simón Ibalo UX UI engineer? | | | | | |
| P02 | ¿Quién es Simón Ibalo ingeniero UX UI? | | | | | |
| P03 | Simon Ibalo portfolio React Argentina | | | | | |
| P04 | Simón Ibalo Monetate UI Engineer | | | | | |
| P05 | Simon Ibalo LinkedIn UX engineer northeast Argentina | | | | | |
| P06 | Simón Ibalo proyectos portfolio NFT marketplace | | | | | |
| P07 | Simon Ibalo track record CV UX UI | | | | | |
| P08 | ¿Qué proyectos tiene Simón Ibalo en su portfolio? | | | | | |
| P09 | UX UI Engineer 9 years React portfolio GitHub simon8x | | | | | |
| P10 | Simon Ibalo colleague recommendations testimonials | | | | | |
| P11 | Simón Ibalo Mimuju EdTech case study | | | | | |
| P12 | Simon Ibalo Business Analyst to UX UI engineer | | | | | |
| P13 | Ingeniero UX UI React noreste Argentina portfolio | | | | | |
| P14 | simon8x.github.io portfolio | | | | | |
| P15 | Simon Ibalo CS Tool NFT marketplace UX | | | | | |

### Leyenda columnas por motor

Escribir en cada celda, por ejemplo:

- `Sí — https://simon8x.github.io/portfolio/`
- `No — solo LinkedIn`
- `Parcial — GitHub profile, no portfolio`
- `N/A — sin browse`

---

## Post-medición (repetir tras deploy)

**Fecha:** _YYYY-MM-DD_  
**Deploy / commit:** _

| ID | Mismo prompt que P01–P15 | Perplexity | ChatGPT | Gemini | ¿Portfolio / llms citado? | Δ vs baseline |
|----|--------------------------|------------|---------|--------|---------------------------|---------------|
| P01 | Who is Simón Ibalo UX UI engineer? | | | | | |
| P02 | ¿Quién es Simón Ibalo ingeniero UX UI? | | | | | |
| P03 | Simon Ibalo portfolio React Argentina | | | | | |
| P04 | Simón Ibalo Monetate UI Engineer | | | | | |
| P05 | Simon Ibalo LinkedIn UX engineer northeast Argentina | | | | | |
| P06 | Simón Ibalo proyectos portfolio NFT marketplace | | | | | |
| P07 | Simon Ibalo track record CV UX UI | | | | | |
| P08 | ¿Qué proyectos tiene Simón Ibalo en su portfolio? | | | | | |
| P09 | UX UI Engineer 9 years React portfolio GitHub simon8x | | | | | |
| P10 | Simon Ibalo colleague recommendations testimonials | | | | | |
| P11 | Simón Ibalo Mimuju EdTech case study | | | | | |
| P12 | Simon Ibalo Business Analyst to UX UI engineer | | | | | |
| P13 | Ingeniero UX UI React noreste Argentina portfolio | | | | | |
| P14 | simon8x.github.io portfolio | | | | | |
| P15 | Simon Ibalo CS Tool NFT marketplace UX | | | | | |

---

## Prompts adicionales (opcional)

| ID | Prompt | Uso |
|----|--------|-----|
| X01 | What does Simon Ibalo say about his experience with React? | Verificar alineación de hechos (9 web / 5 React) |
| X02 | ¿Cómo contactar a Simón Ibalo? | Debería mencionar LinkedIn coherente con FAQ |
| X03 | Simon Ibalo nwayplay Olympic NFT marketplace | Proyecto destacado + fuente portfolio |

---

## Resumen ejecutivo (completar a mano)

| Métrica | Baseline | Post-medición |
|---------|----------|---------------|
| Prompts donde aparece el nombre | /15 | /15 |
| Prompts con URL del portfolio | /15 | /15 |
| Prompts con llms.txt o llms-full citado | /15 | /15 |
| Prompts solo LinkedIn/GitHub (sin portfolio) | /15 | /15 |

**Observaciones:**

- 
- 

---

## Referencia

Plan maestro: [geo-aeo-implementation-plan.md](./geo-aeo-implementation-plan.md) — Fases 0 y 6.
