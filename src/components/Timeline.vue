<template>
  <div
    class="flex flex-col justify-center p-12 w-full h-[calc(100%-4rem)] md:h-screen"
  >
    <RubberBandHeader text="Timeline" />

    <div
      class="flex mt-4 md:mt-12 md:ml-12 text-base md:text-lg animate__animated animate__fadeInUp"
    >
      <Timeline background="#141521">
        <timeline-title bg-color="#c3f8ff" font-color="#ffffff">
          {{ year }}
        </timeline-title>
        <timeline-item bg-color="#c3f8ff" font-color="#ffffff">
          <div class="tl-body">playground Co., Ltd. (2019)</div>
          <div class="text-xs md:text-lg">System engineer</div>
        </timeline-item>

        <timeline-item bg-color="#c3f8ff" font-color="#ffffff" :hollow="true">
          <div class="tl-body">
            Master of Computer Science and Engineering, Waseda University, Tokyo
            (2019)
          </div>
        </timeline-item>

        <timeline-item bg-color="#c3f8ff" font-color="#ffffff" :hollow="true">
          <div class="tl-body">playground Co., Ltd. (2018)</div>
          <div class="text-xs md:text-lg">Engineering internship</div>
        </timeline-item>

        <timeline-item bg-color="#c3f8ff" font-color="#ffffff" :hollow="true">
          <div class="tl-body">
            Bachelor of Computer Science and Engineering, Waseda University,
            Tokyo (2017)
          </div>
        </timeline-item>
      </Timeline>
    </div>
  </div>
</template>

<script setup>
import RubberBandHeader from './RubberBandHeader.vue';
import { Timeline, TimelineTitle, TimelineItem } from 'vue3-cute-component';

const year = new Date().getFullYear();
</script>

<style scoped>
.tl-body {
  @apply text-xs font-bold;
}

@media screen(md) {
  .tl-body {
    @apply text-xl font-bold;
  }
}
</style>
