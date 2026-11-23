# Architecture

Single-page portfolio: Vue 3 + TypeScript + Vite + SCSS, deployed to GitHub Pages.

## Layout

- `src/main.ts`: entry point, mounts `App.vue`.
- `src/App.vue`: `MenuBar` (sidebar) + `AboutMe` + `Projects`.
- Vite root is `src/` (see `vite.config.ts`); build output goes to `dist/`. The `@` alias points to `src/`.
- Component styles live next to the component as `Name.vue.scss` and are included with `<style lang="scss" scoped src="./Name.vue.scss">`.
- Global styles are in `src/styles/`. Theme colours are CSS custom properties in `_root.scss` (dark default, `[data-theme="light"]` override). Use `var(--...)` so both themes work.

## Projects system

Projects are drop-in components, not data in a central list.

| Piece | Role |
| --- | --- |
| `src/components/projects/*.vue` | One file per project. Exports `meta` and renders a `ProjectCard`. |
| `src/data/projects.ts` | Globs the folder (`import.meta.glob`, eager), skips `_*.vue`, derives each anchor id from the file name, sorts by `meta.date` descending then `meta.order`. Exports `projects`. |
| `src/components/Projects.vue` | Renders every entry, wrapped in a `<div :id>` anchor. |
| `src/components/MenuBar.vue` | Builds the sidebar TOC (sub-list under "Projects") from the same `projects` list. |
| `src/components/ProjectCard.vue` | Card summary; click opens a `UI/Modal` with details, `UI/ImageGallery`, badges and links. |
| `src/types/project.ts` | `ProjectMeta` and `ProjectImage` types. |
| `src/data/languages.ts` | Language name to badge colour, used by `UI/LanguageBadge`. |

Because the page and the TOC both read `projects`, adding or removing a file updates both. See [adding-a-project.md](adding-a-project.md).

## UI components

- `UI/Modal.vue`: teleported dialog. Esc, backdrop click and the close button close it; it locks body scroll, moves focus in, traps Tab and restores focus on close.
- `UI/ImageGallery.vue`: thumbnail grid plus lightbox (arrow keys, Esc closes only the lightbox).
- `UI/Badge.vue`, `UI/LanguageBadge.vue`, `Links/GithubLink.vue`, `Links/WebsiteLink.vue`: small building blocks used inside project slots.

## Build and deploy

- `npm run dev` serves on port 8080.
- `npm run build` runs `vue-tsc` (strict, unused imports are errors) then `vite build`.
- `.github/workflows/main.yml` builds on every push using `xRealNeon/VuePagesAction`.

## Known loose ends

- `vite.config.ts` aliases `~bootstrap`, but bootstrap is not a dependency.
- `Links/SocialLinks.vue` and `UI/SocialLinks.vue` look duplicated.
- The workflow's `reponame` is `Portfolio`, which does not match this repo.
