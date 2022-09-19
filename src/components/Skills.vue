<template>
  <div
    class="flex flex-col justify-center p-12 w-full h-[calc(100%-4rem)] md:h-screen"
  >
    <RubberBandHeader text="Skills" />

    <div
      class="flex flex-col md:flex-row md:justify-between pt-4 text-base md:text-lg animate__animated animate__fadeInUp"
    >
      <div class="left">
        <div class="text-xl font-bold">Software Engineering</div>
        <div>
          Communication, Teamwork, Problem-solving, Agile software development,
          DevOps, CI/CD, Software architecture design, Databse design, System
          monitoring.
        </div>

        <div class="mt-4 text-xl font-bold">Programming</div>
        <div>Frontend: Angular, Vue.js, React, TypeScript</div>
        <div>Backend: Ruby on Rails, Node.js, Go</div>
        <div>Database: MySQL, Redis, PostgreSQL</div>
        <div>Cloud: AWS, GCP, Firebase</div>

        <div class="mt-4 text-xl font-bold">Language</div>
        <div>
          Chinese (native), Japanese (conversational), English (conversational)
        </div>
      </div>

      <div class="right">
        <div id="tagcloud" class="tagcloud hidden md:block"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RubberBandHeader from './RubberBandHeader.vue';
import * as TagCloud from 'TagCloud';
import { onMounted } from 'vue';

const container = '#tagcloud';
const texts = [
  'TypeScript',
  'JavaScript',
  'Angular',
  'RxJS',
  'Ruby',
  'Ruby on Rails',
  'Vue.js',
  'React',
  'Node.js',
  'Go',
  'Python',
  'MySQL',
  'Redis',
  'AWS',
  'Docker',
  'Git',
  'Datadog',
  'Firebase',
];
const options = {
  radius: 240,
};

onMounted(() => {
  TagCloud(container, texts, options);
});
</script>

<style scoped>
.tagcloud {
  background: rgba(0, 0, 0, 0.22);
  border-radius: 50%;
}

:deep() .tagcloud--item {
  color: #c3f8ff;
  font-weight: bold;
}
</style>
