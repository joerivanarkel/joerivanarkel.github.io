<template>
    <span class="badge">
        <span class="badge-dot" :style="{ backgroundColor: color }"></span>
        {{ label }}
    </span>
</template>

<script setup lang="ts">
defineProps<{
    label: string
    color?: string
}>()
</script>

<style lang="scss" scoped src="./Badge.vue.scss"></style>
