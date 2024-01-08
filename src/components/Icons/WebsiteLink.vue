<template>
    <a :href="link" target="_blank" rel="noopener noreferrer">
        <img src="../../assets/website-logo-white.svg" alt="Website Link" />
    </a>
</template>

<script lang="ts">
export default {
    name: 'WebsiteLink',
    props: {
        link: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped src="./WebsiteLink.vue.scss"></style>