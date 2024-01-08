<template>
    <a :href="link" target="_blank" rel="noopener noreferrer">
        <img :src="githubMark" alt="Github Link" />
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
        this.prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            this.prefersColorScheme = e.matches ? 'dark' : 'light';
        });
    },

    computed: {
        githubMark() {
            return this.prefersColorScheme === 'dark' ? githubMarkWhite : githubMarkBlack;
        }
    }
}
</script>

<style lang="scss" scoped src="./GithubLink.vue.scss"></style>
