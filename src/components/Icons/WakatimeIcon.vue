<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    :width="width"
    :height="height"
    aria-hidden="true"
  >
    <!-- Simple clock icon (generic) -->
    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none" />
    <path d="M12 7v5l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
  </template>

<script setup lang="ts">
defineProps<{ width?: string | number; height?: string | number }>()
</script>
