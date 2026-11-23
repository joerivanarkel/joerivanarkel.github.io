<script lang="ts">
import type { ProjectMeta } from '@/types/project'

export const meta: ProjectMeta = { title: 'Portfolio', date: '2024-01' }
</script>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import GithubLink from '@/components/Links/GithubLink.vue'
import WebsiteLink from '@/components/Links/WebsiteLink.vue'
import Badge from '@/components/UI/Badge.vue'
import LanguageBadge from '@/components/UI/LanguageBadge.vue'
</script>

<template>
    <ProjectCard :title="meta.title" underTitle="Front-end" :date="meta.date" :images="meta.images">
        <template #summary>
            <p>The portfolio you are looking at: a Vue 3 + Vite site on GitHub Pages.</p>
        </template>

        <template #details>
        <p>
            The portfolio you are currently looking at. It is a Vue 3 application
            that uses Vite as a bundler. It is deployed on GitHub Pages, using a
            GitHub Action that takes the <code>dist</code> folder and
            pushes it to the <code>gh-pages</code> branch.
        </p>
        </template>

        <template #badges>
            <LanguageBadge label="Vue" />
            <LanguageBadge label="TypeScript" />
            <LanguageBadge label="SCSS" />
            <Badge label="Vite" />
            <Badge label="GitHub Pages" />
        </template>

        <template #links>
            <GithubLink link="https://github.com/joerivanarkel/joerivanarkel.github.io" />
            <WebsiteLink link="https://joerivanarkel.github.io/" />
        </template>
    </ProjectCard>
</template>
