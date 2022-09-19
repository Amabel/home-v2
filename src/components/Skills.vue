<template>
  <div
    class="flex justify-center items-center p-12 w-full h-[calc(100%-4rem)] md:h-screen"
  >
    <!-- <div class="wrapper flex" :class="{ light: !darkMode }"> -->
    <div class="flex flex-col">
      <RubberBandHeader text="Skills" />
      <div
        class="flex flex-col mt-4 md:mt-8 text-base md:text-lg animate__animated animate__fadeInUp"
      >
        <div class="text-xl font-bold">Software Engineering</div>
        <div>
          Communication, Teamwork, Problem-solving, Agile software development,
          Project management, DevOps, CI/CD, Software architecture design,
          Databse design, System monitoring.
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
    </div>
    <div class="hidden lg:block">
      <div id="tagcloud" class="tagcloud" :class="{ light: !darkMode }"></div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script setup>
import RubberBandHeader from './RubberBandHeader.vue';
import * as TagCloud from 'TagCloud';
import { onMounted } from 'vue';
import { darkMode } from '../store';

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
/* .wrapper {
  @apply p-12;
  border-radius: 24px;
  background: transparent;
  transition: background 2s;
} */

/* .wrapper.light {
  background: rgba(0, 0, 0, 0.42);
  transition: background 2s;
} */

.tagcloud {
  /* background: rgba(0, 0, 0, 0.42); */
  border-radius: 50%;
  transition: background 2s;
}

.tagcloud.light {
  background: transparent;
}

:deep() .tagcloud--item {
  color: #c3f8ff;
  font-weight: 900;
}
</style>
