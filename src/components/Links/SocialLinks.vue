<script setup lang="ts">
import GithubIcon from '@/components/Icons/GithubIcon.vue'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
</script>

<template>
    <div class="social-links">
        <a href="https://github.com/joerivanarkel" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <GithubIcon width="20" height="20" />
        </a>
        <a href="https://www.linkedin.com/in/joerivanarkel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <LinkedinIcon width="20" height="20" />
        </a>
    </div>
</template>

<style lang="scss" scoped src="./SocialLinks.vue.scss"></style>
