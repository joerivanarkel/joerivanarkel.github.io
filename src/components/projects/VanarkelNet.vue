<script lang="ts">
import type { ProjectMeta } from '@/types/project'

export const meta: ProjectMeta = { date: '2023-12' }
</script>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import WebsiteLink from '@/components/Links/WebsiteLink.vue'
import Badge from '@/components/UI/Badge.vue'
import LanguageBadge from '@/components/UI/LanguageBadge.vue'
</script>

<template>
    <ProjectCard title="Vanarkel.net" underTitle="Front-end" :date="meta.date">
        <p>
            Vanarkel.net is a Lit Element application that uses Vite as a
            bundler. It is deployed on Azure, using a custom GitHub
            Action that takes the <code>dist</code> folder and pushes it to the
            <code>gh-pages</code> branch. In the project, I use SCSS for
            styling.
        </p>

        <p>
            It is a personal website that I am working on in my free time. It
            will be used to showcase my projects and to blog about my
            experiences.
        </p>

        <template #badges>
            <LanguageBadge label="TypeScript" />
            <LanguageBadge label="SCSS" />
            <Badge label="Lit" />
            <Badge label="Vite" />
            <Badge label="Azure Static Web Apps" />
        </template>

        <template #links>
            <WebsiteLink link="https://www.vanarkel.net/" />
        </template>
    </ProjectCard>
</template>
