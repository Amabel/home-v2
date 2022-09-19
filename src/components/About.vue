<template>
  <div
    class="main inline-flex items-center w-full h-[calc(100%-4rem)] md:h-scree"
    @mousemove="updateBgPosition"
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
import { ref, reactive } from 'vue';
import RubberBandHeader from './RubberBandHeader.vue';

// Reactive background image
const movementStrength = 20;
const height = movementStrength / window.innerHeight;
const width = movementStrength / window.innerWidth;
const bgPosition = reactive({
  x: '-50px',
  y: '0px',
});

// { char: string, animating: boolean }
const headerCharsMap = reactive(
  'About Amabel'.split('').map((c) => ({
    char: c,
    animating: false,
  })),
);
const headerCharRefs = ref(null);

const updateBgPosition = (event) => {
  // TODO: 移动端上关闭移动背景功能
  if (false) {
    return;
  }

  const pageX = event.pageX - window.innerWidth / 2;
  const pageY = event.pageY - window.innerHeight / 2;
  bgPosition.x = `${width * pageX * -1 - 50}px`;
  bgPosition.y = `${height * pageY * -1}px`;
};

const animateRubberBand = ($event, refIndex) => {
  const el = headerCharRefs.value[refIndex];
  headerCharsMap[refIndex].animating = true;

  setTimeout(() => {
    headerCharsMap[refIndex].animating = false;
  }, 1000);
};
</script>

<style scoped>
.main::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(../assets/bg-about.jpg);
  background-size: cover;
  background-position-x: v-bind('bgPosition.x');
  background-position-y: v-bind('bgPosition.y');
  filter: grayscale(72%) blur(0px);
  z-index: -1;
}
</style>
