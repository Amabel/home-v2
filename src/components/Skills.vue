<template>
  <div
    class="flex justify-center items-center px-12 pt-12 md:pt-0 w-full h-[calc(100%-4rem)] md:h-screen"
  >
    <div class="flex flex-col max-w-2xl">
      <RubberBandHeader text="Skills" />
      <div
        class="flex flex-col mt-4 md:mt-12 text-base md:text-lg animate__animated animate__fadeInUp"
      >
        <div class="text-base md:text-xl font-bold">Software Engineering</div>
        <div class="text-sm md:text-base">
          Communication, Teamwork, Problem solving, Agile software development,
          Project management, Software architecture design, Databse design,
          System monitoring, Code review, Software documentation, DevOps, CI/CD
        </div>

        <div class="mt-4 text-base md:text-xl font-bold">Programming</div>
        <div class="text-sm md:text-base">
          Frontend: Angular, Vue.js, React, TypeScript
        </div>
        <div class="text-sm md:text-base">
          Backend: Ruby on Rails, Node.js, Go
        </div>
        <div class="text-sm md:text-base">
          Database: MySQL, Redis, PostgreSQL
        </div>
        <div class="text-sm md:text-base">Cloud: AWS, GCP, Firebase</div>

        <div class="mt-4 text-base md:text-xl font-bold">Language</div>
        <div class="text-sm md:text-base">
          Chinese (native), Japanese (conversational), English (conversational)
        </div>
      </div>
    </div>
    <div class="hidden lg:block">
      <div id="tagcloud" class="tagcloud"></div>
    </div>
  </div>
</template>

<script setup>
import RubberBandHeader from './RubberBandHeader.vue';
import TagCloud from 'TagCloud';
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
  border-radius: 50%;
  transition: background 2s;
}

.tagcloud.light {
  background: transparent;
}

:deep() .tagcloud--item {
  color: var(--primary-color);
  font-weight: 900;
}
</style>
