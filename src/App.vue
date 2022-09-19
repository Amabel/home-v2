<template>
  <Menu />

  <div class="inline-flex flex-col ml-64">
    <About />
    <Skills />
  </div>

  <div class="bg"></div>
</template>

<script setup>
import About from './components/About.vue';
import Menu from './components/Menu.vue';
import Skills from './components/Skills.vue';
</script>

<style scoped></style>
