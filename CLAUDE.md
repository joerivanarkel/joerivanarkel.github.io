# CLAUDE.md

Personal portfolio: Vue 3 + TypeScript + Vite + SCSS, deployed to GitHub Pages.

## Commands

- `npm run dev`: dev server on port 8080
- `npm run build`: `vue-tsc` then `vite build`. Run it before finishing any change; unused imports are errors.

## Docs

Read these before changing the matching area:

- [docs/architecture.md](docs/architecture.md): layout, projects system, UI components, build and deploy, known loose ends
- [docs/adding-a-project.md](docs/adding-a-project.md): how to add a project, `meta` fields, slots, images, gotchas

Keep the docs up to date when you change the structure they describe.

## Conventions

- Projects are drop-in files in `src/components/projects/`; never hard-code a project in `Projects.vue` or `MenuBar.vue`. Both read `src/data/projects.ts`.
- Component styles go in a sibling `Name.vue.scss`. Use theme CSS variables (`var(--card-border)` etc.) so dark and light mode both work.
- Use `@/` imports for anything under `src/`.
