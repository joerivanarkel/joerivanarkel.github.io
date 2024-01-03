<script setup lang="ts">
import MenuBar from './components/MenuBar.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
</script>

<template>
  <div class="app-container">
    <MenuBar />
    <div class="content">
      <AboutMe />
      <Projects />
    </div>
  </div>
</template>

<style lang="scss">
.app-container {
  display: flex;
}

@media (min-width: 768px) {
  .app-container {
    flex-direction: row;
    width: 80%;
  }
}

@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
  }
}

.content {
  max-width: 60%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .content {
    max-width: 100%;
  }
}


</style>
