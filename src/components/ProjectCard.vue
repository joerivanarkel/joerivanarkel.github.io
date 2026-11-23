<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <h3>{{ underTitle }}</h3>
        <h4>{{ formattedDate }}</h4>
        <slot></slot>
        <div v-if="$slots.badges" class="badges">
            <slot name="badges"></slot>
        </div>
        <div v-if="$slots.links" class="links">
            <slot name="links"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    title?: string
    underTitle?: string
    /** ISO date: YYYY-MM or YYYY-MM-DD */
    date?: string
}>(), {
    title: 'Project',
    underTitle: '',
    date: ''
})

const formattedDate = computed(() => {
    if (!props.date) return ''
    const [year, month = '1'] = props.date.split('-')
    const d = new Date(Number(year), Number(month) - 1, 1)
    if (isNaN(d.getTime())) return props.date
    return d.toLocaleDateString('en', { month: 'long', year: 'numeric' })
})
</script>

<style lang="scss" scoped src="./ProjectCard.vue.scss"></style>
