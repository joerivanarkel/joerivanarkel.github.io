<template>
    <span class="language-badge">
        <span class="language-badge-dot" :style="{ backgroundColor: color }"></span>
        {{ label }}
    </span>
</template>

<script setup lang="ts">
defineProps<{
    label: string
    color: string
}>()
</script>

<style lang="scss" scoped src="./LanguageBadge.vue.scss"></style>
