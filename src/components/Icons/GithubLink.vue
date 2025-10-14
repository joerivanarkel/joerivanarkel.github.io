<template>
    <a :href="link" target="_blank" rel="noopener noreferrer" class="github-link">
        <img :src="githubMark" alt="Github Link" class="github-icon" />
        <span class="repo-name">{{ repoName }}</span>
    </a>
</template>

<script lang="ts">
import githubMarkWhite from '../../assets/github-mark-white.svg';
import githubMarkBlack from '../../assets/github-mark.svg';

export default {
    name: 'GithubLink',
    props: {
        link: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            prefersColorScheme: 'dark'
        }
    },
    mounted() {
        this.updateTheme();
        // Listen for theme changes
        window.addEventListener('storage', this.updateTheme);
        // Also check for data-theme attribute changes
        const observer = new MutationObserver(this.updateTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    },
    methods: {
        updateTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                this.prefersColorScheme = savedTheme;
            } else {
                this.prefersColorScheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
            }
        }
    },

    computed: {
        githubMark() {
            return this.prefersColorScheme === 'dark' ? githubMarkWhite : githubMarkBlack;
        },
        repoName() {
            // Extract repo name from GitHub URL
            // Example: https://github.com/joerivanarkel/joerivanarkel.github.io -> joerivanarkel/joerivanarkel.github.io
            const match = this.link.match(/github\.com\/([^\/]+\/[^\/]+)/);
            return match ? match[1] : this.link;
        }
    }
}
</script>

<style lang="scss" scoped src="./GithubLink.vue.scss"></style>
