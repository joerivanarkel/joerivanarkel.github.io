<script setup lang="ts">
interface Props {
    width?: string | number
    height?: string | number
    class?: string
}

withDefaults(defineProps<Props>(), {
    width: '20',
    height: '20',
    class: ''
})
</script>

<template>
    <svg 
        :width="width" 
        :height="height" 
        viewBox="0 0 420 420" 
        xmlns="http://www.w3.org/2000/svg"
        :class="class"
        stroke="currentColor" 
        fill="none"
    >
        <path stroke-width="26" d="M209,15a195,195 0 1,0 2,0z" stroke="currentColor" fill="none"/>
        <path stroke-width="18" d="m210,15v390m195-195H15M59,90a260,260 0 0,0 302,0 m0,240 a260,260 0 0,0-302,0M195,20a250,250 0 0,0 0,382 m30,0 a250,250 0 0,0 0-382" stroke="currentColor" fill="none"/>
    </svg>
</template>
