<template>
  <div class="flex flex-row">
    <div v-for="(charMap, index) in headerCharsMap" :key="index">
      <div
        class="header-chars text-4xl md:text-6xl font-black text-[color:var(--primary-color)]"
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
</template>

<script setup>
import { ref, reactive } from 'vue';

const props = defineProps({
  text: String,
});

// { char: string, animating: boolean }
const headerCharsMap = reactive(
  props.text.split('').map((c) => ({
    char: c,
    animating: false,
  })),
);
const headerCharRefs = ref(null);

const animateRubberBand = ($event, refIndex) => {
  const el = headerCharRefs.value[refIndex];
  headerCharsMap[refIndex].animating = true;

  setTimeout(() => {
    headerCharsMap[refIndex].animating = false;
  }, 1000);
};
</script>

<style></style>
