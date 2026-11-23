<script setup lang="ts">
import { projects } from '@/data/projects'
</script>

<template>
    <h1 id="projects">Projects</h1>

    <div v-for="p in projects" :id="p.id" :key="p.id" class="project-anchor">
        <component :is="p.component" />
    </div>
</template>

<style scoped>
.project-anchor {
    scroll-margin-top: 1rem;
}
</style>
