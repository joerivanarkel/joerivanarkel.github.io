<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="modelValue" class="modal-backdrop" @click.self="close">
                <div
                    ref="panel"
                    class="modal-panel"
                    role="dialog"
                    aria-modal="true"
                    :aria-label="label"
                    tabindex="-1"
                    @keydown="onKeydown"
                >
                    <button class="modal-close" type="button" aria-label="Close" @click="close">&times;</button>
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps<{
    modelValue: boolean
    label?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const panel = ref<HTMLElement | null>(null)
let previouslyFocused: HTMLElement | null = null

function close() {
    emit('update:modelValue', false)
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
        e.stopPropagation()
        close()
        return
    }
    if (e.key !== 'Tab' || !panel.value) return
    const items = Array.from(panel.value.querySelectorAll<HTMLElement>(FOCUSABLE))
    if (items.length === 0) {
        e.preventDefault()
        return
    }
    const first = items[0]
    const last = items[items.length - 1]
    const active = document.activeElement
    if (e.shiftKey && (active === first || active === panel.value)) {
        e.preventDefault()
        last.focus()
    } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
    }
}

function unlock() {
    document.body.style.overflow = ''
}

watch(() => props.modelValue, async (open) => {
    if (open) {
        previouslyFocused = document.activeElement as HTMLElement | null
        document.body.style.overflow = 'hidden'
        await nextTick()
        panel.value?.focus()
    } else {
        unlock()
        previouslyFocused?.focus()
    }
})

onBeforeUnmount(unlock)
</script>

<style lang="scss" scoped src="./Modal.vue.scss"></style>
