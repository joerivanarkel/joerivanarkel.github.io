<script lang="ts">
import type { ProjectMeta } from '@/types/project'

export const meta: ProjectMeta = { date: '2022-09' }
</script>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import GithubLink from '@/components/Links/GithubLink.vue'
import LanguageBadge from '@/components/UI/LanguageBadge.vue'
</script>

<template>
    <ProjectCard title="Piratelang 1" underTitle="Back-end" :date="meta.date">
        <p>
            Pirate is a toy programming language that is written in C# and F#. It is a simple language that was created to learn more about programming languages and interpreters.
        </p>
        <p>
            The lexer and parser are written in F#, while the interpreter is written in C#. The interpreter is a simple tree walker that walks through the AST and executes the code.
        </p>
        <p>
            For VSCode, I have written a syntax highlighter. This is written in TypeScript and is deployed as a VSIX package.
        </p>

        <template #badges>
            <LanguageBadge label="C#" />
            <LanguageBadge label="F#" />
            <LanguageBadge label="TypeScript" />
        </template>

        <template #links>
            <GithubLink link="https://github.com/piratelang/pirate" />
            <GithubLink link="https://github.com/piratelang/vscode" />
        </template>
    </ProjectCard>
</template>
