<!--
  Copy this file, rename it (without the leading "_"), and fill it in.
  It is picked up and sorted by `meta.date` automatically.
-->
<script lang="ts">
import type { ProjectMeta } from '@/types/project'

export const meta: ProjectMeta = { date: '2024-01' }
</script>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import GithubLink from '@/components/Links/GithubLink.vue'
import WebsiteLink from '@/components/Links/WebsiteLink.vue'
import Badge from '@/components/UI/Badge.vue'
import LanguageBadge from '@/components/UI/LanguageBadge.vue'
</script>

<template>
    <ProjectCard title="Title" underTitle="Category" :date="meta.date">
        <p>Description.</p>

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
