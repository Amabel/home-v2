<template>
  <div
    class="main inline-flex items-center w-full h-[calc(100%-4rem)] md:h-screen"
  >
    <div class="flex flex-col p-12">
      <RubberBandHeader text="Bio" />
      <div
        class="mt-4 md:mt-12 text-sm md:text-lg animate__animated animate__fadeInUp"
      >
        <div>
          Weibin Luo, a full-stack engineer with 4 years' experience in software
          development, including requirements analysis, architecture design,
          programming, operations and maintenance.
        </div>

        <div class="mt-2 md:mt-4">
          As a developer, he is expert in frontend and backend development,
          cloud architecture, system availability and code maintainability. As a
          team leader, he focues on project management, code review, knowledge
          sharing and pair programming.
        </div>

        <div class="mt-2 md:mt-4">
          Weibin Luo has a passion for cutting edge programming languages. In
          his free time, he likes to contribute to OSS and build his own
          projects.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RubberBandHeader from './RubberBandHeader.vue';
</script>

<style scoped></style>
