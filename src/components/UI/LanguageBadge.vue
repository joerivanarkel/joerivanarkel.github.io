<template>
    <span class="language-badge">
        <span class="language-badge-dot" :style="{ backgroundColor: dotColor }"></span>
        {{ label }}
    </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { languageColors } from '@/data/languages'

const props = defineProps<{
    label: string
    color?: string
}>()

const dotColor = computed(() => props.color ?? languageColors[props.label] ?? '#888888')
</script>

<style lang="scss" scoped src="./LanguageBadge.vue.scss"></style>
