<template>
  <div class="bg" v-on="canHover ? { mousemove: updateBgPosition } : {}">
    <Menu />
    <TopMenu />

    <div
      class="flex flex-col md:ml-64 mt-16 md:mt-0 w-full md:w-[calc(100%-16rem)]"
    >
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          <Bio />
        </div>
        <div class="section">
          <Skills />
        </div>
        <div class="section">
          <MyTimeline />
        </div>
        <div class="section">
          <Activity />
        </div>
      </full-page>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import Bio from './components/Bio.vue';
import Menu from './components/Menu.vue';
import Skills from './components/Skills.vue';
import MyTimeline from './components/MyTimeline.vue';
import Activity from './components/Activity.vue';
import TopMenu from './components/TopMenu.vue';
import { darkMode } from './store';

const options = {
  licenseKey: 'YOUR_KEY_HEERE',
  menu: '#menu',
  anchors: ['bio', 'skills', 'timeline', 'activity'],
};

// Reactive background image
const movementStrength = 20;
const height = movementStrength / window.innerHeight;
const width = movementStrength / window.innerWidth;
const bgPosition = reactive({
  x: '-50px',
  y: '0px',
});

// Disable background image movement on non-hover devices
const canHover = window.matchMedia('(any-hover:hover)').matches;
const updateBgPosition = (event) => {
  const pageX = event.pageX - window.innerWidth / 2;
  const pageY = event.pageY - window.innerHeight / 2;
  bgPosition.x = `${width * pageX * -1 - 50}px`;
  bgPosition.y = `${height * pageY * -1 - 0}px`;
};

// Dark mode
const bgFilter = ref(
  darkMode.value ? 'grayscale(78%) brightness(50%)' : 'none',
);
watch(darkMode, (dark) => {
  bgFilter.value = dark ? 'grayscale(78%) brightness(50%)' : 'none';
});
</script>

<style scoped>
.bg::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(./assets/bg-about.jpg);
  background-size: 105%;
  background-position-x: v-bind('bgPosition.x');
  background-position-y: v-bind('bgPosition.y');
  filter: v-bind(bgFilter);
  transition: filter 2s;
  z-index: -1;
}
</style>
