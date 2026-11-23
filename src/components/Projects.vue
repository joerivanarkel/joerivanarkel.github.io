<script setup lang="ts">
import type { Component } from 'vue'
import type { ProjectMeta } from '@/types/project'

interface ProjectModule {
    default: Component
    meta?: ProjectMeta
}

// Every .vue file in ./projects is picked up automatically.
// Files starting with "_" are ignored (e.g. _Template.vue).
const modules = import.meta.glob<ProjectModule>(['./projects/*.vue', '!./projects/_*.vue'], { eager: true })

const projects = Object.entries(modules)
    .map(([path, mod]) => {
        if (!mod.meta && import.meta.env.DEV) {
            console.warn(`[Projects] ${path} does not export "meta"; it will be sorted last.`)
        }
        return { path, component: mod.default, meta: mod.meta }
    })
    .sort((a, b) =>
        (b.meta?.date ?? '').localeCompare(a.meta?.date ?? '') ||
        (b.meta?.order ?? 0) - (a.meta?.order ?? 0)
    )
</script>

<template>
    <h1 id="projects">Projects</h1>

    <component :is="p.component" v-for="p in projects" :key="p.path" />
</template>
