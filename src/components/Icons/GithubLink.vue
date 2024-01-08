<template>
    <a :href="link" target="_blank" rel="noopener noreferrer">
        <img src="../../assets/github-mark-white.svg" alt="Github Link" />
    </a>
</template>

<script lang="ts">
export default {
    name: 'GithubLink',
    props: {
        link: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped src="./GithubLink.vue.scss"></style>
