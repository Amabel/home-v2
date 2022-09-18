<template>
  <div class="h-screen flex items-center">
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

// { char: string, animating: boolean }
const headerCharsMap = reactive(
  'About Amabel'.split('').map((c) => ({
    char: c,
    animating: false,
  })),
);
const headerCharRefs = ref(null);

const animateRubberBand = ($event, refIndex) => {
  // console.log(headerCharRefs.value[refIndex]);
  const el = headerCharRefs.value[refIndex];
  headerCharsMap[refIndex].animating = true;

  setTimeout(() => {
    headerCharsMap[refIndex].animating = false;
  }, 1000);
  console.log(el);
};
</script>

<style scoped>
.header {
  @apply text-6xl font-black text-[#C3F8FF];
}

.header-chars {
  @apply text-6xl font-black text-[#C3F8FF];
}
</style>
