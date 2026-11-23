<template>
    <div v-if="images.length" class="gallery">
        <button
            v-for="(img, i) in images"
            :key="img.src"
            type="button"
            class="gallery-thumb"
            :aria-label="`View image: ${img.alt}`"
            @click="active = i"
        >
            <img :src="img.src" :alt="img.alt" loading="lazy" />
        </button>

        <div v-if="current" class="lightbox" role="dialog" aria-modal="true" :aria-label="current.alt" @click.self="active = null">
            <button type="button" class="lb-btn lb-close" aria-label="Close image" @click="active = null">&times;</button>
            <button v-if="images.length > 1" type="button" class="lb-btn lb-prev" aria-label="Previous image" @click="step(-1)">&lsaquo;</button>
            <figure>
                <img :src="current.src" :alt="current.alt" />
                <figcaption v-if="current.caption">{{ current.caption }}</figcaption>
            </figure>
            <button v-if="images.length > 1" type="button" class="lb-btn lb-next" aria-label="Next image" @click="step(1)">&rsaquo;</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import type { ProjectImage } from '@/types/project'

const props = defineProps<{
    images: ProjectImage[]
}>()

const active = ref<number | null>(null)
const current = computed(() => (active.value === null ? null : props.images[active.value]))

function step(delta: number) {
    if (active.value === null) return
    const n = props.images.length
    active.value = (active.value + delta + n) % n
}

// Capture phase so Esc closes only the lightbox, not the surrounding modal.
function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') {
        e.stopPropagation()
        e.preventDefault()
        active.value = null
    } else if (e.key === 'ArrowLeft') {
        step(-1)
    } else if (e.key === 'ArrowRight') {
        step(1)
    }
}

watch(current, (now) => {
    if (now) window.addEventListener('keydown', onKey, true)
    else window.removeEventListener('keydown', onKey, true)
})

onBeforeUnmount(() => window.removeEventListener('keydown', onKey, true))
</script>

<style lang="scss" scoped src="./ImageGallery.vue.scss"></style>
