<template>
  <div
    class="main inline-flex justify-center items-center w-full h-[calc(100%-4rem)] md:h-screen"
  >
    <div class="flex">
      <div class="flex flex-col px-12 pt-12 md:pt-0 max-w-6xl">
        <RubberBandHeader text="Bio" />
        <div
          class="mt-4 md:mt-12 text-sm md:text-lg max-w-2xl animate__animated animate__fadeInUp"
        >
          <div>
            <FlipText main-text="Weibin Luo" sub-text="Amabel" /> is a
            full-stack engineer with four years of experience in software
            development, including requirements analysis, architecture design,
            programming, operations, and maintenance.
          </div>

          <div class="mt-2 md:mt-4">
            As a developer, he is good at frontend and backend development,
            cloud architecture, system availability, and code maintainability.
            As a team leader, he focuses on project management, code review,
            knowledge sharing, and pair programming.
          </div>

          <div class="mt-2 md:mt-4">
            <FlipText main-text="Weibin Luo" sub-text="Amabel" /> has a passion
            for cutting-edge programming languages. He likes to contribute to
            OSS and build his projects in his free time.
          </div>
        </div>
      </div>
      <div class="placeholder hidden lg:block w-[480px] h-[480px]"></div>
    </div>
  </div>
</template>

<script setup>
import RubberBandHeader from './RubberBandHeader.vue';
import FlipText from './FlipText.vue';
</script>

<style scoped></style>
