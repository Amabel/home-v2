<template>
  <div
    class="flex justify-center items-center w-full h-[calc(100%-4rem)] md:h-screen"
  >
    <div class="flex">
      <div class="flex flex-col p-12 max-w-6xl">
        <RubberBandHeader text="Activity" />

        <div class="mt-8 md:mt-12 animate__animated animate__fadeInUp">
          <img
            src="https://n4f6tu2ms5.execute-api.ap-northeast-1.amazonaws.com/prod/api/stats?theme=tokyonight&hide_border=true&hide_bg=true"
            alt="Amabel's GitHub Stats"
          />
          <img
            class="mt-8"
            src="https://n4f6tu2ms5.execute-api.ap-northeast-1.amazonaws.com/prod/api/wakatime?theme=tokyonight&hide_border=true&hide_bg=true"
            alt="Amabel's Wakatime Stats"
          />
        </div>
      </div>
      <div class="placeholder hidden lg:block w-[657px] h-[480px]"></div>
    </div>
  </div>
</template>

<script setup>
import RubberBandHeader from './RubberBandHeader.vue';
</script>

<style></style>
