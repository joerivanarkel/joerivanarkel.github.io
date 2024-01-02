<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <h3>{{ underTitle }}</h3>
        <h4>{{ date }}</h4>
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
        },
        date: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables/_colors.scss';
h2 {
    margin-bottom: 0;
}
h3 {
    margin-top: 0;
    margin-bottom: 0;
    color: $primary-color;
    font-style: italic;
}
h4 {
    margin-top: 0;
    color: $secondary-color;
    font-style: italic;
}
</style>