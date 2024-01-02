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

<style lang="scss" scoped>
img {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-left: 10px;
}
</style>
