<template>
    <span class="badge" :style="{ backgroundColor: color }">
        {{ label }}
    </span>
</template>

<script setup lang="ts">
defineProps<{
    label: string
    color?: string
}>()
</script>

<style lang="scss" scoped>
.badge {
    display: inline-block;
    padding: 0.25em 0.6em;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1;
    color: #ffffff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 2em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
}
</style>
