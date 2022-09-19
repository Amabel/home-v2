<template>
  <div
    class="main inline-flex items-center w-full h-[calc(100%-4rem)] md:h-screen"
  >
    <div class="flex flex-col p-12">
      <RubberBandHeader text="About Amabel" />
      <p class="pt-4 text-base md:text-lg animate__animated animate__fadeInUp">
        Fullstack engineer.
      </p>
    </div>
  </div>
</template>

<script setup>
import RubberBandHeader from './RubberBandHeader.vue';
</script>

<style scoped></style>
