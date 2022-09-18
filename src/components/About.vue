<template>
  <div class="main h-screen flex items-center" @mousemove="updateBgPosition">
    <div class="flex flex-col p-12">
      <div class="flex flex-row">
        <div v-for="(charMap, index) in headerCharsMap" :key="index">
          <div
            class="header-chars"
            :class="{
              'animate__animated animate__rubberBand': charMap.animating,
            }"
            ref="headerCharRefs"
            @mouseenter="animateRubberBand($event, index)"
          >
            {{ charMap.char === ' ' ? '&nbsp;' : charMap.char }}
          </div>
        </div>
      </div>
      <p class="pt-4 animate__animated animate__fadeInUp">
        I'm a fullstack engineer.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

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
  filter: grayscale(72%) blur(2px);
  z-index: -1;
}
.header {
  @apply text-6xl font-black text-[#C3F8FF];
}

.header-chars {
  @apply text-6xl font-black text-[#C3F8FF];
}
</style>
