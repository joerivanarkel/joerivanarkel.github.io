<template>
    <span class="badge">
        {{ label }}
    </span>
</template>

<script setup lang="ts">
defineProps<{
    label: string
}>()
</script>

<style lang="scss" scoped src="./Badge.vue.scss"></style>
