<template>
    <div
        class="card project-card"
        role="button"
        tabindex="0"
        :aria-label="`Open details for ${title}`"
        @click="open = true"
        @keydown.enter.self.prevent="open = true"
        @keydown.space.self.prevent="open = true"
    >
        <h2>{{ title }}</h2>
        <h3>{{ underTitle }}</h3>
        <h4>{{ formattedDate }}</h4>
        <div v-if="$slots.summary" class="summary"><slot name="summary"></slot></div>
        <div v-if="$slots.badges" class="badges">
            <slot name="badges"></slot>
        </div>
        <span class="more">View details &rarr;</span>
    </div>

    <Modal v-model="open" :label="title">
        <h2 class="modal-title">{{ title }}</h2>
        <h3>{{ underTitle }}</h3>
        <h4>{{ formattedDate }}</h4>
        <div class="details">
            <slot name="details"><slot></slot></slot>
        </div>
        <ImageGallery v-if="images?.length" :images="images" />
        <div v-if="$slots.badges" class="badges">
            <slot name="badges"></slot>
        </div>
        <div v-if="$slots.links" class="links">
            <slot name="links"></slot>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Modal from '@/components/UI/Modal.vue'
import ImageGallery from '@/components/UI/ImageGallery.vue'
import type { ProjectImage } from '@/types/project'

const props = withDefaults(defineProps<{
    title?: string
    underTitle?: string
    /** ISO date: YYYY-MM or YYYY-MM-DD */
    date?: string
    images?: ProjectImage[]
}>(), {
    title: 'Project',
    underTitle: '',
    date: ''
})

const open = ref(false)

const formattedDate = computed(() => {
    if (!props.date) return ''
    const [year, month = '1'] = props.date.split('-')
    const d = new Date(Number(year), Number(month) - 1, 1)
    if (isNaN(d.getTime())) return props.date
    return d.toLocaleDateString('en', { month: 'long', year: 'numeric' })
})
</script>

<style lang="scss" scoped src="./ProjectCard.vue.scss"></style>
