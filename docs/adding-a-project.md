# Adding a project

1. Copy `src/components/projects/_Template.vue` to `src/components/projects/<Name>.vue`.
   Files starting with `_` are ignored by the folder scan, so the template never shows up on the page.
2. Edit the `meta` export:
   - `title` (required): shown on the card, in the popup and in the sidebar TOC.
   - `date` (required): ISO `YYYY-MM` or `YYYY-MM-DD`. Sorting is newest first.
   - `order` (optional): tiebreaker for equal dates, higher first.
   - `images` (optional): `[{ src, alt, caption? }]`.
3. Fill in the slots of `ProjectCard`:
   - `#summary`: short teaser on the card.
   - `#details`: full description in the popup (falls back to the default slot).
   - `#badges`: shown on the card and in the popup. `LanguageBadge` looks up its colour in `src/data/languages.ts`; add new languages there.
   - `#links`: shown in the popup.
4. Run `npm run build`. `vue-tsc` fails on unused imports, so remove imports you do not use.

## Anchor ids and the TOC

The anchor id comes from the file name: `VanarkelNet.vue` becomes `#vanarkel-net`. The sidebar TOC is generated from the same list, so no other file needs editing. Renaming a file changes its anchor.

## Images

Put files in `src/assets/projects/<name>/` and import them in the project file's plain `<script>` block, then reference them in `meta.images`:

```ts
import home from '@/assets/projects/<name>/home.png'

export const meta: ProjectMeta = {
    title: 'My project',
    date: '2025-03',
    images: [{ src: home, alt: 'Home page', caption: 'Optional' }],
}
```

## Gotchas

- `meta` must be exported from a normal `<script lang="ts">` block, next to `<script setup>`, so it can be imported by name.
- A project file without a `meta` export is skipped and logs a console warning.
- Pass `:title="meta.title"`, `:date="meta.date"` and `:images="meta.images"` to `ProjectCard` so the card and the TOC stay in sync.
