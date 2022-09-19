<template>
  <Menu />

  <div class="flex flex-col ml-64 w-full">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section"><About /></div>
      <div class="section"><Skills /></div>
      <div class="section"><Work /></div>
      <div class="section"><Activity /></div>
    </full-page>
  </div>

  <div class="bg"></div>
</template>

<script setup>
import About from './components/About.vue';
import Menu from './components/Menu.vue';
import Skills from './components/Skills.vue';
import Work from './components/Work.vue';
import Activity from './components/Activity.vue';

const options = {
  licenseKey: 'YOUR_KEY_HEERE',
  menu: '#menu',
  anchors: ['about', 'skills', 'work', 'activity'],
};
</script>

<style scoped></style>
