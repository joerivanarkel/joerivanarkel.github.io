<template>
    <button 
        @click="toggleTheme" 
        class="theme-toggle"
        :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    >
        <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
    </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const theme = ref<'light' | 'dark'>('dark')

const setTheme = (newTheme: 'light' | 'dark') => {
    theme.value = newTheme
    if (newTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light')
    } else {
        document.documentElement.removeAttribute('data-theme')
    }
    localStorage.setItem('theme', newTheme)
}

const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
}

onMounted(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
        setTheme(savedTheme)
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(prefersDark ? 'dark' : 'light')
    }
})
</script>

<style lang="scss" scoped>
@import '../styles/variables/_colors.scss';

.theme-toggle {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid rgba(128, 128, 128, 0.3);
    background-color: $background-color-accent;
    color: $light-color;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    
    &:hover {
        border-color: $primary-color;
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }
    
    svg {
        width: 20px;
        height: 20px;
    }
}
</style>
