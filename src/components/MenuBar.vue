<script setup lang="ts">
import ThemeToggle from '@/components/UI/ThemeToggle.vue'
import SocialLinks from '@/components/Links/SocialLinks.vue'
</script>

<template>
    <div class="menu">
        <nav>
            <ul>
                <li><a href="#aboutme">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>
        
        <div class="menu-footer">
            <ThemeToggle />
            <SocialLinks />
        </div>
    </div>
</template>

<style lang="scss" scoped src="./MenuBar.vue.scss"></style>
