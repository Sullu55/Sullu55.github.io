# Portfolio — Anyelo Sulluchuco

Sitio estático construido con [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), desplegado en **GitHub Pages** → [https://sullu55.github.io](https://sullu55.github.io).

Portafolio académico/profesional como estudiante de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú (UNCP).

## Contenido

- **/** — Hero + proyectos destacados + stack.
- **/proyectos** — Todos mis proyectos publicados con tarjetas (stack, features, repo).
- **/curso** — Resumen detallado de las semanas 1-8 del curso *Desarrollo de Aplicaciones Web (IS093A)* con código de ejemplo.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build estático → dist/
npm run preview  # previsualizar build
```

## Deploy

Push a `main` → GitHub Actions builda con Astro y publica en GitHub Pages.
Workflow en `.github/workflows/deploy.yml`.

## Stack

- Astro 6 (output estático)
- Tailwind CSS v4 (vía `@tailwindcss/vite`)
- TypeScript strict
- GitHub Actions + GitHub Pages
