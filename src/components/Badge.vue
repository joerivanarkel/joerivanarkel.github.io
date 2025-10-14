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

<style lang="scss" scoped>
@import '../styles/variables/_colors.scss';

.badge {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.25rem 0.625rem;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1;
    color: $light-color;
    background-color: var(--background-color-accent);
    border: 1px solid var(--card-border);
    border-radius: 2em;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    transition: background-color 0.15s ease-in-out;

    &:hover {
        background-color: var(--card-background);
    }
}

.badge-dot {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    display: inline-block;
}
</style>
