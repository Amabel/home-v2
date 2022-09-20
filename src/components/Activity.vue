<template>
  <div
    class="flex flex-col justify-center px-6 pt-12 md:p-12 w-full h-[calc(100%-4rem)] md:h-screen"
  >
    <RubberBandHeader text="Activity" />

    <div class="mt-8 md:mt-12 animate__animated animate__fadeInUp">
      <img
        src="https://n4f6tu2ms5.execute-api.ap-northeast-1.amazonaws.com/prod/api/stats?theme=tokyonight&hide_border=true&hide_bg=true"
      />
      <img
        class="mt-8"
        src="https://n4f6tu2ms5.execute-api.ap-northeast-1.amazonaws.com/prod/api/wakatime?theme=tokyonight&hide_border=true&hide_bg=true"
      />
    </div>
  </div>
</template>

<script setup>
import RubberBandHeader from './RubberBandHeader.vue';
</script>

<style></style>
