<template>
  <About />
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import About from './components/About.vue';
// import * as TagCloud from 'TagCloud';
// import { onMounted } from 'vue';

// let tags = [
//   { tagName: 'js', count: 5 },
//   { tagName: 'css', count: 9 },
//   { tagName: 'less', count: 13 },
//   { tagName: 'rest', count: 2 },
// ];

// const container = '#tagcloud';
// const texts = [
//   '3D',
//   'TagCloud',
//   'JavaScript',
//   'CSS3',
//   'Animation',
//   'Interactive',
//   'Mouse',
//   'Rolling',
//   'Sphere',
//   '6KB',
//   'v2.x',
// ];
// const options = {};

// onMounted(() => {
//   TagCloud(container, texts, options);
// });
</script>

<style scoped>
:deep() .tagcloud--item {
  color: blue;
}

.section {
  background-color: orange;
}
</style>
