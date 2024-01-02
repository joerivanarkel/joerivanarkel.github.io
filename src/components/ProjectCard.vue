<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <h3>{{ underTitle }}</h3>
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ProjectCard',
    props: {
        title: {
            type: String,
            default: 'Project'
        },
        underTitle: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
h2 {
    margin-bottom: 0;
}
h3 {
    margin-top: 0;
}
</style>