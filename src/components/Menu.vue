<template>
  <div class="pt-8 w-64 flex flex-col items-center">
    <Avatar />

    <nav class="mt-32">
      <div class="nav-item"><span class="link-text">About</span></div>
      <div class="nav-item"><span class="link-text">Skills</span></div>
      <div class="nav-item"><span class="link-text">Work</span></div>
      <div class="nav-item"><span class="link-text">Activity</span></div>
    </nav>
  </div>
</template>

<script setup>
import Avatar from './Avatar.vue';
</script>

<style scoped>
.nav-item {
  @apply p-4 text-lg font-extrabold cursor-pointer;
}

.link-text {
  position: relative;
  background: linear-gradient(to right, #c3f8ff, #c3f8ff 50%, #ffffffde 50%);
  background-size: 200% 100%;
  background-position: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: background-position 0.375s ease;
  text-decoration: none;
}

.link-text:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 0px;
  background-color: #c3f8ff;
  bottom: 0px;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.link-text:hover {
  background-position: 0 100%;
}

.link-text:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
</style>
