<!--
  Copy this file, rename it (without the leading "_"), and fill it in.
  It is picked up and sorted by `meta.date` automatically.

  Slots:
    #summary  short teaser shown on the card
    #details  full description shown in the popup (falls back to the default slot)
    #badges   shown on the card and in the popup
    #links    shown in the popup
-->
<script lang="ts">
import type { ProjectMeta } from '@/types/project'
// Optional screenshots: put files in src/assets/projects/<name>/ and import them:
// import home from '@/assets/projects/<name>/home.png'

export const meta: ProjectMeta = {
    title: 'Title',
    date: '2024-01',
    // images: [{ src: home, alt: 'Home page', caption: 'Optional caption' }],
}
</script>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import GithubLink from '@/components/Links/GithubLink.vue'
import WebsiteLink from '@/components/Links/WebsiteLink.vue'
import Badge from '@/components/UI/Badge.vue'
import LanguageBadge from '@/components/UI/LanguageBadge.vue'
</script>

<template>
    <ProjectCard :title="meta.title" underTitle="Category" :date="meta.date" :images="meta.images">
        <template #summary>
            <p>One-line teaser.</p>
        </template>

        <template #details>
            <p>Longer description.</p>
        </template>

        <template #badges>
            <LanguageBadge label="TypeScript" />
            <Badge label="Vite" />
        </template>

        <template #links>
            <GithubLink link="https://github.com/joerivanarkel/repo" />
            <WebsiteLink link="https://example.com" />
        </template>
    </ProjectCard>
</template>
