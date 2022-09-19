<template>
  <div class="flex flex-col justify-center p-12 w-full h-screen">
    <RubberBandHeader text="Skills" />

    <div
      class="flex pt-4 text-base md:text-lg animate__animated animate__fadeInUp"
    >
      <div class="left">
        <div>Software Engineering</div>
        <div>Programming</div>
      </div>

      <div class="right ml-64">
        <div id="tagcloud"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RubberBandHeader from './RubberBandHeader.vue';
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
const options = {
  radius: 240,
};

onMounted(() => {
  TagCloud(container, texts, options);
});
</script>

<style scoped>
.right {
  background: rgba(0, 0, 0, 0.22);
  border-radius: 50%;
}

:deep() .tagcloud--item {
  color: #c3f8ff;
  font-weight: bolder;
}
</style>
