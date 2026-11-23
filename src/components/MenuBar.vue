<script setup lang="ts">
import ThemeToggle from '@/components/UI/ThemeToggle.vue'
import SocialLinks from '@/components/Links/SocialLinks.vue'
import { projects } from '@/data/projects'
</script>

<template>
    <div class="menu">
        <nav>
            <ul>
                <li><a href="#aboutme">About Me</a></li>
                <li>
                    <a href="#projects">Projects</a>
                    <ul class="sub-menu">
                        <li v-for="p in projects" :key="p.id">
                            <a :href="`#${p.id}`">{{ p.meta.title }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div class="menu-footer">
            <ThemeToggle />
            <SocialLinks />
        </div>
    </div>
</template>

<style lang="scss" scoped src="./MenuBar.vue.scss"></style>
