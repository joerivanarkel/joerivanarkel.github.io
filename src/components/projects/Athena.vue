<script lang="ts">
import type { ProjectMeta } from '@/types/project'

export const meta: ProjectMeta = { title: 'Athena', date: '2026-05' }
</script>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import GithubLink from '@/components/Links/GithubLink.vue'
import Badge from '@/components/UI/Badge.vue'
import LanguageBadge from '@/components/UI/LanguageBadge.vue'
</script>

<template>
    <ProjectCard :title="meta.title" underTitle="Static site generator" :date="meta.date" :images="meta.images">
        <template #summary>
            <p>A .NET static site generator that turns Markdown/YAML worldbuilding notes into a wiki-style encyclopedia.</p>
        </template>

        <template #details>
            <p>
                Athena turns a worldbuilding vault into a fast, wiki-style website, with no server or database.
                I built it to publish my own fantasy world, Ashunet on the continent of Iagoband, which I keep in Obsidian.
                The generated site is hosted for free on GitHub Pages.
            </p>
            <p>
                <strong>Content format:</strong> articles are plain <code>.athena</code> files, with YAML frontmatter
                for the infobox and metadata and a Markdown body for the text. Wikilinks, footnotes, IPA
                pronunciations, tables and a table of contents are all supported.
            </p>
            <p>
                <strong>Rendering:</strong> a .NET 9 CLI parses the files and renders each article with Blazor
                components on the server, with no browser runtime. Each page gets an infobox, an auto-generated
                table of contents, cross-links and a references section. The styling is a hand-written
                "Codex Mundi" stylesheet with an EB Garamond serif, a rubric accent colour and a responsive
                two-column layout.
            </p>
            <p>
                <strong>Obsidian import:</strong> a Python converter takes my existing Obsidian notes and turns them
                into <code>.athena</code> files. It converts Obsidian callout infoboxes to structured YAML, resolves
                wikilinks to slugs, copies referenced images and removes plugin-only blocks. Running it on my vault
                produced about 150 articles.
            </p>
            <p>
                <strong>Deployment:</strong> a GitHub Actions workflow builds the solution and generates the site on
                every pull request, and merges deploy to GitHub Pages. The generator fails the build if an article
                doesn't parse, and warns about links to missing articles.
            </p>
        </template>

        <template #badges>
            <LanguageBadge label="C#" />
            <LanguageBadge label="Python" />
            <Badge label=".NET 9" />
            <Badge label="Blazor" />
            <Badge label="Markdig" />
            <Badge label="YamlDotNet" />
            <Badge label="GitHub Actions" />
            <Badge label="GitHub Pages" />
        </template>

        <template #links>
            <GithubLink link="https://github.com/joerivanarkel/Athena" />
        </template>
    </ProjectCard>
</template>
