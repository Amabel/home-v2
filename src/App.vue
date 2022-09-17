<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import * as TagCloud from 'TagCloud';
import { onMounted } from 'vue';

let tags = [
  { tagName: 'js', count: 5 },
  { tagName: 'css', count: 9 },
  { tagName: 'less', count: 13 },
  { tagName: 'rest', count: 2 },
];

const container = '#tagcloud';
const texts = [
  '3D',
  'TagCloud',
  'JavaScript',
  'CSS3',
  'Animation',
  'Interactive',
  'Mouse',
  'Rolling',
  'Sphere',
  '6KB',
  'v2.x',
];
const options = {};

onMounted(() => {
  TagCloud(container, texts, options);
});
</script>

<template>
  <div id="tagcloud"></div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
>>> .tagcloud--item {
  color: blue;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
