<template>
  <span class="animate">
    <span :data-hover="subText">{{ mainText }}</span>
  </span>
</template>

<script setup>
const props = defineProps({
  mainText: String,
  subText: String,
});
</script>

<style scoped>
.animate {
  perspective: 1000px;
}

.animate span {
  position: relative;
  display: inline-block;
  transition: transform 0.3s;
  transform-origin: 50% 0;
  transform-style: preserve-3d;
  font-weight: 800;
}

.animate span::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  height: 6px;
  background: rgb(195, 248, 255);
  background: linear-gradient(
    0deg,
    rgba(195, 248, 255, 0.5998774509803921) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 6px;
}

.animate span::before {
  content: attr(data-hover);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: 600;
  transition: color 0.3s;
  transform: rotateX(-90deg);
  transform-origin: 50% 0;
  text-align: right;
}

.animate span:hover,
.animate span:focus {
  transform: rotateX(90deg) translateY(-22px);
}

.animate span:hover::before,
.animate span:focus::before {
  color: var(--primary-color);
}
</style>
