<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import MenuBar from './components/MenuBar.vue'
</script>

<template>
  <div class="app-container">
    <MenuBar />
    <div class="content">
      <h1>Vue 3 + Vite</h1>
      <p>Click on the Vite and Vue logos to learn more</p>
      <HelloWorld :msg="'Hello World'" />
    </div>
  </div>
</template>

<style lang="scss">

.app-container {
  display: flex;
}


</style>
