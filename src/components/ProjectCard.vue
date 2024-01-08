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

<style lang="scss" scoped src="./ProjectCard.vue.scss"></style>