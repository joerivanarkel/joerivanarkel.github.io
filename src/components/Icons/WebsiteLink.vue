<template>
    <a :href="link" target="_blank" rel="noopener noreferrer">
        <img src="../../assets/website-logo-white.svg" alt="Website Link" />
    </a>
</template>

<script>
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

<style lang="scss" scoped>
img {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-left: 10px;
}
</style>