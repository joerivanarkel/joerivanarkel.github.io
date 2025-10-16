<script setup lang="ts">
import WebsiteIcon from '@/components/Icons/WebsiteIcon.vue'
import { computed } from 'vue';

const props = defineProps<{
    link: string
}>()

const websiteName = computed(() => {
    try {
        const url = new URL(props.link);
        return url.hostname
            .replace('www.', '')
            .replace('http://', '')
            .replace('https://', '');
    } catch {
        return props.link;
    }
});
</script>

<template>
    <a :href="props.link" target="_blank" rel="noopener noreferrer" class="website-link">
        <WebsiteIcon width="16" height="16" />
        <span class="website-name">{{ websiteName }}</span>
    </a>
</template>

<style lang="scss" scoped src="./WebsiteLink.vue.scss"></style>