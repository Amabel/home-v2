<template>
  <a href="https://github.com/Amabel" target="_blank">
    <img
      class="avatar md:m-6 w-12 md:w-36 h-12 md:h-36 rounded-full border-2 md:border-4 border-[#7fbcd2] cursor-pointer"
      src="https://avatars.githubusercontent.com/u/12688422?v=4"
      alt="avatar"
    />
  </a>
</template>

<script setup>
const props = defineProps({
  size: String,
});
</script>

<style scoped>
.avatar:hover {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(127, 188, 210, 0.7);
  }

  70% {
    box-shadow: 0 0 0 15px rgba(127, 188, 210, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(127, 188, 210, 0);
  }
}
</style>
