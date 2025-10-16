<script setup lang="ts">
import { computed } from 'vue'
import GithubIcon from '@/components/Icons/GithubIcon.vue'

const props = defineProps<{
    link: string
}>()

const repoName = computed(() => {
    // Extract repo name from GitHub URL
    // Example: https://github.com/joerivanarkel/joerivanarkel.github.io -> joerivanarkel/joerivanarkel.github.io
    const match = props.link.match(/github\.com\/([^\/]+\/[^\/]+)/);
    return match ? match[1] : props.link;
})

</script>

<template>
    <a :href="props.link" target="_blank" rel="noopener noreferrer" class="github-link">
        <GithubIcon width="16" height="16" class="github-icon" />
        <span class="repo-name">{{ repoName }}</span>
    </a>
</template>

<style lang="scss" scoped src="./GithubLink.vue.scss"></style>
