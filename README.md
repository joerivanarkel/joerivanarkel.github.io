# Portfolio

This is my portfolio. It is a work in progress.

## Adding a project

1. Copy `src/components/projects/_Template.vue` to `src/components/projects/<Name>.vue`.
2. Set `meta.date` (ISO `YYYY-MM` or `YYYY-MM-DD`) and fill in the slots:
   `#summary` (card teaser), `#details` (popup description), `#badges`, `#links`.
3. Optional screenshots: put images in `src/assets/projects/<name>/`, import them and list them in `meta.images`.

Projects are auto-discovered and sorted newest first (optional `meta.order` breaks ties).
Clicking a card opens a popup with the details, images and links.
Language badge colours live in `src/data/languages.ts`.
