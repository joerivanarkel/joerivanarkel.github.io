<script setup lang="ts">
import MenuBar from './components/MenuBar.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
  <ThemeToggle />
  <div class="app-container">
    <MenuBar />
    <div class="content">
      <AboutMe />
      <Projects />
    </div>
  </div>
</template>

<style lang="scss" src="./App.vue.scss"></style>