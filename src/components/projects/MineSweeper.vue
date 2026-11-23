<script lang="ts">
import type { ProjectMeta } from '@/types/project'

export const meta: ProjectMeta = { date: '2022-08' }
</script>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import GithubLink from '@/components/Links/GithubLink.vue'
import WebsiteLink from '@/components/Links/WebsiteLink.vue'
import Badge from '@/components/UI/Badge.vue'
import LanguageBadge from '@/components/UI/LanguageBadge.vue'
</script>

<template>
    <ProjectCard title="MineSweeper" underTitle="Game" :date="meta.date">
        <p>
            A classic MineSweeper game implementation built with C# and Blazor.
            Features a clean UI, customizable difficulty levels, and timer functionality.
            This project was created to practice Blazor development and game logic implementation.
        </p>

        <template #badges>
            <LanguageBadge label="C#" />
            <Badge label="Blazor" />
            <Badge label=".NET" />
            <Badge label="GitHub Pages" />
        </template>

        <template #links>
            <GithubLink link="https://github.com/joerivanarkel/MineSweeper" />
            <WebsiteLink link="https://joerivanarkel.github.io/MineSweeper/" />
        </template>
    </ProjectCard>
</template>
